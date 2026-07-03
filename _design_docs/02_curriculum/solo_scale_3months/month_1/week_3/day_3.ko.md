---
title: "1~5번 전체를 잇는 넥 전체 3도 인터벌 런"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 다섯 개의 방을 하나의 복도로: 넥 전체를 한 줄로 꿰기

## ① 이론/설명

오늘 왜 이걸 하냐면요. 지금 여러분 머릿속의 지판은 아마 이럴 거예요. "1번 방, 2번 방, 3번 방, 4번 방, 5번 방." 다섯 개의 **따로 노는 상자.** 각 방 안에선 잘 노는데, 방과 방 사이 문지방을 넘는 순간 삐끗하죠. 즉흥이 5프렛에 갇히는 이유가 이거예요. 방을 하나씩만 쓰니까.

오늘 우리는 이 다섯 개의 방을 **하나의 긴 복도**로 바꿉니다. 벽을 허무는 도구가 바로 **넥 전체를 가로지르는 3도 인터벌 런**이에요. 왜 하필 3도냐면, 지난 2주 내내 말했듯 단순 상하행(라라라라)은 손이 관성으로 굴러서 방의 경계를 못 느껴요. 근데 **3도(한 음 건너뛰기)** 로 움직이면, 음이 껑충껑충 뛰면서 자연스럽게 옆 현·옆 방으로 손을 밀어내요. 3도 인터벌은 벽을 통과하는 열쇠인 셈이에요.

핵심 기술은 **포지션 시프트(슬라이드)**. 한 방 안에서 3도로 몇 음 놀다가, 한 현 위에서 주욱 슬라이드해서 다음 방으로 넘어가고, 거기서 또 3도로 놀아요. 오늘 런은 **6번 줄 5프렛(1번 블록 근음)에서 출발해 3번 줄 17프렛(5번 블록 C)까지**, 슬라이드 세 번으로 넥 전체를 한 호흡에 통과해요. 다 치고 나면 "아, 넥이 하나로 연결돼 있구나"가 손으로 느껴질 거예요.

그리고 잊지 마세요. 이 런의 목적은 손가락 자랑이 아니에요. 넥 어디를 지나든 **C(♭3) 타겟이 어디쯤 있는지**를 몸에 각인하는 거예요. 런 중간중간 초록 C를 짚을 때마다 "여기 C, 저기도 C" 하고 위치를 눈에 담으세요. 내일 즉흥에서 이 지도가 무기가 돼요.

## ② 시각 자료

먼저 오늘의 지도, **넥 전체 A 마이너 펜타토닉**이에요(넛~15프렛). 5개 블록이 사실은 끊김 없이 이어진 하나의 그물망이라는 걸 보여줘요. 초록 강조가 전부 C(♭3) 타겟이에요 — 넥 전체에 C가 이렇게 골고루 흩어져 있어요. (5번 블록 꼭대기의 16·17프렛 음은 5프렛 부근 패턴이 한 옥타브 반복된 것이라 이 지도의 아래쪽에서 이미 같은 모양으로 확인돼요.)

```json
{
  "id": "m1.w3.d3.pentatonic_full_neck",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — full neck map (Box 1-5 connected)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 15,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 3, "label": "b7", "role": "scale" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "label": "4", "role": "scale" },
      { "string": 6, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 15, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "label": "4", "role": "scale" },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "label": "4", "role": "scale" },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "label": "b7", "role": "scale" }
    ]
  }
}
```

이제 오늘의 주인공, **넥 전체 3도 인터벌 런**이에요. 1마디는 1번 블록(5프렛) 안에서 3도로 놀고, 2마디에서 슬라이드로 3번 블록(10프렛)으로, 3마디에서 슬라이드로 5번 블록(14~17프렛)까지 올라가 넥 꼭대기 C(♭3)에 착지해요. 슬라이드(포지션 이동) 표시에 특히 집중.

