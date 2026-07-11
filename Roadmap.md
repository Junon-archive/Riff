# 🎸 Riff — Roadmap & 진행 현황

> 무료 기타 레슨 웹 서비스. 이 문서는 **현재 구현 상황·변경 로그·다음 작업**을 관리하는 단일 대시보드다.
> 규칙: 작업이 하나 끝날 때마다 이 파일을 갱신한다(`CLAUDE.md` 고정 규칙).
> 최종 갱신: 2026-07-11 · **라이브: https://guitar-riff.pages.dev**

---

## 1. 지금 어디까지 왔나 (한눈에)

**🚀 배포 완료 — 실서비스 운영 중** (`guitar-riff.pages.dev`, Cloudflare Pages + GitHub 자동배포).

| 영역 | 상태 | 요약 |
|---|---|---|
| **설계 문서(_design_docs)** | ✅ 완료 | PRD·아키텍처·스키마·로컬라이제이션·저작 플레이북·색 범례 확정 |
| **커리큘럼 콘텐츠** | ✅ 6트랙 라이브 / 🟡 확장중 | solo 52 + chord 32 + funk 32 + 입문일렉 16 + 입문베이스 16 + **슬랩/펑크 32** = **180 Day**(6트랙), 전량 KR/EN/JP. **신규 트랙 프롬프트 전량 완료(10트랙, 남은 것 0)**: 블루스 day 저작 중, 네오소울·셔플바운스·워킹 프롬프트 완료·day 대기(백로그 11·12·15·16) |
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
- **📁 업데이트 백로그 — `_design_docs/05_update_backlog/`** — 미래 렌더러/구조 개선을 작업 묶음별 상세 설계로 문서화. 각 md에 관련 코드 위치·수정 상세·기존 불변 보장·검증 게이트·체크리스트·status. 착수 시 해당 문서 따라 진행하고 status 갱신. **README.md가 인덱스.** 현재 상태:
  - 🟢 **완료:** 01 시각자료 배치+소개 · 06 악보 인라인 재배치(77 day) · 08 산문 하이라이트(116 day+intro 3) · 03 악보 음정 정확성(①조표+②튜닝+③다현/지판) · 02 표현기법(A~D) · 04 슬래시 리듬 · **09 입문 일렉 커리큘럼(16일 48파일+대표 이미지)**. (엔진 변경은 전부 기존 116일 바이트 불변)
  - 🟡 **진행 중:** 07 PWA 앱화(A·B 검증완료·C 안드검증보류·D 미착수).
  - 🟢 **05 커리큘럼 브라우징**(악기 세그먼트 토글 + 베이스 연초록 액센트 테마 + 악보 클램프 + View Transition) 완료.
  - 🟢 **10 베이스 엔진**(B0~B4: 클레프·slap·튜닝·다현·지판·옥타브앵커) 완료. 커리큘럼 저작은 13~16으로 위임(13·14 완료).
- **신규 커리큘럼(백로그 11~16) — 주차 프롬프트 전량 완료(남은 것 0):** 기타 11 블루스(3개월·12주)·12 R&B/네오소울(2개월·level 3 캡스톤). 베이스 13 기초·14 슬랩펑크·15 셔플바운스·16 워킹(level 3 재즈 캡스톤). **day 저작 현황:** 09·13·14·15 완료 / 11·12 진행 중 / 16 day 대기. 전 프롬프트에 결함 5종 방지 "필수 규칙" 블록 내장. 상태 인덱스 = `_design_docs/05_update_backlog/README.md`.
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

### 2026-07-12 (랜딩 커리큘럼 순서 — 레벨 내 "치고 싶은 것" 우선, order 보조키)
- **동작:** 정렬을 `level` 오름차순 + **같은 레벨 내 `meta.order` 오름차순**으로. order=욕망 강도(기타 L2: 솔로1>블루스2>펑크3>코드4 / 베이스 L2: 슬랩1>셔플2). 결과 — 기타: 일렉기초→솔로→블루스→펑크→코드→네오소울, 베이스: 베이스기초→슬랩→셔플→워킹.
- **구현:** 10개 meta.json에 `order` 정수 추가(내부 정렬용·화면 미노출), `build-content.mjs` 노드에 order + 정렬 `(level, order)`. 악기 세그먼트 필터가 상대순서 보존이라 order는 악기별 리스트 순서만 맞추면 됨. (백로그 05 "order 없이 level만" 결정을 이 요구로 재개.)
- **검증:** build exit 0 · check-invariants 회귀 0(메타·정렬은 콘텐츠 지문 무관) · manifest 악기별 순서 검증.

### 2026-07-12 (랜딩 카드 카피 확정안 반영 — title/tagline/forWho 일괄 수정, `_design_docs/02_curriculum/*/meta.json`)
- **범위:** 10개 커리큘럼 중 8개(`solo_scale_3months`·`chord_building_2months`·`funk_rhythm_2months`·`blues_3months`·`neosoul_voicing_2months`·`shuffle_bounce_bass_2months`·`slap_funk_bass_2months`·`walking_bass_2months`) `meta.json`의 `title`(전체)·`tagline`(blues만)·`forWho`(신규 5개만) 3언어 수정. `beginner_electric_1month`·`beginner_bass_1month`는 변경 없음(확정안대로 유지).
- **제목:** "N개월/N-Month/Nか月", "커리큘럼/curriculum" 등 기간·행정어 제거(기간은 카드 배지가 담당). 예: "2개월 코드 빌딩 시스템"→"코드 빌딩 시스템", "3개월 솔로/스케일 마스터 커리큘럼"→"솔로 & 스케일 마스터".
- **태그라인:** 전 커리큘럼 기존 en/ja 값 유지. 예외로 `blues_3months`만 "로드맵/Roadmap/ロードマップ" 중복(제목=블루스 로드맵, 태그라인에도 로드맵) 해소 — "12주 블루스 로드맵"→"12주 블루스 여정"(en: roadmap→journey, ja: ロードマップ→の旅).
- **forWho:** 유지 5개(기초2·chord·funk·solo)는 불변. 신규 5개(blues·neosoul·shuffle·slap·walking)는 "할 수 있는 것 → 딱 막히는 지점 → 분께" 구조로 토스톤 재작문(예: blues "박스는 외웠는데, '말하는' 솔로는 안 나오는 분께" / neosoul "코드는 치는데, 그 나른한 R&B 보이싱 색은 못 내는 분께"). 내부 id·선수과목 나열 제거.
- **검증:** 10개 meta.json 전부 JSON 유효·title/tagline/forWho 3언어 키 누락 0(python 스크립트 검증)·`git diff` 로 지정 외 필드(intro·tags·level 등) 불변 확인·`npm run build` exit 0(1006p, build-content 파싱 OK)·dist에서 신규 title(예: "블루스 로드맵"/"Blues Roadmap") 렌더 확인. **커밋 미실행**(검증·커밋은 사용자).

### 2026-07-11 (오선보 조판 — 줄 마지막 마디 끝 여백 확보, staff.ts)
- **증상:** 한 줄의 마지막 마디에서 끝 음표가 종료 세로줄에 바짝 붙음(워킹 M1W4D4 실측 끝여백 10.9px, 펑크 M2W8D4 등). 주로 줄 마지막 마디.
- **원인:** `staff.ts` 가 한 줄의 마디들을 이어 `Formatter.format(voices, noteAreaW)` 로 justify하는데 **끝 여백을 예약하지 않아** 마지막 음표가 stave 종료 세로줄에 밀착.
- **수정:** 레이아웃 상수 `RIGHT_PAD=18` 추가 → 종료 세로줄(`thisStaveW`)과 SVG 폭(`totalW`)만 18px 오른쪽으로. **format 폭(noteAreaW)은 불변** → 내부 음표 간격 압축 없이 줄 끝에만 여백. 전 커리큘럼 모든 오선보 매 줄 마지막 마디 일괄 적용(줄 중간 마디는 불변).
- **검증:** build 0(1006p)·불변식 회귀 0(1454블록, 픽셀 변화는 지문 무관)·워킹 M1W4D4 끝여백 10.9→27.4px·다커리큘럼 표본 전부 여백 확보·사용자 육안 확인.

### 2026-07-11 (버그픽스 — 지판 개방현 루트에 role 색 미적용, fretboard.ts)
- **증상:** 지판에서 개방현 루트(O 표기)가 산문의 "파란 점"과 달리 **무색**으로 렌더(재현: `shuffle_bounce_bass m1/w1/d1` "E root position").
- **원인:** 개방현(fret 0) 렌더 경로가 `dotStyle`(역할 색)을 안 쓰고 `stroke=currentColor` 고정 → 프렛 짚는 음만 색이 들어가고 개방현은 무색.
- **수정:** 개방현 O·라벨을 `dotStyle` 색으로(루트=파랑). 역할 없는 개방현은 기존 currentColor·opacity 유지(바이트 불변).
- **검증:** build 0 · check-invariants 회귀 0(SVG만) · dist 셔플바운스 개방 루트 O `stroke=var(--primary)` 확인.

### 2026-07-11 (버그픽스 — 스윙/템포 겹침: v2 wrap 상호작용, staff.ts)
- **증상:** 1마디로 보이는 스윙 악보에서 "Swing 8ths" 표기와 ♩=bpm 템포가 겹침(재현: `shuffle_bounce_bass m1/w3/d2` b_boogie 부기).
- **원인(신규·상호작용):** 기존 겹침수정(다른 세션, 백로그 17 부수이슈)이 **전체 마디 수 `measures.length===1`** 로 판정했는데, ★17-v2 그리디 wrap 이 **2마디 스코어도 1마디/줄로 분리** → 첫 줄이 1마디(좁음)라 겹치는데 전체 마디=2 라 조건이 놓침.
- **수정:** 판정을 **첫 줄 마디 수 `rows[0].length===1`** 로 교체(템포·스윙은 첫 줄에만 그려짐). 첫 줄 2마디+ 면 넓어 미적용(기존 유지).
- **검증:** build 0 · check-invariants 회귀 0(레이아웃만). 육안(스윙↔템포 세로 분리)은 배포 후.

### 2026-07-11 (백로그 17 v2 완료 — 육안 검증 통과 + 잇단음 렌더 버그픽스 2종)
- **백로그 17 v2 DONE:** 악보 마디 단위 세로 줄바꿈@280 + 넓은 단일 마디만 페이드-힌트 가로 스크롤 + 스크롤 스코핑 버그 수정, **모바일/PC 육안 검증 통과**. status→DONE·README 갱신.
- **잇단음 렌더 버그픽스(백로그 02-C 후속, 셔플 실사용에서 발견):** ① 오선보/타브 x정렬 — Tuplet 이 오선보 음에만 적용돼 타브와 어긋나던 것을 타브 음에도 Tuplet 적용(tick 정합). ② "가운데 빼기" 쉼표 빔 — [음,쉼표,음] 트리플렛에서 빔이 박 경계 넘어 오연결되던 것을 rest 는 튜플렛 그룹 포함·빔 미포함으로 수정. (빔 2→3음 그룹핑 수정은 앞선 커밋.)
- **검증:** build 0 · check-invariants 회귀 0(전부 순수 레이아웃) · 라이브 육안 확인. 커밋 92e8c4e·f0c613d·c6a522c + 본 문서 마감.

### 2026-07-11 (백로그 19 **완료** — 악보/지판 카드 모바일 가로폭 확대 + 짧은 악보 중앙 정렬, 사용자 육안 확인)
- **문제:** 지판/악보 카드가 산문 텍스트폭보다 좌우로 확 좁음(모바일 판독 손해). 1마디짜리 짧은 staff 악보는 카드 왼쪽에 치우침.
- **원인 정정(1차 진단 오류):** 처음엔 카드 패딩·`max-width` 캡을 원인으로 봤으나 **틀림**. 실제 원인 = **① `<figure class="render-area">` 브라우저 기본 좌우 마진 40px 미리셋**(프로젝트 리셋에 `figure` 없음 → 카드가 산문보다 좌우 40px씩=80px 좁음) **+ ② 카드 figure 가 `set:html` 주입이라 Astro 스코프 속성이 없어 `LessonView.astro` 스코프 `.render-area` 규칙 미적용**(전역 `app.css` 규칙만 먹음). → 1차 커밋의 LessonView 패딩 변경은 죽은 코드였고 체감 0.
- **최종 해결(CSS-only):** 전역 `app.css .render-area` 에 **`margin: 24px 0`**(좌우 마진 0 리셋) → 카드 좌우가 산문 문단과 정렬(산문폭 확장). 가로 패딩 `20px 18px→20px 6px`. `.render-mount .fretboard/.tabsvg/.staffsvg` 에 `margin-inline:auto`(:global 이라 주입 figure 적용) → 짧은 악보 중앙. **짧은 악보 자체 확대(max-width 캡 해제)는 미채택**(사용자 결정 — 불필요).
- **검증:** build exit 0(1006p)·불변식 회귀 0(1454블록, CSS-only 무관)·dist 번들 `.render-area{margin:24px 0;…padding:20px 6px}` 컴파일 확인·**사용자 모바일 육안 확인 완료**(카드=산문폭·짧은 악보 중앙).

### 2026-07-11 (백로그 18 **완료** — 솔로/스케일 tab → staff+tab 이식, `render/tab.ts` 제거)
- **배경:** solo_scale_3months 89개 tab 블록만 `meta.notation` 미지정이라 구식 자체 타브 SVG(`render/tab.ts`)로 라우팅 — 다른 9개 커리큘럼은 전부 `staff+tab`(VexFlow 오선보+타브 결합). 렌더 경로 이원화 해소 + 표기 일관성 위해 이식.
- **단계 0(R1, 커밋 `c02a272`):** `preferFlats` 를 정규식 조 루트(`^[A-G][b♭#♯]?`) 기반으로 정밀화 — "A blues"/"A Mixolydian(blues)"의 서술어 'b' 를 플랫 조로 오판하던 버그 수정(유닛 10/10).
- **단계 1·2(커밋 `20dd176`):** solo 89블록 × 3언어 = 267블록 `meta` 에 `"notation":"staff+tab"` 텍스트 외과 삽입(재직렬화 없이 나머지 바이트·3언어 동일성 보존, 147파일). 라우팅이 tab.ts→staff.ts 로 전환. check-invariants baseline 갱신(변경=57지문키 notation만, measures 불변·추가/삭제키 0).
- **단계 3(tab.ts 제거):** `render/index.ts` renderTab import/분기/re-export 제거 + notation 미지정 시 `staff+tab` 폴백. `render/tab.ts`(285줄) 삭제. 문서 동반 갱신(technical_spec §5.3·구조도·§13.2, CLAUDE.md, implementation_guide, build-content 주석). 빌드되는 tab 블록은 전부 staff+tab(잔여 미지정 13건은 `week_*_prompt.md` 저작용 — 빌드 미소비).
- **검증:** build exit0(1006p)·불변식 회귀0(1454블록)·ko/en/ja JSON 바이트동일(불일치0)·dist solo VexFlow staff+tab 렌더 확인(실패흔적0)·renderTab 참조0(index.ts 외).

### 2026-07-11 (백로그 16 **완료** — 워킹 베이스 8주차 day 저작 = **트랙 졸업**)
- **8주차(최종 졸업):** day_1~4 × 3언어 = 12파일. D1 진행 파악(ii-V-I+턴어라운드 순환) → D2 진행 위 워킹(코드톤+접근) → D3 장식+리허설(멈추지 않는 순환) → D4 최종 졸업 녹음(핀 고정 `walking_graduation` 4마디 Gm7-C7-Fmaj7-C7 턴어라운드, 4·5현). day_4 `(워킹 베이스 졸업!)` 3언어. 베이스 재즈/하모니 캡스톤 서사.
- **트랙 완성:** 워킹 베이스 8주 × 4일 × 3언어 = **96 day 파일** 저작 완료(meta·overview 30·섬네일 포함). 키 F, M1(코드톤·밀도램프·접근음·F블루스) → M2(ii-V-I·enclosure·장식·오리지널 졸업).
- **검증:** 전역 build exit0(10트랙·walking day JSON 32)·마디 박자합 4.0 전수·3언어 JSON 바이트동일·볼드/mark 3언어 동수·④완료줄 mark0·핀 JSON 8주 전부 프롬프트 바이트동일·4/5현 병행쌍·태그오염0. **check-invariants: walking 신규 56블록·회귀0(1454블록 일치)·baseline --update 반영.**

### 2026-07-11 (백로그 16 — 워킹 베이스 7주차 day 저작)
- **7주차(장식 & 필):** day_1~4 × 3언어 = 12파일. D1 고스트노트('칙') → D2 8분음 필(약박 두 음) → D3 해머온 장식 → D4 장식 워킹(핀 고정 `ornament_walk` 1마디, F7 4분음+고스트+8분 필, 4·5현). 고스트=`dead_note`+`role:"scale"`·label생략(무색), 해머=`hammer_on`, 필=eighth. 4분음 뼈대 유지.
- **검증:** build-content 격리 exit0(walking day JSON 28, hammer_on·dead_note 렌더 게이트 통과)·마디 박자합 4.0·3언어 JSON 바이트동일·볼드/mark 3언어 동수·④완료줄 mark0·핀 JSON=프롬프트 바이트동일·4/5현 병행쌍·태그오염0·①이론 507~523. invariants --update 보류(동시세션 부분 build, baseline 온전).
- **다음:** week_8(졸업 — 오리지널 ii-V·턴어라운드).

### 2026-07-11 (백로그 12 **완료** — 네오소울 8주차 day 저작 = **트랙 졸업**)
- **8주차(종합 졸업):** day_1~4 × 3언어 = 12파일. D1 요소 종합(1마디) → D2 곡 구조(2마디 Dm9+G13+스미어 필) → D3 풀 런스루 → D4 최종 졸업 녹음(핀 고정 `neosoul_graduation`, `feel:"swing16"` 2마디 바이트동일). day_4 `(네오소울 졸업!)`/`(Neo-soul complete!)`/`（ネオソウル修了！）` 3언어. ①이론 두 달 회고 + 기타 하모니 캡스톤 서사(④로 종료, 별도 졸업 섹션 없음).
- **백로그 12 완료:** `neosoul_voicing_2months` 2개월·8주·32일 × 3언어 = **96 day 파일** + 준비물(meta·overview 30·섬네일) 전량 저작·검증·커밋·push. M1 보이싱&무브먼트(Dm9·G13 코어그립→텐션→크로매틱 접근→탑노트 멜로디) → M2 장식&그루브&종합(더블스탑 스미어→그레이스노트→레이백 스윙16 커팅→종합 졸업). 텐션=`role:color`·스미어=`hammer_on`·커팅=`dead_note`·크로매틱=`slide`, 지판 병기 8주 통일.
- **검증(전 주차):** build 985p exit0, check-invariants neosoul **143블록·회귀0**(baseline 최종 정합, HEAD 키 0소실), 32일 전량 3언어 볼드/mark 개수 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀고정 8블록=프롬프트 바이트동일·마디 박자합 4.0·chord[] 대표음=최저음·태그오염0. day_2 스키마 위반 1건(대표음≠최저음) 발견·수정, 커스텀 검증기에 규칙 추가.
- **기타 라인업:** solo·chord·funk·입문일렉·블루스에 이어 **네오소울(어드밴스드 하모니 캡스톤, level 3)** 추가 → 기타 6트랙. 다음 콘텐츠 후보 = 베이스 워킹(백로그 16, 진행 중).

