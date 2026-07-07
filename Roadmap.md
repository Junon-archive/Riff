# 🎸 Riff — Roadmap & 진행 현황

> 무료 기타 레슨 웹 서비스. 이 문서는 **현재 구현 상황·변경 로그·다음 작업**을 관리하는 단일 대시보드다.
> 규칙: 작업이 하나 끝날 때마다 이 파일을 갱신한다(`CLAUDE.md` 고정 규칙).
> 최종 갱신: 2026-07-07 · **라이브: https://guitar-riff.pages.dev**

---

## 1. 지금 어디까지 왔나 (한눈에)

**🚀 배포 완료 — 실서비스 운영 중** (`guitar-riff.pages.dev`, Cloudflare Pages + GitHub 자동배포).

| 영역 | 상태 | 요약 |
|---|---|---|
| **설계 문서(_design_docs)** | ✅ 완료 | PRD·아키텍처·스키마·로컬라이제이션·저작 플레이북·색 범례 확정 |
| **커리큘럼 콘텐츠** | ✅ 완료 | `solo_scale_3months` = Week 0 + 12주 = **52 Day**, KR/EN/JP |
| **악보 데이터** | ✅ 완료 | 105개 지판/타브 JSON, 스키마 검증 전량 PASS |
| **i18n** | ✅ 완료 | day 156(52×3) + 개요 48(16×3) + UI 카피 **114키**(3언어 diff 0) |
| **명세서** | ✅ 완료 | 기술 명세 / 디자인 명세(+상호 정합 리뷰 통과) |
| **web_app (Astro)** | ✅ 운영 | Astro+TS 정적 163 페이지, SEO(레슨별 HTML·hreflang), View Transitions |
| **도네이션** | ✅ 운영 | 카카오페이·토스·PayPal 실연동(QR/링크 토글), 드림기타 후원 연출, 세무 고지 |
| **커리큘럼 분류** | ✅ 완료 | forWho·개월/일수 배지 + 악기 필터 칩 인프라(2종+ 시 노출) |
| **배포(CF Pages)** | ✅ 완료 | GitHub 연동 자동배포, `guitar-riff.pages.dev` |

**요약:** 설계 → 3개월 콘텐츠(3언어) → Astro 앱 → 실도메인 배포 → 도네이션 실연동까지 **1차 릴리스 완료**. 이후는 콘텐츠 확장(신규 커리큘럼)과 운영 다듬기 단계.

---

## 2. web_app 구현 상황 (상세)

### ✅ 완료 (Astro 이전)
- **스택:** Astro + TypeScript, `output:'static'`(어댑터 없음, 무런타임 외부의존). `astro check` 0 errors.
- **라우팅/SEO:** 파일 기반 정적 라우팅, **레슨별 실제 HTML 156(52×3언어) + 홈3 + 커리큘럼3 = 162 + 404/robots/sitemap**. hreflang(ko/en/ja+x-default)·canonical·언어별 `<html lang>`. URL 스킴 `/c/{cur}/m{M}/w{W}/d{D}/`(ko 무접두, `/en/`·`/ja/` 접두).
- **전환:** `<ClientRouter/>` View Transitions(부드러운 소프트 내비).
- **재사용:** SVG 렌더러·CSS 토큰·콘텐츠 JSON/manifest·i18n 91키·storage/progress/nudges/content 로직 그대로 이식.
- **하이드레이션:** `src/scripts/app.ts`(진도·완료·바텀시트·넛지, `astro:page-load` 재바인딩), `confetti.ts`, `toast.ts`.
- **오선보 렌더러(VexFlow):** `render/staff.ts` — `meta.notation:"staff"|"staff+tab"|"rhythm"`이면 **오선보+타브 결합(박자 공유)**을 SVG로 생성. **빌드타임 전용**(jsdom devDep) → 클라이언트 JS 0. `renderScore()`가 `meta.notation`으로 분기(그 외/미지정 → 자체 타브 SVG). 역할→색·다크모드는 지판/타브와 동일 계약.
- **자동 후원:** **월·커리큘럼 완료 시에만** 도네이션 시트 자동(주 완주는 토스트만).
- **정리:** 구 바닐라 파일(main/router/views)은 `web_app/src/_legacy/`로 이동(빌드 제외).
- **검증:** `npm run build` 163 페이지 성공, 헤드리스 스모크(내비·하이드레이션·완료·마일스톤 후원·언어전환 진도유지·닉네임·Export) 콘솔 에러 0.

