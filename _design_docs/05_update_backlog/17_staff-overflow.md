---
id: 17-staff-overflow
status: IN_PROGRESS
priority: high
risk: medium
depends_on: []
owner: null
---

> 🟡 진행 중(2026-07-10). **단계 1(클리핑 제거)·단계 2(폭기반 줄바꿈) 구현·검증 완료.**
> - 단계 1: `preCalculateMinTotalWidth`로 줄별 실제 최소폭 → `noteAreaByRow=max(추정,ceil(minW))` 사이징(측정=disposable, 렌더 객체 pristine).
> - 단계 2: 기존 2마디 쌍 유지하되 **쌍 최소폭 > `TARGET_ROW_W`(560px)이면 그 쌍만 1마디/줄로 분리** → 빽빽 마디가 커진다. 성긴 쌍·단일 마디는 불변.
> - 검증: `astro check` 0e·`build` 412p·**일렉 m1w3d4 = 4마디 각 1/줄로 커짐(래스터)**·solo_scale 등 성긴 블록 viewBox 불변·전체 186 staff 스캔 병리적 분리 0(최대높이 1214=일렉 4마디)·**check-invariants 회귀 0(354블록, 의미 불변)**.
> - **남음:** 단계 3(스크롤 폴백 — 16분음 16개 등 단일 밀집 마디가 좁은 컬럼에서 여전히 작을 때). **선택**.

# 17 · 오선보/타브 오버플로 클리핑 + 폭기반 줄바꿈

## 목적 (왜)

빽빽한 마디에서 **오선보+타브가 카드 오른쪽에서 잘려 나온다**(마지막 음표·둘째 마디가 SVG viewBox 밖으로 밀림). 지금 **입문 일렉 커리큘럼**(팜뮤트 파워코드 처깅)에서 주로 발생. 동시에, 긴 악보가 좁은 컬럼에 욱여넣어져 **너무 작게** 보이는 기존 문제도 같은 뿌리(폭 계산·줄바꿈)라 함께 해결한다.

**증상 확인(실데이터):** `beginner_electric_1month/month_1/week_3/day_3·4`.
- `E5 chug into an open ring`: 마디1 = **8분음 8개, 전부 chord(파워코드)+palm_mute**, 마디2 = 7음. → 2마디가 한 줄에 들어가며 둘째 마디가 잘림.
- `Palm-muted power chord riff`: 4마디, 마디1·3이 각 8음 PM8. → 각 줄의 둘째 마디가 잘림.

## 원인 (검증된 코드 위치)

| # | 무엇 | 위치 | 문제 |
|---|---|---|---|
| 1 | 마디 폭을 **음표 수 × 28px**로만 추정 | `web_app/src/render/staff.ts:156` `PER_NOTE=28`, `:651-652` `measureArea=clamp(stave.length*28,150,480)` | 음표에 붙는 **modifier 폭 미반영** — `"P.M."` 주석(~30px)·파워코드 ♭ 임시표·빔 간격. 이 커리큘럼은 음당 실제 ~45~55px 필요 |
| 2 | SVG viewBox 폭을 이 과소추정에서 계산 | `staff.ts:654` `totalW=max(row별 CLEF+ksW+TS+noteArea)+2*MARGIN_X`, `:660` `renderer.resize(totalW,…)`, `:293-303` postProcess viewBox | viewBox가 실제 콘텐츠보다 좁음 |
| 3 | Formatter는 실제 최소 간격으로 배치 | `staff.ts:747` `fmt.format(voices, noteAreaW)` | noteAreaW가 최소폭보다 작아 음표가 viewBox 밖으로 넘침 → **잘림** |
| 4 | 한 줄 2마디 **고정** | `staff.ts:150` `MEASURES_PER_ROW=2` | 빽빽한 2마디를 한 줄에 넣어 둘째 마디가 통째로 밀려 잘림. 긴 악보 축소(작아짐)의 원인이기도 |
| 5 | 표시 컬럼 폭(참고) | `tokens.css:64` `--app-w:480`, `app.css:43` `.app:has(#view-lesson){max-width:720px}`, `LessonView.astro:151` `.lesson-article{max-width:680px}`, `:304-306` `.staffsvg{width:100%;height:auto}` | 모바일 ~320px·데스크톱 ~630px 컬럼에 SVG가 맞춰 축소 → 넓은 악보는 작아짐 |

