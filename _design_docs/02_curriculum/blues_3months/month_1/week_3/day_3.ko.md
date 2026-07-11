---
title: "다이내믹 — 세게와 여리게로 그루브를 살린다"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 세게와 여리게, 강약으로 그루브를 살린다

## ① 이론/설명

사흘째예요. 어제 스톱타임으로 여백을 만들었죠? 오늘은 **다이내믹**, 곧 **세게와 여리게**를 배워요. <mark>다 세게만 치면 아무리 좋은 리듬도 밋밋하게 들려요.</mark> 강약이 있어야 그루브가 살아 숨 쉬어요. 같은 A7 컴핑도, 어디를 세게 치고 어디를 여리게 치느냐에 따라 완전히 다른 느낌이 돼요. 사람의 목소리를 떠올려 보세요. 늘 같은 크기로만 말하는 사람은 없어요. 중요한 말은 힘주어, 흘려도 되는 말은 부드럽게 — 기타의 강약도 이 말투의 억양과 똑같아요. 강약이 붙는 순간 연주가 말을 걸기 시작해요.

블루스의 핵심 강약은 **백비트**예요. 4/4에서 **2박과 4박**을 살짝 더 세게 치는 거예요. <mark>발로 1·2·3·4를 밟을 때, 2와 4에 무게를 실어 보세요.</mark> 이게 몸이 저절로 흔들리는 그루브의 비밀이에요. 나머지 박은 힘을 빼고 여리게 흘려요.

방법은 간단해요. 세게 칠 땐 손목을 크게, 여리게 칠 땐 손목을 작게 움직이면 돼요. <mark>피크가 줄을 스치는 깊이만 조금 바꾸는 거예요.</mark> 어제 배운 **스톱타임**에 강약까지 얹으면, 밋밋하던 부기가 살아 있는 그루브로 바뀌어요. 오늘은 세게와 여리게의 **차이**가 귀에 들리게 만드는 게 목표예요. 처음엔 그 차이를 조금 과장해도 괜찮아요. 크게 벌려 두면 나중에 자연스럽게 줄일 수 있으니까요.

먼저 강약 없이, A7을 네 박 고르게 쳐 볼게요.

```json
{
  "id": "m1.w3.d3.dyn_flat",
  "type": "tab",
  "meta": { "title": "Flat dynamics — even A7 strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 네 박을 다 같은 세기로 쳐요. 이 '밋밋함'을 먼저 느끼고, 곧 강약을 얹을 거예요.

## ② 시각 자료

이제 **2·4박**에 무게를 실어 볼게요. <mark>여덟 번 쓸어내리되, 2박과 4박에서만 손목을 크게 써요.</mark> 나머지는 여리게 흘려요.

```json
{
  "id": "m1.w3.d3.backbeat_comp",
  "type": "tab",
  "meta": { "title": "Backbeat comp — accent beats 2 and 4", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "up", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "up", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "up", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "up", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** **2박·4박은 세게(다운), 나머지는 여리게.** 다운-업을 번갈아 쓸며 백비트에 무게를 실어요.

강약이 들어가면 같은 코드도 <mark>몸이 저절로 흔들리는 느낌</mark>이 나요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. **A7**을 세게 한 번, 여리게 한 번 번갈아 쳐요. 두 소리의 크기 차이를 귀로 확인해요.

이제 어제의 색을 더해, **A9**으로 강약 컴핑을 해 봐요.

```json
{
  "id": "m1.w3.d3.dynamic_a9",
  "type": "tab",
  "meta": { "title": "A9 comp with dynamics", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** **A9**을 2·4박에서 세게, 나머지는 여리게. 9도의 색과 강약이 함께 살아나요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 백비트에 무게 싣기)**
소리 없이 손목만 움직여, 세게-여리게-세게-여리게를 <mark>과장해서 연습해요.</mark>

**20~40분 · 실전 강약 컴핑 (BPM 80)**
위 예제를 <mark>끊김 없이</mark> 반복하며, 2·4박이 확실히 도드라지는지 들어요.

**40~50분 · 녹음/셀프 피드백 (권장)**
강약 컴핑 한 마디를 녹음해요: <mark>세게와 여리게가 구분되어 들리는가</mark>.

**오늘의 완료 기준:** **A7** 또는 A9 컴핑에서 2·4박을 세게, 나머지를 여리게 쳐서 강약이 또렷하게 들리는 한 마디를 연주할 수 있다.

## ④ 팁 / 흔한 실수

강약을 넣을 때 자주 나오는 실수예요. 여리게가 **'안 치는 것'은 아니에요.**

```json
{
  "id": "m1.w3.d3.dyn_soft_voicing",
  "type": "fretboard_diagram",
  "meta": { "title": "Soft touch — brush the lower three strings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **여리게도 또렷하게.** 여릴 땐 아래 세 줄만 살짝 쓸어도 좋아요. 소리가 작아도 음은 살아 있어야 해요.

- **여리게가 사라져요.** 힘을 너무 빼면 소리가 아예 안 나요. 작지만 들리게 쳐요.
- **세게가 거칠어요.** 세게 친다고 내리찍으면 피치가 흔들려요. 손목을 크게, 부드럽게 써요.
- **강약이 뒤집혀요.** 1·3박을 세게 치면 그루브가 어색해져요. 2·4박에 무게를 실어요.
- **템포가 흔들려요.** 세게 칠 때 빨라지기 쉬워요. 강약이 변해도 발은 일정하게 밟아요.
