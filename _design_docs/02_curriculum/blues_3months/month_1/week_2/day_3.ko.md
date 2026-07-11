---
title: "12마디 블루스 폼 — 한 바퀴 돌기"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 12마디 폼을 퀵체인지까지 순회한다

## ① 이론/설명

오늘은 드디어 블루스의 무대, **12마디 폼**을 한 바퀴 돌아요. 12마디 블루스는 <mark>세 코드가 정해진 자리에서 도는 놀이터 지도</mark>예요. 자리만 외우면 어떤 블루스든 따라갈 수 있어요. 처음엔 마디가 많아 보여도, 실은 네 마디짜리 세 줄이 전부예요. 노래 한 곡을 통째로 외우는 게 아니라 짧은 지도 한 장을 외우는 거라 생각하면 마음이 한결 가벼워져요. A 블루스의 지도는 이렇게 생겼어요.

```
| A7 | D7 | A7 | A7 |
| D7 | D7 | A7 | A7 |
| E7 | D7 | A7 | E7 |
```

한 줄이 네 마디, 세 줄이면 **12마디**예요. 1~4마디는 집(A7) 주변, 5~8마디는 IV도(D7)를 다녀오고, 9~12마디는 V도(E7)에서 가장 팽팽해졌다 집으로 돌아와요. 이 마지막 네 마디를 **턴어라운드**라고 해요. 턴어라운드는 한 바퀴를 마무리하면서 다음 바퀴의 문을 여는 자리라, 블루스에서 가장 드라마틱한 네 마디예요.

오늘의 진짜 포인트는 **퀵체인지**예요. <mark>1마디 A7 다음, 2마디에서 곧바로 D7으로 한 번 다녀와요.</mark> 이게 없으면 1~4마디가 A7만 넉 마디인데, 퀵체인지를 넣으면 훨씬 블루스다운 맛이 나요. 2마디만 **D7**으로 바뀐다는 것, 이것만 기억하면 돼요. 나머지 자리는 이미 익숙한 A7과 D7, E7의 반복이니 새로 외울 게 거의 없어요.

세 코드의 루트 자리를 한 판에 모아 봤어요.

```json
{
  "id": "m1.w2.d3.roots_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Three roots of A blues — A, D, E", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **6번=E, 5번=A, 4번=D.** 세 개방현이 각각 E7·A7·D7의 루트예요.

## ② 시각 자료

이제 12마디를 루트만으로 한 바퀴 돌아 볼게요. 각 마디의 루트를 온음표로 짚으면 지도가 손에 들어와요. **퀵체인지**(2마디 D7)도 그대로 들어 있어요.

```json
{
  "id": "m1.w2.d3.twelve_bar_map",
  "type": "tab",
  "meta": { "title": "12-bar blues in A — root map (quick change)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 2, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 3, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 4, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 5, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 6, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 7, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 8, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 9, "notes": [ { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "E7" } ]},
    { "measure": 10, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 11, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 12, "notes": [ { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "E7" } ]}
  ]}
}
```
▶ **한 마디에 루트 하나씩, BPM 80.** 코드 심볼을 눈으로 따라가며 루트 줄(5·4·6번)을 정확히 짚어요. <mark>9마디에서 처음으로 E7이 등장해요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. 세 코드의 루트만 5→4→6번 줄로 오가며 손을 풀어요. <mark>줄을 건너뛸 때 루트를 놓치지 않는지</mark> 봐요.

가장 어려운 **턴어라운드**(9~12마디)만 따로 떼어 연습해요. E7→D7→A7→E7이에요.

```json
{
  "id": "m1.w2.d3.turnaround",
  "type": "tab",
  "meta": { "title": "Turnaround bars 9-12 — E7 D7 A7 E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 9, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]},
    { "measure": 10, "notes": [
      { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "D7", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 11, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 12, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]}
  ]}
}
```
▶ **BPM 80.** 9마디 E7 → 10마디 D7 → 11마디 A7 → 12마디 E7. 한 마디에 한 번씩 아래로 그어요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 퀵체인지)**
1마디 A7 다음 **2마디는 D7**이라고 미리 외워요. 입으로 "A-D-A-A"를 세어요.

**20~40분 · 실전 12마디 순회 (BPM 80)**
12마디를 루트만으로 <mark>끊김 없이</mark> 한 바퀴 돌아요. <mark>마디 수를 놓치지 않는지</mark> 발로 세며 봐요.

**40~50분 · 녹음/셀프 피드백 (권장)**
12마디 한 바퀴를 녹음: <mark>퀵체인지와 턴어라운드가 제자리에 들어갔는가</mark>.

**오늘의 완료 기준:** 퀵체인지를 포함한 12마디 폼을 루트만으로 끊김 없이 한 바퀴 순회할 수 있다.

## ④ 팁 / 흔한 실수

12마디를 돌 때 자주 걸리는 부분이에요.

```json
{
  "id": "m1.w2.d3.quick_change",
  "type": "fretboard_diagram",
  "meta": { "title": "Quick change — bar 2 is D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 1, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ **2마디는 A7이 아니라 D7.** 퀵체인지를 빼먹고 A7을 넉 마디 치는 실수가 가장 많아요.

- **마디 수를 잃어버려요.** 발로 4박을 세며 마디를 세요. 네 마디마다 한 줄이 끝나요.
- **9마디 E7을 놓쳐요.** V도는 딱 한 번, 9마디에서 처음 나와요. 미리 6번 줄 루트를 준비해요.
- **11마디에서 못 돌아와요.** 턴어라운드 끝은 다시 A7으로 돌아와야 자연스러워요.
- **속도를 서둘러요.** 12마디는 느려도 한 바퀴가 중요해요. BPM을 낮춰도 좋아요.
