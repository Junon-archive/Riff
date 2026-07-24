# 메트로놈 샘플 — 출처·라이선스 메모 (CC0)

> §B3-1(20_metronome.md) 지시에 따른 "확보 세션" 산출 메모. 엔진은 `public/metronome/**` 에서
> `m4a → mp3 → ogg → wav` 순으로 자동 탐색하므로 아래 WAV가 그대로 인식된다(변환 불필요, 변환은 선택).

## 드럼 (배치 완료 2026-07-24)

- **출처:** GitHub `Boochi44/free-drum-samples` — **bounce 키트**(`drum-samples/02-bounce/`).
- **라이선스:** **CC0 1.0** (저작자 표시 불필요·상업/재배포 자유). TR-808 파생(Edward Loveall, CC0). 레포 README 명시.
- **원본 포맷:** WAV 16-bit mono 44.1kHz.

| 슬롯 | 배치 경로 | 원본 파일 | 길이 |
|---|---|---|---|
| 킥(강박) | `web_app/public/metronome/drum/kick.wav` | `02-bounce/kicks/bounce-kick-02.wav` | ~0.5s |
| 스네어(백비트) | `web_app/public/metronome/drum/snare.wav` | `02-bounce/snares/bounce-snare-02.wav` | ~0.5s |
| 하이햇(약박·세분) | `web_app/public/metronome/drum/hihat.wav` | `02-bounce/hi-hats/hi-hat-closed-01.wav` | ~0.25s |

- **선정 배경:** vintage(로파이) 키트는 비트크러시 노이즈("바람소리")가 섞여 제외. 같은 레포의 bounce 키트가
  "clean·crisp"라 채택(전자 808 계열이나 노이즈 없음). 사람 청음으로 3종 확정.
- **후속(선택):** 통일하려면 `.m4a`(AAC 128k)로 변환 가능(ffmpeg 필요, 현재 미설치). 원샷이 소형이라 WAV 유지도 무방.

## 목소리 (미확보 — 대기)

- **필요:** 영어 One~Six(6개), `public/metronome/voice/1.m4a … 6.m4a` (`.wav`도 자동 인식).
- **상태:** 사람이 Freesound에서 탐색 중. 후보(원투쓰리포 연결본)는 절단 필요 → TTS(Piper 등) 개별 렌더 대안 검토.
- **라이선스 원칙:** CC0 또는 자체 녹음/TTS(퍼블릭 음성 모델). 확보 시 이 표에 출처·라이선스 기록.
