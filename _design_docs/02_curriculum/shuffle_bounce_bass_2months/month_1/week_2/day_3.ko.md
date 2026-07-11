---
title: "부기 왕복 — 상행 뒤 하행으로 오르내리기"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 부기 워크 왕복, 상행과 하행

## ① 이론/설명

어제는 **R-5-6-b7**로 계단을 올라갔어요. 오늘은 꼭대기에서 멈추지 않고, 그대로 <mark>계단을 다시 걸어 내려와요.</mark> 올라간 뒤 내려오는 이 **왕복**이 부기 워크를 하나의 완결된 프레이즈로 만들어 줘요. 오르기만 하던 계단이 이제 위아래로 통통 순환해요.

하행은 상행의 거울이에요. 올라갈 때 **R→5→6→b7**이었다면, 내려올 땐 **b7→6→5→R** 순서로 밟아요. 3번 현 **5·4·2프렛**을 거쳐 4번 현 개방 **E**로 착지하죠. <mark>올라간 계단을 순서만 뒤집어 되짚는 거예요.</mark> 새 음은 하나도 없어요 — 어제 외운 손모양 그대로예요.

두 마디로 굴려요. **1마디는 상행**(R-5-6-b7), **2마디는 하행**(b7-6-5-R)이에요. 한 음이 한 박씩, 여덟 음이 산을 올랐다 내려오듯 이어져요. 이음매가 중요해요 — <mark>b7에서 다시 6으로 방향을 바꾸는 순간이 매끄러워야</mark> 왕복이 자연스러워요.

오른손은 여전히 **투핑거**로 롱-숏 필을 살짝 얹어요. 왕복이 되면 이제 제법 '베이스라인'처럼 들릴 거예요 — 내일 완성할 **E 부기 셔플 그루브**가 바로 코앞이에요. **5현**이라면 운지는 똑같고 저음 **B**만 재워 두면 돼요. **속도는 잊고**, 오르내림이 끊기지 않게만 다듬어요.

## ② 시각 자료

오늘은 두 가지예요. 먼저 **부기 손모양(R-5-6-b7)**을 다시 확인하고, 그다음 상행과 하행을 이어 붙인 **부기 왕복**을 굴려요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

어제의 **부기 손모양**을 눈으로 한 번 더 새겨요 — 오늘은 이 계단을 오르내려요. 파랑 셋과 무색 **b7(D)** 하나, 그대로예요. <mark>내려올 자리도 미리 봐 둬요.</mark>

```json
{
  "id": "m1.w2.d3.boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4현.** 루트 **E** → **5도 B**(2프렛) → **6도 C#**(4프렛) → **b7 D**(5프렛). 올라갈 땐 아래에서 위로, 내려올 땐 위에서 아래로예요.

```json
{
  "id": "m1.w2.d3.boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 **B**는 재워 두고 오르내릴 계단에만 집중해요.

이제 **부기 왕복**이에요. 1마디에 올라갔다 2마디에 내려와요. <mark>꼭대기 b7에서 방향을 바꾸는 이음매를 매끄럽게</mark> 이어요.

```json
{
  "id": "m1.w2.d3.boogie_roundtrip_4",
  "type": "tab",
  "meta": { "title": "Boogie round trip R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75, 셔플.** 1마디 **R→5→6→b7**(상행), 2마디 **b7→6→5→R**(하행). 여덟 음을 산처럼 오르내려요.

```json
{
  "id": "m1.w2.d3.boogie_roundtrip_5",
  "type": "tab",
  "meta": { "title": "Boogie round trip R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어, 왕복 내내 새지 않게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 **부기 상행**을 개방 E로 BPM 60에 올라가며 손을 풀어요. 네 음이 고른지 확인하고 시작해요.

**10~20분 · 두뇌 훈련**
소리 없이 **하행**(b7→6→5→R)만 아주 느리게 짚어 내려와요. <mark>내려올 때 손가락 순서가 헷갈리지 않는지</mark> 집중해요.

**20~40분 · 실전**
**부기 왕복**을 **BPM 75**에서 반복해요. 올라갔다 내려오는 이음매가 매끄러운 게 목표예요. 4현으로 익힌 뒤 5현으로도 같은 왕복을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **오르내림이 끊기지 않고** 이어지는지 들어봐요. 오늘 도달한 BPM도 적어 둬요.

**오늘의 완료 기준:** R-5-6-b7 부기 왕복을 BPM 75에서 상행과 하행이 매끄럽게 이어지도록, 4현·5현 둘 다 굴릴 수 있다.

## ④ 팁 / 흔한 실수

- **꼭대기에서 멈칫해요.** b7에서 방향을 바꿀 때 박이 비기 쉬워요. 방향 전환을 미리 준비해 매끄럽게 넘어가요.
- **하행이 급해져요.** 내려올 때 신나서 빨라지곤 해요. 올라갈 때와 같은 간격으로 내려와요.
- **착지가 흐려요.** 마지막 루트 E가 약하게 끝나요. 왕복의 도착점인 루트를 또렷이 짚어요.
- **저음 B 방심(5현).** 오르내리는 내내 B는 엄지로 덮어 둬요.
