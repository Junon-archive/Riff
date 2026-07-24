# 베이스 세트 — 12 파일 / 36 트랙

> 상위: [`../README.md`](../README.md) (공통 규칙 · 확장자/경로 · **「사람이 순서대로 따라 하는 방법」**) · 설계 SSOT: [`../../21_backing.md`](../../21_backing.md) ★R3 ③
> **드럼비트는 [`../drums/`](../drums/) 세트를 기타와 공유**한다. 베이스용으로 따로 만들지 않는다.

## 이 세트의 정체 — "베이스가 빠진 밴드"

**드럼 + 코드 컴핑(기타/로즈/피아노)만 남기고 베이스를 통째로 비운다.** 사용자가 그 자리에 자기 베이스를 넣는다(21_backing R4).
기타 세트와 **장르·조·템포·코드 진행·폼이 전부 동일한 미러**이고, 다른 건 **무엇을 빼느냐** 하나뿐이다(기타 세트 = 리드 기타 제외 / 베이스 세트 = 베이스 제외).

## 우선순위 — 급하면 Tier 1만 먼저

36트랙을 한 번에 다 뽑기 부담스러우면 아래 순서로 나눠 진행해도 된다. 각 Tier가 12트랙이다.

| Tier | 파일 | 트랙 | 왜 이 순서인가 |
|---|---|---|---|
| **1 — 커리큘럼 직결** | [`blues_E`](blues_E.md) · [`rock_E`](rock_E.md) · [`funk_Em`](funk_Em.md) · [`jazz_F`](jazz_F.md) | 12 | **E · Em · F** = 베이스 커리큘럼 정본 조 4개(shuffle·입문베이스=E, slap=Em, walking=F). 이것만 있어도 베이스 학습자 대부분이 쓴다. |
| **2 — 공통 Am** | [`rock_Am`](rock_Am.md) · [`funk_Am`](funk_Am.md) · [`neosoul_Am`](neosoul_Am.md) · [`jazz_Am`](jazz_Am.md) | 12 | 전 장르 공통 조 원칙(21_backing R3). 같은 조로 장르만 바꿔 가며 비교 연습. |
| **3 — 확장** | [`blues_A`](blues_A.md) · [`rock_G`](rock_G.md) · [`neosoul_Dm`](neosoul_Dm.md) · [`jazz_C`](jazz_C.md) | 12 | 조 다양성 확보. 기타 세트와 조를 맞춰 두는 의미도 있다. |

## 전체 인덱스

| 파일 | 장르 | 조 | 스케일 라벨 | 폼 | 템포(BPM) | 트랙 | Tier |
|---|---|---|---|---|---|---|---|
| [`blues_A.md`](blues_A.md) | 블루스(셔플) | A | A minor pentatonic / A blues | **12마디** | 70·90·120 | 3 | 3 |
| [`blues_E.md`](blues_E.md) | 블루스(셔플) | E | E minor pentatonic / E blues | **12마디** | 70·90·120 | 3 | **1** |
| [`rock_Am.md`](rock_Am.md) | 락/팝 | Am | A minor pentatonic / A natural minor | 16마디 | 80·110·140 | 3 | 2 |
| [`rock_E.md`](rock_E.md) | 락/팝 | E | E minor pentatonic (파워코드) | 16마디 | 80·110·140 | 3 | **1** |
| [`rock_G.md`](rock_G.md) | 락/팝 | G | G major pentatonic / G major | 16마디 | 80·110·140 | 3 | 3 |
| [`funk_Am.md`](funk_Am.md) | 펑크 | Am | A minor pentatonic / A Dorian | 16마디 | 90·100·110 | 3 | 2 |
| [`funk_Em.md`](funk_Em.md) | 펑크 | Em | E minor pentatonic / E Dorian·Mixolydian | 16마디 | 90·100·110 | 3 | **1** |
| [`neosoul_Am.md`](neosoul_Am.md) | R&B/네오소울 | Am | A Dorian / A minor pentatonic | 16마디 | 70·85·100 | 3 | 2 |
| [`neosoul_Dm.md`](neosoul_Dm.md) | R&B/네오소울 | Dm | D Dorian / D minor pentatonic | 16마디 | 70·85·100 | 3 | 3 |
| [`jazz_Am.md`](jazz_Am.md) | 재즈 ii-V-i | Am | A harmonic minor / A minor pentatonic | 16마디 | 100·130·160 | 3 | 2 |
| [`jazz_C.md`](jazz_C.md) | 재즈 ii-V-I | C | C major / D Dorian / G Mixolydian | 16마디 | 100·130·160 | 3 | 3 |
| [`jazz_F.md`](jazz_F.md) | 재즈 ii-V-I | F | F major / G Dorian / C Mixolydian | 16마디 | 100·130·160 | 3 | **1** |

