---
title: "E9 — 펑크의 상징, 9도가 주는 그 색"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — 드디어 진짜 코드, E9를 잡는다

## ① 이론/설명

지난 3주, 우리는 오른손과 왼손의 '리듬'만 팠어요. 소리는 대부분 죽은 '치'와 '퍽'뿐이었죠. 오늘 드디어 **진짜 코드**를 잡습니다. 펑크의 상징, **E9**예요.

E9는 E 도미넌트7(E·G#·D)에 **9도(F#)** 를 하나 더 얹은 코드예요. 그 9도가 바로 펑크 특유의 '찰랑하고 세련된' 색을 줘요 — 아래 다이어그램에서 노랑으로 표시된 음이 그 주인공이에요. 근음은 5번 줄 7프렛에 있고, 검지로 5·3번 줄을 살짝 눌러 잡으면 돼요. 6번과 1번 줄은 확실히 뮤트하고요.

오늘의 미션은 이 E9로 **1주차의 16비트 모터를 다시 얹는 것**이에요. 지난 3주간 만든 리듬 엔진에, 드디어 '진짜 소리'라는 연료를 붓는 셈이죠. 이제 오른손이 흔들 때마다 죽은 스크래치가 아니라 E9의 그 세련된 화음이 울려요. 벌써 '펑크답다'는 느낌이 확 올 거예요.

네 줄을 한 번에 누르는 게 처음엔 뻑뻑하고, 어떤 줄은 소리가 안 날 수도 있어요. 당연해요. 손가락에 힘이 자리 잡는 데 며칠 걸려요. 오늘은 완벽한 코드음보다, E9를 잡은 채로 오른손 모터가 안 멈추는 것에 집중하세요. 코드 하나로 몇 분을 끌 수 있다는 펑크의 마법이 여기서 시작돼요. 지난 3주가 '리듬 연습'이었다면, 오늘부터는 '음악'이에요. E9 하나 잡았을 뿐인데 방 안 공기가 달라지는 걸 느껴보세요.

## ② 시각 자료

오늘의 주인공, E9예요. 노랑이 9도(F#) — 펑크의 그 색을 만드는 음이에요.

**E9(펑크 코드).** 근음은 5번 줄 7프렛. 파랑=근음·코드톤(3도·b7), 노랑=9도. 6·1번 줄은 확실히 뮤트.

```json
{
  "id": "m1.w4.d1.e9_form",
  "type": "fretboard_diagram",
  "meta": { "title": "E9 — the funk chord (root on 5th string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 6, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 7, "finger": 2, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — E9 16비트 모터(1마디).** 각 박 머리에 E9를 울리고 나머진 고스트. 1주차 모터에 진짜 코드를 얹은 거예요.

```json
{
  "id": "m1.w4.d1.e9_motor",
  "type": "tab",
  "meta": { "title": "E9 16th motor (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66.** E9를 잡은 채 오른손은 계속 흔들어요. 박마다 코드가 또렷이 울리는지 확인하며 4번.

**예제 2 — 엇박의 E9(2마디).** 코드를 박이 아니라 '&'에 울려요. 살짝 밀린 E9가 펑크답게 당겨져요.

```json
{
  "id": "m1.w4.d1.e9_offbeat",
  "type": "tab",
  "meta": { "title": "E9 on the off-beat (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66.** 코드가 엇박에 걸리는 느낌을 즐기며 4번. 나머진 고스트로 흘려요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. E9를 잡았다 뗐다 하며 네 줄이 다 깨끗이 울리는지 점검. 6·1번 줄 뮤트도 확인.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = E9 폼)**
E9를 잡은 채 눈을 감고 각 줄을 하나씩 튕겨 소리를 확인해요. 어느 줄이 죽는지 찾아 손가락 각도를 조절합니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 66)**
**예제 1**(E9 모터)을 BPM 66에서 4번 → **예제 2**(엇박 E9)로. E9를 잡은 채 오른손 모터가 안 멈추는 게 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: E9 네 줄이 깨끗이 울리는가 / 6·1번 줄이 뮤트됐는가 / 오른손이 안 멈췄는가.

**오늘의 완료 기준:** E9를 깨끗이 잡은 채로 16비트 모터를 유지하며, 박마다 코드를 또렷이 울릴 수 있다.

## ④ 팁 / 흔한 실수

- **어떤 줄이 죽음.** 손가락 각도가 눕거나 다른 줄을 건드린 거예요. 손끝을 세워 각 줄을 정확히.
- **6·1번 줄이 울림.** E9는 4줄만. 남는 줄이 울리면 지저분해요. 검지 끝·손바닥으로 뮤트.
- **코드 잡느라 모터 멈춤.** 코드에 신경 쓰다 오른손이 서면 안 돼요. 흔들림은 계속.
- **속도 욕심.** 코드가 깨끗해야 그루브가 살아요. 느리게, 네 줄이 다 울리게.