### 2026-07-11 (백로그 11 **완료** — 블루스 12주차 day 저작 = **트랙 졸업**)
- **12주차(리듬↔리드 대화·최종 졸업):** day_1~4 × 3언어 = 12파일. D1 컴핑→솔로 전환 → D2 2마디 대화 → D3 12마디 전체 대화 → D4 최종 졸업 녹음 + solo_scale 핸드오프(핀 고정 `rhythm_lead_dialogue`, chord[] 컴핑+박스1 릭·`feel:swing8`, `(블루스 졸업!)`).
- **백로그 11 완료:** `blues_3months` 3개월·12주·48일 × 3언어 = **144 day 파일** 전량 저작·검증·커밋·push 완료. M1 리듬(셔플·부기·12마디·턴어라운드) → M2 표현 리드(박스1·블루노트·벤딩·프레이징·첫 솔로) → M3 심화·통합(코드 따라가기·BB색·프레이징 성숙·리듬↔리드 대화). 준비물 meta.json + overview 45파일 + 대표 섬네일(blues.webp) 포함.
- **★전 트랙 캡스톤 검증:** 48일 3언어 볼드·mark 개수 일치·악보 JSON 3언어 바이트동일·**12개 핀 고정 JSON 전부 프롬프트와 바이트동일**·④/완료줄 mark0·도구태그 0. build green exit0(blues day 48), check-invariants 삭제전용키 0(회귀0·baseline→1378). 배포 콘텐츠 최초 bend/slide/vibrato 실렌더 확인(w6 dist 글리프). `scale_shape`·`blue_note`(보라)·`role:color`(노랑)·`role:target`(초록) 실사용.
- **다음:** blues 트랙 라이브. 남은 신규 커리큘럼(12 네오소울·16 워킹 등)은 동시 진행 중.

### 2026-07-11 (백로그 16 — 워킹 베이스 6주차 day 저작)
- **6주차(감싸기 enclosure·타깃팅 심화):** day_1~4 × 3언어 = 12파일. D1 반음 위·아래 감싸기 개념 → D2 루트 감싸기 → D3 3도 감싸기 → D4 감싸기 워킹(핀 고정 `enclosure` 1마디, 목표 C=`role:"target"`+`highlight`, 4·5현). 착지 목표음 초록 강조. 핀 ▶에 '감싸기만 떼어 본 연습' 오해방지.
- **검증:** build-content 격리 exit0(walking day JSON 24)·마디 박자합 4.0·3언어 JSON 바이트동일·볼드/mark 3언어 동수·④완료줄 mark0·핀 JSON=프롬프트 바이트동일·4/5현 병행쌍·태그오염0·①이론 513~563. invariants --update 보류(동시세션 부분 build, baseline 온전).
- **다음:** week_7(장식&필 — 고스트·데드·8분·해머).

### 2026-07-11 (백로그 12 — 네오소울 7주차 day 저작)
- **7주차(레이백 스윙16 & 뮤트 커팅):** day_1~4 × 3언어 = 12파일. D1 16비트 컴핑+뮤트 커팅(`dead_note`) → D2 레이백(박자 뒤에 눕기) → D3 스윙16 끈적함 → D4 레이백 컴핑(핀 고정 `laidback_comp`, `feel:"swing16"` 바이트동일). 커팅=`dead_note`(role:scale), 텐션=`role:"color"`.
- **검증:** build 964p exit0, check-invariants read-only neosoul 회귀0(삭제/변경 0, 전역 삭제 0), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0·chord[] 대표음=최저음 통과. baseline 최종 정합 예정(day만 커밋).
- **다음:** week_8(종합 졸업 — 네오소울 컴핑 한 곡, 트랙 졸업).

### 2026-07-11 (백로그 15 **완료** — 셔플&바운스 8주차 day 저작 = **트랙 졸업**)
- **8주차(종합 바운스 그루브 완성·녹음, 최종 졸업):** day_1~4 × 3언어 = 12파일. D1 요소 종합(스윙16+고스트+레이백) → D2 곡 구조(2마디 메인+멜로딕 변주) → D3 리허설 → D4 최종 졸업 녹음 + 핀 고정 `bounce_graduation`(2마디, 4·5현) + 다음 트랙(슬랩·워킹) 다리. day_4 `(셔플&바운스 졸업!)` 3언어 라벨.
- **검증:** build 934p exit0, check-invariants 회귀0·baseline 1305로 --update(셔플 w8 8블록), 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·feel swing16·고스트 dead_note·chord[] 미사용·4·5현 병행쌍·태그오염0.
- **백로그 15 완료:** `shuffle_bounce_bass_2months` 2개월·8주·32일 × 3언어 = **96 day 파일** 전량 저작·검증·커밋·push 완료. M1 셔플(트리플렛→부기 R-5-6-b7→12마디 I-IV-V→턴어라운드 졸업) → M2 바운스(고스트→스윙16→레이백→종합 졸업). feel swing8/swing16·dead_note 고스트, 4·5현 병행. 준비물(meta·overview 30·섬네일)부터 day까지 /goal 주차별 순차. 백로그 15 status→DONE, README 인덱스 반영.

### 2026-07-11 (백로그 16 — 워킹 베이스 5주차 day 저작 = Month 2 착수)
- **5주차(ii-V-I 워킹):** day_1~4 × 3언어 = 12파일. D1 Gm7·C7·Fmaj7 코드톤 → D2 Gm7→C7 잇기(접근음 Db) → D3 C7→Fmaj7 해결(이끔음 E) → D4 ii-V-I 워킹(핀 고정 `ii_v_i_walk` 3마디, 4·5현). 재즈의 집으로 가는 길, 각 코드 루트 착지+접근음. Gm7 b3·Fmaj7 maj7 도수 라벨.
- **검증:** build-content 격리 exit0(walking day JSON 20)·마디 박자합 4.0·3언어 JSON 바이트동일·볼드/mark 3언어 동수·④완료줄 mark0·핀 JSON=프롬프트 바이트동일·4/5현 병행쌍·태그오염0·①이론 551~650. invariants --update 보류(동시세션 부분 build, baseline 온전).
- **다음:** week_6(감싸기 enclosure·타깃팅 심화).

### 2026-07-11 (백로그 11 — 블루스 11주차 day 저작: 릭 어휘 확장·프레이징 성숙)
- **11주차:** day_1~4 × 3언어 = 12파일. D1 슬라이드 진입 → D2 벤딩+비브라토(우는 릭) → D3 레이백·다이내믹 → D4 표현 통합 릭(핀 고정 `expressive_lick`, slide→bend→vibrato).
- **검증:** build-content blues day 44 정상·check-invariants blues 삭제0(회귀0)·blues w11 신규 20블록, 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0·①이론 525~534. (동시 세션 미완성이 full-build 차단 → w11 baseline은 다음 green 창에서 w12와 함께 갱신.)
- **다음:** week_12(리듬↔리드 대화 → 최종 졸업 + solo_scale 핸드오프).

### 2026-07-11 (백로그 12 — 네오소울 6주차 day 저작)
- **6주차(그레이스노트 & 장식):** day_1~4 × 3언어 = 12파일. D1 앞꾸밈음(짧은 앞음→목표음) → D2 풀오프 하행 장식 → D3 코드에 장식 얹기 → D4 장식 릭(핀 고정 `grace_lick` 바이트동일). 그레이스노트=짧은 앞음+`pull_off` 근사. D3 chord[] 대표음=최저음 준수.
- **검증:** build 928p exit0, check-invariants read-only neosoul 회귀0(삭제/변경 0, 이번엔 전 세션 추가만·baseline 드리프트 해소), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0·대표음 규칙 통과. baseline은 최종 정합 예정(day만 커밋).
- **다음:** week_7(레이백 스윙16 그루브 & 뮤트 커팅).

### 2026-07-11 (백로그 15 — 셔플&바운스 7주차 day 저작 + w6·w7 baseline 정합)
- **7주차(레이백 & 하프타임 맛보기):** day_1~4 × 3언어 = 12파일. D1 뒷박에 눕기(behind the beat) → D2 앞·정박·뒤 밀당(같은 라인 3위치) → D3 〈맛보기〉 하프타임 셔플 필 → D4 레이백 그루브 + 핀 고정 `laidback_groove`(rest 공간 많은 스윙16, 4·5현). 레이백은 렌더 기호 없어 산문 설명(악보=정박).
- **검증:** build 886p exit0(neosoul chord 오류 해소된 클린 창 포착), check-invariants 회귀0·baseline 1225로 --update(**셔플 w6·w7 각 14블록 정합** — 6주차 커밋서 미뤄둔 baseline 부채 해소). 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 바이트동일·feel swing16·chord[] 미사용·4·5현 병행·태그오염0.
- **다음:** week_8(스윙16+고스트+레이백 종합 바운스 그루브 완성·녹음 = 최종 졸업).

