---
title: "보이스 리딩 — 공통음을 남기고 최소로 움직이기"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — 보이스 리딩: 공통음을 남기고 최소로 움직이기

## ① 이론/설명

4주차예요. 이번 주는 코드 위에 멜로디를 얹는 **코드멜로디의 첫걸음**을 떼요. 그 바탕이 바로 **보이스 리딩**이에요. <mark>코드를 바꿀 때 손 전체를 옮기지 말고, 겹치는 음(공통음)은 그대로 두고 꼭 필요한 음만 조금 움직이는 거예요.</mark> 시그니처 뱀프 **Dm9 → G13**으로 몸에 익혀요.

두 코드를 겹쳐 보면 놀라워요. **Dm9**의 **F**(4번 줄 3프렛)와 **E**(2번 줄 5프렛)는 **G13**에서도 그대로 살아 있어요. <mark>공통음 두 개는 손가락을 떼지 않고, 안쪽 한 음만 반음 움직이면 코드가 바뀌어요.</mark> 이렇게 **최소 이동**으로 이으면 소리가 뚝뚝 끊기지 않고 물 흐르듯 이어져요.

오늘은 속도보다 **부드러운 전환**이에요. **BPM 70**으로 천천히, 코드가 바뀔 때 손이 얼마나 적게 움직이는지 눈으로 확인해요. <mark>공통음을 남기는 감각이 손에 붙으면 탑노트 멜로디를 얹을 무대가 완성돼요.</mark> 먼저 집 코드 **Dm9**부터 얹을게요.

```json
{
  "id": "m1.w4.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **집 코드 Dm9.** 5번 줄 5프렛 루트, 2번 줄 9도가 몽글한 색을 내요.

## ② 시각 자료

이번엔 목표 코드 **G13**이에요. **Dm9**과 겹쳐 보면, 공통음 **F**와 **E**는 자리를 지키고 안쪽 음만 반음 내려와요. <mark>손가락 하나만 움직여 코드가 바뀌는 느낌을 눈으로 담아요.</mark>

```json
{
  "id": "m1.w4.d1.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13.** 6번 줄 3프렛 루트, 안쪽 **b7**만 반음 아래 **3도**로 내려왔어요.

이제 두 마디를 이어 볼게요. 1마디 **Dm9**, 2마디 **G13**. <mark>공통음을 남긴 채 이으면 두 코드가 한 흐름처럼 이어져요.</mark>

```json
{
  "id": "m1.w4.d1.voice_leading",
  "type": "tab",
  "meta": { "title": "Voice leading Dm9 - G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 70.** 1마디 Dm9에서 2마디 G13으로 갈 때, 4번 줄과 2번 줄은 그대로 두고 안쪽 한 음만 반음 내려요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 65.** Dm9와 G13을 번갈아 잡으며 손을 데워요. <mark>공통음 F·E는 그대로 둔다는 감각만 되새겨요.</mark>

**10~20분 · 두뇌 훈련 (공통음 확인)**
소리 없이 왼손만으로 두 코드를 오가며 **공통음**이 어디서 유지되는지 눈으로 확인해요.

**20~40분 · 실전 보이스 리딩 뱀프 (BPM 70)**
아래 네 마디를 **끊김 없이** 반복해요. <mark>코드가 바뀔 때 손이 최소로만 움직이는지</mark>만 봐요.

```json
{
  "id": "m1.w4.d1.voice_leading_loop",
  "type": "tab",
  "meta": { "title": "Voice leading vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
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
▶ **BPM 70.** 보이스 리딩 뱀프를 두 바퀴 돌아요. 손이 조금만 움직여도 코드가 바뀌는 걸 느껴요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초 녹음 후 다시 들어요. 전환이 뚝뚝 끊기지 않고 매끄럽게 이어지는지 확인해요.

**오늘의 완료 기준:** Dm9 → G13을 BPM 70으로 이으며, 공통음 F·E를 그대로 둔 채 매끄러운 전환을 들려줄 수 있다.

## ④ 팁 / 흔한 실수

**보이스 리딩**을 연습할 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m1.w4.d1.common_tone_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Common tones stay — F and E", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "F", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "E", "role": "color" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ 4번 줄 3프렛(F)과 2번 줄 5프렛(E)은 두 코드의 공통음, 3번 줄 5→4프렛이 유일하게 움직이는 음이에요.

- **손 전체를 옮겨요.** 공통음까지 떼면 소리가 끊겨요. F·E는 붙여 둔 채 안쪽 음만 옮겨요.
- **안쪽 음이 늦어요.** 3번 줄 5→4프렛 이동을 미리 준비하면 박자가 안 밀려요.
- **속도부터 올려요.** 오늘은 부드러운 전환이 먼저예요. BPM 65로 낮춰 움직임부터 줄여요.
- **코드가 뭉개져요.** 손가락 끝을 세워 각 줄이 또렷이 울리게 잡아요.
