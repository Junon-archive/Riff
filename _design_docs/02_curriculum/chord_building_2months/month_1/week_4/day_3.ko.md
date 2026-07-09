---
title: "5현 근음 쉘 세트 — 근음만 5번 줄로 내리기"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 5번 줄 근음 쉘, 3·2번 줄로 성격 바꾸기

## ① 이론/설명

어제 6현 근음 쉘을 익혔죠. 오늘은 근음을 **5번 줄**로 내린 쉘이에요. 원리는 똑같아요 — R·3·7만 남기고 5도는 버린다. 다만 근음 줄이 바뀌었으니 <mark>3도·7도가 다른 줄로 이사해요</mark>:

- **<mark>3번 줄 = 7도 스위치</mark>.** 4프렛(7, Maj7) ↔ 3프렛(b7).
- **<mark>2번 줄 = 3도 스위치</mark>.** 5프렛(3) ↔ 4프렛(b3).

정리하면 세 성격은:

```json
{
  "id": "m1.w4.d3.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

```json
{
  "id": "m1.w4.d3.c7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d3.cm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

- **Cmaj7 쉘** = 3번 줄 4(7) · 2번 줄 5(3)
- **C7 쉘** = 3번 줄 3(b7) · 2번 줄 5(3)
- **Cm7 쉘** = 3번 줄 3(b7) · 2번 줄 4(b3)

6현 쉘(어제)이 4·3번 줄이었다면, 5현 쉘은 **3·2번 줄**. 근음 줄이 바뀌면 색음도 한 세트씩 위로 이동해요. 어제와 원리가 완전히 똑같으니, 새로 외울 부담은 거의 없어요. **<mark>근음이 한 줄 내려가면 색음도 한 줄씩 따라 내려간다</mark>** — 이 규칙 하나면 충분해요. 이 두 세트(6현·5현)를 다 갖추면, 내일 II-V-I을 전부 쉘로 연결할 수 있어요. 오늘로 <mark>어떤 코드든 근음이 5번 줄이든 6번 줄이든 쉘로 잡을 수 있게 되는 거죠</mark>.

## ② 시각 자료

5현 근음 쉘 세 종류. 초록이 3도·7도, <mark>이번엔 3·2번 줄이 스위치</mark>예요. 6·4·1번은 뮤트.

```json
{
  "id": "m1.w4.d3.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

```json
{
  "id": "m1.w4.d3.c7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d3.cm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 두 스위치 확인 라인(3·2번 줄).** 3번 줄 7↔b7, 2번 줄 3↔b3.

```json
{
  "id": "m1.w4.d3.shell_switch_line5",
  "type": "tab",
  "meta": { "title": "5th-root shell switches — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "b3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 3번 줄(7→b7), 2번 줄(3→b3). 6현 쉘과 같은 원리, 줄만 이동. 4번 반복.

**예제 2 — 5현 쉘 세트 순환.** Cmaj7 → C7 → Cm7. 근음(5번) 고정, 3·2번 줄만.

```json
{
  "id": "m1.w4.d3.shell_set_comp5",
  "type": "tab",
  "meta": { "title": "5th-root shell set comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 4, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 4, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 4, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 4, "role": "target", "label": "b3" }] }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** Cmaj7 → C7 → Cm7. 근음 고정, 3·2번 색음만 이동. 6·4·1번 뮤트 확인.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Cmaj7 → C7 → Cm7 쉘을 4박씩. <mark>근음(5번) 고정, 6·4·1번 뮤트, 3·2번만 이동</mark>.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 3·2번 색음)**
**예제 1**로 3번 줄(7/b7)·2번 줄(3/b3) 위치를 확인. <mark>어제 6현 쉘(4·3번)과 오늘 5현 쉘(3·2번)의 차이를 눈으로 정리</mark>.

**20~40분 · 실전 반주 (예제 2 순환 / 74~84 BPM)**
**예제 2를 BPM 78에서 4번 반복.** 이어서 근음을 5번 줄 다른 프렛(예: D=5프렛)으로 옮겨 응용. <mark>6현·5현 쉘을 번갈아 잡아보며 둘 다 손에 익히기</mark>.

**40~50분 · 녹음/셀프 피드백 (권장)**
5현 쉘 순환 30초 녹음. 체크: 6·4·1번이 안 새는지, <mark>세 성격이 또렷한지</mark>.

**오늘의 완료 기준:** 5현 근음 쉘로 Cmaj7·C7·Cm7을 3·2번 줄만으로 순환하고, 6현 쉘과 자유롭게 오간다.

## ④ 팁 / 흔한 실수

- **4번 줄이 새어 울림.** 5현 쉘은 4번 줄을 뮤트해요(근음 아래). 근음 손가락 끝으로 4번 줄까지 살짝 덮으세요.
- **6현 쉘 위치를 그대로.** 5현에서는 7도가 3번 줄, 3도가 2번 줄. 근음 줄이 지도를 바꿔요.
- **2번 줄 3도 부실.** 2번 줄 5프렛(3도)이 죽으면 옆 손가락이 덮은 거예요. 손끝 세우기.
- **얇은 소리 답답함.** 쉘은 원래 얇아요. 밴드/백킹 위에서 진가가 나오니 혼자 칠 때 소리 크기로 판단하지 마세요.
