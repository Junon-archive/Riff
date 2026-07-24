/**
 * 메트로놈 설정 타입 (Functions 1호).
 * SSOT: _design_docs/05_update_backlog/05-1_add_new_function/20_metronome.md PART B.
 *
 * gh_state(진도) 스키마와는 분리된 독립 선호값이다 — 테마(riff_theme)·악기필터(riff_instrument)와
 * 같은 층위로 storage.ts 의 backend 래퍼를 경유해 `riff_metronome` 단일 키에 저장한다.
 */

/** 지원 박자 — 자유 입력 N/M 미지원(20_metronome.md B0 확정). */
export type Meter = '2/4' | '3/4' | '4/4' | '6/8';

/** 박 하나를 몇 등분해 소리낼지. 1=박만, 2=8분, 3=셋잇단, 4=16분. 시각 이펙트는 없다(소리만). */
export type Subdivision = 1 | 2 | 3 | 4;

/** 음색. click=합성(자산 0KB, 항상 가능) / drum=킷 샘플 / voice=영어 카운트 샘플. */
export type Timbre = 'click' | 'drum' | 'voice';

/** 한 펄스(박)의 역할 — 음색 매핑·시각 파동 판정의 공통 축. */
export type PulseRole = 'strong' | 'backbeat' | 'weak';

export interface MetronomeSettings {
  /** 30~300. 펄스(시각 동그라미 1개) 기준 속도 — 6/8 에서는 8분음표 기준이다. */
  bpm: number;
  meter: Meter;
  subdivision: Subdivision;
  timbre: Timbre;
  /** 마스터 게인 0~1. */
  volume: number;
}
