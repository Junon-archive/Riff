/**
 * Riff — 앱 부팅 진입점.
 * index.html 의 <script type="module" src="/src/main.ts"> 가 로드한다.
 *
 * 부트 순서: i18n 초기화 → 상태 로드 → 라우터 시작 → 헤더/시트/토스트/컨페티 배선.
 * SSOT: technical_spec.md §6·§7·§8, design_spec.md §4·§7.
 */
import './styles/tokens.css';
import './styles/app.css';

import { DEFAULT_CURRICULUM_ID, DONATION_LINKS, DONATION_ORDER } from './config';
import type { DonationChannel, Lang } from './config';
import {
  loadState,
  hasStoredState,
  setNickname,
  setLang as persistLang,
  markDayComplete,
  markDonationClicked,
  markDonationDismissed,
  setLastVisited,
  serializeStateToCode,
  restoreStateFromCode,
  touchLastActive,
  getTheme,
  setTheme,
} from './lib/storage';
import type { Theme } from './lib/storage';
import { detectLang, setActiveLang, getActiveLang, applyI18n, t } from './lib/i18n';
import { initRouter, navigate } from './lib/router';
import type { Route } from './lib/router';
import { getManifest, findCurriculum, findDayLocation } from './lib/content';
import { monthProgress, weekProgress, getCompletedSet, formatSavedMoney } from './lib/progress';
import {
  evalEnterWeek2,
  evalAlmostThere,
  evalFinishWeek,
  evalFinishMonth,
  evalWelcomeBack,
} from './lib/nudges';
import { renderHome, renderCurriculum, renderLesson } from './views';
import type { GhState } from './types/state';

const manifest = getManifest();

/* ------------------------------------------------------------------
 * DOM 헬퍼
 * ---------------------------------------------------------------- */
function $<T extends Element = Element>(sel: string): T | null {
  return document.querySelector<T>(sel);
}
function $all<T extends Element = Element>(sel: string): T[] {
  return Array.from(document.querySelectorAll<T>(sel));
}

/* ------------------------------------------------------------------
 * 뷰 전환
 * ---------------------------------------------------------------- */
const VIEW_NAMES = ['home', 'curriculum', 'lesson'] as const;
type ViewName = (typeof VIEW_NAMES)[number];

function showView(name: ViewName): void {
  VIEW_NAMES.forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el instanceof HTMLElement) el.hidden = v !== name;
  });
  const backBtn = $<HTMLButtonElement>('#backBtn');
  if (backBtn) backBtn.style.display = name === 'home' ? 'none' : 'grid';
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ------------------------------------------------------------------
 * 토스트 (넛지)
 * ---------------------------------------------------------------- */
