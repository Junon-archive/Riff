---
title: "녹음 집중 분석 — 착지 타이밍·비브라토 정밀 점검"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
---

# Day 4 — 귀로 수술하기: 녹음해서 착지 타이밍과 비브라토를 뜯어보기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 3일 동안 F·B·E 착지를 손에 새겼잖아요. 근데 여기서 대부분이 정체해요. 이유는 **<mark>자기 연주를 객관적으로 못 들어서</mark>**예요. 연주하는 동안 우리 뇌는 손 움직이랴 다음 코드 생각하랴 바빠서, 정작 "지금 내 소리가 어떤가"는 거의 못 들어요. 머릿속에선 완벽했는데 녹음을 들으면 "어… 이게 나야?" 하죠. 그 간극을 메우는 게 오늘이에요.

오늘은 새 기술을 배우는 날이 아니에요. **이번 주의 결과물을 녹음해서, <mark>귀로 수술하는 날</mark>**이에요. 점검 포인트는 딱 세 가지로 좁힐게요.

- **<mark>① 착지 타이밍:</mark>** 코드가 바뀌는 순간과 내 3도(F·B·E)가 정확히 겹치나? 반 박 늦지 않았나? — 이게 이번 주 핵심 지표예요.
- **<mark>② B→E 해결:</mark>** G7의 B에서 Cmaj7의 E로 넘어갈 때, 긴장이 풀리는 그 느낌이 실제로 들리나? 아니면 그냥 두 음이 툭툭 따로 노나?
- **<mark>③ 착지음 비브라토:</mark>** 마지막 E(Cmaj7 3도)를 밋밋하게 뚝 끊었나, 아니면 살짝 흔들어 '노래하게' 했나? 착지음이 노래하면 솔로 전체가 살아요.

여기서 **<mark>재생 속도 조절</mark>**이라는 무기를 써요. 대부분 녹음 앱·플레이어에 속도를 0.5배, 0.75배로 늦추는 기능이 있어요(특정 앱 얘기 아니에요, 아무거나 되는 걸로). 속도를 늦추면 실시간에선 안 들리던 "반 박 늦음"이나 "비브라토 주기가 들쭉날쭉"이 확대돼서 귀에 딱 잡혀요. 현미경으로 들여다보는 거죠.

## ② 시각 자료

오늘 녹음할 **<mark>목표 프레이즈</mark>**예요. 이번 주 배운 걸 다 담은 '완성형' 가이드톤 라인이에요. 각 코드 첫 박에 3도 착지, 2마디 끝 F가 3마디 E로 반음 해결, 마지막 E엔 비브라토. 이걸 백킹 위에서 녹음하고, 아래 세 지표로 자기 연주를 채점해 보세요.

```json
{
  "id": "m2.w8.d4.record_target_phrase",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Week 8 target phrase to record (full ii-V-I guide tone line)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "quarter", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "D", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "G", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "D", "role": "chord_tone" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 0, "duration": "quarter", "label": "G", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 76) — 목표 프레이즈 손에 얹기**
메트로놈 76에 맞춰 위 목표 프레이즈를 천천히 3~4번. 아직 녹음 아니에요. 착지음 F·B·E가 <mark>각 마디 첫 박에 오는지</mark>, 마지막 E에 비브라토가 걸리는지 손으로 미리 확인만. 막히는 마디가 있으면 그 마디만 5번 반복해 매끄럽게.

**10~20분 · 두뇌 훈련 (자기 채점 기준 세팅)**
녹음 전에 채점표를 머리에 새겨요. 종이에 세 줄만 적어도 좋아요: **① 착지가 코드 체인지와 겹쳤나 / ② B→E 해결이 들리나 / ③ 마지막 E가 노래하나.** 이 세 개 말고는 오늘 아무것도 평가하지 않기로 해요. <mark>잣대가 좁아야 정확히 고쳐요</mark>.

**20~40분 · 실전 녹음 (Dm7-G7-Cmaj7 백킹 / 72~76 BPM)**
백킹을 틀고 목표 프레이즈를 **<mark>한 테이크에 3~4바퀴</mark>** 녹음. 완벽하게 하려 하지 말고, 지금 실력 그대로 남겨요. 한 번 녹음했으면 바로 재생 → 세 지표로 채점 → 가장 약한 지표 하나만 골라 다시 녹음. 이걸 3~4회 반복. 매번 "이번엔 착지 타이밍만" 식으로 **<mark>한 지표씩</mark>** 집중해 고쳐요.

**40~50분 · 정밀 분석 (재생 속도 조절)**
가장 잘 나온 테이크를 **<mark>0.75배, 0.5배로 늦춰</mark>** 다시 들어요. 실시간엔 안 보이던 게 보여요: 착지가 미세하게 늦는 코드는 어디인지, 비브라토 주기가 고른지. 발견한 문제를 딱 하나만 메모해 두면, 그게 다음 주(Month 3, 모드) 넘어가기 전 여러분의 개인 숙제예요.

**오늘의 완료 기준:** 목표 프레이즈를 백킹 위에서 녹음. 세 지표(착지 타이밍·B→E 해결·E 비브라토)로 자기 테이크를 채점하고, 속도를 늦춰 최소 한 가지 개선점을 스스로 찾아냄.

## ④ 팁 / 흔한 실수

- **녹음을 '평가'가 아니라 '자책'으로 듣기.** 녹음을 틀고 "아 못한다" 하고 꺼버리면 아무 소용 없어요. 녹음은 재판이 아니라 지도예요. "여기 착지가 늦네 → 그럼 여기만 고치자"로 이어져야 의미가 있어요.
- **한 번에 다 고치려다 아무것도 못 고침.** 테이크마다 지표 하나씩. "이번엔 타이밍만." 세 개를 동시에 보면 뇌가 과부하 걸려서 다 놓쳐요.
- **속도 조절을 안 쓰기.** 실시간으로만 들으면 반 박 오차는 절대 못 잡아요. 늦춰 들으면 현미경이 생겨요. 이 무기를 꼭 쓰세요.
- **비브라토를 마지막에 '장식'으로 대충.** 착지음 E의 비브라토는 이번 주의 마침표예요. 겁먹은 듯 떨지 말고, 손목으로 일정한 주기로 넓게. 이 한 음이 노래하면 앞의 모든 착지가 살아나요.
- **완벽한 테이크에 집착.** 오늘 목표는 완벽한 녹음이 아니라 **정확한 자가 진단**이에요. 못난 테이크에서 문제 하나 찾아내는 게, 우연히 잘 된 테이크보다 열 배 값져요.
