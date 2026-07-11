---
title: "두 그립을 잇다 — Dm9 ↔ G13 전환"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — Dm9 ↔ G13, 매끄러운 전환

## ① 이론/설명

1주차의 절반을 넘었어요. 이제 두 그립을 하나의 흐름으로 이어요. <mark>네오소울 뱀프의 진짜 맛은 코드가 바뀌는 그 '이음새'에서 나와요.</mark> **Dm9 → G13**, 두 그립을 뚝뚝 끊어 잡으면 뱀프가 삐걱대지만, 부드럽게 이으면 물 흐르듯 번져요. 오늘은 손모양을 바꾸는 그 짧은 순간을 **매끄럽게** 다듬는 날이에요. 어제까지 두 코드를 따로 익혔으니, 오늘은 그 사이에 다리만 놓으면 돼요.

두 그립 사이에서 **무엇이 움직이고 무엇이 그대로인지** 먼저 알면 전환이 쉬워져요. <mark>2번 줄 5프렛(E)은 두 코드 모두 눌러요 — 새끼손가락은 그 자리에 붙박이로 두세요.</mark> 나머지 손가락만 옮기면 돼요. 루트는 5번 줄(**Dm9**)에서 6번 줄(**G13**)로 내려가고, 4번 줄은 3프렛 그대로, 3번 줄은 5프렛에서 4프렛으로 반 칸 당겨요.

오늘은 속도를 올리지 마세요. <mark>새끼손가락 앵커를 축으로, 나머지 세 손가락이 한 덩어리로 움직이는 감각</mark>만 익히면 돼요. 그럼 먼저 **Dm9** 그립을 다시 확인해 볼게요.

```json
{
  "id": "m1.w1.d3.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — x5355x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Dm9는 루트가 5번 줄이에요.** 2번 줄 5프렛(9)에 얹은 새끼손가락을 기억해 두세요.

## ② 시각 자료

이어서 **G13** 그립이에요. 아래 두 그림을 나란히 보면, **2번 줄 5프렛**만 빼고 손가락이 어떻게 옮겨 가는지 한눈에 들어와요. <mark>루트가 5번 줄에서 6번 줄로, 대각선으로 미끄러져요.</mark>

```json
{
  "id": "m1.w1.d3.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip — 3x345x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **G13은 루트가 6번 줄이에요.** 2번 줄 5프렛(13)의 새끼손가락은 그대로예요.

이제 두 코드를 번갈아 잡아 볼게요. 한 마디에 한 코드씩, **새끼손가락은 떼지 말고** 나머지만 옮겨요. <mark>코드가 바뀌기 직전에 다음 손모양을 미리 떠올려요.</mark>

```json
{
  "id": "m1.w1.d3.change_drill",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 change drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
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
▶ **BPM 65.** Dm9 → G13을 한 마디씩 번갈아요. 새끼손가락 앵커를 축으로 나머지만 스윽 옮겨요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 두 그립을 각각 한 번씩 잡아 손을 풀어요. <mark>새끼손가락(2번 줄 5프렛)이 두 코드에서 안 떨어지는지</mark> 확인해요.

**10~20분 · 두뇌 훈련 (전환 동선 느리게)**
코드를 바꾸기 전에 **무엇이 움직이는지** 소리 내어 말해요. "루트 5번→6번, 3번 줄 5프렛→4프렛, 새끼손가락 그대로."

**20~40분 · 실전 전환 (BPM 65)**
이번엔 한 마디에 두 번씩 울리며 전환을 촘촘히 연습해요. <mark>바뀔 때 소리가 끊기지 않는지</mark>만 봐요.

```json
{
  "id": "m1.w1.d3.change_half",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 twice-per-bar drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 65.** 한 마디에 같은 코드를 두 번씩. 두 번째 타에서 손이 미리 다음 코드로 갈 준비를 해요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 체크해요. <mark>Dm9와 G13 사이가 끊김 없이 이어지는가</mark>.

**오늘의 완료 기준:** Dm9 ↔ G13 두 그립을, 새끼손가락 앵커를 유지한 채 끊김 없이 바꿀 수 있다.

## ④ 팁 / 흔한 실수

**전환**에서 자주 나오는 실수만 짚을게요.

```json
{
  "id": "m1.w1.d3.anchor",
  "type": "fretboard_diagram",
  "meta": { "title": "Shared note anchor — string 2 fret 5 (E)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 4, "label": "E", "role": "color" }
  ]}
}
```
▶ **이 한 음(2번 줄 5프렛 E)이 전환의 축이에요.** 두 코드 내내 새끼손가락을 떼지 마세요.

- **바꿀 때 소리가 끊겨요.** 새끼손가락을 떼지 않으면 공백이 확 줄어요.
- **손 전체가 흔들려요.** 앵커를 축으로 나머지 세 손가락만 한 덩어리로 옮겨요.
- **3번 줄이 어긋나요.** 5프렛↔4프렛 반 칸 이동을 손끝으로만 미세하게 해요.
- **박자가 밀려요.** 다음 코드는 한 박 먼저 머릿속으로 잡아 둬요.
