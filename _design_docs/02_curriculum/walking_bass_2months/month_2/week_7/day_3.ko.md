---
title: "해머온 장식 — 한 번 튕겨 두 음을 흐르게"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 해머온 장식(흐르는 두 음)

## ① 이론/설명

어제는 4박을 두 8분음으로 쪼개 다음 코드에 다리를 놓았어요. 오늘의 장식은 **해머온(hammer-on)**이에요. 한 음을 튕긴 뒤, 오른손을 다시 쓰지 않고 **왼손 손가락으로 위 프렛을 '탁' 내리쳐** 두 번째 음을 울려요. 오른손으로 튕긴 첫 음의 울림이 아직 살아 있을 때, 왼손이 그 진동을 이어받아 다음 음을 내는 원리예요. 그래서 두 번째 음은 오른손으로 튕기지 않아도 또렷하게 소리가 나요. <mark>두 음이 하나의 숨결처럼 매끄럽게 이어져요.</mark>

오늘은 코드톤 **3도 A**로 들어가는 해머온을 익혀요. 반음 아래 **A♭**을 먼저 튕기고, 곧바로 **A**로 해머해 3도에 착지해요. 반음 해머는 거리가 짧아 손에 부담이 적고, 크로매틱하게 스며들어 3도가 더 노래하듯 들려요. 스키마에서는 첫 음에 `technique: "hammer_on"`을 적어요. <mark>튕기는 건 한 번, 소리는 두 번이에요.</mark>

물론 뼈대가 먼저예요. **4분음 워킹은 그대로**, 그 위에 해머로 두 음을 흘려요. 해머가 흐릿하면 두 번째 음이 죽어요. <mark>왼손 손가락을 프렛 바로 뒤에 정확히, 힘 있게 내려요.</mark>

먼저 오늘의 해머 짝 — **A♭**(4프렛) → **3도 A**(5프렛) — 을 4번현에서 봐요.

```json
{
  "id": "m2.w7.d3.hammer_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on pair into the third A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **4현.** 루트 **F**(1프렛) 뒤, 반음 아래 **A♭**(4프렛)을 튕겨 **3도 A**(5프렛)로 해머해요. 두 음이 같은 4번현에서 한 프렛 차이로 이어져요.

```json
{
  "id": "m2.w7.d3.hammer_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on pair into the third A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

## ② 시각 자료

이제 오늘의 완성물, **해머온 워킹** 한 마디예요. 2박에서 반음 아래 A♭을 튕겨 3도 A로 해머하고, 나머지는 4분음으로 걸어요. <mark>한 번 튕겨 두 음을 흘리니 걸음이 미끄러지듯 부드러워요.</mark> 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w7.d3.hammer_walk_4",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현, 스윙.** 1박 **F**(루트) → 2박 앞 **A♭**을 튕겨 뒤 **A**(3도)로 **해머** → 3박 **C**(5도) → 4박 **E♭**(♭7)이에요. 해머는 왼손만으로 '탁', 오른손은 A♭에서 한 번만.

```json
{
  "id": "m2.w7.d3.hammer_walk_5",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 8분 필 워킹을 BPM 72로 한 번 걸어, 8분음 두 음의 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 해머온 워킹을 **BPM 60**의 느린 스윙으로 짚어요. <mark>튕긴 A♭만큼 해머한 A도 또렷하게 울리는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w7.d3.hammer_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 해머온 워킹을 느리게. A♭을 튕긴 뒤 A로 또렷하게 해머해, 두 음이 다 살아 있게 해요.

```json
{
  "id": "m2.w7.d3.hammer_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Hammer-on walk (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "Ab", "technique": "hammer_on", "role": "passing" },
      { "string": 4, "fret": 5, "duration": "eighth", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **해머온 워킹**을 BPM 80에서 반복해요. <mark>두 번째 음 A가 튕긴 음만큼 크고 또렷하게</mark> 들리는지 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
해머온 워킹 한 마디를 두세 바퀴 멈추지 말고 녹음해요. 다시 들으며 해머한 두 음이 매끄럽게 흐르는지, 4분음 뼈대가 흔들리진 않는지 확인해요.

**오늘의 완료 기준:** F7 4분음 워킹의 2박에서 A♭을 튕겨 3도 A로 해머하는 장식을, 두 음이 다 또렷하게 4현·5현으로 걸을 수 있다. — 오늘의 완성: 흐르는 두 음.

## ④ 팁 / 흔한 실수

- **해머한 음이 흐릿하게 죽어요.** 해머는 왼손 손가락의 정확한 타격이 전부예요. 프렛 바로 뒤를 힘 있게 내려치지 않으면 두 번째 음이 사그라들어요. 손가락 끝을 세워 프렛 가까이에 '탁' 꽂아요.
- **오른손으로 두 번 튕겨요.** 해머온의 매력은 '한 번 튕겨 두 음'이에요. 두 번째 음까지 오른손으로 튕기면 매끄러운 이음새가 사라져요. 두 번째 음은 왼손 해머에만 맡겨요.

오늘의 해머 짝, 4번현의 반음 두 음을 눈에 새겨 둬요. A♭에서 3도 A로, 한 프렛만 올라 두 음이 흐르듯 이어져요.

```json
{
  "id": "m2.w7.d3.hammer_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The hammer-on pair — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **4현.** 해머 짝이에요. **A♭**(4프렛)을 튕겨 **3도 A**(5프렛)로 한 프렛 올라 해머해요.

```json
{
  "id": "m2.w7.d3.hammer_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The hammer-on pair — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 4, "label": "Ab", "role": "passing" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

- **오늘을 스스로 칭찬해요.** 이제 고스트·8분 필·해머온, 세 가지 장식이 손에 들어왔어요. 내일은 이 셋을 한 마디에 모아 **장식 워킹**으로 7주차를 완성해요.
