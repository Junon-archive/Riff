---
title: "A 내추럴 마이너 통합 잼 — B·F를 색으로, C로 착지"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — 다 합치기: 펜타 5음 + 2음, 하나의 스케일로

## ① 이론/설명

오늘 왜 이걸 하냐면요. 이번 주 내내 우리가 한 일을 한 줄로 요약하면 이거예요 — **펜타토닉(5음)에 B(2도)와 F(6도)라는 다리 2개를 놓아 A 내추럴 마이너(A·B·C·D·E·F·G) 7음을 완성했다.** 오늘은 그 7음을 따로따로가 아니라 **하나의 노래하는 스케일**로 합쳐서, Am 백킹 위에서 진짜 솔로처럼 굴려보는 날이에요.

핵심은 여전히 **역할 분담**이에요. 골격은 펜타토닉 5음(A·C·D·E·G)이고, B와 F는 그 골격 사이를 잇는 **색채용 경과음**이에요. B는 위로(A→B→C), F는 아래로(F→E) 흐르면서 골격을 매끄럽게 연결해요. 그리고 이 모든 흐름은 결국 한 곳으로 모여요 — **C(♭3), Am의 3도 착지점.** 3개월 내내 말해온 그 홈베이스요. 오늘 여러분이 확인할 건 딱 하나예요. "추가한 2음이 스케일을 복잡하게 만든 게 아니라, 오히려 착지를 더 부드럽고 노래처럼 만들어줬다"는 감각.

그래서 오늘은 드릴이 아니라 **음악**을 만들 거예요. 상하행 나열은 여전히 금지. 대신 3도 인터벌과 4연음, 그리고 B·F 경과음을 자유롭게 섞되, **프레이즈의 끝은 반드시 C에 착지하고 비브라토로 마무리**하세요. 착지음을 비브라토로 흔들어 주면, 스케일 연습이 그 순간 "노래"로 바뀌어요. 이게 다음 주 나란한조(Am↔C)로 넘어가기 전, 이번 달의 첫 관문이에요.

## ② 시각 자료

이번 주의 결과물, **A 내추럴 마이너 1폼 전체**예요. 펜타토닉 골격(흰색) + 경과음 B·F(노랑) + 착지 C(빨강). 7음이 한 폼 안에 다 모였어요.

```json
{
  "id": "m2.w5.d4.a_natural_minor_box1_full",
  "type": "scale_shape",
  "meta": {
    "title": "A natural minor — Box 1 (pentatonic + added 2nd B & 6th F)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor",
    "tempoBpm": 90
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

오늘의 통합 릭이에요. 1마디에서 **A-B-C**(위로 가는 다리)와 **F-E**(아래로 오는 다리)를 둘 다 쓰고, 2마디에서 F를 한 번 더 흘려보낸 뒤 **C(♭3)에 비브라토로 착지**해요.

```json
{
  "id": "m2.w5.d4.natural_minor_jam_lick",
  "type": "tab",
  "meta": {
    "title": "A natural minor jam lick — B & F as color, resolving to b3 (C) with vibrato",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 90
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 90)**
메트로놈 90에 맞춰 **A 내추럴 마이너 1폼 전체**를 3도 인터벌로 한 바퀴. 단, B와 F를 지날 때 눌러앉지 말고 흘려요 — B는 위 C로, F는 아래 E로. 이번 주 배운 두 방향을 몸으로 확인하는 예열이에요. 뭉치면 BPM 80으로.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 착지 C + 두 다리 B·F 위치)**
메트로놈 끄고, 위 통합 릭을 손에 익혀요. 특히 마지막 **C(3번 줄 5프렛) 비브라토 착지**를 반복. 비브라토는 손목을 좌우로 살짝 흔들어 음을 "떨게" 하는 거예요. 크게 흔들 필요 없어요, 일정하게. 그리고 B(6/7, 1/7)와 F(5/8, 2/6) 네 자리를 눈 감고 짚어보며 각각의 해결 방향(B↑C, F↓E)을 한 번 더 확인.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 85~90 BPM)**
"Am backing track"을 틀고, 오늘은 **완성된 7음 전부**를 자유롭게 쓰세요. 규칙은 둘: ① B·F는 경과음으로만(눌러앉기 금지), ② **모든 프레이즈의 끝은 C에 비브라토로 착지.** 이번 주 배운 조각들(3도 짝, A-B-C, F-E)을 레고처럼 이어 붙여 4마디짜리 짧은 솔로를 즉흥으로 만들어 보세요. 같은 걸 반복해도 좋아요 — 오늘은 "완성된 스케일이 내 손에서 노래가 되는" 첫 경험이 목표예요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 4마디 솔로를 녹음. 다시 들으며 두 가지 체크: ① **B나 F가 붕 뜬 채 끝난 데는 없는지**, ② **마지막 C 비브라토가 일정하게 떨리는지(들쭉날쭉하지 않은지).** 비브라토가 흔들리면 손목이 아니라 손가락 힘으로 눌러 떨고 있는 거예요. 필요하면 재생 속도를 늦춰 착지 순간을 귀로 확대해서 확인하세요.

**오늘의 완료 기준:** 통합 릭을 BPM 90에서 C 비브라토 착지까지 완주, 잼에서 4마디 솔로를 즉흥으로 만들되 모든 프레이즈를 C로 착지, B·F를 한 번도 붕 뜬 채 끝내지 않기.

## ④ 팁 / 흔한 실수

- **7음이 되니 다시 상하행으로 회귀.** 음이 많아지면 "다 훑고 싶은" 유혹이 커져요. 하지만 나열은 이번 주 내내 금지였죠. B·F는 골격을 잇는 다리일 뿐, 골격은 여전히 펜타토닉 5음이라는 걸 기억하세요.
- **착지 없이 흐지부지 끝내기.** 즉흥이 무서워서 아무 음에서나 멈추면 솔로가 "말끝을 흐리는" 느낌이 나요. 끝은 무조건 C. 착지가 분명해야 짧아도 완결된 프레이즈로 들려요.
- **비브라토를 손가락 힘으로.** 비브라토는 손목의 회전이에요. 손가락으로 꾹꾹 누르면 음정이 흔들리고 금방 지쳐요. 넥 뒤 엄지를 살짝 걸치고 손목을 문고리 돌리듯 일정하게.
- **B와 F를 동시에 남발.** 두 경과음을 한꺼번에 너무 많이 쓰면 골격이 흐려져서 "무슨 조인지" 모호해져요. 다리는 필요할 때만. 골격(펜타)이 7할, 색채(B·F)가 3할 정도의 비율이 딱 좋아요.
