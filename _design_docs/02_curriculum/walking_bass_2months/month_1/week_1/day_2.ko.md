---
title: "Bb7·C7의 코드톤 — 같은 모양, 다른 집"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — Bb7·C7 코드톤, 손모양을 옮겨 잡기

## ① 이론/설명

어제 F7의 코드톤을 손에 익혔죠. 오늘은 같은 원리를 **Bb7**과 **C7**로 옮겨요. F 블루스는 이 세 코드 — **F7·Bb7·C7** — 로 돌아가니까, 오늘 두 코드를 더하면 이번 주 무대의 돌이 전부 손에 들어와요. 좋은 소식은, <mark>코드톤 공식은 어제와 똑같아요 — R·3·5·b7.</mark> 집(루트)만 바뀌지 밟는 방법은 그대로예요. 한 코드에서 익힌 손모양이 다른 코드에서도 그대로 통하니, 사실 오늘 새로 배우는 건 손을 어디로 옮기느냐 하나뿐이에요.

**Bb7**은 **Bb·D·F·Ab** 네 음이에요. 지판에서 **루트 Bb는 3번현 1프렛**, **3도 D는 3번현 5프렛**, **5도 F는 2번현 3프렛**, **b7도 Ab은 2번현 6프렛**. 어제 F7 손모양을 통째로 한 현씩 위로 옮긴 모양이라, <mark>손가락 사이 간격은 그대로</mark> 위치만 이동하면 돼요.

**C7**은 **C·E·G·Bb** 네 음이에요. **루트 C는 3번현 3프렛**, **3도 E는 3번현 7프렛**, **5도 G는 2번현 5프렛**, **b7도 Bb은 2번현 8프렛**. Bb7과 똑같은 손모양을 두 프렛 위로 밀면 그대로 C7이 돼요. 이렇게 **하나의 모양**을 옮겨 세 코드를 다 잡는 감각이, 앞으로 워킹을 훨씬 편하게 만들어줘요.

먼저 **Bb7의 집(루트 Bb)**부터 짚어봐요.