## 수정 상세 (실행 지침)

### 단계 1 — 클리핑 제거: 실제 최소폭에 맞춰 사이징

1. 줄(row)별 voice를 조립한 뒤 **`Formatter.preCalculateMinTotalWidth(voices)`**(VexFlow 4)로 그 줄이 실제로 필요한 최소 note 폭 `minW`를 구한다. (정확한 API 시그니처는 구현 시 `node_modules/vexflow` 확인.)
2. `noteAreaW = Math.max(기존추정, Math.ceil(minW) + pad)` 로 잡는다. → **잘리던 블록만 넓어지고, 이미 맞던 블록은 추정 그대로 → SVG 바이트 불변**(invariant 회귀 최소).
3. 이걸 `renderer.resize` **이전에** 계산해야 하므로, 현재 draw 루프(`:663-810`)의 voice 조립을 **선(先)-패스로 분리**: (a) 줄별 tick/voice 조립 → minW 산출 → totalW 확정, (b) resize, (c) draw. voice/StaveNote 객체는 한 번만 만들어 두 패스가 **공유**(같은 노트를 두 Voice에 넣지 않도록 주의).

### 단계 2 — 너무 작아짐 해소: 폭기반 그리디 줄바꿈

1. `MEASURES_PER_ROW=2` **고정 제거** → **"한 줄에 마디를 계속 넣되, 줄의 minW가 목표 가독폭(≈600px)을 넘으면 줄바꿈"** 그리디 패킹. (단계 1의 minW 계산 재사용.)
2. 효과: 성긴 마디는 2~3개/줄(기존 유사), **빽빽한 P.M. 마디는 자동 1개/줄** → 시스템이 커서 컬럼에 맞춰도 음표가 큼. 긴 악보는 축소가 아니라 **세로로 길어짐**.
3. **목표폭 튜닝으로 invariant 최소화:** 목표폭을 typical 성긴 2마디 합(~400~500px)보다 크게(≈600) 잡으면 **기존 2마디/줄 블록은 그대로 2/줄 유지 → 산출 불변**. 오직 목표폭 초과(빽빽/잘리던) 블록만 1/줄로 reflow.

### 단계 3 — 스크롤 폴백 (극단 케이스 안전망)

1. 한 마디 자체가 목표폭보다도 넓은 극단(예: 16분음 16개 단일 마디)만 대비 → 악보 컨테이너(`LessonView` `.render-area`/`.render-mount`)에 **`overflow-x: auto`** + 가독성 바닥(그 시스템은 축소 대신 가로 스크롤).
2. CSS만 손대는 저비용. 모바일에서도 정직(못 담는 걸 억지 축소 안 함).

## 기존 커리큘럼/사이트 불변 보장

- **콘텐츠·악보 데이터 무관:** JSON 미변경. 순수 렌더 레이아웃 수정.
- **`max(추정, 최소)` + 목표폭 튜닝**으로 **현재 안 잘리고 2마디/줄로 잘 맞던 블록은 산출 바이트 불변** 지향. 바뀌는 건 잘리던/빽빽한 블록에 한정.
- **단, 렌더러 변경이라 reflow되는 블록의 SVG는 바뀐다** → `check-invariants.mjs` baseline 갱신(`--update`) + diff 리뷰 필요. "어떤 블록이 왜 바뀌는지"를 커밋에 명시.
- 4콤보(라이트/다크×악기)와 무관 — 색 아닌 지오메트리.

## 검증 방법

