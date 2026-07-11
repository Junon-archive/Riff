---
title: "ストップタイム — 弾いて沈黙でドラマを作る"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — 弾いて沈黙、ストップタイムで余白を作る

## ① 理論・説明

二日目です。昨日A9で色を足したなら、今日は**余白**を学びます。今日のテーマは**ストップタイム**です。<mark>ストップタイムは、コードを「トッ！」と弾いてから、音をぱっと切って沈黙を作るリズムです。</mark>バンドがみんなで一発弾いて息を止めるその瞬間、聴く人は次の音を待つようになります。余白が音と同じくらい、時には音より大事な理由です。良い演奏は、どれだけ多くの音を詰めるかではなく、どこを空けるかで完成します。話すときも、間や沈黙があってこそ言葉がはっきり伝わるのと同じです。

譜面では沈黙を**休符**で表します。私たちのデータでは`rest`がその沈黙です。<mark>コードを弾いたあと左手の力を少し抜いて弦を止めると、音がぴたっと切れて休符が生まれます。</mark>右手はずっと拍を数えていますが、弦は鳴らない状態です。この**弾いて止める**がストップタイムのすべてです。

今日使うコードは馴染みのある**A7**です。新しいコードを学ぶのではなく、すでに知っているコードで**リズム**だけを変えます。<mark>1拍で弾いて2拍は沈黙 — この一小節をドラマチックにするのが今日の目標です。</mark>沈黙がぎこちなくても大丈夫です。そのぎこちない空白こそがブルースの緊張感なのです。むしろその空白を楽しめるようになると、演奏がぐっと余裕のあるものになります。

いちばん単純なストップタイムから見ましょう。一度弾いて、残りは全部沈黙です。

```json
{
  "id": "m1.w3.d2.stoptime_intro",
  "type": "tab",
  "meta": { "title": "One stab, then silence", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1拍でA7をトッと弾き、残りの三拍は`rest`で完全に空けます。この沈黙の長さを感じてみてください。

## ② ビジュアル資料

今日の完成目標は**ストップタイム一小節**です。<mark>A7をトッと弾き、次の拍は音なしで空けます。</mark>この「弾いて空ける」が二回繰り返されます。

```json
{
  "id": "m1.w3.d2.stoptime_two_stabs",
  "type": "tab",
  "meta": { "title": "Stop-time — two even A7 stabs", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** **1拍でA7をトッ → 2拍沈黙 → 3拍でトッ → 4拍沈黙。** 空いた拍で弦が鳴らないように左手の力を抜きます。

休符で手が止まるのではなく、音だけが止まるのです。<mark>足はずっと四拍を踏み続けてこそ、次の一撃が定位置に落ちます。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 65。**A7**を四拍いっぱいに弾いて、音が続く「フル」の感じをまず体に入れます。

今度は逆に、**沈黙で始まる**ストップタイムを弾いてみます。

```json
{
  "id": "m1.w3.d2.stoptime_silence_first",
  "type": "tab",
  "meta": { "title": "Stop-time — start on silence", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 5, "fret": 0, "duration": "quarter", "stroke": "down", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** **1拍沈黙 → 2拍でトッ → 3拍沈黙 → 4拍でトッ。** 空いた拍で始まるので、次の一撃がより際立ちます。

**10〜20分 · 頭のトレーニング（今日のターゲット＝休符で力を抜く）**
コードを弾いた直後に左手の力を抜く動作を<mark>ゆっくり単独で練習します。</mark>トッ・抜く、トッ・抜く。

**20〜40分 · 実践ストップタイム（BPM 80）**
上の二つの例を交互に<mark>途切れず</mark>繰り返します。空いた拍で弦が漏れて鳴らないか確認します。

**40〜50分 · 録音／セルフフィードバック（推奨）**
ストップタイム一小節を録音します：<mark>沈黙が本当に静かか</mark>。

**今日の完了基準：** 馴染みのある**A7**で「トッと弾く → 沈黙」を繰り返すストップタイム一小節を、シャッフルではっきり弾ける。

## ④ ヒント / よくあるミス

ストップタイムでいちばんよく出るミスは、**沈黙が本当の沈黙になっていない**ことです。

```json
{
  "id": "m1.w3.d2.mute_for_rest",
  "type": "fretboard_diagram",
  "meta": { "title": "Release to silence the strings on the rest", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ **休符では力を抜きます。** 左手を弦から離さず、押さえる力だけを少し抜けば音が止まります。

- **休符が鳴る。** 左手の力を抜かないとコードが鳴り続け、沈黙が消えます。
- **テンポが走る。** 沈黙がぎこちなくて急ぐと、次の一撃が前のめりになります。足を踏み続けます。
- **手を完全に離す。** 弦から手をすっかり離すと開放弦が鳴ります。軽く乗せたまま力だけ抜きます。
- **強く弾くだけ。** 一撃も過ぎると汚くなります。明日学ぶ強弱につながります。