### 🗄 이전 바닐라 MVP (참고, `_legacy/`)
- **스캐폴드:** Vite 6 + TypeScript(strict), 무런타임 의존. `package.json`/`vite.config.ts`/`tsconfig.json`/`public/_redirects`.
- **앱 셸:** `index.html`(뷰 3종 + 바텀시트 3종 + 토스트 + 컨페티), `src/styles/tokens.css`·`app.css`(Toss 토큰, 다크모드).
- **콘텐츠 파이프라인:** `scripts/build-content.mjs` — `_design_docs` day/overview md → `src/content/*.json`(52 day) + `manifest.json`.
- **렌더러:** `src/render/fretboard.ts`·`tab.ts` — 자체 SVG(currentColor 다크대응, technique 8종, rest/barre/bend/slide/vibrato…). 105 score 렌더 NaN 0건.
- **로직:** `src/lib/` — storage(gh_state+인메모리 폴백)·progress(아낀 레슨비 ₩20,000/일)·nudges(5종 트리거)·i18n(dot-path+보간)·router(해시)·content(지연 로드).
- **뷰:** `src/views/` — home / curriculum(월·주·일 아코디언) / lesson(①이론 ②지판·타브 SVG ③완료+컨페티+이전/다음).
- **부트:** `src/main.ts` — 테마·언어·닉네임·도네이션·백업 시트 배선.
- **검증:** `tsc --noEmit` clean, `npm run build` 성공(52 지연청크), 헤드리스 크로미움 스모크 통과.

### 🟨 다음 후보 (신규 개발)
- **신규 커리큘럼 — 『코드 빌딩 시스템』(2개월/8주)** — 생성용 주차별 프롬프트 준비 완료(`_design_docs/02_curriculum/Chord Building System_2months/`, 표준 스키마로 정합화). 다음: 프롬프트로 콘텐츠 생성 → `meta.json`+day md → 빌드(악기/토픽 2종+ 되면 필터 칩 자동 노출).
- **타브 재생 기능** — 향후 자체 Web Audio로 릭 재생·속도조절(AlphaTab 미채택 결정, 필요 시 자체 구현).
- **오선보 v2(선택)** — 산문 label·technique(H/P/sl/P.M.) 오버레이, 리듬 전용 슬래시 표기. (v1 오선보+타브 결합은 구현 완료 — 위 ✅ 참조.)

### ⏳ 열린 이슈(비차단)
- OPEN-6: 프라이버시 경량 분석 도구 선정(방문·완주율 집계).
- OPEN-8: 보강 UI용 i18n 키 3개(`nick.chip_empty`, `storage.blocked_banner/toast`) 3언어 카피.
- BMC(Buy Me a Coffee)는 한국 미지원으로 제외됨 — 글로벌 확장 시 대체 채널 검토.
- week_5 추가음(2·6도)이 `passing+highlight`라 타겟과 같은 초록 — 교육적 구분 원하면 role→`color`(악보 데이터 변경).
- `lib/storage.ts` `escape`/`unescape` deprecation 힌트 3건(정리 권장).

---

## 3. 로드맵 (마일스톤)

- [x] **M0 설계 정합화** — 문서·스키마·프롬프트 확정
- [x] **M1 콘텐츠 시드** — 3개월 52 Day + 악보 + 3개국어
- [x] **M2 MVP 구현** — 바닐라+Vite+TS 앱(렌더러·i18n·상태·완료)
- [x] **M2.5 Astro 이전** — 정적 페이지·SEO·View Transitions (163 페이지)
- [x] **M2.6 기능 확장** — 커리큘럼 분류 · 드림기타 후원 연출 · 완료 취소
- [x] **M3 배포** — Cloudflare Pages(GitHub 연동) `guitar-riff.pages.dev` + 도네이션 실연동
- [ ] **M4 확장** — 신규 커리큘럼(잽잽이/펑키 리듬 등) 모듈 추가 ⬅ **다음**

---

## 4. 변경 로그 (Changelog)

