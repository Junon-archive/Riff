---
title: "완성! 탑노트 멜로디 뱀프 — Dm9 · G13 위에 노래를 얹다 (M1 졸업)"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 완성! 탑노트 멜로디 뱀프 (M1 졸업)

## ① 이론/설명

드디어 4주차 마지막 날, **M1 졸업**이에요. 한 달 전 **코어 그립**을 처음 손에 얹던 날을 떠올려요. 거기서 **텐션**으로 코드를 물들이고, **크로매틱**으로 미끄러지고, 이번 주 **탑노트**로 코드 위에 멜로디를 얹었어요. <mark>오늘은 그 네 걸음을 한 뱀프에 모아 M1의 완성물을 만들어요.</mark>

완성물은 코드멜로디예요. **Dm9**과 **G13**을 1박에 깔고, 그 위 **탑노트 멜로디**를 노래하듯 움직여요. Dm9 위에서는 **5→b7→루트**, G13 위에서는 **3→5→3**으로 탑 라인이 걸어가요. <mark>코드는 배경으로 최소한만, 귀와 손은 초록 탑노트를 따라가요.</mark>

오늘은 속도가 아니라 **한 달의 결실**을 확인하는 날이에요. **BPM 72**로 천천히 굴리며, 코드 위로 노래가 흐르는지 들어요. <mark>탑노트 멜로디 뱀프가 끊김 없이 동그랗게 돌면, 네오소울 코드멜로디의 첫걸음을 뗀 거예요.</mark> 먼저 집 코드 **Dm9**부터 얹을게요.

```json
{
  "id": "m1.w4.d4.dm9_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 with top note — bar 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" },
    { "string": 1, "fret": 5, "label": "5", "role": "target", "highlight": true }
  ]}
}
```
▶ **1마디는 Dm9.** 코드를 깔고 1번 줄 5프렛(초록 5도)에서 탑 라인이 출발해요.

## ② 시각 자료

2마디는 **G13**이에요. 코드를 깔고 1번 줄 **7프렛(3도)**에서 탑 라인이 시작돼요. <mark>Dm9의 5도 라인과 G13의 3도 라인이 이어지면 두 마디가 한 노래로 흘러요.</mark>

```json
{
  "id": "m1.w4.d4.g13_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 with top note — bar 2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" },
    { "string": 1, "fret": 7, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **2마디는 G13.** 코드를 깔고 1번 줄 7프렛(초록 3도)에서 탑 라인이 시작돼요.

이제 두 마디를 하나로 이은 **M1의 완성물, 탑노트 멜로디 뱀프**예요. 한 달의 여정이 이 두 마디에 다 담겨 있어요. <mark>코드는 최소로, 초록 탑노트가 노래처럼 걸어가는 게 오늘의 주인공이에요.</mark>

```json
{
  "id": "m1.w4.d4.top_note_melody",
  "type": "tab",
  "meta": { "title": "Vamp with top-note melody", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "R", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 코드를 1박에 깔고, 1번줄에서 **탑노트 멜로디(초록)**를 노래하듯 움직여요. 코드는 최소로만, 귀는 탑 라인을 따라가요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 65.** Dm9와 G13을 잡고, 1번 줄 탑 라인(5·8·10, 7·10·7)을 천천히 훑어요. <mark>코드를 깐 손 위에서 탑노트가 또렷이 이어지는지 확인해요.</mark>

**10~20분 · 두뇌 훈련 (탑 라인 그리기)**
소리 없이 두 코드를 오가며, 각 마디 1번 줄 **탑노트**가 어디로 걸어가는지 눈으로 그려요.

**20~40분 · 실전 탑노트 멜로디 뱀프 (BPM 72)**
아래 네 마디를 **끊김 없이** 반복해요. <mark>코드 위로 초록 탑 라인이 노래처럼 걸어가는지</mark>만 봐요.

```json
{
  "id": "m1.w4.d4.top_note_melody_loop",
  "type": "tab",
  "meta": { "title": "Top-note melody vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "R", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "R", "role": "target", "highlight": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 탑노트 멜로디 뱀프를 두 바퀴 돌아요. 코드는 최소로, 초록 탑 라인이 노래하게 둬요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 다시 들어요. 한 달 전 코어 그립만 잡던 소리와 오늘의 탑노트 멜로디 뱀프, 얼마나 노래처럼 자랐는지 비교해요.

**오늘의 완료 기준:** 탑노트 멜로디 뱀프(Dm9·G13 + 초록 탑 라인)를 BPM 72로 끊김 없이 반복하고, 코드 위로 걸어가는 멜로디를 들려줄 수 있다. (M1 졸업!)

## ④ 팁 / 흔한 실수

**탑노트 멜로디 뱀프**를 굴릴 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w4.d4.top_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Top-note melody map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 5, "label": "Dm9 5", "role": "target", "highlight": true },
    { "string": 1, "fret": 8, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 10, "label": "R", "role": "target", "highlight": true },
    { "string": 1, "fret": 7, "label": "G13 3", "role": "target", "highlight": true }
  ]}
}
```
▶ 1번 줄 5·10·7프렛(초록)이 탑 라인의 착지, 8프렛은 그 사이를 잇는 경과음이에요.

- **코드에 힘이 다 실려요.** 코드는 배경이에요. 1번 줄 탑노트를 조금 더 또렷이 울려 노래를 앞세워요.
- **탑노트를 옮기다 코드가 끊겨요.** 코드 손가락은 눌러 둔 채, 1번 줄 짚는 손가락만 걸어가요.
- **박이 밀려요.** 코드를 1박에 짧게 깔고 곧바로 탑노트로 넘어가면 뒤가 안 밀려요.
- **속도부터 올려요.** M1의 결실은 노래하는 흐름이에요. BPM 65로 낮춰 탑 라인부터 또렷이 만들어요.
