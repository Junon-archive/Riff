---
id: 05-tag-filter
status: DONE (단계 1·2·3 전부 완료 2026-07-10 — 악기 세그먼트 토글 + 베이스 연초록 액센트 테마 + View Transition 배선 완료)
priority: medium
risk: medium
depends_on: []
owner: null
---

# 05 · 커리큘럼 브라우징 — 악기 그룹핑 + 악기별 액센트 테마 (구 "태그·필터")

## 목적 (왜)

곧 카탈로그가 **기타 5~6개 + 베이스 4개 ≈ 9~10개**가 된다. 한 줄 스크롤은 비효율적이고, 그렇다고 난이도·장르·태그 필터를 이것저것 얹으면 토스식 단순/깔끔을 깬다("추잡"). 

**해법의 원칙:** 스크롤 문제는 *컨트롤(필터 버튼)* 이 아니라 *구조(악기 세그먼트 토글)* 로 푼다. **축은 악기 하나**(기타/베이스). 난이도는 **`level` 순서**로만(라벨·마커 없음), 태그는 **비노출(내부·SEO)**. 베이스는 **연초록 액센트**로 "다른 세계"를 준다.

> 이 문서는 구 "태그·필터 브라우징"을 위 방향으로 재정의한 것이다(2026-07-10). 다중 필터·태그 클라우드·난이도 라벨은 폐기.

## 결정된 방향 (2026-07-10, 사람 확정)

| 항목 | 결정 |
|---|---|
| 축 | **악기 1개(기타/베이스)만.** topic·level·tags를 필터 버튼으로 꺼내지 않는다. |
| 실력 온보딩 퀴즈·온램프 마커 | **둘 다 안 한다** — 온보딩 퀴즈는 게이트 마찰·자기신고 부정확, "처음이라면 여기부터" 마커도 **불채택**(2026-07-10). 초심자 안내는 **`level` 오름차순 정렬(쉬운 코스가 위)** + `forWho`·`tagline` 자가선택으로 충분. |
| **랜딩 구성** | **세그먼트 토글 `[기타][베이스]`가 기본** — 한 번에 **한 악기 카드만** 노출. **'전체' 없음.** (구 "그룹 섹션 쌓기"는 폐기 → 아래 2026-07-10 개정 참조.) |
| **랜딩 기본 악기** | **기타.** SSR 첫 페인트 = 기타(파랑). |
| **필터 선택 기억** | **localStorage 에 기억**(`riff_instrument` 키, 테마 flash 방지 패턴 재사용). 새로고침·재방문 시 마지막 선택 악기·색으로 복원. |
| 악기별 테마 | 기타=**파랑(현행)**, 베이스=**연초록**. |
| **색 적용 범위** | **파랑으로 보이는 UI 전부** — `--primary` 계열 + **로고(`.brand`)·닉네임 칩(`.nick-chip`)·"로그인도, 결제도 없어요" 배지(`.free-badge`, 글자+배경)·hero 강조(`.hero h1 .accent`)·모든 파란 글씨/링크·진도바·포커스링·카드 썸네일 그래디언트**. (예외 = **악보(지판/타브/오선보)**·Toss 결제 아이콘·PWA 브랜드색, 아래 참조.) |
| **악보는 테마 무관(중요)** | **악보(지판·타브·오선보)의 색 체계는 테마와 완전 별개** — 기타든 베이스든 **현행 색 그대로 유지.** role→색(root/target/color/blue_note…)은 `color_legend.md` 계약이며 악기 테마가 건드리지 않는다. 베이스 레슨에서도 악보 근음은 현행 파랑. (라이트/다크 대응은 현행대로 유지, `data-instrument` 축만 무력화.) |
| **hero 카피 악기별 스왑** | 랜딩 hero `home.title` 이 선택 악기 따라 교체 — 기타 "기타가 어려웠던 이유…" ↔ 베이스 "베이스가 어려웠던 이유…". i18n 사전에 악기별 변형 키 신설(3언어). |
| **전환 방식** | **View Transition**(`document.startViewTransition`) — 토글 클릭 시 **hero 카피 + 액센트 색 + 카드 목록**을 한 전환에 크로스페이드(페이지 바뀌는 느낌). 미지원 폴백(즉시 스왑) + `prefers-reduced-motion` 존중. |
| 베이스 카드 썸네일 | **초록 그래디언트(초록 듀오톤) 자동.** `--grad-a/-b` 포크로 자동 전환(미해결질문 해소 — 파랑 고정 아님). |
| 테마 모델 | **콘텐츠 기반(B)** — "초록 = 베이스"는 **콘텐츠 속성**. 커리큘럼/레슨 페이지는 그 코스의 `meta.instrument`로 테마 결정(SSR). **랜딩만** *필터 + 그 악기 색 미리보기 + 선택 기억*. (사용자 전역 "모드"(A)는 채택 안 함 — 베이스 모드로 기타 코스 여는 색 충돌 회피. 랜딩의 기억값은 "브라우징 필터" 상태이지 전역 모드가 아니며, 레슨/커리큘럼은 언제나 콘텐츠 악기를 따른다.) |
| PWA/브랜드 | `manifest.theme_color`·favicon·앱 아이콘은 **파랑 고정**(정적이라 악기별 불가). 브랜드색은 파랑, **앱 내부 액센트만** 악기별. 수용. |

