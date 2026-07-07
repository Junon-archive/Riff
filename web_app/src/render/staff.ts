/**
 * render/staff.ts — VexFlow 기반 오선보(+타브) 렌더러 (notation-renderer, technical_spec §5.4).
 *
 * 계약:
 *  - 입력: Score (type=tab, score.tab 有) + mode. 출력: SVG 문자열.
 *  - `meta.notation` 이 "staff" | "staff+tab" | "rhythm" 일 때 render/index.ts 가 이 함수로 라우팅.
 *  - **핵심**: 같은 tab 데이터(string+fret+duration) 하나에서 오선보와 타브를 **박자 공유**로 함께 그린다.
 *    음정 = string+fret+tuning 으로 결정 계산(할루시네이션 0), 박자 = duration.
 *  - 빌드타임(Node)에서 jsdom + VexFlow SVG 백엔드로 SVG 문자열 생성 → **클라이언트 JS 0**(fretboard/tab 과 동일 계약).
 *  - 색: role→CSS 변수(color_legend.md), 기본 검정은 currentColor 로 치환(다크모드 자동).
 *  - 루트 <svg class="staffsvg" viewBox=... role="img" aria-label=...>, 고정 width/height 제거(반응형).
 *
 * 한계(v1): 산문 label·technique(H/P/sl/P.M.) 오버레이는 미표기(타브 SVG 렌더러가 담당).
 *           오선보는 음정+박자 전달에 집중한다.
 */
import { JSDOM } from 'jsdom';
import {
  Renderer,
  Stave,
  TabStave,
  StaveNote,
  TabNote,
  Voice,
  Formatter,
  StaveConnector,
  Accidental,
  Beam,
  Dot,
  BarNote,
  GhostNote,
} from 'vexflow';
import type { Score, TabNote as TabNoteData, Measure, NoteRole } from '../types/score';

export type StaffMode = 'staff' | 'staff+tab' | 'rhythm';

/* ---- 기하/음악 상수 --------------------------------------------------- */
/** 개방현 MIDI(표준 EADGBE). 1=고음e(E4) … 6=저음E(E2). */
const OPEN_MIDI: Record<number, number> = { 1: 64, 2: 59, 3: 55, 4: 50, 5: 45, 6: 40 };
const SHARP = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
const FLAT = ['c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'];
/** duration → VexFlow 코드 */
const DUR: Record<string, string> = {
  whole: 'w',
  half: 'h',
  quarter: 'q',
  eighth: '8',
  sixteenth: '16',
};
/** duration → 상대 폭 단위(8분음표=1) */
const DUR_UNIT: Record<string, number> = { whole: 8, half: 4, quarter: 2, eighth: 1, sixteenth: 0.5 };

/* ---- jsdom 싱글턴(+canvas 텍스트측정 스텁) ---------------------------- */
let _doc: Document | null = null;
function getDoc(): Document {
  if (_doc) return _doc;
  const dom = new JSDOM('<!DOCTYPE html><body><div id="vf"></div></body>');
  const win = dom.window as unknown as {
    document: Document;
    HTMLCanvasElement: { prototype: { getContext: unknown } };
  };
  // VexFlow 5 는 텍스트 폭 측정에 canvas 를 쓴다. jsdom 엔 canvas 가 없어 근사 2D 컨텍스트를 심는다
  // (네이티브 canvas 의존 회피 — CF Pages 빌드에서 네이티브 빌드 불필요).
  win.HTMLCanvasElement.prototype.getContext = function getContextStub() {
    return {
      font: '',
      measureText: (t: string) => ({ width: (t ? String(t).length : 0) * 6 }),
      fillText() {},
      strokeText() {},
      save() {},
      restore() {},
      beginPath() {},
      moveTo() {},
      lineTo() {},
      stroke() {},
      fill() {},
      scale() {},
      translate() {},
      rotate() {},
      clearRect() {},
    };
  };
  _doc = win.document;
  return _doc;
}

