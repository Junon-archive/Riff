---
id: 07-pwa
status: IN_PROGRESS
priority: medium
risk: low
depends_on: []
owner: null
---

> 🟡 진행 중(2026-07-09). **트랙 A(PWA 토대)·B(iOS 홈)·C(Android 무스토어) 코드 구현 완료** — 매니페스트·아이콘 4종·hand-rolled 서비스워커·head 메타·SW 등록. build 361p 통과·dist 자산·head 배선 검증. **남음:** 배포 후 실기기 설치/오프라인 육안 검증(SW는 localhost 제외라 배포본에서 확인), 그리고 트랙 D(Play).

# 07 · PWA 앱화 (Android Play 등재 + iOS/Android 홈 설치)

## 목적 (왜)

정적 웹인 Riff를 **설치형 앱**으로도 제공한다. 오프라인 학습·홈 화면 아이콘·전체화면(standalone)으로 "앱 같은" 경험을 주되, **Zero-Cost 원칙을 최대한 지킨다.**

**결정된 방향 (사람 확정):**
- **iOS:** 홈 화면 추가까지만. **App Store 등재는 하지 않는다** (Apple Developer 연 $99 + 심사 리스크가 Zero-Cost와 충돌).
- **Android:** ① 스토어 없이 브라우저에서 바로 설치(WebAPK) + ② **Google Play 등재**(TWA 래핑, 등록비 $25 1회) — 둘 다.

이 세 목표는 **공통 토대(설치형 PWA) 하나** 위에 Play 래핑만 얹는 구조다. iOS 홈 설치와 Android 무스토어 설치는 토대(트랙 A)만으로 자동 충족된다.

## 확정 결정 (2026-07-09, 사람 확정)

| 항목 | 결정 |
|---|---|
| 도메인 | **`guitar-riff.pages.dev` 유지**(커스텀 도메인 안 함). assetlinks도 이 도메인 기준. |
| 패키지명(TWA) | **`dev.pages.guitar_riff.twa`** |
| 앱 표시명 | **Riff** |
| 개발자명(Play 노출) | **Junon** |
| 아이콘 소스 | **현 픽 로고 SVG**(`Base.astro:130-131`)에서 파생. 신규 디자인 안 함. |
| **오프라인 캐싱 범위** | **앱 셸 precache + 방문 레슨 런타임 캐싱**(App Shell 패턴). **전체 사전 다운로드 안 함** — 커리큘럼이 계속 늘어 precache가 무한히 불어나고 안 볼 커리큘럼·언어까지 강제 다운로드되므로 무의미. 앱 셸(HTML 골격·CSS·핵심 JS·아이콘·매니페스트)만 precache로 즉시 열림, 레슨 본문·이미지는 방문 시 StaleWhileRevalidate. (선택·나중) "커리큘럼 오프라인 저장" 명시 버튼은 후속. |
| **릴리스 순서** | **트랙 A~C(설치형 PWA, $0) 먼저 한 푸시로 배포 → 트랙 D(Play) 후속.** A~C가 D의 선행 필수이고 파일·빌드가 공유되므로 나눠도 낭비 0. Play의 외부 마찰($25·14일 테스트·심사)에 무료·즉시 릴리스를 묶지 않는다. |

## 현재 상태 (검증된 코드 위치)

