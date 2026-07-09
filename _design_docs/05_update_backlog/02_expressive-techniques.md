---
id: 02-expressive-techniques
status: DONE (A 기법렌더·B 붙임줄·C 잇단음·D 비4/4빔 전부 완료 2026-07-09 — 기존 콘텐츠 dist 바이트 불변)
priority: medium
risk: medium
depends_on: []
owner: null
---

# 02 · 표현 기법 (밴딩·해머링·붙임줄·잇단음·비4/4)

## 목적 (왜)

오선보(staff.ts) 경로가 **음표는 그리지만 연주 기호 일부를 못 그린다.** 미래 커리큘럼(블루스/록 리드, 리듬 정밀 표기)이 이걸 필요로 한다. VexFlow 4.2.5 자체는 전부 지원하므로(keysignature/stavetie/tuplet/voice 소스 확인), **staff.ts에 가법 분기만 추가**하면 된다.

**포함:** 밴딩(bend)·해머링(hammer_on)·풀오프(pull_off)·슬라이드(slide)·비브라토(vibrato)·하모닉(harmonic) 오선보 렌더 / 붙임줄(tie) / 잇단음(tuplet) / 비4/4 빔.
**제외(별개 문서):** 슬래시 리듬 → `04_slash-rhythm.md`. 단일 성부(다성부)는 **불필요로 판단, 하지 않음.** **베이스 slap(썸 T/팝 P)·베이스 클레프**는 → `10_bass-support.md` 소관(이 문서는 기타 리드 표현기법 중심).

## 현재 강제 지점 (검증된 코드 위치)

| 무엇 | 위치 | 현재 동작 |
|---|---|---|
| 오선보 경로 technique 화이트리스트 | `web_app/scripts/build-content.mjs` `STAFF_TECHNIQUES = {none,palm_mute,dead_note}` + `staffRoute` 가드 | staff+tab 에서 bend/hammer 등 쓰면 빌드 실패 |
| staff.ts가 그리는 technique | `web_app/src/render/staff.ts:274`(dead_note) · `:320`(palm_mute) | 이 둘만 처리, 나머지 무시 |
| 빔 박자 하드코딩 | `web_app/src/render/staff.ts:70` `BEAT_INT = 4` | 4/4 가정. 6/8·3/4·7/8 오빔 |
| 박자합 검증(데이터측 준비됨) | `web_app/scripts/build-content.mjs:157` `expectUnits = tsNum*(16/tsDen)` | 이미 timeSignature 기반 계산 → 데이터측은 비4/4 준비 완료 |
| tab.ts는 이미 다 그림(참고) | `web_app/src/render/tab.ts` (bend/hammer/pull/slide/vibrato/harmonic 처리) | staff 구현 시 참고 |
| 실측 사용 현황 | solo(tab 경로)에 vibrato·slide·bend 존재, chord/funk(staff)는 palm_mute/dead_note만 | 기존 staff 경로엔 신규 기법 0건 → 안전 |

## 수정 상세 (실행 지침)

### A. 밴딩·해머링류 오선보 렌더 (순서 고정: 구현 → 완화)

1. **먼저 staff.ts에 렌더 분기 추가.** VexFlow API: bend=`Bend`(또는 타브측 `TabNote.addModifier`), hammer_on/pull_off/slide=`Articulation`/`TabSlide`/legato tie, vibrato=`Vibrato`, harmonic=노트헤드/텍스트. **tab.ts의 기존 구현을 참고**해 오선보 표기 관례로 옮긴다.
2. **그 다음에 가드 완화.** `STAFF_TECHNIQUES` Set에 **구현 완료된 기법만** 추가. 미구현 기법은 계속 막아둔다(조용한 증발 방지).
3. **기존 불변:** chord/funk는 새 분기 미사용 → 바이트 불변. solo는 tab 경로라 무관.

### B. 붙임줄(tie)

1. 스키마/타입에 선택 필드(예: `tiedToNext: true` 또는 `tie: "start"|"stop"`) 추가 → `score.ts` + `fretboard_score_schema.json`.
2. staff.ts가 인접 음 사이 `StaveTie` 생성.
3. 없으면 미표시 → 기존 불변.

### C. 잇단음(tuplet) — ⚠ 검증기 동반 수정

