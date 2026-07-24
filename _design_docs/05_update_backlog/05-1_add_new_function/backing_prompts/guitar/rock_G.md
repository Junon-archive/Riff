# 배킹 프롬프트 — 기타 · 락/팝 · G

- **스케일 라벨:** G major pentatonic / G major (Ionian) — 상대 단조 E 마이너 펜타도 그대로 맞음
- **폼:** 16마디 (4마디 진행 × 4회, 4/4, 스트레이트 8분)
- **제외 파트:** 리드 기타 제외 (드럼 + 베이스 + 코드 컴핑만).
- **커리큘럼 연계:** `chord_building_2months`(C·G 오픈 코드). **팝 스테이플 조** — 메이저 펜타토닉 연습과 나란한조(G↔Em) 감각을 익히는 트랙.

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
Instrumental pop rock backing track in the key of G major, no vocals, no lead guitar, no guitar solo.
Bright uplifting straight-eighth pop rock groove at exactly {BPM} BPM, 4/4, no swing.
Rhythm section only: clean punchy acoustic drum kit with snare on 2 and 4 and steady eighth-note hi-hat; melodic but simple electric bass following the root motion; jangly clean electric rhythm guitar strumming open chord voicings, plus a light acoustic guitar strumming layer doubling the changes.
Repeating four-bar progression: G major, D major, E minor, C major — the same four bars over and over for sixteen bars, identical every cycle.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no drop, no key change, no tempo change, no melody line, no solos.
Dry bright pop mix, strummed guitars panned wide, center and midrange left open for a soloist to play over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, lead guitar, guitar solo, synth lead, melody line, strings section, fade in, fade out, intro, outro, build up, breakdown, drop, tempo change, key change
```

## 코드 진행 (in G major)

```
| G | D | Em | C |   (× 4회 = 16마디)
```

- I–V–vi–IV. 팝의 표준 루프. **G 메이저 펜타토닉**이 전 구간에 맞고, 같은 지판을 **E 마이너 펜타**로 읽으면 나란한조 전환 감각(solo_scale W6)이 그대로 연습된다.
- 코드톤 타겟팅용 3도: G→B · D→F♯ · Em→G · C→E.

## 비고 / 루프 트림 메모

- 팝 프로덕션 특성상 Suno가 **스트링/신스 패드·보컬 훅**을 얹기 쉽다. 리듬 섹션만 남은 테이크를 고를 것.
- 어쿠스틱 스트러밍 레이어가 너무 앞에 나오면 솔로가 묻힌다 → 배경으로 물러난 테이크 선호.
- 트림 기준점은 **1마디 1박 G의 어택**. 16마디 C 끝 → 1마디 G 복귀가 매끄러운지 확인.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `rock_G_80.m4a` | | | ☐ | |
| `rock_G_110.m4a` | | | ☐ | |
| `rock_G_140.m4a` | | | ☐ | |
