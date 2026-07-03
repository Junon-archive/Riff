/**
 * Riff 전역 상수.
 * 정본: web_app/docs/technical_spec.md §11.
 * 목업의 언어별 상이 단가/도네이션 하드코딩은 폐기하고 여기서 단일화한다.
 */

export const SUPPORTED_LANGS = ['ko', 'en', 'ja'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const DEFAULT_LANG: Lang = 'ko';

/** 가상 레슨 단가 — 아낀 레슨비 = 완료 Day 수 × 이 값 (원). */
export const VIRTUAL_LESSON_PRICE = 20000; // ₩20,000 / Day

/** localStorage 단일 키 + 스키마 버전 (state_storage.md). */
export const STORAGE_KEY = 'gh_state';
export const STATE_SCHEMA_VERSION = 1;

/** 테마 저장 키 (design_spec §6). */
export const THEME_KEY = 'riff_theme';

/** 기본(현재 유일) 커리큘럼 id. 콘텐츠 파이프라인 산출물 경로와 일치. */
export const DEFAULT_CURRICULUM_ID = 'solo_scale_3months';

/**
 * 도네이션 링크 — 실제 결제 연동 전 플레이스홀더 상수.
 * i18n 라벨은 donate.toss/kakaopay/paypal/bmc 키가 담당(하드코딩 금지, §7.4).
 */
export const DONATION_LINKS = {
  toss: 'https://example.com/donate/toss', // TODO: 실제 링크
  kakaopay: 'https://example.com/donate/kakaopay', // TODO
  paypal: 'https://example.com/donate/paypal', // TODO
  bmc: 'https://example.com/donate/bmc', // TODO
} as const;

export type DonationChannel = keyof typeof DONATION_LINKS;

/**
 * 도네이션 채널 노출 우선순위(레이아웃 동일, 정렬만 변경) — design_spec §4.14 / translation_map §5.
 * ko: 국내 채널 우선, en/ja: 글로벌 채널 우선.
 */
export const DONATION_ORDER: Record<Lang, DonationChannel[]> = {
  ko: ['toss', 'kakaopay', 'paypal', 'bmc'],
  en: ['paypal', 'bmc', 'toss', 'kakaopay'],
  ja: ['paypal', 'bmc', 'toss', 'kakaopay'],
};
