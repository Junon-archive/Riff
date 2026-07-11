---
title: "ネオソウル最初のグリップ — Dm9ボイシング"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — Dm9、ネオソウルの柔らかな最初の色

## ① 理論・説明

ネオソウル・トラックの1週目です。今週の目標は、シグネチャー・ヴァンプ **Dm9 → G13** の二つのグリップを手に入れることです。<mark>ネオソウルのコードは中音域の柔らかなグリップです。</mark>普通のコードはルートから積み上げますが、ネオソウルは**ルートをベースに任せて**、手は3度・7度・**テンション**だけを押さえます。ベースが土台を敷いてくれるので、私たちの手はその上に**色を塗るだけ**でいいのです。今日出会うコードは **Dm9**。名前は見慣れなくても、じつはDm7に**9度**を一粒乗せて、ふわりと柔らかな色を付けたコードです。理論が難しく感じても大丈夫。今日はただ、この一つのグリップを指先で出会う日です。

**Dm9** の中身を開けてみましょう。構成音は**ルート(D)・b3・b7・9**の四つです。5弦5フレットがルート **D**、4弦3フレットが **b3(F)**、3弦5フレットが **b7(C)**、2弦5フレットが **9(E)** です。<mark>この9度こそ、ネオソウル特有の柔らかな響きです。</mark>ルートは軽く置いて、色は耳で感じてみてください。

今日は速さもリズムも気にしないでください。目標は<mark>このDm9のグリップを一つ、きれいに鳴らすこと</mark>だけです。**どの弦がルートか**（5弦）だけ覚えておけば、次のグリップへ進むときぐっと楽になります。では **Dm9** のグリップを手に乗せてみましょう。

```json
{
  "id": "m1.w1.d1.dm9_grip",
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
▶ **5弦5フレット**がルートDです。4弦3フレット（b3）、3弦5フレット（b7）、2弦5フレット（9）を一緒に押さえます。6弦・1弦はミュート。

## ② ビジュアル資料

グリップを一音ずつばらして聴くと、色がもっとはっきり聞こえます。次のように **ルート → b3 → b7 → 9** の順で一音ずつ鳴らしてみましょう。<mark>9度(E)が最後に乗るとき、柔らかな色がぱっと開きます。</mark>

```json
{
  "id": "m1.w1.d1.dm9_arp",
  "type": "tab",
  "meta": { "title": "Dm9 note-by-note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "9", "role": "color" }
    ]}
  ]}
}
```
▶ **BPM 60。** 四つの音を下から上へ一つずつ、それぞれがはっきり鳴るか確かめます。

では四つの音を一度に鳴らしてみましょう。アルペジオで**下から上へやさしく**転がすと、ネオソウル特有のローリング感が出ます。<mark>手首の力を抜いて、ゆっくり掃き上げてみてください。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60。**Dm9** のグリップを押さえては離して手をほぐします。<mark>鳴るべき四弦だけがきれいに出ているか</mark>を一つずつ確認します。

**10〜20分 · 頭のトレーニング（グリップの形をゆっくり）**
グリップを作るとき、指が置かれる順番を声に出して押さえます。**ルート(5弦) → b3(4弦) → b7(3弦) → 9(2弦)** の順で。

**20〜40分 · 実践コンピング（BPM 70）**
**Dm9** を一小節に一回ずつやさしく鳴らします。<mark>すべての音が均等に鳴るか</mark>だけを見ます。

```json
{
  "id": "m1.w1.d1.dm9_strum",
  "type": "tab",
  "meta": { "title": "Dm9 whole-note comping", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "arpeggio", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 5, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "arpeggio", "chordSymbol": "Dm9", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 70。** 二小節ともDm9です。アルペジオ・ストロークで下から上へやさしく掃きます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音してチェックします。<mark>四弦すべてが柔らかく鳴っているか</mark>。

**今日の完了基準：** Dm9ボイシングを四弦すべてきれいに鳴らせる。

## ④ ヒント / よくあるミス

**Dm9** グリップでよく出るミスだけを挙げます。

```json
{
  "id": "m1.w1.d1.dm9_mute",
  "type": "fretboard_diagram",
  "meta": { "title": "Mute strings 6 and 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **6弦・1弦はしっかりミュート。** 二弦が漏れると柔らかな色が濁ります。

- **5弦のルートが鳴らない。** 中指を立てて5フレットを正確に押さえます。
- **2弦の9度がつぶれる。** 小指の先を立てて5フレットを押さえると色が生きます。
- **手がこわばる。** グリップは強く握るのではなく、そっと乗せる感覚です。
- **1弦が鳴ってしまう。** 小指の内側で1弦を軽く覆います。
