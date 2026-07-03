# 🎸 Riff — Roadmap & 진행 현황

> 무료 기타 레슨 웹 서비스. 이 문서는 **현재 구현 상황·변경 로그·다음 작업**을 관리하는 단일 대시보드다.
> 규칙: 작업이 하나 끝날 때마다 이 파일을 갱신한다(`CLAUDE.md` 고정 규칙).
> 최종 갱신: 2026-07-03 (Astro 마이그레이션 완료)

---

## 1. 지금 어디까지 왔나 (한눈에)

| 영역 | 상태 | 요약 |
|---|---|---|
| **설계 문서(_design_docs)** | ✅ 완료 | PRD·아키텍처·스키마·로컬라이제이션·저작 플레이북 확정 |
| **커리큘럼 콘텐츠** | ✅ 완료 | `solo_scale_3months` = Week 0 + 12주 = **52 Day**, KR/EN/JP |
| **악보 데이터** | ✅ 완료 | 105개 지판/타브 JSON, 스키마 검증 전량 PASS |
| **i18n** | ✅ 완료 | day 156(52×3) + 개요 48(16×3) + UI 카피 91키(3언어 diff 0) |
| **명세서** | ✅ 완료 | 기술 명세 / 디자인 명세(+상호 정합 리뷰 통과) |
| **web_app (Astro)** | ✅ 동작 | **Astro+TS로 이전 완료** — 163 정적 페이지, SEO(레슨별 HTML·hreflang), View Transitions |
| **기능 확장** | 🟨 예정 | 분류 필터 칩 · 자동 후원(드림기타) 연출 |
| **배포** | ⬜ 예정 | Cloudflare Pages (GitHub 연동) |

**요약:** 콘텐츠·설계·명세·앱까지 완성됐고 **Astro 이전(SEO)까지 끝났다.** 다음은 분류 필터·드림기타 후원 연출을 얹고 CF Pages에 배포하는 단계다.

---

## 2. web_app 구현 상황 (상세)

### ✅ 완료 (Astro 이전)
- **스택:** Astro + TypeScript, `output:'static'`(어댑터 없음, 무런타임 외부의존). `astro check` 0 errors.
- **라우팅/SEO:** 파일 기반 정적 라우팅, **레슨별 실제 HTML 156(52×3언어) + 홈3 + 커리큘럼3 = 162 + 404/robots/sitemap**. hreflang(ko/en/ja+x-default)·canonical·언어별 `<html lang>`. URL 스킴 `/c/{cur}/m{M}/w{W}/d{D}/`(ko 무접두, `/en/`·`/ja/` 접두).
- **전환:** `<ClientRouter/>` View Transitions(부드러운 소프트 내비).
- **재사용:** SVG 렌더러·CSS 토큰·콘텐츠 JSON/manifest·i18n 91키·storage/progress/nudges/content 로직 그대로 이식.
- **하이드레이션:** `src/scripts/app.ts`(진도·완료·바텀시트·넛지, `astro:page-load` 재바인딩), `confetti.ts`, `toast.ts`.
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

### 🟨 예정
- **커리큘럼 분류:** manifest에 `instrument/topic/level/tags` 필드 + 랜딩 필터 칩(5개+ 시점).
- **자동 후원 연출:** Month·커리큘럼 완료 시 '드림기타(Fender Strat · Cory Wong Sig)' 단계형 시트 → 후원(자동 트리거는 이미 구현, 연출·이미지 추가 필요).

### ⏳ 열린 이슈(비차단)
- `astro.config` `site`가 placeholder(`https://riff.pages.dev`) → 실도메인 확정 시 교체(canonical/hreflang/sitemap 절대 URL).
- OPEN-6: 프라이버시 경량 분석 도구 선정.
- OPEN-8: 보강 UI용 i18n 키 3개(`nick.chip_empty`, `storage.blocked_banner/toast`) 3언어 카피.
- 도네이션 실제 링크(현재 플레이스홀더).
- `lib/storage.ts` `escape`/`unescape` deprecation 힌트 3건(정리 권장).

---

## 3. 로드맵 (마일스톤)

- [x] **M0 설계 정합화** — 문서·스키마·프롬프트 확정
- [x] **M1 콘텐츠 시드** — 3개월 52 Day + 악보 + 3개국어
- [x] **M2 MVP 구현** — 바닐라+Vite+TS 앱(렌더러·i18n·상태·완료)
- [x] **M2.5 Astro 이전** — 정적 페이지·SEO·View Transitions (163 페이지, 검증 통과)
- [ ] **M2.6 기능 확장** — 분류 필터 칩 · 자동 후원(드림기타) 연출 ⬅ **현재**
- [ ] **M3 배포** — Cloudflare Pages(GitHub 연동), 도네이션 링크
- [ ] **M4 확장** — 신규 커리큘럼(잽잽이/펑키 리듬 등) 모듈 추가

---

## 4. 변경 로그 (Changelog)

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
1. **드림기타 후원 연출** — 월/커리큘럼 완료 시 단계형 시트(Fender Strat · Cory Wong Sig 이미지 → 응원 문구 → 후원 채널). 이미지 에셋(실사진 자체호스팅) 필요.
2. **커리큘럼 분류** — manifest `instrument/topic/level/tags` + 랜딩 필터 칩(커리큘럼 5개+ 시점).
3. **manifest 커리큘럼 title 언어별 번역** 갭 수정.
4. **Cloudflare Pages 배포** — GitHub 연동, 실도메인 확정 시 `astro.config` `site` 교체.
