---
title: "ベンディングとビブラートを編んで「泣くリック」を作る"
dayKey: "m3.w11.d2"
estMinutes: 50
i18nKey: "lesson.m3.w11.d2"
---

# Day 2 — ベンディングとビブラートを一つに編む

## ① 理論・説明

昨日はスライドで音に滑り込みました。今日はブルースで最も象徴的な二つの道具、**ベンディング**と**ビブラート**を一つに編みます。ベンディングは弦を押し上げて音程を引き上げる技術、ビブラートは音を細かく揺らして震わせる技術です。<mark>この二つが出会うと、ギターが人のように「泣く」音を出します — ブルースで最も感情の濃い瞬間です。</mark>今日の目標は、この泣く音を一つのリックの中に収めることです。

今日ベンディングする音は**4度（3弦7フレットD）**です。この音を全音ぶん押し上げると、**5度（E）**の音程に到達します。大事なのは**正確な音程まで押すこと**です — 押しが足りないと中途半端な音になり、押しすぎると音が鋭くなります。<mark>押し上げた音が5度にぴたっと当たったとき、その緊張が最も美しく鳴ります。</mark>指一本ではなく二〜三本を重ねて押すと、力が安定し音程も正確になります。

ベンディングで5度まで押して緊張を作ったら、今度はルートへ降りて**ビブラート**で締めます。着地音を細かく揺らすと、音が生きて息をするように震えます。<mark>ベンディングが「引き上げる緊張」なら、ビブラートはその緊張を「解いて歌う」締めです。</mark>この二つが一つのリックの中でつながると、短いフレーズ一つがまるでため息のように聞こえます。今日は**BPM 70**で、泣く音が自然に出るまでゆっくり繰り返してみましょう。焦らず、一音一音に感情を込めて扱ってみてください。この泣く音が、あなたのブルースをいっそう深く濃くしてくれます。

```json
{
  "id": "m3.w11.d2.cry_map",
  "type": "scale_shape",
  "meta": { "title": "Bend the 4 up to the 5 pitch", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 9, "finger": 4, "label": "5", "role": "target", "highlight": true },
    { "string": 4, "fret": 7, "finger": 2, "label": "R", "role": "root" }
  ]}
}
```
▶ **4度（3弦7フレット）**を全音押し上げて**緑の5度（9フレット）の音程**に当てます。これが今日のベンディングの目標です。

## ② ビジュアル資料

泣くリックに使う音をボックス1の中で見ます。ベンディングする**4度**を中心に、**5度**・b3・ルートが一つの手の中に集まっています。<mark>新しい音を覚えるのではなく、慣れたボックス1の音一つを「押し上げて」泣く音に変えるのです。</mark>

```json
{
  "id": "m3.w11.d2.bend_map",
  "type": "scale_shape",
  "meta": { "title": "Crying lick notes in box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "role": "root" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **緑の4度**が今日押し上げる音です。残りの5度・b3・ルートは押さずそのまま押さえます。

<mark>慣れた音一つにベンディングとビブラートを足せば、それがまさに泣く音です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。まず**5度（9フレット）**を押さえて目標の音程を耳に刻んだあと、**4度**をその音程まで押し上げます。音で答えを確かめるのです。

```json
{
  "id": "m3.w11.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: bend to pitch, then vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "quarter", "label": "5", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60。** 5度の音程を先に聴いて → 4度を全音ベンディングでその音程まで → ルートのビブラートで締め。

**10〜20分・頭のトレーニング（今日のターゲット＝ベンディングの音程）**
実戦の前に、4度を5度まで押し上げるその音程を頭の中で先に歌ってみます。<mark>耳が目標の音程を先に知っていれば、手はちょうどその分だけ押せばいいのです — これが正確なベンディングの秘訣です。</mark>

**20〜40分・実戦：泣くリック（BPM 70）**
今日の完成物、**泣くリック**です。**4度を5度まで**全音ベンディングで押して緊張を作り、5度・b3を通ってルートにビブラートで着地します。ベンディングの緊張とビブラートの震えが一つの文の中で出会います。

```json
{
  "id": "m3.w11.d2.crying_lick",
  "type": "tab",
  "meta": { "title": "Crying lick: bend and vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70。** **4度（3弦7フレット）**全音ベンディング → 5度 → b3 → ルートにビブラートで着地。押し上げた緊張がビブラートで解けます。

<mark>ベンディングで引き上げ、ビブラートで揺らすその音が、あなたのギターが泣く声です。</mark>

**40〜50分・録音**
A7のバッキングの上で泣くリックを録音します。ベンディングが5度の音程まで正確に当たるか、着地音のビブラートが自然か聴いてみます。

**今日の完了基準：** A7の上で4度を5度まで全音ベンディングで押し、ルートにビブラートで着地する泣くリックを完成させて録音した。

## ④ ヒント / よくあるミス

ベンディングでよくあるミスです。ほとんどは**音程を最後まで押さない**ところから来ます。

```json
{
  "id": "m3.w11.d2.bend_pitch",
  "type": "scale_shape",
  "meta": { "title": "Bend all the way to the 5 pitch", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 9, "finger": 4, "label": "5", "role": "target", "highlight": true }
  ]}
}
```
▶ **5度の音程まで最後まで押してください。** 半分だけ押すと中途半端な音が出ます — 目標の音程に当たってこそベンディングが完成します。

- **音程が上がりきらない。** 全音を押しきれないと5度に届きません。二〜三本の指を重ねて力を乗せてください。
- **押しすぎる。** 5度を超えると鋭くなります。目標の音程でぴたっと止めます。
- **ベンディングした途端にビブラートを入れる。** 先に音程まで押して「到着」してから揺らすと安定します。
- **着地音を揺らさない。** ルートにビブラートがないとリックが平坦になります。最後の震えが泣く音を完成させます。
