---
title: "位置こそがグルーヴ — 同じパターン、違う感じ"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — アクセントを1コマずらせば別の曲になる

## ① 理論・説明

昨日は「拍のアンド」にアクセントを入れました。今日の発見はゾクゾクします。**そのアクセントを1コマずらすだけで、グルーヴがまるっきり変わるんです。**

残りの15音は同じように弱く流れているのに、アクセント1つを「e」（2つ目）に移すと前へ急いで引っ張る感じ、「a」（4つ目）に移すと後ろへ少し引きずるゆったりした感じになります。同じ素材、アクセント1か所の違いで、まったく別の表情が出るんです。実は、私たちの知るファンクの名曲の個性も、よく見るとこのアクセント位置の違いから来ていることが多いのです。

だから今日は「何を弾くか」ではなく「**どこにアクセントを刺すか**」でグルーヴの色を変える実験をします。eにも入れ、aにも入れ、2つを混ぜても。その違いを耳で感じるのが今日の核心です。

1コマを正確に押さえるのはぎこちないかもしれません。特に「e」「a」のように拍から少し外れた場所は外しやすい。でも大丈夫、ゆっくり口で数えながらその場所だけに力を乗せればいい。この感覚が身につくと、やがて好きな曲を聴いて「あ、ここはaにアクセントがある」と気づく耳まで育ちます。だから今日1つを正確に押さえられなくても大丈夫。位置を変えながら「あ、感じが変わった」を楽しむだけで、あなたのリズムの語彙はもう広がっています。

## ② ビジュアル資料

同じスタブの場所、アクセント位置だけが違います。緑の場所がアクセント — 昨日は「&」、今日は「e」と「a」です。

**例1 — 「e」にアクセント（1小節）。** 各拍の2つ目（e）にアクセント。拍のすぐ後なので、前へ引っ張る急いだ感じ。

```json
{
  "id": "m1.w3.d2.accent_e",
  "type": "tab",
  "meta": { "title": "Accent on the 'e' (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68。** 「チッ・パッ・チッ・チッ」。昨日の「&」バージョンと交互に弾いて感じの違いを比較。

**例2 — 「a」にアクセント（2小節）。** 各拍の4つ目（a）にアクセント。拍の終わりなので、次の拍へ引きずるゆったりした感じ。

```json
{
  "id": "m1.w3.d2.accent_a",
  "type": "tab",
  "meta": { "title": "Accent on the 'a' (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" }
    ]}
  ]}
}
```

▶ **BPM 68。** 「チッ・チッ・チッ・パッ」。eバージョンと比べるとまったく別のグルーヴだと分かります。4回繰り返し。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。昨日の「&」アクセントを復習してから、アクセントを「e」「a」に移してウォームアップ。

**10〜20分 · 頭のトレーニング（今日のターゲット＝アクセント位置の移動）**
口で「チッ・パッ・チッ・チッ」（e）、「チッ・チッ・チッ・パッ」（a）を交互に数えます。アクセントがどの粒に来るか正確に押さえます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 68）**
**例1**（「e」アクセント）をBPM 68で4回 → **例2**（「a」アクセント）へ。2つのバージョンを交互に弾いて違いを体感。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：アクセントは正確にe/aに来るか／2つのバージョンは違ってグルーヴするか／残りは弱いか。

**今日の完了基準：** 同じパターンでアクセントをe・aに移し、位置によってグルーヴの感じが変わるのを作り、聞き分けられる。

## ④ ヒント / よくあるミス

- **アクセントが拍にくっつく。** e・aは拍から少し外れた場所。拍にくっつけると昨日と同じになります。
- **2つのバージョンが同じに聞こえる。** アクセントが弱いと位置の違いが隠れます。アクセントをはっきりと。
- **アクセントの場所を外す。** e・aは外しやすい。口で数えてそこだけに力を。
- **速さから。** 位置が正確でないと比較になりません。ゆっくり、場所をはっきり。
