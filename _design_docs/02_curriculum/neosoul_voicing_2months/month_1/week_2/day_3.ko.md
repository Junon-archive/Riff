---
title: "sus4의 긴장 → 3도의 해결"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — sus4의 긴장, 3도로 녹는 해결

## ① 이론/설명

오늘은 이번 주의 하이라이트예요. **sus4**는 코드의 **3도를 4도로 잠깐 미룬** 소리예요. <mark>3도가 있어야 할 자리를 4도가 대신 차지하면, 살짝 붕 뜬 긴장이 생겨요.</mark> 그리고 그 **4도가 반음 아래 3도로 내려앉는 순간**, 네오소울 특유의 녹는 해결이 피어나요. 긴장과 해결, 이 둘이 한 몸으로 붙어 있는 게 sus의 매력이에요.

우리 뱀프의 G코드로 볼게요. **G13sus4**의 4도는 **C(3번 줄 5프렛)**, G13의 3도는 **B(3번 줄 4프렛)**예요. <mark>딱 한 손가락이 3번 줄에서 5프렛 → 4프렛으로 반음 미끄러지면, 긴장이 스르륵 풀려요.</mark> 4도(C)에서 3도(B)로 — 이 한 칸의 움직임이 오늘의 전부예요.

포인트는 **서두르지 않는 것**이에요. sus4의 붕 뜬 긴장을 충분히 들려주고 나서, 천천히 3도로 내려앉아요. <mark>긴장을 먼저 맛보게 한 뒤에 풀어 줘야 해결이 더 달게 들려요.</mark> 먼저 **G13sus4** 그립으로 긴장의 손모양부터 잡아 볼게요.

```json
{
  "id": "m1.w2.d3.g13sus4_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13sus4 grip — 4th (C) on string 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "4", "role": "color" },
    { "string": 2, "fret": 5, "finger": 3, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13sus4** — 3번 줄 5프렛이 **4도(C)**예요. 3도 자리를 4도가 대신 차지한 긴장의 소리예요.

## ② 시각 자료

이제 그 긴장을 풀어 줄 **G13**이에요. 3번 줄 손가락만 **5프렛 → 4프렛**으로 반음 내려오면 **3도(B)**에 도착해요. <mark>나머지 손가락은 그대로 두고, 딱 하나만 움직여요.</mark>

```json
{
  "id": "m1.w2.d3.g13_resolve",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 — 3rd (B) resolved", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13** — 3번 줄이 4프렛 **3도(B)**로 내려앉았어요. 긴장이 풀린 소리예요.

이제 두 코드를 한 마디 안에서 이어 봐요. 앞 2박은 **G13sus4**, 뒤 2박은 **G13**이에요. <mark>4도에서 3도로 녹아내리는 그 한순간이 오늘의 결과물이에요.</mark>

```json
{
  "id": "m1.w2.d3.sus_resolve",
  "type": "tab",
  "meta": { "title": "G13sus4 -> G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72.** 앞 2박 G13sus4(4도 C), 뒤 2박 G13(3도 B). 3번 줄 한 칸이 녹아내려요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 3번 줄만 5프렛 ↔ 4프렛으로 왔다 갔다 하며 손을 데워요. <mark>한 손가락의 반음 이동을 몸에 익혀요.</mark>

**10~20분 · 두뇌 훈련 (긴장 → 해결 그리기)**
소리 없이 왼손만으로 G13sus4 → G13을 오가요. **나머지 세 손가락은 붙박이**, 3번 줄만 움직이는지 눈으로 확인해요.

**20~40분 · 실전 뱀프 (BPM 72)**
아래 네 마디를 반복해요. 2·4마디에서 sus4를 먼저 들려주고 3도로 녹여요. <mark>긴장을 충분히 맛본 뒤 풀리는 그 달콤함</mark>을 귀로 좇아요.

```json
{
  "id": "m1.w2.d3.sus_vamp_drill",
  "type": "tab",
  "meta": { "title": "Dm9 - G13sus -> G13 vamp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72.** Dm9 → (G13sus4 → G13) 두 번. sus4를 먼저 들려주고 3도로 녹여요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 다시 들어요. sus4의 긴장과 3도의 해결이 또렷이 들리는지 확인해요.

**오늘의 완료 기준:** G13sus4의 긴장을 들려준 뒤 3도(B)로 반음 내려앉는 해결을 매끄럽게 연주할 수 있다.

## ④ 팁 / 흔한 실수

**sus 해결**에서 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w2.d3.melt_move",
  "type": "fretboard_diagram",
  "meta": { "title": "The melt — string 3 fret 5 to fret 4", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "label": "4 (sus)", "role": "color" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ 3번 줄 **5프렛(4도) → 4프렛(3도)**. 한 손가락이 반음 내려앉으며 녹아요.

- **해결이 안 들려요.** sus4를 너무 짧게 치면 긴장이 안 쌓여요. 앞 2박을 충분히 울려요.
- **다른 손가락이 같이 움직여요.** 3번 줄 하나만 움직여야 해요. 나머지는 앵커처럼 눌러 둬요.
- **3도를 지나쳐요.** 4프렛에서 딱 멈춰요. 3프렛까지 내려가면 소리가 흐려져요.
- **너무 빨라요.** BPM 60으로 낮춰 녹아내리는 느낌부터 찾아요.
