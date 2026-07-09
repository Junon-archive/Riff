---
title: "Am ↔ C コードトーン連結 — 3度同士を最小移動でつなぐ"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
lang: ja
---

# Day 3 — コードが変わる瞬間、3度から3度へほんの少しだけ動く

## ① 理論・説明

今日なぜこれをやるかというと、昨日まではAmの地図、Cの地図を**別々に**描いてきましたよね。でも実際の曲では、コードは絶えず変わっていきます。Amを弾いてCに移り、またAmに戻る。その**変わる瞬間**をどう乗り越えるかが、即興の本当の実力なんです。初心者はコードが変わっても手がそのままなので音がズレてしまい、うまい人はコードが変わるその瞬間に**<mark>新しいコードの3度へすっと乗り換えて</mark>**います。

核心はこれです。Amの3度は**C**、Cの3度は**E**。だからAm→Cに移るとき、私たちが狙う移動はたった一つ、**<mark>C → E</mark>**です。これを<mark>「ガイドトーン（guide tone）」</mark>と呼びます。コード進行を導く糸のようなものですね。来週（W8）のii-V-Iガイドトーンラインの予告編でもあります。

```json
{
  "id": "m2.w7.d3.am_c_guide_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am 3rd (C) <-> C 3rd (E) guide-tone landing map across the neck",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "E", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "E", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "C", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "C", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "E", "role": "target", "highlight": true }
    ]
  }
}
```

そして魔法のような部分。指板上では、この**C → E移動があきれるほど近い**んです。代表例が**<mark>3弦5フレット（C） → 2弦5フレット（E）。</mark>**同じフレットで隣の弦に指を一本移すだけで終わりです。コードが変わったのに、手はほとんど動かない。この「最小移動」の快感を、今日体に刻み込みます。

もう一度言いますね。これは速弾きではありません。コードが変わる瞬間に**<mark>正確に3度に着地する</mark>**タイミング訓練なので、むしろもっとゆっくり進めます。着地がズレていたら、どんなに速くても意味がありません。

## ② 視覚資料

Amの3度（**C**）とCの3度（**E**）をネック全域にまとめて打った「ガイドトーン地図」です。どちらも着地ターゲット（緑）で、Aは方向をつかむ基準点（根音）です。<mark>近くにあるC-Eのペア</mark>を目で組み合わせてみてください。

```json
{
  "id": "m2.w7.d3.am_c_guide_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am 3rd (C) <-> C 3rd (E) guide-tone landing map across the neck",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 5, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "E", "role": "target", "highlight": true },
      { "string": 4, "fret": 7, "label": "Am:R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "E", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "C", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "label": "E", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "C", "role": "target", "highlight": true },
      { "string": 1, "fret": 12, "label": "E", "role": "target", "highlight": true }
    ]
  }
}
```

ここからが実際の連結です。1小節目はAm（3度Cに着地）→2小節目はC（隣の弦へ少しだけ、3度Eに着地）。1小節目の終わりの音**3弦5フレットC**から2小節目の最初の音**2弦5フレットE**へ移るのが、<mark>今日の核心の手の動き</mark>です。

```json
{
  "id": "m2.w7.d3.am_to_c_connection",
  "type": "tab",
  "meta": {
    "title": "Am -> C connection: land 3rd C, minimal move to 3rd E",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 68）**
メトロノーム68で、上の連結フレーズを8分音符で繰り返します。集中するのはただ一点だけ：1小節目→2小節目に移る**<mark>3弦5フレットC → 2弦5フレットE。</mark>**同じフレット、隣の弦。指一本をすっと移すだけです。この移動が音切れなく滑らかになるまで繰り返します。

```json
{
  "id": "m2.w7.d3.am_to_c_connection",
  "type": "tab",
  "meta": {
    "title": "Am -> C connection: land 3rd C, minimal move to 3rd E",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor / C major",
    "tempoBpm": 68
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Am:5(E)", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "Am:R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "Am:b3(C)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 5, "duration": "quarter", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C:R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "C:5(G)", "role": "chord_tone" },
        { "string": 2, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "C:3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10〜20分・頭のトレーニング（C→E最小移動を探す）**
メトロノームを止めて、地図から近い**<mark>C-Eペア</mark>**を3か所見つけてペアにします。例：（3弦5・2弦5）、（5弦3・5弦7）、（2弦1・2弦5）、（1弦8・1弦12）。各ペアを「Amならc、コードが変わったらE」と唱えながら行き来します。目を閉じても一つのペアを3秒以内に行き来できれば合格です。

**20〜40分・実戦感覚 — Am–C 2コードバッキング（BPM 68〜72）**
「Am C backing track」または「Am to C vamp」（1小節ごとに交互に切り替わるもの）を流します。ルール：**<mark>Amのときは Cに着地、Cのときは Eに着地。</mark>**コードが変わる瞬間にぴったり合わせて3度に乗り換える、それだけです。派手なフレーズは要りません。コード一つに音は2〜3個、最後はそのコードの3度で。

**40〜50分・録音・フィードバック（推奨）**
手元の録音ツールでジャムを30〜60秒録音します。チェック：**<mark>コードが変わる地点で、ちゃんとタイミングよく3度に座れていたか？</mark>**乗り換えが遅れると、前のコードの音が新しいコードの上にはみ出して「ズレて」聴こえます。再生速度を落として、その地点だけ繰り返し確認しましょう。乗り換えのタイミングを半拍前倒しする練習を、明日へのメモにしておきます。

**今日の完了目安：**Am–Cバッキングでコードが変わるたびに3度（C↔E）にズレなく着地でき、最小移動のC-Eペア3か所を目を閉じて行き来できること。

## ④ ヒント・よくある間違い

- **乗り換えが遅刻する。**コードはすでにCに変わっているのに、手がまだAmの音に残っているとズレてしまいます。コードが変わる**半拍前**にあらかじめ3度へ手を移す予測感覚を育てましょう。
- **遠くの3度ばかり探してしまう。**C→Eはほとんどの場合すぐ近くにあります。ネックを大きく飛び越えず、「今の手の近くにあるE」をまず狙いましょう。それが最小移動の核心です。
- **根音への逃げ。**不安だからといって根音（A、C）ばかりに着地していると、ガイドトーンの感覚は育ちません。今日はあえて3度だけに座ってみましょう。
- **スピードへ逃げてしまう。**乗り換えがぎこちなくて速く通り過ぎてしまうと、耳がズレを捉えられません。遅ければ遅いほど着地の正確さが見えます。68を固定で。
