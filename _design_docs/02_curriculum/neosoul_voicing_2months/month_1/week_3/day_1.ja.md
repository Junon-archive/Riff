---
title: "Ab13グリップ — 半音上のアプローチコード"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — Ab13グリップを作る

## ① 理論・説明

今週は<mark>目標コードをそのまま押さえるのではなく、半音上からすべり込むネオソウルのシグネチャー</mark>を学びます。先週のヴァンプの着地点 **G13** のちょうど **半音上** にそっと乗せてから押し下げるコード、それが **Ab13** です。今日はそのアプローチコードの手の形から手に乗せていきましょう。

うれしいことに、**Ab13** は新しいグリップではありません。先週覚えた **G13フォームをそのまま一フレット上へ** ずらせば、もう **Ab13** です。<mark>手の形は同じで、位置だけ半音上がっただけです。</mark>6弦のルートが **3フレット（G）** から **4フレット（Ab）** へ、ほかの音もすべて **+1フレット** ずつついて上がります。

まずは慣れた **G13** フォームをもう一度確認します。6弦 **3フレット** がルートG、4弦がb7、3弦が3度、2弦が **13度** です。<mark>この四つの音の形をしっかり目に入れておけば、あとは一フレット押し上げるだけです。</mark>

```json
{
  "id": "m1.w3.d1.g13_base",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 base grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **慣れたG13。** 6弦3フレットのルートから、4・3・2弦へb7・3度・13度が積まれます。

## ② ビジュアル資料

ではこのフォームを丸ごと **一フレット上へ** ずらしてみましょう。6弦 **4フレット（Ab）** が新しいルートになり、b7・3度・13度がすべて一つずつ上がります。<mark>指と指の間隔は一つも変わらず、手全体が半音上へ引っ越した感覚です。</mark>

```json
{
  "id": "m1.w3.d1.ab13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Ab13 grip — G13 form +1 fret", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 6, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Ab13グリップ。** G13から手の形はそのまま、6弦が4フレットへ上がった位置です。

音でも確かめましょう。**Ab13** を全音符で長く鳴らすと、G13より半音高い **少し浮いた緊張感** が感じられます。<mark>この浮いた感じが、まさに翌日すべり降りる力になります。</mark>

```json
{
  "id": "m1.w3.d1.ab13_hold",
  "type": "tab",
  "meta": { "title": "Ab13 — hold", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** Ab13を一小節長く鳴らします。半音上の浮いた色を耳に入れましょう。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 65。** **G13** と **Ab13** を交互に押さえて手を温めます。<mark>一フレット上下に移すだけなので難しくありません。</mark>

**10〜20分 · 頭のトレーニング（一フレットの引っ越し）**
音を出さず左手だけで **G13 → Ab13** の移動を描きます。手全体が半音上へ丸ごと動く感覚だけを確認します。

**20〜40分 · 実践グリップチェック（BPM 75）**
下の二小節を繰り返します。1小節 **Ab13**、2小節 **G13** をそれぞれ全音符で長く鳴らし、<mark>二つのグリップをなめらかに行き来すること</mark>だけを練習します。

```json
{
  "id": "m1.w3.d1.ab13_g13_loop",
  "type": "tab",
  "meta": { "title": "Ab13 to G13 — grip check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 4, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "Ab13", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 6, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 75。** Ab13 → G13を一小節ずつ長く鳴らします。二つのグリップの手の形の違いを体に刻みます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音して聞き返します。Ab13とG13の高さの違いが耳ではっきり区別できるか確認します。

**今日の完了基準：** G13フォームを一フレット上へずらして **Ab13** グリップを正確に押さえ、全音符できれいに鳴らせる。

## ④ ヒント / よくあるミス

**Ab13** グリップを作るときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w3.d1.shift_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Half-step map — Ab13 vs G13", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 4, "label": "Ab R", "role": "root" },
    { "string": 6, "fret": 3, "label": "G R", "role": "root" },
    { "string": 3, "fret": 5, "label": "Ab 3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "G 3", "role": "chord_tone" }
  ]}
}
```
▶ 6弦4→3フレットがAb→Gルート、3弦5→4フレットが各コードの3度です。

- **音が濁る。** 5弦と1弦はミュートです。鳴らないようそっと覆っておきます。
- **一フレット足りない。** G13のままではだめです。四つの音すべて正確に **+1フレット** です。
- **手首がこわばる。** 4フレットへ上がると手が少し窮屈になります。親指を首の裏の中央へ下げて力を抜きます。
- **13度が押さえられない。** 2弦6フレットは小指です。先でコンと押さえて隣の弦に触れないようにします。
