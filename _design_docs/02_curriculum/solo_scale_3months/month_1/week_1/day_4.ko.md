---
title: "Am 원코드 백킹 위에서 근음/♭3 타겟 착지"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 이번 주의 결승선: '착지'하는 솔로

## ① 이론/설명

오늘 왜 이걸 하냐면요. 지난 3일간 시퀀스로 손을 훈련한 진짜 이유가 오늘 드러나요. 시퀀스는 목적이 아니라 **활주로**였어요. 활주로를 아무리 빨리 달려도 착륙을 못 하면 그건 비행이 아니잖아요. 오늘은 드디어 **착륙(착지)**을 배워요. 이게 이 커리큘럼 3개월 전체의 심장이에요.

핵심 개념 하나만 확실히. 백킹에서 Am 코드가 울릴 때, 그 코드를 이루는 음은 **A(근음) · C(♭3) · E(5)** 세 개예요. 이 세 음을 우리는 "코드톤"이라고 불러요. 솔로가 촌스럽게 들리느냐 프로처럼 들리느냐는 딱 하나로 갈려요. **프레이즈를 끝낼 때 코드톤에 착지하느냐, 아무 데서나 멈추느냐.** 스케일 음을 쏟아내다가 마지막을 스르륵 흘리면 아마추어, 마지막을 C나 A에 탁 걸고 비브라토로 노래하면 프로예요. 진짜 이 차이 하나예요.

```json
{
  "id": "m1.w1.d4.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) inside Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

그중에서도 **C(♭3)에 착지하는 게 최고의 무기**예요. 근음 A에 착지하면 안정적이지만 좀 뻔하고, ♭3인 C에 착지하면 "아, 이게 마이너구나" 하는 애절한 색이 확 살아나요. 지난 3일 내내 C에 초록불을 켜둔 이유가 바로 오늘이었어요. 이제 그 C를, 흐르는 솔로 속에서 정확히 낚아채서 착지시킬 거예요.

## ② 시각 자료

Am 코드톤 지도예요. 스케일 5음 중에서 **코드톤 3개(R·♭3·5)만** 뽑아 표시했어요. 이 세 자리가 너의 "착륙장"이에요. 특히 초록 C(♭3)를 노리세요.

```json
{
  "id": "m1.w1.d4.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) inside Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

착지 리크 예시예요. 1마디는 근음 A에, 2마디는 ♭3인 C에 착지해요. 마지막 착지음엔 비브라토를 걸고, 2마디엔 슬라이드로 타겟에 미끄러져 들어가요.

```json
{
  "id": "m1.w1.d4.target_landing_lick",
  "type": "tab",
  "meta": {
    "title": "Target-landing lick over Am (resolve on R and b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 75)**
이번 주 시퀀스(4연음·3도)를 상행/하행으로 각 1회씩만 빠르게 풀어요. 손이 다 기억하고 있을 거예요. 오늘은 워밍업이 짧아도 돼요. 진짜 연습은 뒤에 있어요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C·A, 착지 조준)**
메트로놈 없이, 위 착지 리크를 천천히 손에 익혀요. 특히 2마디 마지막 — 3번 줄 7프렛(D)에서 5프렛(C)으로 슬라이드해 들어가 비브라토로 노래하는 그 동작. 이 "슬라이드 → 착지 → 비브라토" 3단 콤보가 오늘의 보석이에요. 20번 반복해서 몸에 새기세요.

```json
{
  "id": "m1.w1.d4.target_landing_lick",
  "type": "tab",
  "meta": {
    "title": "Target-landing lick over Am (resolve on R and b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 70~80 BPM)**
오늘의 메인. 백킹을 틀고 규칙: **4마디마다 반드시 코드톤(C 또는 A)에 착지해서 비브라토로 마무리.** 중간은 시퀀스든 자유든 마음대로, 하지만 끝은 무조건 착지. 처음엔 근음 A로 착지가 편할 거예요. 익숙해지면 절반 이상을 C(♭3)로 착지해 보세요 — 소리가 확 애절해지는 순간을 느끼면 성공이에요. "묻고 답하기(콜앤리스폰스)"처럼, 한 프레이즈는 열어두고 다음 프레이즈에서 C로 닫아보세요.

**40~50분 · 녹음/피드백 (권장)**
오늘은 꼭 녹음하시길. 이번 주의 결과물이니까요. 다시 들으며 체크: ① 프레이즈 끝이 코드톤에 걸렸나, 아니면 흘렀나. ② 착지음 비브라토가 떨림이 고르게 예쁜가, 손 떨듯 어색한가. ③ 백킹 코드감과 내 착지음이 "맞아떨어지는" 순간이 있었나. 그 순간이 있었다면, 축하해요. 즉흥의 문을 처음 연 거예요.

**오늘의 완료 기준(= 1주차 졸업 기준):** Am 백킹 위에서 프레이즈를 C(♭3) 또는 A(근음)에 의도적으로 착지시키기 4회 이상 성공. 착지음에 비브라토를 걸어 마무리.

## ④ 팁 / 흔한 실수

- **착지음을 급하게 뗌.** 오늘 최대 실수예요. 착지했으면 최소 1박은 머물며 비브라토로 노래하세요. 착지의 힘은 "머무름"에서 나와요. 스치고 지나가면 착지가 아니라 통과예요.
- **비브라토를 손목 아닌 손가락 떨림으로.** 비브라토는 손가락을 떠는 게 아니라, 프렛을 짚은 채 손목을 아주 살짝 회전시켜 음정을 미세하게 흔드는 거예요. 문고리 돌리듯. 이번 주엔 "느리고 넓은" 비브라토 하나만 확실히.
- **슬라이드 도착 음정이 흐림.** 3번 줄 7→5 슬라이드는 목표 프렛(5)에서 정확히 멈춰야 C가 살아요. 지나치거나 못 미치면 착지가 애매해져요. 도착 지점을 눈이 아니라 귀로 확인.
- **매번 근음 A로만 착지.** 편해서 자꾸 A로 도망가는데, C(♭3)에 착지해봐야 마이너의 색을 배워요. 오늘 목표는 "무서운 C에 일부러 착지하기"예요. 어색함을 이겨내면 그게 실력이에요.
