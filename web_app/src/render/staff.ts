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
 *  - 표기 옥타브 = treble-8vb(WRITTEN_OCTAVE_SHIFT). stem 방향·빔(박 단위)은 표준 조판 규칙.
 *  - technique: dead_note→X 노트헤드/타브 "X"(임시표 없음), palm_mute→"P.M." 주석. (그 외는 자체 타브 SVG 담당)
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
  Stem,
  Annotation,
  Stroke,
  ChordSymbol,
  StaveModifierPosition,
} from 'vexflow';
import type { Score, TabNote as TabNoteData, Measure, NoteRole } from '../types/score';

export type StaffMode = 'staff' | 'staff+tab' | 'rhythm';

/* ---- 기하/음악 상수 --------------------------------------------------- */
/** 개방현 MIDI(표준 EADGBE). 1=고음e(E4) … 6=저음E(E2). concert pitch(실제 울리는 음). meta.tuning 없거나 형식 불일치 시 폴백. */
const OPEN_MIDI: Record<number, number> = { 1: 64, 2: 59, 3: 55, 4: 50, 5: 45, 6: 40 };
/** 음이름(옥타브 없음) → 피치클래스(0=C … 11=B). meta.tuning 해석용. */
const NOTE_PC: Record<string, number> = {
  C: 0, 'C#': 1, Db: 1, D: 2, 'D#': 3, Eb: 3, E: 4, F: 5,
  'F#': 6, Gb: 6, G: 7, 'G#': 8, Ab: 8, A: 9, 'A#': 10, Bb: 10, B: 11,
};
/**
 * meta.tuning(현 이름 배열, index0=최저현 … 표준 EADGBE)을 읽어 "현 번호 → 개방현 실제음 MIDI"
 * 함수를 만든다. tuning 이 없거나 stringCount 와 길이가 안 맞으면 표준(OPEN_MIDI)으로 폴백
 * → 기존 6현 표준 데이터는 결과 MIDI **불변**(따라서 렌더 SVG 바이트 불변).
 * 음이름만 있고 옥타브가 없으므로 각 현의 표준 개방음(anchor)에 **±6반음 이내 최근접 옥타브**로
 * 해석한다(Drop-D=D2, DADGAD 등 비표준도 자연스럽게 맞음). ★03② 튜닝 무시 잠재 버그 수정.
 */
function resolveOpenMidi(meta?: { tuning?: unknown; stringCount?: number }): (str: number) => number {
  const std = (str: number): number => OPEN_MIDI[str] ?? 40;
  const tuning = meta?.tuning;
  const n = meta?.stringCount ?? 6;
  if (!Array.isArray(tuning) || tuning.length !== n) return std;
  return (str: number): number => {
    const raw = tuning[n - str]; // 현 번호 str(1=최고음) → tuning index (n-str)
    if (typeof raw !== 'string') return std(str);
    const pc = NOTE_PC[raw.trim()];
    if (pc == null) return std(str);
    const anchor = std(str);
    let midi = anchor - (((anchor % 12) - pc + 12) % 12); // anchor 이하 같은 pc
    if (anchor - midi > 6) midi += 12; // ±6 이내 최근접 옥타브
    return midi;
  };
}
/**
 * 기타는 이조악기 — 표준 표기는 **treble-8vb(기타 클레프)**: 실제음보다 한 옥타브 위로 적고
 * 클레프 아래 작은 "8"을 단다. OPEN_MIDI(실제음)는 그대로 두고, 오선보 "표기 옥타브"만 +1 한다.
 * (실제음 계산·타브는 불변. 클레프 8vb 주석과 반드시 한 세트로 적용해야 음정이 정확하다.)
 */
const WRITTEN_OCTAVE_SHIFT = 1;
const SHARP = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
const FLAT = ['c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'];
/**
 * 오선보 조표(meta.keySignature) → 임시표 개수. VexFlow addKeySignature 가 받는 조 이름의
 * 화이트리스트 겸 조표 폭 예약용. 표에 없는 값은 조표 미표기(안전 폴백 — 빌드 안 깨짐).
 */