### 2026-07-07 (『펑크 리듬』 Week 2 완성 — 왼손 고스트 노트)
- **Week 2 (왼손 고스트 노트) 전량 작성:** day_1~4 × 3언어(12) + week_2_overview×3 = 15파일. 교육 축: D1 고스트=힘 뺀 '퍽'·실제음 대비 → D2 고스트 연속(하이햇 카펫) → D3 실제음+고스트 섞기(같은 자리 압력 온·오프) → D4 실제음(스네어)+고스트(하이햇) 교대 그루브.
- **소리 재료:** 2·3번 줄 고음 E 스탭(3현 R=E4·2현 3도=G#4, 나머지 뮤트) — 같은 자리에서 왼손 압력만으로 실제음/고스트 전환. 정식 E9 폼은 Week 4에서 공개(선반영 회피). D3·D4에 `fretboard_diagram` 병기(day당 JSON 3블록).
- **검증(게이트 통과):** build exit 0, **funk totalDays=8**. 12페이지 staffsvg≥2·검정 0, 빨강 0, ②JSON ko=en=ja 일치(d1·d2=2, d3·d4=3), ① 480~491자, 프론트매터 3언어 일치.
- 타 커리큘럼·web_app·prompt 무수정.

### 2026-07-07 (『펑크 리듬』 콘텐츠 착수 — meta.json + Week 1 완성: 오른손 16비트 모터)
- **커리큘럼 발견 활성화:** `funk_rhythm_2months/meta.json` 신설(3개국어 title/tagline/forWho, topic:"funk-rhythm", level:2, durationMonths:2). 빌드가 자동 발견(총 3개 커리큘럼) — web_app 소스 무수정, meta.json만으로 등록.
- **Week 1 (오른손 16비트 모터) 전량 작성:** day_1~4 × ko/en/ja(12) + week_1_overview×3 + month_1_overview×3 = 18파일. 교육 축: D1 16비트 "1-e-&-a"·다운/업·멈추지 않는 손 → D2 손목 스냅·뮤트 스크래치 → D3 업다운 밸런스·빈 피킹(rest) → D4 4마디 통합 그루브.
- **악보(②)**: 전부 `type:"tab"` + `meta.notation:"staff+tab"`(박자 공유). 16분 모터=`sixteenth`+`palm_mute`, 빈 피킹=`rest`(단, string/fret 필수 — 스키마 검증 준수). 색 없는 담백한 리듬(role:"scale")로 '리듬이 주인공'임을 반영.
- **검증(주차 게이트 통과):** `npm run build` exit 0, **funk totalDays=4**. 12개 day 페이지 전부 staffsvg≥2·검정 누출 0, 빨강 0, ②JSON 블록 ko=en=ja 일치, ① 공백제외 485~501자(≈목표 500), 프론트매터 dayKey/i18nKey 3언어 일치.
- 다른 커리큘럼·web_app 무수정. funk week_prompt.md는 읽기 전용 입력(미수정).

### 2026-07-07 (『코드 빌딩』 이론/설명 보강 — 전체 32일 · 3언어 · 토스 톤 심화)
- **문제:** `chord_building_2months`의 ①이론/설명이 `solo_scale_3months` 대비 짧고(①섹션 실측 공백 제외 평균 ~320자 vs solo ~623자) 토스 특유의 친절함이 옅다는 피드백. 사용자가 보강 범위로 **"전체 32일 · 3언어"** 선택.
- **작업:** 32일 × 3언어 전 파일의 **①섹션 산문만** 보강. 각 날짜에 토스 톤 4요소(동기 부여 훅·안심 문구·비유·실전 보상)를 녹여 목표 밀도(공백 제외 ~400~500자)로 확장. 산문 외 **JSON/악보/프론트매터/섹션 마커/색 규약은 일절 미변경**.
  - 주차별로 작성 후 매번 `npm run build` 검증(8회 전부 exit 0, totalDays=32 유지).
  - 마지막 날(W8 D4)엔 커리큘럼 완주 축하·회고 클로징 추가(2개월 전후 대비, "오늘 녹음을 남겨두라").
- **검증(전량):** build exit 0 · **totalDays=32** 유지. 32일 전 페이지(3언어=96) **staffsvg≥2·검정 누출 0** 재확인, **빨강 0**, **②JSON 블록 수 ko=en=ja 32일 전부 일치**(파리티 무결). ①섹션 밀도 주차별 실측 상승 확인(예: W4 414~476, W6 362~407, W7 331~420).
- 코드·스키마·악보 변경 없음(콘텐츠 산문만). 5대 원칙(Zero-Cost/Toss 톤/Zero-Hallucination/모듈형/i18n-first) 준수.

### 2026-07-07 (신규 커리큘럼 프롬프트 정합화 — 『펑크 리듬』 8주)
- **생성용 프롬프트 8개**(`funk_rhythm_2months/month_{1,2}/week_{1..8}_prompt.md`)를 **표준 악보 스키마로 재정렬**. 기존 solo_scale·chord_building과 통일성 확보가 목적(『코드 빌딩』 정합화 방식을 그대로 벤치마크).
  - 리듬 JSON을 비표준(`notation_type:"vexflow_rhythm"`/`bars`/`strokes`/`pos`/`direction`/`time_signature`/`tempo_bpm`)·지판 JSON 비표준(`diagram_type`/`chord_name`/`root_string`/`base_fret`/`interval`/`note`/`muted`) → **표준 스키마**(`id`·`type:"tab"|"fretboard_diagram"`·`meta`·`tab.measures[].notes[]`·`fretboard.dots`·`label`·`role`)로 교체. 빌드 파이프라인·렌더러가 그대로 소비 가능.
  - **펑크 리듬→표준 매핑 규칙** 신설: 스트로크=단일 대표음(코드 폼은 별도 `fretboard_diagram` 병기), 고스트/뮤트 스크래치·커팅=`technique:"palm_mute"`, 빈 피킹/무음=`rest`, 스타카토=짧은 `duration`+`rest`. 렌더 불가한 **업/다운 피킹 방향·악센트·셔플 필**은 산문으로 설명하되 주목할 자리는 `highlight`(초록)로 표기.
  - **역할→색**을 `color_legend.md`에 맞춤(근음/코드톤=파랑, 9도 텐션=`color`(노랑), 악센트/주목음=`target`+`highlight`(초록)). `articulation`/`feel`/`tempo_bpm` 등 스키마 밖 필드 금지 명시.
  - **오선보/리듬**: 원문의 "VexFlow 렌더링용 데이터"(원시 코드) → **표준 `type:"tab"` JSON + `meta.notation:"staff+tab"`(리듬만이면 `"rhythm"`)** 힌트로 변경. 펑크는 리듬이 핵심이라 그루브·컴핑·커팅을 `staff+tab`으로 내 박자를 오선보로 보이게 지시.
  - 규칙 #5(연습용 예제 릭 최소 2개+연주 안내 한 줄, ③ 실전 블록에 예제 연결)와 ①③④ **시각 자료 적극 삽입** 지침을 8개 전 프롬프트에 반영.
  - **①이론/설명 분량·톤 지침 신설**(8개 전 프롬프트, `절대 규칙`↔`표준 JSON 스키마` 사이): ①섹션을 solo_scale 수준 **공백 제외 약 500~650자**(ko/en/ja 동일 밀도)로, 토스 톤 4요소(동기 부여 훅·안심 문구·비유·실전 보상)를 녹이고 '긁지 않기' 준수. 늘어난 산문이 그날 펑크 주제(모터·고스트·악센트·커팅 등)를 구체적으로 풀되 스키마·색·섹션 마커·프론트매터 규칙은 그대로 유지하도록 못박음. (solo_scale ①섹션 실측 476~658자로 목표치 검증.)
- 코드/스키마/콘텐츠 변경 없음(프롬프트 문서만). ⚠ 후속 필요: `funk_rhythm_2months/meta.json`(커리큘럼 카드 노출용)이 아직 없어 빌드 발견 대상 아님 — 콘텐츠 착수 시 생성.

### 2026-07-07 (『코드 빌딩』 Week 8 완성 = **Month 2 · 전체 커리큘럼 완성** — 레코딩 챌린지)
- **W8 D1~D4 × 3언어 + Week8 개요** 작성. 교육 축: R&B II-V-I(Dm7-G7-Cmaj7) 위에서 배운 모든 도구(쉘·9도·고음역·탑노트·그루브)를 섞어 나만의 컴핑을 녹음·분석. D1 선택지 카드·D2 리듬 그루브(쉼표·팜뮤트)·D3 9도+탑노트 리하모니·D4 최종 레코딩+2개월 회고.
- **2개월(8주) 전량 완성·검증:** `npm run build` exit 0, **totalDays=32**(월1 16 + 월2 16). m2/w5~w8 **16일 전부 staffsvg≥2·검정 누출 0**, 색 규약 준수(빨강 0). 주당 15파일(day×3 + 개요×3) 확인.
- 전체 사이트 **262 페이지**(solo 52 + chord 32 + 홈/커리큘럼/en/ja). `chord_building_2months`가 **완전한 2개월(32일) 커리큘럼**으로 실서비스 렌더.

### 2026-07-07 (『코드 빌딩』 Week 7 완성 — 실전 보이스 리딩·탑노트 멜로디)
- **W7 D1~D4 × 3언어 + Week7 개요** 작성. 교육 축: 코드가 바뀔 때 **탑노트가 멜로디처럼** 최소 이동. D1 개념(탑 선택)·D2 C-Am-F-G 탑노트 최소이동(G-A-A-G, 공통음 유지)·D3 역방향(멜로디 C-B-A-G 먼저→코드)·D4 통합(3음 컴핑, 탑 유지+텐션 옵션).
- 색: 탑노트 = `target`+`highlight`(초록). 모든 예제 staff+tab로 탑노트 라인 제시.
- 검증: `npm run build` exit 0, **totalDays=28**. m2/w7 d1~d4 각 staffsvg=2·검정 누출 0·green(탑)>0.

### 2026-07-07 (『코드 빌딩』 Week 6 완성 — 9도 텐션·색채)
- **W6 D1~D4 × 3언어 + Week6 개요** 작성. 교육 축: 5현 근음 shell에 **9도(9th) 텐션**을 얹어 Maj9/m9/9. 9도 = 근음+장2도(옥타브 위), 2번 줄 고정 탑에 위치. D1 Maj9·D2 m9·D3 9(탑 화사함)·D4 3개 순환(9도 고정, 뼈대만 스위치).
- 색: 9도 = `role:"color"`(**노랑**), 뼈대(R·3·7)=파랑. 산문 "노랑=9도"와 렌더 정합 확인.
- 검증: `npm run build` exit 0, **totalDays=24**. m2/w6 d1~d4 각 staffsvg=2·검정 누출 0·yellow(9도)>0.

### 2026-07-07 (『코드 빌딩』 Week 5 완성 — 4현 근음 고음역 트라이어드·탑노트)
- **W5 D1~D4 × 3언어 + Week5 개요 + Month2 개요** 작성. 교육 축: 근음을 4번 줄로 올린 **D 폼 고음역 트라이어드**, **탑노트(가장 높은 음)** 개념 도입. D1 발견·D2 maj/min(탑=3도), D3 자리바꿈(탑 R·3·5), D4 D폼 슬라이드 밝은 바이브(G-A).
- 색 정합 수정: 탑노트 3도를 `chord_tone`(파랑)→`target`(초록)으로 교정(산문 "초록"과 일치).
- 검증: `npm run build` exit 0, **totalDays=20**. m2/w5 d1~d4 각 staffsvg=2·검정 누출 0·green>0.

### 2026-07-07 (『코드 빌딩』 Week 4 완성 = **Month 1 완성** — 쉘 보이싱)
- **W4 D1~D4 × 3언어 + Week4 개요** 작성. 교육 축: 5도를 버린 **3줄 쉘 보이싱**(R·3·7). 6현 근음 세트(4·3번 줄=7·3도)·5현 근음 세트(3·2번 줄), 3주차 II-V-I을 전부 쉘로 재연결. 1개월 회고 + 다음 달(텐션·탑노트) 예고.
- **1개월차(4주) 전량 검증 통과:** `astro check` **0 errors**, `npm run build` **214 페이지**. 코드 **16일** 전부 staffsvg 2·**검정 누출 0**, 3도/7도=target(초록)·근음=파랑, 뮤트 ✕ 정상. EN/JA 파리티·solo 52일 불변 확인.
- 남은 작업: **Month 2 (Week 5~8, 16일 × 3언어)** — 4현 근음 고음역, 9도 텐션, 탑노트 보이스 리딩, 레코딩 챌린지.

### 2026-07-07 (『코드 빌딩』 Week 3 완성 — II-V-I 보이스 리딩)
- **W3 D1~D4 × 3언어 + Week3 개요** 작성. 교육 축: 6·5현 근음을 섞어 **Dm7(5)-G7(6)-Cmaj7(5)** II-V-I을 한 프렛 구역에서 최단 연결(보이스 리딩). 가이드톤(3·7도)이 반음씩만 이동, 다른 키(D)로 패턴 이동, 4마디 루프 통합.
- 새 렌더 패턴 검증: **가이드톤 라인(온음표 + `Dm7-b7(C)` 형식 라벨)**, 3-fretboard II-V-I, root+guide 컴핑. day4 섹션 헤더 `#`→`##` 오타 즉시 교정(빌드 마커 계약).
- 검증: `npm run build` chord **12일**(W1~W3), 각 day staffsvg 2·검정 누출 0·가이드톤=초록·근음=파랑. solo 52 불변.
- 남은 작업: **Week 4~8(20일 × 3언어)**. (사용자 지시: Week 3 완료 시 Week 4 자동 진행.)

### 2026-07-07 (『코드 빌딩』 Week 2 완성 — 5현 근음 A폼)
- **W2 D1~D4 × 3언어 + Week2 개요** 작성. 교육 축: 5현 근음(A폼)에서 **2번 줄=3도 스위치·3번 줄=7도 삼거리(R/7/b7)**로 Maj/m/7/m7/**Maj7** 순환. Maj7 등장·b7 vs 7 반음 대조가 핵심.
- 각 day 규칙 #5 준수(staff+tab 예제 2 + 연주 안내). 6·1현 뮤트(✕) 렌더 확인.
- 검증: `npm run build` chord **8일**(W1+W2), 각 day staffsvg 2·검정 누출 0·색 정합. solo 52 불변.
- 남은 작업: **Week 3~8(24일 × 3언어)**.

### 2026-07-07 (신규 커리큘럼 콘텐츠 착수 — 멀티 커리큘럼 빌드 + 『코드 빌딩』 W1 완성)
- **`build-content.mjs` 다중 커리큘럼화** — `02_curriculum/*/meta.json` 보유 폴더를 모두 발견해 하나의 `manifest.json`으로 집계(기존 단일 `CURRICULUM_ID` 하드코딩 제거). day 0개 커리큘럼은 스킵. `CURRICULUM_ORDER`로 랜딩 노출 순서.
- **커리큘럼 폴더 정리** — `Chord Building System_2months` → **`chord_building_2months`**(URL 안전 id). 프롬프트 8종 동반 이동.
- **프롬프트 절대 규칙 #5 추가**(사용자 지시) — 각 day 최소 2개의 **연주용 예제 릭/컴핑**(`type:"tab"`)을 포함, 예제 아래 연주 안내 한 줄, ③ 실전 반주 블록에서 그 예제를 실제 소재로 지정.
- **콘텐츠 — Week 1 완성(3언어)** — `chord_building_2months/meta.json` + Month1·Week1 overview + **W1 D1~D4 전부 3언어**(ko/en/ja). solo 포맷 준수(프론트매터·①②③④·JSON 스코어). 각 day = 지판 1 + **staff+tab 예제 2**(규칙 #5: 연주용 릭/컴핑 + 연주 안내 한 줄, ③ 실전 반주에 예제 연결). 교육 축: 6현 근음 E폼에서 3번 줄=3도(밝/어둠)·4번 줄=7도(긴장) 두 스위치로 Maj/m/7/m7 순환.
- **검증** — `npm run build` 성공. 코드 W1 4개 day 각각 staffsvg 2·fretboard 1, **검정 누출 0**, 3도/변화음=target(초록)·근음/코드톤=파랑으로 산문 색과 정합. 기존 solo 52일 불변.
- 남은 작업: **Week 2~8 전체(28일 × 3언어) + 주/월 개요** 순차 작성(W1이 포맷·품질 레퍼런스).

### 2026-07-07 (VexFlow 오선보+타브 렌더러 구현)
- **`web_app/src/render/staff.ts` 신규** — `meta.notation:"staff"|"staff+tab"|"rhythm"`인 `type:"tab"` 악보를 **오선보+타브 결합(박자 공유)** SVG로 렌더. VexFlow `Stave`+`TabStave`+`StaveConnector`, 두 `Voice` 공동 포맷. 음정=`string`+`fret`+`tuning`, 박자=`duration`(빔·플래그·점). 역할→색·`currentColor` 다크모드, `class="staffsvg"` 반응형.
- **빌드타임 전용**: `vexflow`(dep) + `jsdom`(devDep, canvas 텍스트측정 스텁)로 Node 빌드 중 SVG 생성 → **클라이언트 JS 0**. `astro.config` `vite.ssr.external:['jsdom']`.
- **디스패치**: `render/index.ts`에 `renderScore(score)` 추가(type·`meta.notation` 분기). `LessonView.astro`가 이를 호출(구 `renderFretboard`/`renderTab` 직접호출 대체).
- **스키마/타입 정식화**: `fretboard_score_schema.json`·`types/score.ts`에 `meta.notation` enum 추가, `build-content.mjs` 검증에 `NOTATIONS` 추가.
- 검증: `astro check` 0 errors, `npm run build` 163 페이지 성공, 3개 모드(staff/staff+tab/rhythm)+빈 악보 스모크 통과(검정 누출 0·역할색 정상). 기존 solo 커리큘럼은 자체 타브 SVG 그대로.

### 2026-07-07 (신규 커리큘럼 프롬프트 정합화 — 『코드 빌딩 시스템』 8주)
- **생성용 프롬프트 8개**(`Chord Building System_2months/month_{1,2}/week_{1..8}_prompt.md`)를 **표준 악보 스키마로 재정렬**. 기존 solo_scale와 통일성 확보가 목적.
  - 지판 JSON을 비표준(`diagram_type`/`chord_name`/`root_string`/`base_fret`/`interval`/`note`/`top_note`) → **표준 스키마**(`id`·`type:"fretboard_diagram"`·`meta`·`fretboard.dots`·`label`·`role`·`barre`)로 교체. 렌더러(`fretboard.ts`/`tab.ts`)·`fretboard_score_schema.json`이 그대로 소비 가능.
  - **역할→색**을 `color_legend.md`에 맞춤(근음/코드톤=파랑, 텐션=`color`(노랑), 변화음=`target`+`highlight`(초록)). **탑노트**는 없던 `top_note` 필드 대신 `highlight`로 표기.
  - **오선보/리듬**: 원문의 "VexFlow 렌더링용 데이터 출력"(원시 코드) → **표준 `type:"tab"` JSON + `meta.notation` 힌트**로 변경(데이터-not-코드 원칙 유지). notation 값: `"staff+tab"`(오선보+타브 결합, **박자 공유**)·`"staff"`(오선보만)·`"rhythm"`(리듬 슬래시)·`"tab"`(기본). 멜로디·가이드톤·탑노트 라인은 `"staff+tab"`으로 설정해 음정과 박자를 동시에 보여준다. 실제 오선보 렌더링(VexFlow)은 후속 코드 작업.
  - ①이론·③연습·④팁 **어디서든 시각 자료 적극 삽입** 지침 강화.
- 코드/스키마/콘텐츠 변경 없음(프롬프트 문서만). 커리큘럼 콘텐츠 생성은 별도 단계.

### 2026-07-03 (넛지 다듬기)
- **응원 토스트 지속시간** 4.2초 → **7초** + 탭하면 닫힘(읽기 쉽게).
- **Week 0 완료 응원 제거** — 온보딩 주라 완료 토스트 미표시(week≥1만).
- **Week 0 Day 1 진입 안내** — "가볍게 따라 치고 바로 Week 1로 넘어가도 좋아요" 1회 토스트(`nudge.w0_intro`, 3언어).

### 2026-07-03 (배포 후 다듬기)
- **배포 완료** — Cloudflare Pages, `guitar-riff.pages.dev`. `astro.config` `site`를 실도메인으로 교정(canonical/hreflang/sitemap 절대 URL).
- **후원 CTA 부담 완화** — 푸터 "후원으로 응원하기"가 스크롤 중 항상 sticky로 떠 부담 → **정적 배치로 페이지 맨 끝에서만** 노출. `.view`/`.lesson-article` 하단 여백(구 sticky 대비) 축소.

### 2026-07-03 (콘텐츠 충실도 검토 — 색상·콜아웃)
- **산문 색상 ↔ 렌더 색 정합** — 산문이 임의 색("빨강=타겟" 등)을 써 실제 렌더(타겟=초록)와 어긋나던 문제. 렌더 색 범례 SSOT(`03_data_schema/color_legend.md`) 신설 → **각 음 role에 맞춰 산문 색 교정**(빨강→초록 타겟, ♭5=blue_note→보라, 색채음=노랑 유지) ko/en/ja 일관. 빨강/red 잔재 0, role 데이터 무결.
- **정적 콜아웃 제거** — 매 레슨 동일하던 `lesson.tip` 목업 잔재 삭제(실제 ④팁은 이미 렌더됨).
- **소요시간 단위** — "50" → "약 50분/about 50 min/約50分"(`lesson.minutes`).
- (열린 항목) week_5 추가음 2·6도가 `passing+highlight`(→초록)라 타겟과 같은 색 — 교육적 구분 원하면 role을 `color`(노랑)로 바꿀지 검토(악보 데이터 변경).

### 2026-07-03 (도네이션 실연동 — 3채널·QR/링크 토글·고지)
- **실제 자산 연동** — kakaopay(qr+링크)·toss(qr+`supertoss://` 딥링크)·paypal(qr+링크). **BMC 제거**(한국 미지원). QR은 `public/donate/*.jpeg|png`.
- **채널 결제 뷰: QR/링크 세그먼트 토글** — 기기별 기본값(데스크톱=QR, 모바일=링크, `pointer:coarse` 판정), 링크는 `<a href>`(http 새탭 / 딥링크 네이티브). 3채널 단일 열 레이아웃.
- **세무·실명 고지 캡션** — 인트로가 아니라 **채널 결제 뷰**에 작게(just-in-time, 차단 아님). "기타소득 성실 신고 + 이체 시 실명 노출 가능" 3언어.
- i18n 113키(diff 0), 헤드리스 21/21 통과.

### 2026-07-03 (도네이션 연결부 준비 — 링크/QR 플러그앤플레이)
- **도네이션 시트 링크+QR 지원** — `config.ts` `DONATION_CHANNELS: {url?, qr?}`. url만→새창, qr(±url)→시트 내 QR 뷰(+링크 버튼), 둘 다 비면 "준비 중" 비활성 배지. 전 채널 현재 플레이스홀더(깨진 링크/이미지 0). `public/donate/README.txt`에 파일명·활성화 방법. i18n 109키(+scan_qr/preparing).
- **운영자 활성화법:** ① QR PNG를 `public/donate/`에 넣고 ② `config.ts`의 해당 채널에 `{url}`/`{qr}` 채우면 즉시 라이브.

### 2026-07-03 (버그 — 랜딩 내부문구 누출)
- **랜딩 카드에 내부 설계 문서 노출 제거** — 커리큘럼 카드가 최상위 `overview.md`(트래킹 표·"커리큘럼 ID/상위 경로" 메타)를 잘라 노출하던 문제. 카드 소개를 tagline(간단 소개)+forWho로 교체, build-content가 내부 overview html을 manifest에 싣지 않도록 원천 차단. 3언어 잔재 0 검증.

### 2026-07-03 (기능 배치 — 드림기타 후원 · 분류)
- **드림기타 후원 연출** — 월/커리큘럼 완료 시 랜덤 기타(Strat Cory Wong / PRS SilverSky / Jazz Bass V)가 팡파레와 "쨘!"으로 등장(`#dreamScrim`) → 후원 버튼 → 기존 도네이션 시트. 3언어 토스체 농담 멘트(ko '주인장', en 'the dev', ja '作った人/私'), 기타/베이스 자동 구분, 닫기 가능. 에셋 `public/dream/*.png`.
- **커리큘럼 분류 스킴** — 주관적 등급(입문/중급/고급) 대신 **`forWho`("이런 분께") 한 줄** + **개월/일수 배지**. `meta.json`에 `forWho`/`durationMonths`(+기존 instrument/level/topic/tags), 빌드→manifest 통과. 랜딩/커리큘럼 카드 반영. **악기 필터 칩 인프라**(악기 2종+일 때만 노출, 지금은 숨김).
- **버그 수정** — 도네이션 금액 "약 약 40만 원" 중복('약'을 템플릿에만 남김).
- i18n 107키(3언어 diff 0).

### 2026-07-03 (UI 다듬기 배치 4)
- **완료 실행취소(undo)** — 레슨 done-state에 "취소" 링크(3언어), `markDayIncomplete()` 추가. 실수로 완료 눌러도 되돌림(완료 해제·버튼 복귀, 컨페티/넛지 재트리거 없음). 헤드리스 E2E·파리티(97키) 검증.
- **월 완료 자동 후원 확인** — 이미 구현됨(그 달 전체 Day 완료 시 도네이션 시트 자동, 주 완주는 토스트만). 추가 변경 없음.

### 2026-07-03 (UI 다듬기 배치 3)
- **지판 다이어그램 점·라벨 겹침 수정** — 아래 현 점의 도수 라벨이 바로 위 현의 같은 프렛 점에 가려지던 문제. `fretboard.ts`에서 현 간격 `ROW_H` 28→36, 점 반경 `DOT_R` 12→10, 근음 링 +2, 라벨 9.5px로 조정. 전 레슨 지판 48개/라벨 421개 전수 검사 겹침 0건 검증.

### 2026-07-03 (UI 다듬기 배치 2)
- **커리큘럼 제목 언어 반영 수정** — manifest `titles.{ko,en,ja}`가 전부 한국어이던 갭 해결. 커리큘럼 소스에 **`meta.json`**(언어별 title/tagline + `instrument/topic/level/tags` 분류 필드) 신설, `build-content.mjs`가 이를 우선 사용. 랜딩·커리큘럼 페이지가 en/ja에서 각 언어 제목 표시(검증 완료). → 분류(#3) 데이터 모델도 이 meta.json으로 착수됨.

### 2026-07-03 (UI 다듬기 배치)
- **레슨 상세 아티클 리디자인** — 토스 리포트 스타일(박스·①②③ 배지 제거, h2 섹션·넓은 여백, `<mark>` 하이라이트·`.num-accent`, 시맨틱 변수만·다크 반전). 타브/지판 카드감 제거·목업 캡션("재생 자리") 제거→악보 제목 캡션. 레슨만 데스크톱 셸 720px로 확장(`:has(#view-lesson)`).
- **랜딩 커리큘럼 카드** — anchor `display:inline` 원인 수정 → 둥근 완결 카드.
- **커리큘럼 중첩 아코디언** — Month→Week→Day 2단, Week별 미니 진도, 진도 기반 자동 펼침.
- **주차 완료 문구** — `nudge.finish_week_1..6` 6종 로테이션(3언어, 통계+칭찬/격려/메트로놈 리마인더 등), `week % 6` 결정적 선택.
- **타브 재생** — 지금은 미구현(캡션 제거), 향후 자체 Web Audio로 별도 구현 결정.

### 2026-07-03
- **설계 문서 세트 확정** — 마스터 PRD, tech_stack, state_storage(nudge 5종·dedup), 악보 표준 스키마, translation_map.
- **서브에이전트 7종 생성**(`.claude/agents/`) — curriculum-architect / notation-validator / localization-writer / frontend-architect / frontend-engineer / notation-renderer / design-sync-reviewer.
- **커리큘럼 재설계** — 대상=애매한 중급자로 재정의, Week 0 신설, 밴딩/비브라토(M1 W4)·여백/프레이징(M3 W11) 미니레슨, 13개 주차 프롬프트 표준화(GarageBand 제거·스키마 통일·label 규약).
- **콘텐츠 생성·검증** — 52 Day 생성(월별 배치), notation-validator 전량 PASS(마디합 4.0·6현·금지필드 0).
- **개요 위계** — month 3 + week 13 개요 작성 → 웹 노출용 토스체·상세로 재작성.
- **다국어화** — day 52×EN/JP, 개요 16×EN/JP, JSON 블록 언어중립 파리티 100%. 도발("긁는") 어투 detox(3언어).
- **저작 플레이북** `00_curriculum_authoring_playbook.md` 신설.
- **명세서** — 기술/디자인 명세 작성, 상호 정합 리뷰 통과. 스택 개정: React → 경량 하이브리드(바닐라+Vite+TS), 자체 SVG 렌더러, Riff 확정.
- **i18n 키 정합(OPEN-4)** — 사전 91키, 목업 data-i 정본화, `i18n_key_map.md` 신설.
- **web_app MVP 구현** — 스캐폴드+콘텐츠 파이프라인+렌더러+로직+뷰, 빌드·헤드리스 검증 통과.
- **의사결정** — AlphaTab 미채택(향후 자체 Web Audio), VexFlow 보류(오선보 필요 시), **Astro 마이그레이션 결정**, GitHub 연동 배포.
- **저장소 연동** — `github.com/Junon-archive/Riff` 초기화·푸시(`.claude` 포함), `CLAUDE.md`·`Roadmap.md` 신설.
- **Astro 마이그레이션 완료** — 바닐라+Vite → **Astro+TS**(정적 163 페이지, 레슨별 HTML·hreflang·canonical, View Transitions). 렌더러/CSS/콘텐츠/i18n/로직 재사용, 인터랙션 하이드레이션 이식, 자동 후원=월/커리큘럼 완료로 한정. 구 파일 `_legacy/` 격리. tech_stack/technical_spec Astro 개정.

---

## 5. 다음 작업 (Next)
1차 릴리스는 배포까지 완료됐다. 이후 우선순위:
1. **신규 커리큘럼 제작** — `00_curriculum_authoring_playbook.md` SOP로 잽잽이/스트로크 등 추가(데이터 추가만으로 확장).
2. **경량 분석(OPEN-6)** — 프라이버시 준수 완주율·언어분포 집계 도입 검토.
3. **타브 재생(자체 Web Audio)** — 릭 들려주기 수요 생기면.
4. **운영 관찰** — 실사용 피드백 기반 UX 다듬기(넛지·도네이션 전환 등).
