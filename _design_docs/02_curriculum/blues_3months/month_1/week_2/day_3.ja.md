---
title: "12小節ブルース・フォーム — 一周する"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 12小節フォームをクイックチェンジまで巡回する

## ① 理論・説明

今日はいよいよブルースの舞台、**12小節フォーム**を一周します。12小節ブルースは<mark>三つのコードが決まった場所で回る遊び場の地図</mark>です。場所さえ覚えれば、どんなブルースにもついていけます。最初は小節が多く見えても、実は四小節ずつの三行がすべてです。曲を丸ごと覚えるのではなく、短い地図を一枚覚えるだけだと思えば、気持ちがずっと軽くなります。Aブルースの地図はこんな形です。

```
| A7 | D7 | A7 | A7 |
| D7 | D7 | A7 | A7 |
| E7 | D7 | A7 | E7 |
```

一行が四小節、三行で**12小節**です。1〜4小節は家（A7）の周り、5〜8小節はIV度（D7）へ行って戻り、9〜12小節はV度（E7）で最も張り詰めてから家へ戻ります。この最後の四小節を**ターンアラウンド**と呼びます。ターンアラウンドは一周を締めくくりながら次の一周の扉を開く場所なので、ブルースで最もドラマチックな四小節です。

今日の本当のポイントは**クイックチェンジ**です。<mark>1小節A7の次、2小節でそのままD7へ一度行って戻ります。</mark>これがないと1〜4小節がA7だけ四小節になりますが、クイックチェンジを入れるとずっとブルースらしい味が出ます。2小節だけ**D7**に変わる、これだけ覚えれば大丈夫です。残りの場所はもう馴染みのあるA7、D7、E7の繰り返しなので、新しく覚えることはほとんどありません。

三つのコードのルートの場所を一枚にまとめてみました。

```json
{
  "id": "m1.w2.d3.roots_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Three roots of A blues — A, D, E", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **6弦＝E、5弦＝A、4弦＝D。** 三つの開放弦がそれぞれE7・A7・D7のルートです。

## ② ビジュアル資料

では12小節をルートだけで一周してみます。各小節のルートを全音符で押さえると、地図が手に入ります。**クイックチェンジ**（2小節D7）もそのまま入っています。

```json
{
  "id": "m1.w2.d3.twelve_bar_map",
  "type": "tab",
  "meta": { "title": "12-bar blues in A — root map (quick change)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 2, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 3, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 4, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 5, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 6, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 7, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 8, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 9, "notes": [ { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "E7" } ]},
    { "measure": 10, "notes": [ { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "D7" } ]},
    { "measure": 11, "notes": [ { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "A7" } ]},
    { "measure": 12, "notes": [ { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chordSymbol": "E7" } ]}
  ]}
}
```
▶ **一小節にルート一つずつ、BPM 80。** コードシンボルを目で追いながらルート弦（5・4・6弦）を正確に押さえます。<mark>9小節で初めてE7が登場します。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。三つのコードのルートだけを5→4→6弦で行き来して手をほぐします。<mark>弦を飛び越えるときルートを外さないか</mark>を見ます。

一番難しい**ターンアラウンド**（9〜12小節）だけを取り出して練習します。E7→D7→A7→E7です。

```json
{
  "id": "m1.w2.d3.turnaround",
  "type": "tab",
  "meta": { "title": "Turnaround bars 9-12 — E7 D7 A7 E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 9, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]},
    { "measure": 10, "notes": [
      { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "D7", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 11, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 12, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]}
  ]}
}
```
▶ **BPM 80。** 9小節E7 → 10小節D7 → 11小節A7 → 12小節E7。一小節に一回ずつ下へ弾きます。

**10〜20分 · 頭のトレーニング（今日のターゲット＝クイックチェンジ）**
1小節A7の次は**2小節はD7**と先に覚えます。口で「A-D-A-A」と数えます。

**20〜40分 · 実践12小節巡回（BPM 80）**
12小節をルートだけで<mark>途切れず</mark>一周します。<mark>小節数を見失わないか</mark>を足で数えながら見ます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
12小節一周を録音：<mark>クイックチェンジとターンアラウンドが所定の場所に入ったか</mark>。

**今日の完了基準：** クイックチェンジを含む12小節フォームを、ルートだけで途切れず一周巡回できる。

## ④ ヒント / よくあるミス

12小節を回るときによく引っかかる部分です。

```json
{
  "id": "m1.w2.d3.quick_change",
  "type": "fretboard_diagram",
  "meta": { "title": "Quick change — bar 2 is D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 1, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ **2小節はA7ではなくD7。** クイックチェンジを忘れてA7を四小節弾くミスが最も多いです。

- **小節数を見失う。** 足で4拍を数えながら小節を数えます。四小節ごとに一行が終わります。
- **9小節のE7を逃す。** V度はちょうど一度、9小節で初めて出ます。先に6弦ルートを準備します。
- **11小節で戻れない。** ターンアラウンドの終わりは再びA7へ戻ると自然です。
- **速さを急ぐ。** 12小節は遅くても一周が大事です。BPMを下げても構いません。
