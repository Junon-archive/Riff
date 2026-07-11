---
title: "温かいドミナント — G13ボイシング"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — G13、ヴァンプの二つ目の色

## ① 理論・説明

昨日 **Dm9** を手に乗せたので、今日は相棒のコード **G13** に出会います。ヴァンプの二つ目の席です。<mark>G13は少し緊張を含みますが、決して鋭くない、温かいドミナントです。</mark>普通のドミナント7は家へ戻ろうとする張りがありますが、そこに**13度**を乗せるとその緊張がやわらかくほどけます。まるで張り詰めた糸に**温かい毛布**をかけた感じです。今日もルートは**ベースに任せて**、手は色を塗るだけでいいのです。理論が難しく感じても大丈夫。昨日と同じ感覚のまま、席を移すだけですから。

**G13** の中身を開けてみましょう。構成音は**ルート(G)・3・b7・13**の四つです。6弦3フレットがルート **G**、4弦3フレットが **b7(F)**、3弦4フレットが **3(B)**、2弦5フレットが **13(E)** です。<mark>ここで13度(E)がドミナントの緊張を温かく包みます。</mark>昨日のDm9と比べると、ルート弦が5弦から6弦へ下がりました。

<mark>面白いのは、2弦5フレット(E)が昨日とまったく同じことです。</mark>昨日はそのEが**9度**でしたが、今日は**13度**へ役割だけ変わりました。だから**小指はその場所にそのまま**置いておけばいいのです。では **G13** のグリップを手に乗せてみましょう。

```json
{
  "id": "m1.w1.d2.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip — 3x345x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **6弦3フレット**がルートGです。4弦3フレット（b7）、3弦4フレット（3）、2弦5フレット（13）を一緒に押さえます。5弦・1弦はミュート。

## ② ビジュアル資料

G13も一音ずつばらして聴くと色がはっきりします。次のように **ルート → b7 → 3 → 13** の順で一音ずつ鳴らしてみましょう。<mark>3度(B)とb7(F)がドミナントの芯なら、13度(E)はその上にかける毛布です。</mark>

```json
{
  "id": "m1.w1.d2.g13_arp",
  "type": "tab",
  "meta": { "title": "G13 note-by-note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "13", "role": "color" }
    ]}
  ]}
}
```
▶ **BPM 60。** 四つの音を下から上へ一つずつ、5弦を飛び越す感覚を身につけます。

では四つの音を一度に鳴らしてみましょう。G13は5弦を空けるので、右手が**6弦と4弦の間**を軽く飛び越さなければなりません。<mark>5弦に触れないよう、右手の軌跡を先に描いてみてください。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60。**G13** のグリップを押さえては離して手をほぐします。<mark>鳴るべき四弦だけがきれいに出ているか</mark>を一つずつ確認します。

**10〜20分 · 頭のトレーニング（グリップの形をゆっくり）**
グリップを作るとき、指が置かれる順番を声に出して押さえます。**ルート(6弦) → b7(4弦) → 3(3弦) → 13(2弦)** の順で。

**20〜40分 · 実践コンピング（BPM 70）**
**G13** を一小節に一回ずつやさしく鳴らします。<mark>5弦が漏れないか</mark>だけを見ます。

```json
{
  "id": "m1.w1.d2.g13_strum",
  "type": "tab",
  "meta": { "title": "G13 whole-note comping", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "arpeggio", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "arpeggio", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 70。** 二小節ともG13です。5弦を飛び越しながら下から上へやさしく掃きます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音してチェックします。<mark>5弦の雑音なく四弦が温かく鳴っているか</mark>。

**今日の完了基準：** G13ボイシングを5弦の雑音なく四弦すべてきれいに鳴らせる。

## ④ ヒント / よくあるミス

**G13** グリップでよく出るミスだけを挙げます。

```json
{
  "id": "m1.w1.d2.g13_mute",
  "type": "fretboard_diagram",
  "meta": { "title": "Mute strings 5 and 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **5弦は人差し指の先で軽くミュート。** 6弦を押さえた人差し指を少し寝かせて5弦を覆います。

- **5弦が鳴ってしまう。** 6弦を押さえた人差し指の先を少し寝かせて5弦を止めます。
- **3弦の3度が鳴らない。** 薬指を立てて4フレットを正確に押さえると明るい芯が生きます。
- **6弦のルートがぼやける。** 人差し指の付け根ではなく指紋の先で3フレットを押さえます。
- **コードがこもる。** 13度(2弦)まではっきり鳴らすと温かい色が出ます。
