---
title: "ターンアラウンド — 最後の4小節で戻す"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — ターンアラウンド、最後の4小節で戻す

## ① 理論・解説

今週が**M1の最終週**です。1か月前はシャッフルのロング-ショートさえ馴染みなかったのに、今日は12小節を自分で締める位置に立ちました。最後のカギは**ターンアラウンド** — <mark>12小節の最後の4小節が、曲をもう一度頭へ戻す結び目</mark>です。この結び目さえ手に入れば、終わる代わりに一周が次の一周へ自然に繋がります。

ターンアラウンドの順番は**V(B7)-IV(A7)-I(E7)-V(B7)**です。9小節目の**B7**から始め、10小節A7、11小節E7へ下りて、12小節でまたB7へ上がります。<mark>最後をB7で開けておくと、耳が「まだ終わってない、頭へ戻れ」と感じます。</mark>この余韻が、曲をもう一周させる力です。

手がやることはもう全部習いました。**ブギー・フォーム**をB・A・E・Bの位置へ移すだけです。B7はルートが**3弦2フレット**、A7は3弦開放、E7は4弦開放 — <mark>三つの位置はどれも先週すでに手が覚えた階段</mark>です。新しく覚えるのは順番一つだけです。

速度は忘れます。今日は最後の4小節をとてもゆっくり、止まっても<mark>順番を体に刻むのが全て</mark>です。BからAへ、AからEへ、またEからBへ — 継ぎ目ごとに少し休んでも大丈夫です。**5弦**なら運指は同じで、低音Bだけ寝かせます。この4小節が、12小節を一つに束ねる最後の結び目です。

## ② ビジュアル資料

今日は二つです。まず**B7ブギーの手の形**を指板で確認し、次に最後の4小節を繋ぐ**ターンアラウンド・シャッフル**を通過します。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

まず**B7ブギーの手の形**です。下の青がルート**B**（3弦2フレット）、その上の青二つが5度・6度、無色が**b7**です。<mark>E・Aブギーと同じ階段がBの位置へ移ってきました。</mark>

```json
{
  "id": "m1.w4.d1.b7_boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 boogie shape R-5-6-b7 (B7) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4弦。** ルート**B**（3弦2フレット）→ **5度**（2弦4フレット）→ **6度**（6フレット）→ **b7**（7フレット）です。E・Aブギーと同じ階段がBの位置へ移ってきました。

```json
{
  "id": "m1.w4.d1.b7_boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "B7 boogie shape R-5-6-b7 (B7) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 4, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 6, "label": "6", "role": "chord_tone" },
    { "string": 2, "fret": 7, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音**B**は親指で寝かせて、B7ルートに集中します。

今度は最後の4小節を繋ぐ**ターンアラウンド・シャッフル**です。B7-A7-E7-B7の順番でブギー・フォームを移しながら<mark>曲をもう一度頭へ戻します。</mark>

```json
{
  "id": "m1.w4.d1.turnaround_4",
  "type": "tab",
  "meta": { "title": "Turnaround B7-A7-E7-B7 — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70、シャッフル。** 9小節B7（3弦2フレット）-10小節A7（3弦開放）-11小節E7（4弦開放）-12小節B7。同じブギー・フォームがコードごとに位置を移します。

```json
{
  "id": "m1.w4.d1.turnaround_5",
  "type": "tab",
  "meta": { "title": "Turnaround B7-A7-E7-B7 — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 2, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 2, "fret": 7, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆って漏れないようにします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
今週使う**三つのブギー**をE・A・Bの順でBPM 60に転がして手をほぐします。三つの位置が全部出るか確認します。

**10〜20分 · 頭のトレーニング**
**ターンアラウンドの順番（B7-A7-E7-B7）**をとてもゆっくり押さえます。<mark>ルートがBからAへ、さらにEへ移る継ぎ目</mark>がなめらかか確認します。

**20〜40分 · 実践**
今日の完成物**ターンアラウンド**を**BPM 70**で反復します。4小節が止まらず繋がるのが目標です。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**4小節が途切れないか**聴いてみます。今日到達したBPMも記録します。

**今日の完了基準：** ターンアラウンド（V-IV-I-V）をB7-A7-E7-B7の順で、BPM 70で4弦・5弦のどちらでも止まらず通過できる。

## ④ ヒント・よくあるミス

- **順番が混ざる。** B7-A7-E7-B7は混乱しやすいです。「高-低-もっと低-また高」と、音の上下を体に刻みます。
- **B7ルートを外す。** 3弦2フレットを開放で押さえ間違えやすいです。Bは押さえて出る音です。
- **継ぎ目でロング-ショートがのっぺりする。** コードが変わる瞬間シャッフル・フィールを失いやすいです。継ぎ目でも前の音を長く守ります。
- **低音Bの油断（5弦）。** 位置を移すのに忙しくても、使わない低音弦は親指で覆っておきます。
