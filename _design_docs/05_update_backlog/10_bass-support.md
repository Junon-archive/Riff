---
id: 10-bass-support
status: IN_PROGRESS (엔진 B0~B4 완료 2026-07-09 — 클레프·slap·튜닝·다현·지판·옥타브앵커. 콘텐츠 저작 B5만 대기)
priority: medium
risk: high
depends_on: [03, 02]     # 03② 튜닝읽기·03③ 다현 = 하드 선행. 02 = staff 경로 표현기법(소프트, staff+tab 사용 시).
owner: null
---

# 10 · 베이스 지원 (엔진: 클레프·slap·튜닝·다현·지판) + 베이스 커리큘럼 저작

## 목적 (왜)

베이스 커리큘럼을 신설하려면 **기타 6현·treble 전제로 박힌 렌더/스키마를 베이스로 확장**해야 한다. 03(튜닝·다현·조표)·02(오선보 표현기법)가 인프라의 절반을 이미 예고하지만, **베이스만의 결정적 요소 5가지는 어디에도 없다:**

1. **베이스 클레프(F 음자리표) + 옥타브** — 베이스는 treble-8vb가 아니라 **bass clef(8vb)** 로 적는다. `staff.ts`가 `addClef('treble',…,'8vb')` 로 하드코딩.
2. **slap 표기(썸 T / 팝 P)** — `technique` enum에 없음, 렌더 없음. 베이스 정체성 기법.
3. **instrument enum** — 스키마·타입이 `["guitar"]` / `'guitar'` 리터럴. 베이스 분기의 스위치.
4. **베이스 튜닝 기본값 + 4·5현 필수** — 4현 EADG, 5현 BEADG, 6현 BEADGC. **4현·5현은 둘 다 1급 필수 구현**(베이스 교육이 4·5현을 함께 다룸 → 병행 제시), 6현은 스키마·렌더 지원. 03은 "정의 위치 미정"으로 남겨둠.
5. **베이스 지판(fretboard.ts)** — `N_STR=6` 하드코딩. **변경금지 컨벤션은 2026-07-09 승인으로 해제** → 다현 지판 정식 착수(범용 일반화는 03③ 소관, 베이스 고유분은 B4).

**포함:** 위 5대 엔진 확장 + 베이스 커리큘럼 저작 트랙(09 §13-1 골격 활용).
**제외(다른 문서 소관, 중복 금지):**
- 튜닝 읽기(`OPEN_MIDI`→계산)·다현 일반화(stringCount 6→집합·타브 줄 수·string 범위) = **03** ②③. 이 문서는 03을 **선행으로 소비**한다.
- bend/hammer/pull/slide/vibrato/harmonic **오선보** 렌더 = **02**. (참고: 이들은 **타브 경로(`tab.ts`)에선 이미 렌더됨** → 베이스가 `notation:"tab"` 로 내면 02 없이도 벤딩·해머·풀 표기됨. `notation:"staff+tab"` 를 쓸 때만 02 필요.)

## 선행 의존 정리 (이 문서를 착수하기 전에)

| 선행 | 무엇 | 왜 이 문서 전에 필요한가 | 강도 |
|---|---|---|---|
| **03 ②** | `staff.ts`/`tab.ts` 가 `meta.tuning` 읽어 음정·현이름 **계산**(OPEN_MIDI 대체) | 베이스 음정은 EADGBE가 아님 → 계산 안 하면 오선보 음정이 **조용히 틀림**(Zero-Hallucination 위반) | **하드(필수)** |
| **03 ③** | `stringCount` 리터럴 6 → 허용 집합, 타브 줄 수·string 범위·**지판(`fretboard.ts`) 다현화** stringCount/tuning 구동 | 4현(5·6현) 타브·**지판**·검증 | **하드(필수)** |
| **03 ①** | `meta.keySignature` + `addKeySignature` | 베이스 라인도 조표 있으면 유용(선택) | 소프트 |
| **02 A** | staff 경로 bend/hammer/pull/slide/vibrato 렌더 | 베이스가 `staff+tab` 로 표현기법 낼 때만 | 소프트(콘텐츠 표기 선택에 의존) |

> **결론:** 03 ②③(튜닝 계산·다현 일반화 — 타브+**지판 fretboard.ts**) 완료가 이 문서 Phase B1~B4의 전제. 03을 먼저 끝내거나, 최소 03②③를 이 작업의 Phase 0으로 흡수해 함께 진행한다(아래 Phase B0).

