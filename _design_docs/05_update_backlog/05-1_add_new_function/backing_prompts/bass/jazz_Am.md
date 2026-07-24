# 배킹 프롬프트 — 베이스 · 재즈 ii-V-i (마이너) · Am

- **스케일 라벨:** A harmonic minor (E7♭9 위) / A natural minor · A minor pentatonic (Am7 위)
- **베이스 연습 포인트:** **마이너 워킹**. Bm7♭5의 ♭5(F)와 E7♭9의 G♯(리딩톤)을 라인에 넣어 Am7 루트로 착지하는 감각.
- **폼:** 16마디 (4마디 마이너 ii-V-i 사이클 × 4회, 마지막 마디만 턴어라운드, 4/4 미디엄 스윙)
- **제외 파트:** **베이스 전면 제외** (드럼 + 피아노 컴핑만). 색소폰·트럼펫 등 멜로디 악기, 보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** 공통 Am(`solo_scale_3months` W8 ii-V-i 가이드톤 F→B→E = Bm7♭5–E7–Am7) · `walking_bass_2months` 마이너 확장.

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(16마디) 길이 | 예상 용량 |
|---|---|---|---|
| `jazz_Am_100.m4a` | 100 | 38.4s | ~0.61 MB |
| `jazz_Am_130.m4a` | 130 | 29.5s | ~0.47 MB |
| `jazz_Am_160.m4a` | 160 | 24.0s | ~0.38 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental straight-ahead minor jazz backing track in A minor, with absolutely no bass, no vocals, no melody instrument.
Medium swing at exactly {BPM} BPM, 4/4, swung eighth notes, moody minor jazz-club feel.
Only drums and piano comping: acoustic jazz drum kit playing a steady ride cymbal swing pattern with brushes-and-sticks feel, hi-hat on 2 and 4, very light comping on snare; sparse acoustic jazz piano comping rootless voicings with altered tensions on the dominant, right hand in the middle register, leaving lots of space between chords.
No bass instrument of any kind — no upright bass, no double bass, no electric bass, no synth bass, no left-hand piano bass notes, no stride left hand. The entire low register stays empty for a bass player to walk in.
Repeating four-bar minor two-five-one in A minor: one bar of B half-diminished (B minor 7 flat 5), one bar of E dominant 7 flat 9, two bars of A minor 7 — repeated four times for sixteen bars, with the very last bar replaced by two beats of B minor 7 flat 5 and two beats of E dominant 7 flat 9 as a turnaround back to the top.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no head melody, no key change, no tempo change, no solos, no trading fours.
Dry natural jazz-club mix, drums centered, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, scat singing, bass, bass guitar, upright bass, double bass, electric bass, synth bass, stride piano, lead guitar, guitar solo, saxophone, trumpet, flute, melody line, head melody, drum solo, fade in, fade out, intro, outro, tempo change, key change, latin, bossa nova
```

## 코드 진행 (마이너 ii-V-i in Am)

```
| Bm7♭5 | E7♭9 | Am7 | Am7 |          (× 3회 = 12마디)
| Bm7♭5 | E7♭9 | Am7 | Bm7♭5  E7♭9 |   (13~16마디 · 마지막 마디 = 턴어라운드)
```

- 워킹 재료 — 루트: B→E→A. 코드톤: Bm7♭5 = B·D·**F**·A / E7♭9 = E·**G♯**·B·D(+F) / Am7 = A·C·E·G.
- **G♯(리딩톤)** 이 마이너 ii-V-i의 색을 만드는 음. E7♭9 마디에서 G♯을 지나 Am7의 A로 반음 착지하면 라인이 확 살아난다.

## 비고 / 루프 트림 메모

- **피아노 왼손이 베이스 라인을 대신 걷는 테이크를 반드시 걸러낼 것** — 이 트랙군의 최대 실패 요인(`jazz_F.md`와 동일).
- **E7♭9의 얼터드 텐션이 실제로 들리는** 테이크를 고를 것. 그냥 Em7으로 나오면 마이너 ii-V-i가 성립하지 않는다 → **마디 2·14를 직접 듣는다.**
- **헤드 멜로디가 없는** 테이크를 고를 것. 드럼이 투비트로 바뀌지 않는지 확인.
- 트림 기준점은 **1마디 1박 라이드 어택 + 피아노 컴핑**. 라이드 잔향은 짧은 크로스페이드.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `jazz_Am_100.m4a` | | | ☐ | |
| `jazz_Am_130.m4a` | | | ☐ | |
| `jazz_Am_160.m4a` | | | ☐ | |
