---
title: "워킹 첫날 — F7의 안전한 돌(코드톤)"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — F7 코드톤, 밟아도 되는 네 개의 돌

## ① 이론/설명

드디어 워킹 베이스의 첫걸음을 떼는 날이에요. 워킹 베이스가 어렵게 느껴졌다면 딱 한 문장만 기억해요 — **워킹은 코드 위를 걷는 거예요.** 걸을 때 아무 데나 밟으면 발이 빠지지만, **밟아도 되는 안전한 돌**만 골라 디디면 어디로든 편하게 건너갈 수 있죠. 베이스에서 그 안전한 돌이 바로 **코드톤(R·3·5·b7)**이에요. 오늘은 이번 주 무대인 **F 블루스**의 첫 코드, **F7**의 코드톤을 손에 익힙니다.

F7은 네 개의 음으로 이뤄져요 — **루트 F, 3도 A, 5도 C, b7도 Eb**. 이 네 음이 F7 위에서 언제 밟아도 안 빠지는 돌이에요. <mark>루트는 그 코드의 이름이자 집이에요.</mark> F7이라면 **F**가 집이고, 나머지 3·5·b7은 집 주변에 놓인 디딤돌이라고 생각하면 편해요. 특히 **3도 A**는 그 코드가 메이저인지 마이너인지 성격을 정하는 음이라, 워킹에서 가장 자주 착지하는 목표가 돼요.

지판에서 위치를 볼게요. 4현 기준으로 **루트 F는 4번현 1프렛**, **3도 A는 4번현 5프렛**, **5도 C는 3번현 3프렛**, **b7도 Eb은 3번현 6프렛**이에요. 처음엔 네 자리를 한꺼번에 외우려 하지 말고, <mark>루트 F부터 손끝으로 짚어 확인</mark>하고 하나씩 늘려가요. 오른손은 검지·중지로 번갈아 뜯는 **투핑거**로, 한 음 한 음 또렷하게 울려요.

먼저 집인 **루트 F** 한 자리부터 확실히 잡아둬요.

```json
{
  "id": "m1.w1.d1.f7_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root on the E string — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4현.** 루트 F는 4번현 1프렛. 모든 코드톤의 출발점이자 집이에요.

```json
{
  "id": "m1.w1.d1.f7_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root on the E string — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B현이 하나 더 있을 뿐이에요.

**5현**을 쓴다면 운지는 4현과 완전히 똑같아요. 현 번호도 4번(E)~1번(G)이 그대로고, 맨 아래 저음 B현이 한 줄 더 있을 뿐이에요. 익숙해지면 그 저음 B로 워킹을 더 낮은 음역까지 확장할 수 있지만, 오늘은 **F7의 네 코드톤 위치**를 눈과 손에 각인하는 데만 집중해요. 이 네 개의 돌이, 이번 주 내내 우리가 밟고 걸어갈 길이 되니까요.

## ② 시각 자료

오늘은 **F7의 코드톤**을 지판과 악보 양쪽으로 눈에 새겨요. 먼저 지판에서 <mark>네 개의 안전한 돌 위치</mark>를 확인하고, 그다음 그 돌들을 4분음으로 하나씩 밟아봐요. 모든 예제는 **4현·5현 두 버전**으로 나란히 실었어요.

먼저 **F7 코드톤 지도**예요. 파랑 점이 코드톤 — **루트 F**를 시작으로 3도·5도·b7도가 어디에 놓이는지 한눈에 담아요.

```json
{
  "id": "m1.w1.d1.f7_tones_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** 루트 F(4번현 1프렛)에서 출발해 3도 A·5도 C·b7 Eb까지, 네 자리를 눈으로 훑어요.

```json
{
  "id": "m1.w1.d1.f7_tones_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 코드톤 위치는 4현과 똑같아요. 맨 아래 저음 B는 지금은 쓰지 않고 손으로 덮어 둬요.

다음은 **루트와 3도**만 오가는 예제예요. <mark>3도(초록 음)는 워킹이 가장 자주 착지하는 목표점</mark>이라 먼저 귀에 익혀 둬요.

```json
{
  "id": "m1.w1.d1.f7_r3_4",
  "type": "tab",
  "meta": { "title": "F7 root and third — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** 루트 F와 3도 A를 번갈아 밟으며, 두 음의 거리를 손에 익혀요.

```json
{
  "id": "m1.w1.d1.f7_r3_5",
  "type": "tab",
  "meta": { "title": "F7 root and third — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 울리지 않게 덮어 둬요.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
오른손 검지·중지로 개방현을 번갈아 뜯으며 손을 풀어요. 아직 음정보다 **또박또박한 투핑거**가 먼저예요.

**10~20분 · 두뇌 훈련**
F7 코드톤 지도를 보며 **루트 F → 3도 A → 5도 C → b7 Eb** 순서로 위치를 손끝으로 짚어 확인해요. <mark>눈을 감고도 네 자리를 찾을 수 있을 때까지</mark> 천천히요.

**20~40분 · 실전 (오늘의 완성물)**
아래 F7 아르페지오를 **BPM 70**에서 반복해요. 한 박에 한 음씩, R-3-5-b7을 또박또박 밟아 올라가요.

```json
{
  "id": "m1.w1.d1.f7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio (ascending) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 4현.** F7의 네 코드톤을 아래에서 위로 또박또박. 이 네 음이 F7 위 '안전한 돌'이에요.

```json
{
  "id": "m1.w1.d1.f7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio (ascending) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 70, 5현.** 음과 위치는 4현과 똑같아요. 저음 B는 덮어 두고, 익숙해지면 더 낮은 음역으로 확장해 봐요.

**40~50분 · 녹음/피드백**
30초 녹음해 **네 음이 같은 크기로 고르게** 울리는지 들어봐요. 오늘 짚은 위치가 정확했는지도 확인해요.

**오늘의 완료 기준:** F7의 코드톤 R-3-5-b7을 지판에서 찾아, BPM 70에서 4분음 아르페지오로 또박또박 짚어 올라갈 수 있다.

## ④ 팁 / 흔한 실수

- **b7을 빠뜨려요.** 익숙한 R·3·5만 짚고 b7 Eb을 자꾸 잊어요. b7이 있어야 'F7'의 도미넌트 색이 살아나니, 네 번째 돌을 꼭 챙겨요.

```json
{
  "id": "m1.w1.d1.f7_b7_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 flat-7 (Eb) landmark — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4현.** b7 Eb은 3번현 6프렛. R·3·5에 이 한 음을 더해야 F7이 완성돼요.

```json
{
  "id": "m1.w1.d1.f7_b7_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 flat-7 (Eb) landmark — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5현.** 위치는 4현과 똑같아요. 저음 B로 내려가 다른 옥타브의 b7도 찾아볼 수 있어요.

- **음을 짧게 끊어요.** 4분음은 다음 박까지 충분히 울려야 걷는 느낌이 나요. 손가락을 급히 떼지 마세요.
- **위치만 외우고 소리를 안 들어요.** 프렛 번호보다 그 음이 어떻게 들리는지가 더 중요해요. 짚을 때마다 소리를 귀에 담아요.
- **저음 B 방심(5현).** 코드톤에 집중하다 B를 건드리면 저음이 웅웅 새요. 안 쓰는 B는 늘 덮어 두세요.