## 현재 강제 지점 (검증된 코드 위치 — 베이스 관점)

| 무엇 | 위치 | 현재 동작 | 베이스 함의 |
|---|---|---|---|
| **클레프 하드코딩** | `web_app/src/render/staff.ts:456` `stave.addClef('treble','default','8vb')` | 기타 클레프 고정 | ❌ 베이스는 `('bass','default','8vb')` 필요 |
| **오선 라인 상수(treble)** | `staff.ts:86-87` `TREBLE_TOP_LINE=64`(E4) `TREBLE_HI_LINE=77`(F5) | treble 5선 좌표 | ❌ bass clef 라인(맨아래 G2=43, 맨위 A3=57)로 분기 |
| **표기 옥타브 시프트** | `staff.ts:57` `WRITTEN_OCTAVE_SHIFT=1` | treble-8vb(실제보다 1옥 위 표기) | 베이스도 bass clef 8vb(실제보다 1옥 위 표기)라 동일 값이나 **클레프와 함께 검증** |
| **개방현 MIDI 하드코딩** | `staff.ts:51` `OPEN_MIDI={1:64,…,6:40}` | EADGBE 고정 | 03②가 tuning 계산으로 대체(선행) |
| **instrument 리터럴** | 스키마 `fretboard_score_schema.json:21` enum `["guitar"]` · 타입 `score.ts:48` `'guitar'` | guitar 고정 | ❌ `'bass'` 추가 = 클레프·튜닝·지판 분기 스위치 |
| **stringCount 리터럴 6** | 스키마 `:22` enum `[6]` · 타입 `score.ts:50` `stringCount: 6` · 검증기 `build-content.mjs:165` `!==6` fail | 6 고정 | 03③가 집합화(4·6) — 여기서 **5도 추가** |
| **technique enum(slap 없음)** | 스키마 `:124` · 타입 `score.ts:31` `Technique` | none/hammer_on/pull_off/slide/bend/vibrato/palm_mute/dead_note/harmonic | ❌ `slap_thumb`·`slap_pop`(+선택 `tap`) 없음 |
| **staff 경로 technique 화이트리스트** | `build-content.mjs:153` `STAFF_TECHNIQUES={none,palm_mute,dead_note}` | 그 외 staff에서 fail | slap을 staff+tab 로 낼 거면 렌더 후 완화 |
| **tab.ts technique 렌더** | `tab.ts`(H/P·vibrato·slide·bend 그림) | slap T/P **미표기** | ❌ T/P 글자 표기 추가 |
| **지판 6현 하드코딩** | `fretboard.ts:21` `N_STR=6` + string 1~6 검사 | 6현 지판만 | ✅ **다현화 착수 확정**(2026-07-09 승인) — 범용 일반화=03③, 베이스 고유분=B4, 6현 픽셀 불변 필수 |
| **현 굵기(저음현)** | `fretboard.ts:142`·`tab.ts` 저음현 두껍게 | 6현 기준 | 4/5/6현 stringCount 구동으로 |

## 수정 상세 (실행 지침)

### Phase B0 — 선행 03②③ 확정 (이 작업의 토대)

03의 ②(튜닝 계산)·③(다현 일반화 = 타브 줄 수·string 범위·**지판 `fretboard.ts` 다현화**)를 **먼저 완료**하거나 이 작업에 흡수한다. 완료 기준은 03 문서의 체크리스트·V4 골든 스냅샷(기존 6현 **오선보·지판·타브** 픽셀 불변). **여기서 stringCount 허용 집합에 `5`를 포함**하도록 03③를 확장(4·5·6). 이후 B1~B4는 이 위에 얹는다.

### Phase B1 — instrument='bass' + 베이스 클레프 + 옥타브 (staff.ts 핵심)

