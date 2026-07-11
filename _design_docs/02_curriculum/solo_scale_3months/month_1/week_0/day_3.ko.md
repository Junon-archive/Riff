---
title: "Week 0 · Day 3 — Am 펜타 1박스 리프레시 → 3도 인터벌 첫 맛보기"
dayKey: m1.w0.d3
estMinutes: 50
i18nKey: lesson.m1.w0.d3
---

# Day 3 — Am 펜타토닉 1박스 위치 리프레시 + 3도 인터벌 맛보기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 우리가 앞으로 3개월 내내 살 **본진(本陣)**을 오늘 재정비하려고요. 바로 **<mark>A 마이너 펜타토닉 1박스</mark>(5프렛).** 이미 아는 폼이겠지만, 오늘은 "손이 기억하는 상하행"을 넘어서 그 안의 **<mark>각 음이 무슨 역할인지</mark>**까지 눈에 새길 거예요.

```json
{
  "id": "m1.w0.d3.am_pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 refresh (with roles)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "isRoot": true, "label": "R", "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

### 상하행은 '예열'이지 목표가 아니다

여기서 한 가지만 짚고 갈게요. 펜타 박스를 아래에서 위로, 위에서 아래로 왕복하는 상하행 연습, 사실 즉흥 실력에는 큰 도움이 안 돼요. 왜냐면 **음악에는 "6번줄부터 순서대로 올라가세요" 같은 <mark>규칙이 없거든요</mark>.** 상하행만 죽어라 하면 손은 "무조건 옆 음으로" 가는 관성만 익혀요. 그래서 즉흥 때 딱 그것밖에 안 나와요.

그래서 Week 0에서 **딱 손 푸는 용도로만 짧게** 허용하고, 오늘 바로 첫 번째 탈출구를 열어요. 그게 **<mark>3도 인터벌(음정)</mark>** 시퀀스예요.

### 3도 인터벌 = 한 칸 건너뛰기

펜타토닉을 "순서대로"가 아니라 **<mark>"한 음 건너뛰며"</mark>** 치는 거예요. Am 펜타 음은 낮은 쪽부터 **A – C – D – E – G – A…** 이렇게 가는데, 3도로 친다는 건:

- A에서 다음이 아니라 **한 칸 건너 → D**
- C에서 한 칸 건너 → **E**
- D에서 한 칸 건너 → **G**
- E에서 한 칸 건너 → **A**

이렇게 **<mark>"짝을 지어 건너뛰는"</mark>** 거예요. (참고: 펜타에서 이렇게 한 칸 건너뛰면 실제 음정은 단3도·장3도·4도가 섞여 나와요. 그래서 그냥 '3도 시퀀스'라고 통칭해요 — 음정 계산에 머리 아파하지 말고 "한 칸 건너뛰기"로 이해하면 됩니다.)

```json
{
  "id": "m1.w0.d3.third_interval_taste",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "3rd-interval taste in Am pentatonic (skip-one pairs, ascending)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "finger": 3, "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "finger": 1, "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "isRoot": true, "label": "R", "role": "root" }
      ]}
    ]
  }
}
```

이 한 끗 차이가 왜 중요하냐면요, 건너뛰는 순간 소리가 갑자기 **<mark>"멜로디처럼"</mark>** 들려요. 순차진행(상하행)은 계단이고, 3도는 살짝 도약이라서 귀가 "어, 뭔가 노래한다" 하고 반응하거든요. 이게 즉흥의 첫 재료예요.

## ② 시각 자료

**(a) A 마이너 펜타토닉 1박스 — 역할까지 표시**

```json
{
  "id": "m1.w0.d3.am_pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 refresh (with roles)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "isRoot": true, "label": "R", "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

**(b) 3도 인터벌 맛보기 — 낮은 줄부터 짝지어 건너뛰기**

```json
{
  "id": "m1.w0.d3.third_interval_taste",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "3rd-interval taste in Am pentatonic (skip-one pairs, ascending)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "finger": 3, "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "finger": 1, "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "isRoot": true, "label": "R", "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 60~72)**
- Day 2의 <mark>스파이더 워크 1-2-3-4</mark> 한 세트로 손 깨우기. 어제 도달한 BPM에서 시작.
- 완료 기준: 삑사리 없이 왕복 2회.

**10~20분 · 두뇌 훈련 (BPM 70) — 박스 리프레시 + 역할 확인**
- 위 (a) 박스를 상행–하행 딱 **네 바퀴만** (예열이니까 짧게!). 얼터네이트 피킹 유지.
- 그다음 중요한 것: 지판에서 **<mark>R(A) 3개</mark>**, **<mark>♭3(C) 3개</mark>** 위치만 콕콕 짚으며 "루트, 3도, 루트, 3도" 소리 내어 말하기.
- 완료 기준: 안 보고 R 3자리·♭3 3자리를 손이 바로 찾음.

**20~40분 · 실전 감각 (BPM 70, Am 백킹) — 3도 시퀀스 → 즉흥 연결**
- 먼저 위 (b) 3도 인터벌 타브를 BPM 70에서 또박또박. 처음엔 끊겨도 OK, 건너뛰는 소리에 귀를 여세요.
- 익으면 백킹을 틀고 **<mark>"상하행 반, 3도 반"</mark>**을 섞어 즉흥. 규칙: 프레이즈 끝은 되도록 **<mark>♭3(C)이나 R(A)에서 멈추기</mark>.**
- 완료 기준: 3도 도약이 한 번이라도 "멜로디처럼" 들리는 순간이 오면 성공.

**40~50분 · 녹음/피드백 (권장)**
- 3도 섞은 즉흥 40초 녹음. 체크 포인트: **"상하행만 할 때보다 노래처럼 들리는 구간이 생겼나?"**
- 좋았던 2초 구간이 있으면 그게 오늘의 수확이에요. 그 느낌을 기억해두세요.

## ④ 팁 / 흔한 실수

- **상하행에 다시 눌러앉지 마세요.** 손이 편하다고 상행–하행만 반복하면 오늘의 목적을 통째로 놓치는 거예요. 억지로라도 "건너뛰기"를 섞으세요.
- **3도 건너뛸 때 피킹이 엉킴** → 줄을 넘나들 때가 많아서 그래요. 처음엔 BPM 55까지 낮춰서 **현 이동 구간만** 따로 반복하세요.
- **♭3(C)의 매력을 흘려듣지 마세요.** Am에서 C는 그냥 스케일 음이 아니라 **코드의 3도(가이드톤)**예요. 여기서 멈출 때의 안정감을 몸으로 기억해두면, Month 1의 3도 착지 훈련이 훨씬 쉬워집니다.
- **너무 많은 걸 한 번에?** 오늘은 "박스 복습 + 건너뛰기 맛보기" 딱 두 개예요. 완벽히 안 돼도 괜찮아요. 맛만 보면 됩니다.
