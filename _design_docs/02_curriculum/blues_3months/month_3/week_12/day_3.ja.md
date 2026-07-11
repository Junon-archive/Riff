---
title: "12小節全体を会話に — 止まらないフルランスルー"
dayKey: "m3.w12.d3"
estMinutes: 50
i18nKey: "lesson.m3.w12.d3"
---

# Day 3 — 12小節を最初から最後まで一度に会話する

## ① 理論・説明

もう4小節の会話を手に入れたので、今日はその会話を**12小節全体**に広げます。コンピングで問いソロで答えるのを三回やり取りすれば、12小節一曲が完成します。<mark>今日はリハーサルです — 止まらず最初から最後まで一度に流す練習です。</mark>部分練習は十分にしたので、いよいよ**一曲を丸ごと**転がす番です。

12小節ブルースは三つのコードで動きます — **A7（I）・D7（IV）・E7（V）**。コンピングのブギはコードが変わるたびにそのコードのルートへ移ります。A7は5弦開放Aから、**D7は4弦開放Dから、E7は6弦開放Eから**同じ5→6→b7の形を転がします。<mark>ルートだけ変えて押さえれば、同じブギの手の形が三つのコードすべてに通じます。</mark>答えるソロはずっとボックス1にとどまってよいです — コードが変わってもボックス1は12小節ずっと合います。

リハーサルの核心は**止まらないこと**です。途中で音を外したり手がもつれても、足で刻むシャッフルさえ踏み続ければいいのです。<mark>ミスを直そうと止まった瞬間に会話は切れますが、そのまま流せば曲は生きています。</mark>今日は**BPM 80、シャッフル**で、12小節を最初から最後まで一度に通ることを目標にします。完璧でなくても大丈夫です — 最後まで流れるその経験そのものが、明日の卒業録音を準備してくれます。

```json
{
  "id": "m3.w12.d3.three_roots",
  "type": "fretboard_diagram",
  "meta": { "title": "Three boogie roots: A7, D7, E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "label": "A", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "D", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **A7・D7・E7**の三つのルートです。各ルートの上で同じ5→6→b7ブギを転がすとコンピングがコードに従います。

## ② ビジュアル資料

今度は答えるソロが住むボックス1をもう一度見ます。不思議なことに、この**一つのボックス1**がA7・D7・E7の三つのコードの上ですべて合います。<mark>コードが変わってもソロの手はそのまま — 答える場所を新しく探す必要がありません。</mark>

```json
{
  "id": "m3.w12.d3.answer_box",
  "type": "scale_shape",
  "meta": { "title": "One box 1 answers all twelve bars", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ この**ボックス1**一つで12小節ずっと答えられます。コードに従って動かす必要はありません。

<mark>コンピングはコードに従って動き、ソロはボックス1にとどまる — この分業が一人ブルースを楽にします。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。コードが変わるときにルートを移すことだけ先に練習します。A7 → D7 → E7、一小節ずつブギを転がします。

```json
{
  "id": "m3.w12.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: move the boogie root A7-D7-E7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60、シャッフル。** A7 → D7 → E7。ルートを5・4・6弦へ移しながら同じブギの手の形を転がします。

**10〜20分・頭のトレーニング（今日のターゲット＝止まらないランスルー）**
実戦の前に、12小節全体の地図を頭の中に描きます。どこでコンピングしどこでソロするか、コードがどこで変わるかをあらかじめ思い浮かべます。<mark>地図が頭にあれば、演奏中に道に迷わず最後まで流れます。</mark>

**20〜40分・実戦：12小節フルランスルー（BPM 80）**
今日の完成物、**12小節フルランスルー**です。コンピング二小節で問いソロ二小節で答えるのを、コードに従って三回繰り返します。**止まらず**最初から最後まで一度に流します。

```json
{
  "id": "m3.w12.d3.full_twelve",
  "type": "tab",
  "meta": { "title": "Full 12-bar dialogue run-through", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 5, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 6, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 7, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 8, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 9, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 10, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 11, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 12, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1〜2 A7コンピング → 3〜4 ソロ → 5〜6 D7コンピング → 7〜8 ソロ → 9 E7・10 D7コンピング → 11〜12 ソロ。止まらず一度に通します。

<mark>12小節を一度も止まらず通れば、明日の卒業録音はもう半分以上準備できています。</mark>

**40〜50分・録音**
12小節フルランスルーを丸ごと録音します。完璧でなくてもよいです — 止まらず最後まで流れるその流れを収めてみます。

**今日の完了基準：** A7・D7・E7の上でコンピング↔ソロの会話を12小節全体で止まらず一度に通し、フルランスルーを録音した。

## ④ ヒント / よくあるミス

フルランスルーでよくあるミスです。ほとんどは**ミスを直そうと止まる**ところから来ます。

```json
{
  "id": "m3.w12.d3.dont_stop",
  "type": "fretboard_diagram",
  "meta": { "title": "Keep moving: A7 to D7 root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "A", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "label": "D", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **止まらず次のコードへ。** 外してもルートさえ時間通りに移せば曲は流れ続けます。

- **ミスを直そうと止まる。** 止まると曲が死にます。間違えてもそのまま次の小節へ進みます。
- **コードの変わり目を見逃す。** 5・9小節でルートが動きます。あらかじめ手を準備します。
- **ソロでボックスを出る。** 答えるときはボックス1にとどまれば十分です。遠くへ行きません。
- **録音を後回しにする。** 完璧なときに録ろうとすると永遠にできません。今日の流れをそのまま収めます。
