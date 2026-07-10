---
title: "2주차 완성 — E단조 펜타토닉 리프"
dayKey: "m1.w2.d4"
estMinutes: 30
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 두 손으로 완성하는 첫 리프

## ① 이론/설명

드디어 2주차 마지막 날이에요. 이번 주에 만든 세 가지 — <mark>두 손 싱크</mark>, 줄 넘기, 팜뮤트 chug — 를 하나의 리프에 전부 담아요. 코드는 아직 없어요. 단음 하나하나가 메트로놈에 정확히 얹히고, 팜뮤트로 낮게 깔리면 그게 바로 진짜 리프예요. 오늘은 잘 치는 게 아니라, 처음부터 끝까지 흔들림 없이 완주하는 게 목표예요.

오늘 칠 리프는 <mark>E단조 펜타토닉</mark>에서 뽑은 오리지널이에요. 반복되는 개방 E(루트)를 팜뮤트로 낮게 깔다가, 초록으로 강조된 4도(A, 5프렛) 한 음만 팜뮤트를 풀어 툭 튀어나오게 해요. 이 한 음이 리프의 표정이에요. 마지막 마디에선 A→b3→E로 스르르 내려앉으며 마무리해요. 리프 전체는 네 마디, 같은 모양이 조금씩 변주되며 반복되니 겁먹지 않아도 돼요.

구조를 알면 어렵지 않아요 — <mark>반복 루트 + 상행 도약 후 착지</mark>, 펜타토닉 프레이징의 기본 문법이에요. 2마디에선 5번 줄 5프렛(b7)으로 잠깐 건너갔다 돌아오는데, 어제까지 익힌 줄 넘기가 바로 여기서 쓰여요. 이 리프의 감각은 〈Seven Nation Army〉·〈Come As You Are〉 같은 곡에 그대로 살아 있어요. 오늘 처음부터 끝까지 흔들림 없이 완주하면, 2주차가 손에 완전히 새겨진 거예요.

## ② 시각 자료

먼저 제일 까다로운 자리, 2마디의 5번 줄 건너가기만 떼어 연습해요. 이 <mark>줄 넘기</mark>만 매끄러우면 리프 전체가 편해져요.

```json
{
  "id": "m1.w2.d4.riff_prep_cross",
  "type": "tab",
  "meta": { "title": "Riff prep — crossing to the 5th string", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "finger": 3, "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70.** 개방 E(팜뮤트) → 5번 줄 5프렛(b7)으로 건너갔다 → 개방 E로 착지. 건너가는 순간에도 얼터네이트를 유지해요.

이제 이번 주의 완성물이에요. 반복되는 개방 E는 팜뮤트로 낮게 깔고, <mark>초록 4도(A)</mark> 한 음만 툭 튀어나오게 하세요.

```json
{
  "id": "m1.w2.d4.em_pentatonic_riff",
  "type": "tab",
  "meta": { "title": "E minor pentatonic riff", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 5, "duration": "eighth", "label": "4", "role": "target", "highlight": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 5, "duration": "eighth", "label": "4", "role": "target", "highlight": true },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "palm_mute" },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute" }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "4", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 6, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80, 얼터네이트로.** 반복되는 개방 E는 **팜뮤트로 낮게** 갈고, 초록으로 강조된 **4도(A, 5프렛)**만 팜뮤트를 풀어 툭 튀어나오게 하세요 — 이 한 음이 리프의 표정입니다. M4에서 A→b3→E로 내려앉으며 마무리. 4번 반복.

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
BPM 60에서 팜뮤트 chug(어제 예제)를 6번 줄에 가볍게 반복해 오른손을 데워요. 손날 위치부터 다시 잡아요.

**7~17분 · 오늘의 기술**
예제 1(줄 넘기 프렙)을 BPM 70에서 반복. 5번 줄로 건너갔다 개방 E로 <mark>정확히 착지</mark>하는 데 집중해요.

**17~27분 · 적용 (이번 주 완성물)**
핀 고정 리프를 BPM 70에서 4번 반복 → 흔들림 없이 되면 목표 BPM 80으로 한 칸 올려요. 4도(A) 한 음만 팜뮤트를 풀어 살리는 걸 잊지 마세요.

**27~30분 · 체크**
도달한 BPM을 적고, 30초 녹음해 리프가 처음부터 끝까지 끊기지 않는지 들어봐요.

**오늘의 완료 기준:** E단조 펜타토닉 리프를 처음부터 끝까지 흔들림 없이, 목표 BPM 80에서 완주할 수 있다. (2주차 완성!)

## ④ 팁 / 흔한 실수

- **4도까지 팜뮤트.** 강조음(A, 5프렛)까지 뮤트하면 리프의 표정이 사라져요. 그 한 음만 손날을 살짝 떼요.
- **줄 넘기에서 밀리기.** 2마디에서 5번 줄로 갈 때 멈칫하면 박이 밀려요. 얼터네이트를 계속 굴려요.
- **속도부터.** 80은 목표일 뿐이에요. 70에서 깨끗한 게 80에서 지저분한 것보다 훨씬 나아요.
- **손 굳음 걱정.** 리프가 길게 느껴지면 두 마디씩 나눠 익혀요. 조각으로 익혀 이어붙이면 돼요.
