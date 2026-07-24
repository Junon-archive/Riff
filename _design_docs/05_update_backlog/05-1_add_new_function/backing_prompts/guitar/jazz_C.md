# 배킹 프롬프트 — 기타 · 재즈 ii-V-I · C

- **스케일 라벨:** C major (Ionian) / D Dorian (Dm7) / G Mixolydian (G7) — 한 스케일로 다 되지만 **코드마다 색이 바뀐다**는 걸 듣는 게 목표
- **폼:** 16마디 (4마디 ii-V-I 사이클 × 4회, 마지막 마디만 턴어라운드, 4/4 미디엄 스윙)
- **제외 파트:** 리드 기타 제외 (드럼 + 워킹 베이스 + 피아노/아치탑 컴핑만). 색소폰·트럼펫 등 멜로디 악기도 제외.
- **커리큘럼 연계:** `chord_building_2months`(**Cmaj** — 커리큘럼 원본에서 확인) · `solo_scale_3months` W8(ii-V-I 가이드톤).

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
Instrumental straight-ahead jazz backing track in C major, no vocals, no lead guitar, no melody instrument.
Medium swing at exactly {BPM} BPM, 4/4, swung eighth notes, relaxed jazz-club feel.
Rhythm section only: acoustic jazz drum kit playing a steady ride cymbal swing pattern with brushes-and-sticks feel, hi-hat on 2 and 4, very light comping on snare; upright double bass walking quarter notes through the changes; sparse acoustic jazz piano comping rootless seventh and ninth voicings, leaving lots of space between chords.
Repeating four-bar two-five-one in C: one bar of D minor 7, one bar of G dominant 7, two bars of C major 7 — repeated four times for sixteen bars, with the very last bar replaced by two beats of D minor 7 and two beats of G dominant 7 as a turnaround back to the top.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no head melody, no key change, no tempo change, no solos, no trading fours.
Dry natural jazz-club mix, bass and drums centered, midrange left wide open for a soloist to play over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, scat singing, lead guitar, guitar solo, saxophone, trumpet, flute, melody line, head melody, drum solo, fade in, fade out, intro, outro, tempo change, key change, latin, bossa nova
```

## 코드 진행 (ii-V-I in C)

```
| Dm7 | G7 | Cmaj7 | Cmaj7 |   (× 3회 = 12마디)
| Dm7 | G7 | Cmaj7 | Dm7  G7 |   (13~16마디 · 마지막 마디 = 턴어라운드)
```

- 재즈의 가장 기본 진행. **가이드톤(3도·7도) 라인**: Dm7의 F–C → G7의 F–B → Cmaj7의 E–B. 반음/공통음으로 이어지는 이 이동을 겨냥하는 게 연습 목표.
- 16마디째 `Dm7 G7` 턴어라운드가 루프 이음새를 음악적으로 자연스럽게 만든다.

## 비고 / 루프 트림 메모

- **헤드 멜로디가 없는** 테이크를 골라야 한다. Suno는 재즈 프롬프트에 색소폰/트럼펫 테마를 얹는 경향이 강하다 → 제외 스타일에 명시했지만 생성물 확인 필수.
- 워킹 베이스가 **일정한 4분음표**를 유지하는지 확인. 도중에 투비트(2박)로 바뀌면 루프 이음새에서 필이 튄다.
- 트림 기준점은 **1마디 1박 Dm7의 베이스 어택**. 라이드 심벌 잔향이 끝에 남으면 짧은 크로스페이드.
- 보사노바/라틴으로 흘러가는 테이크는 폐기(제외 스타일에 포함).

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `jazz_C_100.m4a` | | | ☐ | |
| `jazz_C_130.m4a` | | | ☐ | |
| `jazz_C_160.m4a` | | | ☐ | |
