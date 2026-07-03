/**
 * gh_state 로컬 상태 스키마 (localStorage 단일 키).
 * 원천 SSOT: _design_docs/01_architecture/state_storage.md §2.
 * 정합: web_app/docs/technical_spec.md §6.1.
 */
import type { Lang, DonationChannel } from '../config';

/** 커리큘럼 하나의 진도 기록. */
export interface CurriculumProgress {
  /** 완료된 Day 키 목록 (예: "m1.w1.d1"). 중복 없음. */
  completedDays: string[];
  /** 마지막으로 열람한 Day 키. */
  lastVisited: string | null;
}

export interface NudgesState {
  /** 이미 보여준 1회성/세분화 dedup 키 목록. */
  shown: string[];
}

export interface DonationState {
  /** 도네이션 시트를 닫은(거절한) 마지막 시각. */
  dismissedAt: string | null;
  /** 클릭한 결제 채널 목록. */
  clicked: DonationChannel[];
}

export interface FlagsState {
  /** localStorage 한계 안내 확인 여부. */
  storageWarningAck: boolean;
}

/** gh_state 루트 스키마. */
export interface GhState {
  schemaVersion: number;
  nickname: string | null;
  lang: Lang;
  createdAt: string;
  lastActiveAt: string;
  progress: Record<string, CurriculumProgress>;
  nudges: NudgesState;
  donation: DonationState;
  flags: FlagsState;
}
