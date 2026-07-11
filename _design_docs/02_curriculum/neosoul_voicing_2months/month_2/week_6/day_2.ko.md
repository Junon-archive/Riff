---
title: "풀오프 하행 장식 — 음이 주르륵 흘러내려요"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — 풀오프 하행 장식

## ① 이론/설명

이틀째예요. 오늘은 **풀오프**로 음을 하나씩 떨어뜨리며 **하행**하는 장식이에요. <mark>줄을 튕겨 낸 손가락을 아래로 살짝 긁어 다음 음을 울려요 — 피킹 없이 음이 주르륵 흘러내려요.</mark>

3번 줄에서 **R(D)→b7(C)→5(A)** 로 **풀오프**를 이어 내리고, 개방현 **4도(G)** 를 거쳐 **b3(F)** 로 착지해요. <mark>한 번의 피킹으로 네 음이 흘러내리면 하행이 물처럼 이어져요.</mark> 손가락을 떼지 말고 다음 프렛을 미리 짚어 둬요.

오늘 목표는 이 하행 장식을 **BPM 72**로 끊김 없이 흘리는 거예요. <mark>속도가 아니라, 풀오프가 매끄럽게 이어져 음이 주르륵 내려오면 오늘 몫을 다한 거예요.</mark> 먼저 하행이 지나는 자리를 눈에 익혀요.

```json
{
  "id": "m2.w6.d2.descent_position",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off descent path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ 3번 줄 7프렛(R)에서 5·2프렛으로 하행하고, 4번 줄 3프렛(초록 b3)으로 착지해요.

## ② 시각 자료

이제 오늘의 하행 장식이에요. 3번 줄 **7프렛(R)** 에서 **풀오프**로 흘러 내려 **b3**로 착지해요. <mark>피킹은 첫 음 한 번뿐, 나머지는 왼손이 음을 흘려보내요.</mark>

```json
{
  "id": "m2.w6.d2.pulloff_descent",
  "type": "tab",
  "meta": { "title": "Pull-off descending ornament", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale", "technique": "pull_off" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "pull_off" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 72.** 3번 줄 **7프렛(D)** 에서 **풀오프** 세 번으로 흘러 내려 개방현 4도를 거쳐 **b3**로 착지해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 3번 줄의 네 음(**R·b7·5·4**)을 하나씩 피킹해요. 풀오프 없이 소리부터 확인해요. <mark>네 음이 하행으로 또렷이 이어지는지 먼저 귀로 들어요.</mark>

**10~20분 · 두뇌 훈련 (풀오프 느리게)**
이제 **첫 음 한 번**만 피킹하고 **풀오프**로 나머지를 흘려요. 음이 끊기면 왼손가락이 줄을 아래로 긁어 내는 느낌을 조금 더 실어요.

**20~40분 · 실전 하행 장식 (BPM 72)**
아래 두 마디를 반복해요. 1마디는 하행 장식, 2마디는 **루트(D)** 로 착지해 쉬어요. <mark>주르륵 내려온 뒤 루트로 편안히 내려앉는 흐름을 느껴봐요.</mark>

```json
{
  "id": "m2.w6.d2.pulloff_descent_loop",
  "type": "tab",
  "meta": { "title": "Pull-off descent with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale", "technique": "pull_off" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "pull_off" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1마디 하행 장식 → 2마디 루트 착지·쉼. 주르륵 내려온 뒤 루트로 내려앉아 한 호흡 쉬어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
하행 장식을 녹음해 들어요. 음이 뚝뚝 끊기던 소리와 오늘의 매끄러운 하행이 얼마나 다른지 비교해요.

**오늘의 완료 기준:** BPM 72에서 풀오프 하행 장식(R→b7→5→4→b3)을 소리 끊김 없이 흘리고, 루트로 편안히 착지할 수 있다.

## ④ 팁 / 흔한 실수

하행 장식을 흘릴 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w6.d2.descent_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off descent map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ 3번 줄 b7·5도가 하행 길, 4번 줄 초록 b3가 착지예요.

- **풀오프가 약해요.** 손가락을 그냥 떼지 말고 줄을 아래로 살짝 긁어 다음 음을 울려요.
- **음이 뚝뚝 끊겨요.** 다음 프렛을 미리 짚어 두면 풀오프가 매끄럽게 이어져요.
- **하행이 급해요.** 네 음을 서두르지 말고 고르게 흘려 내려요.
- **속도부터 올려요.** BPM 60으로 낮춰 음이 끊김 없이 이어지는 것부터 완성해요.
