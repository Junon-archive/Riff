---
title: "ルート-5度ライン — 2分音符で一段"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — ルートに5度を加えて、2分音符で歩く

## ① 理論・解説

昨日はルート一つだけを全音符で進行を歩きました。今日は密度ランプの二段目を上ります — ルートに**5度**を加えて**2分音符**で歩きます。一小節をルート半分、5度半分に分けて踏むのです。<mark>音が一つ増えただけなのに、ラインがぐっと歩く感じ</mark>になります。

なぜよりによって5度でしょう？**5度はルートといちばんよく合う心強い相棒**だからです。ルートが家なら5度は隣の家のようで、どのコードに乗せても揺るがず安定します。だからウォーキングでは**ルート-5度（R-5）**が、いちばん最初に覚える骨組み中の骨組みです。今日もルールは昨日と同じ — <mark>毎小節の1拍目は必ずルートに着地</mark>し、3拍目で5度へ橋を架けます。

フレットボードにはとても便利なルールが一つあります。**5度はルートから一弦上、二フレット上**にあります。F7ならルートF（4弦1フレット）から**5度Cは3弦3フレット**、Bb7ならルートBb（3弦1フレット）から**5度Fは2弦3フレット**、C7ならルートC（3弦3フレット）から**5度Gは2弦5フレット**です。三つのコードとも手の形が同じでしょう？

まずはF7の**ルートと5度**を押さえておきます。

```json
{
  "id": "m1.w2.d2.f_r5_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root and 5th — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** ルートF（4弦1フレット）と5度C（3弦3フレット）。一弦上、二フレット上の場所です。

```json
{
  "id": "m1.w2.d2.f_r5_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F7 root and 5th — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

**5弦**でもR-5の手の形は4弦と同じです。ただ低音B弦のおかげで、あとで5度をより低いオクターブでも押さえられます。今日はまず**一弦上、二フレット上**のルールを手に刻むことに集中します。

## ② ビジュアル資料

では三つのコードの**ルート-5度**を目に入れ、進行を2分音符で歩いてみます。まずBb7のR-5の手の形を確認します。<mark>F7の形を一弦分ずらした場所</mark>なので、新しく覚えることはありません。すべての例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w2.d2.bb_r5_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root and 5th — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** ルートBb（3弦1フレット）と5度F（2弦3フレット）。F7の形を一弦上へ移した場所です。

```json
{
  "id": "m1.w2.d2.bb_r5_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Bb7 root and 5th — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 3, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bは覆っておきます。

では進行を**2分音符のR-5ライン**で歩きます。一小節でルート（1・2拍）と5度（3・4拍）を半分ずつ分けて踏みます。<mark>1拍目はいつもルート</mark>ということだけ守ります。

```json
{
  "id": "m1.w2.d2.r5_walk_4",
  "type": "tab",
  "meta": { "title": "Root-5th line — half notes over F7-Bb7-F7-C7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、4弦。** 各小節でR（1・2拍）→5（3・4拍）と半分ずつ歩きます。F7-Bb7-F7-C7のR-5ラインです。

```json
{
  "id": "m1.w2.d2.r5_walk_5",
  "type": "tab",
  "meta": { "title": "Root-5th line — half notes over F7-Bb7-F7-C7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 72、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のルートラインをBPM 70で一度歩きます。**ルート着地の感覚**を指先に呼び戻します。

**10〜20分 · 頭のトレーニング**
三つのコードのR-5の手の形をフレットボードで指先で確認します。**一弦上、二フレット上**のルールを目を閉じても思い浮かべられるように。下の準備例でF7のR-5だけをゆっくり歩きます。

```json
{
  "id": "m1.w2.d2.r5_prep_4",
  "type": "tab",
  "meta": { "title": "Root-5th prep — F7 half notes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 66、4弦。** F7のR-5だけを二小節反復します。半小節ずつ余裕をもって二つの音を行き来します。

```json
{
  "id": "m1.w2.d2.r5_prep_5",
  "type": "tab",
  "meta": { "title": "Root-5th prep — F7 half notes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 66, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "half", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 66、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

**20〜40分 · 実践（今日の完成物）**
上の**R-5ライン**を**BPM 72**で反復します。一小節にルート半分、5度半分。<mark>1拍目のルートと3拍目の5度が同じ大きさでそろって</mark>鳴るようにします。4弦で覚えたあと、5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して、**5度がルートと同じくらいはっきり**しているか聴いてみます。5度が小さく埋もれると3拍目がぼやけるので、二つの音を同じ力で弾きます。

**今日の完了基準：** F7-Bb7-F7-C7 の進行をR-5の2分音符ラインで、BPM 72で1拍目のルート・3拍目の5度に正確に着地しながら、4弦・5弦どちらも歩ける。

## ④ ヒント・よくあるミス

- **5度が小さい。** 慣れたルートだけを強く弾き、5度をそっと押さえがちです。二つの音が同じ大きさで鳴ってこそラインが釣り合います。

```json
{
  "id": "m1.w2.d2.c_r5_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 root and 5th — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** C7のルートC（3弦3フレット）と5度G（2弦5フレット）。ここでも一弦上、二フレット上です。

```json
{
  "id": "m1.w2.d2.c_r5_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 root and 5th — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りてより低い5度も探せます。

- **2拍目で急いで移る。** ルートは3拍目まで十分に鳴らすべきです。5度へ早く移りすぎると小節が揺れます。
- **手の形を毎回探し直す。** R-5は三つのコードとも同じ形です。一度掴んだ形をまるごと移しましょう。
- **5弦低音Bの油断。** 5度に集中してBに触れると低音が漏れます。使わないBは常に覆っておきましょう。
</content>
