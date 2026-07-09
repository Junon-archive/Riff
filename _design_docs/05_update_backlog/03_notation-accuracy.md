---
id: 03-notation-accuracy
status: TODO
priority: medium
risk: high
depends_on: []          # 문서 내부 순서: 튜닝 → 6현일반화. 조표는 독립.
owner: null
---

# 03 · 악보 음정 정확성 (조표 + 튜닝 수정 + 다현 일반화)

## 목적 (왜)

"특정 곡 끝장내기" 커리큘럼(이 곡은 무슨 조·스케일)과 베이스/우쿨렐레(4현) 커리큘럼을 대비. 세 항목이 **"악보에 그려지는 음정이 정확한가"** 라는 한 축으로 묶인다.

**포함:** ① 조표(key signature) 렌더 / ② ★튜닝 지뢰 수정 / ③ 6현 하드 가정 → 다현 일반화.
**성격:** ①은 저위험 독립. ②는 잠재 버그 수정(지금은 무해). ③은 이 백로그에서 가장 무거움(스키마 3중 락). **②는 ③의 선행조건.**

## ★ 먼저 알아야 할 잠재 버그 (튜닝 무시)

`meta.tuning` 을 스키마엔 선언했으나 **렌더러가 안 읽는다.**
- `web_app/src/render/staff.ts:51` `OPEN_MIDI = {1:64,...,6:40}` (표준 EADGBE 하드코딩).
- `staff.ts:8` 주석은 "음정 = string+fret+**tuning** 으로 계산"이라 선언하나, 실제 `grep meta.tuning` = staff.ts/tab.ts 모두 0건.
- `tab.ts` 도 현 이름 고정.
- **현재는 전 데이터가 표준 튜닝이라 무해**(실측 확인).
- **그러나** Drop-D/DADGAD/카포 커리큘럼이 오면 오선보 음정이 **조용히 틀리게** 그려짐 → **Zero-Hallucination 정면 위반.** 6현 일반화(③) 전에 반드시 고쳐야 함.

## 현재 강제 지점 (검증된 코드 위치)

| 무엇 | 위치 | 현재 동작 |
|---|---|---|
| 개방현 음정 하드코딩 | `staff.ts:51` `OPEN_MIDI` | EADGBE 고정, meta.tuning 무시 |
| 6현 리터럴 락 (타입) | `web_app/src/types/score.ts` `stringCount: 6` | 타입이 6 리터럴 |
| 6현 락 (스키마) | `_design_docs/03_data_schema/fretboard_score_schema.json` | stringCount const/enum 6 |
| 6현 락 (검증기) | `web_app/scripts/build-content.mjs:137` | `stringCount !== 6` 시 fail |
| string 범위 1~6 | build-content.mjs(note.string·chord.string·dot 검사) | 4현이면 조정 필요 |
| 조표 미렌더 | staff.ts (addKeySignature 호출 없음) | meta에 key 있어도 조표 안 그림 |

## 수정 상세 (실행 지침)

### ① 조표 (독립, 저위험 — 먼저 해도 됨)

1. `meta.keySignature`(예: "G" 또는 샾/플랫 개수) 선택 필드 추가 → score.ts + 스키마.
2. staff.ts 가 `stave.addKeySignature(key)` 호출(VexFlow keysignature.ts 지원). VexFlow는 조를 알면 임시표 철자도 정확해지는 부수 이점.
3. 없으면 조표 없음(현행) → 기존 불변.

### ② 튜닝 수정 (③의 선행)

1. staff.ts/tab.ts 가 `meta.tuning`(6현 EADGBE 기본)을 읽어 개방현 음정·현 이름을 **계산**하도록. `OPEN_MIDI` 를 tuning→MIDI 매핑 함수로 대체.
2. **기존 불변 핵심:** 표준 튜닝이 명시/생략된 기존 데이터는 계산 결과가 EADGBE와 동일해야 함 → 스냅샷으로 픽셀 불변 확인.
3. 이후 Drop-D 등은 tuning만 바꾸면 음정이 맞게 그려짐.

### ③ 다현 일반화 (가장 무거움)

