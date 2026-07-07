---
title: "나만의 편곡 — 9도와 탑노트로 리하모니"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — 밋밋한 진행을 세련되게 바꾸기

## ① 이론/설명

어제까지 보이싱과 리듬을 골랐죠. 오늘은 **편곡**이에요. 기본 II-V-I(Dm7-G7-Cmaj7)이라는 '밋밋한 뼈대'에, 6주차의 **9도 텐션**과 7주차의 **탑노트 멜로디**를 얹어 나만의 세련된 버전을 만들어요.

두 가지 도구:
- **9도로 색 입히기.** Dm7 → **Dm9**, Cmaj7 → **Cmaj9**. 진행이 R&B/시티팝처럼 화사해져요.
- **탑노트로 노래시키기.** 진행 내내 맨 위 음을 멜로디로 이어요(예: 가이드톤 C-B-B가 위에서 노래).

정답은 없어요. "이 진행을 더 멋지게 만들려면 어디에 9도를 얹고, 탑에 뭘 둘까?"를 스스로 설계하는 게 오늘의 챌린지예요. 이제 여러분은 곡을 '받은 대로' 치는 사람이 아니라, '내 식대로' 다시 그리는 사람이에요. 처음엔 한 군데만 바꿔봐도 충분해요. 그 작은 선택 하나가 쌓여서 결국 '내 소리'가 되니까요.

## ② 시각 자료

**Dm9(ii에 9도).** 노랑이 9도(E), 초록이 가이드톤.

```json
{
  "id": "m2.w8.d3.dm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 (ii + 9) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Cmaj9(I에 9도).** 노랑이 9도(D). 밋밋한 Cmaj7이 화사해져요.

```json
{
  "id": "m2.w8.d3.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 (I + 9) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**예제 1 — 9도 리하모니(Dm9 - G7 - Cmaj9).** ii와 I에 9도를 얹어 진행을 화사하게. 노랑이 색이에요.

```json
{
  "id": "m2.w8.d3.reharm_9",
  "type": "tab",
  "meta": { "title": "ii-V-I reharmonized with 9ths — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "9", "role": "color" },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "eighth", "label": "9", "role": "color" },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** Dm9 → G7 → Cmaj9. 9도(노랑)를 얹으니 같은 진행이 훨씬 세련돼요. G7에도 9를 얹을지는 네 선택.

**예제 2 — 탑노트 멜로디 라인.** 진행 위에서 맨 위 음이 노래해요: C(Dm7) → B(G7) → B(Cmaj7). 1번 줄 8 → 7 → 7, 거의 안 움직이는 가이드톤 멜로디.

```json
{
  "id": "m2.w8.d3.top_line_reharm",
  "type": "tab",
  "meta": { "title": "Top-note line over ii-V-I — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 1, "fret": 8, "duration": "whole", "label": "b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 72.** 1번 줄 8 → 7 → 7. 코드는 바뀌는데 탑노트는 C-B-B로 거의 제자리. 이 멜로디를 위에 얹어 컴핑하면 진행이 노래해요. 4번 반복.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
Dm9·Cmaj9를 잡아 9도가 깨끗이 울리는지. 그리고 예제 2 탑노트 라인(C-B-B)을 1번 줄에서 익혀요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 나만의 색)**
"어디에 9도를 얹을까? 탑에 뭘 둘까?"를 스스로 물어요. 기본 II-V-I을 종이에 적고, 각 코드 위에 9도/탑노트를 어떻게 얹을지 설계.

**20~40분 · 실전 반주 (예제 1·2 / 74~84 BPM)**
**예제 1 9도 리하모니를 BPM 78에서** 돌리며 색을 입히고, **예제 2 탑노트 라인을 위에 얹어** 노래시켜요. 두 도구를 합쳐 나만의 4마디 편곡을 만들어 보세요.

**40~50분 · 녹음/셀프 피드백 (권장)**
나만의 편곡 30초 녹음. 체크: 9도가 화사하게 들리는가 / 탑노트 멜로디가 이어지는가 / 밋밋한 원본보다 세련됐는가.

**오늘의 완료 기준:** 기본 II-V-I에 9도와 탑노트 멜로디를 얹어, 나만의 리하모니 버전을 설계하고 컴핑한다.

## ④ 팁 / 흔한 실수

- **텐션을 다 때려 넣기.** 9도는 양념이에요. 한두 곳에 얹어야 세련돼요. 다 넣으면 탁해져요.
- **탑노트를 잊고 색만.** 9도와 탑노트를 같이. 색(9도)+노래(탑)가 만나야 진짜 편곡.
- **원본과 비교 안 함.** 밋밋한 버전 → 편곡 버전을 번갈아 쳐서 차이를 귀로 확인하세요.
- **정답 찾기.** 나만의 버전이 정답이에요. 여러 편곡을 시도해 보세요.
