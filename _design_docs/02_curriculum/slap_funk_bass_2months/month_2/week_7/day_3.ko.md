---
title: "더블 썸 맛보기 — 엄지 다운-업"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 더블 썸 맛보기, 엄지 다운-업

## ① 이론/설명

이번 주 마지막에 <mark>살짝 구경</mark>할 게 있어요 — **더블 썸**이에요. 지금까지 썸은 아래로 '탁' 내려치는 **한 방향**이었죠. 더블 썸은 엄지를 아래로 친 뒤, 되돌아 올라오며 <mark>한 번 더 튕겨요</mark>. 다운-업, **한 동작에서 두 음**이 나는 거예요. 고난도라 오늘은 원리만 맛봐요 — 되면 좋고, 안 돼도 괜찮아요. 무리해서 서두를 필요는 전혀 없어요.

제일 흔한 연습은 **옥타브**예요. 개방 **E**(R)를 엄지로 아래로 치고(다운), 엄지가 되돌아오며 **D현 2프렛의 E**(한 옥타브 위 R)를 위로 걸어 튕겨요(업). 두 음 다 **엄지 하나**로 내는 거예요. 손가락 팝과 달리, 엄지가 <mark>드럼 스틱처럼</mark> 오르내려요. 저음 다운이 킥, 옥타브 업이 스네어처럼 들리죠.

요령은 엄지에 힘을 빼고 **가볍게 굴리는** 거예요. 아래로 칠 땐 손끝 살로 '탁', 올라올 땐 손톱 쪽으로 현을 살짝 걸어 '틱'. **BPM 50**처럼 아주 느리게, 다운과 업이 **같은 크기**로 나는지만 봐요. 업이 약한 게 정상이에요 — 오늘은 그저 <mark>이런 게 있구나</mark> 느끼면 충분해요. 표기는 따로 없이, 그냥 엄지 두 번이라고 생각해요.

**5현**이라도 옥타브는 4현과 똑같아요. 저음 **B**는 엄지 옆면으로 덮어 두고, 옥타브 **두 E**에만 집중해요. 오늘은 완성이 목표가 아니라 **경험**이 목표예요. 내일은 이번 주의 팝핑 멜로디 라인을 완성하니까, 더블 썸은 편하게 맛만 봐요. 먼저 두 E의 자리를 지판으로 찍어요.

```json
{
  "id": "m2.w7.d3.thumb_octave_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Double thumb octave (E-E, R-R) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 아래 **개방 E**(다운), 위 **D현 2프렛 E**(업). 옥타브 위아래 두 자리예요.

```json
{
  "id": "m2.w7.d3.thumb_octave_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Double thumb octave (E-E, R-R) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 손 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 두세요.

## ② 시각 자료

오늘은 **더블 썸**을 <mark>맛만</mark> 봐요. 먼저 익숙한 **엄지 다운**으로 손을 데운 뒤, 옥타브를 다운-업으로 굴려 봐요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **엄지 다운**. 개방 **E**(R)를 4분음표로 또박또박 내려쳐, 익숙한 **다운 타격**을 확인해요.

```json
{
  "id": "m2.w7.d3.thumb_down_4",
  "type": "tab",
  "meta": { "title": "Thumb down pulse (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
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

▶ **BPM 60, 4현.** 네 번의 익숙한 다운. 여기에 '업'을 얹을 거예요.

```json
{
  "id": "m2.w7.d3.thumb_down_5",
  "type": "tab",
  "meta": { "title": "Thumb down pulse (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
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

이제 옥타브를 **다운-업**으로 굴려요. 낮은 **E**는 다운, 높은 **E**는 엄지가 되돌아오며 내는 <mark>업</mark>이에요.

```json
{
  "id": "m2.w7.d3.thumb_octave_4",
  "type": "tab",
  "meta": { "title": "Double thumb octave down-up (E-E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 낮은 E는 다운, 높은 E는 업. 표기는 없지만 둘 다 엄지 하나예요.

```json
{
  "id": "m2.w7.d3.thumb_octave_5",
  "type": "tab",
  "meta": { "title": "Double thumb octave down-up (E-E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지로 덮어 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 더블스탑을 **BPM 60**으로 가볍게 흘려 손을 깨워요. 오늘은 엄지 힘을 <mark>쭉 빼고</mark> 가볍게 흔들어 둬요.

**10~20분 · 두뇌 훈련**
아래처럼 **아주 느리게**, 1마디는 다운만, 2마디는 옥타브 **다운-업**이에요.

```json
{
  "id": "m2.w7.d3.thumb_slow_4",
  "type": "tab",
  "meta": { "title": "Down + octave down-up, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 50, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 50, 4현.** 1마디 다운, 2마디 다운-업. 업이 조금 약해도 괜찮아요.

```json
{
  "id": "m2.w7.d3.thumb_slow_5",
  "type": "tab",
  "meta": { "title": "Down + octave down-up, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 50, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 엄지 옆면으로 덮어 두세요.

**20~40분 · 실전**
옥타브 다운-업을 **BPM 60**에서 천천히 굴려요. 업이 <mark>안 나면</mark> 속도를 더 낮춰 엄지 되돌림만 연습해요. 4현으로 느낌을 잡은 뒤 5현으로도 살짝 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>다운과 업이 둘 다 들리는지</mark> 들어봐요. 안 되면 다운만 또렷해도 오늘은 충분해요.

**오늘의 완료 기준:** 개방 E를 다운으로 친 뒤 엄지가 되돌아오며 옥타브 E를 업으로 내는 더블 썸의 원리를 BPM 50에서 맛볼 수 있다.

## ④ 팁 / 흔한 실수

옥타브 다운-업을 **BPM 70**으로 살짝만 밀어, 굴림이 조금 빨라져도 형태가 남는지 확인해요.

```json
{
  "id": "m2.w7.d3.thumb_check_4",
  "type": "tab",
  "meta": { "title": "Octave down-up check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 조금 빨라져도 **다운-업**의 형태가 남는지 확인해요. 안 되면 다시 느리게.

```json
{
  "id": "m2.w7.d3.thumb_check_5",
  "type": "tab",
  "meta": { "title": "Octave down-up check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 B는 늘 엄지로 덮어 두세요.

- **업이 안 나요.** 되돌아오는 엄지가 현을 못 걸면 소리가 안 나요. **손톱 쪽 모서리**로 살짝 걸어요.
- **손목이 뻣뻣해요.** 힘이 들어가면 굴리기 어려워요. **엄지를 축으로** 가볍게 흔들어요.
- **박자가 흔들려요.** 업에 신경 쓰다 다운이 밀리기 쉬워요. **다운을 기준**으로 삼아 정박을 지켜요.
- **저음 B 방심(5현).** 옥타브에 몰두하다 B가 울리기 쉬워요. 엄지 옆면으로 늘 B를 덮어 두세요.
