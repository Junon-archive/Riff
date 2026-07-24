# 05 · 업데이트 백로그 (Update Backlog)

> **목적:** 지금 당장 실행하지 않는 개선 사항을 "나중에 문서만 보고 이어서 작업"할 수 있게 체계화한 저장소.
> 각 작업 묶음은 독립 md로 관리하며, 세션이 끊겨도 이 문서만으로 CC가 재개할 수 있게 **관련 코드 위치·수정 상세·불변 보장·검증법·체크리스트**를 담는다.
> 새 개선 아이디어가 생기면 여기에 md만 추가해두고 나중에 착수한다.

## 상태 범례

| 표기 | 뜻 |
|---|---|
| 🔴 TODO | 수정 필요 — 아직 착수 안 함 |
| 🟡 IN_PROGRESS | 진행 중 — 일부 체크리스트 완료 |
| 🟢 DONE | 완료 — 커밋·검증 끝 |

각 문서 상단 프론트매터의 `status` 필드가 정본이다. 부분 진행은 문서 내 체크리스트(`- [ ]`/`- [x]`)로 표현한다.

## 전체 현황

> **구성(2026-07-24 정리):** 문서를 목적별 3개 하위 폴더로 분류. **전역 번호(01~23)는 유지** — Roadmap 변경 로그·문서 간 `depends_on`이 이 번호("백로그 17" 등)로 참조하므로 재번호 시 과거 기록이 어긋난다. 각 폴더 안에서도 번호가 오름차순이라 순서는 그대로 읽힌다.
>
> - **`05-1_add_new_function/`** — 커리큘럼 외 인터랙티브 연습 도구(Functions): **20~23**
> - **`05-2_legacy_update/`** — 기존 렌더러·조판·UI·전달(PWA) 개선/수정: **01~08 · 10 · 17~19**
> - **`05-3_add_new_curriculum/`** — 새 커리큘럼 트랙 신설: **09 · 11~16**

### 05-1 · Functions (커리큘럼 외 연습 도구)

> 메트로놈·배킹·튜너·루프스테이션 등 신규 인터랙티브 도구. **프로젝트 최초의 본격 클라이언트 오디오 기능** — 지연 로드로 정적 구성 유지. 공통 셸(FAB·플로팅 오버레이·전용 페이지) SSOT = 20_metronome PART A.

| # | 작업 묶음 | 상태 | 우선도 | 리스크 | 선행 의존 |
|---|---|---|---|---|---|
| 20 | [메트로놈 + Functions 공통 셸](05-1_add_new_function/20_metronome.md) | 🟢 DONE (**v1 구현·검증 완료** 2026-07-24 — FAB·플로팅 오버레이·전용 페이지·지연 로드·룩어헤드 스케줄러·합성 클릭. V1~V7 통과. **CC0 드럼/목소리 샘플 파일만 외부 대기** — §B3-1 규약대로 드롭인 시 자동 활성) | 높음 | 중간 | 없음 |
| 21 | [배킹 트랙 (기타/베이스 분리·Suno Pro 음원)](05-1_add_new_function/21_backing.md) · [프롬프트 뱅크](05-1_add_new_function/backing_prompts/README.md) | 🔴 TODO (**설계 확정 + 기타 프롬프트 41트랙 저작 완료** 2026-07-24 · 음원 생성/구현 대기 · 메트로놈 후속) | 높음 | 중간 | 20 |
| 22 | [튜너](05-1_add_new_function/22_tuner.md) | 🔴 TODO (아이디어 미구상 — 자리만) | 미정 | — | 20 |
| 23 | [루프 스테이션 (마이크 녹음·배킹/드럼 위 겹치기)](05-1_add_new_function/23_loop_station.md) | 🔴 TODO (추가 미정 — 자리만) | 미정 | — | 20·21 |

### 05-2 · 기존 개선/수정 (Legacy Update)

> 이미 있는 렌더러·조판·브라우징 UI·전달(PWA)에 대한 개선·수정. 대부분 완료.

