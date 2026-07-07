---
title: "커팅 파트 만들기 — 3줄 + 고스트 + 악센트"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 곡의 '벌스'가 될 커팅 덩어리를 짓다

## ① 이론/설명

오늘부터는 본격적으로 파트를 '빌딩'해요. 첫 번째는 **코드 기반 커팅 파트**예요. 5주차의 3줄 트라이어드 커팅에, 2·3주차의 고스트와 악센트를 얹어, 챌린지 트랙 위에 딱 맞는 한 덩어리를 완성합니다.

목표는 **4마디 정도의 '반복 가능한 덩어리'** 를 만드는 거예요. 곡으로 치면 '벌스'처럼, 계속 돌려도 질리지 않는 탄탄한 커팅 그루브죠. 재료는 이미 다 배웠어요 — 위 3줄만 청량하게 커팅(아랫줄은 왼손 뮤트로 죽이고), 그 사이를 고스트로 채우고, 2·4박 스네어 자리에 악센트를 꽂는 거예요. 이 세 층이 3줄 위에서 굴러가면, 기타 혼자서도 꽉 찬 리듬 파트가 돼요.

여기서 중요한 건 '완성도'예요. 실험이 아니라 **하나의 완결된 덩어리**를 만드는 거니까, 4마디를 끊김 없이, 아랫줄 잡음 없이, 악센트가 스네어와 딱 맞물리게 다듬으세요. 이 덩어리가 탄탄할수록 내일 만들 리프 파트와 대비가 살아나요.

물론 처음부터 완벽하진 않아요. 커팅하다 아랫줄이 새거나, 악센트가 밀리거나, 4마디째에 흔들리기 쉽죠. 당연해요. 오늘은 예제를 뼈대로 삼아, 조금씩 다듬어 '내가 계속 돌릴 수 있는' 커팅 덩어리 하나를 완성하는 게 목표예요. 완성된 파트 하나가 손에 들어오면, 곡을 만든다는 게 생각보다 가깝다는 걸 느낄 거예요.

## ② 시각 자료

곡의 벌스가 될 커팅 파트예요. 3줄 트라이어드에 고스트·악센트를 얹어 반복 가능한 덩어리로 빌딩해요.

**E 메이저 트라이어드(커팅).** 이 3줄만 커팅하고 아랫줄은 뮤트. 근음·코드톤=파랑, 악센트는 초록으로 스네어에.

```json
{
  "id": "m2.w8.d2.emaj_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad (cutting, top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```

**예제 1 — 커팅 빌딩 1(1마디).** 커팅에 악센트를 2·4박에. 기본 덩어리의 뼈대예요.

```json
{
  "id": "m2.w8.d2.cut1",
  "type": "tab",
  "meta": { "title": "Cutting groove — build 1 (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78.** 트랙 위에서 4번. 악센트가 스네어와 맞물리는지 확인.

**예제 2 — 커팅 빌딩 2(2마디).** 실제음·고스트·악센트를 더 촘촘히. 4마디로 늘려 '벌스' 덩어리를 완성해요.

```json
{
  "id": "m2.w8.d2.cut2",
  "type": "tab",
  "meta": { "title": "Cutting groove — build 2 (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78.** 2마디를 두 번 이어 4마디로. 끊김·잡음 없이 다듬어 나만의 커팅 파트로.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 3줄 커팅에 고스트·악센트를 하나씩 얹어 워밍업. 아랫줄 뮤트 점검.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 커팅 덩어리 설계)**
트랙을 들으며 커팅 파트의 악센트 위치·고스트 밀도를 설계해요. 4마디 구조를 그립니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 78)**
**예제 1**(커팅 빌딩 1)로 뼈대를 잡고 → **예제 2**(빌딩 2)를 4마디로 늘려 트랙 위에서 완성. 반복 가능하게 다듬어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
커팅 덩어리를 녹음 후 체크: 3줄만 청량한가 / 악센트가 스네어와 맞물리는가 / 4마디가 끊김 없는가 / 질리지 않는가.

**오늘의 완료 기준:** 3줄 커팅에 고스트·악센트를 얹어, 트랙 위에서 반복 가능한 4마디 커팅 파트(벌스)를 완성할 수 있다.

## ④ 팁 / 흔한 실수

- **아랫줄 잡음.** 커팅이 복잡해질수록 뮤트가 풀려요. 왼손 뮤트를 끝까지.
- **악센트가 밀림.** 4마디째에 강세가 흐려지기 쉬워요. 2·4박을 계속 의식.
- **너무 꽉 채움.** 여백이 있어야 반복해도 안 질려요. 고스트로 숨 쉴 자리를.
- **완성 없이 실험만.** 오늘은 '완결된 덩어리'가 목표예요. 하나를 골라 다듬으세요.
