---
title: "グルーヴを磨く — 三つの音のバランス"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — グルーヴを磨く、三つの音のバランス

## ① 理論・解説

4週目です — **1か月目の最終週**！ 3週間前はスラップの音すら出しにくかったのに、今は<mark>ゴーストが跳ねるグルーヴ</mark>を手にしています。この3週間が**ラフなグルーヴ → ゴースト → 磨き**へと続く旅だったなら、今週はその実りを**完成曲として録音**して残す週です。今日はその第一歩として、先週のグルーヴを**もっと固く磨きます。**

磨きの核心は**三つの音のバランス**です。スラップグルーヴは**サム（ドン）・ポップ（パチッ）・ゴースト（チッ）**の三つの打撃で転がりますが、三つの**大きさとトーンがばらばら**だと、いくら拍が正確でも雑に聞こえます。目標は<mark>サムとポップははっきり、ゴーストは少し小さく</mark> — この対比がグルーヴに立体感を与えます。ドラムでいえば**キック・スネアは鮮明に、ハイハットはさりげなく**敷くのと同じです。

今日は**E グルーヴの1小節**（サム-チッ-ポップ-チッ）だけをつかんで**トーンを均一に**磨きます。**サム**は親指の側面で弦を叩いて跳ね返るように打ち「ドン」に芯を入れ、**ポップ**は人差し指で弦を軽く引っかけて上へはじき「パチッ」をはっきり、**ゴースト**は左手を乗せて**音程なく軽く**打ちます。**BPM 75**で1小節を繰り返し、<mark>三つの音の大きさの差</mark>が毎回同じに再現されるか耳で確認します。まずは1小節だけ、その1小節が完全に均一になるまで繰り返すのが今日の近道です。速さより**一貫性**が今日の目標です。

**5弦**なら音も手の形も4弦と同じです。低音Bは親指で覆って寝かせ、**三つの音のバランス**の感覚だけを手に刻みます。今日この1小節が安定したら、明日は**ルートを移して**グルーヴを曲のように育てます。

## ② ビジュアル資料

今日は**E グルーヴの1小節**を<mark>三つの音が均等に</mark>なるよう磨きます。まず**オクターブの手の形**を指板で再確認し、その上で**サム-チッ-ポップ-チッ**を繰り返します。各例は**4弦・5弦の二つのバージョン**です。

まずは**オクターブの手の形**。下の青がサムで叩く**ルートE**、上の青がポップで弾く**オクターブE**です。その間の「チッ」は3弦で出します。

```json
{
  "id": "m1.w4.d1.octave_shape_e_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (E) — thumb root + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下がルートE（サム）、上がオクターブE（ポップ）。「チッ」は3弦で出します。

```json
{
  "id": "m1.w4.d1.octave_shape_e_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (E) — thumb root + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音Bは親指で覆っておきます。

いよいよその手の形で**1小節のグルーヴ**を回します。**BPM 75**で<mark>三つの音の大きさの対比</mark>が毎回同じに出るか確認します。

```json
{
  "id": "m1.w4.d1.refine_groove_e_4",
  "type": "tab",
  "meta": { "title": "Refined octave slap groove (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** サム-チッ-ポップ-チッの繰り返し。サム・ポップははっきり、ゴーストは少し小さく。

```json
{
  "id": "m1.w4.d1.refine_groove_e_5",
  "type": "tab",
  "meta": { "title": "Refined octave slap groove (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 75、5弦。** 音と位置は4弦と同じです。低音Bは親指で寝かせておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
先週のゴーストグルーヴ（サム-チッ-ポップ-チッ）をBPM 60で軽く流して手を目覚めさせます。今日は音の<mark>大きさの対比</mark>に耳を傾けます。

**10〜20分 · 頭のトレーニング**
1小節をとてもゆっくり回し、<mark>サム・ポップは大きく、ゴーストは小さく</mark>出るか一つずつ確認します。

**20〜40分 · 実践**
E グルーヴの1小節を**BPM 75**で反復します。三つの音のバランスが揺れたら速度を落としてトーンから合わせます。4弦で覚えたあと5弦でも同じバランスを確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>三つの音が均等に転がるか</mark>を聴いてみます。今日安定したBPMも記録しましょう。

**今日の完了基準：** サム・ポップ・ゴーストの大きさとトーンが均等にバランスした1小節のE グルーヴを、BPM 75で安定して反復できる。

## ④ ヒント・よくあるミス

- **サムとポップが埋もれる。** ゴーストが大きすぎるとドン・パチッが隠れます。ゴーストだけ少し力を抜きます。
- **トーンが毎回違う。** 親指を叩く位置がぶれています。指板端の同じ場所を繰り返し叩きます。
- **ポップが弱い。** 人差し指を弦の下に十分に引っかけていません。もう少し引っかけて上へはじきます。
- **低音Bの油断（5弦）。** バランスに集中してBが漏れやすいです。親指で常にBを覆っておきます。
