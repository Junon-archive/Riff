---
title: "E 부기 셔플 그루브 — 2주차 완성"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — E 부기 셔플 그루브, 2주차 완성

## ① 이론/설명

2주차 마지막 날이에요. 이번 주 내내 쌓은 **R-5-6-b7** 부기 워크를 오늘 <mark>하나의 그루브로 완성해요.</mark> 상행과 하행을 롱-숏 셔플로 굴리면, 드디어 통통 튀는 **E 부기 셔플 베이스라인**이 손에 들어와요. 이번 주의 결승선이에요.

완성물은 두 마디예요. **1마디는 상행**(R-5-6-b7), **2마디는 하행**(b7-6-5-R) — 어제 익힌 왕복 그대로예요. 달라진 건 하나, <mark>이제 롱-숏 셔플 필을 확실히 얹어 통통 튀게 굴려요.</mark> 계단을 또박또박 밟던 걸, 오늘은 굴려서 '그루브'로 바꾸는 거예요.

오른손 **투핑거**로 각 음의 앞을 살짝 길게, 뒤를 짧게 굴려요. **메트로놈 80**이 이번 주 목표 속도지만, <mark>숫자보다 튐이 먼저예요.</mark> 70에서 통통 튀면 그게 80에서 뻣뻣한 것보다 훨씬 나아요. 편한 속도에서 굴림을 살린 뒤 천천히 올려요.

이 부기 손모양은 **어느 코드로도** 그대로 옮겨가요. 오늘 **키 E**에서 완성하지만, 루트만 바꾸면 A든 D든 같은 폼이 통해요 — 셔플 블루스 한 곡의 뼈대가 이미 손에 있는 셈이에요. **5현**이라면 운지는 똑같고, 저음 **B** 루트로 더 묵직한 버전도 시험해 봐요. 이번 주도 웃으며 마무리해요 — <mark>계단 하나가 이제 곡이 됐어요.</mark>

## ② 시각 자료

오늘은 두 가지예요. 먼저 **부기 손모양(R-5-6-b7)**을 마지막으로 확인하고, 그다음 이번 주의 완성물 **E 부기 셔플 그루브**를 4·5현으로 굳혀요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **부기 손모양**을 한 번 더 새겨요. 파랑 셋과 무색 **b7(D)** 하나, 이번 주 내내 밟아 온 계단이에요. <mark>이 손모양 하나로 곡을 만들 거예요.</mark>

```json
{
  "id": "m1.w2.d4.boogie_shape_4",
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

▶ **4현.** 루트 **E** → **5도 B**(2프렛) → **6도 C#**(4프렛) → **b7 D**(5프렛). 오늘은 이 계단을 셔플로 굴려요.

```json
{
  "id": "m1.w2.d4.boogie_shape_5",
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

▶ **5현.** 자리는 4현과 똑같아요. 저음 **B**는 재워 두거나 B 루트로 더 묵직하게 시험해요.

이제 이번 주 완성물, **E 부기 셔플 그루브**예요. 1마디에 올라갔다 2마디에 내려오며, <mark>롱-숏으로 통통 튀게 굴려요.</mark>

```json
{
  "id": "m1.w2.d4.e_boogie_4",
  "type": "tab",
  "meta": { "title": "E boogie shuffle — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 80, 셔플.** 루트 **E**(4번 현 개방) → **5도 B** → **6도 C#** → **b7 D**(3번 현 2·4·5프렛)로 계단을 오르내려요. 롱-숏으로 굴리면 통통 튀어요. **5현이라면** 저음 **B** 루트로 더 묵직한 버전도 시험해요.

```json
{
  "id": "m1.w2.d4.e_boogie_5",
  "type": "tab",
  "meta": { "title": "E boogie shuffle — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮거나, B 루트로 옮겨 더 묵직한 부기로도 굴려요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 **부기 왕복**을 개방 E로 BPM 60에 굴리며 손을 풀어요. 오르내림이 이어지는지 확인하고 시작해요.

**10~20분 · 두뇌 훈련**
**E 부기 셔플 그루브**를 아주 느리게, 상행·하행 손모양을 되짚어요. <mark>롱-숏을 얹어도 계단이 흔들리지 않는지</mark> 확인해요.

**20~40분 · 실전 (이번 주 완성물)**
핀 고정 **E 부기 셔플 그루브**를 **BPM 80**에서 반복해요. 통통 튀는 롱-숏이 흔들리지 않는 게 목표 — 튐이 먼저예요. 4현으로 익힌 뒤 5현으로도 같은 그루브를 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **부기가 BPM 80에서 통통 튀는지** 들어봐요. 이번 주 도달한 BPM도 적어 둬요.

**오늘의 완료 기준:** E 부기 셔플 그루브(R-5-6-b7 왕복)를 BPM 80에서 롱-숏으로 통통 튀게, 4현·5현 둘 다 굴릴 수 있다. (2주차 완성!)

## ④ 팁 / 흔한 실수

- **롱-숏이 밋밋해져요.** 음이 넷으로 늘면 셔플 필을 놓치기 쉬워요. 각 음의 앞을 확실히 길게 지켜요.
- **80에서 뻣뻣해져요.** 속도를 올리면 튐이 사라지곤 해요. 70에서 통통 튀는 감각을 지킨 채 천천히 올려요.
- **왕복 이음매가 끊겨요.** 꼭대기 b7에서 방향 전환이 늦어요. 전환을 미리 준비해 매끄럽게 넘어가요.
- **저음 B 방심(5현).** 그루브가 바빠져도 B는 엄지로 덮어 둬요.
