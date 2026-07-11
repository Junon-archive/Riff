---
title: "코드 사이에 장식 릭 — 뱀프에 스미어를 끼우다"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — 코드 사이에 장식 릭

## ① 이론/설명

지난 이틀 스미어를 익혔어요. 오늘은 그 스미어를 **뱀프** 안으로 데려와요. 시그니처 뱀프는 **Dm9→G13**이에요. <mark>코드를 1박에 깔고, 남은 박에 **스미어 장식 릭**을 끼워 넣으면 코드 사이가 물감처럼 번져요.</mark>

방법은 간단해요. 매 마디 **1박**에 코드를 짧게 치고, **2~4박**에 어제까지 익힌 **b3→3** 스미어 릭을 이어요. <mark>코드는 배경, 장식 릭이 그 위를 채우는 목소리예요.</mark> Dm9 위에서는 **b3→3→5**로, G13 위에서는 **b3→3→b7**로 흘러요.

오늘 목표는 **뱀프에 장식 한 줄**이에요. **BPM 72**로 천천히, 코드와 장식이 한 호흡으로 이어지는지 들어요. <mark>코드에서 장식으로 손이 매끄럽게 넘어가면 오늘은 성공이에요.</mark> 먼저 집 코드 Dm9를 다시 얹어요.

```json
{
  "id": "m2.w5.d3.dm9_home",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 vamp home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" },
    { "string": 1, "fret": 5, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **1마디 집 코드 Dm9.** 5번 줄 루트로 코드를 깔고, 곧바로 4번 줄에서 스미어 릭을 시작해요.

## ② 시각 자료

이제 코드와 장식을 이어봐요. **1박**에 **Dm9**를 치고, **2박**부터 **b3→3** 스미어로 넘어가 **5도**로 흘러요. 다음 마디는 **G13**을 치고 같은 스미어로 **b7**까지 흘러요. <mark>코드는 짧게, 초록 3도로 번지는 장식이 그 뒤를 노래해요.</mark>

```json
{
  "id": "m2.w5.d3.vamp_ornament",
  "type": "tab",
  "meta": { "title": "Vamp with smear ornament", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** 1박 코드 → 2~4박 스미어 장식. Dm9 위엔 **5도**로, G13 위엔 **b7**로 릭이 흘러요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 코드만 두 개(**Dm9**·**G13**) 번갈아 쳐요. 1박에 짧게 치고 손을 떼 다음 코드를 준비해요. <mark>코드가 짧고 또렷하게 끊기는 느낌부터 익혀요.</mark>

**10~20분 · 두뇌 훈련 (스미어 이어 붙이기)**
소리 없이 코드를 짚었다가, 그 손에서 **b3→3** 스미어로 넘어가는 동선을 그려요. 코드 손가락과 스미어 손가락이 겹치는 지점을 찾아요.

**20~40분 · 실전 뱀프 장식 (BPM 72)**
아래 네 마디를 끊김 없이 반복해요. 코드 한 번, 스미어 한 번씩이에요. <mark>코드에서 장식으로 넘어갈 때 박이 밀리지 않는지만 봐요.</mark>

```json
{
  "id": "m2.w5.d3.vamp_ornament_loop",
  "type": "tab",
  "meta": { "title": "Vamp with ornament x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72.** 뱀프 두 바퀴. 코드는 1박 짧게, 나머지 박은 스미어 장식이 채워요.

**40~50분 · 녹음/셀프 피드백 (권장)**
뱀프 네 마디를 녹음해 들어요. 코드와 장식이 한 흐름으로 들리는지, 박이 밀리지 않는지 확인해요.

**오늘의 완료 기준:** BPM 72에서 Dm9·G13 뱀프에 b3→3 스미어 장식을 끼워, 코드와 장식을 한 흐름으로 반복할 수 있다.

## ④ 팁 / 흔한 실수

뱀프에 장식을 끼울 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w5.d3.ornament_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Ornament insert map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 코드를 친 뒤 4번 줄에서 스미어(초록 3도)로 넘어가, Dm9는 5도·G13은 b7로 흘러요.

- **코드가 너무 길어요.** 코드는 1박만 짧게, 곧바로 장식으로 넘어가요.
- **장식에서 박이 밀려요.** 스미어를 서두르지 말고 정박에 맞춰 또렷이 놓아요.
- **코드 손가락이 다 풀려요.** 스미어로 넘어갈 때 필요한 손가락만 옮기고 나머지는 여유롭게 둬요.
- **속도부터 올려요.** BPM 60으로 낮춰 코드→장식 동선부터 매끄럽게 만들어요.
