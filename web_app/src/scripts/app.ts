/**
 * Riff — 클라이언트 상호작용 부트스트랩 (Astro 2단계: localStorage 하이드레이션).
 * SSOT: technical_spec.md §8-A.5(STUB 1~6), design_spec.md(상태/모션).
 * 참조 구현(고아, `_legacy/`로 이동 보존): _legacy/main.ts, _legacy/views/*.ts, _legacy/router.ts.
 *
 * 전역 단일 진입점. Base.astro가 모든 페이지에서 `<script src=".../scripts/app.ts">`로 로드한다.
 *
 * View Transitions 재바인딩 전략(technical_spec §8-A.5 지침):
 *   - `document`/`window`는 소프트 내비게이션 간 동일 객체로 유지된다(ClientRouter가 <body> 콘텐츠만
 *     교체) → 이벤트 위임(document 레벨 delegated click/scroll/resize)을 1회만 바인딩하면 충분하다.
 *   - 반면 `<body>` 하위 요소(진행률 텍스트·완료 체크·시트 등)는 페이지 전환마다 새 DOM 노드로
 *     교체되므로, 상태 의존 값(진도율·완료 체크·닉네임 칩 등)은 `astro:page-load`마다 다시 채운다.
 *   - `astro:page-load`는 최초 로드 + 매 전환마다 발생한다. 중복 바인딩 방지는 `delegatesBound` 가드로.
 */
import { DEFAULT_CURRICULUM_ID, DONATION_CHANNELS, DONATION_ORDER, DREAM_ITEMS, SUPPORTED_LANGS } from '../config';
import type { DonationChannel, Lang } from '../config';
import {
  loadState,
  setNickname,
  setLang as persistLang,
  markDayComplete,
  markDayIncomplete,
  markDonationClicked,
  markDonationDismissed,
  setLastVisited,
  serializeStateToCode,
  restoreStateFromCode,
  touchLastActive,
} from '../lib/storage';
import { setActiveLang, t } from '../lib/i18n';
import { formatSavedMoney, getCompletedSet } from '../lib/progress';
import {
  evalAlmostThere,
  evalEnterWeek2,
  evalFinishMonth,
  evalFinishWeek,
  evalWelcomeBack,
} from '../lib/nudges';
import { burstConfetti, fitConfettiCanvas } from './confetti';
import { showToast } from './toast';
import type { GhState } from '../types/state';

/* ------------------------------------------------------------------
 * DOM 헬퍼
 * ---------------------------------------------------------------- */
function $<T extends Element = Element>(sel: string, root: ParentNode = document): T | null {
  return root.querySelector<T>(sel);
}
function $all<T extends Element = Element>(sel: string, root: ParentNode = document): T[] {
  return Array.from(root.querySelectorAll<T>(sel));
}
function setText(sel: string, value: string): void {
  const el = document.querySelector(sel);
  if (el) el.textContent = value;
}
function pct(done: number, total: number): number {
  return total > 0 ? Math.round((done / total) * 100) : 0;
}

/** `<html lang>`(Astro SSR이 페이지별로 심어둔 값)에서 현재 활성 언어를 읽는다. */
function currentLangFromDom(): Lang {
  const l = document.documentElement.lang;
  return (SUPPORTED_LANGS as readonly string[]).includes(l) ? (l as Lang) : 'ko';
}

/* ------------------------------------------------------------------
 * 바텀시트
 * ---------------------------------------------------------------- */
function openSheet(id: string): void {
  document.getElementById(id)?.classList.add('show');
}
function closeSheet(el: Element | null | undefined): void {
  el?.classList.remove('show');
}

/* ------------------------------------------------------------------
 * 닉네임 칩 / 아낀 레슨비 / 도네이션 채널 정렬
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

/** 현재 페이지가 속한 커리큘럼 id(레슨/커리큘럼 뷰의 data-curriculum, 없으면 기본값). */
function activeCurriculumId(): string {
  const el = document.querySelector<HTMLElement>('#view-curriculum, #view-lesson');
  return el?.dataset.curriculum ?? DEFAULT_CURRICULUM_ID;
}

function updateSaveAmount(state: GhState): void {
  const el = document.getElementById('saveAmount');
  if (!el) return;
  const formatted = formatSavedMoney(state, activeCurriculumId(), currentLangFromDom());
  el.innerHTML = t('progress.saved_money', { amount: `<b>${formatted}</b>` });
}

