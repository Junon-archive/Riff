---
title: "더블스탑 — 두 음을 한 번에"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 더블스탑, 두 음을 한 번에

## ① 이론/설명

어제는 고음현에서 세 음을 **하나씩** 튕겼죠. 오늘은 두 음을 <mark>한 번에</mark> 튕겨요. 이걸 **더블스탑**이라고 해요. 두 현을 동시에 팝하면, 베이스 한 대에서 <mark>화음 같은 울림</mark>이 나요. 멜로디가 갑자기 두툼하고 꽉 차게 들리죠. 한 음이 노래라면, 더블스탑은 **두 음이 함께 부르는 화음**이에요. 어렵지 않아요 — 이미 아는 팝을 두 줄에 동시에 쓰는 것뿐이에요.

오늘의 두 음은 **D현(2번현) 개방 D**와 **G현(1번현) 개방 G**예요. **D**는 E 마이너의 **b7**, **G**는 **b3**이죠. 둘 다 개방현이라 왼손은 편해요 — 오늘의 주인공은 **오른손**이에요. 두 현을 정확히 같은 순간에 튕겨, 두 음이 <mark>한 덩어리</mark>로 울리게 만들어요.

요령은 손가락 **두 개**를 쓰는 거예요. **검지**를 낮은 D현 밑에, **중지**를 높은 G현 밑에 살짝 걸고, 두 손가락을 <mark>동시에 위로 튕겨요</mark>. 한 음만 크고 한 음이 작으면 아직 안 맞은 거예요. **BPM 75**로 느리게, 두 음이 **같은 크기**로 '탁' 하고 함께 튀는지에 집중해요. 두 손가락이 어색하면, 검지 하나로 두 현을 함께 걸어 당겨도 돼요. 어느 쪽이든 두 현을 **같은 깊이**로 걸는 게 핵심이에요.

**5현**이라도 두 음은 4현과 똑같아요. 팝은 고음현 두 줄에서 나니까, 저음 **B**는 엄지로 덮어 두면 돼요. 오늘 **D+G 더블스탑** 하나가 또렷하게 울리면, 모레 이 소리를 팝 멜로디 라인 끝에 얹게 돼요. 먼저 두 음이 살 자리를 지판으로 찍어요 — **b7과 b3**, 두 개방현이에요.

```json
{
  "id": "m2.w7.d2.dstop_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Double-stop shape (D+G, b7+b3) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **4현.** 아래 **D**(b7)는 검지, 위 **G**(b3)는 중지로 함께 걸어요. 두 개방현이에요.

```json
{
  "id": "m2.w7.d2.dstop_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Double-stop shape (D+G, b7+b3) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 0, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 0, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **5현.** 손 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두세요.

## ② 시각 자료

오늘은 **더블스탑** 하나를 만들어요. 먼저 두 음을 **하나씩** 나눠 튕겨 자리를 익힌 뒤, <mark>두 음을 한 번에</mark> 겹쳐요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **낱개 팝**. **D**(b7)와 **G**(b3)를 번갈아 튕겨, 두 현의 팝 감각을 각각 익혀요.

```json
{
  "id": "m2.w7.d2.dstop_singles_4",
  "type": "tab",
  "meta": { "title": "Single pops (D, G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** D와 G를 번갈아 팝해요. 두 현이 각각 또렷하게 튀어야 해요.

```json
{
  "id": "m2.w7.d2.dstop_singles_5",
  "type": "tab",
  "meta": { "title": "Single pops (D, G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

이제 두 음을 **겹쳐** 튕겨요. **D+G**를 동시에 팝하는 <mark>더블스탑</mark>이에요.

```json
{
  "id": "m2.w7.d2.double_stop_4",
  "type": "tab",
  "meta": { "title": "Double-stop D+G — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** 두 손가락으로 D와 G를 동시에. 두 음이 한 덩어리로 울려야 해요.

```json
{
  "id": "m2.w7.d2.double_stop_5",
  "type": "tab",
  "meta": { "title": "Double-stop D+G — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 팝 아치를 **BPM 60**으로 가볍게 흘려 손을 깨워요. 오늘은 검지·중지 <mark>두 손가락</mark>을 미리 벌려 둬요.

**10~20분 · 두뇌 훈련**
아래처럼 **아주 느리게**, 1마디는 낱개 팝, 2마디는 **더블스탑**이에요.

```json
{
  "id": "m2.w7.d2.dstop_slow_4",
  "type": "tab",
  "meta": { "title": "Singles + double-stop, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 1마디 낱개, 2마디 더블스탑. 두 음이 같은 크기인지 귀로 확인해요.

```json
{
  "id": "m2.w7.d2.dstop_slow_5",
  "type": "tab",
  "meta": { "title": "Singles + double-stop, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 2, "fret": 0, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지 옆면으로 덮어 두세요.

**20~40분 · 실전**
더블스탑을 **BPM 75**에서 반복해요. 한 음이 <mark>작아지면</mark> 속도를 낮춰 두 손가락의 힘을 맞춰요. 4현으로 익힌 뒤 5현으로도 같은 소리를 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>두 음이 함께 울리는지</mark> 들어봐요. 오늘 편했던 BPM도 적어 둬요.

**오늘의 완료 기준:** D+G 더블스탑을 BPM 75에서 두 음이 같은 크기로 함께 울리게 튕길 수 있다.

## ④ 팁 / 흔한 실수

오늘 배운 더블스탑을 **BPM 85**로 살짝 밀어, 빨라져도 두 음이 함께 살아 있는지 확인해요.

```json
{
  "id": "m2.w7.d2.dstop_check_4",
  "type": "tab",
  "meta": { "title": "Double-stop check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 85, 4현.** 조금 빨라져도 **두 음**이 함께 또렷하게 살아 있는지 확인해요.

```json
{
  "id": "m2.w7.d2.dstop_check_5",
  "type": "tab",
  "meta": { "title": "Double-stop check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 0, "duration": "eighth", "label": "b7", "role": "scale", "technique": "slap_pop", "chord": [ { "string": 1, "fret": 0, "label": "b3", "role": "scale" } ] },
      { "string": 2, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 늘 엄지로 덮어 두세요.

- **한 음만 커요.** 검지와 중지의 힘이 다르면 한쪽이 튀어요. **두 손가락을 같은 세기**로 맞춰요.
- **한 음이 늦어요.** 두 손가락이 어긋나면 '따-닥'으로 갈라져요. **동시에** 튕겨 한 덩어리로 만들어요.
- **소리가 뭉개져요.** 현을 너무 오래 걸면 뭉개져요. **짧게 걸었다 놓아요**.
- **저음 B 방심(5현).** 더블스탑에 몰두하다 B가 울리기 쉬워요. 엄지 옆면으로 늘 B를 덮어 두세요.
