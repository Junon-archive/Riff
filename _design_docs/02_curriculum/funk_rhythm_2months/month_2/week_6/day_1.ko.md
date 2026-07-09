---
title: "싱글 노트 펑크 — 코드를 버리고 한 줄만"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — 펑크 기타는 코드만 치는 게 아니다

## ① 이론/설명

펑크 기타는 코드만 치는 거라고 생각했다면, 오늘 반전이에요. 나일 로저스나 커티스 메이필드처럼, 프로들은 한 줄만 콕콕 집어 **<mark>베이스라인 같은 단음 라인</mark>**을 그려요. 코드를 아예 버리고 음 하나하나로 그루브를 만드는 거죠.

원리는 이래요. 나머지 다섯 줄을 완벽히 죽이고(왼손·오른손 뮤트), 딱 한 줄만 또렷이 울려요. 코드가 물감을 넓게 칠하는 붓이라면, 싱글 노트는 <mark>가는 선을 그리는 펜</mark>이에요. 같은 오른손 모터 위에, 이번엔 화음 대신 또렷한 음 하나를 얹는 거예요.

오늘은 **<mark>5번 줄 하나</mark>**로 짧은 E 라인을 그려봐요. 근음 E는 5번 줄 7프렛 — 지난주 E9 코드의 근음과 같은 자리예요. 그 주변의 몇 음(아래 노트 맵)으로 짧은 리프를 만듭니다. 관건은 두 가지예요. 첫째, <mark>안 쓰는 줄을 완벽히 뮤트해서 잡음 0</mark>. 둘째, <mark>한 줄을 정확히 조준해 또렷이 울리기</mark>.

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

한 줄만 정확히 치는 게 의외로 어려워요. 옆줄이 자꾸 새거나, 반대로 힘이 들어가 음이 뭉개지죠. 정상이에요. 오늘은 라인이 화려하지 않아도 좋으니, '한 줄만 또렷이, 나머진 침묵'이라는 감각을 잡으세요. <mark>이 라인이 베이스와 맞물리는 순간</mark>, 여러분의 펑크는 갑자기 두툼하고 단단해져요. 코드로만 반주하던 손이 이제 선을 그리기 시작하는 거예요. 처음엔 어색해도, 이 단음의 세계가 열리면 표현할 수 있는 게 두 배로 넓어져요.

## ② 시각 자료

오늘 쓸 음들의 지도예요. 파랑=근음 E(5번 줄 7프렛)와 5도, 나머진 펜타토닉 음. <mark>5번 줄 하나로 라인을 그려요</mark>.

**E 펑크 노트 박스(5·4번 줄).** 파랑이 근음 R(5번 7프렛)과 5도. 오늘은 5번 줄 음(b7·R·b3)만 써요.

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

**예제 1 — 5번 줄 라인(1마디).** E·G·D를 오가는 짧은 리프, 음 사이는 고스트 '퍽'으로. 한 줄만 또렷이.

```json
{
  "id": "m2.w6.d1.line5_1bar",
  "type": "tab",
  "meta": { "title": "Single-note line on the 5th string (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 라인 음만 왼손을 꾹, 나머진 뮤트. 옆줄이 새지 않는지 확인하며 4번.

**예제 2 — 5번 줄 리프(2마디).** 같은 라인을 2마디로. 반복되며 베이스라인처럼 몸에 익어요.

```json
{
  "id": "m2.w6.d1.line5_2bar",
  "type": "tab",
  "meta": { "title": "5th-string riff (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 2마디를 끊김 없이. 익으면 다른 음을 넣어 나만의 리프로 응용.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 5번 줄 한 줄만 튕기고 <mark>나머지 다섯 줄은 완벽 뮤트</mark>. 잡음이 0인지 집중 점검.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 한 줄 조준 + 뮤트)**
노트 맵을 보며 5번 줄 음(b7·R·b3) 위치를 각인. 왼손은 <mark>라인 음만 누르고 나머진 덮는 감각</mark>을 익혀요.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 70)**
**예제 1**(5번 줄 라인)을 BPM 70에서 4번 → **예제 2**(2마디 리프)로. <mark>한 줄만 또렷이</mark>, <mark>나머진 침묵</mark>이 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: <mark>한 줄만 또렷이 났는가</mark> / <mark>나머지 줄 잡음이 없는가</mark> / <mark>라인이 베이스처럼 또렷한가</mark>.

**오늘의 완료 기준:** 5번 줄 하나로 짧은 E 라인을, 나머지 줄 잡음 없이 또렷이 연주할 수 있다.

## ④ 팁 / 흔한 실수

- **옆줄이 샘.** 왼손·오른손 뮤트가 약해요. 안 쓰는 줄을 손가락 옆면·손바닥으로 덮으세요.
- **음이 뭉개짐.** 힘이 너무 들어갔어요. 라인 음은 또렷하게, 하지만 가볍게.
- **오른손이 멈춤.** 라인에 신경 쓰다 모터가 끊겨요. 음 사이도 오른손은 계속(고스트).
- **속도 욕심.** 한 줄 조준이 정확해야 라인이 살아요. 느리게, 잡음 0.
