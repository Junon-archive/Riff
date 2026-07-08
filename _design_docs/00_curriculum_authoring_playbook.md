# 00. 커리큘럼 저작 플레이북 (SOP) — 신규 커리큘럼 재사용 가이드

> 목적: `solo_scale_3months`를 만든 전 과정을 재사용 가능한 표준 절차로 박제한다.
> 신규 커리큘럼(잽잽이/펑키 리듬, 스트로크 주법 등) 제작 시 이 문서 하나로 시작한다.
> 상위: `00_master_prd.md` · 산출 기준 사례: `02_curriculum/solo_scale_3months/`

---

## 0. 한눈에 보기 (파이프라인 요약)
```
① 대상 레벨 정의 → ② 커리큘럼 overview 작성 → ③ 주차별 프롬프트(week_n_prompt.md)
→ ④ 표준 악보 스키마 확정 → ⑤ 세션 A로 day 콘텐츠 생성(월별 배치)
→ ⑥ notation-validator 검증(월별) → ⑦ 월/주 개요 작성 → ⑧ 정합성 최종 점검
→ ⑨ 다국어화(KR/EN/JP) → ⑩ (선택) 개요 다국어화
```
원칙: **설계(_design_docs)와 구현(web_app)을 분리**하고, 콘텐츠는 데이터로 취급한다.

---

## 1. 파이프라인 단계 (입력 · 산출물 · 담당)

| # | 단계 | 입력 | 산출물 | 담당 에이전트 |
|---|---|---|---|---|
| ① | 대상 레벨 정의 | 서비스 목표, 페르소나 | overview의 "대상 레벨" 절 | (PM 판단) |
| ② | 커리큘럼 overview | ①, 교육 목표 | `overview.md`(아크·철학·주차 요약) | curriculum-architect |
| ③ | 주차별 프롬프트 | ②, 주차 목표 | `month_N/week_N/week_N_prompt.md` | (사람/GPT 초안) + curriculum-architect 정규화 |
| ④ | 표준 악보 스키마 확정 | 렌더링 요구(지판·타브·기법) | `03_data_schema/fretboard_score_schema.json` | (PM) + notation-renderer 제안 |
| ⑤ | day 콘텐츠 생성 | ③ 프롬프트, ④ 스키마, ② Day 규약 | `day_N.ko.md`(①이론 ②악보JSON ③50분루틴 ④팁) | curriculum-architect ("세션 A" 역할), **월별 4주 병렬** |
| ⑥ | 악보 검증 | ⑤의 임베드 JSON, ④ 스키마 | PASS/수정 리포트 | notation-validator, **월별 배치** |
| ⑦ | 월/주 개요 | ⑤ 완성 콘텐츠 | `month_N_overview.md`, `week_N_overview.md` | curriculum-architect (월별) |
| ⑧ | 정합성 최종 점검 | 전체 day+개요 | 드리프트/프론트매터/스키마 스윕 리포트 | design-sync-reviewer |
| ⑨ | 다국어화 | ⑤ `.ko.md` | `day_N.en.md`, `day_N.ja.md` | localization-writer, **주차별 배치** |
| ⑩ | 개요 다국어화(선택) | ⑦ 개요 | `*_overview.{en,ja}.md` | localization-writer |

**월별 게이트:** ⑤→⑥을 한 달(4주) 단위로 끊어 생성→검증하고 통과 후 다음 달로. 파일럿(예: Week 0/1)을 먼저 돌려 품질 기준을 잠근 뒤 롤아웃한다.

---

## 2. 디렉터리 / 네이밍 규약

```
02_curriculum/{curriculum_id}/
├── meta.json                       # 커리큘럼 카드 메타(제목·태그라인·분류·썸네일 이미지) — 아래 규약
├── overview.md                     # 커리큘럼 마스터 개요(대상 레벨·아크·철학)
├── month_N/
│   ├── month_N_overview.md
│   └── week_N/
│       ├── week_N_prompt.md         # 세션 A 생성 지시서(주차별)
│       ├── week_N_overview.md
│       ├── day_K.ko.md              # 원본(한국어) — SSOT
│       ├── day_K.en.md              # 번역(영어)
│       └── day_K.ja.md              # 번역(일본어)
```
- **커리큘럼 구조:** Month → Week → Day. 각 Week = **Day 1~4**(고정). 필요 시 Week 0(온보딩).
- **dayKey:** `mN.wN.dN` (예: `m2.w6.d3`). 파일 실제 위치와 100% 일치.
- **프론트매터(각 day):** `title`(언어별 번역), `dayKey`·`estMinutes`(=50)·`i18nKey`(=`lesson.mN.wN.dN`)는 **3언어 동일**, 번역본은 `lang: en|ja` 추가.
- **id(악보 JSON):** dayKey로 시작(예: `m3.w9.d3.four_note_sequence_dorian`).
- 세부 규약: `01_architecture/state_storage.md`(dayKey), `04_localization/curriculum_i18n.md`(언어 파일).

