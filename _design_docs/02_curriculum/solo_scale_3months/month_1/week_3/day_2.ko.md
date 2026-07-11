---
title: "펜타 5번 블록 각인 + 4번↔5번↔옥타브 연결"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 마지막 퍼즐 조각: 5번 블록, 그리고 지도가 한 바퀴 도는 순간

## ① 이론/설명

오늘 왜 이걸 하냐면요. 어제 4번 블록으로 이사 갔죠? 오늘 **<mark>5번 블록</mark>**을 심으면, 드디어 펜타토닉 5개 블록이 **전부** 손에 들어와요. 다섯 조각짜리 퍼즐의 마지막 한 조각이에요. 근데 이 5번 블록엔 소름 돋는 비밀이 하나 있어요. 그걸 오늘 여러분이 직접 느끼게 할 거예요.

5번 블록은 14~17프렛에 살아요. 근음 A가 **6번 줄 17프렛**, 그리고 **1번 줄 17프렛**에 있어요. 자, 여기서 마법. 6번 줄 17프렛의 A는... **6번 줄 5프렛(1번 블록 근음)에서 정확히 12프렛 위**예요. 12프렛 = 한 옥타브. 즉 **<mark>5번 블록의 꼭대기는 1번 블록과 똑같은 모양</mark>**이에요. 넥을 쭉 올라가다 보면 5번 블록 다음엔 다시 1번 블록이 (한 옥타브 위에서) 나오는 거예요. **<mark>지도가 한 바퀴 돌아 제자리로 오는 거죠</mark>.** 펜타토닉이 "5개 블록의 무한 반복 고리"라는 걸, 오늘 이 옥타브 지점에서 눈으로 확인하게 됩니다.

