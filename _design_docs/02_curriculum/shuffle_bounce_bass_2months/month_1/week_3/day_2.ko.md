---
title: "B 부기 — V(B7)로 이동"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — V로 이동, B 부기

## ① 이론/설명

어제 A 부기로 IV 자리를 익혔어요. 오늘은 마지막 자리, **V(B7)**로 폼을 옮겨요. 방법은 똑같아요 — <mark>손모양은 그대로, 루트 자리만 바꿔요.</mark> 이제 I·IV·V 세 자리가 모두 손에 들어와요. 세 자리를 다 갖추면, 12마디 어느 마디가 나와도 손이 어디로 갈지 미리 알게 돼요.

B7의 루트 **B**는 **3번 현 2프렛**이에요. A 부기가 3번 현 개방에서 출발했다면, B 부기는 같은 현에서 두 칸 위로 올라가 출발해요. 나머지 **5-6-b7**은 2번 현 4·6·7프렛에 얹혀요. <mark>A 부기 계단을 통째로 두 프렛 밀어 올린 모양이에요.</mark> 손 전체가 살짝 위로 미끄러졌을 뿐, 계단의 생김새는 하나도 안 변했어요. 그래서 새 자리라도 낯설지 않아요.

V는 12마디에서 곡을 **밀고 나가는** 긴장의 자리예요. B7이 나오면 '이제 한 바퀴가 끝나간다'는 신호예요. 자리는 조금 높지만 **R-5-6-b7** 계단은 하나도 안 변해요. <mark>여기까지 오면 세 코드가 모두 같은 폼이라는 게 실감 나요.</mark> 하나의 손모양을 세 자리로 옮기는 것뿐인데, 어느새 블루스 한 곡의 흐름이 손안에 그려져요.

속도는 잊어요. 오늘은 B 부기를 또렷이 굴리는 것, 그리고 개방이 없는 자리라 **왼손이 프렛을 정확히** 짚는 것에 집중해요. <mark>2프렛부터 7프렛까지, 손을 미리 펼쳐 두면 편해요.</mark> 개방현이 없으니 왼손 힘이 조금 더 필요하지만, 그만큼 음이 또렷하고 단단하게 나와요. **5현**이라면 운지는 똑같고 저음 B만 재워 둬요.

## ② 시각 자료

오늘도 두 가지예요. **B 부기 손모양**을 지판에서 확인하고, 그 폼을 굴리는 **B 부기 셔플**을 익혀요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **B 부기 손모양**이에요. 아래 파랑이 루트 **B**(3번 현 2프렛), 그 위가 5도·6도, 무색이 **b7**이에요. <mark>A 부기가 두 프렛 위로 옮겨간 자리예요.</mark>

```json
{
  "id": "m1.w3.d2.b_boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "B boogie shape R-5-6-b7 (B7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 8, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4현.** 루트 **B**(3번 현 2프렛) → **5도 F#**(2번 현 4프렛) → **6도 G#**(6프렛) → **b7 A**(7프렛)예요.

```json
{
  "id": "m1.w3.d2.b_boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "B boogie shape R-5-6-b7 (B7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 8, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 **B**는 재워 두고 B 루트에 집중해요.

이제 그 손모양을 굴리는 **B 부기 셔플**이에요. 1마디에 올라갔다 2마디에 내려오며 <mark>롱-숏으로 통통 튀게 굴려요.</mark>

```json
{
  "id": "m1.w3.d2.b_boogie_4",
  "type": "tab",
  "meta": { "title": "B boogie shuffle (B7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70, 셔플.** 루트 **B**(3번 현 2프렛)에서 **5-6-b7**(2번 현 4·6·7프렛) 계단을 오르내려요. A 부기보다 두 프렛 위예요.

```json
{
  "id": "m1.w3.d2.b_boogie_5",
  "type": "tab",
  "meta": { "title": "B boogie shuffle (B7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 새지 않게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 **A 부기 셔플**을 BPM 60에 굴리며 손을 풀어요. 자리 이동이 매끄러운지 확인하고 시작해요.

**10~20분 · 두뇌 훈련**
**B 부기 손모양**을 아주 느리게 짚어요. 개방이 없으니 <mark>왼손이 2·4·6·7프렛을 정확히 누르는지</mark> 확인하며 외워요.

**20~40분 · 실전**
**B 부기 셔플**을 **BPM 70**에서 반복해요. 프렛이 흐릿해지지 않게 또렷이 짚는 게 목표예요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **B 부기의 음이 또렷한지** 들어봐요. 오늘 도달한 BPM도 적어 둬요.

**오늘의 완료 기준:** B 부기 셔플(R-5-6-b7)을 V(B7) 자리에서 BPM 70에 롱-숏으로, 4현·5현 둘 다 굴릴 수 있다.

## ④ 팁 / 흔한 실수

- **음이 흐릿해요.** 개방이 없어 프렛을 덜 누르면 소리가 뭉개져요. 손가락 끝으로 또렷이 눌러요.
- **손이 멀어 b7이 늦어요.** 7프렛까지 손을 미리 펼쳐 두면 뒷음이 밀리지 않아요.
- **롱-숏이 밋밋해져요.** 높은 자리에서도 셔플 필은 그대로예요. 각 음의 앞을 확실히 길게 지켜요.
- **저음 B 방심(5현).** B7에선 루트 B가 바빠도, 안 쓰는 저음 현은 엄지로 덮어 둬요.
