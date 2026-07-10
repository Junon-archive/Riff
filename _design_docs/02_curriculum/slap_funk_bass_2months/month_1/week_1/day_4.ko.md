---
title: "썸-팝 첫 만남 — 태어나 처음 내는 슬랩 소리"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 썸-팝 첫 만남, T-P 교대

## ① 이론/설명

드디어 1주차 마지막 날, 그리고 이번 주의 하이라이트예요. 지금까지 따로 익힌 **썸(둥)**과 **팝(딱)**을 **<mark>처음으로 번갈아</mark>** 쳐서, 태어나 처음 '슬랩 소리(T-P)'를 냅니다. 킥과 스네어가 만나 드럼 비트가 되듯, 두 소리가 하나로 붙는 순간이에요. 이번 주 내내 따로 놀던 두 소리가, 오늘 처음 **한 손 안에서 대화를 시작**해요.

두 소리를 어떻게 짝지을까요? 가장 기본은 **옥타브**예요. **썸으로 루트 E(4번현 개방)**를 치고, **팝으로 한 옥타브 위 E(2번현 2프렛)**를 튕겨요. 왜 옥타브냐면, 팝은 고음현에서 잘 걸리는데 옥타브 위 E가 딱 **얇은 줄 쪽에 있어서** 손이 자연스럽게 벌어지거든요. 엄지는 아래 4번현, 검지·중지는 위 2번현 — 이 <mark>옥타브 손모양</mark>이 슬랩의 가장 흔한 기본 폼이에요.

리듬은 아주 단순해요. **둥(썸)-딱(팝)-둥-딱**, 4분음표로 또박또박 번갈아요. 절대 서두르지 마세요 — 오늘의 목표는 빠르기가 아니라 **<mark>두 소리가 같은 크기로 번갈아 나는 것</mark>**이에요. **BPM 60**, 천천히. 썸과 팝의 톤이 고르게 이어지면, 그게 바로 슬랩 그루브의 씨앗이에요.

**5현**이라면 운지는 4현과 완전히 똑같아요. 저음 B는 엄지로 재워 두면 되고, 익숙해지면 같은 그루브를 **B현 루트로 옮겨** 더 묵직한 저음 슬랩으로 시험해 봐도 좋아요. 자, 이번 주에 만든 두 소리를 하나로 이어봐요.

## ② 시각 자료

오늘은 **이번 주의 완성물**을 만들어요. 먼저 옥타브 손모양을 지판에서 익히고, 느린 준비 버전으로 T-P를 맞춘 뒤, <mark>핀 고정 T-P 교대</mark>를 돌려요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **옥타브 손모양 지도**. 아래 파랑이 썸으로 칠 루트 E(4번현), 위 파랑이 팝으로 튕길 옥타브 E(2번현 2프렛)예요.

```json
{
  "id": "m1.w1.d4.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래 파랑이 루트 E(4번현, 엄지 썸), 위 파랑이 옥타브 E(2번현 2프렛, 검지·중지 팝)예요. 이 손모양을 눈에 익혀요.

```json
{
  "id": "m1.w1.d4.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 B는 엄지로 덮어 두고, 익숙해지면 이 그루브를 B현 루트로도 옮겨 봐요.

**준비 — 느린 T-P.** 루트 E(썸)와 옥타브 E(팝)를 반 마디씩 길게. 두 소리를 번갈아 내는 감각부터 익혀요.

```json
{
  "id": "m1.w1.d4.tp_prep_4",
  "type": "tab",
  "meta": { "title": "Thumb-pop prep (slow) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 썸(둥)으로 루트 E, 팝(딱)으로 옥타브 E를 반 마디씩 길게. 서두르지 말고 두 소리를 번갈아 내는 감각만 먼저 익혀요.

```json
{
  "id": "m1.w1.d4.tp_prep_5",
  "type": "tab",
  "meta": { "title": "Thumb-pop prep (slow) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 덮어, T-P를 오가는 내내 새어 울리지 않게 해요.

**이번 주 완성물 — 느린 썸-팝 교대.** 이제 4분음표로. 썸(둥)-팝(딱)을 또박또박 번갈아요. <mark>속도보다 두 톤의 균형</mark>이 먼저예요.

```json
{
  "id": "m1.w1.d4.tp_alternation_4",
  "type": "tab",
  "meta": { "title": "Thumb-pop alternation (slow) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
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

▶ **BPM 60, 천천히.** 썸(둥)-팝(딱)을 또박또박 번갈아. 썸은 엄지가 줄을 치고 튕겨 나오고, 팝은 손가락으로 옥타브를 걸어 튕겨요.

```json
{
  "id": "m1.w1.d4.tp_alternation_5",
  "type": "tab",
  "meta": { "title": "Thumb-pop alternation (slow) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
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

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. **5현이라면** 저음 B는 재워 두거나, 같은 그루브를 B현 루트로 더 묵직하게 시험해 보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 한 팝(개방 G)과 그제 한 썸(개방 E)을 BPM 60으로 각각 풀어요. **두 소리의 손이 다 깨어 있는지** 확인합니다.

**10~20분 · 두뇌 훈련**
옥타브 손모양을 잡고, 준비 예제(느린 T-P)를 아주 느리게 반복. <mark>썸에서 팝으로 손이 자연스럽게 넘어가는지</mark>, 그 **연결**에만 집중해요.

**20~40분 · 실전 (이번 주 완성물)**
핀 고정 T-P 교대를 **BPM 60**에서 반복해요. 두 소리가 같은 크기로 또렷이 번갈아 나는 게 목표 — 빨라지려 하지 말고 **톤의 균형**만 지켜요. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **둥(썸)과 딱(팝)이 같은 크기로 번갈아 나는지** 들어봐요. 이번 주 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 느린 썸-팝 교대(T-P)를 BPM 60에서 두 소리가 같은 크기로 또렷이 번갈아 나게, 4현·5현 둘 다 칠 수 있다. (1주차 완성!)

## ④ 팁 / 흔한 실수

- **팝만 커요.** 팝이 튀는 소리라 더 크게 들리기 쉬워요. 썸을 조금 더 힘 있게, 두 소리 크기를 맞춰요.
- **손이 늦게 넘어가요.** 썸 뒤 팝이 느리면 박이 밀려요. 준비 예제로 돌아가 연결을 천천히 다듬어요.
- **속도 욕심.** 60에서 두 톤이 어긋나는데 올리면 다 무너져요. 이번 주 내내 그랬듯, 균형이 먼저예요.
- **저음 B 방심(5현).** T-P를 오가는 내내 B는 엄지로 덮어 두세요. 손이 바빠지면 B가 새기 쉬워요.