1. **instrument 확장:** 스키마 `:21` enum `["guitar","bass"]`, 타입 `score.ts:48` `'guitar' | 'bass'`. 기본값 `guitar` 유지(생략 시 기존 불변).
2. **클레프 분기:** `staff.ts:456` 를 `meta.instrument==='bass' ? addClef('bass','default','8vb') : addClef('treble','default','8vb')` 로. (베이스도 **8vb** — 베이스 기타는 bass clef보다 한 옥타브 낮게 울리는 이조악기.)
3. **오선 라인 상수 분기:** `TREBLE_TOP_LINE/HI_LINE`(64/77) 옆에 `BASS_BOTTOM_LINE=43`(표기 G2)·`BASS_TOP_LINE=57`(표기 A3) 추가, 렛저라인 여백 계산을 instrument로 분기. (표기 MIDI 기준 — 실제음은 8vb.)
4. **음정 계산:** 03② 완료 전제 → `OPEN_MIDI` 대신 tuning 기반. 4현 베이스 개방현 실제음 = E1·A1·D2·G2(MIDI 28·33·38·43), 표기(8vb)는 +12 = 40·45·50·55(bass clef에 자연스럽게 안착).
5. **★5현 저음 B 음역(필수):** 5현 개방현 B는 **B0(실제 MIDI 23)**, 표기(8vb)는 **B1(MIDI 35)** → bass clef 맨아래선(표기 G2=43)보다 낮아 **아래 렛저라인 2줄**에 놓인다. 렛저라인 여백 계산이 이 저음까지 수용하는지 5현 픽스처로 확인(잘리거나 겹치면 안 됨). 6현 상단 C(개방 실제 C3=48, 표기 C4=60)는 오선 안이라 문제없음.
6. **기존 불변:** `instrument` 미지정/`guitar` 는 전 분기 기존과 동일 → 6현 기타 커리큘럼 오선보 **바이트 불변**(V4 골든 스냅샷).

### Phase B2 — slap 표기(썸 T / 팝 P) + 고스트 (technique 확장)

1. **enum 추가:** `slap_thumb`(엄지 슬랩)·`slap_pop`(검지/중지 팝). 스키마 `:124` + 타입 `Technique`. (고스트/데드노트는 **기존 `dead_note`(X) 재사용** — 슬랩 그루브의 X 뮤트음.)
2. **tab.ts 렌더:** 노트 위(또는 아래)에 **`T`/`P` 글자** 표기(H/P 아크와 같은 관례, `currentColor`). 색 역할(role) 신설 불필요 → **color_legend 불변**.
3. **staff.ts 렌더(선택):** 베이스 콘텐츠가 `staff+tab` 를 쓰면 오선보 음표 위 `T`/`P` 텍스트(Articulation/Annotation). 안 쓰면 tab 경로만으로 충분.
4. **검증기 완화(구현 후):** staff+tab 로 slap 낼 경우에만 `STAFF_TECHNIQUES` 에 `slap_thumb`/`slap_pop` 추가(렌더 구현 **후**). tab 전용이면 `build-content.mjs:191` staffRoute 가드가 안 걸리므로 그대로.
5. **i18n:** 악보 범례/툴팁에 T=Thumb(썸)·P=Pop(팝) 3언어 키 추가(`04_localization`). 하드코딩 금지.

### Phase B3 — 베이스 튜닝 기본값 + 4·5현 필수 지원 (다현 완성)

**★4현·5현은 둘 다 1급 필수 구현.** 베이스 교육은 4현과 5현을 함께 다루는 경우가 많아(같은 라인을 4현/5현 양쪽으로 제시) 5현을 "스키마만·콘텐츠 나중"으로 미루지 않는다. 6현은 스키마·렌더까지 지원하되 초기 콘텐츠 필수는 아님.

1. **기본 튜닝 정의(SSOT 위치 = 렌더 계산 함수 + 스키마 description):** 4현 `["E","A","D","G"]`(저→고, index0=최저), 5현 `["B","E","A","D","G"]`, 6현 `["B","E","A","D","G","C"]`. **주의:** tuning 배열 순서 규약은 기존과 동일하게 **6→1(최저→최고 인덱스)**, 현 번호는 1=최고음. 4현이면 string 1~4, **5현이면 string 1~5(5=최저 B)**.
2. **stringCount 집합에 4·5·6 포함**. 스키마 enum·타입·검증기 `build-content.mjs:165` 3중 갱신. 4·5는 렌더·검증·픽스처까지 **완결**, 6은 스키마·렌더 지원.
3. **string 범위 검사**를 stringCount 구동(4현 1~4, 5현 1~5, dot·note·chord·barre 전부).
4. **검증(4·5 동급):** 4현 EADG 픽스처로 타브 4줄·bass clef 음정 정확, **5현 BEADG 픽스처로 타브 5줄·저음 B(표기 B1) 렛저라인·지판 5현** 정확. 둘 다 필수 게이트.

