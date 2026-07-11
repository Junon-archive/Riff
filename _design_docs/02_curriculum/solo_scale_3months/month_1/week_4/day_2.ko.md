---
title: "비브라토 주법(손목 vs 손가락) + 전 블록 ♭5 매핑"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 음을 '노래하게' 만드는 비브라토, 그리고 넥 전체의 ♭5

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 벤딩으로 ♭5를 '만드는' 법을 배웠잖아요? 근데 아무리 좋은 음을 짚어도, 착지음이 **밋밋하게 뚝 끊기면** 그냥 연습처럼 들려요. 프로와 아마추어를 가르는 마지막 1%가 바로 **<mark>비브라토</mark>** — 착지음을 미세하게 흔들어 '노래하게' 만드는 기술이에요. 오늘 이걸 제대로 배웁니다.

비브라토는 두 종류가 있어요.

- **손가락 비브라토(클래식/좁은 폭):** 프렛을 짚은 손가락 끝을 줄 방향(위아래)이 아니라 **<mark>줄과 나란히(넥 세로 방향)</mark>** 아주 미세하게 떨어요. 폭이 좁고 섬세해요. 클래식·재즈에서 많이 써요. 근데 일렉 블루스에선 폭이 너무 작아서 잘 안 들려요.
- **손목 비브라토(블루스/넓은 폭):** 이게 오늘의 메인이에요. 손가락으로 떠는 게 아니라, **<mark>프렛을 짚은 채 손목을 문고리 돌리듯 살짝 회전</mark>**시켜서 음정을 위로 살짝 올렸다 내렸다 반복해요. 사실상 "아주 작은 벤딩을 반복하는" 거예요. 그래서 어제 벤딩을 배운 다음에 오는 거예요. 폭이 넓고 존재감이 커서 B.B. King, 슬래시가 다 이걸 써요.

컨트롤 포인트는 **속도(빠르게/느리게)** 와 **폭(좁게/넓게)** 두 개예요. 이 둘을 상황에 맞게 조절하는 게 핵심.
- **<mark>느리고 넓게</mark>** = 애절하고 노래하는 느낌 (발라드, 긴 착지음). 이번 주 우리 기본값.
- **빠르고 좁게** = 긴장되고 강렬한 느낌 (빠른 곡, 하이 게인).
- **금지:** 속도가 들쭉날쭉 떨리는 "겁먹은 비브라토". 심장이 규칙적으로 뛰듯, 흔들림이 **일정한 주기**여야 해요. 처음엔 메트로놈에 맞춰 "올려-내려-올려-내려"를 박자로 세면서 연습하세요.

그리고 오늘의 두 번째 미션. 어제는 1번 블록 ♭5만 봤지만, ♭5는 **<mark>넥 전체 모든 블록에 다 숨어 있어요</mark>.** 어느 자리에서 즉흥을 하든 "이 근처 블루노트가 어디지?"를 즉시 찾을 수 있어야 해요. 그래서 오늘은 넥 전체 ♭5 지도를 익히고, 그 ♭5들을 어제 배운 **벤딩·슬라이드로 미끄러져 들어가** 비브라토까지 얹어 '표현'하는 걸 연습해요.

## ② 시각 자료

넥 전체 ♭5 지도예요. 근음 A(파란 뿌리) 사이사이에 **<mark>♭5=E♭(보라 강조)</mark>** 가 각 줄마다 하나씩 박혀 있어요. 어느 블록에 있든 가장 가까운 보라 점이 그 자리의 블루노트예요.

```json
{
  "id": "m1.w4.d2.b5_neck_map_all_blocks",
  "type": "scale_shape",
  "meta": {
    "title": "A blues b5 map across the whole neck (all 5 boxes)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 13,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 6, "fret": 17, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 6, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 13, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 8, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 16, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 17, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

비브라토 표현 프레이즈예요. 1마디는 **<mark>4도에서 ♭5로 슬라이드해 들어가 비브라토</mark>**로 블루노트를 노래하고, ♭3에 착지해 또 비브라토. 2마디는 **온음 벤딩 뒤 착지음에 비브라토**를 얹어요. 비브라토는 전부 "느리고 넓게".

```json
{
  "id": "m1.w4.d2.vibrato_expression_phrase",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Vibrato expression — slide into b5 + wide slow vibrato on landings",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 6, "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "quarter", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 70) — 비브라토 고립 훈련**