/**
 * "드림 기타" 후원 연출 — 마일스톤(월/커리큘럼 완료) 달성 시 도네이션 시트 대신 먼저 노출한다.
 * DREAM_ITEMS 중 랜덤 1개를 골라 이미지·이름·멘트를 채우고 컨페티와 함께 시트를 연다.
 */
function openDreamReveal(): void {
  const item = DREAM_ITEMS[Math.floor(Math.random() * DREAM_ITEMS.length)];
  if (!item) return;

  const img = document.getElementById('dreamImg') as HTMLImageElement | null;
  if (img) {
    img.src = item.img;
    img.alt = item.name;
  }
  setText('#dreamName', item.name);
  const instrument = t(item.type === 'bass' ? 'dream.bass' : 'dream.guitar');
  const line = document.getElementById('dreamLine');
  if (line) line.innerHTML = t('dream.line', { instrument });

  burstConfetti();
  openSheet('dreamScrim');
}

/** 도네이션 채널 노출 순서 — ko: 국내 채널 우선 / en·ja: 글로벌 채널 우선(design_spec §4.14). */
function applyDonationOrder(lang: Lang): void {
  const grid = document.getElementById('payGrid');
  if (!grid) return;
  DONATION_ORDER[lang].forEach((channel) => {
    const btn = grid.querySelector(`[data-donate="${channel}"]`);
    if (btn) grid.appendChild(btn); // appendChild 는 기존 노드를 이동시킨다 → 순서대로 재배치
  });
}

/**
 * 도네이션 시트 — 채널 리스트 뷰로 리셋(상세 뷰가 열려 있었다면 되돌린다).
 * 시트를 열 때마다(footer CTA·dream CTA) 호출해 항상 리스트에서 시작하게 한다.
 */
function resetDonateView(): void {
  document.getElementById('donateMain')?.removeAttribute('hidden');
  document.getElementById('donateQrView')?.setAttribute('hidden', '');
  currentDonateChannel = null;
}

/** 채널 상세 뷰 안에서 현재 열려 있는 채널(링크 버튼 클릭 시 markDonationClicked 재호출용). */
let currentDonateChannel: DonationChannel | null = null;

/** 터치/모바일 기기 판정 — 도네이션 상세 뷰의 QR/링크 기본 pane 선택에 쓰인다. */
function isCoarsePointer(): boolean {
  return typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
}

/** QR/링크 세그먼트 토글 — 두 pane 중 하나만 보이게 전환한다. */
function showDonateTab(tab: 'qr' | 'link'): void {
  const qrPane = document.getElementById('qrPane');
  const linkPane = document.getElementById('linkPane');
  qrPane?.toggleAttribute('hidden', tab !== 'qr');
  linkPane?.toggleAttribute('hidden', tab !== 'link');
  document.getElementById('tabQrBtn')?.classList.toggle('active', tab === 'qr');
  document.getElementById('tabLinkBtn')?.classList.toggle('active', tab === 'link');
}

/**
 * 채널 클릭 시 — 시트 안에서 리스트 대신 채널 상세 뷰(QR pane + 링크 pane)로 전환한다.
 * url/qr 둘 다 있으면 세그먼트 토글을 보여주고, 기본 선택은 기기별로 갈린다:
 * 데스크톱(정밀 포인터) → QR 먼저, 모바일/터치(coarse 포인터) → 링크 먼저.
 * 한쪽만 있으면 토글 없이 그 pane만 보여준다.
 */
function showDonateChannel(channel: DonationChannel): void {
  const cfg = DONATION_CHANNELS[channel];
  currentDonateChannel = channel;

  const img = document.getElementById('qrImg') as HTMLImageElement | null;
  if (img) {
    img.src = cfg.qr ?? '';
    img.alt = t(`donate.${channel}`);
  }

  const linkBtn = document.getElementById('qrLinkBtn') as HTMLAnchorElement | null;
  if (linkBtn) {
    if (cfg.url) {
      linkBtn.href = cfg.url;
      if (/^https?:\/\//i.test(cfg.url)) {
        linkBtn.target = '_blank';
        linkBtn.rel = 'noopener noreferrer';
      } else {
        // 앱 딥링크(예: supertoss://) — 새 탭 강제 없이 OS/브라우저가 네이티브로 처리하게 둔다.
        linkBtn.removeAttribute('target');
        linkBtn.removeAttribute('rel');
      }
    } else {
      linkBtn.removeAttribute('href');
    }
  }

  const hasQr = !!cfg.qr;
  const hasLink = !!cfg.url;
  const tabs = document.getElementById('donateTabs');
  if (tabs) tabs.hidden = !(hasQr && hasLink);

  let defaultTab: 'qr' | 'link' = hasQr ? 'qr' : 'link';
  if (hasQr && hasLink) defaultTab = isCoarsePointer() ? 'link' : 'qr';
  showDonateTab(defaultTab);

  document.getElementById('donateMain')?.setAttribute('hidden', '');
  document.getElementById('donateQrView')?.removeAttribute('hidden');
}

