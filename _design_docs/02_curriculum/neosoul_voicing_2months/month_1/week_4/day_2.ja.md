---
title: "トップノート認識 — コードで一番高い音を見つける"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — トップノート認識：コードで一番高い音を見つける

## ① 理論・説明

昨日は共通音を残すなめらかな転換を身につけました。今日はコードで **一番高い音、トップノート** を見つけます。<mark>トップノートはコードの上に乗った声です — 耳が最初に聞き、いちばん長く覚える音です。</mark>コードは背景になり、**トップノート** が歌を導きます。

二つのコードのトップノートの場所は決まっています。**Dm9** のトップノートは1弦 **5フレット（A、5度）**、**G13** のトップノートは1弦 **7フレット（B、3度）** です。<mark>同じ1弦で、たった二フレット差の5と7で、二つのコードの声が変わります。</mark>まだ動かさず、まず **トップノートがどこにあるか** を手に刻みます。

今日はコードを押さえ、その上の **トップノートだけをつまんで** 鳴らす練習です。**BPM 70** で、コードを敷いてから1弦のトップノートをはっきり鳴らします。<mark>トップノートを正確に押さえられれば、明日それをメロディとして動かす準備が整います。</mark>まず **Dm9** のトップノートから見つけます。

```json
{
  "id": "m1.w4.d2.dm9_top",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 — find the top note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" },
    { "string": 1, "fret": 5, "label": "5", "role": "target", "highlight": true }
  ]}
}
```
▶ **Dm9のトップノートは1弦5フレット（A、5度）。** 緑の音がコードの上に乗った声です。

## ② ビジュアル資料

今度は **G13** のトップノートです。1弦 **7フレット（B、3度）**、Dm9のトップノートより二フレット上です。<mark>3度はコードの表情を決める音なので、トップに乗せると明るく歌います。</mark>

```json
{
  "id": "m1.w4.d2.g13_top",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 — find the top note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "13", "role": "color" },
    { "string": 1, "fret": 7, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **G13のトップノートは1弦7フレット（B、3度）。** 緑の音がコードの明るい表情を上に乗せます。

さあコードを敷いてからトップノートを押さえます。コードは前2拍、トップノートは後2拍です。<mark>コードとトップノートを一つの体のように鳴らす最初の連結です。</mark>

```json
{
  "id": "m1.w4.d2.top_recognize",
  "type": "tab",
  "meta": { "title": "Chord then top note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70。** コードを2拍敷いて、1弦のトップノート（緑）を2拍鳴らします。トップノートがコードの上へはっきり浮かぶか聞きます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 65。** Dm9とG13を押さえ、1弦のトップノートだけを弾きます。<mark>トップノートが他の弦に埋もれずはっきりしているか耳で確認します。</mark>

**10〜20分 · 頭のトレーニング（トップノートの場所探し）**
音を出さず二つのコードを押さえ、各コードの1弦 **トップノート** が5フレット・7フレットのどこかを目で押さえます。

**20〜40分 · 実践コード+トップノート（BPM 70）**
下の四小節を **途切れず** 繰り返します。<mark>コードよりトップノートがひと回り大きく聞こえるか</mark>だけを見ます。

```json
{
  "id": "m1.w4.d2.top_recognize_loop",
  "type": "tab",
  "meta": { "title": "Chord then top note x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 70。** コード+トップノートを二周まわします。トップノートが毎回はっきり浮かぶのを逃さないように。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。コードに埋もれず、トップノートが声のように聞こえるか確認します。

**今日の完了基準：** Dm9とG13で各コードのトップノート（1弦5フレット・7フレット）を正確に押さえ、コードの上へはっきり鳴らせる。

## ④ ヒント / よくあるミス

**トップノート** を押さえるときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w4.d2.top_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Top notes — Dm9 5, G13 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 6, "dots": [
    { "string": 1, "fret": 5, "label": "Dm9 5", "role": "target", "highlight": true },
    { "string": 1, "fret": 7, "label": "G13 3", "role": "target", "highlight": true }
  ]}
}
```
▶ 1弦5フレットがDm9のトップノート（5度）、7フレットがG13のトップノート（3度）です。

- **トップノートがコードに埋もれる。** 1弦を少し強く、はっきり弾きます。トップは声なので前に出るべきです。
- **トップノートが見つからない。** コードを押さえたその手のまま1弦だけ確認すれば場所が見えます。
- **コードが切れる。** トップノートを押さえる間もコードの指はそのまま押さえておきます。
- **速さから上げる。** トップノートがぼやけたらBPM 65に下げてまず音をはっきりさせます。
