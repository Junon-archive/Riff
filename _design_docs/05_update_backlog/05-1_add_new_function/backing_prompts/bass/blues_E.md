# 배킹 프롬프트 — 베이스 · 블루스(셔플) · E

- **스케일 라벨:** E minor pentatonic (E blues)
- **베이스 연습 포인트:** E7·A7·B7 **코드톤(1–3–5–♭7)** 셔플 워킹 + 바운스 필. 개방현 E를 루트로 쓰는 표준 포지션.
- **폼:** **12마디** (블루스 필수 폼, 4/4, 셔플 8분음표)
- **제외 파트:** **베이스 전면 제외** (드럼 + 중음역 코드 컴핑만). 리드 기타·보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** ★ **`shuffle_bounce_bass_2months`(E) 정본 조** · `beginner_bass_1month`(E). **베이스 세트 1순위 트랙.**

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
Instrumental 12-bar blues shuffle backing track in the key of E, with absolutely no bass, no vocals, no lead guitar.
Classic Texas / Chicago style blues shuffle at exactly {BPM} BPM, 4/4, swung eighth notes, strong shuffle triplet feel.
Only drums and mid-register chord comping: dry acoustic drum kit with shuffle ride pattern and snare on 2 and 4; clean-to-lightly-overdriven rhythm guitar comping E7, A7 and B7 shuffle chords in the middle register on the higher strings; optional sparse blues piano comping in the same middle register.
No bass instrument of any kind — no electric bass, no upright bass, no synth bass, no low-string guitar boogie bassline, no low octave doubling. The entire low register stays empty for a bass player to fill in.
Strict 12-bar blues form in E: four bars of E7, two bars of A7, two bars of E7, then B7, A7, E7, B7.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no breakdown, no stops, no key change, no tempo change, no solos.
Dry roomy mix, drums centered, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, bass, bass guitar, electric bass, upright bass, double bass, synth bass, sub bass, 808, lead guitar, guitar solo, harmonica, saxophone solo, fade in, fade out, intro, outro, breakdown, stop time, tempo change, key change
```

## 코드 진행 (12마디 블루스 in E)

```
| E7 | E7 | E7 | E7 |
| A7 | A7 | E7 | E7 |
| B7 | A7 | E7 | B7 |
```

- 퀵체인지 없음(정통형). 12마디째 B7 = 턴어라운드.
- 베이스 코드톤: E7 = E·G♯·B·D / A7 = A·C♯·E·G / B7 = B·D♯·F♯·A.

## 비고 / 루프 트림 메모

- **Exclude에 `bass` 를 넣으면 킥까지 얇아진 테이크가 나올 수 있다.** 킥이 살아 있는 테이크를 고를 것.
- E는 기타가 **개방 6현 부기 라인**으로 흐르기 가장 쉬운 조다. 저음현 라인이 들리면 폐기 — 사용자 베이스와 충돌한다.
- 12마디를 **직접 세어** 확인.
- 트림 기준점은 **1마디 1박 드럼 어택**.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `blues_E_70.m4a` | | | ☐ | |
| `blues_E_90.m4a` | | | ☐ | |
| `blues_E_120.m4a` | | | ☐ | |
