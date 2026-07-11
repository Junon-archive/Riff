---
title: "イントロとエンディングタグ — 曲の扉を開けて閉じる"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 始まりを告げ、終わりをしっかり閉じる

## ① 理論・説明

昨日はターンアラウンドで12小節を締める方法、<mark>次の周回へ戻す結び目</mark>を身につけました。今日は曲の最初と最後を飾ります。始まりを告げる**イントロ**と、終わりをしっかり閉じる**エンディングタグ**です。どちらも新しい技ではなく、これまでのブギーを少し配置し直しただけなので、すぐ手になじみます。

イントロは「さあ始まります」という合図です。ブルースで最も多いイントロは<mark>ターンアラウンドのようにIからVへ歩き、曲の前に付けること</mark>です。Aブルースなら**A7一小節 → E7一小節**を先に弾き、その**E7**の張りが曲の最初の小節A7へ自然に手を渡します。イントロ二小節さえあれば、一人で弾いてもバンドがカウントしてくれるように曲が始まります。だからイントロは短くても、曲の第一印象を決めるとても大切な二小節です。

エンディングタグは逆です。回り続けた12小節を<mark>ここで終わりとはっきり閉じる飾り</mark>です。最後にV（E7）で一度張りを与えてから、家の**A7**を大きく一度「ドン」と鳴らせば、曲がきれいに閉じます。4週間前はコード一つも詰まっていたのに、今は曲を開け閉めする扉まで手に入れています。速さは少しも急がなくて大丈夫です。今日はイントロを一度なめらかに付けられれば十分です。

まずイントロから見ましょう。A7一小節、E7一小節で曲の扉を開ける二小節です。

```json
{
  "id": "m1.w4.d2.intro",
  "type": "tab",
  "meta": { "title": "Intro — A7 to E7 into the tune", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1小節**A7**、2小節**E7**。この二小節が曲の扉を開けます。最後のE7が最初の小節A7へ手を渡します。

## ② ビジュアル資料

今度は曲を閉じる**エンディングタグ**です。<mark>V（E7）で張りを与えてから、家（A7）を大きく鳴らして「終わり！」と締めます。</mark>

```json
{
  "id": "m1.w4.d2.ending_tag",
  "type": "tab",
  "meta": { "title": "Ending tag — E7 to a big A7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1小節**E7**ブギー、2小節**A7**を全音符で「ドン」。この最後のA7が曲の終止符です。

イントロはVで開け、エンディングはIで閉じます。<mark>同じ二つのコードが、始まりと終わりで正反対の役割</mark>をします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。**A7ブギー**一小節で手をほぐします。<mark>ルートが毎拍はっきり鳴るか</mark>を確認します。

```json
{
  "id": "m1.w4.d2.warmup",
  "type": "tab",
  "meta": { "title": "A7 boogie warmup — 1 bar", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 65、シャッフル。** A7ブギー一小節。5弦ルートの上で5度→6度→b7→6度と歩きます。

今度はイントロのE7が曲の最初の小節A7へ渡る継ぎ目を練習します。

```json
{
  "id": "m1.w4.d2.intro_to_top",
  "type": "tab",
  "meta": { "title": "Intro E7 into the top (A7)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
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
▶ **BPM 80、シャッフル。** 1小節**E7**（イントロの終わり）、2小節**A7**（曲の始まり）。Vの張りが家へほどける瞬間です。

**10〜20分 · 頭のトレーニング（今日のターゲット＝開ける扉・閉じる扉）**
イントロは**Vで開け**、エンディングは**Iで閉じる**を頭に描きます。<mark>同じコードが、置かれる場所によって役割が変わります。</mark>

**20〜40分 · 実践イントロ＋曲の頭（BPM 80）**
イントロ二小節を付けて、<mark>曲の最初の小節まで途切れず</mark>つなげます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
イントロ二小節を録音します：<mark>始まりの合図がはっきり聞こえるか</mark>。

**今日の完了基準：** イントロ二小節（A7-E7）を付けて、曲の最初の小節へなめらかに移れる。

## ④ ヒント / よくあるミス

イントロとエンディングでよく出るミスです。最後の**A7**を薄く閉じると、終わった感じが出ません。

```json
{
  "id": "m1.w4.d2.final_chord",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 — the home chord to end big", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **エンディングは家（A7）で大きく。** 最後の一撃をしっかり鳴らせば曲が閉じます。5弦開放のAがルートです。

- **イントロが長すぎる。** 二小節で十分です。長いと曲がだれます。
- **エンディングのA7が弱い。** 最後は自信を持って大きく鳴らします。
- **イントロと本編の間が切れる。** E7からA7へ休まず直接つなぎます。
- **シャッフルが崩れる。** 飾りに気を取られてロング・ショートが平らになります。足で拍を守ります。