```json
{
  "id": "m1.w3.d3.full_neck_3rd_run",
  "type": "tab",
  "meta": {
    "title": "Full-neck 3rd-interval run (Box 1 -> 3 -> 5, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 10, "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 15, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 17, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 14, "duration": "eighth", "technique": "slide", "slideToFret": 17, "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 17, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 70 → 계단 상승)**
넥 전체 런은 슬라이드 때문에 처음엔 반드시 느려야 해요. **BPM 70**에서 위 런을 아주 천천히 1회. 슬라이드 세 곳(4번 줄 7→10, 1번 줄 12→15, 3번 줄 14→17)에서 손이 미끄러지는 거리를 몸에 익히세요. 매끄럽게 통과되면 **75 → 80**으로 5씩. 슬라이드 도착이 흐려지는 순간이 오늘의 상한선이에요.

**10~20분 · 두뇌 훈련 (넥 전체에서 C 찾기 챌린지)**
메트로놈 끄고, **넥 전체 지도에서 C(♭3)만** 낮은 프렛부터 높은 프렛까지 순서대로 짚어 올라가기: 2번 줄 1프렛 → 5번 줄 3프렛 → 3번 줄 5프렛 → 6번 줄 8프렛 → 1번 줄 8프렛 → 4번 줄 10프렛 → 2번 줄 13프렛 → 5번 줄 15프렛 → 3번 줄 17프렛. 짚을 때마다 "씨!" 소리 내며. 넥에 C가 얼마나 촘촘히 깔려 있는지 눈에 새기는 게 목적이에요. 막힘없이 한 바퀴 돌면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 75~85 BPM)**
백킹 틀고 규칙: **한 프레이즈 안에서 넥의 아래(5프렛)와 위(15프렛)를 반드시 둘 다 밟기.** 위 런을 그대로 던져도 좋고, 슬라이드 지점만 빌려 자유롭게 오르내려도 좋아요. 핵심은 "5프렛에만 갇히지 않기." 올라갔으면 근처 C(♭3)에 착지, 내려왔으면 또 근처 C에 착지. 넥 전체를 한 무대로 쓰는 감각.

**40~50분 · 녹음/피드백 (권장)**
30초 녹음. 체크: ① 슬라이드로 방을 넘을 때 "털컹"하고 리듬이 끊기지 않았나. ② 넥 위·아래를 실제로 다 썼나, 아니면 또 5프렛에서만 놀았나. 재생 속도를 늦춰 들으면 슬라이드 도착 음정과 리듬 끊김이 또렷이 들려요. 끊긴 슬라이드가 있으면 그 시프트만 10번 따로.

**오늘의 완료 기준:** 자신의 상한 BPM(최소 75 이상 권장)에서 넥 전체 3도 런을 슬라이드 끊김 없이 통과 + 넥 전체 C 아홉 군데를 순서대로 짚기.

## ④ 팁 / 흔한 실수

- **슬라이드에서 리듬이 무너짐.** 방을 넘는 슬라이드는 "빈 시간"이 아니에요. 미끄러지는 그 시간도 정확히 한 박(여기선 8분음표) 안에 들어가야 해요. 슬라이드가 늦으면 다음 음이 통째로 밀려요. 슬라이드를 "빨리, 그리고 제 박에" 도착시키세요.
- **3도를 상하행으로 되돌림.** 답답하다고 다시 라라라라 순차로 새면 벽 허물기가 안 돼요. 3도의 껑충거림이 어색한 게 정상이고, 그 어색함이 방과 방을 잇는 근육을 만들어요.
- **넥 위쪽에서 길을 잃음.** 12프렛 위로 올라가면 갑자기 지판이 낯설어 손이 얼어요. 그럴 땐 **가까운 근음 A나 C를 먼저 찾아 닻을 내리고** 거기서 다시 출발하세요. 닻만 있으면 안 헤매요.
- **속도 욕심.** 넥 전체 런은 슬라이드가 들어가서 같은 BPM이라도 박스 하나 런보다 훨씬 어려워요. 어제 5번 블록을 90으로 쳤어도 오늘은 70에서 다시 시작하는 게 정상이에요. 부끄러운 게 아니라 당연한 거예요.
