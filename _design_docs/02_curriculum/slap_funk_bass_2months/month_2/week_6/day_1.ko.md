---
title: "해머온 — 한 번 쳐서 두 음"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — 해머온, 한 번 쳐서 두 음

## ① 이론/설명

**6주차**예요! 지난주까지 슬랩은 **리듬**이었죠. 이번 주는 거기에 <mark>멜로디</mark>를 얹어요. 그 시작이 **해머온**이에요. **썸(엄지)**으로 한 음을 친 뒤, 왼손 손가락으로 **다음 프렛을 세게 때리면** — 다시 치지 않아도 두 번째 음이 울려요. 말 그대로 **한 번 쳐서 두 음**이에요.

오늘의 두 음은 **개방 E**(4번현)와 **G**(4번현 3프렛)예요. E는 펜타토닉의 **루트(R)**, G는 **b3**이죠. 엄지로 **E**를 '둥' 치고, 곧바로 왼손 **약지**로 3프렛을 <mark>망치처럼 내리꽂아요</mark>. 이때 손가락은 프렛 **바로 뒤**를 정확히, 그리고 **빠르게** 눌러야 두 번째 음이 또렷해요. 느리게 누르면 소리가 <mark>흐물흐물</mark> 뭉개져요.

요령은 **손가락 힘**이 아니라 **타격의 결단력**이에요. 손가락을 살짝 들었다가 **프렛 뒤를 겨냥해 툭** 떨어뜨려요. **BPM 75**로 느리게 시작해, 두 번째 음 **G**가 첫 음 **E**만큼 <mark>또렷하게 들리는지</mark>에만 집중해요. 소리가 작으면 더 단호하게, 뭉개지면 프렛에 더 가까이예요. 이 작은 왼손 동작 하나가 슬랩에 **레가토의 부드러움**을 더해요. 딱딱하던 타격이 이제 **음과 음으로 이어지는 멜로디**가 되기 시작하죠.

**5현**이라면 음도 손모양도 4현과 똑같아요. 저음 **B**는 엄지로 덮어 재워 두고, **해머온** 감각만 손에 새겨요. 오늘 **썸+해머 두 음**이 또렷해지면, 내일은 그 반대인 **풀오프**를 배워요. 손이 살 자리를 지판으로 먼저 찍어요 — **루트 E와 b3인 G**, 오늘 두 음은 전부 여기서 나와요.

```json
{
  "id": "m2.w6.d1.hammer_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on home (E-G) — R and b3 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **4현.** 아래 **개방 E**(썸), 3프렛 **G**(해머). 오늘 두 음은 이 두 자리에서 나요.

```json
{
  "id": "m2.w6.d1.hammer_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Hammer-on home (E-G) — R and b3 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "scale" }
  ]}
}
```

▶ **5현.** 손모양은 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두세요.

## ② 시각 자료

오늘은 **해머온** 하나를 몸에 새겨요. 먼저 **썸 펄스**로 손을 데운 뒤, <mark>썸+해머 두 음</mark>을 반복해요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **썸 펄스**. **개방 E**를 4분음표로 또박또박 쳐, 해머온을 얹을 **집(정박)**을 먼저 잡아요.

```json
{
  "id": "m2.w6.d1.thumb_pulse_4",
  "type": "tab",
  "meta": { "title": "Thumb quarter-note pulse (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** 네 번의 정박이 해머온이 얹힐 기둥이에요.

```json
{
  "id": "m2.w6.d1.thumb_pulse_5",
  "type": "tab",
  "meta": { "title": "Thumb quarter-note pulse (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5현.** 음은 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

이제 정박마다 **해머온**을 얹어요. <mark>**썸+해머**</mark>예요. 엄지로 **E**를 친 뒤 곧바로 **G**를 때려, 한 박에 **두 음**을 내요.

```json
{
  "id": "m2.w6.d1.hammer_pairs_4",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on pairs (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **BPM 75, 4현.** 엄지로 친 **E**에서 왼손이 **G**를 때려 한 번에 두 음. 두 음의 크기가 나란해야 해요.

```json
{
  "id": "m2.w6.d1.hammer_pairs_5",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on pairs (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B가 새지 않게 엄지로 덮어 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
지난주 16분 썸을 **BPM 60**으로 가볍게 흘려 손을 깨워요. 오늘은 왼손을 <mark>해머온 자세</mark>로 미리 준비해 둬요.

**10~20분 · 두뇌 훈련**
아래처럼 **아주 느리게**, 썸으로 친 **E**에 해머온 **G**를 얹어요. **1마디는 썸만, 2마디는 해머온**이에요.

```json
{
  "id": "m2.w6.d1.hammer_slow_4",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on, slow (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 1마디 썸 펄스, 2마디 해머온. 두 번째 음 **G**가 또렷한지 귀로 확인해요.

```json
{
  "id": "m2.w6.d1.hammer_slow_5",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on, slow (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지 옆면으로 덮어 두세요.

**20~40분 · 실전**
**썸+해머 두 음**을 **BPM 75**에서 반복해요. 두 번째 음이 <mark>뭉개지면</mark> 속도를 낮춰 해머의 결단력부터 살려요. 4현으로 익힌 뒤 5현으로도 같은 두 음을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>해머온 음이 첫 음만큼 또렷한지</mark> 들어봐요. 오늘 안정된 BPM도 적어 둬요.

**오늘의 완료 기준:** 개방 E를 썸으로 친 뒤 해머온으로 G를 붙여, 한 번 쳐서 두 음을 BPM 75에서 또렷하게 낼 수 있다.

## ④ 팁 / 흔한 실수

오늘 배운 해머온을 **BPM 85**로 살짝 밀어, 빨라져도 두 번째 음이 살아 있는지 확인해요.

```json
{
  "id": "m2.w6.d1.hammer_check_4",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on speed check (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **BPM 85, 4현.** 조금 빨라져도 **해머온 G**가 또렷하게 살아 있는지 확인해요.

```json
{
  "id": "m2.w6.d1.hammer_check_5",
  "type": "tab",
  "meta": { "title": "Thumb + hammer-on speed check (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale", "technique": "hammer_on" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 늘 엄지로 덮어 두세요.

- **해머가 약해요.** 손가락을 살짝 들었다가 **프렛 뒤를 겨냥해** 툭 떨어뜨려요. 힘이 아니라 **속도**예요.
- **첫 음이 죽어요.** 해머에 신경 쓰다 엄지가 약해지기 쉬워요. **썸도 또렷하게** 쳐 두 음의 크기를 맞춰요.
- **프렛에서 멀어요.** 프렛에서 멀리 누르면 소리가 뭉개져요. **프렛 바로 뒤**를 겨냥해요.
- **저음 B 방심(5현).** 해머에 몰두하다 B가 울리기 쉬워요. 엄지 옆면으로 늘 B를 덮어 두세요.