### Phase B4 — 베이스 지판(fretboard.ts) — ✅ 착수 확정(2026-07-09 승인)

**결정(2026-07-09):** "지판 이미지 없는 커리큘럼은 성립 안 됨" → `fretboard.ts` 변경금지 컨벤션 **해제**, 다현 지판 정식 착수. **범용 다현 지판 일반화 자체는 `03③`이 소유**(우쿨렐레·7현에도 재사용) → 이 Phase는 03③를 **선행 의존**하고 **베이스 고유분만** 얹는다.

- **03③가 처리(선행):** `N_STR=6` → stringCount 구동, 현 이름 = tuning 계산, 현 좌표·간격·저음현 굵기 = stringCount 일반화, dot/barre string 범위 = 1~stringCount. **기존 6현 지판 픽셀 바이트 불변**(V4 골든 스냅샷 필수).
- **B4가 얹는 베이스 고유분:** 베이스 튜닝(4 EADG/5 BEADG/6 BEADGC) 기반 **개방현 라벨·현 이름**, 5/6현 저음현 추가 굵기 단계, 베이스 지판 다이어그램 관례(넥 폭·프렛 간격 감각). B3(튜닝)에 의존.
- **콘텐츠 함의:** 이제 베이스도 **`fretboard_diagram`(코드/코드톤 지판)** 을 기타와 동일하게 쓸 수 있다 → 라인/스케일/리프뿐 아니라 지판 시각화 완비. B5 저작에서 지판 다이어그램 정상 사용.

### Phase B5 — 베이스 커리큘럼 저작 트랙 (콘텐츠)

- **접근:** 09 §13-1 지침 준용 — `funk_rhythm` week_N_prompt를 골격 차용(리듬·오른손 테크닉 중심이라 베이스와 정합), **06(인라인 배치)·08(산문 하이라이트) 규약을 프롬프트에 처음부터 내장**(retrofit 방지).
- **스키마 게이트:** B1~B4 렌더 확장(클레프·slap·튜닝·**지판**)이 **먼저 머지된 뒤** day 저작(안 그러면 베이스 악보·지판이 안 그려지거나 틀리게 그려짐). 즉 콘텐츠는 엔진에 의존.
- **★4현·5현 병행 제시(스키마 무변경):** 베이스 레슨은 같은 라인/스케일을 **4현과 5현 양쪽으로 보여주는 경우가 많다**. day당 여러 score 블록이 이미 허용되므로 **스키마 변경 없이** 동일 내용을 `stringCount:4`(EADG) score + `stringCount:5`(BEADG) score **두 블록으로 병행 저작**한다(지판·타브 모두). 저음 B를 활용하는 대안 운지는 5현 블록에만 표기하고, 산문에서 "4현이라면 …, 5현이라면 저음 B로 …"로 대비. 저작 프롬프트에 이 병행 규약을 명시(retrofit 방지). — 전제: B3에서 4·5현이 **둘 다 완결 구현**돼 있어야 함.
- **커리큘럼 설계 요소(교육):** 오른손(핑거·투핑거·레이킹)·팜뮤트·고스트노트·슬랩(썸/팝)·해머/풀·슬라이드·펜타/메이저 스케일 라인·루트-5도-옥타브·워킹베이스 기초, **5현 저음 B 활용(확장 음역·B 스트링 뮤트/썸레스트)**. 난이도 곡선·estMinutes 등은 `00_curriculum_authoring_playbook` 준수.
- **분리 판단:** 콘텐츠 분량이 커지면 별도 `11_bass-curriculum.md` 로 스핀오프(엔진=10 / 콘텐츠=11). 초기엔 이 문서 Phase B5로 둔다.

## 기존 커리큘럼 불변 보장

- **전 분기 가법:** `instrument` 미지정/`guitar`·`stringCount 6`·표준 튜닝 데이터는 모든 신규 분기를 **안 타므로 출력 바이트 불변**(README 공통원칙 1과 동일 원리).
- **클레프/음정:** B1은 `instrument` 스위치로만 분기 → 기존 6현 오선보는 treble-8vb 그대로. **V4 골든 스냅샷으로 픽셀 바이트 동일 필수**(03② tuning 리팩터와 합쳐 검증).
- **slap:** enum 추가는 기존 데이터에 미사용 → 불변. 검증기 완화는 렌더 구현 후에만(가드 조기 제거 금지, 공통원칙 3).
- **지판:** B4 미착수면 `fretboard.ts` 불변. 착수 시 골든 스냅샷.
- **[D]군 불변:** Zero-Cost·박자합 게이트·Zero-Hallucination(악보=JSON→SVG)·i18n 3언어·토스톤·Month→Week→Day·VexFlow 빌드타임 전부 유지.

