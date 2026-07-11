---
title: "3도 인터벌(스킵) 패턴 집중 훈련"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — 한 칸 건너뛰기, 3도 인터벌의 맛

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 4연음으로 관성을 좀 깼잖아요? 근데 4연음도 결국 "옆 음, 옆 음, 옆 음"으로 붙어서 움직이는 거라, 소리가 아직 계단처럼 밋밋해요. 진짜 솔로 느낌, 그러니까 "노래하는" 느낌은 음과 음 사이가 **<mark>폴짝 뛸 때</mark>** 나와요. 그게 바로 3도 인터벌이에요.

3도 인터벌은 별거 아니에요. 스케일에서 **<mark>바로 옆 음을 건너뛰고 그 다음 음으로 점프</mark>**하는 거예요. A 다음에 C가 아니라 그 다음 D로, C 다음엔 E로. <mark>"한 칸 건너뛰기" 게임</mark>이라고 생각하세요. 이렇게 하면 같은 5음 펜타토닉인데도 소리가 갑자기 세련돼져요. B.B. King이든 슬래시든, 귀에 꽂히는 리크는 대부분 이 3도 점프가 씨앗이에요.

그리고 여기 숨은 보너스가 있어요. 3도로 뛰다 보면 자연스럽게 **A→C, D→F#(는 없고)…** 아니, 우리 스케일 안에서는 A에서 뛰면 D, C에서 뛰면 E인데, 이 점프들의 착지점에 계속 **<mark>C(♭3)와 A(근음)</mark>**가 걸려요. 즉 3도 훈련은 그 자체로 <mark>"타겟음에 착지하는" 감각</mark>을 몰래 심어줘요. 어제 눈도장 찍은 C, 오늘은 손끝으로 몸이 기억하게 만들 거예요.

## ② 시각 자료

먼저 어제 그 블록, 위치는 똑같아요. 3도 점프의 "발판"으로 다시 한번.

```json
{
  "id": "m1.w1.d2.pentatonic_box1_ref",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 (reference)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 65
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

오늘의 본체, <mark>3도 인터벌 상행 시퀀스</mark>예요. 두 음씩(8분음표) 폴짝폴짝 뛰어 올라가요. 착지점 C·A에 강조가 걸린 거 보이시죠?

```json
{
  "id": "m1.w1.d2.third_interval_seq",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "3rd-interval ascending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 65
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
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 65)**
먼저 어제 4연음 시퀀스로 2분만 손을 풀고, 곧바로 3도 인터벌 상행으로 넘어가요. 8분음표 두 개가 "폴-짝" 한 세트. 처음엔 손가락이 꼬일 거예요. 정상이에요. 클릭에 정확히 붙는 것보다 **<mark>점프 자체가 안 끊기는 것</mark>**을 먼저.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C·A / ♭3·근음)**
3도로 뛸 때마다 착지음 이름을 소리 내서 불러요. "에이-디, 씨-이, 디-지…" 이렇게요. 특히 착지가 C나 A일 때는 목소리를 한 톤 올려서 강조. <mark>손과 입과 귀를 동기화</mark>시키는 게 오늘의 진짜 목적이에요.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 65~70 BPM)**
백킹을 틀고 규칙: **오늘은 두 음 이상 붙여 치지 말고, <mark>무조건 3도로만 뛰어다니기</mark>.** 답답하죠? 그 제약이 손을 새 길로 몰아넣어요. 그리고 프레이즈를 끝낼 땐 반드시 <mark>C(♭3)에 착지해서 멈춰보세요</mark>. 그 "탁 걸리는" 느낌을 기억하세요 — 그게 코드톤 착지의 첫 경험이에요.

**40~50분 · 녹음/피드백 (권장)**
30초 녹음 후 재생. 체크 포인트: 점프 착지음이 **<mark>음정이 흔들리지 않고 딱 짚였는지</mark>**. 스킵할 때 중간 현을 살짝 건드려 "치익" 잡음이 나면, 피킹 안 하는 현을 오른손 바닥으로 살짝 뮤트하는 습관을 들여요.

**오늘의 완료 기준:** BPM 65에서 3도 상행 시퀀스를 1번 줄까지 끊김 없이. 백킹 위에서 3도 점프만으로 8마디 채우고 C에서 마무리.

## ④ 팁 / 흔한 실수

- **"건너뛴 음"을 실수로 같이 치기.** 3도의 핵심은 중간 음을 **비우는** 거예요. 그게 비어야 점프의 맛이 살아요. 붙여 치면 그냥 어제 4연음으로 돌아간 거예요.
- **점프할 때 손 전체가 흔들림.** 검지 위치(5프렛)를 앵커로 고정한 채 나머지 손가락만 움직이세요. 손 전체가 우왕좌왕하면 착지 정확도가 무너져요.
- **착지음을 급하게 뗌.** C나 A에 착지했으면 아주 살짝 더 머물러요. 그 0.2초가 "노래"와 "연습"을 가르는 차이예요.
- **상행만 하고 끝내기.** 여유 있으면 같은 패턴을 하행으로도. 단, 오늘은 상행 정확도가 우선. 하행은 3일차에 속도와 함께.
