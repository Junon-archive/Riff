---
title: "Eブギー・シャッフル・グルーヴ — 2週目完成"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — Eブギー・シャッフル・グルーヴ、2週目完成

## ① 理論・解説

2週目の最終日です。今週ずっと積み上げた**R-5-6-b7**のブギー・ウォークを、今日<mark>一つのグルーヴとして完成させます。</mark>上行と下行をロング-ショートのシャッフルで転がすと、いよいよ跳ねる**Eブギー・シャッフル・ベースライン**が手に入ります。今週のゴールラインです。

完成物は二小節です。**1小節目は上行**（R-5-6-b7）、**2小節目は下行**（b7-6-5-R） — 昨日覚えた往復そのままです。変わったのは一つ、<mark>今度はロング-ショートのシャッフル・フィールをしっかり乗せて跳ねるように転がします。</mark>階段をきちんと踏んでいたものを、今日は転がして「グルーヴ」に変えるのです。

右手の**ツーフィンガー**で各音の前を少し長く、後ろを短く転がします。**メトロノーム80**が今週の目標速度ですが、<mark>数字より跳ねが先です。</mark>70で跳ねる方が80で硬いよりずっといいです。楽な速度で転がりを生かしてから、ゆっくり上げます。

このブギーの手の形は**どのコードへも**そのまま移ります。今日は**キーE**で完成させますが、ルートだけ変えればAでもDでも同じフォームが通じます — シャッフル・ブルース一曲の骨格がもう手にあるわけです。**5弦**なら運指は同じで、低音**B**ルートでもっと重いバージョンも試します。今週も笑顔で締めくくります — <mark>一つの階段が、いよいよ曲になりました。</mark>

## ② ビジュアル資料

今日は二つです。まず**ブギーの手の形（R-5-6-b7）**を最後にもう一度確認し、次に今週の完成物**Eブギー・シャッフル・グルーヴ**を4・5弦で固めます。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まず**ブギーの手の形**をもう一度目に焼き付けます。青三つと無色の**b7（D）**一つ — 今週ずっと踏んできた階段です。<mark>この一つの手の形で曲を作ります。</mark>

```json
{
  "id": "m1.w2.d4.boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4弦。** ルート**E** → **5度B**（2フレット）→ **6度C#**（4フレット）→ **b7 D**（5フレット）。今日はこの階段をシャッフルで転がします。

```json
{
  "id": "m1.w2.d4.boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音**B**は寝かせるか、Bルートでもっと重く試します。

今度は今週の完成物、**Eブギー・シャッフル・グルーヴ**です。1小節で上って2小節で下りながら、<mark>ロング-ショートで跳ねるように転がします。</mark>

```json
{
  "id": "m1.w2.d4.e_boogie_4",
  "type": "tab",
  "meta": { "title": "E boogie shuffle — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80、シャッフル。** ルート**E**（4弦開放）→ **5度B** → **6度C#** → **b7 D**（3弦の2・4・5フレット）で階段を上り下りします。ロング-ショートで転がすと跳ねます。**5弦なら**低音**B**ルートでもっと重いバージョンも。

```json
{
  "id": "m1.w2.d4.e_boogie_5",
  "type": "tab",
  "meta": { "title": "E boogie shuffle — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆うか、Bルートへ移してもっと重いブギーでも転がします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の**ブギー往復**を開放EでBPM 60に転がして手をほぐします。上り下りがつながるか確認して始めます。

**10〜20分 · 頭のトレーニング**
**Eブギー・シャッフル・グルーヴ**をとてもゆっくり、上行・下行の手の形を辿り直します。<mark>ロング-ショートを乗せても階段が揺れないか</mark>確認します。

**20〜40分 · 実践（今週の完成物）**
ピン固定の**Eブギー・シャッフル・グルーヴ**を**BPM 80**で反復します。跳ねるロング-ショートが揺れないのが目標 — 跳ねが先です。4弦で覚えたあと5弦でも同じグルーヴを確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**ブギーがBPM 80で跳ねるか**聴いてみます。今週到達したBPMも記録します。

**今日の完了基準：** Eブギー・シャッフル・グルーヴ（R-5-6-b7の往復）をBPM 80でロング-ショートで跳ねるように、4弦・5弦のどちらでも転がせる。（2週目完成！）

## ④ ヒント・よくあるミス

- **ロング-ショートがのっぺりする。** 音が四つに増えるとシャッフル・フィールを失いやすいです。各音の前をしっかり長く守ります。
- **80で硬くなる。** 速度を上げると跳ねが消えがちです。70で跳ねる感覚を保ったままゆっくり上げます。
- **往復の継ぎ目が切れる。** 頂上のb7で方向転換が遅れます。転換を先に準備して滑らかに越えます。
- **低音Bの油断（5弦）。** グルーヴが忙しくなってもBは親指で覆っておきます。
