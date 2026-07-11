---
title: "最初のソロを弾き切り録音する — シグネチャーリックで12小節を歌う（M2卒業）"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
---

# Day 4 — 12小節の上で最初のソロを完成させる

## ① 理論・説明

ついに今日です。2ヶ月目の最後の日、そして**最初のソロ**を弾き切って録音する日です。二ヶ月前、**12小節**どころかペンタトニック・スケールの音の位置さえ不慣れだった手でした。ところが今日、その手が12小節の上で自分だけの物語を聞かせます。<mark>ペンタしか知らなかった手が、いま12小節の上で歌います — 今日がまさにその卒業の瞬間です。</mark>これまで積み上げたスケール、ベンド、フレージング、リックが、今日一つの**ソロ**として完成します。派手な速弾きではなく、心のこもった数小節だけでも十分に素敵なソロになります。

今日の主役は**シグネチャーリック**です。今週学んだベンドと下行を一つの体に合わせた、ブルースの「マネーリック」です。1小節目は**全音ベンド（4→5）**で扉を開き、2小節目は下行で下りてルートAに**ビブラート**で着地します。<mark>開いて閉じるこの二小節の中に、今週学んだすべてが詰まっています。</mark>この短いリック一つを12小節のあちこちに置けば、それがそのまま完成した最初のソロです。同じリックを何度か繰り返しても大丈夫です — むしろ繰り返しがソロに「自分らしさ」を作ってくれます。

今日は二段階で完成させます。まず**シグネチャーリック**を手に完全に馴染ませ、次にこのリックを軸に**12小節ソロ**を最初から最後まで弾き切ります。<mark>完璧である必要はありません — ベンドが開き、余白が呼吸し、ルートで閉じれば、それで十分です。</mark>そして最後に、そのソロを**録音**します。二ヶ月の旅が一つのファイルとして残る瞬間です。さあ、最初のソロを完成させに行きましょう。

```json
{
  "id": "m2.w8.d4.signature_lick",
  "type": "tab",
  "meta": { "title": "Signature blues lick (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75、シャッフルの感じ。** 1小節目は全音ベンド（4→5）で開き、2小節目は下行でルートAにビブラートで着地します。この二小節のリックを12小節のあちこちに配置すれば、最初のソロが完成します。

## ② ビジュアル資料

このシグネチャーリックが12小節ソロ全体でどこを回るかを**ボックス1の地図**で見ます。緑のルートAが、すべてのフレーズが結局戻ってくる**家**です。

```json
{
  "id": "m2.w8.d4.solo_map",
  "type": "scale_shape",
  "meta": { "title": "The whole solo lives in Box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" }
  ]}
}
```
▶ **ソロ全体がボックス1の中に。** 12小節を回るあいだ、すべてのリックがこの一つの場所から開いてルートへ戻ります。

<mark>ソロ全体がこの小さな箱一つの中で生まれます — それがボックス1の力です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 75。シグネチャーリックの二つの軸である**ベンドと着地のルート**を続けて温めます。

```json
{
  "id": "m2.w8.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the signature: bend then land", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75。** 4度を半拍ベンドして開き、ルートAを半拍震わせて閉じます。シグネチャーリックの始まりと終わりを手に覚えさせます。

**10〜20分・頭のトレーニング（今日のターゲット＝シグネチャーリックを12小節に配置）**
実戦に入る前に、シグネチャーリックを12小節のどこに置くかを頭の中で描きます。始まりで開き、中間は空けて、**9〜10小節目**でシグネチャーリックで頂点を作ります。<mark>リックを置く場所を先に決めれば、12小節が頼もしい地図になります。</mark>

**20〜40分・実戦：12小節の最初のソロ（BPM 75）**
ついに最初のソロです。シグネチャーリックを軸に、開く-余白-答える-頂点-着地まで12小節をまるごとつなげて弾きます。

```json
{
  "id": "m2.w8.d4.first_solo",
  "type": "tab",
  "meta": { "title": "First 12-bar solo over A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
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
    ]},
    { "measure": 5, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]},
    { "measure": 6, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 7, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 8, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 9, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 10, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 11, "notes": [
      { "string": 4, "fret": 5, "duration": "half", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 12, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75。** 1〜4小節目で開き、5〜8小節目で続け、9〜10小節目でシグネチャーリックで頂点を作り、11〜12小節目でルートAにビブラートで締めくくります。急がず、リックのあいだの余白を感じます。

<mark>12小節を一つの流れでつなげてルートで閉じる瞬間、生まれて初めて「自分のソロ」が完成します。</mark>

**40〜50分・録音（M2卒業ミッション！）**
最初のソロを最初から最後まで録音します。ベンドが開くか、余白が生きているか、ルートで閉じるか — 二ヶ月の成長を一つのファイルに収めます。

**今日の完了基準：** シグネチャーリックを軸に12小節の最初のソロを最初から最後まで弾き切り、ルートAにビブラートで締めくくって録音した。 — 今週の成果物：シグネチャーリック ＋ 12小節の最初のソロ 弾き切り・録音（M2卒業！）

## ④ ヒント / よくあるミス

最初のソロを弾き切るときによくあるミスです。ほとんどは「止まれない」心の問題です。

```json
{
  "id": "m2.w8.d4.close_map",
  "type": "scale_shape",
  "meta": { "title": "Every phrase comes home to the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" }
  ]}
}
```
▶ **すべてのフレーズはルートへ。** 緑のルートAが12小節のどこからでも戻る家です。リックを開いたら必ずルートで閉じます。

- **間違えると止まる。** ソロは流れです。一音間違えても止まらず、次のルートへつなげます。
- **休む小節に耐えられず音を埋める。** 余白もソロの一部です。空けた小節でむしろ次のリックが生きてきます。
- **終わりをルートで閉じない。** 最後は必ずルートAにビブラートで結んでこそソロが完成します。
- **一度で完璧に録音しようとする。** 何度か気楽に録音して、一番気に入った一テイクを残します。
