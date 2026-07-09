---
title: "펑크 백킹 위에서 도리안 스위칭 + 타이트한 쉼표 프레이징"
dayKey: "m3.w11.d2"
estMinutes: 50
i18nKey: "lesson.m3.w11.d2"
---

# Day 2 — 펑크: 3도를 '툭' 던지고 칼같이 쉬기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 블루스가 "늘어지는" 장르였다면, 펑크는 정반대예요. **극도로 타이트하고, 쉼표가 리듬의 주인공**인 장르죠. 같은 3도 착지라도 펑크에선 완전히 다르게 노래해야 해요. 백킹을 갈아 끼웠으니 프레이징도 갈아 끼우는 거예요 — 이게 이번 주의 핵심입니다.

오늘의 펑크 백킹은 클래식한 **Am7 → D9 뱀프**예요. (Cissy Strut, Chameleon 계열의 그 느낌.) 마이너·모달 성격의 뱀프를 만나면 판단은? **도리안.** 그래서 오늘 베이스캠프는 **A 도리안(A B C D E F# G)** 하나로 두 코드를 다 커버해요.

여기서 오늘의 '아하 포인트' 하나. 도리안의 정체성인 **장6도 F#(♮6)** 가, 사실 **D9의 3도**와 똑같은 음이에요. 그러니까 도리안으로 놀다가 코드가 D9로 바뀌는 순간, 그 색채음 F#가 자동으로 착지 타겟이 되는 거예요. 모드 하나로 두 코드를 부드럽게 잇는 마법이죠.

코드별 3도 스위칭은 이렇게.

- **Am7일 때 → C(단3도, ♭3)** 를 노려요. Am7의 표정을 결정하는 음이에요.
- **D9로 바뀌면 → F#(장3도)** 로 착지. 이 F#가 곧 A 도리안의 ♮6 색채음이에요.
- 그러니까 스위칭 = **3번 줄 5프렛(C) ↔ 2번 줄 7프렛(F#)** 사이를 오가는 판단이에요.

### 🎙️ 여백·프레이징 미니레슨 — 펑크 편: 타이트한 쉼표 & 스타카토

펑크에서 여백은 "쉼"이 아니라 **리듬 그 자체**예요. 오늘 챙길 4가지.

- **정확한 쉼표(여백):** 펑크는 16분음표 격자 위에서 **"치고-쉬고-치고-쉬고"** 가 칼같아야 해요. 어제 블루스의 여백이 '늘어지는 공간'이었다면, 오늘 여백은 **정확히 자른 정적**이에요. 타브의 `rest`를 박자 격자에 딱 맞춰 지키세요.
- **짧은 스타카토:** 음을 길게 끌지 말고 **툭 던지고 즉시 손 떼기.** 오른손 팜뮤트(`palm_mute`)로 뒤를 짧게 죽여요. 3도도 예외 없이 짧게.
- **16분 쪼갬:** 같은 C 하나도 16분음표로 쪼개 두 번 '따-닥' 던지면 그게 펑크 그루브가 돼요.
- **다이내믹 & 콜앤리스폰스:** 세게 친 한 방 뒤에 여리게 되받는 대비, 그리고 짧은 동기를 던지고 쉼표로 답을 비워두는 '틈'이 펑크의 숨구멍이에요.

정리하면 오늘은 **Am7·D9의 3도(C·F#)에 착지하되, 팜뮤트 스타카토와 칼같은 쉼표로 타이트하게 쪼개 노래하는** 날이에요.

## ② 시각 자료

첫 번째, 펑크 뱀프용 **타겟 노트 지도**예요. A 도리안 한 폼 안에서 Am7의 ♭3(C)와 D9의 3도(F#)가 다 잡혀요. 특히 **5번 줄 9프렛 F#** 는 라벨을 "6(color)"로 달아뒀는데, 이게 바로 도리안 ♮6이면서 D9의 3도이기도 한 그 이중 스파이 음이에요.

```json
{
  "id": "m3.w11.d2.funk_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Funk target map Am7 -> D9 (A Dorian, b3 & major 3rd = Dorian nat6)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (funk vamp)",
    "scale": "A Dorian",
    "tempoBpm": 100
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "finger": 2, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "Am7-b3(C)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 5, "finger": 1, "label": "Am7-5(E)", "role": "chord_tone" },
      { "string": 3, "fret": 7, "finger": 3, "label": "D9 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D9-3(F#)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6(color=D9-3 F#)", "highlight": true, "role": "color" }
    ]
  }
}
```

두 번째, 오늘의 **펑크 스타카토 프레이즈**예요. 16분음표와 쉼표가 촘촘히 엮여 있죠. 1마디는 Am7 위에서 **C(♭3)를 팜뮤트로 툭툭 쪼개고, 사이사이 칼같이 쉬어요.** 2마디는 D9로 스위칭 — **F#를 짧게 던지고** 다시 쉼표로 비워요. `rest`가 음표만큼 많다는 게 펑크의 정체성이에요.

```json
{
  "id": "m3.w11.d2.funk_staccato_phrase",
  "type": "tab",
  "meta": {
    "title": "Funk staccato phrase (Am7 C / D9 F#) with tight rests",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (funk)",
    "tempoBpm": 100
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "label": "Am7-b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "label": "Am7-b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 5, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "palm_mute", "label": "Am7-5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "technique": "palm_mute", "label": "Am7 R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "label": "Am7-b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "palm_mute", "label": "D9 R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "9(E color)", "highlight": true, "role": "color" },
        { "string": 2, "fret": 5, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 100) — 16분 4연음 시퀀스**
펑크 템포 100에 맞춰 A 도리안을 **16분 4연음 시퀀스**로 굴려요. 단, 오늘 규칙 — **매 박 4번째 16분을 팜뮤트로 짧게 죽이며** 손목의 '자르는' 감각을 심어요. 소리를 늘리는 게 아니라 **정확히 끊는** 연습이에요.

**10~20분 · 두뇌 훈련 — Am7↔D9 3도 스위칭 매핑**
메트로놈 100 유지. 타겟 지도에서 **Am7→C(3번 5프렛) ↔ D9→F#(2번 7프렛)** 딱 두 음만 번갈아 짚으세요. 클릭 한 번에 한 번씩, 팜뮤트로 짧게. F#를 짚을 땐 "이건 D9 3도이자 도리안 ♮6"이라고 소리 내 부르며. 눈 감고 두 음을 오갈 수 있으면 통과.

```json
{
  "id": "m3.w11.d2.funk_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Funk target map Am7 -> D9 (A Dorian, b3 & major 3rd = Dorian nat6)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (funk vamp)",
    "scale": "A Dorian",
    "tempoBpm": 100
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "finger": 2, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "Am7-b3(C)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 5, "finger": 1, "label": "Am7-5(E)", "role": "chord_tone" },
      { "string": 3, "fret": 7, "finger": 3, "label": "D9 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D9-3(F#)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6(color=D9-3 F#)", "highlight": true, "role": "color" }
    ]
  }
}
```

**20~40분 · 실전 즉흥 (Am7–D9 펑크 뱀프 / 96~100 BPM) — 타이트 미션**
"funk backing track Am7 D9" 또는 "A Dorian funk vamp" 하나 틀어요. 미션 둘. ① 코드 바뀔 때 C↔F#로 3도 스위칭. ② **모든 음을 팜뮤트 스타카토로 짧게, 사이사이 쉼표를 정확한 박자에 자르기.** 어제와 정반대예요 — 늘어뜨리면 실패, **짧게 툭 던지고 칼같이 쉬면** 성공.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱으로 잼 30초 녹음. 다시 들으며 딱 두 가지 — ① 3도 스위칭이 코드와 맞나. ② **쉼표가 박자 격자에 딱 붙어 정확히 잘렸나(질질 끌리지 않았나).** 필요하면 재생 속도를 늦춰 16분 쉼표의 위치와 스타카토 길이를 확대해 점검하세요.

**오늘의 완료 기준:** Am7의 C와 D9의 F#를 팜뮤트로 눈 감고 짚기. 백킹 위에서 3도 스위칭 6회 이상 + **정확한 위치의 쉼표(팜뮤트 정지)로 그루브 유지**.

## ④ 팁 / 흔한 실수

- **음을 길게 끄는 습관.** 어제 블루스 버릇이 오늘 독이 돼요. 펑크는 **짧게 툭.** 착지한 3도도 팜뮤트로 즉시 죽이세요. 여운이 아니라 정적이 그루브예요.
- **쉼표를 대충 흘리기.** 펑크에서 쉼표는 리듬의 뼈대예요. "칠 자리"보다 **"쉴 자리"를 먼저** 몸에 새기세요. 쉼이 흐트러지면 그루브가 통째로 무너져요.
- **너무 많이 치기.** 손이 근질거려도 참으세요. 두세 음 던지고 쉼표로 비운 자리가 베이스·드럼과 맞물릴 때 펑크가 살아나요.
- **F#를 D9 3도로만 보기.** 그건 동시에 도리안 ♮6 색채음이에요. 이 이중 정체성을 알면 Am7 구간에서도 F#를 색으로 슬쩍 쓰며 뱀프를 부드럽게 이을 수 있어요.
