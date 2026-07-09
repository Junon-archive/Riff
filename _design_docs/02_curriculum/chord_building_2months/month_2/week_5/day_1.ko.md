---
title: "4현 근음의 발견 — 근음을 고음역으로 올리기"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — 근음이 4번 줄로 올라가면 R·3·5는 어디로

## ① 이론/설명

지난 한 달간 근음은 6번 줄(1주차) → 5번 줄(2주차)로 **내려왔죠.** 이번 주는 반대예요. 근음을 **4번 줄**로 올립니다. 그러면 코드가 지판의 **고음역**, 얇은 줄(1·2·3·4번) 위에서 밝고 영롱하게 울려요.

예시는 4번 줄 5프렛에 근음을 둔 **G 메이저(D 폼)**. 도수로 뜯어보면:

```json
{
  "id": "m2.w5.d1.g_major_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

- **R (근음)** — 4번 줄 5프렛(G). 이번 주의 새 집.
- **5 (5도)** — 3번 줄 7프렛(D).
- **R (근음)** — 2번 줄 8프렛(G). 옥타브 위 근음.
- **3 (3도)** — 1번 줄 7프렛(B). **가장 높이 울리는 음 = 탑노트**(초록).

여기서 새 개념 하나 — **탑노트**예요. 여러 줄을 울릴 때 가장 높은 음(보통 1번 줄)이 코드의 인상을 좌우해요. 이 D 폼에선 **3도(B)가 탑노트**라, 코드가 밝게 들리는 게 바로 이 맨 위 3도 덕분이에요. 그리고 **6·5번 줄은 안 써요** — 근음보다 낮은 줄이 울리면 고음역의 청량함이 깨지니 확실히 죽입니다. 고음역으로 올라오면 같은 코드도 훨씬 반짝이게 들려요. 오늘 처음 이 위쪽에서 코드를 울려보면 "어, 내 기타에서 이런 맑은 소리가 났었나?" 싶을 거예요. 한 달간 아래쪽만 다뤘으니, 오늘은 반대편 세계를 여는 날이라고 생각하면 돼요.

## ② 시각 자료

4번 줄에 근음을 둔 **G 메이저(D 폼)**. 6·5번은 ✕(뮤트), 초록이 1번 줄의 **3도(탑노트)** 예요.

```json
{
  "id": "m2.w5.d1.g_major_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**예제 1 — D 폼 코드톤 라인.** 네 음 R → 5 → R → 3 을 하나씩 짚어 소리로 확인. 마지막 3도(1번 줄, 초록)가 탑노트로 밝게 울리는 걸 귀에 새겨요.

```json
{
  "id": "m2.w5.d1.g_dform_line",
  "type": "tab",
  "meta": { "title": "G D-shape tones (R·5·R·3) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72.** "루트(4번) → 5도(3번) → 루트(2번) → 3도(1번, 탑)." 올라갈수록 소리가 밝아지고, 맨 위 3도가 반짝이는 걸 느끼세요. 4번 반복.

**예제 2 — 고음역 G 컴핑.** 얇은 네 줄(4·3·2·1번)만 스트로크해요. 1번 줄 탑노트(3도)가 또렷이 울리게, 6·5번은 죽인 채로.

```json
{
  "id": "m2.w5.d1.g_high_comp",
  "type": "tab",
  "meta": { "title": "G high-register comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 80, 4번 반복.** 고음역 G 트라이어드를 얇게 스트로크. 탑노트(1번 줄 3도)가 노래하듯 반짝이는지 확인. 6·5번 줄이 새면 소리가 탁해져요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
G(D 폼)를 잡고 4·3·2·1번을 한 줄씩 울려요. **6·5번 줄이 확실히 죽어 있는지**, 사용할 네 줄만 깨끗한지가 최우선 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 탑노트)**
**예제 1**을 짚으며 R·5·3의 위치를 부르고, 특히 지금 **탑노트가 어느 음(3도)** 인지 확인. 눈 감고 1번 줄 7프렛(탑=3도)을 바로 짚으면 통과.

**20~40분 · 실전 반주 (예제 2 컴핑 / 76~86 BPM)**
**예제 2 고음역 G 컴핑을 BPM 80에서 4번 반복.** 익으면 같은 폼을 근음만 다른 프렛(예: A=7프렛)으로 밀어 응용. 밝은 백킹 위에 얹어 고음역의 청량함을 즐겨요.

**40~50분 · 녹음/셀프 피드백 (권장)**
고음역 컴핑 30초 녹음. 체크: 뮤트해야 할 저음 줄(6·5번)이 새지 않았는가 / 탑노트(3도)가 또렷이 들리는가.

**오늘의 완료 기준:** G(D 폼)를 6·5번 뮤트한 채 얇은 네 줄만 울리고, 탑노트가 3도임을 짚어 말할 수 있다.

## ④ 팁 / 흔한 실수

- **저음 줄이 새어 울림.** 4현 근음 코드의 최대 적. 근음 짚는 손가락 끝을 눕혀 5번 줄을, 다른 손가락으로 6번 줄을 덮으세요.
- **탑노트를 흘리기.** 이번 달 내내 주인공이에요. 1번 줄 맨 위 음이 지금 R·3·5 중 뭔지 항상 의식하세요.
- **D 폼 스트레치 통증.** 4~1번 줄에 걸친 폼이라 처음엔 손이 아파요. 무리 말고 네 줄이 깨끗하면 충분.
- **고음역이 얇다고 세게 치기.** 얇은 게 정상이에요. 밴드/백킹 위에서 진가가 나와요. 세게 긁지 말고 가볍게.
