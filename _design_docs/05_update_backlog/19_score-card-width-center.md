---
id: 19-score-card-width-center
status: DONE
priority: medium
risk: low
depends_on: []      # 17(오선보 줄바꿈)과 파일은 겹치나(LessonView/staff.ts) 코드 라인 비충돌 — 독립 착수 가능
owner: claude
---

# 19 · 악보/지판 카드 — 모바일 가로폭 확대 + 짧은 악보 중앙 정렬

> ✅ **완료 2026-07-11.** (A안 + 중앙정렬, CSS-only) 카드 가로 패딩 축소(`LessonView.astro` 24px 12px→**24px 4px**, `app.css` 전역 20px 18px→**20px 6px**) + `.render-mount .fretboard/.tabsvg/.staffsvg` 에 **`margin-inline:auto`**. build exit 0(1006p)·불변식 회귀 0(1454블록, CSS-only라 무관)·dist 번들에 새 규칙 컴파일 확인.
>
> 📐 **CSS-only 개선.** SVG 출력·데이터·불변식·빌드에 영향 0(할루시네이션/회귀 리스크 없음). 모바일에서 지판·악보 카드를 **산문 텍스트 폭까지 넓히고**(A안: 풀블리드 아님), 1마디짜리 **짧은 악보를 좌측 치우침 대신 가운데**로 배치한다. 방향 확정: 사용자 2026-07-11(A안 + 중앙정렬).

## 목적 (왜)

레슨 본문의 지판/악보 카드(`.render-area`)는 산문 흐름 속 블록이라 **본문과 같은 폭**이지만, 카드 자체의 좌우 패딩(12px×2) 때문에 **이미지 실폭이 산문 라인폭보다 24px 좁다**. 텍스트는 가독 폭(measure) 제약이 있어 좁아도 되지만, 지판/악보는 **폭 1px이 곧 판독성**이라 모바일에서 손해다.

또한 **staff(악보)** 는 `max-width:{자연폭}px` + `width:100%` + `display:block` 이라, 화면이 자연폭보다 넓으면 자연폭에서 캡되고 **블록 기본 정렬(좌측)** 로 붙는다 → **1마디짜리 짧은 예제가 카드 왼쪽에 외롭게 치우친다**. 균형이 깨져 어색하다.

**결정된 방향(2건 모두 CSS-only):**
1. **(A안) 카드 좌우 패딩 축소** — 모바일에서 이미지가 **산문 텍스트 폭까지** 닿게. 세로 패딩·카드감은 유지, **풀블리드(화면 끝까지)는 채택 안 함**(토스톤 카드 리듬 보존 + staff 세로 과증가 방지).
2. **짧은 악보 중앙 정렬** — `margin-inline:auto` 한 줄. 여백이 있을 때(짧은 악보)만 중앙으로 오고, 컬럼이 좁아 100% 꽉 차면 무효과 → **한 규칙으로 "짧으면 중앙·길면 그대로"** 자동.

## 현재 상태 (검증된 코드 위치)

| 무엇 | 위치 | 현재 값/동작 |
|---|---|---|
| 카드 컨테이너(실제 렌더) | `web_app/src/components/LessonView.astro:301-307` `.render-area`(Astro 스코프) | `padding: 24px 12px`·`background:var(--card-sub)`·`border-radius:16px`·border 없음. **레슨 페이지는 이 정의가 적용**(스코프 특이성이 전역보다 높음) |
| 카드 컨테이너(전역/레거시) | `web_app/src/styles/app.css:378-381` `.render-area` | `padding: 20px 18px`·`overflow:hidden`·border 있음. 바닐라 MVP 잔재(다른 뷰용). **레슨엔 미적용**이나 정합 위해 함께 손질 권장 |
| SVG 폭 규칙 | `LessonView.astro:321-328` `:global(.render-mount .fretboard/.tabsvg/.staffsvg)` | `width:100%`·`height:auto`·`display:block`. **staffsvg 100% 는 이 :global 규칙에서만** 옴(app.css:393 은 fretboard/tabsvg만) |
| 본문 컬럼 | `LessonView.astro:155-157` `.lesson` | `max-width:680px`·`margin:0 auto`·`padding:28px clamp(20px,5vw,24px) 40px` → 모바일 산문폭 = 화면−약40px |
| 산문 문단 | `LessonView.astro:205` `.prose :global(p)` | 본문 흐름 = 컬럼 inner 폭 전체. **카드도 같은 컬럼폭**(패딩만큼만 안쪽) |
| staff 좌측 정렬 원인 | `web_app/src/render/staff.ts:310` `style="max-width:${w}px[;min-width:${w}px]"` | 자연폭 캡 → 넓은 컬럼서 좌측 정렬. over-wide 만 `min-width`(스크롤) |
| fretboard 폭 | `web_app/src/render/fretboard.ts:117` `<svg class="fretboard" viewBox=...>` | inline max-width **없음** → 항상 카드폭 100% 채움(중앙 정렬 무관) |
| 스크롤 폴백 | `LessonView.astro:314-320` `:global(.render-mount){overflow-x:auto}`·`.scrollable` 우측 페이드 | over-wide staff 만 가로 스크롤. **중앙 정렬이 스크롤과 충돌하지 않게** 검증 대상 |

