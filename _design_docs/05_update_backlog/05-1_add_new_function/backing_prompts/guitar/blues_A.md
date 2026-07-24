# 배킹 프롬프트 — 기타 · 블루스(셔플) · A

- **스케일 라벨:** A minor pentatonic (A blues — A C D E♭ E G)
- **폼:** **12마디** (블루스 필수 폼, 4/4, 셔플 8분음표)
- **제외 파트:** 리드 기타 제외 (드럼 + 베이스 + 코드 컴핑만). 하모니카/색소폰 등 멜로디 악기도 제외.
- **커리큘럼 연계:** `blues_3months`(A 블루스, A7–D7–E7). **A 블루스 = A 마이너 펜타 → `solo_scale_3months`의 Am 소울 연습에 겸용**(그래서 별도 Am 블루스 트랙 없음 — 21_backing R3).

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(12마디) 길이 | 예상 용량 |
|---|---|---|---|
| `blues_A_70.m4a` | 70 | 41.1s | ~0.66 MB |
| `blues_A_90.m4a` | 90 | 32.0s | ~0.51 MB |
| `blues_A_120.m4a` | 120 | 24.0s | ~0.38 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental 12-bar blues shuffle backing track in the key of A, no vocals, no lead guitar.
Classic Chicago-style blues shuffle at exactly {BPM} BPM, 4/4, swung eighth notes, strong shuffle triplet feel.
Rhythm section only: dry acoustic drum kit with shuffle ride pattern and snare on 2 and 4; warm electric bass walking the shuffle line under the changes; clean-to-lightly-overdriven rhythm guitar comping A7, D7 and E7 shuffle chords with muted low-string boogie voicings.
Strict 12-bar blues form in A: four bars of A7, two bars of D7, two bars of A7, then E7, D7, A7, E7.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no breakdown, no stops, no key change, no tempo change, no solos.
Dry roomy mix, rhythm section centered, midrange left wide open for a soloist to play over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, lead guitar, guitar solo, harmonica, harmonica solo, saxophone solo, piano solo, fade in, fade out, intro, outro, breakdown, stop time, tempo change, key change
```

## 코드 진행 (12마디 블루스 in A)

```
| A7 | A7 | A7 | A7 |
| D7 | D7 | A7 | A7 |
| E7 | D7 | A7 | E7 |
```

- 퀵체인지(2마디 D7) **없음** — 입문자가 폼을 세기 쉬운 정통형으로 고정.
- 12마디째 E7 = 턴어라운드. 루프가 1마디 A7로 자연스럽게 돌아간다.

## 비고 / 루프 트림 메모

- 12마디 폼이 **정확히** 나온 구간을 골라야 한다. Suno가 퀵체인지(2마디를 D7로)를 넣거나 8마디로 줄이는 경우가 잦으니 **마디를 직접 세어 검수**할 것.
- 트림 기준점은 **1마디 1박 A7의 어택**. 12마디째 E7 턴어라운드 끝에서 바로 이어지는지 청감 확인.
- 셔플 필이 도중에 스트레이트로 바뀌는 테이크는 폐기(루프 이음새에서 그루브가 튄다).
- 리드 기타가 섞여 나오면 재생성. 컴핑 기타는 남기되 **멜로디 라인이 없어야** 사용자의 솔로와 충돌하지 않는다.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `blues_A_70.m4a` | | | ☐ | |
| `blues_A_90.m4a` | | | ☐ | |
| `blues_A_120.m4a` | | | ☐ | |
