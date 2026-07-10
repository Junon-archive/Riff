---
title: "T-P 균일 — 둥-딱을 자로 잰 듯"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 둥-딱을 자로 잰 듯, T-P 균일

## ① 이론/설명

2주차의 문을 열어요. 지난주에 **썸(둥)**과 **팝(딱)**을 처음 번갈아 냈다면, 이번 주는 그 둘을 <mark>그루브</mark>로 엮습니다. 그 첫 단추가 오늘의 **T-P 균일**이에요. 화려한 라인은 잠시 접어두고, **둥-딱을 자로 잰 듯 똑같은 크기·똑같은 간격**으로 번갈아 내는 것 하나에만 집중해요.

오늘은 옥타브 손모양은 잠깐 미뤄두고, 가장 편한 **두 개방음**으로 연습해요. 썸은 **개방 E(4번현)**, 팝은 **개방 G(1번현)** — 왼손은 거의 쉬어요. 그래서 <mark>오른손 두 동작의 균형</mark>에만 온전히 집중할 수 있어요. 엄지로 아래를 '둥', 검지로 위를 '딱', 딱 그 왕복이에요.

오늘의 진짜 스승은 **메트로놈**이에요. 둥은 **박 위에 정확히**, 딱도 **다음 박 위에 정확히** 떨어져야 해요. 둘 중 하나라도 앞서거나 늦으면 그루브가 절뚝여요. <mark>둥-딱이 메트로놈과 한 몸</mark>이 되는 감각, 그게 오늘의 전부예요. **BPM 60**에서 천천히, 두 소리가 같은 크기로 또박또박 오가게 해요. 이번 주를 관통하는 철학을 떠올려요 — **슬랩은 드럼**이에요. 썸은 킥, 팝은 스네어. 드러머가 박을 흘리지 않듯, 오늘의 둥-딱도 박을 놓치지 않는 게 무엇보다 먼저예요.

**5현**이라면 개방음 위치가 4현과 완전히 똑같아요. 저음 B는 엄지로 덮어 두면 되고, 익숙해지면 같은 왕복을 더 묵직한 저음으로도 시험할 수 있어요. 오늘은 속도 욕심을 내려놓고, **균일** 하나만 손에 새겨요.

## ② 시각 자료

오늘은 왼손을 거의 쓰지 않아요 — **개방 E**를 썸으로, **개방 G**를 팝으로 번갈아요. 먼저 두 타점을 지판에서 확인하고, 4분음표로 <mark>둥-딱을 또박또박</mark> 왕복한 뒤 8분음표로 촘촘히 이어가요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **T-P 타점 지도**예요. 파랑 점 아래가 썸으로 칠 E(4번현), 위가 팝으로 튕길 G(1번현)예요.

```json
{
  "id": "m1.w2.d1.tp_open_spots_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb E + pop G open spots — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 파랑 점 아래가 근음 E(4번현, 썸), 위가 G(1번현, 팝)예요. 두 타점을 눈에 익혀요.

```json
{
  "id": "m1.w2.d1.tp_open_spots_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb E + pop G open spots — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 엄지로 덮어 안 울리게 둬요.

**예제 1 — T-P 4분음표.** 한 박에 한 번씩 번갈아요. 악보의 **T**는 썸, **P**는 팝이에요.

```json
{
  "id": "m1.w2.d1.tp_quarter_4",
  "type": "tab",
  "meta": { "title": "T-P alternation quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 메트로놈 한 박에 둥(T) 한 번, 다음 박에 딱(P) 한 번. 두 소리 크기가 같은지 귀로 확인해요.

```json
{
  "id": "m1.w2.d1.tp_quarter_5",
  "type": "tab",
  "meta": { "title": "T-P alternation quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 재워 두세요.

**예제 2 — T-P 8분음표.** 한 박을 둘로 쪼개 여덟 번 왕복해요. 빨라져도 <mark>둥-딱 크기가 흐트러지지 않는 선</mark>까지만 올려요.

```json
{
  "id": "m1.w2.d1.tp_eighth_4",
  "type": "tab",
  "meta": { "title": "T-P alternation eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 한 박에 둥-딱 한 쌍. 빨라져도 두 소리가 뭉개지지 않게.

```json
{
  "id": "m1.w2.d1.tp_eighth_5",
  "type": "tab",
  "meta": { "title": "T-P alternation eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "G", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65, 5현.** 4현과 음이 똑같아요. 여기서도 저음 B는 엄지로 재워 두세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제까지 익힌 **썸(개방 E)**과 **팝(개방 G)**을 BPM 60으로 각각 몇 번 풀어요. 두 소리의 손이 다 깨어 있는지 확인해요.

**10~20분 · 두뇌 훈련**
T-P를 아주 느리게 번갈아요. <mark>둥과 딱이 메트로놈 위에 정확히 얹히는지</mark>, 그 타이밍에만 집중해요.

**20~40분 · 실전**
예제 1(4분음표)을 **BPM 60**에서 반복 → 둥-딱이 고르면 예제 2(8분음표)로 넘어가 **BPM 65**. 크기가 어긋나면 다시 4분음표로 내려와요.

**40~50분 · 녹음/피드백**
30초 녹음해 <mark>둥과 딱이 같은 크기로 번갈아 나는지</mark> 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 개방 E(썸)와 개방 G(팝)의 T-P를 BPM 60~65에서 같은 크기로, 메트로놈에 또박또박 얹어 번갈아 칠 수 있다.

## ④ 팁 / 흔한 실수

- **팝만 커요.** 팝이 튀는 소리라 크게 들리기 쉬워요. 썸을 조금 더 힘 있게 쳐 두 소리 크기를 맞춰요.
- **딱이 늦게 와요.** 둥 뒤 딱이 밀리면 그루브가 절뚝여요. 느린 4분음표로 돌아가 왕복을 다듬어요.
- **속도 욕심.** 60에서 크기가 어긋나는데 올리면 다 무너져요. 이번 주도 균형이 먼저예요.
- **저음 B 방심(5현).** 손이 바빠지면 B가 새기 쉬워요. 엄지는 늘 B를 덮고 지나가세요.
