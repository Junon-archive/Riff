---
title: "II-V-I 소개 — 대중음악의 심장, 그리고 근음 줄 교차"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — 왜 멀리 안 가고도 코드가 바뀌나

## ① 이론/설명

세상 노래의 절반은 **<mark>II-V-I</mark>** 이라는 코드 진행 위에 서 있어요. C키로 치면 **Dm7 → G7 → Cmaj7**. 팝, 재즈, 발라드, 시티팝… 어디서든 이 3코드 뭉치가 반복돼요. 그래서 이걸 부드럽게 잇는 손이 있으면 곡의 절반은 반주할 수 있어요.

문제는 초보가 이걸 칠 때 손이 넥 위를 **<mark>크게 점프</mark>**한다는 거예요. Dm7 잡으러 저기, G7 잡으러 여기, Cmaj7 잡으러 또 저기. 전환이 뚝뚝 끊기죠. 프로는 안 그래요. 프로의 비밀은 두 가지:

1. **<mark>근음 줄을 골라 쓴다</mark>.** 지난 2주간 배운 6현 근음 코드와 5현 근음 코드를 **교차**해서, 손을 한 프렛 구역에 묶어요. 예: Dm7(5현) → G7(6현) → Cmaj7(5현). 근음이 5번·6번·5번 줄을 오가지만, 손은 거의 제자리예요.
2. **<mark>가이드톤(3도·7도)이 반음씩만 움직인다</mark>.** 코드가 바뀔 때 3도와 7도만 최소 거리로 미끄러져요. 오늘은 이 두 감각을 씨앗으로 심습니다. 완벽하게 잇는 건 이번 주 내내 다듬을 거니까, 오늘은 "아, 프로는 이렇게 손을 안 뛰게 하는구나"만 느끼면 충분해요.

## ② 시각 자료

II-V-I 세 코드예요. 초록이 각 코드의 **<mark>가이드톤(3도·7도)</mark>** — 코드 성격을 쥐고, 다음 코드로 반음씩 움직일 음들이에요.

```json
{
  "id": "m1.w3.d1.dm7",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm7 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 6, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w3.d1.g7",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

```json
{
  "id": "m1.w3.d1.cmaj7",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 가이드톤 라인(거의 안 움직임).** 3번 줄에서 Dm7의 7도(C) → G7의 3도(B) → Cmaj7의 7도(B)를 이어요. 5프렛 → 4프렛 → 4프렛, 딱 한 칸 움직이고 끝. 이게 보이스 리딩이에요.

```json
{
  "id": "m1.w3.d1.guide_tone_line",
  "type": "tab",
  "meta": { "title": "Guide-tone line (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "G7-3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "Cmaj7-7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 66.** 한 마디에 한 음씩. 3번 줄 5→4→4. "코드는 바뀌는데 이 음은 거의 안 움직인다"를 귀로 붙잡으세요. 4번 반복.

**예제 2 — II-V-I 컴핑.** 세 코드를 한 마디씩 스트로크. 근음이 **5번(Dm7) → 6번(G7) → 5번(Cmaj7)** 줄을 오가지만 손은 프렛 3~7 구역에 머물러요.

```json
{
  "id": "m1.w3.d1.ii_v_i_comp",
  "type": "tab",
  "meta": { "title": "ii-V-I comp (roots) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 72.** 마디마다 Dm7 → G7 → Cmaj7 전체를 스트로크. 근음 줄(5·6·5)만 의식하고, 손이 넥을 뛰어다니지 않는지 확인. 4번 반복.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Dm7 · G7 · Cmaj7 세 코드를 각각 잡아 소리 체크. 특히 <mark>Dm7·Cmaj7의 6번 줄, G7의 전체 여섯 줄이 깨끗한지</mark>.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 가이드톤)**
**예제 1**을 짚으며 3번 줄 5→4→4를 눈으로 따라가요. 각 코드에서 3도·7도(초록)가 어디인지 손가락으로 짚어 확인. "<mark>코드는 바뀌어도 가이드톤은 붙어 있다</mark>."

**20~40분 · 실전 반주 (예제 2 컴핑 / 66~76 BPM)**
**예제 2를 BPM 72에서 4번 반복.** 근음 줄이 5·6·5로 바뀌는 걸 의식하되, <mark>손 위치는 한 구역에 묶어 두기</mark>. 익으면 코드 전체를 부드럽게 이어 스트로크.

**40~50분 · 녹음/셀프 피드백 (권장)**
II-V-I 순환 30초 녹음. 체크: 코드 전환 시 손이 **<mark>불필요하게 크게 점프</mark>**하지 않았는지, 전환 타이밍이 흐려지지 않았는지.

**오늘의 완료 기준:** Dm7·G7·Cmaj7을 한 구역에서 잡고, 가이드톤(3도·7도)이 어디인지 짚으며 II-V-I을 느리게 순환한다.

## ④ 팁 / 흔한 실수

- **넥을 뛰어다니기.** 근음 줄을 안 고르면 손이 여기저기 점프해요. "이 코드 근음은 몇 번 줄?"을 먼저 정하면 손이 한 구역에 묶여요.
- **가이드톤을 무시.** 3도·7도가 코드의 정체이자 연결선이에요. 근음만 보지 말고 가이드톤의 움직임을 따라가세요.
- **속도부터 올리기.** II-V-I은 전환 정확도가 전부예요. 66에서 매끄러운 게 100에서 뚝뚝 끊기는 것보다 강해요.
- **Dm7·Cmaj7의 6번 줄.** 5현 코드니까 6번 줄은 죽여야 해요.
