---
title: "통합 메들리: 장르 전환마다 모드·프레이징 무드까지 실시간 스위칭"
dayKey: "m3.w11.d4"
estMinutes: 50
i18nKey: "lesson.m3.w11.d4"
---

# Day 4 — 메들리: 백킹이 바뀌면 스케일도, 노래하는 방식도 통째로 갈아타기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 3일 동안 블루스(믹솔리디안·레이백), 펑크(도리안·타이트), 락(믹솔리디안·롱톤벤딩)을 따로 배웠잖아요. 오늘은 이걸 **한 곡 안에서 이어 붙여요.** 백킹이 블루스 → 펑크 → 락으로 흘러가는 메들리 위에서, **코드 성격이 바뀌는 순간 모드도 프레이징 무드도 실시간으로 스위칭**하는 게 이번 주의 최종 시험이에요.

핵심 판단 기준을 다시 정리할게요. 이게 오늘 여러분이 머릿속에 장착할 '스위칭 판단표'예요.

- **블루스 구간(A7 계열)** → 도미넌트/블루스니까 **믹솔리디안 + 블루노트.** 3도 C#에 착지하되 **레이백·긴 여운**으로 끈적하게.
- **펑크 구간(Am7–D9)** → 마이너·모달 뱀프니까 **도리안.** Am7엔 C(♭3), D9엔 F#(♮6=3도)에 착지하되 **팜뮤트 스타카토·칼같은 쉼표**로 타이트하게.
- **락 구간(A5–G5)** → ♭VII 파워코드니까 **믹솔리디안.** A5엔 C#, G5엔 B에 착지하되 **과감한 벤딩·롱톤·큰 비브라토**로 파워풀하게.

