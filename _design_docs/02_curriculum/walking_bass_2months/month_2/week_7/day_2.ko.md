---
title: "8분음 필 — 약박 두 음으로 다음 코드에 다리를 놓기"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 8분음 필(약박 두 음)

## ① 이론/설명

어제는 4분음 사이에 고스트 한 음을 살짝 넣었어요. 오늘은 그 잔발을 **8분음 필**로 키워요. 필(fill)은 **약박의 한 4분음을 두 개의 8분음으로 쪼개**, 다음 목표음으로 이어 주는 작은 이음새예요. 4분음 하나가 8분음 두 개로 갈라지면 그 짧은 구간만 음이 촘촘해져서, 리듬이 잠깐 앞으로 굴러가는 듯한 생기가 생겨요. 이 촘촘함과 곧은 4분음의 대비가 걸음에 표정을 만들어요. <mark>한 걸음이 두 발짝으로 나뉘며 다음 코드로 부드럽게 넘어가요.</mark>

가장 자연스러운 자리는 **4박**이에요. 마디의 마지막 박에서 4분음 하나를 두 8분음으로 쪼개, 다음 마디 루트로 **반음씩 기어오르게** 이어요. 오늘 예제는 ♭7 E♭에서 반음 위 E로 올라, 다음 마디 루트 F로 착지해요. 두 8분음이 계단처럼 **다음 음을 예고해요**. <mark>필은 '다음이 온다'는 신호예요.</mark>

물론 순서는 그대로예요. **4분음 뼈대가 먼저**, 필은 마지막 박에만 살짝. 필이 많아지면 걸음이 수다스러워져요. 필을 아껴 쓸수록, 정작 필이 나올 때 그 두 발짝이 더 또렷하고 시원하게 들려요. <mark>한 마디에 필은 하나면 충분해요.</mark>

먼저 오늘의 필이 기어오르는 길 — ♭7 E♭ → E → 옥타브 F — 을 **2번현**에서 봐요.

```json
{
  "id": "m2.w7.d2.fill_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic fill climbing to octave F — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** ♭7 **E♭**(2번현 1프렛) → **E**(2번현 2프렛) → 옥타브 **F**(2번현 3프렛)로, 4박의 두 8분음이 반음씩 기어올라 다음 F에 닿아요.

```json
{
  "id": "m2.w7.d2.fill_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Chromatic fill climbing to octave F — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing" },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현으로 더 낮은 F도 가늠해요.

## ② 시각 자료

이제 오늘의 완성물, **8분음 필 워킹** 한 마디예요. F7을 4분음으로 걷다가, 마지막 4박을 두 8분음으로 쪼개 다음 루트로 이어요. <mark>4박의 두 발짝이 다음 마디로 다리를 놓아요.</mark> 각 예제는 **4현·5현 두 버전**이에요.

```json
{
  "id": "m2.w7.d2.fill_walk_4",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현, 스윙.** 1박 **F**(루트) → 2박 **A**(3도) → 3박 **C**(5도) → 4박 **E♭**(♭7)+**E**(반음) 두 8분음이에요. 마지막 두 발짝이 다음 마디 F로 계단을 놓아요.

```json
{
  "id": "m2.w7.d2.fill_walk_5",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 고스트 워킹을 BPM 72로 한 번 걸어, 4분음 뼈대의 감각을 되살려요.

**10~20분 · 두뇌 훈련**
아래 준비 예제로 8분음 필 워킹을 **BPM 60**의 느린 스윙으로 짚어요. <mark>4박의 두 8분음이 반음씩 또렷이 올라가는지</mark> 소리로 확인해요.

```json
{
  "id": "m2.w7.d2.fill_walk_slow_4",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7), slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 8분음 필 워킹을 느리게. 3박까지 4분음으로 걷고, 4박에서만 두 8분음으로 살짝 쪼개요.

```json
{
  "id": "m2.w7.d2.fill_walk_slow_5",
  "type": "tab",
  "meta": { "title": "Eighth-note fill walk (F7), slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "duration": "eighth", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "E", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요.

**20~40분 · 실전**
위 **8분음 필 워킹**을 BPM 80에서 반복해요. <mark>1~3박은 흔들림 없는 4분음, 4박만 두 발짝으로</mark> 나뉘는지 살펴요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
8분음 필 워킹 한 마디를 두세 바퀴 멈추지 말고 녹음해요. 다시 들으며 필이 다음 마디로 자연스럽게 이어지는지, 4분음 뼈대가 흔들리진 않는지 확인해요.

**오늘의 완료 기준:** F7 4분음 워킹의 4박을 두 8분음으로 쪼개, 반음씩 다음 루트로 잇는 필을 4현·5현으로 걸을 수 있다. — 오늘의 완성: 8분 필.

## ④ 팁 / 흔한 실수

- **필을 아무 박에나 넣어요.** 필은 다음으로 넘어가는 다리예요. 그래서 마지막 박(4박)에 두는 게 가장 자연스러워요. 1~2박에 넣으면 걸음이 성급해 보여요. 처음엔 4박에만 두는 습관을 들여요.
- **두 8분음이 급하게 붙어요.** 스윙에서는 앞 8분이 조금 길고 뒤 8분이 조금 짧아요. 두 음을 같은 길이로 딱 붙이면 딱딱해져요. 앞 음에 살짝 기대었다가 뒤 음으로 넘어가요.

오늘의 필, 4박에서 반음씩 오르는 두 발짝을 눈에 새겨 둬요. E♭에서 옥타브 F까지, 짧은 계단 하나가 다음 마디를 불러와요.

```json
{
  "id": "m2.w7.d2.fill_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "The two-note fill on beat 4 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing", "highlight": true },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 4박의 두 8분음 필이에요. ♭7 **E♭**(1프렛) → **E**(2프렛)로 올라 옥타브 **F**(3프렛)를 불러와요.

```json
{
  "id": "m2.w7.d2.fill_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "The two-note fill on beat 4 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 2, "fret": 1, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "label": "E", "role": "passing", "highlight": true },
    { "string": 2, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현으로 저역을 더 받쳐요.

- **오늘을 스스로 칭찬해요.** 고스트에 이어, 이제 8분음 두 음으로 다음 코드에 다리를 놓을 수 있어요. 내일은 이 두 음을 **해머온**으로 매끄럽게 흘려 볼 거예요.
