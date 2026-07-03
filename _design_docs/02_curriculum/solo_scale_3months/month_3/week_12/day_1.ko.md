---
title: "오리지널 솔로 설계 — 코드 진행과 '하나의 집' 포지션 잡기"
dayKey: "m3.w12.d1"
estMinutes: 50
i18nKey: "lesson.m3.w12.d1"
---

# Day 1 — 11주치를 한 곡에: 코드 진행 짜고, 착지 지도 그리기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 드디어 마지막 주예요. 지난 11주 동안 우리 진짜 많이 쌓았잖아요. 펜타 5박스 연결하고, 블루스 ♭5랑 벤딩·비브라토 배우고, 코드톤 타겟팅에 ii-V-I 가이드톤, 도리안 장6도, 믹솔리디안 ♭7, 장르별 모드 스위칭까지요. 근데 이게 다 **머릿속에 흩어진 부품**이에요. 이번 주엔 이 부품들을 모아서 **여러분만의 오리지널 솔로 한 곡**을 만들 거예요. 카피 말고요, 진짜 여러분이 작곡한 솔로요.

큰 곡 만들 때 제일 흔한 실수가 뭔지 아세요? 바로 **음부터 치기 시작하는 거예요.** 집도 설계도 없이 벽돌부터 쌓으면 무너지죠. 그래서 오늘은 악기를 잠깐 내려놓는 시간도 있어요. 먼저 **뼈대(코드 진행)** 를 정하고, 그 위에 **어디에 착지할지 지도**부터 그립니다.

우리 곡의 진행은 이거예요. A를 중심음으로 두고, 8마디짜리로 짧고 단단하게 갈게요.

**Am7 | D7 | Am7 | D7 | A7 | D7 | Am7 | Am7**

왜 이렇게 짰냐면요, 이 진행 안에 **도리안과 믹솔리디안이 동시에** 살아 있거든요. 하나씩 볼게요.

- **Am7 → 3도는 C(♭3).** A 기준 마이너 색이에요. 여기가 도리안 홈그라운드.
- **D7 → 3도는 F#.** 그런데 이 F#, 놀랍게도 **A의 장6도(♮6)** 예요. 9주차에 배운 도리안의 그 세련된 색채음! 즉 D7에 착지하는 순간 자동으로 도리안 색이 나요. 개꿀이죠.
- **A7 → 3도는 C#.** 여기가 반전이에요. 방금까지 C(♭3)로 마이너였는데, A7이 되는 순간 3도가 **C#(장3도)** 로 반음 올라가요. 이게 10주차 믹솔리디안의 정체성이에요.

핵심은 이거예요. **C(♭3)와 C#(장3도)는 3번 줄에서 딱 한 프렛 차이(5프렛 → 6프렛)예요.** 이 한 칸이 도리안 ↔ 믹솔리디안 스위치예요. 손가락 하나 살짝 밀면 곡의 표정이 바뀌는 거죠. 오늘은 이 스위치를 포함한 **모든 착지점을 한 손 자리에 모으는 지도**를 손에 익힙니다.

## ② 시각 자료

첫 번째, **오늘의 핵심 착지 지도**예요. 코드가 바뀔 때 노려야 할 3도들이 다 모여 있어요. C(Am7 착지·♭3), F#(D7 착지 = A 장6도 색), C#(A7 착지·장3도), 그리고 ♭7 색채음 G까지. 강조된 점만 눈에 익혀도 이번 주 절반은 끝난 거예요.

