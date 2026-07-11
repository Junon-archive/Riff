---
title: "リズム変奏の統合 — 3週目の決勝線"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 9th・ストップタイム・ダイナミクスを一つに合わせる

## ① 理論・説明

3週目の決勝線です！今週学んだ三つ — **9thコード**、**ストップタイム**、**ダイナミクス** — を今日一つに合わせます。<mark>同じ12小節も、この三つの変奏があればまったく別の曲のように聞こえます。</mark>新しく学ぶことはありません。今日はすでに手にある材料を料理する日です。材料がどんなに良くても、一度に全部入れると味が絡まります。ですから今日は、一つずつ順番に乗せることを目標にします。三つを完璧に合わせられなくても大丈夫です。一つずつはっきり聞こえるだけでも、今週は十分に成功です。

今日の完成物は**ストップタイムA7スタブ**です。A7を**1拍でトッ → 沈黙 → 「2と」でトッ → 沈黙 → 3拍でトッ**と弾きます。<mark>この裏拍（「2と」）のトッ一発がストップタイムにドラマを足します。</mark>沈黙があるから、この裏拍の一撃がずっと劇的に聞こえます。余白が音を生かす瞬間です。

ここに色と強弱を足せば完成です。**A7**の代わりに**A9**に変えれば都会的な色がつき、一撃ごとに強く・弱くを与えればグルーヴが生きてきます。<mark>余白・色・強弱、この三つがのっぺりしたブギーを表情のある音楽に変えます。</mark>今日この一小節を録音すれば、3週目が完成します。たった一小節ですが、この中に今週の学びがすべて詰まっています。

まず色から見ましょう。同じストップタイムのリズムをA9で弾くと、こんなに粋になります。

```json
{
  "id": "m1.w3.d4.stoptime_a9",
  "type": "tab",
  "meta": { "title": "Stop-time A9 stabs — color option", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "color", "label": "9" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 3, "role": "chord_tone", "label": "b7" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** **A9**でストップタイムを弾きます。9度の色のおかげで、トッと弾く一撃がより洗練されて聞こえます。

## ② ビジュアル資料

今週の完成物、**ストップタイムA7スタブ**です。<mark>トッと弾いて空けて、裏拍でもう一度トッ — この一小節が3週目の成果物です。</mark>

```json
{
  "id": "m1.w3.d4.stoptime_a7",
  "type": "tab",
  "meta": { "title": "Stop-time A7 stabs", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** A7を**1拍でトッ → 沈黙 → 「2と」でトッ → 沈黙 → 3拍でトッ。** 沈黙が音と同じくらい大事です。9thコードに変えて色を足してもいいです。

ゆっくり始めて、<mark>沈黙の長さが毎回同じか</mark>を足で確認します。裏拍が揺れたら足をもっと大きく踏みます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。上のストップタイムA7スタブをゆっくり弾いて手に馴染ませます。**裏拍**のトッが定位置に落ちるか見ます。

今度はコードを変えてもストップタイムになるか見ます。**A7**から**D7**へ一小節ずつ移します。

```json
{
  "id": "m1.w3.d4.stoptime_change",
  "type": "tab",
  "meta": { "title": "Stop-time over A7 to D7", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "stroke": "down", "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "quarter", "stroke": "down", "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1小節**A7**ストップタイム、2小節**D7**ストップタイム。コードが変わっても、トッ・沈黙のリズムは同じです。

**10〜20分 · 頭のトレーニング（今日のターゲット＝色・余白・強弱を合わせる）**
頭の中で、A9の色、ストップタイムの余白、2・4拍の強弱を<mark>一つずつ乗せて想像します。</mark>

**20〜40分 · 実践ストップタイムA7スタブ（BPM 80）**
完成物を<mark>途切れず</mark>繰り返し、A9に変えて色も足してみます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
ストップタイム一小節を録音します：<mark>余白・色・強弱が全部生きているか</mark>。

**今日の完了基準：** ストップタイムA7スタブ一小節をシャッフルではっきり弾き、A9の色と2・4拍の強弱まで乗せて録音できる。 — 今週の成果物：Aブルースのリズム変奏（9th・ストップタイム・ダイナミクス）（3週目完成！）

## ④ ヒント / よくあるミス

決勝線でよく出るミスです。**三つを一度に**全部やろうとすると、リズムが崩れやすいです。

```json
{
  "id": "m1.w3.d4.color_option",
  "type": "fretboard_diagram",
  "meta": { "title": "A9 — the color option", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "9", "role": "color" },
    { "string": 2, "fret": 2, "finger": 2, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 3, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **色は選択です。** A7でリズムが固まったら、**A9**に変えて色を足します。順番を守れば簡単です。

- **裏拍が遅れる。** 「2と」のトッが遅いとドラマが死にます。足で「と」を正確に踏みます。
- **沈黙が短い。** 急ぐと余白が消えます。沈黙も正確な拍で数えます。
- **色から欲張る。** A9がまだ押さえられないなら、A7で先に完成させ、色は後から足します。
- **録音の省略。** 3週目の結果はこの一小節です。短くても必ず残し、来週と比べます。
