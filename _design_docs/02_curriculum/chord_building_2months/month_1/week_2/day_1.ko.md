---
title: "5현 근음(A 폼) 해부 — 집을 5번 줄로 옮기기"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 근음이 5번 줄로 내려오면 R·3·5는 어디로 가나

## ① 이론/설명

지난주 내내 근음은 **6번 줄**에 있었어요. 이번 주는 왜 그 집을 **5번 줄**로 옮기냐면요 — 근음 줄 하나만 자유로워져도 지판 전체가 확 열리거든요. 안심하세요, 규칙은 하나도 안 바뀌어요. 여전히 "근음 위에 3도·5도를 얹는다"예요. 다만 근음이 다른 줄로 가면 3도·5도도 새 자리로 따라 이동하니까, 오늘은 그 새 지도를 눈에 익히는 날이에요.

예시는 5번 줄 3프렛에 근음을 둔 **C 메이저(A 폼)**. 손가락이 잡는 자리를 도수로 하나씩 뜯어보면:

- **R (근음)** — 5번 줄 3프렛(C). 이번 주의 새 집.
- **5 (5도)** — 4번 줄 5프렛(G). 근음 바로 위 줄.
- **R (근음)** — 3번 줄 5프렛(C). 옥타브 위 근음.
- **3 (3도)** — 2번 줄 5프렛(E). 오늘의 표정 담당(초록).

그리고 **6번 줄은 안 써요.** 여기서 A 폼의 새 습관 하나가 생겨요 — **6번 줄을 확실히 죽이는 것.** 근음보다 낮은 줄이 새어 울리면 코드가 탁하게 흐려지거든요. 엄지로 살짝 덮거나, 근음 짚는 손가락 끝으로 6번 줄을 톡 눌러 뮤트하세요. 처음엔 신경 쓸 게 하나 늘어난 것 같아도, 며칠이면 손이 알아서 해줘요.

## ② 시각 자료

5번 줄에 근음을 둔 **C 메이저(A 폼)**. 6번·1번 줄은 ✕(뮤트), 초록이 2번 줄의 **3도(E)** 예요.

```json
{
  "id": "m1.w2.d1.c_major_aform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "C major — 5th-string root (A-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**예제 1 — R·3·5 확인 라인.** 새 배치에서 세 재료를 하나씩 소리로 짚어요. 근음이 5번 줄로 내려온 만큼 3도·5도의 자리도 어제와 다르다는 걸 눈과 귀로 확인.

```json
{
  "id": "m1.w2.d1.c_chordtones_line",
  "type": "tab",
  "meta": {
    "title": "C chord tones (R·3·5) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C",
    "tempoBpm": 70,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 70.** "루트(5번 줄) → 3도(2번 줄) → 5도(4번 줄) → 루트(3번 줄)." 근음이 5번 줄이라는 감각을 손에 심으세요. 4번 반복.

**예제 2 — C 컴핑 리듬 + 6번 줄 뮤트.** 표시된 음마다 **C 코드 전체를 스트로크**하되, **6번 줄이 절대 울리지 않게** 죽인 채로. 8분 쉼표 뒤 팜뮤트로 그루브를 만들어요.

```json
{
  "id": "m1.w2.d1.c_comp_rhythm",
  "type": "tab",
  "meta": {
    "title": "C comping rhythm (mute 6th) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C",
    "tempoBpm": 75,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "root", "label": "R" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "root", "label": "R" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "root", "label": "R" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 75, 4번 반복.** 근음(5번 줄)에서 그루브를 잡되, 스트로크가 6번 줄로 새지 않는지 계속 확인. 익으면 근음을 5번 줄 5프렛(D)으로 옮겨 같은 리듬으로.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
C(A 폼)를 잡고 5번 줄부터 2번 줄까지 한 줄씩 울려요. **6번 줄과 1번 줄이 확실히 죽어 있는지**가 최우선 체크. 사용할 네 줄만 깨끗하게.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 3도 E)**
**예제 1**을 짚으며 R·3·5를 소리 내어 부르고, 2번 줄 5프렛의 **3도(E)** 만 콕 집어 여러 번. 근음이 5번 줄일 때 3도가 어디로 갔는지 눈 감고 짚으면 통과.

**20~40분 · 실전 반주 (예제 2 컴핑 / 70~80 BPM)**
**예제 2를 BPM 75에서 4번 반복.** 매 스트로크마다 6번 줄이 죽어 있는지 의식. 익으면 근음만 5번 줄 5프렛(D)으로 옮겨 같은 패턴 응용. 오늘은 "근음이 5번 줄"이라는 새 좌표에 손을 적응시키는 날.

**40~50분 · 녹음/셀프 피드백 (권장)**
C 컴핑 30초 녹음. 체크: **저음 6번 줄이 새어 울리지 않았는지**, 네 줄이 또렷한지. 6번 줄이 울렸으면 뮤트 손가락 위치를 내일 교정.

**오늘의 완료 기준:** C(A 폼)를 6번 줄 뮤트한 채 깨끗이 울리고, 5현 근음 기준 R·3·5를 눈 감고 짚는다.

## ④ 팁 / 흔한 실수

- **6번 줄이 새어 우는 것.** A 폼 최대의 적이에요. 근음 짚는 손가락 끝을 살짝 눕혀 6번 줄에 닿게 하거나 엄지로 덮으세요.
- **6현 폼(지난주)과 헷갈리기.** 근음 줄이 바뀌면 3도·5도 자리도 전부 이동해요. "모양"이 아니라 "근음이 몇 번 줄?"로 접근하세요.
- **A 폼 바레의 통증.** 처음엔 손가락이 아파요. 억지로 다 누르지 말고, 오늘은 4줄(5·4·3·2)만 깨끗하면 충분.
- **3도를 흘리기.** 2번 줄 3도(E)는 내일 마이너로 갈 때 움직일 음이에요. 미리 눈도장.
