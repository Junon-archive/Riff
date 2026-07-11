---
title: "F7コードトーン・アルペジオ — 1週目の完成物"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — F7コードトーン・アルペジオ、今週を完成させる

## ① 理論・解説

1週目の最終日です。この週ずっと覚えたコードトーンを一つにまとめ、**F7コードトーン・アルペジオ**を今週の完成物にします。ここまでF7・Bb7・C7の<mark>踏んでもいい安全な石</mark>をすべて手に入れましたね。今日はその中から**F7**を一つ選び、R-3-5-b7を4分音符ではっきり歩いて今週を締めくくります。

完成ラインはとてもシンプルです。**ルートF（4弦1フレット） → 3度A（4弦5フレット） → 5度C（3弦3フレット） → b7 Eb（3弦6フレット）**。1拍に1音ずつ、**BPM 80**のスウィング4分音符で踏んで上ります。この四音がF7の上の「安全な石」で、これからどんなウォーキングを学んでも<mark>このアルペジオが骨組み</mark>になります。派手な飾りはあとで乗せればよく、今日はこの骨格をはっきり均一に歩くことがすべてです。

今日は三つのコードのフレットボードも並べて整理します。**F7・Bb7・C7**三つのコードのコードトーン位置を一度に目に入れておくと、来週から学ぶ本物のウォーキングラインがぐっと楽になります。三つのコードが<mark>同じ手の形を移したもの</mark>だという事実をもう一度確認し、Rからb7まで指先で押さえてみてください。

まずはいちばんよく踏む二つの石、**ルートFと3度A**をもう一度押さえておきます。

```json
{
  "id": "m1.w1.d4.f7_anchor_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 anchors — root F and 3rd A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦。** ルートF（4弦1フレット）と緑の音3度A（4弦5フレット）。ウォーキングでいちばんよく行き来する二つの石です。

```json
{
  "id": "m1.w1.d4.f7_anchor_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 anchors — root F and 3rd A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは手で覆っておきます。

**5弦**なら今日の完成アルペジオも4弦と音・位置が同じです。低音B弦のおかげで、同じF7を<mark>1オクターブ下でより重厚に</mark>試すこともできます。まずは4弦基準で今週の完成物をはっきり仕上げます。

## ② ビジュアル資料

では今週の完成物を作ります。まず**F7・Bb7・C7三つのフレットボード**を並べて確認し、それから<mark>F7コードトーン・アルペジオ</mark>を完成ラインとして回します。すべての例は**4弦・5弦の二つのバージョン**です。

まずは**F7のフレットボード**です。青い点四つがR・3・5・b7です。

```json
{
  "id": "m1.w1.d4.f7_shape_4",
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

▶ **4弦。** ルートF（4弦1フレット）からb7 Eb（3弦6フレット）まで。今日の完成アルペジオがまさにこの四つの場所です。

```json
{
  "id": "m1.w1.d4.f7_shape_5",
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

▶ **5弦。** 位置は4弦と同じです。低音Bは手で覆っておきます。

次は**Bb7のフレットボード**です。青い点四つがR・3・5・b7です。

```json
{
  "id": "m1.w1.d4.bb7_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** ルートBb（3弦1フレット）からb7 Ab（2弦6フレット）まで。F7の形を一弦上へ移した場所です。

```json
{
  "id": "m1.w1.d4.bb7_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 chord tones (R-3-5-b7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 9, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "b7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは手で覆っておきます。

そして**C7のフレットボード**です。青い点四つがR・3・5・b7です。

```json
{
  "id": "m1.w1.d4.c7_shape_4",
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

▶ **4弦。** ルートC（3弦3フレット）からb7 Bb（2弦8フレット）まで。Bb7の形を二フレット上へ押した場所です。

```json
{
  "id": "m1.w1.d4.c7_shape_5",
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

▶ **5弦。** 位置は4弦と同じです。低音Bは手で覆っておきます。

では今週の完成物、**F7コードトーン・アルペジオ**です。R-3-5-b7を**BPM 80**のスウィング4分音符ではっきり踏んで上ります。

```json
{
  "id": "m1.w1.d4.f7_arpeggio_4",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 80、4弦。** F7のR（4弦1フレット）-3（4弦5フレット）-5（3弦3フレット）-b7（3弦6フレット）をはっきり踏みます。この四音がF7の上の「安全な石」です。

```json
{
  "id": "m1.w1.d4.f7_arpeggio_5",
  "type": "tab",
  "meta": { "title": "F7 chord-tone arpeggio — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
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

▶ **BPM 80、5弦。** 音と位置は4弦と同じです。低音Bへ下りて、同じF7をより重厚な低音域でも試してみます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日覚えた三コードのアルペジオ・ウォーキングをBPM 72で一度歩きます。**三つのコードの感覚**を指先に呼び戻します。

**10〜20分 · 頭のトレーニング**
F7・Bb7・C7のフレットボードを見ながら、各コードのRからb7まで指先で確認します。次に下の準備例で、**半小節ずつ長く**F7アルペジオをゆっくり踏んでみます。

```json
{
  "id": "m1.w1.d4.f7_prep_4",
  "type": "tab",
  "meta": { "title": "F7 arpeggio prep (long notes) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、4弦。** 各音を半小節ずつ長く鳴らします。音の間の位置移動を余裕をもって覚える準備運動です。

```json
{
  "id": "m1.w1.d4.f7_prep_5",
  "type": "tab",
  "meta": { "title": "F7 arpeggio prep (long notes) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "half", "label": "3", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 6, "duration": "half", "label": "b7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、5弦。** 位置は4弦と同じです。低音Bは手で覆っておきます。

**20〜40分 · 実践（今週の完成物）**
上の**F7コードトーン・アルペジオ**を**BPM 80**で反復します。1拍に1音ずつ、R-3-5-b7が<mark>すべて同じ大きさでそろって</mark>鳴るのが目標です。4弦で覚えたあと、5弦でも同じ感覚を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して、四つの音が**はっきり均一に**つながるか聴いてみます。今週到達したBPMも記録しておくと、来週のウォーキングラインを始める心強い出発点になります。

**今日の完了基準：** F7コードトーン・アルペジオ（R-3-5-b7）をBPM 80のスウィング4分音符ではっきり、4弦・5弦どちらも均一に歩ける。（1週目完成！）

## ④ ヒント・よくあるミス

- **完成だと急ぐ。** 最終日なので速くしたくなりますが、80で四つの音がそろわないとラインが崩れます。均一さが先です。

```json
{
  "id": "m1.w1.d4.review_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Three homes — F, Bb, C roots — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** 三つの青が各コードの家（ルート） — F（4弦1フレット）・Bb（3弦1フレット）・C（3弦3フレット）です。この三つの家さえ確かなら、残りはついてきます。

```json
{
  "id": "m1.w1.d4.review_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Three homes — F, Bb, C roots — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りてより低いルートも掴めます。

- **b7を流す。** 最後のb7を短く切って進みやすいです。四つ目の石まで十分に鳴らしてこそF7が完成します。
- **5弦低音Bの油断。** 完成に集中してBに触れると低音が漏れます。使わないBは常に覆っておきましょう。
- **一週間を自分でほめる。** コードトーンをすべて手に入れたのは大きな前進です。来週はこの石をつなぐ本物のウォーキングラインを学びます。
