# 배킹 프롬프트 — 베이스 · 재즈 ii-V-I · F

- **스케일 라벨:** F major (Ionian) / G Dorian (Gm7) / C Mixolydian (C7)
- **베이스 연습 포인트:** ★ **워킹 베이스의 정본 트랙.** 각 코드 1박에 루트 → 코드톤·경과음·크로매틱 어프로치로 4분음표를 걸어 다음 코드 루트에 착지.
- **폼:** 16마디 (4마디 ii-V-I 사이클 × 4회, 마지막 마디만 턴어라운드, 4/4 미디엄 스윙)
- **제외 파트:** **베이스 전면 제외** (드럼 + 피아노 컴핑만). 색소폰·트럼펫 등 멜로디 악기, 보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** ★ **`walking_bass_2months`(F) 정본 조**. **베이스 세트 1순위 트랙** — 베이스가 빠진 드럼+피아노 구성이 워킹 연습의 표준 포맷이다.

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(16마디) 길이 | 예상 용량 |
|---|---|---|---|
| `jazz_F_100.m4a` | 100 | 38.4s | ~0.61 MB |
| `jazz_F_130.m4a` | 130 | 29.5s | ~0.47 MB |
| `jazz_F_160.m4a` | 160 | 24.0s | ~0.38 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental straight-ahead jazz backing track in F major, with absolutely no bass, no vocals, no melody instrument.
Medium swing at exactly {BPM} BPM, 4/4, swung eighth notes, relaxed jazz-club feel.
Only drums and piano comping: acoustic jazz drum kit playing a steady ride cymbal swing pattern with brushes-and-sticks feel, hi-hat on 2 and 4, very light comping on snare; sparse acoustic jazz piano comping rootless seventh and ninth voicings with the right hand in the middle register, leaving lots of space between chords.
No bass instrument of any kind — no upright bass, no double bass, no electric bass, no synth bass, no left-hand piano bass notes, no stride left hand. The entire low register stays empty for a bass player to walk in.
Repeating four-bar two-five-one in F: one bar of G minor 7, one bar of C dominant 7, two bars of F major 7 — repeated four times for sixteen bars, with the very last bar replaced by two beats of G minor 7 and two beats of C dominant 7 as a turnaround back to the top.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no head melody, no key change, no tempo change, no solos, no trading fours.
Dry natural jazz-club mix, drums centered, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, scat singing, bass, bass guitar, upright bass, double bass, electric bass, synth bass, stride piano, lead guitar, guitar solo, saxophone, trumpet, flute, melody line, head melody, drum solo, fade in, fade out, intro, outro, tempo change, key change, latin, bossa nova
```

## 코드 진행 (ii-V-I in F)

```
| Gm7 | C7 | Fmaj7 | Fmaj7 |   (× 3회 = 12마디)
| Gm7 | C7 | Fmaj7 | Gm7  C7 |   (13~16마디 · 마지막 마디 = 턴어라운드)
```

- 워킹 재료 — 루트: G→C→F. 코드톤: Gm7 = G·B♭·D·F / C7 = C·E·G·B♭ / Fmaj7 = F·A·C·E.
- 크로매틱 어프로치: 다음 루트의 반음 위/아래에서 진입(예: C7 마지막 박 F♯ 또는 G♭ → Fmaj7의 F).

## 비고 / 루프 트림 메모

- **피아노 왼손이 베이스 라인을 대신 걷는 테이크가 자주 나온다.** 프롬프트에 `rootless voicings, right hand, no left-hand piano bass notes, no stride left hand` 를 넣었지만 반드시 확인할 것 — **이 트랙군의 최대 실패 요인**이고, 남아 있으면 워킹 연습 자체가 불가능해진다.
- **헤드 멜로디가 없는** 테이크를 골라야 한다. Suno는 재즈 프롬프트에 색소폰/트럼펫 테마를 얹는 경향이 강하다.
- 드럼이 도중에 투비트(2박)로 바뀌면 루프 이음새에서 필이 튄다 → 일정한 스윙 라이드 유지 확인.
- 트림 기준점은 **1마디 1박 라이드 어택 + 피아노 컴핑**. 베이스가 없어 저역 기준점이 없으니 라이드를 기준으로 잡는다.
- 라이드 심벌 잔향이 끝에 남으면 짧은 크로스페이드. 보사노바/라틴으로 흘러간 테이크는 폐기.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `jazz_F_100.m4a` | | | ☐ | |
| `jazz_F_130.m4a` | | | ☐ | |
| `jazz_F_160.m4a` | | | ☐ | |
