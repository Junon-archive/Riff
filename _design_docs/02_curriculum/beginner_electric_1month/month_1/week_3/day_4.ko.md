---
title: "3주차 완성 — 팜뮤트 파워코드 리프"
dayKey: "m1.w3.d4"
estMinutes: 30
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 벽돌로 쌓아 올린 첫 록 리프

## ① 이론/설명

드디어 3주차 마지막 날이에요. 이번 주에 만든 세 가지 — <mark>파워코드 폼</mark>, 폼 이동, 팜뮤트 다운피킹 — 을 하나의 리프에 전부 담아요. 오늘 칠 리프는 **팜뮤트로 낮게 으르렁**대다가, 파워코드를 계단처럼 밀어 올려 활짝 터뜨리는 오리지널이에요. 잘 치는 게 목표가 아니라, **처음부터 끝까지 흔들림 없이 완주**하는 게 목표예요.

리프는 네 마디예요. 1·3마디는 개방 E5를 <mark>팜뮤트로 척척</mark> 갈고, 2·4마디는 5번 줄 루트 폼을 밀어 **C5→D5→E5로 계단을 올라요**. 낮게 깔던 소리가 클라이밍에서 팜뮤트를 풀며 활짝 열리는 대비, 그게 이 리프의 표정이에요. **손날을 떼는 타이밍**은 6번 줄에서 5번 줄 폼으로 건너가는 바로 그 순간이에요 — 미리 연습해 두면 리프가 훨씬 시원하게 터져요. 마지막 초록 E5(7프렛)에 착지하며 딱 멈춰요.

구조를 알면 어렵지 않아요 — <mark>반복되는 뿌리 + 계단 상승 후 착지</mark>, 록 리프의 기본 문법이에요. 계단은 어제까지 익힌 **C5↔D5 이동**이 그대로 쓰여요. 이 감각은 〈You Really Got Me〉·〈Iron Man〉 같은 곡에 그대로 살아 있고요. 네 마디가 통째로 벅차면 팜뮤트 마디(1·3)와 클라이밍 마디(2·4)를 **따로 익힌 뒤 이어 붙이면** 돼요. 오늘 이 리프를 목표 BPM에서 완주하면, 3주차가 손에 완전히 새겨진 거예요.

## ② 시각 자료

먼저 제일 까다로운 자리, 마지막 마디의 <mark>클라이밍</mark>(C5→D5→E5)만 떼어 연습해요. **이 계단만 매끄러우면** 리프 전체가 편해져요.

```json
{
  "id": "m1.w3.d4.climb_prep",
  "type": "tab",
  "meta": { "title": "Climb prep — C5 · D5 · E5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "finger": 1, "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 7, "duration": "half", "finger": 1, "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 4, "fret": 9, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 80. 5번 줄 폼을 두 프렛씩 밀어 올려 초록 E5(7프렛)에 정확히 착지해요. 폼을 유지한 채 통째로.

이제 이번 주의 완성물이에요. **개방 E5는 팜뮤트로 낮게** 깔고, 클라이밍은 팜뮤트를 풀어 활짝 울리세요.

```json
{
  "id": "m1.w3.d4.powerchord_riff",
  "type": "tab",
  "meta": { "title": "Palm-muted power chord riff (E5 · C5–D5–E5 climb)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 90, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 7, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 4, "fret": 9, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ **BPM 90, 전부 다운피킹으로.** 개방 E5는 손날로 팜뮤트해 낮게 으르렁대게 갈고(M1·M3), 클라이밍(C5→D5→E5)은 팜뮤트를 풀어 활짝 울리세요. 마지막 초록 E5(7프렛)에 착지하며 마무리. 4번 반복.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
BPM 70에서 어제 팜뮤트 척척(개방 E5)을 6번 줄에 가볍게 반복해 오른손 손날 위치를 되살려요.

**7~17분 · 오늘의 기술**
예제 1(클라이밍 프렙)을 BPM 80에서 반복. **5번 줄 폼**을 밀어 <mark>계단을 올라</mark> 초록 E5(7프렛)에 정확히 착지하는 데 집중해요.

**17~27분 · 적용 (이번 주 완성물)**
핀 고정 리프를 BPM 80에서 4번 반복 → **흔들림 없이** 되면 목표 BPM 90으로 한 칸 올려요. 개방 E5는 팜뮤트로 낮게, 클라이밍은 팜뮤트를 풀어 활짝 — 이 대비를 잊지 마세요.

**27~30분 · 체크**
도달한 BPM을 적고, 30초 녹음해 리프가 처음부터 끝까지 끊기지 않는지 들어봐요.

**오늘의 완료 기준:** 팜뮤트 파워코드 리프를 처음부터 끝까지 흔들림 없이, 목표 BPM 90에서 완주할 수 있다. (3주차 완성!)

## ④ 팁 / 흔한 실수

- **클라이밍까지 팜뮤트.** 계단(C5→D5→E5)까지 뮤트하면 활짝 열리는 대비가 사라져요. 그 구간만 손날을 떼요.
- **계단에서 박 밀림.** 2·4마디에서 5번 줄로 옮길 때 멈칫하면 박이 밀려요. 폼을 붙인 채 통째로 미세요.
- **속도부터.** 90은 목표일 뿐이에요. 80에서 깨끗한 게 90에서 지저분한 것보다 훨씬 나아요.
- **리프가 길게 느껴짐.** 네 마디가 벅차면 두 마디씩 나눠 익혀요. 조각으로 익혀 이어붙이면 돼요.
