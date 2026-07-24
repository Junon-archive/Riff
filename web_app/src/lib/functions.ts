/**
 * Functions 레지스트리 — 커리큘럼 외 인터랙티브 연습 도구 묶음(메트로놈·배킹·튜너·루프).
 * SSOT: _design_docs/05_update_backlog/05-1_add_new_function/20_metronome.md PART A.
 *
 * 여기가 "어떤 도구가 있고 무엇이 열렸는가"의 단일 진실이다. 랜딩 카드 행·레슨 오버레이
 * 세그먼트·전용 페이지 라우팅이 전부 이 배열만 보고 만들어지므로, 21(배킹)·22(튜너)·23(루프)는
 * `ready: true` + 패널 컴포넌트만 추가하면 나머지 배선이 자동으로 따라온다.
 *
 * 빌드 타임(SSR) 전용 — 클라이언트 번들로 나가지 않는다(라벨은 i18n `fn.*` 키).
 */

export type FunctionToolId = 'tuner' | 'metronome' | 'backing' | 'loop';

export interface FunctionTool {
  id: FunctionToolId;
  /** 구현 완료 여부. false = 랜딩 카드/세그먼트에 "곧 열려요"로 비활성 노출. */
  ready: boolean;
  /** 레슨 내 플로팅 오버레이의 Segmented Control 에 노출되는 도구인가. */
  inOverlay: boolean;
  /** i18n 네임스페이스(`{prefix}.page_desc` 등 도구 전용 카피). 카드/세그먼트 이름은 `fn.{id}`. */
  i18nPrefix: string;
  /** 24×24 viewBox · stroke=currentColor 기준 아이콘 내부 마크업(정적 상수 — set:html 안전). */
  icon: string;
}

/** 랜딩 카드 행 노출 순서(확정: 튜너 · 메트로놈 · 반주 · 루프). */
export const FUNCTION_TOOLS: FunctionTool[] = [
  {
    id: 'tuner',
    i18nPrefix: 'tuner',
    ready: false,
    inOverlay: false,
    icon: '<path d="M4 16a8 8 0 0 1 16 0" /><path d="M12 16l3.5-4.5" /><circle cx="12" cy="16" r="1.4" fill="currentColor" stroke="none" /><path d="M4 20h16" />',
  },
  {
    id: 'metronome',
    i18nPrefix: 'metro',
    ready: true,
    inOverlay: true,
    icon: '<path d="M10 3h4l4.5 17.2a1 1 0 0 1-1 1.3H6.5a1 1 0 0 1-1-1.3L10 3z" /><path d="M12.4 18.6 16 6.6" /><path d="M8.2 12h6" />',
  },
  {
    id: 'backing',
    i18nPrefix: 'backing',
    ready: false,
    inOverlay: true,
    icon: '<path d="M9.5 17.5V5.2l9-1.8v12" /><circle cx="7" cy="17.5" r="2.6" /><circle cx="16" cy="15.4" r="2.6" />',
  },
  {
    id: 'loop',
    i18nPrefix: 'loop',
    ready: false,
    inOverlay: false,
    icon: '<path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3L20 9" /><path d="M20 4.5V9h-4.5" /><path d="M19.5 12a7.5 7.5 0 0 1-12.8 5.3L4 15" /><path d="M4 19.5V15h4.5" />',
  },
];

export function findFunctionTool(id: FunctionToolId): FunctionTool | undefined {
  return FUNCTION_TOOLS.find((f) => f.id === id);
}

/** 전용 페이지가 생성되는 도구(= 구현 완료분) — tools 라우트의 getStaticPaths 소스. */
export function readyFunctionTools(): FunctionTool[] {
  return FUNCTION_TOOLS.filter((f) => f.ready);
}

/** 레슨 오버레이 Segmented Control 에 들어가는 도구(구현 여부와 무관 — 미구현은 비활성 표시). */
export function overlayFunctionTools(): FunctionTool[] {
  return FUNCTION_TOOLS.filter((f) => f.inOverlay);
}
