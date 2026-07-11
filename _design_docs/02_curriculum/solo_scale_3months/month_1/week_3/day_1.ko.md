---
title: "펜타 4번 블록 각인 + 3번↔4번 슬라이드 연결"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — 12프렛으로 이사 가기: 4번 블록을 손에 심고, 3번과 잇기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 지금까지 2주 동안 여러분은 5프렛 근처(1·2·3번 블록)에서만 놀았어요. 손이 거기서 편안해졌죠? 여기서 한 가지만 짚고 갈게요. 즉흥이 잘 안 풀리는 중급자분들을 보면, **<mark>넥의 아래쪽 절반이 아직 낯선 경우</mark>**가 많아요. 백킹만 틀면 손이 자동으로 5프렛으로 향하고, 거기서 비슷한 리크만 반복하다 끝나곤 하죠. 넥은 21프렛이나 되는데, 그중 5~8프렛에만 머물러 있게 되는 거예요.

그래서 오늘부터 **<mark>12프렛 위쪽으로 이사</mark>**를 갑니다. 첫 집이 바로 **4번 블록**이에요. 이 블록은 근음 A가 **5번 줄 12프렛**에 있어요. 12프렛이 어디예요? 정확히 6번 줄 개방 A... 아니 12프렛은 **한 옥타브** 지점이에요. 그러니까 4번 블록의 근음(5번 줄 12프렛 A)은, 여러분이 이미 아는 5프렛 1번 블록의 소리를 **한 옥타브 위**에서 다시 만나는 거예요. 낯선 동네가 아니라, 아는 노래를 높은 목소리로 부르는 거죠.

그리고 오늘의 진짜 숙제는 4번 블록을 "따로" 외우는 게 아니에요. **<mark>3번 블록과 이어 붙이는 것</mark>.** 지난주에 익힌 3번 블록(9~12프렛)과 오늘의 4번 블록(12~15프렛)은 **12프렛에서 살을 맞대고** 있어요. 두 블록은 남남이 아니라, 12프렛에서 손을 잡고 있는 이웃이에요. 이걸 몸으로 느끼려고 오늘은 **슬라이드**를 씁니다. 5번 줄 12프렛(A, 근음)에서 15프렛(C, ♭3)으로 주욱 미끄러지면, 3번 블록에서 4번 블록으로 이사하면서 **<mark>동시에 오늘의 타겟음 C(♭3)에 착지</mark>**해요. 이 한 방에 "블록 연결 + 3도 착지"를 같이 배우는 거예요.

기억할 좌표는 변함없어요. **<mark>A(R) · C(♭3) · D(4) · E(5) · G(♭7)</mark>.** 위치만 12프렛 위로 옮겼을 뿐, 음의 역할은 똑같아요. 특히 **C(♭3)**, 이 녀석이 4번 블록에선 **5번 줄 15프렛**과 **2번 줄 13프렛**에 살아요. 여기가 오늘의 초록불이에요.

```json
{
  "id": "m1.w3.d1.pentatonic_box4",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 4 (12th position)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 11,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 15, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 1, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "finger": 3, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "finger": 4, "label": "b7", "role": "scale" }
    ]
  }
}
```

## ② 시각 자료

먼저 오늘의 새 집, **4번 블록**이에요. 근음 A(5번 줄 12프렛)를 중심으로, 초록 강조가 <mark>착지 타겟인 C(♭3)</mark>예요.

```json
{
  "id": "m1.w3.d1.pentatonic_box4",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 4 (12th position)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 11,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 15, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 1, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "finger": 3, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "finger": 4, "label": "b7", "role": "scale" }
    ]
  }
}
```

이제 3번↔4번을 잇는 연결 라인이에요. 1마디는 3번 블록(9~13프렛) 안을 3도로 훑고, 2마디에서 **<mark>5번 줄 12프렛(A)→15프렛(C) 슬라이드</mark>**로 4번 블록에 이사 가면서 C(♭3)에 착지해요. 마지막 C는 비브라토로 노래하세요.