/* ------------------------------------------------------------------
 * 커리큘럼 진도 하이드레이션 (STUB 1) — manifest 재조회 없이 SSR DOM(.month/.week/.day
 * data-* 훅)만으로 계산한다. 총 Day 수·구조는 이미 정적 HTML 에 있으므로 클라이언트가
 * manifest.json 을 다시 불러올 필요가 없다(번들 경량화, technical_spec §10).
 * ---------------------------------------------------------------- */
function hydrateCurriculum(state: GhState): void {
  const view = document.getElementById('view-curriculum');
  if (!view) return;
  const curriculumId = view.dataset.curriculum;
  if (!curriculumId) return;

  const totalDays = Number(view.dataset.totalDays ?? '0');
  const completed = getCompletedSet(state, curriculumId);

  const donePct = pct(completed.size, totalDays);
  setText('#progPct', String(donePct));
  setText('#progDone', String(completed.size));
  const fill = document.getElementById('progFill');
  if (fill) fill.style.width = `${donePct}%`;

  const monthEls = $all<HTMLElement>('.month[data-month]', view);
  const lastVisited = state.progress[curriculumId]?.lastVisited ?? null;

  // 초기 열림 월 판정: lastVisited 를 포함한 월 → 없으면 첫 미완료 월 → 없으면 첫 월.
  let targetMonth: HTMLElement | null = null;
  if (lastVisited) {
    targetMonth = monthEls.find((m) => $(`.day[data-day="${lastVisited}"]`, m)) ?? null;
  }
  if (!targetMonth) {
    targetMonth =
      monthEls.find((m) => {
        if (m.classList.contains('soon')) return false;
        const days = $all<HTMLElement>('.day[data-day]', m);
        if (days.length === 0) return false;
        const done = days.filter((d) => completed.has(d.dataset.day!)).length;
        return done < days.length;
      }) ??
      monthEls[0] ??
      null;
  }

  monthEls.forEach((monthEl) => {
    const soon = monthEl.classList.contains('soon');
    const dayEls = $all<HTMLElement>('.day[data-day]', monthEl);
    const done = dayEls.filter((d) => completed.has(d.dataset.day!)).length;
    const isDone = !soon && dayEls.length > 0 && done === dayEls.length;
    const isTargetMonth = !soon && monthEl === targetMonth;

    monthEl.classList.toggle('done', isDone);
    if (!soon) {
      monthEl.classList.toggle('open', isTargetMonth);
      $('.month-head', monthEl)?.setAttribute('aria-expanded', String(isTargetMonth));

      const numEl = $('.month-num', monthEl);
      if (numEl) numEl.textContent = isDone ? '✓' : (monthEl.dataset.month ?? '');
      const small = $('.t small', monthEl);
      if (small) {
        small.textContent = isDone ? t('months.done') : `${done}/${dayEls.length} ${t('curr.month.days')}`;
      }
    }

    // 목표 월 안에서만: lastVisited 를 포함한 주 → 없으면 첫 미완료 주 → 없으면 첫 주를 펼친다.
    const weekEls = $all<HTMLElement>('.week[data-week]', monthEl);
    let targetWeek: HTMLElement | null = null;
    if (isTargetMonth) {
      if (lastVisited) {
        targetWeek = weekEls.find((w) => $(`.day[data-day="${lastVisited}"]`, w)) ?? null;
      }
      if (!targetWeek) {
        targetWeek =
          weekEls.find((w) => {
            const wDays = $all<HTMLElement>('.day[data-day]', w);
            if (wDays.length === 0) return false;
            const wDone = wDays.filter((d) => completed.has(d.dataset.day!)).length;
            return wDone < wDays.length;
          }) ??
          weekEls[0] ??
          null;
      }
    }

    weekEls.forEach((weekEl) => {
      const wDayEls = $all<HTMLElement>('.day[data-day]', weekEl);
      const wDone = wDayEls.filter((d) => completed.has(d.dataset.day!)).length;
      const wPct = pct(wDone, wDayEls.length);
      const fillEl = $<HTMLElement>('.wp i', weekEl);
      if (fillEl) fillEl.style.width = `${wPct}%`;
      const pctText = $('.wp-pct', weekEl);
      if (pctText) pctText.textContent = `${wPct}%`;
      const wIsDone = wDayEls.length > 0 && wDone === wDayEls.length;
      weekEl.classList.toggle('done', wIsDone);

      const weekOpen = weekEl === targetWeek;
      weekEl.classList.toggle('open', weekOpen);
      $('.week-head', weekEl)?.setAttribute('aria-expanded', String(weekOpen));

      wDayEls.forEach((dayEl) => dayEl.classList.toggle('done', completed.has(dayEl.dataset.day!)));
    });
  });
}

