---
title: "スライドで進入 — 音に滑り込む"
dayKey: "m3.w11.d1"
estMinutes: 50
i18nKey: "lesson.m3.w11.d1"
---

# Day 1 — スライドでリックに滑り込む

## ① 理論・説明

11週目が始まりました。この十週間で皆さんはスケールを覚え、ブルーノートを見つけ、BBの色まで手に収めました。ここからは、その音を**もっと魅力的に「語らせる」**方法を学びます。今日のテーマは**スライド**です — 音をぴたっと押さえて始める代わりに、一つ二つ下のフレットから滑り込んで目標音に到着する技術です。<mark>スライドは音に「進入」する方法です — ただ到着するのではなく、するっと滑りながら登場するのです。</mark>同じルートAでも、ぽんと叩いて入るときと下から滑って上がってくるときとでは表情がまったく違います。

今日使うスライドは**b7からルートAへ**滑り上がるものです。4弦5フレットの**G（b7）**に指を乗せ、弦から手を離さないまま7フレットの**ルートA**までするっと押し上げます。<mark>指先が指板を離れずつながってこそ、二つの音が一本の線のようになめらかにつながります。</mark>このとき押さえる力は一定に保ちます — 到着する瞬間に力が抜けると、音が消えてしまうからです。

スライドの魅力は**緊張と到着**です。下の音から出発して目標音へ滑るその短い瞬間に、聴く人は「どこへ行くのだろう」と耳を傾けます。そして目標音にぴたっと到着すると、<mark>待ちが解ける爽快さ</mark>が生まれます。今日はこのスライド一つでリックに進入する練習をします。**BPM 70**でゆっくり、指先が指板を流れる感覚を十分に味わいながら。この小さな滑り一つが、皆さんのリックに表情を加えてくれます。

```json
{
  "id": "m3.w11.d1.slide_map",
  "type": "scale_shape",
  "meta": { "title": "Slide entry: b7 up to root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **b7（4弦5フレット）**から**緑のルートA（7フレット）**まで滑り上がります。スライドの出発と到着です。

## ② ビジュアル資料

スライドが住む場所は慣れた**ボックス1**です。4弦の**b7 → ルートA**スライドを中心に、b3・4・5度が一つの手の中に一緒にあります。<mark>新しい位置を覚える必要はなく、いつも使う家に滑りだけを足せばいいのです。</mark>

```json
{
  "id": "m3.w11.d1.box_slides",
  "type": "scale_shape",
  "meta": { "title": "Box 1 with slide targets", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **緑のルートA**がスライドの到着点、その下の**b7**が出発点です。残りは慣れたボックス1の音です。

<mark>滑り込むその短い瞬間が、今日のリックの表情を決めます。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。**b7からルートAへ**滑るその一つだけに集中します。到着音がはっきり生きているか、耳で確かめながら。

```json
{
  "id": "m3.w11.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: slide into root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60。** b7からルートAへ滑り上がったあと、b3を経てルートにビブラートで座ります。

**10〜20分・頭のトレーニング（今日のターゲット＝スライド進入）**
実戦の前に、下の音から目標音へ滑るその軌跡を頭の中で先に描きます。<mark>耳が「滑り → 到着」の瞬間を先に想像すれば、手はその線をたどるだけでいいのです。</mark>

**20〜40分・実戦：スライド進入リック（BPM 70）**
今日の完成物、**スライド進入リック**です。**b7 → ルートA**スライドで扉を開き、4度とb3を通ってルートにビブラートで着地します。最初の音から滑って登場するので、リック全体がずっとなめらかに聞こえます。

```json
{
  "id": "m3.w11.d1.slide_lick",
  "type": "tab",
  "meta": { "title": "Slide entry lick", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale", "technique": "slide", "slideToFret": 7 },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70。** **b7（4弦5フレット）**からルートへ滑って進入 → 4度（3弦7フレット） → b3 → ルートにビブラートで着地。

<mark>最初の音が滑り込んでくる瞬間、リックが「演奏」ではなく「言葉」のように聞こえ始めます。</mark>

**40〜50分・録音**
A7のバッキングの上でスライド進入リックを録音します。最初の音が滑り込んでくるその表情がうまく収まったか聴いてみます。

**今日の完了基準：** A7の上でb7 → ルートAスライドでリックに進入し、最初の音から滑って登場するスライドリックを完成させて録音した。

## ④ ヒント / よくあるミス

スライドでよくあるミスです。ほとんどは**到着音を逃す**ところから来ます。

```json
{
  "id": "m3.w11.d1.slide_timing",
  "type": "scale_shape",
  "meta": { "title": "Land the slide on the beat", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "target", "highlight": true }
  ]}
}
```
▶ **拍に合わせて到着してください。** 滑るのは自由ですが、目標音は正確なタイミングでぴたっと到着しなければなりません。

- **滑るのが速すぎる。** すると途中がつぶれます。ゆっくり、目標音までの距離を感じながら押します。
- **到着した途端に力が抜ける。** すると到着音が消えます。滑ったあとも音が生きていなければなりません。
- **手を指板から離しながら滑る。** それはスライドではなく二度押さえです。指先は弦につけたままつなぎます。
- **出発フレットをどこでも掴む。** b7（5フレット）から出発してこそ、ルートまでの距離がぴたっと合います。
