---
title: "コンピングからソロへ — 質問と答えの間を行き来する"
dayKey: "m3.w12.d1"
estMinutes: 50
i18nKey: "lesson.m3.w12.d1"
---

# Day 1 — コンピングのグルーヴを保ったままソロへ移る

## ① 理論・説明

ついに最後の週、12週目です。今週の目標はたった一つ — **一人でブルースを一曲完成させること。**これまでコンピングも学びソロも学びましたが、今度はその二つを一人が行き来して12小節を埋めます。<mark>コンピングは質問、ソロは答えです — リズムで問い、リードで答える会話です。</mark>今日はその第一歩、**コンピングからソロへの切り替え**を手に馴染ませます。

切り替えには二つの「家」があります。一つは**コンピングの家** — 開放5弦のルートAの上に4弦で**5度・6度・b7**を乗せるA7ブギです。もう一つは**ソロの家** — 5フレット辺りの慣れた**ボックス1**です。<mark>二つの家は近くに寄り添っているので、手を大きく動かさずに行き来できます。</mark>コンピングのときは手が開放弦の近くにとどまり、ソロへ移るときは手が指板の上のボックス1へ少し登ります。慣れれば、この二つの家は一歩の距離に感じられます。

大切なのは**切り替えの瞬間もグルーヴが途切れないこと**です。コンピングを止めて「さあ、ソロだ！」とためらうと会話がぷつりと切れます。<mark>コンピングの最後の拍とソロの最初の音が同じ流れの上にあってこそ、会話が自然になります。</mark>最初は切り替えのときに拍が少し揺れても大丈夫です。足で刻むシャッフルのグルーヴさえ止まらなければ、ソロの音はその上に乗せるだけです。今日は**BPM 80、シャッフル**でゆっくり、コンピングを一小節弾いてソロへ移るその継ぎ目だけをなめらかに整えます。

```json
{
  "id": "m3.w12.d1.comp_home",
  "type": "fretboard_diagram",
  "meta": { "title": "Comping home: A7 boogie shape", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **開放5弦のルートA**の上で4弦を**5度→6度→b7**と動かすとA7ブギのコンピングになります。

## ② ビジュアル資料

今度は答えが住むソロの家を指板でもう一度見ます。コンピングは開放弦の近くで鳴りましたが、ソロは**5フレット辺りのボックス1**から出ます。<mark>二つの家はほんの数フレットの差 — 右手のグルーヴはそのまま、左手だけ動かせばいいのです。</mark>

```json
{
  "id": "m3.w12.d1.solo_home",
  "type": "scale_shape",
  "meta": { "title": "Solo home: box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 答えが住む**ボックス1**です。コンピングの家から左手だけ5フレット辺りへ上げればここです。

<mark>コンピングからこのボックス1へ手が自然に上り下りすれば、質問と答えが一つにつながります。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。まずコンピングだけ取り出して練習します。ルートAの上で5→6→b7ブギをシャッフルのグルーヴでゆっくり転がします。

```json
{
  "id": "m3.w12.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: A7 boogie comp", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60、シャッフル。** ルートAの上で5→6→b7→6を行き来するA7ブギ。右手のグルーヴをまず体に馴染ませます。

**10〜20分・頭のトレーニング（今日のターゲット＝コンピング↔ソロの切り替え）**
実戦の前に、コンピングの最後の拍で左手がボックス1へ登る絵を頭の中で描きます。<mark>手が動く場所をあらかじめ描いておけば、切り替えの瞬間に拍が揺れません。</mark>

**20〜40分・実戦：コンピング→ソロの切り替え（BPM 80）**
今日の目標、**コンピング→ソロの切り替え**です。1小節目はA7ブギで質問を投げ、2小節目はボックス1リックで答えます。**コンピングの最後の拍**で左手をボックス1へ上げ、最初のソロ音へなめらかにつなぎます。

```json
{
  "id": "m3.w12.d1.comp_to_solo",
  "type": "tab",
  "meta": { "title": "Comp to solo switch", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1小節目はコンピング（質問）、2小節目はソロ（答え）。コンピングの最後の拍で左手をボックス1へ上げ、最初のソロ音へつなぎます。

<mark>コンピングとソロが一つの流れの上でつながれば、もう一人ブルースの半分は完成です。</mark>

**40〜50分・録音**
A7のバッキングがなくても大丈夫です。コンピングを一小節弾いてソロ一小節へ移る切り替えを録音し、継ぎ目がなめらかか聴いてみます。

**今日の完了基準：** コンピング一小節からソロ一小節へ拍を失わずなめらかに切り替え、コンピング→ソロのスイッチを録音した。

## ④ ヒント / よくあるミス

切り替えでよくあるミスです。ほとんどは**ソロへ移りながらグルーヴを止める**ところから来ます。

```json
{
  "id": "m3.w12.d1.keep_groove",
  "type": "scale_shape",
  "meta": { "title": "Keep the groove into the answer", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **グルーヴを止めないでください。** コンピングとソロの間に静寂ができると会話が切れます。

- **ソロへ移りながら拍を数えない。** 足はシャッフルを踏み続けなければなりません。グルーヴが止まると切り替えが目立ちます。
- **左手を大きく動かしすぎる。** コンピングの家とボックス1は数フレットの差です。最小限で移動します。
- **最初のソロ音を強く押さえて遅れる。** 最初の音は力ではなくタイミングです。ジャストで乗せます。
- **速さから上げる。** BPM 80で切り替えがなめらかなのが先です。速さは後の話です。
