/**
 * 사전 로드 · 언어 감지 · dot-path resolve · data-i 바인딩.
 * SSOT: technical_spec.md §7, _design_docs/04_localization/i18n_key_map.md.
 *
 * flatten 4키(§7.4) 주의 — 목업 원문(`home.storage.cta` 등)을 그대로 dot-path 로 쓰지 않는다:
 *   home.storage.cta   → home.storage_cta
 *   lesson.chord.note  → lesson.chord_note
 *   lesson.tab.note    → lesson.tab_note
 *   storage.io.placeholder → storage.io_placeholder
 */
import ko from '../i18n/ko.json';
import en from '../i18n/en.json';
import ja from '../i18n/ja.json';
import { SUPPORTED_LANGS, DEFAULT_LANG } from '../config';
import type { Lang } from '../config';

type Dict = Record<string, unknown>;

const DICTS: Record<Lang, Dict> = { ko, en, ja };

let currentLang: Lang = DEFAULT_LANG;

function isSupportedLang(v: string | null | undefined): v is Lang {
  return !!v && (SUPPORTED_LANGS as readonly string[]).includes(v);
}

/** gh_state.lang 우선 → navigator.language 프리픽스 → 폴백 DEFAULT_LANG(ko). */
export function detectLang(stored?: string | null): Lang {
  if (isSupportedLang(stored)) return stored;
  const nav = typeof navigator !== 'undefined' ? navigator.language : undefined;
  const prefix = nav?.slice(0, 2).toLowerCase();
  if (isSupportedLang(prefix)) return prefix;
  return DEFAULT_LANG;
}

/**
 * 현재 활성 언어(메모리 캐시)를 바꾼다. gh_state.lang 영속화는 storage.ts 의
 * setLang(persist) 이 담당 — 이름 충돌을 피하려고 이 함수는 setActiveLang 으로 명명한다.
 */
export function setActiveLang(lang: Lang): void {
  currentLang = lang;
}

export function getActiveLang(): Lang {
  return currentLang;
}

function resolvePath(dict: Dict, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object') return (acc as Dict)[key];
    return undefined;
  }, dict);
}

/** dot-path 사전 조회 + 폴백(ko) + `{placeholder}` 보간. 미스 시 키 원문 반환. */
export function t(key: string, params?: Record<string, string | number>): string {
  let value = resolvePath(DICTS[currentLang], key);
  if (typeof value !== 'string') value = resolvePath(DICTS[DEFAULT_LANG], key);
  if (typeof value !== 'string') return key;
  let out = value;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      out = out.replaceAll(`{${k}}`, String(v));
    }
  }
  return out;
}

/** [data-i]/[data-i-html]/[data-i-ph] 스캔 + document.lang 갱신(목업 승계, §7.1). */
export function applyI18n(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-i]').forEach((el) => {
    const key = el.dataset.i;
    if (key) el.textContent = t(key);
  });
  root.querySelectorAll<HTMLElement>('[data-i-html]').forEach((el) => {
    const key = el.dataset.iHtml;
    if (key) el.innerHTML = t(key);
  });
  root
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-i-ph]')
    .forEach((el) => {
      const key = el.dataset.iPh;
      if (key) el.placeholder = t(key);
    });
  document.documentElement.lang = currentLang;
}
