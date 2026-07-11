---
id: 18-solo-tab-to-staff
status: TODO
priority: medium
risk: medium
depends_on: []
owner: null
---

# 18 · 솔로/스케일 tab → staff+tab 이식 (tab.ts 제거)

## 목적 (왜)

`solo_scale_3months` 는 **유일하게 `meta.notation` 미지정**이라 자체 타브 SVG(`render/tab.ts`)로 그려진다. 나머지 6개 커리큘럼(일렉·코드·펑크·베이스 3종·블루스)은 **전부 `staff+tab`**(VexFlow `render/staff.ts` — 오선보+타브 박자 공유)로 통일돼 있다. 솔로도 `staff+tab` 으로 옮겨 **① 표기 일관성**(오선보로 음정 시각화 = 스케일 학습에 유리)과 **② `tab.ts` 제거**(렌더 경로 이원화 해소)를 달성한다.

**결정된 방향:** 자체 타브(tab.ts) 폐기 → 솔로 89블록을 `notation:"staff+tab"` 으로 전환. 데이터(음·박자·기법·label)는 그대로 두고 **렌더 경로만** 바꾸는 것이 원칙(주먹구구 금지 — 아래 리스크를 선(先)해소 후 착수).

## 조사 결과 (2026-07-11, 실데이터 전수)

| 항목 | 수치/사실 | 근거 |
|---|---|---|
| solo type:tab 블록 | **89개** (전부 `notation` **미지정** → `renderTab`) | day md `\`\`\`json` 전수 파싱 |
| 타 커리큘럼 notation | 전부 `staff+tab`(bass64·electric34·blues10·chord76·funk76·slap186) | 동일 |
| 박자합 검산 | **위반 0** (217마디, `check`·검증기 로직 동일) | 이식 게이트 통과 확실 |
| timeSignature | **`4/4` 단일** | staff.ts 빔·박자표 단순 |
| tuning | 전부 `['E','A','D','G','B','E']`(index0=최저 E) | staff.ts `resolveOpenMidi` 계약 일치 |
| stringCount | 전부 6 | 6현=기존 불변 경로 |
| technique 분포 | vibrato112·slide27·bend25·hammer_on1·palm_mute13·none68 | **전부 `STAFF_TECHNIQUES` 허용 목록 안** → 검증기 미차단 |
| label | **1260개**(R·3·b7·도수/음이름) | staff.ts 가 음표 **아래** Annotation 으로 그림(`staff.ts:522`) — 렌더됨 |
| duration | quarter·eighth·half·sixteenth | 전부 staff.ts `DUR` 매핑 존재 |
| feature | rest71·slideToFret27·bendTarget25·dotted6, chord/stroke/tuplet/chordSymbol **0** | 화음·스트로크·잇단음 없음 → 단선율(스케일)이라 staff 렌더 단순 |

**핵심:** 데이터가 이미 staff.ts 계약과 **거의 완전 호환**이다. 박자합·기법·튜닝·박자표 모두 통과 조건. 남은 건 **notation 필드 추가 + 아래 리스크 2건**.

## ★ 표현 기법 처리 (밴딩·비브라토·슬라이드·해머·팜뮤트) — 이식 시 표기 변화

솔로/스케일은 **표현 기법이 풍부**하다(리드 악보의 본질). tab.ts→staff+tab 이식 시 **기법이 어떻게 표기되는지 반드시 확인**해야 한다 — tab.ts 와 staff.ts 의 기법 렌더 방식이 다르기 때문이다. 조사한 실사용 분포와 staff.ts(`staff+tab` 모드) 렌더 방식:

