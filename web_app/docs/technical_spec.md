# Riff — 기술 명세서 (Technical Specification)

> 문서 상태: v1 (M2 구현 착수 기준) · 최종 수정: 2026-07-03
> 대상 독자: frontend-engineer, notation-renderer, 빌드/배포 담당
> 상위: `../../_design_docs/00_master_prd.md`
> 관련: `./design_spec.md`(디자인 시스템·컴포넌트 비주얼), `./implementation_guide.md`(설계 수합본),
> `../../_design_docs/01_architecture/tech_stack.md`(스택 결정), `../../_design_docs/01_architecture/state_storage.md`(상태),
> `../../_design_docs/03_data_schema/fretboard_score_schema.json`(렌더 계약), `../../_design_docs/04_localization/curriculum_i18n.md`(콘텐츠 i18n),
> `../../_design_docs/04_localization/i18n_key_map.md`(UI 키 정합 SSOT, §7), `../../_design_docs/04_localization/translation_map.md`(톤·카피 값 SSOT)

이 문서는 **개발 명세**다. 토스체가 아니라 명확·구조적 기술 서술을 사용한다. UI 카피의 톤은 `design_spec.md`와 i18n 사전이 담당한다.

> **⚠️ 개정 (2026-07-03): 빌드/라우팅을 Astro 정적 다중 페이지로 전환.**
> **동기 = SEO.** 해시 SPA(§8)는 레슨별 실제 HTML 이 없어 검색 유입이 불가능하다. **Astro(빌드 타임 전용, 정적 출력)**로 전환해 레슨마다 실제 정적 HTML + 언어별 정적 라우트(hreflang) + View Transitions 를 얻는다. **런타임 프레임워크는 여전히 없다**(정적 HTML + 소형 아일랜드). **§8(해시 라우팅), §9.1(vite/tsx 스크립트), §9.2(SPA fallback rewrite)는 아래 §8-A 로 대체(supersede)**된다. §2(스택 근거 — React·SVG 기각), §4(콘텐츠 파이프라인), §5(렌더러 계약), §6(상태/진도), §7(i18n 사전), §11(config)은 **불변이며 그대로 재사용**한다. Zero-Cost·CF Pages 배포도 불변. 상세는 **§8-A 가 이 주제의 SSOT**.

---

## 1. 개요 & 설계 원칙 (재확인)

Riff는 로그인·서버·DB 없이 동작하는 **정적(Static) 기타 교육 SPA**다. 5대 원칙을 코드 레벨 제약으로 재확인한다.

| 원칙 | 코드 레벨 제약 |
|---|---|
| **Zero-Cost / Static** | 서버 런타임 0. 순수 정적 빌드(`dist/`) + CDN. 상태는 `localStorage` 단일 소스. 유료 SaaS·백엔드 호출 금지. |
| **i18n-first** | 사용자 노출 문자열 하드코딩 금지. UI 문자열=i18n 사전, 레슨 산문=per-lang 콘텐츠. ko/en/ja 1급 시민. |
| **Zero-Hallucination** | 지판·타브는 이미지가 아니라 `fretboard_score_schema.json` JSON → **자체 SVG 렌더**. 이미지 생성 AI 산출물 금지. |
| **Modular** | 커리큘럼=데이터. 새 커리큘럼 추가는 `_design_docs`에 md 추가 → 빌드 재실행으로 끝난다(코드 수정 0). |
| **정직한 한계 고지** | `localStorage` 유실·기기 간 미동기화를 숨기지 않고 안내 + Export/Import 제공. 서버 전송 0(프라이버시 by design). |

서비스명은 **Riff**. (i18n 사전 `common.app_name`은 3언어 전부 "Riff"로 이미 반영됨 — 구 OPEN-1 해소, §12 결정 로그 D10.)

---

## 2. 스택 결정 & 근거

### 2.1 결정: 경량 하이브리드

| 축 | 결정 | 비고 |
|---|---|---|
| 언어 | **TypeScript** | 악보 스키마 타입 안전성이 핵심 이유 |
| 런타임 | **바닐라 JS (ES modules)** — UI 프레임워크 없음 | React/Vue/Svelte 미사용 |
| 빌드/dev/번들 | **Vite** | dev 서버, HMR, 프로덕션 번들, 정적 산출 |
| 렌더링 | **자체 SVG 렌더러** (지판·기본 타브) + **VexFlow**(오선보+타브 결합, §5.4, 빌드타임 SVG) | AlphaTab 미사용 |
| 스타일 | **CSS Variables 디자인 토큰** (Tailwind 미사용) | 목업 `:root` 토큰을 그대로 승계 |
| 라우팅 | **해시 라우팅**(자체 경량 라우터) | SPA fallback 불필요한 안전판 |
| i18n | **자체 경량 사전 로더** (react-i18next 미사용) | ko/en/ja JSON + dot-path resolve |
| 애니메이션 | **자체 canvas 컨페티** (canvas-confetti 미사용) | 목업 구현 재사용, 의존성 0 |

### 2.2 왜 하이브리드인가 (React 기각)

`tech_stack.md`의 최초 결정은 React였으나, **완성도 높은 바닐라 목업(`design_reference.html`, 1,344줄)이 이미 존재**한다. 이 목업은 라우팅·i18n·localStorage 폴백·SVG 렌더·컨페티·바텀시트·nudge를 전부 의존성 없이 구현했다. 이를 근거로 방향을 개정한다.

- **근거:**
  - 앱 표면적이 작다(뷰 3종: 홈/커리큘럼/레슨 + 바텀시트 3종). 가상 DOM·컴포넌트 상태 관리의 이득이 비용을 넘지 않는다.
  - Zero-Cost·경량 번들 목표에 부합. 프레임워크 런타임(수십 KB)과 빌드 복잡도를 제거한다.
  - 목업이 곧 명세이자 참조 구현이다. React 재작성은 검증된 코드를 버리고 위험을 새로 사는 셈.
  - TypeScript + Vite만으로 타입 안전·모듈 경계·트리셰이킹을 확보한다(프레임워크 불필요).
- **트레이드오프:** 컴포넌트 재사용·선언형 렌더의 편의를 포기한다. → 뷰 렌더 함수(`renderHome/renderCurriculum/renderLesson`)와 작은 DOM 헬퍼로 대체한다. 상태→DOM 동기화를 수동 관리한다.
- **기각안:**
  - *React + Vite (기존 결정):* 표면적 대비 과설계. 목업 폐기 비용. **기각.**
  - *Svelte/Solid:* 번들은 작지만 여전히 컴파일러·프레임워크 학습·목업 재작성 필요. **기각.**
  - *Web Components:* 오버엔지니어링. 뷰 3종에 커스텀 엘리먼트 생명주기는 과함. **기각.**

### 2.3 왜 자체 SVG인가 (지판·기본 타브) — VexFlow는 오선보에 한해 후속 채택

> ✅ **개정(2026-07-07):** 지판·기본 타브는 아래 근거대로 **자체 SVG 유지**. 단, **오선보(+타브 결합, 박자 공유)는 VexFlow 채택**(§5.4 `render/staff.ts`). 오선보 조판은 자체 구현 대비 라이브러리가 정확·경제적이고, **빌드타임에만 동작(클라이언트 JS 0)** 이라 Zero-Cost·"런타임 프레임워크 없음"을 깨지 않는다. AlphaTab(재생·GP)만 계속 기각.

- **근거:**
  - 우리 데이터는 표준 오선보가 아니라 **교육용 지판 다이어그램 + 단순 타브**다. 스키마(`fretboard_score_schema.json`)는 이 용도로 정규화돼 있다.
  - 목업이 이미 `renderChord`/`renderTab`으로 정확한 SVG를 그린다. `currentColor` 기반이라 **다크모드 자동 대응**, 반응형 `viewBox`.
  - VexFlow/AlphaTab은 수백 KB 번들 + 오선보 중심 API. 우리 JSON→라이브러리 어댑터를 새로 써야 하고, 지판 다이어그램은 어차피 자체 구현이 필요하다.
  - Zero-Hallucination 원칙: 데이터→SVG 경로가 짧을수록 검증이 쉽다.
- **트레이드오프:** 재생·오디오·정밀 리듬 조판은 자체 구현해야 한다(현재 범위 밖, 목업의 tab.note가 "재생은 추후" 명시). 필요 시 후속에서 재평가.
- **기각안:** *AlphaTab*(재생·GP 파일 강점이나 과대 번들), *VexFlow*(오선보 조판 강점이나 타브·지판 교육용엔 과함). 둘 다 **기각**, 후속 재평가 여지만 남김.

