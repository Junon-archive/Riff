---
title: "코드가 바뀌면 집도 바뀐다 — D7 위에서 근음 D에 착지하기"
dayKey: "m3.w9.d2"
estMinutes: 50
i18nKey: "lesson.m3.w9.d2"
---

# Day 2 — D7 위에서 근음 D에 착지하기

## ① 이론/설명

어제는 A7 위에서 근음 A에 착지하는 감각을 익혔어요. 오늘은 코드가 하나 바뀌어요 — **D7**이에요. 12마디 블루스에서 5·6마디에 등장하는 이 코드는, A7과는 다른 '집'을 가지고 있어요. <mark>코드가 바뀌면 착지할 집도 함께 바뀌어야 솔로가 코드를 따라가요.</mark> 어제의 집이 A였다면, 오늘의 집은 **D**예요. 같은 박스 안에 그대로 있으면서, 끝음만 D로 옮기는 게 오늘의 전부예요.

다행히 **박스1** 안에 D가 편한 자리에 있어요. **3번 줄 7프렛**이 바로 D예요 — 어제 착지하던 A(4번 줄 7프렛)의 바로 옆 줄, 같은 프렛이에요. 손을 옮길 필요도 없이 한 줄만 건너가면 돼요. <mark>어제의 A에서 한 칸 위 줄로 손가락을 옮기면, 그게 바로 오늘의 집 D예요.</mark> D7의 코드톤도 이 박스 안에 있어요 — **A(5도)**와 **C(b7)**요. 이 음들에 내려앉아도 D7 위에서 안정적으로 들려요.

오늘의 핵심은 '이사'예요. 코드가 A7에서 D7로 바뀌는 순간, 착지점도 A에서 D로 이사해요. <mark>손은 같은 박스에 머물지만, 겨냥하는 집만 바꾸는 거예요.</mark> 이 '집만 바꾸기'가 익숙해지면, 12마디 어디에서 코드가 바뀌어도 손이 알아서 다음 집을 찾아가요. 처음엔 D의 위치를 눈으로 확인하며 천천히, 익숙해지면 코드가 바뀌는 소리를 듣자마자 자연스럽게 D로 손이 가도록 연습해요. 오늘은 D7 한 코드 위에서 근음 **D**에 또렷하게 착지하는 것, 그거면 충분해요.

```json
{
  "id": "m3.w9.d2.land_on_d7",
  "type": "tab",
  "meta": { "title": "Landing on the D7 home (root D)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** 펜타를 굴리다가 마디 끝에서 근음 D(3번 줄 7프렛)에 착지해요. 초록 음이 오늘의 새 집 — D7의 집이에요.

## ② 시각 자료

박스1 안에서 **D7의 집**이 어디인지 봐요. 초록으로 빛나는 **3번 줄 7프렛 D**가 오늘의 착지점이에요.

```json
{
  "id": "m3.w9.d2.d7_home_map",
  "type": "scale_shape",
  "meta": { "title": "Where D7 lives in Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "D", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "A", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "C", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" }
  ]}
}
```
▶ **초록 D가 오늘의 집.** 파란 음(A·C)은 D7의 코드톤이라 함께 내려앉기 좋아요. 어제의 집 A는 이제 D7의 5도로 들려요.

<mark>같은 박스인데 겨냥하는 집만 A에서 D로 바꿨을 뿐인데, 코드가 바뀐 게 또렷하게 들려요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. b3에서 시작해 근음 D로 내려앉는 가장 짧은 착지를 반복해요.

```json
{
  "id": "m3.w9.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: roll and land on D", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** b3(3번 줄 5프렛)를 반박 울리고, 근음 D(3번 줄 7프렛)에 반박 내려앉아요. 같은 줄에서 두 프렛만 올라가면 집이에요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 근음 D에 착지)**
실전 전에, 박스1 안에서 D가 어디에 있는지 눈으로 확인해요. <mark>어제의 A와 오늘의 D를 나란히 떠올리면, 코드가 바뀔 때 손이 어디로 갈지 미리 알 수 있어요.</mark>

**20~40분 · 실전: D7 위 착지 프레이즈 (BPM 70)**
펜타를 두 마디 굴리다가, 마지막을 근음 D에 착지해요. D7이 울리는 동안 끝을 D에 놓으면 솔로가 코드에 딱 맞아요.

```json
{
  "id": "m3.w9.d2.d7_phrase",
  "type": "tab",
  "meta": { "title": "A short phrase that lands on D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "A", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "C", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "D", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** 1마디는 D7의 코드톤(A·C)을 지나며 굴리고, 2마디 끝에서 근음 D에 착지해요. 착지 직전 음에서 D로 넘어가는 반박을 또렷하게.

<mark>어제는 A로, 오늘은 D로 — 끝음만 바꿨는데 솔로가 코드를 따라 걷기 시작해요.</mark>

**40~50분 · 녹음**
D7 백킹(또는 메트로놈) 위에서 착지 프레이즈를 녹음해요. 끝이 근음 D에 정확히 앉는지 귀로 확인해요.

**오늘의 완료 기준:** D7 위에서 펜타 프레이즈를 굴린 뒤, 프레이즈의 끝을 근음 D에 또렷하게 착지시켰다.

## ④ 팁 / 흔한 실수

D7 착지에서 자주 나오는 실수들이에요. 대부분 '어제의 집 A에 머무는' 습관에서 와요.

```json
{
  "id": "m3.w9.d2.land_home_d",
  "type": "scale_shape",
  "meta": { "title": "End your phrase on the D7 home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "D", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```
▶ **D7 위에서는 D로.** 초록 D가 오늘 돌아올 집이에요. 코드가 바뀌면 착지음도 꼭 D로 옮겨요.

- **코드가 바뀌어도 A에 착지해요.** D7 위에서 A에 앉으면 5도라 나쁘진 않지만, 근음 D가 코드를 훨씬 또렷하게 그려줘요.
- **D를 3번 줄 7프렛이 아닌 곳에서 찾아 헤매요.** A 바로 옆 줄, 같은 프렛이에요. 한 줄만 건너면 돼요.
- **착지를 약박에 놓아요.** 강박에 D가 앉아야 코드가 바뀐 게 들려요.
- **D를 급하게 스쳐요.** 착지음은 반 박 이상 충분히 울려줘야 '새 집'처럼 느껴져요.
