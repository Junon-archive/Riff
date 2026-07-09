/**
 * 지판/타브 렌더 계약 타입.
 * 원천 SSOT: _design_docs/03_data_schema/fretboard_score_schema.json (1:1 반영).
 * 정합: web_app/docs/technical_spec.md §5.1.
 *
 * 렌더러(notation-renderer)는 이 타입을 입력으로 받아 SVG 문자열을 반환한다.
 * 앱 상태·DOM·i18n 에 의존하지 않는다.
 */

/** score.type — fretboard_diagram=코드/코드톤 다이어그램, tab=타브 시퀀스, scale_shape=스케일/모드 폼 */
export type ScoreType = 'fretboard_diagram' | 'tab' | 'scale_shape';

/** 음의 교육적 역할 (fretboard.dots.role / tab.notes.role 공통) */
export type NoteRole =
  | 'root'
  | 'chord_tone'
  | 'target'
  | 'color'
  | 'blue_note'
  | 'scale'
  | 'passing';

/** 음길이. 구 '2'→half, '4'→quarter, '8'→eighth, '16'→sixteenth 로 정규화. */
export type Duration = 'whole' | 'half' | 'quarter' | 'eighth' | 'sixteenth';

/**
 * 주법. 구 hammer→hammer_on, pull→pull_off 정규화.
 * dead_note = 음정 없는 뮤트 타격음(왼손을 줄에 얹고 피킹) → 타브 X·오선보 X 노트헤드.
 * palm_mute = 음정은 있으나 오른손 손날로 눌러 답답하게(P.M.). 둘은 별개 기술이다.
 */
export type Technique =
  | 'none'
  | 'hammer_on'
  | 'pull_off'
  | 'slide'
  | 'bend'
  | 'vibrato'
  | 'palm_mute'
  | 'dead_note'
  | 'harmonic'
  | 'slap_thumb'
  | 'slap_pop';

/** finger: 0=개방/무지정, 1=검지 … 4=새끼 */
export type Finger = 0 | 1 | 2 | 3 | 4;

export interface ScoreMeta {
  title: string;
  titleI18nKey?: string;
  instrument?: 'guitar' | 'bass';
  /** 현 수. 기타=6, 베이스=4·5(6). tuning 길이와 일치. */
  stringCount: 4 | 5 | 6;
  /** 최저현→최고현 순서(index0=최저현). 예: 6현 EADGBE, 4현 EADG, 5현 BEADG. 길이=stringCount. */
  tuning?: string[];
  /** 조성/스케일 (예: A minor, A Dorian, C major) */
  key?: string;
  /**
   * 오선보 조표(key signature). VexFlow 조 이름 spec: 장조 'C','G','D','A','E','B','F#','C#',
   * 'F','Bb','Eb','Ab','Db','Gb','Cb' / 단조 'Am','Em','Bm','F#m',…,'Dm','Gm','Cm',….
   * 있으면 staff.ts가 clef 뒤에 조표를 그린다(임시표 철자도 정확해짐). 없으면 조표 미표기(기존 동일).
   * 참고: meta.key(예 "A Dorian")는 설명용 문자열이라 조표를 강제하지 않는다 — 조표는 이 필드로 명시.
   */
  keySignature?: string;
  /** 스케일/모드명 (예: A Mixolydian) */
  scale?: string;
  /** 20~300 */
  tempoBpm?: number;
  /**
   * type=tab 렌더 힌트. 미지정/'tab'=자체 타브 SVG, 'staff'=오선보만,
   * 'staff+tab'=오선보+타브 결합(박자 공유, VexFlow), 'rhythm'=리듬 컴핑(현재 staff+tab 로 렌더).
   * fretboard_diagram/scale_shape 에는 영향 없음.
   */
  notation?: 'tab' | 'staff' | 'staff+tab' | 'rhythm';
  /** 리듬 필. swing8/swing16=오선보 위 "Swing 8ths/16ths" 텍스트(악보는 정박, 스윙은 지시로). 기본 straight. */
  feel?: 'straight' | 'swing8' | 'swing16';
}

