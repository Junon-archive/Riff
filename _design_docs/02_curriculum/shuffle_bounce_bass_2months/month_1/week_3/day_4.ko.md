---
title: "12마디 셔플 라인 — 3주차 완성"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 12마디 셔플 라인, 3주차 완성

## ① 이론/설명

3주차 마지막 날이에요. 이번 주 옮겨 다닌 세 자리를 오늘 <mark>하나의 12마디 셔플 라인으로 완성해요.</mark> I(E7)에서 시작해 IV(A7)·V(B7)를 돌아 다시 제자리로 — 드디어 **블루스 한 바퀴**가 손에 들어와요. 셔플&바운스를 시작한 첫날의 개방 E 한 음이, 이제 열두 마디짜리 라인으로 자라났어요.

핀으로 고정할 완성물은 **부기 이동(E7→A7)** 두 마디예요. **1마디는 E7**(4번 현 루트), **2마디는 A7**(3번 현 루트) — <mark>같은 부기 손모양이 한 줄 위로 옮겨간 것</mark>뿐이에요. 이 이동이 12마디 전체의 씨앗이에요. 이 두 마디만 매끄러우면, 나머지 이동은 전부 같은 원리로 자연스럽게 풀려요.

이 이동을 열두 자리에 펼치면 **12마디 셔플 라인**이 돼요. **| E7 | A7 | E7 | E7 |** … 순서를 따라 부기 폼을 옮기면, <mark>멈추지 않고 한 바퀴가 굴러가요.</mark> B7이 나오는 마지막 줄이 한 바퀴의 매듭이에요. 그 매듭을 지나 다시 E7으로 돌아오면, 한 곡이 자연스럽게 처음으로 이어져요.

**메트로놈 80**이 이번 주 목표지만, 숫자보다 <mark>끊기지 않는 흐름이 먼저예요.</mark> 70에서 한 바퀴가 매끄럽게 돌면 그게 80에서 뚝뚝 끊기는 것보다 나아요. 흐름이 살아 있으면 속도는 나중에 저절로 따라와요. **5현**이라면 운지는 똑같고 저음 B만 재워 둬요. 웃으며 3주차를 마무리해요 — 계단 하나가 이제 곡 한 바퀴가 됐어요.

## ② 시각 자료

오늘은 두 가지예요. 먼저 이번 주 핀 완성물 **부기 이동(E7→A7)**을 굳히고, 그다음 그 이동을 펼친 **12마디 셔플 라인**을 통과해요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 이번 주 핀, **부기 이동(E7→A7)**이에요. 1마디 E7에서 2마디 A7으로, <mark>같은 손모양이 한 줄 위로 옮겨가요.</mark>

```json
{
  "id": "m1.w3.d4.boogie_move_4",
  "type": "tab",
  "meta": { "title": "Boogie move E7 to A7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80, 셔플.** 1마디 E7(4번현 루트), 2마디 A7(3번현 루트) — **같은 부기 손모양이 한 줄 위로** 옮겨간 것. B7은 3번현 2프렛 루트로 같은 폼.

```json
{
  "id": "m1.w3.d4.boogie_move_5",
  "type": "tab",
  "meta": { "title": "Boogie move E7 to A7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮거나 B 루트로 더 묵직하게 시험해요.

이제 그 이동을 열두 자리에 펼친 **12마디 셔플 라인**이에요. I-IV-V 순서를 따라 부기 폼을 옮기며 <mark>한 바퀴를 멈추지 않고 통과해요.</mark>

```json
{
  "id": "m1.w3.d4.twelve_bar_line_4",
  "type": "tab",
  "meta": { "title": "12-bar shuffle line E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 6, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 7, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 9, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 80, 셔플.** E7·A7·B7 자리에서 부기 계단을 그대로 옮겨 열두 마디를 채웠어요. 마지막 줄 B7이 한 바퀴의 매듭이에요.

```json
{
  "id": "m1.w3.d4.twelve_bar_line_5",
  "type": "tab",
  "meta": { "title": "12-bar shuffle line E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 6, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 7, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 9, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 10, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 12, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 새지 않게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
이번 주 **세 부기**를 E·A·B 순으로 BPM 60에 굴리며 손을 풀어요. 세 자리가 다 나오는지 확인해요.

**10~20분 · 두뇌 훈련**
**부기 이동(E7→A7)**을 아주 느리게 되짚어요. <mark>루트가 4번 현에서 3번 현으로 넘어가는 이음매</mark>가 매끄러운지 확인해요.

**20~40분 · 실전 (이번 주 완성물)**
핀 고정 **12마디 셔플 라인**을 **BPM 80**에서 반복해요. 코드가 바뀌어도 멈추지 않고 한 바퀴가 도는 게 목표예요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **12마디가 BPM 80에서 끊기지 않는지** 들어봐요. 이번 주 도달한 BPM도 적어 둬요.

**오늘의 완료 기준:** 부기 폼을 I-IV-V로 옮겨 12마디 셔플 라인을 BPM 80에서 멈추지 않고, 4현·5현 둘 다 한 바퀴 통과할 수 있다. (3주차 완성!)

## ④ 팁 / 흔한 실수

- **마지막 줄에서 꼬여요.** B7-A7-E7-B7 순서가 헷갈리기 쉬워요. 세 묶음으로 나눠 순서를 몸에 새겨요.
- **80에서 끊겨요.** 속도를 올리면 전환이 늦어지곤 해요. 70에서 매끄럽게 돈 뒤 천천히 올려요.
- **전환에서 롱-숏이 밋밋해져요.** 코드가 바뀌는 마디에서 셔플 필을 놓치기 쉬워요. 이음매에서도 앞음을 길게 지켜요.
- **저음 B 방심(5현).** 한 바퀴 도는 내내 안 쓰는 저음 현은 엄지로 덮어 둬요.
