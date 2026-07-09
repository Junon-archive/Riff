---
title: "E9の上でチャッ — コードとゴーストの対比"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 本物のコードが鳴り、そしてチャッと詰まる

## ① 理論・説明

昨日E9を右手モーターの上に乗せました。今日はWeek 2で学んだ**<mark>ゴーストノート</mark>**をこの本物のコードに適用します。もう対比がずっと豊かになります。

先週の実音は小さなスタブ1つでしたが、今日の実音はE9という完全なコードです。左手をしっかり押さえてE9が鳴る「タ」と、力を少し抜いてチャッと詰まるゴースト「チッ」。同じE9の場所で圧力だけオン・オフします。コードが華やかに鳴り、瞬間ふっと詰まり、また鳴る — その対比こそが<mark>ファンクギターの本当の質感</mark>です。

ここで左手の役割が2つに増えます。1つは「コードを正確に押さえる手」、もう1つは「圧力を調節する手」。この2つを同時にやるのは最初は戸惑います。特に力を抜くときにコードのフォームまで崩れると、次の実音が汚れます。だからコツは、**<mark>フォームは保ったまま圧力だけ緩める</mark>**こと。指を弦から離さず、押す力だけを抜いたり入れたり。

最初はコードもゴーストも気にして大変でしょう。当然です。今日はE9を1回鳴らしてゴースト1回、その対比さえはっきりすれば十分。手になじめば、あなたのE9はただのコードではなく<mark>「呼吸する」グルーヴ</mark>になります。コードが鳴ったり詰まったりするこの呼吸こそ、のっぺりした伴奏と「ファンクらしい」伴奏を分ける<mark>決定的なひと差</mark>です。

## ② ビジュアル資料

E9の<mark>実音（青）とゴースト（無色）の対比</mark>です。同じ場所で圧力だけオン・オフ — フォームは保ったまま。

**例1 — E9＋ゴーストのミックス（1小節）。** 1・3拍の頭にE9実音、2・4拍の「&」にE9、残りはゴースト。コードが鳴り、チャッと詰まります。

```json
{
  "id": "m1.w4.d2.e9_ghost1",
  "type": "tab",
  "meta": { "title": "E9 + ghost mix (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68。** 実音の場所だけ左手をしっかり、残りは緩めて「チャッ」。コード／ゴーストの対比を聴いて4回。

**例2 — E9ゴースト・グルーヴ（2小節）。** 実音をもっと密に混ぜたドラムのようなバージョン。コードとチャッが速く交互に。

```json
{
  "id": "m1.w4.d2.e9_ghost2",
  "type": "tab",
  "meta": { "title": "E9 ghost groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68。** 慣れたら実音の位置を変えて応用。フォームが崩れないかが肝心。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。E9を押さえたまま「タ（しっかり）・チッ（緩める）」を交互に出して<mark>圧力オン・オフ</mark>をウォームアップ。フォームは保つ。

**10〜20分 · 頭のトレーニング（今日のターゲット＝フォーム保持＋圧力）**
E9フォームを押さえたまま、指を離さず押す力だけを抜いたり入れたり反復。<mark>コードが生きたり死んだりするか</mark>確認します。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 68）**
**例1**（E9＋ゴースト）をBPM 68で4回 → **例2**（ゴースト・グルーヴ）へ。<mark>コードとチャッの対比</mark>、そして<mark>フォーム保持</mark>が肝心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：<mark>E9がはっきり鳴るか</mark>／<mark>ゴーストは音程なく「チャッ」か</mark>／<mark>コードフォームが崩れなかったか</mark>。

**今日の完了基準：** E9フォームを保ったまま圧力オン・オフだけでコード（タ）とゴースト（チッ）の対比を作れる。

## ④ ヒント / よくあるミス

- **力を抜くとフォームが崩れる。** 圧力だけ緩める。指を離すと次のコードが汚れます。指先を弦につけたまま。
- **ゴーストがコードで鳴る。** 力が抜けきっていません。「チャッ」は音程なしで。
- **実音があいまい。** 力を入れ直すときはしっかり。中途半端だとコードが生きません。
- **右手が止まる。** 左手が忙しくても右手モーターは続ける。
