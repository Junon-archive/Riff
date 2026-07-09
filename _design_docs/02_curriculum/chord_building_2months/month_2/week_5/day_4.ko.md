---
title: "고음역 통합 — 밝은 진행을 얇고 예쁘게 컴핑"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — D 폼을 옆으로 밀어 밝은 바이브 만들기

## ① 이론/설명

이번 주 결승선. 4현 근음 D 폼은 **<mark>모양이 하나</mark>**라, 옆으로 밀기만 하면 어느 코드든 돼요(3주차의 '이동 가능한 패턴'과 같은 원리). 오늘은 이걸로 밝은 고음역 진행을 컴핑합니다.

가장 간단한 예: **G → A** 바이브. 같은 D 폼을 **두 프렛 위로** 밀면 G(5프렛 근음)가 A(7프렛 근음)가 돼요. 손 모양은 그대로, 통째로 위로. <mark>두 코드 다 탑노트가 3도(밝은 음)라, 왔다 갔다 하면 청량하고 팝적인 느낌이 나요</mark>. 손 모양 하나로 팝송 인트로 같은 분위기가 툭 나오면, 슬슬 <mark>"반주가 음악이 되는" 순간</mark>이 오는 거예요. 지난주 쉘이 밴드 속에서 깔끔했다면, 이번 D 폼은 혼자 쳐도 반짝이는 소리라 무대가 달라요.

```json
{
  "id": "m2.w5.d4.g_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

```json
{
  "id": "m2.w5.d4.a_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "A major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A" },
  "fretboard": { "startFret": 6, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 9, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

한 주 정리: 근음이 4번 줄로 올라가 고음역이 열렸고, R·3·5의 새 배치와 **<mark>탑노트</mark>**라는 개념을 얻었어요. 다음 주(6주차)엔 이 고음역 위에 **<mark>9도 텐션</mark>**을 얹어 색을 화사하게 만듭니다.

## ② 시각 자료

**G(D 폼, 5프렛 근음).** <mark>탑노트 = 3도(B, 초록)</mark>.

```json
{
  "id": "m2.w5.d4.g_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**A(D 폼, 7프렛 근음).** <mark>같은 모양을 두 프렛 위로</mark>. 탑노트 = 3도(C#, 초록).

```json
{
  "id": "m2.w5.d4.a_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "A major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A" },
  "fretboard": { "startFret": 6, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 9, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**예제 1 — 탑노트 이동(G → A).** 1번 줄 탑노트만: 7프렛(G의 3도 B) → 9프렛(A의 3도 C#). 코드를 밀면 탑노트도 같이 올라가는 걸 봐요.

```json
{
  "id": "m2.w5.d4.top_move_line",
  "type": "tab",
  "meta": { "title": "Top note move G to A — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 74.** 1번 줄 7 → 9프렛. G의 3도(B)에서 A의 3도(C#)로 탑노트가 두 프렛 올라가요. 4번 반복.

**예제 2 — G → A 고음역 바이브 컴핑.** 1마디 G, 2마디 A. 같은 얇은 네 줄, 통째로 두 프렛 위로.

```json
{
  "id": "m2.w5.d4.g_a_vamp",
  "type": "tab",
  "meta": { "title": "G-A high-register vamp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A", "tempoBpm": 82, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 10, "role": "root", "label": "R" }, { "string": 1, "fret": 9, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 7, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 10, "role": "root", "label": "R" }, { "string": 1, "fret": 9, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 7, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 10, "role": "root", "label": "R" }, { "string": 1, "fret": 9, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 10, "role": "root", "label": "R" }, { "string": 1, "fret": 9, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 82, 4번 반복.** G ↔ A를 얇고 밝게. 손 모양은 하나, 두 프렛만 오르내려요. 팝·시티팝의 그 청량한 고음역 컴핑이에요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
G(D 폼) → A(D 폼)를 두 프렛 위아래로. <mark>손 모양이 하나임을 느끼며 4·3·2·1번만 깨끗이</mark>, 6·5번 뮤트.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 탑노트 이동)**
**예제 1**로 <mark>탑노트가 G→A에서 7→9프렛으로 함께 올라감을 확인</mark>. 눈 감고 두 코드의 탑노트를 짚으면 통과.

**20~40분 · 실전 반주 (예제 2 바이브 / 78~88 BPM)**
**예제 2 G-A 바이브를 BPM 82에서 4번 반복.** 익으면 D(12프렛)까지 넣어 G-A-D 처럼 확장하거나, 다른 밝은 백킹 위에 얹어 자유롭게. <mark>고음역의 청량함을 마음껏</mark>.

**40~50분 · 녹음/셀프 피드백 + 한 주 회고 (권장)**
바이브 두 바퀴 녹음. 체크: 저음 줄 안 새는가 / 전환이 매끄러운가 / 탑노트가 또렷한가. 그리고 <mark>"근음이 4번 줄로 올라가니 뭐가 달라졌나?"</mark> 스스로 정리.

**오늘의 완료 기준:** D 폼을 옆으로 밀어 G-A 고음역 바이브를 매끄럽게 컴핑한다. (5주차 완성!)

## ④ 팁 / 흔한 실수

- **코드마다 새 모양 찾기.** D 폼은 하나예요. 근음을 원하는 프렛에 두면 그 코드. 옆으로 밀기만.
- **저음 줄 방심.** 밀다 보면 뮤트가 흐트러져요. 매 코드 6·5번 확실히.
- **바이브가 무거움.** 고음역은 가볍고 청량하게. 세게 긁지 말고 탑노트를 노래시키듯.
- **탑노트 놓치기.** 다음 주 텐션·다다음 주 탑노트 멜로디의 준비예요. 맨 위 음을 항상 의식.
