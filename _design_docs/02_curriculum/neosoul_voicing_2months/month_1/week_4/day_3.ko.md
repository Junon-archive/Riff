---
title: "탑노트를 멜로디로 — 가장 높은 음을 노래처럼 움직이기"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 탑노트를 멜로디로: 가장 높은 음을 노래처럼 움직이기

## ① 이론/설명

어제까진 코드마다 탑노트가 하나였어요. 오늘은 그 **탑노트를 여러 음으로 이어** 멜로디를 만들어요. <mark>코드는 그대로 깔아 두고, 1번 줄의 탑노트만 위아래로 움직이면 코드 위에 노래가 흘러요.</mark> 이게 바로 **탑 라인**, 코드멜로디의 심장이에요.

**Dm9** 위에서 탑노트를 1번 줄 **5→8→10프렛**으로 올려요. 음이름으로는 **A→C→D(5도→b7→루트)**예요. <mark>코드는 한 자리에 멈춰 있는데 탑노트만 걸어 올라가면, 밋밋하던 뱀프가 이야기를 하기 시작해요.</mark> **G13** 위에서는 1번 줄 **7→10→7프렛(3도→5도→3도)**으로 오르내려요.

오늘은 코드는 가만히, **탑 라인**만 노래하게 해요. **BPM 70**으로, 탑노트가 한 음 한 음 또렷이 이어지는지 들어요. <mark>탑 라인이 매끄럽게 이어지면, 내일 코드와 합쳐 M1 완성 뱀프가 돼요.</mark> 먼저 **Dm9** 위 탑 라인부터 그려요.

```json
{
  "id": "m1.w4.d3.dm9_top_line",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 top-note line — 5 to b7 to R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 5, "label": "5", "role": "target", "highlight": true },
    { "string": 1, "fret": 8, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 10, "label": "R", "role": "target", "highlight": true }
  ]}
}
```
▶ **Dm9 위 탑 라인.** 1번 줄 5→8→10프렛, 초록 음(5도·루트)이 라인의 착지예요.

## ② 시각 자료

**G13** 위 탑 라인이에요. 1번 줄 **7→10→7프렛**, 음이름으로는 **B→D→B(3도→5도→3도)**로 올랐다 다시 내려와요. <mark>3도에서 출발해 5도까지 올랐다 3도로 돌아오면, 한 마디가 작은 노래처럼 닫혀요.</mark>

```json
{
  "id": "m1.w4.d3.g13_top_line",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 top-note line — 3 to 5 to 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 5, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 7, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 10, "label": "5", "role": "scale" }
  ]}
}
```
▶ **G13 위 탑 라인.** 1번 줄 7↔10프렛을 오가요, 초록 3도가 시작과 끝이에요.

이제 코드는 빼고 **탑 라인만** 이어서 들어 봐요. 두 마디가 하나의 짧은 멜로디로 흘러요. <mark>코드 없이도 탑 라인만으로 노래가 되는지 귀로 확인해요.</mark>

```json
{
  "id": "m1.w4.d3.top_melody",
  "type": "tab",
  "meta": { "title": "Top-note melody only", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "R", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 70.** 코드 없이 1번 줄 탑 라인만 노래해요. 초록 음(착지)이 또렷이 도착하는지 들어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 65.** 1번 줄에서 5·8·10프렛, 7·10프렛을 천천히 오가며 손을 데워요. <mark>탑 라인의 음 사이가 매끄럽게 이어지는지 귀로 확인해요.</mark>

**10~20분 · 두뇌 훈련 (탑 라인 그리기)**
소리 없이 1번 줄만 눈으로 따라가며 **탑 라인**의 경로(5→8→10, 7→10→7)를 손에 익혀요.

**20~40분 · 실전 코드+탑 라인 (BPM 70)**
아래 네 마디를 **끊김 없이** 반복해요. 코드를 앞 2박 깔고, 뒤 2박에 탑노트를 움직여요. <mark>코드 위로 탑 라인이 걸어가는 게 들리는지</mark>만 봐요.

```json
{
  "id": "m1.w4.d3.top_melody_practice",
  "type": "tab",
  "meta": { "title": "Chord + top line x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70.** 코드+탑 라인을 두 바퀴 돌아요. 코드는 배경, 탑노트가 앞에서 노래하게 둬요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 다시 들어요. 코드만 있던 어제와 오늘, 탑 라인이 얹힌 소리가 얼마나 노래처럼 들리는지 비교해요.

**오늘의 완료 기준:** Dm9와 G13 위에서 탑 라인(1번 줄 5→8→10, 7→10)을 BPM 70으로 매끄럽게 움직여, 코드 위로 걸어가는 멜로디를 들려줄 수 있다.

## ④ 팁 / 흔한 실수

**탑 라인**을 움직일 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w4.d3.top_line_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Where the top line travels", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 5, "label": "Dm9 top", "role": "target", "highlight": true },
    { "string": 1, "fret": 8, "label": "pass", "role": "scale" },
    { "string": 1, "fret": 10, "label": "peak", "role": "scale" },
    { "string": 1, "fret": 7, "label": "G13 top", "role": "target", "highlight": true }
  ]}
}
```
▶ 초록 음(5·7프렛)이 각 코드 탑 라인의 출발점, 8·10프렛은 그 사이를 잇는 경과·정점이에요.

- **탑노트를 옮기다 코드가 끊겨요.** 코드 손가락은 눌러 둔 채, 1번 줄 짚는 손가락만 옮겨요.
- **라인이 뚝뚝 끊겨요.** 음 사이를 이어 부드럽게 튕겨야 걸어가는 멜로디로 들려요.
- **탑노트가 작아요.** 탑은 노래니까 1번 줄을 코드보다 조금 더 또렷이 울려요.
- **속도부터 올려요.** 라인이 끊기면 BPM 65로 낮춰 음 사이 연결부터 되찾아요.
