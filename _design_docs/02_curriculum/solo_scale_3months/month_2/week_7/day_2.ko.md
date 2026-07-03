---
title: "C 코드톤(C·E·G) 지판 전역 매핑 — 3도(E) 눈도장"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 이번엔 C의 C·E·G, 3도(E)를 지판에 심기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 어제 Am 지도를 그렸으니 이제 짝꿍 코드인 **C 메이저**의 지도도 그려야 하거든요. 왜 하필 C냐면요, Am이랑 C는 사실 **같은 음을 공유하는 나란한조(상대조)** 예요. 지난주(W6)에 이미 맛봤죠? 오늘은 그걸 "코드톤"의 눈으로 다시 봅니다.

C 메이저의 뼈대음은 **C(근음) · E(3) · G(5)**. 어제 Am은 A·C·E였죠. 눈치 빠르면 벌써 보일 거예요. **C는 두 코드에 다 들어있어요.** Am에서 C는 3도(♭3)였는데, C 코드에선 근음(R)이에요. 같은 음인데 역할이 바뀌는 거죠. 이게 나중에 Am↔C를 자유자재로 넘나드는 비밀 통로가 되는데, 그건 내일(Day 3)에 제대로 파요. 오늘은 일단 C 코드톤 지도 그리기에 집중.

오늘의 주인공은 3도인 **E** 예요. 어제 C가 Am을 "마이너답게" 만들었듯, E는 C를 "메이저답게" 밝혀주는 음이에요. 그래서 E를 착지 타겟(target)으로 빨갛게 찍어둘게요. 참고로 이 E는 어제 Am에서 5도였던 바로 그 음이에요. 같은 프렛인데 코드가 바뀌면 역할이 달라진다는 것, 이 감각을 몸으로 느껴보세요.

다시 강조하지만 이건 속주가 아니에요. **위치 인지 두뇌 훈련.** 느린 BPM에서 "여기 E, 저기도 E" 하고 지도를 또렷하게 그리는 게 전부예요.

## ② 시각 자료

C 코드톤(C·E·G)을 넥 전체(0~12프렛)에 매핑했어요. 빨간 강조가 3도인 **E**, 오늘의 착지 타겟이에요.

```json
{
  "id": "m2.w7.d2.c_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "C major chord tones (C-E-G) across the neck, 3rd (E) highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 66
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 0, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 8, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 7, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 10, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 0, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 8, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

오픈 포지션에서 C·E·G만 골라 **1-3-5 아르페지오**로 오르내려요. 개방현이 섞여 울림이 예뻐요. 3도(E)는 target으로 강조했어요.

```json
{
  "id": "m2.w7.d2.c_arpeggio_1_3_5",
  "type": "tab",
  "meta": {
    "title": "C major arpeggio 1-3-5 (C -> E -> G), open position",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 66
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "arpeggio_1-3-5",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 2, "duration": "eighth", "label": "3", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 0, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "3", "target": true, "highlight": true, "role": "target" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "3", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 0, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 66)**
메트로놈 66에 위 오픈 C 아르페지오를 8분음표로 상행→하행. 매 음마다 속으로 도수(R-3-5)를 불러요. 개방현이 섞이니 왼손이 놀 때 오른손이 미리 다음 현으로 넘어가는 흐름을 느껴보세요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = E / 3)**
메트로놈 끄고, 지도에서 **E(3)만** 찾아 짚어요. 최소 3군데: 4번 2프렛, 2번 5프렛, 1번 0프렛(개방). 짚을 때마다 "이!" 하고 소리 내요. 익숙해지면 눈 감고 랜덤으로 E→E→E. 3초 안에 다른 포지션 E로 손이 가면 통과. **어제 Am의 5도였던 E가 오늘은 C의 3도**라는 걸 한 번씩 되뇌면 머릿속 지도가 더 단단해져요.

**20~40분 · 실전 즉흥 (C 원코드 백킹 / 66~70 BPM)**
"C major backing track slow" 아무거나 틀어요. 규칙: **C·E·G 세 음만.** 멈출 땐 반드시 **E에 착지.** 오픈 포지션에서만 놀지 말고, 5~9프렛 쪽 E(2번 5프렛, 3번 9프렛)에도 손을 뻗어 착지해보세요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 30초 녹음. 체크 포인트: **착지음이 진짜 E였나?** C 코드 위에서 E로 끝내면 밝고 안정적으로 "탁" 앉는 느낌이 나요. 그 느낌이 안 났으면 근음 C에서 끝냈을 확률이 높아요. 재생 속도 늦춰 마지막 음을 지판에서 확인해요.

**오늘의 완료 기준:** BPM 66에서 오픈 C 아르페지오 상·하행을 끊김 없이, E(3) 세 포지션을 눈 감고 짚기.

## ④ 팁 / 흔한 실수

- **근음(C)으로만 착지하는 습관.** 근음은 안전하지만 밋밋해요. 3도(E)에 앉아야 "메이저의 밝음"이 살아요. 의식적으로 E를 노려서 끝내보세요.
- **개방현 잡음.** 오픈 C 아르페지오에서 안 쓰는 6번·4번 개방이 웅웅 울리면, 오른손 손날이나 왼손 남는 손가락으로 살짝 뮤트해요.
- **어제와 오늘을 따로 외우려 하기.** A·C·E와 C·E·G는 겹치는 음(C, E)이 많아요. 새로 외우는 게 아니라 "같은 음, 바뀐 역할"로 보면 절반은 이미 아는 지도예요.
- **속도 욕심.** 오늘도 66 고정. 위치가 흐릿하면 55로 낮춰도 좋아요. 또렷함이 언제나 먼저예요.
