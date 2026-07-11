---
title: "シグネチャー・ヴァンプ — Dm9 → G13"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 完成！ Dm9 → G13 ヴァンプ

## ① 理論・説明

ついに1週目の舞台です。今日は二つのグリップを一つの**ヴァンプ**につないで演奏します。<mark>このDm9 → G13ヴァンプは、これから二か月ずっと私たちが立つ舞台です。</mark>ヴァンプとは短いコード進行を**繰り返し続け**、その上で歌いソロを取る、ネオソウルの**心臓**のような枠組みです。今日この**二小節**を手に入れれば、来週からその上にリズムや装飾を重ねていけます。昨日切り替えまで固めたので、今日はただ気持ちよく転がるようにするだけです。

演奏はとてもシンプルです。**1小節 = Dm9、2小節 = G13**、一小節に一コードずつです。**BPM 75**でやさしく、全音符一つのように長く鳴らします。<mark>ルートは軽く置いて、9度と13度が作る色の移り変わりを耳で感じてみてください。</mark>Dm9の柔らかな9度からG13の温かい13度へ、色がすっと変わるその瞬間がこのヴァンプのハイライトです。

今日は速さへの欲を手放してください。<mark>完璧な速さより、二小節が途切れず丸く転がるその感覚が百倍大切です。</mark>ではまず **Dm9** のグリップを手に乗せ、続けて **G13** へ進みましょう。

```json
{
  "id": "m1.w1.d4.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip — x5355x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
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
▶ **1小節はDm9。** 5弦5フレットのルートにグリップを乗せます。

## ② ビジュアル資料

そして2小節は **G13** です。二つのグリップをもう一度並べて目に焼きつけておきましょう。<mark>二つの手の形が一つの体のようにつながるとき、ヴァンプが生きます。</mark>

```json
{
  "id": "m1.w1.d4.g13_grip",
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
▶ **2小節はG13。** 6弦3フレットのルートへ下がりますが、2弦の小指はそのままです。

さあ、二小節を一つにつないだ**完成したヴァンプ**です。今週ずっと手に馴染ませてきたその流れが、下の二小節にすべて詰まっています。<mark>この二小節が今週の結果物です。</mark>

```json
{
  "id": "m1.w1.d4.vamp_grips",
  "type": "tab",
  "meta": { "title": "Dm9 - G13 vamp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
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
▶ **BPM 75、やさしく。** 1小節 **Dm9**（5弦5フレットのルート）、2小節 **G13**（6弦3フレットのルート）。ルートは軽く、**9度・13度（黄）**の色を耳で感じます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。二つのグリップを交互に押さえて手を温めます。<mark>昨日の切り替えの感覚をもう一度呼び戻します。</mark>

**10〜20分 · 頭のトレーニング（ヴァンプを描く）**
音を出さず左手だけでDm9 → G13をゆっくり行き来します。**小指のアンカー**が保たれているか目で確認します。

**20〜40分 · 実践ヴァンプ（BPM 75）**
下の四小節のヴァンプを**途切れず**繰り返します。<mark>二小節が丸くつながるか</mark>だけを見ます。

```json
{
  "id": "m1.w1.d4.vamp_4bars",
  "type": "tab",
  "meta": { "title": "Dm9 - G13 vamp x2", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 75, "notation": "staff+tab" },
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
▶ **BPM 75。** Dm9 → G13を二回まわします。最初から最後まで一息で転がるようにします。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音してチェックします。<mark>Dm9 → G13ヴァンプが最初から最後までなめらかに転がるか</mark>。

**今日の完了基準：** ピン留めのDm9 → G13ヴァンプをBPM 75で途切れず繰り返し演奏できる。（1週目完成！）

## ④ ヒント / よくあるミス

**ヴァンプ**を転がすときによく出るミスだけを挙げます。

```json
{
  "id": "m1.w1.d4.root_move",
  "type": "fretboard_diagram",
  "meta": { "title": "Root move — string 5 to string 6", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "label": "Dm9 R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 3, "label": "G13 R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **ルートだけ5弦 → 6弦へ移します。** 二つのコードの根がどこにあるか覚えておくとヴァンプがぶれません。

- **ヴァンプがすぐ途切れる。** コードの間、小指のアンカーを保てば自然につながります。
- **速くすると汚くなる。** BPMを60に下げてまず清潔さを取り戻します。
- **二小節の長さが合わない。** 足で4拍を数え、小節の大きさを体に刻みます。
- **色が聞こえない。** 9度・13度（2弦）がはっきり鳴るとネオソウルの色が出ます。
