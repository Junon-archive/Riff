---
title: "스톱타임 — 툭 치고 침묵으로 드라마를 만든다"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 툭 치고 침묵, 스톱타임으로 여백을 만든다

## ① 이론/설명

이틀째예요. 어제 A9으로 색을 더했다면, 오늘은 **여백**을 배워요. 오늘의 주제는 **스톱타임**이에요. <mark>스톱타임은 코드를 '툭!' 치고 나서, 소리를 뚝 끊고 침묵을 만드는 리듬이에요.</mark> 밴드가 다 같이 한 방 치고 숨을 멈추는 그 순간, 듣는 사람은 다음 소리를 기다리게 돼요. 여백이 소리만큼, 가끔은 소리보다 더 중요한 이유예요. 좋은 연주는 얼마나 많은 음을 채우느냐가 아니라, 어디를 비우느냐로 완성돼요. 말할 때도 쉼표와 뜸이 있어야 말이 또렷하게 들리는 것과 똑같아요.

악보에서 침묵은 **쉼표**로 표시해요. 우리 데이터로는 `rest`가 그 침묵이에요. <mark>코드를 친 뒤 왼손의 힘을 살짝 풀어 줄을 멈추면, 소리가 딱 끊기며 쉼표가 생겨요.</mark> 오른손은 계속 박자를 세고 있지만, 줄은 울리지 않는 상태예요. 이 **치고-멈추기**가 스톱타임의 전부예요.

오늘 쓸 코드는 익숙한 **A7**이에요. 새 코드를 배우는 게 아니라, 이미 아는 코드로 **리듬**만 바꾸는 거예요. <mark>1박에 툭 치고 2박은 침묵 — 이 한 마디를 드라마틱하게 만드는 게 오늘의 목표예요.</mark> 침묵이 어색해도 괜찮아요. 그 어색한 빈자리가 바로 블루스의 긴장감이거든요. 오히려 그 빈자리를 즐길 수 있게 되면, 연주가 한결 여유로워져요.

가장 단순한 스톱타임부터 볼게요. 한 번 치고, 나머지는 전부 침묵이에요.

```json
{
  "id": "m1.w3.d2.stoptime_intro",
  "type": "tab",
  "meta": { "title": "One stab, then silence", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1박에 A7을 툭 치고, 남은 세 박은 `rest`로 완전히 비워요. 이 침묵의 길이를 느껴 봐요.

## ② 시각 자료

오늘의 완성 목표는 **스톱타임 한 마디**예요. <mark>A7을 툭 치고, 다음 박은 소리 없이 비워요.</mark> 이 '치고-비우기'가 두 번 반복돼요.

```json
{
  "id": "m1.w3.d2.stoptime_two_stabs",
  "type": "tab",
  "meta": { "title": "Stop-time — two even A7 stabs", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** **1박에 A7을 툭 → 2박 침묵 → 3박에 툭 → 4박 침묵.** 빈 박에서 줄이 울리지 않게 왼손 힘을 풀어요.

쉼표에서 손이 멈추는 게 아니라, 소리만 멈추는 거예요. <mark>발은 계속 네 박을 밟고 있어야 다음 타격이 제자리에 떨어져요.</mark>

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. **A7**을 네 박 꽉 채워 쳐서, 소리가 이어지는 '풀(full)' 느낌을 먼저 몸에 익혀요.

이번엔 반대로, **침묵으로 시작**하는 스톱타임을 쳐 봐요.

```json
{
  "id": "m1.w3.d2.stoptime_silence_first",
  "type": "tab",
  "meta": { "title": "Stop-time — start on silence", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** **1박 침묵 → 2박에 툭 → 3박 침묵 → 4박에 툭.** 빈 박으로 시작하니 다음 타격이 더 도드라져요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 쉼표에서 손 풀기)**
코드를 친 직후 왼손 힘을 푸는 동작을 <mark>천천히 따로 연습해요.</mark> 툭-풀고, 툭-풀고.

**20~40분 · 실전 스톱타임 (BPM 80)**
위 두 예제를 번갈아 <mark>끊김 없이</mark> 반복해요. 빈 박에서 줄이 새어 울리지 않는지 확인해요.

**40~50분 · 녹음/셀프 피드백 (권장)**
스톱타임 한 마디를 녹음해요: <mark>침묵이 진짜 조용한가</mark>.

**오늘의 완료 기준:** 익숙한 **A7**으로 '툭 치고 → 침묵'을 반복하는 스톱타임 한 마디를 셔플로 또렷하게 연주할 수 있다.

## ④ 팁 / 흔한 실수

스톱타임에서 가장 자주 나오는 실수는 **침묵이 진짜 침묵이 아닌** 거예요.

```json
{
  "id": "m1.w3.d2.mute_for_rest",
  "type": "fretboard_diagram",
  "meta": { "title": "Release to silence the strings on the rest", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ **쉼표에서는 힘을 풀어요.** 왼손을 줄에서 떼지 말고, 누르는 힘만 살짝 풀면 소리가 멈춰요.

- **쉼표가 울려요.** 왼손 힘을 안 풀면 코드가 계속 울려 침묵이 사라져요.
- **박자가 빨라져요.** 침묵이 어색해 서두르면 다음 타격이 당겨져요. 발을 계속 밟아요.
- **손을 완전히 떼요.** 줄에서 손을 아예 떼면 개방현이 울려요. 살짝 얹은 채 힘만 풀어요.
- **너무 세게만 쳐요.** 툭 치는 타격도 과하면 지저분해요. 내일 배울 강약과 이어져요.