| 무엇 | 위치 | 현재 상태 | PWA 관점 |
|---|---|---|---|
| 정적 출력·어댑터 없음 | `web_app/astro.config.mjs:19` `output:'static'` | 순수 정적 dist | ✅ 서버 불필요 → 오프라인화 쉬움 |
| 배포 도메인 | `web_app/astro.config.mjs:18` `site:'https://guitar-riff.pages.dev'` | CF Pages, HTTPS | ✅ 서비스워커 필수조건(HTTPS) 충족 |
| 클라이언트 상태 | `web_app/src/lib/storage.ts` (localStorage 단일 키 `gh_state` + 인메모리 폴백) | 진도=기기 저장 | ✅ 오프라인에서도 상태 유지 |
| 콘텐츠 로딩 | `web_app/src/lib/content.ts:18` `import.meta.glob` | day JSON이 빌드 번들에 포함(런타임 fetch·API 없음) | ✅ 캐시하면 완전 오프라인 열람 |
| 자산 캐시 규칙 | `web_app/public/_headers` (`/_astro/* immutable`, `*.html must-revalidate`) | 해시 불변 자산 | ✅ SW precache/버전관리에 최적 |
| head 메타 | `web_app/src/layouts/Base.astro:51-53` (viewport `viewport-fit=cover` · color-scheme · svg 아이콘) | 일부만 존재 | ⚠️ `manifest`·`theme-color`·apple 메타 없음 |
| 앱 아이콘 | `web_app/public/favicon.svg` (254B) 하나뿐 | 픽 로고 SVG는 `Base.astro:130-131`에 존재 | ❌ 192/512/maskable/180 PNG 없음 → 생성 필요 |
| Web App Manifest | (없음) | — | ❌ 신규 |
| 서비스워커 | (없음) | — | ❌ 신규(오프라인·설치가능성 핵심) |
| `.well-known/assetlinks.json` | (없음, `public/` 하위 미존재) | — | ❌ Play TWA 소유권 검증에 필요 |
| 개인정보처리방침 페이지 | (없음, `src/pages`에 privacy 라우트 없음) | — | ❌ **Play 필수** → 신규 라우트 필요 |

## 수정 상세 (실행 지침)

### 트랙 A — 설치형 PWA 토대 (세 목표의 전제, 비용 $0)

1. **매니페스트:** `public/manifest.webmanifest`(또는 `@vite-pwa/astro` 자동 생성) — `name:"Riff"`·`short_name:"Riff"`·`icons`·`display:"standalone"`·`theme_color`·`background_color`·`start_url:"/"`·`scope:"/"`·`lang:"ko"`·`categories:["education"]`. 매니페스트는 단일 언어라 대표값(ko) 하나로.
2. **아이콘 세트:** **현 픽 로고 SVG**(`Base.astro:130-131`)에서 파생(확정) — 192×192·512×512·**maskable 512**(안전영역 패딩)·`apple-touch-icon` 180×180(투명배경 지양). 원본(SSOT)은 `assets/`, 산출은 `public/`(듀오톤 썸네일과 동일 패턴, playbook §8 참조). 일회성 sharp 스크립트 권장(빌드 파이프라인 미연결).
3. **서비스워커(구현: hand-rolled, 의존성 0):** `@vite-pwa/astro` 대신 `public/sw.js`를 직접 작성했다 — 프로젝트 "무런타임 devDep 최소" 원칙, 락파일/빌드설정 무변경, 버전 호환 리스크 0. autoUpdate = `install`에서 `skipWaiting` + `activate`에서 `clients.claim`, 캐시 무효화 = `CACHE_VERSION` 상수. 등록은 `Base.astro` 인라인 스크립트(배포 도메인에서만, localhost 제외). **클라이언트 추가는 SW 하나뿐**(무런타임 프레임워크 원칙 유지).
4. **캐싱 전략(확정: App Shell + 방문분 런타임):** 전량 precache 안 함(성장하는 콘텐츠에 확장 불가). **precache = 앱 셸만**(해시 자산 `/_astro/*`·매니페스트·아이콘·핵심 HTML) → 오프라인에서도 즉시 열림. **레슨 본문·이미지 = 방문 시 런타임 캐싱**(HTML=StaleWhileRevalidate/NetworkFirst, `/_astro/*`=CacheFirst, 이미지=CacheFirst). 새 커리큘럼이 늘어도 precache 목록·용량 불변.
5. **head 메타:** `Base.astro <head>`에 `<link rel="manifest">`·`theme-color`·apple 메타(아래 트랙 B) 추가. viewport는 이미 `viewport-fit=cover`라 standalone 적합.

### 트랙 B — iOS 홈 화면 추가 (비용 $0, 대부분 A로 충족)

