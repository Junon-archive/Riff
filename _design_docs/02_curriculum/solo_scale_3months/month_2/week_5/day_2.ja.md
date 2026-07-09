---
title: "2度（B）を追加 — Bを経由して3度（C）に着地する4連音"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
lang: ja
---

# Day 2 — ペンタに「B」という橋を一本架ける

## ① 理論・説明

今日なぜこれをやるかというと、昨日まで使ってきたペンタトニックには、AとCの間に**ぽっかり穴**が空いていたんです。根音A（6弦5フレット）から次の音C（6弦8フレット）に行くには、3フレットも一気に飛ばなきゃいけませんでした。この隙間がペンタトニック特有の爽快な味を出してくれる一方で、毎回大きく飛んでばかりだとソロが少し**<mark>カクカクした階段っぽい</mark>**響きになってしまいます。そこで今日は、その隙間に橋を一本架けます。AとCの間にある**<mark>B（2度）</mark>**です。

ここで大事な原則が一つ。Bは**<mark>主役ではなく橋（経過音）</mark>**です。Bに居座ると、Amの上でふわっと浮いた音に聞こえてしまいます——Bはamのコードトーン（A・C・E）ではないからです。だからBは必ず**<mark>通過する音</mark>**としてだけ使います。Aから出発してBをそっと踏み → すぐさまC（♭3、コードトーンの3度）に着地。この「A-B-C」の流れが今日のすべてです。Bは、Cに連れて行った瞬間にその役目を終えるんですね。昨日Cをホームベースとして刻み込んだ理由は、まさにこれのためでした。

練習方法は**<mark>4連音（16分音符4つのまとまり）</mark>**です。3度インターバルが「飛ばす」練習だったなら、4連音は「隙間を密に埋める」練習。Bが新しく入ってA-B-Cがつながったので、細かい16分で転がしても音が団子にならずに流れていきます。今日からBの指板上の座標をしっかり覚えておきましょう——第1ボックス基準で**6弦7フレット**と**1弦7フレット**、たった2か所です。それぞれのBが、すぐ隣（1フレット上）のCへ滑り込んでいく絵を目に焼き付けてください。

```json
{
  "id": "m2.w5.d2.pentatonic_add_2nd",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 2nd (B) as passing tone to b3 (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 80
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
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

## ② 視覚資料

ペンタトニック第1ボックスに**<mark>B（2度、緑ハイライト）</mark>**が2か所新しく加わりました——6弦7フレット、1弦7フレット。それぞれすぐ上のC（♭3、緑）へ流れ込む橋です。

```json
{
  "id": "m2.w5.d2.pentatonic_add_2nd",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic + added 2nd (B) as passing tone to b3 (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A natural minor (partial)",
    "tempoBpm": 80
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
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "2", "role": "passing", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

今日の4連音ドリルです。**A-B-C**を繰り返し転がして、<mark>Bを踏んでCに到着する感覚</mark>を作り、最後はCに長く着地します。

```json
{
  "id": "m2.w5.d2.b_passing_to_third_4note",
  "type": "tab",
  "meta": {
    "title": "4-note sequence: 2nd(B) passing tone resolving to Am 3rd (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 80）**
メトロノーム80に合わせて、まず**<mark>昨日の3度インターバルシーケンス</mark>**で手をほぐします。5分。次の5分は今日のA-B-C 4連音ドリルをゆっくりと。1拍に16分音符4つ（「タダダダ」）がクリック一つにぴったり収まるように。団子になったらBPM 70に落としましょう。

```json
{
  "id": "m2.w5.d2.b_passing_to_third_4note",
  "type": "tab",
  "meta": {
    "title": "4-note sequence: 2nd(B) passing tone resolving to Am 3rd (C)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "2", "highlight": true, "role": "passing" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "quarter", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**10〜20分・頭のトレーニング（今日のターゲット＝Bの2か所）**
メトロノームを止めて、第1ボックスの中で**<mark>Bだけ</mark>**を探して押さえます。6弦7フレット、1弦7フレット、2か所だけ。押さえるたびに「これは橋、留まれない」と声に出しながら、**<mark>すぐ1フレット上のCへ滑り込む</mark>**動作までつなげます。目を閉じて2つのBを押さえ、それぞれCで解決できたら合格です。

**20〜40分・実戦即興（Amワンコードバッキング／75〜80 BPM）**
「Am backing track」を流して、ルールは一つだけ：**<mark>Bを使うたびに必ずCで解決すること</mark>。**Bでフレーズを終えるのは禁止です。A-B-Cを種のモチーフにして、位置を変えながらバリエーションを作ってみましょう。昨日習った3度ペアの合間にA-B-Cをそっと挟み込むのもおすすめです。

**40〜50分・録音・フィードバック（推奨）**
手元の録音アプリでジャムを30秒録音します。聴き直して、チェックするのは一つだけ：**<mark>Bがふわっと浮いたまま終わった瞬間はなかったか</mark>。**Bで終わって「あれ、解決してないな」と思う箇所があれば印をつけて、次はそこをCで締めくくりましょう。必要なら再生速度を落として、B→Cのタイミングを耳で拡大して確認してください。

**今日の完了基準：**Bの2か所を目を閉じて押さえられる、A-B-C 4連音ドリルをBPM 80で途切れずにできる、ジャムですべてのBをCで解決できる。

## ④ ヒント・よくある間違い

- **Bに居座ってしまう。**今日いちばんの間違いです。BはAmのコードトーンではないので、長く留まる瞬間「間違った音」のようにふわっと浮きます。必ずさっと通り過ぎてCへ。緊張は短く、解決ははっきりと。
- **Bを根音と勘違いする。**Bは根音Aのすぐ上にある音なので、耳で根音Aと混同しやすいです。根音はあくまでA（6弦5フレット、4弦7フレット、1弦5フレット）。Bは単にAとCをつなぐ橋であって、決してホームベースではありません。
- **指の配置が崩れる。**6弦では5-7-8フレットをそれぞれ1-3-4の指で。7フレットを2の指で押さえると8フレットのCが遠くなり、A-B-Cがぶつ切りになってしまいます。1-3-4を守れば3音が滑らかに流れます。
- **16分音符が団子になる。**A-B-Cがつながっているのでつい速く転がしたくなりますが、団子になると橋ではなく滑り台になってしまいます。粒が生きた状態を保ち、必要なら70に落としてはっきりと。
