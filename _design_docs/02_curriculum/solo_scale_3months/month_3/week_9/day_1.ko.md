---
title: "도리안의 정체, 딱 한 음: 장6도 F# 만나기"
dayKey: "m3.w9.d1"
estMinutes: 50
i18nKey: "lesson.m3.w9.d1"
---

# Day 1 — 어두운 마이너를 세련되게 바꾸는 '한 음': A Dorian의 장6도 F#

## ① 이론/설명

오늘 왜 이걸 하냐면요. 여러분 지난 8주 동안 마이너, 코드톤, 가이드톤 다 손에 익혔잖아요. 근데 솔로가 자꾸 '어두운 마이너'에서만 맴돌지 않던가요? 슬프고 무겁고, 늘 비슷한 색깔. 오늘부터 그 색깔을 바꿔요. 딱 **<mark>한 음</mark>**만 바꿔서요.

우리가 아는 내추럴 마이너(에올리안)는 A 기준으로 이래요.

- **A 에올리안**: A B C D E **F** G  → 6번째 음이 **F(단6도, b6)**

여기서 그 6번째 음 하나만 반음 올려요. F를 F#으로.

- **A 도리안**: A B C D E **F#** G  → 6번째 음이 **<mark>F#(장6도, ♮6)</mark>**

이게 전부예요. 스케일에서 딱 한 음, **<mark>b6 → ♮6</mark>**. 근데 이 한 음이 소리를 통째로 바꿔요. 에올리안의 F는 루트 A 위에서 눌린 듯 어둡게 깔리는데, 도리안의 F#은 훨씬 위로 열려서 **밝고 세련되게** 들려요. 산타나, 카를로스가 마이너에서 뭔가 '재즈스럽고 라틴한' 그 느낌 낼 때 쓰는 게 바로 이 F#이에요.

