---
title: "옥타브 모양 — 손이 기억하는 사다리 한 칸"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 옥타브 모양, 슬랩 그루브의 8할

## ① 이론/설명

어제 두 개방음으로 **T-P**를 고르게 만들었어요. 오늘은 슬랩 그루브의 심장, **옥타브 모양**을 손에 넣습니다. 이 한 손모양이 <mark>슬랩 그루브의 8할</mark>이에요. **썸으로 루트, 팝으로 그 옥타브** — 딱 이 짝이 슬랩에서 가장 흔한 기본 폼이에요.

손모양은 이래요. **썸은 루트 E(4번현 개방)**, **팝은 한 옥타브 위 E(2번현 2프렛)**예요. 왼손 검지(또는 약지)로 2번현 2프렛을 짚고, 엄지는 아래 4번현을 '둥', 검지·중지는 위 2번현을 '딱'. 이 벌어진 손 간격이 <mark>손이 기억하는 사다리 한 칸</mark>이에요 — 한 번 익으면 어느 프렛으로 옮겨도 폼은 그대로예요. 이 폼을 손에 넣으면 **A·D·G 어느 루트로 옮겨도** 모양이 같아서, 앞으로 배울 슬랩 그루브 대부분이 바로 이 옥타브 위에서 자라요. 오늘 폼을 정확히 새겨 두면 나중에 어느 곡을 만나도 훨씬 편해져요. 그래서 오늘은 속도 대신 폼과 점프의 '정확도'에만 값을 쳐요.

오늘의 목표는 속도가 아니라 **깨끗한 옥타브 점프**예요. 썸이 4번현을 치고 튀어 나온 뒤, 손가락이 곧장 2번현 옥타브를 걸어 튕겨요. 사이 현(**3번현 A**)은 **왼손 검지 옆면으로 살짝 덮어** 잡음이 안 나게 해요. <mark>둥과 딱이 같은 크기로 클린하게</mark> 이어지면 오늘은 성공이에요. **BPM 60**부터 천천히.

**5현**이라면 손모양은 4현과 완전히 똑같아요. 저음 B는 엄지로 덮어 두고, 익숙해지면 이 옥타브 그루브를 B현 루트로 옮겨 더 묵직하게 시험해 봐도 좋아요.

## ② 시각 자료

오늘은 **옥타브 손모양**을 지판에 먼저 각인하고, 4분음표로 <mark>깨끗한 옥타브 점프</mark>를 익힌 뒤 8분음표로 붙여요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **옥타브 손모양 지도**. 아래 파랑이 썸으로 칠 루트 E(4번현), 위 파랑이 팝으로 튕길 옥타브 E(2번현 2프렛)예요.

```json
{
  "id": "m1.w2.d2.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래 파랑이 루트 E(4번현, 엄지 썸), 위 파랑이 옥타브 E(2번현 2프렛, 검지·중지 팝)예요. 이 벌어진 손 간격을 눈에 익혀요.

```json
{
  "id": "m1.w2.d2.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 B는 엄지로 덮어 두고, 익숙해지면 B현 루트로도 옮겨 봐요.

**예제 1 — 옥타브 T-P 4분음표.** 루트(썸)-옥타브(팝)를 한 박씩 번갈아요. <mark>점프가 깨끗한지</mark>가 관건이에요.

```json
{
  "id": "m1.w2.d2.octave_quarter_4",
  "type": "tab",
  "meta": { "title": "Octave T-P quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 썸으로 루트 E, 팝으로 옥타브 E. 사이 현이 울지 않게 왼손으로 살짝 덮어요.

```json
{
  "id": "m1.w2.d2.octave_quarter_5",
  "type": "tab",
  "meta": { "title": "Octave T-P quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

**예제 2 — 옥타브 T-P 8분음표.** 한 박에 둥-딱 한 쌍씩, 점프를 조금 더 빠르게. 빨라져도 <mark>옥타브가 깨끗이 걸리는 선</mark>까지만 올려요.

```json
{
  "id": "m1.w2.d2.octave_eighth_4",
  "type": "tab",
  "meta": { "title": "Octave T-P eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 점프가 빨라져도 둥과 딱 크기가 흐트러지지 않게.

```json
{
  "id": "m1.w2.d2.octave_eighth_5",
  "type": "tab",
  "meta": { "title": "Octave T-P eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 5현.** 4현과 음이 똑같아요. 여기서도 저음 B는 엄지로 재워 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 개방 **T-P(E·G)**를 BPM 60으로 몇 번 풀어 두 손을 깨워요. 둥과 딱이 다 살아 있는지 확인해요.

**10~20분 · 두뇌 훈련**
옥타브 손모양을 잡고 예제 1을 아주 느리게. <mark>썸에서 팝으로 손이 매끄럽게 벌어지는지</mark>에만 집중해요.

**20~40분 · 실전**
예제 1(4분음표)을 **BPM 60**에서 반복 → 점프가 깨끗하면 예제 2(8분음표)로 넘어가 **BPM 65**. 사이 현 잡음이 나면 다시 느리게 내려와요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>옥타브 점프가 잡음 없이 깨끗한지</mark> 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 옥타브 모양으로 루트-옥타브 T-P를 BPM 60~65에서 사이 현 잡음 없이 깨끗하게 번갈아 칠 수 있다.

## ④ 팁 / 흔한 실수

- **사이 현이 울어요.** 옥타브 사이의 3번현(A)이 새면 소리가 지저분해요. 왼손 검지 옆면으로 살짝 덮어 재워요.
- **손이 너무 좁아요.** 옥타브 간격이 안 잡히면 팝이 엉뚱한 줄에 걸려요. 4번현↔2번현 벌어진 폭을 손에 익혀요.
- **팝만 커요.** 팝이 튀어 크게 들리기 쉬워요. 썸을 조금 더 힘 있게 쳐 균형을 맞춰요.
- **저음 B 방심(5현).** 손이 벌어지는 사이 B가 새기 쉬워요. 엄지로 늘 B를 덮어 두세요.
