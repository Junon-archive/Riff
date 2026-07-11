---
title: "코드 따라가기 첫걸음 — A7 위에서 근음 A에 착지하기"
dayKey: "m3.w9.d1"
estMinutes: 50
i18nKey: "lesson.m3.w9.d1"
---

# Day 1 — A7 위에서 근음 A에 착지하기

## ① 이론/설명

3개월차의 문을 여는 첫날이에요. 지난 두 달 동안 우리는 **박스1** 안에서 펜타토닉을 자유롭게 오르내렸어요. 그런데 아직 못 해본 게 하나 있어요 — 바로 **코드가 바뀌는 순간**에 반응하는 거예요. <mark>펜타를 그냥 위아래로 훑는 솔로와, 코드를 따라가는 솔로는 완전히 다른 소리가 나요.</mark> 그 차이를 만드는 건 딱 하나, **착지음**이에요. 프레이즈를 아무 데서나 멈추지 않고, 지금 울리는 코드의 음에 사뿐히 내려앉는 거예요.

오늘의 코드는 **A7** 하나예요. A7의 '집'은 근음 **A**예요. 12마디 블루스에서 A7이 울리는 동안 프레이즈의 끝을 근음 A에 놓으면, <mark>솔로가 코드 위에 딱 얹히는 안정감</mark>이 느껴져요. 박스1 안에는 A가 여러 자리에 있는데, 그중 가장 손에 붙는 **4번 줄 7프렛**을 오늘의 착지점으로 삼아요. 근음 말고 5도 **E**나 b7 **G** 같은 코드톤에 내려앉아도 A7 위에서 편안하게 들려요.

방법은 생각보다 단순해요. 평소처럼 박스1에서 펜타를 굴리다가, 마디의 끝에서 손가락을 **근음 A**로 데려오면 돼요. 중요한 건 '언제 내려앉느냐'예요. 너무 이르면 코드가 채 울리기 전이고, 너무 늦으면 벌써 다음 마디로 넘어가 버려요. <mark>박자가 강한 곳, 특히 마디의 첫 박에 착지하면 코드가 또렷하게 들려요.</mark> 오늘은 오직 A7 한 코드 위에서, 근음 A에 착지하는 감각만 손에 익혀요. 코드가 바뀌는 건 내일부터 — 오늘은 '집으로 돌아오는' 그 안정감부터 충분히 느껴봐요.

```json
{
  "id": "m3.w9.d1.land_on_a7",
  "type": "tab",
  "meta": { "title": "Landing on the A7 home (root A)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** 펜타를 굴리다가 마디 끝에서 근음 A(4번 줄 7프렛)에 착지해요. 초록으로 표시된 음이 오늘의 착지점 — A7의 집이에요.

## ② 시각 자료

박스1 안에서 **A7의 집**이 어디에 있는지 지도로 봐요. 초록으로 빛나는 **4번 줄 7프렛 A**가 오늘 프레이즈가 돌아올 자리예요.

```json
{
  "id": "m3.w9.d1.a7_home_map",
  "type": "scale_shape",
  "meta": { "title": "Where A7 lives in Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" }
  ]}
}
```
▶ **초록 A가 오늘의 집.** 파란 음(5도 E·b7 G)은 A7의 코드톤이라 함께 내려앉아도 좋아요.

<mark>코드가 울리는 동안 프레이즈의 끝을 이 초록 자리에 놓으면, 솔로가 코드를 따라가기 시작해요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. 5도 E에서 시작해 근음 A로 내려앉는 가장 짧은 착지를 반복해요.

```json
{
  "id": "m3.w9.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: roll and land on A", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** 5도 E를 반박 울리고, 근음 A(4번 줄 7프렛)에 반박 내려앉아요. '집으로 돌아오는' 감각을 손에 새겨요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 근음 A에 착지)**
실전 전에, 박스1 안에서 근음 A가 어디에 있는지 눈을 감고 짚어봐요. <mark>착지점을 미리 알아두면, 어떤 프레이즈를 치든 끝을 A로 데려올 수 있어요.</mark>

**20~40분 · 실전: A7 위 착지 프레이즈 (BPM 70)**
펜타를 두 마디 굴리다가, 마지막을 근음 A에 착지해요. 코드가 A7 하나뿐이라도 끝을 A에 놓는 것만으로 소리가 또렷해져요.

```json
{
  "id": "m3.w9.d1.a7_phrase",
  "type": "tab",
  "meta": { "title": "A short phrase that lands on A7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70.** 1마디는 펜타를 굴리고, 2마디 끝에서 근음 A에 착지해요. 착지 직전 음(b3)에서 A로 넘어가는 반박을 특히 또렷하게.

<mark>프레이즈가 아무리 길어도, 끝이 근음 A에 닿으면 A7 위에 살포시 앉는 소리가 나요.</mark>

**40~50분 · 녹음**
A7 백킹(또는 메트로놈) 위에서 착지 프레이즈를 녹음해요. 끝이 근음 A에 정확히 앉는지 귀로 확인해요.

**오늘의 완료 기준:** A7 위에서 펜타 프레이즈를 굴린 뒤, 프레이즈의 끝을 근음 A에 또렷하게 착지시켰다.

## ④ 팁 / 흔한 실수

A7 위 착지에서 자주 나오는 실수들이에요. 대부분 '끝을 아무 데나 두는' 습관에서 와요.

```json
{
  "id": "m3.w9.d1.land_home",
  "type": "scale_shape",
  "meta": { "title": "End your phrase on the A7 home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```
▶ **모든 프레이즈는 근음 A로.** 초록 A가 A7 위에서 돌아올 집이에요. 프레이즈를 열었으면 꼭 A로 닫아요.

- **아무 음에서나 멈춰요.** 끝음이 A가 아니면 코드를 따라가는 느낌이 흐려져요. 마지막은 꼭 근음 A로 데려와요.
- **착지를 약박에 놓아요.** 강박, 특히 첫 박에 앉아야 코드가 또렷하게 들려요.
- **A를 급하게 스쳐 지나가요.** 착지음은 반 박 이상 충분히 울려줘야 '집'처럼 느껴져요.
- **속도부터 올려요.** BPM 70에서 끝이 A에 정확히 앉을 때까지, 빨라지는 건 나중이에요.
