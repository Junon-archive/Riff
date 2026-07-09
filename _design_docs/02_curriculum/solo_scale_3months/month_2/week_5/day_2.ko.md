---
title: "2도(B) 추가 — B를 경유해 3도(C)로 착지하는 4연음"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — 펜타에 'B'라는 다리 하나 놓기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제까지 우리가 쓴 펜타토닉엔 A와 C 사이가 **뻥 뚫려** 있었어요. 근음 A(6번 5프렛)에서 다음 음 C(6번 8프렛)로 가려면 세 프렛을 훌쩍 건너뛰어야 했죠. 이 틈이 펜타토닉 특유의 시원한 맛을 주긴 하는데, 매번 훌쩍 뛰기만 하면 솔로가 좀 **<mark>딱딱하고 계단식</mark>**으로 들려요. 그래서 오늘 그 틈에 다리 하나를 놓을 거예요. 바로 A와 C 사이의 **<mark>B(2도)</mark>** 예요.

여기서 중요한 원칙 하나. B는 **<mark>주인공이 아니라 다리(경과음)</mark>** 예요. B에 눌러앉으면 Am 위에서 붕 뜬 소리가 나요 — B는 Am 코드톤(A·C·E)이 아니거든요. 그래서 B는 반드시 **<mark>지나가는 음</mark>**으로만 써요. A에서 출발해 B를 슬쩍 밟고 → 곧바로 C(♭3, 코드톤 3도)에 착지. 이 "A-B-C"의 흐름이 오늘의 전부예요. B는 C로 데려다주는 순간 존재 이유를 다하는 거죠. 어제 C를 홈베이스로 각인시킨 이유가 바로 이거예요.

연습 방식은 **<mark>4연음(16분음표 4개 묶음)</mark>** 이에요. 3도 인터벌이 "건너뛰기"라면, 4연음은 "촘촘하게 채우기"예요. B가 새로 들어오면서 A-B-C가 붙어버렸으니, 이제 촘촘한 16분으로 굴려도 음이 뭉치지 않고 흘러요. 오늘부터 지판 위 B의 좌표를 확실히 외워두세요 — 1폼 기준 **6번 줄 7프렛**과 **1번 줄 7프렛**, 딱 두 자리예요. 이 두 B가 각각 바로 옆(한 프렛 위)의 C로 미끄러져 들어가는 그림을 눈에 새기면 됩니다.

```json
{
  "id": "m2.w5.d2.pentatonic_add_2nd",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 2nd (B) as passing tone to b3 (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
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
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

## ② 시각 자료

펜타토닉 1폼에 **<mark>B(2도, 초록 강조)</mark>** 두 자리가 새로 꼈어요 — 6번 줄 7프렛, 1번 줄 7프렛. 각각 바로 위 C(♭3, 초록)로 흘러들어가는 다리예요.

```json
{
  "id": "m2.w5.d2.pentatonic_add_2nd",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 2nd (B) as passing tone to b3 (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
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
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

오늘의 4연음 드릴이에요. **A-B-C** 를 반복해 굴리며 <mark>B를 밟고 C에 도착하는 감각</mark>을 만들고, 마지막은 C에 길게 착지해요.

```json
{
  "id": "m2.w5.d2.b_passing_to_third_4note",
  "type": "tab",
  "meta": {
    "title": "4-note sequence: 2nd(B) passing tone resolving to Am 3rd (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 80)**
메트로놈 80에 맞춰 **<mark>어제의 3도 인터벌 시퀀스</mark>**로 손을 먼저 풀어요. 5분. 그다음 5분은 오늘의 4연음 A-B-C 드릴을 저속으로. 한 박에 16분 4개("딴다다다")가 클릭 하나에 정확히 떨어지게. 뭉치면 BPM 70으로.

```json
{
  "id": "m2.w5.d2.b_passing_to_third_4note",
  "type": "tab",
  "meta": {
    "title": "4-note sequence: 2nd(B) passing tone resolving to Am 3rd (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10~20분 · 두뇌 훈련 (오늘의 타겟 = B 두 자리)**
메트로놈 끄고, 1폼에서 **<mark>B(2도)만</mark>** 찾아 짚으세요. 6번 줄 7프렛, 1번 줄 7프렛 — 딱 두 군데. 짚을 때마다 "이건 다리, 못 머물러" 하고 소리 내 말하면서 **<mark>곧바로 한 프렛 위 C로 미끄러져</mark>** 나오는 동작까지 붙여요. 눈 감고 두 B를 짚고 각각 C로 해결하면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 75~80 BPM)**
"Am backing track"을 틀고, 규칙은 딱 하나: **<mark>B를 쓸 때마다 반드시 C로 해결하기</mark>.** B에서 프레이즈를 끝내는 건 금지예요. A-B-C를 씨앗 모티프로 삼아, 위치만 옮겨가며 변주해 보세요. 어제 배운 3도 짝 사이사이에 A-B-C를 슬쩍 끼워 넣는 것도 좋아요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 잼 30초 녹음. 다시 들으며 딱 하나 체크: **<mark>B가 붕 뜬 채 끝난 순간이 있는지</mark>.** B로 끝나서 "어? 안 풀렸네" 싶은 데가 있으면 표시해두고, 다음엔 그 자리를 C로 마무리하세요. 필요하면 재생 속도를 늦춰 B→C 타이밍을 귀로 확대해서 확인.

**오늘의 완료 기준:** B 두 자리를 눈 감고 짚기, 4연음 A-B-C 드릴을 BPM 80에서 끊김 없이, 잼에서 모든 B를 C로 해결하기.

## ④ 팁 / 흔한 실수

- **B에 눌러앉기.** 오늘 최대 실수예요. B는 Am 코드톤이 아니라서, 오래 머무는 순간 "틀린 음"처럼 붕 떠요. 반드시 스쳐서 C로. 긴장은 짧게, 해소는 확실히.
- **B를 근음처럼 착각.** B는 A 바로 위 음이라 근음 A랑 소리가 헷갈릴 수 있어요. 근음은 어디까지나 A(6/5, 4/7, 1/5). B는 그냥 A와 C를 잇는 다리일 뿐, 절대 홈베이스가 아니에요.
- **손가락 배치 무너짐.** 6번 줄에서 5-7-8프렛을 각각 1-3-4번 손가락으로. 7프렛을 2번 손가락으로 잡으면 8프렛 C가 멀어져서 A-B-C가 뚝뚝 끊겨요. 1-3-4를 지키면 세 음이 매끄럽게 흘러요.
- **16분 뭉개기.** A-B-C가 붙어 있으니 빨리 굴리고 싶겠지만, 뭉치면 다리가 아니라 미끄럼틀이 돼요. 알갱이가 살아있게, 필요하면 70으로 낮춰서 또렷하게.
