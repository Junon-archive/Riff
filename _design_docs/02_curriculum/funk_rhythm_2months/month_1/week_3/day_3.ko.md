---
title: "약한 고스트 사이로 튀어나오는 한 방"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 죽은 소리·보통 소리·강한 소리, 세 층의 대비

## ① 이론/설명

이제 2주차의 고스트와 3주차의 악센트를 하나로 합쳐요. 진짜 펑크의 질감은 여기서 나와요 — 약하게 깔리는 고스트('치치치') 사이로, 악센트('팍') 한두 방이 불쑥 튀어나오는 대비.

오늘부터는 소리가 **세 층**이에요. 첫째, 힘 뺀 고스트('치') — 음정 없는 죽은 소리, 배경. 둘째, 보통 실제음('따') — 또렷이 울리는 중간 소리. 셋째, 강한 악센트('팍') — 확 튀는 주인공. 놀라운 건, 이 세 층을 전부 **같은 손 위치에서** 만든다는 거예요. 왼손 압력과 오른손 힘을 조절해 죽였다(치)·울렸다(따)·때렸다(팍) 하는 거죠. 악보에서 색 없음=고스트, 파랑=보통 실제음, 초록=악센트예요.

```json
{
  "id": "m1.w3.d3.ghost_accent",
  "type": "tab",
  "meta": { "title": "Ghosts with popping accents (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

이 세 층의 명암이 생기면, 밋밋하던 리듬이 갑자기 입체적으로 들려요. 드럼으로 치면 하이햇(치)·킥(따)·스네어(팍)가 한 손에서 나오는 셈이에요. 이게 펑크 기타 한 대가 리듬 세션처럼 들리는 비밀이에요.

세 단계를 한 번에 조절하는 게 처음엔 벅찰 수 있어요. 당연해요 — 손가락 하나로 볼륨 노브를 세 칸 돌리는 거니까요. 오늘은 완벽하지 않아도 돼요. '치'와 '팍'의 대비만 또렷해도 절반은 성공, 거기에 '따'가 은근히 껴 있으면 대성공이에요. 세 층을 자유자재로 다루는 데는 시간이 걸리지만, 그만큼 강력한 무기예요. 서두르지 마세요.

## ② 시각 자료

세 층의 소리를 한 자리에서. 색 없음=고스트('치'), 파랑=보통 실제음('따'), 초록=악센트('팍').

**예제 1 — 고스트+악센트(1마디).** 배경은 고스트, 1·3박 머리에 보통 실제음, 2·4박 '&'에 악센트. 세 층이 다 들어간 기본형.

```json
{
  "id": "m1.w3.d3.ghost_accent",
  "type": "tab",
  "meta": { "title": "Ghosts with popping accents (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** '따-치-치-치 / 치-치-팍-치'. 세 소리(치·따·팍)가 구분되는지 귀로 확인하며 4번.

**예제 2 — 당겨진 악센트(2마디).** 악센트를 '&'로 당겨 실은 syncopation. 약한 배경 사이로 강세가 살짝 밀려 튀어요.

```json
{
  "id": "m1.w3.d3.synco",
  "type": "tab",
  "meta": { "title": "Syncopated accents (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70.** 익으면 악센트 위치를 옮겨 응용. 배경 고스트가 계속 깔리는지가 관건.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 60~70. 한 자리에서 '치(고스트)-따(실제음)-팍(악센트)' 세 소리를 번갈아 내보며 압력 3단계 워밍업.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 세 층 구분)**
입으로 "따-치-치-치, 치-치-팍-치"처럼 세 소리를 구분해 노래해요. 어디가 치·따·팍인지 미리 그립니다.

**20~40분 · 실전 그루브 (예제 1·2 / BPM 70)**
**예제 1**(고스트+악센트)을 BPM 70에서 4번 → **예제 2**(당겨진 악센트)로. 세 층의 대비가 또렷한지가 핵심.

**40~50분 · 녹음/셀프 피드백 (권장)**
녹음 후 체크: 치·따·팍 세 소리가 구분되는가 / 배경 고스트가 안 끊기는가 / 악센트가 제일 튀는가.

**오늘의 완료 기준:** 한 손 위치에서 고스트·실제음·악센트 세 층을 압력으로 만들어, 대비가 또렷한 그루브를 칠 수 있다.

## ④ 팁 / 흔한 실수

- **세 층이 뭉개짐.** 치·따·팍의 음량 차가 없으면 그냥 평평해요. 세 단계를 확실히 벌리세요.
- **배경이 끊김.** 악센트·실제음에 집중하다 고스트가 사라지면 카펫이 없어져요. 배경을 계속.
- **악센트가 안 제일.** 악센트는 세 층 중 가장 세야 해요. '따'보다 확실히 위로.
- **한 번에 완벽 욕심.** 세 단계는 며칠 걸려요. 오늘은 치/팍 대비만 또렷해도 충분.
