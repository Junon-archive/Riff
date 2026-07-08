---
title: "셔플 — 정박을 흔들어 스윙으로"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — 격자를 살짝 흔들면 리듬이 통통 튄다

## ① 이론/설명

지금까지 우리는 **정박(straight)** 으로 쳤어요. 음을 16비트 격자에 딱딱 맞춰 정확히 놓았죠. 오늘은 그 격자를 살짝 흔드는 **셔플(swing)** 을 맛봐요.

셔플은 8분음표 한 쌍을 '똑같이'가 아니라 **'길게-짧게'** 로 굴리는 거예요. 입으로 "따-암, 따-암" 하고 굴려보세요 — 앞은 길게, 뒤는 짧게. 이렇게 하면 딱딱하고 기계적이던 리듬이, 통통 튀며 흔들리는 그루브가 돼요. 블루스·소울·펑크의 그 '끈적하고 흔들리는' 느낌이 바로 셔플에서 나와요. 정박이 정사각형 격자라면, 셔플은 그 격자가 살짝 기울어 출렁이는 거예요.

한 가지 알아둘 게 있어요. 셔플은 악보로 정확히 적기가 어려워요(정확히는 삼잇단음표 느낌이라서요). 그래서 악보는 그냥 정박으로 두고, 제목과 설명에 **'스윙해서 치라(long-short)'** 고 표시하는 게 관행이에요. 오늘 예제도 그래요 — 악보는 8분음표지만, 실제로는 "따-암 따-암"으로 굴려서 치세요.

핵심은 눈이 아니라 **귀와 몸**이에요. 입으로 "따-암"을 계속 굴리면서, 그 흔들림을 손으로 옮기는 거죠. 정박과 셔플을 번갈아 쳐보면 그 차이가 확 느껴져요. 처음엔 어색하고 자꾸 정박으로 돌아가지만, 당연해요. 오늘은 '흔들린다'는 느낌 자체를 몸에 새기면 충분해요.

## ② 시각 자료

정박(straight)과 셔플(swing)을 비교해요. 악보는 8분음표지만, 셔플은 '길게-짧게(따-암)'로 굴려서 치세요.

**예제 1 — 정박 8분음표(1마디).** 8분음표를 '똑같이' 균일하게. 딱딱하고 정확한 느낌.

```json
{
  "id": "m2.w7.d3.straight",
  "type": "tab",
  "meta": { "title": "Straight 8ths (play even)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" }
    ]}
  ]}
}
```

▶ **BPM 74.** 격자에 딱딱 맞춰 4번. 균일한 '따-따-따-따'를 기억해두세요.

**예제 2 — 셔플 느낌(2마디).** 같은 8분음표를 '길게-짧게'로 굴려요(스윙). 통통 튀는 흔들림이 나요.

```json
{
  "id": "m2.w7.d3.shuffle",
  "type": "tab",
  "meta": { "title": "16th shuffle feel — SWING the 8ths (long-short)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]}
  ]}
}
```

▶ **BPM 74.** 악보는 정박이지만 "따-암 따-암"으로 스윙해서 4번. 정박과 번갈아 치며 차이를 느껴요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 입으로 "따-암 따-암"을 굴리며 손으로 옮기는 워밍업. 정박과 번갈아.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 스윙 느낌)**
정박 "따-따-따-따"와 셔플 "따-암 따-암"을 번갈아 소리 내며 몸으로 흔들림을 각인해요.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 74)**
**예제 1**(정박)을 BPM 74에서 4번 → **예제 2**(셔플)로. 같은 음을 '길게-짧게'로 굴리는 게 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 셔플이 '길게-짧게'로 흔들리는가 / 정박과 차이가 나는가 / 중간에 정박으로 안 돌아갔는가.

**오늘의 완료 기준:** 정박과 셔플의 흔들림 차이를 몸으로 느끼고, 8분음표를 '길게-짧게'로 굴려 셔플 느낌을 낼 수 있다.

## ④ 팁 / 흔한 실수

- **자꾸 정박으로 돌아감.** 셔플이 어색해 격자로 돌아가기 쉬워요. 입으로 "따-암"을 계속 굴리세요.
- **너무 과하게 흔듦.** 셔플이 지나치면 리듬이 무너져요. 살짝 길게-짧게면 충분.
- **눈으로만 셈.** 셔플은 악보가 아니라 몸이에요. 귀와 입으로 굴려야 나와요.
- **속도부터.** 흔들림이 자리 잡기 전에 빠르면 정박으로 도망가요. 느리게, 스윙을.
