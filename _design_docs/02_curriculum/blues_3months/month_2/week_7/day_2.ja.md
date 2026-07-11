---
title: "コール＆レスポンス — 質問フレーズと答えフレーズをやり取りする"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 問いと答えの二つのフレーズ

## ① 理論・説明

昨日は短いフレーズで一言の「言葉」を投げてみました。今日はその言葉に**答え**をつけます。ブルースではこれを**コール＆レスポンス**と呼びます — 一方が問い、もう一方が答える構造です。<mark>ソロの中で自分が質問し自分が答える、一人でする会話だと思えば簡単です。</mark>教会の聖歌隊でリーダーが一節を歌うと人々が受けて歌った、そこから来た古いやり方で、ブルースの骨組みでもあります。今日はそのやり方のまま、**二つのフレーズ**を対にして作ります。

肝心なのは**質問と答えの対比**です。質問フレーズは昨日のように**4度（D）**で止まって開いておきます — 「まだ終わっていない」という合図ですね。そして答えフレーズはルート**A**へ下りて着地します。<mark>質問がドアを開けると、答えがそのドアを閉めてくれるのです。</mark>二つのフレーズは似ていてもいいし、違っていてもいいです。大事なのは、一方は開いていて一方は閉じるという流れです。この対比がはっきりするほど、聴く人は「ああ、あれは質問で、これは答えだ」と自然に感じます。

最初は二小節をきっちり合わせるより、質問を投げて少し息を整えてから答えるという**呼吸**に集中します。<mark>答えは質問を聞いたあとに出てくるものです — 急がなくて大丈夫です。</mark>質問と答えの間のごく短い隙間が、かえって会話を生き生きさせます。今日は完璧な二小節より、問い-答えるその**やり取りの感じ**を手に覚えさせるのが目標です。さあ、自分自身との会話を始めましょう。

```json
{
  "id": "m2.w7.d2.call_and_answer",
  "type": "tab",
  "meta": { "title": "Call opens on the 4th, answer lands on the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70。** 1小節目は4度で止まって質問を開きます。2小節目は5度-b3を通ってルートAへ下り、答えを閉じます。

## ② ビジュアル資料

質問の音と答えの音が指板のどこにあるか**全体像**で見ます。緑で示した**4度（D）**が質問の止まる場所、青の**ルートA**が答えの着地する場所です。

```json
{
  "id": "m2.w7.d2.qa_map",
  "type": "scale_shape",
  "meta": { "title": "The question note and the answer note (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **質問は緑、答えはルート。** 4度（緑）で開き、ルートAへ下りて閉じます。

<mark>4度で開いてルートで閉じるこの二つの場所が、今日の会話の両端です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 70。今日の会話の二つの端、**開いた4度と着地のルート**を交互に弾いて手に覚えさせます。

```json
{
  "id": "m2.w7.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the open 4th and the landing root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 70。** 4度を半拍、ルートを半拍。開く音と閉じる音の感じをあらかじめ刻みます。

**10〜20分・頭のトレーニング（今日のターゲット＝質問と答えを区別する）**
実戦に入る前に、同じボックス1の音でも**どこで止まるか**によって質問になり答えになることを耳で確かめます。<mark>終わりの音を一つ変えるだけで、フレーズの意味がまったく変わります。</mark>

**20〜40分・実戦：コール＆レスポンス（BPM 70）**
今日の完成物です。1小節で**問い**、2小節で**答え**ます。

```json
{
  "id": "m2.w7.d2.call_response_practice",
  "type": "tab",
  "meta": { "title": "Ask and answer across two bars (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 70。** 1小節目は4度で止まって質問を開き、2小節目は5度-b3を通ってルートAにビブラートで着地して答えを閉じます。

<mark>質問が開いて答えがルートで閉じれば、一人でする会話が完成します。</mark>

**40〜50分・録音（今日のミッション）**
問い-答えを三回録音します。質問が本当に開いているか、答えがルートで確かに閉じるか聴いてみます。

**今日の完了基準：** 1小節の質問（4度で開く）と2小節の答え（ルートで閉じる）を続けて弾き、二つのフレーズが問い-答える会話のように聞こえた。

## ④ ヒント / よくあるミス

コール＆レスポンスでよくあるミスです。たいていは質問と答えが区別できないことから起きます。

```json
{
  "id": "m2.w7.d2.open_vs_close",
  "type": "scale_shape",
  "meta": { "title": "4th leaves it open, root closes it", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **開いて、閉じて。** 4度（緑）で開いてルートで閉じます。二つの場所の役割は逆です。

- **質問もルートで終える。** どちらもルートで閉じると、答えを二回しただけになります。質問は必ず4度で開いておきます。
- **質問と答えをくっつけて弾く。** 間にごく短い隙間を置いてこそ会話のように聞こえます。急いで進みません。
- **答えが長すぎる。** 答えも短くルートに着地すれば十分です。音を並べすぎません。
- **一度外したら止まる。** 会話は続くときに育ちます。少しずれても最後まで問い、答えます。
</content>
