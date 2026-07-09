---
title: "믹솔리디안 Position 2 + 폼 연결(포지션 시프트)로 넥 넓히기"
dayKey: "m3.w10.d3"
estMinutes: 50
i18nKey: "lesson.m3.w10.d3"
---

# Day 3 — 한 자리에 갇히지 않기: Position 2와 슬라이드로 두 폼 잇기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 이틀 동안 Position 1(5프렛 근처)에서 C#·G를 잘 다뤘죠. 근데 솔로를 그 한 상자 안에서만 하면, 아무리 예뻐도 결국 "좁은 데서 왔다 갔다"로 들려요. 진짜 솔로이스트는 넥 전체를 자기 집처럼 써요. 그래서 오늘은 **<mark>두 번째 폼(Position 2)</mark>** 을 열고, 두 폼을 **슬라이드로 잇는** 법을 배워요.

Position 2는 근음 A를 **4번 줄 7프렛**에 두는 자리예요. 대략 7~11프렛을 커버하죠. 여기도 스케일 음이름은 똑같아요 — **<mark>A B C# D E F# G.</mark>** 다만 손 모양이 달라서, 같은 C#(장3도)·G(♭7)이 다른 위치에 나타나요. 이게 헷갈릴 것 같죠? 근데 요령이 있어요. **<mark>음이름으로 기억하면 폼이 바뀌어도 안 흔들려요.</mark>** "5번 줄 4프렛"이 아니라 "이건 C#(장3도)"으로 외우면, Position 2에서도 C#이 어디 있는지 감으로 찾아져요. 어제 두뇌 훈련이 바로 이걸 위한 거였어요.

