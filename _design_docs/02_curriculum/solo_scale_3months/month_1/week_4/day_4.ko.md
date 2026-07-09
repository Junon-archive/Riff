---
title: "원코드 잼 녹음 → 자가 피드백 → 1개월 총정리"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 1개월의 결승선: 녹음하고, 듣고, 나를 코칭하기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 오늘은 새 기술을 배우는 날이 아니에요. 지난 4주간 쌓은 걸 **하나의 연주로 꺼내고, 그걸 녹음해서, 스스로 코치가 되어 피드백하는** 날이에요. 사실 실력은 연습할 때가 아니라 **<mark>한 발 물러서서 자기 연주를 차분히 들을 때</mark>** 가장 크게 늘어요. 프로들이 괜히 녹음에 집착하는 게 아니에요.

지난 한 달을 돌아볼게요. 1주차엔 펜타 1번 블록을 시퀀스로 씹어 먹고 <mark>코드톤(♭3)에 착지하는 법</mark>을, 2·3주차엔 나머지 블록과 넥 전체 연결을, 그리고 이번 4주차엔 ♭5 블루노트 + 벤딩 + 비브라토 + 프레이징을 배웠어요. 오늘은 이 **전부**를 원코드 잼 하나에 녹여요.

오늘 잼의 설계 원칙은 **<mark>콜 앤 리스폰스(묻고 답하기)</mark>** 예요. 한 프레이즈로 질문을 던지고(열어두고), 다음 프레이즈로 대답해요(닫아요). 질문은 애매하게 열어둬도 돼요 — 오히려 살짝 불안하게 ♭5나 4도에서 끊으면 "다음 뭐?" 하는 긴장이 생겨요. 대답은 반드시 **<mark>♭3이나 근음에 착지 + 비브라토</mark>**로 확실히 닫아요. 이 대화 구조가 있으면 원코드 위 즉흥도 지루하지 않아요. 그리고 오늘의 진짜 목적은 화려한 연주가 아니라 **<mark>녹음 → 자가 피드백 루프를 몸에 붙이는 것</mark>.** 이건 3개월 내내, 아니 평생 쓸 습관이에요.

자, 오늘 하루로 1개월을 졸업합니다. 부담 갖지 말고, 지난 4주가 손에 얼마나 들어왔는지 확인하는 마음으로 가볍게.

## ② 시각 자료

오늘 잼의 '치트시트'예요. A 블루스 1번 블록 전체 — <mark>착지점(♭3 초록)과 경과음(♭5 보라)</mark>을 한눈에. 잼 도중 헷갈리면 이 판만 보세요.

