/**
 * 콘텐츠 파이프라인 산출물 타입.
 * 생성자: scripts/build-content.mjs (SSOT=_design_docs/02_curriculum/**).
 * 정합: web_app/docs/technical_spec.md §4.
 *
 * 런타임은 md 를 파싱하지 않는다 — 아래 형태의 정적 JSON 만 fetch 한다.
 */
import type { Lang } from '../config';
import type { Score } from './score';

/** 언어별 문자열 묶음 (ko/en/ja). */
export type LangMap = Record<Lang, string>;

/** 한 Day 의 ①②③④ 산문(HTML). 악보(```json)는 제거되고 scores[] 로 분리된다. */
export interface DayProse {
  /** ① 이론/설명 */
  theory: string;
  /** ② 시각 자료 (악보 앞/뒤 설명. 악보 자체는 scores[] 로 마운트) */
  visual: string;
  /** ③ 오늘의 연습 */
  practice: string;
  /** ④ 팁 / 흔한 실수 */
  tips: string;
}

/** per-day 산출물: src/content/{curriculumId}/{dayKey}.json */
export interface DayContent {
  dayKey: string;
  curriculumId: string;
  i18nKey: string;
  estMinutes: number;
  /** 프론트매터 title (언어별) */
  titles: LangMap;
  /** 악보: 언어 독립(1벌). ko 파일에서 추출. */
  scores: Score[];
  /** 산문: 언어별 3벌. */
  prose: Record<Lang, DayProse>;
}

/** 매니페스트의 Day 노드(경량 — 상세는 per-day JSON 지연 로드). */
export interface ManifestDay {
  dayKey: string;
  i18nKey: string;
  estMinutes: number;
  titles: LangMap;
}

export interface ManifestWeek {
  week: number;
  titles: LangMap;
  /** 주 개요 HTML (언어별). week_N_overview.{lang}.md */
  overview: LangMap;
  days: ManifestDay[];
}

export interface ManifestMonth {
  month: number;
  titles: LangMap;
  /** 월 개요 HTML (언어별). month_N_overview.{lang}.md */
  overview: LangMap;
  weeks: ManifestWeek[];
}

export interface ManifestCurriculum {
  id: string;
  /** 커리큘럼 개요 제목 (언어별). overview.md 최상단 heading. */
  titles: LangMap;
  /** 커리큘럼 개요 HTML (언어별). overview.md */
  overview: LangMap;
  /** 총 Day 수(진도율/아낀 레슨비 분모). */
  totalDays: number;
  /** 평탄화된 dayKey 목록(이전/다음 Day 내비게이션 소스, 진행 순서). */
  dayKeys: string[];
  months: ManifestMonth[];
}

export interface ContentManifest {
  schemaVersion: number;
  generatedAt: string;
  curricula: ManifestCurriculum[];
}
