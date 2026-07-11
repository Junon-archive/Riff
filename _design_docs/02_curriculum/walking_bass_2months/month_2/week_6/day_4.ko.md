---
title: "감싸기 워킹 — 목표 C를 위·아래로 감싸 착지 (6주차 완성)"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — 감싸기 워킹, 목표 C를 감싸 착지

## ① 이론/설명

6주차의 마지막 날, 그동안 익힌 감싸기를 실제 워킹 한 마디로 엮어요. 오늘의 목표음은 **C** — F조 V 코드 **C7**의 루트예요. 이 C를 반음 위 **Db**와 반음 아래 **B**로 감싼 뒤 <mark>C에 착지하고, 이어 3도로 색을 얹어</mark> 한 마디를 완성해요.

마디의 흐름은 이래요. 1박 **Db**(위) → 2박 **B**(아래) → 3박 **C 착지**(루트) → 4박 **E(3도)**. 위와 아래에서 반음씩 좁혀 오다 C에 내려앉으니, <mark>다음 코드로 필연적으로 빨려드는</mark> 긴장이 생겨요. 감싸기가 워킹의 한 마디로 살아나는 순간이에요.

한 가지 짚고 갈 게 있어요. 이 마디는 감싸기 동작만 떼어 본 연습이라 <mark>1박이 접근음(Db)으로 시작</mark>해요. 하지만 실전 워킹에선 이 감싸기가 **앞 마디의 약박(3~4박)에 얹혀**, 다음 코드 1박(C)으로 착지해요. 오늘은 감싸기 자체를 손에 완전히 익히는 데 집중하고, 실전에선 앞 마디 끝에 이어 붙인다고 기억해 둬요.

먼저 목표 **C**를 감싸는 세 음 — 위 **Db**, 아래 **B**, 그리고 착지 루트 **C**를 지판에서 봐요.

```json
{
  "id": "m2.w6.d4.enclosure_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around C (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 위 **Db**(3번현 4프렛), 아래 **B**(3번현 2프렛), 착지 루트 **C**(3번현 3프렛)예요. 초록 점이 착지 목표예요.

```json
{
  "id": "m2.w6.d4.enclosure_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around C (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

## ② 시각 자료

이제 이번 주의 완성물, **감싸기 워킹** 한 마디예요. 목표 C를 위 Db·아래 B로 감싼 뒤 착지하고, 4박에서 3도 E로 색을 얹어요. <mark>좁혀 다가가는 긴장이 착지를 강하게</mark> 만들어요. 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w6.d4.enclosure_4",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현, 스윙 4분음.** 목표 **C(3번현 3프렛)**를 반음 위 **Db(4프렛)** → 반음 아래 **B(2프렛)**로 감싼 뒤 착지해요. 좁혀 다가가는 긴장이 착지를 강하게 해요. ※ 이 마디는 감싸기 동작만 떼어 본 연습이라 1박이 접근음으로 시작해요 — 실전 워킹에선 이 감싸기가 **앞 마디의 약박(3~4박)에 얹혀** 다음 코드 1박(C)으로 착지해요.

```json
{
  "id": "m2.w6.d4.enclosure_5",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B로 더 묵직한 저역을 얹어 볼 수 있어요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 3도 감싸기를 BPM 72로 한 번 걸어, 감싸 착지의 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 감싸기 워킹을 **BPM 60**의 느린 스윙 4분음으로 짚어요. <mark>위 Db·아래 B가 루트 C로 정확히 좁혀지는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w6.d4.enclosure_slow_4",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 감싸기 워킹을 느리게. 위 Db·아래 B를 지나 C에 정확히 착지하고 3도 E로 이어요.

```json
{
  "id": "m2.w6.d4.enclosure_slow_5",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **감싸기 워킹**을 BPM 80에서 반복해요. <mark>착지 C가 앞의 두 감싸는 음보다 또렷하고 강하게</mark> 들리는지 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/졸업**
드디어 녹음이에요. 감싸기 워킹 한 마디를 두세 바퀴 멈추지 말고 녹음해, 그중 제일 좋은 한 판을 나의 첫 감싸기 워킹으로 남겨요. 4현·5현 둘 다 남기면 6주차 완성이에요.

**오늘의 완료 기준:** 목표 C를 반음 위 Db·반음 아래 B로 감싼 뒤, 스윙 4분음으로 4현·5현 둘 다 C에 또박또박 착지·녹음할 수 있다. — 주간 결과물: 나의 첫 감싸기 워킹 베이스 녹음. (6주차 완성!)

## ④ 팁 / 흔한 실수

- **1박부터 서둘러 착지해요.** 이 마디는 접근음으로 시작하니, 신나서 3박 C를 당겨 짚기 쉬워요. Db·B는 각각 한 박씩, C는 제 박에 내려앉혀요.
- **감싸기를 앞 마디와 억지로 붙여요.** 오늘은 감싸기 자체를 손에 익히는 날이에요. 실전에서 앞 마디 3~4박에 얹는 건, 이 한 마디가 편해진 다음에 자연스레 이어 붙이면 돼요.

오늘 감싼 목표, C 한 점을 눈에 새겨 둬요. 6주 내내 배운 감싸기가 결국 이 한 점의 착지로 완성돼요.

```json
{
  "id": "m2.w6.d4.target_c_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target C (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 오늘의 착지 루트 C(3번현 3프렛)예요. 초록 점 하나로 이번 주의 모든 감싸기가 모여요.

```json
{
  "id": "m2.w6.d4.target_c_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target C (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 더 낮은 C도 가늠해 볼 수 있어요.

- **6주차를 스스로 크게 칭찬해요.** 반음 위·아래로 목표를 감싸는 고급 다가가기를, 개념에서 시작해 루트·3도를 거쳐 실전 워킹 한 마디로 완성했어요. 이제 여러분의 워킹은 목표음으로 필연적으로 빨려드는 힘을 얻었어요. 두 달의 여정, 정말 멋지게 걸어왔어요.
