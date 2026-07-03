---
title: "펜타 3번 블록 각인 + 2번↔3번 슬라이드 연결"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 세 번째 집, 3번 블록 그리고 두 번째 다리

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 1번↔2번 다리를 놓으면서 느꼈을 거예요. "아, 지판이 한 칸씩 이어지는구나." 근데 두 블록만으로는 아직 넥의 절반도 못 써요. 오늘은 한 칸 더 위, **3번 블록(9~13프렛)**으로 올라갑니다. 이 블록이 익숙해지면 넥 중앙(12프렛 근처)까지 너의 놀이터가 돼요.

3번 블록엔 반가운 얼굴이 하나 있어요. 근음 A가 **5번 줄 12프렛**에 딱 앉아 있거든요. 12프렛은 지판의 정중앙, 점(인레이)이 두 개 찍힌 그 자리예요. 눈으로 찾기가 아주 쉬워요. 그래서 3번 블록은 위치 각인이 은근 편해요. "12프렛 = A" 이 하나만 잡으면 나머지가 그 주변에 딸려 와요.

그리고 오늘의 다리. 어제는 4번 줄에서 A→C로 슬라이드했죠? 오늘 2번↔3번 연결은 **2번 줄(B현)**을 씁니다. 2번 블록의 A(2번 줄 10프렛)를 짚고 **13프렛까지 슬라이드**하면, 도착음이 바로 C(♭3)예요. 또 타겟 착지죠. 재밌는 게, 블록이 바뀌어도 우리가 노리는 음은 언제나 똑같은 C라는 거예요. 넥 위 위치만 바뀔 뿐, **"코드의 3도에 착지한다"는 원칙은 3개월 내내 단 한 번도 안 바뀌어요.** 오늘은 그 원칙을 3번 블록에서 다시 한번 확인하는 날이에요.

## ② 시각 자료

3번 블록 지도예요. 근음 A가 5번 줄 12프렛(지판 정중앙)에 있는 걸 먼저 눈에 박으세요. 빨간 C(♭3)는 4번 줄 10프렛, 2번 줄 13프렛에 있어요.

```json
{
  "id": "m1.w2.d2.pentatonic_box3",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 3 (connects up from Box 2)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 72
  },
  "fretboard": {
    "startFret": 9,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 6, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 1, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 3, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

오늘의 연결 라인이에요. 2번 블록을 훑고 올라가다가, **2번 줄 A(10프렛)를 13프렛까지 슬라이드**해 3번 블록으로 진입해요. 도착음이 C(♭3)! 마지막엔 3번 블록 안에서 그 C에 다시 착지해 비브라토로 노래해요.

```json
{
  "id": "m1.w2.d2.box2_to_box3_slide",
  "type": "tab",
  "meta": {
    "title": "Box 2 -> Box 3 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 72
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 10, "duration": "quarter", "technique": "slide", "slideToFret": 13, "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 72)**
메트로놈 72로 3번 블록만 8분음표 상행/하행 각 1회. 시작 전에 **5번 줄 12프렛 A**를 검지로 짚고 "여기가 중심" 하고 세 번 소리 내요. 12프렛 인레이 두 점을 눈으로 확인하는 습관을 들이면 3번 블록은 절대 안 헤매요. 오늘도 상하행은 이 워밍업까지만.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C / ♭3, 2번 줄 다리)**
메트로놈 끄고 **2번 줄 A(10프렛) → C(13프렛) 슬라이드**만 20번 반복. 어제 4번 줄에서 했던 걸 이번엔 얇은 2번 줄에서 하는 거예요. 얇은 줄은 슬라이드가 미끄러워서 지나치기 쉬워요. 13프렛에 **딱** 멈추는 데 집중. 그다음, 3번 블록 안의 C 두 곳(4번 줄 10프렛, 2번 줄 13프렛)을 번갈아 짚으며 "씨! 씨!" 불러요. 3번 블록 어디에 C가 사는지 눈 감고 짚으면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 70~72 BPM)**
백킹을 틀고 규칙: **2번 블록에서 놀다가, 2번 줄 슬라이드로 3번 블록에 올라가 C(♭3)에 착지.** 어제 놓은 1번↔2번 다리와 오늘의 2번↔3번 다리를 이어서, 여유가 되면 **1번 블록 → 2번 블록 → 3번 블록**까지 한 번에 쭉 올라가 보세요. 넥을 절반이나 여행한 거예요. 끝은 언제나 C 착지.

**40~50분 · 녹음/피드백 (권장)**
30초 녹음 후 재생. 체크: 2번 줄 슬라이드 도착음이 13프렛에서 정확히 잡혔는지, 아니면 12나 14로 미끄러졌는지. 얇은 줄 슬라이드는 음정이 흔들리기 쉬우니, 도착음이 백킹의 Am과 "맞물려" 울리는지 귀로 확인하세요.

**오늘의 완료 기준:** 3번 블록 근음 A(5번 줄 12프렛)를 눈 감고 짚기. 2번 줄 A→C 슬라이드로 2번↔3번 블록을 오가며 C에 3회 이상 정확히 착지. (여유 시) 1→2→3번 블록 연속 상행 성공.

## ④ 팁 / 흔한 실수

- **12프렛 기준점을 안 쓰기.** 3번 블록에서 헤매는 사람은 대부분 12프렛 인레이를 안 봐요. 지판 정중앙 두 점 = A. 이 앵커 하나면 블록 전체가 딸려와요. 눈을 적극적으로 쓰세요.
- **얇은 줄 슬라이드 과속.** 2번 줄은 장력이 낮아서 손이 쭉 미끄러져 13프렛을 지나쳐요. 도착 직전에 살짝 브레이크. 어제 4번 줄보다 더 조심.
- **블록이 바뀌면 타겟도 바뀐다고 착각.** 아니에요. 1·2·3번 블록 어디에 있든 Am의 3도는 언제나 **C**예요. 위치만 다를 뿐 노리는 음은 동일. 이 일관성이 즉흥의 나침반이에요.
- **연결에 욕심내다 위치를 대충 넘김.** 3번 블록 근음 위치가 아직 흐릿한데 연결부터 급하게 붙이면 나중에 무너져요. 오늘은 "3번 블록 근음 각인"이 최소 합격선, 연결은 보너스라고 생각하세요.
