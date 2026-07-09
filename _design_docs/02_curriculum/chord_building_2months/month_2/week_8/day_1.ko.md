---
title: "챌린지 오리엔테이션 — II-V-I을 여러 보이싱으로"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 무대 준비: 같은 진행, 여러 선택지

## ① 이론/설명

마지막 주에 오신 걸 환영해요! 이번 주 백킹은 R&B/재즈의 심장, **II-V-I**(C키의 **Dm7 → G7 → Cmaj7**) 4마디 루프예요. 이 위에서 <mark>2개월간 배운 걸 다 섞어 나만의 컴핑을 만듭니다</mark>.

먼저 오늘은 **<mark>선택지 카드</mark>**를 펼쳐요. 같은 진행을 여러 방식으로 잡을 수 있어요:

- **<mark>쉘 보이싱</mark>**(4주차) — R·3·7만, 얇고 깔끔. 근음 줄 교차(5·6·5).
- **<mark>9도 텐션</mark>**(6주차) — 화사한 색을 얹기.
- **<mark>고음역·탑노트</mark>**(5·7주차) — 얇은 줄로 노래시키기.

정답은 없어요. <mark>"이 코드를 지금 어떻게 잡을까?"</mark>를 매번 **<mark>고르는 것</mark>**이 이번 주의 핵심이에요. 오늘은 II-V-I을 쉘로 잡는 기본 세트와, I(Cmaj7)에 9도를 얹는 '선택'을 익힙니다. 부담 갖지 마세요 — 이번 주엔 새로 외울 게 하나도 없어요. 지난 두 달간 손에 차곡차곡 쌓인 도구를 꺼내 쓰는 주간이거든요. 오늘은 그 도구함을 쭉 펼쳐 놓고 "뭐가 있더라?" 둘러보는 날이라고 생각하면 편해요.

## ② 시각 자료

**Dm7 쉘(ii, 5현 근음).** 초록이 가이드톤(b3·b7).

```json
{
  "id": "m2.w8.d1.dm7_shell",
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

**G7 쉘(V, 6현 근음).**

```json
{
  "id": "m2.w8.d1.g7_shell",
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

**선택지: I를 Cmaj7 쉘로, 또는 Cmaj9로.** <mark>9도(노랑)를 얹으면 화사해져요</mark>.

```json
{
  "id": "m2.w8.d1.cmaj9_choice",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 (I with 9) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 3, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 쉘 II-V-I 컴핑.** 이번 주 백킹의 뼈대예요. 근음 줄이 5·6·5로 교차, 손은 한 구역.

```json
{
  "id": "m2.w8.d1.shell_ii_v_i",
  "type": "tab",
  "meta": { "title": "Shell ii-V-I comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** Dm7 → G7 → Cmaj7 쉘. 이게 기본 무대 세트예요. 근음 줄 교차와 가이드톤(초록)을 의식하며.

**예제 2 — I에 9도 얹기(선택지).** 마지막 Cmaj7을 Cmaj9로 바꿔 화사하게. 같은 진행, 다른 선택.

```json
{
  "id": "m2.w8.d1.ii_v_i_with9",
  "type": "tab",
  "meta": { "title": "ii-V-I with Cmaj9 — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** 3마디의 I을 Cmaj9(9도=노랑)로. 쉘로 갈지 9코드로 갈지는 네 선택이에요. 색 차이를 느껴 보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Dm7·G7·Cmaj7 쉘을 각각 잡아 세 줄 또렷이, 버린 줄 죽었는지. <mark>그다음 Cmaj9(9도 추가)도 잡아 봐요</mark>.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 선택지 인지)**
각 코드를 "쉘로? 9도로?" 두 가지로 잡으며, 근음 줄·가이드톤·9도 위치를 매핑. <mark>8주 배운 도구를 머릿속 지도로 정리</mark>.

**20~40분 · 실전 반주 (예제 1·2 / 74~84 BPM)**
**예제 1 쉘 II-V-I을 BPM 78에서** 여러 번 → 익으면 **예제 2처럼 I에 9도를 얹어** 봐요. R&B 백킹 트랙(있으면)에 맞춰 <mark>두 버전을 번갈아 치며 색을 비교</mark>.

**40~50분 · 녹음/셀프 피드백 (권장)**
두 버전 각각 15초 녹음해 비교. 체크: <mark>쉘과 9코드의 색 차이가 들리는가</mark> / 근음 줄 교차가 매끄러운가.

**오늘의 완료 기준:** II-V-I을 쉘로, 그리고 I에 9도를 얹어 두 가지로 컴핑하고, "코드를 어떻게 잡을지 고른다"는 감각을 잡는다.

## ④ 팁 / 흔한 실수

- **정답을 찾으려 함.** 이번 주는 선택이에요. 쉘도 9코드도 다 맞아요. 상황과 취향으로 고르세요.
- **버린 줄이 새어 울림.** 쉘·9코드 모두 뮤트가 생명. 매 코드 사용할 줄만.
- **도구를 하나만 쓰기.** 8주 배운 걸 다 꺼내 쓰세요. 오늘은 쉘+9도, 내일은 리듬.
- **백킹 없이 연습만.** II-V-I 백킹 트랙을 꼭 구해 실전 감각으로.
