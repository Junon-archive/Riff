---
title: "리허설 — 멈추지 않고 풀 런스루"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — 리허설: 멈추지 않고 끝까지

## ① 이론/설명

셋째 날, 오늘은 **리허설**이에요. 두 마디를 **멈추지 않고** 처음부터 끝까지 돌려요. <mark>실수해도 멈추지 않고 다음 박으로 넘어가는 게 오늘의 규칙이에요.</mark>

리허설의 핵심은 **흐름**이에요. 정확도보다 **끊기지 않는 반복**이 먼저예요. 손이 멈칫해도 그루브는 계속 굴러가야 해요. <mark>완벽한 한 번보다, 멈추지 않는 열 번이 곡을 완성해요.</mark>

가장 위험한 자리는 **Dm9 → G13 이음매**예요. 여기서 손이 늦으면 흐름이 끊겨요. 이 자리를 먼저 다져 두면 런스루가 편안해져요. <mark>이음매가 매끄러우면 두 마디가 무한히 돌아요.</mark>

```json
{
  "id": "m2.w8.d3.g13_lock",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip lock", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" }
  ]}
}
```
▶ 런스루 전에 G13 손 모양을 한 번 더 눈에 고정해요. 이음매에서 늦지 않도록.

## ② 시각 자료

**멈추지 않는 풀 런스루**예요. 두 마디를 반복해 돌리며, 실수해도 다음 박으로 흘러가요. <mark>여기서 곡의 몸통이 완성돼요.</mark>

```json
{
  "id": "m2.w8.d3.full_runthrough",
  "type": "tab",
  "meta": { "title": "Full run-through", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
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
▶ **BPM 72, 스윙16.** 두 마디를 멈추지 않고 반복. 실수해도 손을 멈추지 말고 다음 박으로.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
**BPM 60**으로 두 마디를 한 번 천천히 훑어요. <mark>어제의 전환과 필을 손에 다시 깨워요.</mark>

**10~20분 · 두뇌 훈련 (이음매 다지기)**
**이음매**만 떼어 Dm9 → G13을 여러 번 반복해요. 손가락이 늦지 않게 미리 준비해요.

**20~40분 · 실전 풀 런스루 (BPM 72)**
두 마디를 **멈추지 않고** 반복해요. 아래 정착 루프처럼, 마지막엔 Dm9로 눕혀 한 호흡 쉬어요. <mark>멈춤 없이 열 번을 돌면 오늘 목표에 도착한 거예요.</mark>

```json
{
  "id": "m2.w8.d3.loop_settle",
  "type": "tab",
  "meta": { "title": "Run-through loop with settle", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
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
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 5, "fret": 5, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72, 스윙16.** 1마디 런스루 → 2마디 Dm9로 눕힌 뒤 쉼. 멈추지 않는 흐름을 몸에 새겨요.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음해 들어요. 멈춘 자리, 흔들린 이음매가 어디였는지 표시해요.

**오늘의 완료 기준:** BPM 72, 스윙16에서 두 마디를 멈추지 않고 처음부터 끝까지 풀 런스루로 돌릴 수 있다.

## ④ 팁 / 흔한 실수

리허설에서 자주 나오는 실수만 짚어요.

```json
{
  "id": "m2.w8.d3.seam_check",
  "type": "tab",
  "meta": { "title": "Chord seam check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ Dm9 → G13 이음매만 반 박씩 크게. 이 자리를 편안하게 만들어요.

- **실수하면 멈춰요.** 리허설의 규칙은 하나예요 — 멈추지 않기. 틀려도 다음 박으로.
- **이음매에서 늦어요.** G13 손 모양을 미리 준비해, 전환에서 박을 놓치지 않아요.
- **점점 빨라져요.** 흥이 오르면 서둘러요. 발이나 메트로놈으로 박을 붙잡아요.
- **완벽에 집착해요.** 오늘은 흐름이 먼저예요. 다듬기는 내일 녹음에서 해요.
