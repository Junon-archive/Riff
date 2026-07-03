/**
 * 커리큘럼 계층 뷰 — 진도 요약 + 월/주/일 아코디언.
 * SSOT: technical_spec.md §3(routes/curriculum.ts) · design_spec.md §4.10.
 *
 * 진행 자유 열람 원칙(technical_spec §8): 잠금 없음 — 모든 Day 클릭 가능.
 */
import { getActiveLang, t } from '../lib/i18n';
import { curriculumProgress, monthProgress, weekProgress, getCompletedSet } from '../lib/progress';
import type { ContentManifest, ManifestCurriculum, ManifestMonth } from '../types/content';
import type { GhState } from '../types/state';
import { cleanTitle } from './textUtils';

const CHECK_ICON =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ARROW_ICON =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const CARET_ICON =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/** 아코디언 열림 상태는 뷰 로컬 상태(재렌더 간 유지) — curriculumId → 열린 month 번호 집합. */
const openMonthsByCurriculum = new Map<string, Set<number>>();

/** weeks/days 가 비어 있는 월 = "곧 열려요"(데이터 기반 판정, 커리큘럼별 하드코딩 없음). */
function isMonthSoon(month: ManifestMonth): boolean {
  return month.weeks.length === 0 || month.weeks.every((w) => w.days.length === 0);
}

function resolveInitialOpenMonths(
  curriculum: ManifestCurriculum,
  completedSet: Set<string>,
  lastVisited: string | null | undefined,
): Set<number> {
  if (lastVisited) {
    const found = curriculum.months.find((m) =>
      m.weeks.some((w) => w.days.some((d) => d.dayKey === lastVisited)),
    );
    if (found) return new Set([found.month]);
  }
  const firstIncomplete = curriculum.months.find((m) => {
    if (isMonthSoon(m)) return false;
    const p = monthProgress(m, completedSet);
    return !(p.total > 0 && p.done === p.total);
  });
  const target = firstIncomplete?.month ?? curriculum.months[0]?.month;
  return new Set(target != null ? [target] : []);
}

function setText(selector: string, value: string): void {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

export function renderCurriculum(
  manifest: ContentManifest,
  curriculumId: string,
  state: GhState,
  onSelectDay: (dayKey: string) => void,
): void {
  const curriculum = manifest.curricula.find((c) => c.id === curriculumId);
  const tree = document.querySelector<HTMLElement>('#monthTree');
  if (!curriculum || !tree) return;

  const lang = getActiveLang();
  setText('#currTitle', cleanTitle(curriculum.titles[lang]));

  const prog = curriculumProgress(manifest, state, curriculumId);
  setText('#progPct', String(prog.pct));
  setText('#progDone', String(prog.done));
  setText('#progTotal', String(prog.total));
  const fill = document.querySelector<HTMLElement>('#progFill');
  if (fill) fill.style.width = `${prog.pct}%`;

  const completedSet = getCompletedSet(state, curriculumId);

  let openSet = openMonthsByCurriculum.get(curriculumId);
  if (!openSet) {
    openSet = resolveInitialOpenMonths(curriculum, completedSet, state.progress[curriculumId]?.lastVisited);
    openMonthsByCurriculum.set(curriculumId, openSet);
  }

  tree.innerHTML = '';

  curriculum.months.forEach((month) => {
    const mProg = monthProgress(month, completedSet);
    const soon = isMonthSoon(month);
    const isDone = !soon && mProg.total > 0 && mProg.done === mProg.total;
    const isOpen = !soon && openSet!.has(month.month);

    const monthEl = document.createElement('div');
    monthEl.className = ['month', soon ? 'soon' : '', isDone ? 'done' : '', isOpen ? 'open' : '']
      .filter(Boolean)
      .join(' ');

    const subText = soon
      ? t('months.soon')
      : isDone
        ? t('months.done')
        : `${mProg.done}/${mProg.total} ${t('curr.month.days')}`;

    monthEl.innerHTML = `
      <button class="month-head" type="button">
        <span class="month-num"></span>
        <span class="t"><b></b><small></small></span>
        <span class="caret">${CARET_ICON}</span>
      </button>
      <div class="month-body"></div>`;
    monthEl.querySelector('.month-num')!.textContent = isDone ? '✓' : String(month.month);
    monthEl.querySelector('.t b')!.textContent = cleanTitle(month.titles[lang]);
    monthEl.querySelector('.t small')!.textContent = subText;

    const body = monthEl.querySelector<HTMLElement>('.month-body')!;
    month.weeks.forEach((week) => {
      const wProg = weekProgress(week, completedSet);
      const weekEl = document.createElement('div');
      weekEl.className = 'week';
      weekEl.innerHTML = `
        <div class="week-label">
          <span></span>
          <span class="pbar wp"><i style="width:${wProg.pct}%"></i></span>
          <span style="color:var(--text-3);font-weight:700">${wProg.pct}%</span>
        </div>`;
      weekEl.querySelector('.week-label span')!.textContent = t('lesson.week_label', { week: week.week });

      week.days.forEach((day) => {
        const done = completedSet.has(day.dayKey);
        const dayBtn = document.createElement('button');
        dayBtn.type = 'button';
        dayBtn.className = `day${done ? ' done' : ''}`;
        dayBtn.dataset.day = day.dayKey;
        dayBtn.innerHTML = `
          <span class="check">${CHECK_ICON}</span>
          <span class="dt"><b></b></span>
          <span class="arr">${ARROW_ICON}</span>`;
        dayBtn.querySelector('.dt b')!.textContent = day.titles[lang];
        dayBtn.addEventListener('click', () => onSelectDay(day.dayKey));
        weekEl.appendChild(dayBtn);
      });
      body.appendChild(weekEl);
    });

    const headBtn = monthEl.querySelector<HTMLButtonElement>('.month-head')!;
    headBtn.addEventListener('click', () => {
      if (soon) return;
      const nowOpen = monthEl.classList.toggle('open');
      if (nowOpen) openSet!.add(month.month);
      else openSet!.delete(month.month);
    });

    tree.appendChild(monthEl);
  });
}