```json
{
  "id": "m1.w1.d2.bb7_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root on the A string — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 루트 Bb는 3번현 1프렛. 어제 F7보다 한 현 위, 한 칸 옆으로 옮겨진 집이에요.

```json
{
  "id": "m1.w1.d2.bb7_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root on the A string — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현이 하나 더 있을 뿐이에요.

**5현**을 쓴다면 이 위치들도 4현과 완전히 똑같아요. 다만 5현은 저음 B현 덕분에, 나중에 Bb·C 같은 저음 루트를 더 아래 옥타브에서도 잡을 수 있어요. 오늘은 우선 **4현 기준 위치**를 눈에 익히는 데 집중해요.

## ② 시각 자료

이제 **Bb7과 C7의 코드톤**을 지판과 악보로 확인해요. 먼저 두 코드의 지도를 나란히 보고, <mark>같은 손모양이 위치만 바뀌는 것</mark>을 눈으로 확인한 뒤, Bb7 아르페지오로 소리를 내봐요. 모든 예제는 **4현·5현 두 버전**이에요.

먼저 **Bb7 코드톤 지도**예요. 파랑 점 네 개가 Bb·D·F·Ab이에요.

```json
{
  "id": "m1.w1.d2.bb7_tones_4",
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

▶ **4현.** 루트 Bb(3번현 1프렛)에서 3도 D·5도 F·b7 Ab까지, 어제 F7과 똑같은 모양이 한 현 위로 올라갔어요.

```json
{
  "id": "m1.w1.d2.bb7_tones_5",
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

▶ **5현.** 위치는 4현과 똑같아요. 저음 B는 손으로 덮어 둬요.

다음은 **C7 코드톤 지도**. 파랑 점 네 개가 C·E·G·Bb이에요.

```json
{
  "id": "m1.w1.d2.c7_tones_4",
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

▶ **4현.** 루트 C(3번현 3프렛)에서 3도 E·5도 G·b7 Bb까지. Bb7 모양을 두 프렛 위로 민 자리예요.

```json
{
  "id": "m1.w1.d2.c7_tones_5",
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

이번엔 **Bb7 아르페지오**로 소리를 확인해요. R-3-5-b7을 한 박씩 또박또박 밟아 올라가요.

```json
{
  "id": "m1.w1.d2.bb7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio (ascending) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** Bb7의 네 코드톤을 아래에서 위로. F7과 똑같은 걸음걸이, 위치만 달라요.

```json
{
  "id": "m1.w1.d2.bb7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio (ascending) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 두고, 익숙해지면 더 낮은 음역으로 확장해 봐요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
어제 익힌 F7 아르페지오를 BPM 70으로 한 번 풀어요. **어제의 감각**을 손끝에 되살립니다.

**10~20분 · 두뇌 훈련**
Bb7·C7 지도를 보며 두 코드의 **루트 → 3도 → 5도 → b7** 위치를 손끝으로 확인해요. <mark>같은 모양이 옮겨질 뿐이라는 것</mark>을 손으로 느껴봐요.

**20~40분 · 실전 (오늘의 완성물)**
아래 C7 아르페지오를 **BPM 70**에서 반복하고, 이어서 Bb7 아르페지오와 번갈아 쳐봐요. 오늘의 목표는 **F7·Bb7·C7 세 코드의 코드톤**을 다 손에 넣는 거예요.

```json
{
  "id": "m1.w1.d2.c7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "C7 chord-tone arpeggio (ascending) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** C7의 네 코드톤을 아래에서 위로 또박또박. 이제 세 코드의 돌이 다 모였어요.

```json
{
  "id": "m1.w1.d2.c7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "C7 chord-tone arpeggio (ascending) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 두고, 익숙해지면 더 낮게 확장해 봐요.

**40~50분 · 녹음/피드백**
30초 녹음해 Bb7과 C7의 아르페지오가 **모두 고른 크기로** 울리는지 들어봐요. 헷갈리는 코드가 있으면 그 지도를 다시 확인해요.

**오늘의 완료 기준:** F7·Bb7·C7 세 코드의 코드톤(R-3-5-b7)을 지판에서 찾아, BPM 70에서 각 코드의 아르페지오를 또박또박 칠 수 있다.

## ④ 팁 / 흔한 실수

- **세 코드를 헷갈려요.** Bb7과 C7은 손모양이 같아서 위치를 착각하기 쉬워요. 루트가 어디인지부터 확인하면 나머지 세 음은 저절로 따라와요.

```json
{
  "id": "m1.w1.d2.thirds_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 & C7 thirds (landing targets) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 5, "label": "Bb7-3", "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "label": "C7-3", "role": "target", "highlight": true }
  ]}
}
```

▶ **4현.** 초록 두 음이 각 코드의 3도 — Bb7의 D(3번현 5프렛), C7의 E(3번현 7프렛)예요. 이 착지 음부터 익혀 둬요.

```json
{
  "id": "m1.w1.d2.thirds_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 & C7 thirds (landing targets) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 5, "label": "Bb7-3", "role": "target", "highlight": true },
    { "string": 3, "fret": 7, "label": "C7-3", "role": "target", "highlight": true }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 내려가 더 낮은 옥타브도 시험해 볼 수 있어요.

- **b7을 또 빠뜨려요.** 어제처럼 b7이 도미넌트 색의 핵심이에요. Bb7의 Ab, C7의 Bb을 잊지 마세요.
- **손모양만 믿고 소리를 안 들어요.** 모양이 같아도 코드마다 울림이 달라요. 매번 소리를 귀에 담아요.
- **저음 B 방심(5현).** 위치를 옮기다 B를 건드리면 저음이 새요. 안 쓰는 B는 늘 덮어 두세요.
