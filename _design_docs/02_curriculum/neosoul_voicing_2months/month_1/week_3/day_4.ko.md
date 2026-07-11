---
title: "완성! 크로매틱 접근 뱀프 — Dm9 → Ab13 → G13"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 완성! 크로매틱 접근 뱀프

## ① 이론/설명

3주차의 무대예요. 이번 주 내내 익힌 **반음 위 접근**과 **슬라이드**를, 시그니처 뱀프에 담아 완성해요. <mark>같은 Dm9 → G13인데, 반음 위에서 미끄러져 들어가는 한 수로 완전히 네오소울다워지는 걸 오늘 손으로 확인해요.</mark> 1마디는 집 코드 **Dm9**, 2마디는 **Ab13 → G13** 크로매틱 접근이에요.

핵심은 2마디예요. 목표 **G13** 반음 위 **Ab13**을 짧게 짚었다가, 반음 아래로 미끄러져 착지해요. <mark>이 크로매틱 한 칸이 밋밋한 진행을 미끈한 흐름으로 바꿔 놓아요.</mark> 이번 주 배운 접근 코드·슬라이드·삽입이 이 두 마디에 다 담겨 있어요.

오늘은 속도보다 **미끄러짐과 착지**예요. **BPM 75**로 부드럽게 굴리되, 접근을 짧게 짚고 목표로 녹여요. <mark>크로매틱 접근 뱀프가 끊김 없이 동그랗게 굴러가면 3주차는 완성이에요.</mark> 먼저 1마디 **Dm9**부터 손에 얹을게요.

```json
{
  "id": "m1.w3.d4.dm9_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — bar 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **1마디는 Dm9.** 5번 줄 5프렛 루트, 2번 줄 9도가 몽글한 색을 내요.

## ② 시각 자료

2마디의 주인공은 **접근 코드 Ab13**이에요. 목표 G13 바로 반음 위, 6번 줄 **4프렛**에 얹었다가 곧 미끄러져 내려가요. <mark>이 한 그립이 이번 주 시그니처의 출발점이에요.</mark>

```json
{
  "id": "m1.w3.d4.ab13_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — bar 2 start", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **접근 코드 Ab13.** 6번 줄 4프렛 루트, 반음 아래로 밀 준비를 해요.

이제 두 마디를 하나로 이은 **완성된 크로매틱 접근 뱀프**예요. 이번 주의 결과물이 아래에 다 담겨 있어요. <mark>1마디의 안정, 2마디의 미끄러지는 착지가 한 흐름으로 이어져요.</mark>

```json
{
  "id": "m1.w3.d4.chromatic_approach",
  "type": "tab",
  "meta": { "title": "Dm9 - Ab13 to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** 2마디에서 **Ab13**(6번줄 4프렛)을 짧게 짚고 **반음 아래 G13**(3프렛)으로 슬라이드하듯 밀어내려요. 미끄러지는 착지가 네오소울의 맛.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 65.** Dm9와 Ab13 → G13 슬라이드를 번갈아 잡으며 손을 데워요. <mark>2마디의 반음 슬라이드를 다시 불러와요.</mark>

**10~20분 · 두뇌 훈련 (접근 자리 확인)**
소리 없이 왼손만으로 뱀프를 그려요. 1마디 **Dm9**, 2마디 **Ab13 → G13** 접근의 자리를 눈으로 확인해요.

**20~40분 · 실전 크로매틱 접근 뱀프 (BPM 75)**
아래 네 마디를 **끊김 없이** 반복해요. <mark>매 2마디마다 미끄러지는 착지가 또렷이 들리는지</mark>만 봐요.

```json
{
  "id": "m1.w3.d4.chromatic_approach_loop",
  "type": "tab",
  "meta": { "title": "Chromatic approach vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** 크로매틱 접근 뱀프를 두 바퀴 돌아요. 2마디마다 슬라이드 착지를 놓치지 말아요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 다시 들어요. 1주차 밋밋한 뱀프와 오늘의 크로매틱 접근 뱀프, 흐름이 얼마나 달라졌는지 비교해요.

**오늘의 완료 기준:** 크로매틱 접근 뱀프(Dm9 → Ab13 → G13)를 BPM 75로 끊김 없이 반복하고, 2마디의 슬라이드 착지를 또렷이 들려줄 수 있다. (3주차 완성!)

## ④ 팁 / 흔한 실수

**크로매틱 접근 뱀프**를 굴릴 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w3.d4.color_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Approach map — Ab13 to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 6, "label": "Ab 13", "role": "color" },
    { "string": 2, "fret": 5, "label": "G 13", "role": "color" },
    { "string": 3, "fret": 5, "label": "Ab 3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "G 3", "role": "chord_tone" }
  ]}
}
```
▶ 2번 줄 6→5프렛이 Ab→G의 13도, 3번 줄 5→4프렛이 각 코드의 3도예요.

- **접근이 길어요.** Ab13은 앞 2박만 짧게. 너무 끌면 미끄러짐이 아니라 코드 교체처럼 들려요.
- **착지가 밋밋해요.** 슬라이드로 손가락을 붙인 채 밀어야 두 코드가 하나의 선으로 이어져요.
- **1마디에서 늦어요.** Dm9 끝에 미리 6번 줄로 손을 옮겨 두면 2마디가 안 늦어요.
- **속도가 오르면 지저분해요.** BPM을 65로 낮춰 미끄러짐부터 되찾아요.
