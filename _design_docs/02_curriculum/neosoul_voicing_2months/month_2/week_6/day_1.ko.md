---
title: "그레이스노트로 코드에 표정을 — 짧은 앞음이 목표음으로 번져요"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — 그레이스노트로 코드에 표정을

## ① 이론/설명

6주차예요. 이번 주 주제는 **그레이스노트(앞꾸밈음)** — 목표음 바로 앞에 붙는 아주 짧은 장식음이에요. <mark>말을 꺼내기 전 살짝 새는 짧은 숨처럼, **앞음**을 재빨리 흘려 넣고 **목표음**으로 번지게 해요.</mark>

오늘의 앞꾸밈음은 **b3(F)** 를 짧게 스치고 곧장 **3(F#)** 으로 **해머온**해 번지게 하는 한 번의 장식이에요. 기타엔 그레이스노트 전용 기호가 없어서, <mark>**짧은 앞음 + 해머온**으로 근사해요.</mark> 앞음은 8분음표처럼 재빨리, 목표음은 길게 눌러 둬요.

오늘 목표는 이 앞꾸밈음을 **BPM 72**로 한 번 또렷이 넣는 거예요. <mark>속도가 아니라, 짧은 앞음이 목표음으로 깔끔히 번지면 오늘 몫을 다한 거예요.</mark> 먼저 손이 놓일 자리를 눈에 익혀요.

```json
{
  "id": "m2.w6.d1.grace_position",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace note hand position", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ 4번 줄 3프렛(b3)·4프렛(초록 3도)이 앞꾸밈음 자리, 3번 줄 2프렛이 이어지는 5도예요.

## ② 시각 자료

이제 오늘의 앞꾸밈음이에요. **b3**를 짧게 치고 **3도**로 **해머온**해, 짧은 앞음이 목표음으로 번지게 해요. <mark>앞음은 스치듯 짧게, 목표음은 길게 울려 표정을 남겨요.</mark>

```json
{
  "id": "m2.w6.d1.grace_note",
  "type": "tab",
  "meta": { "title": "Grace note into the 3rd", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "half", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** **b3(4번줄 3프렛)**을 짧게 치고 **3도(4프렛)로 해머온** — 앞꾸밈음. 그다음 5도로 흘러 한 박 쉬어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 앞꾸밈음의 두 음(**b3·3**)을 하나씩 짚어요. 해머온 없이 소리부터 확인해요. <mark>두 음이 반음 차이로 또렷이 들리는지 먼저 귀로 확인해요.</mark>

**10~20분 · 두뇌 훈련 (앞꾸밈음 느리게)**
이제 **한 번의 피킹**으로 **b3→3** 해머온을 넣어요. 앞음이 너무 길어지지 않게, 목표음이 주인공이 되도록 재빨리 흘려요.

**20~40분 · 실전 앞꾸밈음 (BPM 72)**
아래 두 마디를 반복해요. 1마디는 앞꾸밈음, 2마디는 **루트(D)** 로 착지해 쉬어요. <mark>앞꾸밈음을 넣은 뒤 루트로 편안히 내려앉는 흐름을 느껴봐요.</mark>

```json
{
  "id": "m2.w6.d1.grace_note_loop",
  "type": "tab",
  "meta": { "title": "Grace note with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "half", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1마디 앞꾸밈음 → 2마디 루트 착지·쉼. 장식 뒤 루트로 내려앉아 한 호흡 쉬어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
앞꾸밈음을 녹음해 들어요. 앞음 없이 밋밋하던 음과 오늘의 장식이 얼마나 다른지 비교해요.

**오늘의 완료 기준:** BPM 72에서 b3→3 앞꾸밈음을 한 번 또렷이 넣고, 루트로 편안히 착지할 수 있다.

## ④ 팁 / 흔한 실수

앞꾸밈음을 넣을 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w6.d1.grace_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Grace note path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 4번 줄 3프렛(b3)에서 4프렛(초록 3도)으로 앞꾸밈음이 번져요.

- **앞음이 너무 길어요.** 앞음은 스치듯 짧게 흘리고, 목표음을 길게 눌러 둬요.
- **해머온이 약해요.** 왼손가락을 목표 프렛에 단단히 떨어뜨려 번지게 해요.
- **음이 끊겨요.** 앞음을 친 손가락을 떼지 말고 그대로 해머온해요.
- **속도부터 올려요.** BPM 60으로 낮춰 앞꾸밈음이 깨끗이 번지는 것부터 완성해요.
