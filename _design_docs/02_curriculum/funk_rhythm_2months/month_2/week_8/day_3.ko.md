---
title: "리프 파트 만들기 — 싱글 노트 + 스타카토"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — 커팅과 대조되는 리프를 짓고 이어붙이다

## ① 이론/설명

어제 커팅 파트(벌스)를 완성했죠. 오늘은 두 번째 파트 — **<mark>싱글 노트 리프</mark>**를 완성하고, 어제 커팅 파트와 **<mark>이어붙여요.</mark>**

6주차의 싱글 노트 라인에 7주차의 스타카토를 얹어, 베이스와 대화하는 또렷한 리프를 만들어요. 여기서 핵심은 '대비'예요. 어제 커팅 파트가 <mark>넓게 반짝이는 화음 덩어리</mark>였다면, 오늘 리프는 <mark>콕콕 집는 단음 라인</mark>이에요. 커팅이 '벌스'라면 이 리프는 '훅' 또는 '브릿지' — 곡에 다른 색과 긴장을 주는 파트죠. 스타카토로 음을 짧게 끊으면 라인이 더 또렷하고 타이트하게 살아나요.

그리고 오늘의 진짜 미션은 **<mark>두 파트를 이어붙이는 것</mark>**이에요. 커팅 4마디 → 리프 4마디 → 다시 커팅처럼, 두 덩어리를 번갈아 놓으면 벌써 '한 곡의 구조'가 생겨요. 파트가 바뀌는 순간에 박이 흔들리지 않게, 그리고 커팅과 리프의 대비가 또렷하게 들리도록 이어보세요. 이게 반주를 넘어 <mark>'작곡'에 한 발 들이는 순간</mark>이에요.

두 파트를 매끄럽게 잇는 게 처음엔 어려워요. 특히 화음(커팅)에서 단음(리프)으로 넘어갈 때 손 모양과 뮤트가 확 바뀌니까요. 당연해요. 오늘은 완벽한 전환보다, '두 파트가 대비되며 이어진다'는 <mark>곡의 뼈대를 세우는 게 목표</mark>예요. 이 뼈대가 서면, 내일 최종 녹음은 그저 이 흐름을 한 번에 담아내는 일뿐이에요.

## ② 시각 자료

커팅과 대조되는 싱글 노트 리프예요. 스타카토로 또렷하게 끊어, <mark>어제 커팅 파트와 이어붙여요</mark>.

**E 노트 박스(싱글 노트).** 5·4번 줄 단음 라인. 파랑=근음·5도. 스타카토로 짧게 끊어 리프를 또렷이.

```json
{
  "id": "m2.w8.d3.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (single-note, strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

**예제 1 — 리프 빌딩(1마디).** 싱글 노트를 스타카토로 짧게 끊은 라인. 커팅과 대조되는 또렷함.

```json
{
  "id": "m2.w8.d3.riff1",
  "type": "tab",
  "meta": { "title": "Single-note riff, staccato (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 7, "duration": "eighth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78.** 트랙 위에서 4번. 스타카토로 라인이 또렷하고 타이트한지 확인.

**예제 2 — 길고 짧은 리프(2마디).** 스타카토와 레가토를 섞은 리프. 익으면 커팅 파트와 번갈아 이어붙여요.

```json
{
  "id": "m2.w8.d3.riff2",
  "type": "tab",
  "meta": { "title": "Riff with long-short mix (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 4, "fret": 7, "duration": "quarter", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 4, "fret": 7, "duration": "quarter", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]}
  ]}
}
```

▶ **BPM 78.** 커팅 4마디 → 이 리프 4마디로 이어보세요. 파트 전환에서 박이 안 흔들리게.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 싱글 노트 라인에 스타카토를 얹어 워밍업. <mark>커팅↔싱글노트 손 전환</mark>도 가볍게.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 리프 + 이어붙이기)**
리프 파트를 설계하고, 어제 커팅 파트와 <mark>어떻게 이을지</mark>(커팅→리프→커팅) 곡 구조를 그려요.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 78)**
**예제 1·2**(리프)를 트랙 위에서 완성한 뒤, **<mark>어제 커팅 파트와 번갈아 이어붙여</mark>** 8마디 구조로. 전환에서 박 유지가 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
커팅+리프 이어붙인 걸 녹음 후 체크: 리프가 또렷한가 / <mark>두 파트 대비가 들리는가</mark> / <mark>전환에서 박이 안 흔들리는가</mark>.

**오늘의 완료 기준:** 싱글 노트 리프를 스타카토로 완성하고, 어제 커팅 파트와 이어붙여 곡의 구조(벌스+훅)를 만들 수 있다.

## ④ 팁 / 흔한 실수

- **커팅과 리프가 안 대비됨.** 둘이 비슷하면 구조가 안 살아요. 커팅은 넓게, 리프는 또렷이 대조를.
- **전환에서 박 흔들림.** 화음→단음 전환에서 멈칫하기 쉬워요. 전환 지점을 미리 정해두세요.
- **스타카토가 흐림.** 리프는 짧게 끊어야 타이트해요. 친 직후 여음을 끊으세요.
- **잇지 않고 따로.** 오늘 핵심은 '이어붙이기'예요. 두 파트를 꼭 번갈아 쳐보세요.
