---
title: "스타카토 — 여음을 칼같이 끊는 맛"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 같은 음도 '끊느냐 늘리느냐'로 달라진다

## ① 이론/설명

같은 리듬, 같은 음이라도 그 음을 **탁 끊느냐, 죽 늘리느냐**에 따라 완전히 다른 그루브가 돼요. 펑크의 그 조이는 타이트한 맛은 바로 **스타카토**에서 나와요.

스타카토는 음을 친 직후 손을 줄에 살짝 얹어 **여음을 칼같이 끊는** 기술이에요. 짧은 음 하나 뒤에 바로 침묵이 오는 거죠. 반대로 **레가토**는 음을 끝까지 늘려 여운을 남기는 거예요. 비유하자면, 스타카토는 점을 콕콕 찍는 것이고 레가토는 선을 죽 긋는 거예요. 같은 음을 스타카토로 치면 리듬이 팽팽하게 조여지고, 레가토로 치면 느슨하게 열려요.

오늘은 **같은 패턴을 두 방식으로** 비교해봐요. 하나는 음을 끝까지 울리는 레가토, 하나는 짧게 끊고 침묵을 두는 스타카토. 똑같은 네 번의 타격인데, 끊고 안 끊고에 따라 소리의 인상이 얼마나 달라지는지 귀로 직접 느껴보세요. 펑크는 대부분 스타카토 쪽이에요 — 짧고 단단하게 끊어야 그루브가 조여지거든요.

끊는 타이밍이 처음엔 어려워요. 너무 일찍 끊으면 음이 안 나고, 늦으면 안 끊기죠. 왼손 힘을 살짝 빼거나 오른손 옆면을 줄에 얹어 끊는데, 이 타이밍은 며칠 연습해야 손에 붙어요. 정상이에요. 오늘은 '끊는다'는 감각이 뭔지 몸으로 아는 것만으로 충분해요. 이 작은 기술 하나가, 지금까지 배운 모든 그루브를 훨씬 타이트하게 만들어주는 마법의 도구예요.

## ② 시각 자료

같은 네 번의 타격을 레가토(길게)와 스타카토(짧게+침묵)로 비교해요. 소리의 길이가 인상을 바꿔요.

**예제 1 — 레가토(1마디).** 4분음표로 음을 끝까지 울려요. 느슨하고 열린 느낌.

```json
{
  "id": "m2.w7.d1.legato",
  "type": "tab",
  "meta": { "title": "Legato — full ring (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" }
    ]}
  ]}
}
```

▶ **BPM 70.** 음을 끝까지 늘려 4번. 여운이 남는 느낌을 기억해두세요.

**예제 2 — 스타카토(1마디).** 같은 자리지만 짧게 끊고 바로 침묵(8분음표+쉼표). 팽팽하게 조여요.

```json
{
  "id": "m2.w7.d1.staccato",
  "type": "tab",
  "meta": { "title": "Staccato — short stabs (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 70.** 친 직후 손을 얹어 여음을 끊어요. 레가토와 번갈아 치며 차이를 느껴보세요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 한 음을 길게(레가토)/짧게(스타카토) 번갈아 내며 끊는 타이밍을 워밍업.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 끊기)**
입으로 레가토는 "다---", 스타카토는 "닷!"처럼 소리 내며 길이를 구분해요. 언제 끊을지 미리 그립니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 70)**
**예제 1**(레가토)과 **예제 2**(스타카토)를 BPM 70에서 번갈아 4번씩. 같은 패턴이 얼마나 다르게 들리는지가 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 스타카토가 짧게 끊기는가 / 레가토가 끝까지 울리는가 / 둘의 차이가 또렷한가.

**오늘의 완료 기준:** 같은 음을 스타카토(짧게 끊기)와 레가토(길게 늘리기)로 구분해 연주할 수 있다.

## ④ 팁 / 흔한 실수

- **스타카토가 안 끊김.** 친 직후 손을 얹는 게 늦어요. 치자마자 바로 여음을 죽이세요.
- **음이 아예 안 남.** 너무 일찍 끊었어요. 짧아도 음은 한 번 또렷이 나야 해요.
- **레가토가 짧음.** 무의식적으로 끊고 있어요. 레가토는 손을 떼지 말고 끝까지.
- **속도부터.** 끊는 타이밍이 정확해야 표현이 살아요. 느리게, 길이를 또렷이.
