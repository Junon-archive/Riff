---
title: "2小節で問い2小節で答える — 4小節の会話"
dayKey: "m3.w12.d2"
estMinutes: 50
i18nKey: "lesson.m3.w12.d2"
---

# Day 2 — コンピングで問いリックで答える4小節の会話

## ① 理論・説明

昨日はコンピングからソロへ移る継ぎ目を覚えましたね。今日はその切り替えを**一つの完結した会話**に育てます — **2小節のコンピング（質問）**を投げ、**2小節のソロ（答え）**で答える4小節の会話です。<mark>この4小節がブルースの会話の基本単位です — 問い、答え、また問う流れの種です。</mark>昨日の一小節の切り替えが、今度は二小節ずつやり取りする会話に育ちます。

質問は**A7ブギ2小節**です。開放のルートAの上で5→6→b7→6を二小節転がし、グルーヴで問います。答えは**ボックス1リック2小節**です。4度を**全音ベンディング**で押して緊張を作り、5度・b3を通ってルートに**ビブラート**で着地します。<mark>質問がリズムで「どう？」と問えば、答えはメロディで「こう！」と答えるのです。</mark>二小節ずつなので焦る必要なく、各フレーズを十分に語れます。

会話を自然にする秘訣は**息をつく空間**です。答えを音でぎっしり埋めず、コンピングが投げた質問を少し「聴いて」から答えます。<mark>言葉と言葉の間に休みがあってこそ、会話が焦らず余裕を持ちます。</mark>今日も**BPM 80、シャッフル**で、質問二小節と答え二小節を気持ちよくつなげてみます。4小節が一つの文のように聞こえ始めれば、12小節全体の会話もすぐです。

```json
{
  "id": "m3.w12.d2.answer_map",
  "type": "scale_shape",
  "meta": { "title": "The answer: box 1 lick notes", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **緑の4度**が答えの緊張を作るベンディング音です。ルートにビブラートで着地して答えを結びます。

## ② ビジュアル資料

今度は質問が住むコンピングの家をもう一度確認します。4小節の会話の前二小節がここで鳴ります — 開放のルートAの上に**5度・6度・b7**を乗せるA7ブギです。<mark>質問の家と答えの家が並んでいてこそ、二小節ずつ行き来する会話が楽になります。</mark>

```json
{
  "id": "m3.w12.d2.question_home",
  "type": "fretboard_diagram",
  "meta": { "title": "The question: A7 boogie home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **開放のルートA**の上でA7ブギで二小節を問います。そのあとボックス1へ登って二小節を答えます。

<mark>質問二小節、答え二小節 — この往復がブルースが「会話」である理由です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。A7ブギを二小節に伸ばして弾きます。質問を二小節の長さで転がし、グルーヴを安定させます。

```json
{
  "id": "m3.w12.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: two-bar A7 question", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60、シャッフル。** A7ブギ二小節。質問を二小節の長さに伸ばしてグルーヴを安定させます。

**10〜20分・頭のトレーニング（今日のターゲット＝4小節の会話）**
実戦の前に、二小節の質問が終わる地点で手がボックス1へ登る絵を描きます。<mark>質問の終わりと答えの始まりをあらかじめつないでおけば、4小節が途切れず流れます。</mark>

**20〜40分・実戦：4小節の会話（BPM 80）**
今日の完成物、**4小節の会話**です。前二小節はA7ブギで問い、後二小節はボックス1リックで答えます。**答えの4度ベンディング**で緊張を作り、ルートビブラートで文を結びます。

```json
{
  "id": "m3.w12.d2.four_bar_dialogue",
  "type": "tab",
  "meta": { "title": "Four-bar dialogue (2 comp + 2 solo)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1〜2小節コンピング（質問）→ 3〜4小節ソロ（答え）。答えは4度ベンディングで緊張を作り、ルートビブラートで着地します。

<mark>4小節が一つの文のように聞こえれば、あなたはもう一人で会話するブルース奏者です。</mark>

**40〜50分・録音**
4小節の会話を丸ごと録音します。質問二小節と答え二小節が一つの文のように自然につながるか聴いてみます。

**今日の完了基準：** 2小節のA7コンピングで問い2小節のボックス1リックで答える4小節の会話を止まらず弾き切り、丸ごと録音した。

## ④ ヒント / よくあるミス

4小節の会話でよくあるミスです。ほとんどは**答えを音でぎっしり埋めようとする**ところから来ます。

```json
{
  "id": "m3.w12.d2.leave_space",
  "type": "scale_shape",
  "meta": { "title": "Leave space in the answer", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **答えにも息を与えてください。** 空いた空間があってこそ、次の質問が入る場所ができます。

- **答えを音でぎっしり埋める。** 休みがないと会話が息切れします。数音だけではっきり答えます。
- **質問二小節が平板になる。** グルーヴがぼやけると答えも力を失います。ブギをはっきり転がします。
- **答えがコンピングより速くなる。** 答えるとき焦ると拍が先走ります。同じシャッフルの上に乗せます。
- **毎回同じに答える。** 4度ベンディングは守りつつ、下行音は少しずつ変えてみてもよいです。
