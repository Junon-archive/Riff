---
title: "고스트 노트 — 음이 없는데 그루브가 산다"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — '퍽' 소리가 그루브를 만든다

## ① 이론/설명

펑크 그루브의 진짜 비밀은 '치는 음'이 아니라 '안 치는 소리'에 있어요. 이름하여 **고스트 노트**예요.

고스트 노트는 왼손 힘을 쭉 뺀 채 줄에 손가락을 살짝 얹기만 하고 치는 거예요. 그러면 음정이 울리지 않고 '퍽' 또는 '치' 하는 음정 없는 타악 소리만 나요. 드럼으로 치면 하이햇 같은 거예요 — 멜로디가 아니라 리듬의 결을 채우는 소리죠.

펑크의 그루브는 바로 이 **실제음과 고스트의 대비**에서 나와요. 왼손을 꾹 눌러 또렷이 울리는 '따'와, 힘을 빼서 퍽 하고 죽는 '치'. "따-치-치-따"처럼 둘이 번갈아 나오면, 밋밋하던 16비트가 갑자기 드럼처럼 꿀렁이기 시작해요. 오른손 모터는 1주차 그대로예요. 달라지는 건 딱 하나, **왼손의 압력** — 눌렀다(따), 뺐다(치)를 오가는 거죠.

처음엔 고스트가 너무 크게 울려버리거나, 반대로 아예 소리가 안 나는 게 정상이에요. 압력을 '딱 죽을 만큼만' 빼는 감각은 며칠 걸려요. 조급해하지 마세요. 오늘은 같은 자리에서 '따'와 '치'의 소리 차이를 귀로 또렷이 구분하는 것, 그거 하나면 충분해요. 이 '따'와 '치'의 대비 하나가 손에 붙는 순간, 여러분의 스트로크는 더 이상 밋밋한 코드가 아니라 리듬을 연주하는 타악기로 바뀌기 시작해요. 오늘은 그 첫 단추만 꿰면 됩니다.

## ② 시각 자료

같은 손 위치에서 왼손 압력만 바꿔 소리를 대비해요. 아래 예제에서 **음표(파랑)는 실제음 '따'**(왼손 꾹), 뮤트 처리된 음은 고스트 '치'(힘 빼기)예요.

**예제 1 — 따-치-치-치(1마디).** 각 박의 첫 조각만 실제음, 나머지 셋은 고스트. 실제음이 박을 또렷이 짚어줘요.

```json
{
  "id": "m1.w2.d1.contrast_1bar",
  "type": "tab",
  "meta": { "title": "Real vs ghost — contrast (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 64, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 64.** '따-치-치-치'를 입으로 세며 4번. 실제음('따')과 고스트('치')의 소리 차이가 또렷한지 귀로 확인.

**예제 2 — 엇박의 실제음(2마디).** 실제음을 박이 아니라 '앤(&)' 자리에 둬요. 살짝 밀린 '따'가 그루브를 꿀렁이게 해요.

```json
{
  "id": "m1.w2.d1.ghost_offbeat",
  "type": "tab",
  "meta": { "title": "Real on the off-beat (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 64, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 64.** '치-치-따-치'. 실제음이 엇박에 걸리는 느낌을 즐겨보세요. 4번 반복.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 왼손을 줄에 얹고 힘을 뺀 채 16비트 고스트 스크래치를 기계적으로 반복. 오른손 모터는 1주차 그대로.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 따/치 구분)**
입으로 "따-치-치-따"처럼 실제음과 고스트를 구분해 소리 내며 박을 쪼개요. 왼손 압력을 언제 주고 뺄지 미리 정합니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 64)**
**예제 1**(따-치-치-치)을 BPM 64에서 4번 → **예제 2**(엇박 실제음)로. 실제음과 고스트의 대비가 들리는지가 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 고스트가 음정 없이 '퍽'으로 깔끔히 났는가 / 실제음과 대비가 들리는가 / 오른손이 멈추지 않았는가.

**오늘의 완료 기준:** 같은 손 위치에서 왼손 압력만으로 실제음('따')과 고스트('치')를 또렷이 구분해 낼 수 있다.

## ④ 팁 / 흔한 실수

- **고스트가 너무 울림.** 왼손 힘이 덜 빠진 거예요. 짚는 게 아니라 '얹기만'. 음정이 새어 나오면 실패.
- **고스트가 아예 안 남.** 오른손이 줄을 안 건드렸거나 왼손이 줄에서 떴어요. 손가락은 줄에 닿아 있어야 '퍽'이 나요.
- **오른손이 멈춤.** 실제음만 신경 쓰다 모터가 끊겨요. 왼손이 뭘 하든 오른손은 계속.
- **속도 욕심.** 대비가 안 들리면 아무 소용 없어요. 느리게, 따/치가 또렷하게.
