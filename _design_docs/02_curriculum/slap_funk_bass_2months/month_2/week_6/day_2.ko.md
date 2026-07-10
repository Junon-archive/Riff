---
title: "풀오프 — 튕겨 내려 두 음"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — 풀오프, 튕겨 내려 두 음

## ① 이론/설명

어제는 **해머온**으로 위로 올라갔죠(E→G). 오늘은 그 **반대**예요. 짚고 있던 손가락을 **튕겨 내리면** 낮은 음이 스스로 울려요 — 이게 <mark>풀오프</mark>예요. 역시 **한 번 쳐서 두 음**, 다만 방향이 아래로예요.

오늘의 두 음은 **G**(4번현 3프렛, b3)와 **개방 E**(4번현, R)예요. 왼손 **약지**로 3프렛의 **G**를 짚고 **썸**으로 친 뒤, 그 손가락을 <mark>살짝 아래로 튕기듯</mark> 떼요. 그냥 위로 드는 게 아니라 **현을 살짝 걸어 당겼다 놓는** 느낌이에요. 그래야 개방 **E**가 스스로 울려요.

요령은 **손가락 끝으로 현을 잡아채는** 거예요. 위로 그냥 들면 소리가 <mark>안 나요</mark>. **BPM 75**로 느리게 시작해, 튕겨 내린 **E**가 첫 음 **G**만큼 또렷한지에 집중해요. 개방현이라 울림이 길어, 다음 박에서 **살짝 재워** 리듬을 지켜요. 이 튕김 하나로 슬랩에 **아래로 흐르는 선율**이 생겨요. 어제의 해머온이 **올라가는 멜로디**였다면, 오늘의 풀오프는 **내려오는 멜로디**예요.

**5현**이라면 음도 손모양도 4현과 똑같아요. 저음 **B**는 엄지로 덮어 재워 두고, **풀오프** 감각만 손에 새겨요. 오늘 **풀오프 클린**이 잡히면, 내일은 해머온과 풀오프를 **펜타토닉 위에서** 하나로 엮어요. 두 기법이 손에 익으면 슬랩은 더 이상 리듬 반주에만 머물지 않아요. 프렛손이 만드는 작은 선율이 **그루브 위에 노래를 얹거든요**. 두 음 자리를 지판으로 먼저 찍어요 — **b3인 G와 루트 E**예요.

```json
{
  "id": "m2.w6.d2.pull_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off home (G-E) — R and b3 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **4현.** 3프렛 **G**(짚고 침), 아래 **개방 E**(풀오프). 손가락을 튕겨 위에서 아래로 내려와요.

```json
{
  "id": "m2.w6.d2.pull_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off home (G-E) — R and b3 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두세요.

## ② 시각 자료

오늘은 **풀오프** 하나를 몸에 새겨요. 먼저 **G 펄스**로 짚은 손을 데운 뒤, <mark>썸+풀오프 두 음</mark>을 반복해요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **G 펄스**. 약지로 3프렛 **G**를 짚고 4분음표로 또박또박 쳐, 풀오프의 **출발 음**을 손에 익혀요.

```json
{
  "id": "m2.w6.d2.g_pulse_4",
  "type": "tab",
  "meta": { "title": "Fretted G quarter-note pulse — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** 네 번의 G가 풀오프가 출발할 기둥이에요.

```json
{
  "id": "m2.w6.d2.g_pulse_5",
  "type": "tab",
  "meta": { "title": "Fretted G quarter-note pulse — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5현.** 음은 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

이제 친 **G**마다 **풀오프**를 붙여요. <mark>**썸+풀오프**</mark>예요. 3프렛을 친 뒤 손가락을 튕겨 내려 개방 **E**를 울려, 한 박에 **두 음**을 내요.

```json
{
  "id": "m2.w6.d2.pull_pairs_4",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off pairs (G-E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** 친 **G**에서 손가락을 튕겨 **E**로 내려 한 번에 두 음. 두 음의 크기가 나란해야 해요.

```json
{
  "id": "m2.w6.d2.pull_pairs_5",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off pairs (G-E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B가 새지 않게 엄지로 덮어 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 배운 해머온을 **BPM 60**으로 가볍게 흘려 손을 깨워요. 오늘은 왼손을 <mark>풀오프 자세</mark>로 미리 준비해 둬요.

**10~20분 · 두뇌 훈련**
아래처럼 **아주 느리게**, 친 **G**에서 손가락을 튕겨 **E**로 내려요. **1마디는 G만, 2마디는 풀오프**예요.

```json
{
  "id": "m2.w6.d2.pull_slow_4",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off, slow (G-E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 1마디 G 펄스, 2마디 풀오프. 튕겨 내린 **E**가 또렷한지 귀로 확인해요.

```json
{
  "id": "m2.w6.d2.pull_slow_5",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off, slow (G-E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지 옆면으로 덮어 두세요.

**20~40분 · 실전**
**썸+풀오프 두 음**을 **BPM 75**에서 반복해요. 두 번째 음이 <mark>안 울리면</mark> 속도를 낮춰 현을 잡아채는 느낌부터 살려요. 4현으로 익힌 뒤 5현으로도 같은 두 음을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>풀오프 음이 첫 음만큼 또렷한지</mark> 들어봐요. 오늘 안정된 BPM도 적어 둬요.

**오늘의 완료 기준:** 3프렛 G를 썸으로 친 뒤 풀오프로 개방 E를 울려, 한 번 쳐서 두 음을 BPM 75에서 또렷하게 낼 수 있다.

## ④ 팁 / 흔한 실수

오늘 배운 풀오프를 **BPM 85**로 살짝 밀어, 빨라져도 두 번째 음이 살아 있는지 확인해요.

```json
{
  "id": "m2.w6.d2.pull_check_4",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off speed check (G-E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **BPM 85, 4현.** 조금 빨라져도 **풀오프 E**가 또렷하게 살아 있는지 확인해요.

```json
{
  "id": "m2.w6.d2.pull_check_5",
  "type": "tab",
  "meta": { "title": "Thumb + pull-off speed check (G-E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 늘 엄지로 덮어 두세요.

- **풀오프가 약해요.** 그냥 손가락을 들면 소리가 안 나요. **현을 살짝 걸어 당겼다** 놓아요. 힘이 아니라 **잡아채는 각도**예요.
- **첫 음이 죽어요.** 풀오프에 신경 쓰다 썸이 약해지기 쉬워요. **친 G도 또렷하게** 내 두 음의 크기를 맞춰요.
- **울림이 뭉개져요.** 개방 E가 길게 남아 다음 박과 섞이기 쉬워요. 다음 박에서 **살짝 재워** 리듬을 지켜요.
- **저음 B 방심(5현).** 풀오프에 몰두하다 B가 울리기 쉬워요. 엄지 옆면으로 늘 B를 덮어 두세요.
