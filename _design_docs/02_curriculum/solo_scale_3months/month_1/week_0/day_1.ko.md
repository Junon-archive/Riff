---
title: "Week 0 · Day 1 — 오리엔테이션: 왜 우리는 '3도에 착지'하는가"
dayKey: m1.w0.d1
estMinutes: 50
i18nKey: lesson.m1.w0.d1
---

# Day 1 — 코스 오리엔테이션 + "3도 착지" 예고 + 자가진단

## ① 이론/설명

오늘 왜 이걸 하냐면요, 앞으로 3개월 동안 우리가 쌓아 올릴 **<mark>집의 설계도</mark>**를 먼저 펼쳐 보려고 그래요. 벽돌부터 쌓기 전에 "이 집이 결국 어떤 모양이 되는지"를 알고 시작하는 사람이랑, 모르고 시작하는 사람은 두 달 뒤에 완전히 다른 곳에 서 있거든요.

먼저 하나만 짚고 갈게요. 지금 여러분은 기타를 **처음 잡는 사람이 아니에요.** 코드 잡을 줄 알고, 좋아하는 곡 커버도 해봤고, 유튜브 보고 솔로도 카피해봤죠. 그런데 딱 하나, **"백킹 틀어놓고 내 마음대로 솔로 쳐봐"** 하면 <mark>손이 얼어붙어요</mark>. 펜타토닉 박스는 아는데, 그 박스 안에서 상행–하행만 왕복하다 보면 "이게 음악이야 손가락 운동이야?" 싶고요. 이게 바로 우리가 부술 벽이에요.

### 이 코스가 정체기를 부수는 방식

핵심 엔진은 딱 한 문장이에요. **"코드가 바뀌면, 그 <mark>코드의 3도로 착지한다</mark>."**

왜 하필 3도냐면요. 코드의 성격을 결정하는 건 근음(1도)이 아니에요. 근음은 그냥 "이름표"예요. **메이저냐 마이너냐, 밝냐 어둡냐를 가르는 건 <mark>3도</mark>**거든요. C코드의 3도는 E(밝은 장3도), Cm코드의 3도는 E♭(어두운 단3도). 이 한 음 차이가 곡의 표정을 통째로 바꿔요.

그래서 즉흥 솔로 고수들이 하는 짓을 슬로우 모션으로 뜯어보면, 사실 별거 없어요. **코드가 바뀌는 순간, 그 코드의 <mark>3도음을 정확히 밟고 있어요</mark>.** 나머지 음들은 그 3도로 가는 길목일 뿐이고요. 스케일을 아무리 빨리 왔다 갔다 해도 "코드톤에 착지"가 없으면 그냥 소음이고, 느리게 쳐도 3도에 착지하면 "노래"가 됩니다.

> ⚠️ 오늘은 이 개념을 **훈련하지 않아요.** 그냥 "아, 앞으로 내가 갈 방향이 이거구나"만 머리에 심어두세요. 실제 3도 착지 훈련은 Month 1부터 본격적으로 팹니다.

### 오늘의 미리보기: Am에서 3도는 어디?

우리가 첫 달 내내 살게 될 동네가 **<mark>A 마이너 펜타토닉 1박스</mark>(5프렛)**예요. Am 코드의 3도는 **C(단3도, ♭3)**입니다. 아래 지판에서 초록색으로 강조된 음들이 전부 C예요. "언젠가 이 음들에 착지하게 되겠구나" 하는 눈도장만 찍고 갑시다.

```json
{
  "id": "m1.w0.d1.am_chordtone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones — where the 3rd (C) lives (concept preview)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 60
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "isRoot": true, "label": "R", "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

## ② 시각 자료

```json
{
  "id": "m1.w0.d1.am_chordtone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones — where the 3rd (C) lives (concept preview)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 60
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "isRoot": true, "label": "R", "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

초록 음(♭3 = C)이 **<mark>착지 목표</mark>**, R(A)은 집, 5도(E)는 곁다리라고 생각하세요. 지금은 위치만 눈에 익히면 충분해요.

## ③ 오늘의 연습 (50분 루틴)

첫날이라 손보다 **머리**를 더 씁니다. 그래도 몸은 계속 움직여요.

**0~10분 · 워밍업 (권장 BPM 60)**
- 메트로놈 60에 맞춰 6번줄 5프렛(A)부터 1번줄까지 한 음씩, 4분음표로 천천히 왕복. <mark>얼터네이트 피킹</mark>(다운–업 번갈아)만 신경 씁니다.
- 완료 기준: 피킹 방향이 흐트러지지 않고 두 바퀴 왕복.

**10~20분 · 두뇌 훈련 (BPM 60)**
- 위 지판에서 **<mark>초록 음(C, ♭3) 3개 위치</mark>만** 따로 짚어보기. "6번줄 8프렛, 3번줄 5프렛, 1번줄 8프렛" 소리 내어 말하면서.
- 완료 기준: 지판 안 보고도 C 세 자리를 손이 찾아감.

**20~40분 · 실전 감각 — 한 음 즉흥 (BPM 70~80, Am 백킹)**
- Am 원코드 백킹 트랙을 유튜브에서 "Am backing track slow" 정도로 검색해 틀어요.
- 규칙은 딱 하나: **1번줄 5프렛 A(근음) 한 음만** 씁니다. 대신 리듬은 자유롭게. 길게 끌었다, 짧게 툭툭 쳤다, 쉬었다가 들어왔다.
- 목표는 "멜로디"가 아니라 **<mark>"내가 리듬을 고른다"는 감각</mark>.** 한 음이어도 리듬만 살아 있으면 음악처럼 들려요.
- 완료 기준: 백킹 한 바퀴(보통 8~16마디) 동안 얼지 않고 계속 리듬을 만들어냄.

**40~50분 · 녹음/피드백 (권장)**
- 가진 아무 녹음 도구(폰 음성 메모, 아무 녹음 앱)로 위 한 음 즉흥을 30초만 녹음.
- 다시 들으며 딱 하나만 체크: **<mark>"박에 붙어 있었나, 흘렀나?"</mark>** 판단만 하고 오늘은 고치려 애쓰지 마세요.
- 매일 강제는 아니에요. 하지만 Day 1은 "출발점 소리"를 남겨두면 나중에 성장 확인용으로 아주 좋아요.

## ④ 팁 / 흔한 실수

- **"한 음만 쓰라니 너무 시시한데?"** → 그 시시함이 핵심이에요. 음 개수를 0으로 묶어놔야 비로소 리듬·다이내믹이 들려요. 고수일수록 한 음으로 사람 울립니다.
- **3도 착지를 오늘 연습하려 들지 마세요.** 개념만 심는 날입니다. 지금 무리하면 손은 굳고 머리만 복잡해져요.
- **자가진단 체크리스트** (마음속으로 O/X):
  - [ ] Am 펜타 1박스를 안 보고 상하행할 수 있다
  - [ ] 얼터네이트 피킹을 의식하지 않아도 유지된다
  - [ ] 백킹 위에서 즉흥을 시도하면 손이 얼어붙는다 (← 이게 X여도 정상, 이걸 고치러 온 거예요)
  - [ ] "Am의 3도가 C"라는 걸 방금 알았다 → 완벽합니다. 오늘 목표 달성.
- X가 많아도 절대 좌절 금지. 이 코스는 정확히 그 X들을 O로 바꾸려고 설계됐어요.
