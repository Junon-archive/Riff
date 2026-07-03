# 01-B. State & Storage — localStorage JSON 스키마 & 예외처리

> 상위 문서: `../00_master_prd.md` · 원칙: No-Database / 프라이버시 by design

## 1. 개요
로그인·서버 DB 없이 **브라우저 `localStorage`** 하나로 사용자 상태를 관리한다.
- 저장 키: `gh_state` (단일 루트 객체, JSON 직렬화).
- 모든 접근은 `lib/storage.ts` 래퍼를 경유(직접 `localStorage` 접근 금지).
- 스키마 버전(`schemaVersion`)으로 마이그레이션 대비.

## 2. 루트 스키마 (`gh_state`)
```jsonc
{
  "schemaVersion": 1,
  "nickname": "지훈",                 // 사용자 입력, 없으면 null
  "lang": "ko",                        // "ko" | "en" | "ja"
  "createdAt": "2026-07-02T09:00:00Z",
  "lastActiveAt": "2026-07-02T09:30:00Z",
  "progress": {
    // "커리큘럼id.월.주.일" 단위 완료 기록
    "solo_scale_3months": {
      "completedDays": ["m1.w1.d1", "m1.w1.d2"],  // 완료된 Day 키 목록
      "lastVisited": "m1.w1.d2"
    }
  },
  "nudges": {
    // 이미 보여준 1회성 유동 알림 (중복 노출 방지)
    "shown": ["enter_week_2"]
  },
  "donation": {
    "dismissedAt": null,               // 도네이션 카드 닫은 시각
    "clicked": []                      // 클릭한 채널: ["toss","kakaopay","paypal","bmc"]
  },
  "flags": {
    "storageWarningAck": false         // localStorage 한계 안내 확인 여부
  }
}
```

## 3. 파생 계산값 (저장하지 않고 계산)
- **진도율** = `completedDays.length / 해당 스코프 총 Day 수`.
- **아낀 레슨비** = `completedDays.length × VIRTUAL_LESSON_PRICE`(설정 상수, 예 20,000원/Day).
- 총 Day 수는 커리큘럼 메타(콘텐츠 매니페스트)에서 조회.

## 4. Day 키 규약
- 형식: `m{month}.w{week}.d{day}` (예: `m1.w1.d1`).
- 커리큘럼 스코프 안에서 유일. 커리큘럼 간 분리는 상위 `progress[curriculumId]`.

## 5. 유동 알림(Nudge) 트리거 규약
- 트리거 정의는 **데이터**로 관리(문구는 i18n 사전, 조건은 매니페스트/설정).
- 트리거 표 (nudge 네임스페이스 5개 키 전체 매핑, i18n 확정본 기준):
  | id | 조건 | 문구 키(i18n) |
  |---|---|---|
  | `enter_week_2` | w2 첫 진입 & 미노출 | `nudge.enter_week_2` |
  | `finish_week` | 한 주의 모든 Day 완료(해당 주 미완료 Day 수 == 0) | `nudge.finish_week` |
  | `finish_month` | 한 달 완료 | `nudge.finish_month` |
  | `welcome_back` | 앱 로드 시점에 `now - lastActiveAt ≥ 3일`(재접속으로 판단) & 오늘 날짜로 미노출 | `nudge.welcome_back` |
  | `almost_there` | 현재 주(week)의 미완료 Day 수 == 1(완료 직전, `finish_week` 발동 직전 단계) & 해당 주차 내 미노출 | `nudge.almost_there` |
- 조건 비중복 설계: `almost_there`(잔여 1개) → `finish_week`(잔여 0개)는 같은 주차 안에서 순차적으로 한 번씩만 발동하도록 배타적. `welcome_back`(시간 경과 기반 재방문)과 `enter_week_2`(진도 기반 최초 진입)는 트리거 축이 달라 겹치지 않음.
- 1회 노출 후 `nudges.shown`에 **dedup 키**를 추가해 재노출 방지:
  - 영구 1회성(`enter_week_2`, `finish_month`)은 id 그대로 저장.
  - 주차마다 반복 발생하는 것(`finish_week`, `almost_there`)은 `id:주차` 형태로 세분화 저장(예: `finish_week:m1.w2`, `almost_there:m1.w2`).
  - 재방문마다 반복 발생하는 `welcome_back`은 `id:날짜` 형태로 저장(예: `welcome_back:2026-07-03`) — 다음 장기 이탈 후 재접속 시 새 날짜로 다시 발동 가능.

## 6. 예외처리 (Resilience)
| 상황 | 처리 |
|---|---|
| `localStorage` 미지원/차단(시크릿 등) | 메모리 폴백 + "진도 저장이 안 되는 환경"임을 토스풍으로 안내 |
| JSON 파싱 실패/손상 | 백업 후 초기화, 사용자에게 부드럽게 고지 |
| `schemaVersion` 불일치 | 마이그레이션 함수 체인 실행 |
| 용량 초과(QuotaExceeded) | 불필요 데이터 정리, 실패 시 안내 |
| 값 검증 실패 | 타입가드로 기본값 대체(앱 크래시 금지) |

## 7. 한계 고지 & 데이터 이전 (필수 UX)
- 캐시 삭제 시 유실 / 기기 간 동기화 불가를 **정직하게, 위트 있게** 안내(문구: i18n `storage.*`).
- **Export/Import:** `gh_state`를 JSON 파일로 내보내기/불러오기 → 기기 이전·백업 지원.
- 개인정보: 닉네임 포함 어떤 데이터도 서버로 전송하지 않는다(로컬 전용).

## 8. 래퍼 API (lib/storage.ts, 예정 시그니처)
```ts
loadState(): GhState
saveState(next: GhState): void
markDayComplete(curriculumId: string, dayKey: string): GhState
markDayIncomplete(curriculumId: string, dayKey: string): GhState  // 완료 실행취소(undo), 2단계 추가
hasSeenNudge(id: string): boolean
markNudgeShown(id: string): void
exportState(): Blob
importState(file: File): Promise<GhState>
```