**`meta.json` (커리큘럼 루트, 카드 메타의 발원 — 랜딩 카드에 노출):**
- 필드: `id`, `title`/`tagline`/`forWho`(각 `{ko,en,ja}`), `instrument`("guitar" 등), `topic`, `level`(정렬 전용 내부값 — 화면에 "입문/중급/고급" 노출 금지), `tags[]`, `durationMonths`, **`image`**.
- **`image`(썸네일 사진):** 언어 무관 **단일 문자열**, 커리큘럼당 1장. 값 = 정적 절대경로 `/curriculum/{id}.webp`(예: `"/curriculum/funk-rhythm.webp"`). 생략/누락 시 카드는 브랜드 그라디언트 전용 밴드로 폴백(그레이스풀). 이미지 준비·듀오톤 렌더 규약은 **아래 §8**.
- 파이프라인: `meta.json` → `scripts/build-content.mjs`(각 필드 `curMeta?.X ?? null`) → `src/content/manifest.json`(gitignore, 빌드시 재생성) → 카드 렌더(`HomeView.astro`). meta.json만 채우면 코드 수정 0.

---

## 3. 불변 규약 (모든 커리큘럼 공통 — 그대로 재사용)

이 항목들은 커리큘럼이 바뀌어도 **바꾸지 않는다.**
- **표준 악보 스키마:** `03_data_schema/fretboard_score_schema.json` 참조. 이미지 생성 AI 금지, JSON→렌더만(Zero-Hallucination).
  - 필드 규약: `id/type/meta` 필수, `type`∈{scale_shape, fretboard_diagram, tab}, `meta`(stringCount:6·tuning 대문자 E·tempoBpm), 지판=`startFret`+`fretSpan`+`dots`, 도수·음이름=`label`(**음악 기호만, 한국어 서술 금지**), 강조=`highlight`/`role`/`target`, tab `duration`=단어형, `technique` enum, `slideToFret`/`bendTarget`, 여백=`rest`.
  - **데드 노트 vs 팜뮤트 (혼동 주의):** `technique:"dead_note"` = **음정 없는 뮤트 타격음**(왼손을 줄에 얹고 피킹 — 고스트/뮤트 스크래치/커팅의 '퍽·치'). 렌더러가 **타브 X·오선보 X 노트헤드**로 그린다(음정 없으므로 임시표 없음). `technique:"palm_mute"` = **음정은 있으나** 오른손 손날로 눌러 답답하게 내는 소리(P.M.). 펑크의 뮤트 스크래치·고스트는 **dead_note**, 진짜 팜뮤트만 palm_mute.
- **토스체(TOSS tone) — KR/EN/JP 공통:** 친절·**차분**·격려·자세한 설명, 매뉴얼조 금지. "오늘 왜 이걸 하냐면요…" 식 도입 후킹. **긁지 않기(No needling):** 독자를 도발·몰아세우지 않는다 — "솔직히 말할게요/Let's be honest/正直に言いますね" 도입, "그거 맞아요?" 반문, "90%는 함정" 깎아내리기 금지. 같은 사실을 부드럽게 설명한다. EN/JP도 토스체 **기능적 등가** 재현(직역 금지). 톤 가이드 SSOT: `04_localization/translation_map.md` §1.
- **특정 도구 의존 금지:** GarageBand·특정 앱 언급 금지. "아무 녹음 앱/폰 음성 메모"로 도구중립·크로스플랫폼. 녹음은 매일 강제 아닌 권장.
- **주 4일 × 50분 루틴:** ③오늘의 연습은 항상 0-10 워밍업 / 10-20 두뇌 훈련 / 20-40 실전 즉흥 / 40-50 녹음·자가 피드백. day 본문은 ①이론 ②시각자료 ③루틴 ④팁 4단.
- **다국어 계약:** 악보 JSON은 언어 독립(3언어 바이트 동일 복사), 산문만 번역. 규약: `04_localization/curriculum_i18n.md`.