**합계 36트랙 · 총 길이 ≈ 21.8분 · 예상 용량 ≈ 21 MB.** 배치: `web_app/public/audio/backing/bass/`
파일명은 기타 세트와 **동일**하다(`blues_A_90.m4a` …). **디렉터리로 구분**하고, 매니페스트에서는 `instrument:"bass"` 로 구분한다.

## ★ 베이스 세트 공통 함정 (전 트랙에 해당 — 생성 전 반드시 읽을 것)

기타 세트에는 없던, **"베이스를 뺀다"는 요구 때문에 생기는** 문제들이다.

1. **킥드럼이 같이 얇아진다.**
   Exclude Styles에 `bass` 계열 단어를 넣으면 Suno가 저역 전체를 줄여 **킥까지 빈약한** 테이크를 내놓을 때가 있다.
   → **킥이 살아 있는 테이크를 고른다.** 킥이 죽으면 베이스를 얹을 그리드 자체가 사라진다.

2. **다른 악기가 베이스 역할을 대신한다.** — 가장 흔하고 가장 치명적인 실패.
   - 재즈: **피아노 왼손이 워킹 라인을 걷는다** → `jazz_*` 최대 실패 요인
   - 네오소울: **로즈 왼손이 저음 루트를 잡는다** → `neosoul_*` 최대 실패 요인
   - 블루스: **기타가 저음현 부기 라인**을 친다 → `blues_*` 주의
   - 락: **저음현 파워코드**가 저역을 다 먹는다 → `rock_E` 가 특히 심함
   → 각 프롬프트에 `right hand only` · `no left-hand bass notes` · `middle register` 를 넣어 뒀지만, **귀로 확인해야 한다.** 저역에 음정 있는 소리가 남아 있으면 폐기.

3. **저역이 비어 허전한 게 정상이다.** 그게 이 세트의 목적이다. "뭔가 빠진 것 같다"고 느껴지는 테이크가 오히려 맞다 — 그 자리를 사용자가 채운다.

4. **트림 기준점이 드럼/컴핑이다.** 기타 세트는 베이스 어택을 기준점으로 삼을 수 있었지만 여기는 없다.
   → 드럼(킥·라이드) 어택 또는 컴핑 악기의 1박 다운비트를 기준으로 잡는다. 각 md 「비고」에 트랙별로 적어 뒀다.

## 진행 체크리스트

- [x] 12개 md 저작 (blues×2 · rock×3 · funk×2 · neosoul×2 · jazz×3)
- [ ] Tier 1 생성 — `blues_E` 3 · `rock_E` 3 · `funk_Em` 3 · `jazz_F` 3
- [ ] Tier 2 생성 — `rock_Am` 3 · `funk_Am` 3 · `neosoul_Am` 3 · `jazz_Am` 3
- [ ] Tier 3 생성 — `blues_A` 3 · `rock_G` 3 · `neosoul_Dm` 3 · `jazz_C` 3
- [ ] 36트랙 루프 트림 + 심리스 검수
- [ ] 각 md 「생성 로그」에 생성일·링크 기록 (Suno-Pro 라이선스 근거)