## 검증 방법

- **V1** `cd web_app && npm run build` exit 0.
- **V2** 콘텐츠 편집 시 ko/en/ja json 블록 개수·내용 동일(베이스 악보 JSON 3언어 바이트 동일).
- **V3** `node web_app/scripts/check-invariants.mjs` 회귀 0(신규 베이스 블록은 `--update` 로 baseline 추가).
- **V4 골든 스냅샷(필수):** B0~B1 전/후 **기존 6현 오선보·지판 SVG 바이트 동일**. (클레프·튜닝 리팩터가 기존을 안 건드림을 증명하는 핵심 게이트.)
- **베이스 신규 픽스처(4·5현 둘 다 필수):**
  - **4현 EADG:** (1) 타브 4줄 (2) 지판 4현 (3) bass clef 음정 정확 (4) slap T/P 표기.
  - **5현 BEADG:** (1) 타브 5줄 (2) 지판 5현 (3) 저음 B(표기 B1) 아래 렛저라인 안 잘림 (4) 개방현 라벨 B 정확.
  - **4·5 병행 블록:** 같은 day에 `stringCount:4`·`stringCount:5` score를 함께 넣어 둘 다 정상 렌더·박자합 통과 확인.
- **V5** solo/chord/funk 등 미대상 커리큘럼 산출물 바이트 불변.

## 주의 / 정지조건

- **03②③ 없이 착수 금지:** 튜닝 계산·다현 일반화(타브·**지판**)가 선행. 없이 B1~B4 하면 음정이 틀리거나 타브/지판 줄 수가 안 맞음. **순서 엄수.**
- **`fretboard.ts` 픽셀 불변 절대조건:** 변경금지는 해제됐으나(승인) 다현 분기는 **stringCount≠6일 때만** 타야 한다 → 기존 6현 지판은 기존 경로 그대로, **V4 골든 스냅샷으로 픽셀 바이트 불변**을 커밋 전 반드시 확인. 이게 안 지켜지면 116일 기존 커리큘럼 지판이 조용히 어긋난다.
- **가드 조기 완화 금지:** slap을 staff에 렌더 구현하기 전에 `STAFF_TECHNIQUES` 부터 넓히면 미구현 기법이 조용히 증발.
- **클레프 옥타브 착각 주의:** 베이스 기타는 bass clef **8vb**(실제음 1옥 아래). 표기 MIDI/실제 MIDI 혼동 시 오선보가 한 옥타브 어긋남 → 픽스처로 실제 울림 음 확인.
- **콘텐츠는 엔진 뒤에:** day 저작(B5)은 B1~B4 머지 후. 엔진 미비 상태로 베이스 악보 저작하면 렌더 실패.
- **T 표기 충돌(tap vs slap-thumb):** 두손 태핑을 도입하면 `T`(썸)와 표기 충돌 → 태핑은 별 글리프/괄호로. 미해결 질문 참조.

## 체크리스트

**Phase B0 — 선행(03②③) ✅ 완료(2026-07-09)**
- [x] 03② 튜닝 계산(OPEN_MIDI 대체) 완료 + 골든 스냅샷 6현 불변
- [x] 03③ stringCount 집합화(4·5·6) + 타브 줄 수·현이름·string 범위 + **fretboard.ts 다현화** stringCount/tuning 구동 (6현 픽셀 불변, 4·5현 렌더 확인)

**Phase B1 — instrument + 베이스 클레프 ✅ 완료(2026-07-09)**
- [x] instrument enum `["guitar","bass"]`(스키마·타입·검증기), 기본 guitar
- [x] staff.ts 클레프 분기(`addClef('bass',…,'8vb')`) + bass 오선 라인 상수(BASS_BOTTOM=G2/43·BASS_TOP=A3/57)
- [x] **베이스 개방현 옥타브 앵커 수정**(`standardOpen`/`BASS_OPEN_LOW_TO_HIGH`): 기타 앵커로 계산하면 2옥타브 틀림 → 4 EADG=28·33·38·43, 5 BEADG=23·…, 6 BEADGC=…·48. tuning 기반 정확 계산
- [x] V4 골든 스냅샷 기존 6현(기타) 오선보 픽셀 불변 — dist md5 `31d885e9…` before==after

