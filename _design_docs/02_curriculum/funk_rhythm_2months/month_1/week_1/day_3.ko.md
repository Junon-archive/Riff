---
title: "업/다운 밸런스와 빈 피킹 — 손은 멈추지 않는다"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — 안 치는 자리에서도 손은 흔들린다

## ① 이론/설명

모터가 돌기 시작했으니, 오늘은 그 모터를 **고르게** 만들어요. 핵심은 두 가지 — <mark>다운과 업의 밸런스</mark>, 그리고 '<mark>빈 피킹</mark>'이에요.

대부분 다운스트로크는 세고 또렷한데 업스트로크는 약하고 흐릿해요. 그러면 16비트가 '쿵-작-쿵-작'처럼 절뚝거려요. 좋은 펑크는 다운과 업의 **<mark>음량과 타이밍이 쌍둥이처럼 균일</mark>**해요. 눈을 감고 다운만, 업만 따로 쳐 보며 둘의 크기를 맞춰 보세요.

두 번째는 **<mark>빈 피킹(고스트 스트로크)</mark>** 이에요. 16비트를 다 소리 내는 게 아니라, 어떤 자리는 **<mark>줄을 안 치고 지나가요</mark>.** 그런데 여기서 오른손은 절대 멈추지 않아요 — 허공에서 계속 흔들리다가, 소리 낼 자리에서만 줄을 스치는 거예요. 악보에서 쉼표로 표시된 자리가 바로 '손은 움직이지만 줄은 안 치는' 자리예요.

```json
{
  "id": "m1.w1.d3.downbeat_pick",
  "type": "tab",
  "meta": { "title": "Play the beat, empty-pick the rest (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

이게 왜 중요하냐면, 손이 멈췄다 다시 출발하면 반드시 박이 밀리거든요. 흔들림을 유지한 채 '칠 자리'만 고르면 타이밍이 칼같이 맞아요. 처음엔 헷갈리는 게 당연해요 — 안 치는 자리인데 손은 움직여야 하니까요. 천천히, 손은 계속 스윙하고 입으로 '치는 자리'만 세면서 익혀 봅시다. 이 감각이 다음 주 <mark>고스트 노트</mark>의 밑바탕이에요. 그러니 오늘 좀 헤매더라도 자책하지 마세요. 손과 머리가 따로 노는 이 어색함은 누구나 반드시 거쳐 가는 관문이거든요.

## ② 시각 자료

'칠 자리'와 '빈 자리'를 눈으로 구분해요. 아래 악보에서 음표는 실제로 스치는 자리, 쉼표는 손은 움직이지만 줄은 안 치는 <mark>빈 피킹 자리</mark>예요.

**예제 1 — 박에만 치기(1마디).** 각 박의 첫 조각(다운)만 소리 내고 나머지 셋은 빈 피킹. 손은 16비트로 계속 흔들려요.

```json
{
  "id": "m1.w1.d3.downbeat_pick",
  "type": "tab",
  "meta": { "title": "Play the beat, empty-pick the rest (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 68.** '치고-쉬고-쉬고-쉬고'를 네 번. 소리는 네 번뿐이지만 손은 열여섯 번 흔들려야 해요.

**예제 2 — 박과 앤(2마디).** 박(다운)과 '앤'(업) 자리를 소리 내요. 8분음표 느낌이 16비트 그리드 위에 얹힌 거예요.

```json
{
  "id": "m1.w1.d3.eighth_feel",
  "type": "tab",
  "meta": { "title": "Down and up-beat (eighth feel, 2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true },
      { "string": 5, "fret": 5, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 68.** '치고-쉬고-치고-쉬고'. 다운과 업의 음량이 쌍둥이처럼 같은지 귀로 확인하세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 다운만 16번, 업만 16번 따로 쳐보며 <mark>둘의 음량을 맞춰요</mark>. 그다음 다운-업 번갈아.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 빈 피킹)**
손은 16비트로 계속 흔들되, 입으로 '칠 자리'만 세요(예: "1...&..."). <mark>손은 안 멈추고</mark> 소리만 골라내는 감각을 익힙니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 68)**
**예제 1**(박에만 치기)을 BPM 68에서 4번 → **예제 2**(박과 앤)로. 쉼표 자리에서도 <mark>손이 흔들리는지</mark>가 관건.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: <mark>소리 낸 자리의 타이밍이 정확한가</mark> / <mark>빈 자리에서 손이 멈추지 않았는가</mark> / <mark>다운·업 음량이 균일한가</mark>.

**오늘의 완료 기준:** 오른손 흔들림을 유지한 채 원하는 자리만 골라 소리 내고(빈 피킹), 다운과 업의 음량을 고르게 낼 수 있다.

## ④ 팁 / 흔한 실수

- **업스트로크가 약함.** 다운만 세면 절뚝거려요. 업도 다운만큼 또렷하게.
- **쉼표에서 손 멈춤.** 빈 피킹은 '손을 멈추는' 게 아니라 '줄을 안 치는' 거예요. 손은 계속 스윙.
- **줄을 너무 세게 스침.** 빈 피킹 자리에서 실수로 줄을 건드리면 지저분해져요. 왼손 뮤트를 유지하세요.
- **입으로 안 세기.** 눈으로만 하면 헷갈려요. '칠 자리'를 소리 내어 세면 훨씬 정확해져요.
