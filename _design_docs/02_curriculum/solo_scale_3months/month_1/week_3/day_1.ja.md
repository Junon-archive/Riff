---
title: "ペンタ第4ボックスを刻む＋第3↔第4ボックスのスライド接続"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
lang: ja
---

# Day 1 — 12フレットへ引っ越し：第4ボックスを手に刻み、第3ボックスとつなぐ

## ① 理論・説明

今日なぜこれをやるかというと。この2週間、あなたは5フレット付近（第1・第2・第3ボックス）だけで過ごしてきました。手もそこにすっかり馴染んだと思います。実はここがポイントで、即興がうまくいかない中級者の方は、ネックの下半分がまだ馴染んでいないことが多いんです。バッキングを流すと、手が自動的に5フレットへ向かって、同じリックを繰り返すだけで終わってしまいがち。ネックは21フレットもあるのに、5〜8フレットだけで過ごしていることになるんですね。

だから今日から、12フレットより上へ引っ越します。最初の新居が第4ボックスです。このボックスでは根音Aが5弦12フレットにあります。12フレットってどこでしょう？ちょうど1オクターブの地点なんです。つまり第4ボックスの根音（5弦12フレットのA）は、あなたがすでに知っている5フレット第1ボックスの音を、1オクターブ上でもう一度出会っているだけなんです。見知らぬ街ではなく、知っている歌を高い声で歌っているだけ、ということですね。

そして今日の本当の宿題は、第4ボックスを「単独で」覚えることではありません。第3ボックスとつなぎ合わせることです。先週覚えた第3ボックス（9〜12フレット）と今日の第4ボックス（12〜15フレット）は、12フレットで壁一枚を共有しています。二つのボックスは他人同士ではなく、12フレットで手をつないでいる隣人なんです。これを体で感じるために、今日はスライドを使います。5弦12フレット（A、根音）から15フレット（C、♭3）へすーっと滑らせると、第3ボックスから第4ボックスへ引っ越しながら、同時に今日のターゲット音C（♭3）に着地します。この一つの動きで「ボックス接続＋3度着地」を同時に学ぶわけです。

覚えておくべき座標は変わりません。A（R）・C（♭3）・D（4）・E（5）・G（♭7）。位置が12フレット上に移っただけで、音の役割はまったく同じです。特にC（♭3）、この音は第4ボックスでは5弦15フレットと2弦13フレットに住んでいます。ここが今日の緑の印です。

```json
{
  "id": "m1.w3.d1.pentatonic_box4",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 4 (12th position)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 11,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 15, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 1, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "finger": 3, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "finger": 4, "label": "b7", "role": "scale" }
    ]
  }
}
```

## ② 視覚資料

まず今日の新居、第4ボックスです。根音A（5弦12フレット）を中心に、緑にハイライトされているのが着地ターゲットのC（♭3）です。

```json
{
  "id": "m1.w3.d1.pentatonic_box4",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 4 (12th position)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 11,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 15, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 5, "fret": 12, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 15, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 12, "finger": 1, "label": "4", "role": "scale" },
      { "string": 4, "fret": 14, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 12, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 3, "fret": 14, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 13, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 15, "finger": 3, "label": "4", "role": "scale" },
      { "string": 1, "fret": 12, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 15, "finger": 4, "label": "b7", "role": "scale" }
    ]
  }
}
```

次は第3↔第4をつなぐ接続ラインです。1小節目は第3ボックス（9〜13フレット）の中を3度で動き、2小節目で5弦12フレット（A）→15フレット（C）のスライドで第4ボックスへ引っ越しながらC（♭3）に着地します。最後のCはビブラートで歌ってください。

```json
{
  "id": "m1.w3.d1.box3_to_box4_slide",
  "type": "tab",
  "meta": {
    "title": "Box 3 -> Box 4 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 80）**
メトロノーム80に合わせ、第4ボックスだけを4連符（16分音符）のシーケンスで上行・下行を各1回。5フレットでやっていたあのシーケンスを、今度は12フレットでそのまま。手の形が5フレットより少し狭く感じるはずです（高いフレットほどフレット間隔が狭くなるので）。その感覚に手を慣らすのがウォームアップの目的です。

**10〜20分・頭のトレーニング（今日のターゲット＝C／♭3、第4ボックス内）**
メトロノームを止めて、第4ボックスの中でC（♭3）の2か所だけを探して押さえます。5弦15フレット、2弦13フレット。押さえるたびに「シー！」と声に出してください。次のチャレンジ：目を閉じて根音A（5弦12フレット）を押さえたあと、そこから一番近いCへ、指一本動かすだけでたどり着けるか体で探ってみましょう。3分以内に目を閉じたままA↔Cを往復できれば合格です。

**20〜40分・実戦即興（Am ワンコードバッキング／75〜80 BPM）**
「Am backing track」で何でも一つ流します。今日のルール：演奏は第3ボックス（9フレット）から始めて、曲の途中で必ずスライドで第4ボックス（12フレット）へ引っ越し、C（♭3）に着地して止まる。上の接続ラインをそのまま使ってもいいですし、アレンジしてもOKです。大事なのは「低いボックスから始める→スライドで上へ引っ越す→ターゲットに着地」という流れを、一つのフレーズの中で作ることです。最低8回繰り返してください。

```json
{
  "id": "m1.w3.d1.box3_to_box4_slide",
  "type": "tab",
  "meta": {
    "title": "Box 3 -> Box 4 sliding connection (land on b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "block_connection",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 12, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 10, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 12, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 10, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 13, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 12, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 12, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 12, "duration": "eighth", "technique": "slide", "slideToFret": 15, "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 15, "duration": "quarter", "dotted": true, "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**40〜50分・録音・フィードバック（推奨）**
手元の録音アプリ（スマホのボイスメモでもOK）で30秒だけ。聴き直してチェックするのは一つだけ。スライドの到着音（C）の音程が正確か。スライドは目でフレットを見ずに手の感覚で滑らせるので、15フレットを行き過ぎたり届かなかったりしやすいんです。再生速度を落として聴けると、到着の瞬間をもっとよく捉えられます。到着があいまいなら、そのスライドだけを10回別で繰り返しましょう。

**今日の完了基準：**BPM 80で第4ボックスのシーケンスを上下行クリア＋第3→第4のスライド接続でC（♭3）への着地を8回成功（目を閉じたA↔C往復も含む）。

## ④ ヒント・よくある間違い

- **12フレットで手の形が崩れる。**高いフレットはフレット間隔が狭いので、5フレットで使っていた指の開き方のまま来ると、指同士がぶつかってしまいます。手全体を少しすぼめましょう。「同じ形、小さいサイズ」です。
- **スライドを「速く滑らせること」と勘違いする。**スライドの目的はスピードではなく、正確な到着です。12→15は3マス。ゆっくりでもいいので、15でぴたっと止まってCが鳴ってこそ着地です。行き過ぎるとD（4）になってしまい、「あれ？」となります。
- **第3ボックスへ逃げ戻る。**慣れた9フレットの方が楽なので、つい下に戻ってしまいます。今日はあえて上へ引っ越して踏みとどまる日です。12フレットでぎこちなく立っているその時間こそが、ネックを広げる唯一の方法です。
- **着地のCをかすめて通り過ぎる。**スライドでCに到着したら、最低1拍はとどまってビブラートで歌ってください。着地の力は「とどまること」から生まれます。かすめるだけなら着地ではなく、ただの通過点です。