> **개정 (2026-07-10, 사람 확정 — 필터 우선 + View Transition):** 위 표의 **랜딩 구성·기본 악기·필터 기억·색 적용 범위·hero 카피·전환 방식·썸네일** 행은 이 개정으로 확정된 것이다. 구 방향("그룹 섹션을 둘 다 쌓고 세그먼트 토글은 6~8개+일 때만 선택적")을 **폐기**하고, **처음부터 세그먼트 토글(한 악기씩) + View Transition 전환**을 채택한다. 이유: 전환 시 hero 카피·파랑→초록 색전환·카드 교체가 **동시에** 일어나므로, 요소별 수동 애니메이션보다 브라우저 스냅샷 크로스페이드(View Transition)가 "페이지가 바뀌는 느낌"을 자연·저비용으로 준다. 단계 2·3·검증·체크리스트·미해결질문을 이 방향으로 갱신함.

## 현재 상태 (검증된 코드 위치)

| 무엇 | 위치 | 현재 동작 / 함의 |
|---|---|---|
| 커리큘럼 노출 순서 하드코딩 | `web_app/scripts/build-content.mjs:33` `CURRICULUM_ORDER=['solo_scale_3months','chord_building_2months']` | 목록에 없는 커리큘럼은 이름순 뒤로 → 의도한 순서 아님. **데이터 주도로 교체 대상**(단계 1) |
| 기본 커리큘럼 상수 | `web_app/src/config.ts:23` `DEFAULT_CURRICULUM_ID` | 운영 기본값 |
| 컬렉션 등록 미갱신 | `web_app/src/content.config.ts:14-18` | 신규 id 추가돼도 미갱신(런타임 무관, 경고 억제용) — 정리 대상 |
| **악기 필터 인프라(이미 존재·데이터 주도)** | `HomeView.astro:25-26`(instruments 집합·`showInstrumentFilter=길이≥2`), `:36`(`filter-chips`), `:47-49`(`#currList`, `curr-card` 에 `data-instrument`) | **악기 2종 이상일 때만 자동 노출.** 베이스가 들어오면 이 칩이 자연히 나타남 → 그룹 섹션/세그먼트로 승격 |
| 필터 토글 로직 | `web_app/src/scripts/app.ts:471` `[data-filter-instrument]` 클릭 → `data-instrument` 로 카드 in-place show/hide | 재사용. 액센트 전환도 여기서 얹을 수 있음 |
| 커리큘럼 메타 | `meta.json` `instrument`·`level`·`tags`·`forWho` | `instrument`(악기 토글 키)·`level`(오름차순 정렬 키)만 쓰고 tags는 비노출 유지 |
| **테마 인프라(재사용 핵심)** | `Base.astro:48` `<html data-theme>`, `:81-94` 인라인 flash 방지 + `astro:after-swap` 재적용(`riff_theme` localStorage) | **`data-instrument` 축을 여기에 똑같이 얹는다**(첫 페인트 전 적용→색 깜빡임 없음). `riff_instrument` 도 같은 인라인 스크립트에서 첫 페인트 전 읽어 세팅 |
| 액센트 토큰 | `tokens.css` `--primary:36`·`--primary-press:37`·`--primary-weak:38`·`--grad-a/-b:41-42`·`--num-accent-blue:62`, `[data-theme="dark"]:73`(다크 `--primary:82`) | 베이스용 초록으로 **포크할 토큰 집합**(라이트/다크 각각) |
| **로고 / 닉네임(초록 대상)** | `Base.astro:153` `.brand#brandHome`("Riff"), `:174` `.nick-chip#nickChip`(우상단 사용자 이름) | 파랑 액센트를 쓰면 **`--primary` 계열 토큰 참조로 통일**해야 베이스에서 자동 초록. 하드코딩 색이면 토큰화 선행 |
| **hero 카피(스왑 대상)** | `i18n/*.json` `home.title`(`ko.json:17` "기타가 어려웠던 이유…"), `HomeView.astro:32` `set:html` | 악기별 변형 키 신설(`home.title.guitar`/`home.title.bass`) + 클라이언트 스왑용 두 변형 노출(`data-*` 또는 인라인 미니 사전) |
| **⚠️ 악보 렌더러 = 테마 클램프 필요** | `render/{fretboard,tab,staff}.ts` 가 root/chord_tone 음을 `var(--primary,#3182F6)` 로 그림 | 악보는 테마 무관(현행 유지)이므로 베이스에서 `--primary` 포크가 악보로 **새면 안 됨**. **렌더러 출력 문자열은 절대 안 건드림(바이트 불변)** → **악보 컨테이너(`.fretboard,.tabsvg,.staffsvg` 또는 `.render-area`)에서 `--primary` 를 악기-독립 파랑으로 재선언(스코프 클램프).** 이러면 SVG 는 계속 `var(--primary)` 를 참조하되 값이 컨테이너 스코프에서 파랑으로 고정 → `check-invariants` 지문 불변, 라이트/다크만 현행대로. (렌더러에 `--score-*` 새 토큰을 심는 방식은 SVG 바이트가 바뀌어 전 악보 지문 회귀 → **금지**.) |
| **파랑 고정(포크 제외)** | `app.css:458 .pay-toss .ico{background:#3182F6}`(Toss 아이콘), `manifest.theme_color`·favicon·앱 아이콘, `confetti.ts:77`(컨페티 팔레트) | **Toss 아이콘·PWA 브랜드색은 파랑 고정.** 컨페티는 선택(테마 안 해도 무방) |

