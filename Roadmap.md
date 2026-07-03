# 🎸 Riff — Roadmap & 진행 현황

> 무료 기타 레슨 웹 서비스. 이 문서는 **현재 구현 상황·변경 로그·다음 작업**을 관리하는 단일 대시보드다.
> 규칙: 작업이 하나 끝날 때마다 이 파일을 갱신한다(`CLAUDE.md` 고정 규칙).
> 최종 갱신: 2026-07-03

---

## 1. 지금 어디까지 왔나 (한눈에)

| 영역 | 상태 | 요약 |
|---|---|---|
| **설계 문서(_design_docs)** | ✅ 완료 | PRD·아키텍처·스키마·로컬라이제이션·저작 플레이북 확정 |
| **커리큘럼 콘텐츠** | ✅ 완료 | `solo_scale_3months` = Week 0 + 12주 = **52 Day**, KR/EN/JP |
| **악보 데이터** | ✅ 완료 | 105개 지판/타브 JSON, 스키마 검증 전량 PASS |
| **i18n** | ✅ 완료 | day 156(52×3) + 개요 48(16×3) + UI 카피 91키(3언어 diff 0) |
| **명세서** | ✅ 완료 | 기술 명세 / 디자인 명세(+상호 정합 리뷰 통과) |
| **web_app MVP** | ✅ 동작 | 바닐라+Vite+TS 구현, `npm run build` 성공, 헤드리스 렌더 확인 |
| **Astro 마이그레이션** | 🟨 착수 예정 | SEO·정적 페이지·View Transitions |
| **배포** | ⬜ 예정 | Cloudflare Pages (GitHub 연동) |

**요약:** 콘텐츠·설계·명세·MVP까지 완성됐고, 지금부터 **SEO를 위해 Astro로 이전** 후 분류 필터·자동 후원 연출을 얹고 CF Pages에 배포하는 단계다.

---

## 2. web_app 구현 상황 (상세)

### ✅ 완료 (현 바닐라 MVP)
- **스캐폴드:** Vite 6 + TypeScript(strict), 무런타임 의존. `package.json`/`vite.config.ts`/`tsconfig.json`/`public/_redirects`.
- **앱 셸:** `index.html`(뷰 3종 + 바텀시트 3종 + 토스트 + 컨페티), `src/styles/tokens.css`·`app.css`(Toss 토큰, 다크모드).
- **콘텐츠 파이프라인:** `scripts/build-content.mjs` — `_design_docs` day/overview md → `src/content/*.json`(52 day) + `manifest.json`.
- **렌더러:** `src/render/fretboard.ts`·`tab.ts` — 자체 SVG(currentColor 다크대응, technique 8종, rest/barre/bend/slide/vibrato…). 105 score 렌더 NaN 0건.
- **로직:** `src/lib/` — storage(gh_state+인메모리 폴백)·progress(아낀 레슨비 ₩20,000/일)·nudges(5종 트리거)·i18n(dot-path+보간)·router(해시)·content(지연 로드).
- **뷰:** `src/views/` — home / curriculum(월·주·일 아코디언) / lesson(①이론 ②지판·타브 SVG ③완료+컨페티+이전/다음).
- **부트:** `src/main.ts` — 테마·언어·닉네임·도네이션·백업 시트 배선.
- **검증:** `tsc --noEmit` clean, `npm run build` 성공(52 지연청크), 헤드리스 크로미움 스모크 통과.

### 🟨 진행/예정
- **Astro 마이그레이션**(다음 작업). 렌더러·CSS·콘텐츠 JSON·i18n 사전·storage 로직은 재사용, 라우팅/뷰/ i18n을 정적 페이지로 이전.
- **커리큘럼 분류:** manifest에 `instrument/topic/level/tags` 필드 + 랜딩 필터 칩(5개+ 시점).
- **자동 후원 연출:** Month·커리큘럼 완료 시 '드림기타(Fender Strat · Cory Wong Sig)' 단계형 시트 → 후원.

### ⏳ 열린 이슈(비차단)
- OPEN-6: 프라이버시 경량 분석 도구 선정.
- OPEN-8: 보강 UI용 i18n 키 3개(`nick.chip_empty`, `storage.blocked_banner/toast`) 3언어 카피.
- 도네이션 실제 링크(현재 플레이스홀더).
- 메인 번들 최적화(개요 HTML 분리 지연로드).

---

## 3. 로드맵 (마일스톤)

- [x] **M0 설계 정합화** — 문서·스키마·프롬프트 확정
- [x] **M1 콘텐츠 시드** — 3개월 52 Day + 악보 + 3개국어
- [x] **M2 MVP 구현** — 바닐라+Vite+TS 앱(렌더러·i18n·상태·완료)
- [ ] **M2.5 Astro 이전** — 정적 페이지·SEO·View Transitions ⬅ **현재**
- [ ] **M2.6 기능 확장** — 분류 필터 칩 · 자동 후원(드림기타) 연출
- [ ] **M3 배포** — Cloudflare Pages(GitHub 연동), 도네이션 링크
- [ ] **M4 확장** — 신규 커리큘럼(잽잽이/펑키 리듬 등) 모듈 추가

---

## 4. 변경 로그 (Changelog)

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

---

## 5. 다음 작업 (Next)
1. **Astro 마이그레이션** — tech_stack/technical_spec Astro 기준 개정 → 프로젝트 이전(렌더러/CSS/콘텐츠 재사용, 언어별 정적 페이지, `<ClientRouter/>` 전환).
2. 분류 필터 칩 + 자동 후원(드림기타) 연출.
3. Cloudflare Pages 배포.