/* ------------------------------------------------------------------
 * 레슨 진도 하이드레이션 (STUB 1) + 완료 액션 (STUB 2)
 * ---------------------------------------------------------------- */
function hydrateLesson(state: GhState): void {
  const view = document.getElementById('view-lesson');
  if (!view) return;
  const curriculumId = view.dataset.curriculum;
  const dayKey = view.dataset.day;
  if (!curriculumId || !dayKey) return;

  const completed = getCompletedSet(state, curriculumId).has(dayKey);
  const completeBtn = document.getElementById('completeBtn');
  const doneState = document.getElementById('doneState');
  if (completeBtn) completeBtn.style.display = completed ? 'none' : 'flex';
  if (doneState) doneState.style.display = completed ? 'flex' : 'none';
}

/** 레슨 페이지 진입 시 1회: 마지막 열람 Day 기록 + 2주차 진입 넛지(state_storage §5). */
function onLessonEnter(state: GhState): void {
  const view = document.getElementById('view-lesson');
  if (!view) return;
  const curriculumId = view.dataset.curriculum;
  const dayKey = view.dataset.day;
  if (!curriculumId || !dayKey) return;

  setLastVisited(curriculumId, dayKey);

  const week = Number(view.dataset.week ?? 'NaN');
  if (!Number.isNaN(week)) {
    const nudge = evalEnterWeek2(week, state.nickname);
    if (nudge) showToast(nudge.emoji, nudge.text);
  }
}

/**
 * 완료 버튼 클릭 처리 — 진도 갱신 + 컨페티 + 넛지 토스트.
 * 큰 마일스톤(월 완료·커리큘럼 완료)에서만 도네이션 시트를 자동으로 연다. 주 완주는 토스트만
 * (technical_spec §8-A.5 STUB 2, 2단계 지침 — 목업/구 main.ts 의 "주 완료마다 오픈" 동작보다 조건 강화).
 */
function handleComplete(): void {
  const view = document.getElementById('view-lesson');
  if (!view) return;
  const curriculumId = view.dataset.curriculum;
  const dayKey = view.dataset.day;
  if (!curriculumId || !dayKey) return;

  const before = loadState();
  const alreadyDone = getCompletedSet(before, curriculumId).has(dayKey);
  const state = markDayComplete(curriculumId, dayKey);
  hydrateLesson(state);
  if (alreadyDone) return;

  burstConfetti();

  const month = Number(view.dataset.month ?? 'NaN');
  const week = Number(view.dataset.week ?? 'NaN');
  const weekDayKeys = (view.dataset.weekDays ?? '').split(',').filter(Boolean);
  const monthDayKeys = (view.dataset.monthDays ?? '').split(',').filter(Boolean);
  const curriculumTotalDays = Number(view.dataset.curriculumTotalDays ?? '0');
  const completedSet = getCompletedSet(state, curriculumId);

  let milestone = false;

  if (!Number.isNaN(month) && !Number.isNaN(week) && weekDayKeys.length > 0) {
    const wDone = weekDayKeys.filter((k) => completedSet.has(k)).length;
    const remainingInWeek = weekDayKeys.length - wDone;

    const almostThere = evalAlmostThere(month, week, remainingInWeek);
    if (almostThere) showToast(almostThere.emoji, almostThere.text);

    const finishedWeek = evalFinishWeek(month, week, remainingInWeek, state.nickname);
    if (finishedWeek) showToast(finishedWeek.emoji, finishedWeek.text); // 토스트만 — 시트는 열지 않음
  }

  if (monthDayKeys.length > 0) {
    const mDone = monthDayKeys.filter((k) => completedSet.has(k)).length;
    const monthAllDone = mDone === monthDayKeys.length;
    const finishedMonth = evalFinishMonth(monthAllDone);
    if (finishedMonth) showToast(finishedMonth.emoji, finishedMonth.text);
    if (monthAllDone) milestone = true;
  }

  if (curriculumTotalDays > 0 && completedSet.size >= curriculumTotalDays) {
    milestone = true;
  }

  if (milestone) {
    window.setTimeout(() => {
      openDreamReveal();
    }, 900);
  }
}

