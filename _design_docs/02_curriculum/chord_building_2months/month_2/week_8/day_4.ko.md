---
title: "최종 레코딩 & 셀프 분석 — 2개월의 결정체"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
---

# Day 4 — 너만의 컴핑을 녹음으로 남기기

## ① 이론/설명

드디어 마지막 날이에요. 오늘은 배운 모든 걸 합쳐 **II-V-I 위에 너만의 컴핑을 완성해 녹음**하고, 스스로 분석합니다.

2개월을 돌아보면:
- **1개월차** — 코드는 외우는 모양이 아니라 **근음 위에 3도·7도를 얹는 조립**. 6·5현 근음, 보이스 리딩, 쉘 보이싱.
- **2개월차** — 근음을 4번 줄로 올려 **고음역**을 열고, **9도**로 색을 더하고, **탑노트**를 멜로디로 이었어요.

오늘의 완성 컴핑은 이 모든 도구의 합이에요 — 9도로 화사하게(색), 탑노트로 노래하게(멜로디), 리듬으로 그루브 있게(생명). 정답을 외운 게 아니라, **너만의 선택으로 만든 너의 소리**예요.
여기까지 온 여러분, 정말 대단해요. 두 달 전 코드 하나 바꾸는 데도 손이 굳던 사람이, 이제 자기만의 컴핑을 직접 설계하고 녹음합니다. 이 커리큘럼은 오늘로 끝나지만, 여러분의 음악은 지금부터가 진짜 시작이에요. 오늘 녹음한 그 소리, 꼭 남겨 두세요 — 6개월 뒤에 다시 들으면 얼마나 멀리 왔는지 알게 될 거예요.

## ② 시각 자료

**Dm9(ii).** 오늘 무대의 시작 코드. 노랑=9도.

```json
{
  "id": "m2.w8.d4.dm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Cmaj9(I).** 진행의 집. 9도로 화사하게 착지.

```json
{
  "id": "m2.w8.d4.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 3, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 최종 컴핑(9도 + 그루브).** 9도로 화사하게, 쉼표·팜뮤트로 그루브 있게. 오늘 녹음할 뼈대예요.

```json
{
  "id": "m2.w8.d4.final_comp",
  "type": "tab",
  "meta": { "title": "Final comp (9ths + groove) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b3" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 5, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b3" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 5, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b3" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 80, 4번 반복.** Dm9 → G7 → Cmaj9를 9도(노랑)와 그루브(쉼표·P.M.)로. 이게 너의 완성 컴핑이야 — 녹음하자.

**예제 2 — 탑노트 멜로디(녹음에 얹을 노래).** 위에서 C-B-B가 노래해요. 컴핑에 이 라인을 더하면 완성.

```json
{
  "id": "m2.w8.d4.final_top_line",
  "type": "tab",
  "meta": { "title": "Top-note melody for the take — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 1, "fret": 8, "duration": "whole", "label": "b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 72.** 1번 줄 8 → 7 → 7. 컴핑 위에 이 탑노트 멜로디를 얹으면, 색(9도)+노래(탑)+그루브(리듬)가 다 모인 너만의 완성작이에요.

## ③ 오늘의 연습 (50분 루틴 — 레코딩 챌린지)

**0~10분 · 워밍업 + 세팅**
예제 1 최종 컴핑을 몇 번 돌려 몸을 풀고, 녹음 앱(폰 음성 메모도 OK)을 준비해요. R&B II-V-I 백킹 트랙 세팅.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 나만의 선택 확정)**
녹음할 버전을 정해요: 어느 코드에 9도? 그루브 A? B? 탑노트는? 8주 도구 중 무엇을 쓸지 스스로 결정.

**20~40분 · 실전 레코딩**
백킹 위에서 **너의 완성 컴핑을 통째로 녹음**해요(예제 1 + 원하면 예제 2 탑노트). 한 번에 완벽 말고, 여러 테이크 중 마음에 드는 걸 남겨요.

**40~50분 · 셀프 분석 (심화 체크리스트)**
녹음을 다시 들으며 진단: (1) 코드 전환 타이밍이 그루브 위에서 흔들리지 않았는가 (2) 소리 안 나는 줄/뮤트 실수는 없는가 (3) 탑노트 멜로디가 이어졌는가 (4) 9도(텐션)가 의도대로 화사하게 들렸는가 (5) 다음에 바꾸고 싶은 한 가지는?

**오늘의 완료 기준:** II-V-I 위에 9도·탑노트·그루브를 섞은 나만의 컴핑을 녹음하고, 체크리스트로 스스로 분석한다. (8주차 · **2개월 커리큘럼 완성!** 🎉🎸)

## ④ 팁 / 흔한 실수 + 다음으로

- **한 테이크에 완벽 강박.** 프로도 여러 테이크를 남겨요. 편하게 여러 번, 그중 베스트를.
- **분석 없이 녹음만.** 녹음이 스승이에요. 반드시 다시 듣고 한 가지를 고르세요.
- **회고 건너뛰기.** 2개월 전과 지금, 코드를 보는 눈이 어떻게 달라졌나요? 그 성장을 꼭 느껴 보세요.
- **다음 달로.** 이제 코드를 '조립'하고 '노래시키는' 사람이 됐어요. 다음은 배운 컴핑을 실제 곡에 적용하거나, 새 커리큘럼(펑크 리듬 등)으로 확장할 차례예요. 축하해요 — 정말 멀리 왔어요!
