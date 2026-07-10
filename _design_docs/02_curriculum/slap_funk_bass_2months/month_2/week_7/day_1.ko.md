---
title: "팝핑 멜로디 — 고음현에서 노래하기"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 팝핑 멜로디, 고음현에서 노래하기

## ① 이론/설명

**7주차**예요! 지금까지 슬랩의 주인공은 **썸(엄지)**이었죠. 저역을 **드럼처럼** 쳐서 그루브를 든든히 받쳤어요. 이번 주는 무대의 조명을 **팝(손가락 튕김)**으로 옮겨요. <mark>팝은 고역에서 노래해요.</mark> 고음현을 손가락으로 걸어 튕기면, 슬랩이 리듬을 넘어 **멜로디**가 되기 시작해요. 저역을 받쳐 온 썸은 잠시 쉬고, 오늘은 **검지 하나**로 노래를 불러 볼 거예요.

오늘의 멜로디는 **G현(1번현)** 위 세 음이에요. 개방 **G**는 E 마이너 펜타의 **b3**, 2프렛 **A**는 **4**, 4프렛 **B**는 **5**예요. 이 <mark>**b3-4-5**를 팝으로</mark> 올라갔다 내려오면, 그게 바로 세 음짜리 팝 멜로디예요. 낮은 썸이 아니라, 높고 밝은 자리에서 튕겨 올려요.

팝의 요령은 힘이 아니라 **걸어서 튕기기**예요. 검지 끝을 현 **밑에 살짝 걸고**, 손목을 돌려 <mark>현을 지판에서 떼었다 놓아요</mark>. '탁' 하고 맑게 튀면 성공이에요. **BPM 75**로 느리게 시작해, 세 음의 **크기가 고르게** 나는지에만 집중해요. 손가락이 아프면 너무 세게 당긴 거예요 — 걸었다 **놓는 느낌**으로 부드럽게 힘을 빼요. 팝은 세기보다 **각도**가 중요해서, 손톱보다 살짝 위쪽 살로 걸면 소리가 더 맑아요.

**5현**이라도 고음현은 4현과 똑같아요. 팝은 **G현**에서 나니까, 저음 **B**는 그냥 엄지로 덮어 재워 두면 돼요. 오늘 이 세 음이 또렷해지면, 내일은 두 음을 한 번에 튕기는 **더블스탑**으로 넘어가요. 먼저 팝이 살 세 자리를 지판으로 찍어요 — **b3·4·5**, 오늘 멜로디는 전부 여기서 나와요.

```json
{
  "id": "m2.w7.d1.pop_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Popping melody home (G string, b3-4-5) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 개방 **G**(b3), 2프렛 **A**(4), 4프렛 **B**(5). 오늘 멜로디는 이 세 자리에서 나요.

```json
{
  "id": "m2.w7.d1.pop_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Popping melody home (G string, b3-4-5) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" },
    { "string": 1, "fret": 2, "label": "4", "role": "scale" },
    { "string": 1, "fret": 4, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 손 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두세요.

## ② 시각 자료

오늘은 **팝 멜로디** 하나를 몸에 새겨요. 먼저 **팝 펄스**로 손가락을 데운 뒤, <mark>b3-4-5 아치</mark>를 반복해요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **팝 펄스**. 개방 **G**(b3)를 4분음표로 또박또박 튕겨, 팝의 **맑은 타점**을 먼저 잡아요.

```json
{
  "id": "m2.w7.d1.pop_pulse_4",
  "type": "tab",
  "meta": { "title": "Pop quarter-note pulse (G, b3) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** 네 번의 팝이 멜로디가 얹힐 기둥이에요.

```json
{
  "id": "m2.w7.d1.pop_pulse_5",
  "type": "tab",
  "meta": { "title": "Pop quarter-note pulse (G, b3) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **5현.** 음은 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

이제 세 음을 이어 **아치**를 그려요. **b3-4-5**로 올라 **4-b3**로 내려오는 <mark>세 음짜리 멜로디</mark>예요.

```json
{
  "id": "m2.w7.d1.pop_arch_4",
  "type": "tab",
  "meta": { "title": "Pop melody arch (b3-4-5-4-b3) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** b3-4-5로 올라 4-b3로 내려와요. 세 음의 크기가 나란해야 해요.

```json
{
  "id": "m2.w7.d1.pop_arch_5",
  "type": "tab",
  "meta": { "title": "Pop melody arch (b3-4-5-4-b3) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
지난주 펜타 릭을 **BPM 60**으로 가볍게 흘려 손을 깨워요. 오늘은 오른손 검지를 <mark>팝 자세</mark>로 미리 준비해 둬요.

**10~20분 · 두뇌 훈련**
아래처럼 **아주 느리게**, 1마디는 팝 펄스, 2마디는 **b3-4-5 아치**예요.

```json
{
  "id": "m2.w7.d1.pop_slow_4",
  "type": "tab",
  "meta": { "title": "Pop pulse + arch, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 1마디 펄스, 2마디 아치. 세 음의 크기가 고른지 귀로 확인해요.

```json
{
  "id": "m2.w7.d1.pop_slow_5",
  "type": "tab",
  "meta": { "title": "Pop pulse + arch, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지 옆면으로 덮어 두세요.

**20~40분 · 실전**
아치 멜로디를 **BPM 75**에서 반복해요. 소리가 <mark>뭉개지면</mark> 속도를 낮춰 팝의 맑은 타점부터 살려요. 4현으로 익힌 뒤 5현으로도 같은 멜로디를 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>세 음이 고르게 튀는지</mark> 들어봐요. 오늘 편했던 BPM도 적어 둬요.

**오늘의 완료 기준:** 고음현에서 b3-4-5 팝 멜로디를 BPM 75에서 세 음의 크기를 고르게 튕길 수 있다.

## ④ 팁 / 흔한 실수

오늘 배운 팝 아치를 **BPM 85**로 살짝 밀어, 빨라져도 세 음이 고르게 살아 있는지 확인해요.

```json
{
  "id": "m2.w7.d1.pop_check_4",
  "type": "tab",
  "meta": { "title": "Pop melody arch check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 85, 4현.** 조금 빨라져도 **b3-4-5 아치**가 고르게 살아 있는지 확인해요.

```json
{
  "id": "m2.w7.d1.pop_check_5",
  "type": "tab",
  "meta": { "title": "Pop melody arch check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 1, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 늘 엄지로 덮어 두세요.

- **팝이 아파요.** 현을 너무 세게 당기면 손끝이 아파요. **걸었다 놓는 느낌**으로 힘을 빼요.
- **5번 음이 약해요.** 4프렛 **B**로 갈수록 팝이 여려지기 쉬워요. 먼 음일수록 **또렷하게** 걸어요.
- **소리가 뭉개져요.** 손가락을 현에 오래 걸면 뭉개져요. **짧고 빠르게** 튕겨 놓아요.
- **저음 B 방심(5현).** 멜로디에 몰두하다 B가 울리기 쉬워요. 엄지 옆면으로 늘 B를 덮어 두세요.
