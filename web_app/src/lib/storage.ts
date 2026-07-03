/**
 * gh_state 로더/세이버 — localStorage 단일 키 래퍼 + 인메모리 폴백.
 * SSOT: _design_docs/01_architecture/state_storage.md (§2 스키마, §5 nudge dedup, §6 예외처리, §8 API).
 * 정합: web_app/docs/technical_spec.md §6.1.
 *
 * localStorage 직접 접근은 이 파일로만 한정한다(technical_spec §3.1).
 */
import { STORAGE_KEY, STATE_SCHEMA_VERSION, DEFAULT_LANG, THEME_KEY } from '../config';
import type { Lang, DonationChannel } from '../config';
import type { GhState, CurriculumProgress } from '../types/state';

/* ------------------------------------------------------------------
 * 0. 저장 백엔드 — localStorage 우선, 차단/시크릿 시 인메모리 폴백.
 * ---------------------------------------------------------------- */
const mem: Record<string, string> = {};
let blocked = false;

const backend = {
  get(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      blocked = true;
      return key in mem ? mem[key]! : null;
    }
  },
  set(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      blocked = true;
      mem[key] = value;
    }
  },
};

/** localStorage 가 차단됐거나(시크릿 등) 예외로 폴백 중인지 여부. */
export function isStorageBlocked(): boolean {
  return blocked;
}

/* ------------------------------------------------------------------
 * 1. 기본값 & 타입가드
 * ---------------------------------------------------------------- */
function nowIso(): string {
  return new Date().toISOString();
}

function defaultState(): GhState {
  const ts = nowIso();
  return {
    schemaVersion: STATE_SCHEMA_VERSION,
    nickname: null,
    lang: DEFAULT_LANG,
    createdAt: ts,
    lastActiveAt: ts,
    progress: {},
    nudges: { shown: [] },
    donation: { dismissedAt: null, clicked: [] },
    flags: { storageWarningAck: false },
  };
}

/** 파싱된 미지 데이터를 안전하게 GhState 로 보정한다(누락 필드=기본값, 크래시 금지). */
function coerceState(raw: unknown): GhState {
  const base = defaultState();
  if (!raw || typeof raw !== 'object') return base;
  const r = raw as Record<string, unknown>;

  const lang: Lang =
    r.lang === 'ko' || r.lang === 'en' || r.lang === 'ja' ? r.lang : base.lang;

  const progress: Record<string, CurriculumProgress> = {};
  if (r.progress && typeof r.progress === 'object') {
    for (const [curriculumId, entry] of Object.entries(r.progress as Record<string, unknown>)) {
      if (!entry || typeof entry !== 'object') continue;
      const e = entry as Record<string, unknown>;
      const completedDays = Array.isArray(e.completedDays)
        ? e.completedDays.filter((d): d is string => typeof d === 'string')
        : [];
      const lastVisited = typeof e.lastVisited === 'string' ? e.lastVisited : null;
      progress[curriculumId] = { completedDays: [...new Set(completedDays)], lastVisited };
    }
  }

  const nudgesShown =
    r.nudges &&
    typeof r.nudges === 'object' &&
    Array.isArray((r.nudges as Record<string, unknown>).shown)
      ? ((r.nudges as Record<string, unknown>).shown as unknown[]).filter(
          (v): v is string => typeof v === 'string',
        )
      : [];

  const donationRaw =
    r.donation && typeof r.donation === 'object' ? (r.donation as Record<string, unknown>) : {};
  const clicked = Array.isArray(donationRaw.clicked)
    ? (donationRaw.clicked as unknown[]).filter((v): v is string => typeof v === 'string')
    : [];

  const flagsRaw =
    r.flags && typeof r.flags === 'object' ? (r.flags as Record<string, unknown>) : {};

  return {
    schemaVersion: typeof r.schemaVersion === 'number' ? r.schemaVersion : base.schemaVersion,
    nickname: typeof r.nickname === 'string' ? r.nickname : null,
    lang,
    createdAt: typeof r.createdAt === 'string' ? r.createdAt : base.createdAt,
    lastActiveAt: typeof r.lastActiveAt === 'string' ? r.lastActiveAt : base.lastActiveAt,
    progress,
    nudges: { shown: nudgesShown },
    donation: {
      dismissedAt: typeof donationRaw.dismissedAt === 'string' ? donationRaw.dismissedAt : null,
      clicked: clicked as DonationChannel[],
    },
    flags: { storageWarningAck: flagsRaw.storageWarningAck === true },
  };
}

/** schemaVersion 마이그레이션 체인. 현재는 v1 단일 스키마라 통과만 시킨다. */
function migrate(state: GhState): GhState {
  if (state.schemaVersion < STATE_SCHEMA_VERSION) {
    return { ...state, schemaVersion: STATE_SCHEMA_VERSION };
  }
  return state;
}

/* ------------------------------------------------------------------
 * 2. 핵심 API (state_storage.md §8)
 * ---------------------------------------------------------------- */
/** gh_state 가 이미 저장소에 존재하는지(최초 방문 여부 판정 — i18n 언어 감지 §7.1 에 필요). */
export function hasStoredState(): boolean {
  return backend.get(STORAGE_KEY) !== null;
}

export function loadState(): GhState {
  const raw = backend.get(STORAGE_KEY);
  if (!raw) return defaultState();
  try {
    const parsed = JSON.parse(raw) as unknown;
    return migrate(coerceState(parsed));
  } catch {
    // 파싱 실패/손상 — 백업 후 초기화(state_storage §6).
    backend.set(`${STORAGE_KEY}_corrupt_${Date.now()}`, raw);
    return defaultState();
  }
}

