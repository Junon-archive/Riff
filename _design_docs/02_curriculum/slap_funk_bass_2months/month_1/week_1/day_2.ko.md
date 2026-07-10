---
title: "썸 줄이동 — E와 A를 오가며 재우기"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — 썸 줄이동과 뮤팅

## ① 이론/설명

어제 개방 E로 첫 '둥!'을 냈다면, 절반은 온 거예요. 슬랩은 손가락이 아니라 드럼 — **썸은 킥, 고스트는 그 사이를 채우는 쉼표**라고 했죠. 오늘은 두 가지를 더해요 — **줄 옮겨 썸 치기(E↔A)**와, 슬랩의 진짜 난관인 **<mark>뮤팅(안 친 줄 재우기)</mark>**이에요. 이 둘이 붙어야 썸이 '연습'에서 '그루브'로 바뀌어요.

줄 이동은 생각보다 쉬워요. **팔뚝 회전은 어제 그대로**, 겨누는 줄만 바꾸면 돼요. 개방 E는 **4번현**, 개방 A는 바로 위 **3번현**이에요. 손목은 고정한 채 엄지를 한 줄만큼 안쪽으로 옮겨 같은 각도로 튕기면 A도 똑같이 '둥!' 하고 울려요. 팔뚝을 통째로 흔들지 말고, <mark>엄지가 오가는 거리를 최소로</mark> 줄이는 게 요령이에요.

그런데 슬랩은 소리가 크고 개방현이 많아서, 가만 두면 **안 친 줄까지 웅웅 울려** 지저분해져요. 그래서 뮤팅이 필수예요. **왼손**은 안 쓰는 줄 위에 손가락을 눕혀 살짝 얹어 재우고, **오른손 엄지**는 지금 치는 줄보다 낮은 줄을 덮어요. 두 손이 문지기처럼 협력해야 한 음만 또렷이 남아요. 여기에 음정 없는 **<mark>고스트 음('칙')</mark>**을 사이사이 넣으면, 조용함이 오히려 리듬이 돼요 — 악보엔 X로 표시돼요.

**5현**이라면 재울 줄이 하나 더 늘어요. 저음 B는 엄지로 계속 덮어, E·A를 오가는 내내 B가 새어 울리지 않게 해요. E·A 위치는 **4현과 완전히 똑같으니**, 5현은 그저 뮤팅에 조금 더 신경 쓰면 됩니다.

## ② 시각 자료

오늘은 **세 예제**를 봐요. 먼저 E·A 두 타점을 지판에서 확인하고, 썸으로 <mark>두 줄을 오간</mark> 뒤, 고스트 음으로 뮤팅을 익혀요. 각 예제는 **4현·5현 두 버전**이에요.

먼저 **E·A 썸 타점 지도**. 파랑 두 점이 개방 E(4번현)와 개방 A(3번현)예요.

```json
{
  "id": "m1.w1.d2.thumb_ea_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb spots on E and A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "role": "root" }
  ]}
}
```

▶ **4현.** 아래 파랑이 개방 E(4번현), 위 파랑이 개방 A(3번현)예요. 엄지를 한 줄만큼 옮겨 같은 각도로 튕겨요.

```json
{
  "id": "m1.w1.d2.thumb_ea_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb spots on E and A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "role": "root" }
  ]}
}
```

▶ **5현.** E·A 자리는 4현과 똑같아요. 저음 B는 엄지로 덮어, 두 줄을 오가는 내내 재워 두세요.

**예제 1 — 썸 줄이동 E↔A.** 개방 E와 개방 A를 번갈아 썸으로 쳐요. 엄지가 두 줄 사이를 최소 거리로 오가요.

```json
{
  "id": "m1.w1.d2.thumb_ea_move_4",
  "type": "tab",
  "meta": { "title": "Thumb slap E-A move — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60, 4현.** 개방 E(4번현)→개방 A(3번현)를 번갈아 썸으로. 두 줄의 '둥' 크기가 같은지 귀로 확인해요.

```json
{
  "id": "m1.w1.d2.thumb_ea_move_5",
  "type": "tab",
  "meta": { "title": "Thumb slap E-A move — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 엄지로 덮어, 이동 중에도 새어 울리지 않게 해요.

**예제 2 — 썸 + 고스트.** 개방 E 썸과 고스트 음(X)을 번갈아 쳐요. <mark>'둥-칙-둥-칙'</mark> 사이의 침묵이 또렷할수록 그루브가 살아나요.

```json
{
  "id": "m1.w1.d2.thumb_ghost_4",
  "type": "tab",
  "meta": { "title": "Thumb slap with ghost mute — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65, 4현.** 정박은 파랑 개방 E 썸, 뒷박은 X(칙). 썸과 고스트의 크기 차이가 클수록 리듬이 또렷해요.

```json
{
  "id": "m1.w1.d2.thumb_ghost_5",
  "type": "tab",
  "meta": { "title": "Thumb slap with ghost mute — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65, 5현.** 4현과 음이 똑같아요. 저음 B는 엄지로 계속 덮어, 고스트를 낼 때도 B가 함께 울리지 않게 해요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 한 개방 E 썸을 BPM 60으로 다시 풀어요. **'둥' 톤이 어제만큼 균일한지**부터 확인합니다.

**10~20분 · 두뇌 훈련**
개방 E와 A를 아주 느리게 오가요. <mark>엄지가 한 줄만큼만 이동하는지</mark>, 그 **최소 이동**에만 집중해요.

**20~40분 · 실전**
예제 1(E↔A 이동)을 **BPM 60**에서 반복 → 두 '둥'이 고르면 예제 2(썸+고스트)로 넘어가 **BPM 65**. 안 친 줄이 웅웅 새면 다시 예제 1로 돌아가요.

**40~50분 · 녹음/피드백**
30초 녹음해 **친 줄만 울리고 나머지는 조용한지** 들어봐요. 오늘 도달한 BPM도 적어둬요.

**오늘의 완료 기준:** 개방 E와 A를 썸으로 오가며 60~65에서 두 '둥' 크기가 고르고, 안 친 줄은 조용하게 이동할 수 있다.

## ④ 팁 / 흔한 실수

- **엄지가 너무 크게 움직여요.** 줄을 넘을 때 엄지가 멀리 튀면 박이 늦어요. 한 줄만큼만 최소로 옮기세요.
- **안 친 줄이 웅웅.** E를 치는데 A·D·G가 같이 울리면, 왼손을 그 줄 위에 살짝 얹어 재워요.
- **고스트 음을 너무 세게.** 칙 소리를 세게 내면 음정이 살아나 지저분해져요. 아주 살짝, 뮤트된 타격 소리만.
- **저음 B 방심(5현).** 줄 이동에 집중하다 B를 놓치면 저음이 새요. 엄지는 늘 B 위에 얹어 두세요.