```json
{
  "id": "m3.w9.d1.aeolian_vs_dorian_6th",
  "type": "tab",
  "meta": {
    "title": "Aeolian b6(F) vs Dorian natural 6(F#) - hear the difference",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "quarter", "label": "b6", "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

왜 하필 이 음이 특별하냐면요. F#은 도리안을 도리안이게 만드는 **<mark>정체성 음(characteristic note)</mark>** 이거든요. 나머지 음(A B C D E G)은 에올리안이랑 똑같아요. 그러니까 도리안 색을 내려면 F#을 **<mark>적극적으로 들려줘야</mark>** 해요. F#을 피해 다니면 그냥 어두운 마이너로 돌아가 버려요. 이번 주 내내 우리는 이 F#을 '색칠하는 붓'처럼 쓸 거예요.

오늘 목표는 딱 두 개예요. 첫째, A 도리안 한 포지션을 손에 얹기. 둘째, 그 안에서 **<mark>F#(장6도)이 어디 있는지</mark> 눈 감고도 찾기.** 백킹은 Am7 하나만 무한 반복(vamp)하는 걸 쓸 거예요. 마이너 위에서 F#을 얹으면 왜 밝아지는지, 오늘 귀로 직접 확인해요.

## ② 시각 자료

첫 번째, A 도리안 **포지션 1**(5프렛 시작, 한 줄에 3음)이에요. 강조가 두 종류예요. **<mark>F#(6, 색채음)</mark>** 은 오늘의 주인공이라 **노란색**으로, **C(b3)** 는 Am7의 3도라 착지 목표로 **초록색**으로 표시해 뒀어요. 근음 A는 세 군데(6번 5프렛, 4번 7프렛, 2번 10프렛)에 있어요.

```json
{
  "id": "m3.w9.d1.a_dorian_pos1",
  "type": "scale_shape",
  "meta": {
    "title": "A Dorian - Position 1 (natural 6th F# color)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "scale": "A Dorian",
    "tempoBpm": 70
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
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 9, "finger": 4, "label": "2", "role": "scale" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 1, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 2, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 1, "label": "2", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "finger": 4, "label": "4", "role": "scale" }
    ]
  }
}
```

두 번째, **<mark>에올리안 vs 도리안</mark>**을 귀로 비교하는 짧은 라인이에요. 두 마디 모두 5도(E) → 6번째 음 → 5도(E) → 루트(A)로 똑같은데, 딱 6번째 음만 달라요. 1마디는 **F(b6, 어두움)**, 2마디는 **F#(♮6, 밝음)**. 한 프렛 차이(8프렛 vs 9프렛)가 색을 통째로 바꾸는 걸 직접 들어보세요.

```json
{
  "id": "m3.w9.d1.aeolian_vs_dorian_6th",
  "type": "tab",
  "meta": {
    "title": "Aeolian b6(F) vs Dorian natural 6(F#) - hear the difference",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "quarter", "label": "b6", "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "quarter", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 70) — 4연음 시퀀스로 손 열기**
메트로놈 70에 맞춰 포지션 1을 4연음으로 예열해요. A-B-C-D / B-C-D-E / C-D-E-F# … 이렇게 네 음씩 묶어 한 칸씩 올라가요. 상하행 통암기 말고 **네 음 묶음**으로. F#(5번 9프렛, 2번 7프렛)이 나올 때마다 소리 내서 "파샵!" 하고 불러요. 오늘 예열의 핵심은 <mark>F#에 이름표 붙이기</mark>예요.

**10~20분 · 두뇌 훈련 (F# 위치 각인)**
메트로놈 끄고, 포지션 1 안의 **<mark>F#만</mark>** 두 자리(5번 9프렛, 2번 7프렛)를 눈으로 찍고 손으로 짚어요. 그다음 근음 A 세 자리(6번 5프렛·4번 7프렛·2번 10프렛)도 같이. 마지막엔 눈 감고 "A 하나 → 가장 가까운 F# 하나"를 3초 안에 짚으면 통과. F#이 근음에서 어느 방향에 있는지 손이 기억하게 만드는 거예요.

**20~40분 · 실전 즉흥 (Am7 vamp / 70 BPM)**
"Am7 vamp backing track slow" 하나 틀어요(Am7 한 코드 무한 반복). 규칙 하나: 다른 건 다 잊고, **에올리안 라인(F로 끝나는 느낌)** 을 몇 번 치고 → 곧바로 같은 자리에서 **<mark>F#을 슬쩍 넣어</mark>** 보세요. 두 번째 비교 라인(5-6-5-R)을 백킹 위에 그대로 얹어도 좋아요. 목표는 딱 하나: "F를 F#으로 바꾸니 밝아진다"를 내 귀로 확인하기.

**40~50분 · 녹음/피드백 (권장)**
아무 녹음 앱(폰 음성 메모도 OK)으로 마지막 잼 30초만 녹음. 다시 들으며 딱 하나 체크: **<mark>F#을 넣은 구간이 실제로 더 '열리고 밝게'</mark> 들리나?** 안 들리면 F#을 더 길게, 더 또렷하게 다시 녹음해 보세요. 오늘은 F#의 색을 귀에 새기는 게 전부예요.

**오늘의 완료 기준:** 포지션 1을 4연음으로 한 바퀴. 눈 감고 F# 두 자리를 3초 안에 짚기. Am7 위에서 F 라인 → F# 라인 전환을 스스로 듣고 "밝아졌다"를 확인.

## ④ 팁 / 흔한 실수

- **F#을 피해 다니기.** 가장 흔한 실수예요. 도리안 스케일을 켜놓고도 정작 F#은 슬쩍 지나가 버리면, 귀엔 그냥 어두운 마이너로 들려요. F#은 숨기는 음이 아니라 **자랑하는 음**이에요. 길게, 또렷하게, 비브라토까지 얹어서 들려주세요.
- **F와 F#을 손이 헷갈림.** 5번 줄에서 F는 8프렛, F#은 9프렛. 딱 한 칸 차이라 급하면 섞여요. "도리안 = 한 칸 위(F#)"를 몸에 새기세요. 한 칸 아래로 미끄러지면 도리안이 아니에요.
- **음이름 없이 위치만 외우기.** "5번 9프렛"으로만 외우면 다른 자리 F#을 못 찾아요. 반드시 "이건 F#(장6도)"이라고 부르세요. 이름이 넥 전체를 연결해 줘요.
- **템포 욕심.** 70이 느려 보여도 오늘은 F#의 색을 귀에 새기는 게 전부예요. 빠르게 훑고 지나가면 정작 그 한 음의 밝기를 못 느껴요. 느리게, 그 한 음을 음미하면서.
