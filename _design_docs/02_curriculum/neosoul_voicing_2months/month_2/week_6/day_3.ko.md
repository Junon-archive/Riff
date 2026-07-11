---
title: "코드에 장식을 얹기 — 앞음 하나로 표정 있는 Dm9"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — 코드에 장식을 얹기

## ① 이론/설명

사흘째예요. 오늘은 한 음이 아니라 **Dm9 코드 전체에 장식을 얹어요**. <mark>코드를 울리기 직전, 가장 낮은 **베이스 음** 앞에 짧은 **앞음**을 넣어 코드가 '말하듯' 등장하게 해요.</mark>

베이스에서 **b7(C)** 를 짧게 치고 **루트(D)** 로 **해머온**하는 순간, 위에 쌓인 **b3·b7·9** 가 함께 울려요. <mark>가장 낮은 음이 앞꾸밈음으로 미끄러져 들어오면, 같은 코드도 표정이 확 살아나요.</mark> 앞음은 짧게, 코드는 길게 눌러 여운을 남겨요.

오늘 목표는 이 **장식 코드**를 **BPM 72**로 표정 있게 울리는 거예요. <mark>속도가 아니라, 앞음이 베이스로 깔끔히 번지고 코드가 함께 울리면 오늘 몫을 다한 거예요.</mark> 먼저 코드 그립과 앞음 자리를 눈에 익혀요.

```json
{
  "id": "m2.w6.d3.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip with bass grace note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 3, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ 5번 줄 3프렛(앞음 b7)→5프렛(루트), 그 위 4·3·2번 줄이 b3·b7·9 — Dm9 그립이에요.

## ② 시각 자료

이제 장식을 얹은 **Dm9** 코드예요. 베이스 **b7**을 짧게 치고 **루트로 해머온**하면, 그 위 **b3·b7·9** 가 한 번에 울려요. <mark>가장 낮은 음의 앞꾸밈음 하나가 코드 전체에 표정을 입혀요.</mark>

```json
{
  "id": "m2.w6.d3.chord_ornament",
  "type": "tab",
  "meta": { "title": "Grace into Dm9 chord", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "half", "dotted": true, "isRoot": true, "role": "root", "technique": "hammer_on", "chord": [
        { "string": 4, "fret": 3, "role": "chord_tone" },
        { "string": 3, "fret": 5, "role": "chord_tone" },
        { "string": 2, "fret": 5, "role": "color" }
      ] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 5번 줄 **3프렛(b7)** 을 짧게 치고 **5프렛(루트)로 해머온** — 그 순간 위 세 음이 함께 울려 **Dm9** 가 표정 있게 등장해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 **Dm9** 코드를 앞음 없이 또렷이 울려요. 네 음(**R·b3·b7·9**)이 고르게 나는지 확인해요. <mark>장식을 얹기 전, 코드 소리부터 깨끗이 나는지 귀로 들어요.</mark>

**10~20분 · 두뇌 훈련 (앞음 느리게)**
이제 베이스 **b7→루트** 해머온을 넣어요. **앞음**이 너무 길어지지 않게, 코드가 바로 이어 울리도록 재빨리 미끄러뜨려요.

**20~40분 · 실전 장식 코드 (BPM 72)**
아래 두 마디를 반복해요. 1마디는 장식을 얹은 코드, 2마디는 같은 **Dm9** 를 담백하게 울려 비교해요. <mark>앞음이 있는 코드와 없는 코드의 표정 차이를 느껴봐요.</mark>

```json
{
  "id": "m2.w6.d3.chord_ornament_loop",
  "type": "tab",
  "meta": { "title": "Ornamented vs plain Dm9", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "half", "dotted": true, "isRoot": true, "role": "root", "technique": "hammer_on", "chord": [
        { "string": 4, "fret": 3, "role": "chord_tone" },
        { "string": 3, "fret": 5, "role": "chord_tone" },
        { "string": 2, "fret": 5, "role": "color" }
      ] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "isRoot": true, "role": "root", "chord": [
        { "string": 4, "fret": 3, "role": "chord_tone" },
        { "string": 3, "fret": 5, "role": "chord_tone" },
        { "string": 2, "fret": 5, "role": "color" }
      ] },
      { "string": 5, "fret": 5, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1마디 장식 코드 → 2마디 담백한 Dm9. 앞음 하나의 표정 차이를 느껴봐요.

**40~50분 · 녹음/셀프 피드백 (권장)**
두 코드를 나란히 녹음해 들어요. 앞음 하나로 코드의 표정이 얼마나 달라지는지 비교해요.

**오늘의 완료 기준:** BPM 72에서 베이스 앞음(b7→루트)을 넣어 Dm9 코드를 표정 있게 울리고, 담백한 코드와 구분되게 연주할 수 있다.

## ④ 팁 / 흔한 실수

코드에 장식을 얹을 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w6.d3.dm9_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 ornament map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 3, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ 5번 줄 앞음(b7)에서 루트로, 그 위 세 음이 Dm9의 색이에요.

- **앞음만 크게 나요.** 앞음은 짧게 스치고, 코드가 주인공이 되도록 함께 울려요.
- **코드가 흩어져요.** 해머온 순간 위 세 음의 손가락을 미리 코드 모양으로 잡아 둬요.
- **베이스가 묻혀요.** 가장 낮은 줄을 또렷이 울려 앞음이 들리게 해요.
- **속도부터 올려요.** BPM 60으로 낮춰 앞음과 코드가 함께 깔끔히 울리는 것부터 완성해요.
