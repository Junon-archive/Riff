---
title: "アクセント — たった1か所を強く弾けばグルーヴが生きる"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — ファンクのうねりは抑制から生まれる

## ① 理論・説明

ファンクのあの「うねる」感じは、どこでも強く弾いて出るものではありません。むしろ逆です。ほとんどは弱く流し、**たった1〜2か所だけアクセントを刺したとき**にグルーヴが生きます。その刺しこそが**アクセント**です。

アクセントは、均一なモーターの上で特定の16ビットの場所だけ音量をぐっと上げること。16個全部強く弾けばただの雑音ですが、15個は弱く、1個だけ「パッ」と跳ねさせると、そこにリズムの重心が生まれます。歩くとき片足だけ強く踏むとリズムが生まれるのと同じ。**対比こそがグルーヴ**なんです。

今日は最初の一歩として、**「拍のアンド（&）」**（1-e-&-aの3つ目）にアクセントを入れます。下の楽譜で緑の場所がアクセント。この「&」に重みを乗せると、拍が少し前へ押されるような、ファンク特有の引っかかりが出ます。

```json
{
  "id": "m1.w3.d1.accent_and",
  "type": "tab",
  "meta": { "title": "Accent on the '&' (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

最初はアクセントを入れようとして隣の音まで大きくなったり、逆に何も跳ねなかったりが普通です。1音だけ強く、残りは力を抜くコントロールは数日かかります。焦らず、今日は「ここだけパッ」という感覚を1つつかめばいい。この一発が後でバッキングのスネアと重なった瞬間、あなたのグルーヴは急に生き生きと動きだします。今日はその「一発」の爽快さを初めて味わう日です。たった1か所を強く弾いただけでリズムがぐっと生きるその瞬間を、ぜひ感じてみてください。

## ② ビジュアル資料

今日のアクセントは「拍のアンド」。下の図の緑の場所を、その瞬間だけ強く弾きます。

**高音Eスタブ（アクセント位置）。** 同じ2・3弦の場所。普段は弱く、緑で示した「&」の瞬間だけ「パッ」と強く。

```json
{
  "id": "m1.w3.d1.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string) — accent position", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — 「&」にアクセント（1小節）。** 各拍の3つ目（&）だけアクセント（緑）、残りは弱いゴースト。4回の「パッ」がグルーヴを作ります。

```json
{
  "id": "m1.w3.d1.accent_and",
  "type": "tab",
  "meta": { "title": "Accent on the '&' (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66。** 「チッ・チッ・パッ・チッ」を口で数えて4回。緑だけ跳ね、残りは詰まるか確認。

**例2 — バックビート・アクセント（2小節）。** アクセントを2・4拍の「&」だけに。ドラムのスネアのように、後ろで「パッ」が掛かります。

```json
{
  "id": "m1.w3.d1.accent_back",
  "type": "tab",
  "meta": { "title": "Accent as backbeat (& of 2 and 4, 2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66。** 2・4拍だけアクセント。バッキングのスネアと重ねるとピタッと噛み合います。4回繰り返し。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。均一なゴーストの上に、どこでもいいのでアクセント1つを「パッ」と乗せて強弱コントロールをウォームアップ。

**10〜20分 · 頭のトレーニング（今日のターゲット＝&のアクセント）**
口で「チッ・チッ・パッ・チッ」とアクセントの場所を正確に数えます。「&」に重みが乗る感じを頭に描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 66）**
**例1**（「&」アクセント）をBPM 66で4回 → **例2**（バックビート・アクセント）へ。緑1か所だけ跳ね、残りは弱いかが肝心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：アクセント1か所だけ跳ねるか／残りは弱く流れるか／アクセントは拍に正確か。

**今日の完了基準：** 均一なモーターの上で「拍のアンド」だけにアクセントを正確に刺し、その場所だけ跳ね残りは弱く流せる。

## ④ ヒント / よくあるミス

- **全部大きくなる。** アクセントを入れようとして前後まで大きくなると対比が死にます。1音だけ強く。
- **アクセントが跳ねない。** 残りが強すぎて目立ちません。背景をもっと弱く。
- **右手が止まる。** アクセントに気を取られてモーターが切れます。揺れは続け、力だけ入れて抜く。
- **速さへの欲。** 対比が聞こえなければ無意味。ゆっくり、緑だけ「パッ」。
