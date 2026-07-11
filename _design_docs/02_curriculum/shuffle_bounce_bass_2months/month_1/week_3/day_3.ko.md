---
title: "12마디 순회 — 코드 전환 매끄럽게"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 12마디 순회, 매끄러운 코드 전환

## ① 이론/설명

이제 세 자리가 모두 손에 있어요 — I(E7)·IV(A7)·V(B7). 오늘은 이 셋을 **순서대로** 이어 <mark>12마디를 한 바퀴 돌아요.</mark> 블루스는 12마디가 한 바퀴예요. 순서만 몸에 익히면 곡이 돼요. 어제까지는 자리를 하나씩 따로 익혔다면, 오늘은 그 자리들을 실로 꿰어 하나의 라인으로 잇는 날이에요.

12마디 순서는 이래요. **| E7 | A7 | E7 | E7 |** 다음 **| A7 | A7 | E7 | E7 |** 그리고 **| B7 | A7 | E7 | B7 |** — 넉 줄이 아니라 세 묶음이에요. <mark>각 마디에서 그 코드의 부기 폼을 그대로 얹기만 하면 돼요.</mark> 열두 마디를 통째로 외우려 하면 벅차지만, 네 마디씩 세 묶음으로 나누면 훨씬 가벼워요. 묶음마다 코드가 어떻게 흐르는지 먼저 눈에 익혀요.

관건은 **코드가 바뀌는 순간**이에요. 오늘의 진짜 연습은 부기가 아니라 그 **이음매**예요. 다음 코드의 루트를 <mark>한 박 먼저 눈으로 찾아 두면</mark>, 손이 미리 준비돼 전환이 매끄러워요. 부기 자체는 이미 익숙하니, 이제는 마디와 마디를 잇는 다리에만 신경을 모으면 돼요. 이음매가 매끄러워지면 곡 전체가 살아나요.

속도는 잊어요. 오늘은 12마디를 **끊기지 않고** 통과하는 게 목표예요. 처음엔 마디마다 멈춰도 괜찮아요. <mark>전환 직전에서만 아주 느리게, 그다음 이어 붙여요.</mark> 끊긴 자리를 하나씩 메우다 보면, 어느 순간 열두 마디가 한 호흡으로 이어져요. **5현**이라면 운지는 똑같아요.

## ② 시각 자료

오늘은 두 가지예요. 먼저 **I·IV·V 세 루트의 지도**를 지판에서 보고, 그다음 코드가 바뀌는 앞 4마디 **전환 예제**를 익혀요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **세 루트의 자리**예요. **E**(4번 현 개방)가 I, **A**(3번 현 개방)가 IV, **B**(3번 현 2프렛)가 V예요. <mark>세 자리만 알면 12마디 어디든 갈 수 있어요.</mark>

```json
{
  "id": "m1.w3.d3.i_iv_v_roots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "I-IV-V roots E A B — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 파랑 셋이 각각 I(E)·IV(A)·V(B) 루트예요. 여기에 부기 계단을 얹으면 그 코드가 완성돼요.

```json
{
  "id": "m1.w3.d3.i_iv_v_roots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "I-IV-V roots E A B — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 B 현은 재워 두고 세 루트만 눈에 익혀요.

이제 **전환 예제**예요. 12마디의 앞 4마디, **E7 → A7 → E7 → E7**을 이어 붙였어요. <mark>코드가 바뀌는 이음매에만 집중해요.</mark>

```json
{
  "id": "m1.w3.d3.change_4bars_4",
  "type": "tab",
  "meta": { "title": "First 4 bars E7-A7-E7-E7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
    ]}
  ]}
}
```

▶ **BPM 80, 셔플.** 1마디 E7 → 2마디 A7에서 루트가 4번 현에서 3번 현으로 넘어가요. 이 넘어감을 한 박 먼저 준비해요.

```json
{
  "id": "m1.w3.d3.change_4bars_5",
  "type": "tab",
  "meta": { "title": "First 4 bars E7-A7-E7-E7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제까지 익힌 **세 부기**를 하나씩 BPM 60에 굴리며 손을 풀어요. E·A·B 세 자리를 차례로 짚어요.

**10~20분 · 두뇌 훈련**
코드 전환만 아주 느리게 연습해요. **E7 → A7**, **A7 → B7** 이음매를 <mark>다음 루트를 한 박 먼저 보며</mark> 이어요.

**20~40분 · 실전**
앞 4마디 **전환 예제**를 **BPM 80**에서 반복해요. 코드가 바뀌어도 롱-숏이 끊기지 않는 게 목표예요. 익숙해지면 12마디 전체로 늘려요.

**40~50분 · 녹음/피드백**
30초 녹음해 **코드 전환이 매끄러운지** 들어봐요. 어디서 끊겼는지 표시해 둬요.

**오늘의 완료 기준:** I-IV-V 순서로 부기 폼을 옮기며, 코드 전환에서 롱-숏이 끊기지 않게 앞 4마디를 BPM 80에 통과할 수 있다.

## ④ 팁 / 흔한 실수

- **전환에서 멈칫해요.** 다음 코드를 눈으로 늦게 찾아요. 루트를 한 박 먼저 보는 습관을 들여요.
- **자리를 헷갈려요.** E는 4번 현, A는 3번 현 개방, B는 3번 현 2프렛 — 셋을 확실히 구분해요.
- **전환에서 롱-숏이 끊겨요.** 코드가 바뀌는 순간 셔플 필을 놓치기 쉬워요. 이음매에서도 앞음을 길게 지켜요.
- **저음 B 방심(5현).** 자리를 자주 옮기는 날일수록 안 쓰는 저음 현을 엄지로 덮어 둬요.
