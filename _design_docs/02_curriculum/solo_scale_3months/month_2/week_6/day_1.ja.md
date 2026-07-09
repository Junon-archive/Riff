---
title: "平行調 — 同じ形のまま、中心音だけAからCへ引っ越し（二重コード表記）"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
lang: ja
---

# Day 1 — 手はそのまま、心だけAからCへ引っ越し

## ① 理論・説明

今日なぜこれをやるかというと、みなさんの手はもう答えを知っていて、頭だけがまだ追いついていないからなんです。先週はAナチュラルマイナーをたっぷり練習しましたよね。あの指板の形、あの運指、実は指一本も動かさずに今日からCメジャーとしても使えるんです。なぜなら、AマイナーとCメジャーは<mark>同じ7つの音（A B C D E F G）</mark>を共有する「平行調（relative key）」だから。音は完全に同じで、違うのはたった一つ、<mark>どの音を「家（中心音）」として感じるかだけ</mark>なんです。

たとえるなら、同じマンションの中で、A棟を自分の家だと思えばAマイナー、C棟を自分の家だと思えばCメジャーです。建物（指板の形）は一つも変わらなくて、「どこに帰るか」だけが変わるんです。Amのときは<mark>暗い響きのb3、Cに帰り</mark>、Cメジャーのときは<mark>明るい3度、Eに帰ります</mark>。今日はこの二つの「家の住所」を指先に刻み込む日です。

だから今日からは、ラベルを<mark>二つの調性で同時に読んでいきます</mark>。たとえばC音は「Cメジャーでは R（家）、Aマイナーでは b3」。だからラベルを（Cの度数／Amの度数）という形で併記しています。同じ一つの点が、見る角度によってまったく違う役割になる——これを目で慣らしていきましょう。これができると、来週のコードトーン・ターゲティングがぐっと楽になります。

## ② 視覚資料

同じ指板（5フレットポジション）、一つの形です。ラベルは（Cメジャーの度数／Aマイナーの度数）で併記しています。<mark>二つの中心音</mark>が見えますね。C（明るく見ればR、暗く見ればb3）と、Cメジャーの明るい3度Eをハイライトしました。

```json
{
  "id": "m2.w6.d1.relative_dual_center_shape",
  "type": "scale_shape",
  "meta": {
    "title": "Same shape (A minor = C major) — dual-degree labels, centers C & E highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "scale": "C major (relative to A natural minor)",
    "tempoBpm": 76
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C (R/b3)", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "D (2/4)", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E (3/5)", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "F (4/b6)", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "G (5/b7)", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C (R/b3)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "D (2/4)", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "E (3/5)", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "F (4/b6)", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "G (5/b7)", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C (R/b3)", "role": "target", "highlight": true }
    ]
  }
}
```

そして「同じ形、違う着地」を耳で確認する短い例です。1小節目は同じ音で遊んでからAに帰り（Am中心）、2小節目は<mark>指を一つも変えずにCに帰ります（Cメジャー中心）</mark>。音の雰囲気がどう変わるか聴いてみてください。

```json
{
  "id": "m2.w6.d1.same_shape_two_centers",
  "type": "tab",
  "meta": {
    "title": "Same shape, two centers — resolve to A (Am) vs resolve to C (C major)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "center_shift_demo",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C (b3 in Am)", "role": "scale" },
        { "string": 1, "fret": 7, "duration": "eighth", "label": "B (2)", "role": "scale" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A (R)", "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E (5)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D (4)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C (b3)", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "A = R(Am)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 8, "duration": "eighth", "label": "C (R in C major)", "role": "root" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A (6)", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "G (5)", "role": "chord_tone" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "F (4)", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "E = 3(C)", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "D (2)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C = R(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 76）**
メトロノーム76に合わせて、上の指板の形全体を3度インターバルで一周します。単純な上行下行は禁止、必ず一つ飛ばしの3度で。先週身につけた手の形そのままです。今日はスピードを欲張らず、<mark>「この形はもう自分の手の中にある」</mark>ことを確認する時間です。

**10〜20分・頭のトレーニング（同じ指板で、中心音をA↔C切り替え）**
メトロノームを止めて、指板の形はそのままに、頭の中の中心だけを切り替えます。まず30秒間**<mark>Aを家だと思って</mark>**適当な音を触ってからA（6弦5フレット、4弦7フレット）に帰ります。次に30秒間**<mark>Cを家だと思って</mark>**同じように遊んでからC（6弦8フレット、3弦5フレット、1弦8フレット）に帰ります。触るたびに声に出して「これはA棟、これはC棟」と呼んでみましょう。手は何も変わらないのに音の雰囲気が変わるのを感じられたら合格です。

**20〜40分・実戦即興（Am↔C切り替えバッキング／BPM 70〜76）**
「Am to C backing track」や「relative major minor jam」で検索して一つ流します。ルールは、コードがAmなら**C（b3）**に、Cなら<mark>**E（明るい3度）**に着地すること</mark>。手の形は絶対に変えません。変えるのは「どこで止まるか」だけ。この二つの着地音の間を行き来する感覚こそが、今日のすべてです。

**40〜50分・録音・フィードバック（推奨）**
どんな録音アプリ（スマホのボイスメモでもOK）で、最後のジャムを30秒だけ録音します。聴き直して、チェックするのは一つだけ。**<mark>C区間で本当にEに着地したとき「明るい」感じがするか</mark>**、Am区間のC着地と色合いが違うか。よく分からなければ再生速度を少し落として、着地の瞬間だけ繰り返し聴いてみましょう。

**今日の完了基準:** 同じ指板の形のまま、目を閉じてA中心／C中心を切り替えながら、着地音（C・E・A）を正確に押さえられること。バッキングの上でコードに合わせて着地音を8小節切り替える。

## ④ ヒント・よくある間違い

- **形を変えようとしてしまう。**「Cメジャーだから違うフォームを探さなきゃ」と思った瞬間、今日のレッスンは台無しです。大事なのは**何も変えないこと**。手はそのまま、耳と着地点だけが引っ越すんだ、と自分に言い聞かせ続けましょう。
- **AとCを同時に家だと感じようとする。**それだと音がふわふわしてしまいます。一度に家は一つだけ。Am区間ではA/Cだけ、C区間ではC/Eだけにきっちり絞りましょう。
- **明るい3度Eを雑に流してしまう。**CメジャーのアイデンティティはまさにこのEです。b6であるF（2弦6フレット）のすぐ隣にあるので混同しやすいのですが、Fに着地すると音がふわっと浮いてしまいます。EとFを指先ではっきり区別しましょう。
- **度数の併記を目だけで読んでしまう。**押さえるたびに口に出して「CはAマイナーのb3、Cメジャーのルート」と両方の名前を呼びましょう。口が覚えてこそ、即興でパッと出てくるようになります。
