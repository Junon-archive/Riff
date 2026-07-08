---
title: "위치가 곧 그루브 — 같은 패턴, 다른 느낌"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 강세 한 칸 옮기면 다른 곡이 된다

## ① 이론/설명

어제는 '한 박의 &'에 악센트를 넣었죠. 오늘의 발견은 짜릿해요. **그 강세를 한 칸만 옮겨도, 완전히 다른 그루브가 돼요.**

나머지 열다섯 음은 똑같이 약하게 흘러가는데, 강세 하나만 'e'(두 번째 조각)로 옮기면 급하게 앞으로 당기는 느낌이 나고, 'a'(네 번째 조각)로 옮기면 뒤로 살짝 끄는 느긋한 느낌이 나요. 같은 재료, 강세 자리 하나 차이로 전혀 다른 표정이 나오는 거죠. 사실 우리가 아는 펑크 명곡들의 개성도, 알고 보면 이 강세 위치의 차이에서 나온 경우가 많아요.

그래서 오늘은 '무엇을 치느냐'가 아니라 '**어디에 강세를 꽂느냐**'로 그루브의 색을 바꾸는 실험을 해요. e에도 넣어보고, a에도 넣어보고, 두 개를 섞어도 보고. 귀로 그 차이를 느끼는 게 오늘의 핵심이에요.

한 자리를 정확히 짚는 게 어색할 수 있어요. 특히 'e'나 'a'처럼 박에서 살짝 벗어난 자리는 놓치기 쉬워요. 괜찮아요, 천천히 입으로 세면서 그 자리에만 힘을 실으면 돼요. 이 감각이 붙으면, 나중엔 좋아하는 곡을 듣고 "아, 여기 a에 강세가 있네" 하고 알아채는 귀까지 생겨요. 그러니 오늘 하나를 정확히 못 짚어도 괜찮아요. 위치를 바꿔가며 '어, 느낌이 달라졌다'를 즐기는 것만으로도 여러분의 리듬 어휘는 벌써 넓어지고 있어요.

## ② 시각 자료

같은 스탭 자리, 강세 위치만 달라요. 초록 자리가 강세 — 어제는 '&', 오늘은 'e'와 'a'예요.

**예제 1 — 'e'에 악센트(1마디).** 각 박의 두 번째 조각(e)에 강세. 박 바로 뒤라 앞으로 당기는 급한 느낌이 나요.

```json
{
  "id": "m1.w3.d2.accent_e",
  "type": "tab",
  "meta": { "title": "Accent on the 'e' (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68.** '치-팍-치-치'. 어제의 '&' 버전과 번갈아 쳐보며 느낌 차이를 비교.

**예제 2 — 'a'에 악센트(2마디).** 각 박의 네 번째 조각(a)에 강세. 박 끝이라 다음 박으로 끄는 느긋한 느낌.

```json
{
  "id": "m1.w3.d2.accent_a",
  "type": "tab",
  "meta": { "title": "Accent on the 'a' (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" }
    ]}
  ]}
}
```

▶ **BPM 68.** '치-치-치-팍'. e 버전과 비교하면 완전히 다른 그루브인 게 느껴져요. 4번 반복.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 어제의 '&' 악센트를 복습한 뒤, 강세를 'e'로, 'a'로 옮겨보며 워밍업.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 강세 위치 이동)**
입으로 "치-팍-치-치"(e), "치-치-치-팍"(a)을 번갈아 세요. 강세가 어느 조각에 오는지 정확히 짚습니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 68)**
**예제 1**('e' 악센트)을 BPM 68에서 4번 → **예제 2**('a' 악센트)로. 두 버전을 번갈아 치며 느낌 차이를 체감.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 강세가 정확히 e/a 자리에 오는가 / 두 버전의 그루브가 다르게 들리는가 / 나머지가 약한가.

**오늘의 완료 기준:** 같은 패턴에서 강세를 e·a로 옮겨, 위치에 따라 그루브 느낌이 달라지는 걸 만들고 구분할 수 있다.

## ④ 팁 / 흔한 실수

- **강세가 박으로 붙음.** e·a는 박에서 살짝 벗어난 자리예요. 박에 붙여버리면 어제와 똑같아져요.
- **두 버전이 똑같이 들림.** 강세가 약하면 위치 차이가 안 들려요. 강세를 더 또렷하게.
- **강세 자리를 놓침.** e·a는 놓치기 쉬워요. 입으로 세며 그 자리에만 힘을.
- **속도부터.** 위치가 정확해야 비교가 돼요. 느리게, 자리를 또렷이.
