---
title: "졸업 — R-5-8 완성곡을 녹음하는 날"
dayKey: "m1.w4.d4"
estMinutes: 30
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 4주의 성장을 한 곡에 담기

## ① 이론/설명

축하해요. 오늘은 <mark>졸업하는 날</mark>이에요. **4주 전 첫날**을 떠올려 보세요 — 개방현 한 음 깨끗이 내는 것도 벅찼죠. 그런데 지금 여러분은 **투핑거**로 소리를 내고, **뮤팅**으로 잡음을 재우고, **드럼의 킥**에 루트를 얹고, 거기에 **5도와 옥타브**까지 더해요. 이 모든 게 겨우 4주 만에 손에 들어왔다는 게 놀랍지 않나요? 잘 치는 게 목표가 아니라, 멈추지 않고 끝까지 가는 게 목표예요.

오늘의 완성곡은 <mark>R–5–8 베이스라인</mark>이에요. 진행은 **E–C–G–D**, 한 마디에 한 코드씩 돌고, 패턴은 마디마다 **루트→5도→옥타브→5도**로 옥타브 박스를 통통 바운스해요. 이 진행은 **입문 일렉 졸업곡과 같아서**, 기타 치는 친구와 그대로 합주가 돼요. 코드가 도는 순서만 외우면, 나머지는 이미 여러분 손이 다 알고 있어요.

마지막 미션은 **녹음**이에요. 완성곡을 <mark>처음부터 끝까지 한 번</mark> 녹음해서, 오늘의 나를 **4주 전의 나**에게 들려주세요. 완벽하지 않아도 괜찮아요 — 멈추지 않고 끝까지 갔다면 그게 이미 **훌륭한 졸업 작품**이에요. 몇 달 뒤 다시 들으면, 오늘의 이 녹음이 얼마나 소중한지 알게 될 거예요.

서두르지 말고 **BPM 80**에서 네 마디를 한 흐름으로 이어요. **4현이든 5현이든 운지는 똑같고**, 5현이라면 저음 B를 엄지로 재워두면 돼요. 아마 네 마디가 짧게 느껴질 만큼, 손이 이미 훌쩍 자라 있을 거예요. 자, 4주의 성장을 한 곡에 담아 볼까요?

## ② 시각 자료

완성곡에 들어가기 전, **옥타브 박스**를 네 코드 자리에서 천천히 예행연습해요. <mark>한 코드당 루트와 옥타브를 반 마디씩</mark> 짚어, 가장 까다로운 줄 건너뛰기를 손에 먼저 익혀요. 각 예제를 **4현·5현 두 버전**으로 실었어요.

**예행연습 — 옥타브 박스 네 자리.** E→C→G→D의 루트와 옥타브를 한 코드당 반 마디씩. 폼이 바뀌는 자리를 천천히, 마지막 **초록 D 옥타브**에 안착해요.

