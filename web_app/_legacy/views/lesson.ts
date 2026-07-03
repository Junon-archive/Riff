/**
 * 레슨 상세(Day) 뷰 — 산문(①②③④) + 지판/타브 렌더 마운트 + 완료 액션 + 이전/다음.
 * SSOT: technical_spec.md §3(routes/lesson.ts) · §5.4(다중 마운트 일반화) · design_spec.md §4.11.
 *
 * 렌더러(render/fretboard.ts, render/tab.ts)는 notation-renderer 산출물을 그대로 사용한다
 * (직접 구현 금지 — 협업 경계 준수).
 */
import { getActiveLang, t } from '../lib/i18n';
import { getCompletedSet } from '../lib/progress';
import { findCurriculum, findDayLocation, getAdjacentDayKeys, loadDayContent } from '../lib/content';
import { renderFretboard, renderTab } from '../render';
import { cleanTitle } from './textUtils';
import type { ContentManifest } from '../types/content';
import type { Score } from '../types/score';
import type { GhState } from '../types/state';

export interface LessonHandlers {
  onComplete: (curriculumId: string, dayKey: string) => void;
  onNavigateDay: (dayKey: string) => void;
}

function byId<T extends HTMLElement = HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

function renderScoreCard(score: Score): string {
  const isTab = score.type === 'tab';
  const caption = isTab ? t('lesson.tab') : t('lesson.chord');
  const note = isTab ? t('lesson.tab_note') : t('lesson.chord_note');
  const svg = isTab ? renderTab(score) : renderFretboard(score);
  return `
    <div class="render-area">
      <div class="render-cap">
        <b>${caption}</b>
        <span class="badge">SVG · JSON render</span>
      </div>
      <div class="render-mount">${svg}</div>
      <p class="render-note">${note}</p>
    </div>`;
}

export async function renderLesson(
  manifest: ContentManifest,
  curriculumId: string,
  dayKey: string,
  state: GhState,
  handlers: LessonHandlers,
): Promise<void> {
  const curriculum = findCurriculum(manifest, curriculumId);
  const crumbEl = byId('lessonCrumb');
  const titleEl = byId('lessonTitle');
  const subEl = byId('lessonSub');
  const proseEl = byId('lessonProse');
  const visualProseEl = byId('lessonVisualProse');
  const scoresMount = byId('scoresMount');
  const practiceEl = byId('lessonPractice');
  const tipsEl = byId('lessonTips');
  const completeBtn = byId<HTMLButtonElement>('completeBtn');
  const doneState = byId('doneState');
  const prevBtn = byId<HTMLButtonElement>('prevBtn');
  const nextBtn = byId<HTMLButtonElement>('nextBtn');

  if (!curriculum) {
    if (titleEl) titleEl.textContent = t('error.not_found');
    return;
  }

  const location = findDayLocation(curriculum, dayKey);
  if (!location) {
    if (crumbEl) crumbEl.textContent = '';
    if (titleEl) titleEl.textContent = t('error.not_found');
    if (subEl) subEl.textContent = '';
    return;
  }

  const lang = getActiveLang();
  const { month, week, day } = location;

  if (crumbEl) {
    crumbEl.textContent = `${cleanTitle(month.titles[lang])} · ${t('lesson.week_label', { week: week.week })}`;
  }
  if (titleEl) titleEl.textContent = day.titles[lang];
  if (subEl) subEl.textContent = '';

  try {
    const content = await loadDayContent(curriculumId, dayKey);
    const prose = content.prose[lang];

    if (titleEl) titleEl.textContent = content.titles[lang] ?? day.titles[lang];
    if (proseEl) proseEl.innerHTML = prose.theory;
    if (visualProseEl) visualProseEl.innerHTML = prose.visual;
    if (scoresMount) scoresMount.innerHTML = content.scores.map(renderScoreCard).join('');
    if (practiceEl) practiceEl.innerHTML = prose.practice;
    if (tipsEl) tipsEl.innerHTML = prose.tips;
  } catch (err) {
    if (proseEl) proseEl.innerHTML = `<p>${t('error.load_failed')}</p>`;
    if (visualProseEl) visualProseEl.innerHTML = '';
    if (scoresMount) scoresMount.innerHTML = '';
    if (practiceEl) practiceEl.innerHTML = '';
    if (tipsEl) tipsEl.innerHTML = '';
    // eslint-disable-next-line no-console
    console.error('[lesson] content load failed', err);
  }

  const completed = getCompletedSet(state, curriculumId).has(dayKey);
  if (completeBtn) completeBtn.style.display = completed ? 'none' : 'flex';
  if (doneState) doneState.style.display = completed ? 'flex' : 'none';
  if (completeBtn) completeBtn.onclick = () => handlers.onComplete(curriculumId, dayKey);

  const { prev, next } = getAdjacentDayKeys(curriculum, dayKey);
  if (prevBtn) {
    prevBtn.disabled = !prev;
    prevBtn.onclick = prev ? () => handlers.onNavigateDay(prev) : null;
  }
  if (nextBtn) {
    nextBtn.disabled = !next;
    nextBtn.onclick = next ? () => handlers.onNavigateDay(next) : null;
  }
}
