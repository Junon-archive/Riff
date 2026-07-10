---
title: "리듬을 입은 T-P — 8분과 16분의 밀당"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 리듬을 입은 T-P, 8분과 16분

## ① 이론/설명

어제 옥타브 모양으로 **깨끗한 점프**를 익혔어요. 오늘은 그 T-P에 **리듬**을 입혀요. 지금까진 정박에 또박또박 쳤다면, 오늘은 <mark>정박을 살짝 벗어난 배치</mark>로 그루브의 '말맛'을 만들어요. 슬랩이 신나게 들리는 건 음이 화려해서가 아니라, **8분과 16분이 밀고 당기는** 리듬 덕분이에요.

오늘은 두 가지 리듬을 배워요. 첫째는 **16분 팝 더블** — 팝을 '딱-딱' 두 번 빠르게 붙여 한 박을 촘촘히 채워요. 둘째는 **엇박 팝(신코페이션)** — 팝을 정박이 아니라 <mark>박과 박 사이('&')</mark>에 놓아 그루브가 튀게 해요. 손모양은 어제 그대로 **옥타브**, 바뀌는 건 '언제 치느냐'뿐이에요. 같은 두 음이라도 **치는 자리를 바꾸는 것만으로** 느낌이 확 달라져요 — 이게 펑크 리듬의 진짜 재미예요. 음을 늘리는 대신 자리를 옮겨 그루브를 만드는 습관을, 오늘부터 손에 들여요. 오늘 익히는 두 리듬은, 다음 주에 만들 완성 그루브의 재료가 되어 줄 거예요.

아직 **고스트(뮤트)는 넣지 않아요** — 빈 자리는 쉼으로 비워 둬요(3주차에 채웁니다). 대신 <mark>쉼표의 침묵을 정확히 지키는 것</mark>이 오늘의 숨은 과제예요. 소리만큼 침묵도 리듬이거든요. **BPM 60**부터, 발로 박을 세면서 천천히 익혀요.

**5현**이라면 운지는 4현과 완전히 똑같아요. 저음 B는 엄지로 덮어 두고, 익숙해지면 같은 리듬을 B현 루트로 옮겨 더 묵직한 펑크로 시험해 봐요.

## ② 시각 자료

오늘은 옥타브 손모양은 그대로 두고, **리듬만** 바꿔요. 손모양을 한 번 되짚은 뒤, <mark>16분 팝 더블</mark>과 <mark>엇박 팝</mark> 두 패턴을 tab으로 익혀요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 어제의 **옥타브 손모양**을 한 번 더 짚어요. 아래 파랑이 루트 E(4번현), 위 파랑이 옥타브 E(2번현 2프렛)예요.

```json
{
  "id": "m1.w2.d3.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 손모양은 어제와 똑같아요 — 아래 루트 E(썸), 위 옥타브 E(팝). 오늘은 이 폼으로 리듬만 바꿔요.

```json
{
  "id": "m1.w2.d3.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

**예제 1 — 16분 팝 더블.** 썸으로 루트를 치고, 2박에서 팝을 <mark>'딱-딱' 16분으로 두 번</mark> 빠르게 붙여요.

```json
{
  "id": "m1.w2.d3.rhythm_sixteenth_4",
  "type": "tab",
  "meta": { "title": "T-P rhythm — sixteenth pop double — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 2박의 팝 두 번이 붙지 않고 또렷이 '딱-딱' 갈라지게. 빈 쉼표는 정확히 비워요.

```json
{
  "id": "m1.w2.d3.rhythm_sixteenth_5",
  "type": "tab",
  "meta": { "title": "T-P rhythm — sixteenth pop double — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

**예제 2 — 엇박 팝.** 이번엔 팝을 정박이 아니라 <mark>2박·4박의 '&'</mark>에 놓아요. 이 한 칸 밀림이 그루브를 튀게 해요.

```json
{
  "id": "m1.w2.d3.rhythm_offbeat_4",
  "type": "tab",
  "meta": { "title": "T-P rhythm — offbeat pop — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 썸은 정박, 팝은 엇박. 발로 박을 세면서 팝이 '&'에 정확히 얹히는지 확인해요.

```json
{
  "id": "m1.w2.d3.rhythm_offbeat_5",
  "type": "tab",
  "meta": { "title": "T-P rhythm — offbeat pop — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65, 5현.** 4현과 음이 똑같아요. 여기서도 저음 B는 엄지로 재워 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 옥타브 **T-P**를 BPM 60으로 몇 번 풀어 손모양을 깨워요. 점프가 아직 깨끗한지 확인해요.

**10~20분 · 두뇌 훈련**
예제 1·2를 소리 없이 무릎 위에서 리듬만 쳐봐요. <mark>16분 더블과 엇박 팝의 타이밍</mark>을 몸으로 먼저 세어요.

**20~40분 · 실전**
예제 1(16분 더블)을 **BPM 60**에서 반복 → 또렷하면 예제 2(엇박)로 넘어가 **BPM 65**. 쉼표가 뭉개지면 다시 느리게 내려와요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>리듬이 밀고 당기며 살아 있는지</mark> 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 옥타브 T-P로 16분 팝 더블과 엇박 팝 두 리듬을 BPM 60~65에서 쉼표까지 정확히 지켜 칠 수 있다.

## ④ 팁 / 흔한 실수

- **16분이 뭉개져요.** 팝 '딱-딱'이 한 덩어리로 붙으면 리듬이 죽어요. 두 번째 팝을 살짝 늦춰 또렷이 갈라요.
- **엇박을 정박으로 당겨요.** 엇박 팝이 자꾸 앞으로 끌려오면 밋밋해져요. 발로 박을 세며 '&'를 기다렸다 쳐요.
- **쉼표를 흘려요.** 빈 자리를 대충 채우면 3주차 고스트가 들어갈 틈이 없어져요. 지금은 침묵을 정확히 지켜요.
- **저음 B 방심(5현).** 리듬이 바빠질수록 B가 새기 쉬워요. 엄지로 늘 B를 덮어 두세요.
