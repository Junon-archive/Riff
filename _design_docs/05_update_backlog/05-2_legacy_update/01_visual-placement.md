---
id: 01-visual-placement
status: DONE            # TODO | IN_PROGRESS | DONE
priority: high
risk: low
depends_on: []
owner: null
---

> ✅ 완료(2026-07-09). Part B(증발 경고→Part A로 대체) · Part C(커리큘럼 소개 intro) · Part A(전 섹션 슬롯 인라인 렌더) 모두 구현·커밋. 커밋: 1f38647(B) · 657c552(C) · Part A(본 커밋). 회귀 0(315블록).

# 01 · 시각자료 배치 + 커리큘럼 소개

## 목적 (왜)

1. **시각자료를 이론/연습/팁 섹션에도, 글 흐름 속 원하는 위치에 배치.** 현재 악보(지판/타브/오선보)는 ②"눈으로 보기" 섹션에만, 그것도 산문 뒤에 통째로 append된다. "이 코드 봐 [지판그림] 이제 이렇게" 처럼 문단 사이에 못 낀다. (사용자가 직접 겪은 문제)
2. **theory/practice/tips에 넣은 악보 JSON이 조용히 증발하는 문제**에 최소 경고 추가.
3. **커리큘럼 첫 페이지에 "이 과정은 이런 걸 배웁니다" 소개** 블록 추가.

**결정된 방향:** 4섹션(theory/visual/practice/tips) 구조는 **유지**. 섹션 개수/이름/순서는 안 바꾼다. 바뀌는 것은 "악보를 어느 섹션에서든, 글 흐름 속 지정 위치에 꽂을 수 있다"는 점뿐.

## 현재 강제 지점 (검증된 코드 위치)

| 무엇 | 위치 | 현재 동작 |
|---|---|---|
| 악보 추출이 visual 섹션에서만 | `web_app/scripts/build-content.mjs:620` | `sectionsByLang.ko.visual` 에서만 `extractJsonBlocks` |
| 모든 펜스 블록 삭제 | `web_app/scripts/build-content.mjs:232` | `mdToHtml` 가 ```…``` 전부 제거 → 다른 섹션 악보는 산문에서도 사라짐 |
| 파리티 검사도 visual만 | `web_app/scripts/build-content.mjs:634` | `extractJsonBlocks(sectionsByLang[lang].visual).length` 만 비교 |
| 마운트가 visual 섹션에만 | `web_app/src/components/LessonView.astro:94` | `#scoresMount` 가 ② 섹션 안에만 존재, `content.scores.map` |
| 커리큘럼 overview 비노출 | `web_app/scripts/build-content.mjs:530-531` | overview.md 는 내부 문서라 html 미탑재 |

## 수정 상세 (실행 지침)

### Part A — 전 섹션 악보 배치 (앵커/플레이스홀더 방식)

1. **추출 확장:** `build-content.mjs` 에서 악보 JSON을 4섹션 전부에서 뽑는다. 블록마다 (섹션, 섹션 내 순서) 를 키로 보존.
2. **삭제 → 치환:** `mdToHtml`(:232)이 ```json 블록을 **삭제하는 대신, 원래 위치에 자리표시자**(예: `<div data-score-slot="visual:2"></div>`)로 치환. 이러면 산문 문단 사이에 악보가 낀다.
3. **데이터 형태:** `scores` 를 섹션별로(예: `scoresBySection: { theory:[], visual:[], practice:[], tips:[] }`) 또는 플랫 배열 + `{section, order}` 메타로 확장. manifest/day json 스키마 변경 → `src/lib/content.ts` 로더·타입 동반 수정.
4. **LessonView 렌더:** 각 섹션 산문을 출력할 때 자리표시자를 해당 SVG로 하이드레이트. 마운트를 visual 전용에서 "자리표시자가 있는 모든 섹션"으로 확장(`LessonView.astro:83-108`).
5. **파리티 확장:** :634 의 개수 검사를 "섹션별 블록 개수"로 확장(ko 기준 en/ja 일치).
6. **하위호환 규칙(중요):** 자리표시자가 없으면 "그 섹션 끝에 append"를 기본값으로. → 기존 3커리큘럼은 전부 visual 끝에만 두므로 **렌더 동일**.

### Part B — 조용한 증발 방지 경고 (저비용, Part A 없이도 가능)

- `build-content.mjs` 에서 theory/practice/tips 섹션에 ```json 블록이 있으면 `warn(...)` (Part A 도입 전엔 "여기 악보는 렌더 안 됨" 경고, 도입 후엔 정상 처리).