### 공통 vs 커리큘럼-특화 구분 (중요)
| 공통(재사용) | 커리큘럼-특화(신규 정의) |
|---|---|
| 악보 스키마, 토스체, 4일×50분 루틴, 파일/네이밍, 다국어 파이프라인, 품질 게이트 | 대상 레벨, 스케일/주법 내용, "3도 착지" 같은 **관통 철학**, 미니레슨 종류·배치, 주차 아크 |
> 예: `solo_scale_3months`의 **"항상 코드의 3도에 착지"** 는 이 커리큘럼의 특화 엔진이다. 잽잽이(펑키 리듬) 커리큘럼은 "16분 고스트노트 그루브" 같은 다른 관통 철학을 새로 정의한다.

---

## 4. 의사결정 로그 (왜 이렇게 했나 — 참조용)

| 결정 | 내용 | 이유 |
|---|---|---|
| **대상 = 애매한 중급자** | 입문자 아님. 곡 커버·솔로 카피는 해봤지만 즉흥은 처음 | 기초(6현·핑거링) 반복은 불필요. "1주차부터 3도 시퀀싱"이 과속이 아니라 적정이 됨. 초기 overview가 입문자용으로 잘못 잡혀 있어 실제 세션 A 콘텐츠와 모순 → 재정의로 해소 |
| **Week 0 신설** | 온보딩(자가진단·예열·즉흥 마인드셋) 1주 추가 | 중급자라도 선수 편차 보정 + "상하행은 예열일 뿐" 발판을 여기서만 허용해 이후 "상하행 금지"의 공백을 메움 |
| **밴딩/비브라토 미니레슨 → M1 W4** | 벤딩을 쓰기만 하고 안 가르치던 공백 | W4가 이미 ♭5 벤딩을 사용 → 주법 how-to를 얹기 최적 |
| **여백/프레이징 미니레슨 → M3 W11** | 쉼표·모티프·콜앤리스폰스·장르별 프레이징 | 타겟팅·모드가 갖춰진 뒤 "음 나열→음악" 전환 지점. W12 작곡으로 연결 |
| **fretSpan 상한 15→24** | 스키마 `fretSpan` 최대값 상향 | "넥 전체(0~24프렛)" 다이어그램이 15로는 부족(W3·M3 모드 폼) |
| **rest 렌더 계약 명문화** | `rest:true`면 string/fret 무시 | string/fret이 required라 자리채움 값이 들어감 → 렌더러가 무시하도록 스키마에 명시 |
| **파일 네이밍 `.ko/.en/.ja`** | day_N.ko.md 원본 + en/ja 형제 파일 | 대칭적 언어 로딩, ko=SSOT, JSON 블록은 공유 계약 |
| **커리큘럼 콘텐츠도 3개국어** | UI뿐 아니라 레슨 본문도 KR/EN/JP, EN/JP도 토스체 | 글로벌 무료 서비스 원칙(i18n-first) |
| **월별 배치 + 파일럿** | 4주 단위 생성→검증, W0/W1 파일럿 선행 | 52파일 일괄 생성의 품질 드리프트·토큰 낭비 방지, 품질 게이트 확보 |

---

## 5. 품질 게이트 (검증 체크리스트)

### 생성 배치 규약
- 생성은 **월(4주) 단위 병렬**, 검증도 **월 단위 배치**. 통과 후 다음 달.
- 신규 커리큘럼은 **파일럿 1~2주 먼저** → 품질 기준 확정 후 롤아웃.

### 악보 JSON 검증 (notation-validator)
- [ ] `id/type/meta` 필수, type enum, 필드명·enum 일치.
- [ ] **금지 레거시 필드 0건:** `interval`/`degree`/`note`(키)/`tempo`/`tempo_bpm`/`fret_range`/`slide_to`/`bend_target`/불리언 `blue_note`/숫자 `duration`/`type:"fretboard"`/소문자 튜닝 `"e"`.
- [ ] **6현 고정:** 모든 `string` 1~6, `fret` 0~24, `startFret+fretSpan`이 dots 포함.
- [ ] **tab 마디 음길이 합 = 정확히 4.0** (부점 1.5배·rest 포함 산술 검증).
- [ ] `label`은 음악 기호만(한국어 서술 금지), `technique` enum, `slideToFret`/`bendTarget` 정합.
- [ ] 운지/물리 실연 가능성 상식 검토(스트레치·슬라이드·벤딩 도달음).

### 정합성 스윕 (design-sync-reviewer)
- [ ] 프론트매터(dayKey/estMinutes/i18nKey) 전 파일 일관, dayKey=위치 일치.
- [ ] 본문 4단 구조·50분 루틴 4구간 월별 드리프트 없음.
- [ ] GarageBand·특정도구 잔재 0건.
- [ ] 개요 주차 번호·범위·dayKey 정합, 템플릿 일관.

