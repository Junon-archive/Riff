# 배킹 프롬프트 — 기타 · 펑크 · Am

- **스케일 라벨:** A minor pentatonic / A Dorian (♮6 — D9 위에서 F♯이 살아난다)
- **폼:** 16마디 (8마디 사이클 × 2회, 4/4, 16분음표 그루브)
- **제외 파트:** 리드 기타 제외 (드럼 + 베이스 + 커팅/컴핑만).
- **커리큘럼 연계:** `solo_scale_3months`(Am 기반 · W9 도리안 ♮6). **도리안 색채를 몸으로 익히는 트랙** — Am7에 머물다 D9로 넘어가는 순간 ♮6(F♯)이 들린다.

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(16마디) 길이 | 예상 용량 |
|---|---|---|---|
| `funk_Am_90.m4a` | 90 | 42.7s | ~0.68 MB |
| `funk_Am_100.m4a` | 100 | 38.4s | ~0.61 MB |
| `funk_Am_110.m4a` | 110 | 34.9s | ~0.56 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental funk backing track in A minor, no vocals, no lead guitar, no guitar solo.
Tight sixteenth-note funk groove at exactly {BPM} BPM, 4/4, deep in the pocket, straight not swung.
Rhythm section only: dry tight drum kit with crisp snare on 2 and 4, ghost notes and closed sixteenth-note hi-hat; syncopated fingerstyle electric bass sixteenth-note groove locked to the kick; clean single-coil rhythm guitar playing muted percussive sixteenth-note chank on Am7 and D9 voicings; subtle Clavinet-style clean keys accents in the background.
Repeating eight-bar vamp: six bars of Am7, then two bars of D9 — played twice for sixteen bars, identical both times.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no drop, no horn stabs, no key change, no tempo change, no melody line, no solos.
Dry punchy funk mix, guitar chank panned to one side, center and midrange left open for a soloist to play over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, lead guitar, guitar solo, horn section, saxophone solo, synth lead, melody line, fade in, fade out, intro, outro, build up, breakdown, drop, tempo change, key change
```

## 코드 진행 (in A minor / A Dorian)

```
| Am7 | Am7 | Am7 | Am7 | Am7 | Am7 | D9 | D9 |   (× 2회 = 16마디)
```

- 원코드 도리안 뱀프. Am7 구간은 A 마이너 펜타로 편하게 놀고, **D9 두 마디에서 F♯(♮6)을 겨냥**하면 도리안 색이 확 산다.
- `funk_Em.md`와 정확히 같은 구조(6+2)를 조만 옮긴 것 — 두 트랙을 오가며 같은 감각을 다른 조로 옮기는 연습.

## 비고 / 루프 트림 메모

- 펑크는 **원코드 구간이 길어 Suno가 도중에 필/전조를 끼워 넣기 쉽다.** 6+2 구조가 두 번 그대로 반복되는 구간을 선별.
- 커팅 기타가 멜로디처럼 튀는 테이크는 폐기(솔로와 충돌). **퍼커시브한 챙크**로만 남아야 한다.
- 트림 기준점은 **1마디 1박 Am7의 어택**. 16분 그루브는 위상이 조금만 어긋나도 티가 나므로 제로크로싱 정렬을 특히 정확히.
- 혼 섹션 스탭이 들어간 테이크는 폐기(프롬프트에서 제외했지만 자주 새어 들어온다).

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `funk_Am_90.m4a` | | | ☐ | |
| `funk_Am_100.m4a` | | | ☐ | |
| `funk_Am_110.m4a` | | | ☐ | |
