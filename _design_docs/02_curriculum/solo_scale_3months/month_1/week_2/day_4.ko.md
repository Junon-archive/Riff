---
title: "Am 백킹 위 블록을 넘나드는 3도 타겟 착지 즉흥"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 이번 주의 결승선: 넥 전체를 무대로 쓰는 즉흥

## ① 이론/설명

오늘 왜 이걸 하냐면요. 이번 주 사흘 동안 우리는 지판을 넓혔어요. 1번 블록 감옥에서 나와, 2번·3번 블록까지 다리를 놓고, 그 위를 3도로 여행하는 법을 배웠죠. 근데 지난 3일은 다 **<mark>정해진 라인</mark>**을 친 거예요. 오늘은 그걸 내려놓고, 백킹 위에서 **<mark>네 마음대로</mark>** 블록을 넘나듭니다. 이게 이번 주의 진짜 시험이에요.

여기서 중요한 마음가짐 하나. 넥이 넓어졌다고 "많이 돌아다녀야 잘한 것"이 절대 아니에요. 초보 티가 가장 많이 나는 순간이 바로 **<mark>불안해서 넥을 정신없이 위아래로 훑는</mark>** 거예요. 반대로 프로는 필요할 때만 블록을 넘고, 넘어간 곳에서 **그 블록의 C(♭3)에 딱 착지**해서 노래해요. 즉, 이동은 수단이고 **<mark>착지가 목적</mark>**이에요. 넥이 3배 넓어졌다는 건, 착지할 수 있는 C가 3배 많아졌다는 뜻이에요. 지난주엔 1번 블록 C만 노렸다면, 오늘은 세 블록의 C를 모두 무기로 써요.

오늘의 게임은 이래요. 백킹 위에서 프레이즈를 열고, **아무 블록으로든 슬라이드해 이동한 뒤, <mark>도착한 블록의 C나 A에 착지해 비브라토로 닫기</mark>.** 열고-이동하고-닫기. 이 한 사이클이 자연스러워지면, 너는 더 이상 "블록 하나에 갇힌 사람"이 아니에요. 넥 전체를 무대로 쓰는 즉흥 연주자로 이번 주를 졸업하는 거예요.

## ② 시각 자료

Am 코드톤(R·♭3·5) 넥 지도예요. 5~13프렛, 세 블록에 걸친 착륙장 전부를 표시했어요. <mark>초록 C(♭3)가 너의 1순위 착지점</mark>, 근음 A는 안전한 2순위. 파랑 E(5)는 스쳐 가는 코드톤이에요. 이 지도가 오늘 즉흥의 나침반이에요.

```json
{
  "id": "m1.w2.d4.am_chord_tone_map_box1_3",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) across Box 1-2-3",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 82
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 9,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

블록을 넘나드는 즉흥 예시 리크예요. 1마디는 2번 블록에서 올라가 슬라이드로 3번 블록 C에 착지, 2마디는 다시 내려오며 슬라이드로 2번 블록 C에 착지. <mark>"올라가 닫고, 내려와 닫기"</mark>의 견본이에요.

```json
{
  "id": "m1.w2.d4.cross_box_target_lick",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Cross-box improv lick (slide between boxes, resolve on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 82
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 10, "duration": "eighth", "technique": "slide", "slideToFret": 13, "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 13, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 10, "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 10, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업 (BPM 82)**
이번 주 슬라이드 두 개(4번 줄, 2번 줄)와 3블록 3도 라인을 82로 한 번씩 빠르게 풀어요. 손이 넥 전체를 기억하는지 마지막 점검. 위 예시 리크도 1~2회 천천히 짚어보며 <mark>"올라가 닫고 내려와 닫는" 감</mark>을 잡아요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 세 블록의 C, 즉석 조준)**
메트로놈 80. 규칙: 아무 블록에서나 자유롭게 몇 음 치다가, 내가 마음속으로 "지금!" 하면 **<mark>가장 가까운 C(♭3)를 찾아 즉석 착지</mark>**. 1번(3번 줄 5프렛·1번 줄 8프렛), 2번(4번 줄 10프렛·1번 줄 8프렛), 3번(4번 줄 10프렛·2번 줄 13프렛) — 어느 블록에 있든 가까운 C로 착지하는 순발력을 기르는 거예요. 10번 중 8번 성공하면 통과.

**20~40분 · 실전 즉흥 (Am 원코드 백킹 / 78~82 BPM)**
오늘의 메인이자 이번 주 졸업 시험. 백킹을 틀고 규칙: **한 프레이즈는 현재 블록에서 열고(질문), <mark>다음 프레이즈에서 다른 블록으로 슬라이드해 이동한 뒤 그 블록의 C나 A에 착지해 닫기</mark>(대답).** 콜앤리스폰스처럼요. 최소 세 번은 블록을 바꿔가며 착지해 보세요 — 이왕이면 세 블록 각각에서 한 번씩. 이동이 목적이 아니라 **<mark>이동한 곳에서 노래하는 것</mark>**이 목적임을 잊지 마세요. 넥을 정신없이 훑고 싶은 충동이 들면, 오히려 한 블록에 머물러 C 하나를 길게 비브라토 하는 걸로 자제력을 보여주세요.

**40~50분 · 녹음/피드백 (권장)**
오늘은 꼭 녹음하시길. 이번 주의 결과물이니까요. 재생하며 체크: ① 블록을 옮길 때 슬라이드로 매끄럽게 넘었나, 아니면 뚝 끊겼나. ② 옮겨간 블록에서 **<mark>제대로 C에 착지</mark>**했나, 아니면 낯선 위치에서 헤매다 흘렸나. ③ 지난주 녹음(1번 블록만 쓰던)과 비교해 소리의 "공간감"이 넓어졌는지. 넓어졌다면, 축하해요. 이제 넥은 감옥이 아니라 무대예요.

**오늘의 완료 기준(= 2주차 졸업 기준):** Am 백킹 위에서 블록을 최소 3회 바꿔가며(슬라이드 이동) 각 도착 블록의 C(♭3) 또는 A(근음)에 의도적으로 착지 성공. 착지음마다 비브라토로 마무리. 정신없는 훑기 없이 "열고-이동-닫기"가 최소 3사이클.

## ④ 팁 / 흔한 실수

- **불안해서 넥을 정신없이 훑기.** 오늘 최대 함정이에요. 넓어진 지판을 다 써야 한다는 강박에 위아래로 훑으면 딱 초보 티가 나요. 이동은 "필요할 때 한 번", 그리고 반드시 착지로 마무리. 적게 움직이고 확실히 노래하는 게 프로예요.
- **옮겨간 블록에서 길을 잃음.** 새 블록에 도착했는데 C가 어디였는지 까먹으면 착지가 무너져요. 그래서 위 코드톤 지도를 머릿속에 넣어두는 거예요. 이동하기 전에 "저 블록의 C는 저기" 하고 미리 조준하고 넘어가세요.
- **슬라이드 없이 손 순간이동.** 블록을 옮길 때 손을 허공으로 번쩍 들면 소리가 끊기고 박이 밀려요. 이번 주 내내 강조했죠. **이동은 줄 위를 미끄러져서.** 그래야 프레이즈가 하나로 이어져요.
- **착지음을 스치고 지나감.** C에 도착했으면 최소 1박은 머물러 비브라토로 노래하세요. 넥을 아무리 넓게 써도, 착지에서 머물지 않으면 그냥 "빠른 통과"일 뿐 음악이 아니에요. 이번 주의 넓어진 무대도 결국 **머무는 착지** 하나로 완성돼요.
