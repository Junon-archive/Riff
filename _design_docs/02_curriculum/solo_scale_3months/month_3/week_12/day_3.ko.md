---
title: "전체 솔로 완성과 첫 레코딩 — 8마디를 하나로 잇기"
dayKey: "m3.w12.d3"
estMinutes: 50
i18nKey: "lesson.m3.w12.d3"
---

# Day 3 — 조각을 한 곡으로: 8마디 오리지널 솔로 완성 & 첫 녹음

## ① 이론/설명

오늘 왜 이걸 하냐면요. 이제 재료가 다 모였어요. 착지 지도(Day1), 모티프와 여백(Day2). 오늘은 이걸 이어 붙여서 **<mark>처음부터 끝까지 흐르는 8마디 솔로 한 곡</mark>**을 완성합니다. 그리고 처음으로 **<mark>온전히 녹음</mark>**해요.

곡을 이을 때 기억할 원칙 딱 세 가지예요.

1. **<mark>활(arc)을 그려라.</mark>** 8마디를 밋밋하게 쭉 가면 안 돼요. 시작은 조용히(모티프+큰 여백), 5마디 A7 스위치에서 **정점(클라이맥스)**, 그리고 마지막엔 루트로 착지하며 내려와요. 산을 하나 그린다고 생각하세요.
2. **<mark>5마디가 반전 지점.</mark>** 1~4마디는 도리안(C, F#). 5마디 A7에서 C#로 스위치하고, 여기에 블루노트 벤딩(C→C#)까지 얹어 곡을 확 밀어 올려요. 이 한 마디가 여러분 솔로의 '후렴'이에요.
3. **<mark>마지막은 반드시 착지.</mark>** 8마디 끝은 루트 A를 길게, 비브라토로 노래하며 끝내요. 착지 없이 끝나면 "어? 끝난 거야?" 소리 나요. 마침표를 확실히.

아래 타브가 **완성본**이에요. 이걸 그대로 외워도 좋고, 여러분 Day2 변형으로 갈아 끼워도 좋아요. 중요한 건 구조예요: **<mark>모티프 → 도리안 응답 → 발전 → A7 클라이맥스(벤딩) → 해소 → 루트 착지.</mark>** 이게 3개월의 결정체예요.

## ② 시각 자료

첫 번째, **<mark>완성된 8마디 오리지널 솔로</mark>**예요. 각 마디 끝에 그 코드의 3도가 착지하고, 5마디에 블루노트 벤딩 클라이맥스, 8마디에 루트 비브라토 마무리가 박혀 있어요. 여백(`rest`)이 곳곳에 숨 쉬는 것도 보세요.

```json
{
  "id": "m3.w12.d3.original_solo_full",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Original solo - full 8 bars (Am7 D7 Am7 D7 | A7 D7 Am7 Am7)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "composition",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 7, "duration": "eighth", "technique": "none", "label": "2", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 4, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "none", "label": "b3", "role": "passing" }
      ]},
      { "measure": 5, "notes": [
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 1, "fret": 9, "duration": "quarter", "technique": "none", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]},
      { "measure": 6, "notes": [
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

두 번째, **<mark>착지 기둥 로드맵</mark>**이에요. 8마디를 관통하는 네 개의 착지 기둥만 뽑았어요. C(도리안 ♭3) → F#(장6도 색) → C#(믹솔리디안 장3도, 클라이맥스) → A(루트, 마무리). 솔로가 이 네 기둥 사이를 오간다고 생각하면 길을 안 잃어요.

```json
{
  "id": "m3.w12.d3.solo_landing_roadmap",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Solo landing pillars roadmap (b3 -> 6 -> 3 -> R)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "scale": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "blue_note", "highlight": true },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 92) — 4연음 시퀀스 + 벤딩 예열**
