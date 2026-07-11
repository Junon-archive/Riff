---
title: "b3→3の半音移動 — 曇りから澄みへ、BBの色"
dayKey: "m3.w10.d2"
estMinutes: 50
i18nKey: "lesson.m3.w10.d2"
---

# Day 2 — b3から3へ半音上げて「BBの色」を出す

## ① 理論・説明

昨日は**b3**と**メジャー3度**がどこにあるかを目で覚えました。今日はその二つの音を**動かします**。じっとした二つの点ではなく、b3から3へそっと上がるその「動き」が今日の本当の主役です。<mark>曇ったb3から澄んだ3へ半音上がる瞬間、ブルースが急に大人びます。</mark>位置を知ることと、その間を渡ることはまったく別のことです。昨日覚えたその場所が、今日ようやく生き生きと動き始めるのです。

やり方は簡単です。**b3（3弦5フレット）**を押さえ、そのまま指を一フレット上へ押し出して**3（3弦6フレット）**へ上げます。この小さな半音移動こそ、**B.B. King**が生涯使ってきたあの色です。<mark>同じ場所から半音一つ上げただけなのに、曇りが澄みへぱっと変わります。</mark>指はほぼその場、心だけが一フレット明るい側へ移る感覚です。速くする必要はまったくありません、その半音がはっきり聞こえるのが先です。

大切なのは「渡っていく」感覚です。**b3で止まって**いれば昨日と同じ音で、最初から**3だけ**押さえればブルースの曇った味が抜けます。<mark>b3にとどまらず、3へ飛び越えもせず、その間を渡ってください — その渡りこそ「BBの色」です。</mark>上げたあとはルートAへやわらかく降りて、フレーズを締めます。今日はこの半音移動を収めた短い**BB色リック**を一つ完成させます。ちょうど一小節、その中に曇りと澄みの物語がすべて入っています。

```json
{
  "id": "m3.w10.d2.b3_to_3",
  "type": "tab",
  "meta": { "title": "The b3 to 3 half-step move", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" }
    ]}
  ]}
}
```
▶ **BPM 65。** b3（3弦5フレット）を押さえハンマリングで**3（3弦6フレット）**まで上げます — 曇りから澄みへ渡る音です。

## ② ビジュアル資料

b3から3へ上がるその**一マスの移動**を指板で見ます。青いルートAの下で、**b3（色なし）から緑の3へ**矢印のように半音上がります。

```json
{
  "id": "m3.w10.d2.bb_move_map",
  "type": "scale_shape",
  "meta": { "title": "The BB move: b3 up a half step to 3", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ 青いルートから降りて、**b3を押さえ、緑の3へ一マス上げる**その動きが今日のすべてです。

<mark>二つの点の間の一マス — その半音を「渡る」ことがまさにBBの色です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。**b3**を押さえてゆっくり**3**へ上げ、また b3へ降ります。半音の往復を手に覚えさせます。

```json
{
  "id": "m3.w10.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: the half-step color shift", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```
▶ **BPM 60。** 焦らず、b3と3の間のその一マスをなめらかに行き来します。

**10〜20分・頭のトレーニング（今日のターゲット＝b3→3の半音移動）**
実戦の前に、b3から**3へ上がる**音を頭の中で先に呼びます。<mark>手より耳が先にその「澄んでいく」瞬間を知れば、移動がずっと自然になります。</mark>

**20〜40分・実戦：BB色リック（BPM 65）**
今日の完成物、**BB色リック**です。**b3から3へ**半音上げたあと、ルートAへビブラートで降ります。短いけれど、その中に「曇り→澄み」の物語がすべて収まっています。

```json
{
  "id": "m3.w10.d2.bb_color_lick",
  "type": "tab",
  "meta": { "title": "BB color lick (b3 to 3)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 65。** b3（3弦5フレット） → **メジャー3度（3弦6フレット）** → ルートA ビブラート。半音上げるその瞬間が「BBの色」です。

<mark>b3にとどまっていた音が3へ上がって明るく開きます — この一度の半音が今日の完成です。</mark>

**40〜50分・録音**
BB色リックを録音します。b3から3へ渡るその半音がはっきり聞こえるかを一つのファイルで確認します。

**今日の完了基準：** b3からメジャー3度へ半音上げてルートAに着地するBB色リックを完成させ、曇りから澄みへ渡るその瞬間を録音した。

## ④ ヒント / よくあるミス

半音移動を覚えるときによく出るミスです。ほとんどは「**渡る感覚**」を取りこぼすところから来ます。

```json
{
  "id": "m3.w10.d2.dont_stall",
  "type": "scale_shape",
  "meta": { "title": "Move through b3 to 3, don't stall", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true }
  ]}
}
```
▶ **b3で止まらず、3へ飛び越えもしないで。** その間を渡るのが核心です。

- **b3で止まってしまう。** 3へ上げなければ昨日と同じ音です。必ず一マス上へ渡ります。
- **最初から3だけ押さえる。** すると曇ったブルースの味が消えます。b3から「出発」してこそ色が生きます。
- **半音を全音に上げる。** 二マス行くと4度になります。ちょうど一マス（半音）だけ上げます。
- **ルートに着地しない。** 3へ上げたあとルートAに座ってこそフレーズが完成します。
