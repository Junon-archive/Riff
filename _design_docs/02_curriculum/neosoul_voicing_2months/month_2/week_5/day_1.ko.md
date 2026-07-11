---
title: "b3→3 스미어의 첫걸음 — 반음 하나로 번지게 하기"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — b3→3 스미어의 첫걸음

## ① 이론/설명

오늘부터 **2개월차**예요. 지난달엔 코드를 잡는 법을 익혔다면, 이번 주부터는 코드를 어루만지는 법을 배워요. 그 첫 도구가 **스미어(smear)** 예요. <mark>스미어는 **b3**에서 **3**으로 반음을 밀어 올려, 소리를 물감처럼 번지게 하는 장식이에요.</mark>

D 마이너에서 **b3**는 **F**(4번 줄 **3프렛**), **3**은 **F#**(4번 줄 **4프렛**)이에요. F를 친 뒤 옆 손가락으로 F#을 때려 소리 내는 게 **해머온(hammer-on)** 이에요. <mark>피크로 두 번 치지 않고 **한 번의 피킹**으로 반음이 스르륵 올라가는 게 스미어의 핵심이에요.</mark>

오늘은 딱 하나만 목표로 해요 — **스미어 한 번**을 또렷이 내는 거예요. **BPM 72**로 천천히, **b3→3**이 매끄럽게 번지는지 귀로 확인해요. <mark>속도는 전혀 중요하지 않아요. 반음 하나가 깨끗하게 이어지면 오늘은 성공이에요.</mark> 먼저 손이 놓일 자리를 눈에 익혀요.

```json
{
  "id": "m2.w5.d1.smear_shape",
  "type": "fretboard_diagram",
  "meta": { "title": "b3-to-3 smear position", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **4번 줄 3프렛(b3=F)** 과 **4프렛(3=F#)**, 그리고 옆 3번 줄 2프렛(5=A)이에요. 초록 점이 스미어가 착지하는 **3도**예요.

## ② 시각 자료

이제 실제 소리로 들어봐요. **b3(F)**를 피크로 한 번 치고, 곧바로 **해머온**으로 **3(F#)**을 울린 뒤 **5도(A)**로 흘러 쉬어요. <mark>피킹은 처음 한 번뿐, 나머지는 왼손이 만들어요.</mark>

```json
{
  "id": "m2.w5.d1.smear_single",
  "type": "tab",
  "meta": { "title": "b3-to-3 single smear", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 72.** b3를 치고 **3도**로 **해머온** — 반음이 번져요. 그다음 **5도**로 흘러 마디를 마무리해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 4번 줄 **3프렛→4프렛**만 반복해요. 왼손 손가락 두 개로 **F→F#**을 천천히 눌러요. <mark>해머온 없이 두 음을 하나씩 짚어 소리부터 확인해요.</mark>

**10~20분 · 두뇌 훈련 (해머 스미어 느리게)**
이제 **한 번의 피킹**으로 **b3→3** 해머온을 만들어요. 소리가 끊기면 왼손 힘이 부족한 거예요. 손가락 끝으로 프렛 **바로 뒤**를 때려요.

**20~40분 · 실전 스미어 (BPM 72)**
아래 두 마디를 반복해요. 매 마디 **스미어 한 번**과 **5도** 착지, 그리고 한 박 쉼이에요. <mark>쉬는 한 박 동안 다음 스미어를 준비하면 흐름이 끊기지 않아요.</mark>

```json
{
  "id": "m2.w5.d1.smear_single_loop",
  "type": "tab",
  "meta": { "title": "Single smear loop x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 스미어 한 번 → **5도** → 한 박 쉼을 두 바퀴 돌아요. 쉼표에서 숨을 고르고 다시 번지게 해요.

**40~50분 · 녹음/셀프 피드백 (권장)**
스미어를 10번 녹음해 다시 들어요. **F#**이 또렷이 살아나는 스미어가 몇 번인지 세어봐요.

**오늘의 완료 기준:** BPM 72에서 b3→3 해머온 스미어를 한 번, 소리 끊김 없이 또렷하게 낼 수 있다.

## ④ 팁 / 흔한 실수

스미어를 처음 만들 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w5.d1.smear_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Smear landing map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 2, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 4, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 4번 줄 3프렛(b3)에서 4프렛(초록 3도)으로. 이 반음 하나가 오늘의 전부예요.

- **해머온 소리가 작아요.** 손가락을 프렛 바로 뒤에 정확히, 그리고 조금 더 단단하게 때려요.
- **두 번 피킹해요.** 스미어는 피킹 한 번이에요. 오른손은 첫 음만 치고 멈춰요.
- **F#이 흐려요.** 첫 손가락(F)을 떼지 말고 눌러 둔 채 둘째 손가락으로 때려야 음이 살아요.
- **속도부터 올려요.** BPM 60으로 낮춰 반음이 깨끗이 이어지는 소리부터 만들어요.
