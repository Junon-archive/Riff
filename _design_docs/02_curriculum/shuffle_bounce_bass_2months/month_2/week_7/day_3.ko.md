---
title: "하프타임 셔플 맛보기 — 넓게 퍼지는 필"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 하프타임 셔플 맛보기, 넓게 퍼지는 필

## ① 이론/설명

오늘은 <mark>넓게 퍼지는 필</mark>을 맛봐요 — **하프타임 셔플**이에요. 하프타임은 같은 템포인데도 박자가 **절반 속도처럼** 넓게 느껴지는 감각이에요. 드럼의 스네어가 2·4마다 촘촘히 오는 대신, 한 박 걸러 크게 오면서 곡이 확 넓어져요. 같은 템포인데도 곡이 두 배로 여유로워지는 마법이에요.

베이스는 이 넓은 공간을 **루트로 크게** 잡아 줘요. 음을 촘촘히 채우는 대신 **1박과 3박**을 묵직하게 딛고, 사이는 스윙16 고스트로 살짝만 굴려요. <mark>공간이 넓을수록 하프타임 특유의 여유가 살아나요.</mark>

여기에 이번 주의 **레이백**을 얹으면 금상첨화예요. 넓은 박자를 뒤로 살짝 눕히면, 셔플의 끈적함과 하프타임의 넓이가 한꺼번에 느껴져요. <mark>서두르지 않는 여유가 오늘도 핵심이에요.</mark> 급하게 채우고 싶은 마음을 내려놓아요. 채우고 싶은 손을 참는 것도 오늘의 연습이에요.

오늘은 '맛보기'예요. 완벽히 익히기보다 **넓은 느낌**을 몸으로 경험하는 게 목표예요. **BPM 72**에서 뼈대부터 세우고 고스트를 얹어요. 넓은 공간을 겁내지 말고, 오히려 그 여백을 즐기는 게 요령이에요. <mark>한 마디가 넓고 여유롭게 굴러가면 오늘은 성공이에요.</mark> 4현이든 5현이든 운지는 똑같아요.

## ② 시각 자료

오늘의 시각 자료는 두 가지예요. 먼저 <mark>하프타임의 뼈대</mark>를 1박·3박 루트로만 세우고, 그다음 사이에 스윙16 고스트를 얹어 셔플의 맛을 더해요. 각 예제는 4현·5현 두 버전이에요.

먼저 **하프타임 뼈대**예요. 루트 E를 **1박과 3박**에만 크게 딛고, 나머지는 비워 넓은 공간을 만들어요.

```json
{
  "id": "m2.w7.d3.halftime_skeleton_4",
  "type": "tab",
  "meta": { "title": "Half-time skeleton (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 72, 하프타임.** 루트를 1박·3박에만 크게. 넓은 빈칸이 하프타임의 넓이예요. **5현이라면** 저음 B는 재워 둬요.

```json
{
  "id": "m2.w7.d3.halftime_skeleton_5",
  "type": "tab",
  "meta": { "title": "Half-time skeleton (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

이번엔 <mark>같은 뼈대에 스윙16 고스트</mark>를 얹어요. 빈칸 몇 곳에 **마른 고스트**를 살짝 넣어 셔플의 끈적함을 더해요.

```json
{
  "id": "m2.w7.d3.halftime_shuffle_4",
  "type": "tab",
  "meta": { "title": "Half-time shuffle (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 72, 스윙16 · 하프타임.** 빈칸에 마른 고스트를 살짝. 뒤 칸을 눕혀 셔플의 끈적함을 더해요. **5현이라면** 저음 B 대안.

```json
{
  "id": "m2.w7.d3.halftime_shuffle_5",
  "type": "tab",
  "meta": { "title": "Half-time shuffle (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
개방 E 루트를 1박·3박에 크게 얹으며 손을 풀어요. 넓은 공간을 두는 감각부터 찾아요.

**10~20분 · 두뇌 훈련**
1박·3박 루트 사이가 얼마나 넓은지 세어 봐요. <mark>빈칸을 급하게 채우고 싶은 마음</mark>을 천천히 내려놓아요.

**20~40분 · 실전**
**하프타임 셔플**을 **BPM 72**에서 뼈대부터 세운 뒤, 고스트를 얹어 반복해요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음**
하프타임 뼈대와 고스트 버전을 각각 녹음해 나란히 들어요. 넓고 여유로운지 귀로 점검해요.

**오늘의 완료 기준:** 루트를 1박·3박에 크게 딛고 사이에 스윙16 고스트를 얹어, 넓은 하프타임 셔플의 맛을 4현·5현 둘 다에서 느낄 수 있다.

## ④ 팁 / 흔한 실수

- **빈칸을 급하게 채워요.** 하프타임의 넓이는 공간에서 나와요. 음을 더 넣으면 넓이가 사라져요.
- **고스트가 너무 세요.** 고스트는 마른 '칙'이에요. 루트만큼 크면 뼈대가 흐려져요.
- **넓다고 느려져요.** 하프타임은 느린 게 아니라 넓은 거예요. 템포는 그대로 지켜요.
- **저음 B 방심(5현).** 안 쓰는 저음 B는 엄지로 덮어 둬요.