## 수정 상세 (실행 지침)

### 수정 1 — 카드 좌우 패딩 축소(A안, 이미지 폭 = 텍스트 폭)

`LessonView.astro:303` `.render-area { padding: 24px 12px; }` 의 **가로 패딩만** 줄인다.

- **권장:** 세로 24px 유지, 가로 **12px → 4px**(이미지가 텍스트 라인폭에 근접, 4px는 SVG 가장자리 글리프가 카드 모서리에 닿지 않게 하는 최소 숨통). 완전 일치를 원하면 `0`.
  ```css
  .render-area { padding: 24px 4px; }        /* 24px 12px → 가로 축소 */
  ```
- **모바일 한정으로 좁히고 싶으면**(데스크톱 카드 여백은 보존) 미디어쿼리:
  ```css
  @media (max-width: 480px) { .render-area { padding-left: 4px; padding-right: 4px; } }
  ```
  단 데스크톱(680px 컬럼)에서도 이미지가 조금 넓어지는 건 무해 → **전역 축소(미디어쿼리 없이)가 더 단순·권장**. 저작 판단.
- 전역 정합: `app.css:380` `.render-area{padding:20px 18px}` 도 동일 취지로 가로 축소(예 `20px 6px`). 레슨엔 미적용이나 다른 뷰 일관성.

**주의:** `overflow-x:auto` 는 `.render-mount`(SVG 래퍼)에 걸려 있고 카드 패딩과 무관 → 패딩 축소가 스크롤/페이드 힌트를 깨지 않는다. 단 over-wide 스크롤 악보에서 우측 페이드 마스크(`calc(100% - 26px)`)와 새 가장자리 간격을 육안 확인.

### 수정 2 — 짧은 악보 중앙 정렬

`LessonView.astro:321-328` 의 `:global(.render-mount ...)` 규칙에 `margin-inline:auto` 를 추가한다. **staffsvg 에 필수**, fretboard/tabsvg 는 항상 100%라 무효과지만 함께 두어도 무해(정합).

```css
:global(.render-mount .fretboard),
:global(.render-mount .tabsvg),
:global(.render-mount .staffsvg) {
  width: 100%;
  height: auto;
  display: block;
  margin-inline: auto;   /* ← 추가: 자연폭 캡(짧은 악보)일 때만 중앙, 100%면 무효과 */
  color: var(--text);
}
```

- **동작 원리:** `width:100%`+`max-width:{w}` 요소에 `margin-inline:auto` → 컬럼<w(모바일 밀집 악보)면 100%로 꽉 차 auto=0 여백(그대로), 컬럼>w(짧은 1마디)면 w에서 캡되고 남는 좌우를 auto가 **균등 분배 → 중앙**. **한 규칙이 "짧으면 중앙·길면 그대로"** 를 자동 처리.
- **over-wide 스크롤 악보:** `min-width:{w}` 라 컬럼<min-width → 스크롤 컨테이너 안에서 100% 이상, auto 여백 없음 → **중앙 정렬이 스크롤을 건드리지 않음**(검증 대상).

## 기존 커리큘럼/사이트 불변 보장

- **CSS-only:** SVG 문자열 출력 **바이트 불변** → `check-invariants.mjs` 지문 **완전 무관**(measures/notation 등 미변경). 빌드 산출 SVG 동일.
- **데스크톱:** staff 자연폭 캡 유지(확대 안 함) → 크리스프 렌더 보존. 카드 패딩만 소폭 축소.
- **fretboard:** 이미 100% 충전 → 패딩 축소로 조금 더 넓어질 뿐(viewBox 380×60 비율 유지, 세로도 비율만큼 미세 증가 — 무해). 중앙 정렬은 무효과.
- **Zero-Hallucination·i18n·Zero-Cost:** 데이터/파이프라인 무관 → 전부 유지.

