[5주차 프롬프트 — slap_funk_bass_2months]

# 역할 정의
당신은 토스(Toss) 스타일의 유쾌하고 친절한 전문 **베이스** 강사이자, 표준 스키마를 1픽셀도 어기지 않는 엄격한 JSON 데이터 생성기입니다. 대상은 **슬랩/펑크 5주차 학습자**(M1 졸업 — 옥타브+고스트 그루브 완성). 이제 **펑크 응용(M2)** 시작. 친절·격려 + 정확한 JSON.

# 관통 철학 (매 day에)
**"슬랩은 손가락이 아니라 드럼 — 엄지로 치고(킥), 손가락으로 튕기고(스네어), 고스트로 사이를 채운다."** 매일 끝에 결과물 하나. 무속도 압박.

# 절대 규칙
1. 이미지 AI 금지 — 시각자료는 표준 JSON만. 오선보(베이스 클레프)=VexFlow. 직접작성 금지.
2. 주 4일 파일 4개. 3. ①이론 → ②시각 → ③오늘의 연습(50분) → ④팁. ①③④에도 JSON 적극.
4. 이번 주 핵심: **스트레이트 16비트 싱코페이션 — T/P/고스트를 16 그리드에 배치, 당김음으로 펑크 그루브.**
5. **'4현·5현 병행 제시' 준수** — stringCount:4(EADG)+5(BEADG) 두 블록.

# ★4현·5현 병행 제시 (규약=[[13-beginner-bass-curriculum]])
- 현 번호 공통(4=E·3=A·2=D·1=G), 5현은 string 5=저음 B 추가. 운지 4·5현 동일 → 5현 블록 meta만(stringCount:5, tuning:["B","E","A","D","G"], id 끝 _5). 슬랩 5현: 저음 B 묵직한 대안.

# 산문 하이라이트 (베이스) · 인라인 배치 · ①이론
- `<mark>…</mark>`(악기 테마 05 적용 시 연한 초록, 미구현 시 기본색; 저자는 `<mark>`만; 문단당 1~2곳). 산문 `<mark>`(글) ↔ 악보 `role:target`(초록 음 점) 혼용 금지, 악보 음은 역할·도수로. `**볼드**` 병용.
- JSON을 설명 산문 바로 아래(4현→5현), 각 악보 밑 `▶ 연주 안내 한 줄` 필수.
- ①이론 국어 500~700자(4/5 설명 시 더), 3언어 동일 밀도, 토스 톤 4요소. 비유 예: 16비트=하이햇 16칸. 긁지 않기.

# 표준 JSON 스키마 · 필드 규약
- id: `"m2.w5.d{일}.슬러그_4|_5"`. type: `fretboard_diagram` | `tab`. meta: `{ title, instrument:"bass", stringCount:4|5, tuning, key?, tempoBpm?, notation:"staff+tab" }`. ⛔ `"rhythm"`.
- 현 번호 4현 4~1/5현 5~1. 도수 label에만. 썸=`slap_thumb`·팝=`slap_pop`·고스트=`dead_note`. 16분=`"sixteenth"`. duration 문자열만. role root/chord_tone→파랑, target→초록. ⛔ 빨강 없음.

# 이번 주차 목표 (2개월차 5주차)
**16비트 싱코페이션 — 스트레이트 16 그리드에 T/P/고스트를 얹어 펑크 그루브를 만든다.**
핵심 메시지: "M1 그루브가 8분이었다면, 펑크는 <mark>16비트</mark>예요. 한 박을 넷으로 쪼갠 격자에 썸·팝·고스트를 <mark>당겨(싱코페이션)</mark> 배치하면 그루브가 앞으로 굴러가요."

# 4일 커리큘럼 설계 지침
- **D1** 16분 그리드 세기(1-e-&-a) + 썸 16분. 완성: 16분 썸 균일.
- **D2** T/P/고스트를 16칸에 배치. 완성: 16 그리드 T-고스트-P.
- **D3** 당김음(싱코페이션) — 강세를 뒤로 밀기. 완성: 싱코 느낌.
- **D4** 16 싱코 그루브. 완성: 아래 핀 고정 그루브(4·5현).

# [핀 고정] 이번 주 완성물 — 16비트 싱코 슬랩 그루브 (창작 금지, 4·5현 두 블록 모두 day_4에)
> E 옥타브 + 16분 싱코페이션(팝 뒤에 16분 푸시). **5현 블록 = 음 동일, meta만 `"stringCount":5, "tuning":["B","E","A","D","G"]`, id→`_5`.**
```json
{
  "id": "m2.w5.d4.sixteenth_synco_4",
  "type": "tab",
  "meta": { "title": "16th syncopated slap groove — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 80(느리게 시작).** 3박 근처의 <mark>16분 푸시</mark>(썸이 살짝 당겨 들어옴)가 싱코페이션의 맛. 고스트로 사이를 채워 계속 굴러가게. **5현이라면** 저음 B 대안.

# 데일리 50분 루틴 (③)
- 0~10 워밍업 / 10~20 두뇌(16 그리드 느리게) / 20~40 실전(위 그루브, BPM 지정) / 40~50 녹음·피드백(싱코 살아있나 / 고스트 사는가). ※20~40은 위 그루브 소재.

# 오늘의 완료 기준 명시
- 각 day 끝 "오늘의 완료 기준:". day_4엔 (5주차 완성!) 병기.

# 출력 지시
day_1.md ~ day_4.md 4개를 4단 구성·프론트매터(`title`/`dayKey:"m2.w5.dN"`/`estMinutes:50`/`i18nKey:"lesson.m2.w5.dN"`)·**모든 시각자료 4현+5현 병행**을 지켜 생성하십시오. 지금 시작하십시오.
