---
title: "F7 코드톤 아르페지오 — 1주차 완성물"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — F7 코드톤 아르페지오, 이번 주를 완성하기

## ① 이론/설명

1주차 마지막 날이에요. 이번 주 내내 익힌 코드톤을 하나로 모아, **F7 코드톤 아르페지오**를 이번 주의 완성물로 만들어요. 지금까지 F7·Bb7·C7의 <mark>밟아도 되는 안전한 돌</mark>을 다 손에 넣었죠. 오늘은 그중 **F7** 하나를 골라, R-3-5-b7을 4분음으로 또박또박 걸어 이번 주를 마무리해요.

완성 라인은 아주 단순해요. **루트 F(4번현 1프렛) → 3도 A(4번현 5프렛) → 5도 C(3번현 3프렛) → b7 Eb(3번현 6프렛)**. 한 박에 한 음씩, **BPM 80**의 스윙 4분음으로 밟아 올라가요. 이 네 음이 F7 위 '안전한 돌'이고, 앞으로 어떤 워킹을 배우든 <mark>이 아르페지오가 뼈대</mark>가 돼요. 화려한 장식은 나중에 얹으면 되고, 오늘은 이 골격을 또렷하고 균일하게 걷는 게 전부예요.

오늘은 세 코드의 지판도 나란히 정리해요. **F7·Bb7·C7** 세 코드의 코드톤 위치를 한 번에 눈에 담아두면, 다음 주부터 배울 진짜 워킹 라인이 훨씬 수월해져요. 세 코드가 <mark>같은 손모양을 옮긴 것</mark>이라는 사실을 다시 확인하며, R부터 b7까지 손끝으로 짚어보세요.

먼저 가장 자주 밟는 두 돌, **루트 F와 3도 A**를 다시 잡아둬요.

```json
{
  "id": "m1.w1.d4.f7_anchor_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 anchors — root F and 3rd A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 루트 F(4번현 1프렛)와 초록 음 3도 A(4번현 5프렛). 워킹에서 가장 자주 오가는 두 돌이에요.

```json
{
  "id": "m1.w1.d4.f7_anchor_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 anchors — root F and 3rd A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 손으로 덮어 둬요.

**5현**이라면 오늘의 완성 아르페지오도 4현과 음·위치가 똑같아요. 저음 B현 덕분에 같은 F7을 <mark>한 옥타브 아래에서 더 묵직하게</mark> 시험해 볼 수도 있어요. 우선은 4현 기준으로 이번 주 완성물을 또박또박 완성해요.

## ② 시각 자료

이제 이번 주의 완성물을 만들어요. 먼저 **F7·Bb7·C7 세 코드의 지판**을 나란히 확인하고, 그다음 <mark>F7 코드톤 아르페지오</mark>를 완성 라인으로 돌려요. 모든 예제는 **4현·5현 두 버전**이에요.

먼저 **F7 지판**이에요. 파랑 점 네 개가 R·3·5·b7이에요.

```json
{
  "id": "m1.w1.d4.f7_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 루트 F(4번현 1프렛)에서 b7 Eb(3번현 6프렛)까지. 오늘 완성 아르페지오가 바로 이 네 자리예요.

```json
{
  "id": "m1.w1.d4.f7_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

다음은 **Bb7 지판**이에요. 파랑 점 네 개가 R·3·5·b7이에요.

```json
{
  "id": "m1.w1.d4.bb7_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 루트 Bb(3번현 1프렛)에서 b7 Ab(2번현 6프렛)까지. F7 모양을 한 현 위로 옮긴 자리예요.

```json
{
  "id": "m1.w1.d4.bb7_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

그리고 **C7 지판**이에요. 파랑 점 네 개가 R·3·5·b7이에요.

```json
{
  "id": "m1.w1.d4.c7_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 루트 C(3번현 3프렛)에서 b7 Bb(2번현 8프렛)까지. Bb7 모양을 두 프렛 위로 민 자리예요.

```json
{
  "id": "m1.w1.d4.c7_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

이제 이번 주 완성물, **F7 코드톤 아르페지오**예요. R-3-5-b7을 **BPM 80** 스윙 4분음으로 또박또박 밟아 올라가요.

```json
{
  "id": "m1.w1.d4.f7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 4현.** F7의 R(4번현 1프렛)-3(4번현 5프렛)-5(3번현 3프렛)-b7(3번현 6프렛)을 또박또박 밟아요. 이 네 음이 F7 위 '안전한 돌'이에요.

```json
{
  "id": "m1.w1.d4.f7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80, 5현.** 음과 위치는 4현과 똑같아요. 저음 B로 내려가 같은 F7을 더 묵직한 저음역에서도 시험해 봐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 세 코드 아르페지오 워킹을 BPM 72로 한 번 걸어요. **세 코드의 감각**을 손끝에 되살립니다.

**10~20분 · 두뇌 훈련**
F7·Bb7·C7 지판을 보며 각 코드의 R부터 b7까지 손끝으로 확인해요. 그다음 아래 준비 예제로, **반 마디씩 길게** F7 아르페지오를 느리게 밟아봐요.

```json
{
  "id": "m1.w1.d4.f7_prep_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio prep (long notes) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 4현.** 각 음을 반 마디씩 길게 울려요. 음 사이 위치 이동을 여유롭게 익히는 준비 운동이에요.

```json
{
  "id": "m1.w1.d4.f7_prep_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio prep (long notes) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 둬요.

**20~40분 · 실전 (이번 주 완성물)**
위 **F7 코드톤 아르페지오**를 **BPM 80**에서 반복해요. 한 박에 한 음씩, R-3-5-b7이 <mark>모두 같은 크기로 고르게</mark> 울리는 게 목표예요. 4현으로 익힌 뒤 5현으로도 같은 감각을 확인해요.

**40~50분 · 녹음/피드백**
30초 녹음해 네 음이 **또박또박 균일하게** 이어지는지 들어봐요. 이번 주 도달한 BPM도 적어두면, 다음 주 워킹 라인을 시작할 든든한 출발점이 돼요.

**오늘의 완료 기준:** F7 코드톤 아르페지오(R-3-5-b7)를 BPM 80 스윙 4분음으로 또박또박, 4현·5현 둘 다 균일하게 걸을 수 있다. (1주차 완성!)

## ④ 팁 / 흔한 실수

- **완성이라고 서둘러요.** 마지막 날이라 빨라지고 싶지만, 80에서 네 음이 고르지 않으면 라인이 무너져요. 균일함이 먼저예요.

```json
{
  "id": "m1.w1.d4.review_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Three homes — F, Bb, C roots — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 세 파랑이 각 코드의 집(루트) — F(4번현 1프렛)·Bb(3번현 1프렛)·C(3번현 3프렛)이에요. 이 세 집만 확실하면 나머지는 따라와요.

```json
{
  "id": "m1.w1.d4.review_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Three homes — F, Bb, C roots — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 내려가 더 낮은 루트도 잡아볼 수 있어요.

- **b7을 흘려요.** 마지막 b7을 짧게 끊고 넘어가기 쉬워요. 네 번째 돌까지 충분히 울려야 F7이 완성돼요.
- **5현 저음 B 방심.** 완성에 집중하다 B를 건드리면 저음이 새요. 안 쓰는 B는 늘 덮어 두세요.
- **한 주를 스스로 칭찬하기.** 코드톤을 다 손에 넣은 건 큰 진전이에요. 다음 주엔 이 돌들을 잇는 진짜 워킹 라인을 배워요.
