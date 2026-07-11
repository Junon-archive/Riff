---
title: "ターンアラウンド — 12小節を締めくくる最後の四小節"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — V-IV-I-Vで曲をもう一度最初へ戻す

## ① 理論・説明

ついに4週目、**M1の最後の週**です。今日から学ぶのは**ターンアラウンド（turnaround）** — 12小節の<mark>最後の四小節が曲をもう一度最初へ戻す結び目</mark>です。ここまでA7・D7・E7のブギーを一つずつ身につけてきましたね。その断片が今日、一つの輪につながります。ターンアラウンドがあってこそ、12小節が途切れず回り続けます。

ターンアラウンドの正体は**V-IV-I-V**です。Aブルースでは V が E7、IV が D7、I が A7 なので、最後の四小節が**E7 → D7 → A7 → E7**と流れます。前の三つのコードが家に戻ってから、<mark>最後のE7が再び扉を開けて次の周回へつなぎます。</mark>この最後の一つのコードが、曲を終わらせずに「もう一回！」と手招きする場所です。

弾き方はすでに手の中にあります。新しい形は一つもありません。1・2週目で身につけた**ブギーリフ**を、コードごとにルート弦だけ移して乗せれば、それがターンアラウンドです。<mark>E7は6弦、D7は4弦、A7は5弦がルート</mark>ということだけ覚えれば大丈夫です。今日は速さを欲張らず、四小節が**なめらかにつながること**だけを目標にします。**4週間前**はコード一つ押さえるのも大変だったのに、今は四つのコードを一つの流れに編んでいます。

まずコードだけでこの流れを聞いてみましょう。一小節に一コードずつ、全音符で押さえます。

```json
{
  "id": "m1.w4.d1.v_iv_i_v",
  "type": "tab",
  "meta": { "title": "Turnaround chords V-IV-I-V", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "D7", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 一小節に一コードずつ**E7 → D7 → A7 → E7**を全音符で鳴らします。最後のE7が再び最初へ引き戻す感じを聞きます。

## ② ビジュアル資料

今度はその四小節を**ブギーリフ**で歩いてみましょう。<mark>コードが変わるだけで、歩く手の形はいつも同じです。</mark>

```json
{
  "id": "m1.w4.d1.turnaround_boogie",
  "type": "tab",
  "meta": { "title": "Turnaround boogie E7-D7-A7-E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** E7（6弦）-D7（4弦）-A7（5弦）-E7。同じ**ブギーの形**がコードごとに席を移すだけです。

ゆっくり始めて、<mark>コードが変わる瞬間もシャッフルが揺れないか</mark>を足で確認します。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。**E7ブギー**一小節で手を温めます。<mark>ロング・ショートのシャッフルが生きているか</mark>を足で確認します。

```json
{
  "id": "m1.w4.d1.warmup",
  "type": "tab",
  "meta": { "title": "E7 boogie warmup — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 65、シャッフル。** E7ブギー一小節。6弦ルートの上で5度→6度→b7→6度と歩きます。

今度は家（A7）から、再び扉を開けるV（E7）へ移る二小節をつなげてみます。

```json
{
  "id": "m1.w4.d1.i_to_v",
  "type": "tab",
  "meta": { "title": "A7 to E7 — I pulls to V", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1小節**A7**、2小節**E7**。IからVへ移りながら、次の周回へ引く力を感じます。

**10〜20分 · 頭のトレーニング（今日のターゲット＝ターンアラウンドの順番）**
頭の中で**E7 → D7 → A7 → E7**の順を声に出して覚えます。<mark>ルート弦が6→4→5→6と動く絵</mark>を描きます。

**20〜40分 · 実践ターンアラウンド（BPM 80）**
四小節のターンアラウンドを<mark>途切れず</mark>繰り返します。<mark>最後のE7が次の小節へ引くか</mark>を聞きます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
四小節のターンアラウンドを録音します：<mark>コードが変わってもシャッフルが生きているか</mark>。

**今日の完了基準：** 四小節のターンアラウンド（E7-D7-A7-E7）をシャッフルで途切れず通過できる。

## ④ ヒント / よくあるミス

ターンアラウンドでよく出るミスです。最後の**E7**を落とすと、曲が次の周回へつながりません。

```json
{
  "id": "m1.w4.d1.e7_home",
  "type": "fretboard_diagram",
  "meta": { "title": "E7 — the V that turns it around", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 1, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **最後のE7が結び目です。** このVコードが曲を最初へ戻します。6弦開放のEがルートです。

- **D7とA7の順番が混ざる。** IV（D7）の次はI（A7）です。V-IV-I-Vの順を口で覚えます。
- **最後のE7をA7で終える。** まだ曲は終わっていません。次の周回があるので、E7で開けておきます。
- **コードの切り替えが遅い。** 次のコードのルート弦を一拍早く思い浮かべます。
- **シャッフルが平らになる。** コードチェンジに気を取られてロング・ショートが均等になります。足で拍を踏み続けます。
