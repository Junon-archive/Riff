---
title: "Ab13 → G13 반음 슬라이드 접근"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 반음 슬라이드로 미끄러져 들어가기

## ① 이론/설명

어제 만든 **Ab13**을 이제 **움직여** 볼게요. 접근 코드의 핵심은 가만히 있지 않는 거예요. <mark>Ab13을 짧게 짚었다가 반음 아래 G13으로 손 전체를 미끄러뜨리는 것, 그게 오늘의 전부예요.</mark> 이 미끄러짐을 기타에서는 **슬라이드**라고 불러요.

슬라이드는 **줄에서 손가락을 떼지 않고** 프렛만 옮기는 주법이에요. 그래서 두 음이 뚝 끊기지 않고 **하나의 선으로 이어져요.** <mark>목표에 툭 착지하는 게 아니라, 스케이트처럼 미끄러져 들어가는 느낌이에요.</mark> 6번 줄 루트가 **4프렛(Ab)** 에서 **3프렛(G)** 으로 이어지는 그 한 칸이 오늘의 주인공이에요.

먼저 6번 줄 하나로만 슬라이드를 연습해요. **4프렛**을 짚고 소리를 낸 뒤, 손가락을 **떼지 말고** **3프렛**까지 쭉 밀어요. <mark>한 번의 피킹으로 두 프렛이 매끄럽게 연결되면 성공이에요.</mark>

```json
{
  "id": "m1.w3.d2.root_slide",
  "type": "tab",
  "meta": { "title": "Root slide — Ab to G (6th string)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "Ab", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 3, "duration": "half", "label": "G", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70.** 6번 줄 4프렛을 치고 손가락을 붙인 채 3프렛까지 밀어요. 슬라이드 한 번의 감을 잡아요.

## ② 시각 자료

이제 6번 줄 하나가 아니라 **코드 전체**를 슬라이드해요. **Ab13** 그립을 통째로 짚은 채로, 손 전체를 반음 아래로 밀면 그대로 **G13**이 돼요. <mark>네 손가락이 동시에 한 칸씩 미끄러지는 거예요.</mark> 먼저 접근 코드 그립을 다시 눈에 담을게요.

```json
{
  "id": "m1.w3.d2.ab13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — before the slide", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Ab13 그립.** 이 손모양 그대로 반음 아래로 밀 준비를 해요.

이제 실제 코드 슬라이드예요. 앞 2박에 **Ab13**을 짚고, **반음 아래 G13**으로 미끄러뜨리면 <mark>미끈하게 착지</mark>해요. 슬라이드 표시(줄 위 사선)를 따라 손 전체가 한 칸 내려가요.

```json
{
  "id": "m1.w3.d2.chord_slide",
  "type": "tab",
  "meta": { "title": "Ab13 slide to G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Ab13(6번줄 4프렛)을 짚고 반음 아래 G13(3프렛)으로 손 전체를 미끄러뜨려요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 65.** 6번 줄 하나로만 **4→3프렛** 슬라이드를 반복해요. <mark>손가락이 줄에서 뜨지 않게</mark> 붙인 채로 밀어요.

**10~20분 · 두뇌 훈련 (미끄러짐 그리기)**
소리 없이 **Ab13 → G13** 슬라이드를 왼손으로만 그려요. 네 손가락이 동시에 한 칸 미끄러지는 궤적을 눈으로 따라가요.

**20~40분 · 실전 슬라이드 접근 (BPM 75)**
아래 **슬라이드 접근**을 반복해요. <mark>Ab13에서 G13으로 끊김 없이 이어지는지</mark>만 봐요.

```json
{
  "id": "m1.w3.d2.chord_slide_loop",
  "type": "tab",
  "meta": { "title": "Ab13 slide to G13 x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 4, "duration": "half", "technique": "slide", "slideToFret": 3, "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** 슬라이드 접근을 두 번 이어 돌려요. 매번 미끄러지는 착지를 놓치지 말아요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 들어요. 두 코드가 뚝 끊겼는지, 하나의 선으로 미끄러졌는지 비교해요.

**오늘의 완료 기준:** **Ab13**에서 **G13**으로 손 전체를 반음 슬라이드해, 두 코드를 끊김 없이 하나의 선으로 이어 낼 수 있다.

## ④ 팁 / 흔한 실수

코드 **슬라이드**에서 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w3.d2.slide_path",
  "type": "fretboard_diagram",
  "meta": { "title": "Slide path — fret 4 to 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "label": "Ab R", "role": "root" },
    { "string": 6, "fret": 3, "label": "G R", "role": "root" },
    { "string": 4, "fret": 4, "label": "Ab b7", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "G b7", "role": "chord_tone" }
  ]}
}
```
▶ 6번 줄 4→3프렛, 4번 줄 4→3프렛이 함께 미끄러지는 슬라이드 길이에요.

- **손가락이 줄에서 떠요.** 슬라이드 도중 압력을 풀면 소리가 끊겨요. 끝까지 살짝 눌러 붙여요.
- **너무 세게 눌러요.** 힘이 과하면 뻑뻑해서 안 미끄러져요. 미는 데 필요한 만큼만 눌러요.
- **착지가 지나쳐요.** 3프렛에서 정확히 멈춰요. 2프렛까지 밀리면 코드가 달라져요.
- **속도가 급해요.** 반음 거리라 급할 필요 없어요. **BPM 65**로 천천히 미끄러짐부터 익혀요.
