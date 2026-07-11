---
title: "루트 + 5도 — R-5 셔플"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 루트에 5도 얹기, R-5 셔플

## ① 이론/설명

지난주엔 개방 **E** 하나로 셔플 루트를 굴렸어요. 이번 주는 그 루트에 음을 하나씩 얹어 <mark>통통 튀는 부기 베이스</mark>로 키워 가요. 오늘 새로 더할 음은 **5도** 하나예요. 루트 위에 5도를 살짝 얹기만 해도, 한 음짜리 펄스가 갑자기 '움직이는' 베이스라인처럼 들려요.

**5도**는 루트 **E**에서 다섯 번째 음, 바로 **B**예요. 자리는 **3번 현 2프렛** — 4번 현 개방 E 바로 옆이라 손이 크게 움직이지 않아요. 오늘은 이 **B** 하나만 새로 외우면 돼요. <mark>루트는 아래 현, 5도는 그 위 현 — 두 음이 짝을 이뤄요.</mark>

굴리는 방법은 이래요. 한 박을 롱-숏으로 나눠, **앞(긴 음)엔 루트 E**, **뒤(짧은 음, '아')엔 5도 B**를 얹어요. 그러면 박마다 **R-5**가 번갈아 나오죠. 셔플 필은 지난주 그대로예요 — <mark>롱-숏만 살아 있으면 5도가 저절로 통통 튀어요.</mark>

**속도는 완전히 잊으세요.** 오늘 목표는 빠르기가 아니라, 루트와 5도가 롱-숏 위에서 또렷이 짝지어 구르는 거예요. <mark>4번 현과 3번 현을 오가는 현 이동만 아주 느리게 다듬으면 충분해요.</mark> **5현**이라면 운지는 똑같고 저음 **B**만 엄지로 재워 두면 돼요. 이 **R-5** 짝이 이번 주 부기 워크의 첫 두 계단이에요.

## ② 시각 자료

오늘은 두 가지예요. 먼저 **루트(E)와 5도(B)의 위치**를 지판에서 나란히 확인하고, 그다음 그 둘을 롱-숏으로 굴리는 **R-5 셔플**을 익혀요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **두 음의 지도**를 봐요. 아래 파랑이 루트 **E**(4번 현 개방), 그 위 파랑이 **5도 B**(3번 현 2프렛)예요. <mark>루트 바로 옆·위에 5도가 있어요.</mark>

```json
{
  "id": "m1.w2.d1.root_fifth_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Root and 5th — E and B — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 아래가 루트 **E**, 위가 **5도 B**(3번 현 2프렛)예요. 두 음이 어떻게 붙어 있는지 눈에 익혀요.

```json
{
  "id": "m1.w2.d1.root_fifth_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Root and 5th — E and B — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 **B**는 재워 두고 루트와 5도에만 집중해요.

이제 **R-5 셔플**이에요. 박의 앞엔 루트 **E**, 뒤엔 5도 **B** — 롱-숏으로 굴리면 두 음이 통통 짝지어 나와요. <mark>한 음이던 셔플이 두 음의 움직임으로 넓어져요.</mark>

```json
{
  "id": "m1.w2.d1.r5_shuffle_4",
  "type": "tab",
  "meta": { "title": "R-5 shuffle (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 셔플(롱-숏).** 박의 앞음에 개방 **E**, 뒷음에 **5도 B**(3번 현 2프렛). 앞을 길게·뒤를 짧게 굴려요.

```json
{
  "id": "m1.w2.d1.r5_shuffle_5",
  "type": "tab",
  "meta": { "title": "R-5 shuffle (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "eighth", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어, 셔플 내내 새지 않게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 **셔플 루트**를 개방 E로 BPM 60에 굴리며 롱-숏을 깨워요. 앞음이 길고 뒷음이 짧은지 확인하고 시작해요.

**10~20분 · 두뇌 훈련**
루트 **E**(4번 현)와 **5도 B**(3번 현 2프렛)를 아주 느리게 번갈아 짚어요. <mark>현을 옮겨도 롱-숏이 그대로인지</mark>, 그 유지에만 집중해요.

**20~40분 · 실전**
**R-5 셔플**을 **BPM 70**에서 반복해요. 앞엔 루트, 뒤엔 5도 — 두 음이 고르게 짝지어 구르는 게 목표예요. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **루트와 5도가 또렷이 번갈아** 들리는지 들어봐요. 오늘 도달한 BPM도 적어 둬요.

**오늘의 완료 기준:** 박의 앞에 루트 E, 뒤에 5도 B를 얹어 R-5 셔플을 BPM 70에서 롱-숏으로, 4현·5현 둘 다 굴릴 수 있다.

## ④ 팁 / 흔한 실수

- **5도가 늦게 나와요.** 3번 현으로 손을 옮기다 뒷음이 밀리기 쉬워요. 두 현을 아주 느리게 오가며 이동을 먼저 다듬어요.
- **두 음 크기가 달라요.** 루트만 크고 5도가 작아지곤 해요. 앞뒤 세기를 비슷하게 맞춰요.
- **롱-숏이 밋밋해져요.** 음이 하나 늘면 셔플 필을 놓치기 쉬워요. 앞음을 확실히 길게 지켜요.
- **저음 B 방심(5현).** 현을 오가는 내내 B는 엄지로 덮어 둬요. 손이 바빠지면 B가 새기 쉬워요.
