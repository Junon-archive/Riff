# 배킹 프롬프트 — 드럼비트 · 스트레이트/락 백비트

- **조·스케일:** — (조 없음 · 순수 드럼 키트)
- **필(feel):** 스트레이트 8분 백비트. **전 장르의 기본 타이밍 트랙** — 락/팝은 물론 재즈·네오소울 연습에도 범용으로 쓴다.
- **폼:** 16마디 (4/4). **8마디째·16마디째에 1마디 필** — 루프 반복 시 밤티(단조로움) 방지.
- **제외 파트:** 드럼 **단독**. 베이스·기타·건반·퍼커션 루프 전부 제외.
- **공유:** 드럼비트 세트는 **기타·베이스 양쪽이 공유**한다(악기별 재생성 없음).
- **배치:** `web_app/public/audio/backing/drums/`

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼 길이 | 예상 용량 | 느낌 힌트(프롬프트 `{FEEL}` 치환) |
|---|---|---|---|---|
| `straight_70.m4a` | 70 | 54.9s | ~0.88 MB | slow soul / slow rock backbeat, relaxed behind-the-beat feel |
| `straight_95.m4a` | 95 | 40.4s | ~0.65 MB | mid-tempo rock backbeat, tight pocket |
| `straight_120.m4a` | 120 | 32.0s | ~0.51 MB | straight-ahead rock backbeat, driving eighth-note hi-hat |
| `straight_150.m4a` | 150 | 25.6s | ~0.41 MB | uptempo rock backbeat, insistent eighth-note hi-hat |
| `straight_200.m4a` | 200 | 19.2s | ~0.31 MB | fast punk-rock straight-eighth drive, ride-heavy |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` · `{FEEL}` 을 위 표의 값으로 치환해서 붙여넣는다.

```
Solo drum kit only — instrumental drum groove backing track, no vocals.
Dry natural acoustic drum kit: kick, snare, hi-hat, ride, rack and floor toms.
Tight modern-vintage room sound, close-miked, no reverb wash, no sample loops.
{FEEL} in straight 4/4 at exactly {BPM} BPM, snare firmly on beats 2 and 4, steady straight eighth-note hi-hat, no swing, click-tight timing.
16-bar loop: the exact same groove all the way through, with one short one-bar tom-and-snare fill at bar 8 and another at bar 16.
No other instruments at all — no bass, no guitar, no piano, no synth, no percussion overdubs.
No intro, no count-in, no outro, no fade in, no fade out, no breakdown, no drop, no tempo change.
Dry centered mix with plenty of headroom, meant to be played over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, bass, guitar, piano, synth, strings, percussion loop, electronic drums, swing, shuffle, fade in, fade out, intro, outro, breakdown, tempo change, drum solo
```

## 코드 진행

없음(무조성 타이밍 트랙). 모든 조·장르의 스케일·리듬 연습에 공통으로 쓴다.

## 비고 / 루프 트림 메모

- **템포 폭이 70~200으로 넓어 느낌까지 동일할 수 없다.** 코어 프롬프트는 5트랙 전부 동일하게 유지하고, `{FEEL}` 한 줄만 템포대에 맞게 치환한다(장르 색을 입히지 않는 선에서 최소 조정).
- Exclude에 `swing, shuffle` 을 넣은 이유: 느린 템포(70)에서 Suno가 자동으로 스윙을 섞는 경향이 있다. **스트레이트 세트는 스트레이트여야** 셔플 세트와 역할이 갈린다.
- 필이 들어간 8·16마디째가 **루프 이음새 바로 앞**이 되도록 트림해야 반복이 자연스럽다. 16마디 필의 마지막 타점이 다음 루프 1마디 1박으로 자연스럽게 넘어가는지 반드시 청감 확인.
- 킥/스네어의 어택이 파일 맨 앞에 정확히 오도록(선행 무음 0 샘플) 트림. 드럼은 어택이 시작점이라 갭이 가장 잘 들린다.
- 심벌 서스테인이 루프 끝에서 잘리면 "툭" 소리가 난다 → 16마디째 필을 **크래시로 끝내지 않은** 테이크를 고르거나 짧은 크로스페이드.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `straight_70.m4a` | | | ☐ | |
| `straight_95.m4a` | | | ☐ | |
| `straight_120.m4a` | | | ☐ | |
| `straight_150.m4a` | | | ☐ | |
| `straight_200.m4a` | | | ☐ | |
