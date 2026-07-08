/**
 * render/staff.ts — VexFlow 기반 오선보(+타브) 렌더러 (notation-renderer, technical_spec §5.4).
 *
 * 계약:
 *  - 입력: Score (type=tab, score.tab 有) + mode. 출력: SVG 문자열.
 *  - `meta.notation` 이 "staff" | "staff+tab" | "rhythm" 일 때 render/index.ts 가 이 함수로 라우팅.
 *  - **핵심**: 같은 tab 데이터(string+fret+duration) 하나에서 오선보와 타브를 **박자 공유**로 함께 그린다.
 *    음정 = string+fret+tuning 으로 결정 계산(할루시네이션 0), 박자 = duration.
 *  - 빌드타임(Node)에서 jsdom + VexFlow SVG 백엔드로 SVG 문자열 생성 → **클라이언트 JS 0**.
 *  - 색: role→CSS 변수(color_legend.md), 기본 검정은 currentColor 로 치환(다크모드 자동).
 *
 * VexFlow 4 채택 사유(기술 결정):
 *  - v4 는 음악 글리프를 **baked 아웃라인 `<path>`** 로 그린다(폰트 불필요·metrics 내장) → 서버(jsdom)
 *    렌더에서 음표/스템/음자리표 위치가 정확하고, 브라우저에 음악 폰트가 없어도 tofu(□) 가 없다.
 *    (v5 는 `<text>`+웹폰트 방식이라 jsdom 에 canvas/폰트 metrics 가 없어 스템 어긋남·글리프 깨짐 발생.)
 *  - 프렛 숫자만 시스템 폰트 `<text>` 로 그리며, 그 폭 측정에 `<text>.getBBox()` 를 쓰므로 jsdom 에 근사 스텁을 심는다.
 *
 * 레이아웃:
 *  - 한 줄(system)에 **2마디**씩 배치하고 세로로 쌓는다(가독성). 마디가 많으면 여러 줄로 자동 줄바꿈.
 *  - 8·16분음표 빔은 **박(beat) 단위로 끊는다**(16분음표는 4개씩, 8분음표는 2개씩) — 한 마디 통짜 빔 방지.
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
/** 개방현 MIDI(표준 EADGBE). 1=고음e(E4) … 6=저음E(E2). concert pitch(실제 울리는 음). */
const OPEN_MIDI: Record<number, number> = { 1: 64, 2: 59, 3: 55, 4: 50, 5: 45, 6: 40 };
/**
 * 기타는 이조악기 — 표준 표기는 **treble-8vb(기타 클레프)**: 실제음보다 한 옥타브 위로 적고
 * 클레프 아래 작은 "8"을 단다. OPEN_MIDI(실제음)는 그대로 두고, 오선보 "표기 옥타브"만 +1 한다.
 * (실제음 계산·타브는 불변. 클레프 8vb 주석과 반드시 한 세트로 적용해야 음정이 정확하다.)
 */
const WRITTEN_OCTAVE_SHIFT = 1;
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
/** duration → 16분음표 단위(정수). 박(beat, 4분음표)=4 → 빔을 박 단위로 끊는 데 사용. */
const DUR_INT: Record<string, number> = { whole: 16, half: 8, quarter: 4, eighth: 2, sixteenth: 1 };
const BEAT_INT = 4; // 4분음표 = 1박(분모 4 가정)

/* ---- 레이아웃 상수 ---------------------------------------------------- */
const MEASURES_PER_ROW = 2; // 한 줄에 2마디
const MARGIN_X = 12;
const MARGIN_TOP = 14;
const CLEF_W = 42; // 음자리표 폭
const TS_W = 26; // 박자표 폭(정렬용으로 전 줄 예약)
// 마디 폭은 음표 수에 비례(빽빽한 마디는 넓게, 성긴 마디는 좁게 → 오버플로 방지·자연스러운 조판).
const PER_NOTE = 28; // 음표(쉼표 포함) 1개당 폭
const MIN_MW = 150; // 마디 최소 폭
const MAX_MW = 480; // 마디 최대 폭(16분음표 16개 등 최대 밀도)
// 세로 레이아웃은 음역대에 따라 적응(저음 렛저라인이 타브와 겹치지 않게, 고음역은 컴팩트하게).
// ★ 기준선은 오선보에 실제로 "그려지는" 표기 음(written MIDI) 기준이다. 음표도 표기 옥타브(concert+SHIFT)로
//    비교해야 렛저라인 여백이 맞다. (WRITTEN_OCTAVE_SHIFT 를 바꾸면 아래 두 상수는 그대로 두고 노트 비교만 shift.)
const PX_PER_SEMI = 2.9; // 반음당 세로 픽셀(오선 간격 근사)
const TREBLE_TOP_LINE = 64; // 오선보 맨 아래 선 = 표기 E4(MIDI 64)
const TREBLE_HI_LINE = 77; // 오선보 맨 위 선 = 표기 F5(MIDI 77)

