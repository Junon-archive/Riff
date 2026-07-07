---
title: "쉘 보이싱이란 — 5도를 버리고 3도·7도만 남기기"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — 뚱뚱한 코드에서 살을 빼면 뭐가 남나

## ① 이론/설명

지금까지 코드는 여섯 줄을 꽉 채워 잡았죠. 오늘은 발상을 뒤집어요. **코드에서 뭘 버려도 되는가?**

코드의 색(밝음·어둠·긴장)을 결정하는 건 **3도와 7도**예요. 근음은 코드의 이름이자 기둥이고요. 그럼 **5도**는? 5도는 사실 코드의 성격에 거의 기여를 안 해요. 밴드에서는 베이스가 근음을, 다른 악기가 5도를 채워주니까, 기타가 5도까지 잡으면 오히려 소리가 뭉쳐요.

그래서 프로는 5도(와 중복 근음)를 과감히 빼고 **루트·3도·7도만** 남겨요. 세 줄짜리 이 코드를 **쉘 보이싱**(shell voicing, 껍데기 보이싱)이라 불러요. 장점은 명확해요:

- **전환이 빠르다** — 손가락 3개만 움직이니까.
- **소리가 깔끔하다** — 밴드 안에서 다른 악기와 안 부딪혀요.
- **정체가 또렷하다** — 3도·7도만 남으니 코드 성격이 선명하게 들려요.

오늘은 지난주의 G7을 예로, **6줄 풀코드 → 3줄 쉘** 로 다이어트해봅니다.

## ② 시각 자료

먼저 익숙한 **G7 풀코드(6줄)**. 초록이 3도·7도(색을 쥔 음), 파랑이 근음·5도예요.

```json
{
  "id": "m1.w4.d1.g7_full",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 — full voicing (6 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "role": "root" }
  ]}
}
```

이번엔 5도와 중복 근음을 버린 **G7 쉘(3줄)**. 남은 건 딱 R·b7·3. ✕가 버린 줄이에요. 소리가 얇지만 "G7다움"은 그대로예요.

```json
{
  "id": "m1.w4.d1.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 — shell voicing (R·b7·3)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**예제 1 — 쉘 세 음 확인 라인.** 남긴 세 음 R → b7 → 3 을 하나씩 짚어 소리로 확인해요. 5도가 없어도 "긴장감 있는 G7"이 들리는지 귀로.

```json
{
  "id": "m1.w4.d1.shell_tones_line",
  "type": "tab",
  "meta": { "title": "Shell tones (R·b7·3) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70.** "루트 → 단7도 → 3도 → 루트." 세 음만으로 G7의 성격이 다 나오는 걸 확인. 4번 반복.

**예제 2 — G7 쉘 컴핑.** 세 줄(6·4·3번)만 스트로크하고 나머지는 죽여요. 얇고 또렷한 컴핑을 익힙니다.

```json
{
  "id": "m1.w4.d1.g7_shell_comp",
  "type": "tab",
  "meta": { "title": "G7 shell comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78, 4번 반복.** 6·4·3번 세 줄만 깔끔하게. 5번·2번·1번 줄이 새어 울리지 않게 뮤트에 신경. 익으면 컴핑이 훨씬 가볍고 빨라져요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
G7 풀코드 → G7 쉘을 번갈아 잡아요. 쉘로 갈 때 5·2·1번 줄이 확실히 죽는지, 세 줄(6·4·3)만 또렷한지 체크.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 남긴 음의 정체)**
**예제 1**을 짚으며 "루트·단7도·3도"를 소리 내어 불러요. 쉘에서 어느 게 3도이고 어느 게 7도인지 눈 감고 짚으면 통과. 5도가 어디 있었는지도 함께 떠올려요.

**20~40분 · 실전 반주 (예제 2 컴핑 / 74~84 BPM)**
**예제 2 G7 쉘 컴핑을 BPM 78에서 4번 반복.** 세 줄만 쓰는 얇은 소리에 익숙해지기. 블루스 백킹이 있으면 위에 얹어 풀코드와 번갈아 쳐보고 소리 차이를 느껴요.

**40~50분 · 녹음/셀프 피드백 (권장)**
풀 vs 쉘을 각각 15초씩 녹음해 비교. 체크: 쉘에서 버린 줄이 새어 울리지 않았는지, 그럼에도 "G7다움"이 들리는지.

**오늘의 완료 기준:** G7을 쉘(R·b7·3)로 잡아 세 줄만 또렷이 울리고, 남긴 음의 정체(3도·7도)를 짚어 말할 수 있다.

## ④ 팁 / 흔한 실수

- **버린 줄이 새어 울림.** 쉘의 최대 적이에요. 근음 짚는 손가락 끝을 눕혀 5번 줄을, 3도 짚는 손가락으로 2·1번 줄을 살짝 덮으세요.
- **5도를 그리워하기.** 5도 없어도 코드는 안 무너져요. 오히려 밴드에서 더 깔끔해요. 두려워 말고 버리세요.
- **쉘을 '작은 모양'으로 외우기.** R·3·7이라는 정체로 기억하세요. 그래야 Maj7·m7로 3도·7도만 바꿔 응용돼요(내일).
- **스트로크가 넓음.** 쉘은 세 줄만. 피크가 5번·2번·1번을 긁지 않게 좁게 쳐요.
