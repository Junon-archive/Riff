# 배킹 프롬프트 — 기타 · 재즈 ii-V-i (마이너) · Am

- **스케일 라벨:** A harmonic minor (E7♭9 위) / A natural minor · A minor pentatonic (Am7 위)
- **폼:** 16마디 (4마디 마이너 ii-V-i 사이클 × 4회, 마지막 마디만 턴어라운드, 4/4 미디엄 스윙)
- **제외 파트:** 리드 기타 제외 (드럼 + 워킹 베이스 + 피아노/아치탑 컴핑만). 색소폰·트럼펫 등 멜로디 악기도 제외.
- **커리큘럼 연계:** `solo_scale_3months` W8(**ii-V-I 가이드톤 F→B→E** = Bm7♭5–E7–Am7의 마이너 ii-V-i). Am 기반 커리큘럼의 재즈 확장 트랙.

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
Instrumental straight-ahead minor jazz backing track in A minor, no vocals, no lead guitar, no melody instrument.
Medium swing at exactly {BPM} BPM, 4/4, swung eighth notes, moody minor jazz-club feel.
Rhythm section only: acoustic jazz drum kit playing a steady ride cymbal swing pattern with brushes-and-sticks feel, hi-hat on 2 and 4, very light comping on snare; upright double bass walking quarter notes through the changes; sparse acoustic jazz piano comping rootless voicings with altered tensions on the dominant, leaving lots of space between chords.
Repeating four-bar minor two-five-one in A minor: one bar of B half-diminished (B minor 7 flat 5), one bar of E dominant 7 flat 9, two bars of A minor 7 — repeated four times for sixteen bars, with the very last bar replaced by two beats of B minor 7 flat 5 and two beats of E dominant 7 flat 9 as a turnaround back to the top.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no head melody, no key change, no tempo change, no solos, no trading fours.
Dry natural jazz-club mix, bass and drums centered, midrange left wide open for a soloist to play over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, scat singing, lead guitar, guitar solo, saxophone, trumpet, flute, melody line, head melody, drum solo, fade in, fade out, intro, outro, tempo change, key change, latin, bossa nova
```

## 코드 진행 (마이너 ii-V-i in Am)

```
| Bm7♭5 | E7♭9 | Am7 | Am7 |        (× 3회 = 12마디)
| Bm7♭5 | E7♭9 | Am7 | Bm7♭5  E7♭9 |  (13~16마디 · 마지막 마디 = 턴어라운드)
```

- 가이드톤(3도·7도) 라인: Bm7♭5의 D–A → E7♭9의 G♯–D → Am7의 C–G. **E7♭9의 G♯(리딩톤)** 이 마이너 ii-V-i의 색을 만드는 음 — 여기서 A 하모닉 마이너가 등장한다.
- Am7 두 마디는 A 마이너 펜타로 편하게 놀 수 있는 구간. **"펜타로 놀다가 E7♭9에서 G♯ 하나 짚기"** 가 이 트랙의 학습 목표.

## 비고 / 루프 트림 메모

- **E7♭9의 얼터드 텐션이 실제로 들리는** 테이크를 고를 것. 그냥 Em7으로 나오면 마이너 ii-V-i가 성립하지 않는다(가장 흔한 실패 케이스 → 마디 2·14를 반드시 청감 확인).
- `jazz_C.md`와 나머지 트림 원칙 동일: 헤드 멜로디 없음, 일정한 워킹 4분음표, 라이드 잔향 크로스페이드.
- 트림 기준점은 **1마디 1박 Bm7♭5의 베이스 어택**.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `jazz_Am_100.m4a` | | | ☐ | |
| `jazz_Am_130.m4a` | | | ☐ | |
| `jazz_Am_160.m4a` | | | ☐ | |
