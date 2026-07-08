---
title: "고스트 그루브 완성 — 기타가 드럼처럼 들리기"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 실제음은 스네어, 고스트는 하이햇

## ① 이론/설명

이번 주 결승선이에요. 오늘은 실제음과 고스트를 교대로 배치한 그루브를 백킹 트랙 위에서 완성해, **기타 한 대가 드럼처럼 들리게** 만들어요.

한번 상상해보세요. 균일하게 깔리는 고스트('치')는 드럼의 하이햇이고, 가끔 또렷하게 튀는 실제음('따')은 스네어예요. 이 둘이 맞물리면, 코드를 화려하게 바꾸지 않아도 기타 혼자서 리듬 세션을 꾸린 것처럼 들려요. 실제로 백킹의 드럼과 겹쳐보면, 내 '따'가 스네어와, 내 '치'가 하이햇과 포개지는 순간 소름 돋는 그루브가 생겨요.

이번 주에 배운 걸 정리하면 이래요. 고스트 노트는 힘 뺀 '퍽' 소리다(D1). 그 고스트를 균일하게 깔면 하이햇 카펫이 된다(D2). 그 위에 실제음을 아껴 얹으면 그루브가 된다(D3). 오늘은 이 셋을 한 판에 굴려 백킹과 맞춰봅니다.

아직 코드는 작은 스탭 하나뿐이지만, 벌써 '펑크답게' 들리기 시작할 거예요. 다음 주엔 여기에 **악센트**를 더해, 특정 '따'를 더 세게 꽂아 그루브를 한층 살립니다. 오늘 백킹 위에서 처음으로 '내 기타가 드럼 같다'는 느낌이 든다면, 이번 주는 대성공이에요. 두 주 만에 오른손 모터에 왼손 드럼까지 얹은 여러분, 정말 빠르게 오고 있어요. 아직 코드 하나뿐이지만, 이미 '펑크가 들리는' 연주를 하고 있는 거예요.

## ② 시각 자료

실제음(스네어)과 고스트(하이햇)를 교대로 배치한 완성형 그루브예요. 아래 스탭 자리에서 압력 온·오프로 두 그루브를 쳐봅니다.

**고음 E 스탭(복습).** 같은 2·3번 줄 자리. 꾹 누르면 실제음(따=스네어), 힘 빼면 고스트(치=하이햇).

```json
{
  "id": "m1.w2.d3.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 고스트 그루브 A(2마디).** 박 머리와 엇박에 '따', 나머진 '치'. 가장 기본적인 펑크 그루브의 뼈대예요.

```json
{
  "id": "m1.w2.d4.groove_a",
  "type": "tab",
  "meta": { "title": "Ghost-note groove A (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 백킹 트랙 위에서 4번 이상. 내 '따'가 스네어와 겹치는지 느껴보세요.

**예제 2 — 고스트 그루브 B(2마디).** 실제음을 더 촘촘히 섞은 드럼 같은 버전. '따'와 '치'가 빠르게 교대해요.

```json
{
  "id": "m1.w2.d4.groove_b",
  "type": "tab",
  "meta": { "title": "Ghost-note groove B — drum-like (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 익으면 '따' 위치를 바꿔 나만의 버전으로. 기타가 드럼처럼 들리는지 확인.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. D1~D3의 고스트·실제음 대비를 가볍게 복습. 압력 온·오프가 손에 붙었는지 점검.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 드럼처럼 듣기)**
'따'는 스네어, '치'는 하이햇이라 상상하며 입으로 패턴을 노래해요. 실제음이 스네어 자리(보통 2·4박)에 오는지 그려봅니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 70)**
**예제 1**(그루브 A)을 백킹 위에서 4번 → **예제 2**(그루브 B)로. 내 '따'가 스네어와, '치'가 하이햇과 맞물리는지가 관건.

**40~50분 · 녹음/셀프 피드백 (권장)**
백킹과 함께 2마디 두 바퀴 녹음 후 체크: 고스트가 '퍽'으로 깔끔한가 / 실제음이 스네어와 맞물리는가 / 기타가 드럼처럼 들리는가.

**오늘의 완료 기준:** 실제음과 고스트를 교대로 배치한 그루브를 백킹 트랙 위에서, 기타가 드럼처럼 들리게 유지할 수 있다. (2주차 완성!)

## ④ 팁 / 흔한 실수

- **실제음이 스네어에서 벗어남.** '따'가 백킹 스네어(보통 2·4박)와 어긋나면 그루브가 흔들려요. 스네어에 '따'를 겹쳐보세요.
- **고스트가 묻힘.** 배경 '치'가 약하면 대비가 죽어요. 하이햇처럼 또렷하게 유지.
- **너무 꽉 채움.** 빈 공간(여백)이 있어야 드럼처럼 들려요. 다 채우지 말고 숨 쉴 자리를.
- **백킹 없이 연습만.** 드럼과 겹칠 때 진짜 그루브가 살아요. 꼭 트랙 위에서 맞춰보세요.
