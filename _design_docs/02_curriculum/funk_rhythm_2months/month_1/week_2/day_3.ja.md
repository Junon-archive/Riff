---
title: "ミックス — どこに「タ」、どこに「チッ」を置くか"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — 実音は節約するほど洗練される

## ① 理論・説明

均一なゴーストの絨毯が敷けたので、今日はその上に**<mark>実音をポツポツ置いて</mark>**本物のグルーヴを作ります。昨日までの「チチチチ」の上に、どの場所だけはっきりした「タ」を入れるかを決めるのが今日のすべてです。

手の位置は1つ。今日使う音は2・3弦の高音域の小さなスタブ（下の図）。ここで**<mark>左手をしっかり押さえれば実音（タ）、力を抜けばゴースト（チッ）</mark>** です。同じ場所、圧力だけの違い。だから手が動き回る必要はなく、圧力のオン・オフだけでグルーヴができます。

```json
{
  "id": "m1.w2.d3.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

核心の原則はこれ。**<mark>実音は節約するほど洗練されます</mark>。** 初心者はあちこちに「タ」を入れてうるさくします。プロは1〜2か所だけ「タ」を刺し、残りは全部「チッ」で流します。その抑制こそが<mark>グルーヴの余白</mark>です。そしてその「タ」の位置を1コマずらすだけで、まるで別の曲のように聞こえます — 今日はその魔法を自分で実験します。

最初は圧力をオン・オフするのが手になじみません。当然です。ゆっくり、「タ」の場所でだけ軽く力を入れてすぐ抜く練習を繰り返すと、あるとき指がスイッチのように勝手に動きだします。だから今日うまくいかなくても大丈夫。この圧力のオン・オフの感覚は、<mark>ファンクギター一生の武器</mark>になるので、時間をかける価値が十分にあります。

## ② ビジュアル資料

今日の音の素材 — 2・3弦の高音スタブです。この1か所で、左手の圧力だけで<mark>「タ」（実音）と「チッ」（ゴースト）</mark>を行き来します。

**高音Eスタブ（2弦）。** 3弦が根音（R）、2弦が3度。残りの弦はしっかりミュート。この場所を押さえれば「タ」、抜けば「チッ」。

```json
{
  "id": "m1.w2.d3.e_stab",
  "type": "fretboard_diagram",
  "meta": { "title": "High-E funk stab (2-string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 8, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — 実音＋ゴーストのミックス（1小節）。** 1・3拍の頭に「タ」、2拍の「アンド」に「タ」、残りは全部「チッ」。実音3発が拍を示します。

```json
{
  "id": "m1.w2.d3.mix_1bar",
  "type": "tab",
  "meta": { "title": "Real + ghost mix (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68。** 「タ」の場所を先に把握し、その瞬間だけ左手をしっかり。4回繰り返し、対比を聴いて。

**例2 — 押したグルーヴ（2小節）。** 「タ」を拍の頭と終わりに交互に置いて少し遅らせる感じ。これがファンクの「うねり」です。

```json
{
  "id": "m1.w2.d3.mix_2bar",
  "type": "tab",
  "meta": { "title": "Real + ghost, syncopated (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68。** 慣れたら「タ」の位置を1コマずつずらして自分のグルーヴに。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。昨日のゴースト絨毯の上に、どこでもいいので「タ」を1つ置いて<mark>圧力オン・オフ</mark>をウォームアップ。

**10〜20分 · 頭のトレーニング（今日のターゲット＝タの配置）**
口で「タ・チッ・チッ・タ」と今日のパターンの「タ」の場所を正確に数えます。<mark>どの16ビットに実音が来るか</mark>頭に描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 68）**
**例1**（ミックス）をBPM 68で4回 → **例2**（押したグルーヴ）へ。慣れたら「タ」の位置を変えて応用。<mark>実音は節約して</mark>。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：<mark>タとチッの対比ははっきりか</mark>／<mark>実音の場所のタイミングは正確か</mark>／<mark>ゴーストの背景はきれいか</mark>。

**今日の完了基準：** 1つの手の位置で、左手の圧力オン・オフだけで実音を狙った16ビットに配置してグルーヴを作れる。

## ④ ヒント / よくあるミス

- **「タ」が多すぎ。** 実音が増えるとグルーヴがうるさい。1〜2か所だけ、残りは「チッ」。
- **「タ」で手が移動。** 場所を変える必要はありません。同じ場所で圧力だけオン・オフ。
- **ゴーストが消える。** 「タ」に集中して背景の「チッ」が切れると絨毯が消えます。ゴーストを保ち続けて。
- **タイミングがもたつく。** 圧力を入れるのが遅いと「タ」がもたつきます。その場所の直前に準備を。