여기서 오늘의 통찰 하나. 세 장르의 3도 타겟이 **3번 줄 4·5·6프렛(B·C·C#)** 에 나란히 모여 있어요. 손은 거의 같은 자리에 있는데, **어떤 프렛을 고르고 어떻게 노래하느냐**로 장르가 갈리는 거예요. 즉 모드 스위칭은 손의 대이동이 아니라 **판단과 표현의 스위칭**이에요.

### 🎙️ 여백·프레이징 미니레슨 — 메들리 편: 무드 전환 자체가 표현이다

오늘의 표현 미션은 딱 하나예요. **장르가 바뀌는 그 이음매에서 프레이징 무드를 통째로 바꾸기.**

- **쉼표의 성격을 바꾸기:** 블루스의 '늘어지는 여백' → 펑크의 '칼같이 자른 여백' → 락의 '드라마틱하게 비운 여백'. 같은 `rest`라도 장르마다 숨 쉬는 방식이 달라요.
- **모티프를 장르 옷으로 갈아입히기:** "3도로 착지"라는 같은 동기를, 블루스에선 비브라토로 늘이고, 펑크에선 툭 쪼개고, 락에선 크게 벤딩해요. 하나의 아이디어를 세 가지 옷으로.
- **콜앤리스폰스로 이음매 잇기:** 앞 장르에서 던진 짧은 프레이즈를, 다음 장르 첫 소절에서 그 장르 어법으로 되받으면 전환이 매끄러워져요.
- **다이내믹으로 장르 표시:** 블루스는 중간, 펑크는 예리하게 끊고, 락은 크게 — 세기 대비만으로도 "장르가 바뀌었다"가 들리게.

정리하면 오늘은 **한 메들리 안에서 3도 착지는 유지하되, 이음매마다 모드·쉼표·다이내믹을 통째로 갈아입혀 노래하는** 날이에요.

## ② 시각 자료

첫 번째, 세 장르를 한 장에 담은 **스위칭 판단 지도**예요. **3번 줄 4·5·6프렛(B·C·C#)** 이 나란히 있는 게 보이죠? 락 G5→B(4프렛), 펑크 Am7→C(5프렛), 블루스·락 A→C#(6프렛). 손은 그대로, 판단만 바뀝니다. D9→F#(2번 7프렛)는 펑크 스위칭 타겟이에요.

```json
{
  "id": "m3.w11.d4.medley_switch_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Genre switching map (blues A7 / funk Am7-D9 / rock A5-G5) - 3rds on one string",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (blues Mixolydian / funk Dorian / rock Mixolydian)",
    "scale": "Genre switching map",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 4,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "finger": 3, "label": "A R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "D R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 6, "finger": 3, "label": "Blues/Rock A-3(C#)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 5, "finger": 2, "label": "Funk Am7-b3(C)", "highlight": true, "role": "target" },
      { "string": 3, "fret": 4, "finger": 1, "label": "Rock G5-3(B)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 7, "finger": 4, "label": "Funk D9-3(F#)", "highlight": true, "role": "target" }
    ]
  }
}
```

두 번째, 오늘의 **메들리 전환 프레이즈**예요. 마디마다 장르가 바뀌고, 그때마다 프레이징이 통째로 달라져요. **1마디 블루스**(레이백·비브라토·여백), **2마디 펑크**(16분 팜뮤트 스타카토·촘촘한 쉼표), **3마디 락**(드라마틱한 여백 → 온음 벤딩 롱톤). 같은 3도 착지가 장르마다 얼마나 다르게 들리는지 `rest`와 `technique`가 데이터로 보여줘요.

```json
{
  "id": "m3.w11.d4.medley_transition_phrase",
  "type": "tab",
  "meta": {
    "title": "Medley transition phrase (blues -> funk -> rock) with mood switching",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Mixolydian / Dorian / Mixolydian)",
    "tempoBpm": 92
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "blues breath" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "eighth", "rest": true, "label": "breath" },
        { "string": 3, "fret": 5, "duration": "eighth", "technique": "bend", "bendTarget": "half", "label": "b3>3(C>C#)", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A7-3(C#)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "palm_mute", "label": "D9 R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "quarter", "rest": true, "label": "rest" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true, "label": "rock breath" },
        { "string": 3, "fret": 4, "duration": "quarter", "dotted": true, "technique": "bend", "bendTarget": "full", "label": "B>C#(A5-3)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 6, "duration": "quarter", "rest": true, "label": "breath" },
        { "string": 3, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "A5-3(C#)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 92) — 3장르 3도 왕복**
중간 템포 92에 맞춰, 스위칭 판단 지도의 **3번 줄 4·5·6프렛(B·C·C#)** 을 왕복해요. 단, 프렛마다 어법을 바꿔서 — 6프렛은 비브라토로 늘이고(블루스), 5프렛은 팜뮤트로 툭 끊고(펑크), 4프렛은 벤딩으로 6프렛까지 밀고(락). **같은 손 자리에서 세 무드**를 오가는 게 오늘 예열이에요.

**10~20분 · 두뇌 훈련 — 스위칭 판단표 암송 매핑**
메트로놈 끄고, "블루스면 믹솔리디안·C#, 펑크면 도리안·C↔F#, 락이면 믹솔리디안·C#↔B"를 **소리 내 외우며** 해당 음을 짚어요. 장르 이름을 부르면 0.5초 안에 그 3도에 손이 가면 통과. 이게 실전 스위칭의 반사신경이에요.

**20~40분 · 실전 즉흥 (블루스→펑크→락 메들리 백킹 / 88~92 BPM) — 무드 전환 미션**
장르가 바뀌는 백킹을 두 개 이어 틀거나(블루스 잼 → 펑크 잼 → 락 잼), 메들리 트랙 하나를 틀어요. 미션 셋. ① 구간마다 모드 갈아타기. ② 그 구간 3도에 착지. ③ **이음매에서 프레이징 무드(쉼표 성격·다이내믹·주법)를 통째로 바꾸기.** 전환 첫 소절은 앞 장르 모티프를 새 장르 어법으로 되받아 매끄럽게 이어요.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 메들리 잼 40초 녹음. 다시 들으며 딱 세 가지 — ① 장르 전환 지점에서 모드가 실제로 바뀌었나. ② 각 구간 3도에 착지했나. ③ **눈 감고 들어도 "여기서 블루스→펑크→락으로 바뀌었다"가 들리나(쉼표·다이내믹 대비로).** 필요하면 재생 속도를 늦춰 전환 구간의 피킹 타이밍과 여백 배치를 확대해 점검하세요.

**오늘의 완료 기준:** 장르 전환 3회에서 모드·3도·프레이징 무드를 모두 스위칭. 녹음을 들었을 때 전환 지점이 **귀로 구분**되면 이번 주 통과예요.

## ④ 팁 / 흔한 실수

- **모드만 바꾸고 무드는 그대로.** 오늘 최대 함정이에요. 스케일을 갈아타도 **레이백·스타카토·롱톤** 같은 표현이 안 바뀌면 장르가 안 들려요. 음 선택보다 **노래하는 방식**이 장르의 정체성이에요.
- **전환 이음매에서 버벅대기.** 코드가 바뀔 걸 미리 예상하고, 마지막 음을 다음 3도로 **미리 겨냥**하세요. 판단이 늦으면 이음매에서 박자가 무너져요.
- **손을 크게 옮기려는 착각.** 세 장르 3도가 3번 줄 4·5·6프렛에 다 있어요. 손은 거의 안 움직여요. **바뀌는 건 판단과 표현**이라는 걸 기억하세요.
- **한 장르에 갇히기.** 자기 손에 익은 무드(보통 블루스)로 다 뭉개지 마세요. 펑크 구간에선 진짜 짧게, 락 구간에선 진짜 크게. 대비가 클수록 메들리가 살아나요.