| # | 작업 묶음 | 상태 | 우선도 | 리스크 | 선행 의존 |
|---|---|---|---|---|---|
| 01 | [시각자료 배치 + 커리큘럼 소개](05-2_legacy_update/01_visual-placement.md) | 🟢 DONE | 높음 | 낮음 | 없음 |
| 02 | [표현 기법(밴딩·해머링·붙임줄·잇단음·비4/4)](05-2_legacy_update/02_expressive-techniques.md) | 🟢 DONE (A 기법·B tie·C tuplet·D 비4/4, 기존 바이트 불변) | 중간 | 중간 | 없음 |
| 03 | [악보 음정 정확성(조표·튜닝·다현)](05-2_legacy_update/03_notation-accuracy.md) | 🟢 DONE (①②③: 조표+튜닝+다현/지판, 기존 116일 바이트 불변) | 중간 | 높음 | 없음(내부 순서 있음) |
| 04 | [슬래시 리듬 표기](05-2_legacy_update/04_slash-rhythm.md) | 🟢 DONE (자체 슬래시 바 path, 기존 바이트 불변) | 낮음 | 중간 | 없음 |
| 05 | [커리큘럼 브라우징 — 악기 세그먼트 토글 + 악기별 액센트 테마](05-2_legacy_update/05_tag-filter.md) | 🟢 DONE (세그먼트 토글·베이스 연초록·악보 클램프·View Transition·후원 하트·초록 듀오톤·채도 톤다운, 2026-07-10 · +완료 커리큘럼 하단 정렬 2026-07-11) | 중간 | 중간 | 없음 |
| 06 | [기존 커리큘럼 악보 인라인 재배치](05-2_legacy_update/06_visual-relocation.md) | 🟢 DONE (77 day, 1 선별제외) | 중간 | 낮음 | 01(완료) |
| 07 | [PWA 앱화 (Android Play 등재 + iOS/Android 홈 설치)](05-2_legacy_update/07_pwa.md) | 🟡 IN_PROGRESS (A·B 검증완료·C 코드완료/안드검증보류·D 미착수) | 중간 | 낮음 | 없음 |
| 08 | [산문 하이라이트 + 커리큘럼 볼드 (레시피 동결)](05-2_legacy_update/08_Highlight.md) | 🟢 DONE (3커리큘럼 116 day + intro 3종 × 3언어, `<mark>` 4182개) | 중간 | 낮음 | 없음 |
| 10 | [베이스 지원 (클레프·slap·튜닝·다현·지판) + 베이스 커리큘럼](05-2_legacy_update/10_bass-support.md) | 🟢 DONE (엔진 B0~B4 완료 · B5 콘텐츠는 백로그 13·14·15·16 으로 스핀오프·전부 완료 2026-07-11) | 중간 | 높음 | 03·02(완료) |
| 17 | [오선보/타브 오버플로 — 세로 줄바꿈 재설계(v2)](05-2_legacy_update/17_staff-overflow.md) | 🟢 DONE (v2 마디 단위 세로 줄바꿈@280·넓은 마디만 페이드-힌트 스크롤·스크롤 스코핑 버그 수정, 모바일/PC 육안 검증 통과 2026-07-11) | 높음 | 중간 | 없음 |
| 18 | [솔로/스케일 tab → staff+tab 이식 (tab.ts 제거)](05-2_legacy_update/18_solo-tab-to-staff.md) | 🟢 DONE (2026-07-11 — solo 89블록 staff+tab 이식·R1 preferFlats 정밀화·tab.ts 삭제, build 0·불변식 0) | 중간 | 중간 | 17 |
| 19 | [악보/지판 카드 모바일 가로폭 확대 + 짧은 악보 중앙 정렬](05-2_legacy_update/19_score-card-width-center.md) | 🟢 DONE (2026-07-11 — CSS-only, 카드 가로패딩 축소 + `margin-inline:auto` 중앙, build 0·불변식 무관) | 중간 | 낮음 | 없음 |

### 05-3 · 새 커리큘럼 신설 (New Curriculum)

> 새 커리큘럼 트랙 저작. 전부 완료(라이브).

