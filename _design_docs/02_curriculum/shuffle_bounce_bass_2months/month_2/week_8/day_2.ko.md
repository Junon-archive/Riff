---
title: "곡 구조 — 메인 바운스 + 멜로딕 변주 2마디"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 곡 구조, 메인 바운스 + 멜로딕 변주 2마디

## ① 이론/설명

어제 만든 한 마디 초안이 손에 붙었나요? <mark>오늘은 그 한 마디를 **2마디 곡 구조**로 키워요.</mark> 실제 곡은 같은 한 마디만 무한 반복하지 않아요. 뼈대가 되는 **메인**을 두고, 그다음 마디에서 살짝 변주를 줘서 귀를 붙잡아요. 그 밀고 당기는 두 마디가 곡의 최소 단위예요. 한 마디가 '벽돌'이라면, 두 마디는 그 벽돌로 쌓은 작은 '방'이에요.

1마디는 **메인 바운스**예요. 어제의 그루브 그대로, 루트+고스트에 5도·b7을 한 번씩 얹은 익숙한 형태예요. 2마디는 **멜로딕 변주**예요. <mark>같은 루트 위에서 5도와 b7을 더 자주 얹어 라인이 노래하듯 움직여요.</mark> 메인이 '자리를 잡는' 마디라면, 변주는 '조금 나아가는' 마디예요.

핵심은 두 마디가 **하나의 흐름**으로 이어지는 거예요. 메인에서 변주로, 변주에서 다시 메인으로 매끄럽게 돌아와야 반복이 지루하지 않아요. <mark>변주 마디에서 음을 더 넣더라도 바운스의 뒤로 눕는 느낌과 고스트의 작은 칙은 그대로 지켜요.</mark> 색을 더한다고 그루브의 성격이 바뀌면 안 돼요. 두 마디가 자연스럽게 맞물릴 때 비로소 반복이 지루하지 않은 진짜 곡이 돼요.

**BPM 73**에서 두 마디를 한 덩어리로 돌려요. 두 달 전엔 한 박도 벅찼는데, 이제 스스로 작은 곡을 짜고 있어요. 이 2마디가 이번 주 졸업곡의 뼈대예요. 다음 트랙 **슬랩·워킹 베이스**에선 이 구조 위에 더 넓은 라인을 얹게 돼요.

## ② 시각 자료

오늘의 시각 자료는 **메인 바운스 + 멜로딕 변주** 2마디예요. 4현·5현으로 나란히 봐요. <mark>1마디는 자리를 잡고, 2마디는 노래하듯 움직여요.</mark>

1마디는 어제의 메인 그대로, 2마디는 5도·b7을 더 얹은 변주예요. <mark>두 마디가 하나의 곡으로 이어져요.</mark>

```json
{
  "id": "m2.w8.d2.two_bar_song_4",
  "type": "tab",
  "meta": { "title": "Two-bar bounce tune (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 73, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 73, 스윙16 · 레이백.** 1마디 메인은 어제 그대로, 2마디 변주는 **5도**·**b7**을 더 자주 얹어 노래하듯 움직여요.

```json
{
  "id": "m2.w8.d2.two_bar_song_5",
  "type": "tab",
  "meta": { "title": "Two-bar bounce tune (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 73, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 안 쓰는 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제의 메인 한 마디를 BPM 65에 가볍게 복습해요. 루트와 고스트, 5도·b7의 자리를 손이 기억하는지 짧게 확인해요.

**10~20분 · 두뇌 훈련**
2마디를 아주 느리게 이어 봐요. <mark>메인에서 변주로 넘어갈 때 바운스의 성격이 끊기지 않는지</mark> 귀로 확인해요.

**20~40분 · 실전 (2마디 곡)**
**메인 바운스 + 멜로딕 변주** 2마디를 **BPM 73**에서 반복해요. 변주에서 다시 메인으로 매끄럽게 돌아오는 이음매가 오늘의 목표예요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음 (2마디 그루브)**
2마디 곡을 몇 판 녹음해요. 어제의 한 마디 초안과 나란히 들으며 곡이 자라는 걸 확인해요.

**오늘의 완료 기준:** 메인 바운스와 멜로딕 변주를 하나의 흐름으로 이어 2마디 곡을 BPM 73에서 돌릴 수 있고, 4현·5현 둘 다 녹음으로 남길 수 있다.

## ④ 팁 / 흔한 실수

- **변주가 다른 곡처럼 들려요.** 변주는 메인의 형제예요. 음만 늘리고 바운스 성격은 그대로 지켜요.
- **이음매에서 박자가 튀어요.** 변주 끝과 메인 시작이 맞물리는지 아주 느리게 붙여 봐요.
- **변주에서 고스트를 버려요.** 색을 얹어도 고스트의 작은 칙은 남겨야 그루브가 살아요.
- **2마디를 각각 따로 연습.** 항상 두 마디를 한 덩어리로 붙여서 돌려요.
- **저음 B 방심(5현).** 안 쓰는 저음 B는 엄지로 덮어 둬요.
