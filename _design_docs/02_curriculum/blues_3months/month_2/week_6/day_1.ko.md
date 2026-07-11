---
title: "표현적 벤딩 — 음을 목표음까지 정확히 밀어 올린다"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — 반음·온음 벤딩으로 음을 '울린다'

## ① 이론/설명

5주차에 손에 넣은 블루스 스케일, 이제 그 음들을 '울게' 만들 차례예요. 지금까지는 프렛을 정확히 짚어 소리를 냈다면, 오늘부터는 짚은 줄을 **위로 밀어 올려** 음정 자체를 끌어올려요. 이게 바로 **벤딩(bending)**이에요. <mark>벤딩은 목소리가 음을 밀어 올려 우는 것과 똑같아요.</mark> 같은 한 음도 그냥 짚으면 평범하지만, 살짝 밀어 올렸다 놓으면 블루스 특유의 '우는' 표정이 생겨요. 오늘은 이 벤딩을 두 가지 크기로 나눠서, 목표음까지 정확히 도착하는 법을 익혀요.

벤딩은 밀어 올리는 '거리'로 나뉘어요. 반음만 올리면 **반음 벤딩**, 온음(=반음 두 개)을 올리면 **온음 벤딩**이에요. 프렛으로 치면 반음은 한 칸, 온음은 두 칸만큼 음을 끌어올리는 셈이에요. <mark>중요한 건 '얼마나 세게'가 아니라 '어느 음까지'예요.</mark> 목표음이 반음 위인지 온음 위인지 먼저 정하고, 딱 그 음정에 도착하도록 밀어요. 어중간하게 걸치면 우는 게 아니라 삐끗한 소리로 들려요.

오늘의 무대는 박스1의 **3번 줄 7프렛, 4도(D)**예요. 이 한 자리에서 두 벤딩을 다 연습해요. 반음 올리면 블루노트(b5) 언저리의 흐린 소리가 나고, 온음 올리면 **5도(E)**라는 또렷한 목표음에 도착해요. <mark>벤딩이 목표음까지 정확히 가는지 귀로 확인하는 게 오늘의 전부예요.</mark> 그래서 요령 하나 — 밀기 전에 도착할 음을 다른 자리에서 먼저 쳐서 귀에 담아 두면, 벤딩이 그 음에 닿았는지 바로 비교할 수 있어요. 손끝 힘보다 **귀**를 믿고 가요.

```json
{
  "id": "m2.w6.d1.bend_intro",
  "type": "tab",
  "meta": { "title": "Half-step and whole-step bend on the 4th (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "half" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "target" }
    ]}
  ]}
}
```
▶ **BPM 60.** 4도(3번 줄 7프렛)를 반음 밀었다 b3로 풀고, 다시 4도를 온음 밀어 5도(2번 줄 5프렛)에 맞춰요. 반음과 온음, 두 크기를 나란히 들어 보세요.

## ② 시각 자료

자, 오늘 벤딩할 자리를 지판에서 콕 집어 볼게요. **3번 줄 7프렛의 4도(D)**를 밀어서, 그 소리를 **2번 줄 5프렛의 5도(E)**와 똑같이 맞추면 온음 벤딩 성공이에요. 악보에서 초록으로 칠해진 5도가 벤딩이 도착해야 할 지점이에요.

```json
{
  "id": "m2.w6.d1.bend_position",
  "type": "scale_shape",
  "meta": { "title": "Bend spot on the 4th and its target 5th (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "target" }
  ]}
}
```
▶ **초록이 목표예요.** 3번 줄 7프렛을 밀어, 2번 줄 5프렛 5도와 같은 높이에 도착시켜요.

<mark>밀기 전에 도착할 음을 먼저 귀에 담아 두면 훨씬 쉬워요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60, 아주 천천히. 오늘 벤딩할 **3번·2번 줄**을 가볍게 오르내리며 손을 풀어요.

```json
{
  "id": "m2.w6.d1.warmup",
  "type": "tab",
  "meta": { "title": "Box 1 warmup on the G string", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 60.** 3번·2번 줄을 가볍게 오르내리며 손을 데워요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 도착음 먼저 귀에 담기)**
밀기 전에 목표음을 먼저 쳐 봐요. **반음 벤딩**의 목표는 블루노트(b5), **온음 벤딩**의 목표는 5도(E)예요. <mark>이 두 소리를 귀에 확실히 담아 두면 벤딩이 훨씬 쉬워져요.</mark>

**20~40분 · 실전 벤딩 (BPM 60)**
먼저 반음 벤딩이에요. 3번 줄 7프렛(4도)을 반음만 살짝 밀어 올려요.

```json
{
  "id": "m2.w6.d1.half_bend",
  "type": "tab",
  "meta": { "title": "Half-step bend: 4 up to the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "half" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **반음 벤딩.** 4도를 반음만 밀어 블루노트(b5) 언저리의 흐린 소리를 내요.

이번엔 온음 벤딩이에요. 목표음 5도를 먼저 친 뒤, 같은 소리가 날 때까지 밀어 올려요.

```json
{
  "id": "m2.w6.d1.whole_bend",
  "type": "tab",
  "meta": { "title": "Whole-step bend: 4 up to the 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "target" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" }
    ]}
  ]}
}
```
▶ **온음 벤딩.** 먼저 5도를 친 뒤, 4도를 그 높이까지 온음 밀어 올려요.

<mark>밀어 올린 음이 목표음과 똑같이 들리면 성공이에요.</mark>

**40~50분 · 녹음**
온음 벤딩을 녹음해서, 미리 친 5도와 벤딩한 음의 높이가 같은지 들어 봐요. 다르면 더 밀거나 덜 밀어서 맞춰요.

**오늘의 완료 기준:** 3번 줄 7프렛의 4도를 온음 밀어 올려 5도 음정을 정확히 냈고, 반음 벤딩과 소리를 또렷이 구분할 수 있다.

## ④ 팁 / 흔한 실수

벤딩할 때 흔한 실수들이에요. 급하게 힘부터 주지 말고, 귀로 목표음을 잡는 습관을 들여요.

```json
{
  "id": "m2.w6.d1.push_from_wrist",
  "type": "scale_shape",
  "meta": { "title": "Aim the bend at the real 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "target" }
  ]}
}
```
▶ **목표음을 먼저 귀에.** 5도(초록)를 치고, 그 소리를 향해 4도를 밀어요.

- **목표음을 지나쳐요.** 온음인데 반음 반만큼 더 올려 버리면 음이 붕 떠요. 목표 5도에 딱 멈춰요.
- **손가락 하나로만 밀어요.** 3번 손가락으로 밀되 1·2번 손가락을 뒤에 받쳐 함께 밀면 훨씬 안정적이에요.
- **엄지를 넥 뒤에 숨겨요.** 엄지를 넥 위로 살짝 걸치면 지렛대가 생겨 힘이 덜 들어요.
- **밀기만 하고 안 들어요.** 벤딩은 손이 아니라 귀로 완성돼요. 늘 도착음과 비교하며 밀어요.
