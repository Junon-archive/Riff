# CLAUDE.md — Riff 프로젝트 작업 지침

## 프로젝트 한 줄
**Riff** — 유료 레슨급 기타 커리큘럼을 로그인·DB·호스팅 비용 0원으로 전 세계에 무료 제공하는 정적(Static) 웹 서비스. Toss 톤앤매너, KR/EN/JP 3개국어, 지판/타브는 JSON→SVG 렌더(할루시네이션 제로).

## 📌 고정 규칙 (반드시 준수)
1. **Roadmap 자동 갱신:** 작업(마일스톤·기능·수정)이 **하나 끝날 때마다 `Roadmap.md`를 알아서 갱신**한다. — 완료 항목 체크, 변경 로그(Changelog)에 날짜·요약 추가, 진행 상태 반영. 사용자가 따로 요청하지 않아도 매 작업 종료 시 반영할 것.
2. **설계-구현 분리:** `_design_docs/`(SSOT, 기획·콘텐츠 원본) ↔ `web_app/`(구현). 콘텐츠는 `_design_docs`에서 작성 → 빌드로 `web_app` 이식.
3. **5대 원칙:** Zero-Cost / Toss 톤(친절·차분·자세, **긁지 않기**) / Zero-Hallucination(악보=JSON→렌더) / 모듈형(커리큘럼=데이터) / i18n-first(하드코딩 금지).

## 핵심 문서 (SSOT 포인터)
- `Roadmap.md` — **현재 구현 상황·변경 로그·다음 작업**(이 파일을 항상 최신 유지).
- `_design_docs/00_master_prd.md` — 마스터 기획서
- `_design_docs/00_curriculum_authoring_playbook.md` — 커리큘럼 저작 SOP
- `_design_docs/01_architecture/` — tech_stack / state_storage
- `_design_docs/03_data_schema/fretboard_score_schema.json` — 악보 표준 스키마
- `_design_docs/04_localization/` — translation_map / curriculum_i18n / i18n_key_map
- `_design_docs/05_update_backlog/` — **업데이트 백로그**(미래 개선 작업 묶음별 상세 설계·상태·체크리스트). 착수 안 한 개선은 여기 md로 문서화 → 나중에 이 문서만 보고 재개. `README.md`가 인덱스.
- `web_app/docs/technical_spec.md` · `design_spec.md` — 기술·디자인 명세(구현 SSOT)

## 스택 (현재)
- **확정·운영 중: Astro + TypeScript**(정적 출력, 런타임 프레임워크 없음), 자체 SVG 지판/타브 렌더러, 파일 기반 정적 라우팅(언어별 페이지+hreflang), View Transitions, `localStorage` 상태.
- **배포: Cloudflare Pages(GitHub 연동 자동배포) → https://guitar-riff.pages.dev.**
- 콘텐츠 파이프라인: `_design_docs` day/overview md → `scripts/build-content.mjs` → `src/content/*.json`+`manifest.json` → Astro 빌드.
- 악보 렌더: 지판·기본 타브 = **자체 SVG**(`render/fretboard.ts`·`tab.ts`). **오선보(+타브 결합, 박자 공유) = VexFlow 채택**(`render/staff.ts`, `meta.notation:"staff"|"staff+tab"|"rhythm"`). VexFlow는 **빌드타임에만**(jsdom devDep) SVG 생성 → 클라이언트 JS 0. `renderScore()`가 `meta.notation`으로 분기. AlphaTab 미채택(재생 필요 시 자체 Web Audio).
- 상세 SSOT: `web_app/docs/technical_spec.md`(§8-A Astro)·`design_spec.md`, `_design_docs/01_architecture/tech_stack.md`.

## 저장소 · 배포
- GitHub: `https://github.com/Junon-archive/Riff.git` (main). `.claude/` 포함 전체 추적.
- `main` push → Cloudflare Pages 자동 재배포. 빌드 설정: Root `web_app`, Build `npm run build`, Output `dist`.
