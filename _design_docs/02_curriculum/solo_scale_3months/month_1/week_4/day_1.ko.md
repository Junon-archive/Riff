---
title: "블루노트(♭5) 입문 + 정확한 음정 벤딩 주법"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — ♭5, 그 '한 음'이 펜타토닉을 블루스로 바꾼다

## ① 이론/설명

오늘 왜 이걸 하냐면요. 지난 3주 동안 우리가 씹어 먹은 A 마이너 펜타토닉은 사실 아주 착한 스케일이에요. 어디를 짚어도 안 틀리거든요. 근데 문제는 바로 그거예요. 안 틀리니까 **밋밋해요.** "블루스답다", "찐하다" 하는 그 눅진한 색이 안 나와요. 그 색을 딱 한 음이 만들어요. 바로 **♭5(A 기준으로 E♭)** — 블루노트예요.

♭5는 정식 스케일 음이 아니에요. 4도(D)와 5도(E) 사이에 **일부러 낀 반음짜리 불협화음**이에요. 근데 이 삐딱한 음을 잠깐 스치듯 지나가면, 귀가 "어? 불안한데... 아 풀렸다" 하고 안도해요. 그 긴장→해소가 블루스의 심장이에요. 그래서 오늘부터 규칙 하나 추가할게요. **♭5는 목적지가 아니라 경과음이다.** 거기 눌러앉으면 그냥 틀린 음처럼 들려요. 4→♭5→5로 **스쳐 지나가거나**, ♭5로 미끄러졌다가 곧바로 ♭3(C)이나 근음(A)으로 빠져나와야 살아요.

그리고 오늘의 진짜 메인 이벤트. 그동안 우리가 벤딩을 은근슬쩍 "쓰기"만 하고 안 가르쳤잖아요? 오늘 제대로 배워요. 벤딩은 그냥 줄을 미는 게 아니에요. **정확한 음정까지 밀어 올리는** 거예요. 핵심 3가지만 기억하세요.

1. **레퍼런스 먼저 → 귀로 대조.** 벤딩으로 도착할 목표음(예: 5도 E)을 먼저 다른 자리에서 **띵 하고 쳐서 귀에 심어요.** 그다음 벤딩해서 그 높이에 정확히 맞춰요. 눈이 아니라 귀가 심판이에요. 목표음과 벤딩음이 "같은 높이"로 겹쳐 들리면 성공.
2. **보조 손가락으로 받쳐서 밀기.** 약지로 벤딩할 땐 그 뒤에 중지·검지를 **같은 줄에 나란히 대고 셋이서** 밀어요. 손가락 하나로 낑낑대면 음정이 부정확하고 손도 금방 지쳐요. 힘을 나눠 미는 게 정확도의 비결이에요.
3. **반음(half) vs 온음(full) 구분.** 반음 벤딩은 살짝, 온음 벤딩은 한 프렛만큼 더 크게 밀어 올려요. 오늘 배울 꿀조합: **4도(D)를 반음만 밀면 → ♭5(E♭)** 가 나와요. 즉 벤딩만으로 블루노트를 '만들어낼' 수 있어요. 온음까지 다 밀면 5도(E)가 되고요.

정리하면, 오늘은 ♭5의 위치를 1번 블록에서 찾고, 그 ♭5를 **정확한 벤딩으로 소리 나게** 만드는 날이에요.

## ② 시각 자료

A 블루스 스케일 1번 블록이에요. 펜타토닉 5음에 **♭5(보라 강조)** 두 자리가 새로 꼈어요 — 5번 줄 6프렛, 3번 줄 8프렛. 이 둘이 오늘의 주인공이에요.

