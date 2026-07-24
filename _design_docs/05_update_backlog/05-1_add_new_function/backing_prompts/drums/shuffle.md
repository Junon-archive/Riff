# 배킹 프롬프트 — 드럼비트 · 셔플/블루스 스윙

- **조·스케일:** — (조 없음 · 순수 드럼 키트)
- **필(feel):** 트리플렛 셔플. 라이드(또는 하이햇)의 **셔플 패턴**과 2·4박 스네어가 핵심.
- **폼:** 16마디 (4/4). **8마디째·16마디째에 1마디 필** — 루프 반복 시 밤티 방지.
- **제외 파트:** 드럼 **단독**. 베이스·기타·건반·퍼커션 루프 전부 제외.
- **공유:** 기타·베이스 양쪽 공유.
- **배치:** `web_app/public/audio/backing/drums/`
- **커리큘럼 연계:** `blues_3months`(셔플 리듬) · `shuffle_bounce_bass_2months`(바운스). **12마디 폼을 스스로 세며 도는 연습**에 쓴다.

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼 길이 | 예상 용량 |
|---|---|---|---|
| `shuffle_70.m4a` | 70 | 54.9s | ~0.88 MB |
| `shuffle_90.m4a` | 90 | 42.7s | ~0.68 MB |
| `shuffle_120.m4a` | 120 | 32.0s | ~0.51 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Solo drum kit only — instrumental blues shuffle drum groove backing track, no vocals.
Dry natural acoustic drum kit: kick, snare, hi-hat, ride, rack and floor toms.
Tight vintage blues-club room sound, close-miked, no reverb wash, no sample loops.
Classic shuffle groove at exactly {BPM} BPM, 4/4 with a strong swung triplet feel: ride cymbal or hi-hat playing the shuffle triplet pattern all the way through, snare firmly on beats 2 and 4, steady kick underneath, click-tight timing.
16-bar loop: the exact same shuffle groove all the way through, with one short one-bar snare-and-tom fill at bar 8 and another at bar 16.
No other instruments at all — no bass, no guitar, no harmonica, no piano, no organ, no percussion overdubs.
No intro, no count-in, no outro, no fade in, no fade out, no breakdown, no stop time, no tempo change.
Dry roomy centered mix with plenty of headroom, meant to be played over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, bass, guitar, harmonica, piano, organ, synth, percussion loop, electronic drums, drum machine, straight eighths, fade in, fade out, intro, outro, breakdown, stop time, tempo change, drum solo
```

## 코드 진행

없음(무조성 타이밍 트랙). **12마디 블루스 폼은 이 트랙 위에서 사용자가 직접 센다** — 코드가 없으니 폼을 몸에 새기는 훈련이 된다.

## 비고 / 루프 트림 메모

- **셔플이 도중에 스트레이트로 풀리는 테이크는 폐기.** 특히 120 BPM에서 자주 발생한다. 트리플렛 느낌이 처음부터 끝까지 일정해야 루프 이음새에서 그루브가 튀지 않는다.
- **16마디 폼이라 12마디 블루스와 마디 수가 다르다.** 의도된 설계다 — 이 트랙은 "코드 없는 타이밍 베드"이고, 사용자가 그 위에서 12마디를 세는 것이므로 루프 길이와 블루스 폼이 일치할 필요가 없다. (코드가 붙은 12마디 폼이 필요하면 `guitar/blues_*` · `bass/blues_*` 를 쓴다.)
- 드럼머신/전자 드럼 테이크는 폐기 — 어쿠스틱 키트여야 한다.
- 필이 들어간 8·16마디째가 루프 이음새 바로 앞이 되도록 트림. 킥/스네어 어택이 파일 맨 앞에 오도록 정렬.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `shuffle_70.m4a` | | | ☐ | |
| `shuffle_90.m4a` | | | ☐ | |
| `shuffle_120.m4a` | | | ☐ | |
