# 배킹 프롬프트 — 기타 · 재즈 ii-V-I · F

- **스케일 라벨:** F major (Ionian) / G Dorian (Gm7) / C Mixolydian (C7)
- **폼:** 16마디 (4마디 ii-V-I 사이클 × 4회, 마지막 마디만 턴어라운드, 4/4 미디엄 스윙)
- **제외 파트:** 리드 기타 제외 (드럼 + 워킹 베이스 + 피아노/아치탑 컴핑만). 색소폰·트럼펫 등 멜로디 악기도 제외.
- **커리큘럼 연계:** `walking_bass_2months`(**F** — 워킹 베이스의 기본 조). 베이스 학습자에게는 워킹 라인 대조용, 기타 학습자에게는 플랫 계열 조 적응용.

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
Instrumental straight-ahead jazz backing track in F major, no vocals, no lead guitar, no melody instrument.
Medium swing at exactly {BPM} BPM, 4/4, swung eighth notes, relaxed jazz-club feel.
Rhythm section only: acoustic jazz drum kit playing a steady ride cymbal swing pattern with brushes-and-sticks feel, hi-hat on 2 and 4, very light comping on snare; upright double bass walking quarter notes through the changes; sparse acoustic jazz piano comping rootless seventh and ninth voicings, leaving lots of space between chords.
Repeating four-bar two-five-one in F: one bar of G minor 7, one bar of C dominant 7, two bars of F major 7 — repeated four times for sixteen bars, with the very last bar replaced by two beats of G minor 7 and two beats of C dominant 7 as a turnaround back to the top.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no head melody, no key change, no tempo change, no solos, no trading fours.
Dry natural jazz-club mix, bass and drums centered, midrange left wide open for a soloist to play over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, scat singing, lead guitar, guitar solo, saxophone, trumpet, flute, melody line, head melody, drum solo, fade in, fade out, intro, outro, tempo change, key change, latin, bossa nova
```

## 코드 진행 (ii-V-I in F)

```
| Gm7 | C7 | Fmaj7 | Fmaj7 |   (× 3회 = 12마디)
| Gm7 | C7 | Fmaj7 | Gm7  C7 |   (13~16마디 · 마지막 마디 = 턴어라운드)
```

- 가이드톤(3도·7도) 라인: Gm7의 B♭–F → C7의 B♭–E → Fmaj7의 A–E. `jazz_C.md`와 **완전히 같은 모양을 5도 아래로 옮긴 것** — 같은 손 모양이 다른 조에서 어떻게 움직이는지 대조 연습.

## 비고 / 루프 트림 메모

- `jazz_C.md`와 트림 원칙 동일. 헤드 멜로디 없는 테이크, 일정한 워킹 4분음표 확인.
- 트림 기준점은 **1마디 1박 Gm7의 베이스 어택**.
- F는 플랫 계열이라 Suno가 인접 조(B♭ 등)로 흘러가는 경우가 있다 → **Fmaj7으로 확실히 해결되는지** 청감 확인.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `jazz_F_100.m4a` | | | ☐ | |
| `jazz_F_130.m4a` | | | ☐ | |
| `jazz_F_160.m4a` | | | ☐ | |
