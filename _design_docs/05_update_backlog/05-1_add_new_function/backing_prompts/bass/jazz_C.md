# 배킹 프롬프트 — 베이스 · 재즈 ii-V-I · C

- **스케일 라벨:** C major (Ionian) / D Dorian (Dm7) / G Mixolydian (G7)
- **베이스 연습 포인트:** 워킹 베이스를 **가장 쉬운 조(♯·♭ 0개)** 에서. F조(`jazz_F.md`)에서 익힌 손 모양을 다른 조로 옮기는 대조 연습.
- **폼:** 16마디 (4마디 ii-V-I 사이클 × 4회, 마지막 마디만 턴어라운드, 4/4 미디엄 스윙)
- **제외 파트:** **베이스 전면 제외** (드럼 + 피아노 컴핑만). 색소폰·트럼펫 등 멜로디 악기, 보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** `walking_bass_2months` 확장 조 · `chord_building_2months`(Cmaj — 커리큘럼 원본 확인).

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(16마디) 길이 | 예상 용량 |
|---|---|---|---|
| `jazz_C_100.m4a` | 100 | 38.4s | ~0.61 MB |
| `jazz_C_130.m4a` | 130 | 29.5s | ~0.47 MB |
| `jazz_C_160.m4a` | 160 | 24.0s | ~0.38 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental straight-ahead jazz backing track in C major, with absolutely no bass, no vocals, no melody instrument.
Medium swing at exactly {BPM} BPM, 4/4, swung eighth notes, relaxed jazz-club feel.
Only drums and piano comping: acoustic jazz drum kit playing a steady ride cymbal swing pattern with brushes-and-sticks feel, hi-hat on 2 and 4, very light comping on snare; sparse acoustic jazz piano comping rootless seventh and ninth voicings with the right hand in the middle register, leaving lots of space between chords.
No bass instrument of any kind — no upright bass, no double bass, no electric bass, no synth bass, no left-hand piano bass notes, no stride left hand. The entire low register stays empty for a bass player to walk in.
Repeating four-bar two-five-one in C: one bar of D minor 7, one bar of G dominant 7, two bars of C major 7 — repeated four times for sixteen bars, with the very last bar replaced by two beats of D minor 7 and two beats of G dominant 7 as a turnaround back to the top.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no head melody, no key change, no tempo change, no solos, no trading fours.
Dry natural jazz-club mix, drums centered, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, scat singing, bass, bass guitar, upright bass, double bass, electric bass, synth bass, stride piano, lead guitar, guitar solo, saxophone, trumpet, flute, melody line, head melody, drum solo, fade in, fade out, intro, outro, tempo change, key change, latin, bossa nova
```

## 코드 진행 (ii-V-I in C)

```
| Dm7 | G7 | Cmaj7 | Cmaj7 |   (× 3회 = 12마디)
| Dm7 | G7 | Cmaj7 | Dm7  G7 |   (13~16마디 · 마지막 마디 = 턴어라운드)
```

- 워킹 재료 — 루트: D→G→C. 코드톤: Dm7 = D·F·A·C / G7 = G·B·D·F / Cmaj7 = C·E·G·B.
- `jazz_F.md`와 **완전히 같은 모양을 5도 위로 옮긴 것** — 손 모양이 조에 따라 어떻게 움직이는지 대조.

## 비고 / 루프 트림 메모

- **피아노 왼손이 베이스 라인을 대신 걷는 테이크를 반드시 걸러낼 것** — 이 트랙군의 최대 실패 요인(`jazz_F.md`와 동일).
- **헤드 멜로디가 없는** 테이크를 고를 것(색소폰/트럼펫 테마 주의).
- 드럼이 도중에 투비트로 바뀌지 않는지 확인.
- 트림 기준점은 **1마디 1박 라이드 어택 + 피아노 컴핑**. 라이드 잔향은 짧은 크로스페이드.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `jazz_C_100.m4a` | | | ☐ | |
| `jazz_C_130.m4a` | | | ☐ | |
| `jazz_C_160.m4a` | | | ☐ | |
