---
title: "슬라이드로 진입 — 음에 미끄러져 들어가기"
dayKey: "m3.w11.d1"
estMinutes: 50
i18nKey: "lesson.m3.w11.d1"
---

# Day 1 — 슬라이드로 릭에 미끄러져 들어가기

## ① 이론/설명

11주차가 시작됐어요. 지난 열 주 동안 여러분은 스케일을 익히고, 블루노트를 찾고, BB의 색까지 손에 담았어요. 이제부터는 그 음들을 **더 매력적으로 '말하게'** 만드는 법을 배워요. 오늘의 주제는 **슬라이드**예요 — 음을 딱 짚어 시작하는 대신, 한두 프렛 아래에서 미끄러져 들어가며 목표음에 도착하는 기술이죠. <mark>슬라이드는 음에 '진입'하는 방법이에요 — 그냥 도착하는 게 아니라, 스르륵 미끄러지며 등장하는 거예요.</mark> 같은 근음 A라도 툭 치고 들어갈 때와 아래에서 미끄러져 올라올 때의 표정은 완전히 달라요.

오늘 쓸 슬라이드는 **b7에서 근음 A로** 미끄러져 올라가는 거예요. 4번줄 5프렛 **G(b7)**에 손가락을 얹고, 줄에서 손을 떼지 않은 채 7프렛 **근음 A**까지 스르륵 밀어올려요. <mark>손끝이 지판을 떠나지 않고 이어져야 두 음이 하나의 선처럼 매끄럽게 연결돼요.</mark> 이때 누르는 힘은 일정하게 유지해요 — 도착하는 순간 힘이 빠지면 음이 사라져버리거든요.

슬라이드의 매력은 **긴장과 도착**이에요. 아래 음에서 출발해 목표음으로 미끄러지는 그 짧은 순간에, 듣는 사람은 '어디로 갈까?' 하고 귀를 기울여요. 그러다 목표음에 딱 도착하면 <mark>기다림이 풀리는 시원함</mark>이 생기죠. 오늘은 이 슬라이드 하나로 릭에 진입하는 연습을 해요. **BPM 70**으로 천천히, 손끝이 지판을 타고 흐르는 감각을 충분히 즐기면서요. 이 작은 미끄러짐 하나가 여러분의 릭에 표정을 더해줄 거예요.

```json
{
  "id": "m3.w11.d1.slide_map",
  "type": "scale_shape",
  "meta": { "title": "Slide entry: b7 up to root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **b7(4번줄 5프렛)**에서 **초록 근음 A(7프렛)**까지 미끄러져 올라가요. 슬라이드의 출발과 도착이에요.

## ② 시각 자료

슬라이드가 사는 곳은 익숙한 **박스1**이에요. 4번줄의 **b7 → 근음 A** 슬라이드를 중심으로, b3·4·5도가 한 손 안에 함께 있어요. <mark>새 위치를 외울 필요 없이, 늘 쓰던 홈에서 미끄러짐만 더하면 돼요.</mark>

```json
{
  "id": "m3.w11.d1.box_slides",
  "type": "scale_shape",
  "meta": { "title": "Box 1 with slide targets", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **초록 근음 A**가 슬라이드의 도착점, 그 아래 **b7**이 출발점이에요. 나머지는 익숙한 박스1 음들이고요.

<mark>미끄러져 들어가는 그 짧은 순간이 오늘 릭의 표정을 결정해요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. **b7에서 근음 A로** 미끄러지는 그 하나에만 집중해요. 도착음이 또렷하게 살아 있는지 귀로 확인하면서요.

```json
{
  "id": "m3.w11.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: slide into root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60.** b7에서 근음 A로 미끄러져 올라간 뒤, b3을 거쳐 근음에 비브라토로 앉아요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 슬라이드 진입)**
실전 전에, 아래 음에서 목표음으로 미끄러지는 그 궤적을 머릿속으로 먼저 그려요. <mark>귀가 '미끄러짐 → 도착'의 순간을 먼저 상상하면, 손은 그 선을 따라가기만 하면 돼요.</mark>

**20~40분 · 실전: 슬라이드 진입 릭 (BPM 70)**
오늘의 완성물, **슬라이드 진입 릭**이에요. **b7 → 근음 A** 슬라이드로 문을 열고, 4도와 b3을 지나 근음에 비브라토로 착지해요. 첫 음부터 미끄러지며 등장하니, 릭 전체가 한결 부드럽게 들려요.

```json
{
  "id": "m3.w11.d1.slide_lick",
  "type": "tab",
  "meta": { "title": "Slide entry lick", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70.** **b7(4번줄 5프렛)**에서 근음으로 미끄러져 진입 → 4도(3번줄 7프렛) → b3 → 근음 비브라토 착지.

<mark>첫 음이 미끄러지며 들어오는 순간, 릭이 '연주'가 아니라 '말'처럼 들리기 시작해요.</mark>

**40~50분 · 녹음**
A7 백킹 위에서 슬라이드 진입 릭을 녹음해요. 첫 음이 미끄러지며 들어오는 그 표정이 잘 담겼는지 들어봐요.

**오늘의 완료 기준:** A7 위에서 b7 → 근음 A 슬라이드로 릭에 진입해, 첫 음부터 미끄러지며 등장하는 슬라이드 릭을 완성하고 녹음했다.

## ④ 팁 / 흔한 실수

슬라이드에서 흔한 실수예요. 대부분 **도착음을 놓치는** 데서 와요.

```json
{
  "id": "m3.w11.d1.slide_timing",
  "type": "scale_shape",
  "meta": { "title": "Land the slide on the beat", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true }
  ]}
}
```
▶ **박자에 맞춰 도착하세요.** 미끄러지는 건 자유지만, 목표음은 정확한 타이밍에 딱 도착해야 해요.

- **너무 빨리 미끄러져요.** 그러면 중간이 뭉개져요. 천천히, 목표음까지의 거리를 느끼며 밀어요.
- **도착하자마자 힘이 빠져요.** 그러면 도착음이 사라져요. 미끄러진 뒤에도 소리가 살아 있어야 해요.
- **손을 지판에서 떼며 미끄러져요.** 그건 슬라이드가 아니라 두 번 짚기예요. 손끝은 줄에 붙인 채 이어요.
- **출발 프렛을 아무 데서나 잡아요.** b7(5프렛)에서 출발해야 근음까지의 거리가 딱 맞아요.
