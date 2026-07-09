---
title: "펜타 2번 블록 각인 + 1번↔2번 슬라이드 연결"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 지판 위로 한 칸 이사: 2번 블록, 그리고 다리 놓기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 지난주에 우리는 1번 블록(5프렛)을 손이 아니라 귀에 새겼잖아요. 그런데 여기서 한 가지만 짚고 갈게요. 1번 블록 하나만 파면 결국 5~8프렛 그 좁은 감옥에 갇히기 쉬워요. 즉흥이 답답한 진짜 이유가 이거예요. "음을 고를 자유"가 있으려면 지판이 넓어야 하거든요. 그래서 이번 주엔 넥 위쪽으로 이사를 갑니다. 오늘은 그 첫 집, **2번 블록(7~10프렛)**이에요.

```json
{
  "id": "m1.w2.d1.pentatonic_box2",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 2 (connects up from Box 1)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

근데 여기서 대부분이 실수해요. 2번 블록을 또 "상행-하행으로 라라라라" 외우려고 들어요. 그럼 감옥이 두 개로 늘어날 뿐이에요. 우리가 원하는 건 감옥이 아니라 **고속도로**예요. 1번 블록에서 2번 블록으로 차선 변경하듯 스르륵 넘어가는 길. 그 길을 만드는 도구가 바로 **슬라이드**예요.

핵심은 이거예요. 1번 블록과 2번 블록은 **딱 붙어서 음을 공유**해요. 예를 들어 4번 줄을 보면, 1번 블록의 A(7프렛, 근음)와 2번 블록의 C(10프렛, ♭3)가 같은 줄 위에 있어요. 그러면 A를 짚은 손가락을 **10프렛까지 미끄러뜨리기만** 하면, 나는 어느새 2번 블록에 착지해 있고 그 착지음이 바로 우리의 영원한 타겟, **C(♭3)**예요. 슬라이드 한 번이 "블록 이동 + 타겟 착지"를 동시에 해내는 거죠. 오늘은 이 다리 하나를 확실히 놓습니다.

## ② 시각 자료

먼저 2번 블록 지도예요. 위치가 낯설죠? 근음 A는 4번 줄 7프렛에 있고, 초록 C(♭3)가 여기저기 박혀 있어요. 이 C들이 앞으로 너의 착륙장이에요.

```json
{
  "id": "m1.w2.d1.pentatonic_box2",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 2 (connects up from Box 1)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 7,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "finger": 4, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 1, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

이제 오늘의 본체예요. 1번 블록에서 출발해서, 4번 줄에서 A(7프렛)를 **10프렛까지 슬라이드**해 2번 블록으로 넘어가요. 착지음이 C(♭3)인 거 보이시죠? 마지막은 2번 블록 안에서 고음 C에 착지해 비브라토로 마무리해요.

```json
{
  "id": "m1.w2.d1.box1_to_box2_slide",
  "type": "tab",
  "meta": {
    "title": "Box 1 -> Box 2 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "slide", "slideToFret": 10, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 70)**
메트로놈 70에 맞춰 2번 블록만 8분음표로 상행/하행 각 1회 몸에 익혀요. 상하행 암기가 목적이 아니라 **새 위치의 지형 파악**이 목적이에요. 근음 A(4번 줄 7프렛)를 매번 소리 내서 "에이!" 부르면서, 이 블록의 중심이 어디인지 손에 각인시켜요. 오늘은 딱 이 워밍업까지만 상하행을 허용해요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C / ♭3, 그리고 슬라이드 다리)**
메트로놈 끄고, 위 연결 라인의 **핵심 한 동작만** 반복해요. 4번 줄 7프렛(A)을 검지로 짚고 → 10프렛(C)까지 미끄러뜨리기. 이 슬라이드를 20번. 포인트는 두 가지예요. ① 도착 프렛(10)에서 **정확히 멈춰** C 음이 살아있을 것. ② 미끄러지는 동안 줄에서 손가락 압력을 놓지 말 것(놓으면 소리가 끊겨요). 눈 감고도 10프렛에 딱 멈추면 통과.

```json
{
  "id": "m1.w2.d1.box1_to_box2_slide",
  "type": "tab",
  "meta": {
    "title": "Box 1 -> Box 2 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "slide", "slideToFret": 10, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 70 BPM)**
"Am backing track slow"를 하나 틀어요. 규칙 하나: **1번 블록에서 시작해서, 오늘 배운 4번 줄 슬라이드로 2번 블록에 넘어간 뒤, 2번 블록 안에서 C(♭3)에 착지해 멈추기.** 아직 화려한 프레이즈는 신경 쓰지 마세요. "1번 블록 → 다리 → 2번 블록 → C 착지" 이 여정 하나가 끊김 없이 굴러가면 오늘은 대성공이에요. 익숙해지면 반대로 2번 블록에서 시작해 1번 블록으로 슬라이드해 내려와 보세요(10프렛 C → 7프렛 A로 역슬라이드).

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 연결 라인이 들어간 30초 잼을 녹음. 다시 들으며 딱 하나만 체크: **슬라이드 도착음(C)이 또렷하게 "찍혔는지", 아니면 스르륵 뭉개졌는지.** 뭉개졌으면 슬라이드 속도가 너무 빠른 거예요. 내일은 도착 직전에 살짝 감속하는 느낌으로.

**오늘의 완료 기준:** 2번 블록 근음 A(4번 줄 7프렛)를 눈 감고 짚기. 4번 줄 A→C 슬라이드로 1번↔2번 블록을 오가며 C에 3회 이상 정확히 착지.

## ④ 팁 / 흔한 실수

- **새 블록을 또 "상하행 감옥"으로 만들기.** 2번 블록도 상하행으로만 돌리면 감옥만 하나 늘어요. 오늘의 진짜 목표는 블록 자체가 아니라 **블록 사이의 다리**예요. 위치는 대충 익고, 슬라이드 연결에 시간을 더 쓰세요.
- **슬라이드 중 압력 놓기.** 미끄러지는 동안 손가락이 줄에서 뜨면 "삑" 하고 소리가 끊겨요. 다리미로 밀듯, 줄을 계속 지그시 누른 채 이동. 이게 슬라이드와 그냥 "손 옮기기"의 결정적 차이예요.
- **도착 프렛을 지나치거나 못 미침.** 10프렛에 정확히 멈춰야 C가 살아요. 처음엔 눈으로 프렛을 확인해도 되지만, 목표는 **귀로** 도착을 확인하는 거예요. 음정이 맞으면 손이 멈춘 거예요.
- **착지음을 급하게 뗌.** 지난주에도 말했죠? C에 착지했으면 최소 1박은 머물러 비브라토로 노래하세요. 새 블록이라고 착지의 원칙이 바뀌는 게 아니에요. 넥 어디로 가든 **끝은 항상 코드톤**이에요.
