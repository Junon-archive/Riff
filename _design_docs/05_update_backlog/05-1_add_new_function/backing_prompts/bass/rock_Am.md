# 배킹 프롬프트 — 베이스 · 락/팝 · Am

- **스케일 라벨:** A minor pentatonic / A natural minor (Aeolian)
- **베이스 연습 포인트:** Am–F–C–G의 **루트 이동 + 경과음(passing note)** 으로 다음 코드 루트에 착지하기. 8분음표 드라이빙 라인.
- **폼:** 16마디 (4마디 진행 × 4회, 4/4, 스트레이트 8분)
- **제외 파트:** **베이스 전면 제외** (드럼 + 중음역 코드 컴핑만). 리드 기타·보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** 공통 Am(전 장르 공통 조 원칙 — solo/scale 기반). 베이스 학습자의 마이너 키 루트 워크 기본기.

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(16마디) 길이 | 예상 용량 |
|---|---|---|---|
| `rock_Am_80.m4a` | 80 | 48.0s | ~0.77 MB |
| `rock_Am_110.m4a` | 110 | 34.9s | ~0.56 MB |
| `rock_Am_140.m4a` | 140 | 27.4s | ~0.44 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental rock and pop backing track in the key of A minor, with absolutely no bass, no vocals, no lead guitar, no guitar solo.
Driving straight-eighth rock groove at exactly {BPM} BPM, 4/4, no swing.
Only drums and mid-register chord comping: punchy acoustic drum kit with solid snare on 2 and 4 and steady eighth-note hi-hat; crunchy overdriven rhythm electric guitar strumming A minor, F, C and G in the middle register on the higher strings, plus a quiet clean guitar layer doubling the changes in the same register.
No bass instrument of any kind — no electric bass, no upright bass, no synth bass, no sub bass, no low octave doubling on guitar. The entire low register stays empty for a bass player to fill in.
Repeating four-bar progression: A minor, F major, C major, G major — the same four bars over and over for sixteen bars, identical every cycle.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no drop, no key change, no tempo change, no melody line, no solos.
Dry modern rock mix, guitars panned wide, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, bass, bass guitar, electric bass, synth bass, sub bass, 808, lead guitar, guitar solo, synth lead, melody line, fade in, fade out, intro, outro, build up, breakdown, drop, tempo change, key change
```

## 코드 진행 (in A minor)

```
| Am | F | C | G |   (× 4회 = 16마디)
```

- i–♭VI–♭III–♭VII. 루트 이동 A→F→C→G.
- 경과음 연습: A→F는 3도 하행(A–G–F), F→C는 F–G–A–B♭ 또는 F–E–D–C, C→G는 C–B–A–G.

## 비고 / 루프 트림 메모

- **Exclude에 `bass` 를 넣으면 킥까지 얇아진 테이크가 나올 수 있다.** 킥이 살아 있는 테이크를 고를 것.
- 락은 기타가 **저음현 파워코드**로 저역을 채우기 쉽다. 미드 레지스터로 올라온 테이크를 골라야 베이스 자리가 남는다.
- 4마디 진행이 네 번 똑같이 반복되고 **다이내믹이 평평한** 16마디를 선별(빌드업 주의).
- 트림 기준점은 **1마디 1박 드럼 어택**.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `rock_Am_80.m4a` | | | ☐ | |
| `rock_Am_110.m4a` | | | ☐ | |
| `rock_Am_140.m4a` | | | ☐ | |