```json
{
  "id": "m3.w12.d1.original_solo_target_tones",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Original solo - key target tones (Dorian + Mixolydian composite)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "scale": "Composite (Dorian + Mixolydian)",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 8,
    "dots": [
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

두 번째, 그 착지점들이 사는 **'하나의 집' 포지션**이에요. A 도리안과 A 믹솔리디안을 한 자리(5~9프렛)에 겹쳐 놓은 통합 음판이에요. C(♭3)와 C#(장3도)이 3번 줄에 나란히 있는 게 보이죠? 이 자리 하나만 장악하면 8마디 내내 손이 안 헤매요.

```json
{
  "id": "m3.w12.d1.composite_position",
  "type": "scale_shape",
  "meta": {
    "title": "A composite position (Dorian + Mixolydian merged, frets 5-9)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "scale": "A Dorian + A Mixolydian",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6", "role": "color", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 92) — 4연음 시퀀스로 손 데우기**
메트로놈 92(우리 곡 템포)에 맞춰, '하나의 집' 포지션 안에서 4연음 시퀀스를 굴려요. 6번 줄부터 한 줄에 4음씩(예: 5·7·8·... 다음 줄로) 16분음표로 올라갔다 내려와요. 상하행 통암기 아니고, "네 개씩 묶어서 굴린다"는 감각만. 손가락이 5~9프렛 자리에 자연스럽게 눕도록.

**10~20분 · 두뇌 훈련 (착지점 지도 각인) — 악기 내려놓고 시작**
첫 번째 지도를 보며 소리 내서 외워요. "Am7이면 C, D7이면 F#, A7이면 C#." 그다음 기타를 들고 백킹 없이 코드 이름만 스스로 불러요. "Am7!" 하고 C(3번 5프렛) 짚고, "D7!" 하고 F#(2번 7프렛) 짚고, "A7!" 하고 C#(3번 6프렛) 짚고. **C와 C#이 한 프렛 차이**라는 걸 손끝으로 확인하는 게 오늘의 하이라이트.

**20~40분 · 실전 즉흥 (Am7-D7-A7 백킹 / 92 BPM)**
유튜브·앱에서 "A minor Dorian jam" 또는 "A7 groove backing track" 느린 걸 하나 틀어요(정확히 우리 진행이 아니어도 OK — Am7·D7·A7 계열이면 충분). 규칙 딱 하나: **멜로디 만들려고 애쓰지 말고, 코드 바뀔 때마다 그 코드의 3도만 길게 착지.** 오늘은 작곡이 아니라 '지도 위를 걷는' 날이에요.

**40~50분 · 녹음/피드백 (권장)**
가진 아무 녹음 도구(폰 음성 메모도 좋아요)로 마지막 잼 30초만 남겨요. 다시 들으며 딱 하나: **코드가 바뀐 순간 내가 3도에 있었나.** 어긋났으면 어느 코드에서 늦는지 메모만. 고치는 건 이번 주 내내 할 거예요.

**오늘의 완료 기준:** 8마디 진행을 외우고, '하나의 집'에서 세 착지음(C·F#·C#)을 눈 감고 3초 안에 짚기. 백킹 위에서 코드 바뀔 때마다 3도 착지 8회 이상 성공.

### 셀프 피드백 체크리스트 (오늘의 초점: 착지 위치)
- [ ] **3도 착지 정확도** — Am7=C, D7=F#, A7=C#를 헷갈리지 않고 짚었다.
- [ ] **색채음 활용** — D7의 F#가 A의 장6도(도리안 색)라는 걸 인지하며 짚었다.
- [ ] **비브라토 안정성** — (오늘은 워밍업 수준) 길게 뻗는 착지음에 살짝 비브라토를 얹어봤다.
- [ ] **리듬 타이밍** — 코드가 바뀌는 그 박에 착지가 겹쳤다.

## ④ 팁 / 흔한 실수

- **설계 없이 음부터 치기.** 오늘 제일 중요한 건 8마디 진행과 세 착지음이에요. 이거 없이 즉흥부터 하면 이번 주 내내 헤매요. 진행을 종이에 적어 보면대에 붙여두세요.
- **C와 C#를 같은 음으로 착각.** 이 한 프렛이 곡의 심장이에요. Am7에서 C#를 짚으면 안 어울리고, A7에서 C를 짚으면 블루지하긴 해도 '착지'는 아니에요. 코드 성격 따라 3번 줄 5↔6프렛을 정확히 구분하세요.
- **다섯 박스 다 쓰려는 욕심.** 이번 주는 넥 전체 여행이 아니에요. '하나의 집'(5~9프렛) 안에서 노래하는 게 목표. 자리를 좁혀야 작곡이 돼요.
- **워밍업을 상하행으로 때우기.** 습관처럼 위아래로 훑지 말고 꼭 4연음으로 묶어 굴리세요. 그래야 실제 프레이즈 재료가 손에 남아요.