---

## 3. 프로젝트 구조 (`web_app/src/`)

```
web_app/
├── docs/
│   ├── technical_spec.md         (본 문서)
│   ├── design_spec.md            (디자인 시스템·컴포넌트)
│   ├── implementation_guide.md   (설계 수합본)
│   └── design_reference.html     (완성 목업 = 참조 구현 SSOT)
├── scripts/
│   └── build-content.ts          (콘텐츠 파이프라인: _design_docs → src/content)
├── src/
│   ├── main.ts                   진입점: 부트, 이벤트 바인딩, 라우터 시작
│   ├── routes/                   뷰 렌더 함수 (프레임워크 없는 "페이지")
│   │   ├── home.ts               renderHome()
│   │   ├── curriculum.ts         renderCurriculum()
│   │   └── lesson.ts             renderLesson()
│   ├── components/               재사용 DOM 조각 (문자열/엘리먼트 팩토리)
│   │   ├── sheet.ts              바텀시트(도네이션/닉네임/저장) open/close
│   │   ├── toast.ts              nudge 토스트
│   │   ├── confetti.ts           canvas 컨페티
│   │   ├── langSwitcher.ts       언어 세그먼트
│   │   └── donationCard.ts       도네이션 시트 본문 + 아낀 레슨비
│   ├── lib/
│   │   ├── storage.ts            gh_state 로더/세이버 (localStorage 래퍼 + 인메모리 폴백)
│   │   ├── progress.ts           진도율·아낀 레슨비·완료 처리 파생 계산
│   │   ├── nudges.ts             넛지 트리거 엔진 (state_storage §5)
│   │   ├── i18n.ts               사전 로드·언어 감지·dot-path resolve·data-i 바인딩
│   │   └── router.ts             해시 라우터 (파싱·매칭·뒤로가기)
│   ├── render/
│   │   ├── fretboard.ts          지판 SVG 렌더 (schema.fretboard → SVG)
│   │   └── tab.ts                타브 SVG 렌더 (schema.tab → SVG)
│   ├── content/                  [빌드 산출물 — git-ignore] 콘텐츠 파이프라인 출력
│   │   ├── manifest.json         커리큘럼→월→주→일 트리 + 총 Day 수
│   │   └── solo_scale_3months/
│   │       ├── m1.w0.d1.json     per-day: scores[] + prose{ko,en,ja}
│   │       └── … (52개)
│   ├── i18n/
│   │   ├── ko.json  en.json  ja.json   (UI 사전, 14 네임스페이스 91키 — SSOT. 목업 `data-i` 키 정본, §7·`i18n_key_map.md`)
│   ├── styles/
│   │   └── tokens.css            디자인 토큰(:root) + 컴포넌트 CSS (목업에서 추출)
│   ├── config/
│   │   └── index.ts              상수 (VIRTUAL_LESSON_PRICE, 도네이션 링크, 지원 언어 …)
│   └── types/
│       ├── score.ts             fretboard_score_schema.json 1:1 TS 타입
│       ├── state.ts             GhState (state_storage.md 스키마)
│       └── content.ts           DayContent, Manifest 타입
├── index.html                    단일 HTML 셸 (목업 body 구조 이식)
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### 3.1 모듈 경계 규칙

- `lib/*`는 DOM에 직접 의존하지 않는 순수 로직 우선(단, `i18n.ts`의 바인딩 함수, `router.ts`의 `location` 접근은 예외). 테스트 용이성 확보.
- `render/*`는 **입력=스키마 JSON, 출력=SVG 문자열**. 앱 상태·DOM·i18n에 의존하지 않는다(notation-renderer 위임 경계, §13).
- `routes/*`는 `lib`·`render`·`content`를 조합해 뷰를 그린다. 여기서만 앱 상태를 읽고 DOM을 채운다.
- `localStorage` 직접 접근 금지 — 반드시 `lib/storage.ts` 경유(state_storage §1).

---

## 4. 콘텐츠 빌드 파이프라인

### 4.1 목표

`_design_docs/02_curriculum/**`의 `day_N.{ko,en,ja}.md`(프론트매터 + ①②③④ 산문 + 임베드 ```json)를 **빌드 타임에** 파싱해 `src/content`로 이식한다. 런타임은 md를 절대 파싱하지 않는다(정적 JSON만 fetch).

- SSOT는 `_design_docs`. `src/content`는 **생성물**이며 git-ignore(재생성 가능).
- 실행: `scripts/build-content.ts` (Node/tsx). `vite build`/`vite dev` 전에 `prebuild`로 구동하거나 Vite 플러그인의 `buildStart` 훅에서 실행.

### 4.2 입력 구조 (확정 사실)

- 커리큘럼: `solo_scale_3months` (1개). 월 3개, 주 13개(w0~w12), 주당 4일 = **총 52 Day**.
- **dayKey는 전역 주 번호**를 쓴다: `m{M}.w{W}.d{D}`. m1=w0~w4, m2=w5~w8, m3=w9~w12. (주 번호가 전역 유일하므로 커리큘럼 스코프 내 유일 — state_storage §4 충족.)
- 프론트매터: `title`(언어별 번역), `dayKey`·`estMinutes`·`i18nKey`(3언어 동일, 언어 독립).
- 섹션: `## ① 이론/설명`, `## ② 시각 자료`, `## ③ 오늘의 연습`, `## ④ 팁 / 흔한 실수`.
- **JSON 블록은 언어 독립**(curriculum_i18n §3): ko/en/ja 3파일의 ```json 블록은 바이트 동일. → **ko에서 1회만 추출**하고 en/ja의 블록은 무시(검증만).

### 4.3 파서 알고리즘

각 `dayKey`에 대해 ko/en/ja 3파일을 읽고:

1. **프론트매터 파싱**(간단 YAML): `dayKey`, `estMinutes`, `i18nKey`, `title`(per-lang).
2. **섹션 분할:** `## ①~④` 헤딩 기준으로 4구간 분리 → `theory` / `visual` / `practice` / `tips`.
3. **악보 추출:** `visual` 구간의 fenced ```json 블록을 순서대로 파싱 → `Score[]`. **ko 파일에서만** 추출. 각 블록은 `fretboard_score_schema.json`으로 유효성 검사(실패 시 빌드 에러). en/ja의 블록은 ko와 바이트 일치 검증만(불일치 시 경고/에러).
4. **산문 정제:** 각 섹션에서 ```json 블록을 `@@SCORE:N@@` 센티넬(전역 인덱스, 문서 순서)로 치환한 뒤 미니 마크다운→HTML 변환(문단 `<p>`, `**강조**`→`<b>`, 리스트 `<ul>`). 센티넬 문단은 `<div class="lesson-score-slot" data-score-slot="N">` 슬롯으로 후처리된다. 악보는 **네 섹션(theory/visual/practice/tips) 어디서든** 저작 위치에 인라인 렌더된다(백로그 01 Part A).
5. **per-day 산출물 기록** + **매니페스트에 노드 추가.**

### 4.4 산출물 포맷

**per-day: `src/content/solo_scale_3months/m1.w1.d1.json`**

```jsonc
{
  "dayKey": "m1.w1.d1",
  "curriculumId": "solo_scale_3months",
  "estMinutes": 50,
  "i18nKey": "lesson.m1.w1.d1",
  "scores": [
    { "id": "m1.w1.d1.pentatonic_box1", "type": "scale_shape", "meta": { … }, "fretboard": { … } },
    { "id": "m1.w1.d1.four_note_sequence", "type": "tab", "meta": { … }, "tab": { … } }
  ],
  "prose": {
    "ko": {
      "title": "Am 펜타 1번 블록 각인 + 4연음 시퀀스 (저속)",
      "theory": "<p>오늘 왜 이걸 하냐면요 …</p>",
      "visual": "<p>Am 펜타토닉 1번 블록 …</p>",   // 악보 블록은 제거됨. scores[]로 렌더.
      "practice": "<p><b>0~10분 · 워밍업</b> …</p>",
      "tips": "<ul><li>관성 왕복 재발 …</li></ul>"
    },
    "en": { "title": "…", "theory": "…", "visual": "…", "practice": "…", "tips": "…" },
    "ja": { "title": "…", "theory": "…", "visual": "…", "practice": "…", "tips": "…" }
  }
}
```

- `scores`는 언어 독립(1벌). `prose`만 언어별 3벌.
- 렌더 시 산문 내 `data-score-slot="N"` 슬롯을 `scores[N]` 렌더 SVG 로 그 위치에 하이드레이트한다(백로그 01 Part A 완료 — 저작 위치 인라인). 슬롯이 없으면 산문 그대로(하위호환).

**매니페스트: `src/content/manifest.json`**

```jsonc
{
  "schemaVersion": 1,
  "curricula": [
    {
      "id": "solo_scale_3months",
      "titleI18nKey": "curriculum.solo_scale_3months.title",
      "totalDays": 52,
      "months": [
        {
          "month": 1,
          "titleI18nKey": "curriculum.solo_scale_3months.m1.title",
          "weeks": [
            {
              "week": 0,
              "days": [
                { "dayKey": "m1.w0.d1", "i18nKey": "lesson.m1.w0.d1", "estMinutes": 50 },
                { "dayKey": "m1.w0.d2", "i18nKey": "lesson.m1.w0.d2", "estMinutes": 50 }
                /* … */
              ]
            }
            /* w1 … w4 */
          ]
        }
        /* month 2, 3 */
      ]
    }
  ]
}
```

- **총 Day 수(`totalDays`)** 는 매니페스트에서 조회 → 진도율·아낀 레슨비 계산의 분모(state_storage §3).
- 월/주/일 트리는 커리큘럼 계층 뷰(아코디언)와 이전/다음 Day 평탄화의 소스.
- **커리큘럼 카드 메타는 `_design_docs/02_curriculum/{id}/meta.json`이 발원**이다(OPEN-2 해소). `build-content.mjs`가 이를 읽어 매니페스트 커리큘럼 노드에 담고, 런타임(`types/content.ts` `ManifestCurriculum`)이 소비한다. 필드: `titles`/`taglines`/`forWho`(각 `{ko,en,ja}`), `instrument`·`topic`·`level`(정렬 전용 내부값, 화면 노출 금지)·`tags[]`·`durationMonths`, 그리고 **`image`**.
  - **`image: string | null`** — 카드 썸네일 사진의 정적 절대경로(언어 무관 단일값, 예 `"/curriculum/funk-rhythm.webp"`). `meta.json`에 없으면 `null` → 카드는 그라디언트 전용 밴드로 폴백. 실제 파일은 `public/curriculum/*.webp`(원본 `assets/Curriculum_image/`에서 `scripts/optimize-curriculum-images.mjs`로 생성 — 1200px·그레이스케일·q72·≤120KB). 카드는 이 사진을 **brand-blue 듀오톤**(전역 SVG 필터)으로 렌더한다 — 렌더 계약은 `design_spec.md` §4.6, 신규 커리큘럼 추가 절차는 `_design_docs/00_curriculum_authoring_playbook.md` §8.
  - 각 필드는 `curMeta?.X ?? null`로 매핑되므로 **meta.json만 채우면 코드 수정 0**(Modular 원칙).

### 4.5 검증 게이트 (빌드 실패 조건)

- 각 악보 JSON이 `fretboard_score_schema.json` 위반.
- ko/en/ja 간 JSON 블록 불일치 or 섹션 구조(①②③④) 불일치.
- `dayKey` 중복 or 프론트매터 필드(`dayKey/estMinutes/i18nKey`) 3언어 불일치.
- 실패 시 파일·라인 명시하고 빌드 중단(런타임 크래시 방지).

---

## 5. 렌더러 계약 (notation-renderer 인터페이스)

### 5.1 스키마 → TS 타입 (`src/types/score.ts`)

`fretboard_score_schema.json`을 1:1로 반영한다. (요약; 실제 파일은 스키마 전 필드 반영.)

```ts
export type ScoreType = 'fretboard_diagram' | 'tab' | 'scale_shape';
export type NoteRole = 'root' | 'chord_tone' | 'target' | 'color' | 'blue_note' | 'scale' | 'passing';
export type Duration = 'whole' | 'half' | 'quarter' | 'eighth' | 'sixteenth';
export type Technique = 'none' | 'hammer_on' | 'pull_off' | 'slide' | 'bend' | 'vibrato' | 'palm_mute' | 'harmonic';

export interface ScoreMeta {
  title: string; titleI18nKey?: string;
  instrument?: 'guitar'; stringCount: 6;
  tuning?: string[];               // 6번(저E)→1번(고e), 기본 EADGBE
  key?: string; scale?: string; tempoBpm?: number;
  notation?: 'tab' | 'staff' | 'staff+tab' | 'rhythm'; // type=tab 렌더 힌트(§5.4)
}
export interface Dot {
  string: number; fret: number;    // string 1=고음e … 6=저음E, fret 0=개방
  finger?: 0|1|2|3|4; label?: string;
  isRoot?: boolean; highlight?: boolean; role?: NoteRole; muted?: boolean;
}
export interface Barre { fret: number; fromString: number; toString: number; finger: 1|2|3|4; }
export interface Fretboard { startFret: number; fretSpan: number; dots: Dot[]; barre?: Barre[]; }
export interface TabNote {
  string: number; fret: number; duration: Duration; dotted?: boolean; rest?: boolean;
  technique?: Technique; slideToFret?: number; bendTarget?: string;
  label?: string; target?: boolean; highlight?: boolean; role?: NoteRole; finger?: 0|1|2|3|4;
}
export interface Measure { measure?: number; notes: TabNote[]; }
export interface Tab { timeSignature?: string; pattern?: string; measures: Measure[]; }

export interface Score {
  id: string; type: ScoreType; meta: ScoreMeta;
  fretboard?: Fretboard;   // type=fretboard_diagram | scale_shape
  tab?: Tab;               // type=tab
  notes?: string;
}
```

### 5.2 `render/fretboard.ts`

```ts
export function renderFretboard(score: Score): string; // 입력: Score(fretboard 有), 출력: SVG 문자열
```

- 6현 고정. 목업 `renderChord` 방향 계약 승계: **헤드(너트)=왼쪽**, 가로선=현(아래=6번 저E, 위=1번 고e), 세로선=프렛, 왼쪽 굵은선=너트.
- `startFret`+`fretSpan`으로 표시 프렛 창을 잡는다(`startFret>0`이면 왼쪽에 시작 프렛 번호 표기, 너트선 생략/일반 프렛선 처리).
- 각 `Dot`: dot 위치=(string, fret), `finger` 숫자를 dot 안에 표기, `label`(도수/음이름) 표기, `isRoot`→근음 스타일, `highlight`/`role`→강조 색(target/color/blue_note 구분), `muted`→✕, `fret===0`→개방현 O(너트 왼쪽).
- `barre`: `fromString`~`toString`을 `fret`에서 잇는 바 형태 + `finger`.
- **색상은 `currentColor` + CSS 변수**(`var(--primary)` 등)로 → 다크모드 자동 대응. SVG는 반응형 `viewBox`, `width:100%`.
- **SVG 루트 요소는 `class="fretboard"`를 가져야 한다** — `design_spec.md` §4.11이 `.fretboard, .tabsvg { width:100%; height:auto; display:block; color:var(--text); }`로 컨테이너 스타일을 규정하므로, 이 클래스가 없으면 디자인 계약이 깨진다(목업 `renderChord`의 `<svg class="fretboard" …>` 승계).
- `role` 색 매핑은 `design_spec.md`의 팔레트 토큰을 참조(root/target/color/blue_note 각 색).

### 5.3 `render/tab.ts`

```ts
export function renderTab(score: Score): string; // 입력: Score(tab 有), 출력: SVG 문자열
```

- 6줄 타브 스태프. 라벨 e/B/G/D/A/E(위=1번 고e). 목업 `renderTab` 방향 계약 승계.
- `measures[].notes[]`를 시간순 배치. `duration`→가로 간격(폭) 매핑: whole/half/quarter/eighth/sixteenth를 상대 폭으로. `dotted`→1.5배.
- 각 노트: 해당 현 줄 위에 **프렛 숫자** 표기.
- `technique` 표기 계약:
  - `hammer_on`/`pull_off`: 인접 두 음을 잇는 슬러(호) + "H"/"P".
  - `slide`: `slideToFret`까지 잇는 사선 + "sl".
  - `bend`: 위로 꺾는 화살표 + `bendTarget`("half"/"full"/도수) 라벨.
  - `vibrato`: 물결선(~).
  - `palm_mute`: "P.M." + 점선. `harmonic`: 마름모/괄호.
- `rest: true`: **string/fret 무시, `duration`만큼 공백**으로 렌더(스키마 계약).
- `highlight`/`target`/`role`: 강조 색으로 프렛 숫자 표시(fretboard와 동일 팔레트).
- 색·반응형 규칙은 fretboard와 동일(`currentColor`/CSS 변수, `viewBox`). **SVG 루트 요소는 `class="tabsvg"`를 가져야 한다**(`design_spec.md` §4.11 `.fretboard, .tabsvg` 컨테이너 계약, 목업 `renderTab`의 `<svg class="tabsvg" …>` 승계).

### 5.4 `render/staff.ts` (VexFlow — 오선보 + 타브, 박자 공유)

```ts
export function renderStaff(score: Score, mode: 'staff' | 'staff+tab' | 'rhythm'): string;
```

- `type=tab` 이면서 `meta.notation` 이 `"staff"|"staff+tab"|"rhythm"` 일 때 사용(§5.5 `renderScore` 가 라우팅). fretboard/기본 타브는 자체 SVG(§5.2·5.3) 유지.
- **핵심 계약:** 같은 `tab` 데이터(string+fret+duration) 하나에서 **오선보 + 타브를 위아래로 결합**하고 **박자·리듬을 공유**한다(VexFlow `Stave`+`TabStave`+`StaveConnector`, 두 `Voice` 공동 포맷). 음정 = `string`+`fret`+`tuning` 결정 계산(할루시네이션 0), 박자 = `duration`(빔·플래그·점).
  - `"staff"` = 오선보만, `"staff+tab"` = 오선보+타브, `"rhythm"` = 리듬 컴핑(현재 staff+tab 로 렌더).
- **VexFlow 버전 = 4.2.5 고정**(2026-07-07 v5→v4 이관): v4 는 음악 글리프를 **baked 아웃라인 `<path>`(metrics 내장)** 로 그려 폰트·canvas 불필요 → jsdom 빌드타임에서 음표/스템/음자리표 위치가 정확하고 브라우저 폰트 없이도 tofu(□) 없음. (v5 는 `<text>`+웹폰트+canvas measureText 라 jsdom 에서 글리프 깨짐·스템 어긋남 발생.) 프렛 숫자만 시스템 폰트 `<text>` → jsdom 에 `getBBox` 근사 스텁.
- **빌드타임 전용**: Node(빌드) 에서 `jsdom`(devDep) 로 DOM 을 제공하고 VexFlow SVG 백엔드로 **SVG 문자열**을 만든다. **클라이언트 JS 0**(fretboard/tab 과 동일 — 런타임 프레임워크 없음 유지). 전역 `document` 는 렌더 동안만 세팅 후 원복.
- 색: `role`→CSS 변수(fretboard/tab 과 동일 팔레트, `color_legend.md`), 기본 검정은 `currentColor` 로 치환(다크모드 자동). **SVG 루트 요소는 `class="staffsvg"`** — `.fretboard, .tabsvg, .staffsvg` 컨테이너 계약(반응형 `viewBox`, `width:100%`). 오선보 노트헤드는 role 별 색, 타브 프렛 숫자는 note-level 단색.
- **조판 규칙(모든 커리큘럼 자동 적용 — 콘텐츠는 데이터만 정확히 주면 된다):**
  - **표기 옥타브 = treble-8vb(기타 이조 표기).** 실제음(concert, `OPEN_MIDI`)은 그대로, 오선보 "표기"만 +1 옥타브(`WRITTEN_OCTAVE_SHIFT`) + 클레프에 "8". → 다른 기타 악보와 위치 정렬, 실제음은 타브와 일치.
  - **stem 방향:** 그려지는 라인(`keyProps.line`, 임시표 무관) 기준. 단음 = 가운데 줄 B4(line 3) 포함 위 → DOWN, 아래 → UP. 빔 그룹 = 가운데 줄에서 가장 먼 음이 방향 결정(동거리 다수결·동점 DOWN).
  - **빔:** 8·16분음표를 **박(beat) 단위**로 끊어 묶는다(16분 4개·8분 2개씩). `Beam` 은 반드시 `draw` **이전**에 생성해야 개별 flag 가 억제되고 stem 길이가 보정된다.
  - **레이아웃:** 한 줄(system)에 2마디씩 세로 스택(자동 줄바꿈), 마디 폭 = 음표 수 비례(오버플로 방지), 세로 높이 = 음역대 적응(저음 렛저라인이 타브와 안 겹치게).
- **technique 렌더(오선보/타브 오버레이 — v1 한계였던 부분, 이제 지원):**
  - `dead_note`(음정 없는 뮤트 타격음: 고스트/뮤트 스크래치/커팅) → **오선보 X 노트헤드**(키 3번째 파트 `.../x`) + **타브 "X"**(`fret:"X"`). 음정 없으므로 **임시표(#/♭) 미부착.** 색·stem·beam 은 일반 음표와 동일.
  - `palm_mute`(음정 있는 팜뮤트) → 실음(노트헤드·프렛·색·stem 정상) + 오선보 위 **"P.M." 주석**(`Annotation`, role 색).
  - **데이터 저작 지침:** 펑크의 뮤트 스크래치·고스트는 `dead_note`, 진짜 팜뮤트만 `palm_mute`(구분: `color_legend.md`/`00_curriculum_authoring_playbook.md`·`fretboard_score_schema.json`). 그 외 technique(H/P/sl/bend/vib/harmonic) 오버레이는 자체 타브 SVG(§5.3)에서만 표기.

### 5.5 디스패치 & 마운트 계약

- `render/index.ts` 의 **`renderScore(score): string`** 가 단일 진입점: `type=fretboard_diagram|scale_shape`→`renderFretboard`, `type=tab`→ `meta.notation` 분기(`"staff"|"staff+tab"|"rhythm"`→`renderStaff`, 그 외/미지정→`renderTab`).
- 레슨 뷰(`LessonView.astro`)는 각 섹션 산문의 `data-score-slot="N"` 슬롯을 `renderScore(scores[N])` 로 치환해 `render-area` figure 를 그 위치에 인라인 생성(빌드타임 SVG 주입, `hydrateScoreSlots`).

---

## 6. 상태 & 진도

### 6.1 저장소 (`lib/storage.ts`)

- 단일 키 `gh_state`(state_storage.md). 스키마는 `types/state.ts`의 `GhState`로 타입화. `schemaVersion`로 마이그레이션.
- **localStorage 차단(시크릿/거부) 시 인메모리 폴백** — 목업 `store` 패턴을 승계:

```ts
const mem: Record<string,string> = {};
const backend = {
  get(k){ try { return localStorage.getItem(k); } catch { return k in mem ? mem[k] : null; } },
  set(k,v){ try { localStorage.setItem(k,v); } catch { mem[k] = v; } },
};
```

- 폴백 활성 시 `flags`로 표시하고 "이 환경에선 진도 저장이 안 돼요" 안내. 문구는 `design_spec.md` §10.2가 정의한 `storage.blocked_banner`/`storage.blocked_toast`(경고 톤 배너/토스트) 사용 — **단, 이 두 키는 design_spec에서 신규 제안됐을 뿐 아직 91키 사전에 없다(§12 OPEN-8, i18n 세션으로 라우팅 필요)**. 평시(차단 아님) 저장 안내는 기존 `home.storage` 키를 사용한다.
- API 시그니처(state_storage §8): `loadState`, `saveState`, `markDayComplete(curriculumId, dayKey)`, `hasSeenNudge(id)`, `markNudgeShown(id)`, `exportState(): Blob`, `importState(file): Promise<GhState>`.
- 파싱 실패/손상: 백업 후 초기화. QuotaExceeded: 정리 후 재시도. 값 검증 실패: 타입가드로 기본값(앱 크래시 금지).

### 6.2 진도 계산 (`lib/progress.ts`)

- **진도율** = `completedDays.length / scope 총 Day 수`(scope=커리큘럼/월/주). 총 Day 수는 `manifest.json`에서 조회. 저장하지 않고 파생.
- **아낀 레슨비** = `completedDays.length × VIRTUAL_LESSON_PRICE`. `VIRTUAL_LESSON_PRICE = 20000`(₩/Day, §11). 표시는 만 원 단위 어림 + i18n(`progress.saved_money` / `donate.sub`). (목업의 per-lang 하드코딩 60000/45/6000은 폐기 → config 상수로 단일화, §12 OPEN-3.)
- **완료 처리:** `markDayComplete` → `gh_state.progress[cur].completedDays` push(중복 제거) + `lastVisited` 갱신 → 컨페티 → nudge 평가 → 도네이션 시트 조건 평가.

### 6.3 넛지 엔진 (`lib/nudges.ts`)

- 트리거 5종을 state_storage §5 표대로 구현. 조건 평가는 순수 함수, 문구는 i18n `nudge.*`.

| id | 조건 | dedup 키 |
|---|---|---|
| `enter_week_2` | w2 첫 진입 & 미노출 | `enter_week_2` (영구 1회) |
| `almost_there` | 현재 주 미완료 Day == 1 & 주차 내 미노출 | `almost_there:{m.w}` |
| `finish_week` | 현재 주 미완료 Day == 0 | `finish_week:{m.w}` |
| `finish_month` | 한 달 완료 | `finish_month` (영구 1회) |
| `welcome_back` | 로드 시 `now - lastActiveAt ≥ 3일` & 오늘 날짜 미노출 | `welcome_back:{YYYY-MM-DD}` |

- 배타성: 같은 주차에서 `almost_there`(잔여1)→`finish_week`(잔여0) 순차 1회씩. `welcome_back`은 로드 시점(시간축), `enter_week_2`는 진도축 → 상호 비충돌.
- 노출 후 `nudges.shown`에 dedup 키 저장. 노출 전 `hasSeenNudge`로 가드.

### 6.4 Export / Import

- `exportState`: `gh_state` 전체를 JSON Blob(또는 목업처럼 base64 텍스트)로. 저장 시트의 textarea/파일 다운로드.
- `importState`: 붙여넣기/파일 → 파싱·검증 → 병합 저장 → 뷰 재렌더. 실패 시 토스트 안내(i18n `error.*`).

---

## 7. i18n

> **SSOT 안내:** 본 §7은 i18n 정합 작업(구 OPEN-4)의 **최종 확정 결과**를 반영한다. 상세 매핑·근거·전체 91키 목록은 `_design_docs/04_localization/i18n_key_map.md`(키 대조 SSOT)와 `_design_docs/04_localization/translation_map.md`(톤·카피 값 SSOT)를 참조. 아래 §7.4는 그 요약이며, 세부는 항상 `i18n_key_map.md`를 우선한다.

### 7.1 사전 & 로딩 (`lib/i18n.ts`)

- 지원 언어 **ko / en / ja**. 사전 = `src/i18n/{ko,en,ja}.json`, **14개 최상위 네임스페이스**(`common, free, home, curr, months, lesson, donate, nick, storage, landing, progress, nudge, lang, error`) · 언어당 **91개 키** · 3언어 키셋 diff 0건. 이 JSON이 **UI 문자열 SSOT**.
- **언어 감지:** `gh_state.lang` 우선 → 없으면 `navigator.language` 프리픽스 매핑(`ko*→ko, ja*→ja, en*→en`) → 폴백 **ko**.
- **resolve:** dot-path(예: `t('lesson.complete')`). 미스 시 ko 폴백 → 그래도 없으면 키 원문. `{nickname}`/`{week}`/`{amount}`/`{count}` 등 플레이스홀더 치환(간단 문자열 보간).
- **바인딩:** 목업의 `data-i`(textContent)/`data-i-html`(innerHTML)/`data-i-ph`(placeholder) 스캔 방식을 승계. `applyI18n()`이 DOM을 순회하며 치환. 언어 전환 시 재적용 + `document.documentElement.lang` 갱신.

### 7.2 카피 소스 분리

- **UI 문자열**(버튼·라벨·시트·nudge·에러) = i18n JSON.
- **레슨 산문**(①②③④) = per-lang **콘텐츠**(`content/**.json`의 `prose[lang]`). i18n JSON에 넣지 않는다.
- **악보 라벨**(음이름·도수) = 언어 독립, 콘텐츠 `scores[]`에 그대로.

### 7.3 언어코드 정규화 (목업 → 표준)

- 목업 HTML(`design_reference.html`)은 `data-lang="kr|en|jp"`를 쓰며 **레퍼런스이므로 수정하지 않는다**. **`kr→ko`, `jp→ja`로 정규화**하는 것은 실제 구현체(`langSwitcher.ts` 등)의 책임이다. 언어 세그먼트 버튼 `data-lang`, `gh_state.lang`, 문서 lang, 사전 파일명은 모두 `ko/en/ja`로 통일.

### 7.4 목업 `data-i` 키 ↔ i18n JSON 정합 — 확정 결과 (구 OPEN-4, 완결)

> ⚠️ **방향 확정(2026-07-03):** 이전 초안은 "세션 B 네임스페이스 JSON이 캐논, 목업 `data-i` 값을 캐논 dot-path로 교체"라는 방향을 서술했었다. 실제 정합 작업(`i18n_key_map.md`)은 **반대 방향으로 확정**됐다: **목업 `data-i`/`data-i-html`/`data-i-ph` 키(및 목업 JS `t()`가 직접 참조하는 키, 총 42개)가 정본(canonical)**이다. 목업 HTML은 수정하지 않았고, 사전 JSON 쪽을 목업 키에 맞춰 재구성했다. 이 문단이 최종 SSOT이며 위 구버전 서술은 폐기한다.

- **정합 원칙:** 목업의 플랫 키(`free.badge`, `home.title`, `lesson.complete`, `donate.title`, `nick.title`, `storage.title` …)를 그대로 dot-path 사전 키로 채택한다. 세션 B가 먼저 만든 네임스페이스 키(`landing.hero_title`, `lesson.complete_button` 등)는 의미가 겹치면 **폐기하고 목업 키로 흡수**(13쌍, `i18n_key_map.md` §3)하거나, 목업에 없는 진도/넛지/에러 등 앱 전용 키는 **그대로 보존**(35개, §5)한다. 목업에는 있었지만 세션 B 사전에 없던 UI 문자열(닉네임 시트, 섹션 라벨, 티저, storage 시트 라벨 등)은 **신규 키 19개**로 ko/en/ja 3벌 동시 추가했다.
- **dot-path 충돌(flatten) 4곳:** 중첩 JSON에서 `t('a.b')`(leaf 문자열)와 `t('a.b.c')`(그 자식)는 동시에 성립할 수 없다. 아래 4개 키는 언더스코어로 평탄화했다 — **frontend-engineer는 목업 원문 그대로(`home.storage.cta` 등)를 dot-path로 쓰지 않도록 주의**:
  - `home.storage.cta` → `home.storage_cta`
  - `lesson.chord.note` → `lesson.chord_note`
  - `lesson.tab.note` → `lesson.tab_note`
  - `storage.io.placeholder` → `storage.io_placeholder`
- **언어코드 매핑:** 목업 `data-lang="kr|en|jp"` → 실 구현 `ko/en/ja` (§7.3, D8과 동일).
- **결과 수치:** 최종 언어당 **91개 키** · 14 네임스페이스 · 목업이 실제 참조하는 42개 키 전량 커버 · 3언어 키셋 diff 0건 · 플레이스홀더 불일치 0건.
- **남은 구현 과제(하드코딩 잔재 — 목업 자체의 갭, `i18n_key_map.md` §6):**
  1. 도네이션 시트의 결제 채널 버튼(Toss/카카오페이/PayPal/Buy Me a Coffee)이 목업에서 `data-i` 없이 하드코딩돼 있다 → 실 구현에서 `donate.toss/kakaopay/paypal/bmc`(§5 보존 키)로 반드시 바인딩.
  2. 넛지 토스트(`NUDGE` 객체)와 Export/Import 성공·실패 토스트도 목업 JS에서 `data-i`를 거치지 않고 직접 문자열 삽입/삼항연산자로 하드코딩돼 있다 → 실 구현은 `nudge.*`/`storage.export_done`·`storage.import_done`/`error.*` 키로 대체.
  3. `design_spec.md` §10.1·§10.2가 신규 제안한 `nick.chip_empty`, `storage.blocked_banner`, `storage.blocked_toast`는 아직 91키 사전에 없다(§12 OPEN-8).

---

## 8. 라우팅 (해시)

### 8.1 결정: 해시 라우팅

정적 호스팅에서 히스토리 라우팅 딥링크는 서버 rewrite(SPA fallback)에 의존한다. **해시 라우팅**은 서버 설정 없이도 어떤 정적 호스트에서든 딥링크가 깨지지 않는 안전판이다(CF SPA fallback은 §9에서 별도 보강). 목업이 이미 뷰 전환 방식이라 이식 비용이 낮다.

### 8.2 라우트 맵

| 해시 | 뷰 |
|---|---|
| `#/` (또는 빈 해시) | 홈(커리큘럼 목록) |
| `#/c/{curriculumId}` | 커리큘럼 개요(월/주/일 아코디언) |
| `#/c/{curriculumId}/m{M}/w{W}/d{D}` | 레슨 상세(Day) |

- 정적 페이지(`#/about`, `#/donate`, `#/disclaimer`)는 후속(현재 도네이션·저장은 바텀시트).
- `router.ts`: `hashchange` 리슨 → 파싱 → 뷰 함수 디스패치. `navigate(hash)`로 이동(히스토리 push는 `location.hash` 할당으로 자동). 뒤로가기=브라우저 기본 동작 + 헤더 back 버튼은 상위 라우트로.
- **딥링크:** 레슨 URL로 직접 진입 시 해당 커리큘럼/월/주/일을 로드·전개. dayKey↔라우트 변환은 `m{M}.w{W}.d{D}` ↔ path 세그먼트 1:1.
- 진행 자유 열람: 잠금 없음(모든 Day 직접 접근 허용). 목업의 `.locked` 스타일은 시각적 힌트로만 유지 가능.

---

## 8-A. Astro 마이그레이션 (개정 노트 — 이 주제의 SSOT)

> 이 절은 §8(해시 라우팅)·§9.1·§9.2 를 **대체**한다. §3 구조에 Astro 레이어를 **추가**하고, §13.2 위임 경계를 갱신한다. 값·계약(§4·§5·§6·§7·§11)은 불변.

### 8-A.1 왜 Astro인가 (해시 SPA 기각)

- **근거:** 목표가 "레슨별 검색 유입"으로 격상됐다. 해시 SPA 는 URL fragment(`#/c/...`)라 서버가 라우트를 모르고, 크롤러에 **단일 셸 HTML** 만 노출된다 → 레슨 콘텐츠가 색인되지 않는다. Astro 는 **빌드 타임에 라우트별 실제 HTML** 을 생성하며(정적 출력, 어댑터 없음), 산문·악보(SVG 문자열)를 서버 렌더해 **인덱싱 가능한 본문**을 만든다.
- **런타임 비용 0 유지:** Astro 는 기본적으로 JS 를 내보내지 않는다(Islands). 우리 상호작용은 소형 `<script>`/아일랜드로 제한 → 번들 최소. 프레임워크 런타임 부담 없음.
- **부수 이득:** `<ClientRouter/>`(View Transitions)로 SPA 유사 전환. 파일 기반 라우팅으로 딥링크·뒤로가기 자연 지원(해시 트릭 불필요).
- **트레이드오프:** 빌드 산출물이 다수 HTML(현재 162개)로 늘지만 정적 CDN 에 무해. `.astro` 컴포넌트 문법 학습 비용 소폭.
- **기각안:** *해시/히스토리 SPA*(SEO 불가·본문 미색인) **기각**. *Next.js 등 SSR 프레임워크*(서버 런타임 필요 → Zero-Cost 위배) **기각**.

### 8-A.2 URL 스킴 (확정)

언어별 정적 라우트. **ko = 기본 언어(무접두)**, en/ja = 접두. 모든 경로는 `trailingSlash:'always'`.

| 뷰 | ko (캐논) | en | ja |
|---|---|---|---|
| 홈 | `/` | `/en/` | `/ja/` |
| 커리큘럼 | `/c/{curriculumId}/` | `/en/c/{curriculumId}/` | `/ja/c/{curriculumId}/` |
| 레슨(Day) | `/c/{curriculumId}/m{M}/w{W}/d{D}/` | `/en/c/.../m{M}/w{W}/d{D}/` | `/ja/c/.../m{M}/w{W}/d{D}/` |

- 레슨 URL 세그먼트 `m{M}/w{W}/d{D}` 는 dayKey `m{M}.w{W}.d{D}` 와 1:1(구 해시 스킴과 동형 → 멘탈모델·향후 리다이렉트 용이). 예: `/c/solo_scale_3months/m1/w0/d1/` ↔ `m1.w0.d1`.
- **정적 페이지 수:** 홈 3(ko/en/ja) + 커리큘럼 3 + **레슨 52 Day × 3언어 = 156** → 총 162. `getStaticPaths` 가 manifest 를 평탄화해 전량 생성(코드 수정 없이 콘텐츠만 늘면 자동 확장 — Modular 원칙 유지).
- **hreflang:** 모든 페이지 `<head>` 에 ko/en/ja `alternate` + `x-default`(=ko) + `canonical`. `site`(astro.config)의 절대 URL 로 방출.
- **언어 스위처:** 세그먼트 버튼 = 동일 페이지의 타 언어 URL `<a>` 링크(런타임 사전 재적용 아님 — 언어 전환 = 정적 페이지 이동). 크롤러가 따라갈 수 있는 실제 링크.

### 8-A.3 구조 (§3 에 추가되는 Astro 레이어)

```
web_app/
├── astro.config.mjs          output:'static', i18n(locales ko/en/ja, defaultLocale ko,
│                             prefixDefaultLocale:false), trailingSlash:'always', site
├── tsconfig.json             extends astro/tsconfigs/strict
├── src/
│   ├── env.d.ts              astro/client 타입 참조
│   ├── pages/                파일 기반 라우트 (얇음: params→lang·data 해석 후 View 위임)
│   │   ├── index.astro                               (ko 홈)
│   │   ├── [lang]/index.astro                        (en/ja 홈)
│   │   ├── c/[curriculum]/index.astro                (ko 커리큘럼)
│   │   ├── [lang]/c/[curriculum]/index.astro         (en/ja 커리큘럼)
│   │   ├── c/[curriculum]/[month]/[week]/[day].astro (ko 레슨 · getStaticPaths 52)
│   │   └── [lang]/c/[curriculum]/[month]/[week]/[day].astro (en/ja 레슨 · 104)
│   ├── layouts/Base.astro    앱 셸(topbar/slot/바텀시트/토스트/컨페티 캔버스) + head(메타·
│   │                         hreflang·ClientRouter·테마 플래시 스크립트)
│   ├── components/           SSR 뷰 (ko/[lang] 페이지가 공유)
│   │   ├── HomeView.astro     hero + 커리큘럼 카드(<a> 링크)
│   │   ├── CurriculumView.astro  월/주/일 아코디언(정적 펼침, 링크)
│   │   └── LessonView.astro   ①②③④ 산문 + 악보 SVG(render/* 재사용) + 이전/다음 링크
│   ├── lib/urls.ts           URL 스킴 헬퍼(localize·altUrls·*Path) [신규]
│   ├── lib/paths.ts          getStaticPaths 소스(manifest 평탄화) [신규]
│   └── … (render/·styles/·content/·i18n/·types/·config·lib 순수 로직 = 그대로 재사용)
```

- **`pages/` 는 얇게:** URL 파라미터 → `lang`·데이터 해석 후 공유 `*View.astro` 로 위임. ko 와 `[lang]` 변형이 같은 View 컴포넌트를 재사용해 중복 최소화.
- **i18n(SSR):** `lib/i18n.ts` 에 순수 `translate(lang, key, params)` 추가(활성 언어 전역상태 비의존). `t()` 는 이를 래핑(기존 호환). Astro 는 페이지 `lang` 으로 `translate` 직접 호출 → 언어별 최종 텍스트를 서버 렌더.
- **악보 SSR:** `render/fretboard.ts`·`render/tab.ts` 가 **SVG 문자열** 을 반환(순수)하므로 `set:html` 로 서버 렌더 → 지판/타브가 색인 가능한 HTML 로 출력(Zero-Hallucination 유지, 클라이언트 JS 불필요).

### 8-A.4 재사용 vs 재작성 경계

| 분류 | 대상 | 조치 |
|---|---|---|
| **그대로 재사용** | `render/*`, `styles/*`(토큰·CSS), `content/*`+`scripts/build-content.mjs`, `i18n/*.json`, `types/*`, `config.ts`, `lib/`{storage,progress,nudges,content} + i18n 순수부 | 변경 없음(i18n 은 `translate` **추가**만) |
| **신규(Astro)** | `astro.config.mjs`, `tsconfig`(astro), `env.d.ts`, `layouts/Base.astro`, `components/*View.astro`, `pages/**`, `lib/urls.ts`, `lib/paths.ts` | 이번 단계 산출 |
| **대체됨(참조 보존)** | `main.ts`(부트·이벤트 배선), `views/{home,curriculum,lesson}.ts`(DOM 렌더), `lib/router.ts`(해시) | 빌드에서 미사용(고아). **2단계 상호작용 이식의 참조 소스**로 트리에 남김(git 이력에도 존재). `views/textUtils.ts` 만 `*View.astro` 가 계속 import |
| **삭제** | `index.html`(SPA 셸 → Base.astro), `vite.config.ts`(→ astro.config) | 제거 |
| **개정** | `public/_redirects` | SPA catch-all(`/* /index.html 200`) **삭제**(실제 라우트 덮어써 SEO 파괴). 404 는 2단계 `src/pages/404.astro` |

### 8-A.5 상호작용: 이번 단계 vs 2단계 STUB

이번 단계에서 **동작**: 정적 라우팅(162 페이지)·언어 전환(링크)·View Transitions·테마 토글(+플래시 방지, `astro:after-swap` 재적용)·레슨 산문/악보 SSR·이전·다음/뒤로 링크.

**2단계(frontend-engineer)가 채울 STUB**(마크업·`id`·`data-*` 훅은 이미 배치됨):
1. **진도(localStorage) 하이드레이션:** 커리큘럼 진도율%/주차 바/완료 체크(`#progPct`·`.week-label .wp i`·`.day .check`), 레슨 완료 상태(`#completeBtn`↔`#doneState`) — `lib/{storage,progress}` 재사용, `data-curriculum`/`data-day`/`data-total-days` 훅으로.
2. **완료 액션:** `#completeBtn` 클릭 → `markDayComplete` → 컨페티(`#confetti`, 목업 로직 이식) → 넛지 토스트(`lib/nudges`, `#toastWrap`) → 주 완주 시 도네이션 시트.
3. **바텀시트 3종:** open/close(`.scrim`/`[data-close-sheet]`), 닉네임 저장(`#saveNickBtn`→`#nickChip`), Export/Import(`#exportBtn`/`#importBtn`), 도네이션 채널(`[data-donate]`→`DONATION_LINKS`)·`DONATION_ORDER` 정렬·아낀 레슨비(`#saveAmount`).
4. **닉네임 유도**(최초 방문 1.2s)·**welcome_back**·**enter_week_2** 등 로드/진입 넛지.
5. **"곧 열려요"/초기 아코디언 열림**의 완료기반 판정(현재 SSR 은 전부 펼침·0%).
6. **`src/pages/404.astro`** + (선택) `sitemap`·`robots.txt`.

> 구현 지침: 위 상호작용은 페이지별 소형 `<script>`(모듈) 또는 아일랜드로. View Transitions 와 공존하려면 문서 수준 이벤트 위임 또는 `astro:page-load` 에 (재)바인딩할 것(예: 테마 토글이 이미 이 패턴). `lib/*` 순수 로직은 그대로 import 해 재사용한다.

### 8-A.6 빌드 & 배포 (§9.1·§9.2 대체)

```
node scripts/build-content.mjs   (_design_docs → src/content, 스키마 검증) — 불변
        │  (npm "prebuild" / "build" 선행)
        ▼
astro build                       (라우트별 정적 HTML → dist/)
        ▼
Cloudflare Pages                  (정적 dist 업로드/Git 연동) — 불변
```

- `package.json` scripts: `"build:content": "node scripts/build-content.mjs"`, `"prebuild": "npm run build:content"`, `"build": "npm run build:content && astro build"`, `"dev": "npm run build:content && astro dev"`, `"check": "astro check"`, `"preview": "astro preview"`.
- **정적 출력·어댑터 없음**(`output:'static'`). CF Pages 배포 방식·`*.pages.dev` 도메인 불변. `astro.config` 의 `site` 는 canonical/hreflang 절대 URL 용(실도메인 확정 시 교체).
- **SPA fallback 불필요:** 실제 파일이 존재하므로 rewrite 없이 딥링크 동작. `_redirects` catch-all 제거됨(§8-A.4).
- 자산 캐싱은 Astro 해시 파일명(`_astro/*.[hash]`) → immutable. (구 §9.2 의 `_headers` 규칙은 후속에서 재확인.)

---

## 9. 빌드 & 배포

> **⚠️ §9.1·§9.2 는 §8-A.6(Astro)으로 대체됐다.** 아래는 (구) 바닐라+Vite 기준 기록 — 이력 보존용. 현행은 §8-A 를 따른다.

### 9.1 파이프라인

```
scripts/build-content.ts   (_design_docs → src/content, 스키마 검증)
        │  prebuild
        ▼
vite build                 (TS 타입체크 + 번들 → dist/)
        │
        ▼
Cloudflare Pages           (Git 연동 자동 배포 / 또는 dist 직접 업로드)
```

- `package.json` scripts: `"content": "tsx scripts/build-content.ts"`, `"prebuild": "npm run content"`, `"build": "tsc --noEmit && vite build"`, `"dev": "npm run content && vite"`.

### 9.2 Cloudflare Pages + SPA fallback

- 배포 대상 **Cloudflare Pages**, 기본 도메인 **`*.pages.dev`**(커스텀 도메인 없음).
- 해시 라우팅이라 딥링크는 서버 rewrite 없이도 동작하지만, **안전판으로 SPA fallback** 설정:
  - `public/_redirects`에 `/*  /index.html  200` (CF Pages) — 알 수 없는 경로도 셸을 반환.
  - (GH Pages 대안 시 `404.html` = `index.html` 복사.)
- 자산 캐싱: Vite 해시 파일명(`assets/*.[hash].js`) → `immutable, max-age=1y`. `index.html`·`manifest.json`·`content/*.json`은 `no-cache`/짧은 TTL(콘텐츠 갱신 반영). `public/_headers`로 규칙화.

### 9.3 (선택) PWA

- 정적 특성상 오프라인 열람 확장 여지. `vite-plugin-pwa` 또는 수동 service worker로 셸+콘텐츠 프리캐시.
- 우선순위 낮음(§12 OPEN-5). MVP 범위 밖.

---

## 10. 성능 · 접근성 · 오프라인 · 프라이버시

- **성능:** 프레임워크 0 + 시스템 폰트(외부 폰트 CDN 미사용) → 초경량. 콘텐츠 JSON은 **Day 단위 지연 로드**(방문 시 `content/{curriculumId}/{dayKey}.json` fetch). 매니페스트만 초기 로드. Lighthouse 90+ 목표.
- **접근성:** 시맨틱 마크업(목업 유지: `role`, `aria-label`, `aria-modal`). SVG에 `role="img"`+`aria-label`. 키보드 내비(포커스 가능 버튼, 시트 포커스 트랩 보강). 명도 대비 토큰 준수. `prefers-reduced-motion` 존중(컨페티/트랜지션 축소 — 목업 구현됨).
- **오프라인:** 기본은 온라인 정적. PWA 채택 시 오프라인 열람(선택).
- **프라이버시:** 닉네임·진도 포함 **어떤 데이터도 서버 전송·수집 없음**. 전량 로컬. 외부 분석 도입 시 프라이버시 준수 경량 도구만 별도 검토(§12 OPEN-6).

---

## 11. Config 상수 (`src/config/index.ts`)

```ts
export const SUPPORTED_LANGS = ['ko', 'en', 'ja'] as const;
export type Lang = typeof SUPPORTED_LANGS[number];
export const DEFAULT_LANG: Lang = 'ko';

/** 가상 레슨 단가 — 아낀 레슨비 = 완료 Day 수 × 이 값 (원). */
export const VIRTUAL_LESSON_PRICE = 20000; // ₩20,000 / Day

