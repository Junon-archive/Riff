---
title: "Bブギー — V(B7)へ移動"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — Vへ移動、Bブギー

## ① 理論・解説

昨日はAブギーでIVの位置を覚えました。今日はフォームを最後の位置、**V(B7)**へ移します。やり方は同じです — <mark>手の形はそのまま、ルートの位置だけ変えます。</mark>これでI・IV・Vの三つの位置がすべて手に入ります。三つそろえば、12小節のどの小節が来ても手が行き先を先に知っています。

B7のルート**B**は**3弦2フレット**です。Aブギーが3弦開放から出発したなら、Bブギーは同じ弦で二つ上へ上がって出発します。残りの**5-6-b7**は2弦の4・6・7フレットに乗ります。<mark>Aブギーの階段をまるごと二フレット押し上げた形です。</mark>手全体が少し上へ滑っただけで、階段の見た目は一つも変わっていません。だから新しい位置でも戸惑いません。

Vは12小節で曲を**押し進める**緊張の位置です。B7が出てくると「もう一周が終わりに近づく」という合図です。位置は少し高いですが、**R-5-6-b7**の階段は一つも変わりません。<mark>ここまで来ると、三つのコードがすべて同じフォームだと実感できます。</mark>一つの手の形を三つの位置へ移すだけなのに、いつの間にかブルース一曲の流れが手の中に描けています。

速度は忘れます。今日はBブギーをはっきり転がすこと、そして開放がない位置なので**左手がフレットを正確に**押さえることに集中します。<mark>2フレットから7フレットまで、手をあらかじめ広げておくと楽です。</mark>開放弦がないぶん左手の力が少し要りますが、その分だけ音がはっきり、しっかり出ます。**5弦**なら運指は同じで、低音Bだけ寝かせます。

## ② ビジュアル資料

今日も二つです。**Bブギーの手の形**を指板で確認し、そのフォームを転がす**Bブギー・シャッフル**を覚えます。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まず**Bブギーの手の形**です。下の青がルート**B**（3弦2フレット）、その上が5度・6度、無色が**b7**です。<mark>Aブギーが二フレット上へ移った位置です。</mark>

```json
{
  "id": "m1.w3.d2.b_boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "B boogie shape R-5-6-b7 (B7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 8, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4弦。** ルート**B**（3弦2フレット）→ **5度F#**（2弦4フレット）→ **6度G#**（6フレット）→ **b7 A**（7フレット）。

```json
{
  "id": "m1.w3.d2.b_boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "B boogie shape R-5-6-b7 (B7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 8, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音**B**は寝かせてBルートに集中します。

今度はその手の形を転がす**Bブギー・シャッフル**です。1小節で上って2小節で下りながら<mark>ロング-ショートで跳ねるように転がします。</mark>

```json
{
  "id": "m1.w3.d2.b_boogie_4",
  "type": "tab",
  "meta": { "title": "B boogie shuffle (B7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、シャッフル。** ルート**B**（3弦2フレット）から**5-6-b7**（2弦4・6・7フレット）の階段を上り下りします。Aブギーより二フレット上です。

```json
{
  "id": "m1.w3.d2.b_boogie_5",
  "type": "tab",
  "meta": { "title": "B boogie shuffle (B7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆って漏れないようにします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の**Aブギー・シャッフル**をBPM 60に転がして手をほぐします。位置移動がなめらかか確認して始めます。

**10〜20分 · 頭のトレーニング**
**Bブギーの手の形**をとてもゆっくり押さえます。開放がないので<mark>左手が2・4・6・7フレットを正確に押さえているか</mark>確認しながら覚えます。

**20〜40分 · 実践**
**Bブギー・シャッフル**を**BPM 70**で反復します。フレットがぼやけないようはっきり押さえるのが目標です。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**Bブギーの音がはっきりしているか**聴いてみます。今日到達したBPMも記録します。

**今日の完了基準：** Bブギー・シャッフル（R-5-6-b7）をV(B7)の位置でBPM 70にロング-ショートで、4弦・5弦のどちらでも転がせる。

## ④ ヒント・よくあるミス

- **音がぼやける。** 開放がなくフレットを押さえきれないと音がつぶれます。指先ではっきり押さえます。
- **手が遠くてb7が遅れる。** 7フレットまで手をあらかじめ広げておくと後ろの音が遅れません。
- **ロング-ショートがのっぺりする。** 高い位置でもシャッフル・フィールは同じです。各音の前をしっかり長く守ります。
- **低音Bの油断（5弦）。** B7ではルートBが忙しくても、使わない低音弦は親指で覆っておきます。
