---
title: "루트 감싸기 — 워킹의 출발점을 감싸 착지"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — 루트 감싸기, 워킹의 출발점을 감싸 착지

## ① 이론/설명

어제 감싸기의 개념을 익혔어요. 오늘은 그 감싸기를 **워킹의 출발점**, 즉 코드의 **루트**에 겨냥해요. 매 마디 1박은 루트에 착지한다는 걸 지난 한 달 반 내내 익혔죠. <mark>그 1박 루트를 감싸 들어가면</mark> 마디의 첫걸음이 훨씬 단단해져요.

F조에서 ii 코드 **Gm7**의 루트는 **G**예요. 이 G를 감싸 볼게요 — 반음 위 **Ab**, 반음 아래 **F#**를 지난 뒤 **G에 착지**해요. 위 Ab와 아래 F#가 G를 양쪽에서 좁혀 오면, 1박 루트가 <mark>피할 수 없이 빨려드는</mark> 느낌이 나요.

순서는 어제와 똑같아요 — **위 → 아래 → 착지**. 다만 오늘은 착지점이 코드의 **루트**라는 점이 특별해요. 루트는 각 코드의 집 주소여서, <mark>여기에 감싸 들어가면 다음 코드로 넘어가는 걸음이 또렷해져요</mark>. 오늘은 목표를 루트로 삼아 감싸 착지를 완성해요.

먼저 루트 **G**를 감싸는 세 음 — 위 **Ab**, 아래 **F#**, 그리고 착지 루트 **G**를 지판에서 봐요.

```json
{
  "id": "m2.w6.d2.enclosure_root_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around G (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 위 **Ab**(4번현 4프렛), 아래 **F#**(4번현 2프렛), 착지 루트 **G**(4번현 3프렛)예요. 초록 점이 착지 목표예요.

```json
{
  "id": "m2.w6.d2.enclosure_root_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around G (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 2, "label": "F#", "role": "passing" },
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 루트 감싸기를 **시간 위에** 얹어 걸어요. 위 Ab → 아래 F# → 착지 G를 한 박씩 걷고, 마지막 4박은 Gm7의 **b3 Bb**로 이어요. <mark>1박 루트가 감싸 들어가 강하게 내려앉는지</mark> 느껴 봐요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w6.d2.enclosure_root_4",
  "type": "tab",
  "meta": { "title": "Root enclosure on G — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1박 **Ab** → 2박 **F#** → 3박 **G 착지** → 4박 **Bb(b3)**예요. 위·아래로 좁힌 뒤 루트 G에 또박또박 내려앉아요.

```json
{
  "id": "m2.w6.d2.enclosure_root_5",
  "type": "tab",
  "meta": { "title": "Root enclosure on G — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B로 더 묵직하게 얹어 볼 수 있어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 F 감싸기를 BPM 72로 한 번 걸어, 감싸 착지의 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 루트 감싸기를 **BPM 60**의 느린 스윙 4분음으로 짚어요. <mark>위 Ab·아래 F#가 루트 G로 정확히 좁혀지는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w6.d2.enclosure_root_slow_4",
  "type": "tab",
  "meta": { "title": "Root enclosure on G, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 루트 감싸기를 느리게. 위 Ab·아래 F#를 지나 G에 정확히 착지해요.

```json
{
  "id": "m2.w6.d2.enclosure_root_slow_5",
  "type": "tab",
  "meta": { "title": "Root enclosure on G, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "Ab", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **루트 감싸기**를 BPM 80에서 반복해요. <mark>착지 루트 G가 마디의 기둥처럼 단단하게</mark> 들리는지 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해, 루트 G가 감싸 들어간 뒤 또렷이 착지하는지 들어봐요. 착지가 흐리면 위·아래 두 음을 조금 더 짧게 끊어 봐요.

**오늘의 완료 기준:** 루트 G를 반음 위 Ab·반음 아래 F#로 감싼 뒤, 스윙 4분음으로 4현·5현 둘 다 루트에 또박또박 착지할 수 있다.

## ④ 팁 / 흔한 실수

- **아래 이웃음 F#를 놓쳐요.** 위 Ab에서 바로 G로 가기 쉬워요. F#(4번현 2프렛)를 반드시 거쳐야 아래에서 좁혀 오는 맛이 살아요.
- **루트가 다른 음에 묻혀요.** 감싸는 두 음(Ab·F#)을 세게 치면 정작 착지 G가 약해져요. 감싸는 음은 살짝, 착지 루트는 또렷하게 세기를 나눠요.

오늘 감싼 루트, G 한 점을 눈에 새겨 둬요. 워킹의 매 1박은 이렇게 감싸 들어갈 수 있는 착지점이에요.

```json
{
  "id": "m2.w6.d2.target_g_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target G (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 오늘의 착지 루트 G(4번현 3프렛)예요. 초록 점 하나가 마디의 출발점이에요.

```json
{
  "id": "m2.w6.d2.target_g_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target G (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 G도 가늠해 볼 수 있어요.

- **이틀째도 잘 걷고 있어요.** 루트를 감싸 들어가는 감각을 익혔으니, 워킹의 출발점이 한결 단단해졌어요. 내일은 이 감싸기를 코드의 **3도**에 겨냥해, 색이 더 짙은 착지를 만들어요.