const KEY_ACCIDENTALS: Record<string, number> = {
  C: 0, Am: 0,
  G: 1, Em: 1, D: 2, Bm: 2, A: 3, 'F#m': 3, E: 4, 'C#m': 4,
  B: 5, 'G#m': 5, 'F#': 6, 'D#m': 6, 'C#': 7, 'A#m': 7,
  F: 1, Dm: 1, Bb: 2, Gm: 2, Eb: 3, Cm: 3, Ab: 4, Fm: 4,
  Db: 5, Bbm: 5, Gb: 6, Ebm: 6, Cb: 7, Abm: 7,
};
/** meta.keySignature 검증 → 유효한 VexFlow 조 이름이면 반환, 아니면 null(미표기). */
function validKeySignature(ks: unknown): string | null {
  return typeof ks === 'string' && ks in KEY_ACCIDENTALS ? ks : null;
}
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
function pitchOf(
  str: number,
  fret: number,
  flats: boolean,
  openOf: (str: number) => number,
): { key: string; acc: string | null } {
  const open = openOf(str);
  const midi = open + fret;
  const names = flats ? FLAT : SHARP;
  const pc = ((midi % 12) + 12) % 12;
  const name = names[pc]!;
  const concertOctave = Math.floor(midi / 12) - 1;
  const writtenOctave = concertOctave + WRITTEN_OCTAVE_SHIFT;
  const acc = name.includes('#') ? '#' : name.includes('b') ? 'b' : null;
  return { key: `${name}/${writtenOctave}`, acc };
}

/** role/isRoot → 강조색(tab.ts accentColor·color_legend.md 와 동일 팔레트). 없으면 null(=currentColor). */
interface ColorSource {
  role?: NoteRole;
  target?: boolean;
  highlight?: boolean;
  isRoot?: boolean;
}
function roleColor(n: ColorSource): string | null {
  const role = n.role;
  if (role === 'root' || role === 'chord_tone' || n.isRoot) return 'var(--primary, #3182F6)';
  if (role === 'target' || n.target) return 'var(--green-500, #12B886)';
  if (role === 'color') return 'var(--yellow-500, #FFC043)';
  if (role === 'blue_note') return 'var(--rn-blue-note, #7048E8)';
  if (role === 'scale' || role === 'passing') return null;
  if (n.highlight) return 'var(--green-500, #12B886)';
  return null;
}

/**
 * 화음 타브 note-level 단색(TabNote 는 position별 색 불가 — tabnote.js applyStyle 은 note 단위).
 * 색이 만장일치일 때만 그 색을 쓰고, 서로 다른 role 색이 섞이면 중립(currentColor).
 * 무색(scale/passing)은 상쇄에서 제외 → 유채색이 하나로 모이면 그 색 유지.
 */