```json
{
  "id": "m1.w4.d1.a_blues_scale_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A blues scale — Box 1 (pentatonic + b5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

오늘의 벤딩 미니레슨 프레이즈예요. 1마디는 **레퍼런스(5도 E)를 먼저 치고 → 4도(D)를 온음 벤딩해 그 높이에 맞추는** 훈련. 2마디는 **4도를 반음만 벤딩해 ♭5 블루노트를 만들었다가** 풀어서 ♭3으로 착지하고 근음에 비브라토로 마무리해요.

```json
{
  "id": "m1.w4.d1.accurate_bend_phrase",
  "type": "tab",
  "meta": {
    "title": "Accurate bending — full bend to 5 (match reference) & half bend to b5",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "5(ref E)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "half", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 70)**
메트로놈 70에 맞춰 A 블루스 스케일 1번 블록을 4연음(16분) 상행으로 한 바퀴. 단, 지난주랑 다른 점 하나 — **♭5(5번 줄 6프렛, 3번 줄 8프렛)를 지날 때마다 절대 눌러앉지 말고 스쳐 지나가기.** "4-♭5-5" 세 음을 한 호흡에 흘려요. 뭉치면 BPM 65로.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = ♭5 두 자리)**
메트로놈 끄고, 1번 블록에서 **♭5만** 찾아 짚으세요. 5번 줄 6프렛, 3번 줄 8프렛 — 딱 두 군데. 짚을 때마다 "이 음은 경과음, 오래 못 있어" 하고 소리 내 말하며 곧바로 옆 5도나 ♭3으로 빠져나오는 동작까지 붙여서 연습. 눈 감고 두 자리를 짚을 수 있으면 통과.

**20~40분 · 실전 즉흥 (Am7 원코드 백킹 / 65~70 BPM) + 벤딩 정확도 집중**
유튜브·앱에서 "Am7 blues backing track slow" 하나 틀어요. 오늘의 미션은 딱 하나: **벤딩 정확도.** 백킹 위에서 위 프레이즈를 반복하되, 온음 벤딩(4→5) 할 때마다 **먼저 2번 줄 5프렛(E)을 띵 쳐서 목표 높이를 귀에 심고**, 그 높이에 벤딩을 정확히 겹쳐요. 약지로 밀 땐 중지·검지를 뒤에 나란히 대서 셋이 함께 밀기. 반음 벤딩(4→♭5)도 섞어 블루노트를 '만들어' 보세요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모 OK)으로 벤딩 프레이즈를 30초만 녹음. 다시 들으며 딱 한 가지 — **벤딩음이 목표 음정에 정확히 닿았는지.** 못 미쳤으면(음정이 낮으면) 손가락 힘이 부족한 거고, 지나쳤으면 과하게 민 거예요. 필요하면 재생 속도를 늦춰 벤딩이 도착하는 순간을 귀로 확대해서 확인하세요.

**오늘의 완료 기준:** 1번 블록 ♭5 두 자리를 눈 감고 짚기. 온음 벤딩(4→5)을 레퍼런스 E와 겹쳐 정확히 맞추기 5회 이상. 반음 벤딩으로 ♭5 만들기 성공.

## ④ 팁 / 흔한 실수

- **♭5에 눌러앉기.** 오늘 최대 실수예요. ♭5는 오래 머무는 순간 "틀린 음"이 돼요. 반드시 스쳐 지나가거나 곧장 ♭3·5·R로 빠져나오세요. 긴장은 짧게, 해소는 확실히.
- **벤딩을 손가락만으로 낑낑.** 벤딩은 손가락 힘이 아니라 **손목·팔뚝의 회전**으로 미는 거예요. 문고리 돌리듯 손목을 살짝 돌리고, 보조 손가락 2개를 뒤에 받쳐서 셋이 함께. 손가락 하나로 밀면 음정이 절대 안 맞아요.
- **목표음을 안 정하고 그냥 밀기.** "얼마나 밀지"를 귀로 미리 정하지 않으면 매번 음정이 들쭉날쭉해요. 온음이면 온음, 반음이면 반음 — 도착점을 먼저 머릿속에 띄우고 미세요. 레퍼런스 음을 먼저 치는 습관이 벤딩 정확도의 90%예요.
- **엄지 위치.** 벤딩할 땐 넥 뒤 엄지를 넥 위로 살짝 걸쳐 잡으면 지렛대가 생겨서 훨씬 안정적으로 밀려요. 클래식 폼(엄지 뒤쪽 중앙)만 고집하면 손목이 힘들어요.