/**
 * 완료 실행취소(undo) — 실수로 누른 완료를 되돌린다.
 * 컨페티·넛지·도네이션 시트는 절대 트리거하지 않는다(순수 상태 되돌리기 + 하이드레이션만).
 * 넛지 dedup 키(nudges.shown, finish_week/finish_month 등)는 롤백하지 않는다 — 수용 가능한 엣지케이스:
 * 재완료 시 해당 마일스톤 토스트가 다시 뜨지 않을 수 있다(state_storage §5 는 "1회 노출"이 정책이라
 * undo 후 재완료를 "새로운 완료"로 재해석해 토스트를 다시 띄우는 것이 오히려 정책 밖의 특례가 된다).
 */
function handleUndo(): void {
  const view = document.getElementById('view-lesson');
  if (!view) return;
  const curriculumId = view.dataset.curriculum;
  const dayKey = view.dataset.day;
  if (!curriculumId || !dayKey) return;

  const state = markDayIncomplete(curriculumId, dayKey);
  hydrateLesson(state);
}

/* ------------------------------------------------------------------
 * 악기 필터 칩 (랜딩 #instrumentFilter) — 커리큘럼이 늘어도 하드코딩 분기 없이
 * data-instrument 값으로만 카드를 in-place 필터한다. 칩 자체의 노출 여부(2종 이상일 때만)는
 * SSR(HomeView.astro)이 이미 판정해 `hidden` 을 심어두므로, 여기서는 클릭 시 필터링만 담당.
 * ---------------------------------------------------------------- */
function applyInstrumentFilter(chip: HTMLElement): void {
  const filterRoot = chip.closest('#instrumentFilter');
  if (!filterRoot) return;
  const value = chip.dataset.filterInstrument ?? 'all';

  $all<HTMLElement>('.chip-btn', filterRoot).forEach((btn) => {
    btn.classList.toggle('active', btn === chip);
  });

  $all<HTMLElement>('#currList .curr-card').forEach((card) => {
    const show = value === 'all' || card.dataset.instrument === value;
    card.style.display = show ? '' : 'none';
  });
}

/* ------------------------------------------------------------------
 * 이벤트 위임 (document/window 1회 바인딩 — STUB 2·3·5)
 * ---------------------------------------------------------------- */
let delegatesBound = false;

