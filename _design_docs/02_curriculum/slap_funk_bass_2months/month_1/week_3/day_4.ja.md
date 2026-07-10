---
title: "ゴーストグルーヴ — 跳ねるオクターブ完成"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — ゴーストグルーヴ、跳ねるオクターブ完成

## ① 理論・解説

3週目の最終日です！ 今週覚えた**デッドノート（「チッ」）**、**T-ゴースト-P**、**両手ミュート**を一つに集めて<mark>ゴーストグルーヴ</mark>を完成させます。2週目に作ったラフなオクターブグルーヴ、覚えていますか？ 今日の成果物は、あのとき空けておいた二つの場所を**ゴーストですべて埋めたバージョン**です。

パターンは**サム-チッ-ポップ-チッ**の繰り返しです。親指でルートEを「ドン」、3弦に「チッ」、オクターブを「パチッ」、また「チッ」— この四つの打撃が8分音符で休みなく転がります。先週はドンとパチッの間ががらんと空いてぶつ切りでしたが、その場所を「チッ」が埋めると、グルーヴが急に<mark>ファンキーに跳ね</mark>始めます。この合いの手こそがスラップのバウンスエンジンです。

テンポは**BPM 75** — 今週で一番速いです。急がず、まず4分音符の準備で手を温めてから8分グルーヴへ進みます。**ゴーストはドン・パチッより少し小さく**叩いて合いの手のように軽く、弾かない弦は両手で寝かせてノイズを消します。二小節が滑らかに繰り返せれば、それが今週の完成物です。今日仕上げるこのグルーヴは、この3週間で積み上げた**サム・ポップ・ゴーストが一つにかみ合う**最初の実りです。だから速さを誇るより、四つの打撃が均一に転がる感覚を体に刻むことに集中します。

**5弦**なら音は4弦と同じです。低音Bを親指で覆ってミュートを保つか、慣れたら同じグルーヴをもっと重い低音で試します。さあ、今週積み上げた「チッ」を一つの<mark>跳ねるグルーヴ</mark>に完成させましょう。

## ② ビジュアル資料

今日は**今週の完成物**を作ります。オクターブの手の形を一度押さえ、4分音符の準備で手を温めてから、<mark>ピン固定のゴーストグルーヴ</mark>を回します。各例は**4弦・5弦の二つのバージョン**です。

まずは**オクターブの手の形**。下の青がサムで叩くルートE、上の青がポップで弾くオクターブEです。その間の「チッ」は3弦で出します。

```json
{
  "id": "m1.w3.d4.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下がルートE（サム）、上がオクターブE（ポップ）。「チッ」は3弦で出します。

```json
{
  "id": "m1.w3.d4.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音Bは親指で覆っておきます。

**準備 — サム-チッ-ポップ-チッ 4分音符。** グルーヴの前に四つの打撃を1拍ずつゆっくり温めます。

```json
{
  "id": "m1.w3.d4.ghost_groove_prep_4",
  "type": "tab",
  "meta": { "title": "Ghost groove prep (quarters) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 急がず、ドン-チッ-パチッ-チッの順番とミュートをもう一度合わせておきます。

```json
{
  "id": "m1.w3.d4.ghost_groove_prep_5",
  "type": "tab",
  "meta": { "title": "Ghost groove prep (quarters) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。低音Bは親指で寝かせておきます。

**今週の完成物 — ゴーストが跳ねるオクターブグルーヴ。** いよいよ8分音符で。<mark>サム-チッ-ポップ-チッ</mark>を二小節繰り返します。2週目の空いた場所をゴーストで埋めたバージョンです。

```json
{
  "id": "m1.w3.d4.ghost_octave_groove_4",
  "type": "tab",
  "meta": { "title": "Octave slap groove with ghosts — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **BPM 75、4弦。** サム-チッ-ポップ-チッの繰り返し。ゴースト（「チッ」）は左手を軽く乗せて音程なく。この合いの手がグルーヴを生かします。

```json
{
  "id": "m1.w3.d4.ghost_octave_groove_5",
  "type": "tab",
  "meta": { "title": "Octave slap groove with ghosts — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
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

▶ **BPM 75、5弦。** 音と位置は4弦と同じです。低音Bのミュートを保ちながらもっと重く試してみてもよいです。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日覚えたサム-チッ-ポップ-チッをBPM 60で軽く流して手を目覚めさせます。ゴーストがドン・パチッより少し小さいか確認します。

**10〜20分 · 頭のトレーニング**
準備例（4分音符）をとてもゆっくり。<mark>四つの打撃の順番とミュートが崩れないか</mark>確認します。

**20〜40分 · 実践（今週の完成物）**
ピン固定のゴーストグルーヴを**BPM 75**で反復します。二小節が滑らかにつながるのが目標 — 揺れたら準備例に戻ります。4弦で覚えたあと5弦でも同じ感覚を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>ゴーストが生きてグルーヴが跳ねるか、弾かない弦が静かか</mark>を聴いてみます。今週到達したBPMも記録しましょう。

**今日の完了基準：** ゴーストが跳ねるオクターブグルーヴ（サム-チッ-ポップ-チッ、8分）を、BPM 75でノイズなく二小節滑らかに、4弦・5弦のどちらでも弾ける。 — 週間成果物：跳ねるゴーストオクターブグルーヴの通し。（3週目完成！）

## ④ ヒント・よくあるミス

- **ゴーストが大きすぎる。** 「チッ」がドン・パチッと同じ大きさだとグルーヴが鈍くなります。ゴーストは少し小さく、合いの手のように軽く叩きます。
- **75で焦る。** 速くなったテンポに四つの打撃が押されて付きます。揺れたら準備例（4分音符）に下がって順番から。
- **ポップのあと低音がうなる。** ポップを弾くとき下の弦がつられて鳴ります。右手の親指の側面で低音弦を押さえて寝かせます。
- **低音Bの油断（5弦）。** グルーヴが繰り返されるほどBが漏れやすいです。親指で常にBを覆っておきます。
