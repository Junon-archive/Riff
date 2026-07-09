---
id: 04-slash-rhythm
status: TODO
priority: low
risk: medium
depends_on: []
owner: null
---

# 04 · 슬래시 리듬 표기

## 목적 (왜)

코드 반주를 음표 대신 **빗금(/)으로 "여기서 이 코드 치기"** 만 표시하는 표기법. 펑크·재즈 리듬 악보에서 흔하다. "리듬 표기 위주" 커리큘럼이 필요로 한다.

## ⚠ 이 항목은 "그냥 추가"가 아님

다른 표현 기법(02)과 달리 **단순 가법 분기로 안 된다:**
- `notation:"rhythm"` 이 검증기에서 **원천 차단**됨: `web_app/scripts/build-content.mjs:141` `if (score.meta.notation === 'rhythm') at('...미지원...')`.
- 과거 조사(T3)에서 **VexFlow 4.2.5의 슬래시 노트헤드가 실제로 안 그려짐** 확인 — `codeNoteHead('S')` 가 빈 글리프 반환. 그래서 T3에서 "결정 D: 슬래시 보류, 실음 노트헤드로 렌더"로 우회했음.
- 즉 **커스텀 슬래시 글리프를 staff.ts에 직접 구현**해야 함.

## 현재 강제 지점 (검증된 코드 위치)

| 무엇 | 위치 | 현재 동작 |
|---|---|---|
| rhythm notation 금지 | `build-content.mjs:141` | 빌드 실패 처리 |
| notation enum | `build-content.mjs:119` `NOTATIONS={tab,staff,staff+tab,rhythm}` | rhythm은 정의돼 있으나 위에서 차단 |
| chordSymbol 필드 | `score.ts` (이미 존재, 미사용) | 슬래시 위 코드명 표기에 재사용 가능 |
| chordSymbol 렌더 | `staff.ts` (부착 코드 존재) | 실렌더 데이터 0건 — B_chordsymbol 조사 참고(있으면) |

## 수정 상세 (실행 지침)

1. **슬래시 글리프 렌더:** staff.ts 에 슬래시 노트헤드(마디당 박 위치에 빗금)를 커스텀 SVG path 또는 VexFlow GhostNote/커스텀 글리프로 그린다. VexFlow 4.2.5 기본 'S' 글리프가 비었으므로 자체 path 권장.
2. **코드명 병기:** `chordSymbol` 필드를 슬래시 위에 표기(이미 부착 코드가 있으면 재사용). VerticalJustify 등은 chordSymbol 조사 문서 참고.
3. **금지 해제:** 구현·검증 후 `build-content.mjs:141` 의 rhythm 차단을 제거하고, rhythm 경로 렌더 라우팅(`render/index.ts`)을 staff.ts 슬래시 모드로 연결.
4. **가드 정합:** rhythm 도 staff 경로이므로 STAFF_TECHNIQUES/기타 가드와의 관계 확인.

## 기존 커리큘럼 불변 보장

- 새 notation 값(rhythm)이라 기존 데이터(staff+tab 195블록)는 이 경로를 안 탐 → 불변.
- 금지 해제는 rhythm 을 실제 쓰는 데이터가 생길 때만 영향.

## 검증 방법

- V1 build 0. V3 회귀 0(기존 staff+tab 불변). 
- 신규: rhythm 픽스처(코드 진행 슬래시 + chordSymbol)로 실제 슬래시·코드명 렌더 확인.

## 주의 / 정지조건

- VexFlow 기본 글리프 의존 금지(빈 글리프). 자체 path 필수 — 픽셀 검증 필요.
- chordSymbol 렌더가 실데이터로 검증된 적 없으므로(0건), P.M. Annotation 등과 겹침·적응형 높이 실측 선행 권장(T6 B_chordsymbol 조사 결과 있으면 참고).

## 체크리스트

- [ ] 슬래시 노트헤드 커스텀 글리프 렌더 (staff.ts)
- [ ] chordSymbol 슬래시 위 병기 + 겹침/높이 실측
- [ ] render/index.ts rhythm 라우팅 연결
- [ ] build-content.mjs:141 rhythm 차단 해제
- [ ] playbook 8규칙의 "rhythm/슬래시 금지" 문구 갱신
- [ ] V1~V3 통과 + Roadmap·이 문서 갱신

## 미해결 질문 (사람 결정)

- 정말 슬래시 전용 표기가 필요한가, 아니면 현행 staff+tab(실음 노트헤드)로 충분한가? (우선도 낮음 이유)
- 슬래시 글리프 스타일(단순 빗금 vs 리듬 슬래시 표준).