```json
{
  "id": "m1.w3.d2.pentatonic_box5",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 5 (wraps to Box 1 an octave up)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 13,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 15, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 6, "fret": 17, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 17, "finger": 3, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 17, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 17, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "finger": 1, "label": "4", "role": "scale" },
      { "string": 2, "fret": 17, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 17, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

그래서 오늘은 두 가지를 잇습니다. 첫째 **4번↔5번 연결**(어제 배운 이사 감각의 연장), 둘째 **<mark>5번→옥타브 위 1번</mark>**의 연결. 특히 두 번째가 중요해요. 5번 블록 맨 위(1번 줄 17프렛 A)에 도달하면, 여러분은 사실 "1번 블록의 근음"에 다시 서 있는 거예요. 그러니까 넥의 끝은 벽이 아니라 **<mark>다시 시작점</mark>**이에요. 이걸 알면 즉흥할 때 "위로 도망갈 곳이 없다"는 공포가 사라져요. 위로 가도 결국 아는 패턴이 반복될 뿐이니까요.

오늘의 타겟 C(♭3)는 5번 블록에서 **5번 줄 15프렛**과 **3번 줄 17프렛**에 있어요. 넥의 거의 끝자락이죠. 여기 있는 C도, 아래 블록의 C와 완전히 똑같은 "애절한 마이너 3도"예요. 위치만 높을 뿐 역할은 하나도 안 변해요.

## ② 시각 자료

오늘의 마지막 퍼즐, **5번 블록**이에요. 근음 A(6번 줄 17프렛·3번 줄 14프렛·1번 줄 17프렛)를 중심으로, 초록 강조가 타겟 C(♭3)예요. 6번 줄 17프렛 A가 바로 <mark>"옥타브 위 1번 블록"으로 넘어가는 문</mark>이에요.

```json
{
  "id": "m1.w3.d2.pentatonic_box5",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 5 (wraps to Box 1 an octave up)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 13,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 15, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 6, "fret": 17, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 17, "finger": 3, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 17, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 17, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "finger": 1, "label": "4", "role": "scale" },
      { "string": 2, "fret": 17, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 17, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

4번→5번을 잇고, 그대로 옥타브 위 근음까지 올라가는 라인이에요. 1마디는 4번 블록(12~15프렛)을 훑고, 2마디에서 **<mark>1번 줄 15프렛(G)→17프렛(A) 슬라이드</mark>**로 5번 블록 꼭대기, 즉 "옥타브 위 1번 블록의 근음"에 착지해요.

```json
{
  "id": "m1.w3.d2.box4_to_box5_octave",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Box 4 -> Box 5 -> octave root (wrap point)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 15, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 14, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 14, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 15, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 15, "duration": "eighth", "technique": "slide", "slideToFret": 17, "label": "b7", "role": "scale" },
        { "string": 1, "fret": 17, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 80)**
메트로놈 80으로 **<mark>5번 블록만</mark>** 4연음 시퀀스 상행/하행 각 1회. 이제 넥 거의 끝(14~17프렛)이라 프렛 간격이 제일 좁아요. 손가락이 답답할 만큼 붙는데, 그게 정상이에요. 그다음 어제의 4번 블록과 오늘 5번 블록을 **번갈아** 한 번씩 쳐보며 두 집의 위치 차이를 몸에 새기세요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = C·A, 옥타브 확인 챌린지)**
메트로놈 끄고 챌린지 두 개. ① 5번 블록 안 C(♭3) 두 군데(5번 줄 15프렛·3번 줄 17프렛)를 눈 감고 짚기. ② **<mark>옥타브 증명</mark>**: 6번 줄 5프렛 A를 짚어 소리 듣고 → 곧바로 6번 줄 17프렛 A를 짚어 소리 듣기. <mark>"같은 음, 한 옥타브 위"</mark>가 귀로 확인되면 성공. 이 두 A가 각각 1번 블록·5번 블록의 근음이라는 걸 눈으로 연결하세요.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 78~85 BPM)**
백킹 틀고 규칙: **4번 블록(12프렛)에서 시작 → 5번 블록(14프렛)으로 이사 → <mark>넥 꼭대기 A(1번 줄 17프렛 또는 6번 줄 17프렛)까지 올라갔다가</mark>**, 다시 착지음(C 또는 A)으로 프레이즈를 닫기. 위로 끝까지 밀어붙이는 감각을 즐기세요. 넥 끝에 도달하면 "여기가 다시 1번 블록"이라는 걸 상기하며, 거기서 한 옥타브 위 리크를 툭 던져봐도 좋아요.

```json
{
  "id": "m1.w3.d2.box4_to_box5_octave",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Box 4 -> Box 5 -> octave root (wrap point)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 15, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 14, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 14, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 15, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 15, "duration": "eighth", "technique": "slide", "slideToFret": 17, "label": "b7", "role": "scale" },
        { "string": 1, "fret": 17, "duration": "half", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "root" }
      ]}
    ]
  }
}
```

**40~50분 · 녹음/피드백 (권장)**
30초 녹음. 체크: ① 5번 블록의 좁은 프렛에서 음이 뭉개지거나 뮤트되지 않았나. ② 넥 꼭대기까지 올라간 프레이즈가 "길을 잃지" 않고 <mark>착지로 잘 닫혔나</mark>. 고프렛은 소리가 얇고 날카로워서 뮤트가 잘 나요. 재생하며 삑사리 난 현이 있으면 그 자리 운지를 점검.

**오늘의 완료 기준:** 5번 블록 시퀀스 상·하행 통과 + 4번→5번 연결로 넥 꼭대기 A까지 도달 + 옥타브(5프렛 A ↔ 17프렛 A) 귀로 확인.

## ④ 팁 / 흔한 실수

- **고프렛 뮤트.** 14~17프렛은 프렛 간격이 좁아 손가락 옆면이 옆 현을 눌러 죽이기 쉬워요. 손가락 끝을 더 세워서 짚으세요. 소리가 "뿌옇게" 죽으면 십중팔구 이 문제예요.
- **넥 끝을 "막다른 길"로 느낌.** 17프렛까지 갔는데 더 갈 데가 없다고 당황하지 마세요. 거기가 바로 1번 블록(한 옥타브 위)의 시작이에요. 막다른 길이 아니라 회전문이에요.
- **5번 블록을 1번 블록과 헷갈림.** 모양이 옥타브로 똑같다 보니 "여기가 5번인지 1번 위쪽인지" 헷갈려요. 기준은 딱 하나, **근음 A의 위치**. 6번 줄 17프렛에 A가 있으면 거기가 5번 블록의 꼭대기(=옥타브 1번)예요.
- **슬라이드 도착 A를 얇게 흘림.** 1번 줄 15→17 슬라이드로 도착한 A는 넥 꼭대기라 소리가 얇아요. 그럴수록 비브라토를 넓고 확실하게 걸어 "노래"로 만들어야 착지가 살아요.
