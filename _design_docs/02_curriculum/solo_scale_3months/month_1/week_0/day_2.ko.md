---
title: "Week 0 · Day 2 — 매일 워밍업의 원형: 얼터네이트 피킹 & 핑거 독립"
dayKey: m1.w0.d2
estMinutes: 50
i18nKey: lesson.m1.w0.d2
---

# Day 2 — 얼터네이트 피킹 & 핑거 독립 예열 루틴 세우기

## ① 이론/설명

오늘 왜 이걸 하냐면요, 앞으로 매일 아침에 켜질 **<mark>"손 시동 거는 루틴"</mark>**을 오늘 완성해두려고요. 즉흥 솔로는 아이디어 싸움이지만, 아이디어가 아무리 좋아도 손이 안 따라주면 머릿속 멜로디가 손끝에서 뭉개져요. 그래서 우리는 매일 첫 10분을 **정해진 예열 세트**로 시작할 거예요. 오늘 그 세트를 몸에 새깁니다.

두 가지만 잡아요. **<mark>얼터네이트 피킹</mark>**과 **<mark>핑거 독립</mark>.**

### 1) 얼터네이트 피킹 = 다운·업의 민주주의

얼터네이트 피킹은 그냥 "다운–업 번갈아 치기"예요. 근데 중급자들이 여기서 은근히 무너져요. 줄을 넘어갈 때(현 이동) 자기도 모르게 다운–다운 두 번 치거나, 어려운 구간에서 업피킹을 슬쩍 건너뛰죠. 그러면 나중에 4연음 시퀀스·빠른 프레이즈에서 리듬이 미끄러집니다.

핵심 감각: **"업피킹도 다운피킹과 똑같이 <mark>크고 또렷하게</mark>."** 대부분 업피킹이 다운보다 작고 소심해요. 오늘은 오히려 업을 좀 과장해서 쳐보세요.

### 2) 핑거 독립 = 안 쓰는 손가락도 대기 상태로

핑거 독립은 "한 손가락을 움직일 때 나머지 손가락이 딸려 올라가지 않는 것"이에요. 특히 3번(약지)–4번(새끼) 손가락은 신경이 붙어 있다시피 해서, 약지를 들면 새끼가 훌쩍 따라 올라가요. 이게 즉흥 때 "치고 싶은 음에 손가락이 늦게 도착"하는 <mark>원인의 90%</mark>예요.

해결책은 유명한 **<mark>스파이더 워크(크로매틱 1–2–3–4)</mark>**예요. 한 프렛당 한 손가락씩 배정해서, **<mark>짚은 손가락은 그대로 누른 채</mark>** 다음 손가락을 내려놓는 게 포인트입니다. 지루하지만, 이거 2주만 매일 하면 손이 딴사람 손이 돼요.

## ② 시각 자료

**(a) 스파이더 워크 — 크로매틱 1-2-3-4 (오름차)**

```json
{
  "id": "m1.w0.d2.spider_1234",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Spider walk — chromatic 1-2-3-4 across strings",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "tempoBpm": 60
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "chromatic_1234",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 6, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 6, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 6, "fret": 4, "duration": "eighth", "finger": 4 },
        { "string": 5, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 5, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 5, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 5, "fret": 4, "duration": "eighth", "finger": 4 }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 4, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 4, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 4, "fret": 4, "duration": "eighth", "finger": 4 },
        { "string": 3, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 3, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 3, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 3, "fret": 4, "duration": "eighth", "finger": 4 }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 2, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 2, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 2, "fret": 4, "duration": "eighth", "finger": 4 },
        { "string": 1, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 1, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 1, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 1, "fret": 4, "duration": "eighth", "finger": 4 }
      ]}
    ]
  }
}
```

**(b) 핑거 독립 강화 — 1-3-2-4 순열 (약지·새끼 분리)**

```json
{
  "id": "m1.w0.d2.finger_independence_1324",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Finger independence — 1-3-2-4 permutation",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "tempoBpm": 55
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "chromatic_1324",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 6, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 6, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 6, "fret": 4, "duration": "eighth", "finger": 4 },
        { "string": 5, "fret": 1, "duration": "eighth", "finger": 1 },
        { "string": 5, "fret": 3, "duration": "eighth", "finger": 3 },
        { "string": 5, "fret": 2, "duration": "eighth", "finger": 2 },
        { "string": 5, "fret": 4, "duration": "eighth", "finger": 4 }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

이 세트가 곧 **<mark>앞으로 매일 반복할 워밍업의 원형</mark>**이에요. 오늘 순서를 몸에 익혀두세요.

**0~10분 · 워밍업 (BPM 60 → 미세 상향)**
- 위 (a) 스파이더 워크 1-2-3-4를 6번줄→1번줄까지, 그리고 다시 1번줄→6번줄로 내려오며 왕복.
- 규칙: **<mark>짚은 손가락은 다음 음까지 떼지 않는다</mark>.** 얼터네이트 피킹 다운–업 엄수.
- 완료 기준: BPM 60에서 삑사리·리듬 밀림 없이 2회 왕복 → 성공하면 4씩 올려 72까지.

**10~20분 · 두뇌 훈련 (BPM 55) — 핑거 독립**
- 위 (b) 1-3-2-4 순열을 6·5번줄에서. 여유되면 2-4-1-3, 4-3-2-1 순열도 즉석에서 만들어보기.
- **거울 체크:** 약지를 짚을 때 <mark>새끼가 지판에서 붕 뜨는지</mark> 눈으로 감시. 새끼는 항상 지판 1cm 안에 대기.
- 완료 기준: 새끼가 튀어 오르지 않고 한 마디 완주.

**20~40분 · 실전 감각 (BPM 75, Am 백킹) — 두 음 즉흥**
- 어제는 한 음이었죠. 오늘은 **<mark>두 음(A 근음 + C, 즉 ♭3)</mark>**으로 늘립니다. 1번줄 5프렛(A)과 8프렛(C)만 오가며 리듬 놀이.
- 슬쩍 맛보기: **코드가 울릴 때 <mark>C(8프렛)에서 멈춰보세요</mark>.** "어, 뭔가 착 붙네?" 하는 그 느낌 — 그게 3도 착지의 예고편이에요.
- 완료 기준: 백킹 한 바퀴 동안 두 음만으로 얼지 않고 프레이즈 만들기.

**40~50분 · 녹음/피드백 (권장)**
- 위 두 음 즉흥을 30초 녹음. 다시 들으며 체크: **"C에서 멈췄을 때가 A에서 멈췄을 때보다 안정적으로 들렸나?"**
- 정답 강요 아니에요. 귀를 여는 게 목적입니다.

## ④ 팁 / 흔한 실수

- **속도 욕심 금지.** 스파이더 워크는 빠르게 하려고 있는 게 아니라 **정확하게** 하려고 있는 거예요. 삑사리 나는 속도는 이미 너무 빠른 거예요. 4 BPM씩만 올리세요.
- **업피킹이 작다.** 열에 아홉은 여기서 걸려요. 오늘만 업피킹을 일부러 과장해서 쳐보면 양쪽 음량이 맞춰집니다.
- **새끼손가락 도망.** 약지 짚을 때 새끼가 튀면, 아예 새끼를 지판에 살짝 얹은 채 연습하세요. "붙어 있는 습관"부터 만드는 겁니다.
- **손목·팔 통증이 오면 즉시 멈추세요.** 예열은 몸을 깨우는 거지 혹사시키는 게 아닙니다. 어깨 힘 빼고, 피크는 살짝만 쥐어요.
