---
title: "6현 근음 해부 — 코드는 외우는 게 아니라 조립이다"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — G코드를 뜯어보며 '근음 위 조립'을 배우기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 우리가 코드를 못 외워서 못 치는 게 아니거든요. **모양으로만 외워서** 응용이 안 되는 거예요. "G는 이 모양, C는 저 모양" 이렇게 스무 개쯤 외우면, 스물한 번째 코드에서 또 막혀요. 그래서 오늘부터는 규칙을 바꿉니다. 코드를 **모양이 아니라 '근음 위에 쌓은 음들'로** 봅니다.

기준점은 딱 하나, **근음(R)**. 오늘은 근음이 **6번 줄**에 있는 코드(흔히 'E 폼'이라 부르는 그것)를 해부할 거예요. 예시는 3프렛의 **G 메이저**. 이 코드 안에는 사실 세 종류의 음밖에 없어요.

- **R (근음)** — 6번·4번·1번 줄에 있는 G. 이 코드의 이름이자 집.
- **3 (3도)** — 3번 줄의 B. 코드의 **표정**을 결정하는 음. 밝은가 어두운가는 전부 이 3도가 정해요.
- **5 (5도)** — 5번·2번 줄의 D. 코드를 두껍게 받쳐주는 기둥. 성격은 안 바꿔요.

즉 G 메이저는 "복잡한 여섯 손가락 모양"이 아니라 **R·3·5 세 재료를 6현 근음 위에 배치한 것**뿐이에요. 오늘 이 세 음이 지판 어디에 있는지 눈으로 완전히 분해해 둡니다. 특히 **3도(B)**를 눈에 익혀두세요. 이번 주 내내 "여기를 반음 내리면 마이너, 여기에 뭘 더하면 7" 하는 식으로, 모든 변화가 3도와 7도에서 일어나거든요.

## ② 시각 자료

먼저 오늘의 주인공, 6현 근음 G 메이저(E 폼)예요. 파랑이 근음·코드톤, 파랑 중에서도 3번 줄의 **3도(B)**가 표정을 쥔 음이에요(초록 강조).

```json
{
  "id": "m1.w1.d1.g_major_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "G major — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**예제 1 — 코드톤 확인 라인 (R·3·5·R).** 세 재료를 하나씩 소리로 확인해요. **오선보와 타브가 같이** 나오니, 음이 실제로 얼마나 높아지는지(오선보)와 어느 줄 몇 프렛인지(타브)를 동시에 보세요.

```json
{
  "id": "m1.w1.d1.g_chordtones_line",
  "type": "tab",
  "meta": {
    "title": "G chord tones (R·3·5) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 70,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 70, 한 음씩 또박또박** 짚으며 이름을 소리 내어 부르세요("루트-삼도-오도-루트"). 초록으로 강조된 **3도(B)** 소리가 코드의 표정임을 귀에 새깁니다. 4번 반복.

**예제 2 — G 컴핑 리듬 뼈대.** 이번엔 실제로 반주하는 리듬이에요. 표시된 음마다 **G 코드 전체를 스트로크**하고, 8분 쉼표 뒤의 팜뮤트(P.M.) 고스트로 그루브를 만듭니다. 박자는 오선보의 음표 길이로 확인하세요.

```json
{
  "id": "m1.w1.d1.g_comp_rhythm",
  "type": "tab",
  "meta": {
    "title": "G comping rhythm skeleton — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 75,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 75에서 4번 반복.** "쿵 — (쉼) 툭 — 쿵 — (쉼)" 느낌으로, 세 번째 팜뮤트 히트는 살짝 죽여 그루브의 숨을 만듭니다. 익으면 근음만 5번 줄(C 등)로 옮겨 같은 리듬으로 응용해 보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
3프렛 G 메이저(E 폼)를 잡고, 여섯 줄을 한 줄씩 천천히 울려요. 모든 줄이 뭉개짐 없이 또렷이 나는지, 특히 검지 바레가 눌리는지 확인. 안 울리는 줄이 있으면 손가락 각도만 살짝 세워 보세요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 3도 B)**
**예제 1**을 메트로놈 없이 짚으며 "루트-삼도-오도-루트"를 소리 내어 불러요. 그다음 3번 줄의 **3도(B)만** 콕 집어 여러 번 짚어 보세요. 이 음이 이번 주의 스위치예요. 눈 감고 3도를 바로 짚을 수 있으면 통과.

**20~40분 · 실전 반주 (예제 2 컴핑 / 70~80 BPM)**
"G major backing track"을 하나 틀고, **위 예제 2 컴핑 리듬을 BPM 75에서 4번 반복**해요. 속으로 "루트-삼도-오도"를 외며 지금 울리는 음들의 정체를 계속 의식합니다. 리듬이 익으면 근음만 5번 줄로 옮겨 같은 패턴으로 응용해 보세요. 아직 코드는 바꾸지 않아요 — 오늘은 "이 소리가 R·3·5로 이루어졌다"는 감각과 그루브만.

**40~50분 · 녹음/셀프 피드백 (권장)**
마지막 컴핑을 30초만 녹음해 다시 들어요. 체크는 딱 하나: **여섯 줄이 다 살아 있는지**, 아니면 어느 줄이 죽어 뭉갰는지. 죽은 줄이 있으면 그 줄을 짚는 손가락 각도만 내일 교정하면 돼요.

**오늘의 완료 기준:** G 메이저(E 폼)를 여섯 줄 또렷이 울리고, 그 안의 R·3·5를 눈 감고 짚으며 이름을 부를 수 있고, 예제 2 컴핑 리듬을 BPM 75에서 흔들림 없이 반복할 수 있다.

## ④ 팁 / 흔한 실수

- **모양으로 도로 돌아가기.** "그냥 G 모양"으로 외우려는 관성이 올라오면, 일부러 R·3·5를 소리 내어 부르며 짚으세요. 이름을 붙이는 순간부터 응용이 시작돼요.
- **3도를 흘려듣기.** 3도(B)는 이번 주의 주인공이에요. 짚을 때마다 살짝 더 의식해 두면, 내일 "3 → b3"로 마이너를 만들 때 거저먹기예요.
- **검지 바레 부실.** E 폼은 검지 하나로 여러 줄을 눌러요. 1번·2번 줄이 죽으면 검지를 손끝이 아니라 옆면으로 살짝 눕혀 누르세요.
- **컴핑이 밋밋함.** 예제 2에서 팜뮤트 고스트와 쉼표를 제대로 살리지 않으면 "쿵쿵쿵쿵"으로 뭉개져요. 쉼표는 소리를 비우는 게 아니라 그루브의 숨이라는 걸 기억하세요.