export const STORAGE_KEY = 'gh_state';
export const STATE_SCHEMA_VERSION = 1;

/** 도네이션 링크 — 실제 URL 연동 전 플레이스홀더 상수. */
export const DONATION_LINKS = {
  toss:     'https://example.com/donate/toss',      // TODO: 실제 링크
  kakaopay: 'https://example.com/donate/kakaopay',  // TODO
  paypal:   'https://example.com/donate/paypal',    // TODO
  bmc:      'https://example.com/donate/bmc',        // TODO
} as const;

export const DEFAULT_CURRICULUM_ID = 'solo_scale_3months';
```

- 아낀 레슨비의 통화·표기는 언어별 포맷 함수에서 처리(원/￥/$ 어림). 단가 자체는 **단일 상수(₩20,000)** — 목업의 언어별 상이 단가는 폐기.

---

## 12. 결정 로그 & 열린 항목

### 결정 로그

| # | 결정 | 근거 | 기각안 |
|---|---|---|---|
| D1 | React → **바닐라+Vite+TS 하이브리드** | 완성 목업 존재·소형 표면적·Zero-Cost | React/Svelte/Web Components |
| D2 | 지판·기본 타브 **자체 SVG** | 교육용 단순 조판·다크모드·검증 용이 | AlphaTab/VexFlow |
| D2.1 | 오선보(+타브 결합) **VexFlow 채택**(2026-07-07, §5.4) | 오선보 조판은 라이브러리가 정확·경제적, **빌드타임 전용·클라이언트 JS 0**(jsdom devDep) → Zero-Cost 불변 | 자체 오선보 조판(과대 구현), AlphaTab |
| D3 | **해시 라우팅** | 서버 rewrite 없이 딥링크 안전 | 히스토리+SPA fallback 단독 |
| D4 | 스타일 = **CSS 변수 토큰**(Tailwind 미사용) | 목업 토큰 승계·의존성 0 | Tailwind |
| D5 | i18n = **자체 경량 로더** | 프레임워크 없음·번들 절감 | react-i18next |
| D6 | 상태 = **localStorage 래퍼 + 인메모리 폴백** | state_storage.md 준수 | 외부 store |
| D7 | 콘텐츠 = **빌드 타임 md→JSON 파이프라인** | 런타임 md 파싱 회피·SSOT 분리 | 런타임 fetch+parse |
| D8 | 언어코드 **ko/en/ja** (kr/jp 정규화) | 표준 준수·스키마 일치 | 목업 kr/jp 유지 |
| D9 | 아낀 레슨비 단가 = **₩20,000/Day 단일 상수** | 지시·config 단일화 | 목업 언어별 상이값 |
| D10 | i18n 키 정합 방향 = **목업 `data-i` 키가 정본(canon)**, 사전 JSON이 그 키를 커버(91키/14네임스페이스) | 목업이 이미 검증된 3언어 카피·톤을 보유, HTML 비수정 원칙과 부합 | 세션 B 네임스페이스 JSON을 캐논으로 두고 목업 HTML을 갱신하는 반대 방향(§7.4 구버전 초안, 폐기) |

### 열린 항목 (OPEN)

- **OPEN-1:** ~~i18n `common.app_name` "Guitar Archive" → "Riff" 로 교정~~ **완료**(ko/en/ja 3언어 전부 "Riff" 확인, 2026-07-03).
- ~~**OPEN-2:** 커리큘럼 카드 메타(태그/설명/소요시간 pill) 소스 확정 — `overview.md` 추출 vs 매니페스트 확장 필드.~~ **해소:** `meta.json`(커리큘럼 루트) → `build-content.mjs` → manifest 로 확정(§4.4). 썸네일 `image` 필드 포함.
- **OPEN-3:** 아낀 레슨비 언어별 통화 표기(원/￥/$) 환산·반올림 규칙 확정(단가는 ₩20,000 고정, 표시 통화 매핑만).
- **OPEN-4:** ~~목업 `data-i` → 캐논 dot-path 전량 치환 + 신규 키 3벌 추가~~ **완료**(방향은 반대로 확정 — 목업 `data-i`가 정본, `_design_docs/04_localization/i18n_key_map.md` 산출 완료, §7.4). 잔여 구현 과제(하드코딩 결제버튼·토스트 바인딩)는 §7.4 목록과 §13.2로 이관.
- **OPEN-5:** PWA/오프라인 채택 여부.
- **OPEN-6:** 프라이버시 준수 경량 분석 도구 도입 여부.
- **OPEN-7:** 재생/오디오(타브 playback) 후속 범위 — 자체 구현 vs 라이브러리 재평가.
- **OPEN-8(신규):** `design_spec.md` §10.1·§10.2가 제안한 신규 i18n 키(`nick.chip_empty`, `storage.blocked_banner`, `storage.blocked_toast`)가 아직 91키 사전에 없음 — i18n 세션에서 ko/en/ja 3벌 추가 필요.
- **OPEN-9(신규):** `web_app/docs/implementation_guide.md`가 현재 **빈 파일(0바이트)**인데 본 문서·`design_spec.md`·`tech_stack.md` 모두 이를 "설계 수합본/프론트엔드 아키텍처 확정본"으로 참조한다. 내용 작성 또는 참조 제거 필요(아키텍트 판단 사안).

---

## 13. 위임 경계 (Work Handoff)

### 13.1 → notation-renderer

- **산출물:** `src/render/fretboard.ts`, `src/render/tab.ts`, `src/types/score.ts`.
- **계약:** §5. 입력=`Score`(스키마 타입), 출력=SVG 문자열. 앱 상태·DOM·i18n 비의존.
- **필수 대응:** startFret/fretSpan, dots(finger/label/isRoot/highlight/role/muted), barre / measures·notes, duration 폭, technique 전 종류(hammer_on·pull_off·slide+slideToFret·bend+bendTarget·vibrato·palm_mute·harmonic), rest=공백, role/highlight 색.
- **품질:** `currentColor`+CSS 변수(다크 대응), 반응형 viewBox, `role="img"`+aria-label. 스키마 `examples` 2건 + 실제 Day 콘텐츠로 시각 검증.

### 13.2 → frontend-engineer (구현 벌크)

> **⚠️ Astro 개정 후 갱신:** 1단계(아키텍트)가 Astro 스캐폴드·정적 라우팅·SSR 뷰·언어 전환·테마·View Transitions 를 완료했다. 2단계의 초점은 **상호작용(localStorage 하이드레이션)** 이며, 목록·훅·경계는 **§8-A.5 STUB** 이 SSOT. 아래는 그 요약.

- **상호작용 이식(핵심):** §8-A.5 의 STUB 1~6 — 진도 하이드레이션·완료 액션(컨페티·넛지·도네이션 시트)·바텀시트 3종·로드/진입 넛지·완료기반 아코디언·`404.astro`. **(구) `main.ts`·`views/*`·`lib/router.ts` 가 참조 구현**(트리에 보존). 페이지별 `<script>`/아일랜드 + `astro:page-load` 재바인딩 패턴 사용(§8-A.5 지침).
- **재사용(변경 금지 우선):** `lib/{storage,progress,nudges}`·`render/*`·`i18n/*`·`config`·`content` 파이프라인은 §8-A.4 기준 그대로. 필요 시 아일랜드에서 import.
- **정합 잔재(§7.4):** 하드코딩 결제버튼·토스트를 `donate.*`/`nudge.*`/`storage.*`/`error.*` 키로 바인딩(Astro 에서는 아일랜드가 `translate(lang,…)` 또는 서버 주입 문자열 사용). flatten 4키 주의.
- **배포/SEO:** `_headers`(캐시 규칙), `sitemap`/`robots.txt`, CF Pages 연결(§8-A.6). `astro.config` `site` 실도메인 확정.

### 13.3 아키텍트 유지 항목

- 스키마·상태·i18n 계약 변경 승인. `tech_stack.md`/`implementation_guide.md` 정합 유지. 결정 로그·OPEN 항목 관리.

---

## 부록 A. 참조 문서

- `../../_design_docs/00_master_prd.md` — 5대 원칙·기능·IA
- `../../_design_docs/01_architecture/tech_stack.md` — 스택(본 문서로 개정 반영)
- `../../_design_docs/01_architecture/state_storage.md` — gh_state 스키마·nudge·예외처리
- `../../_design_docs/03_data_schema/fretboard_score_schema.json` — 렌더 계약(→ `types/score.ts`)
- `../../_design_docs/04_localization/curriculum_i18n.md` — 콘텐츠 i18n 규약
- `../../_design_docs/04_localization/i18n_key_map.md` — UI 키 정합 SSOT(목업 `data-i` ↔ 사전 91키, §7.4 근거)
- `../../_design_docs/04_localization/translation_map.md` — 톤 가이드·카피 값 SSOT
- `./design_spec.md` — 디자인 시스템·컴포넌트 비주얼(상호참조, 시각 사양은 이 문서가 SSOT)
- `./design_reference.html` — 완성 목업(참조 구현 SSOT)
- `../src/i18n/{ko,en,ja}.json` — UI 사전(14 네임스페이스, 91키)
</content>
</invoke>
