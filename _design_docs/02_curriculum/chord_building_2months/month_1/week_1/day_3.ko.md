---
title: "도미넌트 7 — b7을 더하면 '해결되고 싶은' 긴장이 생긴다"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — b7 하나로 코드에 '밀고 당기는 힘' 넣기

## ① 이론/설명

어제까지 3도로 밝음(메이저)과 어둠(마이너)을 갈랐죠. 오늘은 새 축, **7도**를 다룹니다. 정확히는 **b7(단7도)**. 메이저 코드에 b7 하나를 더하면 **도미넌트 7(예: G7)** 이 돼요. 이름은 거창하지만, 하는 일은 어제처럼 '음 하나 얹기'가 전부예요.

도미넌트 7의 정체는 한마디로 **긴장**이에요. 가만히 편안한 메이저와 달리, b7이 들어오면 "어딘가로 가고 싶다, 빨리 해결되고 싶다"는 밀당의 힘이 생겨요. 블루스 기타의 그 꿈틀대는 느낌, 펑크의 끈적함, 재즈의 스릴 — 전부 이 b7 한 음에서 나옵니다. 신기하죠? 음 하나가 코드에 '가고 싶은 마음'을 심어주는 거예요.

지판에서는 어제 G 메이저의 **4번 줄 5프렛(R=G)** 을 **3프렛(b7=F)** 으로 내리면 G7이 돼요. 3도(3번 줄 4프렛, B)는 그대로 두고, 4번 줄만 두 칸 아래로. 자, 이제 이번 주의 그림이 딱 정리됩니다 — **3번 줄 = 3도(밝음/어둠) 스위치, 4번 줄 = 7도(긴장) 스위치.** 딱 두 줄, 두 스위치예요. 내일이면 이 둘을 합쳐 네 가지 코드를 자유자재로 만들 거예요. 오늘은 4번 줄 스위치 하나만 확실히 손에 익혀요.

## ② 시각 자료

G 메이저에서 4번 줄만 5→3프렛으로 내린 **G7(E 폼)**. 초록이 오늘 새로 들어온 **b7(F)**, 긴장의 정체예요.

```json
{
  "id": "m1.w1.d3.g7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "G7 — 6th-string root (E-form dominant)",
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
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**예제 1 — b7 추가 라인.** 코드의 뼈대(R·3·5)를 짚은 뒤 마지막에 **b7(F)** 을 더해요. 그 b7이 들어오는 순간 소리가 "완결"에서 "미완, 다음이 궁금함"으로 바뀌는 걸 들어보세요.

```json
{
  "id": "m1.w1.d3.add_b7_line",
  "type": "tab",
  "meta": {
    "title": "Add the b7 — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 72,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

▶ **BPM 72.** "루트-3도-5도"까지는 안정적이다가, 마지막 **b7(F)** 에서 살짝 '기울어지는' 느낌을 잡으세요. 4번 반복.

**예제 2 — 메이저 → 7 스위치 컴핑.** 1마디 G, 2마디 G7. 표시된 음마다 **코드 전체를 스트로크**하되, 실제로 움직이는 건 **4번 줄 한 손가락(5→3프렛)뿐**이에요. 그 한 칸이 안정을 긴장으로 바꿔요.

```json
{
  "id": "m1.w1.d3.maj_dom7_comp",
  "type": "tab",
  "meta": {
    "title": "G to G7 switch comp — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 78,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 5, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 78, 4번 반복.** 1마디 안정된 G → 2마디 근질거리는 G7. 4번 줄 손가락만 5→3프렛으로 내려가요. G7에서 "빨리 어디론가 가고 싶은" 그 느낌을 즐기세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
G ↔ G7 을 4박마다 번갈아. 4번 줄 손가락만 5프렛 ↔ 3프렛으로 움직이고 3도(3번 줄 4프렛)는 고정. 두 코드 다 여섯 줄이 깨끗한지 확인.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = b7)**
**예제 1**을 짚으며 R·3·5·b7 을 소리 내어 부르고, 4번 줄 3프렛의 **b7(F)** 만 콕 집어 여러 번. 눈 감고 b7을 바로 짚으면 통과. 이게 이번 주의 '긴장 스위치'예요.

**20~40분 · 실전 반주 (예제 2 컴핑 / 75~85 BPM)**
**예제 2를 BPM 78에서 4번 반복** — 1마디 G, 2마디 G7. 익으면 근음만 5번 줄로 옮겨(예: C ↔ C7) 같은 스위치를 응용. 블루스 백킹이 있으면 위에 얹어도 좋아요. b7의 밀당을 몸으로 느끼는 게 목표.

**40~50분 · 녹음/셀프 피드백 (권장)**
G ↔ G7 전환 30초 녹음. 체크: G7에서 **b7이 죽지 않고 또렷이** 우는지, 전환이 뭉개지지 않는지.

**오늘의 완료 기준:** 4번 줄 5↔3프렛만으로 G ↔ G7 을 전환하고, 눈 감고 b7을 짚을 수 있다.

## ④ 팁 / 흔한 실수

- **b7과 R을 헷갈리기.** 4번 줄 5프렛은 R(G), 3프렛은 b7(F). 헷갈리면 "긴장이 필요하면 내린다(5→3)"로 외우세요.
- **3도를 같이 내리기.** 오늘은 4번 줄만. 3번 줄(3도)은 그대로 둬야 '메이저 계열의 7'이 됩니다. 3도까지 내리면 그건 내일 배울 m7이에요.
- **긴장을 '틀린 소리'로 오해.** G7이 뭔가 '안 끝난' 느낌은 버그가 아니라 기능이에요. 그 미완결이 다음 코드로 끌고 가는 힘이에요.
- **팜뮤트 없이 밋밋하게.** 예제 2의 고스트 히트를 살려야 그루브가 살아요.