## 수정 상세 (실행 지침)

### 단계 1 — 순서 위생(먼저·저비용): 순서를 데이터로

1. `build-content.mjs:33` `CURRICULUM_ORDER` 하드코딩 제거 → 각 `meta.json` 의 **`level` 오름차순**으로 정렬(**낮은 level = 쉬운 코스가 상단**). 별도 `order` 필드는 두지 않음(확정). 동률 level 은 안정 정렬(입력 순) 유지. 새 커리큘럼 추가가 진짜 "데이터만"으로 성립.
2. `content.config.ts:14-18` 신규 id 자동 반영 또는 런타임 무관 명시 정리.
3. (온램프 마커·난이도 라벨은 **불채택** — 넣지 않는다.)

### 단계 2 — 랜딩 세그먼트 토글 + hero 카피 스왑 (필터 우선)

1. **세그먼트 토글:** 기존 `filter-chips`(`HomeView.astro:36`, 2종+ 자동 노출)에서 **`data-filter-instrument="all"` 칩 제거**(`:37`) → `[기타][베이스]` 두 개만. 기본 활성 = **기타**(SSR). `app.ts:433` `applyInstrumentFilter` 는 `value==='all'` 분기 제거하고 항상 한 악기만 노출(`card.dataset.instrument === value`).
2. **hero 카피 스왑:** 선택 악기에 따라 `home.title`(`HomeView.astro:32`) 을 교체.
   - i18n: `home.title` 단일 → **`home.title.guitar` / `home.title.bass`** 두 변형(3언어). SSR 은 기타 변형(또는 기억값)으로 렌더.
   - **베이스 변형 = 기타 변형에서 악기 단어만 치환**(ko "기타가"→"베이스가", en "guitar"→"bass", ja "ギター"→"ベース"). 나머지 문장("연습 순서가 없어서였어요" 등)은 동일. 별도 카피 작문 없음(확정).
   - 클라이언트 스왑용으로 두 변형을 DOM 에 노출 — 예: hero 요소에 `data-title-guitar`/`data-title-bass`(HTML 허용, `set:html` 대응) 또는 페이지 인라인 미니 사전. **하드코딩 금지**(값은 사전에서 발원).