1. `apple-touch-icon` 180×180 PNG 링크.
2. 애플 메타: `apple-mobile-web-app-capable`·`apple-mobile-web-app-status-bar-style`·`apple-mobile-web-app-title`.
3. (선택) 기기별 스플래시 launch image(없어도 흰 화면으로 동작).
4. **실기기 Safari에서 "홈 화면에 추가" 검증** — iOS는 매니페스트를 부분만 읽으므로 애플 메타가 실효.

### 트랙 C — Android 스토어 없이 설치 (비용 $0, A로 자동 충족)

1. 매니페스트+SW+HTTPS 충족 시 Chrome이 PWA를 **WebAPK**(준네이티브)로 설치, 설치 배너 자동 노출.
2. (선택) `beforeinstallprompt`로 앱 내 "설치하기" 버튼(`src/scripts/`에 경량 스크립트).

### 트랙 D — Google Play 등재 (TWA 래핑, 비용 $25 1회)

1. **Play Console 개발자 등록** — $25(1회) + 신원 확인. 개발자명 **Junon**(확정).
2. **TWA 패키지:** **PWABuilder**(웹 UI, 가장 쉬움) 또는 **Bubblewrap**(CLI)로 서명된 `.aab` 생성. Mac 불필요(JDK/Android SDK는 Bubblewrap이 처리). **패키지명 `dev.pages.guitar_riff.twa`**, 앱 표시명 **Riff**, 대상 URL `https://guitar-riff.pages.dev`(도메인 유지 확정).
3. **Digital Asset Links:** `public/.well-known/assetlinks.json`에 앱 서명키 SHA-256 등록 → 주소창 제거·소유권 검증. **Play 최초 업로드 후** Google 제공 앱 서명키 지문으로 확정(선후관계 주의 — 아래 정지조건).
4. **개인정보처리방침 라우트 신설** — Play 필수. localStorage만 쓰므로 "회원가입·서버·수집 없음, 진도는 기기 저장" 내용. i18n 3언어 여부는 남은 결정(미해결 질문).
5. **스토어 자산:** 아이콘 512·피처그래픽 1024×500·폰 스크린샷 2장+·짧은/긴 설명·콘텐츠 등급 설문·데이터 안전(Data Safety) 양식.
6. **라우팅:** TWA는 웹을 그대로 표시 → **웹 업데이트 시 앱 자동 반영**(재심사 불필요). 래퍼 자체 버전업/타깃 API 상향 시만 재빌드.

### 비용 요약

| 항목 | 비용 | 형태 |
|---|---|---|
| 설치형 PWA (iOS 홈 + Android 무스토어) | **$0** | — |
| Google Play 개발자 등록 | **$25** | 1회성(평생) |
| iOS App Store | **$0** | 안 함 |
| (선택) 커스텀 도메인 | ~$10–15/년 | 필수 아님(`pages.dev`로 TWA 가능) |
| **합계(필수)** | **$25 1회** | 이후 유지비 0 |

## 지금 착수 가능 범위 (08 하이라이트 작업과 독립, 2026-07-09 검증)

**근거(git):** 08은 Phase 0 코드(토큰·intro 렌더·build-content)를 이미 커밋(`3e790e1`)했고, 잔여 작업은 **`_design_docs/02_curriculum/**/day_*.md` 콘텐츠 배치뿐**이다. 07이 손댈 파일(`Base.astro`·`astro.config.mjs`·`package.json`·`public/`·`src/pages/`·`src/scripts/`)은 **08이 하나도 건드리지 않는다**(전부 다른 커밋이 마지막 수정자). → **파일 충돌 0.**

