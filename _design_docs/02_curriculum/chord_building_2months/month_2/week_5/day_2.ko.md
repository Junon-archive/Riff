---
title: "고음역 메이저/마이너 — 탑노트가 밝음과 어둠을 가른다"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — 맨 위 한 음(1번 줄)으로 성격 바꾸기

## ① 이론/설명

어제 D 폼에서 **3도가 탑노트(1번 줄)**라는 걸 봤죠. 오늘은 그 탑노트 하나만 건드려요. 규칙은 1개월차와 똑같아요 — **<mark>3도를 반음 내리면 마이너</mark>.** 다만 이번엔 그 3도가 **가장 높은 음**이라, <mark>코드를 바꾸면 맨 위 소리가 딱 바뀌어요</mark>.

- **<mark>G 메이저</mark>** — 1번 줄 7프렛(B, 3도)이 탑노트.
- **<mark>G 마이너</mark>** — 1번 줄 6프렛(B♭, b3)이 탑노트.

```json
{
  "id": "m2.w5.d2.g_major_dform",
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
  "id": "m2.w5.d2.gm_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 6, "finger": 2, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```

즉 1번 줄 손가락 하나를 **7 ↔ 6프렛**으로 옮기면 밝음↔어둠이 전환돼요. <mark>고음역에선 이 변화가 특히 선명하게 들려요</mark>. 탑노트가 밝은 3도냐 어두운 b3냐가 곧 코드의 표정이니까요. R·5는 그대로, 오직 맨 위 한 음만. 손가락 하나로 곡의 표정을 밝게도, 어둡게도 만드는 거예요. 지난달 배운 그 3도 스위치가, 이제 맨 위에서 노래하니 훨씬 더 극적으로 들려요. 어렵지 않아요 — 옮기는 건 딱 한 프렛이니까요. 오늘 하나만 챙기면 돼요: <mark>"밝게 하고 싶으면 3도, 어둡게 하고 싶으면 b3."</mark>

## ② 시각 자료

**G 메이저(D 폼)** — <mark>탑노트가 3도(B, 초록)</mark>.

```json
{
  "id": "m2.w5.d2.g_major_dform",
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

**G 마이너(D 폼)** — <mark>탑노트만 반음 내려 b3(B♭, 초록)</mark>. 1번 줄 7 → 6프렛.

```json
{
  "id": "m2.w5.d2.gm_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 6, "finger": 2, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```

**예제 1 — 탑노트 3 → b3 스위치 라인.** 1번 줄에서 7프렛(3, B)과 6프렛(b3, B♭)을 나란히. 맨 위 소리가 밝음에서 슬픔으로 딱 바뀌는 걸 귀로.

```json
{
  "id": "m2.w5.d2.top_switch_line",
  "type": "tab",
  "meta": { "title": "Top note 3 to b3 — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 6, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** "루트 → 3도(밝음) → b3(어둠) → 3도." 맨 위 한 음이 코드 표정을 뒤집는 걸 느끼세요. 4번 반복.

**예제 2 — 메이저 ↔ 마이너 고음역 컴핑.** 1마디 G, 2마디 Gm. 얇은 네 줄을 스트로크하되 움직이는 건 **1번 줄 한 손가락(7↔6)뿐**.

```json
{
  "id": "m2.w5.d2.maj_min_high_comp",
  "type": "tab",
  "meta": { "title": "G to Gm high-register comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 6, "role": "target", "label": "b3" }] }
    ]}
  ]}
}
```

▶ **BPM 80, 4번 반복.** 1마디 밝은 G, 2마디 어두운 Gm. 1번 줄 탑노트만 7↔6프렛. 맨 위 소리의 변화를 즐기세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
G ↔ Gm 을 4박마다 번갈아. <mark>1번 줄만 7↔6프렛으로, 나머지 세 줄은 고정</mark>. 6·5번 뮤트 유지.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 탑노트 3↔b3)**
**예제 1**로 1번 줄 7·6프렛을 번갈아 짚으며 "삼도 / 단삼도"를 불러요. <mark>눈 감고 탑노트를 밝게(7)·어둡게(6) 바꿀 수 있으면 통과</mark>.

**20~40분 · 실전 반주 (예제 2 컴핑 / 76~86 BPM)**
**예제 2를 BPM 80에서 4번 반복**(G↔Gm). 익으면 근음을 다른 프렛(예: A=7)으로 옮겨 같은 탑노트 스위치를 응용. <mark>탑노트가 코드 인상을 좌우함을 몸으로</mark>.

**40~50분 · 녹음/셀프 피드백 (권장)**
G↔Gm 30초 녹음. 체크: <mark>탑노트(1번 줄)가 또렷이 바뀌는지</mark>, 저음 줄이 안 새는지.

**오늘의 완료 기준:** 1번 줄 7↔6프렛만으로 고음역 G ↔ Gm 을 전환하고, 탑노트가 성격을 가름을 이해한다.

## ④ 팁 / 흔한 실수

- **손 전체를 바꾸기.** 마이너로 갈 때 1번 줄 한 손가락만 반음. 나머지는 붙여 두세요.
- **탑노트가 안 울림.** 1번 줄 맨 위 음이 죽으면 코드 표정이 안 들려요. 손끝 세워 1번 줄만 깨끗이.
- **3도를 안쪽에서 찾기.** 이 폼에선 3도가 1번 줄(맨 위)이에요. 안쪽 줄이 아니라 탑을 보세요.
- **저음 줄 방심.** 4현 근음은 항상 6·5번 뮤트.
