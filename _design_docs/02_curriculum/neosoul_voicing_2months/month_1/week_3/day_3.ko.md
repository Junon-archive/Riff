---
title: "뱀프에 접근 삽입 — Dm9 → Ab13 → G13"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 뱀프에 슬라이드 접근 넣기

## ① 이론/설명

이번 주 배운 **슬라이드 접근**을 드디어 뱀프에 넣어요. 시그니처 진행 **Dm9 → G13**에서, G13에 딱 도착하는 대신 <mark>반음 위 Ab13에서 미끄러져 들어가</mark> 색을 더해요. 오늘은 두 마디짜리 뱀프 안에서 접근이 자연스럽게 흐르게 만들어요.

흐름은 이래요. **1마디**는 집 코드 **Dm9**를 온음표로 편안히 울리고, **2마디** 앞 2박에 **Ab13**을 짚었다가 뒤 2박 **G13**으로 슬라이드해요. <mark>1마디의 안정과 2마디의 미끄러짐이 대비되며 뱀프에 생기가 돌아요.</mark> 접근은 언제나 목표 코드 **바로 앞**에 놓여요.

먼저 집 코드 **Dm9**를 다시 손에 얹을게요. 5번 줄 **5프렛**이 루트, 2번 줄의 **9도**가 몽글한 색을 내요. <mark>이 편안한 자리에서 출발해야 다음 미끄러짐이 더 도드라져요.</mark>

```json
{
  "id": "m1.w3.d3.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — home chord", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **집 코드 Dm9.** 5번 줄 5프렛 루트, 2번 줄 9도가 부드러운 색을 내요.

## ② 시각 자료

2마디로 넘어가기 전에, 미끄러져 들어갈 **접근 코드 Ab13**을 다시 확인해요. <mark>이 그립을 짚었다가 반음 아래로 밀면 곧장 G13이에요.</mark>

```json
{
  "id": "m1.w3.d3.ab13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — the approach chord", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Ab13 그립.** 2마디 앞 2박에서 짚었다가 곧 반음 아래로 밀 자리예요.

이제 두 마디를 하나로 이어요. 1마디 **Dm9**, 2마디 **Ab13 → G13** 슬라이드가 한 흐름으로 흐르는 **완성된 접근 뱀프**예요. <mark>집에서 편안히 쉬다가 반음 위에서 미끄러져 돌아오는 왕복이 느껴져요.</mark>

```json
{
  "id": "m1.w3.d3.approach_vamp",
  "type": "tab",
  "meta": { "title": "Dm9 - Ab13 to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** 1마디 Dm9, 2마디에서 Ab13을 짚고 반음 아래 G13으로 미끄러뜨려요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 65.** Dm9와 Ab13 → G13 슬라이드를 번갈아 잡으며 손을 데워요. <mark>집 코드와 접근을 오가는 손 이동을 미리 풀어요.</mark>

**10~20분 · 두뇌 훈련 (자리 확인)**
소리 없이 **Dm9 → Ab13 → G13** 순서를 왼손으로만 그려요. 5번 줄 루트에서 6번 줄 루트로 넘어가는 이동을 눈으로 확인해요.

**20~40분 · 실전 접근 뱀프 (BPM 75)**
아래 네 마디를 **끊김 없이** 반복해요. <mark>매 2마디마다 슬라이드 접근이 또렷이 들리는지</mark>만 봐요.

```json
{
  "id": "m1.w3.d3.approach_vamp_loop",
  "type": "tab",
  "meta": { "title": "Approach vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
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
▶ **BPM 75.** 접근 뱀프를 두 바퀴 돌아요. 2마디마다 미끄러지는 착지를 놓치지 말아요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 들어요. 밋밋하게 G13으로 점프한 지난주와, 오늘 미끄러져 들어간 뱀프를 비교해요.

**오늘의 완료 기준:** **Dm9 → Ab13 → G13** 뱀프를 BPM 75로 끊김 없이 반복하고, 2마디의 슬라이드 접근을 매끄럽게 이어 낼 수 있다.

## ④ 팁 / 흔한 실수

**접근 뱀프**를 굴릴 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w3.d3.transition_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Transition zone — Dm9 to Ab-G", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "label": "Dm9 R", "role": "root" },
    { "string": 6, "fret": 4, "label": "Ab R", "role": "root" },
    { "string": 6, "fret": 3, "label": "G R", "role": "root" },
    { "string": 3, "fret": 5, "label": "Ab 3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "G 3", "role": "chord_tone" }
  ]}
}
```
▶ 5번 줄 5프렛(Dm9)에서 6번 줄 4→3프렛(Ab→G)으로 넘어가는 전환 지점이에요.

- **1마디에서 2마디로 늦어요.** Dm9 4박째에 미리 손을 6번 줄 쪽으로 옮겨 두면 안 늦어요.
- **접근이 밋밋해요.** Ab13을 너무 길게 끌면 접근이 아니라 딴 코드처럼 들려요. 앞 2박만 짧게 짚어요.
- **슬라이드가 끊겨요.** 2마디에서 손가락을 떼지 말고 반음 아래로 밀어요.
- **속도가 오르면 지저분해요.** BPM을 65로 낮춰 이동부터 깨끗하게 만들어요.
