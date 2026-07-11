---
title: "Ab13 그립 — 반음 위 접근 코드"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — Ab13 그립 만들기

## ① 이론/설명

이번 주는 <mark>목표 코드로 딱 잡는 대신, 반음 위에서 미끄러져 들어가는 네오소울의 시그니처</mark>를 배워요. 지난주 뱀프의 착지점 **G13** 바로 **반음 위**에 살짝 얹었다가 밀어내리는 코드, 그게 **Ab13**이에요. 오늘은 그 접근 코드의 손모양부터 손에 얹어 볼게요.

좋은 소식은 **Ab13**이 새 그립이 아니라는 거예요. 지난주 익힌 **G13 폼을 그대로 한 프렛 위로** 밀면 바로 **Ab13**이 돼요. <mark>손모양은 똑같고, 위치만 반음 올라간 거예요.</mark> 6번 줄 루트가 **3프렛(G)** 에서 **4프렛(Ab)** 으로, 나머지 음도 전부 **+1프렛**씩 따라 올라가요.

먼저 익숙한 **G13** 폼부터 다시 확인할게요. 6번 줄 **3프렛**이 루트 G, 4번 줄이 b7, 3번 줄이 3도, 2번 줄이 **13도**예요. <mark>이 네 음의 모양을 눈에 확실히 담아 두면, 한 프렛 밀기만 하면 되니까요.</mark>

```json
{
  "id": "m1.w3.d1.g13_base",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 base grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **익숙한 G13.** 6번 줄 3프렛 루트에서 4·3·2번 줄로 b7·3도·13도가 쌓여요.

## ② 시각 자료

이제 이 폼을 통째로 **한 프렛 위로** 밀어 볼게요. 6번 줄 **4프렛(Ab)** 이 새 루트가 되고, b7·3도·13도가 전부 한 칸씩 올라가요. <mark>손가락 사이 간격은 하나도 안 바뀌고, 그냥 손 전체가 반음 위로 이사한 느낌이에요.</mark>

```json
{
  "id": "m1.w3.d1.ab13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — G13 form +1 fret", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Ab13 그립.** G13에서 손 모양 그대로, 6번 줄이 4프렛으로 올라간 자리예요.

소리로도 확인해 볼게요. **Ab13**을 온음표로 길게 울려 보면, G13보다 반음 높은 **살짝 붕 뜬 긴장감**이 느껴져요. <mark>이 붕 뜬 느낌이 바로 다음 날 미끄러져 내려갈 힘이 돼요.</mark>

```json
{
  "id": "m1.w3.d1.ab13_hold",
  "type": "tab",
  "meta": { "title": "Ab13 — hold", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Ab13을 한 마디 길게 울려요. 반음 위의 붕 뜬 색을 귀에 담아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 65.** **G13**과 **Ab13**을 번갈아 잡으며 손을 데워요. <mark>한 프렛 위아래로만 옮기면 되니까 어렵지 않아요.</mark>

**10~20분 · 두뇌 훈련 (한 프렛 이사)**
소리 없이 왼손만으로 **G13 → Ab13** 이동을 그려요. 손 전체가 반음 위로 통째로 움직이는 감각만 확인해요.

**20~40분 · 실전 그립 체크 (BPM 75)**
아래 두 마디를 반복해요. 1마디 **Ab13**, 2마디 **G13**을 각각 온음표로 길게 울리며 <mark>두 그립을 매끄럽게 오가는 것</mark>만 연습해요.

```json
{
  "id": "m1.w3.d1.ab13_g13_loop",
  "type": "tab",
  "meta": { "title": "Ab13 to G13 — grip check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** Ab13 → G13을 한 마디씩 길게 울려요. 두 그립의 손모양 차이를 몸에 새겨요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 들어요. Ab13과 G13의 높이 차이가 귀에 또렷이 구분되는지 확인해요.

**오늘의 완료 기준:** G13 폼을 한 프렛 위로 밀어 **Ab13** 그립을 정확히 잡고, 온음표로 깨끗하게 울릴 수 있다.

## ④ 팁 / 흔한 실수

**Ab13** 그립을 만들 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w3.d1.shift_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Half-step map — Ab13 vs G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "label": "Ab R", "role": "root" },
    { "string": 6, "fret": 3, "label": "G R", "role": "root" },
    { "string": 3, "fret": 5, "label": "Ab 3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "G 3", "role": "chord_tone" }
  ]}
}
```
▶ 6번 줄 4→3프렛이 Ab→G 루트, 3번 줄 5→4프렛이 각 코드의 3도예요.

- **소리가 뭉개져요.** 5번 줄과 1번 줄은 뮤트예요. 안 울리게 살짝 덮어 두세요.
- **한 프렛을 덜 올려요.** G13 그대로면 안 돼요. 네 음 전부 정확히 **+1프렛**이에요.
- **손목이 뻐근해요.** 4프렛으로 올라가면 손이 살짝 조여요. 엄지를 목 뒤 가운데로 내려 힘을 빼요.
- **13도가 안 눌려요.** 2번 줄 6프렛은 새끼손가락이에요. 끝으로 콕 짚어 옆 줄을 안 건드리게 해요.
