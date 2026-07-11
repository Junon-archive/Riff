---
title: "Aブギー — IV(A7)へ移動"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — IVへ移動、Aブギー

## ① 理論・解説

ブギーのフォームがいよいよ手に馴染みました。今週はそのフォームを**移動させながら**12小節を一周します。今日の第一歩は**IV(A7)**へ移ることです。<mark>手の形は一切変えず、位置だけまるごと移します。</mark>階段はそのまま、置かれる位置だけが変わります。先週覚えたR-5-6-b7の階段を、別のコードの上へそっくり乗せる練習だと考えると気持ちがずっと楽になります。

A7のルート**A**は**3弦開放**です。先週のEブギーが4弦開放から出発したなら、Aブギーは一弦上の3弦から出発します。残りの**5-6-b7**は2弦の2・4・5フレットに同じように乗ります。<mark>階段の形がまるごと一弦上へ上がったわけです。</mark>指の間隔も、押さえる順番も全部そのままなので、目を閉じても同じ形が決まります。変わったのは出発する弦ひとつだけです。

なぜよりによってA7でしょう。ブルースの12小節で**IV**はIの次によく登場する位置です。ルートだけを**A**に変えれば、先週覚えた**R-5-6-b7**の階段がそっくり通じます。<mark>新しく覚えるのは出発する位置ひとつだけです。</mark>フォームを覚え直すのではなく、移すだけでいいのです。こうして一つの手の形をあちこちへ移して使う感覚が、今週ずっと12小節を回る鍵になります。

速度は完全に忘れてください。今日はAブギーをロング-ショートではっきり転がすことがすべてです。<mark>EからAへ、二つの位置をとてもゆっくり行き来して手に道を覚えさせます。</mark>最初は二つのコードの間で少し止まっても大丈夫です。止まりが少しずつ短くなれば、それがなめらかなチェンジです。**5弦**なら運指は同じで、低音Bだけ親指で寝かせます。このAブギーが12小節一周の二段目の階段です。

## ② ビジュアル資料

今日は二つです。まず**Aブギーの手の形**を指板で確認し、次にそのフォームをロング-ショートで転がす**Aブギー・シャッフル**を覚えます。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まず**Aブギーの手の形**です。下の青がルート**A**（3弦開放）、その上の青二つが5度・6度、無色が**b7**です。<mark>Eブギーと同じ階段が一弦上へ上がりました。</mark>

```json
{
  "id": "m1.w3.d1.a_boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "A boogie shape R-5-6-b7 (A7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4弦。** ルート**A**（3弦開放）→ **5度E**（2弦2フレット）→ **6度F#**（4フレット）→ **b7 G**（5フレット）。Eブギーが一弦上へ移った位置です。

```json
{
  "id": "m1.w3.d1.a_boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "A boogie shape R-5-6-b7 (A7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 3, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音**B**は親指で寝かせ、Aルートに集中します。

今度はその手の形を転がす**Aブギー・シャッフル**です。1小節で上って2小節で下りながら、<mark>ロング-ショートで跳ねるように転がします。</mark>

```json
{
  "id": "m1.w3.d1.a_boogie_4",
  "type": "tab",
  "meta": { "title": "A boogie shuffle (A7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、シャッフル。** ルート**A**（3弦開放）から**5-6-b7**（2弦2・4・5フレット）の階段を上り下りします。Eブギーと手の形が同じですね。

```json
{
  "id": "m1.w3.d1.a_boogie_5",
  "type": "tab",
  "meta": { "title": "A boogie shuffle (A7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆って漏れないようにします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
先週の**Eブギー・シャッフル**を開放EでBPM 60に転がして手をほぐします。上り下りがつながるか確認して始めます。

**10〜20分 · 頭のトレーニング**
**Aブギーの手の形**をとてもゆっくり押さえます。ルート**A**（3弦開放）から5-6-b7へ上る道を、<mark>Eブギーと並べて</mark>比べながら覚えます。

**20〜40分 · 実践**
**Aブギー・シャッフル**を**BPM 70**で反復します。ロング-ショートが揺れないのが目標です。4弦で覚えたあと5弦でも同じグルーヴを確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**Aブギーが跳ねるか**聴いてみます。今日到達したBPMも記録します。

**今日の完了基準：** Aブギー・シャッフル（R-5-6-b7）をIV(A7)の位置でBPM 70にロング-ショートで、4弦・5弦のどちらでも転がせる。

## ④ ヒント・よくあるミス

- **位置を間違える。** Eブギーの癖で4弦から出発しがちです。Aは3弦開放から始まると手に刻みます。
- **b7がぼやける。** 2弦5フレットまで指が届かないことがあります。あらかじめ手を広げてb7をはっきり押さえます。
- **ロング-ショートがのっぺりする。** 位置が変わるとシャッフル・フィールを失いやすいです。各音の前をしっかり長く守ります。
- **低音Bの油断（5弦）。** 位置を移すのに忙しくてもBは親指で覆っておきます。
