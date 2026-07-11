---
title: "9th 코드 — 부기에 세련된 색을 더한다"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — A9으로 부기에 세련된 색을 더한다

## ① 이론/설명

3주차 첫날이에요. 지난 두 주 동안 부기로 12마디를 걸어 봤죠? 이번 주는 그 위에 표정을 얹어요. 오늘의 주인공은 **9th 코드**, 그중에서도 **A9**이에요. <mark>9th 코드는 지금까지 쓰던 A7에 음 하나를 더 얹은 코드예요.</mark> A7이 A·C#·E·G(1·3·5·b7)라면, A9는 여기에 **9도인 B**를 더해요. 이 한 음이 부기보다 훨씬 재지고 도시적인, 재즈와 소울 냄새가 나는 색을 만들어 줘요.

손모양을 볼게요. 개방 A7이 5번 줄부터 `x 0 2 0 2 0`이었다면, **A9**는 `x 0 2 4 2 3`이에요. 5번 줄 개방이 **루트 A**이고, 새로 더한 3번 줄 4프렛이 바로 **9도(B)** 예요. <mark>이 9도 한 음이 소리의 표정을 바꾸는 핵심이라, 악보에서는 노란색으로 강조해 뒀어요.</mark> 나머지 음은 이미 익숙한 코드톤이라 파란색으로 표시했어요.

오늘은 이 한 코드를 깨끗하게 울리는 데만 집중해요. **A7**을 치고 바로 이어서 **A9**을 쳐 보면, <mark>갑자기 도시적이고 세련된 느낌으로 바뀌는 걸</mark> 귀로 알 수 있어요. 코드 하나가 이렇게 분위기를 바꾼다는 게, 이번 주 리듬 변주의 첫 단추예요. 손가락끼리 서로 눌러 죽이지 않고 다섯 음이 또렷하게 울리면 오늘은 성공이에요. 처음엔 네 손가락이 좁은 자리에 모여 어색할 수 있어요. 급하게 서두르지 말고, 한 음씩 또렷하게 나는지 천천히 확인하면 손이 금세 이 모양을 기억해요.

먼저 익숙한 A7 손모양을 다시 볼게요.

```json
{
  "id": "m1.w3.d1.a7_recall",
  "type": "fretboard_diagram",
  "meta": { "title": "Open A7 — the chord you know", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **개방 A7 = `x 0 2 0 2 0`.** 5번 줄 개방이 루트, 6번 줄은 치지 않아요. 이 손모양을 기억해 두세요.

## ② 시각 자료

오늘의 완성 목표, **A9** 코드예요. <mark>손가락 네 개가 각자 자리를 잡고, 다섯 줄이 한 번에 또렷하게 울리는 걸 목표로 해요.</mark> 6번 줄은 치지 않으니 손끝으로 살짝 막아 둬요.

```json
{
  "id": "m1.w3.d1.a9_form",
  "type": "fretboard_diagram",
  "meta": { "title": "Open A9 — x 0 2 4 2 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "9", "role": "color" },
    { "string": 2, "fret": 2, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **A9 = `x 0 2 4 2 3`.** 5번 줄 개방이 루트, 3번 줄 4프렛의 **노란 점이 9도(B)** 예요.

천천히 한 줄씩 튕겨 다섯 음이 다 살아 있는지 확인하고, 그다음 한 번에 쓸어내려요. <mark>9도가 콧소리처럼 살짝 튀어나오면 제대로 잡힌 거예요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. 익숙한 **A7**을 한 마디 쳐서 손을 풀어요. 셔플의 롱-숏이 살아 있는지 발로 확인해요.

이제 **A9**으로 바꿔서, 네 박을 셔플로 쓸어내려요.

```json
{
  "id": "m1.w3.d1.a9_comp",
  "type": "tab",
  "meta": { "title": "A9 comp — four shuffle strums", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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
▶ **BPM 80, 셔플.** 네 박 모두 **A9** 다운 스트로크예요. 9도의 색을 귀로 느껴 봐요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = A9 손모양 굳히기)**
눈을 감고 **A9** 손모양을 만들었다 풀었다 반복해요. <mark>손가락이 자리를 기억하면 코드 잡는 속도가 빨라져요.</mark>

**20~40분 · 실전 A9 컴핑 (BPM 80)**
위 예제를 <mark>끊김 없이</mark> 반복하며, A7과 A9을 번갈아 쳐 색의 차이를 느껴요.

**40~50분 · 녹음/셀프 피드백 (권장)**
A9 한 마디를 녹음해요: <mark>다섯 음이 다 또렷하게 울리는가</mark>.

**오늘의 완료 기준:** 개방 **A9**(`x 0 2 4 2 3`)을 다섯 음이 또렷하게 울리도록 깨끗하게 잡고, 셔플로 한 마디 칠 수 있다.

## ④ 팁 / 흔한 실수

**A9**을 처음 잡을 때 자주 나오는 실수예요.

```json
{
  "id": "m1.w3.d1.a9_finger_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep the 9th ringing, mute string 6", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 4, "finger": 4, "label": "9", "role": "color" }
  ]}
}
```
▶ **6번 줄은 치지 않아요.** 5번 줄 개방 루트부터 울리고, 3번 줄 4프렛 **9도(B)**가 죽지 않게 해요.

- **손가락이 눕는다.** 3·4번 손가락이 눕으면 옆 줄을 건드려요. 손끝을 세워요.
- **9도가 죽는다.** 3번 줄 4프렛을 누른 손가락이 옆 줄에 닿으면 색이 사라져요.
- **6번 줄이 새어 나온다.** A9은 5번 줄이 루트예요. 6번 줄이 울리면 소리가 탁해져요.
- **A7과 헷갈린다.** A9은 3번 줄이 4프렛, 1번 줄이 3프렛이에요. 개방과 헷갈리지 말아요.
