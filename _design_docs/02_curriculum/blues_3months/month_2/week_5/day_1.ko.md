---
title: "리드의 홈, 박스1을 손에 새긴다"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — A 마이너 펜타토닉 박스1(5프렛)을 각인한다

## ① 이론/설명

지난 4주 동안 우리는 리듬으로 '질문'하는 법을 익혔어요. 이제부터는 그 질문에 **리드로 답하기** 차례예요. 답을 만들려면 먼저 어떤 음을 골라야 할지 알려 주는 지도가 필요한데, 그 지도가 바로 **마이너 펜타토닉 박스1**이에요. <mark>박스1은 솔로가 마음껏 뛰노는 놀이터예요.</mark> A 블루스에서 이 놀이터는 **5프렛** 자리에 펼쳐져요. 여기에 손을 얹으면 어떤 음을 눌러도 블루스에 어울리는 소리가 나서, 틀린 음을 걱정할 필요가 없어요.

박스1은 딱 다섯 종류의 음 — **R(근음)·b3·4·5·b7** — 이 두 옥타브에 걸쳐 반복되는 모양이에요. 손 모양도 아주 단순해요. **검지(1번)는 5프렛**을, **새끼(4번)는 8프렛**을 맡고, 대부분의 음이 이 좁은 프렛 폭 안에서 해결돼요. <mark>한자리에 손을 두고 거의 움직이지 않아도 여섯 줄을 전부 오르내릴 수 있어요.</mark> 그래서 이 모양은 하루만 집중해도 손에 금방 익어요.

그중에서도 가장 든든한 이정표는 **근음 A**의 위치예요. **6번 줄 5프렛**, 그리고 4번 줄 7프렛과 1번 줄 5프렛 — 이 세 곳이 언제 돌아와도 되는 집이에요. 솔로를 하다 길을 잃으면 근음으로 돌아오면 그만이에요. <mark>오늘은 프레이즈를 만들지 않아요. 이 모양을 손에 새기는 것, 그 하나면 충분해요.</mark> 처음엔 음이 뚝뚝 끊겨도 괜찮아요. 위치가 익으면 소리는 저절로 매끄러워지니까요. 먼저 집이 되는 근음 세 곳부터 눈으로 확인해 봐요.

```json
{
  "id": "m2.w5.d1.roots",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic Box 1 — the three home roots", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **박스1의 집, 근음 A 세 곳이에요.** 6번 줄 5프렛에서 시작해 4번 줄 7프렛, 1번 줄 5프렛으로 이어져요. 이 세 곳을 먼저 외워요.

## ② 시각 자료

이제 박스1의 다섯 음이 여섯 줄 위에서 어떻게 반복되는지 전체 모양을 볼게요. <mark>파란 점이 근음 A, 나머지는 스케일 음이에요.</mark> 색이 아니라 **모양**을 기억하세요 — 이 상자 하나가 앞으로 모든 솔로의 출발점이 돼요.

```json
{
  "id": "m2.w5.d1.box1",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "scale" },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **5프렛 박스1 전체 모양.** 6번 줄 R에서 1번 줄 b3까지, 낮은 줄에서 높은 줄로 눈으로 훑어요. 두 프렛 폭(5~8) 안에 다 들어와요.

파란 근음 세 개가 상자의 기둥이에요. <mark>기둥부터 잡으면 나머지 음은 그 사이를 채우는 셈이에요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 70. 급할 것 없어요. **근음 A 세 곳**을 손가락으로 짚으며 손을 깨워요. <mark>세 근음의 위치가 눈 감고도 잡히는지</mark> 확인해요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 박스1 위치 각인)**
악보를 보지 않고 박스1 모양을 <mark>머릿속으로 한 번 그려</mark> 봐요. 어느 줄 몇 프렛에 점이 있는지 소리 내어 말해 보면 더 빨리 외워져요.

**20~40분 · 실전 박스1 오르내리기 (BPM 70)**
이제 박스1을 낮은 줄부터 높은 줄까지 한 음씩 올라갔다 내려와요.

```json
{
  "id": "m2.w5.d1.box1_ascend",
  "type": "tab",
  "meta": { "title": "A minor pentatonic Box 1 — ascending", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70, 셔플 느낌.** 6번 줄 5프렛 근음부터 1번 줄까지 올라가요. 각 음이 깨끗이 울리게, 손가락 끝으로.

<mark>한 음 한 음 또박또박</mark>, 끊겨도 멈추지 말고 끝까지 올라갔다 내려와요.

**40~50분 · 녹음 (오늘의 미션)**
박스1을 한 번 오르내리는 걸 녹음해요: <mark>열두 음이 다 울리는지</mark> 귀로 들어 봐요.

**오늘의 완료 기준:** A 마이너 펜타토닉 박스1을 낮은 줄부터 높은 줄까지 멈추지 않고 오르내렸고, 근음 세 곳을 눈 감고도 짚을 수 있다.

## ④ 팁 / 흔한 실수

박스1을 외울 때 자주 나오는 실수예요. 손 모양만 잘 잡아도 절반은 성공이에요.

```json
{
  "id": "m2.w5.d1.finger_tip",
  "type": "scale_shape",
  "meta": { "title": "Box 1 low string — 1st and 4th finger", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **검지는 5프렛, 새끼는 8프렛.** 6번 줄에서 이 손가락 배치를 기본으로 삼으면 나머지 줄도 편해져요.

- **한 손가락으로 다 짚어요.** 5프렛은 검지, 8프렛은 새끼 — 손가락을 나눠 맡기면 훨씬 빨라요.
- **음이 지저분하게 울려요.** 손끝을 세워 프렛 바로 뒤를 눌러요. 줄에 살짝만 스쳐도 소리가 지저분해져요.
- **한 번에 다 외우려 해요.** 오늘은 근음 세 곳과 낮은 줄부터. 나머지는 반복하면 저절로 붙어요.
- **속도부터 올려요.** 오늘의 목표는 위치예요. 빠르기는 이번 주 안에 천천히 붙여요.
