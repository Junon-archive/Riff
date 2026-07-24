# 배킹 프롬프트 — 기타 · 펑크 · Em

- **스케일 라벨:** E minor pentatonic / E Dorian · E Mixolydian(♭7) — E9 도미넌트 뱀프라 마이너/도미넌트 양쪽이 다 맞는다
- **폼:** 16마디 (8마디 사이클 × 2회, 4/4, 16분음표 그루브)
- **제외 파트:** 리드 기타 제외 (드럼 + 베이스 + 커팅/컴핑만).
- **커리큘럼 연계:** `funk_rhythm_2months`(**E9** — 커리큘럼 원본에서 확인) · `slap_funk_bass_2months`(Em). **펑크 커리큘럼의 주력 조.**

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(16마디) 길이 | 예상 용량 |
|---|---|---|---|
| `funk_Em_90.m4a` | 90 | 42.7s | ~0.68 MB |
| `funk_Em_100.m4a` | 100 | 38.4s | ~0.61 MB |
| `funk_Em_110.m4a` | 110 | 34.9s | ~0.56 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental classic funk backing track in E, no vocals, no lead guitar, no guitar solo.
Tight sixteenth-note James Brown style funk groove at exactly {BPM} BPM, 4/4, deep in the pocket, straight not swung.
Rhythm section only: dry tight drum kit with crisp snare on 2 and 4, ghost notes and closed sixteenth-note hi-hat; syncopated fingerstyle electric bass sixteenth-note groove locked to the kick; clean single-coil rhythm guitar playing muted percussive sixteenth-note chank on an E9 voicing; subtle Clavinet-style clean keys accents in the background.
Repeating eight-bar vamp: six bars of E9, then two bars of A9 — played twice for sixteen bars, identical both times.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no drop, no horn stabs, no key change, no tempo change, no melody line, no solos.
Dry punchy funk mix, guitar chank panned to one side, center and midrange left open for a soloist to play over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, lead guitar, guitar solo, horn section, saxophone solo, synth lead, melody line, fade in, fade out, intro, outro, build up, breakdown, drop, tempo change, key change
```

## 코드 진행 (in E — 도미넌트 펑크 뱀프)

```
| E9 | E9 | E9 | E9 | E9 | E9 | A9 | A9 |   (× 2회 = 16마디)
```

- E9 원코드 뱀프 = 펑크의 정석. **E 마이너 펜타(블루지)와 E 믹솔리디안(♭7, 코드 그대로)** 둘 다 성립하는 게 이 트랙의 학습 포인트.
- A9 두 마디는 IV로 잠깐 나갔다 돌아오는 숨구멍이자 루프 이음새 직전의 표지.
- `funk_Am.md`와 6+2 구조 동일 — 조만 옮겨 같은 감각을 반복 연습.

## 비고 / 루프 트림 메모

- E9의 **9음·♭7이 실제로 들리는** 테이크를 골라야 한다(그냥 E5/Em7로 나오면 펑크 색이 죽는다).
- 원코드 구간이 길어 Suno가 필/전조를 끼워 넣기 쉬움 → 6+2 구조가 두 번 그대로 반복되는 구간 선별.
- 트림 기준점은 **1마디 1박 E9의 어택**. 16분 그루브는 위상 어긋남이 바로 들리므로 제로크로싱 정렬 정확히.
- 혼 섹션 스탭이 새어 들어온 테이크는 폐기.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `funk_Em_90.m4a` | | | ☐ | |
| `funk_Em_100.m4a` | | | ☐ | |
| `funk_Em_110.m4a` | | | ☐ | |
