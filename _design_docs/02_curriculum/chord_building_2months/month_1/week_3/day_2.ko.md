---
title: "Dm7-G7-Cmaj7을 한 구역에서 잇기 — 손가락 최소 이동"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 근음 줄 교차로 손을 묶고, 가이드톤으로 잇기

## ① 이론/설명

어제 II-V-I의 개념을 봤죠. 오늘은 실제로 **Dm7(5현) → G7(6현) → Cmaj7(5현)** 을 같은 프렛 구역(3~7프렛)에서 손 이동 최소로 잇습니다. 두 가지에 집중해요.

**① 근음 줄 교차.** Dm7은 5번 줄, G7은 6번 줄, Cmaj7은 다시 5번 줄에 근음. 이렇게 6·5현 코드를 번갈아 고르면 손이 넥을 안 뛰어다녀요.

**② 가이드톤은 반음씩.** 어제 3번 줄에서 7도→3도→7도가 5→4→4로 거의 안 움직인 걸 봤죠. 오늘은 **또 다른 가이드톤 라인**을 봐요. 2번 줄에서 Dm7의 3도(F) → G7의 7도(F) → Cmaj7의 3도(E): **6→6→5프렛.** F는 그대로 있다가 E로 반음만 내려가요. 두 가이드톤 라인(3번 줄·2번 줄)이 동시에 거의 제자리에서 미끄러지는 게 보이스 리딩의 실체예요.

## ② 시각 자료

가운데 코드 **G7(V, 6현 근음)** — II와 I을 잇는 다리예요. 초록이 가이드톤(3도·7도).

```json
{
  "id": "m1.w3.d2.g7_pivot",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 (V) — pivot, 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**예제 1 — 두 번째 가이드톤 라인(2번 줄).** Dm7 3도(F) → G7 7도(F) → Cmaj7 3도(E). 2번 줄 6→6→5. F는 그대로, 마지막에 E로 반음만.

```json
{
  "id": "m1.w3.d2.guide_tone_line2",
  "type": "tab",
  "meta": { "title": "Guide-tone line #2 (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 2, "fret": 6, "duration": "whole", "label": "Dm7-b3(F)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 2, "fret": 6, "duration": "whole", "label": "G7-b7(F)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 2, "fret": 5, "duration": "whole", "label": "Cmaj7-3(E)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 66.** 2번 줄 6→6→5. 공통음 F가 Dm7·G7에 그대로 남았다가, I에서 E로 반음. "거의 안 움직인다"를 다시 한번. 4번 반복.

**예제 2 — 근음 + 가이드톤 컴핑.** 각 코드에서 근음 → 가이드톤을 짚어요. 근음은 5·6·5로 오가도 **가이드톤(3번 줄)은 5→4→4로 거의 제자리**임을 손으로 느끼세요.

```json
{
  "id": "m1.w3.d2.root_guide_comp",
  "type": "tab",
  "meta": { "title": "Root + guide-tone comp (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 74.** 근음(5·6·5)과 3번 줄 가이드톤(5·4·4)을 번갈아. 가이드톤이 거의 안 움직이는 걸 확인하며 4번 반복. 익으면 코드 전체 스트로크로.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Dm7 → G7 → Cmaj7을 한 구역에서 순서대로. 근음 줄이 5·6·5인 걸 매번 소리 내어 확인.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 두 가이드톤 라인)**
**예제 1**(2번 줄 6→6→5)과 어제의 3번 줄(5→4→4)을 둘 다 짚어봐요. 두 라인이 동시에 거의 제자리에서 미끄러지는 걸 눈으로 확인.

**20~40분 · 실전 반주 (예제 2 컴핑 / 70~80 BPM)**
**예제 2를 BPM 74에서 4번 반복.** 근음은 오가도 가이드톤은 붙어 있음을 손으로. 익으면 세 코드 전체를 부드럽게 이어 컴핑. 손이 한 구역을 벗어나면 실패.

**40~50분 · 녹음/셀프 피드백 (권장)**
II-V-I 30초 녹음. 체크: 전환 시 손 점프가 최소인지, 가이드톤이 매끄럽게 이어지는지.

**오늘의 완료 기준:** Dm7-G7-Cmaj7을 프렛 3~7 한 구역에서 손 점프 없이 잇고, 두 가이드톤 라인을 짚을 수 있다.

## ④ 팁 / 흔한 실수

- **근음만 쫓기.** 근음은 오히려 많이 움직여요(5·6·5). 손을 묶어주는 건 가이드톤이에요. 3번 줄·2번 줄의 거의 안 움직이는 음에 시선을 두세요.
- **손 구역 이탈.** Dm7이 프렛 5, G7이 3이라 살짝 내려가지만 그게 전부. 넥을 크게 뛰면 근음 줄 선택이 틀린 거예요.
- **전환에서 소리 끊김.** 한 손가락씩 최소로 옮기면 소리가 덜 끊겨요. 손 전체를 떼지 마세요.
- **6번 줄 뮤트(5현 코드).** Dm7·Cmaj7에서 6번 줄 꼭 죽이기.
