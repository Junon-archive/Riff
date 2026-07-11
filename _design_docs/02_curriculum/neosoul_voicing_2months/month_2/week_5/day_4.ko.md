---
title: "완성! b3→3 스미어 릭 — 반음이 번지는 장식 (5주차 완성)"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — 완성! b3→3 스미어 릭 (5주차 완성)

## ① 이론/설명

5주차 마지막 날이에요. 이번 주 내내 익힌 **스미어**를 하나의 **장식 릭**으로 완성해요. <mark>**b3(F)** 에서 **3(F#)** 으로 해머온해 번지게 한 뒤, **5도**와 **b7**로 상행하는 짧은 릭이에요.</mark>

이 릭은 네 음이에요. **b3→3** 스미어로 시작해, **5도(A)** 를 거쳐 **b7(C)** 로 흘러 올라가요. <mark>반음 하나가 릭 전체에 네오소울의 색을 물들여요.</mark> 첫 이틀의 스미어, 셋째 날의 뱀프 삽입이 이 한 줄에 다 담겨 있어요.

오늘 목표는 이 **스미어 릭**을 **BPM 72**로 또렷이 완성하는 거예요. <mark>속도가 아니라, 반음이 깨끗이 번지고 릭이 매끄럽게 상행하면 5주차를 마친 거예요.</mark> 먼저 릭이 지나는 자리를 눈에 익혀요.

```json
{
  "id": "m2.w5.d4.smear_review",
  "type": "fretboard_diagram",
  "meta": { "title": "Smear lick review", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 4번 줄 3프렛(b3)→4프렛(초록 3도) 스미어 뒤, 3번 줄 2프렛(5)·5프렛(b7)으로 상행해요.

## ② 시각 자료

이제 이번 주의 완성물, **b3→3 스미어 릭**이에요. **b3**를 치고 **3도**로 **해머온**한 다음, **5도**와 **b7**로 번지듯 상행해요. <mark>초록 3도가 릭의 심장이고, 그 뒤로 두 음이 흘러 마무리해요.</mark>

```json
{
  "id": "m2.w5.d4.smear_lick",
  "type": "tab",
  "meta": { "title": "b3-to-3 smear lick", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** **b3(4번줄 3프렛=F)**을 치고 **3도(4프렛=F#)로 해머온** — 반음 번지는 스미어. 그다음 5도·b7로 흘러요. 이 반음 하나가 네오소울의 색이에요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 릭의 네 음(**b3·3·5·b7**)을 하나씩 짚어요. 해머온 없이 소리부터 확인해요. <mark>네 음이 또렷이 이어지는지 먼저 귀로 들어요.</mark>

**10~20분 · 두뇌 훈련 (스미어 릭 느리게)**
이제 **한 번의 피킹**으로 **b3→3** 해머온을 넣고, 나머지 두 음으로 상행해요. 반음이 흐려지면 왼손 힘을 조금 더 실어요.

**20~40분 · 실전 스미어 릭 (BPM 72)**
아래 두 마디를 반복해요. 1마디는 스미어 릭, 2마디는 **루트(D)** 로 착지해 쉬어요. <mark>릭이 상행한 뒤 루트로 편안히 내려앉는 흐름을 느껴봐요.</mark>

```json
{
  "id": "m2.w5.d4.smear_lick_loop",
  "type": "tab",
  "meta": { "title": "Smear lick with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1마디 스미어 릭 → 2마디 루트 착지·쉼. 상행 뒤 루트로 내려앉아 한 호흡 쉬어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
스미어 릭을 녹음해 들어요. 일주일 전 반음 하나 없던 소리와 오늘의 릭이 얼마나 번지게 자랐는지 비교해요.

**오늘의 완료 기준:** BPM 72에서 b3→3 스미어 릭(스미어 → 5도 → b7)을 소리 끊김 없이 완성하고, 루트로 편안히 착지할 수 있다. (5주차 완성!)

## ④ 팁 / 흔한 실수

스미어 릭을 완성할 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w5.d4.smear_lick_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Smear lick path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 초록 3도가 스미어의 착지, 3번 줄 5도·b7이 릭의 상행 길이에요.

- **스미어가 흐려요.** 첫 손가락을 떼지 말고 눌러 둔 채 해머온을 단단히 넣어요.
- **상행이 급해요.** 스미어 뒤 두 음을 서두르지 말고 정박에 또렷이 놓아요.
- **루트 착지가 붕 떠요.** 마지막 루트는 짧게 짚고 여운을 남겨 편안히 내려앉아요.
- **속도부터 올려요.** BPM 60으로 낮춰 반음이 깨끗이 번지는 릭부터 완성해요.
