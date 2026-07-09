---
title: "6도(F) 추가 — F를 경유해 5도(E)와 3도(C)로 해결"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — 마지막 다리 'F', 반음 아래로 흘려보내기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 A와 C 사이에 B라는 다리를 놨죠. 오늘은 마지막 다리 하나를 더 놓으면 A 내추럴 마이너가 완성돼요. 바로 **<mark>F(6도)</mark>** 예요. F는 펜타토닉의 5도(E)와 ♭7(G) 사이, 정확히는 **<mark>E 바로 반음 위</mark>**에 붙는 음이에요. 그리고 이 "반음 위"라는 게 오늘의 핵심이에요.

반음 차이는 기타에서 가장 **<mark>끈끈한 자석</mark>** 같은 관계예요. F는 바로 아래 E로 당겨지고 싶어서 안달이 난 음이거든요. 그래서 F의 가장 자연스러운 해결은 **<mark>F → E (6도 → 5도)</mark>**, 반음 미끄러지듯 내려오는 거예요. 이게 얼마나 서정적으로 들리는지 오늘 직접 느낄 거예요. B가 위로(C로) 올라가는 다리였다면, F는 아래로(E로) 내려오는 다리인 셈이죠. 방향이 반대라 둘을 같이 쓰면 솔로에 오르락내리락하는 숨결이 생겨요.

물론 F도 어제의 B처럼 **<mark>경과음</mark>**이에요. Am 코드톤(A·C·E)이 아니니까 눌러앉으면 안 돼요. 해결지는 두 곳: 가장 강한 건 **F → E(5도)**, 그리고 조금 돌아가면 **F → E → D → C(♭3)** 로 흘러 결국 우리의 홈베이스 C에 도착하는 길이에요. 오늘 F의 좌표는 1폼 기준 **5번 줄 8프렛**과 **2번 줄 6프렛**, 두 자리. 각각 바로 아래 E(5번 7프렛, 2번 5프렛)로 반음 미끄러지는 그림을 눈에 새기세요.

```json
{
  "id": "m2.w5.d3.pentatonic_add_6th",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 6th (F) resolving to 5th (E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 8, "finger": 4, "label": "6", "role": "passing", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "finger": 2, "label": "6", "role": "passing", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

## ② 시각 자료

펜타토닉에 어제의 B(초록)에 더해 오늘의 **<mark>F(6도, 초록 강조)</mark>** 두 자리가 꼈어요 — 5번 줄 8프렛, 2번 줄 6프렛. 각각 바로 아래 E(5도)로 반음 흘러내리는 다리예요.

```json
{
  "id": "m2.w5.d3.pentatonic_add_6th",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 6th (F) resolving to 5th (E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 8, "finger": 4, "label": "6", "role": "passing", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "finger": 2, "label": "6", "role": "passing", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

오늘의 드릴이에요. 1마디는 **F → E(5도)** 반음 해결을 반복하고, 2마디는 <mark>**F → E → D → C(♭3)** 로 흘러 홈베이스 C에 착지</mark>해요.

```json
{
  "id": "m2.w5.d3.f_passing_resolve",
  "type": "tab",
  "meta": {
    "title": "6th(F) passing tone resolving to 5th(E) and to b3(C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 85)**
메트로놈 85에 맞춰 어제까지의 손을 먼저 풀어요 — 3도 인터벌 시퀀스 3분, A-B-C 4연음 2분. 그다음 5분은 오늘의 <mark>**F → E** 반음 해결</mark>(1마디)을 저속으로. F에서 E로 내려올 때 손가락이 "미끄러지듯" 붙게. 뭉치면 BPM 75로.

```json
{
  "id": "m2.w5.d3.f_passing_resolve",
  "type": "tab",
  "meta": {
    "title": "6th(F) passing tone resolving to 5th(E) and to b3(C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10~20분 · 두뇌 훈련 (오늘의 타겟 = F 두 자리)**
메트로놈 끄고, 1폼에서 **<mark>F(6도)만</mark>** 찾아 짚으세요. 5번 줄 8프렛, 2번 줄 6프렛 — 딱 두 군데. 짚을 때마다 "반음 아래 E로 당겨진다" 하고 소리 내며 **<mark>곧바로 아래 E로 미끄러져</mark>** 나오는 동작까지 붙여요. 눈 감고 두 F를 짚고 각각 E로 해결하면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 80~85 BPM)**
"Am backing track"을 틀고, 오늘의 미션: **<mark>F를 쓸 때마다 반드시 E나 C로 해결하기</mark>.** F에서 끝내는 건 금지. 어제의 B(위로 가는 다리)와 오늘의 F(아래로 오는 다리)를 한 프레이즈 안에 같이 써보세요 — 예를 들어 "A-B-C … F-E" 처럼 올라갔다 내려오는 숨결을 만들면 벌써 솔로처럼 들려요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 잼 30초 녹음. 다시 들으며 딱 하나 체크: **<mark>F → E 반음이 "끈적하게" 붙어 들리는지</mark>, 아니면 뚝 끊겨 들리는지.** 끊겼으면 손가락을 떼는 타이밍이 이른 거예요. E가 울리기 시작할 때까지 F를 살짝 더 붙잡았다 놓으세요. 필요하면 재생 속도를 늦춰 그 반음 순간을 귀로 확대해서 확인.

**오늘의 완료 기준:** F 두 자리를 눈 감고 짚기, F → E 반음 해결을 매끄럽게 5회 이상, 잼에서 모든 F를 E 또는 C로 해결하기.

## ④ 팁 / 흔한 실수

- **F에 눌러앉기.** B와 똑같아요. F는 Am 코드톤이 아니라서 오래 머물면 붕 떠요. F는 아래 E로 당겨지는 자석이라는 걸 기억하고, 반드시 흘려보내세요.
- **F → E를 뚝 끊어 치기.** 반음 관계의 매력은 "끈끈함"이에요. E가 나기 직전까지 F를 살짝 붙잡아 두면 그 끈적한 맛이 살아요. 너무 일찍 손가락을 떼면 그냥 두 개의 별개 음이 돼요.
- **손가락 배치.** 5번 줄에서 F(8프렛)는 4번(새끼), E(7프렛)는 3번 손가락. 2번 줄에서 F(6프렛)는 2번, E(5프렛)는 1번. 배치를 지켜야 반음 미끄러짐이 부드러워요.
- **B와 F를 헷갈려 방향 착각.** B는 위(C)로, F는 아래(E)로 해결돼요. 방향이 반대예요. 헷갈리면 "비(B)는 비상(위), 에프(F)는 폴(fall, 아래)" 정도로 외워두세요.