function tabChordColor(entries: ColorSource[]): string | null {
  const cols = new Set(entries.map(roleColor).filter((c) => c !== null));
  return cols.size === 1 ? [...cols][0]! : null;
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

/* ---- stem(꼬리) 방향 결정 --------------------------------------------
 * 표준 조판 규칙. 판정은 "그려지는 위치"인 오선 라인(VexFlow keyProps.line) 기준이다
 * (임시표는 라인을 바꾸지 않으므로 MIDI 거리로 재면 안 됨). VexFlow treble 라인:
 * 맨 아래 E4=1 … 가운데 줄 B4=3 … 맨 위 F5=5.
 *  - 단음: line >= 3(B4 이상) → DOWN, line < 3 → UP. (가운데 줄 B4 = DOWN)
 *  - 빔 그룹: 가운데 줄에서 "가장 멀리 떨어진 음"이 방향 결정(위쪽이면 DOWN, 아래쪽이면 UP).
 *    거리는 라인 스텝 기준. 위/아래 동일 거리면 다수결, 그래도 동점이면 DOWN.
 *    ※ VexFlow 기본 빔 로직은 (line-3) 합(평균)이라 "가장 먼 음" 규칙과 어긋날 수 있어 직접 지정한다.
 */
const MIDDLE_LINE = 3; // 가운데 줄 = written B4

/** 한 StaveNote 의 모든 키(화음이면 복수)의 오선 line 목록. */
function noteLines(sNote: StaveNote): number[] {
  return sNote.getKeyProps().map((kp) => kp.line);
}

/**
 * 여러 line 에서 stem 방향 결정(단음·화음·빔 그룹 공통).
 * 가운데 줄(B4=3)에서 가장 먼 음이 방향을 정한다(위→DOWN, 아래→UP). 거리는 오선 line 기준(반음 아님).
 * 위/아래 동거리면 다수결, 그래도 동점이면 DOWN.
 */
function dirFromLines(lines: number[]): number {
  let maxLine = -Infinity;
  let minLine = Infinity;
  let nDown = 0;
  let nUp = 0;
  for (const line of lines) {
    if (line > maxLine) maxLine = line;
    if (line < minLine) minLine = line;
    if (line >= MIDDLE_LINE) nDown++;
    else nUp++;
  }
  if (!Number.isFinite(maxLine)) return Stem.DOWN;
  const farAbove = Math.max(0, maxLine - MIDDLE_LINE);
  const farBelow = Math.max(0, MIDDLE_LINE - minLine);
  if (farAbove > farBelow) return Stem.DOWN;
  if (farBelow > farAbove) return Stem.UP;
  if (nDown > nUp) return Stem.DOWN;
  if (nUp > nDown) return Stem.UP;
  return Stem.DOWN; // 동점 → 관례상 DOWN
}

/** 빔 그룹 통일 방향: 그룹 내 모든 음표의 모든 키를 대상으로 dirFromLines. */
function groupStemDir(notes: StaveNote[]): number {
  return dirFromLines(notes.flatMap(noteLines));
}

/* ---- 한 마디의 tickable 묶음 ----------------------------------------- */
interface BuiltMeasure {
  stave: StaveNote[];
  tab: (TabNote | GhostNote)[];
  beams: StaveNote[][];
}

function buildMeasure(
  m: Measure,
  flats: boolean,
  openOf: (str: number) => number,
  nStr: number,
): BuiltMeasure {
  const stave: StaveNote[] = [];
  const tab: (TabNote | GhostNote)[] = [];
  const beams: StaveNote[][] = [];
  let curBeam: StaveNote[] = [];
  let pos = 0; // 마디 내 위치(16분 단위)
  const flush = () => {
    if (curBeam.length > 1) {
      // 빔으로 묶이는 그룹: 통일 방향으로 덮어쓴다(Beam 은 auto_stem=false 라 이 방향을 유지).
      const dir = groupStemDir(curBeam);
      for (const nt of curBeam) nt.setStemDirection(dir);
      beams.push(curBeam);
    }
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
    if (typeof s !== 'number' || s < 1 || s > nStr || typeof fret !== 'number') continue;

    const dead = n.technique === 'dead_note';
    const dotted = !!n.dotted;
    const durTok = durCode + (dotted ? 'd' : '');
    // 화음(동시타): 대표음(string/fret) + n.chord[]. 데드 노트엔 화음 미적용.
    const chordExtra = !dead && Array.isArray(n.chord) && n.chord.length ? n.chord : null;

    // ★VexFlow 요소 생성 순서(StaveNote → Accidental → Dot → Annotation → TabNote)가 vf-auto ID 에
    //   영향하므로, 단음 경로는 기존 순서를 그대로 유지한다(TabNote 는 Dot/P.M. 뒤에 마지막 생성).
    let sNote: StaveNote;
    let tabPositions: { str: number; fret: number | string }[];
    let tabCol: string;
    if (chordExtra) {
      // 대표음(index 0) + 추가 음. VexFlow: keys[i] ↔ setKeyStyle(i) ↔ Accidental index 동일
      // (_noteHeads[sortedKeyProps[i].index], stavenote.js:360/608 — 원래 keys 인덱스로 색인).
      const entries = [
        { string: s, fret, role: n.role, target: n.target, highlight: n.highlight },
        ...chordExtra,
      ];
      const pitches = entries.map((e) => pitchOf(e.string, e.fret, flats, openOf));
      sNote = new StaveNote({ keys: pitches.map((p) => p.key), duration: durTok });
      pitches.forEach((p, i) => {
        if (p.acc) sNote.addModifier(new Accidental(p.acc), i);
      });
      // 노트헤드별 role 색(setKeyStyle). stem 은 대표음 색(note-level setStyle).
      const repCol = roleColor(entries[0]!) ?? 'currentColor';
      sNote.setStyle({ fillStyle: repCol, strokeStyle: repCol });
      entries.forEach((e, i) => {
        const c = roleColor(e) ?? 'currentColor';
        sNote.setKeyStyle(i, { fillStyle: c, strokeStyle: c });
      });
      // 타브: 프렛 스택. TabNote 는 position별 색 불가 → note-level 단색(우선순위).
      tabPositions = entries.map((e) => ({ str: e.string, fret: e.fret as number | string }));
      tabCol = tabChordColor(entries) ?? 'currentColor';
    } else {
      // 단음. 데드 노트는 오선보 X 글리프(키 3번째 파트) + 타브 "X", 임시표 억제.
      const { key, acc } = pitchOf(s, fret, flats, openOf);
      const staffKey = dead ? `${key}/x` : key;
      sNote = new StaveNote({ keys: [staffKey], duration: durTok });
      if (acc && !dead) sNote.addModifier(new Accidental(acc), 0);
      tabCol = roleColor(n) ?? 'currentColor';
      sNote.setStyle({ fillStyle: tabCol, strokeStyle: tabCol });
      tabPositions = [{ str: s, fret: dead ? 'X' : fret }];
    }

    if (dotted) Dot.buildAndAttach([sNote], { all: true });
    // 팜뮤트(음정 있는 실음): 오선보 위에 "P.M." 주석. (데드 노트=음정 없음과 구분.)
    if (n.technique === 'palm_mute' && !dead) {
      const pm = new Annotation('P.M.');
      pm.setVerticalJustification(Annotation.VerticalJustify.TOP);
      sNote.addModifier(pm, 0);
    }
    // 코드 심볼(Cmaj7 등): 음표 위에 표기(주로 리듬 슬래시 악보).
    if (n.chordSymbol) {
      const cs = new ChordSymbol();
      cs.addText(n.chordSymbol);
      sNote.addModifier(cs, 0);
    }
    // 도수/음이름 label(R·3·b7 등): 음표 아래에 표기. 화음(chord[])이 있는 음표에는 붙이지 않는다(겹침 방지).
    // (P.M. 은 TOP, label 은 BOTTOM 이라 상하 충돌 없음.)
    if (n.label && !chordExtra) {
      const lb = new Annotation(n.label);
      lb.setVerticalJustification(Annotation.VerticalJustify.BOTTOM);
      sNote.addModifier(lb, 0);
    }
    // stem 방향: 단음·화음 공통(모든 키의 line 에서 결정). 빔에 묶이면 flush() 에서 덮어쓴다.
    sNote.setStemDirection(dirFromLines(noteLines(sNote)));

    // TabNote 는 마지막에 생성(요소 생성 순서 = 기존과 동일 → 단음 산출물 바이트 불변).
    const tNote = new TabNote({ positions: tabPositions, duration: durCode });
    tNote.setStyle({ fillStyle: tabCol, strokeStyle: tabCol });

    // 스트로크: down/up=스트럼(직선+화살표), arpeggio=펼침(물결 브래킷). 오선보·타브 양쪽 부착.
    // (strokes.js: BRUSH=fillRect+arrowhead, ARPEGGIO_DIRECTIONLESS=wiggly, isTabNote 분기 모두 지원.)
    if (n.stroke) {
      const st =
        n.stroke === 'down'
          ? Stroke.Type.BRUSH_DOWN
          : n.stroke === 'up'
            ? Stroke.Type.BRUSH_UP
            : Stroke.Type.ARPEGGIO_DIRECTIONLESS;
      sNote.addStroke(0, new Stroke(st));
      tNote.addStroke(0, new Stroke(st));
    }

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
  // rhythm = 컴핑 리듬 악보: 타브 미표시(오선보만) + 코드심볼. (리듬 슬래시 노트헤드는 VexFlow 4.2.5
  //   폰트에 없어 보류 — 현재는 실제 음정 노트헤드로 렌더. 향후 커스텀 슬래시 도입 가능.)
  const withTab = mode === 'staff+tab';
  const tabData = score.tab;

  const emptySvg = (w = 480, h = 60) =>
    `<svg viewBox="0 0 ${w} ${h}" class="staffsvg" role="img" aria-label="${esc(title)}"></svg>`;

  if (!tabData || !Array.isArray(tabData.measures)) return emptySvg();

  const flats = preferFlats(score.meta?.key);
  // 개방현 실제음 = meta.tuning 계산(없으면 표준 EADGBE 폴백). ★03② — OPEN_MIDI 하드코딩 대체.
  const openOf = resolveOpenMidi(score.meta);
  const nStr = score.meta?.stringCount ?? 6; // ★03③ — string 범위 상한(6=기존 불변)
  // ★03① 조표: meta.keySignature 있으면 clef 뒤에 조표. 없으면 null → ksW=0 → 폭·레이아웃 불변.
  const keySig = validKeySignature(score.meta?.keySignature);
  const ksW = keySig ? 10 + 6 * (KEY_ACCIDENTALS[keySig] ?? 0) : 0; // 조표 폭 예약(임시표 수 비례)
  const [numBeats, beatValue] = (tabData.timeSignature ?? '4/4')
    .split('/')
    .map((x) => parseInt(x, 10));

  const doc = getDoc();
  const prevDoc = (globalThis as { document?: Document }).document;
  (globalThis as { document?: Document }).document = doc;
  try {
    // 마디별 tickable 생성 → 전부 비면 빈 SVG
    const built = (tabData.measures as Measure[]).map((m) => buildMeasure(m, flats, openOf, nStr));
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
    const scanMidi = (str: unknown, fr: unknown) => {
      if (typeof str !== 'number' || typeof fr !== 'number') return;
      const md = openOf(str) + fr;
      if (md < minMidi) minMidi = md;
      if (md > maxMidi) maxMidi = md;
    };
    for (const m of tabData.measures as Measure[]) {
      for (const n of Array.isArray(m.notes) ? m.notes : []) {
        if (n.rest) continue;
        scanMidi(n.string, n.fret);
        if (Array.isArray(n.chord)) for (const c of n.chord) scanMidi(c.string, c.fret); // 화음 음역 포함
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
    const totalW = Math.max(...rowNoteArea.map((w) => CLEF_W + ksW + TS_W + w)) + 2 * MARGIN_X;
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
      const thisStaveW = CLEF_W + ksW + TS_W + noteAreaW;

      const stave = new Stave(x, sysTop + trebleDy, thisStaveW);
      // 기타 표기: treble-8vb(클레프 아래 작은 "8"). 음표는 pitchOf 에서 +1 옥타브로 표기 →
      // 8vb 주석과 합쳐져 "다른 기타 악보와 위치 정렬 + 실제음 정확"이 성립한다.
      stave.addClef('treble', 'default', '8vb');
      if (keySig) stave.addKeySignature(keySig); // ★03① 조표(clef 뒤·박자표 앞)
      if (tabData.timeSignature) stave.addTimeSignature(tabData.timeSignature);
      // 각 줄 첫 마디에 마디 번호.
      const firstMeasureNum =
        (tabData.measures[ri * MEASURES_PER_ROW] as Measure | undefined)?.measure ??
        ri * MEASURES_PER_ROW + 1;
      stave.setMeasure(firstMeasureNum);
      if (ri === 0) {
        // 템포(♩=bpm)와 스윙 필(정박 악보 + "Swing …" 지시)은 첫 줄에만.
        if (typeof score.meta?.tempoBpm === 'number') {
          stave.setTempo({ duration: 'q', bpm: score.meta.tempoBpm }, -2);
        }
        const feel = score.meta?.feel;
        if (feel === 'swing8' || feel === 'swing16') {
          const label = feel === 'swing16' ? 'Swing 16ths' : 'Swing 8ths';
          stave.setText(label, StaveModifierPosition.ABOVE);
        }
      }

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

      // ★ Beam 은 draw 이전에 생성한다. Beam 생성자가 각 음표에 note.beam 을 세팅하면
      //   StaveNote.draw 시 shouldDrawFlag()=false 가 되어 개별 flag(꼬리)가 억제되고
      //   stem 길이도 beamed 로 보정된다. (draw 이후 생성하면 flag 가 이미 그려져 빔과 겹친다.)
      const beamObjs = beams.map((g) => new Beam(g));

      vStaff.draw(ctx, stave);
      if (vTab && tabstave) vTab.draw(ctx, tabstave);
      for (const b of beamObjs) b.setContext(ctx).draw();
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
