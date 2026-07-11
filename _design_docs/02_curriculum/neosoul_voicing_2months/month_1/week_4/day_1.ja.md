---
title: "ボイスリーディング — 共通音を残して最小で動かす"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — ボイスリーディング：共通音を残して最小で動かす

## ① 理論・説明

4週目です。今週はコードの上にメロディを乗せる **コードメロディの第一歩** を踏み出します。その土台がまさに **ボイスリーディング** です。<mark>コードを変えるとき手全体を動かさず、重なる音（共通音）はそのまま残し、必要な音だけを少し動かすのです。</mark>シグネチャー・ヴァンプ **Dm9 → G13** で体に馴染ませます。

二つのコードを重ねると驚きます。**Dm9** の **F**（4弦3フレット）と **E**（2弦5フレット）は **G13** でもそのまま生きています。<mark>共通音の二つは指を離さず、内側の一音だけ半音動かせばコードが変わります。</mark>こうして **最小の移動** でつなぐと、音がぶつぶつ切れず水のように流れます。

今日は速さより **なめらかな転換** です。**BPM 70** でゆっくり、コードが変わるとき手がどれだけ少なく動くかを目で確かめます。<mark>共通音を残す感覚が手に付けば、トップノートメロディを乗せる舞台が整います。</mark>まずホームコード **Dm9** から手に乗せます。

```json
{
  "id": "m1.w4.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **ホームコードDm9。** 5弦5フレットのルート、2弦の9度がふわりとした色を出します。

## ② ビジュアル資料

今度は目標コード **G13** です。**Dm9** と重ねると、共通音 **F** と **E** は場所を守り、内側の音だけ半音下がります。<mark>指一本の動きでコードが切り替わる感じを目で捉えます。</mark>

```json
{
  "id": "m1.w4.d1.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13。** 6弦3フレットのルート、内側の **b7** だけ半音下の **3度** に降りてきました。

さあ二小節をつなぎます。1小節 **Dm9**、2小節 **G13**。<mark>共通音を残したままつなぐと、二つのコードが一つの流れになります。</mark>

```json
{
  "id": "m1.w4.d1.voice_leading",
  "type": "tab",
  "meta": { "title": "Voice leading Dm9 - G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 70。** 1小節Dm9から2小節G13へ行くとき、4弦と2弦はそのまま残し、内側の一音だけ半音下げます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 65。** Dm9とG13を交互に押さえて手を温めます。<mark>共通音F・Eはそのまま残すという感覚だけを思い出します。</mark>

**10〜20分 · 頭のトレーニング（共通音の確認）**
音を出さず左手だけで二つのコードを行き来し、**共通音** がどこで保たれるかを目で確認します。

**20〜40分 · 実践ボイスリーディング・ヴァンプ（BPM 70）**
下の四小節を **途切れず** 繰り返します。<mark>コードが変わるとき手が最小しか動かないか</mark>だけを見ます。

```json
{
  "id": "m1.w4.d1.voice_leading_loop",
  "type": "tab",
  "meta": { "title": "Voice leading vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 70。** ボイスリーディング・ヴァンプを二周まわします。手が少ししか動かなくてもコードが変わるのを感じます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。転換がぶつぶつ切れず、なめらかにつながるか確認します。

**今日の完了基準：** Dm9 → G13をBPM 70でつなぎ、共通音F・Eをそのまま残したままなめらかな転換を聞かせられる。

## ④ ヒント / よくあるミス

**ボイスリーディング** を練習するときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w4.d1.common_tone_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Common tones stay — F and E", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 3, "label": "F", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "E", "role": "color" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ 4弦3フレット（F）と2弦5フレット（E）は二つのコードの共通音、3弦5→4フレットが唯一動く音です。

- **手全体を動かす。** 共通音まで離すと音が切れます。F・Eは付けたまま内側の音だけ動かします。
- **内側の音が遅れる。** 3弦5→4フレットの移動をあらかじめ準備すれば拍がもたつきません。
- **速さから上げる。** 今日はなめらかな転換が先です。BPM 65に下げてまず動きを減らします。
- **コードがつぶれる。** 指先を立てて各弦がはっきり鳴るように押さえます。
