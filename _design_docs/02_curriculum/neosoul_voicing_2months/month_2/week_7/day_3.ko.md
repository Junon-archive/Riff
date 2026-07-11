---
title: "스윙16 느낌 — 끈적한 컴핑"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 스윙16 느낌 — 끈적한 컴핑

## ① 이론/설명

오늘은 레이백에 **스윙16 느낌**을 더해요. 16비트를 기계처럼 똑같이 나누지 않고, <mark>앞 16분음은 살짝 길게, 뒤 16분음은 살짝 짧게 — 이 **미세한 불균등**이 끈적함을 만들어요.</mark>

**스윙16**은 16분음 단위로 흔드는 거예요. 8비트 스윙보다 촘촘해서 컴핑이 **말랑말랑하고 끈끈하게** 굴러가요. <mark>정박에 딱딱 나누면 로봇 같고, 살짝 흔들면 사람 손 같은 그루브가 나요.</mark> 악보엔 여전히 정박으로 적고 **스윙16**이라고만 표시해요 — 흔드는 건 손이 해요.

오늘은 코드도 하나 늘려요. **Dm9 → G13** 뱀프예요. G13은 6번 줄 **3프렛(R=G)** 에 **b7(F)·3(B)·13(E)** 를 얹어요. <mark>Dm9의 어둑함과 G13의 화사함이 오가며 뱀프가 숨을 쉬어요.</mark> 먼저 **G13** 손 모양을 익혀요.

```json
{
  "id": "m2.w7.d3.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 comping grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" }
  ]}
}
```
▶ 6번 줄 3프렛(R)에 b7·3·13을 얹은 G13 컴핑 그립이에요.

## ② 시각 자료

이제 **Dm9 → G13 뱀프**를 스윙16으로 굴려요. 1마디는 Dm9, 2마디는 G13이에요. <mark>두 코드를 오가며 스윙16으로 흔들면 컴핑이 끈적하게 살아나요.</mark>

```json
{
  "id": "m2.w7.d3.vamp_groove",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 swung vamp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72, 스윙16.** 1마디 Dm9 → 2마디 G13. 두 코드를 오가며 스윙16으로 끈적하게 굴려요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 **Dm9**와 **G13**을 번갈아 잡아만 봐요. 손 모양이 매끄럽게 바뀌는지부터 확인해요. <mark>코드 전환이 걸리면 스윙은 저절로 무너져요.</mark>

**10~20분 · 두뇌 훈련 (스윙16 느끼기)**
16분음을 **길게-짧게** 흔들어요. 발로 정박을 밟으면서 그 사이를 살짝 불균등하게 채워요. 아래 끈적한 그리드로 손을 익혀요.

```json
{
  "id": "m2.w7.d3.sticky_practice",
  "type": "tab",
  "meta": { "title": "Sticky swung grid", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72, 스윙16.** 16분음을 길게-짧게 흔들어 컴핑을 끈적하게 굴려요.

**20~40분 · 실전 스윙 뱀프 (BPM 72)**
위 Dm9 → G13 뱀프를 스윙16으로 반복해요. <mark>두 코드를 오가면서도 스윙이 끊기지 않고 끈끈하게 흐르면 오늘의 목표에 닿은 거예요.</mark> 코드 전환에서 흔들림을 놓치지 말아요.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음해 들어요. 16분음이 로봇처럼 똑같은지, 살짝 흔들려 끈적한지 귀로 확인해요.

**오늘의 완료 기준:** BPM 72에서 Dm9 → G13 뱀프를 스윙16으로 굴려 끈적한 컴핑을 낼 수 있다.

## ④ 팁 / 흔한 실수

스윙16 컴핑에서 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w7.d3.vamp_check",
  "type": "tab",
  "meta": { "title": "Vamp change check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ Dm9와 G13을 한 마디씩 크게 잡아 두 코드의 손 이동을 느껴봐요.

- **16분음이 로봇 같아요.** 정박을 발로 밟으면서 그 사이를 살짝 길게-짧게 흔들어요.
- **코드 전환이 걸려요.** Dm9와 G13의 공통 자리(2·4번 줄)를 붙잡고 필요한 손가락만 옮겨요.
- **흔들다 템포가 무너져요.** 스윙은 자리만 바꾸는 거예요. 정박은 그대로 발로 지켜요.
- **너무 세게 흔들어요.** 불균등은 아주 살짝이에요. 과하면 어색해지니 BPM 60에서 조금씩 넣어요.
