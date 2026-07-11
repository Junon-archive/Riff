---
title: "스윙 4분음 필 — 균일하게 전진하는 걸음"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — 스윙 4분음, 균일하게 전진하는 걸음

## ① 이론/설명

드디어 1개월차의 마지막 주예요. 한 달 전 첫날을 떠올려 봐요. 그땐 **루트** 한 음을 짚는 것도 신경 써야 했는데, 이제는 코드톤으로 걷고 접근음으로 다음 코드까지 겨냥해요. 이번 주엔 그 모든 걸 모아 <mark>F 블루스 12마디를 처음부터 끝까지 걸어요</mark>. 그 첫걸음이 오늘의 주제, **스윙 4분음 필**이에요.

워킹의 심장은 **4분음**이에요. 한 마디에 네 번, 매 박마다 한 음씩 또박또박 걷는 거죠. 그런데 재즈·블루스의 4분음은 자로 잰 듯 똑같은 길이가 아니라 살짝 **스윙**이 들어가요. 앞 박은 조금 길게, 뒤 박은 조금 짧게 — 걷는 사람이 살짝 튕기듯 걸어가는 느낌이에요. 우리 악보는 정박으로 그리고, 그 위에 **swing** 지시만 붙여요. 삼잇단처럼 과하게 굴리지 말고, <mark>편하게 그루브를 타는 정도</mark>면 충분해요.

스윙 4분음에서 가장 중요한 두 가지는 **균일함**과 **전진감**이에요. 네 박의 크기가 고르게 유지돼야 워킹이 흔들리지 않고, 매 박이 다음 박을 향해 앞으로 미는 느낌이 있어야 걸음이 살아나요. 오늘은 F7 한 코드 위에서 이 느낌만 손에 붙여요. **R-3-5-b7**로 올라갔다가 다시 내려오며, 네 박이 한결같이 전진하는 걸음을 만들어요. 이 감각이 몸에 배면 남은 사흘 동안 12마디를 걷는 건 시간문제예요.

먼저 F7의 코드톤 네 개를 지판에서 봐요 — **R·3·5·b7**이에요.

```json
{
  "id": "m1.w4.d1.f7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** F7의 R(4번현 1프렛)·3(4번현 5프렛)·5(3번현 3프렛)·b7(3번현 6프렛)이에요.

```json
{
  "id": "m1.w4.d1.f7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 그 스윙 4분음을 F7 한 코드 위에서 걸어 봐요. **R-3-5-b7**로 올라갔다가 **5-3-R**로 내려오고, 마지막 4박에 접근음 **E**를 놓아 다시 F로 이어져요. <mark>네 박이 고르게, 앞으로 미는 느낌으로</mark> 굴러가는지 귀로 확인해요. 모든 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m1.w4.d1.swing_walk_f7_4",
  "type": "tab",
  "meta": { "title": "F7 swing quarter-note walk — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1마디는 F7 코드톤을 올라가고, 2마디는 내려와 4박 E(2번현 2프렛)로 F를 겨냥해요. 네 박이 한결같이 균일하게.

```json
{
  "id": "m1.w4.d1.swing_walk_f7_5",
  "type": "tab",
  "meta": { "title": "F7 swing quarter-note walk — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
3주차의 접근음 워킹을 BPM 72로 한 번 걸어요. 손끝에 워킹 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 F7 코드톤을 **BPM 60**의 느린 스윙 4분음으로 또박또박 짚어요. <mark>네 박의 크기가 똑같은지</mark> 발로 박자를 세며 느껴요.

```json
{
  "id": "m1.w4.d1.swing_prep_4",
  "type": "tab",
  "meta": { "title": "Even swing quarters on F7, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** F7 코드톤을 한 박씩. 서두르지 말고 네 박을 자로 잰 듯 고르게 놓아요.

```json
{
  "id": "m1.w4.d1.swing_prep_5",
  "type": "tab",
  "meta": { "title": "Even swing quarters on F7, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **스윙 워킹**을 **BPM 80**에서 두 마디 순환으로 반복해요. <mark>매 박이 앞으로 미는 전진감</mark>이 있는지 확인해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 네 박이 고르게, 걸음처럼 전진하는지 들어봐요. 오늘 편했던 BPM을 적어두면 내일 12마디 출발점이 돼요.

**오늘의 완료 기준:** F7 한 코드 위에서 스윙 4분음 워킹(R-3-5-b7 오르내림)을 BPM 80으로 균일하고 전진감 있게, 4현·5현 둘 다 걸을 수 있다.

## ④ 팁 / 흔한 실수

- **뒤 박이 처져요.** 스윙을 신경 쓰다 보면 뒤 박이 늘어져 걸음이 느려져요. 메트로놈 클릭에 앞 박을 딱 맞추고, 뒤 박은 살짝 붙이는 정도로 유지해요.
- **너무 세게 굴려요.** 삼잇단처럼 과하게 튕기면 걸음이 뒤뚱거려요. 스윙은 아주 살짝이면 충분해요.

F는 두 옥타브로 짚어 두면 걸음의 오르내림이 편해져요. 낮은 F와 한 옥타브 위 F를 함께 봐요.

```json
{
  "id": "m1.w4.d1.f_octave_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F root, two octaves — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 낮은 F(4번현 1프렛)와 한 옥타브 위 F(2번현 3프렛)예요.

```json
{
  "id": "m1.w4.d1.f_octave_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F root, two octaves — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 F도 가늠해 볼 수 있어요.

- **한 달의 걸음을 스스로 칭찬해요.** 루트만 짚던 데서 시작해, 이제 스윙 4분음으로 코드를 걷는 나예요. 이 필만 몸에 붙으면, 남은 사흘 동안 12마디를 걷는 건 자연스럽게 따라와요.
