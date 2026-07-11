---
title: "ボックス1の中で短いフレーズを作る"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — ボックス1の中で3〜4音のフレーズを作る

## ① 理論・説明

ボックス1も覚えたし、ブルーノートも手に入れました。でも、スケールを上下になぞるだけでは、まだ「練習」であって「音楽」ではありません。今日からは<mark>ボックス1の中で短いフレーズを作って</mark>みます。フレーズとは、**3〜4個の音を選んで、一つの短い言葉のようにつないだもの**です。一文を話すように、いくつかの音で小さな物語を作るのです。スケールが材料なら、フレーズはその材料で作った一皿の料理です。

ブルースは会話だと言いましたね。フレーズにも**質問と答え**があります。音が上へ上がると、<mark>どこか「浮いた」感じ、つまり質問になります。</mark>逆に音が下りてきて、**ルートや5度**のような安定した音に着くと、それが「答え」になって気持ちが落ち着きます。だから良いフレーズはたいてい**安定した音で終わります**。終わりの音一つをうまく選ぶだけで、フレーズが完成した感じになります。質問ばかり投げると聞く人が落ち着かず、答えばかり続くと退屈します。この二つを交互に出すのが、まさにブルースの押し引きです。

たくさんの音は必要ありません。<mark>音三つで十分すてきなフレーズになります。</mark>むしろ音を惜しむほど、一つ一つがはっきり聞こえます。今日はボックス1の真ん中の場所 — **4弦のルートA（7フレット）**の近く — で小さなフレーズを作ってみます。間違えても大丈夫です。音をいくつか選んでルートに戻ること、それが今日のすべてです。さあ、まずはとても短い三音のフレーズから聴いてみましょう。

```json
{
  "id": "m2.w5.d3.phrase_seed",
  "type": "tab",
  "meta": { "title": "A tiny 3-note phrase — 4 b3 R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **短いけれど、これはもうフレーズです。** 4（D）からb3（C）へ下りて、ルートAに着地します。三つの音が一つの短い文のように聞こえます。

## ② ビジュアル資料

もう少しはっきりしたフレーズを見ていきます。今度はルートから上へ上がる「質問」です。<mark>R→b3→4→5、四つの音が積み上がりながら緊張を重ねます。</mark>

```json
{
  "id": "m2.w5.d3.call",
  "type": "tab",
  "meta": { "title": "The call — ascending R b3 4 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **上がっていく質問フレーズ。** 4弦のルートから始まって、2弦の5度まで上がります。終わりが「浮いた」感じになれば成功です。

この質問にはまだ答えがありません。<mark>次はこのフレーズを受けて、ルートへ下りて答えを作ります。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 70。**ボックス1**の低い弦を一小節上り下りして手を目覚めさせます。<mark>手が5フレットの位置に楽に収まっているか</mark>感じます。

```json
{
  "id": "m2.w5.d3.warmup",
  "type": "tab",
  "meta": { "title": "Box 1 low string warmup", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```
▶ **BPM 70、シャッフルフィール。** 6弦のルートから5弦の5度まで。軽く手だけほぐします。

**10〜20分・頭のトレーニング（今日のターゲット＝ルートに着地）**
どの音でフレーズを終えるか先に決めます。<mark>終わりの音はルートAか5度に</mark>すれば失敗しません。

**20〜40分・実戦：質問と答えを作る（BPM 70）**
上がる質問、下りる答え。二小節を続けて弾いてみます。

```json
{
  "id": "m2.w5.d3.call_answer",
  "type": "tab",
  "meta": { "title": "Call and answer — up then home to R", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70、シャッフルフィール。** 最初の小節は上がる質問、二つ目は下りる答え。最後のルートでぴたりと止まります。

<mark>質問と答えが一組に聞こえるか</mark>確かめながら、何度も繰り返します。

**40〜50分・録音（今日のミッション）**
質問と答えの二小節を録音します：<mark>最後のルートで気持ちが落ち着く着地が聞こえるか</mark>聴いてみます。

**今日の完了基準：** ボックス1の中で上がる質問と下りる答えを二小節でつなぎ、最後をルートAで安定して着地させた。

## ④ ヒント / よくあるミス

フレーズを作るときによくあるミスです。音を多く入れれば良いというわけではありません。

```json
{
  "id": "m2.w5.d3.land_tip",
  "type": "scale_shape",
  "meta": { "title": "The phrase pocket — land on R or 5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **終わりはルートか5度で。** これらの場所が、フレーズが楽に休む家です。どこから始めても、ここへ戻ってくればいいのです。

- **音を詰め込みすぎる。** 三つの音で十分です。余白があってこそ、一つ一つの音が生きます。
- **どの音でも適当に終える。** 終わりの音をルートか5度に決めれば、フレーズが完成して聞こえます。
- **休まず弾き続ける。** 音と音の間の短い静けさも、フレーズの一部です。息をつく間を与えます。
- **間違いが怖くて同じものばかり弾く。** 音の順番を少しずつ変えてみます。それが自分だけのフレーズになります。
