---
title: "Week 0 · Day 3 — Amペンタ第1ボックスのリフレッシュ → 3度インターバルの初体験"
dayKey: m1.w0.d3
estMinutes: 50
i18nKey: lesson.m1.w0.d3
lang: ja
---

# Day 3 — Amペンタトニック第1ボックスの位置リフレッシュ＋3度インターバルの味見

## ① 理論・説明

今日なぜこれをやるかというと、これから3か月ずっと住み続ける**本拠地**を、今日整え直したいからです。それが**Aマイナーペンタトニック第1ボックス（5フレット）。**すでに知っている形かもしれませんが、今日は「手が覚えている上下行」を超えて、その中の**それぞれの音がどんな役割を持っているか**まで目に焼き付けていきます。

```json
{
  "id": "m1.w0.d3.am_pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 refresh (with roles)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "isRoot": true, "label": "R", "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

### 上下行は「予熱」であって、目標ではない

実はここがポイントで、ペンタボックスを下から上へ、上から下へ往復する練習は、即興の実力にはあまり役立ちません。なぜなら**音楽には「6弦から順番に上がっていく」なんてルールがない**からです。上下行ばかり延々とやると、手は「とにかく隣の音へ」という慣性だけを覚えてしまいます。だから即興のときも、それしか出てこなくなるんです。

だからWeek 0では、あくまで**手をほぐすためだけに短く**許可して、今日さっそく最初の出口を開けます。それが**3度インターバル（音程）シーケンス**です。

### 3度インターバル＝一つ飛ばし

ペンタトニックを「順番に」ではなく、**「一音飛ばしながら」**弾くということです。Amペンタの音は低いほうから**A – C – D – E – G – A…**と続きますが、3度で弾くというのは：

- Aから次の音ではなく、**一つ飛ばして → D**
- Cから一つ飛ばして → **E**
- Dから一つ飛ばして → **G**
- Eから一つ飛ばして → **A**

こんなふうに**「ペアを組んで飛び越える」**弾き方です。（補足：ペンタトニックでこうやって一音飛ばすと、実際の音程は短3度・長3度・4度が混ざって出てきます。なので、あくまで「3度シーケンス」と便宜的に呼んでいるだけです——音程の計算に頭を悩ませず、「一つ飛ばし」として理解すれば大丈夫です。）

```json
{
  "id": "m1.w0.d3.third_interval_taste",
  "type": "tab",
  "meta": {
    "title": "3rd-interval taste in Am pentatonic (skip-one pairs, ascending)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "finger": 3, "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "finger": 1, "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "isRoot": true, "label": "R", "role": "root" }
      ]}
    ]
  }
}
```

このちょっとした違いがなぜ重要かというと、飛ばした瞬間、音が急に**「メロディらしく」**聞こえ始めるからです。順次進行（上下行）が階段だとすると、3度はちょっとしたジャンプ。だから耳が「あ、何か歌っている」と反応するんです。これが即興の最初の材料になります。

## ② 視覚資料

**(a) Aマイナーペンタトニック第1ボックス — 役割つき**

```json
{
  "id": "m1.w0.d3.am_pentatonic_box1",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 refresh (with roles)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "isRoot": true, "label": "R", "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "isRoot": true, "label": "R", "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

**(b) 3度インターバルの味見 — 低い弦からペアで飛び越える（上行）**

```json
{
  "id": "m1.w0.d3.third_interval_taste",
  "type": "tab",
  "meta": {
    "title": "3rd-interval taste in Am pentatonic (skip-one pairs, ascending)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "finger": 1, "isRoot": true, "label": "R", "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "finger": 4, "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "finger": 1, "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "finger": 3, "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 5, "duration": "eighth", "finger": 1, "label": "b7", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "eighth", "finger": 3, "isRoot": true, "label": "R", "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "finger": 3, "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "finger": 1, "label": "b3", "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "eighth", "finger": 1, "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "quarter", "finger": 1, "isRoot": true, "label": "R", "role": "root" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 60〜72）**
- Day 2のスパイダーウォーク1-2-3-4を1セット、手を起こします。昨日到達したBPMからスタート。
- 完了の目安：かすれなく2往復。

**10〜20分・頭のトレーニング（BPM 70）— ボックスのリフレッシュ＋役割確認**
- 上の(a)のボックスを上行–下行、**たった4往復だけ**（予熱なので短く！）。オルタネイトピッキングを維持。
- そのあと大事なこと：指板の**R（A）3か所**、**♭3（C）3か所**の位置だけをコツコツ押さえながら「ルート、3度、ルート、3度」と声に出してみましょう。
- 完了の目安：見なくてもR3か所・♭3 3か所を手がすぐに見つけられる。

**20〜40分・実戦感覚（BPM 70、Amバッキング）— 3度シーケンス→即興へ接続**
- まず上の(b) 3度インターバルのタブをBPM 70で、一音ずつしっかりと。最初は途切れてもOK、飛び越える音に耳を開いていきましょう。
- 慣れてきたらバッキングを流して、**「上下行半分、3度半分」**を混ぜて即興。ルール：フレーズの終わりはできるだけ**♭3（C）かR（A）で止める。**
- 完了の目安：3度の跳躍が一度でも「メロディらしく」聞こえた瞬間があれば成功です。

**40〜50分・録音・フィードバック（推奨）**
- 3度を混ぜた即興を40秒録音。チェックポイント：**「上下行だけのときより、歌っぽく聞こえる区間ができたか？」**
- 良かった2秒間があれば、それが今日の収穫です。その感覚を覚えておいてください。

## ④ ヒント・よくある間違い

- **また上下行に逆戻りしないでください。**手が楽だからといって上行–下行ばかり繰り返してしまうと、今日の目的をまるごと逃してしまいます。無理にでも「飛び越え」を混ぜましょう。
- **3度を飛ぶときピッキングが絡まる**→弦を跨ぐ場面が多いからです。最初はBPM 55まで落として、**弦移動の箇所だけ**を切り出して繰り返し練習してみてください。
- **♭3（C）の魅力を聞き流さないでください。**Amの中でCは、ただのスケール音ではなく**コードの3度（ガイドトーン）**です。ここで止まったときの安定感を体で覚えておくと、Month 1の3度着地トレーニングがぐっと楽になります。
- **一度にたくさんやりすぎ？**今日は「ボックス復習＋飛び越えの味見」の二つだけです。完璧にできなくても大丈夫。味見をすれば十分です。
