---
title: "턴어라운드 — 12마디를 매듭짓는 마지막 네 마디"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — V-IV-I-V로 곡을 다시 처음으로 되돌린다

## ① 이론/설명

드디어 4주차, **M1의 마지막 주**예요. 오늘부터 배우는 건 **턴어라운드(turnaround)** — 12마디의 <mark>마지막 네 마디가 곡을 다시 처음으로 되돌리는 매듭</mark>이에요. 지금까지 A7·D7·E7 부기를 하나씩 익혀 왔죠. 그 조각들이 오늘 하나의 고리로 이어져요. 턴어라운드가 있어야 12마디가 끊기지 않고 계속 돌아가요.

턴어라운드의 정체는 **V-IV-I-V**예요. A 블루스에서 V는 E7, IV는 D7, I는 A7이라, 마지막 네 마디가 **E7 → D7 → A7 → E7**로 흘러가요. 앞의 세 코드가 집으로 돌아왔다가, <mark>마지막 E7이 다시 문을 열어 다음 바퀴로 이어줘요.</mark> 이 마지막 한 코드가 곡을 끝내지 않고 '한 번 더!' 하고 손짓하는 자리예요.

연주법은 이미 손에 있어요. 새 손모양은 하나도 없어요. 1·2주차에서 익힌 **부기 리프**를 코드마다 루트 줄만 옮겨 얹으면 그게 바로 턴어라운드예요. <mark>E7은 6번 줄, D7은 4번 줄, A7은 5번 줄이 루트</mark>라는 것만 기억하면 돼요. 오늘은 속도를 욕심내지 말고, 네 마디가 **매끄럽게 이어지는 것**만 목표로 해요. **4주 전**엔 코드 하나 잡기도 벅찼는데, 이제 네 코드를 한 흐름으로 엮고 있어요.

먼저 코드만으로 이 흐름을 들어볼게요. 한 마디에 한 코드씩, 온음표로 짚어요.

```json
{
  "id": "m1.w4.d1.v_iv_i_v",
  "type": "tab",
  "meta": { "title": "Turnaround chords V-IV-I-V", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "D7", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 한 마디에 한 코드씩 **E7 → D7 → A7 → E7**을 온음표로 울려요. 마지막 E7이 다시 처음으로 당기는 느낌을 들어요.

## ② 시각 자료

이번엔 그 네 마디를 **부기 리프**로 걸어볼게요. <mark>코드만 바뀔 뿐, 걸어가는 손모양은 늘 똑같아요.</mark>

```json
{
  "id": "m1.w4.d1.turnaround_boogie",
  "type": "tab",
  "meta": { "title": "Turnaround boogie E7-D7-A7-E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** E7(6번 줄)-D7(4번 줄)-A7(5번 줄)-E7. 같은 **부기 손모양**이 코드마다 자리만 옮겨요.

천천히 시작해서, <mark>코드가 바뀌는 순간에도 셔플이 흔들리지 않는지</mark> 발로 확인해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. **E7 부기** 한 마디로 손을 데워요. <mark>롱-숏 셔플이 살아있는지</mark> 발로 확인해요.

```json
{
  "id": "m1.w4.d1.warmup",
  "type": "tab",
  "meta": { "title": "E7 boogie warmup — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 65, 셔플.** E7 부기 한 마디. 6번 줄 루트 위에서 5도→6도→b7→6도로 걸어요.

이제 집(A7)에서 다시 문을 여는 V(E7)로 넘어가는 두 마디를 이어 봐요.

```json
{
  "id": "m1.w4.d1.i_to_v",
  "type": "tab",
  "meta": { "title": "A7 to E7 — I pulls to V", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1마디 **A7**, 2마디 **E7**. I에서 V로 넘어가며 다음 바퀴로 당기는 힘을 느껴요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 턴어라운드 순서)**
머릿속으로 **E7 → D7 → A7 → E7** 순서를 소리 내어 외워요. <mark>루트 줄이 6→4→5→6으로 움직이는 그림</mark>을 그려요.

**20~40분 · 실전 턴어라운드 (BPM 80)**
네 마디 턴어라운드를 <mark>끊김 없이</mark> 반복해요. <mark>마지막 E7이 다음 마디로 당기는지</mark> 들어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
턴어라운드 네 마디를 녹음해요: <mark>코드가 바뀌어도 셔플이 살아 있는가</mark>.

**오늘의 완료 기준:** 턴어라운드 네 마디(E7-D7-A7-E7)를 셔플로 끊김 없이 통과할 수 있다.

## ④ 팁 / 흔한 실수

턴어라운드에서 자주 나오는 실수예요. 마지막 **E7**을 빠뜨리면 곡이 다음 바퀴로 이어지지 않아요.

```json
{
  "id": "m1.w4.d1.e7_home",
  "type": "fretboard_diagram",
  "meta": { "title": "E7 — the V that turns it around", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 1, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **마지막 E7이 매듭이에요.** 이 V 코드가 곡을 처음으로 되돌려요. 6번 줄 개방 E가 루트예요.

- **D7과 A7 순서가 헷갈려요.** IV(D7) 다음 I(A7)예요. V-IV-I-V 순서를 입으로 외워요.
- **마지막 E7을 A7으로 끝내요.** 아직 곡이 안 끝났어요. 다음 바퀴가 있으니 E7으로 열어 둬요.
- **코드 전환이 늦어요.** 다음 코드 루트 줄을 한 박 먼저 떠올려요.
- **셔플이 펴져요.** 코드 바꾸기에 신경 쓰다 롱-숏이 균등해져요. 발로 정박을 계속 밟아요.
