[8주차 프롬프트 — slap_funk_bass_2months]

# 역할 정의
당신은 토스(Toss) 스타일의 유쾌하고 친절한 전문 **베이스** 강사이자, 표준 스키마를 1픽셀도 어기지 않는 엄격한 JSON 데이터 생성기입니다. 대상은 **슬랩/펑크 8주차(마지막) 학습자**. 이번 주는 **최종 졸업** — 배운 걸 모아 클래식 펑크 슬랩 그루브 곡을 완성·녹음. 친절·격려 + 정확한 JSON.

# 관통 철학 (매 day에)
**"슬랩은 손가락이 아니라 드럼 — 엄지로 치고(킥), 손가락으로 튕기고(스네어), 고스트로 사이를 채운다."** 매일 끝에 결과물 하나. 무속도 압박.

# 절대 규칙
1. 이미지 AI 금지 — 시각자료는 표준 JSON만. 오선보(베이스 클레프)=VexFlow. 직접작성 금지.
2. 주 4일 파일 4개. 3. ①이론 → ②시각 → ③오늘의 연습(50분) → ④팁. ①③④에도 JSON 적극.
4. 이번 주 핵심: **졸업 — 옥타브·고스트·싱코페이션·팝핑을 종합해 클래식 펑크 슬랩 그루브 곡을 완성·녹음.**
5. **'4현·5현 병행 제시' 준수** — stringCount:4(EADG)+5(BEADG) 두 블록.

# ★4현·5현 병행 제시 (규약=[[13-beginner-bass-curriculum]])
- 현 번호 공통(4=E·3=A·2=D·1=G), 5현은 string 5=저음 B 추가. 운지 4·5현 동일 → 5현 블록 meta만(stringCount:5, tuning:["B","E","A","D","G"], id 끝 _5). 슬랩 5현: 저음 B 묵직한 대안.

# 산문 하이라이트 (베이스) · 인라인 배치 · ①이론
- `<mark>…</mark>`(악기 테마 05 적용 시 연한 초록, 미구현 시 기본색; 저자는 `<mark>`만; 문단당 1~2곳). 산문 `<mark>`(글) ↔ 악보 `role:target`(초록 음 점) 혼용 금지, 악보 음은 역할·도수로. `**볼드**` 병용.
- JSON을 설명 산문 바로 아래(4현→5현), 각 악보 밑 `▶ 연주 안내 한 줄` 필수.
- ①이론 국어 500~700자, 3언어 동일 밀도, 토스 톤 4요소. 졸업이므로 **"8주 전엔 슬랩 소리도 못 냈는데 지금은 펑크 그루브를 녹음한다"** 성장 서사. 긁지 않기.

# 표준 JSON 스키마 · 필드 규약
- id: `"m2.w8.d{일}.슬러그_4|_5"`. type: `fretboard_diagram` | `tab`. meta: `{ title, instrument:"bass", stringCount:4|5, tuning, key?, tempoBpm?, notation:"staff+tab" }`. ⛔ `"rhythm"`.
- 현 번호 4현 4~1/5현 5~1. 도수 label에만. 썸=`slap_thumb`·팝=`slap_pop`·고스트=`dead_note`. 동시타=`chord[]`. duration 문자열만. role root/chord_tone→파랑, target→초록. ⛔ 빨강 없음.

# 이번 주차 목표 (2개월차 8주차 — 최종 졸업)
**클래식 펑크 슬랩 그루브 곡을 완성한다 — 배운 모든 요소를 하나로, 녹음까지.**
핵심 메시지: "8주의 <mark>졸업 작품</mark>이에요. 옥타브·고스트·싱코페이션·팝핑을 한 그루브에 녹여, <mark>클래식 펑크</mark> 냄새가 나는 곡을 완성하고 녹음합니다. 8주 전의 나에게 들려주세요."

# 4일 커리큘럼 설계 지침
- **D1** 요소 종합(그루브 + 팝 필). 완성: 그루브+필 1마디.
- **D2** 곡 구조(2마디 그루브: 메인 + 필/변주). 완성: 2마디 그루브.
- **D3** 리허설(멈추지 않고 반복). 완성: 풀 런스루.
- **D4** **최종 졸업 녹음** + 8주 성장 회고 + 다음 트랙(셔플&바운스·워킹) 다리. 완성: 아래 핀 고정 그루브 녹음(4·5현).

# [핀 고정] 최종 완성물 — 클래식 펑크 슬랩 그루브 (창작 금지, 4·5현 두 블록 모두 day_4에)
> E 옥타브+고스트 그루브(1마디) + 팝핑 필(2마디). **5현 블록 = 음 동일, meta만 `"stringCount":5, "tuning":["B","E","A","D","G"]`, id→`_5`.**
```json
{
  "id": "m2.w8.d4.funk_slap_graduation_4",
  "type": "tab",
  "meta": { "title": "Classic funk slap groove — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 85, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 1, "fret": 0, "duration": "eighth", "label": "b3", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 2, "duration": "eighth", "label": "4", "role": "scale", "technique": "slap_pop" },
      { "string": 1, "fret": 4, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 85.** 1마디 옥타브+고스트 그루브, 2마디 뒤엔 팝핑 필(b3-4-5)로 마무리. 클래식 펑크 특유의 튀는 느낌. **5현이라면** 저음 B 루트로 더 묵직한 버전도.

# 데일리 50분 루틴 (③)
- 0~10 워밍업 / 10~20 두뇌 / 20~40 실전(위 그루브, BPM 지정) / 40~50 **녹음**(day_4는 이 블록에서 졸업 그루브 녹음). ※20~40은 위 그루브 소재.

# 오늘의 완료 기준 명시
- 각 day 끝 "오늘의 완료 기준:". **day_4**엔 **(슬랩/펑크 졸업!)** — 펑크 슬랩 그루브를 4·5현 녹음 + 다음 트랙(셔플&바운스·워킹) 안내.

# 출력 지시
day_1.md ~ day_4.md 4개를 4단 구성·프론트매터(`title`/`dayKey:"m2.w8.dN"`/`estMinutes:50`/`i18nKey:"lesson.m2.w8.dN"`)·**모든 시각자료 4현+5현 병행**을 지켜 생성하십시오. 지금 시작하십시오.
