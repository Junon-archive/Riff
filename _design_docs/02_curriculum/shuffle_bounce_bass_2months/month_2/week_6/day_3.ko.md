---
title: "고스트 + 스윙16 — 둥-칙으로 끈적해지는 바운스"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — 고스트 + 스윙16, 둥-칙으로 끈적해지는 바운스

## ① 이론/설명

지난주에 익힌 **고스트("칙")**를 오늘 16분 그리드에 끼워요. 루트만 있던 라인의 빈칸을 고스트로 채우면, <mark>루트가 '둥' 하고 나온 뒤 '칙칙'이 뒤를 받쳐 그루브가 훨씬 끈적해져요.</mark> 어제의 여백을 이번엔 소리로, 그것도 음정 없는 타격음으로 메우는 거예요.

배치는 간단해요. 각 박의 **첫 칸에 루트**, 나머지 칸에 **고스트**를 깔아요. 고스트는 왼손을 살짝 얹어 음정 없이 "칙"만 내는 거, 기억하죠? <mark>루트는 또렷하게, 고스트는 살짝 작게 깔면 바운스가 매끄럽게 굴러가요.</mark> 여기에 스윙16으로 뒤 칸을 늦추면 끈적함이 배가돼요.

익숙해지면 **5도**를 한 방울 얹어요. E의 5도인 **B**(3번 줄 2프렛)를 박 사이에 살짝 넣으면 라인이 노래하기 시작해요. <mark>루트와 고스트 사이에 5도 하나가 끼면, 밋밋하던 그루브에 색이 돌아요.</mark> 내일 완성할 그루브의 예고편인 셈이에요.

**BPM 70**에서 두 라인을 익혀요. 루트+고스트만으로 굴리는 바운스, 그리고 5도를 살짝 얹은 바운스예요. <mark>둥-칙 사이가 스윙16으로 눕고 5도가 색을 더하면 오늘은 성공이에요.</mark> 4현이든 5현이든 운지는 똑같아요.

## ② 시각 자료

오늘의 시각 자료는 두 가지예요. 먼저 <mark>루트+고스트만으로 굴리는 바운스</mark>를 익히고, 그다음 5도를 한 방울 얹은 바운스로 넘어가요. 각 예제는 4현·5현 두 버전이에요.

먼저 **루트+고스트 바운스**예요. 각 박 첫 칸에 개방 E 루트, 나머지 세 칸에 고스트("칙")를 깔아요.

```json
{
  "id": "m2.w6.d3.ghost_bounce_4",
  "type": "tab",
  "meta": { "title": "Ghost bounce (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70, 스윙16.** 둥(루트) 뒤에 칙-칙-칙 세 개. 고스트는 살짝 작게, 뒤 칸은 살짝 늦게. **5현이라면** 저음 B는 재워 둬요.

```json
{
  "id": "m2.w6.d3.ghost_bounce_5",
  "type": "tab",
  "meta": { "title": "Ghost bounce (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

이번엔 <mark>5도를 한 방울 얹은 바운스</mark>예요. 두 번째 박 자리에 5도 **B**(3번 줄 2프렛)를 넣어 라인에 색을 더해요.

```json
{
  "id": "m2.w6.d3.ghost_bounce_5th_4",
  "type": "tab",
  "meta": { "title": "Ghost bounce + 5th (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70, 스윙16.** 둥-칙 사이에 5도 B 한 방울. 고스트로 끈적함을 유지하며 색을 더해요. **5현이라면** 저음 B 뮤팅 유지.

```json
{
  "id": "m2.w6.d3.ghost_bounce_5th_5",
  "type": "tab",
  "meta": { "title": "Ghost bounce + 5th (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
지난주의 고스트 "칙"을 개방 E 루트와 번갈아 가볍게 복습하며 손을 풀어요. 마른 "칙"이 잘 나는지 확인해요.

**10~20분 · 두뇌 훈련**
각 박 첫 칸의 루트와 나머지 칸의 고스트가 제자리에 오는지 느리게 되짚어요. <mark>둥과 칙이 16분 네 칸에 고르게 앉는지</mark> 확인해요.

**20~40분 · 실전**
**루트+고스트 바운스**와 **5도를 얹은 바운스**를 BPM 70에서 번갈아 연습해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음**
5도를 얹은 바운스를 녹음해 다시 들어요. 고스트가 끈적함을 만들고 5도가 색을 더했는지 점검해요.

**오늘의 완료 기준:** 루트와 고스트를 16분 그리드에 엮고 5도를 한 방울 얹어 스윙16 바운스 그루브를 만들어, 4현·5현 둘 다에서 확인할 수 있다.

## ④ 팁 / 흔한 실수

- **칙이 둥을 덮어요.** 고스트가 루트보다 크면 바운스가 무거워져요. 칙은 살짝 작게.
- **고스트가 울려요.** 왼손을 너무 살살 얹으면 "웅~" 하는 잡음이 나요. 줄을 확실히 죽일 만큼만 얹어요.
- **5도를 너무 세게 눌러요.** 5도는 색을 더하는 한 방울이에요. 루트만큼 크면 라인이 무거워져요.
- **저음 B 방심(5현).** 한 마디 내내 안 쓰는 저음 B는 엄지로 덮어 둬요.
