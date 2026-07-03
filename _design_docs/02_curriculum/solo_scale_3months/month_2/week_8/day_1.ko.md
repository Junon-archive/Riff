---
title: "ii-V-I 가이드톤 개념 + F·B·E 위치 각인"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 코드가 바뀔 때 '딱 한 음'만 정확히: 가이드톤 F·B·E

## ① 이론/설명

오늘 왜 이걸 하냐면요. 여러분 지난 7주 동안 코드톤(1·3·5)을 지판에 매핑했잖아요. 근데 막상 백킹 위에서 코드가 휙휙 바뀌면 손이 얼어붙죠? "어? 지금 무슨 코드지, 어디 짚어야 하지" 하다가 박자 다 놓치고요. 그 이유는 코드가 바뀔 때 **다섯 음을 다 신경 쓰려고 하기 때문**이에요. 그건 뇌가 못 따라가요.

그래서 재즈 하는 사람들이 100년 전부터 써온 치트키가 있어요. 바로 **가이드톤(guide tone)** — 각 코드에서 딱 **3도** 하나만 붙잡는 거예요. 왜 하필 3도냐면요, 3도는 그 코드가 **메이저인지 마이너인지 성격을 결정하는 음**이거든요. 루트는 어느 코드나 다 있어서 밋밋하고, 5도도 웬만하면 다 겹쳐요. 근데 3도는 코드의 '표정'이에요. 3도만 정확히 짚어도 "아, 지금 이 코드구나"가 귀에 딱 잡혀요.

이번 주 우리가 정복할 진행은 재즈·팝·발라드에 안 나오는 데가 없는 그 유명한 **ii-V-I**. 다장조(C major) 기준으로 **Dm7 → G7 → Cmaj7** 이에요. 각 코드의 3도, 즉 가이드톤은 이거예요.

- **Dm7의 3도 = F** (레·파·라·도 중에 '파')
- **G7의 3도 = B** (솔·시·레·파 중에 '시')
- **Cmaj7의 3도 = E** (도·미·솔·시 중에 '미')

그러니까 이번 주 여러분이 외울 건 스케일 전체가 아니라 딱 이 세 음, **F → B → E** 예요. 코드가 Dm7이면 F, G7 되는 순간 B, Cmaj7 되는 순간 E. 이 세 음만 제 박자에 착지시켜도 "이 사람 코드 알고 치네" 소리 나와요.

그리고 오늘 미리 심어둘 마법 한 스푼. **G7의 B는 다음 Cmaj7의 E로 흘러가고 싶어 해요.** 이게 ii-V-I의 심장이에요. 긴장(G7)이 해결(Cmaj7)로 풀리는 그 느낌, 이번 주 내내 이 B→E 리딩을 귀에 새길 거예요. 오늘은 일단 세 음의 **위치**부터 손에 익힙니다.

## ② 시각 자료

첫 번째, 오늘의 주인공 지도예요. 한 손 자리(2~4프렛)에 세 코드의 루트와 3도가 다 모여 있어요. 초록 강조가 가이드톤이에요. **F는 4번 줄 3프렛, B는 3번 줄 4프렛, E는 4번 줄 2프렛** — 이 세 개가 이번 주 '집'이에요.

```json
{
  "id": "m2.w8.d1.guide_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "ii-V-I guide tones home shape (Dm7 F / G7 B / Cmaj7 E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 0, "label": "Dm7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "finger": 3, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 0, "label": "G7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "finger": 4, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 1, "label": "Cmaj7 R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 2, "finger": 2, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
    ]
  }
}
```

두 번째, 같은 F·B·E가 넥 전체 여기저기에 또 있어요. 어느 자리에서 즉흥을 하든 "지금 내 손 근처의 F(또는 B, E)가 어디지?"를 바로 찾으라고 여러 포지션을 뿌려뒀어요. 오늘은 통암기 말고 "아, 저기쯤 또 있구나" 정도만.

```json
{
  "id": "m2.w8.d1.guide_tone_positions",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Guide tones F/B/E across the neck (multiple positions)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 8,
    "dots": [
      { "string": 4, "fret": 3, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 1, "fret": 1, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 6, "label": "Dm7-3(F)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 0, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 2, "label": "G7-3(B)", "highlight": true, "role": "target" },
      { "string": 4, "fret": 2, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
      { "string": 1, "fret": 0, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 5, "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 76) — 3도 감각 예열**
메트로놈 76에 맞춰, 위 '집' 자리에서 세 가이드톤만 4분음표로 번갈아 짚어요. F(4번 3프렛) → B(3번 4프렛) → E(4번 2프렛), 한 음당 클릭 한 번. 짚을 때마다 소리 내서 "파! 시! 미!" 하고 불러요. 음이름을 입으로 붙이는 게 오늘 예열의 핵심이에요.

**10~20분 · 두뇌 훈련 (F·B·E를 여러 자리에서 즉시 짚기)**
메트로놈 끄고, 두 번째 지도를 보며 **F만** 세 자리(4번 3프렛, 1번 1프렛, 2번 6프렛)를 눈으로 찍고 손으로 짚어요. 그다음 **B만**, 그다음 **E만**. 각 음당 "가장 가까운 자리 → 그다음 자리" 최소 이동 경로를 찾는 게 포인트. 마지막엔 눈 감고 '집' 자리 F·B·E 세 개를 3초 안에 짚으면 통과.

**20~40분 · 실전 즉흥 (Dm7-G7-Cmaj7 백킹 / 70~76 BPM)**
유튜브·앱에서 "ii V I backing track C major slow" 하나 틀어요. 규칙 딱 하나: **다른 건 아무것도 하지 말고, 코드가 바뀔 때마다 그 코드의 3도(F/B/E)만 '집' 자리에서 길게 짚기.** 멜로디도 리듬도 신경 끄고, 오직 '코드 바뀜 = 3도 짚음' 반사신경만 만들어요. 아직 어긋나도 괜찮아요. 오늘은 위치 각인이 목표예요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 마지막 잼 30초만 녹음. 다시 들으며 딱 하나 체크: **코드가 바뀐 순간과 내가 3도를 짚은 순간이 얼추 맞는지.** 늦었으면 내일은 BPM을 65로 낮춰도 좋아요. 정확히 맞추는 건 Day 3에서 잡아요.

**오늘의 완료 기준:** '집' 자리 F·B·E를 눈 감고 3초 안에 짚기. 백킹 위에서 코드 바뀔 때마다 3도 짚기 8회 이상 성공.

## ④ 팁 / 흔한 실수

- **다섯 음 다 챙기려는 욕심.** 오늘은 3도 하나만이에요. 루트·5도·7도 다 잊어도 돼요. 3도 하나가 정확하면 나머지는 이번 주 내내 저절로 붙어요.
- **음이름 없이 위치만 외우기.** "4번 줄 3프렛"으로만 외우면 다른 자리 F를 못 찾아요. 반드시 "이건 F(파)"라고 이름표를 붙이세요. 이름이 넥 전체를 연결해 줘요.
- **B와 E를 헷갈림.** B(3번 4프렛)와 E(4번 2프렛)는 손 모양이 비슷해서 처음엔 잘 섞여요. B는 '위 줄 위 프렛', E는 '아래 줄 아래 프렛'으로 방향을 몸에 새기세요.
- **템포 욕심.** 76이 느려 보여도 오늘은 위치 각인이 전부예요. 빠르게 대충 짚는 것보다 느리게 정확히 이름 부르며 짚는 게 이번 주 전체를 살려요.
