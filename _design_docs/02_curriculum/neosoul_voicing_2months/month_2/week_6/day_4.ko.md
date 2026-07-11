---
title: "완성! 풀오프 하행 장식 릭 (6주차 완성)"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — 완성! 풀오프 하행 장식 릭 (6주차 완성)

## ① 이론/설명

6주차 마지막 날이에요. 이번 주 내내 익힌 **앞꾸밈음**과 **풀오프 하행**을 하나의 **장식 릭**으로 완성해요. <mark>Dm 위에서 **풀오프**로 흘러 내리는 하행 장식 릭이에요.</mark>

이 릭은 네 음이에요. 3번 줄 **7프렛(R=D)** 에서 **풀오프**로 **b7·5** 를 지나 흘러 내리고, **b3(F)** 로 착지해요. <mark>피킹은 첫 음 한 번, 나머지는 왼손이 주르륵 흘려보내요.</mark> 이번 주의 앞음·하행이 이 한 줄에 다 담겨 있어요.

오늘 목표는 이 **장식 릭**을 **BPM 72**로 매끄럽게 완성하는 거예요. <mark>속도가 아니라, 풀오프가 끊김 없이 이어져 릭이 물처럼 흘러내리면 6주차를 마친 거예요.</mark> 먼저 릭이 지나는 자리를 눈에 익혀요.

```json
{
  "id": "m2.w6.d4.grace_lick_review",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace lick review", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ 3번 줄 7프렛(R)에서 5·2프렛을 지나 4번 줄 3프렛(초록 b3)으로 하행해요.

## ② 시각 자료

이제 이번 주의 완성물, **풀오프 하행 장식 릭**이에요. **R**에서 **풀오프**로 흘러 내려 **5도**·**b3**로 착지해요. <mark>급하지 않게, 번지듯 흘리면 네오소울의 '말하는' 느낌이 나요.</mark>

```json
{
  "id": "m2.w6.d4.grace_lick",
  "type": "tab",
  "meta": { "title": "Pull-off descending ornament", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** 3번줄 7프렛(D)에서 **풀오프**로 흘러 내려와 5도·b3로 착지해요. 급하지 않게, 번지듯 흘려요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 릭의 네 음(**R·b7·5·b3**)을 하나씩 피킹해요. 풀오프 없이 소리부터 확인해요. <mark>네 음이 하행으로 또렷이 이어지는지 먼저 귀로 들어요.</mark>

**10~20분 · 두뇌 훈련 (풀오프 느리게)**
이제 **첫 음 한 번**만 피킹하고 **풀오프**로 나머지를 흘려요. 음이 끊기면 왼손가락이 줄을 아래로 긁어 내는 느낌을 조금 더 실어요.

**20~40분 · 실전 장식 릭 (BPM 72)**
아래 두 마디를 반복해요. 1마디는 장식 릭, 2마디는 **루트(D)** 로 착지해 쉬어요. <mark>릭이 흘러내린 뒤 루트로 편안히 내려앉는 흐름을 느껴봐요.</mark>

```json
{
  "id": "m2.w6.d4.grace_lick_loop",
  "type": "tab",
  "meta": { "title": "Grace lick with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1마디 장식 릭 → 2마디 루트 착지·쉼. 흘러내린 뒤 루트로 내려앉아 한 호흡 쉬어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
장식 릭을 녹음해 들어요. 6주 전 장식 하나 없던 소리와 오늘의 릭이 얼마나 표정 있게 자랐는지 비교해요.

**오늘의 완료 기준:** BPM 72에서 풀오프 하행 장식 릭(R→b7→5→b3)을 소리 끊김 없이 흘리고, 루트로 편안히 착지할 수 있다. (6주차 완성!)

## ④ 팁 / 흔한 실수

장식 릭을 완성할 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w6.d4.grace_lick_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace lick path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ 3번 줄 b7·5도가 하행 길, 4번 줄 초록 b3가 릭의 착지예요.

- **풀오프가 약해요.** 손가락을 그냥 떼지 말고 줄을 아래로 살짝 긁어 다음 음을 울려요.
- **하행이 급해요.** 네 음을 서두르지 말고 정박에 고르게 흘려 내려요.
- **b3 착지가 붕 떠요.** 마지막 b3는 또렷이 짚고 여운을 남겨 편안히 내려앉아요.
- **속도부터 올려요.** BPM 60으로 낮춰 풀오프가 끊김 없이 이어지는 릭부터 완성해요.
