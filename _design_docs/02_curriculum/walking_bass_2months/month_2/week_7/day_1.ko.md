---
title: "고스트노트 삽입 — 걸음 사이 잔발로 라인에 숨을"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 고스트노트("칙") 삽입

## ① 이론/설명

7주차의 문을 열어요. 지난주까지 우리는 코드 위를 또박또박 걷는 **4분음 워킹**을 손에 익혔어요. 이번 주는 그 곧은 걸음에 **생명**을 불어넣을 차례예요. 오늘의 재료는 **고스트노트**, 흔히 "칙" 하고 부르는 잔발이에요. <mark>음정 없이 살짝 긁는 이 한 음이 라인에 숨을 넣어요.</mark>

고스트노트는 **데드노트** 기법으로 만들어요. 왼손으로 현을 짚되 **누르지 않고 살짝 덮어**, 프렛에 닿지 않게 한 상태에서 오른손으로 툭 쳐요. 그러면 음정 대신 "칙" 하는 타격음만 나요. 스키마에서는 `technique: "dead_note"`로 적고, 음이름 라벨은 붙이지 않아요. 이 "칙" 소리는 드럼의 하이햇처럼 걸음과 걸음 사이를 살짝 채워, 리듬에 잔결을 더해요. <mark>고스트는 정박이 아니라 약박, 특히 박과 박 사이의 '앤(and)'에 살짝 끼워요.</mark>

가장 중요한 건 순서예요. **4분음 뼈대가 먼저**예요. 뼈대가 흔들리면 고스트도 무너져요. 그래서 오늘은 안정된 4분음 위에 고스트를 **딱 하나**만 얹어요. 걸음은 그대로 또박또박, 그 사이에 잔발 하나가 들어가 그루브가 <mark>숨을 쉬기 시작해요.</mark>

먼저 오늘 걸을 **F7 아르페지오**의 뼈대 음 — 루트 F·3도 A·5도 C·♭7 E♭ — 을 지판에서 봐요.

```json
{
  "id": "m2.w7.d1.f7_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 arpeggio skeleton — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 루트 **F**(4번현 1프렛)·3도 **A**(4번현 5프렛)·5도 **C**(3번현 3프렛)·♭7 **E♭**(2번현 1프렛)이에요. 고스트는 이 뼈대 사이에 끼워요.

```json
{
  "id": "m2.w7.d1.f7_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 arpeggio skeleton — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현으로 더 묵직한 F도 받쳐 볼 수 있어요.

## ② 시각 자료

이제 오늘의 완성물, **고스트 워킹** 한 마디예요. F7 아르페지오를 4분음으로 걷다가, 2박의 뒤 '앤'에 고스트를 하나 살짝 끼워요. <mark>걸음은 그대로인데 잔발 하나로 그루브가 살아나요.</mark> 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w7.d1.ghost_walk_4",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현, 스윙 4분음.** 1박 **F**(루트) → 2박 앞 **A**(3도) → 2박 뒤 **고스트("칙")** → 3박 **C**(5도) → 4박 **E♭**(♭7)이에요. 고스트는 음정 없이 툭, 나머지 4분음은 또박또박.

```json
{
  "id": "m2.w7.d1.ghost_walk_5",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B현으로 더 깊은 저역을 받쳐 볼 수 있어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
6주차의 감싸기 워킹을 BPM 72로 한 번 걸어, 또박또박한 4분음 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 고스트 워킹을 **BPM 60**의 느린 스윙으로 짚어요. <mark>고스트가 정박을 밀어내지 않고 '앤'에만 살짝 들어가는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w7.d1.ghost_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 고스트 워킹을 느리게. 4분음 뼈대를 지키며 2박 뒤에 "칙"을 살짝 넣어요.

```json
{
  "id": "m2.w7.d1.ghost_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Ghost-note walk (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **고스트 워킹**을 BPM 80에서 반복해요. <mark>4분음은 흔들림 없이, 고스트만 잔발처럼</mark> 들어가는지 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
고스트 워킹 한 마디를 두세 바퀴 멈추지 말고 녹음해요. 다시 들으며 라인이 숨을 쉬는지, 4분음 뼈대가 흔들리진 않는지 확인해요.

**오늘의 완료 기준:** 곧은 4분음 F7 워킹에 고스트("칙")를 약박에 하나 넣어, 4분음 뼈대를 흔들지 않고 4현·5현으로 걸을 수 있다. — 오늘의 완성: 고스트 워킹.

## ④ 팁 / 흔한 실수

- **고스트를 너무 세게 쳐요.** "칙"은 음정 없는 잔발이에요. 정박의 음보다 도드라지면 오히려 걸음이 시끄러워져요. 오른손 힘을 반쯤 빼고, 정박 음보다 작게 내요.
- **고스트가 정박을 밀어내요.** 잔발이 커지면 4분음 뼈대가 흔들려요. 뼈대가 먼저, 고스트는 그 사이에 살짝. 헷갈리면 고스트를 빼고 4분음만 먼저 또박또박 걸어요.

오늘 넣은 잔발, 그 한 점을 눈에 새겨 둬요. 루트 F 옆 3번현 개방 자리에서 "칙" 하나가 그루브에 숨을 넣어요.

```json
{
  "id": "m2.w7.d1.ghost_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Ghost spot next to root F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" }
  ]}
}
```

▶ **4현.** 루트 **F**(4번현 1프렛)와 고스트 자리(3번현, x)예요. 정박 F 옆에 "칙" 하나를 얹는 그림이에요.

```json
{
  "id": "m2.w7.d1.ghost_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Ghost spot next to root F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "muted": true, "role": "scale" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현은 덮어 둬요.

- **오늘을 스스로 칭찬해요.** 곧은 4분음에 잔발 하나를 더했을 뿐인데, 라인이 확 살아났어요. 내일은 이 잔발을 8분음 두 음의 '필'로 키워 봐요.