function bindDelegatesOnce(): void {
  if (delegatesBound) return;
  delegatesBound = true;

  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;

    if (target.closest('#completeBtn')) {
      handleComplete();
      return;
    }

    if (target.closest('#undoBtn, [data-undo]')) {
      handleUndo();
      return;
    }

    const filterChip = target.closest<HTMLElement>('[data-filter-instrument]');
    if (filterChip) {
      applyInstrumentFilter(filterChip);
      return;
    }

    const monthHead = target.closest('.month-head');
    if (monthHead) {
      const monthEl = target.closest('.month');
      if (monthEl && !monthEl.classList.contains('soon')) {
        const willOpen = !monthEl.classList.contains('open');
        monthEl.classList.toggle('open', willOpen);
        monthHead.setAttribute('aria-expanded', String(willOpen));
      }
      return;
    }

    const weekHead = target.closest('.week-head');
    if (weekHead) {
      const weekEl = target.closest('.week');
      if (weekEl) {
        const willOpen = !weekEl.classList.contains('open');
        weekEl.classList.toggle('open', willOpen);
        weekHead.setAttribute('aria-expanded', String(willOpen));
      }
      return;
    }

    if (target.closest('#nickChip')) {
      openSheet('nickScrim');
      return;
    }
    if (target.closest('#saveNickBtn')) {
      const input = document.getElementById('nickInput') as HTMLInputElement | null;
      const value = input?.value.trim();
      if (value) refreshNickChip(setNickname(value));
      closeSheet(document.getElementById('nickScrim'));
      return;
    }

    if (target.closest('#openStorageBtn')) {
      openSheet('storageScrim');
      return;
    }
    if (target.closest('#exportBtn')) {
      const ioText = document.getElementById('ioText') as HTMLTextAreaElement | null;
      if (ioText) {
        ioText.value = serializeStateToCode();
        ioText.select();
        showToast('✅', t('storage.export_done'));
      }
      return;
    }
    if (target.closest('#importBtn')) {
      const ioText = document.getElementById('ioText') as HTMLTextAreaElement | null;
      if (ioText) {
        try {
          const state = restoreStateFromCode(ioText.value);
          refreshNickChip(state);
          hydrateCurriculum(state);
          hydrateLesson(state);
          closeSheet(document.getElementById('storageScrim'));
          showToast('✅', t('storage.import_done'));
        } catch {
          showToast('⚠️', t('error.generic'));
        }
      }
      return;
    }

    if (target.closest('#openDonateBtn')) {
      updateSaveAmount(loadState());
      resetDonateView();
      openSheet('donateScrim');
      return;
    }
    if (target.closest('#dreamDonateBtn')) {
      closeSheet(document.getElementById('dreamScrim'));
      updateSaveAmount(loadState());
      resetDonateView();
      openSheet('donateScrim');
      return;
    }
    if (target.closest('#qrBackBtn')) {
      resetDonateView();
      return;
    }
    const donateBtn = target.closest<HTMLElement>('[data-donate]');
    if (donateBtn) {
      const channel = donateBtn.dataset.donate as DonationChannel | undefined;
      if (!channel || !(channel in DONATION_CHANNELS)) return;
      const cfg = DONATION_CHANNELS[channel];
      if (!cfg.url && !cfg.qr) return; // 준비 중 채널 — SSR이 이미 disabled 처리했지만 방어적으로 한 번 더 막는다.
      markDonationClicked(channel);
      showDonateChannel(channel);
      return;
    }
    const donateTabBtn = target.closest<HTMLElement>('[data-donate-tab]');
    if (donateTabBtn) {
      const tab = donateTabBtn.dataset.donateTab as 'qr' | 'link' | undefined;
      if (tab) showDonateTab(tab);
      return;
    }
    if (target.closest('#qrLinkBtn')) {
      // 실제 이동은 <a href> 기본 동작에 맡긴다(preventDefault 하지 않음) — 클릭 기록만 남긴다.
      if (currentDonateChannel) markDonationClicked(currentDonateChannel);
      return;
    }
    if (target.closest('.close-free')) {
      markDonationDismissed();
      // 아래 [data-close-sheet] 처리로 계속 이어져 시트도 닫는다.
    }

    const closeTrigger = target.closest('[data-close-sheet]');
    if (closeTrigger) {
      closeSheet(closeTrigger.closest('.scrim'));
      return;
    }
    if (target.classList.contains('scrim')) {
      closeSheet(target);
    }
  });

  window.addEventListener(
    'scroll',
    () => {
      document.getElementById('topbar')?.classList.toggle('scrolled', window.scrollY > 4);
    },
    { passive: true },
  );

  window.addEventListener('resize', () => fitConfettiCanvas());
}

/* ------------------------------------------------------------------
 * 부트 — astro:page-load 마다 실행(최초 로드 포함, ClientRouter 소프트 내비게이션 대응)
 * ---------------------------------------------------------------- */
let bootDone = false;

function onPageLoad(): void {
  bindDelegatesOnce();

  const lang = currentLangFromDom();
  setActiveLang(lang);

  let state = loadState();
  if (state.lang !== lang) state = persistLang(lang);

  applyDonationOrder(lang);
  refreshNickChip(state);
  fitConfettiCanvas();

  hydrateCurriculum(state);
  onLessonEnter(state);
  hydrateLesson(state);

  // 세션(소프트 내비게이션 전체) 당 1회만: 닉네임 유도 + welcome_back(state_storage §5).
  if (!bootDone) {
    bootDone = true;
    const welcomeBack = evalWelcomeBack(state.lastActiveAt, state.nickname);
    touchLastActive();

    if (!state.nickname) {
      window.setTimeout(() => openSheet('nickScrim'), 1200);
    }
    if (welcomeBack) {
      window.setTimeout(() => showToast(welcomeBack.emoji, welcomeBack.text), 700);
    }
  }
}

document.addEventListener('astro:page-load', onPageLoad);