### 다국어 검증
- [ ] `day_N.{ko,en,ja}.md`의 **JSON 블록 3언어 바이트 동일**(0 불일치).
- [ ] 프론트매터 3언어 동일 + `lang` 태그.
- [ ] ①②③④ 구조 유지, 토스 톤 스팟체크, 도구중립 유지.

---

## 6. 신규 커리큘럼 재사용 체크리스트 ("무엇을 바꾸고 무엇을 두는가")

**그대로 둔다(재사용):**
- [ ] 악보 표준 스키마(`fretboard_score_schema.json`)
- [ ] 토스체 톤 가이드(KR/EN/JP)
- [ ] 4일×50분 루틴 골격, day 4단 구조
- [ ] 파일/네이밍/dayKey/프론트매터 규약
- [ ] 다국어 파이프라인·언어중립 JSON 계약
- [ ] 품질 게이트·에이전트 롤(7종)

**새로 정의한다(커리큘럼-특화):**
- [ ] **대상 레벨**(누구를 위한 코스인가) — 가장 먼저, overview에 명문화
- [ ] 스케일/주법 등 **교육 내용**과 월/주 아크
- [ ] **관통 철학**(이 커리큘럼의 엔진. 예: 3도 착지 ↔ 그루브 타이트니스)
- [ ] **미니레슨** 종류와 배치 위치
- [ ] Week 0 온보딩 필요 여부·내용
- [ ] 주차별 프롬프트(week_n_prompt.md) — 표준 스키마 블록은 복붙, 내용만 교체
- [ ] **`meta.json`** — 제목·태그라인·forWho·instrument·durationMonths + **썸네일 `image`**(§8 절차로 webp 생성 후 경로 기입)

**착수 순서:** 대상 레벨 → overview → `meta.json` → 주차 프롬프트(표준 스키마 임베드) → 파일럿 생성/검증 → 월별 롤아웃 → **썸네일 이미지(§8)**.

---

## 7. 함정 / 교훈 (이번에 겪은 것과 예방책)

| 함정 | 무슨 일이었나 | 예방책 |
|---|---|---|
| **월별 JSON 필드 드리프트** | 세션 A를 월별로 다른 세션이 만들어 `interval`/`degree`/`highlight`/`tempo` vs `tempo_bpm` 등 필드가 제각각 | 주차 프롬프트에 **표준 스키마 블록을 통째로 임베드**하고 [필드 규약]을 명시. 수합 시 curriculum-architect가 정규화, validator가 스윕 |
| **대상 레벨 모순** | overview는 입문자용인데 실제 콘텐츠는 중급 즉흥 훈련 | **대상 레벨을 맨 처음** 확정하고 overview 최상단에 명문화. 콘텐츠 생성 전에 정합 확인 |
| **"상하행 절대 금지"의 발판 공백** | 상하행을 전면 금지하면 기계적 예열 발판이 사라짐 | Week 0에서만 예열로 허용 후 시퀀스로 전환 |
| **특정 도구(GarageBand) 종속** | 맥/iOS 전용이라 글로벌·크로스플랫폼 위반 | 도구중립 표현 강제("아무 녹음 앱"), 매일 강제→권장 |
| **악보 label에 한국어 서술** | Week 6가 `"C — Am 착지(b3)"` 식 서술형 label 생성 → EN/JP 지판에 한글 노출 | **label은 음악 기호만**(음이름·도수). 밝은/어두운/착지 뉘앙스는 산문(번역됨)이 담당 |
| **rest 음표의 필수 필드** | `rest:true`인데 string/fret required라 자리채움 값 | 스키마에 "rest면 string/fret 무시" 렌더 계약 명시 |
| **넥 전체 다이어그램 fretSpan** | 상한 15로는 0~24프렛 표현 불가 | fretSpan 상한 24로 상향(스키마) |
| **52파일 일괄 생성 유혹** | 한 번에 다 뽑으면 드리프트·토큰 낭비 | **파일럿 → 월별 배치 → 게이트**. 각 배치 검증 통과 후 진행 |
| **에이전트 병렬 드리프트** | 여러 에이전트가 병렬 생성 시 포맷 미세 차이(섹션 제목 공백 등) | 동일 규칙셋·모범 샘플을 모든 에이전트에 동일 전달, 마지막에 design-sync 스윕으로 정정 |
| **긁는(도발) 어투 혼입** | 생성 콘텐츠에 "솔직히 말할게요/그거 맞아요?/90%는 함정" 같은 몰아세우는 토스답지 않은 도입이 다수 섞임(ko→en/ja로 전파) | 톤 가이드에 "긁지 않기" 규칙 명문화(translation_map §1). 생성·번역 프롬프트에 도발 금지 명시. 완료 후 도발 마커 grep 스윕(ko/en/ja). "긁다"(피킹 용어)·부드러운 팁은 오탐이니 유지 |

