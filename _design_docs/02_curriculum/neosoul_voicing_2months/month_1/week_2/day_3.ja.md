---
title: "sus4の緊張 → 3度への解決"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — sus4の緊張、3度へ溶ける解決

## ① 理論・説明

今日は今週のハイライトです。**sus4** はコードの **3度を4度へ少し先送りした** 音です。<mark>3度があるべき席を4度が代わりに占めると、少し浮いた緊張が生まれます。</mark>そしてその **4度が半音下の3度へ降りて落ち着く瞬間**、ネオソウル特有の溶ける解決が咲きます。緊張と解決、この二つが一体でくっついているのがsusの魅力です。

私たちのヴァンプのGコードで見てみましょう。**G13sus4** の4度は **C（3弦5フレット）**、G13の3度は **B（3弦4フレット）** です。<mark>ちょうど指一本が3弦で5フレット → 4フレットへ半音すべると、緊張がすっとほどけます。</mark>4度（C）から3度（B）へ — この1フレットの動きが今日のすべてです。

ポイントは **急がないこと** です。sus4の浮いた緊張を十分に聞かせてから、ゆっくり3度へ降ろします。<mark>緊張を先に味わわせてから解いてこそ、解決がより甘く聞こえます。</mark>まず **G13sus4** のグリップで緊張の手の形をつかみましょう。

```json
{
  "id": "m1.w2.d3.g13sus4_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13sus4 grip — 4th (C) on string 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 4, "label": "4", "role": "color" },
    { "string": 2, "fret": 5, "finger": 3, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13sus4** — 3弦5フレットが **4度（C）** です。3度の席を4度が占めた緊張の音です。

## ② ビジュアル資料

さてその緊張をほどく **G13** です。3弦の指だけ **5フレット → 4フレット** へ半音降りると **3度（B）** に着きます。<mark>ほかの指はそのままに、たった一つだけ動かします。</mark>

```json
{
  "id": "m1.w2.d3.g13_resolve",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 — 3rd (B) resolved", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **G13** — 3弦が4フレットの **3度（B）** へ降りて落ち着きました。緊張がほどけた音です。

さあ二つのコードを一小節の中でつなぎます。前2拍は **G13sus4**、後2拍は **G13** です。<mark>4度から3度へ溶け落ちるその一瞬が今日の結果物です。</mark>

```json
{
  "id": "m1.w2.d3.sus_resolve",
  "type": "tab",
  "meta": { "title": "G13sus4 -> G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72。** 前2拍G13sus4（4度C）、後2拍G13（3度B）。3弦の1フレットが溶け落ちます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60。3弦だけ5フレット ↔ 4フレットを行き来して手を温めます。<mark>指一本の半音移動を体に馴染ませます。</mark>

**10〜20分 · 頭のトレーニング（緊張 → 解決を描く）**
音を出さず左手だけでG13sus4 → G13を行き来します。**ほかの三本の指は固定**、3弦だけが動くかを目で確認します。

**20〜40分 · 実践ヴァンプ（BPM 72）**
下の四小節を繰り返します。2・4小節でsus4を先に聞かせ、3度へ溶かします。<mark>緊張を十分に味わったあとにほどける甘さ</mark>を耳で追います。

```json
{
  "id": "m1.w2.d3.sus_vamp_drill",
  "type": "tab",
  "meta": { "title": "Dm9 - G13sus -> G13 vamp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13sus4", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "color", "label": "4" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 72。** Dm9 → （G13sus4 → G13）を二回。sus4を先に聞かせ、3度へ溶かします。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。sus4の緊張と3度の解決がはっきり聞こえるか確認します。

**今日の完了基準：** G13sus4の緊張を聞かせたあと、3度（B）へ半音降りる解決をなめらかに演奏できる。

## ④ ヒント / よくあるミス

**sus解決** でよく出るミスだけを挙げます。

```json
{
  "id": "m1.w2.d3.melt_move",
  "type": "fretboard_diagram",
  "meta": { "title": "The melt — string 3 fret 5 to fret 4", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "label": "4 (sus)", "role": "color" },
    { "string": 3, "fret": 4, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ 3弦 **5フレット（4度） → 4フレット（3度）**。指一本が半音降りて溶けます。

- **解決が聞こえない。** sus4を短く弾きすぎると緊張が積もりません。前2拍を十分に鳴らします。
- **ほかの指も一緒に動く。** 3弦一つだけを動かします。残りはアンカーのように押さえておきます。
- **3度を通り過ぎる。** 4フレットでぴたりと止めます。3フレットまで下がると音がぼやけます。
- **速すぎる。** BPM 60に下げ、溶け落ちる感覚からまず見つけます。
