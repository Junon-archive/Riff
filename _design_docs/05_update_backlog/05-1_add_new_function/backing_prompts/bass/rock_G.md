# 배킹 프롬프트 — 베이스 · 락/팝 · G

- **스케일 라벨:** G major pentatonic / G major (Ionian) — 상대 단조 E 마이너 펜타도 그대로 맞음
- **베이스 연습 포인트:** G–D–Em–C **메이저 키 루트 워크**. 마이너 조 트랙들과 대비되는 밝은 톤에서 루트·5도·경과음을 잡는 연습.
- **폼:** 16마디 (4마디 진행 × 4회, 4/4, 스트레이트 8분)
- **제외 파트:** **베이스 전면 제외** (드럼 + 중음역 코드 컴핑만). 리드 기타·보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** 팝 스테이플 조(`chord_building_2months`의 C·G와 공유). 베이스 학습자에게는 **메이저 키 루트 라인** 훈련용.

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(16마디) 길이 | 예상 용량 |
|---|---|---|---|
| `rock_G_80.m4a` | 80 | 48.0s | ~0.77 MB |
| `rock_G_110.m4a` | 110 | 34.9s | ~0.56 MB |
| `rock_G_140.m4a` | 140 | 27.4s | ~0.44 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental pop rock backing track in the key of G major, with absolutely no bass, no vocals, no lead guitar, no guitar solo.
Bright uplifting straight-eighth pop rock groove at exactly {BPM} BPM, 4/4, no swing.
Only drums and mid-register chord comping: clean punchy acoustic drum kit with snare on 2 and 4 and steady eighth-note hi-hat; jangly clean electric rhythm guitar strumming G, D, E minor and C in the middle and upper register, plus a light acoustic guitar strumming layer doubling the changes in the same register.
No bass instrument of any kind — no electric bass, no upright bass, no synth bass, no sub bass, no low octave doubling on guitar. The entire low register stays empty for a bass player to fill in.
Repeating four-bar progression: G major, D major, E minor, C major — the same four bars over and over for sixteen bars, identical every cycle.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no drop, no key change, no tempo change, no melody line, no solos.
Dry bright pop mix, strummed guitars panned wide, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, bass, bass guitar, electric bass, synth bass, sub bass, 808, lead guitar, guitar solo, synth lead, melody line, strings section, fade in, fade out, intro, outro, build up, breakdown, drop, tempo change, key change
```

## 코드 진행 (in G major)

```
| G | D | Em | C |   (× 4회 = 16마디)
```

- I–V–vi–IV. 루트 이동 G→D→E→C.
- 경과음 연습: G→D는 G–A–B–C♯ 또는 G–F♯–E–D, D→Em은 반음 상행(D–D♯–E), Em→C는 E–D–C.

## 비고 / 루프 트림 메모

- 팝 프로덕션 특성상 Suno가 **스트링/신스 패드·보컬 훅**을 얹기 쉽다. 드럼 + 컴핑만 남은 테이크를 고를 것.
- **Exclude에 `bass` 를 넣으면 킥까지 얇아진 테이크가 나올 수 있다.** 킥이 살아 있는 테이크를 고를 것.
- 어쿠스틱 스트러밍이 저역까지 두껍게 깔린 테이크는 폐기 — 베이스 자리가 남아야 한다.
- 트림 기준점은 **1마디 1박 드럼 어택**. 16마디 C 끝 → 1마디 G 복귀가 매끄러운지 확인.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `rock_G_80.m4a` | | | ☐ | |
| `rock_G_110.m4a` | | | ☐ | |
| `rock_G_140.m4a` | | | ☐ | |