메트로놈 92로 4연음 시퀀스 한 바퀴 돌리고, 5마디의 벤딩(1번 줄 8프렛 C를 반음 밀어 C# 음정까지)을 5회 예열해요. 벤딩은 <mark>음정이 정확히 C#까지 올라오는지</mark> 귀로 확인하며. 클라이맥스가 흔들리면 곡 전체가 흔들려요.

**10~20분 · 두뇌 훈련 (마디별 조립)**
완성 타브를 **<mark>두 마디씩</mark>** 끊어 익혀요. 1-2마디 → 3-4마디 → 5-6마디 → 7-8마디. 각 덩어리를 매끄럽게 만든 뒤 이어 붙여요. 특히 4마디 끝 C에서 5마디 C#로 넘어가는 이음새(한 프렛 스위치)를 5번 반복해 손에 새기세요.

```json
{
  "id": "m3.w12.d3.original_solo_full",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Original solo - full 8 bars (Am7 D7 Am7 D7 | A7 D7 Am7 Am7)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "composition",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "half", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 7, "duration": "eighth", "technique": "none", "label": "2", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 4, "notes": [
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "none", "label": "b3", "role": "passing" }
      ]},
      { "measure": 5, "notes": [
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 2, "fret": 8, "duration": "eighth", "technique": "none", "label": "b7", "role": "color", "highlight": true },
        { "string": 1, "fret": 8, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3", "role": "blue_note", "highlight": true },
        { "string": 1, "fret": 9, "duration": "quarter", "technique": "none", "label": "3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "eighth", "rest": true }
      ]},
      { "measure": 6, "notes": [
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "none", "label": "5", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" }
      ]},
      { "measure": 7, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "technique": "none", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 1, "fret": 5, "duration": "quarter", "technique": "none", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true }
      ]},
      { "measure": 8, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "none", "label": "b3", "role": "target", "highlight": true },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "none", "label": "4", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 5, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

**20~40분 · 실전 완성 (Am7-D7-A7 백킹 / 88~92 BPM)**
백킹 위에서 8마디를 **<mark>끊김 없이</mark>** 한 바퀴 도는 걸 목표로. 처음엔 88로, 매끄러워지면 92로. 활(arc)을 의식하세요: 앞은 조용히·여백 많이, 5마디에서 확 밀고, 8마디에서 루트로 착지하며 숨을 내려놓기. 최소 5바퀴는 돌려 몸에 흐름을 새겨요.

**40~50분 · 첫 레코딩 (권장 → 오늘은 강력 권장)**
가진 아무 녹음 도구(폰 음성 메모, 노트북 녹음기, 뭐든)로 완성 솔로를 백킹 위에서 **<mark>한 테이크 통으로</mark>** 녹음해요. 오늘은 완벽 말고 <mark>'완주'가 목표</mark>. 이 첫 녹음이 내일 셀프 피드백의 원본이 돼요. 다시 들으며 첫인상만 메모: "어디가 제일 마음에 들고, 어디서 흔들렸나."

**오늘의 완료 기준:** 8마디 솔로를 백킹 위에서 끊김 없이 1바퀴 완주하고, 그 테이크를 통으로 1개 녹음 완료.

### 셀프 피드백 체크리스트 (오늘의 초점: 완주와 흐름)
- [ ] **3도 착지 정확도** — 네 착지 기둥(C·F#·C#·A)에 각 마디 제 박에 도착했다.
- [ ] **색채음 활용** — F#(장6도)·G(♭7)·블루노트 C가 곡의 색으로 들렸다.
- [ ] **비브라토 안정성** — 2·6·8마디의 긴 착지음 비브라토가 일정했다.
- [ ] **리듬 타이밍** — 벤딩 클라이맥스(5마디)와 마지막 착지(8마디)가 박에서 밀리지 않았다.

## ④ 팁 / 흔한 실수

- **활 없이 평평하게 완주.** 그냥 8마디 다 치는 게 목표가 아니에요. 다이내믹의 산을 그리세요. 앞을 일부러 여리게 쳐야 5마디 클라이맥스가 살아요.
- **벤딩 음정이 안 맞음.** 5마디 벤딩이 C#까지 안 올라오면 클라이맥스가 어정쩡해져요. 미리 목표 음(1번 9프렛 C#)을 짚어 귀에 넣고, 그 음정까지 정확히 밀어 올리세요.
- **마지막을 흐지부지.** 8마디 루트 A는 비브라토로 당당하게 노래하며 끝내요. 끝음이 살아야 "이 사람 곡 하나 완성했네" 소리가 나요.
- **첫 테이크에 완벽 기대.** 오늘 녹음은 완주 기록이에요. 삐끗해도 끝까지 가서 남기세요. 못난 완주본 하나가 내일 수술대에 올릴 소중한 재료예요.
