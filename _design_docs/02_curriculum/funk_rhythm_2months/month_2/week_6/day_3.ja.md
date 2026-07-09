---
title: "音の間をゴーストで埋める — ラインがグルーヴになる"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
---

# Day 3 — まばらなラインを密なグルーヴへ

## ① 理論・説明

昨日まで描いたシングルノート・ライン、そのままだと音と音の間がぽっかり空いて少し物足りない。今日はその**<mark>空きを1か月目のゴーストノートで埋めて</mark>**密なグルーヴにします。

原理は先月そのまま。ラインの実音（タ）は左手を押さえてはっきり鳴らし、音と音の間の空いた16ビットの場所は左手の力を抜いたゴースト（チャッ）で埋めます。するとまばらだったラインが<mark>「タ・チャッ・チャッ・タ・チャッ」</mark>のように休みなく回るグルーヴになります。右手モーターは最初から最後まで止まらず、左手が「押さえるか抜くか」だけを行き来するんです。

```json
{
  "id": "m2.w6.d3.ghost_1bar",
  "type": "tab",
  "meta": { "title": "Single note + ghost fill (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

なぜ強力かというと、ラインの音が数個しかなくてもグルーヴがぎっしり聞こえるからです。ナイル・ロジャース式カッティングがコードでグルーヴを埋めたなら、今日は単音ライン＋ゴーストで同じくぎっしりした感じを出すんです。<mark>音は少なく</mark>、<mark>グルーヴは濃く</mark>。

ラインの音とゴーストを交互に出すのは最初は戸惑います。特に実音の場所でだけ正確に左手を押さえてすぐ抜くタイミングが難しい。当然です。今日はラインが単純でもいいので、「音ははっきり、間はチャッ」という対比を生かしてください。この対比が生きれば、たった数音で部屋をグルーヴで満たせます。これが<mark>ファンクの魔法</mark>です — たくさん弾くのではなく、少なく弾いて間をグルーヴで埋める。今日この感覚をつかめば、<mark>「音を節約する楽しさ」</mark>を初めて知るはずです。

## ② ビジュアル資料

ラインの実音（青）とゴースト（無色）を交互に。音は少なくても<mark>ゴーストが間を埋めて</mark>グルーヴがぎっしり。

**例1 — ライン＋ゴースト（1小節）。** 実音はまばら（E・A・G）、間は全部ゴースト「チャッ」。数音でもグルーヴがぎっしり。

```json
{
  "id": "m2.w6.d3.ghost_1bar",
  "type": "tab",
  "meta": { "title": "Single note + ghost fill (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 74。** 実音の場所だけ左手をしっかり、残りはチャッ。タ／チャッの対比を聴いて4回。

**例2 — ゴースト・グルーヴ・ライン（2小節）。** ラインにゴーストを密に混ぜた完成形。単音なのにドラムのようにぎっしり。

```json
{
  "id": "m2.w6.d3.ghost_2bar",
  "type": "tab",
  "meta": { "title": "Line with ghost groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 74。** 右手モーターは続け、左手だけ押さえるか抜くか。慣れたらラインの音を変えて応用。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。1音を決めて「タ（しっかり）・チャッ（抜く）」を交互に出して<mark>圧力オン・オフ</mark>をウォームアップ。右手モーターは続ける。

**10〜20分 · 頭のトレーニング（今日のターゲット＝ライン＋ゴースト）**
口で「タ・チャッ・チャッ・タ」とラインの音とゴーストを区別して歌います。<mark>どこが実音か</mark>先に描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 74）**
**例1**（ライン＋ゴースト）をBPM 74で4回 → **例2**（ゴースト・グルーヴ・ライン）へ。<mark>音の間がゴーストで埋まる</mark>のが核心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：<mark>実音ははっきりか</mark>／<mark>ゴーストが間を埋めるか</mark>／<mark>右手は止まらなかったか</mark>。

**今日の完了基準：** シングルノート・ラインの空きをゴーストで埋め、音は少なくてもぎっしりしたグルーヴを作れる。

## ④ ヒント / よくあるミス

- **間が空いて物足りない。** 音の間をゴーストで埋めて。右手を止めず、かすめ続ける。
- **ゴーストが音程で鳴る。** ライン以外の場所は力を完全に抜いて「チャッ」。音程が漏れると汚れます。
- **実音があいまい。** 押さえるときしっかり、抜くときしっかり。あいまいだとラインが生きません。
- **右手が止まる。** ラインとゴーストを気にしてモーターが切れます。揺れは続けて。
