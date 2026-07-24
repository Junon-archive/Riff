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

## 목소리 (배치 완료 2026-07-24)

- **출처:** **Piper TTS** 로컬 생성 · 음성 모델 **`en_US-lessac-medium`**(rhasspy/piper-voices). 단어별 개별 렌더(`"One."` … `"Six."`) → 절단 불필요.
- **라이선스:** Piper 엔진 MIT · lessac 음성은 퍼블릭 도메인 계열 학습셋 기반 → 생성 오디오 자유 사용/배포 가능.
- **포맷:** WAV 16-bit mono 22.05kHz, 각 ~0.7~0.8s(끝 여운 포함, 그대로 채택 — 트림 미적용).

| 슬롯 | 배치 경로 | 단어 |
|---|---|---|
| 1~6 | `web_app/public/metronome/voice/1.wav … 6.wav` | One·Two·Three·Four·Five·Six |

- **비고:** 다른 음성(amy·ryan 등)으로 교체 원하면 동일 절차로 재생성 후 드롭인.