/* ---- 유틸 ------------------------------------------------------------- */
function esc(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function preferFlats(key?: string): boolean {
  if (!key) return false;
  const k = key.replace(/\s+/g, '');
  return /^(F|Bb|Eb|Ab|Db|Gb|Cb)/.test(k) || /b/.test(k);
}

/** string+fret → VexFlow key('f#/4') + 임시표('#'|'b'|null) */
function pitchOf(str: number, fret: number, flats: boolean): { key: string; acc: string | null } {
  const open = OPEN_MIDI[str] ?? 40;
  const midi = open + fret;
  const names = flats ? FLAT : SHARP;
  const pc = ((midi % 12) + 12) % 12;
  const name = names[pc]!;
  const octave = Math.floor(midi / 12) - 1;
  const acc = name.includes('#') ? '#' : name.includes('b') ? 'b' : null;
  return { key: `${name}/${octave}`, acc };
}

/** role → 강조색(tab.ts accentColor 와 동일 팔레트). 없으면 null(=currentColor). */
function roleColor(n: TabNoteData): string | null {
  const role: NoteRole | undefined = n.role;
  if (role === 'root' || role === 'chord_tone') return 'var(--primary, #3182F6)';
  if (role === 'target' || n.target) return 'var(--green-500, #12B886)';
  if (role === 'color') return 'var(--yellow-500, #FFC043)';
  if (role === 'blue_note') return 'var(--rn-blue-note, #7048E8)';
  if (role === 'scale' || role === 'passing') return null;
  if (n.highlight) return 'var(--green-500, #12B886)';
  return null;
}

/** 루트 svg 손질: class/role/aria 추가·고정 크기 제거·검정→currentColor(테마). */
function postProcess(svg: string, title: string): string {
  let out = svg.replace(/^<svg([^>]*)>/, (_m, attrs: string) => {
    const a = attrs.replace(/\swidth="[^"]*"/, '').replace(/\sheight="[^"]*"/, '');
    return `<svg${a} class="staffsvg" role="img" aria-label="${esc(title)}">`;
  });
  out = out.replace(/(fill|stroke)="(?:black|#000000|#000)"/g, '$1="currentColor"');
  return out;
}

/* ---- 본체 ------------------------------------------------------------- */
export function renderStaff(score: Score, mode: StaffMode): string {
  const title = score.meta?.title ?? 'staff notation';
  const withTab = mode === 'staff+tab' || mode === 'rhythm';
  const tabData = score.tab;

  if (!tabData || !Array.isArray(tabData.measures)) {
    return `<svg class="staffsvg" viewBox="0 0 480 60" role="img" aria-label="${esc(title)}"></svg>`;
  }

  const flats = preferFlats(score.meta?.key);
  const [numBeats, beatValue] = (tabData.timeSignature ?? '4/4')
    .split('/')
    .map((x) => parseInt(x, 10));

  // VexFlow 는 음표/임시표/점 생성 시점에도 전역 document 를 참조하므로(폰트 파싱 등),
  // 노트 구성 전에 미리 jsdom document 를 전역에 세팅하고, 함수 끝에서 원복한다.
  const doc = getDoc();
  const prevDoc = (globalThis as { document?: Document }).document;
  (globalThis as { document?: Document }).document = doc;
  try {

  // 마디별 tickable 구성(마디 사이 BarNote 삽입 — 두 보이스 정렬 유지)
  const staffTickables: (StaveNote | BarNote)[] = [];
  const tabTickables: (TabNote | GhostNote | BarNote)[] = [];
  const beamGroups: StaveNote[][] = [];
  let curBeamGroup: StaveNote[] = [];
  let unitSum = 0;

  const flushBeam = () => {
    if (curBeamGroup.length > 1) beamGroups.push(curBeamGroup);
    curBeamGroup = [];
  };

  (tabData.measures as Measure[]).forEach((m, mi) => {
    if (mi > 0) {
      flushBeam();
      staffTickables.push(new BarNote());
      tabTickables.push(new BarNote());
    }
    const notes: TabNoteData[] = Array.isArray(m.notes) ? m.notes : [];
    for (const n of notes) {
      const durCode = DUR[n.duration] ?? 'q';
      unitSum += DUR_UNIT[n.duration] ?? 1;

      if (n.rest) {
        flushBeam();
        staffTickables.push(new StaveNote({ keys: ['b/4'], duration: `${durCode}r` }));
        tabTickables.push(new GhostNote(durCode));
        continue;
      }

      const s = n.string;
      const fret = n.fret;
      if (typeof s !== 'number' || s < 1 || s > 6 || typeof fret !== 'number') {
        continue;
      }

      const { key, acc } = pitchOf(s, fret, flats);
      const dotted = !!n.dotted;
      const sNote = new StaveNote({ keys: [key], duration: durCode + (dotted ? 'd' : '') });
      if (acc) sNote.addModifier(new Accidental(acc), 0);
      if (dotted) Dot.buildAndAttach([sNote], { all: true });

      const tNote = new TabNote({ positions: [{ str: s, fret }], duration: durCode });

      const col = roleColor(n) ?? 'currentColor';
      sNote.setStyle({ fillStyle: col, strokeStyle: col });
      tNote.setStyle({ fillStyle: col, strokeStyle: col });

      staffTickables.push(sNote);
      tabTickables.push(tNote);

      // 8·16분음표만 연속 빔 그룹핑(마디 넘어가면 flush)
      if (n.duration === 'eighth' || n.duration === 'sixteenth') {
        curBeamGroup.push(sNote);
      } else {
        flushBeam();
      }
    }
  });
  flushBeam();

  // 음표가 하나도 없으면 VexFlow 포매터가 던지므로 빈 SVG 로 안전 반환.
  if (staffTickables.length === 0) {
    return `<svg class="staffsvg" viewBox="0 0 480 60" role="img" aria-label="${esc(title)}"></svg>`;
  }

  /* ---- 레이아웃 ---- */
  const formatWidth = Math.max(240, Math.round(unitSum * 46));
  const staveW = formatWidth + 90;
  const x = 10;
  const staffY = 18;
  const tabY = withTab ? 120 : staffY;
  const height = withTab ? 220 : 130;

    const host = doc.getElementById('vf')!;
    host.innerHTML = '';
    const renderer = new Renderer(host as unknown as HTMLDivElement, Renderer.Backends.SVG);
    renderer.resize(staveW + 20, height);
    const ctx = renderer.getContext();

    const stave = new Stave(x, staffY, staveW);
    stave.addClef('treble');
    if (tabData.timeSignature) stave.addTimeSignature(tabData.timeSignature);
    stave.setContext(ctx).draw();

    let tabstave: TabStave | null = null;
    if (withTab) {
      tabstave = new TabStave(x, tabY, staveW);
      tabstave.addClef('tab');
      tabstave.setContext(ctx).draw();
    }

    const vStaff = new Voice({ numBeats: numBeats || 4, beatValue: beatValue || 4 })
      .setStrict(false)
      .addTickables(staffTickables);
    const voices: Voice[] = [vStaff];
    let vTab: Voice | null = null;
    if (withTab) {
      vTab = new Voice({ numBeats: numBeats || 4, beatValue: beatValue || 4 })
        .setStrict(false)
        .addTickables(tabTickables);
      voices.push(vTab);
    }

    const fmt = new Formatter();
    voices.forEach((v) => fmt.joinVoices([v]));
    fmt.format(voices, formatWidth);

    vStaff.draw(ctx, stave);
    if (vTab && tabstave) vTab.draw(ctx, tabstave);

    for (const g of beamGroups) {
      new Beam(g).setContext(ctx).draw();
    }

    if (withTab && tabstave) {
      new StaveConnector(stave, tabstave).setType('brace').setContext(ctx).draw();
      new StaveConnector(stave, tabstave).setType('singleLeft').setContext(ctx).draw();
    }

    const svg = host.innerHTML;
    return postProcess(svg, title);
  } finally {
    if (prevDoc === undefined) delete (globalThis as { document?: Document }).document;
    else (globalThis as { document?: Document }).document = prevDoc;
  }
}
