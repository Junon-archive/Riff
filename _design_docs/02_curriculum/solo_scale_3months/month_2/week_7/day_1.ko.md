---
title: "Am 코드톤(A·C·E) 지판 전역 매핑 — 3도(C) 눈도장"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — Am의 A·C·E가 지판 어디에 숨어 있는지 '지도'를 그리기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 슬슬 고백할 때가 됐어요. 우리 지난 6주 동안 펜타토닉 박스는 손에 익었죠? 근데 즉흥이 여전히 "박스 안에서만" 노는 느낌이라면, 이유는 하나예요. **지금 울리는 코드의 진짜 뼈대음이 지판 어디 있는지 모르기 때문**이에요.

코드는 결국 세 음이 뼈대예요. Am이면 **A(근음) · C(♭3) · E(5)**. 이 세 음을 "코드톤"이라고 불러요. 백킹에서 Am이 울리는 순간, 이 세 음은 어디서 눌러도 무조건 예쁘게 맞아떨어져요. 문제는 우리가 이걸 딱 한 자리(박스 1)에서만 안다는 거죠. 그래서 오늘은 A·C·E를 **6번 줄부터 1번 줄까지, 넥 전체에** 흩뿌려서 지도를 그릴 거예요.

한 가지 오해부터 풀게요. 이건 스윕피킹 속주 연습이 **아니에요.** 빠르게 쓸어내리는 게 목표가 아니라, "여기 눌렀더니 C네, 저기도 C네" 하고 **위치를 인지(매핑)하는 두뇌 훈련**이에요. 그래서 오늘 내내 BPM은 아주 느립니다. 속도는 이 커리큘럼에서 한 번도 주인공이었던 적이 없어요.

그리고 오늘의 진짜 주인공은 **C(♭3)** 예요. 3도는 코드의 표정을 결정하는 음이에요. A랑 E는 메이저든 마이너든 똑같지만, C가 있어서 이게 "마이너"가 되는 거거든요. 그래서 C를 앞으로 **착지 후보지(target)** 로 빨갛게 표시해 둘게요. 눈 감고도 C 세 군데를 짚을 수 있으면 오늘은 대성공이에요.

## ② 시각 자료

Am 코드톤(A·C·E)을 넥 전체(0~12프렛)에 매핑한 지도예요. 빨간 강조가 3도인 **C**, 이게 오늘의 착지 타겟이에요.

```json
{
  "id": "m2.w7.d1.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (A-C-E) across the neck, 3rd (C) highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 66
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

이제 5프렛 포지션(1번 박스 자리)에서 A·C·E만 골라 **1-3-5 아르페지오**로 오르내려요. 3도(C)는 target으로 강조했어요. 3도끼리 뛰어넘는 스킵 감각을 느껴보세요.

```json
{
  "id": "m2.w7.d1.am_arpeggio_1_3_5",
  "type": "tab",
  "meta": {
    "title": "Am arpeggio 1-3-5 (A -> C -> E), 5th position",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 66
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "arpeggio_1-3-5",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 66)**
메트로놈 66에 맞춰 위 1-3-5 아르페지오를 8분음표로 상행→하행 반복. 한 클릭에 8분음표 두 개("딴-다")가 또박또박 떨어지게. 목표는 속도가 아니라 **매 음을 짚으면서 속으로 도수(R-3-5)를 부르는 것**. 소리 안 나게 입만 움직여도 돼요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C / ♭3)**
메트로놈 끄고, 지도에서 **C(♭3)만** 찾아 짚어요. 최소 3군데: 5번 3프렛, 3번 5프렛, 1번 8프렛. 짚을 때마다 소리 내서 "씨!" 불러요. 익숙해지면 눈 감고 랜덤으로 "C, 다음 C, 다음 C" — 3초 안에 다른 포지션 C로 손이 가면 통과. 여유되면 E(5) 세 군데도 같은 방식으로.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 66~70 BPM)**
"Am backing track slow" 아무거나 하나 틀어요. 규칙 딱 하나: **A·C·E 세 음만 쓰기.** 경과음(펜타의 D·G)은 오늘 금지예요. 세 음만으로 심심하게 노는 대신, 멈추고 싶을 땐 반드시 **C에 착지**. 지판 이쪽저쪽 다른 포지션의 C를 골라가며 착지해보세요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 잼 30초 녹음. 다시 들으며 한 가지만 체크: **내가 착지한 음이 진짜 C였나?** 애매하면 재생 속도를 늦춰 마지막 음을 지판에서 다시 짚어 확인해요. 끝음이 흐리멍덩하게 끊겼으면 다음엔 조금 더 오래 눌러 울려주세요.

**오늘의 완료 기준:** BPM 66에서 1-3-5 아르페지오 상·하행을 끊김 없이, 그리고 C(♭3) 세 포지션을 눈 감고 짚기.

## ④ 팁 / 흔한 실수

- **박스 관성으로 되돌아가기.** 즉흥 중에 나도 모르게 펜타 상하행으로 새면, 그건 "세 음만" 규칙이 깨진 거예요. 답답한 게 정상이고, 그 제약이 귀를 코드톤에 붙여줘요.
- **3도(C)를 그냥 지나가는 음처럼 흘리기.** C는 Am을 "마이너답게" 만드는 음이에요. 착지할 때 살짝 더 세게, 살짝 더 오래. 오늘부터 귀에 각인시켜 두면 이번 주 내내 편해요.
- **속도 욕심.** 66이 심심할 만큼 느려도 올리지 마세요. 이건 속주가 아니라 지도 그리기예요. 위치가 흐릿한데 빠르면 그냥 손버릇만 굳어요.
- **한 포지션에만 눌러앉기.** 편한 5프렛에서만 놀지 말고, 의식적으로 2프렛 근처·10프렛 근처 C도 손을 뻗어 짚어보세요. 지도는 넓을수록 즉흥이 자유로워져요.