3. **필터 기억:** 토글 클릭 시 선택 악기를 `localStorage`(`riff_instrument`)에 저장. `storage.ts` 래퍼 경유(직접 접근 금지, [D]군). 첫 페인트 전 인라인 스크립트(단계 3-1)가 이 값을 읽어 `data-instrument` + 활성 칩 + hero 카피 + 카드 노출을 **깜빡임 없이** 복원.
4. i18n: `instrument.bass` 라벨 3언어 추가(`instrument.guitar` 있으면 재사용). 태그 라벨은 만들지 않음.
5. **SEO:** 카드는 **전량 DOM 에 렌더**(숨김은 `display` CSS 토글, 제거 아님) — 크롤러 전량 도달. hero SSR 기본값(기타)도 크롤러가 읽는 본문. `level` 오름차순 정렬(단계 1)은 유지.

### 단계 3 — 악기별 액센트 테마 (연초록, 콘텐츠 기반) + View Transition 전환

1. **`data-instrument` 축 신설:** `<html data-instrument="guitar|bass">`. 테마 인프라(`Base.astro:81-94`) 패턴 그대로 — 인라인 스크립트로 첫 페인트 전 적용, `astro:after-swap` 재적용. **랜딩에서는 `riff_instrument`(localStorage)를 같은 스크립트에서 읽어** 첫 페인트 전 `data-instrument`·활성 칩·hero 카피·카드 노출을 복원(FOUC 방지). 레슨/커리큘럼은 SSR 값 우선(아래 2).
2. **콘텐츠 기반 결정(B):** 커리큘럼/레슨 페이지는 **SSR에서** 그 코스 `meta.instrument`로 `data-instrument` 세팅 → 베이스 레슨은 첫 화면부터 초록(플래시 없음). 랜딩만 `riff_instrument` 기억값 기준(기본 기타), 토글 시 전환·미리보기.
3. **토큰 포크(파랑 UI 전부):** `tokens.css` 에 `:root[data-instrument="bass"]{ … }`(라이트) + `[data-theme="dark"][data-instrument="bass"]{ … }`(다크)로 `--primary`·`--primary-press`·`--primary-weak`·`--grad-a/-b`·`--num-accent-blue`·**포커스 링**을 연초록 스케일로 오버라이드. 기타(파랑)는 현행 그대로(폴백).
   - **선행 — 토큰화 감사:** 로고(`.brand`)·닉네임 칩(`.nick-chip`)·모든 파란 글씨/링크가 **`--primary` 계열 토큰을 참조**해야 포크가 한 방에 먹는다. 하드코딩 색이 있으면 **먼저 토큰화**(현재 상태 표 ⚠️행 참조). 목표: "파랑으로 보이는 모든 UI"가 baseline 에서 토큰 경유.
     - **이미 토큰 경유 = 자동 초록(수정 불요, 확인만):** `.free-badge`("로그인도, 결제도 없어요") 는 이미 `background:var(--primary-weak); color:var(--primary)`(`app.css:153`), `.hero h1 .accent` 는 `color:var(--primary)`(`:156`) → 오버라이드만으로 글자·배경 자동 초록. 감사 = 이런 케이스는 확인, 로고/닉네임/잔여 하드코딩만 손봄.
   - **예외(포크 제외, 파랑 고정):** Toss 결제 아이콘(`.pay-toss .ico`, Toss 브랜드색), PWA `manifest.theme_color`·favicon·앱 아이콘. 컨페티 팔레트는 선택(테마 안 해도 무방).
   - **이모지는 토큰 포크가 안 먹는다(추가 처리 필요):** 하단 후원 버튼의 `💙`(파란 하트)는 색 코드가 아니라 글리프 자체가 색이라 `--primary` 오버라이드로 자동 전환되지 않는다. **CSS content 스왑**으로 처리: 마크업에서 리터럴 이모지를 제거하고 `<span class="donate-heart" aria-hidden="true"></span>`(장식용, 텍스트는 별도 `<span>`)로 대체 → `app.css`에 `.donate-heart::before{content:"💙"}` / `:root[data-instrument="bass"] .donate-heart::before{content:"💚"}`. 기타=💙, 베이스=💚 자동.
   - **악보는 테마 무관(확정):** 악보 색 체계는 테마와 별개 — 베이스에서도 **현행 색 유지.** `render/*` 는 `var(--primary,…)` 를 계속 쓰되, **악보 컨테이너(`.fretboard,.tabsvg,.staffsvg`/`.render-area`)에서 `--primary` 를 악기-독립 파랑으로 재선언**해 `data-instrument=bass` 오버라이드가 악보에 새지 않게 클램프한다. **렌더러 출력 문자열은 불변**(SVG 바이트 동일 → `check-invariants` 회귀 0). 라이트/다크 대응은 현행대로. (근음 초록화·`--score-*` 토큰 신설은 채택 안 함.)
