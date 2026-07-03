# Riff — 구현 핸드오프 인덱스 (Implementation Guide)

> 문서 성격: **얇은 인덱스**. 실제 사양은 아래 두 SSOT 가 보유한다. 이 문서는 "무엇을 어디서 보는지"만 가리킨다.
> (구 OPEN-9 해소 — `technical_spec.md` §12 가 이 파일을 "설계 수합본"으로 참조하던 끊긴 링크를 연결.)
>
> - **기술 SSOT:** [`technical_spec.md`](./technical_spec.md) — 스택 결정·구조·파이프라인·렌더 계약·상태·i18n·라우팅·배포.
> - **시각 SSOT:** [`design_spec.md`](./design_spec.md) — 디자인 토큰·컴포넌트 CSS·상태/다크모드/모션/접근성.
> - **참조 구현:** [`design_reference.html`](./design_reference.html) — 완성 목업(마크업·CSS·JS 원본).

---

## 1. 지금까지 만들어진 것 (스캐폴딩 1단계 · 완료)

| 영역 | 산출물 | 상태 |
|---|---|---|
| 프로젝트 설정 | `package.json`, `vite.config.ts`, `tsconfig.json`, `.gitignore`, `public/_redirects` | ✅ |
| 앱 셸 | `index.html` (목업 body 이식, `data-lang=ko/en/ja` 정규화, flatten 4키 반영) | ✅ |
| 스타일 | `src/styles/tokens.css`(토큰) + `src/styles/app.css`(컴포넌트) — 목업 CSS 1:1 이식 | ✅ |
| 타입 | `src/types/score.ts`(스키마 1:1), `src/types/content.ts`(파이프라인 산출물) | ✅ |
| 상수 | `src/config.ts` (`VIRTUAL_LESSON_PRICE`, `SUPPORTED_LANGS`, `DONATION_LINKS` 등) | ✅ |
| 콘텐츠 파이프라인 | `scripts/build-content.mjs` → `src/content/{curriculumId}/{dayKey}.json` (52) + `manifest.json` | ✅ (52 day + manifest, 105 악보 검증) |
| 진입점 스텁 | `src/main.ts`(부트 골격), `src/render/`·`src/lib/`·`src/views/` index 스텁 | ✅ (TODO 채움 대기) |

빌드 검증: `npm run build:content` OK · `npx tsc --noEmit` 통과 · `vite build` 통과.

---

## 2. 다음 단계가 채울 자리 (스텁 위치)

### → notation-renderer (`technical_spec.md` §5·§13.1)
- `src/render/fretboard.ts` — `renderFretboard(score: Score): string`
- `src/render/tab.ts` — `renderTab(score: Score): string`
- 입력 타입은 이미 `src/types/score.ts` 준비됨. `src/render/index.ts` 재노출 주석 해제만 남음.
- 실 데이터: `src/content/**/*.json` 의 `scores[]`(105건) + 스키마 `examples` 2건으로 시각 검증.

### → frontend-engineer (`technical_spec.md` §6·§7·§8·§13.2)
- `src/lib/` — `storage.ts` / `progress.ts` / `nudges.ts` / `i18n.ts` / `router.ts` / `content.ts`(로더)
- `src/views/` — `home.ts` / `curriculum.ts` / `lesson.ts` (+ components: sheet/toast/confetti/langSwitcher/donationCard)
- `src/main.ts` — TODO 주석 지점(i18n init → state → router)을 실제 호출로 대체.

---

## 3. 구현 시 주의점 (스캐폴딩에서 확정된 계약)

1. **콘텐츠 로딩 방식(결정 필요 지점):** `src/content` 는 Vite 번들 대상이라 프로덕션에서 원시 `fetch('/src/content/..')` 로는 접근 불가.
   - 권장: `import.meta.glob('../content/**/*.json')` 또는 동적 `import()` 로 **Day 단위 지연 로드**(해시·트리셰이킹 유지, Zero-Cost 부합).
   - 대안: 파이프라인 출력을 `public/content/` 로 바꿔 정적 `fetch` (technical_spec §10 문구와 일치). — frontend-engineer 가 택1.
2. **i18n dot-path flatten 4키**(§7.4): `home.storage_cta`, `lesson.chord_note`, `lesson.tab_note`, `storage.io_placeholder` — index.html 에 이미 반영됨. 리졸버는 목업 원문(`home.storage.cta` 등)이 아니라 이 평탄화 키를 써야 한다.
3. **언어코드:** 목업 `kr/jp` → 표준 `ko/ja`. index.html·config·사전 파일명 모두 `ko/en/ja`.
4. **하드코딩 잔재 바인딩**(§7.4): 결제 버튼은 `donate.toss/kakaopay/paypal/bmc`(index.html `data-i` 반영 완료), 넛지·토스트는 `nudge.*`/`storage.*`/`error.*` 키로.
5. **아낀 레슨비 단가:** `VIRTUAL_LESSON_PRICE = 20000` 단일 상수(목업 언어별 상이값 폐기, §11).
6. **모듈 경계:** `render/*` 는 순수(SVG 문자열), `lib/*` 는 DOM 비의존 우선, `views/*` 만 상태·DOM 접근. `localStorage` 는 `lib/storage.ts` 경유.

---

## 4. 명령어

| 명령 | 동작 |
|---|---|
| `npm run build:content` | `_design_docs` → `src/content` 재생성 (52 day + manifest) |
| `npm run dev` | 콘텐츠 빌드 후 Vite dev 서버 |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run build` | 콘텐츠 빌드 → 타입체크 → `vite build` (dist/) |

콘텐츠 SSOT 는 `_design_docs`. `src/content` 는 재생성 가능한 산출물(git-ignore).
