---
title: "短いフレーズを作る — 2〜4音で一小節を話す"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 2〜4音で開く短いフレーズ

## ① 理論・説明

7週目が始まりました。先週まではベンド・ビブラート・スライドで一音一音を歌わせる方法を身につけましたが、今週はその音を集めて**言葉**を作ります。<mark>良いソロは音の羅列ではなく、短い文の連なりです。</mark>私たちが話すとき、一息で数語だけ口にしてちょっと休むように、ソロも一つの**短いフレーズ**が基本単位です。音が多いから良いソロになるわけではありません。むしろ少ない音ではっきり語るほうがずっと難しく、ずっとかっこいいのです。今日はその第一歩として、**2〜4音**のごく短い一小節を作ってみましょう。

今日のフレーズはボックス1の中でルートAから始まり、**4度（D）**で止まります。<mark>4度はルートでもなく完全に落ち着いた音でもないので、そこで止まると、まだ終わっていないという感じが残ります。</mark>これがまさに**質問のように開いたフレーズ**です。語尾を少し上げて「それで？」と問いかけるような感じですね。逆にルートで終わると句点が打たれ、会話が閉じます。質問がうまく開くと、聴く人は自然と次を待つようになります。今日はわざと**開いた締めくくり**を練習して、翌日に学ぶ答えのフレーズと対になるよう準備します。

短いフレーズの力は**空けること**にあります。音をたくさん入れたい欲を手放して、必要な二、三音だけ残します。<mark>音が少ないほど、一つひとつがはっきり聞こえます。</mark>最初は「これは単純すぎないか？」と思うかもしれませんが、ブルースの声はたいていごく**少ない音**で語ります。一つのフレーズを弾いたら少し手を止めて、今言ったことがどう聞こえたか自分で聴いてみます。正確な音より、何を言いたいかが先です。さあ、今日は短くてもはっきりした一小節を手に入れましょう。

```json
{
  "id": "m2.w7.d1.short_phrase",
  "type": "tab",
  "meta": { "title": "A short phrase that opens on the 4th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70。** ルートAから始まってb3を通り、4度（D）で止まります。最後の4度を長く伸ばして「まだ終わっていない」余韻を残します。

## ② ビジュアル資料

今日作るフレーズが指板のどこにあるか**全体像**で見ておきましょう。緑で示した**4度（D）**がフレーズを開いておく場所です。ルート**A**から出発して、この4度で止まることを目で覚えておきます。

```json
{
  "id": "m2.w7.d1.box1_map",
  "type": "scale_shape",
  "meta": { "title": "Where the short phrase lives (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **ルートから4度へ。** ルートAから出発して、3弦7フレットの4度（緑）で止まります — ここが質問を開いておく場所です。

<mark>この二つの音、ルートと4度が今日のフレーズの始まりと終わりです。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 70。今日のフレーズの二本の柱、**ルートAと4度（D）**を交互に弾いて手と耳を温めます。4度がルートとどう違う感じか、あらかじめ聴いておきます。

```json
{
  "id": "m2.w7.d1.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the root and the open 4th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70。** ルートを半拍、4度を半拍。二つの音の色がどう違うか耳に入れます。

**10〜20分・頭のトレーニング（今日のターゲット＝開いた終わりを感じる）**
フレーズに入る前に、4度で止まったときに生まれるあの**中途半端な緊張**を耳で確かめます。ルートで止まるときと交互に比べると、違いがはっきりします。<mark>4度で止まると、まだ答えが残っているという合図が聞こえます。</mark>

**20〜40分・実戦：2〜4音の短いフレーズ（BPM 70）**
今日の完成物です。**四つの音**で短く話し、最後の4度で開いておきます。

```json
{
  "id": "m2.w7.d1.phrase_practice",
  "type": "tab",
  "meta": { "title": "A four-note phrase ending open (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70。** b3-ルート-5度を通って最後の4度で止まります。音を急がず、4度で手を止めて余韻を残します。

<mark>四つの音がはっきり聞こえて、最後の4度で開いた感じがすれば、今日のフレーズが完成します。</mark>

**40〜50分・録音（今日のミッション）**
短いフレーズを三回録音します。音がはっきりしているか、最後の4度で本当に開いた感じがするか — この二つだけを聴いてみます。

**今日の完了基準：** 四音の短いフレーズをはっきり弾き、最後の4度で止まって、まだ終わっていない開いた感じを作った。

## ④ ヒント / よくあるミス

短いフレーズでよくあるミスです。たいていは音を入れすぎるか、終わりをあいまいに閉じることから起きます。

```json
{
  "id": "m2.w7.d1.open_end",
  "type": "scale_shape",
  "meta": { "title": "Root opens, 4th leaves it open", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" }
  ]}
}
```
▶ **開いて、開いたままに。** ルートから出発して緑の4度で止まります。ここではルートで閉じません。

- **音を入れすぎる。** 二、三音で十分です。音が多くなると、何を言っているかがぼやけます。
- **4度で止まらずルートへ下りる。** すると質問ではなく答えになってしまいます。今日はわざと開いておきます。
- **速く弾きすぎる。** BPM 70で十分です。速さより音のはっきりさが先です。
- **一度外したら止まる。** 短い言葉は繰り返しから熟します。少し外れても最後までつないで一小節を完成させます。
</content>
