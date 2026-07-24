# 배킹 프롬프트 — 드럼비트 · 펑크 16비트

- **조·스케일:** — (조 없음 · 순수 드럼 키트)
- **필(feel):** 16분음표 펑크 그루브. 스네어 **고스트 노트**와 닫힌 하이햇 16분이 핵심.
- **폼:** 16마디 (4/4). **8마디째·16마디째에 1마디 필** — 루프 반복 시 밤티 방지.
- **제외 파트:** 드럼 **단독**. 베이스·기타·건반·퍼커션 루프 전부 제외.
- **공유:** 기타·베이스 양쪽 공유.
- **배치:** `web_app/public/audio/backing/drums/`
- **커리큘럼 연계:** `funk_rhythm_2months`(기타 커팅) · `slap_funk_bass_2months`(슬랩). **드럼만 놓고 커팅/슬랩 그루브를 파는 트랙.**

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼 길이 | 예상 용량 |
|---|---|---|---|
| `funk_90.m4a` | 90 | 42.7s | ~0.68 MB |
| `funk_100.m4a` | 100 | 38.4s | ~0.61 MB |
| `funk_110.m4a` | 110 | 34.9s | ~0.56 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Solo drum kit only — instrumental funk drum groove backing track, no vocals.
Dry natural acoustic drum kit: kick, snare, closed hi-hat, ride, rack and floor toms.
Tight dry seventies funk room sound, close-miked, no reverb wash, no sample loops.
Tight sixteenth-note funk groove at exactly {BPM} BPM, straight 4/4, deep in the pocket, not swung: crisp snare on beats 2 and 4 with quiet sixteenth-note ghost notes around it, closed hi-hat playing steady sixteenths with subtle accents, syncopated kick pattern.
16-bar loop: the exact same groove all the way through, with one short one-bar snare-and-tom fill at bar 8 and another at bar 16.
No other instruments at all — no bass, no guitar, no clavinet, no piano, no synth, no horn stabs, no percussion overdubs.
No intro, no count-in, no outro, no fade in, no fade out, no breakdown, no drop, no tempo change.
Dry punchy centered mix with plenty of headroom, meant to be played over.
```

## 제외 스타일 (Exclude Styles)

```
vocals, bass, guitar, clavinet, piano, synth, horn section, percussion loop, electronic drums, drum machine, swing, shuffle, fade in, fade out, intro, outro, breakdown, tempo change, drum solo
```

## 코드 진행

없음(무조성 타이밍 트랙).

## 비고 / 루프 트림 메모

- **고스트 노트가 실제로 들리는** 테이크를 고를 것. 고스트가 없으면 그냥 스트레이트 백비트와 다를 게 없어 이 세트의 존재 이유가 사라진다(`straight.md` 로 대체 가능해져 버린다).
- 드럼머신/전자 드럼으로 나온 테이크는 폐기 — 어쿠스틱 키트여야 한다(Exclude에 명시했지만 자주 새어 들어온다).
- **16분 그루브는 위상이 조금만 어긋나도 루프 이음새에서 티가 난다.** 제로크로싱 정렬을 특히 정확히.
- 필이 들어간 8·16마디째가 루프 이음새 바로 앞이 되도록 트림.
- 킥/스네어 어택이 파일 맨 앞에 정확히 오도록(선행 무음 0 샘플) 트림.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `funk_90.m4a` | | | ☐ | |
| `funk_100.m4a` | | | ☐ | |
| `funk_110.m4a` | | | ☐ | |
