---
title: "チャレンジ開始 — 8週間の武器庫を1つのトラックに"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 今週は学ぶ週ではなく舞台だ

## ① 理論・説明

最終週へようこそ！　今週は新しいことを学ぶ週ではなく、8週間積み上げた武器を1つのトラックに注ぎ出す**舞台**です。

まず武器庫を総まとめしましょう。**1か月目** — 右手の16ビート・モーター（1週）、左手のゴーストノート（2週）、アクセント（3週）、E9ワンコード・ジャム（4週）。**2か月目** — 3弦トライアド・カッティング（5週）、シングルノート・ライン（6週）、スタッカートとシャッフル（7週）。1つ1つがリズムを作る道具です。今週はこの道具を取り出して自分だけのグルーヴを組み立てます。

このチャレンジのバッキングトラックは、**Eファンク、BPM 78、ベース＋ドラムだけ**の空のトラックです。その空っぽの空間を自分のギターで埋めるのが今週のミッション。今日はその上に乗せられる**「選択肢カード」**を選んでみます。コード・カッティングでいくか？　シングルノート・ラインでいくか？　下の2枚のカードを両方弾いて、どちらがトラックに合うか耳で感じてください。

正解はありません。今週ずっとあなたが「選ぶ」のが核心です。どのカードを使うか、どこでカッティングしどこでラインを入れるか、全部あなたの選択。今日は気軽に2枚のカードをトラックの上で実験して、「あ、このトラックにはこれが合うな」という感覚をつかめば十分です。2か月の決勝線が目の前です。ここまで来ただけで素晴らしい — いよいよ学んだことを1つに織り上げて「自分の曲」を作る番です。

## ② ビジュアル資料

チャレンジ・トラック（Eファンク・BPM 78）に乗せる2つの「選択肢カード」です。両方弾いてどちらが合うか選んで。

**カードA — カッティング・グルーヴ（2小節）。** 3弦トライアドにゴースト・アクセントを乗せたコードベースのグルーヴ。曲の「ヴァース」のようなパート。

```json
{
  "id": "m2.w8.d1.card_cut",
  "type": "tab",
  "meta": { "title": "Card A — cutting groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78。** トラックの上で4回。カッティングの爽やかなきらめきがトラックに合うか感じて。

**カードB — シングルノート・リフ（2小節）。** 5・4弦の単音ライン。ベースと噛み合う「リフ」のようなパート。

```json
{
  "id": "m2.w8.d1.card_single",
  "type": "tab",
  "meta": { "title": "Card B — single-note riff (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 10, "duration": "sixteenth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78。** トラックの上で4回。ラインがベースと会話するか感じて。カードAと比べて。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。8週間の道具（カッティング・シングルノート・スタッカートなど）を軽く1つずつさらって手を解きます。

**10〜20分 · 頭のトレーニング（今日のターゲット＝カード選び）**
チャレンジ・トラック（E・78）を聴きながら、カードA（カッティング）とカードB（ライン）のどちらが合うか想像。曲の構造を描きます。

**20〜40分 · 実戦グルーヴ（カードA・B / BPM 78）**
**カードA**（カッティング）と**カードB**（シングルノート）をトラックの上で交互に4回ずつ。どちらがトラックに合うか耳で選んで。

**40〜50分 · 録音・セルフフィードバック（推奨）**
2枚のカードをそれぞれ録音してチェック：どちらがトラックに合うか／拍が噛み合うか／次の3日間で何を伸ばすかメモ。

**今日の完了基準：** 8週間の武器庫を整理し、チャレンジ・トラックの上でカッティング・シングルノートの2枚のカードを弾いて方向を決められる。

## ④ ヒント / よくあるミス

- **1枚のカードに固執。** 両方実験すると曲が豊かに。ヴァースはカッティング、フックはラインのように。
- **トラックを聴かない。** バッキングを聴かないと自分のグルーヴが浮きます。ベース・ドラムをまず聴いて。
- **完璧強迫。** 今日は実験です。方向だけ決めれば十分。完成は今週ずっと。
- **速さへの欲。** 78が速ければもっと遅く。噛み合いが先、速さは後。
