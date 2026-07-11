---
title: "바운스 루트 라인 — 여백으로 튀는 네오소울 루트"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — 바운스 루트 라인, 여백으로 튀는 네오소울 루트

## ① 이론/설명

16분 그리드를 세웠으니, 오늘은 그 위에 **바운스 루트 라인**을 얹어요. 네오소울 베이스는 음을 빼곡히 채우기보다, <mark>루트 하나를 툭 던지고 여백을 남기는 방식으로 통통 튀어요.</mark> 오늘의 재료는 딱 하나, 개방 **E 루트**예요.

핵심은 **여백**이에요. 16분 그리드 위에서 루트를 몇 칸만 골라 치고, 나머지 칸은 **쉼표**로 비워요. <mark>비운 자리가 있어야 친 자리가 더 또렷하게 튀어요.</mark> 손이 쉬는 순간에도 머릿속으로는 "원-이-앤-아"를 계속 세는 게 관건이에요.

여기에 **스윙16**을 얹으면 라인이 눕기 시작해요. 정박으로 배치한 루트를, 뒤 칸에 걸린 음만 살짝 늦춰요. <mark>딱딱하던 루트 라인이 뒤로 눕는 순간, 네오소울 특유의 끈적함이 생겨요.</mark> 음은 그대로, 타이밍만 바꾸는 거예요.

**BPM 65**에서 두 가지 라인을 익혀요. 하나는 박마다 루트를 던지는 단순한 바운스, 다른 하나는 여백을 살린 조금 더 네오소울다운 라인이에요. <mark>루트가 여백을 두고 통통 튀면 오늘은 성공이에요.</mark> 4현이든 5현이든 운지는 똑같아요.

## ② 시각 자료

오늘의 시각 자료는 두 가지예요. 먼저 <mark>박마다 루트를 던지는 단순한 바운스</mark>로 여백을 익히고, 그다음 여백을 더 살린 네오소울 루트 라인으로 넘어가요. 각 예제는 4현·5현 두 버전이에요.

먼저 **단순한 바운스 루트**예요. 개방 E를 박마다 8분음표로 '둥' 던지고, 나머지 반 박은 쉼표로 비워요.

```json
{
  "id": "m2.w6.d2.bounce_root_4",
  "type": "tab",
  "meta": { "title": "Bounce root (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65, 스윙16.** 박마다 루트 하나, 그다음은 여백. 쉬는 반 박에도 속으로 계속 세요. **5현이라면** 저음 B는 재워 둬요.

```json
{
  "id": "m2.w6.d2.bounce_root_5",
  "type": "tab",
  "meta": { "title": "Bounce root (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

이번엔 <mark>여백을 더 살린 네오소울 루트 라인</mark>이에요. 16분과 쉼표를 섞어 루트가 앞뒤로 살짝 어긋나게 튀어요.

```json
{
  "id": "m2.w6.d2.bounce_root_neo_4",
  "type": "tab",
  "meta": { "title": "Neo-soul bounce root (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65, 스윙16.** 16분 루트와 쉼표를 섞어 끈적하게. 뒤 칸에 걸린 음은 살짝 늦춰요. **5현이라면** 저음 B 뮤팅 유지.

```json
{
  "id": "m2.w6.d2.bounce_root_neo_5",
  "type": "tab",
  "meta": { "title": "Neo-soul bounce root (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
개방 E 루트를 8분음표로 '둥둥' 던지며 손을 풀어요. 힘을 빼고 한 음이 깔끔하게 울리는지 확인해요.

**10~20분 · 두뇌 훈련**
쉼표 자리에서도 "원-이-앤-아"를 계속 세요. <mark>친 자리와 빈 자리가 또렷이 나뉘는지</mark> 확인해요.

**20~40분 · 실전**
**단순한 바운스 루트**와 **네오소울 루트 라인**을 BPM 65에서 번갈아 연습해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음**
네오소울 루트 라인을 녹음해 다시 들어요. 여백이 살아 루트가 통통 튀는지 점검해요.

**오늘의 완료 기준:** 16분 그리드 위에 여백을 둔 스윙16 바운스 루트 라인을 만들어, 4현·5현 둘 다에서 확인할 수 있다.

## ④ 팁 / 흔한 실수

- **여백을 못 참아요.** 빈 칸을 음으로 채우면 바운스가 사라져요. 쉼표도 리듬의 일부예요.
- **쉴 때 박을 놓쳐요.** 손이 쉬어도 카운트는 멈추면 안 돼요. 속으로 계속 세요.
- **뒤 칸을 당겨요.** 스윙16은 늦추는 거예요. 뒤에 걸린 음을 살짝 뒤로 눕혀요.
- **저음 B 방심(5현).** 한 마디 내내 안 쓰는 저음 B는 엄지로 덮어 둬요.
