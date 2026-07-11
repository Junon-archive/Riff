---
title: "3도 감싸기 — 코드의 색을 감싸 착지"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — 3도 감싸기, 코드의 색을 감싸 착지

## ① 이론/설명

어제는 루트를 감쌌어요. 오늘은 감싸기의 목표를 코드의 **3도**로 옮겨요. 3도는 그 코드가 밝은지(장) 어두운지(단)를 정하는 **색의 음**이에요. <mark>루트가 집 주소라면, 3도는 그 집의 얼굴</mark>이에요. 얼굴을 감싸 들어가면 코드의 색이 가장 짙게 살아나요.

F조의 집 코드 **Fmaj7**의 3도는 **A**예요. 이 A를 감싸 볼게요 — 반음 위 **Bb**, 반음 아래 **G#**를 지난 뒤 **A에 착지**해요. 3도에 감싸 내려앉으면, 루트에 착지할 때와는 다른 <mark>환하고 또렷한 색</mark>이 귀에 들려요.

순서는 늘 똑같아요 — **위 → 아래 → 착지**. 3도는 재즈 워킹에서 가장 즐겨 감싸는 목표예요. 루트만 겨냥하면 걸음이 단조로워지지만, <mark>3도를 감싸 착지하면 라인에 표정이 생겨요</mark>. 오늘은 목표를 3도로 삼아 감싸 착지를 완성해요.

먼저 3도 **A**를 감싸는 세 음 — 위 **Bb**, 아래 **G#**, 그리고 착지 3도 **A**를 지판에서 봐요.

```json
{
  "id": "m2.w6.d3.enclosure_third_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around A (3rd) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 6, "label": "Bb", "role": "passing" },
    { "string": 4, "fret": 4, "label": "G#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 위 **Bb**(4번현 6프렛), 아래 **G#**(4번현 4프렛), 착지 3도 **A**(4번현 5프렛)예요. 초록 점이 착지 목표예요.

```json
{
  "id": "m2.w6.d3.enclosure_third_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around A (3rd) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 6, "label": "Bb", "role": "passing" },
    { "string": 4, "fret": 4, "label": "G#", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 3도 감싸기를 **시간 위에** 얹어 걸어요. 위 Bb → 아래 G# → 착지 A를 한 박씩 걷고, 마지막 4박은 Fmaj7의 **5도 C**로 이어요. <mark>3도에 감싸 내려앉는 색이 짙게 들리는지</mark> 느껴 봐요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w6.d3.enclosure_third_4",
  "type": "tab",
  "meta": { "title": "Third enclosure on A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 6, "duration": "quarter", "label": "Bb", "role": "passing" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "G#", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 1박 **Bb** → 2박 **G#** → 3박 **A 착지** → 4박 **C(5도)**예요. 위·아래로 좁힌 뒤 3도 A에 또박또박 내려앉아요.

```json
{
  "id": "m2.w6.d3.enclosure_third_5",
  "type": "tab",
  "meta": { "title": "Third enclosure on A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 6, "duration": "quarter", "label": "Bb", "role": "passing" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "G#", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B로 더 묵직하게 얹어 볼 수 있어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 루트 감싸기를 BPM 72로 한 번 걸어, 감싸 착지의 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 3도 감싸기를 **BPM 60**의 느린 스윙 4분음으로 짚어요. <mark>위 Bb·아래 G#가 3도 A로 정확히 좁혀지는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w6.d3.enclosure_third_slow_4",
  "type": "tab",
  "meta": { "title": "Third enclosure on A, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 6, "duration": "quarter", "label": "Bb", "role": "passing" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "G#", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 3도 감싸기를 느리게. 위 Bb·아래 G#를 지나 A에 정확히 착지해요.

```json
{
  "id": "m2.w6.d3.enclosure_third_slow_5",
  "type": "tab",
  "meta": { "title": "Third enclosure on A, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 6, "duration": "quarter", "label": "Bb", "role": "passing" },
      { "string": 4, "fret": 4, "duration": "quarter", "label": "G#", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **3도 감싸기**를 BPM 80에서 반복해요. <mark>착지 A가 코드의 색을 환하게 밝히는지</mark> 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해, 3도 A에 감싸 내려앉는 색이 또렷한지 들어봐요. 색이 흐리면 위·아래 두 음을 조금 더 짧게 끊어 봐요.

**오늘의 완료 기준:** 3도 A를 반음 위 Bb·반음 아래 G#로 감싼 뒤, 스윙 4분음으로 4현·5현 둘 다 3도에 또박또박 착지할 수 있다.

## ④ 팁 / 흔한 실수

- **3도를 루트처럼 무겁게 짚어요.** 3도는 색을 내는 음이라 지나치게 세게 치면 루트처럼 들려요. 착지는 또렷하되, 루트보다 조금 가볍고 노래하듯 짚어요.
- **아래 이웃음 G#를 흐리게 짚어요.** G#(4번현 4프렛)는 A로 반음 올라붙는 이끎음이에요. 정확히 짚어야 위로 빨려드는 맛이 살아요.

오늘 감싼 3도, A 한 점을 눈에 새겨 둬요. 루트가 집 주소라면 이 3도는 코드의 표정이에요.

```json
{
  "id": "m2.w6.d3.target_a_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target A (3rd) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 5, "label": "A", "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 오늘의 착지 3도 A(4번현 5프렛)예요. 초록 점 하나가 코드의 색을 정해요.

```json
{
  "id": "m2.w6.d3.target_a_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target A (3rd) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 5, "label": "A", "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 자리도 가늠해 볼 수 있어요.

- **사흘째, 색을 다루기 시작했어요.** 루트에 이어 3도까지 감쌀 수 있게 됐으니, 이제 워킹에 표정이 생겨요. 내일은 이 감싸기를 실제 워킹 한 마디로 엮어, 6주차의 완성물을 만들어요.
