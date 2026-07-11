---
title: "ルートライン — 全音符で進行を歩く"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — ルートだけで、進行を全音符で追って歩く

## ① 理論・解説

2週目へようこそ。先週はコードごとに踏んでもいい**コードトーン（R・3・5・b7）**を手に入れましたね。今週の一文はこれです — <mark>ウォーキングは最初から全部埋めません。</mark> **ルートだけ（全音符） → ルート-5度（2分音符） → コードトーンの4分音符**へと、密度を一段ずつ上げていきます。歩く前に立ち、立つ前に座るように。今日はその第一段階、**ルート一つだけを全音符で**踏みながら進行を追って歩きます。

ルートだけを踏むなんて地味に見えても、これがウォーキングの**骨組み**です。毎小節の頭拍でそのコードの**家（ルート）**にぴたりと着地する感覚 — これがつかめれば、残りの音はあとでいくらでも乗せられます。今日歩く進行は**F7 → Bb7 → F7 → C7**、一小節にルート一つずつです。<mark>毎小節の1拍目でルートに着地</mark>することさえ守れば、今日は成功です。

フレットボードで三つの家の位置を見ます。4弦基準で**ルートFは4弦1フレット**、**Bbは3弦1フレット**、**Cは3弦3フレット**です。三つの場所が近くに集まっているでしょう？手を大きく動かさずに三つのコードを行き来できるということです。全音符は一小節をいっぱいに鳴らすので、**左手は音を最後まで押さえたまま**、右手はツーフィンガーではっきり一度だけ弾きます。

まずは今日の出発点、**ルートF**一つの場所をしっかり押さえておきます。

```json
{
  "id": "m1.w2.d1.f_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "F root — home of F7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** ルートFは4弦1フレット。今日の進行の出発点であり家です。

```json
{
  "id": "m1.w2.d1.f_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "F root — home of F7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音B弦が一本増えるだけです。

**5弦**でもルートの位置は4弦と同じです。弦番号も4弦（E）〜1弦（G）そのままで、いちばん下に低音Bが一本増えるだけです。今日は低音Bはひとまず覆っておき、**三つの家の位置**を目と手に馴染ませることに集中します。

## ② ビジュアル資料

では今日歩く**ルートライン**を目に入れます。まず三つのコードの家 — **F・Bb・Cのルート**がフレットボードのどこに集まっているか確認します。<mark>三つの家は互いに手の届く距離に集まっています。</mark> それから全音符で進行を追って歩くラインを音で聴いてみます。すべての例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w2.d1.roots_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Three roots — F, Bb, C — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** 三つの青が各コードの家 — F（4弦1フレット）・Bb（3弦1フレット）・C（3弦3フレット）です。

```json
{
  "id": "m1.w2.d1.roots_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Three roots — F, Bb, C — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "Bb", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りてより低いルートも掴めます。

では、この三つの家を進行の順につなぎます。**F7 → Bb7 → F7 → C7**、一小節にルート一つずつ、全音符でいっぱいに鳴らします。<mark>毎小節の頭拍が正確なルート</mark>かどうかにだけ集中すればいいです。

```json
{
  "id": "m1.w2.d1.root_walk_4",
  "type": "tab",
  "meta": { "title": "Root line — whole notes over F7-Bb7-F7-C7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** F（4弦1フレット）-Bb（3弦1フレット）-F-C（3弦3フレット）を一小節に一つずつ全音符で。次の小節まで切れずに鳴らします。

```json
{
  "id": "m1.w2.d1.root_walk_5",
  "type": "tab",
  "meta": { "title": "Root line — whole notes over F7-Bb7-F7-C7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
F・Bb・Cの三つのルートをフレットボードで指先で確認します。まだ音程より**正確な着地**が先です。

**10〜20分 · 頭のトレーニング**
進行**F7 → Bb7 → F7 → C7**を口でコード名を呼びながら、各ルートを指先で先に押さえてみます。下の準備例で、FとBbの二つの家だけをゆっくり行き来します。

```json
{
  "id": "m1.w2.d1.root_prep_4",
  "type": "tab",
  "meta": { "title": "Root prep — F to Bb whole notes — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 63, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 63、4弦。** FとBbの二つのルートだけをとてもゆっくり行き来します。全音符を小節の終わりまで押さえる感覚を覚えます。

```json
{
  "id": "m1.w2.d1.root_prep_5",
  "type": "tab",
  "meta": { "title": "Root prep — F to Bb whole notes — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 63, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 1, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 63、5弦。** 音と位置は4弦と同じです。低音Bは覆っておきます。

**20〜40分 · 実践（今日の完成物）**
上の**ルートライン**を**BPM 70**で反復します。一小節にルート一つ、<mark>全音符が次の小節まで切れずに</mark>続くように鳴らします。4弦で覚えたあと、5弦でも同じ感覚を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して、**毎小節の頭拍**が正確なルートに落ちているか聴いてみます。揺れる小節があれば、そこだけ別に反復します。

**今日の完了基準：** F7 → Bb7 → F7 → C7 の進行をルートの全音符で、BPM 70で毎小節の頭拍に正確に着地しながら、4弦・5弦どちらも歩ける。

## ④ ヒント・よくあるミス

- **頭拍が揺れる。** 全音符でゆったり見えても、小節の頭拍が遅れると進行全体が押されます。メトロノームの1拍目に正確にルートを乗せます。

```json
{
  "id": "m1.w2.d1.c_root_4",
  "type": "fretboard_diagram",
  "meta": { "title": "C root — home of C7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** C7の家（ルートC）は3弦3フレット。Fと違い3弦から出発します。

```json
{
  "id": "m1.w2.d1.c_root_5",
  "type": "fretboard_diagram",
  "meta": { "title": "C root — home of C7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音Bへ下りてより低いCも探せます。

- **音を早く放す。** 全音符は一小節をいっぱいに満たさなければなりません。次のルートへ移る直前まで左手を押さえておきます。
- **ルートの位置を混同する。** FとCは弦が違います — Fは4弦、Cは3弦です。出発する弦を先に確認します。
- **5弦低音Bの油断。** ルートに集中してBに触れると低音が漏れます。使わないBは常に覆っておきましょう。
</content>
