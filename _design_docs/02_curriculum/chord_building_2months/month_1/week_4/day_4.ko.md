---
title: "쉘로 II-V-I 완성 — 한 달의 마무리"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 3주차 II-V-I을 전부 쉘로, 그리고 1개월 회고

## ① 이론/설명

한 달의 마지막 날이에요. 3주차에 배운 **Dm7 → G7 → Cmaj7** II-V-I을, 이번엔 **<mark>전부 쉘 보이싱</mark>**으로 다시 연주합니다. 새로 배우는 건 하나도 없어요. 오늘은 한 달간 쌓아온 조각들이 <mark>"아, 이게 다 하나로 연결되는 거였구나"</mark> 하고 맞물리는 걸 확인하는 날이에요. 두 가지가 자연스럽게 합쳐져요:

- **<mark>근음 줄 교차(5·6·5)</mark>** — Dm7·Cmaj7은 5현 근음 쉘, G7은 6현 근음 쉘.
- **<mark>가이드톤 = 쉘의 색음</mark>** — 쉘은 애초에 3도·7도만 남긴 코드라, 3주차의 가이드톤 라인이 그대로 쉘의 두 음이에요. 3번 줄에서 5→4→4로 거의 안 움직이는 그 라인, 기억나죠?

즉 쉘 II-V-I은 **<mark>손가락 3개짜리 코드가 최소 이동으로 노래하듯 이어지는</mark>** 가장 프로다운 컴핑이에요. 한 달간 배운 걸(근음 위 조립, 3도·7도 스위치, 5·6현 근음, 보이스 리딩, 다이어트) 전부 한 진행에 담습니다.

**한 달 회고:** 이제 여러분은 코드를 모양이 아니라 <mark>"근음 위에 3도·7도를 얹고 손가락으로 스위치하는 조립"</mark>으로 봅니다. 어떤 코드를 만나도 근음 줄과 3도·7도만 찾으면 돼요. 다음 달엔 이 위에 **<mark>텐션(9도)과 탑노트 멜로디</mark>**를 얹어 색을 입힙니다.

## ② 시각 자료

II-V-I 쉘 세 개. <mark>근음(파랑)과 가이드톤(초록 3도·7도)만 남았어요</mark>.

```json
{
  "id": "m1.w4.d4.dm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm7 shell (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 5, "finger": 2, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 6, "finger": 3, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d4.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 shell (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d4.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 쉘 가이드톤 라인.** 3번 줄에서 Dm7 b7(C) → G7 3(B) → Cmaj7 7(B). 5→4→4. 3주차와 똑같은 라인이 쉘에서도 그대로예요.

```json
{
  "id": "m1.w4.d4.shell_guide_line",
  "type": "tab",
  "meta": { "title": "Shell guide-tone line (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "G7-3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "Cmaj7-7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 68.** 쉘의 두 색음 중 하나(3번 줄)가 거의 안 움직이며 노래해요. 4번 반복.

**예제 2 — 쉘 II-V-I 컴핑.** Dm7(5현) → G7(6현) → Cmaj7(5현) 쉘을 근음+가이드톤으로 순환.

```json
{
  "id": "m1.w4.d4.shell_ii_v_i_comp",
  "type": "tab",
  "meta": { "title": "Shell ii-V-I comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** 손가락 3개짜리 코드가 최소 이동으로 이어져요. 한 달의 결정체 — 이게 프로의 컴핑이에요.

**예제 3 — 코드 전체 컴핑.** 예제 2와 같은 리듬으로, 근음·가이드톤을 낱개로 짚는 대신 그 마디의 쉘 코드 전체(Dm7 → G7 → Cmaj7)를 한 번에 울려요.

```json
{
  "id": "m1.w4.d4.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full-chord shell comp (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "half", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "half", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 78.** 예제 2와 같은 리듬, 이번엔 쉘 코드 전체로. 근음+가이드톤 컴핑이 익으면 이걸로.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Dm7·G7·Cmaj7 쉘을 각각 잡아 <mark>세 줄만 또렷한지, 버린 줄이 죽었는지</mark> 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 쉘 가이드톤)**
**예제 1**로 3번 줄 5→4→4를 짚으며, 각 쉘에서 3도·7도가 어디인지 확인. <mark>근음 줄이 5·6·5로 바뀌어도 색음은 거의 제자리</mark>.

**20~40분 · 실전 반주 (예제 2 컴핑 / 74~84 BPM)**
백킹 위에서 **예제 2 쉘 II-V-I을 BPM 78에서** 여러 번 순환. <mark>손이 프렛 3~6 한 구역에 묶여 있는지, 세 줄만 얇고 깔끔하게 나는지</mark>. 여유되면 D키로도.

**40~50분 · 녹음/셀프 피드백 + 한 달 회고 (권장)**
쉘 II-V-I 두 바퀴 녹음. 체크: 버린 줄이 안 새는가 / 전환이 빠르고 매끄러운가 / 가이드톤이 이어지는가. 그리고 스스로 물어보세요 — <mark>"한 달 전엔 코드를 어떻게 봤고, 지금은 어떻게 보는가?"</mark>

**오늘의 완료 기준:** II-V-I을 전부 쉘로, 근음 줄 교차하며 최소 이동으로 순환한다. (1개월차 완성! 🎉)

## ④ 팁 / 흔한 실수

- **쉘 II-V-I에서 손이 점프.** 5현·6현 쉘을 교차하면 프렛 3~6 한 구역에 묶여요. 크게 뛰면 근음 줄 선택이 틀린 거예요.
- **버린 줄 방심.** 쉘 여섯 개(6·5현 각 3종)를 오가며 뮤트가 흐트러지기 쉬워요. 매 코드 세 줄만.
- **"이제 다 배웠다" 방심.** 이번 달은 재료(코드 조립)를 배운 거예요. 다음 달 텐션·탑노트로 색을 입혀야 진짜 곡이 돼요.
- **회고 건너뛰기.** 한 달을 돌아보는 10분이 다음 달 동기의 연료예요. 얼마나 왔는지 꼭 느껴보세요.
