/**
 * 진도율 · 아낀 레슨비 · 스코프별 완료수 파생 계산.
 * 저장하지 않고 항상 gh_state + manifest 로부터 파생한다(state_storage.md §3, technical_spec §6.2).
 */
import { VIRTUAL_LESSON_PRICE } from '../config';
import type { Lang } from '../config';
import type { ContentManifest, ManifestMonth, ManifestWeek } from '../types/content';
import type { GhState } from '../types/state';

export interface ScopeProgress {
  done: number;
  total: number;
  pct: number;
}

function toScope(done: number, total: number): ScopeProgress {
  return { done, total, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
}

/** 완료된 Day 키 집합(커리큘럼 스코프). */
export function getCompletedSet(state: GhState, curriculumId: string): Set<string> {
  return new Set(state.progress[curriculumId]?.completedDays ?? []);
}

/** 커리큘럼 전체 진도율. 총 Day 수는 manifest.totalDays(§6.2). */
export function curriculumProgress(
  manifest: ContentManifest,
  state: GhState,
  curriculumId: string,
): ScopeProgress {
  const curriculum = manifest.curricula.find((c) => c.id === curriculumId);
  const total = curriculum?.totalDays ?? 0;
  const done = getCompletedSet(state, curriculumId).size;
  return toScope(done, total);
}

/** 월(Month) 스코프 진도율. */
export function monthProgress(month: ManifestMonth, completed: Set<string>): ScopeProgress {
  const days = month.weeks.flatMap((w) => w.days);
  const done = days.filter((d) => completed.has(d.dayKey)).length;
  return toScope(done, days.length);
}

/** 주(Week) 스코프 진도율. */
export function weekProgress(week: ManifestWeek, completed: Set<string>): ScopeProgress {
  const done = week.days.filter((d) => completed.has(d.dayKey)).length;
  return toScope(done, week.days.length);
}

/** 아낀 레슨비(원) = 완료 Day 수 × 단가(config.VIRTUAL_LESSON_PRICE). */
export function savedMoneyWon(state: GhState, curriculumId: string): number {
  return getCompletedSet(state, curriculumId).size * VIRTUAL_LESSON_PRICE;
}

/** 전(全) 커리큘럼 통틀어 완료한 총 Day 수(도네이션 시트 "아낀 레슨비" 합산용). */
export function totalCompletedDays(state: GhState): number {
  return Object.values(state.progress).reduce(
    (sum, cur) => sum + (cur?.completedDays?.length ?? 0),
    0,
  );
}

/** 전 커리큘럼 합산 아낀 레슨비(원). */
export function totalSavedMoneyWon(state: GhState): number {
  return totalCompletedDays(state) * VIRTUAL_LESSON_PRICE;
}

/**
 * 아낀 레슨비의 언어별 통화 표기.
 * OPEN-3(technical_spec §12): 표시 통화 환산율은 미확정. 단가(₩20,000/Day)는 고정 상수이며,
 * 아래 en/ja 환산은 자릿수 감 잡기용 근사치 placeholder(문서화된 결정 전까지 유지, 정밀 회계 용도 아님).
 *
 * 주의: "약"/"約"/"about" 같은 근사치 접두어는 여기서 붙이지 않는다. i18n 템플릿
 * (`progress.saved_money`)이 문구 전체를 책임지므로, 이 함수는 **금액 문자열만** 반환한다.
 * (과거 버그: 여기서도 접두어를 붙이고 템플릿에도 있어 "약 약 40만 원"처럼 중복 노출됐음.)
 */
const APPROX_KRW_PER_USD = 1400;
const APPROX_KRW_PER_JPY = 9.3;

/** 원(won) 금액 → 언어별 통화 문자열. formatSavedMoney/formatTotalSavedMoney 공용. */
function formatWon(won: number, lang: Lang): string {
  if (lang === 'ko') {
    const man = Math.round(won / 10000);
    return man >= 1 ? `${man.toLocaleString('ko-KR')}만 원` : `${won.toLocaleString('ko-KR')}원`;
  }
  if (lang === 'ja') {
    const jpy = Math.round(won / APPROX_KRW_PER_JPY);
    return `${jpy.toLocaleString('ja-JP')}円`;
  }
  const usd = Math.round(won / APPROX_KRW_PER_USD);
  return `$${usd.toLocaleString('en-US')}`;
}

export function formatSavedMoney(state: GhState, curriculumId: string, lang: Lang): string {
  return formatWon(savedMoneyWon(state, curriculumId), lang);
}

/** 전 커리큘럼 합산 아낀 레슨비의 언어별 통화 표기(도네이션 시트용). */
export function formatTotalSavedMoney(state: GhState, lang: Lang): string {
  return formatWon(totalSavedMoneyWon(state), lang);
}
