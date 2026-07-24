/**
 * 메트로놈 샘플 슬롯 — 빌드 타임 파일 존재 탐지(서버 전용, node:fs).
 * SSOT: 20_metronome.md B3 「샘플 슬롯 계약」.
 *
 * ⚠️ .astro 프런트매터(빌드 타임)에서만 import 할 것 — 클라이언트 번들로 나가면 안 된다.
 *
 * 계약(=CC0 확보 세션이 이 규약대로 파일만 떨구면 자동으로 켜진다):
 *   public/metronome/drum/{kick,snare,hihat}.m4a
 *   public/metronome/voice/{1..6}.m4a          (영어 One~Six, 6/8 의 6펄스까지 커버)
 *
 * 파일이 하나라도 빠지면 그 음색은 "준비 중"으로 비활성 렌더된다(합성 클릭은 항상 동작).
 * 확장자는 m4a 가 표준이지만, 확보 소스가 다른 포맷이어도 그대로 살 수 있게 아래 우선순위로
 * 탐색한다 → 실제로 찾은 URL 을 패널 data 속성(JSON)으로 내려 엔진이 그대로 fetch 한다.
 */
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/** 탐색 확장자 우선순위(표준=m4a). */
const EXTS = ['m4a', 'mp3', 'ogg', 'wav'] as const;

/** 드럼 키트 3종 슬롯 — 킥=강박 · 스네어=백비트 · 하이햇=나머지/세분. */
export const DRUM_SLOTS = ['kick', 'snare', 'hihat'] as const;
export type DrumSlot = (typeof DRUM_SLOTS)[number];

/** 목소리 카운트 슬롯 수(6/8 = 8분 6펄스가 최대). */
export const VOICE_SLOT_COUNT = 6;

const PUBLIC_DIR = new URL('../../public/', import.meta.url);

/** public 기준 상대경로(확장자 제외)를 실제 존재하는 URL 로 해석. 없으면 null. */
function resolveSample(basePath: string): string | null {
  for (const ext of EXTS) {
    const rel = `${basePath}.${ext}`;
    if (existsSync(fileURLToPath(new URL(rel, PUBLIC_DIR)))) return `/${rel}`;
  }
  return null;
}

export interface SampleManifest {
  /** 슬롯 3종이 모두 있을 때만 채워진다(부분 키트는 톤이 깨지므로 비활성). */
  drum: Record<DrumSlot, string> | null;
  /** 1~6 전부 있을 때만 채워진다. 키는 펄스 번호(1-based) 문자열. */
  voice: Record<string, string> | null;
}

/**
 * 빌드 타임 1회 탐지 → 패널의 `data-samples` JSON.
 * 반환 객체가 그대로 클라이언트로 내려가므로 순수 직렬화 가능한 값만 담는다.
 */
export function buildSampleManifest(): SampleManifest {
  const drumEntries = DRUM_SLOTS.map((slot) => [slot, resolveSample(`metronome/drum/${slot}`)] as const);
  const drumComplete = drumEntries.every(([, url]) => url !== null);

  const voiceEntries = Array.from({ length: VOICE_SLOT_COUNT }, (_, i) => {
    const n = String(i + 1);
    return [n, resolveSample(`metronome/voice/${n}`)] as const;
  });
  const voiceComplete = voiceEntries.every(([, url]) => url !== null);

  return {
    drum: drumComplete
      ? (Object.fromEntries(drumEntries) as Record<DrumSlot, string>)
      : null,
    voice: voiceComplete ? Object.fromEntries(voiceEntries) as Record<string, string> : null,
  };
}
