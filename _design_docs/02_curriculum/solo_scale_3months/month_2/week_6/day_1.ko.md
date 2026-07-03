---
title: "나란한 조 — 같은 지판, 중심음만 A→C (도수 두 조성 병기)"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — 손은 그대로, 마음만 A에서 C로 이사하기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 여러분 손은 이미 답을 알고 있는데 머리만 모르고 있거든요. 지난주에 A 내추럴 마이너를 실컷 씹어 드셨죠? 그 지판 모양, 그 운지, 그거 **손가락 하나 안 바꾸고** 오늘부터 C 메이저로도 쓸 수 있어요. 왜냐면 A 마이너랑 C 메이저는 **똑같은 7음(A B C D E F G)** 을 공유하는 "나란한 조(relative key)"거든요. 음은 완전히 같아요. 딱 하나, **어느 음을 '집(중심음)'으로 느끼느냐**만 달라요.

비유하자면 이래요. 똑같은 아파트 단지인데, A동을 우리 집이라고 생각하면 A 마이너, C동을 우리 집이라고 생각하면 C 메이저예요. 건물(지판 모양)은 하나도 안 바뀌고, "어디로 퇴근하느냐"만 바뀌는 거죠. Am일 땐 어두운 **b3인 C**로 퇴근하고, C 메이저일 땐 밝은 **3도인 E**로 퇴근해요. 오늘은 이 두 집 주소를 손끝에 새기는 날이에요.

그래서 오늘부터 라벨을 **두 조성으로 같이** 읽을 거예요. 예를 들어 C음은 "C 메이저에선 R(집), A 마이너에선 b3"이에요. 그래서 라벨을 `(C도/Am도)` 형식으로 병기했어요. 같은 점 하나가 관점에 따라 완전히 다른 역할이 된다는 걸 눈으로 익히세요. 이게 되면 다음 주 코드톤 타겟팅이 거저예요.

## ② 시각 자료

같은 지판(5프렛 포지션), 하나의 모양이에요. 라벨은 `(C 메이저 도수 / A 마이너 도수)`로 병기했어요. 두 개의 중심음이 보이죠? **C**(밝게 보면 R, 어둡게 보면 b3)와, C 메이저의 밝은 3도 **E**를 강조해 뒀어요.

```json
{
  "id": "m2.w6.d1.relative_dual_center_shape",
  "type": "scale_shape",
  "meta": {
    "title": "Same shape (A minor = C major) — dual-degree labels, centers C & E highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "scale": "C major (relative to A natural minor)",
    "tempoBpm": 76
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C (R/b3)", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "D (2/4)", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E (3/5)", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "F (4/b6)", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "G (5/b7)", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C (R/b3)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "D (2/4)", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "E (3/5)", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "F (4/b6)", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "G (5/b7)", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C (R/b3)", "role": "target", "highlight": true }
    ]
  }
}
```

그리고 "같은 모양, 다른 착지"를 귀로 확인하는 짧은 예제예요. **1번 마디**는 똑같은 음들로 놀다가 A로 퇴근(Am 중심), **2번 마디**는 손가락 하나 안 바꾸고 C로 퇴근(C 메이저 중심)해요. 소리의 분위기가 어떻게 바뀌는지 들어보세요.

```json
{
  "id": "m2.w6.d1.same_shape_two_centers",
  "type": "tab",
  "meta": {
    "title": "Same shape, two centers — resolve to A (Am) vs resolve to C (C major)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "center_shift_demo",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C (b3 in Am)", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B (2)", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A (R)", "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E (5)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D (4)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C (b3)", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "A = R(Am)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C (R in C major)", "role": "root" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A (6)", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G (5)", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "F (4)", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E = 3(C)", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D (2)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C = R(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 76)**
메트로놈 76에 맞춰 위 지판 모양 전체를 3도 인터벌로 한 바퀴 돌려요. 상하행 단순 반복은 금지, 무조건 한 칸 건너뛰는 3도로. 지난주에 익힌 손 그대로예요. 오늘은 속도 욕심 내지 말고 "이 모양은 이미 내 손에 있다"를 확인하는 시간이에요.

**10~20분 · 두뇌 훈련 (같은 지판, 중심음 A↔C 전환)**
메트로놈 끄고, 지판 모양은 그대로 둔 채 머릿속 중심만 바꿔요. 먼저 30초간 **A를 집이라 생각하고** 아무 음이나 짚다가 A(6번 5프렛, 4번 7프렛)로 퇴근. 그다음 30초간 **C를 집이라 생각하고** 똑같이 놀다가 C(6번 8프렛, 3번 5프렛, 1번 8프렛)로 퇴근. 짚을 때마다 소리 내서 "이건 A동, 이건 C동" 하고 불러요. 손은 하나도 안 바뀌는데 소리 분위기가 바뀌는 걸 느끼면 통과.

**20~40분 · 실전 즉흥 (Am ↔ C 전환 백킹 / 70~76 BPM)**
"Am to C backing track" 또는 "relative major minor jam"으로 하나 틀어요. 규칙: 코드가 **Am일 땐 C(b3)로**, **C일 땐 E(밝은 3도)로** 착지. 손 모양은 절대 안 바꿔요. 오직 "어디서 멈추느냐"만 바꿔요. 두 착지음 사이를 오가는 그 느낌이 오늘의 전부예요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 마지막 잼 30초를 녹음. 다시 들으며 딱 하나만 체크: **C 구간에서 진짜 E에 착지했을 때 "밝은" 느낌이 나는지**, Am 구간의 C 착지와 색깔이 다른지. 잘 모르겠으면 재생 속도를 살짝 늦춰 착지 순간만 반복해 들어봐요.

**오늘의 완료 기준:** 같은 지판 모양에서 A 중심 / C 중심을 눈 감고 전환하며 착지음(C·E·A)을 정확히 짚기. 백킹 위에서 코드 따라 착지음 바꾸기 8마디.

## ④ 팁 / 흔한 실수

- **모양을 바꾸려 든다.** "C 메이저니까 다른 폼 찾아야지" 하는 순간 오늘 수업 망해요. 핵심은 **아무것도 안 바꾸는 것**. 손은 그대로, 귀와 착지점만 이사한다는 걸 계속 되뇌세요.
- **A와 C를 동시에 집으로 느끼려 함.** 그러면 소리가 붕 떠요. 한 번에 하나의 집만. Am 구간엔 오직 A/C, C 구간엔 오직 C/E에 딱 걸어두세요.
- **밝은 3도 E를 대충 흘림.** C 메이저의 정체성이 바로 이 E예요. b6인 F(2번 6프렛) 바로 옆이라 헷갈리기 쉬운데, F로 착지하면 붕 뜬 소리가 나요. E와 F를 손끝으로 확실히 구분하세요.
- **도수 병기를 눈으로만 읽음.** 짚을 때마다 입으로 "C는 A마이너 b3, C메이저 루트" 하고 두 이름을 다 불러요. 입이 기억해야 즉흥에서 튀어나와요.
