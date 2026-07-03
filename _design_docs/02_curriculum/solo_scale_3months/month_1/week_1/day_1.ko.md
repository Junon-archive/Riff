---
title: "Am 펜타 1번 블록 각인 + 4연음 시퀀스 (저속)"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — 1번 블록을 손이 아니라 '귀'에 새기기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 여기서 한 가지만 짚고 갈게요. 지금까지 펜타토닉 1번 블록은 아마 백 번쯤 쳐보셨을 거예요. 그런데 사실 손에 익은 것과 지판을 제대로 외운 건 조금 달라요. 상행-하행으로 라라라라 올라갔다 내려오는 거요. 그건 지판을 외운 게 아니라 **손가락 근육이 관성으로 굴러가는** 거예요. 즉흥이 안 되는 이유가 바로 여기 있어요. 곡 위에서 "자, 이제 마음대로 쳐봐" 하면 손은 그 관성 트랙만 왕복하거든요.

그래서 오늘부터는 규칙을 하나 정할게요. **상하행 단순 반복은 금지.** 대신 4연음(16분음표 4개 묶음) 시퀀스로 블록을 씹어 먹을 거예요. 왜 4연음이냐면, 블록을 "위→아래 한 방향"이 아니라 "네 칸씩 앞으로 갔다가 한 칸 물러서서 다시" 하는 식으로 접근하면, 뇌가 각 음의 위치를 **개별 좌표로** 기억하기 시작해요. 관성이 깨지는 거죠.

기억할 좌표는 딱 A 마이너 펜타토닉 5음이에요: **A(근음) · C(♭3) · D(4) · E(5) · G(♭7)**. 이 중에서 오늘 특별히 눈도장 찍을 음은 **C(♭3)**. 이게 Am 코드의 3도, 즉 앞으로 3개월 내내 "착지점"이 될 음이에요. 지금은 그냥 "아, C가 여기 여기 여기 빨간불이구나" 정도만 눈에 익혀두세요.

## ② 시각 자료

Am 펜타토닉 1번 블록 (5프렛 근음). 빨간 강조(♭3=C)가 앞으로의 타겟음이에요.

```json
{
  "id": "m1.w1.d1.pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 60
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

오늘의 핵심 무기, 4연음(16분음표) 상행 시퀀스예요. 1-2-3-4 / 2-3-4-5 / 3-4-5-6 … 이렇게 한 칸씩 밀면서 올라가요.

```json
{
  "id": "m1.w1.d1.four_note_sequence",
  "type": "tab",
  "meta": {
    "title": "4-note (16th) ascending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 60
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 60)**
메트로놈 60에 맞춰 4연음 시퀀스를 6번 줄부터 1번 줄 끝까지 상행만. 아직 하행은 안 해요. 한 박에 16분음표 4개, 즉 "딴다다다" 한 묶음이 정확히 클릭 한 번에 떨어지게. 얼터네이트 피킹(다운-업-다운-업) 고정.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C / ♭3)**
메트로놈 끄고, 지판 위에서 **C(♭3)만** 찾아 짚어보세요. 6번 8프렛, 3번 5프렛, 1번 8프렛 — 이 세 군데. 짚을 때마다 소리 내서 "씨!" 하고 불러요. 위치를 손이 아니라 이름으로 기억시키는 과정이에요. 3분 안에 세 군데를 눈 감고 짚을 수 있으면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 60~65 BPM)**
유튜브·앱 아무거나 "Am backing track slow"로 하나 틀어요. 규칙은 딱 하나: **4연음 시퀀스로 올라갔다가, 아무 데서나 멈추고 싶으면 반드시 C나 A에서 멈추기.** 아직 "멋진 프레이즈"는 신경 쓰지 말고, 관성 트랙이 아니라 시퀀스로 움직이는 감각만.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 마지막 잼을 30초만 녹음. 다시 들으면서 딱 한 가지만 체크: 16분음표 4개가 **뭉치지 않고 알갱이가 살아있는지**. 뭉쳤으면 내일은 BPM을 55로 낮춰도 괜찮아요.

**오늘의 완료 기준:** BPM 60에서 4연음 상행 시퀀스를 끊김 없이 1번 줄까지, C 세 군데를 눈 감고 짚기.

## ④ 팁 / 흔한 실수

- **관성 왕복 재발.** 나도 모르게 "라라라라" 상하행으로 돌아가고 있으면, 그건 뇌가 편한 길로 샌 거예요. 시퀀스가 헷갈려서 답답한 게 정상이고, 그 답답함이 바로 새 회로가 뚫리는 신호예요.
- **속도 욕심.** 60이 느려 보여도 절대 올리지 마세요. 이번 주 3일차에 올립니다. 오늘 빠르게 뭉개는 것보다 느리게 또렷한 게 100배 이득이에요.
- **♭3을 "그냥 한 음"으로 흘리기.** C는 앞으로 3개월의 주인공이에요. 짚을 때마다 살짝 더 세게, 살짝 더 오래. 지금부터 귀에 각인시켜 두면 나중에 코드톤 타겟팅이 거저먹기예요.
- **피킹 손 긴장.** 팔이 아니라 손목으로 얕게. 16분에서 팔로 치면 20분 만에 지쳐요.
