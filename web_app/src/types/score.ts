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

/** 주법. 구 hammer→hammer_on, pull→pull_off 정규화. */
export type Technique =
  | 'none'
  | 'hammer_on'
  | 'pull_off'
  | 'slide'
  | 'bend'
  | 'vibrato'
  | 'palm_mute'
  | 'harmonic';

/** finger: 0=개방/무지정, 1=검지 … 4=새끼 */
export type Finger = 0 | 1 | 2 | 3 | 4;

export interface ScoreMeta {
  title: string;
  titleI18nKey?: string;
  instrument?: 'guitar';
  /** 표준 6현 고정 */
  stringCount: 6;
  /** 6번(저음 E)→1번(고음 e) 순서. 표준 EADGBE. */
  tuning?: string[];
  /** 조성/스케일 (예: A minor, A Dorian, C major) */
  key?: string;
  /** 스케일/모드명 (예: A Mixolydian) */
  scale?: string;
  /** 20~300 */
  tempoBpm?: number;
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

/** 타브 음표. rest=true 이면 string/fret 은 자리채움용으로 무시하고 duration 만큼 공백 렌더. */
export interface TabNote {
  string: number;
  fret: number;
  duration: Duration;
  dotted?: boolean;
  rest?: boolean;
  technique?: Technique;
  /** technique=slide 일 때 도착 프렛 */
  slideToFret?: number;
  /** technique=bend 일 때 도착 목표. 예: 'half'(반음), 'full'(온음), 도착 도수 '5' */
  bendTarget?: string;
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