```json
{
  "id": "m1.w4.d4.a_blues_box1_cheatsheet",
  "type": "scale_shape",
  "meta": {
    "title": "A blues scale Box 1 — jam cheat sheet (targets & blue notes)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

한 달 총정리 캡스톤 리크예요. <mark>4마디 콜 앤 리스폰스</mark> — **1마디 질문**(♭5 경과음으로 하행하다 근음에서 열어두기), **2마디 여백 뒤 짧은 모티프**(♭5 비브라토), **3마디 대답 전개**(온음 벤딩 느낌표), **4마디 착지**(슬라이드 → ♭3 넓은 비브라토 마침표). 이번 달 배운 게 다 들어있어요.

```json
{
  "id": "m1.w4.d4.capstone_call_response_lick",
  "type": "tab",
  "meta": {
    "title": "1-month capstone — call & response over Am7 (all skills combined)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 1, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5(ref E)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "half", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 4, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "4>b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 80)**
가볍게 몸풀기. A 블루스 1번 블록을 3도 상·하행 1회, 어제 3마디 프레이즈 1회. 그다음 위 캡스톤 리크를 천천히 한 번 통과. 오늘은 워밍업이 짧아도 돼요, 메인은 녹음이니까요.

**10~20분 · 두뇌 훈련 (캡스톤 리크 + 콜/리스폰스 감 잡기)**
캡스톤 리크를 손에 익히되, 구조를 의식하며. "1마디는 질문(열림), 3·4마디는 대답(닫힘)" 이 대화 구조를 입으로 "질문~ 대답!" 하고 세면서 쳐요. 특히 2마디 앞의 **<mark>쉼표(여백)</mark>** 를 진짜로 비우세요 — 초보는 이 침묵을 못 견디고 음을 채워 넣는데, 그 <mark>여백이 다음 프레이즈를 살려요</mark>.

```json
{
  "id": "m1.w4.d4.capstone_call_response_lick",
  "type": "tab",
  "meta": {
    "title": "1-month capstone — call & response over Am7 (all skills combined)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 1, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5(ref E)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "half", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 4, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "4>b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

**20~40분 · 실전 즉흥 & 전체 녹음 (Am7 원코드 백킹 / 75~80 BPM)**
오늘의 메인. 백킹을 틀고 **<mark>처음부터 끝까지 2~3분을 통째로 녹음</mark>**하세요(폰 음성 메모도 OK). 규칙: **<mark>콜 앤 리스폰스로 대화하듯</mark>.** 질문 프레이즈는 ♭5나 4도에서 열어두고, 대답은 반드시 ♭3·근음 착지 + 비브라토로 닫기. 캡스톤 리크를 씨앗 삼되 그대로 반복하지 말고 조금씩 변형. <mark>실수해도 멈추지 말고 계속</mark> — 실전은 원래 안 멈춰요.

**40~50분 · 자가 피드백 (오늘은 필수)**
녹음을 처음부터 끝까지 들으며 아래 체크리스트로 스스로 코칭하세요. 필요하면 재생 속도를 늦춰 벤딩·비브라토 순간을 확대해서 확인.

**[자가 피드백 체크리스트]**
1. 프레이즈 끝이 **코드톤(♭3/근음)에 착지**했나, 아무 데서나 흘렀나?
2. **♭5가 경과음**으로 스쳐 지나갔나, 눌러앉아 어색했나?
3. **벤딩이 목표 음정에 정확히** 닿았나(온음=5도, 반음=♭5)?
4. **비브라토가 일정한 주기**로 예쁘게 노래했나, 겁먹은 듯 떨렸나?
5. **여백(쉼표)** 이 있었나, 쉬지 않고 음을 쏟아냈나?
6. 전체가 **대화(콜/리스폰스)** 처럼 들렸나, 그냥 스케일 나열이었나?

**[1개월 총정리 — 이번 달 졸업 체크]**
- ☐ A 마이너 펜타 1번 블록을 4연음·3도 시퀀스로 자유롭게
- ☐ 프레이즈를 ♭3(코드톤)에 의도적으로 착지
- ☐ ♭5 블루노트를 경과음으로 녹여 블루스 색 내기
- ☐ 정확한 음정 벤딩(반음/온음, 레퍼런스 대조)
- ☐ 일정 주기의 손목 비브라토로 착지음 노래하기
- ☐ 녹음 → 자가 피드백 루프 실행

**오늘의 완료 기준(= 1개월 졸업 기준):** Am7 백킹 위 2분 이상 잼을 통째로 녹음하고, 체크리스트 6항목으로 자가 피드백 완료. 6개 중 4개 이상 "OK"면 통과 — 못 채운 항목은 다음 달 W5로 넘어가며 자연스럽게 보강돼요.

## ④ 팁 / 흔한 실수

- **녹음을 안 듣고 넘기기.** 오늘 최대 실수예요. 녹음은 듣기 위해 하는 거예요. 내 연주를 처음 들으면 오글거리는 게 정상이고, 그 오글거림을 견디는 게 실력 상승의 통행세예요. 꼭 끝까지 들으세요.
- **여백 공포증.** 침묵이 무서워서 음을 쉴 새 없이 채우면 대답이 안 살아요. 질문 뒤엔 반 마디라도 쉬세요. 그 침묵이 다음 프레이즈에 무게를 실어줘요(이건 M3 W11에서 본격적으로 다뤄요).
- **실수에서 멈춤.** 잼 중 틀렸다고 멈추면 그게 더 큰 실수예요. 실전은 안 멈춰요. 틀린 음이 나와도 반음 위나 코드톤으로 미끄러져 수습하면 오히려 의도한 것처럼 들려요. 그게 즉흥의 진짜 실력이에요.
- **완벽주의로 오늘을 넘기기.** 1개월 차에 화려한 솔로가 안 나오는 게 당연해요. 오늘 목표는 "잘 치기"가 아니라 "녹음하고 스스로 피드백하는 습관"을 붙이는 거예요. 체크리스트 4개면 충분히 졸업이에요. 남은 건 M2에서 이어가요.