| 기법 | solo 사용 | staff+tab 렌더(오선보 / 타브) | 근거(staff.ts) |
|---|---|---|---|
| **vibrato(비브라토)** | **61블록** | 오선보=**표기 없음**(`withTab`이라 라벨 생략) · 타브=**Vibrato 물결선 글리프** | `:257`(라벨 null) `:529`(`new Vibrato()`) |
| **bend(밴딩)** | **22블록**(bendTarget 25) | 오선보=**표기 없음** · 타브=**Bend 화살표+목표 글리프**(`½`·`full` 등) | `:256`(라벨 null) `:528`(`new Bend(bendLabel)`) |
| **slide(슬라이드)** | **21블록**(slideToFret 27) | 오선보=`sl.N` 텍스트(상단) · 타브=**TabSlide 사선**(다음 음과 연결) | `techniqueLetter`·`linkAfter`(slide)·`TabSlide` |
| **hammer_on(해머)** | 1블록 | 오선보=`H` 텍스트 + **Curve 슬러** · 타브=슬러 | `:243`·`linkAfter`(slur)·`Curve` |
| **palm_mute(팜뮤트)** | 2블록 | 오선보=**`P.M.` Annotation**(상단) · 타브=(없음) | `staff.ts` palm_mute 분기 |

**이식 관점 핵심 3가지:**
1. **밴딩·비브라토는 `staff+tab` 에서 "타브측 native 글리프"로만** 표기된다(오선보엔 라벨 없음). 즉 **타브가 반드시 함께 보여야**(`staff+tab`, `staff` 단독 아님) 밴딩 화살표·비브라토 물결이 나온다. → 솔로는 **`staff+tab` 이 정답**(`staff` 단독이면 밴딩/비브라토가 오선보 텍스트 폴백으로 떨어져 화살표·물결 글리프를 잃는다).
2. **전 기법이 `STAFF_TECHNIQUES` 허용 목록 안**(vibrato·bend·slide·hammer_on·pull_off·palm_mute·none) → 검증기 `staffRoute` 게이트 **통과 확인됨**. 새 기법 추가·가드 확장 **불필요**.
3. **슬라이드/해머는 "다음 음과 연결"**(사선·슬러)이라 **행(줄) 경계를 넘으면 생략**된다(staff.ts `linkAfter`, 행 넘는 연결 skip). 17번(오선보 줄바꿈)과 맞물려 **연결선이 끊기는 마디 경계**가 생길 수 있으니 육안 확인 대상(아래 검증·주의).

**→ 결론:** 기법 데이터는 이미 staff.ts 와 호환되고 게이트도 통과한다. 다만 **밴딩·비브라토가 타브측 글리프로만 나온다는 표기 특성**과 **슬라이드/해머 연결선의 줄바꿈 상호작용**을 이식 검증(단계 2 래스터)에서 반드시 눈으로 확인해야 한다. tab.ts 가 쓰던 밴딩/비브라토 표기(자체 SVG)와 **모양이 달라지므로**(VexFlow 글리프로 교체), 대표 블록 전후 비교 권장.

## 현재 상태 (검증된 코드 위치)

| 무엇 | 위치 | 현재 동작 |
|---|---|---|
| 렌더 라우팅 | `web_app/src/render/index.ts:29-36` `renderScore` | `type=tab` + notation 미지정/`"tab"` → `renderTab`; `staff/staff+tab/rhythm` → `renderStaff` |
| tab.ts (제거 대상) | `web_app/src/render/tab.ts` (285줄) | 자체 타브 SVG. **현재 solo 89블록만** 이 경로를 탐 |
| staff.ts (이식 목적지) | `web_app/src/render/staff.ts` `renderStaff(score,'staff+tab')` | 오선보+타브. label=음표 아래 Annotation, 기법 native 글리프 |
| 음이름 이명동음 판정 | `staff.ts:202` `preferFlats(meta.key)` → `:594` | key 문자열에 소문자 `b` 있으면 **플랫 조**로 판정 |
| 조표(선택) | `staff.ts:124` `validKeySignature(meta.keySignature)` | `meta.keySignature`(별도 필드) 있을 때만 조표. solo 는 `meta.key`(서술형)만 있고 `keySignature` 없음 → 조표 미표기(무해) |
| 검증기 게이트 | `build-content.mjs:186`(notation enum)·`:197-213`(staffRoute→STAFF_TECHNIQUES·박자합) | `staff+tab` 이면 박자합·기법 게이트 적용(solo 는 이미 통과 확인) |
| 불변식 지문 | `check-invariants.mjs:54` `out[key]={type,notation,measures}` | **notation 을 지문에 포함** → notation 변경 시 회귀로 잡힘 |
| 문서 참조 | `technical_spec.md` §5.3·§13.2·구조도(`tab.ts`), `render/index.ts` 주석 | tab.ts 제거 시 동반 갱신 |

