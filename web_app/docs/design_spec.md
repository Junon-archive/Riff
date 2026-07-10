# Riff — 프론트엔드 디자인 명세서 (Design Spec)

> **시각 SSOT(Single Source of Truth):** `web_app/docs/design_reference.html` (1344줄, 전량 정독 후 본 문서 작성).
> 이 문서는 목업의 CSS/마크업/JS 인터랙션에 존재하는 실제 수치·규칙을 **코드화**한 것이며, 재해석·재발명하지 않는다.
> 구현 시 새 값이 필요하면 이 문서를 먼저 갱신한 뒤 코드에 반영한다(문서-코드 불일치 금지).
>
> **참고 문서:** `_design_docs/00_master_prd.md`(§3 UI/톤, §5.1 저장소 고지) · `_design_docs/04_localization/translation_map.md`(톤 가이드·"긁지 않기") · `_design_docs/01_architecture/state_storage.md`(`gh_state` 스키마·nudge 트리거)
> **구현 시 필독:** `web_app/docs/implementation_guide.md`(프론트엔드 아키텍처 확정본 — 현재 미작성, `technical_spec.md` OPEN-9 참조), `_design_docs/01_architecture/tech_stack.md`
> **기술 세부 SSOT:** `web_app/docs/technical_spec.md` — 스택 결정(§2)·렌더러 함수 계약(§5, `renderFretboard()`/`renderTab()`은 SVG 문자열을 반환하는 순수 함수이며 React 컴포넌트가 아님)·상태/저장(§6)·i18n 91키 정합(§7)은 이 문서가 SSOT다. 본 문서(디자인 명세)는 시각 스펙만 다룬다.

---

