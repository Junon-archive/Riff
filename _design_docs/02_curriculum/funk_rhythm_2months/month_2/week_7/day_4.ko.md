---
title: "스타카토 + 셔플 그루브 완성"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — 길이와 흔들림으로 표현을 완성하다

## ① 이론/설명

이번 주 결승선이에요. 오늘은 이번 주에 배운 **<mark>스타카토 컨트롤과 셔플 필</mark>**을 섞어, 4마디 그루브를 백킹 트랙 위에서 완성해요.

이번 주의 두 무기를 정리하면 이래요. 스타카토는 <mark>음의 길이를 조각하는 도구</mark> — 짧게 끊어 조이고, 길게 늘려 여백을 줘요. 셔플은 <mark>음의 타이밍을 흔드는 도구</mark> — 격자를 살짝 기울여 통통 튀게 해요. 같은 음, 같은 리듬이라도 이 둘을 얹으면 표현이 확 살아나요. 지난주까지가 '무엇을 치느냐'였다면, 이번 주는 '어떻게 치느냐'예요.

오늘의 그루브는 이 둘의 합이에요. 어떤 음은 스타카토로 툭 끊고, 전체는 셔플로 살짝 흔들면서, 백킹 위에서 굴려보세요. 스타카토가 리듬을 조이고 셔플이 그걸 흔들면, 딱딱하던 그루브가 <mark>살아 숨 쉬며 춤춰요</mark>.

두 달을 돌아보면, 여러분은 이제 <mark>리듬의 거의 모든 도구</mark>를 가졌어요. 모터·고스트·악센트(1개월), 3줄 커팅·싱글노트·스타카토·셔플(2개월). 다음 주는 배우는 주가 아니라 **<mark>쏟아내는 주</mark>**예요 — 베이스·드럼만 깔린 빈 트랙 위에서 이 모든 걸 섞어 나만의 그루브를 녹음해요. 오늘 스타카토와 셔플이 손에 붙었다면, 마지막 주를 위한 준비는 끝났어요. 이제 남은 건 배운 걸 시험하는 게 아니라, 마음껏 쏟아내며 즐기는 무대뿐이에요. 두 달의 여정이 곧 한 곡으로 완성돼요.

## ② 시각 자료

스타카토(길이)와 셔플(흔들림)을 섞은 완성형 그루브예요. 백킹 위에서 <mark>조이고 흔들며 굴려보세요</mark>.

**예제 1 — 스타카토 그루브(2마디).** 짧게 끊는 음과 늘리는 음을 섞은 조이는 그루브. 정박으로 또렷이.

```json
{
  "id": "m2.w7.d4.stac_groove",
  "type": "tab",
  "meta": { "title": "Staccato groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** 백킹 위에서 4번 이상. 스타카토가 리듬을 조이는지 느껴보세요.

**예제 2 — 셔플 필 그루브(2마디).** 같은 재료를 '길게-짧게' 셔플로 흔들어요. 통통 튀는 그루브.

```json
{
  "id": "m2.w7.d4.shuffle_groove",
  "type": "tab",
  "meta": { "title": "Shuffle-feel groove — SWING the 8ths (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76.** 악보는 정박이지만 스윙해서 4번. 익으면 스타카토·셔플을 섞어 나만의 그루브로 녹음.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 스타카토(끊기)와 셔플(흔들기)을 가볍게 복습. <mark>둘이 손에 붙었는지 점검</mark>.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 길이 + 흔들림)**
입으로 길이("다--- 닷!")와 흔들림("따-암")을 섞어 노래해요. <mark>어떻게 조이고 흔들지 설계</mark>합니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 76)**
**예제 1**(스타카토 그루브)을 정박으로, **예제 2**(셔플 필)를 스윙으로 백킹 위에서. 익으면 <mark>둘을 섞어 나만의 그루브</mark>로.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: <mark>스타카토가 조이는가</mark> / <mark>셔플이 흔들리는가</mark> / 백킹과 맞물리는가 / 표현이 살아 있는가.

**오늘의 완료 기준:** 스타카토와 셔플을 섞은 4마디 그루브를 백킹 위에서, 길이와 흔들림으로 표현을 살려 유지할 수 있다. (7주차 완성!)

## ④ 팁 / 흔한 실수

- **길이·흔들림이 밋밋.** 스타카토·셔플이 약하면 표현이 안 살아요. 끊을 땐 확실히, 흔들 땐 분명히.
- **셔플이 정박으로.** 조이기에 신경 쓰다 흔들림을 놓쳐요. "따-암"을 계속 굴리세요.
- **너무 복잡하게.** 도구가 많다고 다 넣으면 어수선해요. 한두 가지 표현을 또렷이.
- **백킹 없이.** 표현은 다른 악기와 함께일 때 살아요. 꼭 트랙 위에서.