### Part C — 커리큘럼 소개 블록

- 내부 overview.md 는 그대로 두고, **커리큘럼 `meta.json` 에 `intro`(또는 `description`) 3언어 필드 신설**.
- `build-content.mjs` 가 manifest 에 실어 `CurriculumView.astro` 상단(현재 taglines/forWho 위)에 렌더.
- **하위호환:** 필드 없으면 미표시 → 기존 커리큘럼 불변. 채우면 노출.
- 저작 규약: `_design_docs/00_curriculum_authoring_playbook.md` 메타 규약 + 3언어 정합에 `intro` 추가 문서화.

## 기존 커리큘럼 불변 보장

- 앵커 없으면 섹션 끝 append = 기존과 동일 배치. 블록 id 불변 → `check-invariants.mjs` 지문 불변.
- Part C 는 순수 신규 필드(null 기본).

## 검증 방법

- V1 build 0.
- V3 `check-invariants.mjs` 회귀 0 (기존 블록 지문·배치 불변). 신규 소개 필드는 지판/tab 지문에 영향 없음.
- V4 골든 스냅샷: 수정 전 3커리큘럼 레슨 SVG 스냅샷 → 수정 후 바이트 동일 확인(레슨 페이지 렌더 하네스는 `/tmp/t3` 스냅샷 방식 재사용).
- 수동: 새 테스트 day 하나에 theory 섹션 문단 사이 지판 1개 넣어 실제로 그 위치에 뜨는지.

## 주의 / 정지조건

- manifest/day json 스키마가 바뀌므로 `src/lib/content.ts` 타입과 라우팅 페이지가 새 형태를 읽는지 반드시 동반 확인.
- 자리표시자 마커가 산문 이스케이프(`inline()`)를 안 타게 처리(원시 통과 필요).

## 체크리스트

- [x] Part B: theory/practice/tips 의 ```json 경고 추가 (커밋 1f38647 — Part A 도입으로 경고는 해제, 이제 정상 렌더)
- [x] Part A-1: 전 섹션 문서순 추출 + 전역 인덱스 (injectScoreSlots)
- [x] Part A-2: mdToHtml 삭제→센티넬 치환 + slotsToDivs 후처리
- [x] Part A-3: scores 는 전역 배열 유지(형태 불변) — content.ts 타입 무변경(prose 문자열 내 슬롯 div)
- [x] Part A-4: LessonView hydrateScoreSlots — 슬롯을 renderScore SVG 로 인라인 치환, #scoresMount 제거
- [x] Part A-5: 섹션 합계 파리티 검사(en/ja 총 블록 수 = ko)
- [x] Part A-6: 슬롯 없으면 산문 그대로(하위호환) — 기존 데이터는 visual 슬롯 위치에 인라인
- [x] Part C: meta.json intro 3언어 필드 + CurriculumView 렌더 + app.css (커밋 657c552)
- [x] V1(build 0)·V3(회귀 0)·typecheck 0err·기능(이론 섹션 지판 렌더)·technical_spec 갱신

## 실제 구현 메모 (설계 대비 차이)

- 자리표시자는 `{{score:N}}` 산문 토큰이 아니라 **```json 블록의 현재 위치 자체를 앵커로** 사용(`@@SCORE:N@@` 센티넬). 저자는 기존처럼 ```json 을 원하는 위치에 두면 그 자리에 렌더된다 — 새 문법 학습 불요.
- scores 데이터 형태는 **전역 배열 그대로**(섹션별 배열로 안 쪼갬). 슬롯 div 가 어느 섹션 산문에 있든 전역 인덱스로 참조 → content.ts/manifest 스키마 무변경(저위험).
- 기존 커리큘럼: visual 섹션 블록들이 이제 **캡션 옆 인라인**으로 렌더(과거 "섹션 끝 몰아서"보다 개선). 악보 데이터 불변(회귀 0), 레슨 페이지 DOM 배치만 개선.

## 미해결 질문 (사람 결정)

- 자리표시자 문법을 무엇으로? (`{{score:N}}` 산문 내 토큰 vs ```json 블록의 현재 위치 자체를 앵커로 사용)
- scores 데이터: 섹션별 배열 vs 플랫+메타 — 라우팅/SEO 영향 최소인 쪽.
