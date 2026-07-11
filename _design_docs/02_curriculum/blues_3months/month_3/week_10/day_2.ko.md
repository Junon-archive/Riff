---
title: "b3→3 반음 이동 — 흐림에서 맑음으로, BB의 색"
dayKey: "m3.w10.d2"
estMinutes: 50
i18nKey: "lesson.m3.w10.d2"
---

# Day 2 — b3에서 3으로 반음을 올려 'BB의 색'을 내다

## ① 이론/설명

어제는 **b3**와 **메이저 3도**가 어디 있는지 눈에 익혔어요. 오늘은 그 두 음을 **움직여요**. 가만히 있는 두 점이 아니라, b3에서 3으로 살짝 올라가는 그 '움직임'이 오늘의 진짜 주인공이에요. <mark>흐린 b3에서 맑은 3으로 반음 올라가는 순간, 블루스가 갑자기 어른스러워져요.</mark> 위치를 아는 것과 그 사이를 건너가는 것은 완전히 다른 일이에요. 어제 익힌 그 자리가 오늘 비로소 살아 움직이기 시작하는 거예요.

방법은 간단해요. **b3(3번 줄 5프렛)**를 짚고, 그대로 손가락을 한 칸 위로 밀어 **3(3번 줄 6프렛)**으로 올려요. 이 작은 반음 이동이 바로 **B.B. King**이 평생 써온 그 색이에요. <mark>같은 자리에서 반음 하나 올렸을 뿐인데, 흐림이 맑음으로 확 바뀌어요.</mark> 손가락은 거의 제자리, 마음만 한 칸 밝은 쪽으로 옮기는 느낌이에요. 빠르게 할 필요는 전혀 없어요, 그 반음이 선명하게 들리는 게 먼저예요.

중요한 건 '넘어가는' 느낌이에요. **b3에 멈춰만** 있으면 어제와 똑같은 소리고, 처음부터 **3만 딱** 짚으면 블루스의 흐린 맛이 빠져요. <mark>b3에 머물지도, 3으로 건너뛰지도 말고, 그 사이를 건너가세요 — 그 건넘이 바로 'BB의 색'이에요.</mark> 올린 뒤엔 근음 A로 부드럽게 내려앉아 문장을 마무리해요. 오늘은 이 반음 이동을 담은 짧은 **BB 색 릭** 하나를 완성해요. 딱 한 마디, 그 안에 흐림과 맑음의 이야기가 다 들어 있어요.

```json
{
  "id": "m3.w10.d2.b3_to_3",
  "type": "tab",
  "meta": { "title": "The b3 to 3 half-step move", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" }
    ]}
  ]}
}
```
▶ **BPM 65.** b3(3번 줄 5프렛)를 짚고 해머온으로 **3(3번 줄 6프렛)**까지 올려요 — 흐림에서 맑음으로 건너가는 소리예요.

## ② 시각 자료

b3에서 3으로 올라가는 그 **한 칸의 이동**을 지판으로 봐요. 파란 근음 A 아래, **b3(색 없음)에서 초록 3으로** 화살표처럼 반음 올라가요.

```json
{
  "id": "m3.w10.d2.bb_move_map",
  "type": "scale_shape",
  "meta": { "title": "The BB move: b3 up a half step to 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 파란 근음에서 내려와 **b3를 짚고, 초록 3으로 한 칸 올리는** 그 움직임이 오늘의 전부예요.

<mark>점 두 개 사이의 한 칸 — 그 반음을 '건너가는' 것이 바로 BB의 색이에요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. **b3**를 짚고 천천히 **3**으로 올렸다가, 다시 b3로 내려와요. 반음의 왕복을 손에 익혀요.

```json
{
  "id": "m3.w10.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: the half-step color shift", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 60.** 서두르지 말고, b3와 3 사이 그 한 칸을 부드럽게 오가요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = b3→3 반음 이동)**
실전 전에, b3에서 **3으로 올라가는** 소리를 머릿속으로 먼저 불러요. <mark>손보다 귀가 먼저 그 '맑아지는' 순간을 알면, 이동이 훨씬 자연스러워져요.</mark>

**20~40분 · 실전: BB 색 릭 (BPM 65)**
오늘의 완성물, **BB 색 릭**이에요. **b3에서 3으로** 반음 올린 뒤 근음 A에 비브라토로 내려앉아요. 짧지만 그 안에 '흐림→맑음'의 이야기가 다 담겨 있어요.

```json
{
  "id": "m3.w10.d2.bb_color_lick",
  "type": "tab",
  "meta": { "title": "BB color lick (b3 to 3)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 65.** b3(3번 줄 5프렛) → **메이저 3도(3번 줄 6프렛)** → 근음 A 비브라토. 반음 올리는 그 순간이 'BB의 색'이에요.

<mark>b3에 머물던 소리가 3으로 올라가 밝게 열려요 — 이 한 번의 반음이 오늘의 완성이에요.</mark>

**40~50분 · 녹음**
BB 색 릭을 녹음해요. b3에서 3으로 넘어가는 그 반음이 또렷하게 들리는지 하나의 파일로 확인해요.

**오늘의 완료 기준:** b3에서 메이저 3도로 반음 올려 근음 A에 착지하는 BB 색 릭을 완성하고, 흐림에서 맑음으로 건너가는 그 순간을 녹음했다.

## ④ 팁 / 흔한 실수

반음 이동을 익힐 때 흔한 실수예요. 대부분 '**건너가는 느낌**'을 놓치는 데서 와요.

```json
{
  "id": "m3.w10.d2.dont_stall",
  "type": "scale_shape",
  "meta": { "title": "Move through b3 to 3, don't stall", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **b3에 멈추지도, 3으로 건너뛰지도 마세요.** 그 사이를 건너가는 게 핵심이에요.

- **b3에서 멈춰 버려요.** 3으로 올리지 않으면 어제와 같은 소리예요. 반드시 한 칸 위로 건너가요.
- **처음부터 3만 짚어요.** 그러면 블루스의 흐린 맛이 사라져요. b3에서 '출발'해야 색이 살아요.
- **반음을 온음으로 올려요.** 두 칸을 가면 4도가 돼요. 딱 한 칸(반음)만 올려요.
- **근음으로 착지를 안 해요.** 3으로 올린 뒤 근음 A에 앉아야 문장이 완성돼요.
