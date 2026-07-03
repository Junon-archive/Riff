/**
 * 홈(랜딩) 뷰 — 커리큘럼 카드 목록. 정적 마크업(hero/teaser/storage-note/philosophy)은
 * index.html 의 data-i 로 이미 바인딩되므로, 여기서는 #currList 만 데이터로 채운다.
 * SSOT: technical_spec.md §3(routes/home.ts) · design_spec.md §4.6.
 */
import { getActiveLang, t } from '../lib/i18n';
import type { ContentManifest } from '../types/content';
import { cleanTitle, stripAndTruncate } from './textUtils';

export function renderHome(manifest: ContentManifest, onSelectCurriculum: (curriculumId: string) => void): void {
  const wrap = document.querySelector<HTMLElement>('#currList');
  if (!wrap) return;
  const lang = getActiveLang();
  wrap.innerHTML = '';

  manifest.curricula.forEach((curriculum) => {
    const card = document.createElement('div');
    card.className = 'card curr-card tap';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const title = cleanTitle(curriculum.titles[lang]);
    const desc = stripAndTruncate(curriculum.overview[lang]);
    const metaPill = `${curriculum.totalDays} ${t('curr.month.days')}`;

    card.innerHTML = `
      <div class="curr-thumb"><span class="chip">${t('curr.eyebrow')}</span></div>
      <div class="curr-body">
        <h3></h3>
        <p class="muted" style="margin:8px 0 0;font-size:14px"></p>
        <div class="curr-meta"><span class="meta-pill"></span></div>
      </div>`;
    card.querySelector('h3')!.textContent = title;
    card.querySelector('.curr-body p')!.textContent = desc;
    card.querySelector('.meta-pill')!.textContent = metaPill;

    const activate = () => onSelectCurriculum(curriculum.id);
    card.addEventListener('click', activate);
    card.addEventListener('keydown', (e) => {
      if (e instanceof KeyboardEvent && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        activate();
      }
    });

    wrap.appendChild(card);
  });
}