4. **View Transition 전환(랜딩 토글):** `app.ts` `applyInstrumentFilter` 를 다음으로 감싼다 —
   - `document.startViewTransition(() => { /* ①활성 칩 토글 ②data-instrument 세팅(색) ③hero 카피 스왑 ④카드 display 토글 ⑤riff_instrument 저장 */ })`.
   - 미지원 브라우저 폴백: `startViewTransition` 없으면 콜백을 **즉시 실행**(전환만 생략, 기능 동일).
   - `prefers-reduced-motion`: `app.css:21` 이 이미 duration 을 죽이므로 존중됨. 필요 시 폴백 경로로 명시 가드.
   - (선택) 사이트 rise 결에 맞추려면 `::view-transition-old/new(root)` 에 slide-up 키프레임을 CSS 로 얹는다(기본은 크로스페이드).
   - Astro `<ClientRouter/>` 의 네비 View Transition 과 **동시 실행되지 않음**(같은 페이지 내 토글) → 충돌 없음.
5. **듀오톤 카드 썸네일:** `--grad-a/-b`가 악기별로 바뀌므로 베이스 카드 썸네일은 **초록 그래디언트(초록 듀오톤)** 가 됨(자동, 사람 확정). 카드만 파랑 고정 옵션은 폐기.

## 기존 커리큘럼/사이트 불변 보장

- **콘텐츠·악보 무관:** 산문/악보 JSON 미변경 → `check-invariants.mjs` 지문 회귀 0. **악보 렌더러 출력 문자열도 불변**(SVG 바이트 동일 — 테마 클램프는 CSS 컨테이너 스코프로만, 렌더러 코드 미수정).
- **악보 색 테마 무관:** 기타·베이스·라이트·다크 어느 조합에서도 악보(지판/타브/오선보) 색은 **현행 그대로**. `--primary` 포크가 악보 컨테이너로 새지 않음.
- **기타(파랑) 바이트 불변:** `data-instrument` 없거나 `guitar`면 현행 `--primary`(파랑) 그대로. 베이스 오버라이드는 `[data-instrument="bass"]`만 탐(가법 분기).
- **i18n 3언어 강제** 유지 — 신규 키 3언어 동시: `instrument.bass`, **`home.title.guitar`·`home.title.bass`**(기존 `home.title` 대체/분화). 플레이스홀더·키셋 diff 0.
- **storage 래퍼 경유:** `riff_instrument` 는 `storage.ts` 를 통해 읽고 쓴다(localStorage 직접 접근 금지, [D]군). 차단 환경(시크릿)에선 인메모리 폴백 → 기억 안 될 뿐 기능 정상.
- **Zero-Cost·무런타임·계층 구조** 불변([D]군). 세그먼트 토글·필터·View Transition 은 기존 경량 스크립트 + 브라우저 네이티브 API 재사용(번들 증가 0).

## 검증 방법