**지금 바로 착수 가능(08과 무충돌):**
- **트랙 A 전체** — 아이콘 생성(`assets/`→`public/`), 매니페스트(`public/`), SW(`@vite-pwa/astro`→`package.json`·`astro.config.mjs`), head 메타(`Base.astro`), 캐싱 설정. 모두 08 미접촉 파일.
- **트랙 B 전체** — apple-touch-icon(`public/`), apple 메타(`Base.astro`), 스플래시(`public/`).
- **트랙 C** — A의 SW+매니페스트 완성 시 자동 충족. 선택 설치 버튼(`src/scripts/`).
- **트랙 D 코드부** — 개인정보처리방침 라우트(`src/pages/` 신규)·`assetlinks.json`(`public/.well-known/`).
- **외부·비코드(성질상 독립)** — Play 계정 등록($25), 스토어 자산(스크린샷·피처그래픽·설명), 개인정보처리방침 문안 초안, 아이콘/매니페스트 값 확정.

**07 내부 의존(08과는 무관):**
- 트랙 D의 TWA 패키징·assetlinks 지문 확정은 **트랙 A~C가 실제 배포되어 설치 가능**해야 진행(assetlinks SHA-256은 Play 최초 업로드 후 부여).

**조율 포인트(충돌 아님, 위생 수칙):**
1. **커밋 위생:** PWA 커밋 시 08의 `day_*.md`·`08_Highlight.md`를 절대 스테이징하지 않는다(파일 지정 add).
2. **build-content.mjs 재접촉 금지:** 08 Phase 0에서 이미 커밋됨. PWA는 이 파일을 건드릴 필요가 없다.
3. **공용 빌드 검증:** `npm run build`가 08의 in-flight day md도 함께 빌드하지만 순수 콘텐츠라 무해(PWA 검증에 영향 없음).

**권장:** 트랙 A→B→C를 한 스트림으로 지금 구현 → **설치형 PWA 완성($0, 08과 무충돌)**. 트랙 D는 A~C 배포 후.

## 기존 사이트/배포 불변 보장

- **가법적 추가:** 매니페스트·SW·아이콘·`.well-known`은 전부 **신규 정적 파일**. 기존 페이지 HTML·렌더·라우팅은 불변.
- **SW 캐시가 콘텐츠 갱신을 막지 않게:** `_headers`가 HTML을 `must-revalidate`로 두므로 SW도 HTML은 network-first/SWR로. `/_astro/*`는 해시 불변이라 CacheFirst 안전. SW 업데이트 전략(skipWaiting + 새 버전 안내) 필요.
- **무런타임 프레임워크 원칙:** 클라이언트 추가는 SW 하나뿐. 앱 로직(app.ts)·상태(storage.ts)와 분리.
- **Zero-Cost:** 설치형 PWA는 완전 무료. 유일한 지출은 Play $25 1회(선택). Apple 연 $99는 방향상 회피.

## 검증 방법

- **V1** `cd web_app && npm run build` exit 0 · dist에 `manifest.webmanifest`·SW·아이콘 포함.
- **Lighthouse PWA:** installability 통과(매니페스트·SW·아이콘·start_url).
- **iOS 실기기:** Safari → 공유 → 홈 화면 추가 → 아이콘·전체화면·오프라인 열람 확인.
- **Android 실기기:** Chrome 설치 배너 → WebAPK 설치 → 오프라인 확인.
- **오프라인 테스트:** 네트워크 차단 후 방문한 레슨·홈·진도 유지 확인(캐싱 범위 결정에 맞춰).
- **TWA:** Play 업로드 후 assetlinks 검증 통과(주소창 미노출) · 설치·실행 확인.
- **회귀:** 기존 361페이지 산출·렌더 불변(SW는 신규 파일이라 HTML 지문 불변). `check-invariants.mjs`는 콘텐츠 대상이라 무관하나 build 산출 비교로 확인.

## 주의 / 정지조건

