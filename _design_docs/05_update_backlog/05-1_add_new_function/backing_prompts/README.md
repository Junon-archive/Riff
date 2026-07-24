# 배킹 트랙 · Suno 프롬프트 뱅크

> 상위 설계 SSOT: [`../21_backing.md`](../21_backing.md) (매트릭스·용량·라이선스·매니페스트) · 공통 셸/UX는 [`../20_metronome.md`](../20_metronome.md) PART A.
> 이 디렉터리는 **음원 생성용 프롬프트 원본**이다. 음원 생성은 사람이 Suno Pro에서 직접 수행한다.
>
> 🎧 **지금 음원을 만들러 왔다면 → [「▶ 사람이 순서대로 따라 하는 방법」](#-사람이-순서대로-따라-하는-방법)** 으로 바로 내려가세요. 그 위 문단들은 참조용(규약·규칙·경로)입니다.

**이 문서 구성** — ① 인덱스 ② 파일 규약 ③ 프롬프트 작성 규칙 ④ 공통 Suno 설정 ⑤ **확장자** ⑥ **저장 경로** → ⑦ **사람이 순서대로 따라 하는 방법(STEP 0~10)** → ⑧ 진행 체크리스트

## 인덱스

### 기타 세트 (`guitar/`) — 13 파일 / 41 트랙 (확정)

| 파일 | 장르 | 조 | 스케일 라벨 | 폼 | 템포(BPM) | 트랙 |
|---|---|---|---|---|---|---|
| [`guitar/drums.md`](guitar/drums.md) | 드럼만 | — | — | 16마디 (8·16마디 필) | 70·95·120·150·200 | 5 |
| [`guitar/blues_A.md`](guitar/blues_A.md) | 블루스(셔플) | A | A minor pentatonic / A blues | **12마디** | 70·90·120 | 3 |
| [`guitar/blues_E.md`](guitar/blues_E.md) | 블루스(셔플) | E | E minor pentatonic / E blues | **12마디** | 70·90·120 | 3 |
| [`guitar/rock_Am.md`](guitar/rock_Am.md) | 락/팝 | Am | A minor pentatonic / A natural minor | 16마디 | 80·110·140 | 3 |
| [`guitar/rock_E.md`](guitar/rock_E.md) | 락/팝 | E | E minor pentatonic (파워코드) | 16마디 | 80·110·140 | 3 |
| [`guitar/rock_G.md`](guitar/rock_G.md) | 락/팝 | G | G major pentatonic / G major | 16마디 | 80·110·140 | 3 |
| [`guitar/funk_Am.md`](guitar/funk_Am.md) | 펑크 | Am | A minor pentatonic / A Dorian | 16마디 | 90·100·110 | 3 |
| [`guitar/funk_Em.md`](guitar/funk_Em.md) | 펑크 | Em | E minor pentatonic / E Dorian·Mixolydian | 16마디 | 90·100·110 | 3 |
| [`guitar/neosoul_Am.md`](guitar/neosoul_Am.md) | R&B/네오소울 | Am | A Dorian / A minor pentatonic | 16마디 | 70·85·100 | 3 |
| [`guitar/neosoul_Dm.md`](guitar/neosoul_Dm.md) | R&B/네오소울 | Dm | D Dorian / D minor pentatonic | 16마디 | 70·85·100 | 3 |
| [`guitar/jazz_Am.md`](guitar/jazz_Am.md) | 재즈 ii-V-i | Am | A harmonic minor / A minor pentatonic | 16마디 | 100·130·160 | 3 |
| [`guitar/jazz_C.md`](guitar/jazz_C.md) | 재즈 ii-V-I | C | C major / D Dorian / G Mixolydian | 16마디 | 100·130·160 | 3 |
| [`guitar/jazz_F.md`](guitar/jazz_F.md) | 재즈 ii-V-I | F | F major / G Dorian / C Mixolydian | 16마디 | 100·130·160 | 3 |

**합계 41트랙 · 총 길이 ≈ 24.6분 · 예상 용량 ≈ 24 MB** (AAC-LC 128k 스테레오 ≈ 1 MB/분). 예산 80 MB의 30%.

### 베이스 세트 (`bass/`) — 후속 배포

[`bass/README.md`](bass/README.md) 참조. 기타 세트 배포 후 착수. 드럼만은 기타 세트와 **공유**(재생성 없음).

---

## 파일 규약

- **md 1개 = (악기 × 장르 × 조) 1개.** 같은 장르+조의 템포 3개(드럼 5개)는 프롬프트가 동일하고 BPM만 다르므로 한 파일에 "렌더 타깃"으로 묶는다.
- **파일명 = 오디오 파일명 접두사와 일치.** `guitar/blues_A.md` → `blues_A_70.m4a` · `blues_A_90.m4a` · `blues_A_120.m4a`.
- 오디오 파일명 규약: `{장르슬러그}_{조}_{bpm}.m4a` (드럼만은 조 없음 → `drums_{bpm}.m4a`).
  - 장르 슬러그: `drums` · `blues` · `rock` · `funk` · `neosoul` · `jazz`.
- 오디오가 놓일 경로는 아래 **「저장 경로」** 참조(권장안 — 최종 정본은 `21_backing.md` T3 매니페스트 `backing.json` 의 `file` 필드).

## 프롬프트 작성 규칙 (전 트랙 공통)

1. **instrumental 필수** — 보컬 0. Suno의 *Instrumental* 토글 ON + 프롬프트에도 `no vocals` 명시(이중 안전장치).
2. **제외 파트 명시** — 기타 배킹 = 드럼 + 베이스 + 코드 컴핑만, **리드 기타/기타 솔로 제외**(사용자가 그 위에 솔로). 베이스 배킹 = **베이스 제외**. 드럼만 = 드럼 단독.
3. **루프 친화** — `steady loopable vamp` / `no intro` / `no outro` / `no fade in/out` / `no breakdown` / `constant tempo` / `no key change`. 정상상태(steady state)를 지향해야 마디 경계 트림이 쉬워진다(21_backing T2).
4. **폼을 정확히 명시** — 블루스는 **12마디 필수**, 재즈는 ii-V-I, 네오소울은 Dm9–G13 계열 등 **연계 커리큘럼과 코드 진행 일치**.
5. **스케일 라벨 병기** — 사용자에게 "이 조에서 이 스케일로 연습"을 안내하는 용도. 매니페스트 `scale` 필드로 들어간다.
6. **믹스 지시** — `dry`, `no reverb wash`, `midrange space left open for a soloist`. 솔로가 얹힐 자리를 비워 둔다.
7. **라이선스 기록 의무** — 각 트랙 `license:"Suno-Pro"` + **생성일**을 아래 각 md의 「생성 로그」에 남긴다(무료 공개 배포 근거, 21_backing T5).

## 공통 Suno 설정 (모든 트랙 동일)

| 항목 | 값 |
|---|---|
| 모드 | **Custom(커스텀) 모드 ON** |
| Instrumental | **ON** (가사란 비움) |
| Style / Style of Music | 각 md의 「Suno 프롬프트 — 스타일」 블록 **그대로 붙여넣기**, `{BPM}` 만 렌더 타깃 값으로 치환 |
| Exclude Styles | 각 md의 「제외 스타일」 블록 |
| 길이 | 기본(~2~4분). 우리는 그중 **가장 안정적인 1폼 구간만 잘라 쓴다** |

> **템포는 파일 분리가 원칙.** `playbackRate`로 템포를 바꾸면 피치(조)가 변하므로 금지(21_backing R2). BPM별로 **개별 생성**한다.

## 확장자 — 단계마다 다르다

| 단계 | 확장자 | 왜 |
|---|---|---|
| Suno에서 다운로드 | **WAV** (Pro 무손실 다운로드) | 편집 전 원본은 무손실이어야 한다 |
| 트림·크로스페이드 작업 | **WAV** 유지 | 중간 저장마다 재압축되면 손실이 누적된다 |
| **배포용 최종** | **`.m4a`** (AAC-LC 128 kbps 스테레오 44.1 kHz) | 21_backing R1 확정 포맷. Safari/iOS 포함 전 브라우저 `decodeAudioData` 호환 |

> MP3로 받아서 편집하면 **손실 위에 손실이 겹치고**, MP3 인코더 패딩 때문에 루프 이음새가 더 지저분해진다.
> **WAV로 받아 → WAV로 자르고 → 마지막에 딱 한 번 `.m4a`로 인코딩**한다.

파일명은 각 md의 「렌더 타깃」 표에 이미 확정돼 있다. 그대로 쓴다 (`blues_A_90.m4a`, `drums_120.m4a` …).

## 저장 경로

### 배포용 `.m4a` — repo에 커밋한다

```
web_app/public/audio/backing/guitar/blues_A_70.m4a
web_app/public/audio/backing/guitar/blues_A_90.m4a
web_app/public/audio/backing/guitar/drums_120.m4a
web_app/public/audio/backing/bass/...              ← 베이스 세트(후속)
```

- 브라우저에서 접근하는 URL: `/audio/backing/guitar/blues_A_90.m4a`
- `public/` 하위는 빌드 시 **그대로 복사**되는 관례를 따랐다(`public/curriculum/*.webp` · `public/icons/` 와 동일).
- `audio/` 로 한 겹 묶은 이유: 메트로놈 CC0 샘플이 `audio/metronome/` 으로 나란히 들어올 자리를 미리 만든 것(백로그 20).
- 이 경로는 **`21_backing.md` T3 매니페스트(`backing.json`)의 `file` 필드**가 정본이다. 구현 세션에서 경로가 바뀌면 매니페스트를 고치고 이 문단도 같이 고친다.

### WAV 작업 원본 — **repo 밖**에 둔다

41트랙 WAV는 수백 MB다. `.gitignore` 로 막는 것보다 **아예 저장소 바깥 폴더**에 두는 편이 안전하다 — GitHub 저장소 비대화가 이 기능의 실질 제약이고(21_backing 「플랫폼 사실」), 실수로 한 번 커밋되면 히스토리에 영구히 남아 되돌리기 어렵다.

권장 작업 폴더(예시):

```
~/riff_backing_work/
  raw/       ← Suno에서 받은 원본 WAV (자르기 전)
  trimmed/   ← 1폼으로 자른 WAV
  out/       ← 인코딩 결과 .m4a (여기서 repo로 복사)
```

---

# ▶ 사람이 순서대로 따라 하는 방법

> **트랙 1개를 끝까지 완주하는 절차**다. 41트랙을 이 순서로 반복한다.
> 예시는 `guitar/blues_A.md` 의 90 BPM 트랙(`blues_A_90.m4a`)으로 든다.
> 처음이라면 **`drums_120` 한 개를 먼저 끝까지 해보길** 권한다. 드럼은 어택이 선명해 트림 지점을 찾기 가장 쉽고, 여기서 감을 잡으면 나머지가 훨씬 수월하다.

## STEP 0 — 준비물 (최초 1회만)

- [ ] **Suno Pro 구독 계정** (Pro/Premier 구독 중 생성물이어야 상업·재배포 라이선스가 붙는다 — 21_backing T5)
- [ ] **오디오 편집 도구** — Audacity(무료)면 충분하다. Reaper·Logic 등 DAW가 있으면 마디 그리드가 있어 더 편하다.
- [ ] **ffmpeg** — 최종 인코딩용. `ffmpeg -version` 으로 설치 확인.
- [ ] **작업 폴더 3개 생성** — 위 「WAV 작업 원본」의 `raw/` · `trimmed/` · `out/`
- [ ] 브라우저(크롬 등) — STEP 8의 이음새 검수에 쓴다.

## STEP 1 — 오늘 만들 트랙 하나를 정한다

1. 위 「인덱스」 표에서 md 파일 하나를 연다. → 예: `guitar/blues_A.md`
2. 그 md의 **「렌더 타깃」 표에서 행 하나**를 고른다. → 예: `blues_A_90.m4a` / 90 BPM / 32.0s
3. 이 세 값을 메모해 둔다. 끝까지 쓰인다.
   - **파일명** `blues_A_90.m4a`
   - **BPM** `90`
   - **목표 길이** `32.0s` ← 나중에 "제대로 잘랐는지" 판정하는 기준값

> 같은 md의 3개(드럼은 5개) 행은 **각각 따로 생성**한다. 하나 만들어서 재생 속도만 바꾸면 피치=조가 같이 변한다(21_backing R2 — `playbackRate` 금지).

## STEP 2 — Suno 화면을 세팅한다

1. **Custom(커스텀) 모드 ON**
2. **Instrumental 토글 ON** → 가사(Lyrics)란은 **비워 둔다**
3. 곡 제목은 아무렇게나 둬도 된다(우리는 파일명을 따로 쓴다)

## STEP 3 — 프롬프트를 붙여넣고 BPM을 치환한다

1. md의 **「Suno 프롬프트 — 스타일」 코드블록을 통째로 복사** → Suno의 **Style / Style of Music** 칸에 붙여넣기
2. 붙여넣은 텍스트 안의 **`{BPM}` 을 STEP 1의 값으로 바꾼다.**
   - `at exactly {BPM} BPM` → `at exactly 90 BPM`
   - **드럼만(`drums.md`)은 `{FEEL}` 도 함께 치환**한다(렌더 타깃 표의 「느낌 힌트」 열 문장을 그대로 붙여넣는다).
   - `{` `}` 중괄호가 남아 있으면 안 된다. 한 번 더 확인.
3. md의 **「제외 스타일」 코드블록을 복사** → **Exclude Styles** 칸에 붙여넣기

## STEP 4 — 생성하고, 테이크를 검수한다 ★가장 중요★

생성은 여러 번 돌리게 된다. **첫 테이크를 그냥 쓰지 않는다.** 아래를 순서대로 확인한다.

**(공통 검수 — 전 트랙)**

- [ ] **보컬이 없는가** (허밍·스캣·보컬 챱 포함해서 없어야 한다)
- [ ] **리드 기타/멜로디 악기가 없는가** — 컴핑(반주 코드)은 남아도 되지만, **선율을 연주하는 소리가 있으면 안 된다.** 사용자가 그 위에 솔로를 얹기 때문이다.
- [ ] **템포가 처음부터 끝까지 일정한가**
- [ ] **인트로 빌드업·아웃트로 페이드·브레이크다운 없이 평평하게 가는 구간이 존재하는가**
- [ ] 솔로가 들어갈 **중음역이 비어 있는가** (반주가 너무 꽉 차 있으면 연습용으로 못 쓴다)

**(트랙별 검수 — 그 md의 「비고 / 루프 트림 메모」를 반드시 읽는다)**

트랙마다 잘 터지는 실패가 정해져 있고, md에 적어 놨다. 대표적으로:

| 트랙 | 자주 나는 사고 | 확인 방법 |
|---|---|---|
| `blues_A` · `blues_E` | 12마디가 아니라 8마디로 나오거나 퀵체인지(2마디째 IV)가 낀다 | **마디를 직접 센다** |
| `rock_E` | 파워코드가 아니라 3음이 든 풀 코드로 나온다 | 코드가 메이저/마이너로 들리면 폐기 |
| `funk_Em` | E9의 9음·♭7이 안 들리고 그냥 E5/Em7로 나온다 | 화음 색을 듣는다 |
| `neosoul_*` | 9th·13th 텐션이 빠져 Dm7–G7로 단순화된다 | 화음 색을 듣는다 |
| `jazz_*` | 색소폰·트럼펫 **헤드 멜로디**가 얹힌다 | 선율 악기 유무 |
| `jazz_Am` | E7♭9가 그냥 Em7으로 나온다(마이너 ii-V-i가 성립 안 함) | **2마디·14마디를 직접 듣는다** |
| `drums` | 16마디째가 크래시 심벌로 끝난다 | 루프 끝에서 "쨍" 하고 잘리면 다른 테이크 |

→ **하나라도 걸리면 그 테이크는 버리고 다시 생성한다.** 여기서 대충 넘어가면 STEP 6 이후 작업이 전부 헛수고가 된다.

## STEP 5 — WAV로 다운로드한다

1. 채택한 테이크를 **WAV(무손실)** 로 다운로드한다. **MP3로 받지 않는다.**
2. `raw/` 폴더에 저장하고, 파일명을 최종 이름과 맞춰 둔다 → `raw/blues_A_90.wav`

## STEP 6 — 1폼만 남기고 자른다 (루프 트림)

여기가 수작업의 핵심이다. **목표: 파일 안에 폼이 정확히 1회만, 앞뒤 군더더기 0.**

1. 편집기에서 `raw/blues_A_90.wav` 를 연다.
2. **정상상태 구간을 찾는다** — 인트로 빌드업이 끝나고, 아웃트로/브레이크다운이 시작되기 전. 대개 곡 중반이다.
3. **시작점을 잡는다.** md의 「비고」에 **트림 기준점**이 트랙마다 적혀 있다.
   - 예: `blues_A` → "1마디 1박 A7의 어택", `jazz_C` → "1마디 1박 Dm7의 베이스 어택"
   - **`neosoul_*` 는 예외** — 레이드백 필이라 드럼이 일부러 밀려 있다. **베이스/로즈의 1박 다운비트**를 기준으로 잡는다.
4. **끝점을 잡는다.** 시작점에서 **STEP 1에 메모한 목표 길이만큼** 뒤다.
   - 계산식: `1폼 길이(초) = 마디수 × 4 × 60 ÷ BPM` — 예: 12마디 × 240 ÷ 90 = **32.0초**
   - 실제로 자른 길이가 목표값과 **±0.1초 이상 어긋나면 마디를 잘못 셌다는 뜻**이다. 다시 잡는다.
   - 폼 마디수: **블루스 12마디 · 그 외 16마디 · 드럼만 16마디** (각 md 「폼」 항목)
5. **제로크로싱에 스냅**한다 (Audacity: `Z` 키 / 선택 → Select → At Zero Crossings). 파형이 0을 지나는 지점에서 잘라야 이음새에서 "툭" 소리가 안 난다.
6. 자른 구간만 남기고 `trimmed/blues_A_90.wav` 로 저장한다.
7. **잔향 처리** — 끝에서 심벌·로즈 서스테인이 뚝 끊기면, 끝부분에 **10~30ms 짧은 크로스페이드**를 준다(루프 시작 구간을 겹쳐 넣는 방식). `neosoul_*` 와 `drums` 에서 특히 필요하다.

## STEP 7 — `.m4a` 로 인코딩한다

```bash
ffmpeg -i trimmed/blues_A_90.wav \
  -c:a aac -b:a 128k -ac 2 -ar 44100 \
  -movflags +faststart \
  out/blues_A_90.m4a
```

- `-b:a 128k` · `-ac 2`(스테레오) · `-ar 44100` 은 21_backing R1 확정값이다. 바꾸지 않는다.
- 결과 용량이 각 md 「렌더 타깃」 표의 **예상 용량과 크게 다르면** 길이를 잘못 잘랐을 가능성이 높다.

## STEP 8 — 이음새를 검수하고 `loopStart`/`loopEnd` 를 실측한다

> AAC는 파일 앞뒤에 **인코더 프라이밍/패딩 무음**을 붙인다. 마디 경계로 완벽히 잘랐어도 `.m4a` 로 만들면 이음새에 미세한 갭이 생길 수 있다. 매니페스트에 `loopStart`/`loopEnd` 필드가 있는 이유가 이것이다(21_backing T1).
> **그래서 이 값은 반드시 인코딩 *후*의 `.m4a` 를 디코드해서 잰다.** WAV 기준으로 재면 어긋난다.

1. `.m4a` 를 브라우저로 열 수 있는 위치에 두고, 개발자도구 콘솔에서 아래를 실행한다:

```js
const url = '/audio/backing/guitar/blues_A_90.m4a';   // ← 측정할 파일
const ctx = new AudioContext();
const buf = await ctx.decodeAudioData(await (await fetch(url)).arrayBuffer());
const d = buf.getChannelData(0), TH = 0.0015;
let s = 0;              while (s < d.length && Math.abs(d[s]) < TH) s++;
let e = d.length - 1;   while (e > s && Math.abs(d[e]) < TH) e--;
console.log({
  duration : buf.duration,
  loopStart: s / buf.sampleRate,
  loopEnd  : (e + 1) / buf.sampleRate,
});
```

2. **`loopEnd - loopStart` 가 STEP 1의 목표 길이와 맞는지** 확인한다. 크게 어긋나면 STEP 6으로 돌아간다.
3. **귀로 확인한다** — 루프를 켜고 **최소 4바퀴** 돌려 본다. 이음새에서 툭/쨍/박자 튐이 하나도 들리지 않아야 한다(21_backing **V3**). 들리면 STEP 6의 7번(크로스페이드)으로 돌아간다.
4. 나온 `loopStart` / `loopEnd` 값을 메모한다. 매니페스트에 들어간다.

## STEP 9 — repo에 넣고 기록을 남긴다

1. `.m4a` 를 배포 경로로 복사한다:
   ```bash
   cp out/blues_A_90.m4a web_app/public/audio/backing/guitar/
   ```
   **`.wav` 는 절대 복사하지 않는다.**
2. **해당 md의 「생성 로그」 표를 채운다.** — 생성일 · Suno 곡 링크 · 트림 완료 ☑
   - 이건 선택이 아니라 **라이선스 기록 의무**다. `license:"Suno-Pro"` 의 근거가 "언제 생성했는가"이고, Pro 구독 중 생성물이어야 재배포 권리가 붙는다(21_backing T5).
3. STEP 8에서 잰 `loopStart`/`loopEnd` 를 매니페스트 작성용으로 함께 적어 둔다.
4. 위 「진행 체크리스트」의 해당 항목에 체크한다.

## STEP 10 — 반복

STEP 1로 돌아가 다음 렌더 타깃 행으로. 같은 md의 나머지 템포는 **STEP 3의 `{BPM}` 숫자만 다르므로** 훨씬 빠르다.

> **요령:** 한 md의 3(5)개 템포를 **연속으로** 처리하는 편이 효율적이다. 프롬프트를 다시 붙여넣을 필요 없이 숫자만 바꾸면 되고, 트림 기준점·검수 포인트가 동일해 손에 익는다.

## 절대 하지 말 것

| 금지 | 이유 |
|---|---|
| `.wav` 를 repo에 커밋 | 저장소가 수백 MB 비대해지고 히스토리에 영구히 남는다 |
| 하나 만들어 재생 속도로 템포 바꾸기 | 피치=조가 같이 변한다 (21_backing R2) |
| MP3로 받아 편집 | 손실 누적 + 인코더 패딩으로 이음새가 나빠진다 |
| 마디 안 세고 "대충 이쯤" 자르기 | 루프가 박자에서 밀려 연습 도구로서 못 쓴다 |
| 128k / 44.1k / 스테레오 외의 설정 | 확정 포맷을 벗어나면 용량 예산·호환성 전제가 깨진다 |
| 생성일 기록 생략 | 무료 공개 배포의 라이선스 근거가 사라진다 |

## 41트랙을 다 끝낸 뒤 (구현 세션이 이어받음)

1. 매니페스트 `backing.json` 작성 — 트랙마다 `{ id, instrument, genre, key, scale, bpm, file, loopStart, loopEnd, credits, license:"Suno-Pro" }`
2. 총 용량 실측 → 목표 **≈24 MB**, 상한 80 MB (21_backing **V5**)
3. `public/_headers` 에 오디오 immutable 캐시 규칙 추가 검토 (21_backing T4)
4. 배킹 음원은 SW **precache 제외** 확인 — 런타임 캐시만 (21_backing **V6**)

---

# 진행 체크리스트

## 프롬프트 저작
- [x] 디렉터리·파일 규약 확정 (본 README)
- [x] 기타 13개 md 저작 (drums / blues×2 / rock×3 / funk×2 / neosoul×2 / jazz×3)
- [ ] 베이스 세트 md 저작 (기타 배포 후)

## 음원 생성 (사람 · Suno Pro) — 「사람이 순서대로 따라 하는 방법」대로 진행
- [ ] `drums` 5트랙
- [ ] `blues_A` 3 · `blues_E` 3
- [ ] `rock_Am` 3 · `rock_E` 3 · `rock_G` 3
- [ ] `funk_Am` 3 · `funk_Em` 3
- [ ] `neosoul_Am` 3 · `neosoul_Dm` 3
- [ ] `jazz_Am` 3 · `jazz_C` 3 · `jazz_F` 3

## 후처리
- [ ] 41트랙 루프 트림 + 심리스 검수
- [ ] .m4a 128k 인코딩 + 용량 실측(목표 ≈24 MB, 상한 80 MB)
- [ ] 각 md 「생성 로그」에 생성일·링크 기록 (라이선스 근거)
