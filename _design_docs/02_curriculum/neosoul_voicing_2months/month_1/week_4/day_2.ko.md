---
title: "탑노트 인식 — 코드에서 가장 높은 음을 찾기"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 탑노트 인식: 코드에서 가장 높은 음을 찾기

## ① 이론/설명

어제 공통음을 남기는 매끄러운 전환을 익혔어요. 오늘은 코드에서 **가장 높은 음, 탑노트**를 찾아요. <mark>탑노트는 코드 위에 얹힌 목소리예요 — 귀가 가장 먼저 듣고, 가장 오래 기억하는 음이죠.</mark> 코드는 배경이 되고, **탑노트**가 노래를 이끌어요.

두 코드의 탑노트 자리는 정해져 있어요. **Dm9**의 탑노트는 1번 줄 **5프렛(A, 5도)**, **G13**의 탑노트는 1번 줄 **7프렛(B, 3도)**이에요. <mark>같은 1번 줄에서 5프렛과 7프렛, 딱 두 칸 차이로 두 코드의 목소리가 바뀌어요.</mark> 아직 움직이진 않고, **탑노트가 어디 있는지**부터 손에 각인해요.

오늘은 코드를 잡고 그 위 **탑노트만 콕 짚어** 소리 내는 연습이에요. **BPM 70**으로, 코드를 깐 뒤 1번 줄 탑노트를 또렷이 울려요. <mark>탑노트를 정확히 짚을 수 있으면, 내일 그 음을 멜로디로 움직일 준비가 끝나요.</mark> 먼저 **Dm9**의 탑노트부터 찾아요.

```json
{
  "id": "m1.w4.d2.dm9_top",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 — find the top note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **Dm9의 탑노트는 1번 줄 5프렛(A, 5도).** 초록 음이 코드 위에 얹힌 목소리예요.

## ② 시각 자료

이번엔 **G13**의 탑노트예요. 1번 줄 **7프렛(B, 3도)**, Dm9의 탑노트보다 두 칸 위예요. <mark>3도는 코드의 표정을 정하는 음이라, 탑에 얹으면 밝게 노래해요.</mark>

```json
{
  "id": "m1.w4.d2.g13_top",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 — find the top note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **G13의 탑노트는 1번 줄 7프렛(B, 3도).** 초록 음이 코드의 밝은 표정을 얹어요.

이제 코드를 깐 뒤 탑노트를 짚어 봐요. 코드는 앞 2박, 탑노트는 뒤 2박이에요. <mark>코드와 탑노트를 한 몸처럼 이어 소리 내는 첫 연결이에요.</mark>

```json
{
  "id": "m1.w4.d2.top_recognize",
  "type": "tab",
  "meta": { "title": "Chord then top note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** 코드를 2박 깔고, 1번 줄 탑노트(초록)를 2박 울려요. 탑노트가 코드 위로 또렷이 떠오르는지 들어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 65.** Dm9와 G13을 잡고 1번 줄 탑노트만 튕겨요. <mark>탑노트가 다른 줄에 묻히지 않고 또렷한지 귀로 확인해요.</mark>

**10~20분 · 두뇌 훈련 (탑노트 자리 찾기)**
소리 없이 두 코드를 잡고, 각 코드의 1번 줄 **탑노트**가 5프렛·7프렛 어디인지 눈으로 짚어요.

**20~40분 · 실전 코드+탑노트 (BPM 70)**
아래 네 마디를 **끊김 없이** 반복해요. <mark>코드보다 탑노트가 한 뼘 더 크게 들리는지</mark>만 봐요.

```json
{
  "id": "m1.w4.d2.top_recognize_loop",
  "type": "tab",
  "meta": { "title": "Chord then top note x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** 코드+탑노트를 두 바퀴 돌아요. 탑노트가 매번 또렷이 떠오르는지 놓치지 말아요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 다시 들어요. 코드에 묻히지 않고 탑노트가 목소리처럼 들리는지 확인해요.

**오늘의 완료 기준:** Dm9와 G13에서 각 코드의 탑노트(1번 줄 5프렛·7프렛)를 정확히 짚고, 코드 위로 또렷이 울려 줄 수 있다.

## ④ 팁 / 흔한 실수

**탑노트**를 짚을 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w4.d2.top_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Top notes — Dm9 5, G13 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 6, "dots": [
    { "string": 1, "fret": 5, "label": "Dm9 5", "role": "target", "highlight": true },
    { "string": 1, "fret": 7, "label": "G13 3", "role": "target", "highlight": true }
  ]}
}
```
▶ 1번 줄 5프렛이 Dm9의 탑노트(5도), 7프렛이 G13의 탑노트(3도)예요.

- **탑노트가 코드에 묻혀요.** 1번 줄을 조금 더 세게, 또렷이 튕겨요. 탑은 목소리라 앞에 나와야 해요.
- **탑노트를 못 찾아요.** 코드를 잡은 그 손 그대로 1번 줄만 확인하면 자리가 보여요.
- **코드가 끊겨요.** 탑노트를 짚는 동안에도 코드 손가락은 그대로 눌러 두어요.
- **속도부터 올려요.** 탑노트가 흐릿하면 BPM 65로 낮춰 소리부터 또렷이 만들어요.