- **SW 캐시 무효화:** 잘못 설정하면 배포해도 옛 화면이 남는다 — HTML은 절대 CacheFirst 금지, 버전업 시 SW 교체·클라 안내 전략 선행.
- **캐싱 범위(결정됨):** 앱 셸 precache + 방문 레슨 런타임 캐싱(위 "확정 결정"). 전량 precache 금지 — 성장하는 콘텐츠에 확장 불가. 앱 셸 precache 목록은 해시 자산(`/_astro/*`)·매니페스트·아이콘·핵심 HTML로 한정한다.
- **iOS 제약:** 홈 PWA는 오프라인·아이콘·전체화면은 되나 푸시·백그라운드 제한(이 앱은 푸시 불필요라 영향 적음).
- **Play 신규 개인 계정 요건:** 2023.11 이후 만든 **개인** 개발자 계정은 프로덕션 출시 전 **테스터 12명 + 14일 비공개 테스트** 필요 → 일정에 반영(조직 계정 예외).
- **assetlinks 선후관계:** 서명키 지문은 Play App Signing 적용 후 Google이 부여 → `assetlinks.json`은 최초 업로드 뒤 확정. 도메인 바꾸면 재설정.
- **타깃 API 유지보수:** Play가 주기적으로 최소 target API 상향 요구 → 래퍼만 가끔 재빌드(~연 1회). 웹 콘텐츠와 무관.
- **개인정보처리방침 필수:** Play는 URL 없으면 반려. 라우트 신설 없이는 트랙 D 진행 불가.
- **Zero-Cost 긴장:** Play $25(1회)는 원칙과 거의 부합하나 지출은 지출 — 착수 전 승인 사안.

## 체크리스트

**트랙 A — PWA 토대 (필수 선행)**
- [x] `public/manifest.webmanifest` 작성(hand-rolled, name Riff·standalone·아이콘 3종)
- [x] 아이콘 세트 생성(192·512·maskable 512·apple 180) — `scripts/generate-pwa-icons.mjs`(픽 로고 파생)
- [x] 서비스워커(`public/sw.js`, hand-rolled) + 캐싱(앱 셸 precache + 방문분 런타임)
- [x] `Base.astro <head>` 메타(manifest·theme-color) + SW 등록 스크립트
- [x] V1 build 361p 통과 + dist 자산·head 배선 검증
- [ ] 배포본에서 Lighthouse installability 통과 확인(로컬 SW 미등록이라 배포 후)

**트랙 B — iOS 홈 설치**
- [x] apple-touch-icon 180 + 애플 메타 3종(capable·status-bar·title Riff)
- [ ] (선택) 스플래시
- [ ] iOS 실기기 홈 화면 추가 검증(배포 후)

**트랙 C — Android 무스토어 설치**
- [x] 매니페스트+SW+HTTPS 충족(설치 조건) — 코드 완료
- [ ] WebAPK 설치 배너 동작 확인(배포 후 실기기)
- [ ] (선택) `beforeinstallprompt` 커스텀 설치 버튼

**트랙 D — Google Play 등재**
- [ ] 개인정보처리방침 라우트 신설(i18n 여부 결정)
- [ ] Play Console 등록($25)
- [ ] PWABuilder/Bubblewrap로 `.aab` 생성
- [ ] `.well-known/assetlinks.json`(서명키 지문) 배치·검증
- [ ] 스토어 자산(아이콘·피처그래픽·스크린샷·설명·데이터안전 양식)
- [ ] (신규 개인 계정 시) 14일 비공개 테스트
- [ ] 심사 통과 + Roadmap·이 문서 갱신

## 미해결 질문 (사람 결정)

> 아래 6개는 2026-07-09 확정(위 "확정 결정" 표): 릴리스 순서(A~C 먼저), 앱 아이덴티티(패키지명·표시명 Riff·개발자 Junon), 아이콘 소스(픽 로고), 도메인(pages.dev 유지), 캐싱 범위(앱 셸+방문분).

**남은 결정:**
- **개인정보처리방침** — i18n 3언어로 만들지 단일 페이지로 할지. (내용은 "수집 없음"으로 단순) — 트랙 D 선행.
- **Play 신규 개인 계정 14일 테스트 요건 수용 여부** — 일정 영향. 트랙 D 착수 시점에 판단.
- **(선택) 스플래시 이미지** — iOS 런치 이미지까지 만들지(없어도 흰 화면 동작).