```json
{
  "id": "m1.w3.d1.box3_to_box4_slide",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Box 3 -> Box 4 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 80)**
메트로놈 80에 맞춰 **<mark>4번 블록만</mark>** 4연음(16분음표) 시퀀스로 상행/하행 각 1회. 5프렛에서 하던 그 시퀀스를, 이번엔 12프렛에서 똑같이. 손 모양이 5프렛보다 살짝 좁게 느껴질 거예요(고프렛일수록 프렛 간격이 좁으니까요). 그 감각에 손을 적응시키는 게 워밍업의 목적이에요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C / ♭3, 4번 블록 안에서)**
메트로놈 끄고, 4번 블록 안에서 **<mark>C(♭3) 두 군데만</mark>** 찾아 짚어요. 5번 줄 15프렛, 2번 줄 13프렛. 짚을 때마다 "씨!" 하고 소리 내기. 그다음 챌린지: 눈 감고 근음 A(5번 줄 12프렛)를 짚은 뒤, **<mark>거기서 가장 가까운 C가 어느 손가락 하나 움직이면 되는지</mark>** 몸으로 찾기. 3분 안에 A↔C 왕복이 눈 감고 되면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 75~80 BPM)**
"Am backing track" 아무거나 하나. 오늘의 규칙: **연주는 3번 블록(9프렛)에서 시작해서, 곡 중간에 반드시 <mark>슬라이드로 4번 블록(12프렛)으로 이사 간 뒤, C(♭3)에 착지</mark>하고 멈추기.** 위 연결 라인을 그대로 써도 좋고, 변형해도 좋아요. 핵심은 "낮은 블록에서 시작 → 슬라이드로 위로 이사 → 타겟 착지"의 흐름을 한 프레이즈 안에서 만드는 거예요. 최소 8번 반복.

```json
{
  "id": "m1.w3.d1.box3_to_box4_slide",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Box 3 -> Box 4 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 30초만. 다시 들으며 딱 한 가지: **<mark>슬라이드 도착음(C)의 음정이 정확한가</mark>.** 슬라이드는 눈으로 프렛을 못 보고 손 감각으로 미끄러지니까, 15프렛을 지나치거나 못 미치기 쉬워요. 재생 속도를 늦춰 들을 수 있으면 도착 순간을 더 잘 잡아낼 수 있어요. 도착이 흐릿하면 그 슬라이드만 10번 따로 반복.

**오늘의 완료 기준:** BPM 80에서 4번 블록 시퀀스 상·하행 통과 + 3번→4번 슬라이드 연결로 C(♭3)에 착지 8회 성공(눈 감고 A↔C 왕복 포함).

## ④ 팁 / 흔한 실수

- **12프렛에서 손 모양이 무너짐.** 고프렛은 프렛 간격이 좁아서, 5프렛에서 쓰던 손 벌림 그대로 오면 손가락이 서로 부딪혀요. 손 전체를 살짝 오므리세요. "같은 모양, 작은 사이즈."
- **슬라이드를 "빨리 미끄러지기"로 오해.** 슬라이드의 목적은 스피드가 아니라 **정확한 도착**이에요. 12→15는 세 칸. 천천히라도 15에서 딱 멈춰 C가 살아야 착지예요. 지나치면 D(4)가 돼서 "어라?" 하게 돼요.
- **3번 블록으로 도로 도망감.** 익숙한 9프렛이 편해서 자꾸 아래로 내려와요. 오늘은 일부러 **위로 이사 가서 버티는** 날이에요. 12프렛에서 어색하게 서 있는 그 시간이 넥을 넓히는 유일한 방법이에요.
- **착지 C를 스치고 지나감.** 슬라이드로 C에 도착했으면 최소 1박은 머물며 비브라토로 노래하세요. 착지의 힘은 "머무름"에서 나와요. 스치면 착지가 아니라 그냥 경유예요.
