---
title: "7 → 9 — 도미넌트에 9도를 얹어 화사하게"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — 텐션이 맨 위에 오면 소리가 반짝인다

## ① 이론/설명

이번엔 도미넌트 7(C7)에 9도를 얹어 **C9**을 만들어요. 도미넌트의 긴장(b7) 위에 9도(D)의 색이 더해지면, 펑크·소울·모타운의 그 반짝이는 컴핑 소리가 나요.

- **C7의 뼈대** = R(C) · 3(E) · b7(B♭). (긴장을 품은 도미넌트.)
- **9도(D)를 얹으면** = **C9**. 긴장은 그대로, 색만 화사하게.

오늘의 포인트는 **9도가 맨 위(탑노트)에 온다**는 거예요. 기본 C7에선 맨 위가 b7이었는데, C9에선 그 위에 9도(D)가 얹혀 코드의 인상이 확 밝아져요. 텐션이 탑에 오면 특히 화사하게 들려요 — 이게 다음 주(7주차) 탑노트 리딩의 씨앗이에요. 지금 완벽하게 소화하지 못해도 괜찮아요. "9도를 맨 위에 얹으면 밝아진다"는 것만 귀로 확인해 두면, 다음 주에 이 음들을 멜로디로 이을 때 훨씬 수월해져요. 오늘은 maj9·m9·9 세 형제가 다 모인 날이라고 생각하세요.

```json
{
  "id": "m2.w6.d3.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

## ② 시각 자료

먼저 **C7 뼈대**(R·3·b7). 파랑 골격, 맨 위는 b7이에요.

```json
{
  "id": "m2.w6.d3.c7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 skeleton (R·3·b7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

이제 **C9** — 2번 줄에 9도(D)를 탑에 얹었어요. 노랑이 그 화사한 9도예요.

```json
{
  "id": "m2.w6.d3.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 7 vs 9 대조 라인.** R·3·b7까지는 C7, 마지막에 9도를 얹어 C9. 맨 위 소리가 b7에서 9도로 올라가며 화사해지는 걸 귀로.

```json
{
  "id": "m2.w6.d3.c9_line",
  "type": "tab",
  "meta": { "title": "C9 tones (R·3·b7·9) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 74.** "루트 → 3도 → b7(긴장) → 9도(색, 탑)." 맨 위가 9도로 얹히는 순간 반짝이는 화사함을 느끼세요. 4번 반복.

**예제 2 — C7 → C9 컴핑.** 1마디 C7, 2마디 9도를 탑에 얹은 C9. 텐션이 맨 위에 올 때의 화사함을 비교.

```json
{
  "id": "m2.w6.d3.c7_c9_comp",
  "type": "tab",
  "meta": { "title": "C7 to C9 comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 82, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 82, 4번 반복.** 1마디 담백한 C7 → 2마디 반짝이는 C9. 9도(노랑)가 탑에 얹히니 펑크/소울 컴핑의 화사함이 나요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
C7 → C9(9도 탑 추가)를 번갈아. 2번 줄 9도가 맨 위에서 또렷이 울리는지, 뼈대가 안 무너지는지 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 탑에 온 9도)**
C9에서 3도·b7·9의 위치를 짚으며, 특히 **맨 위 음이 9도(탑노트)** 임을 확인. 기본 C7의 탑(b7)과 C9의 탑(9)을 번갈아 들어 화사함 차이를 귀로.

**20~40분 · 실전 반주 (예제 2 컴핑 / 78~88 BPM)**
**예제 2 C7↔C9를 BPM 82에서 4번 반복.** 익으면 근음을 옮겨(예: G, F) 다른 9코드로 응용. 펑크/모타운 백킹 위에 얹으면 그 반짝임이 살아요.

**40~50분 · 녹음/셀프 피드백 (권장)**
C7↔C9 30초 녹음. 체크: 탑의 9도가 죽지 않는가 / 전환 타이밍이 흐려지지 않았는가.

**오늘의 완료 기준:** C7에 9도를 탑에 얹어 C9을 만들고, 텐션이 탑에 올 때 화사해짐을 귀로 구분한다.

## ④ 팁 / 흔한 실수

- **9도가 탑에서 죽음.** 맨 위 음이 죽으면 화사함이 안 들려요. 2번 줄 손끝을 세워 또렷이.
- **C9을 '완전히 새 코드'로 겁먹기.** C7 뼈대 + 9도 한 음이에요. maj9·m9와 같은 공식, 뼈대만 도미넌트.
- **3도까지 흔들기.** 9도를 얹느라 3도(4번 줄)가 뮤트되면 도미넌트 느낌이 흐려져요.
- **탑노트를 안 듣기.** 다음 주 탑노트 리딩의 준비예요. 맨 위 음의 화사함을 꼭 느끼세요.
