---
id: 07-pwa
status: TODO
priority: medium
risk: low
depends_on: []
owner: null
---

# 07 · PWA 앱화 (Android Play 등재 + iOS/Android 홈 설치)

## 목적 (왜)

정적 웹인 Riff를 **설치형 앱**으로도 제공한다. 오프라인 학습·홈 화면 아이콘·전체화면(standalone)으로 "앱 같은" 경험을 주되, **Zero-Cost 원칙을 최대한 지킨다.**

**결정된 방향 (사람 확정):**
- **iOS:** 홈 화면 추가까지만. **App Store 등재는 하지 않는다** (Apple Developer 연 $99 + 심사 리스크가 Zero-Cost와 충돌).
- **Android:** ① 스토어 없이 브라우저에서 바로 설치(WebAPK) + ② **Google Play 등재**(TWA 래핑, 등록비 $25 1회) — 둘 다.

이 세 목표는 **공통 토대(설치형 PWA) 하나** 위에 Play 래핑만 얹는 구조다. iOS 홈 설치와 Android 무스토어 설치는 토대(트랙 A)만으로 자동 충족된다.

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

1. **매니페스트:** `public/manifest.webmanifest`(또는 `@vite-pwa/astro` 자동 생성) — `name`·`short_name`·`icons`·`display:"standalone"`·`theme_color`·`background_color`·`start_url:"/"`·`scope:"/"`·`lang`·`categories`. i18n는 매니페스트가 단일 언어라 대표값(ko 또는 영문) 하나로.
2. **아이콘 세트:** `Base.astro:130-131` 픽 로고 SVG에서 파생 — 192×192·512×512·**maskable 512**(안전영역 패딩)·`apple-touch-icon` 180×180(투명배경 지양). 원본(SSOT)은 `assets/`, 산출은 `public/`(듀오톤 썸네일과 동일 패턴, playbook §8 참조). 일회성 sharp 스크립트 권장(빌드 파이프라인 미연결).
3. **서비스워커:** `@vite-pwa/astro`(워크박스) devDependency 추가 → 빌드 시 SW 자동 생성. **런타임 추가는 SW 하나뿐**(무런타임 프레임워크 원칙 유지).
4. **캐싱 전략(결정 필요):** 빌드 산출물이 **361페이지**(116일×3언어+홈·커리큘럼)라 전량 precache는 무겁다 → **런타임 캐싱** 권장: HTML=StaleWhileRevalidate, `/_astro/*`=CacheFirst(immutable), 이미지=CacheFirst. "방문한 레슨만 오프라인" vs "전체 사전 다운로드" 선택.
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

1. **Play Console 개발자 등록** — $25(1회) + 신원 확인.
2. **TWA 패키지:** **PWABuilder**(웹 UI, 가장 쉬움) 또는 **Bubblewrap**(CLI)로 서명된 `.aab` 생성. Mac 불필요(JDK/Android SDK는 Bubblewrap이 처리).
3. **Digital Asset Links:** `public/.well-known/assetlinks.json`에 앱 서명키 SHA-256 등록 → 주소창 제거·소유권 검증. **Play 최초 업로드 후** Google 제공 앱 서명키 지문으로 확정(선후관계 주의 — 아래 정지조건).
4. **개인정보처리방침 라우트 신설** — Play 필수. localStorage만 쓰므로 "회원가입·서버·수집 없음, 진도는 기기 저장" 내용. i18n 3언어 여부 결정.
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
- **캐싱 범위:** 361페이지 전량 precache는 용량 과다. 범위(방문분만 vs 전체)를 먼저 결정.
- **iOS 제약:** 홈 PWA는 오프라인·아이콘·전체화면은 되나 푸시·백그라운드 제한(이 앱은 푸시 불필요라 영향 적음).
- **Play 신규 개인 계정 요건:** 2023.11 이후 만든 **개인** 개발자 계정은 프로덕션 출시 전 **테스터 12명 + 14일 비공개 테스트** 필요 → 일정에 반영(조직 계정 예외).
- **assetlinks 선후관계:** 서명키 지문은 Play App Signing 적용 후 Google이 부여 → `assetlinks.json`은 최초 업로드 뒤 확정. 도메인 바꾸면 재설정.
- **타깃 API 유지보수:** Play가 주기적으로 최소 target API 상향 요구 → 래퍼만 가끔 재빌드(~연 1회). 웹 콘텐츠와 무관.
- **개인정보처리방침 필수:** Play는 URL 없으면 반려. 라우트 신설 없이는 트랙 D 진행 불가.
- **Zero-Cost 긴장:** Play $25(1회)는 원칙과 거의 부합하나 지출은 지출 — 착수 전 승인 사안.

## 체크리스트

**트랙 A — PWA 토대 (필수 선행)**
- [ ] `manifest.webmanifest` 작성(또는 `@vite-pwa/astro` 설정)
- [ ] 아이콘 세트 생성(192·512·maskable·180) + 원본 SSOT 보존
- [ ] 서비스워커 도입(`@vite-pwa/astro`) + 캐싱 전략 확정
- [ ] `Base.astro <head>` 메타(manifest·theme-color) 추가
- [ ] V1 + Lighthouse installability 통과

**트랙 B — iOS 홈 설치**
- [ ] apple-touch-icon 180 + 애플 메타 3종
- [ ] (선택) 스플래시
- [ ] iOS 실기기 홈 화면 추가 검증

**트랙 C — Android 무스토어 설치**
- [ ] WebAPK 설치 배너 동작 확인
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

- **Play 등재를 지금 할지, 홈 설치만 먼저 하고 나중에 할지** — 트랙 A~C(무료)만 우선하고 D는 보류 가능.
- **개인정보처리방침** — i18n 3언어로 만들지 단일 페이지로 할지. (내용은 "수집 없음"으로 단순)
- **앱 아이덴티티** — 패키지명(예: `dev.pages.guitar_riff.twa`), 앱 표시명("Riff"), Play 노출 개발자명.
- **아이콘/스플래시 소스** — 현 픽 로고 SVG에서 파생 vs 신규 디자인.
- **도메인** — `guitar-riff.pages.dev` 유지 vs 커스텀 도메인(assetlinks는 최종 도메인 기준).
- **오프라인 캐싱 범위** — 방문분만 vs 전체(361p) 사전 다운로드.
- **Play 신규 개인 계정 14일 테스트 요건 수용 여부** — 일정 영향.