## 검증 방법

- **V1** `cd web_app && npm run build` exit 0.
- **V3(무관 확인)** `node web_app/scripts/check-invariants.mjs` 회귀 0 — CSS 변경이라 당연히 통과. baseline `--update` **불필요**.
- **육안(모바일 폭 ~390px 뷰포트, 핵심):**
  - [ ] 지판/악보 이미지 좌우 가장자리가 **산문 텍스트 라인과 정렬**(카드 배경이 텍스트보다 살짝 넓은 건 정상, 이미지 자체가 텍스트폭에 닿는지).
  - [ ] **1마디 짧은 악보가 가운데** 배치(예: solo/스케일 초반 단마디, 코드 다이어그램 옆 짧은 리듬). 좌측 치우침 사라짐.
  - [ ] **밀집 다마디 악보**(모바일서 100% 축소)는 여전히 꽉 차고 중앙 규칙 무영향.
  - [ ] **over-wide 스크롤 악보**: 가로 스크롤·우측 페이드 힌트 정상, 중앙 정렬로 첫 마디가 잘리지 않음.
  - [ ] fretboard 풀폭 렌더 정상(세로 비율 유지, 과도하게 커지지 않음).
- **데스크톱(680px):** 카드/이미지 여백 자연스러운지, 짧은 악보 중앙 정렬이 넓은 카드에서 균형 있는지.
- **다크모드:** 카드 배경(`--card-sub`)·`currentColor` 정상.

## 주의 / 정지조건

- **풀블리드(B안)는 채택 안 함** — 화면 끝까지 확장은 토스톤 카드 리듬을 깨고 staff 세로를 키움. 이 문서 범위는 **텍스트 폭까지만**.
- **`LessonView.astro`·`staff.ts` 는 17번(오선보 줄바꿈)도 만지는 파일** → 착수 시 워킹트리 충돌·커밋 위생(경로 지정) 확인. 단 본 작업은 CSS 라인만 손대 17의 레이아웃 로직(`buildMeasure`·`rows`)과 비충돌.
- **가로 패딩을 0까지 줄일 때** SVG 가장자리 글리프(오선보 좌측 클레프·타브 라벨)가 카드 모서리에 닿아 답답해 보일 수 있음 → 4px 권장(0은 육안 후 결정).
- **over-wide 페이드 마스크**(`calc(100% - 26px)`)가 새 가장자리 간격에서 어색하지 않은지 확인.

## 체크리스트

**수정 1 — 카드 폭**
- [x] `LessonView.astro:303` `.render-area` 가로 패딩 축소(12px→**4px**, 전역·미디어쿼리 없이)
- [x] `app.css:380` 전역 `.render-area` 가로 패딩 정합 축소(18px→**6px**)
- [~] 모바일 이미지 폭 = 텍스트 폭 — dist 번들 CSS `padding:24px 4px` 컴파일 확인. 픽셀 육안은 사용자 확인 권장

**수정 2 — 중앙 정렬**
- [x] `LessonView.astro:321-328` SVG 규칙에 `margin-inline:auto` 추가
- [~] 짧은 악보 중앙·밀집 악보 무영향·over-wide 스크롤 무영향 — 규칙 원리상 자동 처리, dist `.render-mount .staffsvg{...margin-inline:auto...}` 컴파일 확인. 픽셀 육안은 사용자 확인 권장

**공통**
- [x] build 0(1006p) + 불변식 회귀 0(1454블록, CSS-only 무관 확인)
- [~] 다크모드·데스크톱 회귀 — CSS 변경 범위상 무영향(배경 `--card-sub`·`currentColor` 불변). 픽셀 육안 미수행
- [x] Roadmap 변경로그 + 이 문서 status(DONE)·체크리스트 + README 갱신

## 미해결 질문 (사람 결정)

- **가로 패딩 목표값** — 4px(권장, 최소 숨통) vs 0(완전 텍스트폭 일치). 육안 후 확정.
- **미디어쿼리 여부** — 전역 축소(단순, 데스크톱도 소폭 넓어짐·무해) vs `max-width:480px` 한정(모바일 전용). 권장: 전역.
- **전역 `app.css` `.render-area` 동반 수정 범위** — 레슨 미적용이나 다른 뷰 정합 위해 손댈지.
