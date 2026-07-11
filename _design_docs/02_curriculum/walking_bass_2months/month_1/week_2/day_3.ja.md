---
title: "コードトーン・アルペジオ — 4分音符ウォーキングの感覚"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — コードトーン・アルペジオ、4分音符で歩く

## ① 理論・解説

密度ランプの三段目です。昨日はルート-5度（2分音符）で歩き、今日はいよいよ**4分音符**で1拍に1音ずつ、**コードトーンR-3-5-b7の四音すべて**を踏みます。<mark>4分音符ウォーキングこそジャズ・ウォーキングベースの本当の歩み</mark>です。骨組みに肉がついて、ラインが大股で歩き始める瞬間です。

一小節に四音が全部入るのでリズムが速くなったようですが、実はルールは昨日と同じ — **1拍目はルート**、そして2・3・4拍に3度・5度・b7を順に乗せます。とくに**3度**はそのコードがメジャーかマイナーかを決める音なので、アルペジオでいちばんよく聴こえる色です。<mark>1拍目のルートにしっかり着地</mark>したら、残りの三音を均一につなげばいいです。

今日踏む場所はすでに先週すべて覚えたところです。F7なら**R（4弦1フレット）-3（4弦5フレット）-5（3弦3フレット）-b7（3弦6フレット）**、Bb7なら同じ手の形を一弦上へ移した場所です。新しい位置を覚えるのではなく、**知っている四つの場所を4分音符のリズムに乗せる**練習です。

まずはF7のコードトーン四つの場所をもう一度目に入れておきます。

```json
{
  "id": "m1.w2.d3.f_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 青四つがF7のR-3-5-b7。今日この四つの場所を4分音符で踏みます。

```json
{
  "id": "m1.w2.d3.f_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

**5弦**でも四つの場所は4弦と完全に同じです。低音Bは今日もひとまず覆っておき、**四音を均一な4分音符で**つなぐことだけに集中します。位置はすでに手にあるので、今日の課題はただリズムの均一さです。

## ② ビジュアル資料

ではコードトーンを4分音符で歩いてみます。まず**F7アルペジオ**、それから**Bb7アルペジオ**を音で確認します。<mark>二つのコードは同じ手の形が位置だけ移ったもの</mark>なので、感覚がそのまま続きます。すべての例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w2.d3.f_arp_4",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76、4弦。** F7のR-3-5-b7を1拍に一つずつ。1拍目のルートに着地したあと均一に上ります。

```json
{
  "id": "m1.w2.d3.f_arp_5",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

次は**Bb7アルペジオ**です。F7の形を一弦上へ移した場所で、同じR-3-5-b7を踏みます。

```json
{
  "id": "m1.w2.d3.bb_arp_4",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76、4弦。** Bb7のR（3弦1フレット）-3-5-b7。手の形はF7と同じです。

```json
{
  "id": "m1.w2.d3.bb_arp_5",
  "type": "tab",
  "meta": { "title": "Bb7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 76、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のR-5ラインをBPM 72で一度歩きます。**1拍目のルート着地**を指先に呼び戻します。

**10〜20分 · 頭のトレーニング**
F7のコードトーン四つの場所を指先で確認し、下の準備例でアルペジオを**上って下りながら**ゆっくり覚えます。位置を手に刻み直します。

```json
{
  "id": "m1.w2.d3.arp_prep_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down prep — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72、4弦。** 1小節は上り、2小節は下ります。上り下りしながら四つの場所を手に固めます。

```json
{
  "id": "m1.w2.d3.arp_prep_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio up and down prep — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 6, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 72、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

**20〜40分 · 実践（今日の完成物）**
上の**F7アルペジオ**と**Bb7アルペジオ**を**BPM 76**で交互に反復します。<mark>四つの4分音符がすべて同じ長さでそろって</mark>つながるのが目標です。4弦で覚えたあと、5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して、四音の**間隔が一定か**聴いてみます。特定の音だけ遅れたり速かったりしたら、その拍だけ別にゆっくり反復します。

**今日の完了基準：** F7・Bb7のコードトーン・アルペジオ（R-3-5-b7）をBPM 76のスウィング4分音符で均一に、4弦・5弦どちらも歩ける。

## ④ ヒント・よくあるミス

- **後半ほど速くなる。** R-3まではっきりしていて、5-b7で急ぎがちです。四拍が定規で測ったように同じ間隔でなければなりません。

```json
{
  "id": "m1.w2.d3.c_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** C7も同じ手の形です — R（3弦3フレット）-3-5-b7。余裕があればC7アルペジオも4分音符で踏んでみます。

```json
{
  "id": "m1.w2.d3.c_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りてより低いオクターブも試してみます。

- **b7を短く切る。** 最後のb7も次の拍まで十分に鳴らしてこそ小節がいっぱいになります。指を急いで放さないでください。
- **3度を流す。** 3度はコードの色を決める音です。ほかの音に埋もれないようはっきり弾きます。
- **5弦低音Bの油断。** 四音に集中してBに触れると低音が漏れます。使わないBは常に覆っておきましょう。
</content>
