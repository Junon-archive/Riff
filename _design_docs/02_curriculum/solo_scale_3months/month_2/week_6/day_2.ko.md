---
title: "C 메이저 3도 인터벌 시퀀스 — 밝은 3도(E)에 착지하기"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — C 메이저를 3도로 뛰어, 밝은 E에 사뿐히

## ① 이론/설명

오늘 왜 이걸 하냐면요, 어제 "C도 우리 손 안에 있다"는 걸 확인했잖아요? 근데 그냥 확인만 하고 끝나면 A 마이너 하던 관성으로 슬금슬금 돌아가요. 그래서 오늘은 C 메이저에 **<mark>확실한 정체성</mark>**을 심어줄 거예요. 그 정체성이 바로 **<mark>밝은 3도, E</mark>**예요.

메이저 사운드가 "밝다"고 느껴지는 이유의 99%는 이 3도(E) 덕분이에요. 마이너는 어두운 b3(C)로 착지해서 쓸쓸하고, 메이저는 밝은 3도(E)로 착지해서 화사하죠. 근데 어제처럼 음을 상하행으로 주르륵 나열하면 이 E가 그냥 "지나가는 음 7개 중 하나"로 묻혀버려요. 그래서 오늘도 무기는 **<mark>3도 인터벌</mark>**이에요. 스케일에서 바로 옆 음을 건너뛰고 그 다음 음으로 폴짝 뛰는 거요.

3도로 뛰면 마법이 생겨요. C에서 뛰면 E, D에서 뛰면 F, E에서 뛰면 G… 이렇게 **<mark>뛰는 착지점마다 코드톤(C·E·G)이 자꾸 걸려요</mark>.** 특히 C→E 점프는 그 자체가 "루트에서 밝은 3도로 가는" <mark>C 메이저의 핵심 동작</mark>이에요. 오늘은 이 C→E 점프를 손이 노래처럼 기억하게 만들고, 마지막엔 E를 길게 늘여 착지하는 감각까지 붙일 거예요.

## ② 시각 자료

C 메이저 포지션이에요. 어제랑 똑같은 지판인데, 오늘은 **<mark>C 메이저 관점 도수만</mark>** 붙였어요. 루트 **C**와, 오늘의 주인공 밝은 3도 **E**를 강조했어요.

```json
{
  "id": "m2.w6.d2.c_major_shape",
  "type": "scale_shape",
  "meta": {
    "title": "C major position — root C & bright 3rd E highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "scale": "C major (Ionian)",
    "tempoBpm": 84
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "6", "role": "scale" },
      { "string": 6, "fret": 7, "finger": 3, "label": "7", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "2", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "4", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "6", "role": "scale" },
      { "string": 3, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "4", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "6", "role": "scale" },
      { "string": 1, "fret": 7, "finger": 3, "label": "7", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

오늘의 본체, <mark>C 메이저 3도 인터벌 상행 시퀀스</mark>예요. C→E, D→F, E→G… 폴짝폴짝 뛰다가 마지막에 밝은 3도 **E**를 길게 늘여 착지해요.

```json
{
  "id": "m2.w6.d2.c_major_third_interval",
  "type": "tab",
  "meta": {
    "title": "C major 3rd-interval line resolving to bright 3rd (E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 84
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "6", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "half", "technique": "vibrato", "label": "3(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 84)**
메트로놈 84에 맞춰 3도 인터벌 상행 시퀀스를 6번 줄부터 1번 줄까지. 8분음표 두 개가 "폴-짝" 한 세트예요. <mark>C→E 점프가 나올 때마다 살짝 더 또렷하게</mark>. 손가락이 꼬이면 80으로 잠깐 내렸다가 다시 올려도 괜찮아요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = E / 밝은 3도)**
메트로놈 끄고, 지판에서 **<mark>E만</mark>** 찾아 짚어요. 5번 7프렛, 2번 5프렁 — 이 두 군데. 짚을 때마다 "이-(E)!" 소리 내서 부르고, 바로 옆 4도 F(2번 6프렛)와 헷갈리지 않게 확실히 구분. 그다음 아무 음이나 짚다가 <mark>무조건 E로 퇴근하는 걸</mark> 3분간. E에 도착할 때마다 "밝다"는 느낌을 의식적으로 각인시켜요.

**20~40분 · 실전 즉흥 (C 메이저 원코드 백킹 / 80~84 BPM)**
"C major backing track" 하나 틀어요. 규칙 하나: **<mark>3도로만 뛰어다니고, 프레이즈를 끝낼 땐 반드시 E에 착지</mark>.** 붙여 치기 금지, 무조건 한 칸 건너뛰기. E에 착지해서 살짝 비브라토까지 걸어보면 그 화사한 느낌이 확 살아요. 이게 "밝은 3도 착지"의 첫 손맛이에요.

**40~50분 · 녹음/피드백 (권장)**
30초 녹음 후 재생. 체크 포인트: **<mark>착지한 E의 음정이 흔들리지 않고 딱 짚였는지</mark>**, 그리고 3도 점프에서 중간 음을 실수로 같이 긁지 않았는지. 잡음이 섞이면 피킹 안 하는 현을 오른손 바닥으로 살짝 뮤트하는 습관을.

**오늘의 완료 기준:** BPM 84에서 C 메이저 3도 상행 시퀀스를 1번 줄까지 끊김 없이. 백킹 위에서 3도 점프만으로 8마디 채우고 E에서 비브라토로 마무리.

## ④ 팁 / 흔한 실수

- **E 대신 C(루트)로만 착지.** 루트 착지는 안전하지만 "밝은" 맛이 안 나요. 오늘은 일부러 3도(E)로 착지하는 연습이에요. 루트는 든든하고, 3도는 화사하다 — 이 차이를 몸으로 느끼는 게 목표예요.
- **F(4도)에서 멈추기.** E 바로 옆이라 자꾸 한 프렛 밀려 F에 착지하면 소리가 붕 떠서 "안 풀린" 느낌이 나요. 착지 직전 프렛을 눈으로 한 번 확인하는 습관을.
- **3도의 중간 음을 같이 침.** 3도의 핵심은 중간 음을 **비우는** 것. 비어야 점프의 세련된 맛이 살아요. 붙여 치면 어제 나열로 돌아간 거예요.
- **점프할 때 손 전체가 흔들림.** 검지(5프렛)를 앵커로 고정하고 나머지 손가락만 움직이세요. 특히 3번↔2번 줄을 오가는 C→E 점프에서 손이 흔들리면 착지 정확도가 무너져요.
