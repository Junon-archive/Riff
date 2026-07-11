---
title: "11도와 13도 — 텐션의 지붕"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 11도와 13도: 텐션의 지붕

## ① 이론/설명

어제는 9도로 물들였어요. 오늘은 더 높이 올라가 **11도**와 **13도**를 만나요. 9·11·13은 코드 위에 쌓는 **텐션의 지붕**이에요. <mark>같은 코드라도 지붕에 어떤 텐션을 얹느냐로 색이 완전히 달라져요.</mark> **11도**는 4도를 한 옥타브 올린 음, **13도**는 6도를 한 옥타브 올린 음이에요. Dm에서 **11도는 G**, G코드에서 **13도는 E**예요.

오늘의 주인공은 **13도**예요. 지난주 손에 익힌 **G13**의 지붕에 이미 13도(E)가 얹혀 있었어요. <mark>밋밋한 G7에 13도 하나만 올리면, 따뜻하고 트인 소리로 확 펴져요.</mark> 그래서 오늘은 **G7 → G13**을 나란히 울리며, 13도가 더해질 때 소리가 어떻게 넓어지는지 귀로 잡아요.

**11도**는 Dm 쪽에서 살짝 맛만 봐요. **Dm11**은 Dm9의 지붕을 11도(G)로 바꾼 소리로, 조금 더 넓고 개방적인 색을 줘요. 오늘은 욕심내지 말고, <mark>13도의 트인 색을 또렷이 구분하는 것</mark>에 집중해요. 먼저 **Dm11** 그립으로 11도의 위치부터 눈에 새겨 볼게요.

```json
{
  "id": "m1.w2.d2.dm11_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm11 grip — 11th on top", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 3, "finger": 2, "label": "11", "role": "color" }
  ]}
}
```
▶ **Dm11** — 지붕에 **11도(G)**를 얹었어요. 1번 줄 3프렛, 4도를 옥타브 올린 음이에요.

## ② 시각 자료

이제 오늘의 주인공 **G13**을 다시 봐요. 지붕에 얹힌 **13도(E)**가 이 코드의 트인 색을 만들어요. <mark>2번 줄 5프렛 하나가 G코드를 활짝 열어 줘요.</mark>

```json
{
  "id": "m1.w2.d2.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip — 13th on top", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **G13** — R·b7·3에 **13도(E)**를 지붕으로 얹은 소리예요.

13도의 색을 확실히 느끼려면, 13도가 없는 **G7**과 나란히 들어 보는 게 최고예요. <mark>2마디에서 13도가 들어오는 순간, 소리가 한 뼘 넓어지는 게 들려요.</mark>

```json
{
  "id": "m1.w2.d2.g7_vs_g13",
  "type": "tab",
  "meta": { "title": "G7 - G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G7", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72.** 1마디 G7, 2마디에 **13도(E)**를 지붕으로 얹어 G13. 소리가 트이는 순간을 들어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. G7과 G13을 번갈아 잡으며 손을 데워요. <mark>2번 줄 5프렛(13도)을 넣었다 뺐다 해 봐요.</mark>

**10~20분 · 두뇌 훈련 (13도 색 구분)**
소리 없이 왼손만으로 G7 → G13을 오가요. **13도(2번 줄)**가 얹힐 때 손모양이 어떻게 넓어지는지 눈으로 확인해요.

**20~40분 · 실전 뱀프 (BPM 72)**
아래 네 마디를 반복해요. 2마디는 밋밋한 G7, 4마디는 텐션이 얹힌 G13이에요. <mark>같은 자리에서 13도 하나로 색이 확 트이는 순간</mark>을 귀로 좇아요.

```json
{
  "id": "m1.w2.d2.thirteenth_drill",
  "type": "tab",
  "meta": { "title": "G7 vs G13 in the vamp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G7", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72.** Dm9 → G7 → Dm9 → G13. 마지막 마디에서 **13도**의 트인 색이 피어나요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 다시 들어요. G7과 G13이 서로 다른 넓이로 들리는지 확인해요.

**오늘의 완료 기준:** G7과 G13을 번갈아 울리며 13도가 만드는 트인 색을 귀로 구분할 수 있다.

## ④ 팁 / 흔한 실수

**13도**를 다룰 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w2.d2.thirteenth_spot",
  "type": "fretboard_diagram",
  "meta": { "title": "The 13th (E) — string 2 fret 5 on G", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" }
  ]}
}
```
▶ **13도(E)**는 2번 줄 5프렛. 루트에서 6도를 한 옥타브 올린 음이에요.

- **13도가 묻혀요.** 2번 줄 5프렛이 또렷이 울려야 트인 색이 나요.
- **11도와 13도가 헷갈려요.** 11 = 4도 자리(1번 줄 3프렛), 13 = 6도 자리(2번 줄 5프렛)로 위치를 나눠서 외워요.
- **G7과 G13이 똑같이 들려요.** BPM을 55로 낮추고 한 코드씩 길게 울려요.
- **손이 뻐근해요.** 2번 줄 새끼손가락에 힘이 몰리면 손목을 조금 내려요.
