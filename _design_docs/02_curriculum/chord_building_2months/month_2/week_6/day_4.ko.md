---
title: "9도 통합 — 색은 위에 그대로, 뼈대만 순환"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — Maj9 → 9 → m9, 9도는 항상 맨 위에

## ① 이론/설명

이번 주 결승선. Maj9·9·m9를 한 근음 위에서 순환합니다. 놀라운 건 **9도(D)는 항상 2번 줄, 맨 위 그대로**라는 거예요. 바뀌는 건 그 아래 뼈대뿐이에요:

- **3번 줄 = 7도 스위치.** 4프렛(7, Maj9) ↔ 3프렛(b7, 9·m9).
- **4번 줄 = 3도 스위치.** 2프렛(3, Maj9·9) ↔ 1프렛(b3, m9).

정리하면:
- **Cmaj9** = 3번 줄 4(7) · 4번 줄 2(3)
- **C9** = 3번 줄 3(b7) · 4번 줄 2(3)
- **Cm9** = 3번 줄 3(b7) · 4번 줄 1(b3)

색(9도)은 위에 고정, 뼈대(3도·7도)만 손가락으로 스위치 — 1개월차에 배운 두 스위치가 9코드에서도 똑같이 살아 있어요. 여기에 5주차의 탑노트 감각을 더하면, 다음 주(7주차)엔 이 위쪽 음들을 **멜로디로** 잇습니다. 한 주 만에 maj9·9·m9 세 개를 손가락 두 개 스위치로 오갈 수 있게 된 거예요. 시티팝 반주가 왜 그렇게 세련되게 들렸는지, 이제 그 비밀이 여러분 손안에 있어요.

## ② 시각 자료

**Cmaj9** — 3번 줄 7(4프렛), 4번 줄 3(2프렛), 2번 줄 9(노랑).

```json
{
  "id": "m2.w6.d4.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**C9** — 3번 줄만 b7(3프렛)로. 9도는 그대로 위에.

```json
{
  "id": "m2.w6.d4.c9",
  "type": "fretboard_diagram",
  "meta": { "title": "C9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**Cm9** — 4번 줄도 b3(1프렛)로. 9도는 여전히 위에.

```json
{
  "id": "m2.w6.d4.cm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm9 — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 7도 스위치 + 고정된 9도.** 3번 줄에서 7(4)↔b7(3)을 오가고, 2번 줄 9도(D)는 그대로. 색은 위에 고정, 뼈대만 움직임을 손으로.

```json
{
  "id": "m2.w6.d4.switch_over_9",
  "type": "tab",
  "meta": { "title": "7-switch under constant 9 — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 74.** 3번 줄 7 → 9(색) → b7 → 9(색). 9도는 같은 자리에 계속 있고, 아래 7도만 반음 움직여요. 4번 반복.

**예제 2 — Maj9 → 9 → m9 순환 컴핑.** 9도는 항상 위에, 3번·4번 줄만 스위치.

```json
{
  "id": "m2.w6.d4.nine_cycle_comp",
  "type": "tab",
  "meta": { "title": "Maj9-9-m9 cycle comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 80, 4번 반복.** Cmaj9 → C9 → Cm9. 9도(노랑)는 위에 고정, 3번·4번 줄 뼈대만 바뀌어요. 세 코드가 다 화사하되 성격이 다른 걸 귀로.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Cmaj9 → C9 → Cm9를 4박씩 순서대로. 근음·9도(2번 줄)는 고정, 3번·4번 줄만 이동. 9도가 계속 깨끗이 울리는지 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 고정된 9도 + 뼈대 스위치)**
"9도는 그대로, 7도는 4↔3, 3도는 2↔1." 누가 "m9!" 하면 3·4번 줄을 바로 잡되 9도는 유지. **예제 1**로 확인.

**20~40분 · 실전 반주 (예제 2 순환 / 76~86 BPM)**
**예제 2 세 9코드 순환을 BPM 80에서 4번 반복.** 이어서 근음을 옮겨 다른 키로도. 소울/시티팝 백킹 위에 얹어 화사한 색의 진행을 즐겨요.

**40~50분 · 녹음/셀프 피드백 + 한 주 회고 (권장)**
세 9코드 순환 30초 녹음. 체크: 9도가 계속 살아 있는가 / 뼈대 스위치 시 다른 줄이 죽지 않는가. 그리고 "9도 하나로 소리가 얼마나 달라졌나?" 정리.

**오늘의 완료 기준:** 한 근음 위에서 Maj9 → 9 → m9를 9도는 유지한 채 3·4번 줄만으로 순환한다. (6주차 완성!)

## ④ 팁 / 흔한 실수

- **9도를 매번 다시 찾기.** 9도는 안 움직여요. 뼈대(3·7도)만 스위치. 9도 손가락은 붙여 두세요.
- **뼈대 스위치 때 9도가 죽음.** 아래 손가락을 옮기다 위 9도가 딸려 뜨면 색이 사라져요. 9도는 눌린 채로.
- **세 9코드를 각각 새로 외우기.** 두 스위치의 조합이에요. 1개월차 원리 그대로.
- **9도만 강조하다 뼈대 소홀.** 3도·7도가 성격을 정해요. 뼈대가 흐리면 maj/dom/m 구분이 안 돼요.
