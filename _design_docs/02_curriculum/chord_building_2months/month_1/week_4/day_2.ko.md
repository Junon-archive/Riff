---
title: "6현 근음 쉘 세트 — Maj7·7·m7을 손가락 3개로"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 6번 줄 근음, 안쪽 두 줄로 성격 바꾸기

## ① 이론/설명

어제 G7을 쉘(R·b7·3)로 다이어트했죠. 오늘은 6현 근음 쉘의 **세트**를 만들어요. 근음은 6번 줄 고정, 그리고 안쪽 두 줄이 각각 스위치예요:

- **4번 줄 = 7도 스위치.** 4프렛(7, Maj7) ↔ 3프렛(b7, 도미넌트/마이너7).
- **3번 줄 = 3도 스위치.** 4프렛(3, 메이저) ↔ 3프렛(b3, 마이너).

이 두 줄의 조합으로 세 성격이 다 나와요:

- **Gmaj7 쉘** = 4번 줄 4(7) · 3번 줄 4(3)
- **G7 쉘** = 4번 줄 3(b7) · 3번 줄 4(3)
- **Gm7 쉘** = 4번 줄 3(b7) · 3번 줄 3(b3)

지난 3주간 쓰던 두 스위치(3도·7도)가 쉘에서도 똑같이 살아 있어요. 다만 이제 5도·중복음이 없으니 **남은 두 색음만** 또렷하게 조작하는 거예요. 복잡해 보이죠? 그런데 외울 건 딱 두 개뿐이에요 — '7도 줄'과 '3도 줄'. 이 두 스위치만 손에 익히면 메이저·도미넌트·마이너를 손가락 하나 까딱으로 오갈 수 있어요. 코드 세 개를 외우는 게 아니라, 스위치 두 개를 배우는 거예요.

## ② 시각 자료

6현 근음 쉘 세 종류. 초록이 3도·7도, 두 줄만 움직이면 성격이 바뀌어요.

```json
{
  "id": "m1.w4.d2.gmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Gmaj7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d2.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
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
  "id": "m1.w4.d2.gm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 두 스위치 확인 라인.** 4번 줄 7↔b7, 3번 줄 3↔b3. 두 줄에서 색음이 어떻게 바뀌는지 소리로.

```json
{
  "id": "m1.w4.d2.shell_switch_line",
  "type": "tab",
  "meta": { "title": "Shell switches (7/b7, 3/b3) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 4번 줄(7→b7), 3번 줄(3→b3). 두 색음의 움직임을 손에 익혀요. 4번 반복.

**예제 2 — 쉘 세트 순환 컴핑.** Gmaj7 → G7 → Gm7. 근음(6번)은 고정, 4번·3번 줄만 바뀌어요.

```json
{
  "id": "m1.w4.d2.shell_set_comp",
  "type": "tab",
  "meta": { "title": "6th-root shell set comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** Gmaj7 → G7 → Gm7. 근음은 그대로, 두 색음만 안쪽에서 움직여요. 세 성격이 또렷이 구분되는지 귀로.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Gmaj7 → G7 → Gm7 쉘을 4박씩 순서대로. 근음(6번) 고정, 5·2·1번 뮤트, 4·3번만 이동.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 두 색음)**
**예제 1**로 4번 줄(7/b7)·3번 줄(3/b3)의 위치를 확인. 눈 감고 "Gm7!" 하면 두 줄 다 3프렛으로 바로.

**20~40분 · 실전 반주 (예제 2 순환 / 74~84 BPM)**
**예제 2를 BPM 78에서 4번 반복.** 이어서 근음만 다른 프렛(예: A=5프렛)으로 옮겨 같은 세트를 응용. 얇고 빠른 쉘 컴핑에 익숙해지기.

**40~50분 · 녹음/셀프 피드백 (권장)**
세 쉘 순환 30초 녹음. 체크: 버린 줄이 안 새는지, 세 성격이 또렷한지, 전환이 빠른지.

**오늘의 완료 기준:** 6현 근음 쉘로 Gmaj7·G7·Gm7을 근음 고정한 채 4·3번 줄만으로 순환한다.

## ④ 팁 / 흔한 실수

- **근음을 자꾸 떼기.** 6번 줄 근음은 고정이에요. 4·3번만 움직여요.
- **7도와 3도 헷갈리기.** 4번 줄이 7도, 3번 줄이 3도. 위쪽(4번)이 세븐, 아래(3번)가 써드.
- **버린 줄 새어 울림.** 5·2·1번을 손가락 살로 확실히 덮으세요.
- **쉘을 모양으로 외우기.** "근음 + 7도(4번) + 3도(3번)"로. 정체를 알아야 5현 근음(내일)에서도 통해요.
