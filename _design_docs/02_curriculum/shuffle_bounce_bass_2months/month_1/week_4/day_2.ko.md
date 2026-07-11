---
title: "다이내믹과 필 — 표정 있는 셔플"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 다이내믹과 필, 표정 있는 셔플

## ① 이론/설명

어제 턴어라운드로 12마디의 매듭이 손에 들어왔어요. <mark>한 달 전엔 한 음도 벅찼는데, 이제 네 마디를 매끄럽게 되돌려요.</mark> 오늘은 그 위에 **표정**을 입혀요. 같은 음을 눌러도, 세기와 작은 필 하나로 셔플이 훨씬 살아나요.

첫 번째는 **다이내믹**이에요. 모든 음을 똑같은 세기로 치면 라인이 평평해져요. <mark>루트는 조금 세게, 지나가는 b7은 살짝 여리게</mark> — 이 작은 차이가 롱-숏 위에 또 하나의 결을 더해요. 셔플의 통통 튐이 세기의 물결과 겹치면, 밋밋하던 라인이 숨을 쉬어요.

두 번째는 **필**이에요. 12마디의 마지막 B7 마디, 그 **마지막 박**에서 살짝 변주를 넣어요. b7과 6도를 <mark>여덟 개로 잘게 쪼개 통통 굴리면</mark>, 곡이 다시 처음으로 넘어가는 문이 열려요. 음은 다 아는 부기 계단 안에 있으니 새로 외울 건 없어요.

욕심은 금물이에요. 다이내믹도 필도 <mark>그루브를 해치지 않을 만큼만</mark> 살짝이에요. 세기를 너무 주면 박자가 흔들리고, 필을 너무 넣으면 셔플이 어수선해져요. **5현**이라면 저음 B를 재운 채 똑같이 표정을 넣어요. 오늘의 목표는 화려함이 아니라, 표정 있는 셔플이에요.

## ② 시각 자료

오늘은 두 가지예요. 먼저 **필이 놓이는 자리**를 지판에서 확인하고, 그다음 다이내믹과 필을 얹은 **표정 있는 턴어라운드**를 통과해요. 각 예제는 <mark>4현·5현 두 버전</mark>이에요.

먼저 **필이 놓이는 B7 마디**예요. 마지막 박에서 <mark>b7과 6도를 여덟 개로 잘게 굴려</mark> 처음으로 되돌아가요.

```json
{
  "id": "m1.w4.d2.fill_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 turnaround bar fill notes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4현.** B7 부기(3번 현 2프렛 루트)의 네 음이에요. 이 중 **b7**(2번 현 7프렛)과 **6도**(6프렛)가 마지막 박의 필이 돼요.

```json
{
  "id": "m1.w4.d2.fill_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 turnaround bar fill notes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5현.** 자리는 4현과 똑같아요. 저음 **B**는 엄지로 재워 둬요.

이제 다이내믹과 필을 얹은 **표정 있는 턴어라운드**예요. 루트를 조금 세게, 마지막 마디 끝에서 <mark>필로 통통 튀며</mark> 넘어가요.

```json
{
  "id": "m1.w4.d2.turnaround_fill_4",
  "type": "tab",
  "meta": { "title": "Turnaround with fill B7-A7-E7-B7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 셔플.** B7-A7-E7-B7 위에 루트는 세게, b7은 여리게. 마지막 B7 끝박에서 **b7-6**을 여덟 개로 굴려 처음으로 이어요.

```json
{
  "id": "m1.w4.d2.turnaround_fill_5",
  "type": "tab",
  "meta": { "title": "Turnaround with fill B7-A7-E7-B7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "eighth", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **5현.** 음과 자리는 4현과 똑같아요. 저음 **B**는 엄지로 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 **턴어라운드**를 BPM 60에 굴리며 손을 풀어요. 네 마디가 매끄럽게 이어지는지 확인해요.

**10~20분 · 두뇌 훈련**
같은 턴어라운드를 **루트만 조금 세게** 쳐 봐요. <mark>세기의 차이가 소리에 결을 만드는지</mark> 귀로 들으며 확인해요.

**20~40분 · 실전**
**필을 얹은 턴어라운드**를 **BPM 70**에서 반복해요. 마지막 박의 여덟 개 필이 흔들리지 않는 게 목표예요. 4현으로 익힌 뒤 5현으로도 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 **다이내믹과 필이 살아 있는지** 들어봐요. 오늘 도달한 BPM도 적어 둬요.

**오늘의 완료 기준:** 턴어라운드에 다이내믹과 마지막 박 필을 얹어, BPM 70에서 4현·5현 둘 다 표정 있게 굴릴 수 있다.

## ④ 팁 / 흔한 실수

- **세기를 너무 줘요.** 루트를 세게 치려다 박자가 흔들리기 쉬워요. 세기 차이는 아주 살짝이면 충분해요.
- **필에서 박자가 밀려요.** 여덟 개로 쪼갤 때 뒤로 밀리곤 해요. 필 두 음도 롱-숏의 결 안에 둬요.
- **필을 너무 넣어요.** 마디마다 필을 넣으면 셔플이 어수선해져요. 필은 마지막 B7 한 곳에만 살짝 둬요.
- **저음 B 방심(5현).** 표정에 집중하느라 안 쓰는 저음 현을 놓치기 쉬워요. B는 엄지로 덮어 둬요.
