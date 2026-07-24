# 배킹 프롬프트 — 베이스 · 락/팝 · E

- **스케일 라벨:** E minor pentatonic (파워코드 록 — 3음이 없어 마이너/블루지 양쪽이 다 맞음)
- **베이스 연습 포인트:** E–G–D–A **루트 8분음표 드라이빙**. 개방현 E 루트 기준 포지션 이동. 입문자가 루트만 짚어도 곡이 되는 트랙.
- **폼:** 16마디 (4마디 진행 × 4회, 4/4, 스트레이트 8분)
- **제외 파트:** **베이스 전면 제외** (드럼 + 중음역 파워코드 컴핑만). 리드 기타·보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** ★ **`beginner_bass_1month`(E) 정본 조**. **베이스 세트 1순위 트랙.**

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(16마디) 길이 | 예상 용량 |
|---|---|---|---|
| `rock_E_80.m4a` | 80 | 48.0s | ~0.77 MB |
| `rock_E_110.m4a` | 110 | 34.9s | ~0.56 MB |
| `rock_E_140.m4a` | 140 | 27.4s | ~0.44 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental power-chord rock backing track in the key of E, with absolutely no bass, no vocals, no lead guitar, no guitar solo.
Straight-ahead driving rock groove at exactly {BPM} BPM, 4/4, straight eighth notes, no swing.
Only drums and mid-register power chords: punchy acoustic drum kit with hard snare on 2 and 4 and steady eighth-note hi-hat; overdriven electric rhythm guitar playing palm-muted power chords voiced in the middle register on the A and D strings, no chord thirds, no arpeggios, no melody.
No bass instrument of any kind — no electric bass, no upright bass, no synth bass, no sub bass, and no low E string guitar riffing. The entire low register stays empty for a bass player to fill in.
Repeating four-bar progression of power chords: E5, G5, D5, A5 — the same four bars over and over for sixteen bars, identical every cycle.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no drop, no key change, no tempo change, no solos.
Dry garage-rock mix, rhythm guitars panned wide, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, bass, bass guitar, electric bass, synth bass, sub bass, 808, lead guitar, guitar solo, synth lead, melody line, fade in, fade out, intro, outro, build up, breakdown, drop, tempo change, key change
```

## 코드 진행 (파워코드 in E)

```
| E5 | G5 | D5 | A5 |   (× 4회 = 16마디)
```

- i–♭III–♭VII–IV. 루트 이동 E→G→D→A.
- **입문자는 루트를 온음표/4분음표로만 짚어도 성립**한다. 익숙해지면 8분 드라이빙 → 5도·옥타브 추가로 확장.

## 비고 / 루프 트림 메모

- **이 트랙이 베이스 세트에서 가장 까다롭다.** 파워코드 록은 본질적으로 저음역 사운드라, "no bass" 를 지켜도 기타가 저역을 다 먹는 테이크가 흔하다. → **미드 레지스터 파워코드 + 저역이 비어 있는 테이크**를 끈기 있게 고를 것. 재생성 여러 번을 각오하는 편이 좋다.
- **Exclude에 `bass` 를 넣으면 킥까지 얇아진 테이크가 나올 수 있다.** 킥은 반드시 살아 있어야 한다(입문자가 킥에 맞춰 루트를 짚는다).
- 3음이 든 풀 코드로 나온 테이크는 폐기(파워코드여야 마이너/메이저 양쪽 라인이 다 맞는다).
- 트림 기준점은 **1마디 1박 드럼 어택 + 팜뮤트 파워코드 어택**.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `rock_E_80.m4a` | | | ☐ | |
| `rock_E_110.m4a` | | | ☐ | |
| `rock_E_140.m4a` | | | ☐ | |
