---
title: "악센트 — 딱 한 자리만 세게 치면 그루브가 산다"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — 펑크의 '꿀렁'은 절제에서 나온다

## ① 이론/설명

펑크의 그 '꿀렁이는' 느낌, 아무 데나 세게 쳐서 나오는 게 아니에요. 오히려 반대예요. 대부분은 약하게 흘리고, **딱 1~2자리만 강세를 꽂을 때** 그루브가 살아나요. 이 강세가 바로 **악센트**예요.

악센트는 균일한 모터 위에서 특정 16비트 위치만 음량을 확 키우는 거예요. 열여섯 개를 다 세게 치면 그냥 시끄러운 소음이지만, 열다섯 개는 약하게, 한 개만 '팍' 하고 튀면 거기서 리듬의 무게중심이 생겨요. 걸을 때 한 발만 쿵 힘줘 밟으면 리듬이 생기는 것과 똑같아요. **대비가 곧 그루브**인 거죠.

오늘은 첫 단계로, **'한 박의 &'**(1-e-&-a에서 세 번째 조각)에 악센트를 넣어봐요. 아래 악보에서 초록으로 표시된 자리가 강세예요. 이 '&'에 무게를 실으면 박자가 살짝 앞으로 밀리는 듯한, 펑크 특유의 당기는 느낌이 나요.

처음엔 악센트를 주려다 다른 음까지 다 커지거나, 반대로 하나도 안 튀는 게 정상이에요. 한 음만 세게, 나머진 힘 빼는 컨트롤은 며칠 걸려요. 조급해 말고, 오늘은 '이 자리만 팍'이라는 감각 하나만 잡으면 돼요. 이 한 방이 나중에 백킹의 스네어와 겹치는 순간, 여러분의 그루브가 갑자기 살아 움직이기 시작할 거예요. 오늘은 그 '한 방'의 짜릿함을 처음 맛보는 날이에요. 딱 한 자리를 세게 쳤을 뿐인데 리듬이 확 살아나는 그 순간을 꼭 느껴보세요.

## ② 시각 자료

오늘의 강세는 '한 박의 &'예요. 아래 다이어그램의 초록 자리를 그 순간에만 세게 칩니다.

**고음 E 스탭(강세 위치).** 2·3번 줄 그 자리. 평소엔 약하게, 초록으로 표시된 '&' 순간에만 '팍' 하고 세게.

```json
{
  "id": "m1.w3.d1.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string) — accent position", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — '&'에 악센트(1마디).** 각 박의 세 번째 조각(&)만 강세(초록), 나머진 약한 고스트. 네 번의 '팍'이 그루브를 만들어요.

```json
{
  "id": "m1.w3.d1.accent_and",
  "type": "tab",
  "meta": { "title": "Accent on the '&' (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66.** '치-치-팍-치'를 입으로 세며 4번. 초록 자리만 튀고 나머진 죽는지 확인.

**예제 2 — 백비트 악센트(2마디).** 강세를 2·4박의 '&'에만. 드럼 스네어처럼 뒤쪽에서 '팍'이 걸려요.

```json
{
  "id": "m1.w3.d1.accent_back",
  "type": "tab",
  "meta": { "title": "Accent as backbeat (& of 2 and 4, 2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66.** 2·4박에서만 강세. 백킹의 스네어와 겹쳐보면 딱 맞물려요. 4번 반복.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 균일한 고스트 위에 아무 자리나 악센트 하나를 '팍' 얹어보며 강약 컨트롤 워밍업.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = & 강세)**
입으로 "치-치-팍-치"처럼 악센트 자리를 정확히 세요. '&'에 무게가 실리는 느낌을 머리에 그립니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 66)**
**예제 1**('&' 악센트)을 BPM 66에서 4번 → **예제 2**(백비트 악센트)로. 초록 한 자리만 튀고 나머진 약한지가 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 악센트 한 자리만 튀는가 / 나머지가 약하게 흘러가는가 / 강세가 박에 정확한가.

**오늘의 완료 기준:** 균일한 모터 위에서 '한 박의 &'에만 악센트를 정확히 꽂아, 그 자리만 튀고 나머진 약하게 흘릴 수 있다.

## ④ 팁 / 흔한 실수

- **다 같이 커짐.** 악센트를 주려다 앞뒤 음까지 커지면 대비가 죽어요. 딱 한 음만 세게.
- **악센트가 안 튐.** 나머지가 너무 세서 강세가 안 도드라져요. 배경을 더 약하게.
- **오른손이 멈춤.** 강세에 신경 쓰다 모터가 끊겨요. 흔들림은 계속, 힘만 실었다 뺐다.
- **속도 욕심.** 대비가 안 들리면 소용없어요. 느리게, 초록만 '팍'.
