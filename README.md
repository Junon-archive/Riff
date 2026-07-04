<div align="center">

# 🎸 Riff

**유료 레슨급 기타 커리큘럼을, 로그인·DB·호스팅 비용 0원으로 전 세계에 무료 제공하는 정적 웹 서비스**

[![live](https://img.shields.io/badge/live-guitar--riff.pages.dev-3182F6)](https://guitar-riff.pages.dev)
&nbsp;·&nbsp; 한국어 / English / 日本語 &nbsp;·&nbsp; Toss 스타일 UI &nbsp;·&nbsp; 100% 무료

**▶︎ https://guitar-riff.pages.dev**

</div>

---

## 이게 뭔가요

유튜브 강의는 산발적이고 유료 레슨은 비쌉니다. Riff는 **월 → 주 → 일(Day) 단위로 체계화된 3개월 커리큘럼**을 유료 레슨급 품질로, **완전 무료**로 제공합니다. 로그인·회원가입 없이 바로 시작하고, 진도는 브라우저에 저장됩니다. 수익은 오직 자발적 후원에서만 나옵니다.

**대상:** 곡은 쳐봤지만 **즉흥 솔로는 처음인 애매한 중급자**. 첫 커리큘럼은 펜타토닉부터 즉흥 솔로까지 이끄는 **『3개월 솔로/스케일 마스터』**(Week 0 + 12주 = 52일).

## 핵심 특징

- **💸 Zero-Cost** — 서버·DB·인증 없음. 순수 정적 사이트 + 브라우저 `localStorage`. 호스팅 무료(Cloudflare Pages).
- **🎼 할루시네이션 없는 악보** — 지판/타브를 이미지 생성 AI로 그리지 않습니다. **표준 JSON 스키마 → 자체 SVG 렌더**라 줄 개수·프렛 위치가 항상 정확하고, 다크모드·반응형에 자동 대응.
- **🌏 3개국어 (KR/EN/JP)** — 레슨 본문까지 전부 번역. 언어별 실제 정적 페이지 + hreflang으로 **검색 유입(SEO)** 대응.
- **🎨 Toss 톤앤매너** — 미니멀·넓은 여백·친절한 대화체. 매 주차 완주 시 격려, 완료 시 팡파레.
- **📈 이탈 방지 UX** — 진도바, 완료 체크, "아낀 레슨비" 카운터, 상황별 응원 넛지.
- **☕ 부담 없는 후원** — 큰 마일스톤 달성 시에만 '드림기타' 연출과 함께 카카오페이·토스·PayPal(QR/링크) 안내. 언제나 "닫고 계속 무료" 가능.

## 기술 스택

| | |
|---|---|
| **프레임워크** | Astro + TypeScript (정적 출력, 런타임 프레임워크 없음) |
| **렌더링** | 자체 SVG 지판/타브 렌더러 (표준 악보 JSON 스키마 소비) |
| **스타일** | CSS 변수 디자인 토큰(Toss 팔레트), 다크모드, 시스템 폰트(외부 CDN 0) |
| **상태/진도** | `localStorage` 단일 소스 + 인메모리 폴백 (서버 전송 없음) |
| **i18n** | 자체 경량 사전(`ko/en/ja.json`), 언어별 정적 라우트 + hreflang |
| **전환** | Astro View Transitions (`<ClientRouter/>`) |
| **배포** | Cloudflare Pages (GitHub 연동 자동배포) |

> 외부 런타임 의존성 0. AlphaTab/VexFlow 미채택(향후 재생 필요 시 자체 Web Audio, 오선보 필요 시 VexFlow 검토).

## 저장소 구조

```
guitar_hero/
├── _design_docs/            # 설계·콘텐츠 원본 (SSOT)
│   ├── 00_master_prd.md              # 마스터 기획서
│   ├── 00_curriculum_authoring_playbook.md  # 신규 커리큘럼 저작 SOP
│   ├── 01_architecture/              # tech_stack · state_storage
│   ├── 02_curriculum/                # 커리큘럼 콘텐츠(day/overview md, 3언어)
│   ├── 03_data_schema/               # 악보 표준 스키마 · 색 범례
│   └── 04_localization/              # 톤 가이드 · i18n 키 맵 · 세무 리포트
├── web_app/                 # 구현 (Astro)
│   ├── docs/                         # technical_spec · design_spec (구현 SSOT)
│   ├── scripts/build-content.mjs     # 콘텐츠 md → JSON+manifest 빌드
│   ├── src/                          # 렌더러 · lib · pages · styles · i18n · content
│   └── public/                       # QR·드림기타 이미지 등 정적 자산
├── Roadmap.md               # 진행 현황·변경 로그 (단일 대시보드)
└── CLAUDE.md                # 에이전트 작업 지침
```

**설계-구현 분리:** 콘텐츠는 `_design_docs`에서 작성/검수 → 빌드 스크립트가 `web_app/src/content`로 이식 → Astro가 정적 페이지 생성.

## 로컬 실행 / 빌드

```bash
cd web_app
npm install
npm run dev          # 개발 서버 (http://localhost:4321)
npm run build        # 콘텐츠 빌드 + astro build → dist/ (정적 사이트)
npm run check        # astro check (타입/템플릿 검사)
```

## 배포 (Cloudflare Pages)

GitHub 연동 방식이라 **`main`에 push하면 자동 재배포**됩니다. Pages 프로젝트 빌드 설정:

| 항목 | 값 |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| **Root directory** | **`web_app`** |
| 환경변수 | `NODE_VERSION = 20` |

## 새 커리큘럼 추가하기

커리큘럼은 코드가 아니라 **데이터**입니다. `_design_docs/00_curriculum_authoring_playbook.md`의 SOP를 따라 `meta.json`과 day 마크다운(악보 JSON 포함)을 추가하고 빌드하면 새 커리큘럼이 붙습니다. 악기가 2종 이상이 되면 랜딩에 악기 필터 칩이 자동 노출됩니다.

## 라이선스 / 후원

모든 레슨 콘텐츠는 **영구 무료**입니다. 도움이 되셨다면 커피 한 잔의 후원이 다음 커리큘럼 제작에 큰 힘이 됩니다 ☕

---

<div align="center">
<sub>Made with 🎸 — 기타를 배우고 싶은데 돈이 없어서 못 배우는 사람이 지구상에 한 명도 없도록.</sub>
</div>
