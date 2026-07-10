---
title: "両手ミュート — ノイズのないゴースト"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 両手ミュート、ノイズのないゴースト

## ① 理論・解説

昨日**サム-チッ-ポップ**を一つにつなぎました。今日はその流れを<mark>きれいに</mark>磨きます。目標は**両手ミュート** — **弾かない弦を沈黙させ、ゴースト（「チッ」）は正確に**出すことです。スラップが汚く聞こえるほとんどの理由は間違った音ではなく、**鳴ってはいけない弦が漏れるノイズ**なのです。

ミュートは**両手が一緒に**行います。**左手**はゴーストを出すとき複数の弦に広くかぶさり、<mark>弾かない弦まで覆って</mark>寝かせます。**右手**は親指の側面や手のひらを低音弦に当て、ポップを弾く瞬間も下の弦がつられて鳴らないよう押さえておきます。こうして両手が**要らない音を先に消しておく**と、残るのは狙ったドン・チッ・パチッだけです。

今日は昨日の流れに後ろのゴーストを一つ足して**サム-チッ-ポップ-チッ**を完成させます。空いた二つの場所を「チッ」ですべて埋めた、みっちり詰まった8分の流れです。ただし今日の肝心は速さではなく<mark>きれいさ</mark>です。**BPM 60**で4分音符にミュートを点検したあと、**BPM 70**で8分音符につなぎます。ミュートは目ではなく**耳で点検**します — 一節弾いて手を止めたとき、何の音も残らなければ正常です。もし残響がうなって残るなら、それはどこかの弦が覆いきれていない合図です。速さを上げる前に、その弦から見つけて寝かせます。

**5弦**ならミュートがさらに重要です。低音Bが一本多いので、親指で常に覆っておかないと簡単にうなります。今日は音を増やすより、**漏れる音を消す**ことに集中します。

## ② ビジュアル資料

まず**オクターブの手の形**を確認します — 下の青がサム（ルートE）、上の青がポップ（オクターブE）です。今日はここに後ろのゴーストを足して<mark>サム-チッ-ポップ-チッ</mark>を完成させつつ、弾かない弦が静かかに集中します。各例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w3.d3.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下がルートE（サム）、上がオクターブE（ポップ）。「チッ」は3弦、残りの弦は手で覆って寝かせます。

```json
{
  "id": "m1.w3.d3.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音Bは親指で必ず覆っておきます。

**例1 — サム-チッ-ポップ-チッ 4分音符。** 四つの打撃を1拍ずつ大きく広げてミュートを点検します。打撃の合間に、弾かない弦が静かか見ます。

```json
{
  "id": "m1.w3.d3.tgpg_quarter_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
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

▶ **BPM 60、4弦。** ドン-チッ-パチッ-チッを1拍ずつ大きく。ポップを弾くとき低音弦がつられて鳴らないか確認します。

```json
{
  "id": "m1.w3.d3.tgpg_quarter_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
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

▶ **5弦。** 音と手の形は4弦と同じです。低音Bが漏れないよう親指で覆っておきます。

**例2 — サム-チッ-ポップ-チッ 8分音符。** 空いた場所をすべて「チッ」で埋めたみっちりの流れです。速くなっても<mark>ノイズが漏れない</mark>ようミュートを保ちます。

```json
{
  "id": "m1.w3.d3.tgpg_eighth_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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

▶ **BPM 70、4弦。** ドン-チッ-パチッ-チッがみっちりつながります。一節のあと弾かない弦にうなりがないか聴いてみます。

```json
{
  "id": "m1.w3.d3.tgpg_eighth_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop-ghost eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
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

▶ **5弦。** 4弦と音が同じです。低音Bが一本多いので親指ミュートをより気にかけます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のサム-チッ-ポップをBPM 60で数回流して手を目覚めさせます。今日はここに後ろの「チッ」が一つ足されます。

**10〜20分 · 頭のトレーニング**
例1（4分音符）をとてもゆっくり、打撃の合間に<mark>弾かない弦が完全に静かか</mark>だけに集中して確認します。

**20〜40分 · 実践**
例1（4分音符）を**BPM 60**で固めたあと例2（8分音符）へ進み**BPM 70**。ノイズが漏れたら速さを上げず、ミュートから直します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>狙った音以外にノイズがないか</mark>を聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** サム-チッ-ポップ-チッを、BPM 60〜70で弾かない弦のノイズなく、ゴーストを正確に入れて、4弦・5弦のどちらでもきれいに弾ける。

## ④ ヒント・よくあるミス

- **ポップのあと低音がうなる。** ポップを弾くとき下の弦がつられて鳴ります。右手の親指の側面を低音弦に軽く当てて押さえます。
- **ゴーストが大きすぎる。** ミュートに気を取られて「チッ」を強く叩きがちです。ゴーストはドン・パチッより少し小さく、合いの手のように軽く。
- **左手が狭い。** ゴーストの手が一本しか覆わないと隣が漏れます。指を数本の弦に広くかけます。
- **低音Bの油断（5弦）。** 弦が一本多いのでBが一番漏れます。親指で常にBを覆っておきます。