| # | 작업 묶음 | 상태 | 우선도 | 리스크 | 선행 의존 |
|---|---|---|---|---|---|
| 09 | [입문 일렉 커리큘럼 신설 (1개월·손 만들기)](05-3_add_new_curriculum/09_beginner-electric-curriculum.md) | 🟢 DONE (16일 day 48파일 + 대표 이미지, 2026-07-10) | 높음 | 낮음 | 없음 |
| 11 | [블루스 커리큘럼 (3개월·리듬+표현 리드·solo 온램프)](05-3_add_new_curriculum/11_blues-curriculum.md) | 🟢 DONE (3개월·12주·48일 = 144 day 저작·검증·커밋 완료 · 대표 섬네일 포함) | 높음 | 낮음 | 없음 |
| 12 | [R&B/네오소울 보이싱 커리큘럼 (2개월·level 3 캡스톤)](05-3_add_new_curriculum/12_neosoul-voicing-curriculum.md) | 🟢 DONE (32일 day 저작·검증·커밋 완료 2026-07-11) | 중간 | 낮음 | 없음 |
| 13 | [베이스 기초 커리큘럼 신설 (1개월·손 만들기)](05-3_add_new_curriculum/13_beginner-bass-curriculum.md) | 🟢 DONE (16일 48파일+지판·볼드 정합) | 높음 | 중간 | 10 |
| 14 | [슬랩/펑크 베이스 커리큘럼 (2개월)](05-3_add_new_curriculum/14_slap-funk-bass-curriculum.md) | ✅ DONE (8주 32일 × 3언어 = 96 day 저작·검증·커밋 완료) | 중간 | 중간 | 10·13 |
| 15 | [셔플 & 바운스 베이스 커리큘럼 (2개월·필 트랙)](05-3_add_new_curriculum/15_shuffle-bounce-bass-curriculum.md) | 🟢 DONE (8주·96 day 저작·검증·커밋 완료) | 중간 | 중간 | 10·13 |
| 16 | [워킹 베이스 커리큘럼 (2개월·level 3 재즈 캡스톤)](05-3_add_new_curriculum/16_walking-bass-curriculum.md) | 🟢 DONE (8주 32일 × 3언어 = 96 day 저작·검증·커밋 완료, 2026-07-11) | 중간 | 중간 | 10·13 |

## 공통 원칙 — "추가는 되고, 기존은 안 깨진다" (모든 묶음이 준수)

1. **가법적 추가:** 새 기능 = "이 필드가 있으면 이렇게 그려" 라는 분기를 **추가**한다. 기존 데이터엔 그 필드가 없어 분기를 안 타므로 **출력이 바이트 불변**. (T3 chord[] 도입 때 미사용 185블록 불변과 동일 원리)
2. **의미 불변식 회귀 체크:** 렌더러/파이프라인 수정 후 `node web_app/scripts/check-invariants.mjs` 로 기존 블록 지문 불변 확인. 내용 회귀 시 즉시 차단. 정당한 변경(신규 블록 추가 등)이면 `--update` 로 baseline(`web_app/scripts/curriculum-invariants.json`) 갱신 후 diff 리뷰.
3. **가드는 지우지 말고 "구현 후 한 칸씩 완화":** 렌더 능력 가드(`build-content.mjs` `STAFF_TECHNIQUES` 등)는 먼저 렌더를 구현한 뒤에 허용 목록만 넓힌다. 가드를 먼저 없애면 미구현 기법이 화면에서 조용히 사라지는 문제가 재발한다.

## 검증 게이트 (커밋 전 공통)

- **V1** `cd web_app && npm run build` exit 0.
- **V2** 콘텐츠 편집 시 ko/en/ja json 블록 개수·내용 동일.
- **V3** 의미 불변식: `node web_app/scripts/check-invariants.mjs` 회귀 0(또는 의도된 추가만).
- **V4** (선택) 골든 SVG 스냅샷 diff — 기존 블록 픽셀 불변 확인. 스냅샷 생성법은 각 문서 참조.
- **V5** solo + 미대상 커리큘럼 산출물 바이트 불변.

## 커밋 관례 (프로젝트 고정 규칙)

- 한글 프리픽스+콜론, 증상/원인/해결 불릿, "검증:" 한 줄, `Co-Authored-By: Claude`.
- 작업 종료 시 `Roadmap.md` 변경 로그 갱신 + **이 백로그 문서의 status/체크리스트 갱신**.
- 임시 스크립트·스냅샷은 커밋 금지(/tmp).

## 절대 불변 (건드리지 않는 것 — [D]군)

Zero-Cost(서버/DB/인증 미도입) · 마디 박자합 게이트 · 악보/지판 한정 Zero-Hallucination(JSON→SVG) · storage.ts 래퍼 경유 · i18n 3언어 강제 · 토스톤 · Month→Week→Day 계층 · VexFlow 빌드타임(클라 JS 0). 이들은 개선 대상이 아니라 지켜야 할 약속이다.