/* ---- jsdom 싱글턴(+getBBox 텍스트측정 스텁) -------------------------- */
let _doc: Document | null = null;
function getDoc(): Document {
  if (_doc) return _doc;
  const dom = new JSDOM('<!DOCTYPE html><body><div id="vf"></div></body>');
  const win = dom.window as unknown as {
    document: Document;
    SVGElement: { prototype: Record<string, unknown> };
  };
  // VexFlow 4 SVGContext.measureText 는 <text>.getBBox() 로 텍스트 폭을 잰다.
  // (음악 글리프는 baked path 라 무관 — 오직 프렛 숫자 등 짧은 텍스트에만 영향.)
  // jsdom 엔 getBBox 가 없어 근사 스텁을 심는다(길이×폰트크기 비례).
  win.SVGElement.prototype.getBBox = function getBBoxStub(this: {
    textContent?: string;
    getAttribute?: (n: string) => string | null;
  }) {
    const len = (this.textContent || '').length;
    const fs = parseFloat((this.getAttribute && this.getAttribute('font-size')) || '10') || 10;
    return { x: 0, y: 0, width: len * fs * 0.55, height: fs * 1.2 };
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

/**
 * string+fret → VexFlow key('f#/4') + 임시표('#'|'b'|null).
 * midi = 실제음(concert). 표기 옥타브만 WRITTEN_OCTAVE_SHIFT 만큼 올려 기타 8vb 표기로 그린다
 * (실제음/타브는 불변). 클레프의 '8vb' 주석과 함께 쓰여야 음정이 정확하다.
 */
function pitchOf(str: number, fret: number, flats: boolean): { key: string; acc: string | null } {
  const open = OPEN_MIDI[str] ?? 40;
  const midi = open + fret;
  const names = flats ? FLAT : SHARP;
  const pc = ((midi % 12) + 12) % 12;
  const name = names[pc]!;
  const concertOctave = Math.floor(midi / 12) - 1;
  const writtenOctave = concertOctave + WRITTEN_OCTAVE_SHIFT;
  const acc = name.includes('#') ? '#' : name.includes('b') ? 'b' : null;
  return { key: `${name}/${writtenOctave}`, acc };
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

/** 루트 svg 손질: 고정 크기 제거·viewBox 지정·class/role/aria·검정→currentColor. */
function postProcess(svg: string, title: string, w: number, h: number): string {
  let out = svg.replace(/^<svg([^>]*)>/, (_m, attrs: string) => {
    const a = attrs
      .replace(/\swidth="[^"]*"/, '')
      .replace(/\sheight="[^"]*"/, '')
      .replace(/\sviewBox="[^"]*"/, '');
    return `<svg${a} viewBox="0 0 ${w} ${h}" class="staffsvg" role="img" aria-label="${esc(title)}">`;
  });
  out = out.replace(/(fill|stroke)="(?:black|#000000|#000)"/g, '$1="currentColor"');
  return out;
}

/* ---- 한 마디의 tickable 묶음 ----------------------------------------- */
interface BuiltMeasure {
  stave: StaveNote[];
  tab: (TabNote | GhostNote)[];
  beams: StaveNote[][];
}

function buildMeasure(m: Measure, flats: boolean): BuiltMeasure {
  const stave: StaveNote[] = [];
  const tab: (TabNote | GhostNote)[] = [];
  const beams: StaveNote[][] = [];
  let curBeam: StaveNote[] = [];
  let pos = 0; // 마디 내 위치(16분 단위)
  const flush = () => {
    if (curBeam.length > 1) beams.push(curBeam);
    curBeam = [];
  };

  const notes: TabNoteData[] = Array.isArray(m.notes) ? m.notes : [];
  for (const n of notes) {
    const durCode = DUR[n.duration] ?? 'q';
    const unit = DUR_INT[n.duration] ?? 4;

    if (n.rest) {
      flush();
      stave.push(new StaveNote({ keys: ['b/4'], duration: `${durCode}r` }));
      tab.push(new GhostNote(durCode));
      pos += unit;
      if (pos % BEAT_INT === 0) flush();
      continue;
    }

    const s = n.string;
    const fret = n.fret;
    if (typeof s !== 'number' || s < 1 || s > 6 || typeof fret !== 'number') continue;

    const { key, acc } = pitchOf(s, fret, flats);
    const dotted = !!n.dotted;
    const sNote = new StaveNote({ keys: [key], duration: durCode + (dotted ? 'd' : '') });
    if (acc) sNote.addModifier(new Accidental(acc), 0);
    if (dotted) Dot.buildAndAttach([sNote], { all: true });

    const tNote = new TabNote({ positions: [{ str: s, fret }], duration: durCode });

    const col = roleColor(n) ?? 'currentColor';
    sNote.setStyle({ fillStyle: col, strokeStyle: col });
    tNote.setStyle({ fillStyle: col, strokeStyle: col });

    stave.push(sNote);
    tab.push(tNote);

    // 8·16분음표만 빔 대상. 박(beat) 경계에서 끊는다.
    if (n.duration === 'eighth' || n.duration === 'sixteenth') curBeam.push(sNote);
    else flush();
    pos += unit;
    if (pos % BEAT_INT === 0) flush();
  }
  flush();
  return { stave, tab, beams };
}

/* ---- 본체 ------------------------------------------------------------- */
export function renderStaff(score: Score, mode: StaffMode): string {
  const title = score.meta?.title ?? 'staff notation';
  const withTab = mode === 'staff+tab' || mode === 'rhythm';
  const tabData = score.tab;

  const emptySvg = (w = 480, h = 60) =>
    `<svg viewBox="0 0 ${w} ${h}" class="staffsvg" role="img" aria-label="${esc(title)}"></svg>`;

  if (!tabData || !Array.isArray(tabData.measures)) return emptySvg();

  const flats = preferFlats(score.meta?.key);
  const [numBeats, beatValue] = (tabData.timeSignature ?? '4/4')
    .split('/')
    .map((x) => parseInt(x, 10));

  const doc = getDoc();
  const prevDoc = (globalThis as { document?: Document }).document;
  (globalThis as { document?: Document }).document = doc;
  try {
    // 마디별 tickable 생성 → 전부 비면 빈 SVG
    const built = (tabData.measures as Measure[]).map((m) => buildMeasure(m, flats));
    if (built.every((b) => b.stave.length === 0)) return emptySvg();

    // 2마디씩 줄(row)로 묶기
    const rows: BuiltMeasure[][] = [];
    for (let i = 0; i < built.length; i += MEASURES_PER_ROW) {
      rows.push(built.slice(i, i + MEASURES_PER_ROW));
    }

    // 음역대 기반 적응형 세로 오프셋: 오선보에 "그려지는" 표기 음역(concert+SHIFT 옥타브)을 기준으로
    // 저음 아래(렛저라인)만큼 타브를 내리고, 고음 위만큼 상단 여백을 확보한다.
    let minMidi = 999;
    let maxMidi = 0;
    for (const m of tabData.measures as Measure[]) {
      for (const n of Array.isArray(m.notes) ? m.notes : []) {
        if (n.rest || typeof n.string !== 'number' || typeof n.fret !== 'number') continue;
        const md = (OPEN_MIDI[n.string] ?? 40) + n.fret;
        if (md < minMidi) minMidi = md;
        if (md > maxMidi) maxMidi = md;
      }
    }
    if (minMidi === 999) {
      minMidi = TREBLE_TOP_LINE;
      maxMidi = TREBLE_TOP_LINE;
    }
    // concert MIDI → 표기(written) MIDI: pitchOf 와 동일하게 옥타브를 올려(반음 12×SHIFT) 비교.
    const writtenMin = minMidi + 12 * WRITTEN_OCTAVE_SHIFT;
    const writtenMax = maxMidi + 12 * WRITTEN_OCTAVE_SHIFT;
    const belowPx = Math.max(0, TREBLE_TOP_LINE - writtenMin) * PX_PER_SEMI; // 저음 렛저라인 여유
    const abovePx = Math.max(0, writtenMax - TREBLE_HI_LINE) * PX_PER_SEMI; // 고음 렛저라인 여유
    const trebleDy = Math.round(16 + abovePx);
    const tabDy = Math.round(trebleDy + 80 + belowPx + 16);
    const sysH = withTab ? tabDy + 150 : Math.round(trebleDy + 80 + belowPx + 22);

    // 마디 폭 = 음표 수 비례(clamp). 줄 폭 = 마디 폭 합. 전체 폭 = 가장 넓은 줄.
    const measureArea = (mb: BuiltMeasure) =>
      Math.max(MIN_MW, Math.min(MAX_MW, mb.stave.length * PER_NOTE));
    const rowNoteArea = rows.map((r) => r.reduce((a, mb) => a + measureArea(mb), 0));
    const totalW = Math.max(...rowNoteArea.map((w) => CLEF_W + TS_W + w)) + 2 * MARGIN_X;
    const totalH = MARGIN_TOP + rows.length * sysH + 12;

    const host = doc.getElementById('vf')!;
    host.innerHTML = '';
    const renderer = new Renderer(host as unknown as HTMLDivElement, Renderer.Backends.SVG);
    renderer.resize(totalW, totalH);
    const ctx = renderer.getContext();

    rows.forEach((rowMeasures, ri) => {
      const sysTop = MARGIN_TOP + ri * sysH;
      const x = MARGIN_X;
      const mCount = rowMeasures.length;
      const noteAreaW = rowNoteArea[ri] ?? MIN_MW;
      const thisStaveW = CLEF_W + TS_W + noteAreaW;

      const stave = new Stave(x, sysTop + trebleDy, thisStaveW);
      // 기타 표기: treble-8vb(클레프 아래 작은 "8"). 음표는 pitchOf 에서 +1 옥타브로 표기 →
      // 8vb 주석과 합쳐져 "다른 기타 악보와 위치 정렬 + 실제음 정확"이 성립한다.
      stave.addClef('treble', 'default', '8vb');
      if (tabData.timeSignature) stave.addTimeSignature(tabData.timeSignature);

      let tabstave: TabStave | null = null;
      if (withTab) {
        tabstave = new TabStave(x, sysTop + tabDy, thisStaveW);
        tabstave.addClef('tab');
        // 오선보/타브 음표 x 정렬: 타브의 노트 시작 x 를 오선보와 맞춘다.
        tabstave.setNoteStartX(stave.getNoteStartX());
      }
      stave.setContext(ctx).draw();
      if (tabstave) tabstave.setContext(ctx).draw();

      // 줄의 voice: 마디들을 BarNote 로 이어 붙임
      const sTick: (StaveNote | BarNote)[] = [];
      const tTick: (TabNote | GhostNote | BarNote)[] = [];
      const beams: StaveNote[][] = [];
      rowMeasures.forEach((mb, mi) => {
        if (mi > 0) {
          sTick.push(new BarNote());
          tTick.push(new BarNote());
        }
        sTick.push(...mb.stave);
        tTick.push(...mb.tab);
        beams.push(...mb.beams);
      });

      const vStaff = new Voice({ num_beats: (numBeats || 4) * mCount, beat_value: beatValue || 4 })
        .setStrict(false)
        .addTickables(sTick);
      const voices: Voice[] = [vStaff];
      let vTab: Voice | null = null;
      if (withTab) {
        vTab = new Voice({ num_beats: (numBeats || 4) * mCount, beat_value: beatValue || 4 })
          .setStrict(false)
          .addTickables(tTick);
        voices.push(vTab);
      }

      const fmt = new Formatter();
      voices.forEach((v) => fmt.joinVoices([v]));
      fmt.format(voices, noteAreaW);

      vStaff.draw(ctx, stave);
      if (vTab && tabstave) vTab.draw(ctx, tabstave);
      for (const g of beams) new Beam(g).setContext(ctx).draw();
      if (withTab && tabstave) {
        new StaveConnector(stave, tabstave).setType('brace').setContext(ctx).draw();
        new StaveConnector(stave, tabstave).setType('singleLeft').setContext(ctx).draw();
      }
    });

    const svg = host.innerHTML;
    return postProcess(svg, title, totalW, totalH);
  } finally {
    if (prevDoc === undefined) delete (globalThis as { document?: Document }).document;
    else (globalThis as { document?: Document }).document = prevDoc;
  }
}