---

## 8. 커리큘럼 카드 썸네일 (사진 + 듀오톤) — 재사용 SOP

랜딩 카드 썸네일은 **기타 사진을 brand-blue 듀오톤**으로 처리해 얹는다. 신규 커리큘럼도 아래 절차만 따르면 자동 적용된다(코드 수정 0, 런타임 JS 0). 세부 렌더 계약은 `web_app/docs/design_spec.md` §4.6, 데이터는 `technical_spec.md` §4.4.

**원본·최적화 (SSOT ↔ 산출물 분리):**
- 원본(SSOT): `web_app/assets/Curriculum_image/`에 그대로 보존. 가로형(3:2/16:9 무관 — 밴드가 세로만 크롭).
- 최적화 사본만 커밋 대상 `web_app/public/curriculum/{id}.webp`로 생성. **일회성 스크립트** `web_app/scripts/optimize-curriculum-images.mjs`(빌드 파이프라인 **미연결** — 필요할 때 `node scripts/optimize-curriculum-images.mjs` 수동 실행).
- 변환 스펙: **가로 1200px·그레이스케일·WebP q72·각 120KB 이하**(그레이스케일이어도 듀오톤 1단계가 휘도 추출이라 결과 동일, 용량만 절감). 신규 이미지는 스크립트의 `MAP` 배열에 `{ src, out }` 한 줄만 추가.
- 파일명 = **커리큘럼 id 기반 시맨틱**(예: `funk-rhythm.webp`). 괄호·공백 금지(정적 경로·glob 안전).

**배선(3곳 + 재빌드):** ① `meta.json`에 `"image": "/curriculum/{id}.webp"` → ② (이미 반영됨) `build-content.mjs`가 `image: curMeta?.image ?? null`로 전달 → ③ (이미 반영됨) `types/content.ts` `ManifestCurriculum.image` → **`npm run build:content`**로 manifest 반영. `manifest.json`은 직접 편집 금지(gitignore·재생성).

**렌더(공통, 재사용 — 손댈 필요 없음):**
- 레이어(`.curr-thumb`, z 순서): `<img>`(듀오톤) → 그라디언트(`::before`) → 하단 스크림(`::after`) → `.chip`.
- 듀오톤 = **전역 SVG 필터** `#duotone-light`/`#duotone-dark`(`Base.astro` `<body>` 최상단, 페이지당 1쌍). CSS는 `[data-theme]` 속성 셀렉터로 light/dark 전환(미디어쿼리 금지 — 프로젝트 다크모드 방식과 통일, View Transitions·Safari 안전).
- 색은 전부 `tokens.css` 변수(`--grad-a/-b`, 폴백 `--grad-fallback`) — 컴포넌트 하드코딩 금지.
- `object-position: 50% 45%`(공통 기본): 밴드(≈3.6:1)가 원본(3:2)보다 넓어 **세로만 크롭**된다. 하단 상표 라벨(f홀 라벨·헤드스톡 로고)·노브, 상단 빈 배경이 밴드 밖으로 밀려나도록 확인. 특정 사진이 안 맞으면 그 사진만 값 조정.
- `image`가 null인 커리큘럼은 `<img>` 미렌더 + `.no-img`로 **기존 그라디언트 전용 밴드** 폴백(그레이스풀 디그레이데이션).

**품질 체크:** [ ] webp 각 120KB 이하 [ ] `alt=""`·`loading="lazy"`·`decoding="async"`·`width/height`(CLS 방지) [ ] 라이트/다크 토글 시 듀오톤+그라디언트 동시 전환 [ ] 칩·제목이 어떤 사진 위에서도 가독 [ ] 브랜드 로고·상표 라벨이 밴드 밖으로 크롭.

---

## 부록: 담당 에이전트 레지스트리 (`.claude/agents/`)
- **curriculum-architect**(Opus) — 커리큘럼 설계·세션 A 콘텐츠 생성/수합
- **notation-validator**(Haiku) — 악보 JSON 스키마·물리 검증 게이트
- **localization-writer**(Sonnet) — 토스체 3개국어 번역
- **frontend-architect**(Opus) / **frontend-engineer**(Sonnet) / **notation-renderer**(Opus) — web_app 구현
- **design-sync-reviewer**(Sonnet) — 설계-구현·다국어 정합성 감시

> 이 플레이북은 살아있는 문서다. 신규 커리큘럼에서 새 교훈이 나오면 §4·§7에 추가한다.
