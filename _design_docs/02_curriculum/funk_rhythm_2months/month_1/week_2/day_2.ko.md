---
title: "고스트 모터 — 스크래치를 리듬 악기로 승격"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 균일한 '치치치치'가 하이햇이 된다

## ① 이론/설명

사실 1주차에 그렇게 흔들던 뮤트 스크래치, 그게 바로 고스트 노트였어요. 오늘은 그 스크래치를 '어쩌다 나는 소리'에서 **<mark>의도한 리듬 악기</mark>**로 승격시켜요.

목표는 16비트 전부를 고스트로 채워, 드럼의 하이햇처럼 **<mark>균일하고 촘촘한 '치치치치'</mark>** 를 만드는 거예요. 여기서 진짜 어려운 건 빠르기가 아니라 **<mark>균일함</mark>**이에요. 어떤 고스트는 크고 어떤 건 죽어버리면, 하이햇이 아니라 지저분한 잡음이 돼요. 열여섯 개의 '치'가 알알이 같은 크기로 나오게, 오른손 다운·업의 힘과 왼손 압력을 일정하게 유지하세요.

왼손은 계속 줄 위에 살짝 얹은 상태를 유지해요. 떼면 소리가 끊기고, 너무 누르면 음정이 새어 나오죠. <mark>'얹은 채로 가만히'</mark> — 이 중립 상태가 오늘의 핵심이에요.

지루하게 느껴질 수도 있어요. 그런데 이 <mark>균일한 고스트 카펫</mark>이 있어야, 내일 그 위에 실제음을 콕콕 얹었을 때 대비가 확 살아나요. 배경이 고를수록 주인공이 도드라지는 법이니까요. 오늘은 이 하이햇 카펫을 30초, 1분, 점점 길게 깔아보는 날이에요. 완벽하게 균일하지 않아도 좌절하지 마세요. 오늘 어제보다 조금 더 고른 '치치치'가 나왔다면, 그걸로 이미 한 걸음 나아간 거예요. 배경이 탄탄해질수록 내일의 그루브가 살아나니까요.

## ② 시각 자료

오늘은 화면 전체가 고스트예요. 두 예제 모두 실제음 없이 고스트만 촘촘히 — <mark>균일함을 보는 자료</mark>예요.

**예제 1 — 고스트 모터(1마디).** 16비트를 전부 고스트로. 열여섯 개의 '치'가 같은 크기로 나오는 게 목표.

```json
{
  "id": "m1.w2.d2.ghost_motor_1bar",
  "type": "tab",
  "meta": { "title": "Continuous ghost motor (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66.** 하이햇처럼 균일하게 4번. 크고 작은 편차 없이 알알이 같은 '치'.

**예제 2 — 숨 쉬는 고스트(2마디).** 각 마디 끝에 아주 짧은 빈자리. 손은 계속 흔들되 그 두 조각만 줄을 안 스쳐요.

```json
{
  "id": "m1.w2.d2.ghost_breath",
  "type": "tab",
  "meta": { "title": "Ghost motor with a breath (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "rest": true },
      { "string": 2, "fret": 9, "duration": "sixteenth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "rest": true },
      { "string": 2, "fret": 9, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 66.** 빈자리에서도 손은 멈추지 않아요. '치'와 '쉼'의 대비를 느끼며 4번.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 왼손 얹은 채 고스트 스크래치만. '얹은 채로 가만히'라는 <mark>중립 압력</mark>을 찾습니다.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 균일함)**
입으로 '치치치치'를 <mark>같은 크기로</mark> 세면서 손을 흔들어요. 큰 '치', 작은 '치'가 섞이지 않는지 귀로 감시.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 66)**
**예제 1**(고스트 모터)을 BPM 66에서 4번 → **예제 2**(숨 쉬는 고스트)로. <mark>열여섯 개가 알알이 균일한지</mark>가 관건.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: <mark>'치'가 다 같은 크기인가</mark> / <mark>음정이 새지 않았는가</mark> / <mark>30초를 균일하게 유지했는가</mark>.

**오늘의 완료 기준:** 16비트 고스트를 하이햇처럼 균일하게, 음정이 새지 않고 30초 이상 유지할 수 있다.

## ④ 팁 / 흔한 실수

- **크고 작은 편차.** 다운은 크고 업은 작으면 카펫이 울퉁불퉁. 다운·업 힘을 맞추세요.
- **음정이 샘.** 왼손을 살짝 눌러버린 거예요. '얹기만' 하는 중립을 유지.
- **손을 뗌.** 왼손을 떼면 소리가 뚝 끊겨요. 줄에 계속 닿아 있게.
- **지겨워서 대충.** 이 균일한 배경이 내일 대비의 밑천이에요. 지루해도 고르게.
