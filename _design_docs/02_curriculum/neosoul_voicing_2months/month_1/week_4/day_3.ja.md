---
title: "トップノートをメロディに — 一番高い音を歌のように動かす"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — トップノートをメロディに：一番高い音を歌のように動かす

## ① 理論・説明

昨日まではコードごとにトップノートが一つでした。今日はその **トップノートを複数の音でつないで** メロディを作ります。<mark>コードは敷いたまま、1弦のトップノートだけを上下に動かすと、コードの上に歌が流れます。</mark>これがまさに **トップライン**、コードメロディの心臓です。

**Dm9** の上でトップノートを1弦 **5→8→10フレット** に上げます。音名では **A→C→D（5度→b7→ルート）** です。<mark>コードは一か所に止まったまま、トップノートが歩いて上がると、のっぺりしたヴァンプが物語を語り始めます。</mark>**G13** の上では1弦 **7→10→7フレット（3度→5度→3度）** で上り下りします。

今日はコードを止めたまま、**トップライン** だけを歌わせます。**BPM 70** で、トップノートが一音一音はっきりつながるか聞きます。<mark>トップラインがなめらかにつながれば、明日コードと合わせてM1の仕上げヴァンプになります。</mark>まず **Dm9** の上のトップラインから描きます。

```json
{
  "id": "m1.w4.d3.dm9_top_line",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 top-note line — 5 to b7 to R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 5, "label": "5", "role": "target", "highlight": true },
    { "string": 1, "fret": 8, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 10, "label": "R", "role": "target", "highlight": true }
  ]}
}
```
▶ **Dm9の上のトップライン。** 1弦5→8→10フレット、緑の音（5度・ルート）がラインの着地です。

## ② ビジュアル資料

**G13** の上のトップラインです。1弦 **7→10→7フレット**、音名では **B→D→B（3度→5度→3度）** で上って再び下ります。<mark>3度から出発し5度まで上って3度へ戻ると、一小節が小さな歌のように閉じます。</mark>

```json
{
  "id": "m1.w4.d3.g13_top_line",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 top-note line — 3 to 5 to 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 5, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 7, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 10, "label": "5", "role": "scale" }
  ]}
}
```
▶ **G13の上のトップライン。** 1弦7↔10フレットを行き来します、緑の3度が始まりと終わりです。

さあコードを外して **トップラインだけ** を続けて聞きます。二小節が一つの短いメロディで流れます。<mark>コードなしでもトップラインだけで歌になるか耳で確認します。</mark>

```json
{
  "id": "m1.w4.d3.top_melody",
  "type": "tab",
  "meta": { "title": "Top-note melody only", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "R", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 70。** コードなしで1弦のトップラインだけを歌います。緑の音（着地）がはっきり到着するか聞きます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 65。** 1弦で5・8・10フレット、7・10フレットをゆっくり行き来して手を温めます。<mark>トップラインの音の間がなめらかにつながるか耳で確認します。</mark>

**10〜20分 · 頭のトレーニング（トップラインを描く）**
音を出さず1弦だけを目で追い、**トップライン** の経路（5→8→10、7→10→7）を手に馴染ませます。

**20〜40分 · 実践コード+トップライン（BPM 70）**
下の四小節を **途切れず** 繰り返します。コードを前2拍敷いて、後2拍でトップノートを動かします。<mark>コードの上をトップラインが歩いていくのが聞こえるか</mark>だけを見ます。

```json
{
  "id": "m1.w4.d3.top_melody_practice",
  "type": "tab",
  "meta": { "title": "Chord + top line x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "duration": "quarter", "label": "5", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70。** コード+トップラインを二周まわします。コードは背景、トップノートを前で歌わせます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。コードだけだった昨日と今日、トップラインが乗った音がどれだけ歌のように聞こえるか比べます。

**今日の完了基準：** Dm9とG13の上でトップライン（1弦5→8→10、7→10）をBPM 70でなめらかに動かし、コードの上を歩くメロディを聞かせられる。

## ④ ヒント / よくあるミス

**トップライン** を動かすときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w4.d3.top_line_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Where the top line travels", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 8, "dots": [
    { "string": 1, "fret": 5, "label": "Dm9 top", "role": "target", "highlight": true },
    { "string": 1, "fret": 8, "label": "pass", "role": "scale" },
    { "string": 1, "fret": 10, "label": "peak", "role": "scale" },
    { "string": 1, "fret": 7, "label": "G13 top", "role": "target", "highlight": true }
  ]}
}
```
▶ 緑の音（5・7フレット）が各コードのトップラインの出発点、8・10フレットはその間をつなぐ経過音と頂点です。

- **トップノートを動かすうちコードが切れる。** コードの指は押さえたまま、1弦を押さえる指だけ動かします。
- **ラインがぶつぶつ切れる。** 音の間をつないでなめらかに弾いてこそ歩くメロディに聞こえます。
- **トップノートが小さい。** トップは歌なので1弦をコードより少しはっきり鳴らします。
- **速さから上げる。** ラインが切れたらBPM 65に下げてまず音と音の連結を取り戻します。