### 2026-07-11 (백로그 11 — 블루스 10주차 day 저작 + baseline 부채 일괄 해소)
- **10주차(메이저/마이너 'BB' 색):** day_1~4 × 3언어 = 12파일. D1 메이저 3도(C#) 위치 → D2 b3→3 반음(BB 색) → D3 A7 위 3도 선택 → D4 BB 색 통합(핀 고정 `bb_lick`). 메이저3도 강조=`role:"target"`+`highlight:true`(초록).
- **★baseline 일괄 갱신:** 동시 세션 churn으로 연기됐던 w8·w9·w10 blues 60블록 + 동시세션분을 green 빌드 창에서 일괄 `--update`(→1225, 삭제전용키 0=회귀0). 이로써 blues baseline 부채 해소.
- **검증:** build green exit0, blues 회귀0·핀 JSON=프롬프트 바이트동일, 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·태그오염0·①이론 493~552.
- **다음:** week_11(릭 어휘 확장·프레이징 성숙).

### 2026-07-11 (백로그 12 — 네오소울 5주차 day 저작 = Month 2 착수)
- **5주차(더블스탑 b3→3 스미어):** day_1~4 × 3언어 = 12파일. D1 b3→3(F→F#) 해머온 스미어 → D2 3·6도 더블스탑 스미어 → D3 뱀프에 장식 삽입 → D4 스미어 릭(핀 고정 `smear_lick` 바이트동일). 스미어=`hammer_on`, 착지 3도=`role:"target"`+highlight.
- **결함 수정(빌드가 잡음):** day_2 `doublestop_smear`·`doublestop_loop` 마디2가 `chord[]` 대표음≠최저음(대표 string1<chord string3) 스키마 위반 → 6도 스미어를 저음 성부(string4 대표)로 재배치, 파트너 D를 chord(string2)로. 지판·산문 3언어 동기화. **커스텀 검증기에 '대표음=최저음' 규칙 추가**(w1~4 소급 통과).
- **검증:** build 883p exit0, check-invariants read-only neosoul 회귀0(삭제/변경된 neosoul 블록 0), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0·대표음 규칙 통과. ※공유 baseline은 동시 세션 드리프트(slap_funk 등 삭제됨 표시)로 커밋 미포함 — 트랙 종료 후 전체 정합 --update 예정.
- **다음:** week_6(그레이스노트 & 스미어 — 풀오프 하행 장식).

### 2026-07-11 (백로그 16 — 워킹 베이스 4주차 day 저작 = Month 1 졸업)
- **4주차(스윙 4분음 + F 블루스 12마디):** day_1~4 × 3언어 = 12파일. D1 스윙 4분음 필 → D2 12마디 전반부(F7-Bb7) → D3 후반부(C7 턴어라운드)+리허설 → D4 12마디 완주·녹음. 핀 고정 `f_blues_walk`(첫 4마디) + 전체 12마디 조립(폼 F7|Bb7|F7|F7|Bb7|Bb7|F7|F7|C7|Bb7|F7|C7). **`(M1 졸업!)`** — Month 1(코드톤·밀도램프·접근음·F블루스) 마무리.
- **검증:** build-content 격리 exit0(walking day JSON 16=M1 완성)·마디 박자합 4.0 전수·3언어 JSON 바이트동일·볼드/mark 3언어 동수·④완료줄 mark0·핀 JSON=프롬프트 바이트동일·4/5현 병행쌍·태그오염0. invariants --update 보류(동시세션 부분 build, baseline 온전).
- **다음:** Month 2(체인지 항해) — week_5(ii-V-I 워킹 Gm7-C7-Fmaj7).

### 2026-07-11 (백로그 15 — 셔플&바운스 6주차 day 저작)
- **6주차(스윙16 바운스):** day_1~4 × 3언어 = 12파일. D1 16분 그리드(1-e-&-a)+스윙16 감 → D2 네오소울 바운스 루트 라인(rest 여백) → D3 고스트+스윙16 결합 → D4 스윙16 그루브 + 핀 고정 `swing16_bounce`(E 루트+5도+b7+고스트 16분, `feel:"swing16"`, 4·5현). 네오소울/힙합 바운스.
- **검증:** 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·feel swing16·고스트 dead_note·role(5=chord_tone/b7=scale)·4·5현 병행쌍·태그오염0. **스키마·현/프렛·박자합·chord대표음 독립 정밀검증 실위반0.** (전체 `npm run build`는 동시 세션 neosoul의 chord 대표음 스키마 오류로 일시 차단 — shuffle 무관, baseline --update는 클린 창에서 일괄 반영 예정.)
- **다음:** week_7(레이백·하프타임 맛보기) ~ week_8(종합 바운스 졸업).

### 2026-07-11 (백로그 11 — 블루스 9주차 day 저작 = Month 3(심화·통합) 착수)
- **9주차(코드 따라가기):** day_1~4 × 3언어 = 12파일. D1 A7 착지 → D2 D7 착지 → D3 A7↔D7 오가며 착지 → D4 코드 따라가기 통합(핀 고정 `chord_targeting`). 착지목표=`role:"target"`+`highlight:true`(초록). 박스1 안 코드 반응만 — 전 지판 시스템은 solo_scale 핸드오프 명시.
- **검증:** build-content blues day 36 정상·check-invariants blues 삭제0(회귀0)·blues w9 신규 20블록, 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0·①이론 513~529. (동시 세션 미완성이 full-build 지속 차단 → w8·w9 baseline은 다음 green 창 일괄 갱신.)
- **다음:** week_10(메이저/마이너 'BB' 색).

### 2026-07-11 (백로그 16 — 워킹 베이스 3주차 day 저작)
- **3주차(접근음 — 타겟&어프로치):** day_1~4 × 3언어 = 12파일. D1 크로매틱 접근(다음 코드 루트 반음 위/아래) → D2 스케일·도미넌트 접근 → D3 4박에 접근음 → D4 접근음 워킹 F7↔Bb7(핀 고정 `approach_walk` 2마디, 4·5현). 접근/경과음=`role:"passing"`+음이름 label. 매 1박 착지·4박 다리.
- **검증:** build-content 격리 exit0(walking day JSON 12)·마디 박자합 4.0·3언어 JSON 바이트동일·볼드/mark 3언어 동수·④완료줄 mark0·핀 JSON=프롬프트 바이트동일·4/5현 병행쌍·태그오염0·①이론 525~574. invariants --update 보류(동시세션 부분 build, baseline 온전·클린 build 시 가법).
- **다음:** week_4(스윙 4분음 + F 블루스 12마디, M1 졸업).

### 2026-07-11 (백로그 15 — 셔플&바운스 5주차 day 저작 = Month 2(바운스) 착수)
- **5주차(고스트노트 바운스):** day_1~4 × 3언어 = 12파일. D1 데드노트 "칙"(왼손 살짝 얹어 음정없이) → D2 루트+고스트 교대(둥-칙) → D3 뮤팅으로 공간 만들기 → D4 고스트 그루브 + 핀 고정 `ghost_bounce`(E 루트+고스트 8분, 4·5현). **`technique:"dead_note"` 첫 사용**(고스트=role:scale 무색), Month 2(바운스) 진입.
- **검증:** build 805p exit0(셔플 day 20, 동시 세션 빌드창 포착), check-invariants 신규 14블록·회귀0(baseline 1078로 --update), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·고스트 dead_note·4·5현 병행쌍·태그오염0. (스키마·현/프렛 범위·박자합 독립 정밀검증 실위반0.)
- **다음:** week_6(스윙16 바운스) ~ week_8(종합 바운스 졸업).

### 2026-07-11 (백로그 12 — 네오소울 4주차 day 저작 = Month 1(보이싱&무브먼트) 졸업)
- **4주차(보이스 리딩 & 탑노트 멜로디):** day_1~4 × 3언어 = 12파일. D1 보이스 리딩(공통음 유지·최소 이동) → D2 탑노트 인식 → D3 탑노트 멜로디 라인 → D4 코드+탑노트 멜로디 뱀프(핀 고정 `top_note_melody` 바이트동일). 탑노트 강조=`role:"target"`+`highlight`(초록)·경과=`role:"scale"`. day_4 `(M1 졸업!)`/`(Month 1 complete!)`/`（M1修了！）` 3언어.
- **검증:** build 805p exit0, check-invariants read-only neosoul 회귀0(변경/삭제된 neosoul 블록 0), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0. baseline은 동시 세션 순서 churn 회피 위해 day만 커밋(회귀는 read-only로 확인, 최종 정합 예정).
- **M1(보이싱&무브먼트) 졸업:** Dm9·G13 코어그립 → 텐션 → 크로매틱 접근 → 탑노트 멜로디. 다음 M2 week_5(더블스탑 b3→3 스미어).

### 2026-07-11 (백로그 11 — 블루스 8주차 day 저작 = Month 2(표현 리드) 졸업)
- **8주차:** day_1~4 × 3언어 = 12파일. D1 대표 릭1(벤딩) → D2 릭2(하행 착지) → D3 릭을 12마디 배치 → D4 첫 솔로 완주·녹음(핀 고정 `signature_lick`, `(M2 졸업!)`). Month 2(박스1·블루노트·벤딩·프레이징) 마무리 — 12마디 위 첫 솔로.
- **검증:** build-content blues day 32 정상(스키마·박자합 통과)·check-invariants blues 삭제0(회귀0)·blues w8 신규 20블록, 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0·①이론 521~543. (동시 세션 neosoul w4 미완성이 full-build 간헐 차단 → baseline --update는 다음 green 창에서 w8 포함 갱신.)
- **다음:** Month 3(심화·통합) — week_9(코드 따라가기).

### 2026-07-11 (백로그 16 — 워킹 베이스 2주차 day 저작)
- **2주차(뼈대→라인, 밀도 램프):** day_1~4 × 3언어 = 12파일. D1 루트만(온음표) → D2 루트+5도(2분음) → D3 코드톤 아르페지오(4분음) → D4 F7→Bb7 아르페지오 워킹(핀 고정 `arp_walk` 2마디, 4·5현). 밀도 한 단계씩 상향, 매 마디 1박 루트 착지.
- **검증:** build-content 격리(walking+완성트랙) exit0(walking day JSON 8)·마디 박자합 4.0·3언어 JSON 바이트동일·볼드/mark 3언어 동수·④완료줄 mark0·핀 JSON=프롬프트 바이트동일·4/5현 병행쌍·태그오염0·①이론 627~685. invariants는 동시세션 부분 build로 src/content 잔해 → --update 보류(baseline 온전), walking baseline은 클린 build 시 정합(가법).
- **다음:** week_3(접근음 — 크로매틱·스케일·도미넌트).

### 2026-07-11 (백로그 15 — 셔플&바운스 4주차 day 저작 = Month 1(셔플) 졸업)
- **4주차(턴어라운드 → 12마디 셔플 완주):** day_1~4 × 3언어 = 12파일. D1 턴어라운드(V-IV-I-V) → D2 다이내믹·필(마지막 박 8분 변주) → D3 12마디 전체 리허설 → D4 12마디 셔플 블루스 완주·녹음(핀 고정 `turnaround` B7-A7-E7-B7 4마디, `(M1 졸업!)`). Month 1(셔플·부기·12마디·턴어라운드) 마무리.
- **검증:** build 766p exit0(셔플 day 16, 백그라운드 재시도로 동시 세션 빌드창 포착), check-invariants 신규 12블록·회귀0(baseline 동시 세션 커밋에 이미 가법 포함), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·부기 role 프롬프트 그대로·4·5현 병행쌍·태그오염0. (스키마·현/프렛 범위 독립 정밀검증 실위반 0.)
- **다음:** Month 2(바운스) — week_5(고스트노트 바운스).

### 2026-07-11 (백로그 12 — 네오소울 3주차 day 저작)
- **3주차(크로매틱 접근):** day_1~4 × 3언어 = 12파일. D1 Ab13 그립(G13 폼+1프렛, `fretboard_diagram`) → D2 Ab13→G13 반음 슬라이드(`technique:"slide"`+`slideToFret`) → D3 뱀프 삽입(Dm9→Ab13→G13) → D4 크로매틱 접근 뱀프(핀 고정 `chromatic_approach` 바이트동일).
- **검증:** build 763p exit0, check-invariants neosoul 회귀0(변경/삭제된 neosoul 블록 0, 전부 추가), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0. ※baseline은 동시 세션(shuffle) 실시간 수정으로 순수가법 아니라 이 커밋에 미포함 — neosoul 블록은 peer --update가 반영(자가치유), 트랙 종료 시 정합 커밋 예정.
- **다음:** week_4(보이스 리딩 & 탑노트 멜로디 — M1 졸업).

### 2026-07-11 (백로그 11 — 블루스 7주차 day 저작: 프레이징·콜앤리스폰스·여백)
- **7주차:** day_1~4 × 3언어 = 12파일. D1 짧은 프레이즈 → D2 콜앤리스폰스(질문↔대답) → D3 여백 두기(`rest`) → D4 프레이징 통합(핀 고정 `call_response`). 질문=4도 열림, 대답=근음 착지.
- **검증:** build green exit0, check-invariants 삭제전용키 0(회귀0)·blues w7 신규 20블록(baseline→985), 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0·①이론 510~595. (동시 세션 미완성 트랙이 full-build를 간헐 차단 → blues는 build-content 독립 통과로 day 선커밋, green 창에서 baseline 확정.)
- **다음:** week_8(박스1 릭 어휘 → 첫 12마디 솔로·M2 졸업).

### 2026-07-11 (백로그 16 — 워킹 베이스 1주차 day 저작)
- **1주차(코드톤 파악):** day_1~4 × 3언어 = 12파일. D1 F7 코드톤(R-3-5-b7)+지판 → D2 Bb7·C7 코드톤(손모양 이동) → D3 코드톤 4분음 오르내리기(아르페지오 워킹) → D4 F7 아르페지오 핀 고정 + F7·Bb7·C7 지판 병기. 키 F·스윙 4분음(`feel:"swing8"`). 코드톤=밟아도 되는 안전한 돌.
- **검증:** build-content 격리(walking+완성트랙) exit0(walking day JSON 4)·마디 박자합 4.0·3언어 JSON 바이트동일·볼드/mark 3언어 동수·④완료줄 mark0·핀 JSON=프롬프트 바이트동일·4/5현 병행쌍·태그오염0·①이론 516~627. check-invariants 신규 46블록·회귀0(baseline 가법, walking만).
- **다음:** week_2(뼈대→라인, 밀도 램프).

### 2026-07-11 (백로그 12 — 네오소울 2주차 day 저작)
- **2주차(텐션으로 물들이기):** day_1~4 × 3언어 = 12파일. D1 add9·m9의 9도 색 → D2 11·13 텐션 → D3 sus4 긴장→3도 해결(G13sus4→G13, half+half) → D4 텐션 뱀프(핀 고정 `tension_vamp` 프롬프트 바이트동일). 텐션(9·11·13·sus4)=`role:"color"`.
- **검증:** build 718p exit0, check-invariants 회귀0(neosoul w2 20블록 baseline 반영 — 동시 세션 커밋 가법 포함), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0.
- **다음:** week_3(크로매틱 접근 — Ab13→G13 슬라이드).

### 2026-07-11 (백로그 15 — 셔플&바운스 3주차 day 저작)
- **3주차(12마디 셔플 I-IV-V):** day_1~4 × 3언어 = 12파일. D1 IV(A7) 부기 이동(A 루트=3번현 개방) → D2 V(B7) 부기 이동 → D3 12마디 순회(코드 전환) → D4 12마디 셔플 라인 + 핀 고정 `boogie_move`(E7→A7, 4·5현). 산문에 12마디 폼(E7-A7-E7…B7) 제시, 부기 폼을 I·IV·V로 이동. 부기 role 프롬프트 그대로.
- **검증:** build 718p exit0(셔플 day 12), check-invariants 신규 16블록·회귀0(baseline 동시 세션 커밋에 이미 가법 포함), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·4·5현 병행쌍·태그오염0.
- **다음:** week_4(턴어라운드 → 12마디 셔플 완주·M1 졸업).

### 2026-07-11 (백로그 11 — 블루스 6주차 day 저작: 표현적 벤딩·비브라토·슬라이드)
- **6주차:** day_1~4 × 3언어 = 12파일. D1 반음·온음 벤딩 → D2 비브라토(손목) → D3 슬라이드 → D4 표현 릭 통합(핀 고정 `bend_lick`). **배포 콘텐츠 최초 bend/slide/vibrato 사용**(`technique:"bend"`+`bendTarget` half/full·`slide`+`slideToFret`·`vibrato`).
- **검증:** build green 715p exit0(동시 세션 미완성 트랙이 잠시 막았으나 green 창 확보), check-invariants 삭제전용키 0(회귀0)·blues w6 신규 23블록(baseline→904), 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0·①이론 498~536.
- **★dist 글리프 확인:** blues m2/w6 d1 벤딩 `full`×2·`½`×2, d4 핀 `full`×3 렌더 확인 — VexFlow staff+tab에서 벤딩 화살표·슬라이드 정상(백로그 02-A 엔진 검증의 첫 실콘텐츠 투입).
- **다음:** week_7(블루스 프레이징 — 콜앤리스폰스·여백).

### 2026-07-11 (백로그 12 — 네오소울 1주차 day 저작)
- **1주차(코어 그립 Dm9·G13):** day_1~4 × 3언어 = 12파일. D1 Dm9(x5355x) 그립 `fretboard_diagram` → D2 G13(3x345x) 그립 → D3 Dm9↔G13 전환(새끼손가락 앵커) → D4 Dm9→G13 뱀프(핀 고정 `vamp_grips` 프롬프트 바이트동일). 루트리스 중음역 보이싱, 텐션(9·13)=`role:"color"`·`notation:"staff+tab"`.
- **검증:** build 667p exit0, check-invariants 신규 10블록·회귀0(baseline 813, neosoul만 201+/0−), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0.
- **다음:** week_2(텐션으로 물들이기 — sus4→3 해결).

### 2026-07-11 (백로그 16 — 워킹 베이스 준비물 + 프롬프트 보강, /goal 착수)
- **준비물:** meta.json(level 3·키 F·재즈/블루스 하모니 캡스톤·섬네일 walking-bass.webp=bass_curriculum1) + overview 30(month 2×3 + week 8×3). intro 3언어 볼드12·mark4 서로 다른 위치·겹침0, 파일별 3언어 볼드/mark 동수·bullet mark0·금지어0.
- **프롬프트 보강(day 저작 전):** W2~8 지판 '병기 가능'→'권장(주당 최소 1블록)'(W1 필수 유지), W7·8 고스트=dead_note+role:scale·label생략 명시, W6 enclosure 오해방지 주.
- **검증:** build-content 격리(walking+완성트랙) exit0 — walking 발견·meta 파싱·'day 없어 스킵' 정상(전역 build는 동시세션 neosoul 미완성으로 무관 실패). 커밋 35e0427(준비물 32파일).
- **다음:** week_1(코드톤 F7·Bb7·C7) day 저작부터 순차.

### 2026-07-11 (백로그 15 — 셔플&바운스 2주차 day 저작)
- **2주차(부기 워크 R-5-6-b7):** day_1~4 × 3언어 = 12파일. D1 루트+5도 R-5 셔플 → D2 부기 상행 R-5-6-b7(`fretboard_diagram` 병기) → D3 부기 왕복(상·하행) → D4 E 부기 셔플 그루브 + 핀 고정 `e_boogie`(4·5현). 부기 role은 프롬프트 그대로 **R=root/5·6=chord_tone/b7=scale**(색 유지·변경 없음). `feel:"swing8"`.
- **검증:** build 664p exit0(셔플 day 8), check-invariants 신규 16블록·회귀0(baseline 동시 세션 커밋에 이미 가법 포함), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·4·5현 병행쌍·태그오염0.
- **다음:** week_3(12마디 셔플 I-IV-V) ~ week_8(종합 바운스 졸업).

### 2026-07-11 (백로그 11 — 블루스 5주차 day 저작 = Month 2(표현 리드) 착수)
- **5주차(마이너 펜타 박스1 + 블루노트):** day_1~4 × 3언어 = 12파일. D1 박스1(`scale_shape`) → D2 블루노트 b5(`role:"blue_note"` 보라) → D3 박스1 짧은 프레이즈 → D4 블루스 스케일 통합(핀 고정 `a_blues_box1`). **`scale_shape`·`blue_note` 첫 사용**(dist 렌더 확인).
- **검증:** build exit0(blues day 20), check-invariants 삭제전용키 0(회귀0)·신규 18블록(blues w5), 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0·①이론 510~557. (baseline diff에 동시세션 neosoul·shuffle_bounce 블록 포함 — 가법.)
- **다음:** week_6(표현적 벤딩·비브라토·슬라이드 — 배포 콘텐츠 최초 bend/slide 사용).

### 2026-07-11 (백로그 12 — 네오소울 준비물 + 프롬프트 지판 강도 통일, /goal 착수)
- **프롬프트 하드닝:** `neosoul_voicing_2months` 주차 프롬프트 8개 지판 병기 강도 통일 — W2·W3 '병기'·W4~8 '병기 가능'을 W1과 동일 강도(`fretboard_diagram` 반드시 병기·주당 최소 1개·손모양 각인)로 상향. M1↔M2 지판 밀도 격차 방지, 손모양 대상은 주차 소재로 구체화. 핀고정 JSON·박자합 무손.
- **준비물:** meta.json(기타·level3·2개월·intro 볼드≠<mark> 분리·3언어 bold11/mark3 일치) + overview 30파일(month_1·2 + week_1~8 × ko/en/ja, blues 헤딩 구조·각 week_N_prompt 정합·3언어 볼드/mark 개수 전량 일치) + 섬네일 `curriculum10.jpg`→`neosoul-voicing.webp`(1200×800·q72·30.1KB, MAP 항목 추가·기존 webp 바이트 불변).
- **검증:** build 631p exit0(트랙 발견·meta·overview 파싱 OK, day 없어 페이지 스킵=정상). 커밋 2개(프롬프트 하드닝 / 준비물).
- **다음:** week_1(코어 그립 Dm9·G13) ~ week_8(종합·네오소울 졸업) day 저작 /goal 순차.

### 2026-07-11 (버그픽스 — 셋잇단음 빔 그룹핑: 2음씩 → 3음씩, staff.ts)
- **증상:** 3잇단음("3" 마커는 정상)이 빔으로 **2음씩** 묶여 셋잇단음처럼 안 보임(재현: `shuffle_bounce_bass_2months/m1/w1/d1` "Triplet grid").
- **원인:** `staff.ts` `buildMeasure` 빔 flush 가 **박 경계(`pos % beatInt`, nominal duration)** 기준 → 8분 3잇단(nominal 6단위)이 2음(=4단위=1박)에서 잘림.
- **수정:** 잇단음 음표는 빔·튜플렛을 **잇단음 그룹(num개) 단위**로 flush, pos 는 그룹 완료 시 실제 점유 span(`inSpaceOf×unit`)만큼 전진(후속 음 박 정합 유지). 스트레이트 8·16분 빔은 기존 박경계 flush 불변. 백로그 02(잇단음 C) 후속 버그픽스.
- **검증:** build exit 0 · `check-invariants` 회귀 0(SVG 레이아웃만·콘텐츠 지문 무관) · 셔플 레슨 빔 마디당 6→4(=박당 1빔=3잇단). 육안(3잇단 3음 묶임)은 배포 후 확인.

### 2026-07-11 (백로그 15 — 셔플&바운스 1주차 day 저작)
- **1주차(트리플렛 + 셔플 루트 펄스):** day_1~4 × 3언어 = 12파일. D1 트리플렛 그리드(`tuplet:{num:3,inSpaceOf:2}`)·E 루트 위치 `fretboard_diagram` → D2 스트레이트→스윙 롱-숏(가운데 음 빼기, `rest`) → D3 셔플 루트 펄스 메트로놈(swing8) → D4 2코드 위 셔플 루트 + 핀 고정 `shuffle_root_pulse`(4·5현). `feel:"swing8"`·`notation:"staff+tab"` 실사용.
- **검증:** build 628p exit0(셔플 day 4), check-invariants 신규 20블록·회귀0(baseline 761 — 동시 세션 블루스 커밋에 이미 가법 포함), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·4·5현 병행쌍·태그오염0.
- **다음:** week_2(부기 워크 R-5-6-b7) ~ week_8(종합 바운스 졸업).

### 2026-07-11 (백로그 11 — 블루스 4주차 day 저작 = Month 1(리듬) 졸업)
- **4주차(턴어라운드 → 12마디 셔플 완주):** day_1~4 × 3언어 = 12파일. D1 턴어라운드(V-IV-I-V) → D2 인트로/엔딩 태그 → D3 12마디 리허설 → D4 12마디 셔플 완주·녹음(핀 고정 `turnaround`, `(M1 졸업!)`). Month 1(셔플·부기·12마디·턴어라운드) 마무리.
- **검증:** build exit0(blues day 16), check-invariants 삭제전용키 0(순수 순서변동)·신규 20블록(blues w4)·회귀0, 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0. (baseline diff에 동시 세션 shuffle_bounce 20블록 포함 — 가법.)
- **다음:** Month 2(표현 리드) — week_5(마이너 펜타 박스1 + 블루노트).

### 2026-07-11 (백로그 15 착수 — 셔플&바운스 베이스 준비물: meta·이미지·overview)
- **범위:** `shuffle_bounce_bass_2months`(베이스·2개월·8주·level2) day 저작 착수 준비물 완비(day 문서는 다음 단계, /goal 주차별 순차). 오른손 핑거스타일·4·5현 병행·키 E.
- **meta.json 생성:** id/title·tagline·forWho·intro(3언어)/instrument:"bass"/level:2/durationMonths:2/tags/image. ★intro 볼드(용어·수치)≠하이라이트(`<mark>`, 약속·성과) 분리, 3언어 볼드 10·mark 4 정확 일치·겹침 0. 관통 철학("박자는 격자가 아니라 삼각형 — 롱-숏으로 굴리면 그루브가 튄다") 반영.
- **overview 30파일:** month_1~2 + week_1~8 × ko/en/ja. slap_funk 트랙 헤딩 구조 템플릿, 각 주차 프롬프트와 정합(M1 셔플: 트리플렛→부기 R-5-6-b7→12마디 I-IV-V→턴어라운드졸업 / M2 바운스: 고스트→스윙16→레이백→종합졸업). 전 30파일 3언어 볼드·mark 개수 일치·겹침 0·언어오염 0·dayKey(m1.w1~m2.w8) 정확.
- **대표 이미지:** `bass_curriculum5.jpg`(핑거보드 운지)→`shuffle-bounce-bass.webp`(1200×800·q72·15.2KB). optimize-curriculum-images MAP 추가, 기존 webp 6개 md5 바이트 불변. meta.json image 참조.
- **검증:** `cd web_app && npm run build` exit 0(601p, 셔플 트랙 발견·meta 파싱 OK, day 없어 라우팅 스킵=정상). web_app 코드 무변경(스크립트 MAP 1줄·webp만).
- **다음:** week_1(트리플렛·셔플 루트펄스) ~ week_8(종합 바운스 졸업) day 저작.

### 2026-07-11 (악보 렌더 다듬기 — 지판 개방현 마크 · 오선보 스윙/템포 겹침)
- **지판 개방현/뮤트 마크 위치(2건, `fretboard.ts`):** ① 개방현(○)·뮤트(✕) 마크가 왼쪽 거터 `x=22`에 있어 계이름(stringName `x≈14`)과 겹쳐 **계이름을 가리던 것** 수정 → `OPEN_MUTE_X` 상수로 넛 쪽 이동. ② 이어서 계이름–넛 사이 **시각 중앙으로 균형**(`PAD_L-14`, 계이름 여유 5.5px·넛 여유 7.5px, "Am:R" 최장 label 넛 미침범). 개방현/뮤트 있는 전 지판(기타·베이스·스케일·코드) 일괄 적용. `check-invariants` 회귀 0(좌표는 데이터 지문 무관).
- **오선보 단일 마디 스윙↔템포 겹침(`staff.ts`, 백로그 17 부수이슈):** `meta.feel`(swing)+`tempoBpm`+전체 1마디면 "Swing …"(상단 중앙)과 `♩=bpm`(좌상단)이 좁은 스테이브에서 겹치던 것 수정 → `swingTempoOverlap` 판정 시 `trebleDy +30`(스테이브 하향·상단 공간 확보) + `setText shift_y -34`(스윙 위로)로 세로 분리(간격 38px). 2마디+·feel/tempo 없음은 불변(스윙 높이 정합 보존). 재현: `blues m1w1d3`.
- **검증:** `astro check` 0e · `build` · 각 래스터 육안(겹침·잘림 해소) · check-invariants 기존 블록 회귀 0.

### 2026-07-11 (백로그 11 — 블루스 3주차 day 저작 + 2·3주차 ①이론 보강)
- **3주차(리듬 변주 — 9th·스톱타임·다이내믹):** day_1~4 × 3언어 = 12파일. D1 9th 코드 A9(`fretboard_diagram`, 텐션음 `role:"color"` 노랑) → D2 스톱타임(`rest:true` 침묵) → D3 다이내믹(세게·여리게·백비트) → D4 변주 통합(핀 고정 `stoptime_a7`).
- **①이론 밀도 보강(2·3주차):** 초기 저작분의 ①국어 분량이 배포 트랙(funk/beginner) 최저선보다 얇아(week_2 299~427), 산문만 확장해 480~552(공백제외)로 상향. ②③④·악보 JSON·완료기준 무변경, 볼드/mark 3언어 일치·JSON 바이트동일 보존. (이후 주차는 위임 시 분량 기준 강화.)
- **검증:** build 601p exit0(blues day 12), check-invariants 신규 16블록·회귀0(baseline→721), 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0.

### 2026-07-11 (백로그 17 v2 구현 — 악보 세로 줄바꿈@280 + 스크롤 스코핑 버그 수정)
- **결정적 버그 수정(핵심):** v1의 "스크롤 폴백"이 **처음부터 작동 안 했다** → 계속 "잘림"으로 보인 진짜 원인. `hydrateScoreSlots`가 악보를 `set:html`로 주입해 `.render-mount` 요소에 Astro 스코프 속성이 안 붙는데, `.render-mount{overflow-x:auto}`·`.staffsvg{width:100%}`가 스코프 셀렉터로 컴파일돼 **매칭 실패** → 전역 `.render-area{overflow:hidden}`이 그냥 잘랐다. **수정: 해당 규칙 `:global()` 전환**(`LessonView.astro`). 성긴 악보의 모바일 축소(width:100%)도 이제야 작동.
- **v2 세로 줄바꿈 구현(`staff.ts`):** `TARGET_ROW_W 560→280`(실측 knee), 2마디 고정 쌍 폐기 → **마디 그리디 패킹**(마디 온전·mid-measure 걸침 0). 모든 SVG `max-width:{자연폭}`(데스크톱 확대 금지) + **over-wide score만 `min-width`**(좁은 화면 가로 스크롤) + `.render-mount.scrollable` 우측 페이드 힌트("→ 더 있음").
- **실측 근거:** 706 고유 마디 계측 — 92px 고정 크롬 탓 폰 note-area 204~234px, 전형 마디 260~280 집중, 280에서 스크롤 22%(knee, funk 16분·slap·팜뮤트 비가역 밀집에 집중). 상세 = `05_update_backlog/17_staff-overflow.md §v2`.
- **불변:** 콘텐츠 JSON·악보 지문 무관(순수 레이아웃) → `check-invariants` 회귀 0, baseline 갱신 불요. tab.ts·fretboard 무변경.
- **검증:** `npm run build` exit 0 · `check-invariants` 회귀 0 · 컴파일 CSS에 `data-astro` 스코프 render-mount 규칙 0건 확인. **육안(모바일/PC)은 라이브 배포 후 진행 — funk m1w4·slap·electric m1w3 밀집 마디 스크롤+페이드, 성긴 마디 축소로 온전.**

### 2026-07-11 (신규 커리큘럼 주차 프롬프트 저작 — 11·12·15·16 + 결함 5종 방지)
- **프롬프트 파이프라인 완성:** 신규 커리큘럼 4종의 주차 프롬프트를 저작·검증·핀 고정 → **프롬프트만 남은 트랙 0개**(전부 day 저작 단계로).
  - **15 셔플&바운스**(8주) — M1 셔플(트리플렛→swing8·부기 R-5-6-b7·E 12마디 블루스) / M2 바운스(고스트·swing16·레이백). 핑거스타일·4/5현 병행.
  - **12 R&B/네오소울**(8주·설계 상세화+프롬프트) — level 3 캡스톤. 뱀프 Dm9(x5355x)→G13(3x345x). M1 보이싱&무브먼트(그립·텐션 sus해결·크로매틱 접근 Ab13→G13·탑노트 멜로디) / M2 장식&그루브(b3→3 스미어·풀오프·레이백 스윙16 커팅·종합). 텐션=role:color.
  - **16 워킹 베이스**(8주·설계 상세화+프롬프트) — level 3 재즈 캡스톤. F키. 밀도 램프(루트→루트5→코드톤→접근음). M1 뼈대(코드톤·F블루스 12마디 워킹) / M2 항해(ii-V-I Gm7-C7-Fmaj7·크로매틱 enclosure·장식필·오리지널 턴어라운드). 접근음=role:passing. 4/5현 병행(5현 저역 확장).
  - **11 블루스** — 프롬프트 12개 **하드닝**(결함 5종 방지 "필수 규칙" 블록 삽입) + **meta.json 생성**(intro 볼드≠하이라이트 분리, 3언어 bold/mark 개수 일치).
- **★결함 5종 방지 규칙을 모든 프롬프트에 내장**(과거 day 재작업 원인 차단): ①볼드 필수(①②③ 산문) ②지판(fretboard_diagram) 병기 ③④·완료기준 `<mark>` 금지 ④day-끝 라벨 3언어(오늘의 완료 기준/Done when/今日の完了基準) ⑤금지어("왕초보") + i18n 악보 바이트 동일·4단 헤딩 정확.
- **검증:** 트랙별 핀 고정 완성물 JSON 전량 **마디 박자합 4.0**·현범위·기법 화이트리스트·role(color/passing 포함)·(베이스)튜닝·필수규칙 블록 스크립트 확인. **web_app 무변경**(프롬프트·설계 단계).
- **다음:** 11(진행 중)·12·15·16 day 저작 → build·박자합·invariants.

### 2026-07-11 (백로그 11 — 블루스 2주차 day 저작 + 대표 섬네일)
- **2주차(12마디 폼 + 도미넌트7 + 퀵체인지):** day_1~4 × 3언어 = 12파일. D1 도미넌트7 세 코드(A7·D7·E7 `fretboard_diagram`) → D2 부기를 D7·E7로 이동 → D3 12마디 순회(퀵체인지) → D4 부기 이동 A7→D7(핀 고정). 코드 스트로크·더블스탑 `chord[]` 활용.
- **대표 섬네일:** `curriculum9.jpg`(선버스트 스트랫 피킹, 사용자 확정)→`blues.webp`(1200×800·q72·28.4KB). optimize-images MAP 추가, 기존 6 webp 바이트 불변. meta.json image 이미 참조 → 카드 노출.
- **검증:** build 589p exit0(blues day 8), check-invariants 신규 18블록·회귀0(baseline→705), 볼드/mark 3언어 일치·JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0.

### 2026-07-11 (백로그 11 착수 — 블루스 준비물 + 1주차 day 저작, /goal 순차)
- **준비물:** `blues_3months`(기타·3개월·level2) meta.json은 프롬프트 하드닝 커밋(4ac8149)에서 생성 완료 → 이번엔 **month_1~3 + week_1~12 overview 45파일**(ko/en/ja) 신규 저작. 최신 기타 트랙(funk_rhythm) 구조 채택, 3언어 볼드·mark 개수 전량 일치·언어 오염 0.
- **1주차(셔플 필 + A7 부기 리프):** day_1~4 × 3언어 = 12파일. D1 셔플 필(롱-숏) → D2 더블스탑 손모양(fretboard_diagram) → D3 부기 리프 R-5-6-b7 → D4 A7 셔플 부기 2마디(핀 고정). `feel:"swing8"`·`notation:"staff+tab"` 실사용.
- **검증:** build 562p exit0(blues day 4), check-invariants 신규 17블록·회귀0(baseline→687), 볼드/mark 3언어 일치·악보 JSON 3언어 바이트동일·④/완료줄 mark0·핀 JSON=프롬프트 바이트동일·태그오염0.
- **다음:** week_2(12마디 폼 + 도미넌트7) ~ week_12(리듬↔리드 대화·졸업).

### 2026-07-11 (랜딩 — 완료 커리큘럼 맨 아래로 정렬, 사용자별 진도 기반)
- **동작:** 사용자가 어떤 커리큘럼의 **전체 진도를 완료**(완료 Day 수 ≥ totalDays)하면, 그 사용자의 랜딩 목록에서 해당 카드가 **맨 아래로** 내려간다. 미완료는 기존 `level` 오름차순 유지, 완료끼리는 상대 순서 유지. 완료 카드가 전부 리스트 끝으로 몰리므로 **악기 필터(기타/베이스)와 무관하게** 각 뷰에서 "미완료 먼저·완료 나중"이 성립.
- **구현:** `HomeView.astro` 카드에 `data-curriculum`·`data-total-days` 추가. **FOUC 방지 인라인 스크립트**(하단, `gh_state` 직접 읽기)가 첫 페인트 전 완료 카드를 `#currList` 끝으로 `appendChild` → 하드 로드 깜빡임 0. `app.ts` `reorderCompletedCurricula(state)`(`getCompletedSet` 사용)가 `onPageLoad`(astro:page-load)마다 idempotent 재적용 → soft-nav(레슨 완료 후 홈 복귀)도 즉시 반영.
- **불변:** 빌드타임 정렬(단계 1 `level` 오름차순)은 그대로, 이건 그 위의 **사용자별 클라이언트 DOM 재배치**일 뿐(콘텐츠 무관). 로그인/서버 없이 localStorage 진도로만 판정(Zero-Cost).
- **검증:** `astro check` 0 errors · `npm run build` exit 0 · `check-invariants` 회귀 0 · dist 카드 `data-curriculum`/`data-total-days` + 인라인 재정렬 스크립트 확인.

### 2026-07-11 (백로그 14 **완료** — 슬랩/펑크 8주차 day 저작 = **트랙 졸업**)
- week_8(옥타브·고스트·싱코·팝핑 종합 → 클래식 펑크 슬랩 그루브 곡 완성·녹음, 2마디) day_1~4 × 3언어=12파일. 핀고정 funk_slap_graduation 4·5현 바이트 동일. build 562p exit 0, invariants 신규 30블록·회귀0(baseline 600→630), day_4 (슬랩/펑크 졸업!) 3언어 라벨·다음 트랙(셔플&바운스·워킹) 다리.
- **백로그 14 완료:** slap_funk_bass_2months 2개월·8주·32일 × 3언어 = **96 day 파일** 전량 저작·검증·커밋·push 완료. 옥타브 슬랩(M1) → 16싱코·레가토·팝핑·졸업(M2). slap_thumb/slap_pop/dead_note·hammer_on/pull_off·chord[] 더블스탑 전 활용, 4·5현 병행.

### 2026-07-11 (백로그 14 — 슬랩/펑크 7주차 day 저작)
- week_7(팝핑 멜로디·더블스탑 chord[]·더블썸 맛보기) day_1~4 × 3언어=12파일. 핀고정 popping_melody 4·5현 바이트 동일. build 550p exit 0, invariants 신규 30블록·회귀0(baseline 570→600), 4·5현 병행·slap·볼드/mark 3언어 일치.

### 2026-07-11 (백로그 14 — 슬랩/펑크 6주차 day 저작)
- week_6(해머온/풀오프 레가토 → E 마이너 펜타토닉 슬랩 릭) day_1~4 × 3언어=12파일. 핀고정 pentatonic_slap_lick 4·5현 바이트 동일. build 538p exit 0, invariants 신규 30블록·회귀0(baseline 540→570), hammer_on/pull_off 첫 활용, 4·5현 병행·slap·볼드/mark 3언어 일치.

### 2026-07-10 (백로그 14 — 슬랩/펑크 5주차 day 저작 = **Month 2 착수**)
- week_5(16비트 싱코페이션 — 16 그리드에 T/P/고스트 배치, 당김음 그루브) day_1~4 × 3언어=12파일. 핀고정 sixteenth_synco 4·5현 바이트 동일. build 526p exit 0, invariants 신규 30블록·회귀0(baseline 510→540), 4·5현 병행·slap·볼드/mark 3언어 일치.

### 2026-07-10 (백로그 14 — 슬랩/펑크 4주차 day 저작 = **Month 1 졸업**)
- week_4(옥타브+고스트 결합 → 옥타브 슬랩 그루브 곡 완성) day_1~4 × 3언어=12파일. 핀고정 octave_ghost_song 4·5현 바이트 동일. build 514p exit 0, invariants 신규 18블록·회귀0(baseline 510), 4·5현 병행·slap·볼드/mark 3언어 일치. M1(썸→팝→옥타브→고스트) 마무리, day_4 (1개월차 졸업!) 표기.

### 2026-07-10 (백로그 14 — 슬랩/펑크 3주차 day 저작)
- week_3(고스트 & 뮤팅 — dead_note로 "칙" 채우기) day_1~4 × 3언어=12파일. 핀고정 ghost_octave_groove 4·5현 바이트 동일. build 502p exit 0, invariants 신규 22블록·회귀0(baseline 492), 4·5현 병행·slap·볼드/mark 3언어 일치.

### 2026-07-10 (백로그 14 — 슬랩/펑크 2주차 day 저작)
- week_2(T-P 코디네이션·옥타브 모양·첫 슬랩 그루브) day_1~4 × 3언어=12파일. 핀고정 octave_groove_rough 4·5현 바이트 동일. build 490p exit 0, invariants 신규 24블록·회귀0(baseline 470), 4·5현 병행·slap·볼드/mark 3언어 일치.

### 2026-07-10 (백로그 14 — 슬랩/펑크 베이스 준비물 + 1주차 day 저작, /goal 순차)
- 준비물: `slap_funk_bass_2months`(2개월·level2) 프롬프트 8개 강화(볼드·지판)·meta·overview 30·이미지. 1주차(썸&팝) day_1~4 × 3언어=12파일.
- slap_thumb/slap_pop/dead_note 첫 활용 — dist에 T/P 글리프 렌더(10-B2·백로그 05 초록 테마 실동작). 핀고정 tp_alternation 4·5현 바이트 동일.
- 검증: build 478p exit 0, invariants 신규 24블록만 추가·기존 지문 값 변경 0(baseline 446), 4·5현 병행·볼드/mark 3언어 일치.
- 다음: week_2~8(M1 옥타브 그루브 → M2 펑크 응용·졸업).

### 2026-07-10 (백로그 05 완료 — 악기 세그먼트 토글 + 베이스 연초록 액센트 테마 + View Transition)
- **단계 1(순서 위생):** `build-content.mjs` `CURRICULUM_ORDER` 하드코딩 제거 → `meta.json` **`level` 오름차순** 정렬(쉬운 코스 상단, 동률=id 이름순 안정). 별도 `order` 필드 없음. `content.config.ts` 경고 정합 정리. manifest 순서 = beginner_bass·beginner_electric(1) → chord·funk·solo(2).
- **단계 2(세그먼트 토글 + hero 스왑 + 기억):** 랜딩 필터에서 **'전체' 칩 제거** → `[기타][베이스]` 2개(기본 기타). `home.title` i18n을 `{guitar,bass}` 로 분화(3언어, 베이스=악기 단어만 치환), leaf 참조 3곳(pages/index·[lang]/index·HomeView) 수정. hero `<h1>`에 `data-title-guitar/bass` 노출 → 토글 시 `innerHTML` 스왑. 선택 악기 **`riff_instrument` localStorage 기억**(`storage.ts` 래퍼, `config.ts` 키).
- **단계 3(초록 테마 + 악보 클램프 + VT):** `<html data-instrument>` 축 신설 + 첫 페인트 전 인라인 스크립트로 **FOUC 0**. **콘텐츠 기반(B)**: 레슨/커리큘럼은 SSR `meta.instrument`(권위), 랜딩만 `riff_instrument` 기억값. `tokens.css` `[data-instrument="bass"]` 초록 포크(라이트/다크) + `--grad-fallback` 을 `var(--primary…)` 참조로 리팩터(기타 바이트 불변). **악보 클램프** — `[data-instrument="bass"] .fretboard/.tabsvg/.staffsvg` 에서 `--primary` 파랑 재선언(specificity로 승리) → **렌더러 미변경·SVG 바이트 불변, 악보는 테마 무관 파랑 유지**. `applyInstrumentFilter` 를 `document.startViewTransition` 으로 감싸 색+hero+카드 크로스페이드(미지원 폴백·`prefers-reduced-motion` 존중).
- **후원 하트 + 섬네일 듀오톤:** 후원 버튼 하트 `💙`→`💚`(CSS `::before content`, `data-instrument` 스코프, 기타 파랑 유지). 카드 섬네일 초록 듀오톤 필터 2종(`#duotone-light/dark-bass`) 신설 — 파랑 스톱을 hue≈143° 회전 → 그래디언트 옅은 중앙부 파란기 제거.
- **채도 톤다운:** 초기 에메랄드가 완료 버튼·섬네일에서 쨍하다는 피드백 → 초록 전 토큰·듀오톤 스톱 **HSL 채도 20%↓**(hue·명도 유지). 명도 유지로 **대비는 오히려 상승**(라이트 버튼 3.71→4.23, 다크 3.07→3.64).
- **불변 보장:** 기타(파랑) 전 페이지 산출 불변, 악보 SVG 바이트 불변(`check-invariants` 회귀 0), Toss 결제 아이콘·PWA `theme_color`·favicon 파랑 고정.
- **검증:** `npm run build` exit 0(463p) · `astro check` 0 errors · `check-invariants` **422블록 회귀 0** · WCAG 4콤보(라이트/다크 × 기타/베이스) 전부 현행 파랑 이상 · dist 확인(베이스 레슨 `data-instrument="bass"`, 초록 포크·악보 클램프·하트/듀오톤 스왑, 악보 여전히 `var(--primary,#3182F6)`).
- **문서:** `web_app/docs/design_spec.md §2.7`(초록 스케일·듀오톤·톤다운 값 SSOT), `04_localization/translation_map.md §10`(home.title 악기별), `05_update_backlog/05_tag-filter.md` status→DONE.

### 2026-07-10 (신규 커리큘럼 6종 설계·주차 프롬프트 — 백로그 11~16)
- **라인업 확장 설계:** 기타 2(11 블루스·12 R&B/네오소울) + 베이스 4(13 기초·14 슬랩펑크·15 셔플바운스·16 워킹) 신설. 각 백로그 md에 포지셔닝·관통철학·월/주 아크·완성물 원칙·차별화·의존 박제. 디렉터리 스캐폴드(month/week) 생성.
- **주차 프롬프트 저작(핀 고정·JSON 검증):**
  - **11 블루스**(12주·3개월) — 리듬(셔플·부기·12마디·도미넌트7·스톱타임·턴어라운드) / 표현 리드(박스1·블루노트·벤딩·콜앤리스폰스) / 심화(코드착지·BB색·리듬↔리드 대화). A 블루스, 볼드필수·지판병기 하우스규칙. 핀고정 12블록 박자합 4.0.
  - **14 슬랩/펑크**(8주) — slap_thumb/pop·dead_note, 옥타브 그루브→펑크. 4/5현 병행. 핀고정 8블록 박자합 4.0.
  - **13 베이스 기초**(4주) — 4/5현 병행·핑거스타일 30분(→ 병렬로 day 48파일 완료, 아래 항목).
- **주요 설계 결정:** ①모든 베이스 트랙 **4/5현 병행 제시**(엔진 10 B3 활용) ②15 그루브포켓→**셔플바운스 전면 개편**(2개월·스윙8 셔플/스윙16 바운스) ③14 슬랩 vs 15 바운스 차별화(스트레이트 슬랩 테크닉 ↔ 스윙 필) ④11 블루스 **3개월+리드 복원**(solo_scale와 "도구는 같아도 디시플린이 다르다" — 장르 깊이 vs 시스템 넓이, solo_scale 온램프) ⑤estMinutes 입문 30/나머지 50.
- **검증:** 전 프롬프트 핀 고정 완성물 JSON 박자합 4.0·현범위·기법 화이트리스트·(베이스)튜닝 스크립트 확인. **web_app 무변경**(설계·프롬프트 단계). 각 백로그 status·README 인덱스 동기 갱신.
- **다음:** 11·14 프롬프트 실행 → day 저작 / 15·16·12 프롬프트 저작.

### 2026-07-10 (UI/렌더 다듬기 — 베이스 악보 정확성 · 아낀 레슨비 합산 · 상단바 여백)
- **베이스 악보 렌더 정확성(3건, staff.ts):** 신규 베이스 커리큘럼 실사용에서 드러난 버그 수정. ① **타브 줄 수 = 현 수** — `TabStave num_lines: nStr`(4현→4줄·5현→5줄·6현 기타=기본6→불변). ② **오선보 음 위치 = 낮은음자리표 기준** — `StaveNote` 에 `clef` 전달(미지정 시 treble 기본이라 베이스가 2옥타브 어긋나 렛저라인 폭발했던 것 → 렛저 7→1개). ③ **좌측 "TAB" 글자 중앙 정렬** — tab clef 글리프(`6stringTabClef`, line 2.5=6현 중앙 고정)를 `clef.line=(nStr-1)/2` 로 보정 + 줄 간격 확대로 스테이브 안에 담음(치우침·잘림 0). 셋 다 **기타 페이지 바이트 완전 불변**(stash 전후 빌드 비교) · `check-invariants` 기존 블록 변화 0.
- **아낀 레슨비 = 전(全) 커리큘럼 합산:** 도네이션 시트 "아꼈어요" 금액이 현재 커리큘럼만이 아니라 **모든 커리큘럼 완료 Day 합산**으로 계산(`progress.ts` `totalSavedMoneyWon`/`formatTotalSavedMoney`). **완료 0일 때**는 금액 대신 응원 문구(`progress.saved_money_zero` — ko "모든 강의는 끝까지 무료예요.<br>지금부터 함께 시작해요", 3언어·첫 문장 뒤 줄바꿈). 미사용된 `activeCurriculumId`/`formatSavedMoney`/`DEFAULT_CURRICULUM_ID` 정리.
- **상단바 로고 좌측 여백:** `.topbar` padding-left 6→16px(로고가 좌측에 바짝 붙던 느낌 완화).
- **검증:** `astro check` 0e · `build` 통과 · i18n 3언어 정합 · 베이스 4/5현 렌더 육안(래스터) · 합산 로직 단위검증.

### 2026-07-10 (백로그 13 완료 — 입문 베이스 트랙 16일 day 저작 + 지판 보강)
- **범위:** `beginner_bass_1month` 4주 × 4일 × ko/en/ja = **48파일 저작 완료**(/goal 주차별 순차: w1 오른손·소리내기 → w2 왼손·뮤팅 → w3 드럼과 락 → w4 R-5-8 라인·졸업). 베이스 트랙 사이트 정식 노출(대표 이미지 포함).
- **★4·5현 병행:** 전 예제 `_4`(EADG)/`_5`(BEADG) 두 블록, 5현 tab=4현 동일·meta만 차이. 핀고정 4주(루트펄스·뮤팅라인·8비트라인·R-5-8) 전부 프롬프트와 바이트 동일. instrument:bass 전 블록.
- **지판 보강:** 콘텐츠가 전부 tab이라 지판 0개였던 것을 w1d1 음 위치 지도·w4d2 옥타브 박스에 `fretboard_diagram`(4·5현) 추가 — **03③에서 만든 베이스 다현 지판 렌더를 처음 활용**(dist에 class="fretboard" SVG 확인). 프롬프트에 "손모양·음 위치=fretboard_diagram" 규칙 추가.
- **볼드/하이라이트 정합:** day 산문에 볼드 보강(기존 기타 커리큘럼 밀도), intro는 볼드(용어)/하이라이트(약속·성과) 분리. (동일 정합을 일렉 트랙·chord/funk/solo intro에도 소급 적용.)
- **검증:** build 463p exit 0, check-invariants baseline 422(신규 64+4블록·기존 지문 값 변경 0), 전 주차 볼드·mark 3언어 일치·④/완료기준 mark=0·악보 3언어 바이트 동일.
- **→ 백로그 13 완료(status DONE).** 남은 베이스 트랙 14·15·16은 이 위에 얹는다.

### 2026-07-10 (커리큘럼 볼드 보강 + intro 겹침 분리, 베이스 week_2 저작)
- **볼드 보강(day 산문):** 입문 일렉 16일 + 입문 베이스 week_1·2 산문 본문(①이론·②시각·③연습)에 볼드가 0개라 밋밋하던 것을 기존 기타 커리큘럼(chord/funk) 밀도로 보강(day당 볼드 다수, ①이론 집중). 악보 json·하이라이트 개수 HEAD 불변, 3언어 볼드 개수 일치. 프롬프트 8개(베이스4+일렉4)에도 볼드 규칙 강화.
- **intro 겹침 분리:** 전 커리큘럼(chord·funk·solo·일렉·베이스) 소개 intro가 `**<mark>…</mark>**` 겹침이라 볼드=하이라이트 같은 구절 → 볼드(용어·수치)와 하이라이트(약속·성과)를 서로 다른 구절로 분리. 5개 커리큘럼 3언어 겹침 0·개수 일치.
- **베이스 week_2(왼손·뮤팅):** 12파일 저작 — day2 dead_note(고스트 "칙"), 4·5현 병행 쌍·핀고정 mute_root_line 4·5현 바이트 동일.
- **검증:** build 439p exit 0, check-invariants 신규 16블록만 추가·기존 지문 값 변경 0(baseline 386).
- **다음:** 베이스 week_3(드럼과 락)·week_4(R-5-8 라인·졸업) 저작.

### 2026-07-10 (백로그 13 — 입문 베이스 트랙 1주차 day 저작, /goal 주차별 순차)
- **범위:** `beginner_bass_1month` month_1/week_1 day_1~4 × ko/en/ja = 12파일. 오른손·소리내기(자세·투핑거·개방 E·줄이동·왼손 첫 운지·E·A 루트 펄스). 베이스 트랙 사이트 첫 노출.
- **★4·5현 병행:** 모든 예제를 `_4`(EADG)/`_5`(BEADG) 두 블록으로, 5현 tab이 4현과 완전 동일하고 meta(stringCount·tuning)만 차이. instrument:bass 전 블록.
- **검증:** build 427p(412→+15) exit 0, check-invariants 신규 16블록만 추가·기존 354블록 지문 값 변경 0(baseline 370), 3언어 mark 일치·④/완료기준 mark=0·악보 3언어 바이트 동일·핀고정 루트펄스 4·5현 바이트 동일. 도구태그 오염 없음.
- **다음:** week_2(뮤팅) → week_3(드럼과 락) → week_4(R-5-8 라인·졸업).

### 2026-07-10 (백로그 17 — 오선보/타브 오버플로 클리핑 + 폭기반 줄바꿈 + 스크롤 폴백)
- **증상:** 입문 일렉 팜뮤트 파워코드 마디(8음 전부 chord+P.M.)에서 오선보+타브가 카드 우측에서 잘림. 긴 악보는 좁은 컬럼에서 너무 작게 보임.
- **단계 1(클리핑):** `staff.ts`가 줄별 실제 최소폭(`Formatter.preCalculateMinTotalWidth`)을 재서 `noteAreaByRow=max(추정,ceil(minW))`로 사이징. 측정은 disposable 객체, 렌더 객체 pristine(이중 format 회피).
- **단계 2(줄바꿈):** 2마디 쌍 유지하되 쌍 실측폭 > `TARGET_ROW_W`(560px)이면 그 쌍만 1마디/줄로 분리 → 빽빽 마디가 커진다. 성긴 쌍·단일 마디 불변.
- **단계 3(스크롤 폴백):** `postProcess`가 자연폭>560 극단 밀집 오선보에만 `min-width:{w}px` 부착 + `.render-mount{overflow-x:auto}`(LessonView) → 좁은 화면서 축소 대신 가로 스크롤. 성긴 악보 무부착 → 회귀 0.
- **검증:** `astro check` 0e · `build` 412p · 일렉 m1w3d3·d4 잘림 소멸+음표 커짐(래스터 육안) · min-width=극단 밀집 66p(3언어)만·solo_scale 0개 · **check-invariants 회귀 0(354블록, 의미 불변 — 렌더 폭만 변경)**. 백로그 17 DONE.

### 2026-07-10 (백로그 13 — 입문 베이스 트랙 저작 준비: 프롬프트 정합·meta·overview·이미지)
- **범위:** `beginner_bass_1month` day 저작 착수 준비물 완비(day 문서는 다음 단계). 4·5현 병행·투핑거(피크 미사용)·30분 트랙.
- **① 프롬프트 정합:** 주차 프롬프트 4개 day-끝 라벨 '오늘의 완성물:' → '오늘의 완료 기준:'(기존 132일·08 앵커 정합, day_4는 (N주차 완성!) 병기), 루틴 볼드 '오늘의 결과물'. ② 연초록 하이라이트 "자동 렌더" 단언 → "악기 테마(백로그 05) 적용 시 연초록(적용 전 하늘색)"으로 완화(05 미구현·전방호환).
- **③ meta.json:** id·title·tagline·forWho·intro(3언어, `<mark>`)·instrument:bass·level:1·image·tags. build-content 발견·파싱 OK(day 없어 manifest 스킵 — 정상).
- **overview 15파일:** month_1 + week_1~4 × ko/en/ja, 입문 일렉 overview 형식 표준, week_N_prompt와 내용 정합, 3언어 `<mark>` 각 2개 일치.
- **대표 이미지:** `bass_curriculum4.jpg`(오른손 핑거스타일)→`beginner-bass.webp`(1200×800, 18KB), 스크립트 MAP 추가, 기존 4 webp 바이트 불변.
- **다음:** 16일 day 저작(/goal 주차별 순차, 09와 동일 방식)만 남음. 베이스 day는 `instrument:bass`·4/5현 병행 블록.

### 2026-07-10 (백로그 09 — 입문 일렉 트랙 16일 day 저작 완료, /goal 주차별 순차)
- **범위:** `beginner_electric_1month` 4주 × 4일 × ko/en/ja = **48파일 저작 완료**(주차별 curriculum-architect 위임, /goal로 순차: week_1 손만들기 → week_2 두손싱크+첫리프 → week_3 파워코드 → week_4 곡완성·졸업). 각 주차 저작→검증→커밋 체크포인트.
- **검증(주차별+전수):** build 412p(361→+51) exit 0(박자합·스키마 게이트), check-invariants 354블록(신규 39·기존 315 지문 값 변경 0), 16일 전량 3언어 `<mark>` 개수 일치(총 91)·④/완료기준 줄 mark=0·악보 json 3언어 바이트 동일·핀고정 5개(스파이더·펜타리프·파워코드리프·코러스루프·펜타박스) 프롬프트와 바이트 동일.
- **day4 졸업:** ④ 뒤 '## 졸업' 마무리 섹션(4주 성장표·다음 트랙 배웅)이 splitSections로 tips에 포함돼 '오늘의 연습' 아래 정상 렌더, 3언어 정합.
- **대표 이미지:** `curriculum4.jpg`(헤드스톡)→`beginner-electric.webp`(1200×800, 그레이스케일 webp q72, 21.5KB) 생성. manifest·HomeView 카드 정상 참조. **→ 09 트랙 완료(status DONE).**

### 2026-07-09 (백로그 04 완료 — 슬래시 리듬 표기)
- **배경:** `notation:"rhythm"`이 검증기에서 원천 차단(VexFlow 4.2.5 폰트에 rhythm slash 글리프 부재 확인 — `noteheadSlashed*`(취소선)만 있고 표준 rhythm slash 없음).
- **구현:** staff.ts rhythm 모드가 음정 무시하고 가운데 줄(b/4)에 노트헤드 **투명** 리듬 음을 놓아 VexFlow가 스템·빔·간격·`chordSymbol`을 처리 → 각 음 위치에 **자체 슬래시 바(ctx path)** 오버레이(채움=quarter↓, 열림=half·whole). 검증기 rhythm 차단 해제, 라우팅은 기존 존재.
- **기존 무영향:** 새 notation 값이라 기존 데이터(전부 tab/staff+tab) 미진입 → 변경 전/후 **dist 전체 md5 `31d885e9…` 바이트 동일**. invariants 315블록 회귀 0, build 361p. rhythm 픽스처로 슬래시 바·코드심볼·투명 노트헤드 확인.
- **문서:** playbook §8 "rhythm 금지" → "지원됨"으로 갱신, 09 참조 갱신.

### 2026-07-09 (백로그 10 베이스 엔진 — instrument·bass clef·옥타브 앵커·slap T/P)
- **B1 instrument+클레프:** `instrument:'bass'`(타입·스키마·검증기). staff.ts가 `addClef('bass',…,'8vb')` + bass 오선 라인 앵커(G2/43·A3/57)로 분기. guitar(기본)는 기존 treble 그대로.
- **B1 옥타브 앵커 수정(핵심):** `resolveOpenMidi`가 기타 옥타브(OPEN_MIDI)를 앵커로 써 베이스가 2옥타브 틀리던 것을 `standardOpen`/`BASS_OPEN_LOW_TO_HIGH`로 수정 — 4 EADG=28·33·38·43, 5 BEADG=+B0(23), 6 BEADGC=+C3(48). tuning 기반 정확 계산.
- **B2 슬랩:** technique `slap_thumb`·`slap_pop`(타입·스키마·검증기). tab.ts=노트 위 T/P 글자, staff.ts=T/P Annotation. (범례 i18n은 H·P·sl과 동일하게 SVG 리터럴 — 범례 UI 도입 시 일괄.)
- **B3·B4:** stringCount 4·5·6·다현 지판은 03③에서 선반영. 베이스 튜닝 기본값 = `BASS_OPEN_LOW_TO_HIGH`.
- **기존 무영향:** 기타(instrument 미지정/guitar·6현)는 전 분기 기존 환원 → **dist 전체 md5 `31d885e9…` 바이트 동일**. invariants 315블록 회귀 0, astro check 0err, build 361p. 격리 렌더로 베이스 클레프 분기·타브 4줄·슬랩 T/P 확인.
- **→ 백로그 10 엔진(B0~B4) 완료.** 남은 것은 베이스 커리큘럼 저작(B5) — 이제 엔진 위에서 4·5현 병행 제시로 저작 가능.

### 2026-07-09 (백로그 02-A 고도화 — 표현기법 텍스트 마커 → 정식 글리프)
- **업그레이드:** bend=타브 `Bend`(벤딩 화살표+목표 라벨), vibrato=`Vibrato`(물결선), hammer_on/pull_off=`Curve`(이음줄 슬러)+H·P 라벨, slide=`TabSlide`(사선)+sl 라벨. harmonic는 'harm.' 텍스트 유지(VexFlow 하모닉 글리프 부재). staff-only 모드는 밴딩·비브라토 텍스트 폴백.
- **구현:** 인접 연결(슬러·슬라이드)은 02-B tie와 동일한 flat 배열 인접 판정(`linkAfter`), 행 경계 넘는 연결 생략. 타브측 native 글리프는 `withTab`일 때만 부착.
- **기존 무영향:** 기존 116일 staff 경로에 이 6기법 0건 → 변경 전/후 **dist 전체 md5 `31d885e9…` 바이트 동일**. invariants 315블록 회귀 0, astro check 0err, build 361p. 격리 렌더로 6기법 글리프(path 증가) 실동작 확인.

### 2026-07-09 (백로그 02 완료 — 오선보 표현기법 A·B·C·D)
- **A 기법 렌더:** staff.ts가 bend·hammer_on·pull_off·slide·vibrato·harmonic를 오선보 위 텍스트 마커(Annotation, 기존 P.M. 관례)로 표기 → `STAFF_TECHNIQUES` 가드를 6종 완화(순서: 렌더 후 완화). (슬러/벤딩화살표 글리프 고도화는 후속 여지.)
- **B 붙임줄:** `tiedToNext` 필드(타입·스키마) + `StaveTie` 곡선(오선보). 행 경계 넘는 tie는 생략.
- **C 잇단음:** `tuplet:{num,inSpaceOf}` 필드 + `Tuplet` 렌더 + **검증기 박자합 예외**(inSpaceOf/num 환산, fp 오차 1e-6 허용) — 02에서 검증기까지 손댄 유일 항목.
- **D 비4/4 빔:** `BEAT_INT=4` 하드코딩을 `beatUnit(numBeats,beatValue)`로 일반화(단순박자=16/분모, 복합 6/8·9/8·12/8=점4분음 그룹, 4/4→4 환원).
- **기존 무영향:** 기존 116일 전량 4/4·staff 경로 신규기법 0건·tie/tuplet 미사용 → 각 단계 변경 전/후 **dist 전체 md5 `31d885e9…` 바이트 동일**. invariants 315블록 회귀 0, astro check 0err, build 361p. 격리 렌더로 6기법 마커·tie 곡선·triplet 괄호·6/8 렌더·박자합 산식 확인.
- **→ 백로그 02 완료.** 남은 엔진: 10 베이스(클레프·slap·튜닝 기본값). 이후 04·05.

### 2026-07-09 (백로그 03① — 조표(key signature) 렌더 + 03 문서 완료)
- **범위:** `meta.keySignature`(VexFlow 조 이름 spec) 신설 — 타입(`score.ts`)·스키마·검증기(화이트리스트 장/단조 30종). staff.ts가 clef 뒤에 `addKeySignature` 호출 + 조표 폭(임시표 수 비례) 예약. 무효 조 이름은 안전 폴백(미표기, 빌드 안 깨짐).
- **미해결질문 해소:** 조표 표현 = **조 이름 spec 채택**(샾/플랫 개수 아님). VexFlow가 조 이름을 직접 받고 임시표 철자도 정확해지는 이점.
- **기존 무영향:** keySignature 없으면 ksW=0 → 폭·레이아웃 불변. 변경 전/후 **dist 전체 md5 `31d885e9…` 바이트 동일**, invariants 315블록 회귀 0, astro check 0err.
- **실동작 확인:** 격리 렌더로 조표없음≠G(샾1)≠Bb(플랫2), 무효 조표는 미표기 폴백 확인.
- **→ 백로그 03 전체(①②③) 완료.** status DONE. 남은 03 항목 없음.

### 2026-07-09 (백로그 03③ — 다현 일반화 + 지판 다현화: stringCount 4·5·6, tab·fretboard·검증기·타입·스키마)
- **범위:** 6현 하드코딩을 stringCount(4·5·6) 구동으로 일반화 — 스키마(`stringCount` enum·`tuning` minItems 4·description), 타입(`score.ts` `stringCount: 4|5|6`), 검증기(`build-content.mjs` stringCount 집합·**tuning 길이=stringCount**·note/chord/dot/barre string 범위 1~stringCount), `tab.ts`(줄 수·현이름·범위), `fretboard.ts`(N_STR→n·현이름·좌표·굵기·범위), `staff.ts`(string 범위 상한). **fretboard.ts 다현화 = 승인받은 03③/10-B4 통합.**
- **현이름 규약:** 6현은 기존 관례 `e,B,G,D,A,E`(고음 e 소문자) 그대로 반환 → 바이트 불변. 4·5현은 `meta.tuning`(index0=최저현)에서 파생(대문자), 예: 4현 EADG→`G,D,A,E`, 5현 BEADG→`G,D,A,E,B`.
- **기존 무영향 증명:** 변경 전/후 **dist 전체 md5 `31d885e9…` 바이트 완전 동일**(기존 116일 전부 stringCount=6 → 모든 분기가 6일 때 기존 수식으로 환원). `check-invariants` 315블록 회귀 0, astro check 0 errors, build 361p.
- **신기능 실동작 확인:** 격리 렌더로 4·5·6현 각각 타브 줄 수(4/5/6)·현이름·지판 현 수 정확, 4현 오선보 정상 생성.
- **범위 밖(다음):** 베이스 클레프(bass clef 8vb)·slap(T/P)·instrument enum·베이스 튜닝 기본값 = 10 베이스 엔진(B1·B2·B3). 조표 = 03①. (지판 다현화가 03③에 포함되며 완료돼 10-B4 대부분 선반영됨.)
- **다음:** 02(표현기법 오선보) → 10(베이스 엔진 B1~B3) → 커리큘럼 저작.

### 2026-07-09 (백로그 03② — 튜닝 무시 잠재 버그 수정: staff.ts가 meta.tuning 읽어 음정 계산)
- **배경:** `staff.ts`가 `OPEN_MIDI`(EADGBE) 하드코딩으로 `meta.tuning`을 무시 → Drop-D/DADGAD 등 비표준 튜닝 커리큘럼이 오면 오선보 음정이 **조용히 틀리게** 그려질 잠재 버그(Zero-Hallucination 위반). 모든 다현·베이스 작업의 하드 선행.
- **수정:** `resolveOpenMidi(meta)` 추가 — 현 이름 배열을 각 현 표준 개방음 anchor에 **±6반음 최근접 옥타브**로 해석해 개방현 MIDI 계산(Drop-D=D2 등 자연 정합). tuning 없거나 stringCount와 길이 불일치면 표준 폴백. `pitchOf`·음역 스캔의 `OPEN_MIDI[str]`를 이 함수로 대체.
- **기존 무영향 증명(핵심):** 빌드 결정성 확인(무변경 재빌드 시 dist 전체 md5 동일) 후, 변경 전/후 **dist 전체 md5 `31d885e9…` 바이트 완전 동일** → 기존 116일(전부 표준 EADGBE 또는 tuning 생략) 렌더 불변. `check-invariants` 315블록 회귀 0. astro check 0 errors.
- **신기능 실동작 확인:** 격리 렌더로 (1) tuning 생략 == 명시 EADGBE 동일 (2) Drop-D는 6번현 개방이 D로 다르게 렌더(음높이 실제 변화) 검증.
- **범위 밖(의도):** tab.ts 현이름 gutter의 tuning 파생은 4/5현 거터가 바뀌는 03③으로 이월(표준에서 `e`↔`E` 대소문자 차이로 불변 깨짐 방지). stringCount 다현화·지판(03③)·조표(03①)는 미착수.
- **다음:** 03③(다현+지판) → 02(표현기법) → 10(베이스 엔진).

### 2026-07-09 (백로그 10 — 5현 베이스 1급 필수로 승격, 4·5현 병행 제시 반영)
- **결정:** 베이스 교육은 4현·5현을 함께 다루는 경우가 많음 → 5현을 "스키마만·콘텐츠 나중"에서 **4현과 동급 1급 필수 구현**(렌더·검증·픽스처 완결)으로 승격. 6현은 스키마·렌더 지원하되 초기 콘텐츠 필수 아님.
- **엔진:** B1에 5현 저음 B 음역 명시(개방 B0=실제 MIDI 23, 표기 8vb=B1 MIDI 35 → bass clef 아래 렛저라인 2줄, 잘림 방지 검증). B3 검증을 4·5현 동급 필수 게이트로, 지판(B4)·타브·오선보 모두 5줄/5현 확인.
- **콘텐츠(B5):** **4·5현 병행 제시 패턴** 추가 — 스키마 무변경(day당 다중 score 허용)으로 같은 라인을 `stringCount:4`·`stringCount:5` 두 블록으로 저작, 저음 B 대안 운지는 5현 블록에만. 저작 프롬프트에 규약 명시(retrofit 방지).
- **반영:** 10 목적·B1·B3·B4·B5·검증·체크리스트·미해결질문(현 수 범위 확정), 03 픽스처(4·5현 둘 다) 갱신.

### 2026-07-09 (백로그 03·10 — fretboard.ts 다현 지판 착수 승인, 문서 정합화)
- **결정:** "지판 이미지 없는 커리큘럼은 성립 안 됨" → `render/fretboard.ts` **변경금지 컨벤션 해제**, 베이스(4/5/6현)·우쿨렐레 등 **다현 지판 렌더 정식 착수 승인**. 절대 조건 = 기존 6현 지판 **픽셀 바이트 불변**(V4 골든 스냅샷).
- **문서 배치(신규문서 X, 기존 확장 O):** 지판 다현화는 개념상 **03③ "다현 일반화"의 형제**(금지 컨벤션 때문에만 빠져 있었음)이자 우쿨렐레·7현에도 재사용되는 **범용 인프라** → **03③가 소유**(N_STR→stringCount·현이름=tuning·좌표/굵기 일반화). **10-B4는 "승인필요/보류"→"착수 확정"으로 승격**해 03③를 선행 소비하고 **베이스 고유분**(베이스 튜닝 개방현 라벨·5/6현 저음 굵기)만 얹음.
- **반영:** 03③에 fretboard 다현화 항목·골든 스냅샷(오선보+**지판**+타브) 편입, §주의 금지 해제·미해결질문 해소. 10 B4/주의/체크리스트/미해결질문·선행표를 착수확정으로 갱신. (fretboard.ts 변경금지 규칙은 CLAUDE.md/스펙이 아닌 이 두 문서 컨벤션이었음 — 근원 확인 후 해제.)
- **다음:** Phase A 순서(03② 튜닝 → 03①③ 조표·다현+**지판** → 02 표현기법 → 10 베이스 엔진 B1~B4) 뒤 커리큘럼 저작. 03② 튜닝 수정이 최우선 착수점.

### 2026-07-09 (백로그 10 신설 — 베이스 지원 설계: 클레프·slap·튜닝·다현·지판 + 베이스 커리큘럼)
- **배경:** 베이스 커리큘럼 신설 준비. `_design_docs/05_update_backlog`에 베이스 전용 문서 부재(03·09에서 스치듯 언급만) → 착수 전 설계 동결.
- **조사 결과:** 렌더/스키마의 기타 전제를 실측 확인 — `staff.ts:456` `addClef('treble',…,'8vb')` 하드코딩, `instrument?:'guitar'`·`stringCount:6` 리터럴, `technique` enum에 **slap(T/P) 전무**, `fretboard.ts`·`tab.ts` `N_STR=6`. 반면 **03(튜닝계산·다현·조표)·02(오선보 표현기법)가 인프라 절반을 이미 예고**하고 tab 경로는 벤딩/해머/풀을 이미 그림.
- **신규 문서 `10_bass-support.md`:** 베이스 고유 공백 5대(①bass clef+옥타브 ②slap 썸T/팝P ③instrument enum ④베이스 튜닝 4 EADG/5 BEADG/6 BEADGC ⑤베이스 지판)를 소유. **03②③를 하드 선행, 02를 소프트 선행**으로 참조(중복 금지). Phase B0(선행)~B5(콘텐츠 저작) + 불변보장·V1~V5·정지조건·미해결질문 8건. `fretboard.ts`는 변경금지 대상이라 별도 승인 전까지 초기 트랙 지판 최소화로 우회 명시.
- **상호참조 반영:** 03에 "베이스 확장=10 소관·stringCount 5 포함·튜닝기본값 10에서 확정", 02에 "slap·베이스클레프=10 소관" 주석. README 인덱스에 10행 추가(선행 03·02).
- **다음:** 03②③ 착수 여부·베이스 현 수 범위(4 vs 4·5·6)·fretboard.ts 다현화 승인·입문 vs 슬랩중급 페르소나 결정(문서 미해결질문) 후 엔진→콘텐츠 순 진행.

### 2026-07-09 (백로그 08 완료 — 하이라이트 A방식, funk·solo 전체로 확대 → 3커리큘럼 116일 전량)
- **범위:** `funk_rhythm_2months`(intro+week_1~8 전 32일) + `solo_scale_3months`(intro+week_0~12 전 52일) × 3언어. chord_building(앞 항목)까지 합쳐 **day 116개 + intro 3종 × 3언어에 산문 하늘색 하이라이트 전량 적용 완료**. 08 백로그 status→DONE.
- **진행 경위:** 나머지 배치를 서브에이전트에 위임했으나 **세션 토큰 한도로 funk·solo 에이전트가 각각 중간 중단**(funk week_6/day_3 ja 8/13, solo week_6/day_2 ja 0/12에서 끊김). 한도 리셋 후 이어받아 (1) 끊긴 2파일 ja를 ko/en 위치에 맞춰 패리티 복구, (2) 완료분(funk 23일+intro, solo 26일+intro) 검증·커밋, (3) 잔여(funk 9일·solo 26일)를 재위임해 완성.
- **결과 — 총 `<mark>` 4182개**, day당 10~16개(3언어 전부 일치). A방식(볼드+하이라이트 겹침 허용, 문법 자족 명사구 1순위, 병렬 논점 문단은 논점마다, 헤딩·예제캡션·완료기준줄·④팁·셀프피드백 체크리스트 전부 제외) 기계 적용.
- **검증(전 116일 전수):** 스크립트로 (1) 3언어 `<mark>` 개수 일치 (2) `<mark></mark>` balance (3) ④ 섹션(마크다운 `## ④` 헤딩 기준)·'오늘의 완료 기준' 줄 `<mark>` 0개 (4) 악보 ```json 블록 HEAD 대비 바이트 불변 — 전부 통과. `npm run build` 361p 성공, `check-invariants.mjs` 315블록 회귀 0.
- **다음:** 백로그 08 종료. 하이라이트 색감(현 blue-500 20%, 다소 연함) 강화 여부는 사용자 판단 대기(레시피·구조 변경 불필요, 토큰 값만 조정 가능).

### 2026-07-09 (신규 커리큘럼 — 입문 일렉 트랙 신설: 주차 프롬프트+meta+overview, 백로그 09)
- **배경:** 기존 3트랙(solo/chord/funk)이 전부 `level 2`(코드는 침/곡은 쳐봄 전제)라, PRD 입문자 페르소나 '지훈'을 받아줄 트랙이 부재 → 최다 유입 예상 구간이 비어 있었음. `beginner_electric_1month`(**level 1**, 기존 3트랙 아래 입구) 신설로 채움.
- **범위(구상·저작 세션):** 방향 확정(오픈코드/스트럼 제외·일렉 한정·파워코드 무게·펜타 맛보기·하루 30분·완성물 4/4 4마디) → 주차 프롬프트 4개 + meta.json + month_1·week_1~4 overview(3언어) 작성. **day 문서는 미착수**(다음 세션).
- **완성물 설계:** 전량 오리지널 작곡(저작권 0), 유명 규칙 차용(펜타 프레이징·bVI-bVII-i 클라이밍·i-bVI-bIII-bVII 루프·조용/시끄러움). 주간 완성물 = 스파이더 크로매틱 → Em 펜타 리프 → 팜뮤트 파워코드 리프 → 코러스 루프(졸업곡). 유명 목표곡은 이름만 지목(탭 외부조달).
- **프롬프트 설계 핵심:** funk 프롬프트를 골격 차용 + level-2 부분 입문용 교체 + **06(인라인 배치)·08(산문 하이라이트) 이후 간극을 프롬프트에 처음부터 내장**(retrofit 방지) + 완성물 리프를 정확 JSON으로 **핀 고정**(창작 금지).
- **검증:** meta.json parse OK · 핀 고정 리프 6종(스파이더·Em리프·파워코드리프·코러스루프 등) **마디 박자합 4.0** 스크립트 확인 · 무관 파일 미포함. (day 미저작이라 `npm run build` 대상 아님.)
- **문서:** `05_update_backlog/09_beginner-electric-curriculum.md` status→IN_PROGRESS(체크리스트·§13 주차 프롬프트 작성법 반영), README 인덱스 갱신.
- **다음:** 각 프롬프트 실행 → `day_N.{ko,en,ja}.md` 16일치 생성 → 빌드 검증 · 대표 이미지 제작.

### 2026-07-09 (백로그 08 — 하이라이트 A방식, chord_building_2months 전체 8주로 확대)
- **범위:** `chord_building_2months`의 나머지 7주(month_1/week_2~4 + month_2/week_5~8, 각 4 day) × 3언어 = 84파일. week_1(파일럿)은 이미 완료 상태라 손대지 않음. A방식 레시피(볼드+하이라이트 겹침 허용, 문법 자족 단위 명사구 1순위, 논점 병렬 문단은 논점마다 1개씩 3개+ 허용, 헤딩·예제캡션·완료기준줄·④팁 섹션 전부 제외)를 그대로 기계적 적용.
- **결과 — day별 `<mark>` 개수(ko/en/ja 3언어 전부 일치):** week2 10·11·13·10 / week3 9·9·8·10 / week4 12·10·10·12 / week5 11·12·14·11 / week6 12·11·11·12 / week7 9·11·11·13 / week8 12·11·12·15.
- **검증:** 84파일 전량에 대해 스크립트로 (1) 3언어 `<mark>` 개수 일치 (2) `<mark></mark>` 태그 balance (3) ④ 섹션·'오늘의 완료 기준' 줄 `<mark>` 0개 (4) 악보 ```json 블록 HEAD 대비 바이트 불변(git 커밋 전 상태 대비 diff)을 자동 확인 — 전부 통과. `npm run build` 361p 성공, `node scripts/check-invariants.mjs` 315블록 회귀 0.
- **다음:** `05_update_backlog/08_Highlight.md` 잔여 — solo_scale_3months(intro+52day×3언어), funk_rhythm_2months(intro+32day×3언어).

### 2026-07-09 (PWA 트랙 A·B·C — 설치형 PWA 토대, 백로그 07)
- **설치형 PWA 코드 구현(iOS 홈 + Android 무스토어 설치 충족):** 매니페스트(`public/manifest.webmanifest`, name Riff·standalone), 앱 아이콘 4종(`public/icons/`, 픽 로고 파생 — 192·512·maskable 512·apple-touch 180, 생성기 `scripts/generate-pwa-icons.mjs`), **hand-rolled 서비스워커**(`public/sw.js`, 의존성 0 — 앱 셸 precache + 방문분 런타임: HTML NetworkFirst·`/_astro/*` CacheFirst·기타 SWR, `CACHE_VERSION` 무효화·autoUpdate), `Base.astro <head>` 메타(manifest·theme-color 라이트/다크·애플 홈설치 3종·apple-touch-icon) + SW 등록(배포 도메인 한정).
- **@vite-pwa/astro 미채택:** 무런타임 devDep 최소 원칙·락파일/빌드설정 무변경·버전 호환 리스크 0 위해 SW 직접 작성. 클라이언트 추가는 SW 하나뿐.
- **검증:** `astro check` 0 error · `npm run build` exit 0(361p) · dist에 manifest/sw.js/icons 포함 · 전 페이지 head 배선 · SHELL precache URL 전부 존재 · sw.js 문법 OK. **배포 후 남음:** 실기기 설치·오프라인·Lighthouse installability(SW는 localhost 제외).
- 백로그 07 status→IN_PROGRESS. 다음: 배포 검증 → 트랙 D(Play, $25).

### 2026-07-09 (백로그 08 재작업 — 하이라이트 레시피 A방식 재적용, B방식 폐기)
- **배경:** 08 파일럿(아래 항목)이 채택했던 "볼드 회피" 규칙(B방식)이 하이라이트를 어정쩡한 술어/조사 경계로 밀어내(`밝은가 어두운가는 전부 이 3도가` 처럼 동사를 버리는 절단) 어색했다 → 폐기하고 **A방식**(볼드+하이라이트 겹침 허용 + 문법 경계 우선 명사구)으로 동일 범위를 재작성.
- **범위:** `chord_building_2months` intro(3문단×3언어) + `month_1/week_1` day1~4(①②③④)×3언어 = 13파일(meta.json 1 + day md 12).
- **A방식 핵심:** ①`**<mark>…</mark>**` 겹침 허용(기존 볼드가 핵심이면 그 위에 하이라이트, 필요시 새 볼드도 추가) ②하이라이트는 문법적으로 자족적인 단위 우선 — (A) 깔끔한 명사구 1순위, (B) 결론 동사까지 포함한 짧은 절(15자 미만). 단어 중간 절단·조사에서 끊고 동사 버리기·문장 통째(15자↑) 강조 금지. ③밀도 문단당 1개(뚜렷이 둘인 긴 문단만 최대 2).
- **결과:** day1=16·day2=15·day3=15·day4=15 `<mark>` — 각 3언어(ko/en/ja) 완전 일치. intro 3문단×3언어=9개(볼드+하이라이트 겹침). `<mark></mark>` 태그 balance 전량 확인, 악보 ```json 블록 HEAD 대비 바이트 전량 불변(diff 0).
- **검증:** `npm run build` 361페이지 성공 · `node scripts/check-invariants.mjs` 315블록 회귀 0 · 빌드 산출물에서 day1/intro 3언어 `<mark>` 개수 grep 일치 확인.
- **다음:** `05_update_backlog/08_Highlight.md` Phase 2 나머지(chord_building 28 day + solo_scale intro+52 day + funk_rhythm intro+32 day)는 A방식 레시피를 기계적으로 적용.

### 2026-07-09 (백로그 08 파일럿 — 산문 하이라이트 + 커리큘럼 볼드 레시피 동결, ⚠️ B방식 — 위 항목에서 A방식으로 재작업됨)
- **범위:** `chord_building_2months`의 intro(3문단×3언어, 볼드+하이라이트) + 1주차 day 1~4(①이론 ②시각 ③연습 ④팁, `<mark>` 하이라이트만) × 3언어 = 편집 15파일(meta.json 1 + day md 12 + backlog md 1 + Roadmap 1).
- **레시피 동결(`05_update_backlog/08_Highlight.md`):** day는 문단당 하이라이트 정확히 1개(최대 2, 이미 볼드가 핵심을 덮으면 0 허용) — 이론=핵심 원리, 연습=시간블록 목표, 팁=흔한 실수 경고. 헤딩·예제 캡션(**예제 N —**)·필러 제외, 기존 볼드와 겹치지 않음. intro는 문단당 볼드1(시스템명/기간 용어)+하이라이트1(약속·성과), 서로 다른 구절. 3언어는 의미 등가 구절로 동일 위치·개수.
- **결과:** day1 14개·day2 16개·day3 14개·day4 13개 `<mark>` — 각 3언어 개수 완전 일치(52개×3=156 마크). intro는 3문단 각 볼드1+하이라이트1(3+3)×3언어. 악보 ```json 블록 전부 바이트 불변(diff에 JSON 키 라인 0건 확인).
- **검증:** `node scripts/build-content.mjs` 성공 · `node scripts/check-invariants.mjs` 315블록 회귀 0 · `npm run build` 361페이지 성공 · 빌드 산출물에서 day1 3언어 모두 `<mark>` 14개, intro 3언어 모두 `<mark>` 3개 렌더 확인(하늘색 하이라이트 인프라는 기 완료 상태였음).
- **다음:** 백로그 08 Phase 2(나머지 solo_scale 52 day + chord_building 28 day + funk_rhythm 32 day + intro 2종, 주 단위 배치)는 이 레시피를 기계적으로 적용하면 됨. status는 08 문서에서 Phase 1 체크 완료로 갱신.

### 2026-07-09 (백로그 06 하 등급 — 악보 인라인 재배치 16 day, 06 완료)
- **범위:** 하 등급 16 day 재배치 — funk 3(모터·대비·고스트 타브→①이론) + chord 7(스위치표·9코드 지판→①좌표 문단) + solo 6(코드톤/타겟맵→③두뇌훈련). 커밋 a1ab0f7. solo m1.w2.d3는 ①이 좌표 미지목·②인접이라 선별 제외.
- **06 완료:** 상 17 + 중 44 + 하 16 = **77 day 재배치**(78 제안 중 1 선별 제외). 백로그 06 status DONE. 전 과정 "레시피 동결 + ko 스니펫 앵커(볼드 미포함 사전검증) + copy(고아 방지) + day별 V1~V5".
- **검증:** V1 build 0 · V2 3언어 동일 · V3 회귀 0 · V4 미치환 슬롯 0 · V5 비대상 불변.

### 2026-07-09 (백로그 06 중 등급 — 악보 인라인 재배치 44 day + 중·하 표 문서 이관)
- **범위:** 중 등급 44 day 재배치 — funk 5(391926b) + chord 11(cfa3f9f) + solo 28(97bd9cf). 상과 동일 방식(레시피 동결·ko 스니펫 앵커·copy·day별 V1~V5). solo는 맵→①좌표 문단(14) + 릭/라인/드릴→③연습 스텝(42)로 56블록 복제.
- **문서:** 조사 원본(/tmp 휘발성)의 중·하 등급 상세 표를 `05_update_backlog/06_visual-relocation.md`로 이관(중 44 완료 표시 + 하 17 미착수 목록). 하 17만 남음(조사상 이득 작을 수 있어 선별 권장).
- **검증:** 각 커밋 V1 build 0 · V2 3언어 동일 · V3 회귀 0 · V4 미치환 슬롯 0 · V5 비대상 불변. (중간 실수: apply 중복 실행으로 이중 삽입 → git revert 후 1회 재적용으로 복구, V게이트가 포착.)

### 2026-07-09 (백로그 06 상 등급 — 기존 커리큘럼 악보 인라인 재배치 17 day)
- **배경:** 백로그 01 Part A로 악보를 어느 섹션에든 인라인할 수 있게 된 뒤, 전 116 day 검토(78 제안)에서 상 등급 17 day를 재배치. ①이론이 "아래 다이어그램/맵"을 가리키거나 ③연습이 ②의 맵/타브를 참조하는데 그 악보가 ②에만 있던 "설명↔그림 분리"를 해소.
- **방식(레시피 동결):** 사용자 결정 "선별적 판단". day마다 ②의 지목 블록을 ①설명/③연습 스텝의 해당 문단 뒤에 **복제(copy)** — ②가 전용 캡션과 함께 블록을 가져 이동 시 캡션이 고아되므로 복제 선택. 앵커=섹션 내 문단 인덱스(3언어 라인정렬로 언어 독립). 산문·악보 데이터 불변, 위치만 추가. relocate 하네스로 3언어 원자 편집.
- **범위:** funk 상8(3b6692a) + chord 상5(f18a881) + solo 상4(56412cc). 중 44·하 17은 미착수(여력 시 확대).
- **검증:** 각 커밋 V1 build 0 · V2 ko/en/ja json 동일 · V3 check-invariants 회귀 0(copy는 id중복이라 기존 지문 불변) · V4 대상 섹션 render-area·미치환 슬롯 0 · V5 비대상·타 커리큘럼 바이트 불변.

### 2026-07-09 (백로그 01 — 시각자료 배치 + 커리큘럼 소개 완료)
- **배경:** 악보가 ②시각 자료 섹션에만·산문 뒤에 몰려 렌더돼, 이론/연습 설명 옆에 지판을 못 넣던 제약(사용자 직접 겪은 문제). 커리큘럼 소개 페이지도 부재.
- **Part A(인라인 배치):** build-content가 네 섹션의 ```json 블록을 문서순 전역 인덱스 `@@SCORE:N@@` 센티넬로 치환 → `data-score-slot` div 후처리, LessonView `hydrateScoreSlots`가 슬롯을 `renderScore` SVG로 그 위치에 인라인 치환(`#scoresMount` 제거). 저자는 ```json을 원하는 위치에 두면 그 자리에 렌더(새 문법 불요). 기존 데이터는 캡션 옆 인라인으로 개선, 악보 데이터 불변.
- **Part C(커리큘럼 소개):** meta.json 3언어 `intro` 필드 → CurriculumView 헤더 문단 렌더(`.curr-intro`). solo/chord/funk 3커리큘럼에 각 3문단 토스톤 소개(localization-writer). 없으면 미표시(하위호환).
- **Part B(증발 경고):** visual 밖 악보 경고를 먼저 넣었다가 Part A로 정상 렌더되며 대체.
- **검증:** 각 커밋 V1 build 0 · V3 check-invariants 회귀 0(315블록 데이터 지문 불변) · typecheck 0err · 이론 섹션 지판 렌더 기능 테스트. 커밋 1f38647·657c552·b433187. 백로그 01 status→DONE.

### 2026-07-09 (검증 — 렌더러 역량 가드 + 의미 불변식 회귀 체크로 기존 커리큘럼 보호)
- **배경:** 미래에 밴딩·해머링을 쓰는 커리큘럼 추가 시 기존 3개 커리큘럼 렌더가 안 바뀌게 보호하되, "픽셀 락"의 뻣뻣함 없이 미래 개선은 자유롭게 두고 싶음.
- **가드(build-content.mjs):** 렌더러 역량 계약 — notation이 staff/staff+tab/rhythm(→staff.ts)이면 technique는 `STAFF_TECHNIQUES{none,palm_mute,dead_note}`만 허용. staff.ts 미구현 기법(bend·hammer_on·pull_off·slide·vibrato·harmonic)을 오선보 경로에서 쓰면 빌드 차단 → tab.ts 경로(notation 미지정/"tab")로 내거나 staff.ts 렌더 추가 후 Set 확장. 락이 아니라 능력 계약(한 곳 수정으로 확장).
- **회귀 체크(scripts/check-invariants.mjs + curriculum-invariants.json):** 픽셀이 아니라 블록별 **의미 지문**(notation/마디수/박자합/온셋·쉼표·dead·노트헤드 수/technique 집합/지판 dot)만 대조. 렌더 코스메틱 개선은 통과, 내용 회귀만 차단. `--update`로 정당한 변경 시 baseline(315블록) 갱신 → 리뷰에서 diff 확인.
- **효과:** solo(tab 경로)는 밴딩·해머링·비브라토 자유 유지. chord/funk(staff 경로)는 미지원 기법 차단. 미래 렌더러 개선은 의미 지문만 지키면 자유.
- **검증:** build exit 0(기존 데이터 통과), 가드 음성 테스트 통과, check-invariants 재실행 회귀 0.

### 2026-07-08 (컴핑 "예제3 풀 화음" 확장 — chord w7 4일 + w5d3 보이스 리딩 블록)
- **배경:** T4에서 근음+가이드톤 컴핑 5일에 예제3(풀 화음)을 추가했다. 이번엔 **보이스 리딩/전위 계열**(w5d3 3전위, w7d1~d4 탑노트 멜로디 컴핑) 5일에 같은 "코드 전체 컴핑" 예제3을 추가.
- **구성:** 각 day 예제2(낮은음+탑노트 2음 컴핑, 일부는 굴린 3음)의 **리듬을 그대로 재사용**하고, 각 온셋을 그 마디 트라이어드 풀 보이싱으로. **탑노트 멜로디는 화음의 최상단 음으로 보존**되어 보이스 리딩 학습 취지 유지. 대표음=최저음(주로 3번 줄), 기존 블록 무수정.
- **마디별 코드·보이싱 출처:** w5d3=G 3전위(전부 당일 지판). w7d1=G 2전위(당일). w7d2=C·Am(당일)→F·G(②w7d4). w7d3=C(당일 c_top_c)·G(당일 g_top_b)→F(②w7d4)·C(②w7d2 c_top_g). w7d4=C·Am(②w7d2)→F·G(당일). 이론 도출 음 0(전부 실재 지판 dot).
- **분담:** 데이터(JSON 블록)는 결정론적 생성기+지판 대조(51음 0오류)로 처리, 산문 3언어는 localization-writer 서브에이전트 위임.
- **검증(5커밋):** 각 day V1 build 0 · V2 ko/en/ja json 블록 동일 · V3 새 블록 vf-notehead 델타=Σchord.length(마디·쉼표 예제2와 동일) · V5 비대상·solo 105블록 바이트 불변(신규 키 5개만 추가).

### 2026-07-08 (T4 — 컴핑 "예제3 풀 화음" 5일 신규 저작 + 생성 프롬프트·플레이북 갱신)
- **배경:** T3에서 KEEP으로 남긴 근음+가이드톤 컴핑(예제2)들은 산문의 "익으면 코드 전체를 스트로크" 확장구를 보여줄 시각 자료가 없었다. 그 확장구용 **예제 3(코드 전체 컴핑)** 을 5개 day에 새로 저작.
- **대상·구성:** chord_building m1 — w3d2(Dm7·G7·Cmaj7), w1d4(Gm7), w2d4(Cmaj7), w3d4(ii-V-I-I 루프), w4d4(쉘 ii-V-I). 각 day ②섹션 끝에 신규 `full_chord_comp` 블록 1개 추가. **예제2와 리듬(마디·온셋·duration·rest·technique) 완전 동일**, 각 온셋만 단음→그 마디 코드 풀 보이싱(대표음=최저음, chord[]=나머지). 보이싱은 그날/그주 지판 dot에서만 취득(w3d2·w3d4는 Dm7·G7·Cmaj7 일부를 같은 주 w3d1 지판에서). 기존 블록·다른 day 무수정.
- **분담:** 데이터(JSON 블록)는 결정론적 생성기+지판 대조로 본체 처리, 산문(② 소개·▶ 캡션·③ 참조 3언어)은 localization-writer, 프롬프트·플레이북은 general-purpose 서브에이전트에 위임 후 검증.
- **T4b:** week_*_prompt.md **29개** 전부 + 플레이북에 렌더 8규칙 반영(컴핑=chord[], 단선율은 단음, 스윙=meta.feel, dead_note/palm_mute 구분, stroke=arpeggio 전용, notation:"rhythm"·슬래시 금지). 스키마 JSON은 score.ts와 이미 정합(무변경).
- **검증(6커밋):** 각 day V1 build 0 · V2 ko/en/ja json 블록 동일 · V3 새 블록 vf-notehead 델타=Σchord.length(마디·쉼표·dead 예제2와 동일) · V5 비대상·solo 바이트 불변(신규 키만 추가). T4b V1 build 0 + 대상 외 무변경.

### 2026-07-08 (T3 데이터 마이그레이션 — 컴핑/커팅 단음 축약 → chord[] 풀 화음 승격)
- **배경:** funk·chord_building 커리큘럼의 컴핑/커팅 예제가 근음·가이드톤 **단음**으로 축약돼, 산문의 "코드/트라이어드를 스트로크·울린다"와 달리 화면엔 한 음만 보였다. `TabNote.chord[]`(동시타) 필드로 풀 보이싱을 표기해 산문에 데이터를 맞췄다.
- **변환 규칙(reading i):** 각 실음 타점 = 그 마디 코드의 풀 보이싱. 대표음=최저음(string 최대), chord[]=나머지(지판 dot의 string/fret/role/label 그대로). 타점이 이미 대표음이면 기존 필드 보존+chord[] 추가(funk 악센트·label 보존), 걷는 가이드톤이면 대표음으로 재구성(단음 움직임 소멸=의도). 리듬/쉼표/dead_note/palm_mute/마디수/박자합 절대 불변. 3언어 동일 편집.
- **T2.5 렌더 선수정:** `tabChordColor` 를 "혼합 role 화음은 중립색"으로(만장일치 색만 채택). 스태프는 setKeyStyle 무영향.
- **T3-0 검증기 강화:** `build-content.mjs validateScore` 에 chord[] string 중복 금지·rest/dead 공존 금지·대표음≥모든 chord string·notation:"rhythm" 거부 추가. 마이그레이션 SSOT = `_design_docs/02_curriculum/_t3_worksheet.md`.
- **적용 결과:** **CHORD 44블록**(funk 20: w4·w5 각 8·w8 4 / chord 24: w1~w6·w8) + **feel:swing8 2블록**(funk w7 셔플, meta만). funk w5d2 는 산문대로 major/minor 분할 스택. **chord w7d1(보이스 리딩·탑노트 멜로디)은 KEEP 확정**(구조가 KEEP 형제와 동일 + 같은코드 다른보이싱 → 사용자 승인, 45→44). solo_scale·지판(fretboard_diagram)·이론 도출 음 0.
- **검증(주차별 커밋 14개):** V1 build 0 · V2 ko/en/ja json 동일 · V3 변환 온셋 vf-notehead=1+chord.length(스태프 그룹수 불변) · V5 비대상·solo 105블록 바이트 불변(vf-auto ID 정규화) · apply 단계 원본 온셋∈배정 보이싱 단언 · 레시피 75스택 전건 지판 대조.

### 2026-07-08 (UI — 랜딩·커리큘럼 페이지 하단 Contact 섹션)
- **변경:** 랜딩(홈)·커리큘럼 개요 페이지 맨 아래에 **Contact 섹션** 추가 — YouTube·Instagram 로고 2개(브랜드 원색)를 새 탭 링크로. 레슨 페이지에는 넣지 않음.
- **구현:** 재사용 컴포넌트 `components/ContactSection.astro`(스코프 스타일) → `HomeView`·`CurriculumView` 하단에 배치. 링크 SSOT = `config.ts` `CONTACT_LINKS`(운영자 url만 교체, 도네이션 채널과 동일 패턴). 문구 = i18n `contact.{title,sub,youtube,instagram}` 3언어(키셋 정합). 로고 원본(SSOT) `assets/contact/*.png` → 최적화 `public/contact/*.webp`(96px·브랜드색·알파 유지, 각 ≈2.4KB).
- **접근성:** `aria-label`(YouTube/Instagram), `target=_blank rel=noopener noreferrer`, 이미지 `alt=""`·`loading=lazy`·`width/height`(CLS 방지). 다크모드는 시맨틱 토큰 자동 대응.
- **검증:** `astro check` 0 error · i18n 3언어 키셋 완전 일치 · `npm run build` exit 0(361p) · dist 스캔 — Contact 홈(ko/ja)·커리큘럼(ko/en) 각 1개, 레슨 0개.

### 2026-07-08 (오선보/타브 — 데드 노트 X + 팜뮤트 P.M. 렌더 + 렌더 계약 문서화)
- **팜뮤트 "P.M." 렌더:** `render/staff.ts` 가 `technique:"palm_mute"`(음정 있는 실음) 위에 `Annotation("P.M.")`(role 색) 표기. chord_building의 진짜 팜뮤트 20개가 오선보에 P.M.으로 보인다. (funk의 뮤트 타격음은 앞서 dead_note→X 로 이관됨 — 아래.)
- **데드 노트 X 이관(선행):** `technique:"dead_note"` 신설 → 오선보 X 노트헤드(`.../x`)·타브 "X"(임시표 없음). funk_rhythm의 뮤트 타격음 991개(×3언어) palm_mute→dead_note 치환(주차별 커밋). chord_building 20개는 진짜 팜뮤트라 유지.
- **문서화(향후 커리큘럼 자동 적용):** `web_app/docs/technical_spec.md` §5.4 를 현행 렌더 계약으로 갱신 — VexFlow 4.2.5 고정, treble-8vb 표기 옥타브, stem 방향 규칙(가운데 줄 B4 기준), 빔 박 단위·Beam 선생성, 레이아웃(2마디/줄·음역대 적응 높이), technique 렌더(dead_note X·palm_mute P.M.). `00_curriculum_authoring_playbook.md`·`fretboard_score_schema.json` 에 dead_note vs palm_mute 구분 명시. staff.ts 헤더 계약 갱신.
- **검증:** astro check 0 error · build exit 0(totalDays 52/32/32) · dist 렌더 assertion: chord P.M.=20·funk P.M.=0·funk X(dead)=991·chord X=0(무변경) · 헤드리스 렌더로 P.M.(role 색, 음표 위)·임시표 유지 육안 확인.

### 2026-07-08 (문서 — 카드 썸네일 듀오톤 패턴을 신규 커리큘럼 재사용 가이드로 정리)
- **목적:** 향후 추가 커리큘럼도 코드 수정 없이 썸네일 사진(듀오톤)을 갖도록 SOP·계약을 SSOT 문서에 명문화.
- `_design_docs/00_curriculum_authoring_playbook.md`: §2에 `meta.json`(카드 메타 발원, `image` 필드 포함) 추가, §6 체크리스트에 썸네일 항목, **§8 신설**(원본↔최적화 분리·`optimize-curriculum-images.mjs`·배선 3곳·렌더 계약·품질 체크).
- `web_app/docs/technical_spec.md` §4.4: 카드 메타 발원=`meta.json`으로 갱신(OPEN-2 해소), `image: string|null` 필드·public/curriculum webp·듀오톤 렌더 포인터 명시.
- `web_app/docs/design_spec.md` §4.6: 썸네일을 듀오톤 4겹 레이어(img→그라디언트→스크림→칩)·전역 SVG 필터·`[data-theme]` 전환·토큰(`--grad-a/-b`, `--grad-fallback`)·`.no-img` 폴백 계약으로 재기술.

### 2026-07-08 (UI — 커리큘럼 카드 썸네일에 듀오톤 사진 적용)
- **변경:** 랜딩 카드의 파란 그라디언트 전용 밴드에 **기타 사진을 듀오톤(brand-blue) 처리**해 얹었다. 레이어: `<img>`(듀오톤) → 브랜드 그라디언트(`::before`) → 하단 스크림(`::after`) → 칩. 이미지 없는 커리큘럼(향후 추가분)은 기존 그라디언트 전용 밴드로 그레이스풀 폴백(`.no-img`).
- **에셋:** 원본(SSOT) `assets/Curriculum_image/*.jpg`(10장, 3개 매핑 외는 풀로 보존)에서 **최적화 사본만** `public/curriculum/{id}.webp` 생성 — 가로 1200px·그레이스케일·WebP q72. 결과 각 21~27KB(목표 120KB 이하). 변환은 일회성 스크립트 `scripts/optimize-curriculum-images.mjs`(빌드 파이프라인 미연결).
  - solo_scale→solo-scale.webp(27KB) / chord_building→chord-building.webp(25KB) / funk_rhythm→funk-rhythm.webp(21KB)
- **듀오톤:** JS 0 — `Base.astro` `<body>` 최상단에 SVG 필터 `#duotone-light`/`#duotone-dark` **전역 1쌍**만 정의. CSS 는 `[data-theme]` 속성 셀렉터로 전환(미디어쿼리 미사용, View Transitions·Safari 안전). 그라디언트 색은 전부 `tokens.css` 변수(`--grad-a/-b`, 폴백 `--grad-fallback`) — 컴포넌트 하드코딩 0.
- **데이터:** `meta.json`에 `image`(언어 무관 단일 경로) 추가 → `build-content.mjs`(`image: curMeta?.image ?? null`) → `types/content.ts`(`image: string|null`) → `build:content`로 manifest 반영. `<img>`는 `alt=""`·`loading="lazy"`·`decoding="async"`·`width/height`(CLS 방지).
- **프레이밍:** 밴드(≈3.6:1)가 원본(3:2)보다 넓어 세로만 크롭 → `object-position: 50% 45%`(살짝 위)로 통일. 하단 상표 라벨(f홀 라벨 등)·노브, 상단 빈 배경을 밴드 밖으로 밀어냄.
- **검증:** `astro check` 0 error · `npm run build` exit 0(361p) · dist `/curriculum/*.webp` 3장 포함 · 카드별 올바른 webp 참조 · 필터 페이지당 각 1개 · 라이트/다크 렌더 재현 미리보기로 듀오톤 통일·칩 가독성 육안 확인.

### 2026-07-08 (UX — 홈·커리큘럼 페이지에서 '후원하기' 하단 CTA 숨김)
- **변경:** 랜딩(홈)과 커리큘럼 개요 페이지에서 하단 고정 '후원하기' 진입 버튼(`footer-cta`)을 노출하지 않는다. **후원 진입은 레슨 상세 페이지에서만** 유지(월·커리큘럼 완료 시 자동 도네이션 시트 연출도 그대로).
- **의도:** 학습 시작 전(홈)·목차 탐색 중(커리큘럼) 화면에서는 후원 부담을 덜고, 실제 레슨을 완료한 맥락에서만 자연스럽게 후원을 안내한다.
- **구현:** `layouts/Base.astro`에 `showDonate?: boolean` prop 추가(기본 `true`). 하단 `footer-cta`를 `{showDonate && …}`로 감쌈. 홈 2개(`pages/index.astro`·`pages/[lang]/index.astro`) + 커리큘럼 2개(`pages/c/[curriculum]/index.astro`·`pages/[lang]/c/[curriculum]/index.astro`)에서 `showDonate={false}` 전달. `app.ts`는 `#openDonateBtn`을 `closest()` 위임으로만 참조 → 버튼 미렌더 시에도 안전(무영향).
- **검증:** `astro check` 0 error · `npm run build` exit 0(361페이지) · dist HTML 스캔 — 홈(ko/en)·커리큘럼(ko/ja) `footerCta` 0개, 레슨(ko/en) 1개로 의도대로 분기.

### 2026-07-07 (버그 수정 — 오선보/타브 렌더러 VexFlow 5→4 전면 이관 + 조판 개선)
- **증상(누적 리포트):** ① 모든 오선보·타브 글리프가 `.notdef`(□) 로 깨짐. ② 음표 스템이 음표머리에서 떨어져 나옴. ③ 타브가 6줄 중 4줄만 보이고 프렛 숫자 미표시. ④ 마디가 많으면 한 줄에 몰려 너무 작게 표시(가독성↓). ⑤ 16분음표가 한 마디 통짜 빔으로 묶임. ⑥ 오선보 음정↔타브 실제음 위치 불일치 의심.
- **근본 원인:** **VexFlow 5** 는 음악 글리프를 `<text font-family="Bravura">` + 웹폰트로 그리고, 글리프 위치·폭을 **canvas `measureText`(폰트 metrics)** 로 계산한다. 빌드타임 jsdom 엔 canvas·폰트 metrics 가 없어(스텁은 가짜 폭 반환) → 글리프 tofu(①) + 스템/프렛 배치 오류(②③⑥). @font-face 임베드(직전 커밋)로 ①은 완화됐으나 빌드타임 **geometry** 는 여전히 깨짐. node-canvas 는 네이티브 의존이라 CF Pages 빌드 정책상 배제.
- **해결:** 렌더러를 **VexFlow 4.2.5 로 이관**(`render/staff.ts` 재작성). v4 는 글리프를 **baked 아웃라인 `<path>`(metrics 내장)** 로 그려 폰트·canvas 불필요 → tofu 0·스템 정확·자체완결 SVG. 프렛 숫자만 시스템 폰트 `<text>` 라 `getBBox` 근사 스텁으로 폭 측정. 직전 @font-face 임베드(`generateStaffFonts`·`vexflow-fonts.css` import)는 불필요해져 제거.
- **조판 개선(동시):** ④ **한 줄에 2마디씩** 배치·세로 스택(자동 줄바꿈). ⑤ 빔을 **박(beat) 단위로 끊음**(16분음표 4개·8분음표 2개씩). 마디 폭=음표 수 비례(오버플로 방지). 세로 높이=음역대 적응(저음 렛저라인이 타브와 겹치지 않게, 고음역은 컴팩트). ⑥ `pitchOf`(string+fret+tuning) 는 concert-pitch 로 타브와 **동일 옥타브** — 스크린샷으로 프렛↔오선 위치 일치 확인.
- **검증:** `astro check` 0 error · build exit 0(totalDays 52/32/32 유지) · **전체 348 레슨 페이지·384 staffsvg 스캔: tofu 0·검정 누출 0·viewBox 누락 0** · 헤드리스 크롬 렌더로 음자리표·박자표·빔(4개묶음)·6줄 타브·프렛 숫자·저음 렛저라인/타브 비겹침 육안 확인. `vexflow` 의존 5.0.0→4.2.5(package.json/lock).


### 2026-07-07 (『펑크 리듬』 Week 8 완성 = **Month 2 · 전체 커리큘럼 완성** — 레코딩 챌린지)
- **Week 8 (펑크 머신 레코딩 챌린지) 전량 작성:** day_1~4 × 3언어(12) + week_8_overview×3 = 15파일. 교육 축: D1 8주 무기고 총정리·선택지 카드(커팅 vs 싱글노트)·챌린지 트랙(E·BPM 78) → D2 커팅 그루브 빌딩(벌스) → D3 싱글노트 리프 빌딩(훅)·커팅과 이어붙이기 → D4 최종 레코딩·칼박자 셀프 진단·2개월 회고·클로징.
- **2개월(8주) 전량 완성·검증:** `npm run build` exit 0, **funk totalDays=32**(월1 16 + 월2 16). D8 페이지 12개 staffsvg≥2·검정 0, 빨강 0, ②JSON ko=en=ja 일치(d1·d4=2, d2·d3=3), ① 494~554자, 프론트매터 3언어 일치.
- `funk_rhythm_2months`가 **완전한 2개월(32일) 커리큘럼**으로 빌드 발견·렌더(meta.json + 4개 주제: 오른손 리듬 엔진 → E9 원코드 → 3줄 커팅 → 싱글노트 → 스타카토/셔플 → 레코딩).
- 타 커리큘럼·web_app·prompt 무수정.

### 2026-07-07 (『펑크 리듬』 Week 7 완성 — 스타카토와 셔플)
- **Week 7 (스타카토·셔플) 전량 작성:** day_1~4 × 3언어(12) + week_7_overview×3 = 15파일. 교육 축: D1 스타카토(여음 끊기) vs 레가토 비교 → D2 한 마디 안 길이 설계(끊고 늘리기) → D3 16비트 셔플(정박 vs 스윙, 'long-short') → D4 스타카토+셔플 통합 그루브.
- **음 길이 표기:** duration으로 스타카토(짧은 음+rest)/레가토(긴 음) 구현, 마디별 duration 합=16(4/4) 검산 완료. **셔플은 스키마에 삼잇단음표가 없어** 악보를 정박(8분)으로 두고 meta.title·산문에 'SWING the 8ths(long-short)' 명시(표준 관행).
- **검증(게이트 통과):** build exit 0, **funk totalDays=28**. 12페이지 staffsvg≥2·검정 0, 빨강 0, ②JSON ko=en=ja 일치(전부 2), ① 501~508자, 프론트매터 3언어 일치.
- 타 커리큘럼·web_app·prompt 무수정.

### 2026-07-07 (『펑크 리듬』 Week 6 완성 — 싱글 노트 펑크)
- **Week 6 (싱글 노트 펑크) 전량 작성:** day_1~4 × 3언어(12) + week_6_overview×3 = 15파일. 교육 축: D1 한 줄(5번) 라인·완벽 뮤트 → D2 두 줄(5↔4) 크로스·뮤트 유지 → D3 라인+고스트(빈 곳 채우기) → D4 리프 완성·백킹 베이스와 유니즌/콜앤리스폰스.
- **싱글 노트 라인(표준 튜닝 검산):** E 마이너 펜타토닉 박스(5·4현), 근음 E=5현 7프렛(E9 근음과 동일). 음: b7(5,5)·R(5,7)·b3(5,10)·4(4,7)·5(4,9). 근음·5도=파랑, 나머지=scale, 고스트=palm_mute. 노트맵 `fretboard_diagram` 병기(d1·d2).
- **검증(게이트 통과):** build exit 0, **funk totalDays=24**. 12페이지 staffsvg≥2·검정 0, 빨강 0, ②JSON ko=en=ja 일치(d1·d2·d4=3, d3=2), ① 491~510자, 프론트매터 3언어 일치.
- 타 커리큘럼·web_app·prompt 무수정.

### 2026-07-07 (『펑크 리듬』 Week 5 완성 = **Month 2 착수** — 미니멀 3줄 보이싱)
- **Week 5 (미니멀 3줄 커팅) 전량 작성 + Month 2 오버뷰:** day_1~4 × 3언어(12) + week_5_overview×3 + **month_2_overview×3** = 18파일. 교육 축: D1 고음 3줄 E 메이저 트라이어드·3줄 조준 → D2 마이너·인버전(손가락 하나로 색) → D3 아랫줄 뮤트(넓게 커팅해도 3줄만) → D4 통합 커팅 그루브(고스트·악센트 재적용).
- **3줄 트라이어드(표준 튜닝 검산):** E major(1·2·3현 = 9·9·7 = E·G#·B), E minor(9·8·7), 2nd 인버전(4·5·4). 변화음 b3 = target+highlight(초록). 커팅 대표음 = 근음(3현 9프렛), 3층(고스트/실제음/악센트) 유지.
- **검증(게이트 통과):** build exit 0, **funk totalDays=20**. 12페이지 staffsvg≥2·검정 0, 빨강 0, ②JSON ko=en=ja 일치(d1·d3·d4=3, d2=4), ① 501~527자, 프론트매터 3언어 일치.
- 타 커리큘럼·web_app·prompt 무수정.

### 2026-07-07 (『펑크 리듬』 Week 4 완성 = **Month 1 완성** — E9 원코드 잼)
- **Week 4 (E9 원코드 잼) 전량 작성:** day_1~4 × 3언어(12) + week_4_overview×3 = 15파일. 교육 축: D1 E9 폼(9도=노랑) + 모터 재적용 → D2 E9+고스트(폼 유지·압력 온·오프) → D3 E9+악센트 + Em7 색바꿈 소개 → D4 최종 원코드 잼(세 층 혼합)·백킹 녹음·1개월 회고.
- **진짜 코드 등장:** E9(근음 5현 7프렛 = E·G#·D·F# = R·3·b7·9, 9도=`color`/노랑) 정식 도입, Em7 셸(R·b3·b7) 병기. 표준 튜닝 기준 음정 검산 완료. 실제음(role root/chord_tone=파랑)·고스트(palm_mute)·악센트(target+highlight=초록) 3층.
- **검증(게이트 통과):** build exit 0, **funk totalDays=16(Month 1 완성)**. 12페이지 staffsvg≥2·검정 0, 빨강 0, ②JSON ko=en=ja 일치(d1·d3·d4=3, d2=2), ① 486~510자, 프론트매터 3언어 일치.
- 타 커리큘럼·web_app·prompt 무수정.

### 2026-07-07 (『펑크 리듬』 Week 3 완성 — 악센트)
- **Week 3 (악센트) 전량 작성:** day_1~4 × 3언어(12) + week_3_overview×3 = 15파일. 교육 축: D1 악센트=특정 위치만 음량↑('한 박의 &') → D2 강세 위치 이동(e·a) → D3 고스트+악센트 결합(3층: 고스트/실제음/악센트) → D4 통합 그루브·악센트를 스네어(2·4박)에 맞물림.
- **색 3층:** 고스트=palm_mute(색 없음), 실제음=chord_tone(파랑), 악센트=target+highlight(초록) — 같은 스탭 자리에서 압력으로 3단계. D1에 강세 위치용 `fretboard_diagram` 병기(JSON 3블록).
- **검증(게이트 통과):** build exit 0, **funk totalDays=12**. 12페이지 staffsvg≥2·검정 0, 빨강 0, ②JSON ko=en=ja 일치, ① 484~510자, 프론트매터 3언어 일치.
- 타 커리큘럼·web_app·prompt 무수정.

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
