---
title: "모티프와 프레이즈 작곡 — 한 마디를 던지고 되받기"
dayKey: "m3.w12.d2"
estMinutes: 50
i18nKey: "lesson.m3.w12.d2"
---

# Day 2 — 스케일 나열을 '음악'으로: 모티프 던지고, 변형해 되받기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 착지 지도는 그렸어요. 근데 지도만 있으면 아직 '음 고르기'지 '음악'은 아니에요. 초보 즉흥의 90%가 여기서 무너져요 — **<mark>쉬지 않고 계속 치거든요.</mark>** 음을 쏟아붓기만 하면 듣는 사람은 숨이 막혀요. 11주차에 배운 여백·프레이징, 기억나죠? 오늘 그걸 작곡에 심습니다.

오늘의 무기는 두 개예요. **<mark>모티프</mark>**와 **<mark>콜앤리스폰스.</mark>**

- **모티프(motif)** 는 짧은 동기예요. 2~4음짜리 한 조각. 곡 전체가 이 씨앗 하나에서 자라요. 우리 모티프는 아주 단순하게 갈게요: **<mark>D → E → C(♭3에 착지) → (침묵).</mark>** 세 음 던지고 쉬는 거예요. 이 '침묵'이 핵심이에요. 쉬어야 방금 친 C가 무게를 가져요.
- **콜앤리스폰스(call & response)** 는 대화예요. 방금 던진 모티프(콜)를, **<mark>살짝 변형해서 되받는(리스폰스)</mark>** 거죠. 똑같이 반복하면 지루하고, 완전히 다르면 남남이에요. "같은 말인데 억양만 바꾸기" — 그게 변형이에요.

그리고 오늘 몰래 연습할 게 하나 더 있어요. 리스폰스를 **A7 구간까지 끌고 가서, <mark>C(♭3)를 C#(장3도)로 바꿔 되받는</mark>** 거예요. 어제 배운 그 한 프렛 스위치! 같은 모티프가 도리안에서 던져지고 믹솔리디안에서 답하는 순간, 곡에 '이야기'가 생겨요. 이게 여러분 솔로의 골격이 됩니다.

## ② 시각 자료

첫 번째, **<mark>콜(모티프 원형)</mark>** 이에요. Am7 위에서 D-E-C 세 음을 던지고 반 마디를 통째로 쉬어요. 마지막 C에 비브라토를 살짝. 저 큰 여백(`rest`)이 데이터로 박혀 있는 게 보이죠? 저게 오늘의 주인공이에요.

```json
{
  "id": "m3.w12.d2.motif_call",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Original solo motif - the CALL (Am7, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (over Am7)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]}
    ]
  }
}
```

두 번째, **<mark>리스폰스(변형해 되받기)</mark>** 예요. 두 마디로 늘렸어요. 1마디는 D7 위에서 F#(장6도 색)로 답하고, 2마디에서 A7으로 넘어가며 **<mark>C#(장3도)로 스위치</mark>**해서 되받아요. 마지막에 ♭7(G) 색채음까지 툭 얹었어요. 콜과 같은 '모양'인데 착지가 달라진 게 느껴지죠?

```json
{
  "id": "m3.w12.d2.motif_response",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Original solo motif - the RESPONSE (D7 F# color -> A7 mode switch to major 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian/Mixolydian",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "technique": "none", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "passing" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 8, "duration": "quarter", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 92) — 3도 인터벌로 손 데우기**
메트로놈 92에 맞춰 '하나의 집' 안에서 3도 인터벌 패턴을 굴려요. 한 음 짚고 3도 위 음 짚고, 다시 한 칸 올라와 반복. 어제 4연음이었다면 <mark>오늘은 3도 점프로</mark>. 프레이즈 재료를 손에 계속 얹어두는 예열이에요.

**10~20분 · 두뇌 훈련 (모티프 손에 얹기)**
백킹 없이, 콜 모티프(D-E-C + 쉼)만 10번 반복해요. 이때 **<mark>입으로도 같이 부르세요</mark>** — "따-다-담… (쉼)." 그다음 리스폰스를 얹어요. 콜과 리스폰스를 번갈아 치며, 둘 사이의 '침묵'이 어색해서 채우고 싶은 충동을 꾹 참는 훈련이에요. 그 참는 힘이 오늘 실력이에요.

```json
{
  "id": "m3.w12.d2.motif_response",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Original solo motif - the RESPONSE (D7 F# color -> A7 mode switch to major 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian/Mixolydian",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "eighth", "technique": "none", "label": "6", "role": "color", "highlight": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "passing" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 8, "duration": "quarter", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]}
    ]
  }
}
```

```json
{
  "id": "m3.w12.d2.motif_call",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Original solo motif - the CALL (Am7, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (over Am7)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]}
    ]
  }
}
```

**20~40분 · 실전 작곡 (Am7-D7-A7 백킹 / 88~92 BPM)**
백킹을 틀고 콜 → 리스폰스를 실제 코드 위에 얹어요. 그다음이 진짜 작곡: **<mark>리스폰스를 매번 조금씩 다르게</mark>** 되받아 보세요. 어떤 땐 F#를 길게, 어떤 땐 C#로 스위치, 어떤 땐 여백을 더 크게. 마음에 드는 변형 2~3개를 골라 기억해 두세요. 그게 내일 완성 솔로의 재료예요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 도구로 콜앤리스폰스 한 세트를 녹음. 다시 들으며 딱 하나: **<mark>여백이 진짜 여백으로 들리나</mark>, 아니면 무의식적으로 음을 채웠나.** 채웠다면 내일은 쉼을 반 박 더 늘려보세요.

**오늘의 완료 기준:** 콜 모티프를 외워서 치기. 리스폰스로 최소 2가지 변형을 만들고, 그중 A7에서 C#로 스위치하는 버전을 백킹 위에서 성공.

### 셀프 피드백 체크리스트 (오늘의 초점: 프레이징)
- [ ] **3도 착지 정확도** — 콜은 C(♭3), 리스폰스는 F#·C#에 정확히 착지했다.
- [ ] **색채음 활용** — F#(장6도)·G(♭7)를 '지나가는 음'이 아니라 색으로 들리게 얹었다.
- [ ] **비브라토 안정성** — 착지음(C·F#·C#)에 일정한 주기의 비브라토를 걸었다.
- [ ] **리듬 타이밍** — 여백(쉼표)의 길이가 흔들리지 않고 콜/리스폰스 대비가 살았다.

## ④ 팁 / 흔한 실수

- **여백을 못 참고 채우기.** 제일 흔해요. 쉼표에서 손이 근질거려 음을 욱여넣죠. 그럼 대화가 아니라 독백이 돼요. 쉴 땐 진짜 쉬세요. 침묵도 연주예요.
- **변형을 '완전히 다른 프레이즈'로 만들기.** 리스폰스는 콜의 사촌이어야지 남남이면 안 돼요. 음 순서·리듬 중 하나만 바꾸고 나머지는 유지하세요. 그래야 귀가 "아, 아까 걔네"라고 알아들어요.
- **모티프를 너무 길게.** 2~4음이면 충분해요. 모티프가 길면 변형·반복할 여지가 없어져요. 짧아야 곡이 자라요.
- **스위치(C→C#)를 안 살리기.** 리스폰스에서 C#로 넘어가는 그 순간이 이 곡의 '반전'이에요. 밋밋하게 지나치지 말고 살짝 비브라토로 도장 찍어 주세요.