```json
{
  "id": "m1.w4.d4.octave_box_prep_4",
  "type": "tab",
  "meta": { "title": "Octave box prep E-C-G-D — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 네 코드의 루트→옥타브를 반 마디씩. 줄 건너뛰기가 매끄러워질 때까지 천천히, 마지막 초록 D 옥타브 착지.

```json
{
  "id": "m1.w4.d4.octave_box_prep_5",
  "type": "tab",
  "meta": { "title": "Octave box prep E-C-G-D — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "8", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 운지는 4현과 똑같아요. 저음 B는 엄지로 덮어 재워두세요.

이제 <mark>이번 달의 완성곡</mark>이에요. 마디마다 **루트→5도→옥타브→5도**로, E–C–G–D를 처음부터 끝까지 통통 굴려요.

```json
{
  "id": "m1.w4.d4.rootfifth_octave_line_4",
  "type": "tab",
  "meta": { "title": "R-5-8 bassline E-C-G-D — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** 마디마다 루트→5도→옥타브→5도(옥타브 박스 바운스). E→C→G→D. 줄을 건너뛸 때 안 치는 줄은 재워 뭉개짐 0.

```json
{
  "id": "m1.w4.d4.rootfifth_octave_line_5",
  "type": "tab",
  "meta": { "title": "R-5-8 bassline E-C-G-D — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B(5번현)로 D 루트를 한 옥타브 아래(5번현 3프렛)로 더 묵직하게 내는 대안도 있어요(선택).

## ③ 오늘의 연습 (30분 루틴)

**0~7분 · 워밍업**
지난 3주의 루트·뮤팅·킥 붙이기와 어제의 4코드 항해를 BPM 60~70으로 풀어요. **손이 네 자리를 기억하는지** 확인해요.

**7~17분 · 오늘의 기술**
예행연습(옥타브 박스 네 자리)을 BPM 70에서 반복해요. <mark>네 코드에서 줄 건너뛰기가 매끄러운지</mark>, **옥타브가 또렷한지** 봐요.

**17~27분 · 적용 (이번 달 완성곡)**
R–5–8 완성곡을 BPM 70에서 처음부터 끝까지 → **네 마디가 끊김 없이** 이어지면 목표 BPM 80으로 올려 통째로 돌려요. 4현·5현 둘 다 한 흐름으로.

**27~30분 · 체크**
목표 BPM에서 완성곡을 통째로 한 번 녹음해요. **4주 전 첫날의 나**에게 들려준다는 마음으로.

**오늘의 완료 기준:** R–5–8 베이스라인 곡(E–C–G–D)을 투핑거로 처음부터 끝까지 멈추지 않고, 4현·5현 둘 다 BPM 80에서 녹음할 수 있다. (1개월 졸업 작품!)

## ④ 팁 / 흔한 실수

- **전환에서 박 밀림.** 마디가 바뀔 때 멈칫하면 곡이 끊겨요. 예행연습으로 바뀌는 자리를 미리 손에 익혀 두세요.
- **완벽부터 욕심.** 오늘은 흠 없는 연주가 목표가 아니에요. 멈추지 않고 끝까지 가는 것만으로 이미 졸업 작품이에요.
- **녹음 건너뛰기.** 녹음은 부끄러운 게 아니라 성장의 증거예요. 딱 한 번만 남겨 두면 나중에 큰 선물이 돼요.
- **저음 B 방심(5현).** 완성곡 내내 B는 엄지로 덮어두세요. 곡에 집중하다 B를 놓치면 저음이 웅웅 새요.

## 졸업 — 4주의 성장, 그리고 다음 여정

돌아보면 4주 동안 정말 많은 걸 손에 넣었어요. 아래 표에 이번 트랙의 목표 BPM을 정리해 뒀어요. 옆 칸에 여러분이 실제로 도달한 BPM을 적어 두면, 다음 트랙이 끝날 때 또 한 번 성장을 확인할 수 있어요.

| 주차 | 완성물 | 목표 BPM | 나의 BPM |
|---|---|---|---|
| 1주차 | 첫 소리 — 두 손 E·A 루트 펄스 | 65 | |
| 2주차 | 뮤팅 2음 루트 라인 (E-G-A-E) | 70 | |
| 3주차 | 8비트 루트 라인 (2코드) | 75 | |
| 4주차 | R-5-8 완성곡 (E-C-G-D) | 80 | |

**이제 어디로 갈까요?** 오늘의 완성곡이 끝이 아니라 시작이에요. 세 갈래 길이 여러분을 기다려요.

- **더 튀는 리듬이 좋다면 → 셔플 & 바운스 트랙.** 스윙의 들썩이는 리듬으로 라인에 탄력을 더해요.
- **손끝의 그루브가 짜릿했다면 → 슬랩/펑크 트랙.** 엄지 슬랩과 팝으로 몸이 절로 흔들리는 그루브를 만들어요.
- **음을 더 잇고 싶다면 → 워킹 베이스 트랙.** 루트 사이를 음으로 이어 걷는, 재즈의 라인을 배워요.

어느 길이든 오늘의 이 손에서 시작해요. 4주 동안 정말 수고 많았어요 — 이제 여러분은 베이스를 치는 사람이에요.
