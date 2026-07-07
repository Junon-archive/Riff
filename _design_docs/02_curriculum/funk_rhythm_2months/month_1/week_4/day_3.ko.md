---
title: "E9에 강세, 그리고 m7 한 스푼"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 원코드지만 강세로 그루브를 완성한다

## ① 이론/설명

이제 3주차의 **악센트**를 E9에 적용해요. 코드는 E9 하나뿐이지만, 강세만으로 완성된 펑크 그루브를 만들 수 있어요.

배경은 고스트로 깔고(하이햇), 실제 E9 코드를 중간중간 울리고(킥), 그중 한두 자리를 확 세게 쳐서 강세(스네어)를 꽂아요. 이 세 층이 한 코드 위에서 다 나오니까, 코드를 안 바꿔도 리듬만으로 곡이 굴러가요. 강세는 어제처럼 백킹의 스네어(2·4박)에 맞물리는 게 핵심이고요.

여기에 오늘은 **Em7**을 한 스푼 더해요. E9가 밝고 긴장감 있는 도미넌트라면, Em7은 어둡고 부드러운 마이너예요(아래 다이어그램). 원코드 잼이 조금 심심해질 때, 가끔 E9 대신 Em7으로 슬쩍 바꿔주면 색이 확 달라져요. 둘 다 근음이 5번 줄 7프렛이라 손 위치는 거의 그대로예요 — 안쪽 손가락 몇 개만 옮기면 되죠. 이 작은 변화 하나가 밋밋한 반복에 숨통을 틔워줘요.

두 코드를 오가면서 강세까지 챙기려니 손이 바쁠 거예요. 괜찮아요. Em7은 오늘 '맛보기'예요. 완벽하게 오갈 필요 없이, E9 그루브가 탄탄하다면 그걸로 충분해요. Em7은 '이런 색도 있구나' 정도만 느끼면 돼요. 내일 최종 잼에서 여러분이 원하는 만큼만 꺼내 쓰면 되니까요. 코드 두 개, 강세 몇 개 — 재료는 이게 전부인데도 벌써 진짜 펑크곡의 반주처럼 들리기 시작할 거예요.

## ② 시각 자료

E9에 악센트(초록)를 얹고, 색을 바꿀 Em7도 소개해요. 두 코드 모두 근음은 5번 줄 7프렛.

**Em7 셸(색 바꿈용).** 근음은 E9와 같은 5번 줄 7프렛. R·b3·b7만 남긴 어둡고 부드러운 마이너. E9와 번갈아 색을 바꿔요.

```json
{
  "id": "m1.w4.d3.em7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "Em7 shell (root on 5th string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — E9+악센트(1마디).** 배경 고스트, 1·3박에 E9 실제음, 2·4박 '&'에 강세(초록). 강세가 스네어에 맞물려요.

```json
{
  "id": "m1.w4.d3.e9_accent1",
  "type": "tab",
  "meta": { "title": "E9 + accent on the snare (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 초록 자리만 확 세게. 백킹 스네어와 겹치는지 느끼며 4번.

**예제 2 — E9 악센트 그루브(2마디).** 강세를 당겨 실은 응용형. 익으면 중간에 Em7으로 슬쩍 바꿔 색을 넓혀보세요.

```json
{
  "id": "m1.w4.d3.e9_accent2",
  "type": "tab",
  "meta": { "title": "E9 accent groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** E9로 4번 친 뒤, 한두 번은 Em7으로 바꿔 같은 그루브를 쳐보세요. 색 차이를 느껴봐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. E9 그루브에 악센트를 하나씩 얹어 강약 워밍업. E9↔Em7 코드 전환도 가볍게 연습.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 강세 + 코드 색)**
백킹 스네어에 맞춰 강세 자리를 정하고, E9/Em7 중 어디서 색을 바꿀지 미리 그려요.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 70)**
**예제 1**(E9+악센트)을 BPM 70에서 4번 → **예제 2**로 넘어가 익으면 Em7을 섞어 응용. 강세가 스네어에 맞물리는 게 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 강세가 스네어와 맞물리는가 / E9↔Em7 색 변화가 들리는가 / 세 층이 구분되는가.

**오늘의 완료 기준:** E9 원코드 위에서 악센트로 그루브를 완성하고, 가끔 Em7으로 바꿔 색을 달리할 수 있다.

## ④ 팁 / 흔한 실수

- **Em7 전환에 손이 큼.** 근음은 같은 자리예요. 손 전체를 옮기지 말고 안쪽 손가락만.
- **강세가 스네어에서 벗어남.** 2·4박에 정확히. 어긋나면 그루브가 겉돌아요.
- **코드 바꾸다 모터 끊김.** Em7으로 바꿀 때 오른손이 서면 안 돼요. 흔들림은 계속.
- **Em7 완벽 강박.** 오늘은 맛보기예요. E9 그루브가 탄탄하면 충분.
