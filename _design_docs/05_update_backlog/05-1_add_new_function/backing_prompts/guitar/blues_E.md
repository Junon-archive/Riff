# 배킹 프롬프트 — 기타 · 블루스(셔플) · E

- **스케일 라벨:** E minor pentatonic (E blues — E G A B♭ B D)
- **폼:** **12마디** (블루스 필수 폼, 4/4, 셔플 8분음표)
- **제외 파트:** 리드 기타 제외 (드럼 + 베이스 + 코드 컴핑만). 하모니카/색소폰 등 멜로디 악기도 제외.
- **커리큘럼 연계:** `shuffle_bounce_bass_2months`(E 셔플) · `beginner_electric_1month`(E 포지션). 개방현이 살아 있는 E는 입문자 블루스의 표준 조.

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(12마디) 길이 | 예상 용량 |
|---|---|---|---|
| `blues_E_70.m4a` | 70 | 41.1s | ~0.66 MB |
| `blues_E_90.m4a` | 90 | 32.0s | ~0.51 MB |
| `blues_E_120.m4a` | 120 | 24.0s | ~0.38 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental 12-bar blues shuffle backing track in the key of E, no vocals, no lead guitar.
Classic Texas / Chicago style blues shuffle at exactly {BPM} BPM, 4/4, swung eighth notes, strong shuffle triplet feel.
Rhythm section only: dry acoustic drum kit with shuffle ride pattern and snare on 2 and 4; warm electric bass walking the shuffle line under the changes; clean-to-lightly-overdriven rhythm guitar comping E7, A7 and B7 with open-string boogie shuffle voicings on the low strings.
Strict 12-bar blues form in E: four bars of E7, two bars of A7, two bars of E7, then B7, A7, E7, B7.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no breakdown, no stops, no key change, no tempo change, no solos.
Dry roomy mix, rhythm section centered, midrange left wide open for a soloist to play over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, lead guitar, guitar solo, harmonica, harmonica solo, saxophone solo, piano solo, fade in, fade out, intro, outro, breakdown, stop time, tempo change, key change
```

## 코드 진행 (12마디 블루스 in E)

```
| E7 | E7 | E7 | E7 |
| A7 | A7 | E7 | E7 |
| B7 | A7 | E7 | B7 |
```

- 퀵체인지 **없음**(A 트랙과 동일 원칙 — 폼 세기 쉬운 정통형).
- 12마디째 B7 = 턴어라운드.

## 비고 / 루프 트림 메모

- `blues_A.md`와 트림 원칙 동일. 12마디를 **직접 세어** 확인(퀵체인지·8마디 축약 주의).
- E는 저역이 두꺼워지기 쉽다. 베이스와 개방 6현 컴핑이 뭉치면 사용자의 솔로가 묻히므로, 저역이 과한 테이크는 폐기하거나 로우컷 후처리.
- 트림 기준점은 **1마디 1박 E7의 어택**.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `blues_E_70.m4a` | | | ☐ | |
| `blues_E_90.m4a` | | | ☐ | |
| `blues_E_120.m4a` | | | ☐ | |
