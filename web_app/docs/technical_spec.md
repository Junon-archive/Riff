# Riff — 기술 명세서 (Technical Specification)

> 문서 상태: v1 (M2 구현 착수 기준) · 최종 수정: 2026-07-03
> 대상 독자: frontend-engineer, notation-renderer, 빌드/배포 담당
> 상위: `../../_design_docs/00_master_prd.md`
> 관련: `./design_spec.md`(디자인 시스템·컴포넌트 비주얼), `./implementation_guide.md`(설계 수합본),
> `../../_design_docs/01_architecture/tech_stack.md`(스택 결정), `../../_design_docs/01_architecture/state_storage.md`(상태),
> `../../_design_docs/03_data_schema/fretboard_score_schema.json`(렌더 계약), `../../_design_docs/04_localization/curriculum_i18n.md`(콘텐츠 i18n),
> `../../_design_docs/04_localization/i18n_key_map.md`(UI 키 정합 SSOT, §7), `../../_design_docs/04_localization/translation_map.md`(톤·카피 값 SSOT)

이 문서는 **개발 명세**다. 토스체가 아니라 명확·구조적 기술 서술을 사용한다. UI 카피의 톤은 `design_spec.md`와 i18n 사전이 담당한다.

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
| 렌더링 | **자체 SVG 렌더러** (지판·타브 모두) | VexFlow/AlphaTab 미사용 |
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

### 2.3 왜 자체 SVG인가 (VexFlow/AlphaTab 기각)

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
4. **산문 정제:** 각 섹션에서 ```json 블록을 제거한 나머지 마크다운 → 미니 마크다운→HTML 변환(문단 `<p>`, `**강조**`→`<b>`, 리스트 `<ul>`). `visual` 산문은 "악보 앞/뒤 설명"으로 유지(악보 자리는 `scores[]` 인덱스로 마운트).
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
- 렌더 시 `visual` 산문 다음에 `scores[]`를 순서대로 마운트하거나(단순), 산문 내 `{{score:0}}` 플레이스홀더로 정확 위치 삽입(고급). MVP는 전자.

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
- 커리큘럼 카드 메타(태그·설명·소요시간 pill)는 커리큘럼 개요 md(`overview.md`)에서 추출하거나 매니페스트 확장 필드로 담는다(§12 OPEN-2).

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

### 5.4 마운트 계약

- 레슨 뷰의 `#fretMount`, `#tabMount`(목업 `index.html` 유지)에 렌더 문자열을 주입한다.
- 한 Day에 악보가 여러 개면 `scores[]`를 순회해 type별로 `render-area` 카드를 반복 생성(지판=fretboard/scale_shape → `renderFretboard`, tab → `renderTab`). 목업의 단일 마운트를 다중 마운트로 일반화한다.

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

## 9. 빌드 & 배포

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
| D2 | 타브·지판 **자체 SVG** | 교육용 단순 조판·다크모드·검증 용이 | AlphaTab/VexFlow |
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
- **OPEN-2:** 커리큘럼 카드 메타(태그/설명/소요시간 pill) 소스 확정 — `overview.md` 추출 vs 매니페스트 확장 필드.
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

- **셸/뷰:** 목업 `index.html`·CSS를 `index.html`+`styles/tokens.css`로 이식. `routes/{home,curriculum,lesson}.ts` 구현.
- **lib:** `storage.ts`(폴백·마이그레이션·Export/Import), `progress.ts`(진도율·아낀 레슨비), `nudges.ts`(트리거 5종·dedup), `i18n.ts`(감지·resolve·data-i 바인딩), `router.ts`(해시).
- **components:** sheet/toast/confetti/langSwitcher/donationCard.
- **콘텐츠 파이프라인:** `scripts/build-content.ts`(§4) + 검증 게이트.
- **정합 작업:** 언어코드 정규화(§7.3), 사전 91키를 `i18n.ts`의 dot-path resolver로 연결 + flatten 4키 예외 처리(§7.4), 하드코딩 결제버튼·토스트를 `donate.*`/`nudge.*`/`storage.*`/`error.*` 키로 바인딩(§7.4 잔여 과제), config 상수화(§11).
- **배포:** `_redirects`/`_headers`, Vite config, CF Pages 연결(§9).

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
