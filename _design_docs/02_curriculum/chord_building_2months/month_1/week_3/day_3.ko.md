---
title: "다른 키로 옮기기 — II-V-I은 통째로 움직이는 패턴"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 같은 손모양을 두 프렛 위로: D키 II-V-I

## ① 이론/설명

어제까지 C키 II-V-I(Dm7-G7-Cmaj7)을 한 구역에서 잇는 걸 익혔죠. 오늘의 핵심은 짜릿해요: **그 손모양을 통째로 몇 프렛만 옮기면 다른 키의 II-V-I이 된다.**

C키를 온음(두 프렛) 위로 밀면 **D키**가 돼요:

- **Em7 (ii)** — 5현 근음, 7프렛. (C키 Dm7을 두 프렛 위로)
- **A7 (V)** — 6현 근음, 5프렛. (C키 G7을 두 프렛 위로)
- **Dmaj7 (I)** — 5현 근음, 5프렛. (C키 Cmaj7을 두 프렛 위로)

손가락 모양은 하나도 안 바뀌어요. 근음 줄 교차(5·6·5)도, 가이드톤이 반음씩 움직이는 것도 똑같아요. **모양을 외운 게 아니라 '패턴'을 배웠기 때문에** 12개 키 어디로든 밀 수 있는 거예요. 이게 인터벌로 코드를 배운 사람의 특권이에요.

## ② 시각 자료

D키 II-V-I 세 코드. C키에서 두 프렛 위로 밀렸을 뿐, 배치와 초록(가이드톤)의 위치 관계는 완전히 동일해요.

```json
{
  "id": "m1.w3.d3.em7",
  "type": "fretboard_diagram",
  "meta": { "title": "Em7 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 9, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w3.d3.a7",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

```json
{
  "id": "m1.w3.d3.dmaj7",
  "type": "fretboard_diagram",
  "meta": { "title": "Dmaj7 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 7, "finger": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — D키 가이드톤 라인.** 3번 줄에서 Em7 7도(D) → A7 3도(C#) → Dmaj7 7도(C#). **7→6→6프렛.** C키의 5→4→4와 똑같은 모양이 두 프렛 위로 밀렸을 뿐이에요.

```json
{
  "id": "m1.w3.d3.guide_tone_line_d",
  "type": "tab",
  "meta": { "title": "Guide-tone line (D key ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 7, "duration": "whole", "label": "Em7-b7(D)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 6, "duration": "whole", "label": "A7-3(C#)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 6, "duration": "whole", "label": "Dmaj7-7(C#)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 66.** 3번 줄 7→6→6. C키와 완전히 같은 움직임, 두 프렛 위. "패턴은 이동한다"를 손으로. 4번 반복.

**예제 2 — D키 II-V-I 컴핑.** 근음 5·6·5(7·5·5프렛)로 오가며 세 코드를 스트로크. 손모양은 C키와 똑같아요.

```json
{
  "id": "m1.w3.d3.ii_v_i_comp_d",
  "type": "tab",
  "meta": { "title": "ii-V-I comp (D key) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "D", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 74.** D키에서도 손은 한 구역(5~9프렛)에 묶여 있어요. C키에서 익힌 감각 그대로. 4번 반복.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Em7 → A7 → Dmaj7 을 순서대로. C키와 손모양이 똑같음을 느끼며 소리 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 패턴 이동)**
C키 II-V-I(3프렛 구역)과 D키(5프렛 구역)를 번갈아 잡아봐요. **손모양은 하나, 위치만 두 프렛 차이.** 눈 감고 두 키를 오갈 수 있으면 통과.

**20~40분 · 실전 반주 (예제 2 컴핑 / 70~80 BPM)**
**예제 2(D키)를 BPM 74에서 4번 반복.** 이어서 C키와 D키를 번갈아 순환하며 "같은 패턴 다른 자리"를 몸에 새겨요. 원하면 F키(1프렛), G키(3프렛 위)로도 밀어보세요.

**40~50분 · 녹음/셀프 피드백 (권장)**
C키·D키 II-V-I을 각각 15초씩 녹음. 체크: 두 키에서 손 이동 감각이 동일한지, 전환이 매끄러운지.

**오늘의 완료 기준:** C키 손모양을 두 프렛 위로 밀어 D키 II-V-I을 순환하고, "패턴은 이동 가능"을 이해한다.

## ④ 팁 / 흔한 실수

- **키마다 새로 외우려 하기.** II-V-I은 하나의 손모양이에요. 근음만 원하는 프렛에 두면 그 키의 II-V-I. 12키를 따로 외울 필요가 없어요.
- **고음 프렛 뮤트 부실.** 5~9프렛은 프렛 간격이 좁아 손이 붙어요. 6번 줄(5현 코드) 뮤트를 더 신경.
- **근음 위치 착각.** V(A7)는 6현 근음, ii·I은 5현 근음. 근음 줄을 헷갈리면 자리가 어긋나요.
- **속도 욕심.** 새 프렛 구역이 어색해도 66~74에서 정확히. 익으면 자연히 빨라져요.
