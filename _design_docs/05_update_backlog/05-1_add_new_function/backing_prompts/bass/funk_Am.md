# 배킹 프롬프트 — 베이스 · 펑크 · Am

- **스케일 라벨:** A minor pentatonic / A Dorian (♮6 — D9 위에서 F♯이 살아난다)
- **베이스 연습 포인트:** Am7 원코드 위 **16분 싱코페이션 그루브**. 킥과 맞물리는 자리 찾기 + D9 두 마디에서 F♯(♮6) 겨냥. 슬랩·핑거 양쪽 다 연습 가능.
- **폼:** 16마디 (8마디 사이클 × 2회, 4/4, 16분음표 그루브)
- **제외 파트:** **베이스 전면 제외** (드럼 + 커팅 기타/클라비 컴핑만). 리드 기타·보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** 공통 Am + `slap_funk_bass_2months`의 그루브를 Am으로 이식. (슬랩 정본 조는 Em → `funk_Em.md`)

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
Instrumental funk backing track in A minor, with absolutely no bass, no vocals, no lead guitar, no guitar solo.
Tight sixteenth-note funk groove at exactly {BPM} BPM, 4/4, deep in the pocket, straight not swung.
Only drums and mid-register comping: dry tight drum kit with crisp snare on 2 and 4, ghost notes and closed sixteenth-note hi-hat; clean single-coil rhythm guitar playing muted percussive sixteenth-note chank on Am7 and D9 voicings in the middle and upper register; Clavinet-style clean keys accents in the same register.
No bass instrument of any kind — no electric bass, no upright bass, no synth bass, no sub bass, no low octave doubling. The entire low register stays empty for a bass player to fill in.
Repeating eight-bar vamp: six bars of Am7, then two bars of D9 — played twice for sixteen bars, identical both times.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no drop, no horn stabs, no key change, no tempo change, no melody line, no solos.
Dry punchy funk mix, guitar chank panned to one side, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, bass, bass guitar, electric bass, synth bass, sub bass, 808, lead guitar, guitar solo, horn section, saxophone solo, synth lead, melody line, fade in, fade out, intro, outro, build up, breakdown, drop, tempo change, key change
```

## 코드 진행 (in A minor / A Dorian)

```
| Am7 | Am7 | Am7 | Am7 | Am7 | Am7 | D9 | D9 |   (× 2회 = 16마디)
```

- 원코드 도리안 뱀프. Am7 구간에서 그루브를 파고, **D9 두 마디에서 F♯(♮6)** 을 루트/경과음으로 겨냥하면 도리안 색이 산다.
- `funk_Em.md`와 정확히 같은 6+2 구조 — 두 트랙을 오가며 같은 감각을 다른 조로 옮기는 연습.

## 비고 / 루프 트림 메모

- **드럼과 커팅만 남는 구성이라 저역이 텅 비는 게 정상이다.** 그게 이 트랙의 목적 — 그 자리를 사용자가 채운다. 다만 **킥은 반드시 살아 있어야** 그루브 기준이 생긴다(Exclude `bass` 때문에 킥까지 얇아진 테이크 주의).
- 커팅 기타가 멜로디처럼 튀는 테이크는 폐기. **퍼커시브한 챙크**로만 남아야 한다.
- 원코드 구간이 길어 Suno가 도중에 필/전조를 끼워 넣기 쉽다 → 6+2 구조가 두 번 그대로 반복되는 구간을 선별.
- **16분 그루브는 위상이 조금만 어긋나도 루프 이음새에서 티가 난다.** 제로크로싱 정렬을 특히 정확히.
- 혼 섹션 스탭이 새어 들어온 테이크는 폐기.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `funk_Am_90.m4a` | | | ☐ | |
| `funk_Am_100.m4a` | | | ☐ | |
| `funk_Am_110.m4a` | | | ☐ | |
