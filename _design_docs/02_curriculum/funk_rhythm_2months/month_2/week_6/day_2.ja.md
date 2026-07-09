---
title: "2弦をまたぐライン — ミュートはそのまま"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — 弦を変えても沈黙は保たれる

## ① 理論・説明

昨日は1弦でラインを描きました。今日は**<mark>5弦と4弦、2弦をまたぐ</mark>**ラインです。2弦が開くと、ラインがずっと広く歌います。

核心の難関はこれ。ラインが5弦から4弦へ移るとき、**<mark>たった今弾いた5弦を素早く殺し、4弦だけ鳴らす</mark>**必要があります。でないと2音が重なって汚れます。指が新しい弦へ移りながら、同時にたった今弾いた弦を片づける感覚 — これが<mark>シングルノート・ラインの本当の技術</mark>です。左手は常に「今鳴らす1弦」だけを開け、残りは全部覆います。

今日の素材はEペンタトニック・ボックスの5・4弦の音です（昨日のマップ）。5弦のR・b3に4弦の4度・5度を足すと、<mark>E-G-A-Bのように上下するライン</mark>が作れます。ベースラインやリフのように聞こえる、まさにファンクらしいラインです。

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

弦をまたぎながらミュートまで気にすると、最初は手が忙しい。特に弦を変えた直後に前の弦が「ウーン」と残って鳴りやすい。当然です。今日はラインが遅くてもいいので、弦を変えるたびに後ろがきれいに片づくかに集中してください。この感覚が身につけば、あなたのラインは2弦、3弦へ自由に広がります。1弦に閉じ込められていたラインが、ネックの上を行き来して歌い始めるんです。今日2弦開くだけで、表現できるメロディがずっと増えます。<mark>2弦がやがて3弦、4弦へつながる頼もしい足場</mark>です。

## ② ビジュアル資料

5・4弦の2弦をまたぐラインです。弦を変えるとき<mark>前の弦を殺すの</mark>が核心。マップで音の位置を再確認します。

**Eノートボックス（復習）。** 今日は5弦（R・b3）に4弦（4度・5度）を足します。弦を変えてもミュートは維持。

```json
{
  "id": "m2.w6.d1.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

**例1 — 2弦のライン（1小節）。** E(5弦)→G(5弦)→A(4弦)→B(4弦)と上がって下りる。弦が変わる瞬間に後ろを片づけて。

```json
{
  "id": "m2.w6.d2.cross_1bar",
  "type": "tab",
  "meta": { "title": "Two-string line, 5th<->4th (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
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
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72。** 弦を変えるとき前の弦が残らないか確認して4回。ラインがはっきりつながるように。

**例2 — クロス・リフ（2小節）。** 2弦をまたぐリフ。ベースラインのように聞こえるファンク・ラインです。

```json
{
  "id": "m2.w6.d2.cross_2bar",
  "type": "tab",
  "meta": { "title": "Crossing-string riff (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
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
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "sixteenth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "5" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "sixteenth", "role": "scale", "label": "b7" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72。** 慣れたら音を変えて自分の2弦リフに。ミュート維持が肝心。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。5弦↔4弦を交互に弾き、弦を変えるとき<mark>前の弦が死ぬか</mark>点検。残りの弦のミュートも維持。

**10〜20分 · 頭のトレーニング（今日のターゲット＝弦の切替＋ミュート）**
マップで5・4弦の音を刻む。指が<mark>新しい弦へ移りながら前の弦を覆う動作</mark>をゆっくり反復。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 72）**
**例1**（2弦のライン）をBPM 72で4回 → **例2**（クロス・リフ）へ。<mark>弦の切替で後ろがきれいなの</mark>が核心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：<mark>弦を変えるとき前の音が残らないか</mark>／<mark>ラインははっきりつながるか</mark>／<mark>他の弦の雑音はないか</mark>。

**今日の完了基準：** 5弦↔4弦の2弦をまたぐラインを、弦を変えてもミュートを保ってはっきり演奏できる。

## ④ ヒント / よくあるミス

- **前の弦が残って鳴る。** 弦を変えるとき前の弦を指で素早く覆って。重なると汚れます。
- **ラインが切れる。** 弦の切替で右手がためらいます。揺れは続け、狙いだけ移して。
- **音がはっきりしない。** 新しい弦を正確に狙えていません。1弦ずつはっきり。
- **速すぎる。** 弦の切替が正確でないとラインが生きません。ゆっくり、後ろの片づけを確実に。