## 목차
1. [브랜드 · 보이스](#1-브랜드--보이스)
2. [디자인 토큰](#2-디자인-토큰)
3. [레이아웃](#3-레이아웃)
4. [컴포넌트 카탈로그](#4-컴포넌트-카탈로그)
5. [상태 정의](#5-상태-정의)
6. [다크모드](#6-다크모드)
7. [모션](#7-모션)
8. [접근성](#8-접근성)
9. [반응형 규칙](#9-반응형-규칙)
10. [목업에 없어 보강하는 UI](#10-목업에-없어-보강하는-ui)

---

## 1. 브랜드 · 보이스

| 항목 | 값 |
|---|---|
| 서비스명 | **Riff** |
| 로고 | pick(기타 피크) 모양 인라인 SVG, `viewBox="0 0 24 24"`, `fill="currentColor"`, path: `M12 2c4.4 0 8 2.6 8 6.4 0 3.1-2 5.2-3.9 7.2-1.4 1.5-2.1 3-2.5 4.9-.2 1-.9 1.5-1.6 1.5-.9 0-1.6-.8-1.9-2.1C9.3 21 9 17 8 14.6 6.9 12 4 11 4 8.4 4 4.6 7.6 2 12 2z` |
| 로고 크기 | `.brand .pick { width:22px; height:22px; color: var(--primary); }` |
| 워드마크 | `.brand { font-weight:800; font-size:19px; letter-spacing:-0.03em; }` — 아이콘 + "Riff" 텍스트, gap 8px |
| 파비콘 | pick SVG를 단색(`--blue-500 #3182F6`)으로 favicon.svg 제작 (§10 보강 항목 참조) |
| 톤앤매너 | 토스(TOSS) 스타일: 극도의 미니멀리즘, 넓은 여백, 큰 라운드, 친절한 대화체(존댓말·구어체, "~해봐요"/"~예요") |
| 언어별 톤 | ko: 존댓말+대화체(반말 금지) / en: friendly & concise / ja: ですます체, 과한 경어체 지양 (`translation_map.md` §1) |
| **긁지 않기 원칙** | 도발적 도입("솔직히 말할게요")·몰아세우는 반문·깎아내리는 통계 인용 금지. 항상 **부드럽고 자세하게** 설명한다. 느낌표·이모지는 절제해서 사용. 매뉴얼조·명령조 금지. 신규 카피 작성 시 반드시 `translation_map.md` §1의 금지/대안 표를 대조한다. |
| 지원 언어 | `ko`(기본/폴백) · `en` · `ja` — 문자열은 전량 `src/i18n/{ko,en,ja}.json` 경유, 하드코딩 금지 |

---

## 2. 디자인 토큰

토큰은 `:root`(라이트) / `[data-theme="dark"]`(다크) CSS 커스텀 프로퍼티로 정의된다. 구현체에서는 이 값을 `src/styles/tokens.css`(또는 Tailwind `theme.extend` 등 채택 스택에 맞는 형태)로 1:1 이식한다. **임의로 값을 조정하지 않는다.**

### 2.1 베이스 팔레트

| 토큰 | 값 |
|---|---|
| `--blue-50` | `#E8F3FF` |
| `--blue-100` | `#C9E2FF` |
| `--blue-500` | `#3182F6` (Toss 시그니처 블루) |
| `--blue-600` | `#2272EB` |
| `--blue-700` | `#1B64DA` |
| `--grey-900` | `#191F28` |
| `--grey-800` | `#333D4B` |
| `--grey-700` | `#4E5968` |
| `--grey-600` | `#6B7684` |
| `--grey-500` | `#8B95A1` |
| `--grey-400` | `#B0B8C1` |
| `--grey-300` | `#D1D6DB` |
| `--grey-200` | `#E5E8EB` |
| `--grey-100` | `#F2F4F6` |
| `--grey-50` | `#F9FAFB` |
| `--green-500` | `#12B886` (완료/성공) |
| `--yellow-500` | `#FFC043` (강조/예약, 컨페티 팔레트에 사용) |

### 2.2 의미 토큰 — 라이트 vs 다크

| 토큰 | 라이트 | 다크 | 용도 |
|---|---|---|---|
| `--bg` | `#FFFFFF` | `#17171C` | 앱 배경 |
| `--bg-sub` | `#F2F4F6` | `#0E0E12` | 앱 밖 배경(데스크톱 프레임 바깥) |
| `--card` | `#FFFFFF` | `#1E1E24` | 카드 배경 |
| `--card-sub` | `#F9FAFB` | `#26262E` | 서브 카드/입력창/바텀시트 텍스트영역 배경 |
| `--line` | `#E5E8EB` | `#2E2E38` | 보더 |
| `--text` | `#191F28` | `#EDEEF0` | 본문 텍스트 |
| `--text-2` | `#4E5968` | `#B0B8C1` | 보조 텍스트 |
| `--text-3` | `#8B95A1` | `#7C838D` | 3차(캡션/메타) 텍스트 |
| `--primary` | `#3182F6` | `#4593FC` | 주요 액션(버튼/링크/포인트) |
| `--primary-press` | `#1B64DA` | `#3182F6` | 버튼 active/press 배경 |
| `--primary-weak` | `#E8F3FF` | `#17263D` | primary 옅은 배경(칩/뱃지/콜아웃) |
| `--shadow` | `0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.06)` | `0 1px 2px rgba(0,0,0,.4), 0 8px 24px rgba(0,0,0,.5)` | 카드/프레임 큰 그림자 |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,.05), 0 2px 8px rgba(0,0,0,.04)` | `0 1px 2px rgba(0,0,0,.4), 0 2px 8px rgba(0,0,0,.35)` | 작은 그림자(lang-seg active 등) |

다크모드에서만 재정의되는 회색조(그레이스케일 반전, §6 참조):

| 토큰 | 라이트(공통값) | 다크 오버라이드 |
|---|---|---|
| `--grey-100` | `#F2F4F6` | `#26262E` |
| `--grey-50` | `#F9FAFB` | `#1E1E24` |
| `--grey-200` | `#E5E8EB` | `#2E2E38` |

> `--green-500`, `--yellow-500`, `--blue-*` 원시 팔레트 값은 다크모드에서도 동일(재정의 없음).

### 2.3 형태 토큰

| 토큰 | 값 | 사용처 |
|---|---|---|
| `--radius-lg` | `24px` | (대형 카드용 예약 토큰) |
| `--radius` | `20px` | 카드, 커리큘럼 카드, month-head, prog-summary |
| `--radius-sm` | `14px` | 버튼, day 항목(직접 14px), render-area 내부 요소, field, io-text, callout |
| `--pill` | `999px` | 배지/칩/lang-seg/pbar |
| 기타 개별 radius | `icon-btn 12px` · `month-num 12px` · `pay-btn .ico 9px` · `block-tag .n 7px` · `toast 18px` · `sheet 28px 28px 0 0` · `데스크톱 .app 프레임 28px` | 컴포넌트별 예외값(위 토큰에 없는 하드코딩 라운드) |

### 2.4 그림자

| 토큰 | 값(라이트) | 값(다크) |
|---|---|---|
| `--shadow` | `0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.06)` | `0 1px 2px rgba(0,0,0,.4), 0 8px 24px rgba(0,0,0,.5)` |
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,.05), 0 2px 8px rgba(0,0,0,.04)` | `0 1px 2px rgba(0,0,0,.4), 0 2px 8px rgba(0,0,0,.35)` |
| 토스트 전용 | `0 8px 30px rgba(0,0,0,.28)` (라이트/다크 공통, 토큰화 안 됨 — 그대로 이식) |

### 2.5 레이아웃 상수

| 토큰 | 값 | 설명 |
|---|---|---|
| `--app-w` | `480px` | 모바일 앱 컬럼 최대폭(`max-width`) |
| `--safe-b` | `env(safe-area-inset-bottom, 0px)` | 하단 세이프에어리어(노치 기기) — footer-cta, sheet, toast-wrap 패딩에 가산 |

### 2.6 타이포그래피

**폰트 스택** (외부 의존 없음, 시스템 폰트만 사용):
```
--font: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
        "Pretendard", "Malgun Gothic", "Segoe UI",
        "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP",
        "Noto Sans KR", Roboto, "Helvetica Neue", Arial, sans-serif;
```

**전역 기본값**: `line-height: 1.5`, `letter-spacing: -0.01em`, `-webkit-font-smoothing: antialiased`.

**스케일** (셀렉터 · 크기 · 굵기 · 자간 · 줄간격 · 색상 순):

| 스타일명 | 셀렉터 | font-size | font-weight | letter-spacing | line-height | color | 비고 |
|---|---|---|---|---|---|---|---|
| Display (H1) | `h1.display` | 30px | 800 | -0.035em | 1.28 | `--text` | 랜딩/커리큘럼 최상단 제목, `margin:10px 0 0` |
| Lesson H1 | `.lesson-head h1` | 26px | 800 | -0.035em | 기본(1.5) | `--text` | `margin:10px 0 0` |
| Section title | `.section-title` | 20px | 800 | -0.03em | 기본 | `--text` | |
| Sheet title | `.sheet h2` | 21px | 800 | -0.03em | 기본 | `--text` | 바텀시트 헤딩 |
| Lead | `.lead` | 16px | 500 | 기본 | 기본 | `--text-2` | `margin:12px 0 0` |
| Eyebrow | `.eyebrow` | 13px | 700 | 0 | 기본 | `--primary` | 크럼(breadcrumb)류 상위 |
| Crumb | `.crumb` | 13px | 700 | 기본 | 기본 | `--primary` | |
| Lesson sub | `.lesson-head .sub` | 15px | 기본(400) | 기본 | 기본 | `--text-2` | `margin:8px 0 0` |
| Sheet sub | `.sheet .sh-sub` | 14.5px | 기본 | 기본 | 기본 | `--text-2` | |
| Prose(본문) | `.prose p` | 15.5px | 기본 | 기본 | **1.72** | `--text` | `margin:0 0 14px`, 마지막 문단 margin 0 |
| Callout | `.callout` | 14.5px | 500 | 기본 | 기본 | `--text` | |
| Block tag | `.block-tag` | 13px | 800 | 기본 | 기본 | `--primary` | |
| Month title | `.month-head .t b` | 16px | 800 | -0.02em | 기본 | `--text` | |
| Month sub | `.month-head .t small` | 13px | 500 | 기본 | 기본 | `--text-3` | |
| Week label | `.week-label` | 13px | 800 | 기본 | 기본 | `--text-2` | |
| Day title | `.day .dt b` | 15px | 700 | -0.02em | 기본 | `--text` | |
| Day sub | `.day .dt small` | 12.5px | 기본 | 기본 | 기본 | `--text-3` | |
| Render caption | `.render-cap b` | 14px | 800 | 기본 | 기본 | `--text` | |
| Render note | `.render-note` | 12px | 기본 | 기본 | 기본 | `--text-3` | 중앙정렬 |
| Progress big | `.prog-summary .big` | 28px | 800 | -0.03em | 기본 | `--primary` | |
| Save amount big | `.save-amount .big` | 22px | 800 | -0.03em | 1.4 | `--text` | 내부 `<b>` 30px/`--primary` |
| Button (primary) | `.btn` | 17px | 700 | -0.02em | 기본 | `#fff` | |
| Button (lesson-nav) | `.lesson-nav .btn` | 15px | 700 | 기본 | 기본 | 상속 | |
| Toast text | `.toast .txt` | 14px | 600 | 기본 | 1.45 | `#fff` | 강조 `<b>` = `#6EB1FF` |
| Field input | `.field` | 16px | 기본 | 기본 | 기본 | `--text` | |
| IO textarea | `.io-text` | 13px | 기본 | 기본 | 기본 | `--text` | monospace: `ui-monospace, "SFMono-Regular", Menlo, monospace` |
| Nick chip | `.nick-chip` | 13px | 700 | 기본 | 기본 | `--primary` | |
| Lang seg button | `.lang-seg button` | 12px | 700 | 기본 | 1 | `--text-3`(inactive)/`--text`(active) | |
| Free badge | `.free-badge` | 13px | 800 | 기본 | 기본 | `--primary` | |
| Meta pill / chip | `.meta-pill` | 12px | 600 | 기본 | 기본 | `--text-2` | `.chip` 은 12px/700, `#fff` on gradient |
| Curr card title | `.curr-body h3` | 19px | 800 | -0.03em | 기본 | `--text` | |
| Teaser title | `.teaser h3` | 16px | 800 | 기본 | 기본 | `--text` | |
| Teaser desc | `.teaser p` | 13px | 기본 | 기본 | 기본 | `--text-3` | |
| Philosophy | `.philosophy p` | 15px | 500 | 기본 | 기본 | `--text-2` | 강조 `<strong>` = `--text`/800 |
| Pay button | `.pay-btn` | 14.5px | 700 | 기본 | 기본 | `--text` | |
| Storage note | `.storage-note p` | 13px | 기본 | 기본 | 기본 | `--text-2` | CTA 버튼 13px/700/`--primary` |

> 규칙: **display/h1급 헤딩은 항상 음수 letter-spacing(-0.02em ~ -0.035em)** 을 가진다("타이트 트래킹") — 토스 타이포의 핵심 시그니처. 본문(prose)은 letter-spacing 기본값(전역 -0.01em)만 적용하고 줄간격을 1.72로 넉넉히 준다.

### 2.7 악기별 액센트 테마 — 베이스 = 연초록 (백로그 05 단계 3)

**모델:** 기타는 Toss 블루(현행) 고정. 베이스일 때만 `[data-instrument="bass"]` 스코프에서 액센트 토큰을 **연초록**으로 오버라이드한다(콘텐츠 기반 B — `meta.instrument`로 결정, `05_tag-filter.md` §단계 3). **가법적** — 베이스 스코프가 없으면 기존 파랑 토큰이 그대로 폴백되어 기타 UI 는 바이트 불변.

**색 성격(사람 확정):** Toss 블루(HSL 215,92%,58%)에서 **자연스럽게 옮긴 초록** — 청록/틸(`--green-500 #12B886`, hue≈160°) 아님, 네온/라임 아님. **hue ≈143° 에메랄드 그린**으로 고정하고, 파랑과 **같은 무게(백색텍스트 대비 동일)** 로 읽히도록 **명도를 지각 보정**했다(수학적 equal-HSL 회전은 초록이 네온으로 튀므로 CSS-lightness 를 낮춰 상대휘도를 파랑 카운터파트와 1:1로 맞춤). 결과 램프는 파랑 램프의 각 단계와 **상대휘도·백색 대비가 일치**한다.

**악보는 테마 무관:** 지판/타브/오선보 색 체계(`color_legend.md` 계약)는 이 테마가 **건드리지 않는다**. `--prose-hl`(레슨 산문 하이라이트)만 초록 등가로 바꾸고, `--highlight`(이미 초록)와 스코어 role 색은 불변. 렌더러가 참조하는 `--primary` 는 악보 컨테이너 스코프에서 파랑으로 재선언(클램프)한다 — 05 §단계 3 참조.

| 토큰 | 기타(파랑, 라이트) | 베이스(초록, 라이트) | 기타(파랑, 다크) | 베이스(초록, 다크) |
|---|---|---|---|---|
| `--primary` | `#3182F6` | `#2B8C50` | `#4593FC` | `#199A4B` |
| `--primary-press` | `#1B64DA` | `#1E703D` | `#3182F6` | `#2B8C50` |
| `--primary-weak` | `#E8F3FF` | `#E8F4ED` | `#17263D` | `#14281C` |
| `--grad-a` | `rgba(69,147,252,.55)` | `rgba(48,163,96,.55)` | `rgba(69,147,252,.32)` | `rgba(48,163,96,.32)` |
| `--grad-b` | `rgba(27,100,218,.85)` | `rgba(30,112,61,.85)` | `rgba(11,46,107,.90)` | `rgba(12,52,27,.90)` |
| `--num-accent-blue` | `#2272EB` | `#257D47` | `var(--primary)` | `var(--primary)`(자동) |
| `--prose-hl` | `mix(--blue-500 20%, white)` | `mix(--primary 20%, white)` | `mix(--blue-500 30%, transparent)` | `mix(--primary 30%, transparent)` |
| `--grad-fallback` | `--blue-500/600/700` 리터럴 | 권고: 아래 grad-fallback 참조 | (라이트와 공용) | (라이트와 공용) |

> **채도 톤다운 (2026-07-10, 사람 확정):** 초기 에메랄드(`#1F984D` 등)가 완료 버튼·섬네일에서 다소 **쨍하다**는 피드백 → **HSL 채도 S만 20%↓**(hue≈143°·명도 유지). 위 표는 톤다운 **후** 값이다(SSOT). 명도를 유지해 **대비는 오히려 소폭 상승**. 초기값 참조: primary 라이트 `#1F984D`/다크 `#09AA47`, press 라이트 `#147A3B`, num `#1A8844`, grad `rgba(34,177,94,·)`/`rgba(20,122,59,·)`/`rgba(7,57,26,·)`.

**초록 램프(내부 근거, hue≈143°, S 20%↓):** primary `#2B8C50`(500) · num `#257D47`(600) · press `#1E703D`(700) · 다크 primary `#199A4B`. 각 값의 백색 대비: primary 4.23 · num 5.12 · press 6.10 · 다크 primary 3.64 — 모두 톤다운 전·현행 파랑 이상.

**WCAG:** 라이트 버튼(백색 텍스트 on `--primary #2B8C50`) = **4.23:1**(파랑 3.71 이상). 링크(초록 on 흰)도 4.23:1. `--primary-press #1E703D` = 6.10:1. `--num-accent-blue #257D47` = 5.12:1(본문 AA). 다크 버튼(on `#199A4B`) = **3.64:1**(파랑 3.07 이상, large AA), 다크 배경 위 초록 텍스트 = 4.90:1(AA). **결론: 4콤보 전부 현행 파랑 이상 유지.**

**grad-fallback 처리 권고:** 현행 `--grad-fallback` 은 `--blue-500/600/700` **리터럴** 참조라 `--primary` 포크로 자동 전환되지 않는다. **권고(택1):**
1. **(선호·적용됨) 베이스 무개입 리팩터** — base `--grad-fallback` 의 3스톱을 `var(--primary) 0% → var(--num-accent-blue) 55% → var(--primary-press) 100%` 로 재작성. 기타에서 `--primary`=blue-500·`--num-accent-blue`=blue-600·`--primary-press`=blue-700 이므로 **바이트 불변**, 베이스에서는 자동으로 초록 밴드. 별도 베이스 오버라이드 불필요.
2. **명시 오버라이드** — 리팩터를 원치 않으면 베이스 스코프에 초록 리터럴(`#2B8C50 0% → #257D47 55% → #1E703D 100%`) `--grad-fallback` 을 직접 선언.

**4콤보 조화:** 라이트 초록은 카드·칩·버튼에서 파랑과 동일한 채도감·무게로 앉고(톤다운 에메랄드, 틸 아님), 다크 초록(`#199A4B`)은 `#17171C` 배경에서 파랑 `#4593FC` 와 대칭으로 선명하다. `--primary-weak`(라이트 `#E8F4ED`/다크 `#14281C`)는 파랑 위크와 동일한 명도 대역이라 칩/뱃지 레이아웃 회귀 없음.

**섬네일 초록 듀오톤(2026-07-10):** 카드 사진 듀오톤도 파랑 스톱을 hue≈143° 회전 후 S 20%↓ → 라이트 `#156132→#8CF2B3`, 다크 `#082112→#5CC885`(`Base.astro` `#duotone-light-bass`/`#duotone-dark-bass`, CSS 는 `[data-instrument="bass"] .thumb-img` 에서 전환). 그래디언트 옅은 중앙부의 파란기 제거.

> 적용은 `tokens.css` 에 `:root[data-instrument="bass"]{…}` + `[data-theme="dark"][data-instrument="bass"]{…}` 두 블록으로(엔지니어 배선). 값 확정은 본 절이 SSOT.

---

## 3. 레이아웃

### 3.1 모바일 셸 (기본, < 600px)

- `.app`: `position:relative; max-width:480px; min-height:100vh; margin:0 auto; background:var(--bg);`
- 화면 전체가 곧 앱(별도 프레임 없음).

### 3.2 데스크톱 프레임 (≥ 600px)

```css
@media (min-width: 600px) {
  .app {
    min-height: calc(100vh - 48px);
    margin: 24px auto;
    border-radius: 28px;
    box-shadow: var(--shadow);
    overflow: hidden;
  }
}
```
- 바깥 배경은 `--bg-sub`(라이트 `#F2F4F6` / 다크 `#0E0E12`), 즉 "카드처럼 떠 있는 480px 앱"을 중앙 배치.
- 상하 여백 24px씩(합 48px) 확보해 `min-height` 보정.

### 3.3 Topbar

- `.topbar`: `position:sticky; top:0; z-index:40; height:56px; padding:0 8px 0 6px; display:flex; align-items:center; gap:8px;`
- 배경: `color-mix(in srgb, var(--bg) 82%, transparent)` + `backdrop-filter: saturate(180%) blur(12px)` (반투명 블러, sticky 시 콘텐츠가 살짝 비침)
- 보더: 기본 `border-bottom:1px solid transparent` → 스크롤 시(`scrollY > 4`) JS가 `.scrolled` 클래스를 추가해 `border-bottom-color: var(--line)`로 전환.
- 구성 순서(좌→우): `back 아이콘버튼(뒤로, 홈에서는 hidden)` → `brand(pick+Riff, 탭 시 홈 이동)` → `spacer(flex:1)` → `lang-seg(3버튼 세그먼트)` → `theme 아이콘버튼` → `nick-chip(닉네임 설정 시에만 표시)`.
- z-index 스택: topbar 40 < footer-cta 30 은 **아님** — 실제로는 footer-cta(30) < topbar(40) < scrim/sheet(60) < toast(70) < confetti(65, pointer-events:none). 정리하면 **footer-cta(30) < topbar(40) < confetti(65) < scrim/sheet(60)... 주의**: 목업 원문 z-index는 confetti 65 > scrim 60. 구현 시 이 순서를 그대로 유지한다 — `footer-cta:30, topbar:40, scrim(+sheet):60, confetti:65, toast-wrap:70`.

### 3.4 View 컨테이너

- `.view { padding: 8px 20px 120px; }` — 하단 120px는 sticky footer-cta에 콘텐츠가 가려지지 않도록 하는 여백.
- 라우팅 전환 시 3개 뷰(`view-home`, `view-curriculum`, `view-lesson`) 중 활성 뷰만 `hidden` 해제, 나머지는 `[hidden]{display:none}`.
- 진입 시 `scrollTo({top:0, behavior:"instant"})`로 항상 최상단에서 시작.

### 3.5 Footer CTA (하단 고정 도네이션 진입)

```css
.footer-cta {
  position: sticky; bottom: 0; z-index: 30;
  padding: 12px 20px calc(12px + var(--safe-b));
  background: linear-gradient(to top, var(--bg) 68%, transparent);
}
```
- 모든 뷰에서 상시 노출(홈/커리큘럼/레슨 공통). 버튼은 `.btn.secondary`.
- 그라데이션 배경으로 스크롤 콘텐츠와의 경계를 부드럽게 페이드.

---

## 4. 컴포넌트 카탈로그

각 컴포넌트는 (a) 목업 상 CSS 값 (b) 마크업 구조 (c) 상태를 함께 표기한다.

### 4.1 Topbar 하위 요소

| 컴포넌트 | 스펙 |
|---|---|
| `.icon-btn` | `40×40px`, `border-radius:12px`, `display:grid; place-items:center`, `:active{background:var(--grey-100)}` — 뒤로가기/테마 버튼 공용 |
| `.brand` | `display:flex; gap:8px; font-weight:800; font-size:19px; letter-spacing:-0.03em`, `role="button" tabindex="0"` (키보드 접근 가능), 클릭 시 홈으로 이동 |
| `.lang-seg` | `display:inline-flex; background:var(--grey-100); border-radius:999px; padding:3px;` `role="tablist"` — 내부 버튼 `data-lang="kr\|en\|jp"` |
| `.lang-seg button` | `12px/700, color:var(--text-3), padding:5px 9px, border-radius:999px` |
| `.lang-seg button.active` | `background:var(--bg); color:var(--text); box-shadow:var(--shadow-sm)` (다크모드 예외: `background:#3A3A44`) |
| `.nick-chip` | `display:inline-flex; max-width:108px; padding:7px 12px; border-radius:999px; background:var(--primary-weak); color:var(--primary); font:13px/700` — 닉네임 미설정 시 `display:none`, 텍스트는 `text-overflow:ellipsis` |

### 4.2 버튼(`.btn`)

| 변형 | 스펙 |
|---|---|
| Base | `width:100%; height:56px; border-radius:14px(--radius-sm); background:var(--primary); color:#fff; font:17px/700; letter-spacing:-0.02em;` `transition: transform .1s, background .15s, opacity .15s;` |
| `:active` | `transform:scale(.98); background:var(--primary-press);` |
| `.secondary` | `background:var(--grey-100); color:var(--text);` (배경만 변경, 높이 동일 56px, footer-cta/lesson-nav/io-row/storage 액션에서 사용) |
| `.ghost` | `background:transparent; color:var(--text-2); height:48px;` (시트 하단 "닫기/나중에" 류) |
| `:disabled` | `opacity:.5; cursor:default;` (lesson-nav prev/next 경계에서 사용) |
| lesson-nav 내부 | `.lesson-nav .btn { height:50px; font-size:15px; }` (2버튼 `display:flex; gap:10px`) |
| io-row 내부 | `.io-row .btn { height:52px; font-size:15px; }` |

### 4.3 카드(`.card`)

- Base: `background:var(--card); border:1px solid var(--line); border-radius:20px(--radius); padding:20px;` `transition: transform .12s ease, box-shadow .15s ease, background .25s;`
- `.tap`(클릭 가능 카드): `cursor:pointer;` `:active{ transform:scale(.985); }`

### 4.4 진도바(`.pbar`)

- 트랙: `height:8px; border-radius:999px; background:var(--grey-200); overflow:hidden;`
- 채움(`> i`): `background:var(--primary); border-radius:999px;` `transition: width .6s cubic-bezier(.2,.8,.2,1);` — 폭(`width`)을 JS로 갱신하면 애니메이션.
- 축소형(`week-label .wp`): `height:6px`, week 진행률 표기에 인라인 사용.

### 4.5 Free badge

- `.free-badge`: `display:inline-flex; gap:6px; background:var(--primary-weak); color:var(--primary); font:13px/800; padding:8px 14px; border-radius:999px;` — 랜딩 최상단, 이모지(🎁) + i18n 텍스트.

### 4.6 커리큘럼 카드(`.curr-card`)

- 컨테이너: `.card.curr-card.tap { margin-top:16px; overflow:hidden; padding:0; }`
- 썸네일(`.curr-thumb`): `height:132px; padding:16px; display:flex; align-items:flex-end; position:relative; isolation:isolate; color:#fff;`
- **듀오톤 사진 레이어(커리큘럼에 `image`가 있을 때).** z 순서로 4겹:
  - **z0 `<img.thumb-img>`** — `position:absolute; inset:0; width/height:100%; object-fit:cover; object-position:50% 45%;`. 듀오톤은 `filter:url(#duotone-light)`, `[data-theme="dark"] .curr-thumb .thumb-img { filter:url(#duotone-dark); }`. (밴드 ≈3.6:1이 원본 3:2보다 넓어 세로만 크롭 → 세로 위치만 유효. 45%로 상표 라벨·노브를 밴드 밖으로.) 이미지 요구: `alt=""`·`loading="lazy"`·`decoding="async"`·`width/height` 명시(CLS 방지).
  - **z3 `::before`(그라디언트)** — `radial-gradient(120% 120% at 100% 0%, rgba(255,255,255,.20), transparent 60%), linear-gradient(135deg, var(--grad-a) 0%, transparent 45%, var(--grad-b) 100%)`. **색은 토큰만**(`--grad-a/-b`, `tokens.css` — 라이트/다크 재정의). 하드코딩 금지.
  - **z4 `::after`(하단 스크림)** — `linear-gradient(to top, rgba(5,20,50,.55), transparent 55%)`. 칩·제목 가독성 확보.
  - **z5 `.chip`** — `position:relative; z-index:5;`.
- **듀오톤 SVG 필터:** `#duotone-light`/`#duotone-dark`를 `Base.astro` `<body>` 최상단에 **전역 1쌍**만 정의(페이지당 1회, 카드 중복 금지). feColorMatrix(휘도 그레이스케일) → feComponentTransfer([shadow,highlight] 2색). 라이트 `#0B2E6B→#7FB4FF`, 다크 `#050F24→#4E86D6`. **`[data-theme]` 속성 셀렉터로 전환**(`prefers-color-scheme` 금지 — §6 다크모드 방식과 통일, JS 주입 없이 View Transitions·Safari 안전).
- **폴백(`image`가 null — 향후 커리큘럼):** `<img>` 미렌더 + `.curr-thumb.no-img` → `::before`가 불투명 브랜드 밴드(`var(--grad-fallback)`), `::after` 없음. 사진 없이도 카드가 깨지지 않는다(그레이스풀 디그레이데이션).
- 데이터·추가 절차: 커리큘럼 `image` 필드는 `technical_spec.md` §4.4, 신규 커리큘럼 썸네일 SOP는 `_design_docs/00_curriculum_authoring_playbook.md` §8.
- 썸네일 내부 `.chip`: `font:12px/700; background:rgba(255,255,255,.22); padding:5px 10px; border-radius:999px; backdrop-filter:blur(4px);`
- 본문(`.curr-body`): `padding:18px 20px 20px;` → 제목(`h3`, 19px/800) → 설명(`.muted`, 14px) → `.curr-meta`(플렉스 wrap, gap 6px) 안에 `.meta-pill`(12px/600, `background:var(--grey-100)`) 다건.
- 클릭 시 해당 커리큘럼의 `curriculum` 뷰로 이동.

### 4.7 Teaser (준비중 카드)

- `.card.teaser`: `border-style:dashed; background:var(--card-sub); display:flex; align-items:center; gap:14px; margin-top:16px;`
- 좌측 emoji(26px) + 우측 `h3`(16px/800) + `p`(13px, `--text-3`).
- 점선 보더 + 서브 배경으로 "아직 비활성/예고" 느낌을 시각적으로 구분.

### 4.8 Storage note (진도 저장 안내 배너)

- `.storage-note`: `margin-top:16px; display:flex; gap:12px; align-items:flex-start; background:var(--card-sub); border:1px solid var(--line); border-radius:14px(--radius-sm); padding:14px 16px;`
- 좌측 emoji(💾, 20px, `line-height:1.4`) + 우측 텍스트(13px, `--text-2`) + CTA 버튼(13px/700, `--primary`, `margin-top:8px`).
- CTA 클릭 → storage 바텀시트 오픈.

### 4.9 Philosophy(철학 카피)

- `.philosophy`: `margin-top:28px; text-align:center; padding:28px 16px;`
- `p`: `15px/500, color:var(--text-2)`; 강조 `<strong>`: `color:var(--text); font-weight:800`.

### 4.10 커리큘럼 아코디언 트리 (Month → Week → Day)

**Progress summary 카드** (`.prog-summary`, `.card` 변형):
- `background:var(--primary-weak); border-radius:20px; border:none; padding:18px 20px;`
- 상단 row(`between`): 좌측 "진도율 라벨(13px/700 muted) + 퍼센트(28px/800 primary)", 우측 "완료/전체 일수(13px/600 muted)".
- 하단 `.pbar`(margin-top 12px)로 시각화.

**Month 헤더** (`.month-head`):
- `width:100%; display:flex; gap:12px; padding:18px 20px; background:var(--card); border:1px solid var(--line); border-radius:20px;`
- `.month.open .month-head`: 하단 라운드 제거(`border-radius:20px 20px 0 0`) — 아래 month-body와 시각적으로 이어짐.
- `:active`: `background:var(--grey-50)`.
- 좌측 `.month-num`(38×38px, `border-radius:12px`, `background:var(--primary-weak)`, `color:var(--primary)`, 14px/800, 숫자 또는 완료 시 `✓`) — 완료 상태(`.month.done`)는 `background:var(--green-500); color:#fff`.
- 중앙 `.t`(flex:1): `b`(16px/800 제목) + `small`(13px/500 `--text-3`, 서브/진행요약).
- 우측 `.caret`(20px 아이콘, `transition:transform .25s`) — `.month.open .caret { transform:rotate(180deg); }`.
- `.month.soon .month-head { opacity:.62; }` — 클릭해도 열리지 않음(월 데이터 `soon:true`면 JS가 토글 무시).

**Month 바디** (`.month-body`):
- 기본 `display:none`; `.month.open .month-body { display:block; }`
- `border:1px solid var(--line); border-top:none; border-radius:0 0 20px 20px; overflow:hidden; background:var(--card-sub);`

**Week 라벨** (`.week-label`):
- `display:flex; gap:8px; padding:14px 8px 8px; font:13px/800; color:var(--text-2);`
- 구성: "N주차" 텍스트 → `.pbar.wp`(flex:1, height:6px) → 퍼센트 숫자(`--text-3`/700).

**Day 항목** (`.day`):
- `width:100%; display:flex; gap:12px; padding:13px 12px; border-radius:14px; background:var(--card); border:1px solid var(--line); margin-top:6px;`
- `:active`: `transform:scale(.99); background:var(--grey-50);`
- 좌측 `.check`(26×26px 원형, `border:2px solid var(--grey-300)`, 내부 체크 SVG는 기본 `color:transparent`) → 완료 시 `.day.done .check { background:var(--green-500); border-color:var(--green-500); color:#fff; }`.
- 중앙 `.dt`(flex:1): `b`(15px/700, "Day N. 제목") + `small`(12.5px `--text-3`, 서브카피).
- 우측 `.arr`(18px 화살표 아이콘, `color:var(--grey-400)`).
- `.day.locked { opacity:.5; }` — 잠긴 Day(§10 규칙 참조).

### 4.11 레슨 상세(Day)

**헤더** (`.lesson-head`): `crumb`(13px/700 primary, "월제목 · N주차") → `h1`(26px/800) → `.sub`(15px `--text-2`).

**블록 태그** (`.block-tag`): 이론/시각자료/오늘의연습 3블록 공통 헤더. `display:inline-flex; gap:7px; font:13px/800; color:var(--primary); margin-bottom:12px;` 좌측 `.n`(22×22px, `border-radius:7px`, `background:var(--primary-weak)`, 숫자 ①②③에 대응하는 `1`/`2`/`3`).

**Prose**: `.prose p { font-size:15.5px; line-height:1.72; margin:0 0 14px; }` — `<b>` 인라인 강조 허용(레슨 본문 예시처럼).

**Callout**: `background:var(--primary-weak); border-radius:14px; padding:16px 18px; font:14.5px/500; display:flex; gap:10px;` 좌측 emoji(💡, 18px).

**Render area** (지판/타브 마운트 지점 — 실제 렌더러는 notation-renderer 산출물 사용, §협업 경계 준수):
- `.render-area { background:var(--card); border:1px solid var(--line); border-radius:20px; padding:20px 18px; overflow:hidden; }` (연속 배치 시 `+ .render-area { margin-top:12px }`)
- 캡션 row(`.render-cap`): 좌측 `b`(14px/800, "코드 다이어그램" 등), 우측 `.badge`(11px/700 `--text-3`, `background:var(--grey-100)`, `padding:4px 8px`, `border-radius:999px`) — 목업에선 `"SVG · JSON render"` 라벨. **구현 시 badge는 실 렌더러가 데이터 기반임을 나타내는 선택적 표기이며, 필수 UI는 아니다.**
- 마운트 컨테이너 `#fretMount`/`#tabMount` — 여기에 `renderFretboard(score)`/`renderTab(score)`(notation-renderer 제공, `technical_spec.md` §5 계약)가 반환하는 SVG 문자열을 `innerHTML`로 주입한다(React 컴포넌트가 아니라 순수 함수 → 문자열). 두 SVG 모두 루트에 `.fretboard`/`.tabsvg` 클래스가 있어야 하며 `{ width:100%; height:auto; display:block; color:var(--text); }` — **`currentColor` 기반이라 다크모드에 자동 대응**해야 함(렌더러 출력 요건, `technical_spec.md` §5.2·§5.3).
- 하단 `.render-note`(12px `--text-3`, 중앙정렬) — 사용법/캡션.

**완료 액션** (`.complete-wrap`):
- 기본: `.btn#completeBtn`(Primary, "오늘의 연습 완료 🎸").
- 완료 후: 버튼 `display:none` → `.done-state` 표시:
  ```css
  .done-state {
    display:flex; gap:12px; justify-content:center; align-items:center;
    background:var(--card-sub); border:1px solid var(--line);
    border-radius:14px; height:56px; font-weight:800; color:var(--green-500);
  }
  ```
  체크 SVG(22px) + "오늘 연습을 마쳤어요" 텍스트.
- 완료 클릭 시: `state.done`에 키 추가 → localStorage 저장(`lib/storage.ts markDayComplete`) → 컨페티 → 아낀 금액 갱신 → **해당 주(week)의 모든 Day가 완료되면 900ms 지연 후 도네이션 시트 자동 오픈**(`weekDone` 판정, §4.14 참조).
- `.lesson-nav`: `display:flex; gap:10px; margin-top:12px;` 내부 2개 `.btn.secondary`(prev/next, 50px/15px) — 경계에서 `disabled`.

### 4.12 바텀시트/모달 공통 (`.scrim` + `.sheet`)

- Scrim: `position:fixed; inset:0; z-index:60; background:rgba(0,0,0,.42); opacity:0; pointer-events:none; transition:opacity .28s; display:flex; align-items:flex-end; justify-content:center;` → `.show{opacity:1; pointer-events:auto;}`
- Sheet: `width:100%; max-width:480px(--app-w); background:var(--bg); border-radius:28px 28px 0 0; padding:10px 24px calc(28px + var(--safe-b)); transform:translateY(100%); transition:transform .34s cubic-bezier(.2,.9,.25,1); max-height:88vh; overflow-y:auto;` → `.scrim.show .sheet { transform:translateY(0); }`
- Grip 핸들: `width:40px; height:4px; border-radius:4px; background:var(--grey-300); margin:0 auto 18px;`
- 접근성: `role="dialog"` `aria-modal="true"` `aria-labelledby="{제목id}"`. 배경 클릭(scrim 자기 자신 클릭) 또는 `[data-close-sheet]` 버튼으로 닫힘.
- 3개 시트 인스턴스: **도네이션**(`donateScrim`) · **닉네임**(`nickScrim`) · **저장/백업**(`storageScrim`).

### 4.13 닉네임 입력

- `.field`: `width:100%; height:56px; border-radius:14px; border:1.5px solid var(--line); background:var(--card-sub); padding:0 18px; font-size:16px;` `:focus { border-color:var(--primary); background:var(--bg); }` `::placeholder{ color:var(--text-3); }`
- 시트 구성: 그립 → `h2`(21px/800) → `.sh-sub`(14.5px `--text-2`) → `.field`(`maxlength=16`) → `.btn`(Primary, "이 이름으로 시작하기") → `.btn.ghost`("다음에 할게요").
- 최초 진입 시(닉네임 미설정) **1200ms 지연 후 자동 오픈**(강제 아님, 언제든 "다음에" 로 스킵 가능).

### 4.14 도네이션 시트

- 구성: 그립 → `h2` → `.sh-sub` → `.save-amount`(중앙정렬, 아낀 금액 강조 문구) → `.pay-grid`(2열 그리드, gap 10px) → `.btn.ghost.close-free`("괜찮아요, 계속 무료로 배울래요").
- `.save-amount`: `padding:22px 0 8px; text-align:center;` `.big`: `22px/800`, 내부 `<b>`: `30px/color:var(--primary)`.
- `.pay-grid`: `display:grid; grid-template-columns:1fr 1fr; gap:10px; margin:18px 0 6px;`
- `.pay-btn`: `display:flex; gap:10px; padding:15px 16px; border:1px solid var(--line); border-radius:14px; background:var(--card); font:14.5px/700;` `:active{ transform:scale(.98); background:var(--grey-50); }`
- `.pay-btn .ico`: `30×30px; border-radius:9px; display:grid; place-items:center; font-size:15px; color:#fff;`

| 채널 | 클래스 | 아이콘 배경 | 아이콘 텍스트 색 | 라벨 |
|---|---|---|---|---|
| Toss | `.pay-toss` | `#3182F6` | `#fff`(기본 ico색 상속) | "Toss" |
| 카카오페이 | `.pay-kakao` | `#FEE500` | `#191F28` | "카카오페이"(i18n `donation.kakaopay`) |
| PayPal | `.pay-paypal` | `#0070BA` | `#fff` | "PayPal" |
| Buy Me a Coffee | `.pay-bmc` | `#FFDD00` | `#191F28` | "Buy me a coffee" (☕ 이모지 아이콘) |

- 노출 우선순위(레이아웃 동일, 정렬 우선순위만 변경): `ko` → Toss/카카오페이 먼저, `en`/`ja` → PayPal/BMC 먼저 (`translation_map.md` §5). 링크는 전부 플레이스홀더(실 결제 연동 없음).
- 트리거: footer-cta "이 강의, 후원으로 응원하기" 버튼 클릭 **또는** 주(week) 완주 시 자동(900ms 지연). 강제 모달 아님 — 항상 ghost 버튼으로 무료 계속 진행 가능(PRD §3.7 원칙).

### 4.15 저장(Export/Import) 시트

- 구성: 그립 → `h2` → `.sh-sub` → `.io-row`(2버튼: "내보내기"/"코드로 불러오기") → `.io-text`(textarea, monospace, base64 직렬화 코드 표시/붙여넣기) → `.btn.ghost`("닫기").
- `.io-row`: `display:flex; gap:10px; margin-top:6px;` 버튼 높이 52px.
- `.io-text`: `width:100%; height:120px; resize:none; border-radius:14px; border:1.5px solid var(--line); background:var(--card-sub); padding:14px 16px; font-size:13px; font-family:monospace; margin-top:12px;`
- Export: `state`(닉네임+완료목록) → JSON → `btoa(unescape(encodeURIComponent(...)))`로 인코딩 → textarea에 채우고 `.select()`. Import: 역과정 디코딩 → 파싱 성공 시 상태 반영 + 성공 토스트, 실패 시 에러 토스트(§4.16, §5 에러 상태).
- **실제 구현에서는 `lib/storage.ts`의 `exportState()/importState()`를 사용**(설계 문서상 `Blob`/`File` 기반 시그니처, 목업의 `btoa` 방식은 데모 단순화이며 최종 구현은 `state_storage.md` §8 API를 따른다).

### 4.16 넛지 토스트

```css
.toast-wrap {
  position: fixed; left:0; right:0; bottom:0; z-index:70;
  display:flex; flex-direction:column; align-items:center;
  padding:0 16px calc(16px + var(--safe-b)); pointer-events:none;
}
.toast {
  width:100%; max-width:440px; pointer-events:auto;
  display:flex; gap:12px; align-items:center;
  background:var(--grey-900); color:#fff;
  border-radius:18px; padding:15px 16px; margin-top:10px;
  box-shadow:0 8px 30px rgba(0,0,0,.28);
  transform:translateY(140%); opacity:0;
  transition:transform .4s cubic-bezier(.2,.9,.25,1), opacity .3s;
}
[data-theme="dark"] .toast { background:#33343C; }
.toast.show { transform:translateY(0); opacity:1; }
```
- 내부: `.emoji`(22px) + `.txt`(14px/600, `line-height:1.45`, 강조 `<b>` = `#6EB1FF`).
- 표시 시간: 기본 `4200ms` 후 `.show` 제거 → `400ms` 뒤 DOM 제거(트랜지션 완료 대기).
- 트리거는 데이터 기반(§10, `state_storage.md` §5 트리거표: `enter_week_2`/`finish_week`/`finish_month`/`welcome_back`/`almost_there`) — **1회 노출 dedup은 `gh_state.nudges.shown` 경유**(목업은 데모 단순화로 `enter_week_2` 1건만 구현, 실제는 5개 트리거 전부 지원).

### 4.17 컨페티

- `#confetti { position:fixed; inset:0; z-index:65; pointer-events:none; }` — `<canvas>`.
- 팔레트: `["#3182F6","#4593FC","#12B886","#FFC043","#FF6B6B","#C9E2FF"]` (Primary·Green·Yellow·경고레드·Blue100 조합).
- 파티클: 120개, 발사 원점 `(innerWidth/2, innerHeight*0.42)`, 속도 `6~15`, 중력 `0.22~0.34`, 크기 `6~12px`, 사각형(`fillRect`, 세로 압축 `0.6배`)으로 색종이 형태 표현, `life`가 0 이하 또는 화면 밖으로 나가면 정리.
- **`prefers-reduced-motion: reduce` 감지 시 컨페티 자체를 실행하지 않음**(`burstConfetti()` 최상단 가드).

### 4.18 아이콘 세트 (인라인 SVG, `currentColor`)

| 아이콘 | 용도 | 사이즈 |
|---|---|---|
| Back chevron | topbar 뒤로가기 | 24×24, `stroke-width:2.2` |
| Pick(피크) | 브랜드 로고 | 22×22, `fill` 채움 |
| Sun / Moon | 테마 토글(`.sun`/`.moon`, 다크모드 시 서로 토글 표시) | 22×22, `stroke-width:2` |
| Check(체크) | day 완료 상태, done-state, import 성공 토스트 | 14~22px 가변, `stroke-width:2.6~3` |
| Chevron right(화살표) | day 항목 우측 이동 표시 | 18×18, `stroke-width:2.2` |
| Chevron down(caret) | month 아코디언 토글 | 20×20, `stroke-width:2.2`, `.open` 시 `rotate(180deg)` |

모든 아이콘은 `stroke="currentColor"` 또는 `fill="currentColor"`로 다크모드/컬러 상속 자동 대응. 신규 아이콘 추가 시 동일 규칙(currentColor, round cap/join) 준수.

---

## 5. 상태 정의

| 상태 | 적용 컴포넌트 | 시각 규칙 |
|---|---|---|
| **default** | 전 컴포넌트 | 위 §4 기본 스펙 |
| **active(press)** | `.btn`, `.card.tap`, `.day`, `.month-head`, `.pay-btn`, `.icon-btn` | `:active { transform: scale(.98~.985); }` + 배경 톤다운(`--primary-press`/`--grey-50`/`--grey-100`) — 모두 100ms 내 반응하는 즉각 피드백 |
| **disabled** | `.btn:disabled`(lesson-nav prev/next 경계) | `opacity:.5; cursor:default;` 클릭 무반응 |
| **done(완료)** | `.day.done`, `.month.done`, `#completeBtn`→`#doneState` | 초록(`--green-500`) 체크 표시로 전환. day: `.check` 배경 채움. month: `.month-num`이 숫자→`✓`+초록배경. 레슨: 버튼→`.done-state` 배지 |
| **locked(잠김)** | `.day.locked` | `opacity:.5;` — 탭 가능 여부는 §10 "locked day 규칙" 참조(기본: 시각적으로만 흐리게, 클릭 자체는 차단하지 않고 콘텐츠 열람은 허용 — 자유 열람 원칙) |
| **soon(준비중)** | `.month.soon` | `.month-head { opacity:.62; }`, 클릭 시 아코디언 토글 무시(열리지 않음), sub 텍스트가 "곧 열려요"로 대체 |
| **empty(빈 상태)** | 커리큘럼 목록/월 트리에 데이터 없음 | §10 보강 항목에서 신규 정의(목업엔 없음 — CURRICULA가 항상 1건 이상 존재하는 데모) |
| **loading(로딩)** | 콘텐츠(md/JSON) 비동기 로드 구간 | §10 보강 항목에서 신규 정의(목업은 인메모리 상수라 로딩 상태 없음) |
| **error(에러)** | Import 실패, 콘텐츠 로드 실패 | 기존 예시: `toast("⚠️", "코드를 다시 확인해주세요.")` — 어두운 토스트 + 경고 이모지, 파괴적이지 않은 톤 유지("긁지 않기" 준수) |
| **focus(포커스)** | `.field`, 버튼, 링크 | `.field:focus { outline:none; border-color:var(--primary); background:var(--bg); }` — **`outline:none`은 대체 포커스 링이 있는 `.field`에만 한정**, 그 외 인터랙티브 요소는 §8 접근성 규칙에 따라 가시적 포커스 링을 별도로 보강해야 함(목업엔 명시적 `:focus-visible` 스타일이 없어 §10에서 보강) |

---

## 6. 다크모드

- 스위치: `<html data-theme="light|dark">` 속성 토글(`themeBtn` 클릭) → `localStorage`(`riff_theme`)에 저장, 재방문 시 복원.
- 전환 애니메이션: `body { transition: background .25s ease, color .25s ease; }`, `.app { transition: background .25s ease; }`, `.card`도 `background .25s` 포함 — 토큰 전환이 즉시가 아니라 **부드럽게 페이드**됨.

### 6.1 토큰 스왑 표 (§2.2 재요약 — 구현 체크리스트용)

| 토큰 | 라이트 | 다크 |
|---|---|---|
| bg | #FFFFFF | #17171C |
| bg-sub | #F2F4F6 | #0E0E12 |
| card | #FFFFFF | #1E1E24 |
| card-sub | #F9FAFB | #26262E |
| line | #E5E8EB | #2E2E38 |
| text | #191F28 | #EDEEF0 |
| text-2 | #4E5968 | #B0B8C1 |
| text-3 | #8B95A1 | #7C838D |
| primary | #3182F6 | #4593FC |
| primary-press | #1B64DA | #3182F6 |
| primary-weak | #E8F3FF | #17263D |
| grey-100 | #F2F4F6 | #26262E |
| grey-50 | #F9FAFB | #1E1E24 |
| grey-200 | #E5E8EB | #2E2E38 |
| shadow | `rgba(0,0,0,.04)/.06` | `rgba(0,0,0,.4)/.5` |
| shadow-sm | `rgba(0,0,0,.05)/.04` | `rgba(0,0,0,.4)/.35` |

### 6.2 컴포넌트별 다크모드 예외 (토큰 스왑만으로 해결 안 되는 하드코딩)

| 컴포넌트 | 라이트 | 다크 예외 |
|---|---|---|
| `.lang-seg button.active` | `background:var(--bg)` | `background:#3A3A44` (하드코딩, 토큰 아님) |
| `.toast` | `background:var(--grey-900) #191F28` | `background:#33343C` (하드코딩) |
| `.day .check`(미완료 테두리) | `border-color:var(--grey-300)` | 동일 토큰이나 grey-300은 다크 재정의 없음 → 실사용 시 대비 확인 필요(§8 명도대비 참조) |
| `.pay-kakao`/`.pay-bmc` `.ico` | `#FEE500`/`#FFDD00` 고정 | 브랜드 컬러라 다크에서도 **불변**(라이트/다크 공통, 텍스트색 `#191F28` 유지로 대비 확보) |
| 지판/타브 SVG | `color:var(--text)` 상속 | `currentColor` 기반이라 별도 처리 없이 자동 대응 — 렌더러 필수 요건 |
| 컨페티 팔레트 | 고정 6색 | 다크에서도 **불변**(색종이는 배경 위에 얹히는 요소라 대비 이슈 없음) |

---

## 7. 모션

| 모션명 | 대상 | 스펙 |
|---|---|---|
| **Rise(등장)** | `.view > *` 각 자식 | `@keyframes rise { from{opacity:0; transform:translateY(10px);} to{opacity:1; transform:none;} }` `.view > * { animation: rise .4s ease both; }` |
| **View stagger** | 뷰 진입 시 순차 등장 | `:nth-child(2){delay:.03s}` `:nth-child(3){delay:.06s}` `:nth-child(4){delay:.09s}` (4번째 자식까지만 지연 정의, 이후 자식은 지연 없이 동시 등장) |
| **Sheet 등장/퇴장** | 바텀시트 | `transform:translateY(100%)→(0)`, `transition: transform .34s cubic-bezier(.2,.9,.25,1)` / scrim `opacity .28s` |
| **Toast 등장/퇴장** | 넛지 토스트 | `transform:translateY(140%)→(0)`, `opacity 0→1`, `transition: transform .4s cubic-bezier(.2,.9,.25,1), opacity .3s`, 자동 숨김 지연 4200ms |
| **Pbar fill** | 진도바 | `transition: width .6s cubic-bezier(.2,.8,.2,1);` — 값 변경 시 이징감 있는 채움 애니메이션 |
| **Caret rotate** | month 아코디언 | `transition: transform .25s;` → `open` 시 `rotate(180deg)` |
| **Card/Day press** | `.card.tap`, `.day`, `.month-head`, `.pay-btn` | `transform: scale(.98~.985)` on `:active`, 100~120ms |
| **Confetti burst** | 완료 액션 | 120파티클, requestAnimationFrame 루프, 중력+회전 물리, `life` 감쇠로 페이드아웃 |
| **Theme/배경 전환** | `body`, `.app`, `.card` | `transition: background .25s ease, color .25s ease` |

**`prefers-reduced-motion: reduce` 대응**(전역 규칙, 반드시 유지):
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: .001ms !important; transition-duration: .01ms !important; }
}
```
추가로 컨페티는 위 미디어쿼리와 별개로 **JS 레벨에서 `matchMedia("(prefers-reduced-motion: reduce)").matches`일 때 아예 실행하지 않는다**(단순 duration 축소가 아니라 기능 자체를 스킵).

---

## 8. 접근성

| 항목 | 규칙 |
|---|---|
| **명도 대비** | 텍스트 토큰(`--text`, `--text-2`)은 배경 대비 WCAG AA(4.5:1) 이상을 만족하도록 설계됨(그레이 900/700 on 화이트). `--text-3`(`#8B95A1`)는 캡션/메타 전용으로 큰 텍스트 또는 비필수 정보에만 사용 — 본문 텍스트에 `--text-3` 사용 금지. |
| **포커스** | 키보드 포커스 시 시각적 링 필수. 목업은 `.field`만 `border-color` 변경으로 포커스를 나타내므로, **버튼/카드/day/월헤더/lang-seg 등 나머지 인터랙티브 요소는 구현 시 `:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }` 등을 보강**해야 한다(목업 미정의 → 이 문서에서 신규 규정, §10). |
| **키보드 내비게이션** | `.brand`(홈 이동)는 `role="button" tabindex="0"` — Enter/Space로 활성화 가능해야 함(구현 시 keydown 핸들러 필수, 목업 JS는 click만 바인딩되어 있어 **구현 단계에서 keydown 보강 필요**). 아코디언(`month-head`), 바텀시트 트리거, day 항목은 모두 `<button>` 네이티브 요소라 기본 키보드 지원됨. |
| **ARIA** | 언어 스위처: `role="tablist"` + `aria-label="언어 선택"`(개별 버튼에 `role="tab"`/`aria-selected`는 목업에 없음 → **구현 시 추가 권장**). 바텀시트: `role="dialog"` `aria-modal="true"` `aria-labelledby="{heading-id}"`. 아이콘 전용 버튼(`back`, `theme`)은 `aria-label` 필수(목업에 이미 적용됨: `aria-label="뒤로"`, `aria-label="테마 전환"` — **다국어 대응 시 aria-label도 i18n 경유해야 함**, 목업은 하드코딩 한국어라 구현 시 교정). |
| **시맨틱 마크업** | `<header class="topbar">`, `<main class="view">`(3개), 시트는 `<div role="dialog">`. 레슨 본문은 `<section class="block">` 단위로 구획, 헤딩 레벨은 `h1`(레슨 제목) 하나만 사용 — **섹션 소제목(이론/시각자료/오늘의 연습)은 시각적으로만 강조된 `.block-tag`이며 시맨틱 헤딩이 아님 → 구현 시 `h2`로 승격하거나 `aria-label`로 랜드마크 보강 검토 필요**(목업의 접근성 갭, §10). |
| **탭 타깃 크기** | 버튼 높이 48~56px, day 항목 padding 13px×12px(실질 터치 영역 ~48px+), icon-btn 40×40px — **모두 40px 이상**으로 모바일 터치 기준 충족. |
| **세이프에어리어** | `env(safe-area-inset-bottom, 0px)`를 footer-cta, sheet, toast-wrap 하단 패딩에 가산해 노치/제스처 바 기기에서 콘텐츠 잘림 방지. |
| **reduced motion** | §7 참조 — 애니메이션 최소화 시에도 기능(정보 전달)은 손실 없어야 함(예: 컨페티 생략돼도 완료 텍스트/체크는 그대로 표시). |
| **다국어 aria/lang** | `document.documentElement.lang`을 언어 전환 시 갱신(`ko`/`en`/`ja`) — 목업 로직: `state.lang==="jp"?"ja":(state.lang==="en"?"en":"ko")`. |

---

## 9. 반응형 규칙

| 분기 | 조건 | 규칙 |
|---|---|---|
| 모바일(기본) | `< 600px` | `.app`이 뷰포트 풀폭, `max-width:480px` 제한만 적용(작은 화면에선 사실상 100%). 프레임/그림자 없음. |
| 데스크톱 | `≥ 600px` | `.app`에 `margin:24px auto; border-radius:28px; box-shadow:var(--shadow); overflow:hidden; min-height:calc(100vh - 48px);` — 480px 고정폭 카드가 `--bg-sub` 배경 위에 중앙 배치되는 "모바일 프레임 프리뷰" 형태 유지. |
| 그 외 | — | 목업에 480~600px 사이나 태블릿 전용 별도 분기는 존재하지 않음. **추가 분기(예: 태블릿 2컬럼)는 정의되어 있지 않으므로 임의로 만들지 않는다** — 필요 시 별도 설계 논의 후 이 문서를 갱신. |

---

## 10. 목업에 없어 보강하는 UI

아래 항목은 `design_reference.html`에 명시적으로 존재하지 않지만, 실제 서비스에 필요하여 **이 문서에서 신규로 정의**한다. 톤·토큰·컴포넌트 스펙은 위 §1~9의 기존 시스템을 그대로 재사용하고, 새 색상/치수를 도입하지 않는다.

### 10.1 최초 온보딩 / 닉네임 첫 입력 플로우
- 목업 동작(유지): 첫 방문 & 닉네임 미설정 시 홈 진입 1200ms 후 `nickScrim` 자동 오픈, 언제든 "다음에 할게요"로 스킵 가능(강제 아님).
- 보강: 스킵한 경우 재노출하지 않음(세션당 1회 자동 제안). 이후에는 `nick-chip`이 "닉네임 설정" placeholder 아이콘 형태(예: 👤 + "닉네임" 텍스트, `--text-3` 톤)로 topbar에 상시 노출되어 사용자가 원할 때 다시 열 수 있게 한다(현재 목업은 미설정 시 chip 자체가 `display:none`이라 재진입 경로가 사라짐 — UX 갭 보강).
- 컴포넌트: 기존 `.nick-chip` 재사용, 미설정 상태 전용 variant만 추가(배경 `--grey-100`, 텍스트 `--text-3`, placeholder 라벨은 i18n 키 신설: `nick.chip_empty` — **아직 91키 사전에 미반영, `technical_spec.md` OPEN-8**).

### 10.2 localStorage 차단 시 폴백 안내 UI
- 배경: `state_storage.md` §6 — localStorage 미지원/차단(시크릿 모드, 브라우저 정책 등) 시 메모리 폴백 + 안내 필요.
- 컴포넌트: `.storage-note`(§4.8)와 동일한 배너 컴포넌트를 재사용하되, 상태를 **경고 톤**으로 전환: 아이콘 `⚠️`, 배경은 `--card-sub`을 유지하되 텍스트 컬러에 강조 없이(그레이 톤 유지, "긁지 않기" 원칙상 빨간 경고색 남발 금지) 안내 문구만 강화. 문구 예시(톤 가이드 준수): "지금 이 브라우저에서는 진도 저장이 어려워요. 이 화면을 벗어나면 기록이 사라질 수 있어요 — 그래도 오늘 배운 건 그대로 남아요 🙂"
- 노출 위치: 랜딩 최상단(free-badge 아래, storage-note보다 우선) + 완료 버튼 클릭 시 저장 실패를 감지하면 토스트(`⚠️` 아이콘, 기존 `.toast` 컴포넌트)로 즉시 알림.
- CTA: Export 유도 없음(애초에 저장이 안 되므로) — 대신 "그래도 계속 배우기" 단일 액션만 제공.
- i18n 키 신설: `storage.blocked_banner`, `storage.blocked_toast` (ko/en/ja 3개 언어, `translation_map.md` §2 `storage.*` 네임스페이스에 편입). **아직 91키 사전에 미반영, `technical_spec.md` OPEN-8**.

### 10.3 로딩 / 스켈레톤
- 배경: 콘텐츠(md+JSON)가 `_design_docs`에서 빌드 시 이식되며, 클라이언트 라우팅 시 비동기 로드 가능성 존재(목업은 인메모리 상수라 로딩 상태 없음).
- 스펙: 기존 `.card`/`.day`/`.month-head` 형태를 그대로 유지한 채 내부를 회색 블록으로 대체하는 **스켈레톤 카드**를 신설.
  - 배경: `--grey-100`(라이트) / `--grey-200`(다크, 대비 확보) 기반의 shimmer.
  - 애니메이션: `@keyframes shimmer { 0%{background-position:-200% 0;} 100%{background-position:200% 0;} }`, `background: linear-gradient(90deg, var(--grey-100) 25%, var(--grey-50) 50%, var(--grey-100) 75%); background-size:200% 100%; animation: shimmer 1.4s ease-in-out infinite;` — `prefers-reduced-motion: reduce`에서는 애니메이션 없이 단색(`--grey-100`) 정지 상태로 대체.
  - 라운드/치수는 원본 컴포넌트(`.card`=20px, `.day`=14px)와 동일하게 유지해 레이아웃 시프트 최소화.
- 적용 대상: 커리큘럼 목록 최초 로드, 레슨 본문/악보 JSON 로드 구간(지판·타브는 fretboard_score_schema.json 지연 로드 대상이라 `render-area` 내부 스켈레톤 필요).

### 10.4 빈 상태 (Empty state)
- 배경: 목업의 `CURRICULA`는 항상 1개 이상 존재하는 데모 데이터. 실제로는 필터/검색 결과 없음, 또는 신규 커리큘럼 준비 단계에서 발생 가능.
- 스펙: `.card` 컨테이너 내부 중앙정렬, emoji(26~32px, 기존 teaser와 톤 일치) + 제목(16px/800) + 설명(13~14px `--text-3`) — `.teaser` 컴포넌트를 그대로 재사용(점선 보더 유지)하고 CTA 없이 안내 문구만 배치하는 variant로 확장.
- 문구 톤: "아직 준비 중이에요"류의 담백한 안내, 사과·변명조 금지("긁지 않기" 원칙과 동일선상에서 과공손도 지양).

### 10.5 에러 상태 (Error state)
- 기존 목업 사례(재사용): Import 실패 시 `toast("⚠️", "코드를 다시 확인해주세요.")` — 이 패턴을 표준 에러 처리 방식으로 채택.
- 추가 정의: 콘텐츠(md/JSON) 로드 실패, 악보 스키마 검증 실패 등 **페이지 레벨 에러**는 토스트로는 부족하므로 `render-area`/`view` 컨테이너 내부에 인라인 에러 카드를 신설:
  - `.card` 기반, 중앙정렬, `⚠️` 이모지 + "잠시 문제가 생겼어요" 류 담백한 문구 + `.btn.secondary`("다시 시도하기").
  - 색상은 시스템 그레이/텍스트 토큰만 사용(별도 red 토큰 신규 도입 금지 — 팔레트에 semantic red 없음, 필요 시 `#FF6B6B`는 컨페티 팔레트에서만 사용된 값이라 UI 경고색으로 전용하지 않는다).

### 10.6 Locked day 규칙
- 원칙: PRD 상 "모든 콘텐츠는 100% 무료"이며 별도 유료 잠금은 없다. `.day.locked`(§5)는 **접근 자체를 막는 잠금이 아니라, "아직 콘텐츠가 채워지지 않은 미래 Day"를 시각적으로 구분**하는 용도로 한정한다.
- 규칙:
  1. 콘텐츠가 존재하는 Day는 완료 여부와 무관하게 **항상 자유 열람 가능**(순서를 건너뛰어도 접근 차단하지 않음 — PRD §1.2 모듈형/무료 원칙과 일치).
  2. 콘텐츠 매니페스트에 아직 등록되지 않은 미래 Day(예: Month 2/3처럼 `soon:true`)는 `.day.locked` 스타일(`opacity:.5`)로 표시하되 **클릭 시 이동은 발생시키지 않거나**, 이동하더라도 §10.4 빈 상태("이 레슨은 아직 준비 중이에요")로 대체 표시한다. 클릭 자체를 완전히 막기보다 빈 상태로 안내하는 편이 토스식 "정직한 안내" 원칙에 가깝다.
  3. `month.soon`(§4.10)과 `day.locked`는 계층이 다르지만 동일한 시각 언어(`opacity` 반투명 + "곧 열려요" 카피)를 공유한다.

### 10.7 파비콘 / OG 메타
- 파비콘: §1의 pick SVG를 단색(`--blue-500 #3182F6`, 배경 투명 또는 흰 배경 32×32/16×16 PNG 세트 + `favicon.svg`)으로 제작. 다크모드 브라우저 UI 대응이 필요하면 `<link rel="icon" media="(prefers-color-scheme: dark)">` 분기 고려(필수 아님, 있으면 좋음).
- OG 메타: `og:title`="Riff · 무료 기타 레슨", `og:description`=`home.lead` i18n 값(언어별 페이지가 있다면 언어별 메타), `og:image`는 브랜드 블루 그라데이션(`.curr-thumb` 배경과 동일 그라데이션: `linear-gradient(135deg, #4593FC 0%, #3182F6 55%, #1B64DA 100%)`) 위에 로고+워드마크를 배치한 1200×630 이미지로 제작.
- `theme-color` 메타: 라이트 `#FFFFFF`, 다크 대응 시 `media="(prefers-color-scheme: dark)"`로 `#17171C` 추가.

### 10.8 포커스 링 표준화 (§8 보강 재정리)
- 신규 규칙: `:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; border-radius: inherit; }`를 버튼류/카드류/day/월헤더/lang-seg 버튼 전반에 전역 적용. `.field`만 기존처럼 보더색 전환 방식을 유지(입력 필드는 outline보다 border 강조가 시각적으로 더 명확하므로 예외 허용).

---

## 부록: 구현 매핑 체크리스트

- [ ] `src/styles/tokens.css`(또는 채택 스택의 theme 파일)에 §2 전체 토큰 1:1 이식(라이트/다크)
- [ ] `renderFretboard()`/`renderTab()`(notation-renderer 산출물, `technical_spec.md` §5)의 SVG 문자열 반환값을 그대로 사용, 본 문서는 `.render-area`/`.fretboard`/`.tabsvg` 컨테이너 스타일과 `currentColor` 요건만 규정(렌더러 내부 구현은 이 문서 범위 밖)
- [ ] `CompleteButton`은 §4.11 완료 액션 스펙(컨페티+진도갱신+주완료 시 도네이션 시트) 그대로 구현
- [ ] 넛지 트리거는 `state_storage.md` §5의 5개 전체(목업은 `enter_week_2` 1건만 데모) 구현
- [ ] §10 보강 UI(온보딩 재진입 chip, 저장 차단 배너, 스켈레톤, 빈 상태, 에러 상태, locked day, 파비콘/OG, 포커스 링)는 목업에 없으므로 신규 구현 시 이 문서를 1차 스펙으로 사용
