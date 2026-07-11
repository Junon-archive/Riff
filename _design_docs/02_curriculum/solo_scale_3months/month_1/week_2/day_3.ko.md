---
title: "1-2-3번 블록을 잇는 3도 인터벌 시퀀스 (연결 정확도)"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 세 집을 한 줄로 꿰기: 넥 위의 고속도로 완성

## ① 이론/설명

오늘 왜 이걸 하냐면요. 이틀 동안 다리를 두 개 놓았죠. 1번↔2번, 2번↔3번. 근데 다리를 "놓는 것"과 그 위를 "달리는 것"은 달라요. 오늘은 세 블록을 **<mark>하나의 흐르는 라인</mark>**으로 꿰뚫습니다. 그것도 상하행 밋밋한 계단이 아니라, 지난주에 배운 **<mark>3도 인터벌(한 칸 건너뛰기)</mark>**로요.

왜 굳이 3도 인터벌로 연결하냐면요. 슬라이드로 블록만 이으면 소리가 "위치 이동 훈련"처럼 기계적으로 들려요. 근데 그 여정에 3도 점프를 얹으면 갑자기 **<mark>노래하는 라인</mark>**이 돼요. 폴짝폴짝 뛰면서 넥을 타고 올라가는 느낌. B.B. King이 넥 전체를 유유히 산책하는 그 느낌의 씨앗이 바로 이거예요. 블록 이동 + 3도 스킵 = 넥을 노래하며 여행하기.

오늘의 진짜 시험대는 **<mark>연결 지점의 정확도</mark>**예요. 3도로 뛰다가 블록 경계에서 슬라이드로 넘어가는 그 이음매. 여기서 음정이 흔들리거나 박이 밀리면 여행 전체가 삐끗해요. 그래서 오늘은 속도보다 **이음매의 매끄러움**이 채점 기준이에요. 그리고 이 커리큘럼의 심장은 여전히 뛰고 있어요. 블록을 아무리 많이 건너도, 각 블록의 경계에서 우리는 **<mark>C(♭3)에 착지</mark>**해요. 세 번의 착지, 세 개의 C. 그게 오늘의 여정을 하나로 묶는 못이에요.

## ② 시각 자료

먼저 넥 전체 지도예요. 5프렛부터 13프렛까지, 세 블록에 흩어진 **<mark>근음 A와 타겟 C(♭3)만</mark>** 뽑아 표시했어요. 이게 너의 "고속도로 표지판"이에요. 파란 여행 중에 이 초록 C들이 나타나면, 거기가 착지 포인트예요.

```json
{
  "id": "m1.w2.d3.neck_targets_box1_3",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Root & b3 targets across Box 1-2-3 (the connection highway)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 9,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

오늘의 본체, <mark>3블록 관통 3도 인터벌 라인</mark>이에요. 1번 블록에서 3도로 뛰며 시작 → 4번 줄 슬라이드로 2번 블록 → 2번 줄 슬라이드로 3번 블록 → 고음 C에 착지. 마디마다 이음매에서 C를 밟는 걸 확인하세요.

```json
{
  "id": "m1.w2.d3.three_box_3rd_sequence",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "3rd-interval sequence linking Box 1 -> 2 -> 3 (land b3 at each seam)",
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
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 10, "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 10, "duration": "eighth", "technique": "slide", "slideToFret": 13, "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 70 → 계단 상승)**
어제까지의 두 다리(4번 줄 A→C, 2번 줄 A→C 슬라이드)를 BPM 70으로 각 5회 먼저 풀어요. 손이 이음매를 기억하는지 확인. 그다음 위 3블록 라인을 **아주 천천히**, 슬라이드 지점만 특히 또박또박. 이음매가 매끄러워지면 **<mark>75 → 80</mark>**으로 5씩. 이음매에서 삐끗하면 그 속도가 오늘 상한.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 세 개의 C, 이음매 조준)**
메트로놈 80. 3블록 라인을 굴리다가, 각 마디 끝의 **<mark>C(♭3) 착지음에서만</mark>** 0.5초 멈췄다 가기. 1마디 끝(2번 블록 진입 C), 2마디 흐름 속 C, 3마디 끝(고음 C). 세 개의 C를 여정의 "정거장"으로 삼아, 흐르는 라인 속에서도 정확히 밟는 훈련이에요. 세 정거장을 다 정확히 밟으면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 75~80 BPM)**
백킹을 틀고 규칙: **1번 블록에서 출발해 <mark>슬라이드 두 번으로 3번 블록까지 올라갔다가</mark>, 다시 내려오며 어느 블록에서든 C에 착지해 마무리.** 위 예시 라인을 그대로 쳐도 좋고, 3도 점프 순서를 바꿔 즉흥해도 좋아요. 단 하나, **<mark>블록 경계를 넘을 땐 반드시 슬라이드로</mark>** 넘어가세요. 손을 허공에서 폴짝 점프시키지 말고, 줄 위를 미끄러져 넘어가는 감각을 몸에 새기는 게 오늘의 핵심이에요.

**40~50분 · 녹음/피드백 (권장)**
3블록 여행 한 번을 녹음. 재생하며 체크: ① 두 슬라이드 이음매에서 박이 밀리거나 "털컹" 끊기지 않는지. ② <mark>세 개의 C가 다 또렷하게 들리는지</mark>. 끊기는 이음매가 있으면, 그 두 블록 사이 슬라이드만 따로 10번 떼어 반복. 이음매가 매끈해야 넥 전체가 하나로 이어져요.

**오늘의 완료 기준:** 상한 BPM(최소 75 이상 권장)에서 1→2→3번 블록 3도 인터벌 라인을 이음매 끊김 없이 통과. 세 C 착지 지점 모두 정확. 상행·하행 왕복 1회 성공.

## ④ 팁 / 흔한 실수

- **이음매에서 손이 허공 점프.** 블록 경계를 슬라이드 대신 손을 번쩍 들어 옮기면, 그 순간 박이 밀리고 소리가 끊겨요. 오늘의 규율: **경계는 무조건 슬라이드로.** 줄에서 손가락이 뜨지 않게.
- **3도 점프하다 중간 음을 흘려 침.** 3도의 맛은 중간 음을 **비우는** 데서 나와요. 붙여 치면 그냥 상하행으로 퇴화. 폴짝, 폴짝. 사이를 비우세요.
- **속도부터 올리고 이음매를 뭉갬.** 오늘 점수는 빠르기가 아니라 **이음매의 매끄러움**이에요. 80에서 이음매가 삐걱대면 75가 너의 진짜 실력. 뭉갠 80보다 또렷한 75가 훨씬 강해요.
- **여행에 취해 착지를 잊음.** 넥을 신나게 올라갔는데 아무 데서나 멈추면 3일 헛수고예요. 세 블록을 건너도 결승선은 언제나 C. 여정의 화려함보다 착지의 정확함.
