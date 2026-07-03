# 01-A. Tech Stack — 프론트엔드 · 호스팅 · 렌더링

> 상위 문서: `../00_master_prd.md` · 원칙: Zero-Cost / Static / i18n-first / Zero-Hallucination

> **⚠️ 스택 개정 (2026-07-03): React → 경량 하이브리드.**
> 완성도 높은 바닐라 목업(`web_app/docs/design_reference.html`)이 라우팅·i18n·localStorage 폴백·SVG 렌더·컨페티를 의존성 0으로 이미 구현했다. 이를 근거로 **UI 프레임워크(React) 제거**, **바닐라 JS(ES modules) + Vite + TypeScript**로 확정한다. 타브/지판은 **자체 SVG 렌더러**로 확정(AlphaTab/VexFlow 미채택). 아래 §1 표에 개정 결과를 병기하며, 상세·근거·기각안·위임 경계는 **`web_app/docs/technical_spec.md`(정식 기술 명세)**가 SSOT다. 서비스명은 **Riff**.

## 1. 결정 요약 (TL;DR)

> 아래 목록의 취소선(~~…~~)은 개정 전(React) 결정, 화살표(→) 뒤가 개정 후 확정값이다.

- **프레임워크:** ~~React + Vite~~ → **바닐라 JS(ES modules) + Vite** (UI 프레임워크 없음). 뷰 3종·소형 표면적이라 프레임워크 런타임 이득 < 비용.
- **언어:** TypeScript (악보 JSON 스키마의 타입 안전성이 핵심). *(유지)*
- **스타일:** CSS Variables 기반 디자인 토큰. ~~Tailwind 선택~~ → **Tailwind 미채택**, 목업 `:root` 토큰 승계.
- **라우팅:** ~~React Router~~ → **해시 라우팅**(자체 경량 라우터). 정적 호스트에서 서버 rewrite 없이 딥링크 안전.
- **i18n:** ~~react-i18next~~ → **자체 경량 사전 로더** + `ko/en/ja.json`(9 네임스페이스). 목업 kr/jp는 **ko/ja로 정규화**.
- **상태/진도:** 외부 상태관리 없이 `localStorage` 래퍼 + **인메모리 폴백**(React Context 불필요).
- **악보/지판 렌더링:** 지판·타브 **둘 다 자체 SVG 렌더러**(`fretboard_score_schema.json` 소비). ~~AlphaTab/VexFlow~~ 미채택.
- **애니메이션:** 완료 팡파르 = **자체 canvas 컨페티**(목업 구현 재사용, 의존성 0). ~~canvas-confetti~~ 불필요.
- **배포:** **Cloudflare Pages**(1순위) / GitHub Pages(대안). 기본 도메인 `*.pages.dev` + SPA fallback(`_redirects`). *(유지)*

## 2. 왜 이 스택인가
| 요구 | 선택 | 이유 |
|---|---|---|
| 비용 0원 | 정적 빌드 + CDN | 서버/DB 불필요, 무료 티어로 충분 |
| 확장형 커리큘럼 | 데이터 기반 라우팅 | 콘텐츠=파일, 코드 수정 없이 추가 |
| 할루시네이션 제로 | SVG/AlphaTab | 픽셀 아닌 데이터 렌더 → 정확·검증 가능 |
| 3개국어 | react-i18next | 사전 스위칭·폴백·복수형 지원 |
| 오프라인 진도 | localStorage | 인증/서버 없이 클라이언트 저장 |

## 3. 렌더링 파이프라인 (핵심)
```
악보 JSON (03_data_schema 준수)
   ├─▶ FretboardDiagram.tsx   (지판: SVG 6현 × N프렛, dot/뮤트/오픈 표기)
   └─▶ TabScore.tsx           (타브: AlphaTab/VexFlow 렌더 타깃 <div>)
```
- 지판 SVG는 직접 구현: 현(string) 6개, 프렛 라인, 손가락 dot(문자열/프렛 좌표), 개방현(o)/뮤트(x), 프렛 번호.
- 타브는 AlphaTab에 alphaTex 또는 우리 JSON→어댑터로 변환해 렌더. (라이브러리 결정은 M2 스파이크에서 확정)

## 4. 디렉터리(예정, web_app/src)
```
src/
├── main.tsx / App.tsx
├── routes/                 (랜딩, 커리큘럼/월/주/일 페이지)
├── components/
│   ├── FretboardDiagram.tsx
│   ├── TabScore.tsx
│   ├── CompleteButton.tsx  (팡파르 + 진도 갱신)
│   ├── LangSwitcher.tsx
│   └── DonationCard.tsx
├── content/                (_design_docs에서 이식된 레슨 md/json)
├── i18n/ (ko.json,en.json,ja.json)
├── lib/ (storage.ts, progress.ts, nudges.ts)
└── styles/ (tokens.css)
```

## 5. 빌드/배포
- `vite build` → 정적 `dist/` → Cloudflare Pages 연결(Git 연동 또는 직접 업로드).
- SPA 라우팅용 `_redirects`(CF) 또는 404 fallback(GH Pages) 설정.
- 커스텀 도메인 없이 `*.pages.dev`로 시작. (추후 도메인 연결 여지)

## 6. 결정 대기 항목 (M2에서 확정)
- [x] 타브 렌더러: ~~AlphaTab vs VexFlow~~ → **자체 SVG 렌더러 확정**(둘 다 미채택). 근거·계약: `technical_spec.md` §2.3, §5.
- [x] Tailwind 채택 여부 vs 순수 CSS 토큰 → **CSS 변수 토큰 확정**(Tailwind 미채택).
- [ ] 경량 분석 도구(프라이버시 준수) 선정 — `technical_spec.md` OPEN-6에서 추적.

> §3~§4의 렌더링 파이프라인·디렉터리는 React(.tsx) 기준 초안이다. **확정 구조는 `technical_spec.md` §3(바닐라 `src/` 구조)·§4(콘텐츠 파이프라인)·§5(렌더러 계약)을 따른다.**
