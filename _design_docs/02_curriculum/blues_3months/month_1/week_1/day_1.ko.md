---
title: "셔플 필 — 블루스의 심장 박동"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — 롱-숏으로 굴리면 블루스가 된다

## ① 이론/설명

블루스가 왜 블루스처럼 들릴까요? 답은 딱 하나, **셔플(shuffle)**이에요. 똑같은 8분음표라도 **균등하게** 치면 로큰롤이 되고, **롱-숏(길게-짧게)**으로 굴리면 순식간에 블루스가 됩니다. 우리가 흔히 '따-그닥, 따-그닥' 흥얼거리는 그 느낌, <mark>말이 달리는 발굽 소리</mark>가 바로 셔플이에요.

원리는 이래요. 한 박을 삼등분한 뒤, 앞의 둘을 묶어 **길게**, 마지막 하나만 **짧게** 칩니다. 그래서 '하나-둘-셋'이 '하아-셋'처럼 들리죠. 악보에는 정박 8분음표로 적고 위에 **<mark>Swing 8ths</mark>**라고만 표시해요. 눈으로는 균등해 보여도, 손은 롱-숏으로 굴리는 게 우리끼리의 약속이에요.

그 전에, 먼저 '민둥민둥한 정박'이 뭔지 4분음표로 밟아볼게요.

```json
{
  "id": "m1.w1.d1.plain_pulse",
  "type": "tab",
  "meta": { "title": "Open A — plain quarter pulse", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "straight" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 80, 정박으로.** 5번 줄 개방 A를 4분음표로 '쿵-쿵-쿵-쿵'. 이 균등한 박이 셔플의 출발점이에요.

오늘은 음정 욕심을 완전히 내려놔요. **5번 줄 개방 A** 하나만 잡고 셔플 필을 몸에 새깁니다. 발로 정박을 '쿵-쿵' 밟으면서, 손은 그 사이를 **롱-숏**으로 채우는 거예요. 메트로놈을 **BPM 80**에 두고 천천히 시작하세요.

조급해하지 않아도 괜찮아요. 셔플은 머리로 세는 게 아니라 <mark>몸이 흔들리며 익는</mark> 리듬이라, 오늘 발끝부터 까딱이면 벌써 절반은 온 거예요. 이 필 하나만 잡으면 이번 주 내내 얹을 **A7 부기 리프**가 저절로 그루브를 타게 됩니다.

## ② 시각 자료

이제 그 정박을 **롱-숏**으로 굴려볼게요. 아래 악보는 눈에는 균등한 8분음표지만, 위의 **<mark>Swing 8ths</mark>** 지시대로 길게-짧게 흔들어 연주해요.

```json
{
  "id": "m1.w1.d1.shuffle_open",
  "type": "tab",
  "meta": { "title": "Open A — shuffle 8ths (long-short)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플로.** 5번 줄 개방 A를 '따-그닥 따-그닥' 두 마디. 발은 정박, 손은 롱-숏이에요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60. 5번 줄 개방 A를 정박 4분음표로 밟으며 손과 발을 맞춰요. <mark>발이 먼저 박을 잡게</mark> 두세요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 롱-숏 쪼개기)**
입으로 '따-그닥'을 소리 내며, 한 박이 어떻게 **길게-짧게**로 갈라지는지 머릿속에 그려요.

아래 느린 버전으로 필을 천천히 새겨볼게요.

```json
{
  "id": "m1.w1.d1.shuffle_slow",
  "type": "tab",
  "meta": { "title": "Open A — shuffle 8ths (slow)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 60, 셔플로.** 한 마디만. 급하지 않게, 롱-숏의 '간격'을 귀로 확인해요.

**20~40분 · 실전 셔플 (개방 A / BPM 80)**
개방 A로 셔플 8분음표를 **끊김 없이** 두 마디 이상 굴려요. <mark>손이 지치기 전에 발이 먼저 흔들리는지</mark> 살펴요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초를 녹음한 뒤 체크: <mark>롱-숏이 살아있는가</mark> / <mark>박이 밀리지 않는가</mark>.

**오늘의 완료 기준:** 개방 A 한 음만으로 셔플 8분음표를 BPM 80에서 두 마디 이상 균일하게 굴릴 수 있다.

## ④ 팁 / 흔한 실수

셔플을 처음 잡을 때 가장 흔한 걸림돌만 모았어요.

```json
{
  "id": "m1.w1.d1.shuffle_ref",
  "type": "tab",
  "meta": { "title": "Open A — shuffle reference (1 bar)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플로.** 헷갈릴 때 돌아올 기준 한 마디. 이 흔들림이 정답이에요.

- **롱-숏이 거꾸로.** 짧게-길게가 되면 리듬이 넘어져요. 앞을 길게, 뒤를 짧게로 고정해요.
- **점점 균등해짐.** 빨라지면 셔플이 로큰롤로 펴져요. 발로 정박을 계속 밟아 필을 붙잡아요.
- **박이 밀림.** 롱-숏에 신경 쓰다 템포가 느려져요. 메트로놈 클릭을 박의 앞머리에 딱 맞춰요.
- **손에 힘이 과함.** 어깨와 팔이 굳으면 그루브가 안 흔들려요. 힘을 빼고 발끝부터 까딱여요.