## ⚠️ 착수 전 반드시 해소할 리스크

### R1 (필수) — `preferFlats` 오판: "blues" 의 'b'
- **증상:** `preferFlats` 가 key 문자열에 소문자 `b` 가 있으면 플랫 조로 본다. solo key 중 **"A blues"(8블록)·"A Mixolydian (blues)"(1블록)** 이 'blues' 의 **b 때문에 FLAT 오판** → 오선보 음이름이 플랫(예 A#→Bb, G#→Ab)으로 잘못 표기된다.
- **왜 지금 안 터졌나:** tab.ts 는 음이름을 계산하지 않고 `label`(데이터 문자열)만 그리므로 이명동음 무관. staff.ts 는 string+fret→음이름을 **계산**하므로 노출된다.
- **해소안(택1, R1 먼저):**
  - (a) `preferFlats` 를 **단어 경계 기반**으로 정밀화 — 조 이름의 실제 플랫 표기(`Bb`·`Eb`… 또는 `♭`)만 매칭하고, "blues"·"Dorian" 같은 **서술어의 우연한 b** 는 무시. (권장 — 근본 수정, 타 커리큘럼도 안전해짐.)
  - (b) 해당 solo 블록의 `meta.key` 를 음이름 판정에 안 걸리게 정리(예 "A blues" → "A (blues)" 은 여전히 b… → 부적절). (a) 가 맞다.
- **주의:** `preferFlats` 는 staff.ts **공용 함수** → 고치면 타 커리큘럼 음이름도 영향. 현재 타 커리큘럼 key 에 우연한 b 오판이 있는지 **동시 점검**(회귀 스캔).

### R2 (필수) — 불변식 baseline: notation 변경은 "의도된 회귀"
- solo 89블록에 `notation:"staff+tab"` 추가 → `check-invariants.mjs` 지문의 `notation` 이 `null→"staff+tab"` 로 바뀐다 → **89블록 전부 회귀로 감지**된다(정상·의도됨).
- **절차:** 이식 커밋에서 `node scripts/check-invariants.mjs --update` 로 baseline 갱신하고, diff 가 **오직 solo 89블록의 notation 필드**에 한정되는지(measures 박자합·onset 등은 불변) 확인 후 커밋.

## 수정 상세 (실행 지침)

### 단계 0 — 리스크 선해소 (R1)
1. `staff.ts:202` `preferFlats` 를 단어 경계/실제 플랫 표기 기반으로 정밀화. "blues"·서술어 b 오판 제거.
2. 회귀 스캔: 전 커리큘럼 key 값에 대해 수정 전후 `preferFlats` 판정 diff → **의도한 blues 2종만 sharp 로 바뀌고** 나머지 불변인지 확인.

### 단계 1 — solo 블록 notation 부여 (데이터)
1. solo `day_*.{ko,en,ja}.md` 의 **type:tab 블록 89개**(×3언어 = 실제 편집 파일은 ko 원본, en/ja 는 JSON 블록 바이트 동일 복사 규약) `meta` 에 **`"notation": "staff+tab"`** 추가. **음·박자·기법·label 은 미변경**.
2. 3언어 JSON 블록 **바이트 동일** 유지(`curriculum_i18n` 규약, V2). ko 에 넣은 것과 동일하게 en/ja 에도.
3. (선택) `meta.keySignature` 는 **부여하지 않는다** — solo key 는 조성이 곡중 전환/모달이라(A Dorian/Mixolydian 등) 단일 조표가 부적절. 조표 미표기가 안전(staff.ts 는 keySignature 없으면 미표기).

### 단계 2 — 렌더 경로 검증 (tab.ts 아직 유지)
1. `npm run build` → solo 레슨 페이지가 `staffsvg`(오선보+타브)로 렌더되는지 dist 확인.
2. 대표 블록 **래스터 육안**: 스케일 시퀀스(16분음 상행)·벤딩/슬라이드/비브라토·rest·label(도수) 위치·박자표·빔이 정상인지. R1 해소로 음이름 sharp 정확한지.
3. `check-invariants --update` (R2) 후 diff 가 solo notation 89건에 한정되는지.

### 단계 3 — tab.ts 제거 (렌더러)
1. **모든 tab 블록이 staff 경로로 이동했음을 확인**(solo 전환 후 `notation` 미지정 tab 블록 0건 grep)한 뒤에만 착수.
2. `render/index.ts`: `renderTab` import/분기/re-export 제거. `renderScore` 의 `type=tab` 은 항상 `renderStaff`(notation 기본값을 `staff+tab` 으로) 처리. **notation 미지정 방어**: 안전을 위해 `renderScore` 에서 `type=tab` 이고 notation 미지정이면 `staff+tab` 로 폴백(향후 저작 실수 대비).
3. `render/tab.ts` 파일 삭제.
4. 문서 갱신: `technical_spec.md` §5.3(tab.ts) 제거/통합, 구조도·§13.2·`renderScore` 분기 설명, `render/index.ts` 헤더 주석.
5. `build-content.mjs` 주석(`:156`·`:213` "tab.ts 경로로 내라") 문구 갱신 — 이제 미지원 기법은 staff.ts 확장으로만.

## 기존 커리큘럼/사이트 불변 보장

- **타 커리큘럼 불변:** 이미 `staff+tab` 이라 이 작업의 영향 없음(notation 미변경). R1(`preferFlats`)만 공용이라 회귀 스캔으로 담보.
- **solo 데이터 의미 불변:** notation 필드 **추가**만, 음·박자·기법·label 미변경 → 불변식 measures 지문(박자합·onset·rest·tech) **그대로**. 바뀌는 지문은 `notation` 뿐(R2 baseline 갱신 대상).
- **i18n 3언어:** JSON 블록 바이트 동일 유지(V2).
- **Zero-Hallucination:** 음정=string+fret+tuning 계산(staff.ts), 데이터 그대로 → 유지.

## 검증 방법

- **V1** `cd web_app && npm run build` exit 0.
- **V2** solo `day_*.{ko,en,ja}` JSON 블록 3언어 바이트 동일(notation 포함).
- **V3** `check-invariants.mjs`: **solo 89블록 notation 만 변경**, measures 지문 불변. 타 커리큘럼·지판 0 회귀. (`--update` 후 diff 리뷰.)
- **R1 검증:** 전 커리큘럼 key `preferFlats` 판정 diff = blues 2종만 sharp 전환, 나머지 불변.
- **육안(핵심):** solo 대표 블록 래스터 — 오선보 음정·label·박자표·빔·rest + **표현 기법 전수 육안**(아래 기법별 대표 블록으로): 밴딩=타브 벤딩화살표(`m1w4d1`), 비브라토=타브 물결선(`m1w0d4`), 슬라이드=사선(`m1w1d4`), 해머=슬러(`m3w10d2`), 팜뮤트=`P.M.`(`m3w11d2`), **"A blues" 블록 음이름 sharp**(R1). tab.ts 대비 기법 **모양이 바뀌므로**(VexFlow 글리프) 전후 비교. (확인 요청 시 커리큘럼-월-주-일 명시.)
- **연결선 육안:** 슬라이드/해머 블록에서 연결선(사선·슬러)이 정상, 줄바꿈(17번) 마디 경계에서 끊기는지 확인.
- **tab.ts 제거 후:** `renderTab` 참조 0 grep, build 0, 전 페이지 staffsvg 렌더.

## 주의 / 정지조건

- **R1 미해소 상태로 단계 1 착수 금지** — "A blues" 블록이 플랫 오표기된 채 배포된다.
- **notation 미지정 tab 블록이 solo 외에 없는지** 단계 3 전 재확인(향후 다른 세션이 미지정 블록 추가했을 수 있음).
- **`staff.ts`·`build-content.mjs` 는 다른 세션도 만지는 파일** → 착수 시 워킹트리 충돌 확인, 커밋 위생(경로 지정).
- **staff.ts 세로 레이아웃(17번)과 상호작용:** solo 스케일은 16분음 다수 → 17번(오선보 오버플로/줄바꿈)이 진행 중이면 그 결과 위에서 검증(마디 폭·줄바꿈이 solo 밀집 마디에 어떻게 작동하는지 확인).
- **tab.ts 삭제는 되돌리기 쉬우나(git)**, 삭제 전 solo 전환·검증 완료가 전제. 단계 2까지 커밋 → 단계 3 별도 커밋 권장(문제 시 롤백 용이).
- label 이 오선보에서 음표 **아래**(BOTTOM), 저음현 렛저라인과 겹칠 가능성 육안 확인(스케일 저음역).

## 체크리스트

**단계 0 — R1 선해소**
- [ ] `preferFlats` 정밀화(서술어 b 오판 제거)
- [ ] 전 커리큘럼 key 판정 diff 회귀 스캔(blues 2종만 전환)

**단계 1 — solo notation 부여**
- [ ] solo 89블록 `meta.notation:"staff+tab"` 추가(ko), 음·박자·label 미변경
- [ ] en/ja JSON 블록 바이트 동일(V2)
- [ ] keySignature 미부여 확인

**단계 2 — 렌더 검증**
- [ ] build 0 + solo 페이지 staffsvg 렌더 확인
- [ ] 대표 블록 래스터 육안(음정·label·박자·A blues sharp)
- [ ] **기법 전수 육안** — 밴딩(타브 화살표)·비브라토(타브 물결)·슬라이드(사선)·해머(슬러)·팜뮤트(P.M.), tab.ts 대비 전후 비교
- [ ] 슬라이드/해머 연결선 정상 + 줄바꿈 경계 확인
- [ ] `check-invariants --update` + diff = solo notation 89건 한정

**단계 3 — tab.ts 제거**
- [ ] notation 미지정 tab 블록 0건 확인
- [ ] `render/index.ts` renderTab 제거 + staff+tab 폴백
- [ ] `render/tab.ts` 삭제
- [ ] 문서 갱신(technical_spec §5.3·구조도·index.ts 주석·build-content 주석)
- [ ] build 0 + renderTab 참조 0 + Roadmap·이 문서 갱신

## 미해결 질문 (사람 결정)

- **`preferFlats` 수정 범위** — 근본 정밀화(권장) vs solo blues 블록만 임시 우회.
- **`meta.keySignature` 부여 여부** — 미부여(권장, 모달 곡이라) vs 곡별 조표 부여(추가 저작).
- **단계 분리 커밋** — 0·1·2(전환·검증)를 먼저 배포 → 3(tab.ts 삭제) 별도. vs 한 번에.
- **17번(오선보 오버플로)과 순서** — 17 완료 후 solo 이식 vs 병행. solo 16분음 밀집 마디가 17 레이아웃에 의존.
- **label 밀도** — 오선보에서 도수 label 1260개가 스케일 악보에 과밀하면 표기 정책 조정할지(예 강조음만).
