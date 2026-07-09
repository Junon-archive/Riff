---
title: "9도란 무엇인가 — Maj7에 색을 얹어 Maj9"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — 근음 위에 한 음 더, 그게 9도

## ① 이론/설명

'9도'라는 말이 어렵게 들리죠? 사실은 아주 단순해요. **9도 = 근음에서 장2도 위, 그걸 한 옥타브 올린 음.** C의 9도는 D예요(도에서 레, 한 옥타브 위). 그게 전부예요.

이 한 음을 이미 잡고 있는 코드 위에 얹으면 색이 확 화사해져요. 오늘은 **Maj7 → Maj9**를 해봅니다.

- **Maj7의 뼈대** = R(C) · 3(E) · 7(B). (여기까진 지난 달에 배운 코드톤이에요.)
- **여기에 9도(D)를 얹으면** = **Maj9**. R·3·7 위에 D 하나가 반짝 뿌려져요.

```json
{
  "id": "m2.w6.d1.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 skeleton (R·3·7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m2.w6.d1.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

핵심은 이거예요: R·3·7이 코드의 **뼈대(파랑)**라면, 9도는 그 위에 뿌리는 **색(노랑)**이에요. 뼈대는 그대로 두고 색만 더하는 거죠. 시티팝·재즈·R&B의 그 세련된 울림이 바로 이 9도에서 나와요. 겁먹지 마세요 — 새 코드를 통째로 외우는 게 아니에요. 이미 잡고 있는 코드에 손가락 하나만 더 얹는 거죠. 아는 코드 위에 반짝이 하나 뿌리는 것뿐이니, 오늘은 "9도는 어렵지 않다"는 것만 손으로 확인하면 충분해요.

## ② 시각 자료

먼저 **Cmaj7 뼈대**(R·3·7). 파랑이 코드의 골격이에요.

```json
{
  "id": "m2.w6.d1.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 skeleton (R·3·7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

이제 **Cmaj9** — 2번 줄에 9도(D)를 얹었어요. 노랑이 새로 뿌린 **9도 텐션**, 이게 오늘의 색이에요.

```json
{
  "id": "m2.w6.d1.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**예제 1 — R·3·7·9 라인.** 뼈대 세 음을 짚고 마지막에 9도(D)를 얹어요. 9도가 근음(C)보다 장2도 위(옥타브 위)임을 소리로 확인. 노랑이 그 색이에요.

```json
{
  "id": "m2.w6.d1.maj9_line",
  "type": "tab",
  "meta": { "title": "Cmaj9 tones (R·3·7·9) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 72.** "루트 → 3도 → 7도 → 9도(색)." 마지막 9도(D)가 얹히는 순간 소리가 화사해지는 걸 느끼세요. 4번 반복.

**예제 2 — Maj7 → Maj9 컴핑.** 1마디는 뼈대(Maj7), 2마디는 9도를 얹은 Maj9. 같은 코드에 색만 더해지는 걸 귀로 비교.

```json
{
  "id": "m2.w6.d1.maj7_maj9_comp",
  "type": "tab",
  "meta": { "title": "Cmaj7 to Cmaj9 comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** 1마디 담백한 Maj7 → 2마디 화사한 Maj9. 9도(노랑) 하나가 더해질 뿐인데 색이 확 달라지는 걸 즐기세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Cmaj7 뼈대 → Cmaj9(9도 추가)를 번갈아 잡아요. 2번 줄에 얹은 **9도가 뮤트되지 않고 깨끗이** 울리는지가 핵심 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 9도)**
근음(C) 기준으로 **9도(D)가 어디인지** 지판에서 짚어요(2번 줄 3프렛). 이 코드에서 3도·7도·9도가 각각 어디인지 소리 내어 확인. 눈 감고 9도를 바로 얹으면 통과.

**20~40분 · 실전 반주 (예제 2 컴핑 / 74~84 BPM)**
**예제 2 Maj7↔Maj9를 BPM 78에서 4번 반복**하며 색 차이를 느껴요. 익으면 근음을 다른 프렛으로 옮겨(예: G=... 5번 줄) 같은 공식 응용. 밝은 백킹 위에 얹으면 시티팝 느낌.

**40~50분 · 녹음/셀프 피드백 (권장)**
Maj7↔Maj9 30초 녹음. 체크: 9도 음이 죽지 않고 들리는가 / 텐션 추가로 손 폼이 무너져 다른 줄이 뮤트되지 않았는가.

**오늘의 완료 기준:** Cmaj7 뼈대에 9도를 얹어 Cmaj9를 만들고, 9도가 근음+장2도(옥타브 위)임을 짚어 말할 수 있다.

## ④ 팁 / 흔한 실수

- **9도가 죽음.** 새로 얹은 손가락이 눕거나 힘이 부족하면 9도가 안 울려요. 손끝을 세워 2번 줄만 또렷이.
- **9도를 '어려운 것'으로 겁먹기.** 9도 = 도에서 레, 딱 한 음이에요. 공식만 알면 12키 어디서든 얹어요.
- **뼈대를 흔들기.** 9도를 얹느라 R·3·7이 무너지면 안 돼요. 뼈대는 그대로, 색만 추가.
- **9도와 3도 헷갈리기.** 9도(D)는 근음(C)에서 장2도 위. 3도(E)와 다른 음이에요.