- **V1** `cd web_app && npm run build` exit 0.
- **V3** `node web_app/scripts/check-invariants.mjs` 회귀 0(콘텐츠 불변).
- **4콤보 육안:** 라이트/다크 × 기타/베이스 — 버튼·링크·**로고·닉네임 칩·"로그인도, 결제도 없어요" 배지(글자+배경)**·진도바·완료·도네이션·포커스링·카드 썸네일이 네 조합 모두 자연스럽고 대비 충분한지. "파란 글씨/배경이 하나도 안 남았는지"(누락 색 탐지).
- **세그먼트 토글:** '전체' 없음, 카드 전량 DOM 렌더(SEO), 한 악기씩 show/hide + 액센트·hero 카피 동시 전환.
- **hero 카피 스왑:** 기타↔베이스 토글 시 `home.title` 3언어 각각 정확히 교체, `set:html` 안전.
- **View Transition:** 지원 브라우저에서 색+카피+카드 크로스페이드, 미지원 폴백은 즉시 스왑(기능 동일), `prefers-reduced-motion` 시 애니메이션 억제.
- **필터 기억 + 플래시 없음:** 베이스 선택 후 새로고침/재방문 시 첫 페인트부터 베이스(초록·베이스 카드·베이스 카피) — `riff_instrument` 복원, FOUC 0. 시크릿 모드에선 기본(기타)로 폴백하되 기능 정상.
- **콘텐츠 기반 진입:** 베이스 레슨 직접 진입 시 첫 페인트부터 초록(SSR `data-instrument=meta.instrument`), 랜딩 기억값과 무관.
- **악보 색 불변:** 베이스 레슨의 지판/타브/오선보 음색이 **현행 파랑 그대로**(초록으로 새지 않음), 라이트/다크 4콤보 모두. 렌더러 SVG 바이트 불변 확인.
- **회귀:** 기존 기타 페이지 파랑 산출 불변. Toss 아이콘·favicon 파랑 유지 확인.
- **후원 버튼 하트:** 베이스 페이지(레슨/커리큘럼 SSR, 랜딩 토글 bass) 하단 후원 버튼 하트 = 💚, 기타 = 💙(CSS content 스왑, 하드코딩 이모지 색 회피).

## 주의 / 정지조건

- **4콤보 유지세(유일한 진짜 비용):** 색 있는 컴포넌트는 앞으로 **라이트/다크 × 기타/베이스 4조합**에서 다 확인. 감당 가능하면 진행, 아니면 단계 3 보류하고 단계 1·2만.
- **콘텐츠 기반(B) 고정:** 사용자 전역 "모드"(A)로 만들지 않는다 — 베이스 모드로 기타 코스 여는 색 충돌 방지. 테마는 "보고 있는 콘텐츠의 악기"를 따른다. **랜딩의 `riff_instrument` 기억값은 "브라우징 필터" 상태**일 뿐 전역 모드가 아니며, 레슨/커리큘럼 진입 시엔 그 콘텐츠 악기가 이긴다.
- **manifest/favicon/앱 아이콘·Toss 아이콘 파랑 고정:** 설치 앱 아이콘·PWA 브랜드색·Toss 결제 아이콘은 악기별로 안 바꾼다. 브랜드색=파랑으로 수용(토큰 포크 예외).
- **난이도 라벨 금지·태그 클라우드 금지·다중 필터 매트릭스 금지.** 축은 악기 하나, 난이도는 순서+마커.
- **초록 접근성:** 흰 텍스트 위 버튼 배경 대비(WCAG) 확인 후 값 확정. 파랑 `#3182F6`과 균형 잡힌 채도.
- **토큰화 선행이 초록의 전제:** "파란 글씨 전부 초록"은 그 요소들이 `--primary` 계열을 참조할 때만 자동으로 된다. 하드코딩 파랑이 남아 있으면 초록 전환에서 조용히 파랑으로 남는다 → 단계 3 착수 전 토큰화 감사 필수(현재 상태 표 ⚠️행).
- **단계 순서:** 1(순서)→2(세그먼트 토글+카피)까지가 브라우징 골격. 3(초록 테마+View Transition)은 델라이트 레이어지만, 이번 요구는 **2·3을 함께** 원하므로 연속 착수.

## 체크리스트

**단계 1 — 순서 위생** ✅ 완료(2026-07-10)
- [x] `CURRICULUM_ORDER` 제거 → `meta.json` `level` 오름차순 정렬(쉬운 코스 위, `order` 필드 없음)
- [x] `content.config.ts` 정합 정리(실측: 파일 존재+컬렉션 1개만으로 경고 전체 억제됨을 확인, 주석으로 명시)