스케일은 잠깐 접어두고, 비브라토 하나만. 3번 줄 5프렛(♭3=C)을 약지로 짚고, 메트로놈 70에 맞춰 손목을 문고리 돌리듯 **"올려(클릭)-내려(클릭)"** 4분음표 주기로 흔들어요. 익숙해지면 8분음표로 속도 2배. 폭도 좁게→넓게 바꿔가며. 손가락이 아니라 **<mark>손목이 도는지</mark>** 계속 확인하세요.

**10~20분 · 두뇌 훈련 (넥 전체 ♭5 위치 매핑)**
위 넥 지도를 보고, 6번 줄부터 1번 줄까지 **<mark>각 줄의 ♭5(보라 점) 하나씩만</mark>** 순서대로 짚어 올라가요. 각 ♭5를 짚을 때마다 "여기가 이 구역 블루노트" 하고 위치를 각인. 그다음 눈 감고 5번 줄 6프렛, 3번 줄 8프렛(1번 블록 두 자리)을 먼저, 여유 되면 다른 줄까지. 5자리 이상 눈 감고 짚으면 통과.

```json
{
  "id": "m1.w4.d2.b5_neck_map_all_blocks",
  "type": "scale_shape",
  "meta": {
    "title": "A blues b5 map across the whole neck (all 5 boxes)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 13,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 6, "fret": 17, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 6, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 13, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 8, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 16, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 17, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**20~40분 · 실전 즉흥 (Am7 원코드 백킹 / 65~70 BPM) — 슬라이드/벤딩으로 ♭5 표현**
백킹을 틀고 규칙: **<mark>♭5는 반드시 슬라이드나 벤딩으로 '들어가서' 표현하고</mark>, 착지음엔 무조건 <mark>느리고 넓은 비브라토</mark>.** 밋밋하게 뚝 끊는 음을 오늘은 하나도 만들지 마세요. 프레이즈 끝은 ♭3(C)이나 근음(A)에 착지 → 손목 비브라토로 노래. 위 프레이즈를 골격 삼아 조금씩 변형해 보세요.

```json
{
  "id": "m1.w4.d2.vibrato_expression_phrase",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Vibrato expression — slide into b5 + wide slow vibrato on landings",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 6, "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "quarter", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

**40~50분 · 녹음/피드백 (권장)**
30초 녹음 후 재생. 체크: ① <mark>비브라토 떨림이 **일정한 주기**로 예쁜가</mark>, 겁먹은 듯 들쭉날쭉한가. ② 착지음마다 비브라토가 걸렸나, 아니면 그냥 끊겼나. ③ ♭5가 슬라이드·벤딩으로 자연스럽게 들어갔나. 필요하면 재생 속도를 늦춰 비브라토 주기를 귀로 확대해 보세요.

**오늘의 완료 기준:** 손목 비브라토를 메트로놈 70에서 일정 주기로 4분·8분 둘 다. 넥 전체 ♭5 5자리 이상 눈 감고 짚기. 백킹 위에서 "슬라이드/벤딩 → ♭5 → 착지 비브라토" 콤보 4회 이상.

## ④ 팁 / 흔한 실수

- **손가락으로 부들부들 떠는 '겁먹은 비브라토'.** 손끝만 떨면 폭도 안 나오고 주기도 불규칙해요. 반드시 **손목 회전**으로. 팔뚝~손목이 한 덩어리로 문고리를 돌린다고 상상하세요.
- **비브라토 주기가 들쭉날쭉.** 비브라토는 음정의 규칙적 파도예요. 처음엔 반드시 메트로놈에 붙여 "올려-내려"를 박으로 세면서. 주기가 일정해지면 그때 자유롭게 풀어요.
- **♭5를 그냥 '툭' 짚기.** ♭5는 넣는 방식이 중요해요. 슬라이드로 미끄러지거나 반음 벤딩으로 밀어 올려 '들어가야' 블루지해요. 맨손으로 툭 짚으면 그냥 삐끗한 음처럼 들려요.
- **넥 지도를 통째로 외우려다 지침.** 오늘은 1번 블록 두 자리(5번 줄 6프렛, 3번 줄 8프렛)만 확실히. 나머지 줄은 "아, 저기쯤 있구나" 정도로 눈에만 익혀두면 W5 이후 자연스럽게 흡수돼요.
