---
title: "フレージングの統合 — 問い、休み、答えるコール＆レスポンスを完成する"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — 質問・余白・答えを一つの文に

## ① 理論・説明

7週目の最終日です。今週の間に、短いフレーズで一言話す方法、質問と答えをやり取りする**コール＆レスポンス**、そして音の間に**余白**を置く方法を一つずつ身につけました。今日はこの三つを一つの流れに合わせます。<mark>短く問い、少し休み、ルートで答える — この三つが集まると、いよいよ「話すように」弾けるようになります。</mark>今日仕上げるのは、1小節の質問と2小節の答えがつながる**コール＆レスポンスのフレーズ**です。今週学んだことをすべて詰めたゴールラインです。

完成したフレーズを分解してみましょう。**1小節目は質問**です。ルートから始まってb3を通り、4度（D）で止まります — 終わりを開いておいて「まだ終わっていない」感じを残しますね。<mark>4度で止まった瞬間、聴く人の耳は自然と答えを待ちます。</mark>**2小節目は答え**です。5度から4度-b3へ落ち着いて下り、ルートAに**ビブラート**で着地します。最後のルートの震えが文の句点です。二小節の間の短い余白まで感じれば、これが完全な一文になります。

このフレーズが特別な理由は、この6週間リズム・スケール・表現を一つずつ積み上げてきたものが、ついに**一つの完成した文**に集まるからです。<mark>音をたくさん知っていることより、短い一文をきちんと話すことが本物のブルースです。</mark>完璧でなくても大丈夫です。質問が開き、余白があり、答えがルートで閉じれば、それで**十分です**。さあ、今週を締めくくるコール＆レスポンスを手に入れましょう。

```json
{
  "id": "m2.w7.d4.two_sentences",
  "type": "tab",
  "meta": { "title": "Two sentences: question then answer", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70。** 1小節目は質問 — 4度で開いておき、2小節目は答え — 5度からルートへ下りてビブラートで結びます。

## ② ビジュアル資料

完成したフレーズが指板のどこを通るか**全体像**で見ます。緑の**4度（D）**が質問の開く場所、青の**ルートA**が答えの着地する場所です。

```json
{
  "id": "m2.w7.d4.qa_map",
  "type": "scale_shape",
  "meta": { "title": "Question note and answer note on the map (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **質問は緑、答えはルート。** 4度（緑）で開き、5度を通ってルートAへ下りて閉じます。

<mark>開いて-休んで-閉じるこの流れが、今日のフレーズのすべてです。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 70。今日のフレーズの両端、**開いた4度とビブラートのルート**を別々に温めます。

```json
{
  "id": "m2.w7.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the open 4th and the vibrato root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70。** 4度を半拍開いて、ルートを半拍震わせます。開く音と結ぶ音をあらかじめ手に覚えさせます。

**10〜20分・頭のトレーニング（今日のターゲット＝二小節をつなげて感じる）**
実戦に入る前に、質問1小節と答え2小節を頭の中で一つの文につなげて描きます。どこで開き、どこで休み、どこで閉じるか、**順序**を整理します。<mark>手より頭が先に流れを知ると、フレーズがずっと安定します。</mark>

**20〜40分・実戦：コール＆レスポンス（BPM 70）**
今週の完成物です。1小節で**問い**、余白を通って2小節で**答え**ます。

```json
{
  "id": "m2.w7.d4.call_response",
  "type": "tab",
  "meta": { "title": "Call and response (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
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
▶ **BPM 70。** 1小節目は質問 — 4度（D）で止まって「終わっていない」感じ。2小節目は答え — 5度から下りてルートAにビブラートで着地して「句点」。二小節の間のわずかな余白を感じます。

<mark>質問が開き、余白が息を作り、答えがルートで閉じれば、今週の声が完成します。</mark>

**40〜50分・録音（7週目卒業ミッション！）**
コール＆レスポンスを最初から最後まで録音します。質問が開いているか、余白が感じられるか、答えがルートで閉じるか — この三つを聴いてみます。

**今日の完了基準：** 1小節の質問と2小節の答えを余白まで生かして一つの文で弾き、答えがルートAにビブラートで着地して句点を打った。 — 今週の成果物：コール＆レスポンスのフレーズ（質問-余白-答え統合）完成（7週目完成！）

## ④ ヒント / よくあるミス

コール＆レスポンスを合わせるときによくあるミスです。三つの要素を全部入れようとして、流れが切れがちです。

```json
{
  "id": "m2.w7.d4.open_and_land",
  "type": "scale_shape",
  "meta": { "title": "Open on the 4th, land home on the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **開いて、休んで、ルートへ。** 4度（緑）で開き、5度を通ってルートにビブラートで着地します。

- **質問をルートで閉じてしまう。** すると答えが二回出たことになります。1小節目は必ず4度で開いておきます。
- **余白を抜かす。** 質問と答えをくっつけると文が急ぎます。二小節の間の息を必ず残します。
- **答えのルートをそのままにする。** 最後にビブラートがないと句点が打たれません。必ず震わせて結びます。
- **速く弾こうとしすぎる。** BPM 70で十分です。速さより質問-余白-答えの流れが先です。
</content>
