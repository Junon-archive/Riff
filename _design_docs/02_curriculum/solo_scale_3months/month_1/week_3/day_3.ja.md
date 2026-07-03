---
title: "第1〜第5全体をつなぐネック全体の3度インターバルラン"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
lang: ja
---

# Day 3 — 5つの部屋を一つの廊下に：ネック全体を一本の糸で通す

## ① 理論・説明

今日なぜこれをやるかというと。今のあなたの頭の中の指板は、おそらくこんな感じのはずです。「第1の部屋、第2の部屋、第3の部屋、第4の部屋、第5の部屋。」5つの、それぞれバラバラに動く箱。各部屋の中ではうまく弾けるのに、部屋と部屋の間の敷居を越える瞬間につまずいてしまう。即興が5フレットに閉じ込められる理由がこれです。部屋を一つずつしか使っていないから。

今日、私たちはこの5つの部屋を一つの長い廊下に変えます。壁を壊す道具が、まさにネック全体を横断する3度インターバルランです。なぜよりによって3度なのかというと、この2週間ずっとお伝えしてきたように、単純な上下行（ラララララ）だと手が惰性で転がって、部屋の境界を感じ取れないんです。でも3度（1音飛ばし）で動くと、音がぴょんぴょん跳ねながら自然に手を隣の弦・隣の部屋へ押し出してくれます。3度インターバルは、壁を通り抜けるための鍵というわけです。

核となる技術はポジションシフト（スライド）です。一つの部屋の中で3度で数音遊んだあと、一本の弦の上をすーっとスライドして次の部屋へ移り、そこでまた3度で遊ぶ。今日のランは6弦5フレット（第1ボックスの根音）から出発して3弦17フレット（第5ボックスのC）まで、3回のスライドでネック全体を一息で通過します。弾き終わったとき、「ああ、ネックって一つにつながっていたんだ」と手で感じられるはずです。

そして忘れないでください。このランの目的は指さばきの自慢ではありません。ネックのどこを通っていてもC（♭3）ターゲットがどのあたりにあるかを体に刻み込むことです。ラン中に緑のCを押さえるたびに、「ここもC、あそこもC」と位置を目に焼き付けてください。明日の即興で、この地図が武器になります。

## ② 視覚資料

まず今日の地図、ネック全体のAマイナーペンタトニックです（開放弦〜15フレット）。5つのボックスが、実は途切れなくつながった一つの網であることを見せてくれます。緑にハイライトされているのは全部C（♭3）ターゲットです — ネック全体にCがこれだけ均等に散らばっているんですね。（第5ボックス頂上の16・17フレットの音は、5フレット付近のパターンが1オクターブ繰り返されたものなので、この地図の下のほうですでに同じ形を確認できます。）

```json
{
  "id": "m1.w3.d3.pentatonic_full_neck",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — full neck map (Box 1-5 connected)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 15,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 3, "label": "b7", "role": "scale" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 10, "label": "4", "role": "scale" },
      { "string": 6, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 15, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 10, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "label": "4", "role": "scale" },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 0, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "4", "role": "scale" },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "label": "b7", "role": "scale" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "label": "4", "role": "scale" },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 10, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "label": "b7", "role": "scale" }
    ]
  }
}
```

今日の主役、ネック全体の3度インターバルランです。1小節目は第1ボックス（5フレット）の中で3度で動き、2小節目でスライドして第3ボックス（10フレット）へ、3小節目でスライドして第5ボックス（14〜17フレット）まで上がり、ネック頂上のC（♭3）に着地します。スライド（ポジション移動）の記号に特に注目してください。

```json
{
  "id": "m1.w3.d3.full_neck_3rd_run",
  "type": "tab",
  "meta": {
    "title": "Full-neck 3rd-interval run (Box 1 -> 3 -> 5, land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 10, "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 15, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 1, "fret": 17, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 14, "duration": "eighth", "technique": "slide", "slideToFret": 17, "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 17, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 70→段階的に上げる）**
ネック全体のランはスライドが入るので、最初は必ずゆっくりから始める必要があります。BPM 70で上のランをとてもゆっくり1回。3か所のスライド（4弦7→10、1弦12→15、3弦14→17）で手が滑る距離を体に覚えさせましょう。スムーズに通過できたら75→80と5ずつ上げていきます。スライドの到着があいまいになった瞬間が、今日の上限です。

**10〜20分・頭のトレーニング（ネック全体でC探しチャレンジ）**
メトロノームを止めて、ネック全体の地図からC（♭3）だけを低いフレットから高いフレットへ順番に押さえていきます：2弦1フレット→5弦3フレット→3弦5フレット→6弦8フレット→1弦8フレット→4弦10フレット→2弦13フレット→5弦15フレット→3弦17フレット。押さえるたびに「シー！」と声に出しながら。ネックにCがどれだけびっしり散らばっているかを目に刻むのが目的です。詰まらずに一周できれば合格。

**20〜40分・実戦即興（Amワンコードバッキング／75〜85 BPM）**
バッキングを流してルール：一つのフレーズの中で、ネックの下（5フレット）と上（15フレット）を必ず両方踏むこと。上のランをそのまま投げてもいいですし、スライド地点だけ借りて自由に上下してもOKです。大事なのは「5フレットだけに閉じ込められないこと」。上がったら近くのC（♭3）に着地、下がったらまた近くのCに着地。ネック全体を一つの舞台として使う感覚です。

**40〜50分・録音・フィードバック（推奨）**
30秒録音。チェック：①スライドで部屋を越えるとき「ガクッ」とリズムが途切れなかったか。②ネックの上下を実際に両方使えたか、それともまた5フレットだけで遊んでいなかったか。再生速度を落として聴くと、スライド到着の音程とリズムの途切れがはっきり聞こえます。途切れたスライドがあれば、そのシフトだけを10回別で練習しましょう。

**今日の完了基準：**自分の上限BPM（最低75以上を推奨）で、ネック全体の3度ランをスライドの途切れなく通過＋ネック全体のC9か所を順番に押さえる。

## ④ ヒント・よくある間違い

- **スライドでリズムが崩れる。**部屋を越えるスライドは「空白の時間」ではありません。滑っているその時間も、正確に1拍（ここでは8分音符）の中に収める必要があります。スライドが遅れると、次の音がまるごと後ろにずれてしまいます。スライドは「速く、そしてジャストのタイミングで」到着させましょう。
- **3度を上下行に戻してしまう。**もどかしいからといってまたラララララと順次進行に逃げると、壁は壊れません。3度の跳ねる感じがぎこちないのは正常で、そのぎこちなさこそが部屋と部屋をつなぐ筋肉を作ります。
- **ネックの上のほうで迷子になる。**12フレットより上に上がると、急に指板が見知らぬ場所に感じられて手が固まります。そんなときは近くの根音AやCをまず見つけて錨を下ろし、そこからまた出発しましょう。錨さえあれば迷いません。
- **スピードを欲張る。**ネック全体のランはスライドが入るので、同じBPMでも一つのボックス内のランよりずっと難しくなります。昨日第5ボックスを90で弾けていても、今日は70から再スタートするのが正常です。恥ずかしいことではなく、当然のことです。