그리고 오늘의 핵심 기술, **<mark>포지션 시프트(슬라이드)</mark>**. 두 폼을 매끄럽게 잇는 가장 좋은 방법은 한 줄 위에서 손가락을 **주욱 미끄러뜨리는** 거예요. 뚝 끊고 순간이동하면 티가 나지만, 슬라이드로 이으면 "어느새 저 위에 올라와 있네" 하고 자연스러워요. 오늘 쓸 연결은 예쁘게 딱 떨어져요. **<mark>1번 줄 5프렛(근음 A)에서 9프렛(C#)까지 슬라이드</mark>** — 즉 Position 1의 근음에서 미끄러져 올라가면 그대로 Position 2의 **장3도 C#**에 착지해요. 시프트하면서 동시에 타겟음에 도착하는 거죠. 일석이조예요.

블루노트도 잊지 마세요. Position 2에도 블루노트 C(♭3)가 있어요. 예를 들어 **4번 줄 10프렛(C)** 을 반음 밀면 **<mark>4번 줄 11프렛의 C#(장3도)</mark>**. 폼이 올라가도 "블루노트 → 장3도 반음 해결" 공식은 그대로 따라와요.

오늘 목표: Position 2를 손에 얹고, 1번 줄 슬라이드로 두 폼을 왕복하며, 시프트 끝에서 C#에 착지하기.

## ② 시각 자료

첫째, **<mark>A 믹솔리디안 Position 2</mark>**예요. 근음 A는 4번 줄 7프렛. 여기서도 장3도 C#(초록)과 ♭7 G(노랑)의 위치를 눈에 익히세요. Position 1과 음이름은 같고 모양만 달라요.

```json
{
  "id": "m3.w10.d3.a_mixolydian_pos2",
  "type": "scale_shape",
  "meta": {
    "title": "A Mixolydian - Position 2 (root on 4th string, frets 7-11)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "scale": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 6, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 3, "label": "6", "role": "scale" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 9, "finger": 3, "label": "2", "role": "scale" },
      { "string": 4, "fret": 11, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 11, "finger": 4, "label": "6", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 1, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

둘째, 두 폼을 잇는 **<mark>연결 지도</mark>**예요. Position 1과 Position 2의 근음(A), 장3도 C#(초록), ♭7 G(노랑)를 넥 위에 함께 뿌렸어요. 4번 줄 7프렛 근음은 두 폼이 공유하는 '연결 고리'예요. 그리고 1번 줄 5프렛(A) → 9프렛(C#) 슬라이드가 오늘의 이동 경로예요.

```json
{
  "id": "m3.w10.d3.position_connection_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Connecting Position 1 & 2: shared root and slide path (1st string 5->9)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 10, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

셋째, 오늘의 **<mark>포지션 시프트 릭</mark>**이에요. 1마디는 Position 1에서 놀다가 ♭7 G로 긴장을 걸고, 2마디에서 **1번 줄 5프렛(A) → 9프렛(C#) 슬라이드**로 Position 2에 올라타요. 마지막은 Position 2의 블루노트 C(4번 줄 10프렛)를 반음 벤딩해 C#(11프렛)로 해결, 비브라토로 마침표.

```json
{
  "id": "m3.w10.d3.position_shift_lick",
  "type": "tab",
  "meta": {
    "title": "Position shift lick: Pos1 -> slide -> Pos2, land on major 3rd",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 9, "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 9, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 4, "fret": 10, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 4, "fret": 11, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 90) — Position 2 4연음 시퀀스**
어제 Position 1에서 돌린 4연음을 오늘은 **<mark>Position 2</mark>**에서. 7~11프렛 자리에서 네 음씩 묶어 상행. 손이 아직 낯설 테니 80에서 시작해도 좋아요. C#(6번 9프렛, 4번 11프렛, 1번 9프렛)을 지날 때마다 색을 의식하세요.

```json
{
  "id": "m3.w10.d3.a_mixolydian_pos2",
  "type": "scale_shape",
  "meta": {
    "title": "A Mixolydian - Position 2 (root on 4th string, frets 7-11)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "scale": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 6, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 3, "label": "6", "role": "scale" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 9, "finger": 3, "label": "2", "role": "scale" },
      { "string": 4, "fret": 11, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 11, "finger": 4, "label": "6", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 1, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

**10~20분 · 두뇌 훈련 (폼 간 C# 잇기)**
연결 지도를 보며, **Position 1의 C#(3번 6프렛)** 을 짚고 → **<mark>Position 2의 C#(1번 9프렛)</mark>** 으로 손을 옮기는 연습. 이름은 같고 자리만 다른 두 C#을 왕복해요. 다음엔 G도 똑같이(4번 5프렛 ↔ 5번 10프렛). 마지막으로 1번 줄 5→9 슬라이드만 10번 반복해서 슬라이드가 정확히 9프렛(C#)에 멈추게 만드세요.

```json
{
  "id": "m3.w10.d3.position_connection_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Connecting Position 1 & 2: shared root and slide path (1st string 5->9)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 6,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 10, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**20~40분 · 실전 즉흥 (A7 vamp / 80~90 BPM) — 폼 이동 미션**
"A7 vamp backing track"을 틀고, 오늘의 미션: **<mark>한 프레이즈 안에서 Position 1 → (슬라이드) → Position 2로 최소 한 번 이동하기.</mark>** 아래에서 놀다가 슬라이드로 올라가 위에서 C#에 착지, 다시 슬라이드로 내려오기. 처음엔 이동이 뚝뚝 끊겨도 돼요. 슬라이드 지점을 정해두고 반복하면 점점 매끄러워져요.

```json
{
  "id": "m3.w10.d3.position_shift_lick",
  "type": "tab",
  "meta": {
    "title": "Position shift lick: Pos1 -> slide -> Pos2, land on major 3rd",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Mixolydian",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 6, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "eighth", "label": "6", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 9, "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 9, "duration": "eighth", "label": "3", "target": true, "role": "target", "highlight": true },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "color", "highlight": true },
        { "string": 4, "fret": 10, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 4, "fret": 11, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "3", "target": true, "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 30초 녹음. 체크: (1) <mark>슬라이드가 목표 프렛(9)에 정확히 멈췄는지</mark> — 못 미치거나 지나치지 않았는지, (2) 폼을 옮긴 뒤에도 C#에 잘 착지했는지. 재생 속도를 늦춰 슬라이드 도착 순간을 귀로 확대해 확인하세요.

**오늘의 완료 기준:** Position 2 4연음 시퀀스 통과. 두 폼의 C#·G를 각각 왕복해 짚기. 1번 줄 5→9 슬라이드로 시프트 후 C#에 착지 5회 이상.

## ④ 팁 / 흔한 실수

- **슬라이드가 목표에 안 멈춤.** 시프트 슬라이드의 생명은 **정확히 그 프렛에서 멈추는 것.** 처음엔 눈으로 도착 프렛(9)을 확인하며 천천히, 익으면 손 감각으로. 지나쳐서 10프렛까지 가버리면 C#이 아니라 D가 돼요.
- **폼이 바뀌면 음이름을 잊어버림.** Position 2로 올라가면 "여기가 무슨 음이었지?" 하고 얼어붙기 쉬워요. 위치가 아니라 **음이름(C#·G·A)** 으로 기억하세요. 어제 두뇌 훈련이 여기서 힘을 발휘해요.
- **한 폼에만 안주.** 편한 Position 1로 자꾸 도망가요. 오늘은 일부러 위에서 시작해 보거나, 프레이즈 절반을 강제로 Position 2에서 만드세요. 불편함이 넥을 넓혀줍니다.
- **슬라이드 압력.** 미끄러지는 동안 줄을 누르는 힘이 약하면 소리가 중간에 끊겨요. 도착할 때까지 지그시 누른 상태를 유지하세요. 단, 너무 세게 눌러 손가락이 뻑뻑해지면 속도가 죽으니 균형이 중요해요.