function showToast(emoji: string, html: string, ms = 4200): void {
  const wrap = $('#toastWrap');
  if (!wrap) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="emoji">${emoji}</span><span class="txt">${html}</span>`;
  wrap.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  window.setTimeout(() => {
    el.classList.remove('show');
    window.setTimeout(() => el.remove(), 400);
  }, ms);
}

/* ------------------------------------------------------------------
 * 컨페티(캔버스, 외부 의존 없음 — design_spec §4.17)
 * ---------------------------------------------------------------- */
interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  g: number;
  s: number;
  rot: number;
  vr: number;
  c: string;
  life: number;
}

const confettiCanvas = $<HTMLCanvasElement>('#confetti');
const confettiCtx = confettiCanvas?.getContext('2d') ?? null;
let confettiParticles: ConfettiParticle[] = [];
let confettiRaf: number | null = null;

function fitConfetti(): void {
  if (!confettiCanvas) return;
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
fitConfetti();
window.addEventListener('resize', fitConfetti);

function tickConfetti(): void {
  if (!confettiCanvas || !confettiCtx) return;
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach((p) => {
    p.vy += p.g;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.life -= 0.008;
    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rot);
    confettiCtx.globalAlpha = Math.max(p.life, 0);
    confettiCtx.fillStyle = p.c;
    confettiCtx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
    confettiCtx.restore();
  });
  confettiParticles = confettiParticles.filter((p) => p.life > 0 && p.y < confettiCanvas.height + 40);
  if (confettiParticles.length) {
    confettiRaf = requestAnimationFrame(tickConfetti);
  } else {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiRaf = null;
  }
}

function burstConfetti(): void {
  if (!confettiCanvas || !confettiCtx) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#3182F6', '#4593FC', '#12B886', '#FFC043', '#FF6B6B', '#C9E2FF'];
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight * 0.42;
  for (let i = 0; i < 120; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 6 + Math.random() * 9;
    confettiParticles.push({
      x: cx,
      y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      g: 0.22 + Math.random() * 0.12,
      s: 6 + Math.random() * 6,
      rot: Math.random() * 6,
      vr: (Math.random() - 0.5) * 0.4,
      c: colors[i % colors.length]!,
      life: 1,
    });
  }
  if (confettiRaf == null) tickConfetti();
}

/* ------------------------------------------------------------------
 * 바텀시트
 * ---------------------------------------------------------------- */
function openSheet(id: string): void {
  document.getElementById(id)?.classList.add('show');
}
function closeSheet(el: Element | null): void {
  el?.classList.remove('show');
}

/* ------------------------------------------------------------------
 * 닉네임 칩 / 도네이션 절약액 / 언어 세그먼트 UI 동기화
 * ---------------------------------------------------------------- */
function refreshNickChip(state: GhState): void {
  const chip = $<HTMLButtonElement>('#nickChip');
  const text = $('#nickText');
  if (!chip || !text) return;
  if (state.nickname) {
    chip.style.display = 'inline-flex';
    text.textContent = state.nickname;
  } else {
    chip.style.display = 'none';
  }
}

function activeCurriculumId(): string {
  if (currentRoute.name === 'curriculum' || currentRoute.name === 'lesson') {
    return currentRoute.curriculumId;
  }
  return DEFAULT_CURRICULUM_ID;
}

function updateSaveAmount(state: GhState): void {
  const el = $('#saveAmount');
  if (!el) return;
  const formatted = formatSavedMoney(state, activeCurriculumId(), getActiveLang());
  el.innerHTML = t('progress.saved_money', { amount: `<b>${formatted}</b>` });
}

function applyLangUI(lang: Lang): void {
  $all<HTMLButtonElement>('#langSeg button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme;
}

/** 도네이션 채널 노출 순서 — ko: 국내 채널 우선 / en·ja: 글로벌 채널 우선(design_spec §4.14). */
function applyDonationOrder(lang: Lang): void {
  const grid = $('#payGrid');
  if (!grid) return;
  DONATION_ORDER[lang].forEach((channel) => {
    const btn = grid.querySelector(`[data-donate="${channel}"]`);
    if (btn) grid.appendChild(btn); // appendChild 는 기존 노드를 이동시킨다 → 순서대로 재배치
  });
}

/* ------------------------------------------------------------------
 * 라우트 디스패치
 * ---------------------------------------------------------------- */
let currentRoute: Route = { name: 'home' };

async function dispatch(route: Route): Promise<void> {
  currentRoute = route;
  const state = loadState();

  if (route.name === 'home') {
    showView('home');
    renderHome(manifest, (curriculumId) => navigate({ name: 'curriculum', curriculumId }));
    return;
  }

  if (route.name === 'curriculum') {
    showView('curriculum');
    renderCurriculum(manifest, route.curriculumId, state, (dayKey) =>
      navigate({ name: 'lesson', curriculumId: route.curriculumId, dayKey }),
    );
    return;
  }

  // route.name === 'lesson'
  showView('lesson');
  const curriculum = findCurriculum(manifest, route.curriculumId);
  if (curriculum) {
    setLastVisited(route.curriculumId, route.dayKey);
    const location = findDayLocation(curriculum, route.dayKey);
    if (location) {
      const nudge = evalEnterWeek2(location.week.week, state.nickname);
      if (nudge) showToast(nudge.emoji, nudge.text);
    }
  }
  await renderLesson(manifest, route.curriculumId, route.dayKey, loadState(), {
    onComplete: handleComplete,
    onNavigateDay: (dayKey) => navigate({ name: 'lesson', curriculumId: route.curriculumId, dayKey }),
  });
}

/** 완료 버튼 클릭 처리 — 진도 갱신 + 컨페티 + 넛지 트리거 + 주 완주 시 도네이션 시트. */
function handleComplete(curriculumId: string, dayKey: string): void {
  const before = loadState();
  const alreadyDone = getCompletedSet(before, curriculumId).has(dayKey);
  const state = markDayComplete(curriculumId, dayKey);

  if (!alreadyDone) burstConfetti();

  // 완료 상태를 즉시 반영(재렌더). 이미 로드된 per-day JSON 은 모듈 캐시로 재요청 비용이 낮다.
  void renderLesson(manifest, curriculumId, dayKey, state, {
    onComplete: handleComplete,
    onNavigateDay: (nextKey) => navigate({ name: 'lesson', curriculumId, dayKey: nextKey }),
  });

  if (alreadyDone) return;

  const curriculum = findCurriculum(manifest, curriculumId);
  const location = curriculum ? findDayLocation(curriculum, dayKey) : undefined;
  if (!curriculum || !location) return;

  const completedSet = getCompletedSet(state, curriculumId);
  const wProg = weekProgress(location.week, completedSet);
  const remainingInWeek = wProg.total - wProg.done;

  const almostThere = evalAlmostThere(location.month.month, location.week.week, remainingInWeek);
  if (almostThere) showToast(almostThere.emoji, almostThere.text);

  const finishedWeek = evalFinishWeek(location.month.month, location.week.week, remainingInWeek);
  if (finishedWeek) showToast(finishedWeek.emoji, finishedWeek.text);

  const mProg = monthProgress(location.month, completedSet);
  const finishedMonth = evalFinishMonth(mProg.total > 0 && mProg.done === mProg.total);
  if (finishedMonth) showToast(finishedMonth.emoji, finishedMonth.text);

  if (remainingInWeek === 0) {
    window.setTimeout(() => {
      updateSaveAmount(loadState());
      openSheet('donateScrim');
    }, 900);
  }
}

/* ------------------------------------------------------------------
 * 헤더 · 시트 · 저장 이벤트 배선
 * ---------------------------------------------------------------- */
function bindEvents(): void {
  // 언어 세그먼트
  $('#langSeg')?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest<HTMLButtonElement>('button[data-lang]');
    const lang = btn?.dataset.lang;
    if (!lang || (lang !== 'ko' && lang !== 'en' && lang !== 'ja')) return;
    setActiveLang(lang);
    persistLang(lang);
    applyLangUI(lang);
    applyDonationOrder(lang);
    applyI18n();
    refreshNickChip(loadState());
    void dispatch(currentRoute);
  });

  // 테마
  $('#themeBtn')?.addEventListener('click', () => {
    const next: Theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
  });

  // 뒤로가기 / 브랜드 홈
  $('#backBtn')?.addEventListener('click', () => {
    if (currentRoute.name === 'lesson') {
      navigate({ name: 'curriculum', curriculumId: currentRoute.curriculumId });
    } else if (currentRoute.name === 'curriculum') {
      navigate({ name: 'home' });
    }
  });
  const brand = $('#brandHome');
  brand?.addEventListener('click', () => navigate({ name: 'home' }));
  brand?.addEventListener('keydown', (e) => {
    if (e instanceof KeyboardEvent && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      navigate({ name: 'home' });
    }
  });

  // 닉네임 시트
  $('#nickChip')?.addEventListener('click', () => openSheet('nickScrim'));
  $('#saveNickBtn')?.addEventListener('click', () => {
    const input = $<HTMLInputElement>('#nickInput');
    const value = input?.value.trim();
    if (!value) return;
    const state = setNickname(value);
    refreshNickChip(state);
    closeSheet($('#nickScrim'));
  });

  // 저장 안내 CTA → 저장 시트
  $('#openStorageBtn')?.addEventListener('click', () => openSheet('storageScrim'));

  // 도네이션
  $('#openDonateBtn')?.addEventListener('click', () => {
    updateSaveAmount(loadState());
    openSheet('donateScrim');
  });
  $all<HTMLButtonElement>('[data-donate]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const channel = btn.dataset.donate as DonationChannel | undefined;
      if (!channel) return;
      markDonationClicked(channel);
      window.open(DONATION_LINKS[channel], '_blank', 'noopener,noreferrer');
    });
  });
  $('.close-free')?.addEventListener('click', () => markDonationDismissed());

  // Export / Import
  $('#exportBtn')?.addEventListener('click', () => {
    const ioText = $<HTMLTextAreaElement>('#ioText');
    if (!ioText) return;
    ioText.value = serializeStateToCode();
    ioText.select();
  });
  $('#importBtn')?.addEventListener('click', () => {
    const ioText = $<HTMLTextAreaElement>('#ioText');
    if (!ioText) return;
    try {
      const state = restoreStateFromCode(ioText.value);
      refreshNickChip(state);
      applyLangUI(state.lang);
      closeSheet($('#storageScrim'));
      void dispatch(currentRoute);
      showToast('✅', t('storage.import_done'));
    } catch {
      showToast('⚠️', t('error.generic'));
    }
  });

  // 시트 공통: 배경(scrim 자신) 클릭 또는 [data-close-sheet] 로 닫기
  $all('.scrim').forEach((scrim) => {
    scrim.addEventListener('click', (e) => {
      if (e.target === scrim) closeSheet(scrim);
    });
  });
  $all('[data-close-sheet]').forEach((btn) => {
    btn.addEventListener('click', () => closeSheet(btn.closest('.scrim')));
  });

  // 헤더 스크롤 그림자
  window.addEventListener('scroll', () => {
    $('#topbar')?.classList.toggle('scrolled', window.scrollY > 4);
  });
}

/* ------------------------------------------------------------------
 * 부트
 * ---------------------------------------------------------------- */
function boot(): void {
  // i18n: gh_state.lang 우선 → navigator.language → DEFAULT_LANG(ko). 최초 방문일 때만
  // navigator 감지를 태운다(state_storage 는 항상 lang 필드를 갖고 있어 이후 방문은 저장값 그대로 존중).
  const firstVisit = !hasStoredState();
  let state = loadState();
  const lang = firstVisit ? detectLang(null) : state.lang;
  if (firstVisit) state = persistLang(lang);
  setActiveLang(lang);
  applyI18n();
  applyLangUI(lang);
  applyDonationOrder(lang);
  refreshNickChip(state);

  applyTheme(getTheme());

  // welcome_back 판정은 lastActiveAt 을 지금 시각으로 갱신하기 전에 수행해야 한다(state_storage §5).
  const welcomeBack = evalWelcomeBack(state.lastActiveAt, state.nickname);
  touchLastActive();

  bindEvents();
  initRouter((route) => void dispatch(route));

  // 최초 진입 & 닉네임 미설정 시 1200ms 지연 유도(강제 아님, design_spec §4.13).
  if (!state.nickname) {
    window.setTimeout(() => openSheet('nickScrim'), 1200);
  }
  if (welcomeBack) {
    window.setTimeout(() => showToast(welcomeBack.emoji, welcomeBack.text), 700);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
