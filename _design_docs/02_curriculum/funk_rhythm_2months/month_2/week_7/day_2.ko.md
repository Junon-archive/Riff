---
title: "끊고 늘리기 — 한 마디 안에서 설계하기"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 음의 길이를 설계하면 곡이 말을 한다

## ① 이론/설명

어제 스타카토와 레가토를 따로 봤죠. 오늘은 이 둘을 **한 마디 안에서 섞어요.** 어떤 음은 짧게 끊고, 어떤 음은 길게 늘려서, 리듬에 강약과 호흡을 주는 거예요.

이게 사실 '표현'의 시작이에요. 같은 음표들이 나열돼 있어도, 어디를 끊고 어디를 늘릴지 설계하는 순간 곡이 말을 하기 시작해요. 짧은 스타카토는 리듬을 조이는 '툭', 긴 레가토는 숨을 틔우는 '여백'이에요. 이 둘을 번갈아 배치하면, 딱딱하던 리듬에 말하듯 자연스러운 억양이 생겨요. 사람이 말할 때도 어떤 단어는 짧게 툭, 어떤 단어는 길게 늘이잖아요 — 음악도 똑같아요.

오늘의 예제는 스타카토와 레가토를 섞은 패턴이에요. 그런데 정답은 없어요. 같은 리듬이라도 '어느 음을 끊고 어느 음을 늘릴까'는 여러분이 설계하는 거예요. 예제를 뼈대로, 길이를 이리저리 바꿔보며 어떤 조합이 가장 '펑키'하게 들리는지 귀로 골라보세요.

한 마디 안에서 길이를 바꾸려니 손이 헷갈릴 수 있어요. 특히 레가토로 늘리다가 갑자기 스타카토로 끊는 전환이 어렵죠. 당연해요. 오늘은 완벽하지 않아도, '길이를 내가 고른다'는 감각만 잡으면 큰 진전이에요. 음표는 그대로인데 길이만 바꿔서 곡의 표정이 달라지는 걸 처음 경험하면, 리듬이 훨씬 재미있어져요. 오늘부터 여러분은 연주자이자, 리듬을 직접 디자인하는 편곡자예요.

## ② 시각 자료

스타카토(짧게)와 레가토(길게)를 한 마디 안에서 섞어요. 정답이 아니라 설계의 예 — 여러분만의 길이로 응용해보세요.

**예제 1 — 끊고 늘리기(1마디).** 긴 음(레가토)과 짧은 음(스타카토)이 번갈아. 리듬에 억양이 생겨요.

```json
{
  "id": "m2.w7.d2.mix_1bar",
  "type": "tab",
  "meta": { "title": "Staccato + legato mixed (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 긴 음은 끝까지, 짧은 음은 딱 끊고. 4번 치며 억양을 느껴보세요.

**예제 2 — 길이 설계(2마디).** 짧고 긴 음을 다양하게 배치한 응용형. 익으면 길이를 바꿔 나만의 억양으로.

```json
{
  "id": "m2.w7.d2.mix_2bar",
  "type": "tab",
  "meta": { "title": "Designing long and short (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 72.** 어느 음을 끊고 늘릴지 직접 바꿔보며 가장 펑키한 조합을 찾아보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 짧은 음·긴 음을 번갈아 내며 전환을 워밍업. 레가토→스타카토 전환에 집중.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 길이 설계)**
입으로 "다--- 닷! 다--- 닷!"처럼 길이를 섞어 노래해요. 어디를 끊고 늘릴지 미리 설계합니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 72)**
**예제 1**(끊고 늘리기)을 BPM 72에서 4번 → **예제 2**(길이 설계)로. 익으면 길이를 바꿔 나만의 억양으로 응용.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 짧은 음과 긴 음이 또렷이 구분되는가 / 억양이 자연스러운가 / 전환이 매끄러운가.

**오늘의 완료 기준:** 한 마디 안에서 스타카토와 레가토를 섞어, 음 길이로 리듬에 억양을 만들 수 있다.

## ④ 팁 / 흔한 실수

- **다 같은 길이.** 끊고 늘림의 차이가 없으면 밋밋해요. 짧은 건 확실히 짧게, 긴 건 확실히 길게.
- **전환에서 버벅.** 레가토→스타카토가 어려워요. 늘리다가 끊는 지점을 미리 정해두세요.
- **너무 잘게 끊음.** 다 스타카토면 답답해요. 레가토의 여백이 있어야 숨이 쉬어져요.
- **정답 강박.** 길이 설계에 정답은 없어요. 여러 조합을 즐기며 귀로 고르세요.
