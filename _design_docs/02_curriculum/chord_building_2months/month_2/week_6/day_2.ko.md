---
title: "m7 → m9 — 마이너에 9도를 얹으면 네오소울 색"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — 이미 아는 m7에 손가락 하나 더

## ① 이론/설명

어제 Maj7에 9도를 얹어 Maj9를 만들었죠. 오늘은 똑같은 9도(D)를 **마이너 코드(m7)** 위에 얹어요. 결과는 **m9** — R&B·네오소울·시티팝의 그 <mark>몽글몽글하고 세련된 색</mark>이에요.

- **<mark>Cm7의 뼈대</mark>** = R(C) · b3(E♭) · b7(B♭). (마이너의 어두운 색.)
- **<mark>여기에 9도(D)를 얹으면</mark>** = **Cm9**. 어둡지만 화사한, 묘하게 열린 소리.

포인트는 9도가 **<mark>똑같은 자리(2번 줄)</mark>**에 온다는 거예요. 어제 Maj9의 9도도 D, 오늘 m9의 9도도 D — 근음이 C면 9도는 항상 D예요. 뼈대(3도·7도)만 마이너로 바뀌고, **<mark>색(9도)은 그대로 위에</mark>**. 공식이 한 번 손에 익으면 maj9든 m9든 9도 얹는 동작은 똑같아요. 그러니까 오늘 배우는 건 새 코드가 아니라, 어제 배운 그 동작을 마이너에 그대로 옮기는 거예요. 손이 이미 기억하는 자리에, 뼈대만 어둡게 바꾸고 색은 그대로 얹는 셈이죠. 어제 Maj9가 됐다면 오늘 m9도 반드시 됩니다.

```json
{
  "id": "m2.w6.d2.cm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
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

## ② 시각 자료

먼저 **Cm7 뼈대**(R·b3·b7). <mark>파랑이 마이너 골격</mark>.

```json
{
  "id": "m2.w6.d2.cm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 skeleton (R·b3·b7)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

이제 **Cm9** — 2번 줄에 9도(D)를 얹었어요. 노랑이 9도 텐션. <mark>어둠 위에 뿌린 색이에요</mark>.

```json
{
  "id": "m2.w6.d2.cm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm9 — 5th-string root (add 9)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
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

**예제 1 — R·b3·b7·9 라인.** 마이너 뼈대 세 음에 9도(D)를 얹어요. 어제 Maj9와 9도(D)가 같은 음임을 확인 — 뼈대만 어두워졌을 뿐.

```json
{
  "id": "m2.w6.d2.m9_line",
  "type": "tab",
  "meta": { "title": "Cm9 tones (R·b3·b7·9) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```

▶ **BPM 72.** "루트 → 단3도 → 단7도 → 9도(색)." 어두운 뼈대 위에 9도가 얹히며 몽글몽글 열리는 소리를 느끼세요. 4번 반복.

**예제 2 — m7 → m9 컴핑.** 1마디 Cm7, 2마디 9도를 얹은 Cm9. 어둠에 색이 더해지는 걸 비교.

```json
{
  "id": "m2.w6.d2.m7_m9_comp",
  "type": "tab",
  "meta": { "title": "Cm7 to Cm9 comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 1, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** 1마디 담백한 Cm7 → 2마디 세련된 Cm9. 마이너의 어둠 위에 9도(노랑) 하나로 네오소울 색이 나요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Cm7 → Cm9(9도 추가)를 번갈아. <mark>2번 줄 9도가 깨끗이 울리는지, b3(4번 줄)이 뭉개지지 않는지</mark> 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = m9의 9도)**
Cm9에서 b3·b7·9가 각각 어디인지 짚으며 불러요. 어제 Maj9와 **<mark>9도(2번 줄 3프렛)가 같은 자리</mark>**임을 확인. 눈 감고 9도를 얹으면 통과.

**20~40분 · 실전 반주 (예제 2 컴핑 / 74~84 BPM)**
**예제 2 Cm7↔Cm9를 BPM 78에서 4번 반복.** 익으면 근음을 다른 프렛으로 옮겨 응용. <mark>느린 소울/시티팝 백킹 위에 얹으면 진가가 나와요</mark>.

**40~50분 · 녹음/셀프 피드백 (권장)**
Cm7↔Cm9 30초 녹음. 체크: <mark>9도가 죽지 않는가</mark> / 텐션 추가로 b3·b7이 뮤트되지 않았는가.

**오늘의 완료 기준:** Cm7에 9도를 얹어 Cm9를 만들고, m9의 9도가 Maj9와 같은 음(D)임을 이해한다.

## ④ 팁 / 흔한 실수

- **maj9와 m9를 다른 공식으로 외우기.** 9도 얹는 동작은 똑같아요. 뼈대(3도·7도)만 마이너로 바뀔 뿐.
- **9도가 죽음.** 마이너 뼈대는 프렛이 몰려 있어 손가락이 서로 덮기 쉬워요. 손끝을 세워 각 줄 또렷이.
- **b3와 9를 헷갈리기.** b3(E♭, 4번 줄)와 9(D, 2번 줄)는 다른 줄, 다른 음.
- **어둡다고 세게 치기.** m9는 부드럽고 열린 소리예요. 가볍게 울려야 그 색이 살아요.
