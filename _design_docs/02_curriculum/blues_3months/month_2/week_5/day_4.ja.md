---
title: "ブルーススケール完成 — リードの地図を手に入れる"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — ボックス1 + ブルーノート = Aブルーススケールを統合する

## ① 理論・説明

ついに5週目の最終日です。この三日間で**ボックス1**を覚え、**ブルーノート（b5）**を加え、短いフレーズまで作ってみました。今日は、この断片を一つにまとめます。<mark>ボックス1にブルーノートを一音加えれば、マイナーペンタトニックが「ブルーススケール」に完成します。</mark>このスケールが、これからのあなたのすべてのブルースソロが出発する地図になります。リズムで伴奏を積み上げてきたこの一か月を越えて、いよいよ自分の声を出すリードへ渡る敷居です。

ブルーススケールはたった六つの音です — **R・b3・4・b5・5・b7**。マイナーペンタの五音に<mark>b5を一つそっと挟み込んだだけ</mark>なのに、響きは完全にブルースになります。だから覚えることが増えたわけではありません。すでに知っているボックス1に**涙を一滴**落としただけです。手の形も昨日のまま、5フレットの位置もそのままなので、プレッシャーを感じる必要はまったくありません。

この地図一つあれば、Aブルースの上で何を弾いても合います。<mark>どの音を選んでもブルースに合い、道に迷えばルートに戻ればいいのです。</mark>今日はこの六つの音を一つの体のように上り下りして、ブルーノートを通ってルートに着地するところまでやってみます。完璧でなくても大丈夫です。この4週間がリズムで「質問」を学んだ時間だったなら、今週は「答え」を開く最初の鍵を手にしたわけです。この箱一つを手に入れただけで、**リードの最初のボタン**はもうかけたのです。さあ、ブルーノートが生きている短いリックから聴いてみましょう。

```json
{
  "id": "m2.w5.d4.blues_lick",
  "type": "tab",
  "meta": { "title": "A blues lick with the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 6, "duration": "quarter", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **ブルーノートが生きているリックです。** 5度からb5をかすめて4へ、そして低いルートAへストンと落ちます。この一音の緊張が、リック全体をブルースに染めます。

## ② ビジュアル資料

これが今週の完成物、**Aブルースのボックス1**です。<mark>青いルート、紫のブルーノート、残りはスケール音 — 六つの音が一つの地図の上に全部集まりました。</mark>

```json
{
  "id": "m2.w5.d4.a_blues_box1",
  "type": "scale_shape",
  "meta": { "title": "A minor pentatonic Box 1 + blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70 },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "scale" },
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "scale" }
  ]}
}
```
▶ **BPM 70、シャッフルフィールで。** 6弦のルートA（5フレット）から上り下りします。**5弦6フレットのブルーノート（b5）**を通るとき、そっと引っかけるように — この音がブルースの涙です。

この箱を目を閉じても描けるようになれば、あなたはもう<mark>リードの地図を手に入れたのです。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 70。**ボックス1**を一度上り下りして手を目覚めさせます。<mark>手が5フレットの位置で楽か</mark>確かめます。

```json
{
  "id": "m2.w5.d4.warmup",
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
▶ **BPM 70、シャッフルフィール。** 6弦のルートから5弦の5度まで。昨日のように軽く。

**10〜20分・頭のトレーニング（今日のターゲット＝ブルーノートを入れて上り下り）**
ボックス1の上り下りのどこにb5が挟まるか<mark>頭の中で押さえて</mark>みます。5弦の5→6→7フレット、その6フレットがブルーノートです。

**20〜40分・実戦：ブルーススケールを上り下り（BPM 70）**
では、ブルーノートまで入れて六つの音を上り下りします。

```json
{
  "id": "m2.w5.d4.blues_scale_ascend",
  "type": "tab",
  "meta": { "title": "A blues scale — ascending with the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "role": "blue_note" },
      { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "duration": "quarter", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 70、シャッフルフィール。** 6弦のルートから、5弦で4→b5→5とブルーノートをかすめながら上がります。

<mark>ブルーノートを通るときはそっと引っかけるように</mark>、止まらずに最後まで上り下りします。

**40〜50分・録音（5週目卒業ミッション！）**
ブルーススケールを一度上り下りし、ブルーノートを通ってルートに着地するのを録音します：<mark>その一音が涙のように生きているか</mark>聴いてみます。

**今日の完了基準：** ブルーススケール（ボックス1 + ブルーノート）を止まらずに上り下りし、ブルーノートを通ってルートAに着地した。 — 今週の成果物：Aブルースのボックス1 + ブルーノートのスケール完成（5週目完成！）

## ④ ヒント / よくあるミス

ブルーススケールを使うときによくあるミスです。六つの音を全部入れれば良いソロになるわけではありません。

```json
{
  "id": "m2.w5.d4.spice_tip",
  "type": "scale_shape",
  "meta": { "title": "Blue note is spice, root is home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
    { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note" },
    { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **ブルーノートは薬味、ルートは家。** b5で緊張を与え、4・5・ルートのような安定した音でほどきます。

- **ブルーノートを乱発する。** 一フレーズに一度で十分です。惜しむほど、その涙が濃くなります。
- **スケールを機械のようになぞるだけ。** 地図は覚えたので、今度は止まって休み、歌うように選んで使います。
- **ブルーノートで止まる。** かすめて通り、安定した音でほどいてこそブルースらしくなります。
- **来週が心配になる。** 地図はもう手の中にあります。6週目にはこの箱で本物のソロを作ります。
