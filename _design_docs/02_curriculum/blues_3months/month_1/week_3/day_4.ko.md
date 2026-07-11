---
title: "리듬 변주 통합 — 3주차 결승선"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 9th·스톱타임·다이내믹을 하나로 합친다

## ① 이론/설명

3주차 결승선이에요! 이번 주에 배운 세 가지 — **9th 코드**, **스톱타임**, **다이내믹** — 을 오늘 하나로 합쳐요. <mark>같은 12마디도 이 세 가지 변주만 있으면 완전히 다른 곡처럼 들려요.</mark> 새로 배우는 건 없어요. 이미 손에 있는 재료를 요리하는 날이에요. 재료가 아무리 좋아도 한꺼번에 다 넣으면 맛이 뒤엉켜요. 그러니 오늘은 하나씩 순서대로 얹는 걸 목표로 해요. 셋을 완벽히 합치지 못해도 괜찮아요. 한 가지씩 또렷하게 들리기만 해도 이번 주는 충분히 성공이에요.

오늘의 완성물은 **스톱타임 A7 스탭**이에요. A7을 **1박에 툭 → 침묵 → '2와'에 툭 → 침묵 → 3박에 툭** 쳐요. <mark>이 엇박('2와')의 툭 한 방이 스톱타임에 드라마를 더해요.</mark> 침묵이 있어서 이 엇박 타격이 훨씬 극적으로 들려요. 여백이 소리를 살리는 순간이에요.

여기에 색과 강약을 더하면 완성이에요. **A7** 대신 **A9**으로 바꾸면 도시적인 색이 입혀지고, 타격마다 세게·여리게를 주면 그루브가 살아나요. <mark>여백·색·강약, 이 세 가지가 밋밋한 부기를 표정 있는 음악으로 바꿔요.</mark> 오늘 이 한 마디를 녹음하면 3주차가 완성돼요. 딱 한 마디지만, 이 안에 이번 주의 배움이 전부 담겨 있어요.

먼저 색부터 볼게요. 같은 스톱타임 리듬을 A9으로 치면 이렇게 재져요.

```json
{
  "id": "m1.w3.d4.stoptime_a9",
  "type": "tab",
  "meta": { "title": "Stop-time A9 stabs — color option", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** **A9**으로 스톱타임을 쳐요. 9도의 색 덕분에 툭 치는 한 방이 더 세련되게 들려요.

## ② 시각 자료

이번 주의 완성물, **스톱타임 A7 스탭**이에요. <mark>툭 치고 비우고, 엇박에 한 번 더 툭 — 이 한 마디가 3주차의 결과물이에요.</mark>

```json
{
  "id": "m1.w3.d4.stoptime_a7",
  "type": "tab",
  "meta": { "title": "Stop-time A7 stabs", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** A7을 **1박에 툭 → 침묵 → '2와'에 툭 → 침묵 → 3박에 툭.** 침묵이 소리만큼 중요해요. 9th 코드로 바꿔 색을 더해도 좋아요.

천천히 시작해서, <mark>침묵의 길이가 매번 똑같은지</mark> 발로 확인해요. 엇박이 흔들리면 발을 더 크게 밟아요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. 위 스톱타임 A7 스탭을 천천히 쳐서 손에 익혀요. **엇박**의 툭이 제자리에 떨어지는지 봐요.

이제 코드를 바꿔도 스톱타임이 되는지 볼게요. **A7**에서 **D7**으로 한 마디씩 옮겨요.

```json
{
  "id": "m1.w3.d4.stoptime_change",
  "type": "tab",
  "meta": { "title": "Stop-time over A7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플.** 1마디 **A7** 스톱타임, 2마디 **D7** 스톱타임. 코드가 바뀌어도 툭-침묵의 리듬은 똑같아요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 색·여백·강약 합치기)**
머릿속으로 A9의 색, 스톱타임의 여백, 2·4박의 강약을 <mark>하나씩 얹어 상상해요.</mark>

**20~40분 · 실전 스톱타임 A7 스탭 (BPM 80)**
완성물을 <mark>끊김 없이</mark> 반복하고, A9으로 바꿔 색도 더해 봐요.

**40~50분 · 녹음/셀프 피드백 (권장)**
스톱타임 한 마디를 녹음해요: <mark>여백·색·강약이 다 살아 있는가</mark>.

**오늘의 완료 기준:** 스톱타임 A7 스탭 한 마디를 셔플로 또렷하게 연주하고, A9의 색과 2·4박 강약까지 얹어 녹음할 수 있다. — 이번 주 결과물: A 블루스 리듬 변주(9th·스톱타임·다이내믹) (3주차 완성!)

## ④ 팁 / 흔한 실수

결승선에서 자주 나오는 실수예요. **세 가지를 한 번에** 다 하려다 리듬이 무너지기 쉬워요.

```json
{
  "id": "m1.w3.d4.color_option",
  "type": "fretboard_diagram",
  "meta": { "title": "A9 — the color option", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
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
▶ **색은 선택이에요.** A7으로 리듬이 탄탄해지면, **A9**으로 바꿔 색을 더해요. 순서를 지키면 쉬워요.

- **엇박이 밀려요.** '2와'의 툭이 늦으면 드라마가 죽어요. 발로 '와'를 정확히 밟아요.
- **침묵이 짧아요.** 서두르면 여백이 사라져요. 침묵도 정확한 박자로 세요.
- **색부터 욕심내요.** A9이 아직 안 잡히면 A7으로 먼저 완성하고, 색은 나중에 더해요.
- **녹음 생략.** 3주차 결과는 이 한 마디예요. 짧아도 꼭 남겨 다음 주와 비교해요.
