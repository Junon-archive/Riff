---
title: "3줄 커팅 그루브 완성 — 1개월 복습을 얹다"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — 고음역에서 반짝이는 고스트와 악센트

## ① 이론/설명

이번 주 결승선이에요. 오늘은 고음 3줄 트라이어드 위에 1개월차에 배운 **고스트와 악센트**를 얹어, 4마디 커팅 그루브를 백킹 트랙 위에서 완성해요.

지난달 원코드 잼과 원리는 똑같아요. 다만 무대가 두꺼운 6줄 E9에서 얇은 3줄 트라이어드로 바뀌었을 뿐이에요. 그런데 이 무대 변화가 소리를 확 바꿔놔요. 고음역이라 고스트의 '치'는 더 가볍고 선명하게, 악센트의 '착'은 유리처럼 반짝이며 튀어요. 같은 리듬 언어(모터·고스트·악센트)를 쓰는데도, 3줄 커팅으로 옮기니 훨씬 세련되고 '나일 로저스다운' 소리가 나요.

여기에 어제 배운 왼손 뮤트가 든든히 받쳐줘요. 넓게 커팅하면서 아랫줄은 죽이고, 위 3줄에만 고스트·실제음·악센트 세 층을 얹는 거죠. 트라이어드 자리를 가끔 옮기거나 마이너로 색을 바꾸면 4마디가 지루하지 않게 굴러가요.

이번 주를 돌아보면, 여러분은 펑크의 '소리 색'을 손에 넣었어요. 두꺼운 코드 대신 얇은 3줄로 찰랑이는 커팅을 만들 줄 알게 된 거죠. 다음 주엔 여기서 한 발 더 나아가, 코드조차 버리고 **한 줄만** 때려 베이스라인처럼 그리는 싱글 노트 펑크로 갑니다. 오늘 3줄 커팅 그루브가 백킹과 맞물려 반짝인다면, 이번 주는 완벽한 성공이에요. 두꺼운 코드에서 얇은 3줄로 넘어온 이번 주, 여러분의 펑크는 한층 세련돼졌어요. 이제 소리의 '색'을 스스로 고를 수 있게 된 거예요.

## ② 시각 자료

3줄 트라이어드에 고스트·악센트를 얹은 완성형 커팅 그루브예요. 고음역이라 대비가 더 반짝여요.

**E 메이저 트라이어드(복습).** 이 3줄 위에서 고스트·실제음·악센트 세 층을. 아랫줄은 왼손 뮤트로 계속 죽여요.

```json
{
  "id": "m2.w5.d1.emaj_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad (top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```

**예제 1 — 커팅 그루브 A(2마디).** 트라이어드 실제음·뮤트 고스트·악센트(초록)가 고루 섞인 기본형. 악센트가 스네어에 맞물려요.

```json
{
  "id": "m2.w5.d4.groove_a",
  "type": "tab",
  "meta": { "title": "Triad cutting groove A (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 74.** 백킹 위에서 4번 이상. 고음역 커팅이 청량하게 반짝이는지 느껴보세요.

**예제 2 — 커팅 그루브 B(2마디).** 악센트를 더 당기고 실제음을 촘촘히. 익으면 마이너·인버전으로 색을 바꿔 응용.

```json
{
  "id": "m2.w5.d4.groove_b",
  "type": "tab",
  "meta": { "title": "Triad cutting groove B (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 74.** 트라이어드 자리를 옮기거나 색을 바꿔 나만의 커팅 그루브로. 아랫줄 0 유지.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 3줄 트라이어드로 고스트·악센트를 하나씩 얹어 워밍업. 아랫줄 뮤트도 계속 점검.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 세 층 + 3줄)**
백킹 스네어에 악센트를 맞추고, 고스트·실제음·악센트를 3줄 커팅으로 어떻게 배치할지 그려요.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 74)**
**예제 1**(그루브 A)을 백킹 위에서 4번 → **예제 2**(그루브 B)로. 익으면 마이너·인버전·다른 자리로 응용. 아랫줄 0.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 3줄만 청량하게 나는가 / 악센트가 스네어와 맞물리는가 / 아랫줄 잡음이 없는가.

**오늘의 완료 기준:** 3줄 트라이어드에 고스트·악센트를 얹은 커팅 그루브를 백킹 위에서, 아랫줄 잡음 없이 유지할 수 있다. (5주차 완성!)

## ④ 팁 / 흔한 실수

- **고음역인데 둔탁함.** 커팅이 약하거나 손목을 안 썼어요. 고음현은 가볍게 톡톡 스쳐야 반짝여요.
- **악센트가 스네어에서 벗어남.** 2·4박에 정확히. 고음역이라 어긋나면 더 티나요.
- **아랫줄 잡음.** 그루브가 복잡해질수록 뮤트가 풀려요. 왼손 뮤트를 끝까지.
- **변주 없이 반복.** 마이너·인버전·자리 이동으로 4마디에 변화를. 고음역은 특히 단조로워지기 쉬워요.
