---
title: "リックを12小節の上に配置する — 最初のソロのスケッチ"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — 12小節の上にリックを置く日

## ① 理論・説明

二日のあいだに**二つのリック**を手に入れました。ベンドで開くリック1、下行で答えるリック2。今日はこの二つをついに**12小節**の上に乗せます。<mark>素材が揃ったので、いよいよ12小節という舞台の上にリックを配置する番です。</mark>今日作るのは完成したソロではなく**ソロのスケッチ**です — どこにリックを置き、どこを空けておくか、大きな絵を先に描く日です。これまで別々に学んだリックと余白が、今日はじめて一つの流れの中で出会います。

ブルースの**12小節**はコードがA7からD7、E7へ変わりますが、とても良い知らせがあります。**ボックス1**一つで12小節ずっとその上で遊べます。<mark>コードが変わっても、ボックス1はずっと家です — だからリックをどこに置いても馴染みます。</mark>大切なのは、小節ごとに音をぎっしり詰めないことです。一小節はリックで問い、次の小節はルートを長く引いて**余白**を与えます。この詰めと空けのバランスが、ソロを呼吸させます。音を少なく弾く勇気がむしろソロをより素敵に響かせることを、今日じかに感じます。

今日のスケッチは四小節です。**1小節目**はベンドリックで開き（質問）、**2小節目**はルートを長く引いて息を与えます（余白）。**3小節目**は下行リックで答え、4小節目はルートに着地します。<mark>リック-余白-リック-着地、この四つの枠の流れが12小節ソロの縮図です。</mark>完璧でなくても大丈夫です。今日はリックをどこに置くかを手に覚えさせるのが目標です。さあ、舞台の上に最初のスケッチを描きましょう。

```json
{
  "id": "m2.w8.d3.solo_sketch",
  "type": "tab",
  "meta": { "title": "Placing the licks over the 12-bar form (sketch)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75、シャッフルの感じ。** 1小節目はベンドリックで開き、2小節目はルートを全音符で長く引いて余白を与えます。3小節目は下行リックで答え、4小節目はルートAにビブラートで着地します。

## ② ビジュアル資料

四小節のスケッチが指板の上をどう回るかを**ボックス1の地図**で見ます。緑の4度がリックが押し上げたり通ったりする場所、青の**ルートA**がリックが毎回戻ってくる家です。

```json
{
  "id": "m2.w8.d3.form_map",
  "type": "scale_shape",
  "meta": { "title": "Box 1 is home over all 12 bars", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **ボックス1がすなわち家。** コードが変わっても、この一つの場所からリックを開いてルートへ戻ります。

<mark>コードがどう変わっても、ボックス1の中で開いて閉じれば、それが12小節ソロです。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 75。スケッチの二つの軸である**ベンドと着地のルート**だけを続けて温めます。

```json
{
  "id": "m2.w8.d3.warmup",
  "type": "tab",
  "meta": { "title": "Warm up both anchors: the bend and the landing root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75。** 4度を半拍ベンドして開き、ルートAを半拍震わせて閉じます。開く音と結ぶ音を並べて覚えます。

**10〜20分・頭のトレーニング（今日のターゲット＝リックの配置）**
実戦に入る前に、四小節のうちどこでリックを弾き、どこを空けるか**順序**を頭の中で描きます。開く-余白-答える-着地、この四つの枠を手より頭で先に整理します。<mark>枠の順序を先に知れば、12小節がずっと気楽になります。</mark>

**20〜40分・実戦：12小節の上のソロスケッチ（BPM 75）**
今日の完成物です。四小節のスケッチをバッキングに合わせて最初から最後までつなげて弾きます。

```json
{
  "id": "m2.w8.d3.sketch_take",
  "type": "tab",
  "meta": { "title": "12-bar sketch, full take", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75。** 1小節目はベンドリックで開き、2小節目はルートを長く引いて余白を与えます。3小節目は下行リックで答え、4小節目はルートAにビブラートで着地します。リックのあいだの余白を必ず感じます。

<mark>リックが開き、余白が息を作り、下行がルートで閉じれば、12小節ソロの骨組みが完成します。</mark>

**40〜50分・録音**
四小節のスケッチをバッキングの上で録音します。リックがコードと馴染むか、余白が窮屈にならず生きているかを聴いてみます。

**今日の完了基準：** ベンドリック・余白・下行リック・ルート着地の四小節のスケッチを、12小節のバッキングに合わせて最初から最後まで弾いて録音した。 — 今日の成果物：12小節の上のソロスケッチ完成

## ④ ヒント / よくあるミス

リックを12小節の上に乗せるときによくあるミスです。ほとんどは「詰め込みすぎる」問題です。

```json
{
  "id": "m2.w8.d3.place_map",
  "type": "scale_shape",
  "meta": { "title": "Call in the bars, leave space, answer home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **開いて、空けて、答える。** 緑の4度でリックを開き、ルートAへ戻って答えを結びます。

- **すべての小節を音でぎっしり詰める。** すると息をつく隙がありません。一、二小節はルートを長く引いて空けておきます。
- **リックをコードの変化と関係なくどこにでも置く。** リックは小節の最初の拍に合わせて始めると自然です。バッキングの一拍に合わせて開きます。
- **余白に耐えられない。** 音が空く瞬間がぎこちなくても、その余白が次のリックを生かします。空けた小節を急がないでください。
- **四小節を一度に全部やろうとする。** 開く二小節、答える二小節に分けて練習するとずっと簡単です。
