---
title: "악센트 그루브 완성 — 스네어에 강세를 꽂다"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 강세가 스네어와 겹치는 순간

## ① 이론/설명

이번 주 결승선이에요. 오늘은 악센트 1~2개 + 고스트 + 실제음을 모두 섞은 그루브를 백킹 트랙 위에서 완성해요. 세 층의 소리(치·따·팍)를 한 손으로 굴리며, 이번엔 그걸 **드럼과 맞물리게** 하는 게 목표예요.

핵심은 딱 하나예요. **악센트를 백킹의 스네어에 겹치는 것.** 대중음악에서 스네어는 보통 2박과 4박에 와요. 그 자리에 여러분의 '팍'을 정확히 얹으면, 기타와 드럼이 한 몸처럼 움직이는 마법이 일어나요. 반대로 강세가 스네어와 어긋나면 아무리 잘 쳐도 그루브가 겉돌아요. 그래서 오늘은 백킹을 꼭 켜고, 내 악센트가 스네어와 '착' 붙는 자리를 귀로 찾습니다.

3주를 돌아보면 이래요. 오른손 16비트 모터(1주) 위에, 왼손 고스트로 하이햇을 깔고(2주), 악센트로 스네어를 꽂았어요(3주). 이제 여러분의 기타 한 대는 하이햇·킥·스네어를 다 가진 리듬 머신이에요. 코드를 하나도 안 바꿔도 몇 분을 끌고 갈 수 있죠.

여기까지 온 것만으로도 정말 대단해요. 다음 주엔 드디어 진짜 코드 — 펑크의 상징 **E9** — 를 잡고, 지금까지의 모터·고스트·악센트를 그 위에 전부 얹어 원코드 잼을 완성합니다. 오늘 백킹 위에서 '내 강세가 스네어와 맞물린다'는 느낌이 왔다면, 여러분은 이미 펑크의 리듬 언어를 말하기 시작한 거예요.

## ② 시각 자료

세 층을 다 섞은 완성형 그루브예요. 악센트(초록)를 백킹 스네어(2·4박)에 겹쳐보세요.

**예제 1 — 악센트 그루브 A(2마디).** 실제음·고스트·악센트가 고루 섞인 기본 펑크 그루브. 2·4박 '&'의 악센트가 스네어와 맞물려요.

```json
{
  "id": "m1.w3.d4.groove_a",
  "type": "tab",
  "meta": { "title": "Accent groove A (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** 백킹 위에서 4번 이상. 내 '팍'이 스네어와 겹치는 순간을 느껴보세요.

**예제 2 — 악센트 그루브 B(2마디).** 악센트를 더 당겨 실은 응용형. 강세가 살짝 밀려 더 '꿀렁'거려요.

```json
{
  "id": "m1.w3.d4.groove_b",
  "type": "tab",
  "meta": { "title": "Accent groove B (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72.** 익으면 악센트 위치를 바꿔 나만의 그루브로. 기타가 드럼과 한 몸인지 확인.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. D1~D3의 악센트·고스트·실제음을 가볍게 복습. 세 층 대비가 손에 붙었는지 점검.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 스네어에 강세)**
백킹의 스네어(2·4박)를 들으며 그 자리에 '팍'을 겹쳐 노래해요. 악센트가 스네어와 만나는 지점을 그립니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 72)**
**예제 1**(그루브 A)을 백킹 위에서 4번 → **예제 2**(그루브 B)로. 악센트가 스네어와 맞물리는지가 관건.

**40~50분 · 녹음/셀프 피드백 (권장)**
백킹과 함께 2마디 두 바퀴 녹음 후 체크: 악센트가 스네어와 맞물리는가 / 세 층이 구분되는가 / 배경 고스트가 안 끊기는가.

**오늘의 완료 기준:** 악센트+고스트+실제음을 섞은 그루브를 백킹 위에서, 악센트를 스네어(2·4박)에 맞물려 유지할 수 있다. (3주차 완성!)

## ④ 팁 / 흔한 실수

- **악센트가 스네어에서 벗어남.** 강세가 2·4박에서 어긋나면 그루브가 겉돌아요. 스네어에 '팍'을 정확히.
- **세 층이 평평.** 치·따·팍의 대비가 없으면 드럼처럼 안 들려요. 명암을 확실히.
- **너무 꽉 채움.** 여백이 있어야 강세가 살아요. 다 채우지 말고 숨 쉴 자리를.
- **백킹 없이 연습만.** 스네어와 맞물릴 때 진짜 그루브가 살아요. 꼭 트랙 위에서.