/** 지판 다이어그램의 짚는 음(dot). string 1=고음e … 6=저음E, fret 0=개방현. */
export interface Dot {
  string: number;
  fret: number;
  finger?: Finger;
  /** 도수/음이름 표기 (예: R, b3, 3, 5, b7, 'Dm7-3(F)') */
  label?: string;
  isRoot?: boolean;
  highlight?: boolean;
  role?: NoteRole;
  /** x 표기 */
  muted?: boolean;
}

/** 바레(한 손가락으로 여러 현) */
export interface Barre {
  fret: number;
  fromString: number;
  toString: number;
  finger: 1 | 2 | 3 | 4;
}

/** type=fretboard_diagram | scale_shape 일 때 사용. 구 fret_range:[a,b] → startFret=a, fretSpan=b-a. */
export interface Fretboard {
  startFret: number;
  /** 표시할 프렛 칸 수 (1~24) */
  fretSpan: number;
  dots: Dot[];
  barre?: Barre[];
}

/**
 * 화음(동시타)의 추가 음. 대표음(TabNote.string/fret)과 같은 박에 동시에 울리는 음들.
 * 오선보는 노트헤드별 role 색으로, 타브는 프렛 스택(단색)으로 렌더된다.
 */
export interface ChordNote {
  string: number;
  fret: number;
  role?: NoteRole;
  label?: string;
  isRoot?: boolean;
  highlight?: boolean;
}

/** 타브 음표. rest=true 이면 string/fret 은 자리채움용으로 무시하고 duration 만큼 공백 렌더. */
export interface TabNote {
  string: number;
  fret: number;
  duration: Duration;
  dotted?: boolean;
  rest?: boolean;
  technique?: Technique;
  /** 화음(동시타): 대표음(string/fret) 위에 함께 울리는 추가 음들. 없으면 단음. */
  chord?: ChordNote[];
  /** 스트로크 방향. down/up=스트럼(직선 화살표), arpeggio=펼침(물결 브래킷). 없으면 표시 없음. */
  stroke?: 'down' | 'up' | 'arpeggio';
  /** 코드 심볼(예: "Cmaj7","E9"). 음표 위에 표기. 주로 리듬 슬래시 악보(notation:"rhythm")에서 사용. */
  chordSymbol?: string;
  /** technique=slide 일 때 도착 프렛 */
  slideToFret?: number;
  /** technique=bend 일 때 도착 목표. 예: 'half'(반음), 'full'(온음), 도착 도수 '5' */
  bendTarget?: string;
  /** 붙임줄(tie): 이 음을 다음 음과 이어(합산) 지속. staff.ts가 오선보에 StaveTie 곡선을 그린다. 같은 음높이 연결에 사용. */
  tiedToNext?: boolean;
  /**
   * 잇단음(tuplet). num개 음을 inSpaceOf개 자리(공간)에 채운다(예: 3연8분음 = {num:3,inSpaceOf:2}).
   * 잇단음 그룹의 **연속된 num개 음 각각에 동일 spec**을 붙인다. 박자합 검증도 이 비율(inSpaceOf/num)로 환산.
   */
  tuplet?: { num: number; inSpaceOf: number };
  /** 도수/음이름 표기 (예: R, b3, 3, 'G7-3(B)') */
  label?: string;
  /** 코드톤 착지 목표음 여부(주로 3도) */
  target?: boolean;
  highlight?: boolean;
  role?: NoteRole;
  finger?: Finger;
}

export interface Measure {
  measure?: number;
  notes: TabNote[];
}

/** type=tab 일 때 사용. 시간순 음표 시퀀스. */
export interface Tab {
  /** 기본 4/4 */
  timeSignature?: string;
  /** 패턴 태그 (예: 3rd_interval, 4note_sequence, guide_tone_3rds) */
  pattern?: string;
  measures: Measure[];
}

/**
 * 최상위 악보 객체. fretboard_score_schema.json 루트와 1:1.
 * type=fretboard_diagram|scale_shape → fretboard 사용, type=tab → tab 사용.
 */
export interface Score {
  /** 고유 식별자 (예: m1.w1.d1.diagram1) */
  id: string;
  type: ScoreType;
  meta: ScoreMeta;
  fretboard?: Fretboard;
  tab?: Tab;
  /** 렌더링 외 참고 텍스트/연주 팁(선택). 표시는 레슨 콘텐츠가 담당. */
  notes?: string;
}
