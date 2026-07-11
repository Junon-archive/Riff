---
title: "삼각형 느끼기 — 한 박을 셋으로 쪼개기"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — 트리플렛 그리드, 한 박을 셋으로

## ① 이론/설명

셔플&바운스 트랙의 첫날이에요. 이번 주엔 아직 부기도, 화려한 코드 이동도 없어요. 대신 **박자를 삼각형으로 느끼는 것**부터 시작해요. 지금까지 8분음표를 **똑같은 간격**으로 반씩 쪼갰다면, 오늘은 한 박을 **셋**으로 나눠 볼 거예요. <mark>한 박을 셋으로 느끼는 이 감각이 이번 주 모든 그루브의 뿌리예요.</mark>

한 박(**4분음표**)을 셋으로 고르게 쪼갠 걸 **셋잇단음표**, 곧 **트리플렛**이라고 불러요. 입으로는 **"1-트-플-릿"**처럼 한 박에 세 음을 얹어 세요. 말이 달리는 발굽 소리 **"따-그-닥"**을 떠올리면 쉬워요. 이렇게 셋씩 굴러가는 격자가 바로 <mark>이번 주 내내 쓸 트리플렛 그리드</mark>예요.

그 위에 얹을 음은 딱 하나, **E 루트**예요. 이번 주 무대는 **키 E**, 4번 현 **개방(0프렛) E**가 우리의 기준음이 돼요. 왼손은 짚을 것도 없이 개방현 하나라서, 오늘은 오직 **오른손 투핑거의 타이밍**에만 집중하면 돼요. <mark>검지·중지를 번갈아</mark> 같은 크기로 셋씩 굴려요.

아직 스윙은 아니에요. 오늘은 세 음을 **똑같은 크기·똑같은 간격**으로 또박또박 굴리는 게 전부예요. **속도는 완전히 잊으세요.** 셋이 고르게 굴러가면, 내일은 이 셋 중 가운데를 빼서 그 유명한 **롱-숏 셔플**로 바꿀 거예요. 조급해할 필요 없어요 — **오늘 삼각형 하나만 확실히 느껴 두면**, 이번 주 나머지 사흘은 그 위에 자연스럽게 쌓여요. 트리플렛은 셔플·부기·바운스, 이번 두 달 전체를 떠받치는 **가장 밑바탕의 리듬 감각**이거든요. 오늘은 그 삼각형을 몸에 새기는 날이에요.

## ② 시각 자료

먼저 오늘의 기준음 **E 루트**를 지판에서 확인하고, 한 박을 **또박또박 네 번** 치는 기본 맥박을 느낀 뒤, 그 한 박을 **셋으로 쪼갠 트리플렛 그리드**를 굴려요. 각 예제는 <mark>4현·5현 두 버전</mark>이라 어떤 베이스든 그대로 따라와요.

먼저 **E 루트 위치**부터. 4번 현 개방(0프렛)이 이번 주 내내 우리의 집이에요.

```json
{
  "id": "m1.w1.d1.e_root_position_4",
  "type": "fretboard_diagram",
  "meta": { "title": "E root position — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 파랑 점이 루트 **E**(4번 현 개방)예요. 왼손은 짚지 않아요 — 이 자리를 눈에 익혀요.

```json
{
  "id": "m1.w1.d1.e_root_position_5",
  "type": "fretboard_diagram",
  "meta": { "title": "E root position — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 맨 아래 저음 **B**는 지금은 재워 두고, E 루트에만 집중해요.

이번엔 **기본 맥박**. 한 박을 4분음표로 또박또박 네 번, 메트로놈처럼 균일하게 쳐요.

```json
{
  "id": "m1.w1.d1.quarter_pulse_4",
  "type": "tab",
  "meta": { "title": "Quarter-note beat (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 개방 **E**를 4분음표로 "1·2·3·4" 또박또박. 이게 우리가 셋으로 쪼갤 **한 박**이에요.

```json
{
  "id": "m1.w1.d1.quarter_pulse_5",
  "type": "tab",
  "meta": { "title": "Quarter-note beat (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**가 새지 않게 오른손 옆면으로 살짝 덮어 둬요.

이제 **트리플렛 그리드**. 방금 그 한 박을 **셋**으로 쪼개, <mark>세 음을 다 똑같은 크기로</mark> 개방 E를 세 번씩 얹어요.

```json
{
  "id": "m1.w1.d1.triplet_grid_4",
  "type": "tab",
  "meta": { "title": "Triplet grid (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** **"1-트-플-릿"**을 세며 한 박에 세 번씩. 아직 굴리지 말고 고르게만 얹어요.

```json
{
  "id": "m1.w1.d1.triplet_grid_5",
  "type": "tab",
  "meta": { "title": "Triplet grid (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "tuplet": { "num": 3, "inSpaceOf": 2 }, "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 셋씩 세는 감각을 저음이 흔들지 않게 **B**는 계속 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
개방 **E**를 4분음표로 BPM 60에 맞춰 또박또박. 오른손 검지·중지가 **같은 크기**로 번갈아 나오는지 확인해요.

**10~20분 · 두뇌 훈련**
입으로 **"1-트-플-릿"**을 소리 내 세며 트리플렛 그리드를 아주 느리게 반복. <mark>세 음의 크기가 다 똑같은지</mark>, 그 균등함에만 집중해요.

**20~40분 · 실전**
트리플렛 그리드를 **BPM 60**에서 반복해요. 한 박에 개방 E 세 번 — 빨라지려 하지 말고 **고르게** 굴리는 데만 신경 써요. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **세 음이 고르게** 들리는지 들어봐요. 한 박이 셋으로 또렷이 갈라지면 오늘 목표 달성이에요.

**오늘의 완료 기준:** "1-트-플-릿"을 세며 개방 E를 한 박에 세 번씩, 세 음이 고르게, 4현·5현 둘 다 굴릴 수 있다.

## ④ 팁 / 흔한 실수

- **넷으로 세게 돼요.** 16분음표처럼 넷으로 세면 트리플렛이 아니에요. "1-트-플-릿" 세 음으로만 세요.
- **가운데가 약해요.** 세 음 중 가운데가 작아지기 쉬워요. 세 음을 똑같은 크기로 맞춰요.
- **벌써 굴려요.** 오늘은 스윙이 아니라 균등한 셋이에요. 롱-숏은 내일 배워요.
- **속도 욕심.** 60에서 셋이 안 고른데 올리면 다 무너져요. 이번 주 내내, 균형이 먼저예요.