- **V1** `cd web_app && npm run build` exit 0.
- **육안(핵심):** `beginner_electric .../m1w3d3·d4` 오선보 우측 잘림 소멸 + 음표 크기 읽을 만함. 데스크톱/모바일 폭 모두. 이때 사용자에게 확인을 요청하며 수정이 반영된 예시가 어느 커리큘럼 몇개월차-몇주차-몇일차 내용인지 언급하여 확인이 용이하게 한다.
- **V3** `check-invariants.mjs`: 변경 블록이 "잘리던/빽빽한 staff+tab 블록"에 한정되는지 확인 → 의도된 reflow면 baseline 갱신. **성긴 2마디/줄·단일 성긴 마디 블록은 불변**이어야 함.
- **회귀 스캔:** 전 커리큘럼 staff+tab 렌더 — tofu·검정누출·viewBox 누락 0(기존 스모크 재사용).

## 주의 / 정지조건

- **`staff.ts`는 다른 세션(백로그 10 베이스 등)도 만지는 파일** → 구현 전 워킹트리 충돌 확인, 커밋 위생.
- **선-패스 리팩터 시 VexFlow 상태 오염 주의:** 같은 StaveNote를 두 Voice에 넣거나 두 번 format하면 x좌표·tick이 꼬일 수 있음 → 노트/보이스는 한 번만 생성해 공유.
- **`preCalculateMinTotalWidth` 실계약 확인:** joinVoices/createTickContexts 선행 필요 여부, 반환 단위(px) 를 소스로 확인.
- **목표폭은 빌드타임 고정값**(클라 폭 모름) → 값 선택이 축소율·세로길이·invariant churn을 좌우(미해결 질문).
- reflow 블록이 많아지면 리뷰 부담 ↑ → 단계 1(클리핑만)과 단계 2(줄바꿈)를 **커밋 분리** 가능(1은 저churn, 2는 목표폭에 따라 churn).

## 체크리스트

**단계 1 — 클리핑 제거(저churn)** ✅ 완료(2026-07-10)
- [x] 줄별 minW = `preCalculateMinTotalWidth` 산출 — **측정은 disposable 객체(buildMeasure 재호출), 렌더 객체 pristine** (이중 format 회피)
- [x] `noteAreaByRow = max(추정, ceil(minW))` + totalW 재계산 → resize 전 확정
- [x] 일렉 m1w3d3·d4 잘림 소멸 육안(래스터) + check-invariants 회귀 0(354블록)

**단계 2 — 폭기반 줄바꿈** ✅ 완료(2026-07-10)
- [x] rows 를 원본 마디 인덱스 배열로 전환 + **기존 2마디 쌍 유지, 쌍 최소폭 > TARGET_ROW_W(560)이면 그 쌍만 1/줄 분리** (전역 재패킹 아님 → churn 최소)
- [x] 성긴 쌍·단일 마디 불변(solo_scale viewBox 불변 확인), 빽빽 쌍만 1/줄로 커짐(일렉 d4·펑크 개선)
- [x] 일렉 d4 4마디 세로 스택·음표 커짐 육안 + check-invariants 0 + 전체 스캔 병리 0

**단계 3 — 스크롤 폴백**
- [ ] `.render-area`/`.render-mount` `overflow-x:auto` + 가독성 바닥
- [ ] 극단 단일 마디 스크롤 동작 확인

**공통**
- [ ] V1 build + V3 invariants(변경 블록 한정 확인 후 baseline 갱신) + 회귀 스캔
- [ ] Roadmap·이 문서 갱신

## 미해결 질문 (사람 결정)

- **목표 가독폭 값** — ~600px? 작게(더 많이 세로 스택·음표 큼) vs 크게(덜 reflow·덜 큼). 성긴 2마디/줄 유지되는 하한 확인.
- **단계 분리 커밋 여부** — 1(클리핑, 저churn) 먼저 배포 → 2(줄바꿈) 별도. vs 한 번에.
- **스크롤 폴백 포함 여부** — 목표폭 줄바꿈만으로 충분한가, 극단 대비 스크롤도 넣을까.
- **가독성 바닥 구현** — SVG 지능적 min-width(자연폭 방출) vs 단순 overflow만.
