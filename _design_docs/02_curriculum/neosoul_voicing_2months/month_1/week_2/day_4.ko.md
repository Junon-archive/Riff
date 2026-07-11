---
title: "완성! 텐션 뱀프 — Dm9 → G13sus → G13"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 완성! 텐션 버전 뱀프

## ① 이론/설명

2주차의 무대예요. 지난주 밋밋한 **Dm9 → G13** 뱀프를, 이번 주 내내 익힌 **텐션**과 **sus 해결**로 물들여 완성해요. <mark>같은 두 마디인데, 텐션 하나로 색이 확 달라지는 걸 오늘 손으로 확인해요.</mark> 1마디는 **Dm9**(9도의 몽글한 색), 2마디는 **G13sus4 → G13**(sus의 긴장이 3도로 녹는 해결)이에요.

핵심은 2마디의 움직임이에요. 앞 2박에 **G13sus4**(4도=C)로 살짝 붕 뜬 긴장을 들려주고, 뒤 2박에 **G13**(3도=B)으로 반음 내려앉아요. <mark>3번 줄 한 손가락이 5프렛에서 4프렛으로 미끄러지는 그 순간이 이 뱀프의 심장이에요.</mark> 이번 주 배운 9도·13도·sus 해결이 이 두 마디에 다 담겨 있어요.

오늘은 속도보다 **색과 해결**이에요. **BPM 75**로 부드럽게 굴리되, sus의 긴장을 충분히 들려주고 나서 3도로 녹여요. <mark>텐션 뱀프가 끊김 없이 동그랗게 굴러가면 2주차는 완성이에요.</mark> 먼저 1마디 **Dm9** 그립부터 손에 얹어 볼게요.

```json
{
  "id": "m1.w2.d4.dm9_recap",
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
▶ **1마디는 Dm9.** 5번 줄 5프렛 루트, 2번 줄의 **9도(E)**가 몽글한 색을 내요.

## ② 시각 자료

2마디는 **G13sus4**로 시작해요. 3번 줄 5프렛(**4도=C**)이 긴장을 만들고, 곧 4프렛(**3도=B**)으로 녹아내려요. <mark>이 한 그립 안에 이번 주의 긴장과 해결이 모두 들어 있어요.</mark>

```json
{
  "id": "m1.w2.d4.g13sus4_recap",
  "type": "fretboard_diagram",
  "meta": { "title": "G13sus4 grip — bar 2 start", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **2마디 시작은 G13sus4.** 3번 줄 5프렛(4도)에서 곧 4프렛(3도)으로 내려앉아요.

이제 두 마디를 하나로 이은 **완성된 텐션 뱀프**예요. 이번 주의 결과물이 아래에 다 담겨 있어요. <mark>1마디의 9도 색, 2마디의 sus 해결이 한 흐름으로 이어져요.</mark>

```json
{
  "id": "m1.w2.d4.tension_vamp",
  "type": "tab",
  "meta": { "title": "Dm9 - G13sus - G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75.** 2마디에서 **G13sus4**(3번줄 5프렛 = 4도 C)를 먼저 치고, **3도(3번줄 4프렛 = B)로 반음 내려앉으면** 네오소울 특유의 녹는 해결이 나요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. Dm9와 G13sus4 → G13을 번갈아 잡으며 손을 데워요. <mark>3번 줄 한 손가락의 반음 이동을 다시 불러와요.</mark>

**10~20분 · 두뇌 훈련 (텐션 색 구분)**
소리 없이 왼손만으로 뱀프를 그려요. 1마디 9도, 2마디 sus4 → 3도의 자리를 눈으로 확인해요.

**20~40분 · 실전 텐션 뱀프 (BPM 75)**
아래 네 마디를 **끊김 없이** 반복해요. <mark>sus의 긴장과 3도의 해결이 매 바퀴 또렷이 들리는지</mark>만 봐요.

```json
{
  "id": "m1.w2.d4.tension_vamp_loop",
  "type": "tab",
  "meta": { "title": "Tension vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
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
▶ **BPM 75.** 텐션 뱀프를 두 바퀴 돌아요. 매 2마디마다 sus4 → 3도의 해결을 놓치지 말아요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 다시 들어요. 밋밋한 지난주 뱀프와 오늘의 텐션 뱀프, 색이 얼마나 달라졌는지 비교해요.

**오늘의 완료 기준:** 텐션 뱀프(Dm9 → G13sus4 → G13)를 BPM 75로 끊김 없이 반복하고, sus4 → 3도의 해결을 또렷이 들려줄 수 있다. (2주차 완성!)

## ④ 팁 / 흔한 실수

**텐션 뱀프**를 굴릴 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w2.d4.color_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Tension map — 9 / sus4 / 13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "label": "9 / 13", "role": "color" },
    { "string": 3, "fret": 5, "label": "4 (sus)", "role": "color" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ 2번 줄 5프렛이 색(9·13), 3번 줄 5→4프렛이 sus4→3도 해결이에요.

- **해결이 밋밋해요.** sus4를 앞 2박에 충분히 울린 뒤 3도로 내려야 달게 들려요.
- **1마디와 2마디 색이 안 나뉘어요.** 9도(Dm9)와 13도·sus(G13) 자리를 따로 기억해요.
- **속도가 오르면 지저분해져요.** BPM을 65로 낮춰 깨끗함부터 되찾아요.
- **뱀프가 끊겨요.** 코드 사이 새끼손가락 앵커(2번 줄)를 유지하면 자연스럽게 이어져요.
