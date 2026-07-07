---
title: "5현 근음 통합 — 한 자리에서 다섯 성격 순환"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 두 줄(2번·3번)로 Maj·m·7·m7·Maj7 자유자재

## ① 이론/설명

이번 주 결승선. 5현 근음 위에서 배운 두 스위치를 합쳐 **다섯 성격**을 한 자리에서 순환합니다.

- **2번 줄 = 3도 스위치.** 5프렛(3) ↔ 4프렛(b3).
- **3번 줄 = 7도 삼거리.** 5프렛(R) · 4프렛(7) · 3프렛(b7).

이 두 줄의 조합으로 다섯 코드가 다 나와요:

- **C(메이저)** = 2번 줄 5(3) · 3번 줄 5(R)
- **Cm** = 2번 줄 4(b3) · 3번 줄 5(R)
- **C7** = 2번 줄 5(3) · 3번 줄 3(b7)
- **Cm7** = 2번 줄 4(b3) · 3번 줄 3(b7)
- **Cmaj7** = 2번 줄 5(3) · 3번 줄 4(7)

손가락 두 개(2번·3번 줄)의 위치 조합이 코드 이름을 정해요. 오늘은 이걸 한 근음 위에서 자유롭게 돌립니다.

## ② 시각 자료

오늘의 대표 코드 **Cmaj7(A 폼)** — 3번 줄 7(4프렛, 초록)이 근음 바로 아래에서 아련하게 부딪히는 코드예요.

```json
{
  "id": "m1.w2.d4.cmaj7_ref",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**예제 1 — 두 스위치 투어.** 1마디는 2번 줄(3↔b3), 2마디는 3번 줄(R·7·b7). 두 줄이 각각 무엇을 담당하는지 손으로 정리해요.

```json
{
  "id": "m1.w2.d4.two_switch_tour",
  "type": "tab",
  "meta": { "title": "Two switches tour — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 2, "fret": 4, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 72.** 1마디 = 밝음/어둠(2번 줄), 2마디 = 안정/몽환/긴장(3번 줄). 4번 반복.

**예제 2 — Cmaj7 컴핑 + 다섯 성격 순환.** 근음 → 7 → 3도로 Maj7의 아련한 색을 리듬에.

```json
{
  "id": "m1.w2.d4.cmaj7_comp",
  "type": "tab",
  "meta": { "title": "Cmaj7 comp groove — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "technique": "palm_mute", "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 80, 4번 반복.** 그루브가 익으면 **통합 순환**: 같은 자리에서 2번 줄(3↔b3)·3번 줄(R/7/b7) 손가락만 바꿔 **C → Cm → C7 → Cm7 → Cmaj7** 을 한 마디씩.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
C → Cm → C7 → Cm7 → Cmaj7 을 4박씩 순서대로. 근음(5번 줄)·6번 줄 뮤트는 고정, 2번·3번 줄만 움직여요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 두 스위치 조합)**
"3도 내렸나? 7도는 R·7·b7 중 뭐?" 두 질문으로 다섯 코드를 구분. **예제 1**로 두 줄의 역할을 소리 내어 확인.

**20~40분 · 실전 반주 (예제 2 + 통합 순환 / 75~85 BPM)**
**예제 2 Cmaj7 그루브를 BPM 80에서 4번 반복** → **통합 순환**(다섯 코드, 한 마디씩)으로 확장. 이어서 근음만 5번 줄에서 옮겨 다른 키로도 순환.

**40~50분 · 녹음/셀프 피드백 (권장)**
다섯 코드 순환 30초 녹음. 체크: 다섯 성격이 각각 또렷이 구분되는지, 6번 줄이 새지 않는지.

**오늘의 완료 기준:** 5현 근음 한 자리에서 C → Cm → C7 → Cm7 → Cmaj7 을 2번·3번 줄 손가락만으로 순환한다. (2주차 완성!)

## ④ 팁 / 흔한 실수

- **다섯을 각각 다른 모양으로 외우기.** 두 스위치(2번·3번 줄)의 조합으로 기억하세요. 그래야 어느 키에서도 통해요.
- **6현 폼과 섞여 혼란.** 5현에서는 3도=2번 줄, 7도=3번 줄. 근음 줄이 지도를 정합니다.
- **순환 중 근음·6번 줄 뮤트 놓기.** 두 개는 닻. 순환 내내 유지.
- **속도 욕심.** 다섯이 뭉개지면 BPM 70으로. 정확한 조합이 먼저.
