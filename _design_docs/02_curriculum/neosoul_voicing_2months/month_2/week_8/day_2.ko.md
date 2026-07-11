---
title: "곡 구조 — Dm9 컴핑 + G13 + 스미어 필 (2마디)"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 곡 구조: 두 마디로 넓히다

## ① 이론/설명

둘째 날이에요. 어제의 한 마디를 **곡의 구조**로 넓혀요. 네오소울 시그니처 뱀프 **Dm9 → G13**을 두 마디로 이어요. <mark>1마디는 Dm9 컴핑, 2마디는 G13에 스미어 필을 붙여 마무리해요.</mark>

**G13**은 6번 줄 3프렛 루트에 b7·3·13을 얹은 손 모양이에요. Dm9와 **손 위치가 달라요** — 이 이동이 오늘의 관문이에요. <mark>두 코드가 매끄럽게 이어지면 곡이 흐르기 시작해요.</mark>

2마디 끝은 **b3→3 스미어 필**로 닫아요. G13의 여운 위로 미끄러지는 한 줄이 두 마디를 하나로 묶어요. <mark>필이 다음 반복의 문을 열어 주는 거예요.</mark>

```json
{
  "id": "m2.w8.d2.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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

**Dm9 컴핑 + G13 + 스미어 필**, 완성될 곡의 두 마디 구조예요. <mark>1마디에서 눕히고, 2마디에서 물들이고 미끄러져요.</mark>

```json
{
  "id": "m2.w8.d2.two_bar_form",
  "type": "tab",
  "meta": { "title": "Two-bar song form", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 72, 스윙16.** 1마디 Dm9 레이백 컴핑 → 2마디 G13 후 **b3→3 스미어 필**. 두 마디가 한 곡처럼 이어져요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 Dm9와 **G13**을 번갈아 잡아요. <mark>두 손 모양의 이동을 몸이 먼저 외우게 해요.</mark>

**10~20분 · 두뇌 훈련 (코드 전환)**
**Dm9 → G13** 이동만 떼어 천천히 반복해요. 손가락이 다음 자리를 미리 준비하게 해요.

**20~40분 · 실전 두 마디 (BPM 72)**
위 **두 마디 구조**를 반복해요. 아래 이동 드릴로 코드 전환을 다진 뒤 붙여요. <mark>전환에서 박이 흔들리지 않으면 구조가 선 거예요.</mark>

```json
{
  "id": "m2.w8.d2.transition_drill",
  "type": "tab",
  "meta": { "title": "Dm9 to G13 transition drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** Dm9 ↔ G13 이동을 한 박씩 크게. 손가락이 다음 자리를 미리 짚어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음해 들어요. 두 마디가 끊김 없이 한 곡처럼 흐르는지 확인해요.

**오늘의 완료 기준:** BPM 72, 스윙16에서 Dm9 → G13 전환과 b3→3 스미어 필까지, 두 마디 곡 구조를 끊김 없이 이어 칠 수 있다.

## ④ 팁 / 흔한 실수

두 마디를 이을 때 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w8.d2.fill_check",
  "type": "tab",
  "meta": { "title": "Smear fill check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ 스미어 필만 떼어, b3→3→5→b7 한 줄을 천천히 그려봐요.

- **전환에서 무너져요.** 코드가 바뀌는 자리에서 박이 흔들리기 쉬워요. 이동 지점을 몸에 익혀요.
- **필이 뭉개져요.** b3→3→5→b7을 또박또박 그어, 마디를 여는 문처럼 열어요.
- **G13 아랫줄이 새요.** 6번 줄 루트만 또렷하게, 안 쓰는 줄은 살짝 뮤트해요.
- **속도부터 올려요.** BPM 60으로 전환과 필을 다진 뒤 72로 올려요.
