# 배킹 프롬프트 — 베이스 · 펑크 · Em

- **스케일 라벨:** E minor pentatonic / E Dorian · E Mixolydian(♭7) — E9 도미넌트 뱀프라 마이너/도미넌트 양쪽이 다 맞는다
- **베이스 연습 포인트:** **슬랩(썸·팝) 그루브의 정본 조.** E9 원코드 위 16분 싱코페이션, 개방 E 루트 + 옥타브 팝. A9 두 마디는 IV 이동 연습.
- **폼:** 16마디 (8마디 사이클 × 2회, 4/4, 16분음표 그루브)
- **제외 파트:** **베이스 전면 제외** (드럼 + 커팅 기타/클라비 컴핑만). 리드 기타·보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** ★ **`slap_funk_bass_2months`(Em) 정본 조** · `funk_rhythm_2months`(E9 — 커리큘럼 원본 확인). **베이스 세트 1순위 트랙.**

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
Instrumental classic funk backing track in E, with absolutely no bass, no vocals, no lead guitar, no guitar solo.
Tight sixteenth-note James Brown style funk groove at exactly {BPM} BPM, 4/4, deep in the pocket, straight not swung.
Only drums and mid-register comping: dry tight drum kit with crisp snare on 2 and 4, ghost notes and closed sixteenth-note hi-hat; clean single-coil rhythm guitar playing muted percussive sixteenth-note chank on an E9 voicing in the middle and upper register; Clavinet-style clean keys accents in the same register.
No bass instrument of any kind — no electric bass, no upright bass, no synth bass, no sub bass, no low octave doubling. The entire low register stays empty for a bass player to fill in.
Repeating eight-bar vamp: six bars of E9, then two bars of A9 — played twice for sixteen bars, identical both times.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no drop, no horn stabs, no key change, no tempo change, no melody line, no solos.
Dry punchy funk mix, guitar chank panned to one side, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, bass, bass guitar, electric bass, synth bass, sub bass, 808, lead guitar, guitar solo, horn section, saxophone solo, synth lead, melody line, fade in, fade out, intro, outro, build up, breakdown, drop, tempo change, key change
```

## 코드 진행 (in E — 도미넌트 펑크 뱀프)

```
| E9 | E9 | E9 | E9 | E9 | E9 | A9 | A9 |   (× 2회 = 16마디)
```

- E9 원코드 뱀프 = 펑크의 정석. 베이스는 **개방 E 루트 + 옥타브 팝 + ♭7(D)·9음(F♯) 경과음**으로 라인을 짠다.
- A9 두 마디는 IV로 잠깐 나갔다 돌아오는 숨구멍이자 루프 이음새 직전의 표지.
- `funk_Am.md`와 6+2 구조 동일.

## 비고 / 루프 트림 메모

- **베이스 세트 중 가장 활용도가 높은 트랙**(슬랩 커리큘럼 정본 조). 여기에 시간을 더 써도 아깝지 않다.
- E9의 **9음·♭7이 실제로 들리는** 테이크를 골라야 한다(그냥 E5/Em7로 나오면 펑크 색이 죽는다).
- **드럼과 커팅만 남아 저역이 텅 비는 게 정상.** 단 **킥은 반드시 살아 있어야** 한다(Exclude `bass` 때문에 킥까지 얇아진 테이크 주의).
- 원코드 구간이 길어 Suno가 필/전조를 끼워 넣기 쉬움 → 6+2 구조가 두 번 그대로 반복되는 구간 선별.
- **16분 그루브는 위상 어긋남이 바로 들린다.** 제로크로싱 정렬 정확히.
- 혼 섹션 스탭이 새어 들어온 테이크는 폐기.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `funk_Em_90.m4a` | | | ☐ | |
| `funk_Em_100.m4a` | | | ☐ | |
| `funk_Em_110.m4a` | | | ☐ | |
