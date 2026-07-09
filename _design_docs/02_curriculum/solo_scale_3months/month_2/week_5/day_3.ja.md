---
title: "6度（F）を追加 — Fを経由して5度（E）と3度（C）へ解決する"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
lang: ja
---

# Day 3 — 最後の橋『F』、半音下へ流していく

## ① 理論・説明

今日なぜこれをやるかというと、昨日AとCの間にBという橋を架けましたよね。今日は最後の橋をもう一本架けると、Aナチュラルマイナーが完成します。それが**F（6度）**です。Fはペンタトニックの5度（E）と♭7（G）の間、正確には**Eのすぐ半音上**にある音です。そしてこの「半音上」というのが今日の核心です。

半音の違いはギターの中でいちばん**強力な磁石**のような関係です。Fはすぐ下のEに引っ張られたくてたまらない音なんですね。だからFのいちばん自然な解決は**F → E（6度→5度）**、半音を滑るように下りることです。これがどれだけ叙情的に聞こえるか、今日実際に感じてみましょう。Bが上（Cへ）向かう橋だったのに対して、Fは下（Eへ）向かう橋というわけです。方向が逆なので、両方一緒に使うとソロに上下する呼吸が生まれます。

もちろんFも昨日のBと同じく**経過音**です。Amのコードトーン（A・C・E）ではないので、居座ってはいけません。解決先は2つ。いちばん強いのは**F → E（5度）**、少し遠回りすると**F → E → D → C（♭3）**と流れて、最終的に私たちのホームベースCに到着する道です。今日のFの座標は第1ボックス基準で**5弦8フレット**と**2弦6フレット**、2か所。それぞれすぐ下のE（5弦7フレット、2弦5フレット）へ半音滑り込む絵を目に焼き付けてください。

```json
{
  "id": "m2.w5.d3.pentatonic_add_6th",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 6th (F) resolving to 5th (E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 8, "finger": 4, "label": "6", "role": "passing", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "finger": 2, "label": "6", "role": "passing", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

## ② 視覚資料

ペンタトニックに昨日のB（緑）に加えて、今日の**F（6度、緑ハイライト）**が2か所加わりました——5弦8フレット、2弦6フレット。それぞれすぐ下のE（5度）へ半音流れ落ちる橋です。

```json
{
  "id": "m2.w5.d3.pentatonic_add_6th",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 6th (F) resolving to 5th (E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 8, "finger": 4, "label": "6", "role": "passing", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 6, "finger": 2, "label": "6", "role": "passing", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

今日のドリルです。1小節目は**F → E（5度）**の半音解決を繰り返し、2小節目は**F → E → D → C（♭3）**と流れてホームベースCに着地します。

```json
{
  "id": "m2.w5.d3.f_passing_resolve",
  "type": "tab",
  "meta": {
    "title": "6th(F) passing tone resolving to 5th(E) and to b3(C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 85）**
メトロノーム85に合わせて、まずここまでの手をほぐします——3度インターバルシーケンス3分、A-B-C 4連音2分。次の5分は今日の**F → E**半音解決（1小節目）をゆっくりと。FからEに下りるとき、指が「滑るように」つながるように。団子になったらBPM 75に落としましょう。

```json
{
  "id": "m2.w5.d3.f_passing_resolve",
  "type": "tab",
  "meta": {
    "title": "6th(F) passing tone resolving to 5th(E) and to b3(C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 8, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "6", "highlight": true, "role": "passing" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10〜20分・頭のトレーニング（今日のターゲット＝Fの2か所）**
メトロノームを止めて、第1ボックスの中で**Fだけ**を探して押さえます。5弦8フレット、2弦6フレット、2か所だけ。押さえるたびに「半音下のEに引っ張られる」と声に出しながら、**すぐ下のEへ滑り込む**動作までつなげます。目を閉じて2つのFを押さえ、それぞれEで解決できたら合格です。

**20〜40分・実戦即興（Amワンコードバッキング／80〜85 BPM）**
「Am backing track」を流して、今日のミッション：**Fを使うたびに必ずEかCで解決すること。**Fで終えるのは禁止です。昨日のB（上へ向かう橋）と今日のF（下へ向かう橋）を一つのフレーズの中で一緒に使ってみましょう——例えば「A-B-C…F-E」のように、上って下りる呼吸を作ると、もうそれだけでソロっぽく聞こえます。

**40〜50分・録音・フィードバック（推奨）**
手元の録音アプリでジャムを30秒録音します。聴き直して、チェックするのは一つだけ：**F → Eの半音が「粘っこく」つながって聞こえるか、それともプツッと切れて聞こえるか。**切れているなら、指を離すタイミングが早すぎます。Eが鳴り始めるまでFをほんの少し長く押さえてから離しましょう。必要なら再生速度を落として、その半音の瞬間を耳で拡大して確認してください。

**今日の完了基準：**Fの2か所を目を閉じて押さえられる、F → E半音解決をなめらかに5回以上できる、ジャムですべてのFをEかCで解決できる。

## ④ ヒント・よくある間違い

- **Fに居座ってしまう。**Bと同じです。FはAmのコードトーンではないので、長く留まると浮いてしまいます。Fは下のEに引っ張られる磁石だと覚えて、必ず流してあげましょう。
- **F → Eをプツッと切って弾いてしまう。**半音関係の魅力は「粘っこさ」です。Eが鳴る直前までFを少し押さえておくと、その粘る味わいが生きてきます。早く指を離しすぎると、ただの別々な2つの音になってしまいます。
- **指の配置。**5弦ではF（8フレット）は4の指（小指）、E（7フレット）は3の指。2弦ではF（6フレット）は2の指、E（5フレット）は1の指。この配置を守ると半音の滑りが滑らかになります。
- **BとFを混同して方向を間違える。**Bは上（C）へ、Fは下（E）へ解決します。方向が逆です。混乱したら「ビー（B）はビヨーンと上、エフ（F）はフォール（fall、下）」くらいに覚えておきましょう。
