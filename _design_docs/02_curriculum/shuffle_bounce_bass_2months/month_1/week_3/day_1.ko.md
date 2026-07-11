---
title: "A 부기 — IV(A7)로 이동"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — IV로 이동, A 부기

## ① 이론/설명

부기 폼이 드디어 손에 익었어요. 이번 주는 그 폼을 **옮겨 다니며** 12마디를 한 바퀴 돌아요. 오늘 첫걸음은 **IV(A7)**로 이동하는 거예요. <mark>손모양은 하나도 바꾸지 않고, 자리만 통째로 옮겨요.</mark> 계단은 그대로, 계단이 놓인 위치만 달라져요. 지난주에 외운 R-5-6-b7 계단을 이제 다른 코드 위에 그대로 얹는 연습이라고 생각하면 마음이 한결 가벼워요.

A7의 루트 **A**는 **3번 현 개방**이에요. 지난주 E 부기가 4번 현 개방에서 출발했다면, A 부기는 한 현 위인 3번 현에서 출발해요. 나머지 **5-6-b7**은 2번 현 2·4·5프렛에 똑같이 얹혀요. <mark>계단 모양이 통째로 한 현씩 위로 올라간 셈이에요.</mark> 손가락 사이 간격도, 짚는 순서도 전부 그대로라 눈을 감고도 같은 모양이 잡혀요. 바뀐 건 오직 출발하는 현 하나뿐이에요.

왜 하필 A7일까요? 블루스 12마디에서 **IV**는 I 다음으로 자주 등장하는 자리예요. 루트만 **A**로 바꾸면 지난주 배운 **R-5-6-b7** 계단이 그대로 통해요. <mark>새로 외울 건 출발하는 자리 하나뿐이에요.</mark> 폼을 다시 배우는 게 아니라, 옮기기만 하면 돼요. 이렇게 한 손모양을 여기저기 옮겨 쓰는 감각이, 이번 주 내내 12마디를 도는 열쇠가 돼요.

속도는 완전히 잊으세요. 오늘은 A 부기를 롱-숏으로 또렷이 굴리는 게 전부예요. <mark>E에서 A로, 두 자리를 아주 느리게 오가며 손이 길을 외우게 해요.</mark> 처음엔 두 코드 사이에서 잠깐 멈춰도 괜찮아요. 멈춤이 조금씩 짧아지면 그게 곧 매끄러운 전환이에요. **5현**이라면 운지는 똑같고 저음 B만 엄지로 재워 둬요. 이 A 부기가 12마디 한 바퀴의 두 번째 계단이에요.

## ② 시각 자료

오늘은 두 가지예요. 먼저 **A 부기 손모양**을 지판에서 확인하고, 그다음 그 폼을 롱-숏으로 굴리는 **A 부기 셔플**을 익혀요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **A 부기 손모양**이에요. 아래 파랑이 루트 **A**(3번 현 개방), 그 위 파랑 둘이 5도·6도, 무색이 **b7**이에요. <mark>E 부기와 똑같은 계단이 한 현 위로 올라갔어요.</mark>

```json
{
  "id": "m1.w3.d1.a_boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "A boogie shape R-5-6-b7 (A7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4현.** 루트 **A**(3번 현 개방) → **5도 E**(2번 현 2프렛) → **6도 F#**(4프렛) → **b7 G**(5프렛)예요. E 부기가 한 현 위로 옮겨온 자리예요.

```json
{
  "id": "m1.w3.d1.a_boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "A boogie shape R-5-6-b7 (A7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 **B**는 엄지로 재워 두고, A 루트에 집중해요.

이제 그 손모양을 굴리는 **A 부기 셔플**이에요. 1마디에 올라갔다 2마디에 내려오며, <mark>롱-숏으로 통통 튀게 굴려요.</mark>

```json
{
  "id": "m1.w3.d1.a_boogie_4",
  "type": "tab",
  "meta": { "title": "A boogie shuffle (A7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 셔플.** 루트 **A**(3번 현 개방)에서 **5-6-b7**(2번 현 2·4·5프렛) 계단을 오르내려요. E 부기와 손모양이 똑같죠.

```json
{
  "id": "m1.w3.d1.a_boogie_5",
  "type": "tab",
  "meta": { "title": "A boogie shuffle (A7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 새지 않게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
지난주 **E 부기 셔플**을 개방 E로 BPM 60에 굴리며 손을 풀어요. 오르내림이 이어지는지 확인하고 시작해요.

**10~20분 · 두뇌 훈련**
**A 부기 손모양**을 아주 느리게 짚어요. 루트 **A**(3번 현 개방)에서 5-6-b7로 올라가는 길을, <mark>E 부기와 나란히 두고</mark> 비교하며 외워요.

**20~40분 · 실전**
**A 부기 셔플**을 **BPM 70**에서 반복해요. 롱-숏이 흔들리지 않는 게 목표예요. 4현으로 익힌 뒤 5현으로도 같은 그루브를 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **A 부기가 통통 튀는지** 들어봐요. 오늘 도달한 BPM도 적어 둬요.

**오늘의 완료 기준:** A 부기 셔플(R-5-6-b7)을 IV(A7) 자리에서 BPM 70에 롱-숏으로, 4현·5현 둘 다 굴릴 수 있다.

## ④ 팁 / 흔한 실수

- **자리를 헷갈려요.** E 부기 버릇으로 4번 현에서 출발하기 쉬워요. A는 3번 현 개방에서 시작한다고 손에 새겨요.
- **b7이 흐릿해요.** 2번 현 5프렛까지 손가락이 안 닿곤 해요. 미리 손을 펼쳐 b7을 또렷이 짚어요.
- **롱-숏이 밋밋해져요.** 자리가 바뀌면 셔플 필을 놓치기 쉬워요. 각 음의 앞을 확실히 길게 지켜요.
- **저음 B 방심(5현).** 자리를 옮기느라 바빠도 B는 엄지로 덮어 둬요.
