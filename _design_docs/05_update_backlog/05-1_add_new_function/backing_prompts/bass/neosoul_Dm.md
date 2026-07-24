# 배킹 프롬프트 — 베이스 · R&B/네오소울 · Dm

- **스케일 라벨:** D Dorian (♮6 = B) / D minor pentatonic
- **베이스 연습 포인트:** Dm9–G13 위 **레이드백 그루브**. 루트에 머물지 않고 9음·♮6·경과음으로 노래하는 라인. **박자 뒤에 살짝 눕히는 감각**이 핵심.
- **폼:** 16마디 (Dm9 2마디 + G13 2마디 = 4마디 사이클 × 4회, 4/4)
- **제외 파트:** **베이스 전면 제외** (드럼 + 로즈/기타 컴핑만). 리드 기타·보컬도 제외.
- **배치:** `web_app/public/audio/backing/bass/` — 기타 세트와 파일명 동일, 디렉터리로 구분.
- **커리큘럼 연계:** `neosoul_voicing_2months`(**Dm9 – G13** — 커리큘럼 원본 확인). 기타 학습자가 치는 그 진행 위에 **베이스로 붙는** 트랙.

## 렌더 타깃 (템포별 개별 생성 — playbackRate 금지, 파일 분리)

| 파일 | BPM | 1폼(16마디) 길이 | 예상 용량 |
|---|---|---|---|
| `neosoul_Dm_70.m4a` | 70 | 54.9s | ~0.88 MB |
| `neosoul_Dm_85.m4a` | 85 | 45.2s | ~0.72 MB |
| `neosoul_Dm_100.m4a` | 100 | 38.4s | ~0.61 MB |

- **라이선스:** Suno-Pro (생성일 ____ / 계정 ____)

## Suno 프롬프트 — 스타일

> `{BPM}` 만 렌더 타깃 값으로 치환해서 붙여넣는다.

```
Instrumental neo-soul R&B backing track in D minor, with absolutely no bass, no vocals, no lead guitar, no guitar solo.
Warm laid-back neo-soul groove at exactly {BPM} BPM, 4/4, dusty drums sitting slightly behind the beat, relaxed sixteenth-note feel.
Only drums and mid-register comping: soft dry drum kit with rimshot-style snare on 2 and 4, brushed hi-hat sixteenths and a loose behind-the-beat pocket; lush Fender Rhodes electric piano comping extended ninth and thirteenth voicings in the middle and upper register, right hand only, no left-hand bass notes; a quiet clean chorused electric guitar layer comping the same changes softly in the same register.
No bass instrument of any kind — no electric bass, no upright bass, no synth bass, no sub bass, no left-hand piano bass, no low octave doubling. The entire low register stays empty for a bass player to fill in.
Repeating four-bar progression: two bars of D minor 9, then two bars of G dominant 13 — the same four bars over and over for sixteen bars, identical every cycle.
Steady loopable vamp from the very first bar — no intro, no count-in, no outro, no fade in, no fade out, no build, no breakdown, no drop, no key change, no tempo change, no melody line, no solos.
Warm dry mix with soft tape saturation, Rhodes panned slightly, low end completely open.
```

## 제외 스타일 (Exclude Styles)

```
vocals, vocal chops, bass, bass guitar, electric bass, upright bass, synth bass, sub bass, 808, lead guitar, guitar solo, saxophone solo, synth lead, melody line, fade in, fade out, intro, outro, build up, breakdown, drop, tempo change, key change
```

## 코드 진행 (in D Dorian)

```
| Dm9 | Dm9 | G13 | G13 |   (× 4회 = 16마디)
```

- ii–V 도리안 뱀프(해결 없이 순환). 베이스 라인 재료: D–F–G–A–C(D 마이너 펜타) + **B(♮6)** 를 G13 구간에서 겨냥.
- `neosoul_Am.md`는 같은 구조를 Am9–D13으로 옮긴 트랙.

## 비고 / 루프 트림 메모

- **로즈의 왼손 저음이 사실상 베이스 라인 노릇을 하는 테이크가 자주 나온다.** 프롬프트에 `right hand only, no left-hand bass notes` 를 넣었지만 반드시 확인할 것 — 이게 남아 있으면 사용자 라인과 충돌한다. **이 트랙군의 최대 실패 요인.**
- **텐션(9th·13th)이 실제로 들리는** 테이크를 고를 것. Dm7–G7로 단순화되면 네오소울 색이 죽는다.
- 레이드백 필이라 드럼이 그리드에서 의도적으로 밀려 있다. 베이스도 없으니 **기준점이 애매하다** → 트림은 **로즈 컴핑의 1박 다운비트**를 기준으로 잡는다.
- 로즈 서스테인이 16마디 끝에서 잘리면 "툭" 소리가 난다 → 짧은 크로스페이드 필수. **전 세트 중 트림 난이도가 가장 높다.**
- 보컬 챱이 새어 들어오기 쉬움 → 생성물 확인 필수.

## 생성 로그

| 파일 | 생성일 | Suno 곡 링크 | 트림 완료 | 비고 |
|---|---|---|---|---|
| `neosoul_Dm_70.m4a` | | | ☐ | |
| `neosoul_Dm_85.m4a` | | | ☐ | |
| `neosoul_Dm_100.m4a` | | | ☐ | |
