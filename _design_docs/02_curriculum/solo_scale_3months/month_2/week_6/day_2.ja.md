---
title: "Cメジャー3度インターバル・シーケンス — 明るい3度（E）に着地する"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
lang: ja
---

# Day 2 — Cメジャーを3度で跳んで、明るいEにふわりと着地

## ① 理論・説明

今日なぜこれをやるかというと、昨日「Cも自分の手の中にある」ことを確認しましたよね。でもそれを確認しただけで終わると、Aマイナーでやってきた癖にじわじわ戻ってしまうんです。だから今日は、Cメジャーに**確かなアイデンティティ**を植え付けます。そのアイデンティティこそ、明るい3度、Eです。

メジャーサウンドが「明るい」と感じられる理由の99%は、この3度（E）のおかげです。マイナーは暗いb3（C）に着地して物悲しく、メジャーは明るい3度（E）に着地して華やかになります。でも昨日のように音を上下行でズラッと並べるだけだと、このEが「通り過ぎる7つの音の一つ」に埋もれてしまいます。だから今日の武器も**3度インターバル**。スケールの隣の音を飛ばして、その次の音へぴょんと跳ぶやり方です。

3度で跳ぶと魔法が起きます。Cから跳べばE、Dから跳べばF、Eから跳べばG……こうやって跳ぶたびにコードトーン（C・E・G）にどんどん引っかかるんです。特にC→Eのジャンプは、それ自体が「ルートから明るい3度へ」というCメジャーの核心の動きです。今日はこのC→Eジャンプを手に歌のように覚え込ませて、最後はEを長く伸ばして着地する感覚まで身につけます。

## ② 視覚資料

Cメジャーのポジションです。昨日と同じ指板ですが、今日はCメジャー視点の度数だけを付けました。ルートの**C**と、今日の主役である明るい3度**E**をハイライトしています。

```json
{
  "id": "m2.w6.d2.c_major_shape",
  "type": "scale_shape",
  "meta": {
    "title": "C major position — root C & bright 3rd E highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "scale": "C major (Ionian)",
    "tempoBpm": 84
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "6", "role": "scale" },
      { "string": 6, "fret": 7, "finger": 3, "label": "7", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 1, "label": "2", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "4", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "6", "role": "scale" },
      { "string": 3, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "4", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "6", "role": "scale" },
      { "string": 1, "fret": 7, "finger": 3, "label": "7", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

今日の本体、Cメジャー3度インターバル上行シーケンスです。C→E、D→F、E→G……ぴょんぴょん跳んで、最後に明るい3度**E**を長く伸ばして着地します。

```json
{
  "id": "m2.w6.d2.c_major_third_interval",
  "type": "tab",
  "meta": {
    "title": "C major 3rd-interval line resolving to bright 3rd (E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 84
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "6", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "7", "role": "scale" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "half", "technique": "vibrato", "label": "3(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 84）**
メトロノーム84に合わせて、3度インターバル上行シーケンスを6弦から1弦まで。8分音符2つで「ぴょん」の1セットです。C→Eのジャンプが出てくるたびに少しはっきりと。指がもつれたら80に一旦落として、また戻しても大丈夫です。

**10〜20分・頭のトレーニング（今日のターゲット＝E／明るい3度）**
メトロノームを止めて、指板から**Eだけ**を探して押さえます。5弦7フレット、2弦5フレット——この二か所。押さえるたびに「イー（E）！」と声に出して呼び、すぐ隣の4度F（2弦6フレット）と混同しないようしっかり区別します。そのあと、適当な音を押さえてから必ずEに帰る練習を3分間。Eに着くたびに「明るい」という感覚を意識的に刻み込みましょう。

**20〜40分・実戦即興（Cメジャー・ワンコードバッキング／BPM 80〜84）**
「C major backing track」を一つ流します。ルールは一つだけ、**3度でだけ跳び回り、フレーズを終えるときは必ずEに着地**すること。隣接する音を続けて弾くのは禁止、必ず一つ飛ばしで。Eに着地して軽くビブラートをかけると、あの華やかな感じがぐっと生きてきます。これが「明るい3度着地」の最初の手応えです。

**40〜50分・録音・フィードバック（推奨）**
30秒録音してから再生します。チェックポイント。**着地したEの音程がぶれずにきちんと押さえられているか**、そして3度ジャンプで途中の音を誤って一緒にこすっていないか。雑音が混ざる場合は、ピッキングしていない弦をピッキング側の手のひらで軽くミュートする習慣をつけましょう。

**今日の完了基準:** BPM 84でCメジャー3度上行シーケンスを1弦まで途切れずに弾けること。バッキングの上で3度ジャンプだけで8小節を埋め、Eでビブラートを添えて締めくくる。

## ④ ヒント・よくある間違い

- **Eの代わりにC（ルート）ばかりに着地してしまう。**ルート着地は安全ですが「明るい」味わいが出ません。今日はあえて3度（E）に着地する練習です。ルートは頼もしく、3度は華やか——この違いを体で感じることが目標です。
- **F（4度）で止まってしまう。**Eのすぐ隣なので一フレットずれてFに着地しがちですが、そうすると音がふわっと浮いて「解決していない」感じになります。着地する直前にフレットを一度目で確認する習慣をつけましょう。
- **3度の間の音も一緒に弾いてしまう。**3度の核心は間の音を**空ける**ことです。空いているからこそ、ジャンプの洗練された味わいが生きてきます。続けて弾いてしまうと昨日の羅列に逆戻りです。
- **ジャンプするとき手全体が揺れてしまう。**人差し指（5フレット）をアンカーとして固定し、他の指だけを動かしましょう。特に3弦↔2弦を行き来するC→Eジャンプで手が揺れると、着地の正確さが崩れてしまいます。
