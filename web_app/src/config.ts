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
 * 도네이션 채널 1개의 실 연동 정보.
 * - `url`/`qr` 둘 다 있으면: 버튼 클릭 시 시트 안에서 QR·링크 두 pane을 세그먼트 토글로 오가는
 *   상세 뷰로 전환한다(기본 선택은 기기별 — 데스크톱=QR, 모바일=링크, `app.ts` showDonateChannel 참조).
 * - 어느 한쪽만 있으면: 토글 없이 그 pane만 보여준다.
 * - 둘 다 비어있으면("" 또는 미지정): 버튼을 비활성화하고 "준비 중"으로 안내한다(강매·깨진 링크 방지).
 * 운영자는 이 값들만 채우면 된다(플러그앤플레이) — 코드 변경 불필요.
 */
export interface DonationChannelConfig {
  /** 외부 결제/후원 페이지 URL. */
  url?: string;
  /** QR 이미지 경로 — `public/donate/*.png` 기준 절대 경로(예: `/donate/kakaopay.png`). */
  qr?: string;
}

/**
 * 도네이션 채널 — 실 연동 값(운영자 확정, BMC는 한국 미지원으로 제외).
 * i18n 라벨은 donate.toss/kakaopay/paypal 키가 담당(하드코딩 금지, §7.4).
 */
export const DONATION_CHANNELS: Record<'toss' | 'kakaopay' | 'paypal', DonationChannelConfig> = {
  kakaopay: { url: 'https://qr.kakaopay.com/Ej8nJROmG', qr: '/donate/kakaopay.jpeg' },
  toss: {
    url: 'supertoss://send?amount=0&bank=%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC&accountNo=3333161555103&origin=qr',
    qr: '/donate/toss.jpeg',
  },
  paypal: { url: 'https://paypal.me/JunonLee', qr: '/donate/paypal.png' },
};

export type DonationChannel = keyof typeof DONATION_CHANNELS;

/** 채널에 실제 url/qr 이 하나도 없는(플레이스홀더) 상태 — 버튼 비활성화 판정에 사용. */
export function isDonationChannelPreparing(channel: DonationChannel): boolean {
  const cfg = DONATION_CHANNELS[channel];
  return !cfg.url && !cfg.qr;
}

/**
 * "드림 기타" 후원 연출(마일스톤 달성 시) — 등장 시 랜덤 1개 노출.
 * name 은 3언어 공통으로 영어 원문 그대로 표시(고유명사, 번역 대상 아님).
 * 이미지: public/dream/*.png (배경 제거).
 */
export interface DreamItem {
  img: string;
  name: string;
  type: 'guitar' | 'bass';
}

export const DREAM_ITEMS: DreamItem[] = [
  { img: '/dream/strat-cory-wong.png', name: 'Fender USA Stratocaster Cory Wong Signature', type: 'guitar' },
  { img: '/dream/prs-silversky.png', name: 'PRS SilverSky', type: 'guitar' },
  { img: '/dream/jazz-bass-v.png', name: 'Fender American Professional II Jazz Bass V', type: 'bass' },
];

/**
 * 도네이션 채널 노출 우선순위(레이아웃 동일, 정렬만 변경) — design_spec §4.14 / translation_map §5.
 * ko: 국내 채널 우선, en/ja: 글로벌 채널 우선.
 */
export const DONATION_ORDER: Record<Lang, DonationChannel[]> = {
  ko: ['kakaopay', 'toss', 'paypal'],
  en: ['paypal', 'kakaopay', 'toss'],
  ja: ['paypal', 'kakaopay', 'toss'],
};
