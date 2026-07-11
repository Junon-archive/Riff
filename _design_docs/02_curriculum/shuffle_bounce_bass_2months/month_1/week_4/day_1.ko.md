---
title: "턴어라운드 — 마지막 네 마디로 되돌리기"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — 턴어라운드, 마지막 네 마디로 되돌리기

## ① 이론/설명

이번 주가 **M1의 마지막 주**예요. 한 달 전엔 셔플의 롱-숏조차 낯설었는데, 오늘은 12마디를 스스로 매듭짓는 자리에 섰어요. 마지막 열쇠는 **턴어라운드** — <mark>12마디의 마지막 네 마디가 곡을 다시 처음으로 되돌리는 매듭</mark>이에요. 이 매듭만 손에 들어오면, 한 바퀴가 끝나는 대신 다음 바퀴로 자연스럽게 이어져요.

턴어라운드의 순서는 **V(B7)-IV(A7)-I(E7)-V(B7)**예요. 9마디 **B7**에서 출발해 10마디 A7, 11마디 E7로 내려왔다가, 12마디에서 다시 B7으로 올라서요. <mark>마지막을 B7으로 열어 두면, 귀가 "아직 안 끝났어, 처음으로 돌아가"라고 느껴요.</mark> 이 여운이 곡을 한 바퀴 더 돌게 만드는 힘이에요.

손이 할 일은 이미 다 배운 거예요. **부기 폼**을 B·A·E·B 자리로 옮기기만 하면 돼요. B7은 **3번 현 2프렛** 루트, A7은 3번 현 개방, E7은 4번 현 개방 — <mark>세 자리 모두 지난주에 이미 손이 외운 계단</mark>이에요. 새로 외울 건 순서 하나뿐이에요.

속도는 잊어요. 오늘은 마지막 네 마디를 아주 느리게, 멈추더라도 <mark>순서를 몸에 새기는 게 전부</mark>예요. B에서 A로, A에서 E로, 다시 E에서 B로 — 이음매마다 잠깐 쉬어도 괜찮아요. **5현**이라면 운지는 똑같고 저음 B만 재워 둬요. 이 네 마디가 12마디를 하나로 묶는 마지막 매듭이에요.

## ② 시각 자료

오늘은 두 가지예요. 먼저 **B7 부기 손모양**을 지판에서 확인하고, 그다음 마지막 네 마디를 잇는 **턴어라운드 셔플**을 통과해요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **B7 부기 손모양**이에요. 아래 파랑이 루트 **B**(3번 현 2프렛), 그 위 파랑 둘이 5도·6도, 무색이 **b7**이에요. <mark>E·A 부기와 똑같은 계단이 B 자리로 옮겨왔어요.</mark>

```json
{
  "id": "m1.w4.d1.b7_boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 boogie shape R-5-6-b7 (B7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4현.** 루트 **B**(3번 현 2프렛) → **5도**(2번 현 4프렛) → **6도**(6프렛) → **b7**(7프렛)이에요. E·A 부기와 똑같은 계단이 B 자리로 옮겨왔어요.

```json
{
  "id": "m1.w4.d1.b7_boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 boogie shape R-5-6-b7 (B7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 **B**는 엄지로 재워 두고, B7 루트에 집중해요.

이제 마지막 네 마디를 잇는 **턴어라운드 셔플**이에요. B7-A7-E7-B7 순서로 부기 폼을 옮기며 <mark>곡을 다시 처음으로 되돌려요.</mark>

```json
{
  "id": "m1.w4.d1.turnaround_4",
  "type": "tab",
  "meta": { "title": "Turnaround B7-A7-E7-B7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
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
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70, 셔플.** 9마디 B7(3번 현 2프렛)-10마디 A7(3번 현 개방)-11마디 E7(4번 현 개방)-12마디 B7. 같은 부기 폼이 코드마다 자리를 옮겨요.

```json
{
  "id": "m1.w4.d1.turnaround_5",
  "type": "tab",
  "meta": { "title": "Turnaround B7-A7-E7-B7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
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
이번 주에 쓸 **세 부기**를 E·A·B 순으로 BPM 60에 굴리며 손을 풀어요. 세 자리가 다 나오는지 확인해요.

**10~20분 · 두뇌 훈련**
**턴어라운드 순서(B7-A7-E7-B7)**를 아주 느리게 짚어요. <mark>루트가 B에서 A로, 다시 E로 넘어가는 이음매</mark>가 매끄러운지 확인해요.

**20~40분 · 실전**
오늘의 완성물 **턴어라운드**를 **BPM 70**에서 반복해요. 네 마디가 멈추지 않고 이어지는 게 목표예요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **네 마디가 끊기지 않는지** 들어봐요. 오늘 도달한 BPM도 적어 둬요.

**오늘의 완료 기준:** 턴어라운드(V-IV-I-V)를 B7-A7-E7-B7 순서로, BPM 70에서 4현·5현 둘 다 멈추지 않고 통과할 수 있다.

## ④ 팁 / 흔한 실수

- **순서를 헷갈려요.** B7-A7-E7-B7이 헷갈리기 쉬워요. "높-낮-더낮-다시높"으로 소리의 오르내림을 몸에 새겨요.
- **B7 루트를 놓쳐요.** 3번 현 2프렛을 개방으로 잘못 짚기 쉬워요. B는 눌러야 나오는 음이에요.
- **이음매에서 롱-숏이 밋밋해져요.** 코드가 바뀌는 순간 셔플 필을 놓치기 쉬워요. 이음매에서도 앞음을 길게 지켜요.
- **저음 B 방심(5현).** 자리를 옮기느라 바빠도 안 쓰는 저음 현은 엄지로 덮어 둬요.
