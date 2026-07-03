---
title: "Am 펜타 1폼 복습 — 상하행 말고 '3도 인터벌'로 다시 씹기"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — 익숙한 5음을 '3도 인터벌'로 낯설게 만들기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 이번 주 목표는 A 마이너 펜타토닉에 2도(B)와 6도(F)를 얹어서 **A 내추럴 마이너**로 확장하는 거예요. 근데 새 음을 끼우기 전에, 먼저 **바닥이 단단한지** 확인해야 해요. 여기서 바닥이란 펜타토닉 1폼이고요. 이 1폼, 이미 다 안다고 느끼기 쉬운데요. 사실 상행-하행으로 라라라 굴리는 건 아는 게 아니라 손이 관성으로 미끄러지는 거라고 지난달에 계속 말했죠.

그래서 오늘은 같은 5음(**A·C·D·E·G**)을 **3도 인터벌**로만 훑을 거예요. 3도 인터벌이 뭐냐면, 한 음 치고 **바로 옆 음이 아니라 한 칸 건너뛴 음**을 치는 거예요. A 다음에 C가 아니라 D로, C 다음에 E로 — 이렇게 "건너뛰기 짝"으로 묶어서 올라가요. 왜 이게 중요하냐면, 옆 음으로 순서대로 가면 뇌가 위치를 안 외워도 손가락 순서만으로 굴러가거든요. 근데 한 칸 건너뛰면 손가락 순서가 깨지니까, 뇌가 어쩔 수 없이 **각 음의 좌표를 개별로 기억**하기 시작해요. 이게 즉흥의 진짜 재료예요.

그리고 오늘도 착지점은 변함없이 **C(♭3)** 예요. Am 코드의 3도, 3개월 내내 우리의 홈베이스죠. 3도 짝을 밟고 올라가다가 멈추고 싶을 땐 무조건 C에서 멈춰요. 내일 B를, 모레 F를 끼워 넣을 텐데, 그 추가음들도 결국 이 C로 흘러들어오게 만들 거예요. 그러니까 오늘은 "추가음이 도착할 목적지"를 손과 귀에 확실히 심어두는 날이라고 생각하면 돼요.

## ② 시각 자료

A 마이너 펜타토닉 1폼(5프렛 근음)이에요. 초록 강조가 오늘도 목적지인 **C(♭3)** 세 자리예요.

```json
{
  "id": "m2.w5.d1.aminor_pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 (review)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

오늘의 핵심 무기, **3도 인터벌 시퀀스**예요. 한 칸씩 건너뛴 짝(A–D, C–E, D–G…)으로 올라가고, 매 마디 끝은 **C(♭3)** 에 착지해요.

```json
{
  "id": "m2.w5.d1.pentatonic_thirds_sequence",
  "type": "tab",
  "meta": {
    "title": "Pentatonic 3rd-interval (skip-one) sequence landing on b3 (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 80)**
메트로놈 80에 맞춰 위 3도 인터벌 시퀀스를 6번 줄부터 1번 줄까지 왕복. 한 박에 8분음표 2개, "딴-다" 한 짝이 클릭에 정확히 맞물리게. 얼터네이트 피킹(다운-업) 고정. 짝이 헷갈려서 손이 멈칫하면 정상이에요 — 그게 관성이 깨지는 소리예요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C / ♭3)**
메트로놈 끄고, 1폼 안에서 **C(♭3)만** 찾아 짚으세요. 6번 8프렛, 3번 5프렛, 1번 8프렛 — 세 군데. 짚을 때마다 소리 내서 "씨!" 하고 불러요. 그다음 각 C 바로 앞에서 3도 짝으로 올라와 **C에 딱 멈추는** 동작까지 붙여 연습. 눈 감고 세 자리를 3초 안에 짚으면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 75~80 BPM)**
"Am backing track"으로 아무거나 하나 틀어요. 규칙은 딱 하나: **오직 3도 짝으로만 움직이고, 멈출 땐 반드시 C나 A에서.** 순서대로 옆 음 훑는 습관이 튀어나오면 즉시 멈추고 다시 짝으로. "멋진 프레이즈"는 아직 신경 끄고, 건너뛰기 감각만 몸에 붙이세요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 마지막 잼 30초만 녹음. 다시 들으며 딱 하나 체크: **정말 건너뛰기(3도)로 쳤는지, 아니면 슬그머니 순차 진행으로 샜는지.** 순차로 샜으면 내일은 BPM 75로 낮춰서 다시.

**오늘의 완료 기준:** BPM 80에서 3도 인터벌 시퀀스를 끊김 없이 왕복, C 세 자리를 눈 감고 짚기, 잼에서 모든 멈춤을 C 또는 A에서 하기.

## ④ 팁 / 흔한 실수

- **순차 진행으로 회귀.** 3도 짝이 답답해서 나도 모르게 옆 음으로 라라라 훑고 있으면, 그건 뇌가 편한 길로 샌 거예요. 답답함 = 새 회로가 뚫리는 신호. 참고 짝을 유지하세요.
- **속도부터 올리기.** 80이 느긋해 보여도 참으세요. 오늘은 "정확한 좌표 각인"이 목표지 속도가 아니에요. 뭉개면서 빠른 것보다 또렷하게 느린 게 이번 주 내내 이득이에요.
- **C를 그냥 스쳐 보내기.** C는 내일부터 끼울 B·F가 흘러들어올 하수구(집합점)예요. 짚을 때마다 살짝 더 세게, 살짝 더 오래 눌러서 귀에 "이게 도착지"라고 각인하세요.
- **피킹 손 긴장.** 팔이 아니라 손목으로 얕게. 8분 짝이라 여유 있어 보여도, 팔로 치는 버릇은 내일 16분 4연음에서 바로 발목을 잡아요.