**단계 2 — 세그먼트 토글 + hero 카피** ✅ 완료(2026-07-10)
- [x] `filter-chips` 에서 `data-filter-instrument="all"` 칩 제거 → `[기타][베이스]`만, 기본 기타
- [x] `app.ts` `applyInstrumentFilter` `'all'` 분기 제거(항상 한 악기)
- [x] `home.title` → `home.title.guitar`/`home.title.bass` 분화(3언어) + 클라이언트 스왑용 두 변형 노출
- [x] `instrument.bass` 등 i18n 라벨 3언어
- [x] `riff_instrument` localStorage 기억(`storage.ts` 경유)
- [x] 전량 DOM 렌더(SEO) 유지

**단계 3 — 악기별 액센트(초록) + View Transition** ✅ 완료(2026-07-10)
- [x] 토큰화 감사 — 로고·닉네임·모든 파란 글씨가 `--primary` 계열 참조(하드코딩 색 없음 확인, 수정 불요)
- [x] `data-instrument` 축 + `Base.astro` flash 방지/재적용(+ `riff_instrument` 첫 페인트 전 복원, 홈에 한해 `data-instrument-filter="true"`)
- [x] 커리큘럼/레슨 SSR `data-instrument = meta.instrument`(콘텐츠 기반, `toInstrument()` 헬퍼)
- [x] `tokens.css` `[data-instrument="bass"]` 초록 오버라이드(라이트/다크) — `--primary`·`-press`·`-weak`·`--grad-a/-b`·`--num-accent-blue`·`--prose-hl`(포커스링은 `--primary` 참조라 자동)
- [x] 악보 컨테이너(`.fretboard,.tabsvg,.staffsvg`)에서 `--primary` 파랑 재선언(테마 클램프, `[data-instrument="bass"]` 스코프 아래 — specificity 대응) — 렌더러 코드 미수정, 악보 색 불변
- [x] Toss 아이콘·favicon·PWA theme_color 파랑 고정 확인(포크 제외)
- [x] 후원 버튼 하트 이모지(`💙`, 하드코딩 글리프) → `.donate-heart::before` content 스왑, 베이스=💚
- [x] `applyInstrumentFilter` 를 `document.startViewTransition` 로 감싸기(+폴백+reduced-motion, app.css 전역 규칙으로 존중)
- [x] 베이스 카드 썸네일 초록 그래디언트 확인(`--grad-a/-b` 자동 + `--grad-fallback` 리팩터)
- [x] V1·V3 + dist 육안/문자열 확인(파란 글씨 잔존 0, SVG 바이트 불변) + hero 스왑/필터 기억/플래시 없음 + Roadmap·이 문서 갱신

## 미해결 질문 (사람 결정)

**✅ 해소됨 (2026-07-10 개정):**
- ~~랜딩 기본 악기~~ → **기타.** 마지막 선택 **localStorage 기억**(`riff_instrument`).
- ~~그룹 표현~~ → **세그먼트 토글(한 악기씩), '전체' 없음.** 섹션 쌓기 폐기.
- ~~베이스 카드 썸네일~~ → **초록 그래디언트 자동.**
- ~~연초록 정확 값~~ → **현행 Toss 블루(`#3182F6`)에서 색상(hue)만 초록으로 자연스럽게 이동한 값**(채도·명도 톤은 파랑과 동일하게 유지 → 토스 감성 유지). 기존 `--green-500`(#12B886, 청록/틸에 가까움)을 그대로 쓰지 않는다. 파랑 스케일(`--primary`/`-press`/`-weak`, 다크 포함)을 **같은 방식으로 hue-shift** 해 초록 스케일 생성. WCAG 대비만 확인.
- ~~악보 근음 색~~ → **악보는 테마 무관, 현행 색 유지**(초록화 안 함). 컨테이너 스코프 클램프로 구현, 렌더러 바이트 불변.
- ~~온램프 마커 문구~~ → **온램프 마커 불채택**(넣지 않음). 초심자 안내는 `level` 오름차순 정렬로 갈음.
- ~~정렬 키~~ → **`level` 오름차순만**(쉬운 코스 위). 별도 `order` 필드 없음.
- ~~hero 카피 값~~ → **기타 변형에서 악기 단어만 치환**(기타→베이스), 3언어. 별도 작문 없음.

**🔴 남은 결정:** 없음(전부 확정). 구현만 남음.