1. 선택 필드(예: `tuplet: {num:3, inSpaceOf:2}` 또는 그룹 태그) 추가.
2. staff.ts `Tuplet` 생성 + 빔.
3. **★박자합 계산 예외:** `validateScore`(build-content.mjs:180 근처 `DUR_UNITS` 합산)가 잇단음을 반영해야 함(3연 8분음 = 1박, 단순 3×2 아님). 잇단음 인지 산식 추가 필요 → **이 항목만 검증기까지 손댐.**
4. 없으면 기존 산식 그대로 → 기존 불변.

### D. 비4/4 빔

1. `staff.ts:70` `BEAT_INT=4` 상수를 **timeSignature 분모에서 유도**하는 함수로 일반화(예: 6/8 → 점4분음표 단위 그룹, 3/4 → 4분음표 3그룹).
2. 검증기는 이미 timeSignature 기반(:157)이라 데이터측 무수정.
3. **기존 불변:** 4/4 데이터는 같은 그룹 결과 → 빔 동일.

## 기존 커리큘럼 불변 보장

- 전부 "새 선택 필드 있으면 처리" 방식 → 기존 데이터(필드 없음)는 분기 미진입.
- 비4/4 빔은 4/4에서 동일 결과가 나오는지 스냅샷으로 확인(상수→함수 리팩터라 회귀 주의).
- `check-invariants.mjs` 로 315블록 지문 불변, 골든 스냅샷으로 픽셀 불변 확인.

## 검증 방법

- V1 build 0. V3 회귀 0. V5 solo/미대상 불변.
- V4 골든 스냅샷 — 특히 비4/4 리팩터(D) 후 기존 4/4 블록 픽셀 동일 필수.
- 신규 기능은 테스트 픽스처(/tmp)로 실제 렌더 확인: bend 오선보 표기, tie 곡선, 3연음 괄호, 6/8 빔.

## 주의 / 정지조건

- **순서 엄수:** 렌더 구현 → 가드 완화. 절대 역순 금지.
- tuplet 은 검증기 박자합 산식을 건드리는 유일 항목 — 잇단음 없는 기존 마디 계산이 안 바뀌는지 확인.
- staff.ts 조판(간격·높이)이 새 modifier로 밀릴 수 있음 → 기존 블록엔 modifier가 없어 무영향이어야 함(스냅샷 확인).

## 체크리스트

- [x] A: staff.ts에 bend/hammer_on/pull_off/slide/vibrato/harmonic 렌더 분기 — 2026-07-09 (텍스트 마커) → **고도화 완료(2026-07-09): 정식 글리프**. bend=타브 `Bend` 벤딩 화살표(목표 라벨), vibrato=`Vibrato` 물결선, hammer_on/pull_off=`Curve` 이음줄 슬러(+H·P 라벨), slide=`TabSlide` 사선(+sl 라벨). harmonic='harm.' 텍스트(VexFlow 하모닉 글리프 부재로 라벨 유지). staff-only 모드는 밴딩·비브라토도 텍스트 폴백. 인접 연결(슬러·슬라이드)은 tie와 동일한 flat 배열 인접 판정(행 경계 넘는 연결 생략).
- [x] A: STAFF_TECHNIQUES 완화(구현된 6종 추가) — 2026-07-09
- [x] B: `tiedToNext` 필드(타입·스키마) + StaveTie 렌더(오선보 곡선, 행 경계 넘는 tie는 생략) — 2026-07-09
- [x] C: `tuplet:{num,inSpaceOf}` 필드 + Tuplet 렌더 + validateScore 박자합 예외(inSpaceOf/num 환산 + fp 오차 1e-6 허용) — 2026-07-09
- [x] D: BEAT_INT → timeSignature 유도(`beatUnit`) — 2026-07-09. 단순박자=16/분모, 복합(6/8·9/8·12/8)=점4분음 그룹. 4/4→4 불변
- [x] V1~V5 통과(비4/4·기존 4/4 픽셀 불변) — dist md5 `31d885e9…` before==after 전 단계, invariants 315블록 회귀 0, 격리 렌더로 6기법·tie·triplet·6/8 확인
- [x] playbook "오선보 밴딩 금지"류 문구 — 해당 문구 없음(N/A). playbook은 dead_note/palm_mute 설명만 있어 갱신 대상 없음

## 미해결 질문 (사람 결정)

- 필드 명명: tie/tuplet/bend 표현을 기존 `technique`/`bendTarget`/`slideToFret` 와 어떻게 정합? (일부는 이미 스키마에 있음 — score.ts 확인)
- 밴딩류를 오선보에 어떤 관례로 표기할지(타브는 화살표, 오선보는?) — notation-renderer 판단.
