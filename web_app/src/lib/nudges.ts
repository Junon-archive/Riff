/**
 * 넛지 트리거 엔진 — 5종, dedup 규약은 state_storage.md §5 그대로 구현한다.
 * 순수 판정 + 노출 마킹만 담당(토스트 DOM 렌더는 main.ts/views 가 담당).
 *
 * 문구는 i18n `nudge.*`(§7.2). 이모지는 design_spec/명세에 정의가 없어
 * 엔지니어링 판단으로 트리거별 1개씩 배정한다(목업은 enter_week_2 의 "⚡"만 구현).
 */
import { t } from './i18n';
import { hasSeenNudge, markNudgeShown } from './storage';

export interface NudgeToast {
  id: string;
  emoji: string;
  text: string;
}

const NUDGE_EMOJI = {
  enter_week_2: '⚡',
  almost_there: '🔥',
  finish_week: '🙌',
  finish_month: '🏆',
  welcome_back: '👋',
} as const;

/** state_storage §4 dayKey 규약과 동일한 "m{M}.w{W}" 주차 키. */
export function weekScopeKey(month: number, week: number): string {
  return `m${month}.w${week}`;
}

/**
 * `finish_week` 문구 로테이션 — i18n `nudge.finish_week_1..N`(토스체 격려/통계/연습 리마인더 등
 * 다양한 결). 매번 같은 문장이 반복되지 않도록 **전역 주차 인덱스(week)** 로 결정적 로테이션한다
 * (완료 시점의 랜덤이 아니라 주차 번호 기반이라 같은 주는 항상 같은 문구 — 재현 가능·테스트 가능).
 */
const FINISH_WEEK_VARIANTS = 6;

function finishWeekKey(week: number): string {
  const idx = ((week % FINISH_WEEK_VARIANTS) + FINISH_WEEK_VARIANTS) % FINISH_WEEK_VARIANTS;
  return `nudge.finish_week_${idx + 1}`;
}

/** `enter_week_2` — w2 첫 진입 & 미노출(영구 1회). */
export function evalEnterWeek2(currentWeek: number, nickname: string | null): NudgeToast | null {
  if (currentWeek !== 2) return null;
  if (hasSeenNudge('enter_week_2')) return null;
  markNudgeShown('enter_week_2');
  return {
    id: 'enter_week_2',
    emoji: NUDGE_EMOJI.enter_week_2,
    text: t('nudge.enter_week_2', { nickname: nickname ?? '' }),
  };
}

/** `w0_intro` — Week 0 Day 1 첫 진입 시 1회: 가볍게 따라 치고 바로 Week 1로 넘어가도 된다는 안내. */
export function evalW0Intro(dayKey: string): NudgeToast | null {
  if (dayKey !== 'm1.w0.d1') return null;
  if (hasSeenNudge('w0_intro')) return null;
  markNudgeShown('w0_intro');
  return { id: 'w0_intro', emoji: '👋', text: t('nudge.w0_intro') };
}

/** `almost_there` — 해당 주 미완료 Day == 1 & 주차 내 미노출. */
export function evalAlmostThere(month: number, week: number, remainingInWeek: number): NudgeToast | null {
  if (remainingInWeek !== 1) return null;
  const dedupKey = `almost_there:${weekScopeKey(month, week)}`;
  if (hasSeenNudge(dedupKey)) return null;
  markNudgeShown(dedupKey);
  return { id: dedupKey, emoji: NUDGE_EMOJI.almost_there, text: t('nudge.almost_there') };
}

/**
 * `finish_week` — 해당 주 미완료 Day == 0. 트리거·dedup 은 그대로, 문구만 주차 번호 기반으로
 * 로테이션한다(finishWeekKey, state_storage §5 dedup 키 형식 `finish_week:{m.w}` 불변).
 */
export function evalFinishWeek(
  month: number,
  week: number,
  remainingInWeek: number,
  nickname: string | null = null,
): NudgeToast | null {
  if (remainingInWeek !== 0) return null;
  const dedupKey = `finish_week:${weekScopeKey(month, week)}`;
  if (hasSeenNudge(dedupKey)) return null;
  markNudgeShown(dedupKey);
  return {
    id: dedupKey,
    emoji: NUDGE_EMOJI.finish_week,
    text: t(finishWeekKey(week), { week, nickname: nickname ?? '' }),
  };
}

/** `finish_month` — 한 달 완료(영구 1회). */
export function evalFinishMonth(monthAllDone: boolean): NudgeToast | null {
  if (!monthAllDone) return null;
  if (hasSeenNudge('finish_month')) return null;
  markNudgeShown('finish_month');
  return { id: 'finish_month', emoji: NUDGE_EMOJI.finish_month, text: t('nudge.finish_month') };
}

/** `welcome_back` — 로드 시 now - lastActiveAt ≥ 3일 & 오늘 날짜 미노출. */
export function evalWelcomeBack(
  lastActiveAt: string,
  nickname: string | null,
  now: Date = new Date(),
): NudgeToast | null {
  const last = new Date(lastActiveAt).getTime();
  if (Number.isNaN(last)) return null;
  const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
  if (now.getTime() - last < THREE_DAYS_MS) return null;
  const todayKey = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const dedupKey = `welcome_back:${todayKey}`;
  if (hasSeenNudge(dedupKey)) return null;
  markNudgeShown(dedupKey);
  return {
    id: dedupKey,
    emoji: NUDGE_EMOJI.welcome_back,
    text: t('nudge.welcome_back', { nickname: nickname ?? '' }),
  };
}