**Phase B2 — slap T/P ✅ 완료(2026-07-09)**
- [x] technique enum `slap_thumb`·`slap_pop` 추가(타입·스키마·검증기 TECHNIQUES/STAFF_TECHNIQUES)
- [x] tab.ts T/P 글자 렌더(노트 위) + staff.ts T/P Annotation
- [~] i18n T=Thumb/P=Pop 범례 키 — **N/A(현행 일관):** H·P·sl·P.M. 등 모든 기법 약어가 SVG 리터럴이고 별도 범례 UI 없음. 슬랩 T/P도 동일 관례(리터럴). 범례 UI 도입 시 일괄 처리.

**Phase B3 — 베이스 튜닝·다현 완성 (4·5현 둘 다 필수)**
- [x] 기본 튜닝 정의(4 EADG / 5 BEADG / 6 BEADGC) — `BASS_OPEN_LOW_TO_HIGH`(staff.ts) 실제음 앵커 + 03 스키마 규약(index0=최저현). 5현=string 1~5, 5=최저 B
- [x] stringCount 4·5·6 포함, string 범위 stringCount 구동 — 03③에서 완료
- [x] **4현 픽스처** 타브 4줄·지판 4현·음정(E1~G2) 검증 — 2026-07-09
- [x] **5현 픽스처** 타브 5줄·지판 5현·저음 B(B0→표기 B1) 음정 검증 — 앵커 23 확인

**Phase B4 — 베이스 지판 (범용 다현화는 03③에서 완료)**
- [x] 03③ fretboard.ts 범용 다현화(N_STR→stringCount, 현이름=tuning, 좌표·굵기·범위) — 2026-07-09
- [x] 베이스 튜닝 기반 개방현 라벨(stringName이 tuning 파생) + 저음현 굵기 스케일 — 03③ 포함
- [x] 골든 스냅샷 기존 6현 지판 픽셀 불변 + 4·5현 지판 정상 렌더 확인
- [ ] (선택·후순위) 베이스 넥 폭·프렛 간격 등 베이스 관례 미세조정 — 콘텐츠 저작 시 필요하면

**Phase B5 — 베이스 커리큘럼 저작**
- [ ] 엔진(B1~B4) 머지 확인 후 착수
- [ ] funk 골격 + 06/08 규약 내장 프롬프트 작성
- [ ] day 저작 → 박자합 게이트·build·invariants 통과

- [ ] V1~V5 통과 + Roadmap·이 문서·README 인덱스 갱신

## 미해결 질문 (사람 결정)

- ~~**베이스 현 수 범위:** 4현만 vs 4·5·6~~ → **확정(2026-07-09): 4현·5현 둘 다 1급 필수 구현**(렌더·검증·픽스처 완결), 커리큘럼은 **4·5현 병행 제시**를 상정. 6현은 스키마·렌더 지원하되 초기 콘텐츠 필수 아님.
- ~~**베이스 지판(fretboard.ts) 다현화:** 승인 vs 보류~~ → **2026-07-09 착수 승인 확정.** "지판 이미지 없는 커리큘럼은 성립 안 됨." 범용 일반화=03③, 베이스 고유분=B4, 6현 픽셀 불변 절대조건.
- **slap을 어느 경로로:** tab 전용(간단, T/P 글자) vs staff+tab 도 표기. — 권장: **tab 중심**, 필요 곡만 staff+tab.
- **두손 태핑 도입 여부:** 도입 시 `T`(썸) 표기 충돌 해결책(별 글리프/괄호/`+`). — 초기 제외 권장.
- **엔진 vs 콘텐츠 문서 분리:** Phase B5를 이 문서에 둘지 `11_bass-curriculum.md` 로 스핀오프할지. — 콘텐츠 분량 보고 결정.
- **베이스 조표(03①) 사용 여부:** 워킹베이스·라인에 keySignature 표기할지.
- **estMinutes·난이도:** 입문 베이스(30분?) vs 중급(펑크 슬랩) — 어느 페르소나 우선.