export function saveState(next: GhState): void {
  const payload = JSON.stringify(next);
  try {
    backend.set(STORAGE_KEY, payload);
  } catch (err) {
    // QuotaExceeded 등 — 손상 백업분 정리 후 1회 재시도.
    try {
      if (typeof localStorage !== 'undefined') {
        for (let i = localStorage.length - 1; i >= 0; i--) {
          const k = localStorage.key(i);
          if (k && k.startsWith(`${STORAGE_KEY}_corrupt_`)) localStorage.removeItem(k);
        }
      }
      backend.set(STORAGE_KEY, payload);
    } catch {
      blocked = true;
      mem[STORAGE_KEY] = payload;
    }
    void err;
  }
}

/** 최근 활동 시각을 지금으로 갱신한다. welcome_back 넛지 판정 이후 호출할 것. */
export function touchLastActive(): GhState {
  const state = loadState();
  const next: GhState = { ...state, lastActiveAt: nowIso() };
  saveState(next);
  return next;
}

export function setNickname(nickname: string): GhState {
  const state = loadState();
  const next: GhState = { ...state, nickname };
  saveState(next);
  return next;
}

export function setLang(lang: Lang): GhState {
  const state = loadState();
  const next: GhState = { ...state, lang };
  saveState(next);
  return next;
}

export function markDayComplete(curriculumId: string, dayKey: string): GhState {
  const state = loadState();
  const prev = state.progress[curriculumId] ?? { completedDays: [], lastVisited: null };
  const completedDays = prev.completedDays.includes(dayKey)
    ? prev.completedDays
    : [...prev.completedDays, dayKey];
  const next: GhState = {
    ...state,
    progress: {
      ...state.progress,
      [curriculumId]: { completedDays, lastVisited: dayKey },
    },
  };
  saveState(next);
  return next;
}

/** markDayComplete 의 반대 동작 — 완료 실행취소(undo). 없는 항목이면 no-op. */
export function markDayIncomplete(curriculumId: string, dayKey: string): GhState {
  const state = loadState();
  const prev = state.progress[curriculumId];
  if (!prev || !prev.completedDays.includes(dayKey)) return state;
  const completedDays = prev.completedDays.filter((d) => d !== dayKey);
  const next: GhState = {
    ...state,
    progress: {
      ...state.progress,
      [curriculumId]: { ...prev, completedDays },
    },
  };
  saveState(next);
  return next;
}

export function setLastVisited(curriculumId: string, dayKey: string): GhState {
  const state = loadState();
  const prev = state.progress[curriculumId] ?? { completedDays: [], lastVisited: null };
  const next: GhState = {
    ...state,
    progress: { ...state.progress, [curriculumId]: { ...prev, lastVisited: dayKey } },
  };
  saveState(next);
  return next;
}

export function hasSeenNudge(id: string): boolean {
  return loadState().nudges.shown.includes(id);
}

export function markNudgeShown(id: string): GhState {
  const state = loadState();
  if (state.nudges.shown.includes(id)) return state;
  const next: GhState = { ...state, nudges: { shown: [...state.nudges.shown, id] } };
  saveState(next);
  return next;
}

export function markDonationDismissed(): GhState {
  const state = loadState();
  const next: GhState = { ...state, donation: { ...state.donation, dismissedAt: nowIso() } };
  saveState(next);
  return next;
}

export function markDonationClicked(channel: DonationChannel): GhState {
  const state = loadState();
  if (state.donation.clicked.includes(channel)) return state;
  const next: GhState = {
    ...state,
    donation: { ...state.donation, clicked: [...state.donation.clicked, channel] },
  };
  saveState(next);
  return next;
}

/* ------------------------------------------------------------------
 * 3. Export / Import (state_storage §6.4·§8)
 * ---------------------------------------------------------------- */

/** gh_state 전체를 JSON Blob 으로 내보낸다(§8 시그니처). */
export function exportState(): Blob {
  return new Blob([JSON.stringify(loadState(), null, 2)], { type: 'application/json' });
}

/** File(Export 로 받은 JSON 파일)을 읽어 상태를 복원한다(§8 시그니처). */
export function importState(file: File): Promise<GhState> {
  return file.text().then((text) => {
    const next = coerceState(JSON.parse(text));
    saveState(next);
    return next;
  });
}

/** 저장 시트 textarea 용 — gh_state → base64 텍스트 코드. */
export function serializeStateToCode(): string {
  const json = JSON.stringify(loadState());
  return btoa(unescape(encodeURIComponent(json)));
}

/**
 * 저장 시트 textarea 용 — base64 코드 → gh_state 복원.
 * 실패 시 예외를 던진다(호출부에서 error.* 토스트로 안내).
 */
export function restoreStateFromCode(code: string): GhState {
  const json = decodeURIComponent(escape(atob(code.trim())));
  const next = coerceState(JSON.parse(json));
  saveState(next);
  return next;
}

/* ------------------------------------------------------------------
 * 4. 테마 — gh_state 스키마 밖의 독립 선호값이지만(state_storage.md §2 미포함),
 *    "localStorage 직접 접근 금지" 규칙(technical_spec §3.1)을 지키기 위해
 *    이 파일의 backend 래퍼(인메모리 폴백 포함)를 재사용한다(design_spec §6).
 * ---------------------------------------------------------------- */
export type Theme = 'light' | 'dark';

export function getTheme(): Theme {
  return backend.get(THEME_KEY) === 'dark' ? 'dark' : 'light';
}

export function setTheme(theme: Theme): void {
  backend.set(THEME_KEY, theme);
}
