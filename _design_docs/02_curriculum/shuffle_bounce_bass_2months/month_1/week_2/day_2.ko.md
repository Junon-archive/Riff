---
title: "부기 상행 — R-5-6-b7로 계단 오르기"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 부기 워크 상행, R-5-6-b7

## ① 이론/설명

어제 루트와 **5도**로 첫 두 계단을 놨어요. 오늘은 그 위에 두 계단을 더 얹어, <mark>R-5-6-b7로 계단을 통통 올라가요.</mark> 이 상행 움직임이 바로 셔플 블루스의 뼈대인 **부기 워크**예요. 루트에서 시작해 한 칸씩 위로 걸어 올라가는 손모양을 오늘 통째로 외워요.

새로 더할 두 음은 **6도**와 **b7도**예요. **6도**는 **C#**(3번 현 4프렛), **b7도**는 **D**(3번 현 5프렛)예요. 어제 익힌 **5도 B**(3번 현 2프렛) 바로 위로 손가락이 한 칸씩 올라가죠. <mark>3번 현에서 2·4·5프렛을 차례로 밟으면 5-6-b7이 완성돼요.</mark>

오른손은 어제처럼 **투핑거**로 검지·중지를 번갈아요. 한 음이 한 박씩, **R(개방 E) → 5(B) → 6(C#) → b7(D)** 순서로 또박또박 올라가요. 아직 셔플을 세게 굴리기보다, <mark>네 음이 계단처럼 고르게 이어지는 데 먼저 집중해요.</mark> 손가락이 순서를 기억하면 굴림은 저절로 따라와요.

이 **R-5-6-b7** 손모양의 가장 큰 장점은 <mark>어느 코드로 옮겨도 똑같다는 거예요.</mark> 오늘은 키 **E**에서 익히지만, 루트를 A로 옮기면 그 자리에서 같은 폼이 그대로 통해요. 그래서 한 번 외워 두면 평생 써먹어요. **5현**이라면 운지는 똑같고 저음 **B**만 재워 두면 돼요. **속도는 잊고**, 계단을 또박또박 밟는 것부터 몸에 새겨요.

## ② 시각 자료

오늘은 두 가지예요. 먼저 **부기 워크 손모양(R-5-6-b7)**을 지판에서 통째로 보고, 그다음 그 네 음을 한 박씩 **상행**으로 올라가요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **부기 손모양 지도**예요. 파랑 셋은 루트·5도·6도, 무색 하나가 **b7도(D)**예요. <mark>4번 현 개방에서 3번 현 2·4·5프렛으로 이어지는 계단이에요.</mark>

```json
{
  "id": "m1.w2.d2.boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4현.** 루트 **E**(4번 현 개방) → **5도 B**(2프렛) → **6도 C#**(4프렛) → **b7 D**(5프렛). 손가락이 밟을 자리를 눈에 새겨요.

```json
{
  "id": "m1.w2.d2.boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 **B**는 재워 두고 네 계단에만 집중해요.

이제 **부기 상행**이에요. 한 음이 한 박씩, R에서 b7까지 계단을 걸어 올라가요. <mark>네 음이 끊기지 않고 이어지는 흐름을 느껴요.</mark>

```json
{
  "id": "m1.w2.d2.boogie_ascent_4",
  "type": "tab",
  "meta": { "title": "Boogie ascent R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70, 셔플.** **R(E) → 5(B) → 6(C#) → b7(D)**를 한 박씩 또박또박. 롱-숏 필을 살짝만 얹어 계단을 올라가요.

```json
{
  "id": "m1.w2.d2.boogie_ascent_5",
  "type": "tab",
  "meta": { "title": "Boogie ascent R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어, 상행 내내 새지 않게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 **R-5 셔플**을 개방 E로 BPM 60에 굴리며 손을 풀어요. 롱-숏이 살아 있는지 확인하고 시작해요.

**10~20분 · 두뇌 훈련**
소리 없이 **R-5-6-b7** 손모양만 아주 느리게 짚어 올라가요. <mark>손가락이 2·4·5프렛 순서를 기억하는지</mark> 눈을 감고도 확인해요.

**20~40분 · 실전**
**부기 상행**을 **BPM 70**에서 반복해요. 네 음이 계단처럼 고르게 이어지는 게 목표 — 빨라지려 하지 말아요. 4현으로 익힌 뒤 5현으로도 같은 손모양을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **네 음이 또렷이 계단처럼** 올라가는지 들어봐요. 오늘 도달한 BPM도 적어 둬요.

**오늘의 완료 기준:** R-5-6-b7 부기 상행을 BPM 70에서 네 음이 고르게 이어지도록, 4현·5현 둘 다 올라갈 수 있다.

## ④ 팁 / 흔한 실수

- **6도와 b7이 헷갈려요.** 4프렛과 5프렛이 붙어 있어 자리를 놓치기 쉬워요. 아주 느리게 2·4·5프렛을 짚으며 순서를 굳혀요.
- **올라갈수록 빨라져요.** 계단 위쪽에서 급해지곤 해요. 네 음의 간격을 똑같이 유지해요.
- **음이 끊겨요.** 손가락이 늦게 도착해 계단 사이가 비어요. 다음 음을 미리 준비해 이어 밟아요.
- **저음 B 방심(5현).** 손이 3번 현 위쪽까지 바빠져도 B는 엄지로 덮어 둬요.
