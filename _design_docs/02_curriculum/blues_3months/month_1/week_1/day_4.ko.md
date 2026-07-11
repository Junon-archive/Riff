---
title: "A7 셔플 부기 완성 — 1주차 결승선"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 셔플 필 위에 부기를 얹어 완성한다

## ① 이론/설명

드디어 1주차의 결승선이에요. 오늘은 어제의 부기 리프에 **셔플 필**을 얹어, 두 마디짜리 **A7 셔플 부기**를 완성하고 녹음해요. 리듬(셔플)과 손모양(더블스탑 부기)이 만나는 순간, <mark>진짜 블루스 그루브</mark>가 처음으로 살아나요. 어렵게 느껴져도 걱정 마세요. 새로운 걸 배우는 게 아니라, 이미 손에 익은 세 조각을 하나로 겹치는 것뿐이에요.

한 주를 돌아볼까요. **D1**엔 롱-숏 셔플 필을, **D2**엔 루트+5도·6도 더블스탑을, **D3**엔 R-5-6-b7 부기 리프를 익혔어요. 오늘은 이 셋을 하나로 포갭니다. 손모양은 그대로, 8분음표만 **롱-숏**으로 굴리면 돼요.

오늘 쓸 전체 손모양 지도를 한 번 더 눈에 넣을게요.

```json
{
  "id": "m1.w1.d4.shape_map",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 boogie shape — full map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "finger": 3, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 4, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **R + 5·6·b7.** 5번 줄 개방 A 위, 4번 줄에서 검지·약지·새끼가 걸어가요.

이 폼은 12마디 블루스의 **A7 자리**에 그대로 쓰여요. 다음 주엔 똑같은 손모양을 **D7·E7**로 옮기기만 하면 12마디가 완성돼요. 그러니 오늘의 두 마디는 <mark>블루스 전곡의 씨앗</mark>인 셈이에요. 12마디 블루스는 결국 이 부기 한 덩어리를 코드만 바꿔 옮겨 다니는 구조라, 오늘 두 마디가 탄탄하면 그다음은 놀랄 만큼 수월해요.

두 마디를 완벽히 붙이려 애쓰지 않아도 돼요. **셔플이 살아있고 두 음이 다 울리면** 오늘은 성공이에요. 이 그루브를 꼭 녹음해 두세요. 한 주의 증거이자, 다음 주 12마디의 <mark>출발점</mark>이 될 거예요.

## ② 시각 자료

이번 주의 완성물이에요. 어제의 부기 리프를 **셔플 필**로 두 마디 굴린, A7 셔플 부기예요.

```json
{
  "id": "m1.w1.d4.a7_boogie",
  "type": "tab",
  "meta": { "title": "A7 shuffle boogie", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80, 셔플로(롱-숏).** 5번 줄 개방 A를 계속 누르고, 4번 줄에서 5도(2프렛)→6도(4프렛)→b7(5프렛)→6도로 손가락을 폈다 접어요. <mark>통통 튀는 느낌</mark>이 나면 성공.

## ③ 오늘의 연습 (50분 루틴)

**0~10분 · 워밍업**
BPM 65. 개방 A 셔플과 어제의 부기 한 마디로 손을 풀어요. <mark>발이 정박을 잡고 있는지</mark> 확인.

한 마디 워밍업 버전으로 셔플을 되살려요.

```json
{
  "id": "m1.w1.d4.warmup",
  "type": "tab",
  "meta": { "title": "A7 boogie — 1-bar warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 65, 셔플로.** 부기 한 마디를 가볍게. 손모양이 아직 살아있는지 점검해요.

**10~20분 · 두뇌 훈련 (오늘의 타겟 = 셔플+부기 결합)**
손은 부기 순서(5-6-b7-6)를, 발은 롱-숏 셔플을 동시에 떠올려요. **머릿속에서 먼저 합쳐** 봐요.

**20~40분 · 실전 A7 셔플 부기 (두 마디 / BPM 80)**
위 완성물 두 마디를 **끊김 없이** 반복해요. <mark>셔플이 살아있는지</mark> / <mark>두 음이 다 나는지</mark> 두 가지만 봐요.

**40~50분 · 녹음/셀프 피드백 (권장)**
30초~1분 녹음 후 체크: <mark>롱-숏 그루브가 b7까지 매끄럽게 들리는가</mark>.

**오늘의 완료 기준:** A7 셔플 부기 두 마디를 BPM 80에서 셔플 필로 살려 반복하고 녹음할 수 있다. — 이번 주 결과물: A7 셔플 부기 (1주차 완성!)

## ④ 팁 / 흔한 실수

완성 두 마디에서 자주 나오는 실수만 짚을게요.

```json
{
  "id": "m1.w1.d4.mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep the low E muted", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **6번 줄은 뮤트.** 저음 E가 울리면 소리가 탁해져요. 엄지나 검지 옆면으로 살짝 막아요.

- **셔플이 펴짐.** 두 마디를 반복하다 8분음표가 균등해져요. 발로 롱-숏을 계속 밟아요.
- **두 번째 마디에서 흐트러짐.** 첫 마디만 신경 쓰다 뒤가 무너져요. 두 마디를 한 덩어리로 연습해요.
- **루트가 끊김.** 손가락 이동 중 개방 A를 놓쳐요. 5번 줄은 늘 울리게 둬요.
- **녹음 생략.** 한 주의 결과는 녹음이 증명해요. 짧아도 꼭 남겨 다음 주와 비교해요.
