---
title: "ミュートで空間を作る — 余白のあるグルーヴ"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — ミュートで空間を作る、余白のあるグルーヴ

## ① 理論・解説

昨日まではドンとチャッを隙間なく埋めました。今日は逆です — **わざと音を空けて**グルーヴに空間を作ります。<mark>すべての場所を埋めるとかえって窮屈で、休符を一つ入れるとグルーヴが息をします。</mark>その余白を作る技術が**ミュート**です。

余白には二種類あります。一つは左手を乗せて出す**ゴースト（「チャッ」）**、もう一つはまったく音を出さない**休符**です。ゴーストは「チャッ」とリズムを埋めますが、休符は完全な静寂です。<mark>この二つを混ぜると埋めと空けが交互に</mark>なり、グルーヴがずっと生き生きします。

カギは**きれいな休符**です。休符の場所で弦が鳴り続けると余白が濁ります。前の音を出したあと<mark>右手か左手で素早く弦を押さえて音を切る</mark>のが核心です。これがうまくいくと、静寂がかえってはっきりした拍になります。

今日は**BPM 75**で余白を感じながら転がします。埋めた場所より空けた場所により耳を傾けます。<mark>休符の場所が静かではっきりしていれば、今日は成功です。</mark>4弦でも5弦でもミュートの方法は同じです。

## ② ビジュアル資料

今日のビジュアル資料は二つです。短い余白が入ったグルーヴと、一拍まるごと空けた広い余白を感じます。<mark>空けた場所</mark>こそグルーヴの息です。各例は4弦・5弦の二つのバージョンです。

まず**短い余白**です。ドン-チャッの間に8分休符を一つ入れ、チャッの出る場所を一つ静かに空けます。

```json
{
  "id": "m2.w5.d3.space_groove_4",
  "type": "tab",
  "meta": { "title": "Groove with space — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 75。** 三つ目の場所（休符）で弦を素早く押さえて音を切ります。その短い静寂が余白です。

```json
{
  "id": "m2.w5.d3.space_groove_5",
  "type": "tab",
  "meta": { "title": "Groove with space — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 位置と方法は4弦と同じです。低音**B**は親指で覆っておきます。

今度は**広い余白**です。ドンを一度鳴らしたあと一拍まるごと空け、次の拍にチャッ-チャッで再び埋めます。<mark>大きな余白のあとのチャッ</mark>がより跳ねて見えます。

```json
{
  "id": "m2.w5.d3.wider_space_4",
  "type": "tab",
  "meta": { "title": "Wider space — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75。** 2拍目をまるごと休みます。この広い静寂がグルーヴに緊張を作ります。

```json
{
  "id": "m2.w5.d3.wider_space_5",
  "type": "tab",
  "meta": { "title": "Wider space — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "rest": true },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のドン-チャッ・グルーヴをBPM 70で復習して手をほぐします。ドンとチャッのバランスを取り直します。

**10〜20分 · 頭のトレーニング**
休符の場所で弦を切る練習だけ別にします。<mark>音を出した直後に手が弦を覆うタイミング</mark>を手に覚えさせます。

**20〜40分 · 実践**
**短い余白**と**広い余白**の二つの例をBPM 75で転がします。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音**
余白のあるグルーヴ一小節を録音します。聴き返して休符の場所が静かではっきりしているか点検します。

**今日の完了基準：** 休符の場所をきれいにミュートして余白のあるグルーヴをBPM 75で転がし、4弦・5弦のどちらでも確認できる。

## ④ ヒント・よくあるミス

- **休符が静かでない。** 前の音の余韻が残ると余白が濁ります。手で素早く弦を覆って切ります。
- **余白で急ぐ。** 空けた場所を待てず早く埋めると拍が前に出ます。静寂も一拍と思って待ちます。
- **ミュートに力が入る。** 弦を強く弾く必要はありません。軽く乗せて音だけ止めます。
- **低音Bの油断（5弦）。** 5弦では余白の間も低音Bが漏れやすいです。親指で覆っておきます。