1. `stringCount` 를 리터럴 6에서 **허용 집합(4·5·6)** 으로 완화 → 타입·스키마·검증기 3곳.
2. string 범위 검사(1~6)를 stringCount 기반으로.
3. 타브 줄 수(`tab.ts`), 오선보 음정(②의 tuning 기반), **그리고 지판(`fretboard.ts`)** 을 stringCount/tuning 로 구동.
4. **★지판 다현화(`fretboard.ts`) — 2026-07-09 사용자 승인으로 정식 편입:** 종전 "변경제안 제외" 컨벤션은 **해제됨**("지판 이미지 없는 커리큘럼은 성립 안 됨"). `N_STR=6` 하드코딩 → stringCount 구동, 현 이름 = tuning 계산, 현 좌표·간격·저음현 굵기 = stringCount 기반 일반화, dot/barre string 범위 = 1~stringCount. **절대 조건: 기존 6현 지판 픽셀 바이트 불변**(아래 골든 스냅샷 V4 필수). 다현 지판은 베이스뿐 아니라 우쿨렐레(4현)·7현 기타에도 재사용된다.
5. **선행:** ② 튜닝 읽기가 먼저. 4현 베이스는 표준 BEADGBE가 아니라 BEAD(4현) 등이라 tuning 계산이 전제.
6. **★베이스 고유 확장은 `10_bass-support.md` 소관:** 이 문서(③)는 **범용 다현 일반화**(stringCount 집합화·타브 줄 수·string 범위·**지판 `fretboard.ts` 다현화**·tuning 기반 음정)를 다룬다. **베이스 클레프(bass clef 8vb)·slap(T/P)·instrument enum·베이스 튜닝 기본값(EADG/BEADG/BEADGC)**은 10이 소유하며 이 문서 ②③를 선행 의존한다. 즉 10-B4(베이스 지판)는 ③의 지판 다현화를 소비하고 **베이스 고유분**(베이스 튜닝 기반 개방현 라벨·5/6현 저음 굵기)만 얹는다.

## 기존 커리큘럼 불변 보장

- ①③은 새 필드/집합 확장이라 6현+표준 데이터는 분기 결과 동일.
- ②는 상수→계산 리팩터라 **회귀 주의 최상** — 반드시 골든 스냅샷으로 기존 6현 블록 픽셀 바이트 동일 확인 후 커밋.
- `check-invariants.mjs` 지문(지판 dot·노트헤드)엔 음정 MIDI가 안 들어가므로, 픽셀 스냅샷(V4)이 이 묶음의 핵심 게이트.

## 검증 방법

- V1 build 0. V3 회귀 0. V5 solo/미대상 불변.
- **V4 골든 스냅샷(필수):** ② 튜닝 리팩터 + ③ fretboard 다현화 전/후 전 커리큘럼 **오선보·지판·타브 SVG 바이트 동일**. (fretboard.ts를 건드리므로 지판 스냅샷이 이번 묶음의 최우선 게이트.)
- 신규: Drop-D 픽스처로 음정이 반음 내려가 그려지는지, **4현·5현 픽스처 둘 다**로 타브 4/5줄·지판 4/5현·음정 정확 확인(5현 저음 B 포함). 베이스는 4·5현이 모두 1급 필수(→ `10_bass-support.md`).

## 주의 / 정지조건

- ~~`render/fretboard.ts` 변경 제안 금지~~ → **2026-07-09 사용자 승인으로 해제.** 단 **기존 6현 지판 픽셀 바이트 불변**(V4 골든 스냅샷)이 절대 조건. 다현 분기는 stringCount≠6일 때만 타므로 6현 데이터는 기존 경로 그대로여야 한다.
- 6현 리터럴을 푸는 순간 스키마 버저닝을 고려(기존 데이터 마이그레이션 불요하나 계약 변경).
- ② 없이 ③ 먼저 하면 다현 음정이 여전히 틀림 → 순서 엄수.

## 체크리스트

- [ ] ① meta.keySignature 필드 + staff.ts addKeySignature
- [ ] ② staff.ts/tab.ts 가 meta.tuning 읽어 음정 계산 (OPEN_MIDI 대체)
- [ ] ② 골든 스냅샷 기존 6현 픽셀 불변 확인
- [ ] ③ stringCount 리터럴6 → 집합 (타입·스키마·검증기)
- [ ] ③ 타브 줄 수·string 범위 stringCount 구동
- [ ] ③ **fretboard.ts 다현화**(N_STR→stringCount, 현이름=tuning, 좌표·굵기 일반화) — 승인 완료
- [ ] ③ 골든 스냅샷 기존 6현 **지판** 픽셀 불변 확인
- [ ] V1~V5 통과 + Roadmap·이 문서 갱신

## 미해결 질문 (사람 결정)

- ~~정말 베이스/우쿨렐레 커리큘럼을 할 것인가?~~ → **베이스 확정(2026-07-09).** ③ 다현 지판까지 정식 착수(지판 이미지 필수).
- keySignature 표현: 조 이름("G") vs 샾/플랫 개수 — VexFlow 입력 형식과 저작 편의 절충.
- 4현 튜닝 기본값(베이스 BEAD/EADG?) 정의 위치. → **10_bass-support.md Phase B3에서 4 EADG / 5 BEADG / 6 BEADGC 로 확정**(렌더 계산 함수 + 스키마 description SSOT).
