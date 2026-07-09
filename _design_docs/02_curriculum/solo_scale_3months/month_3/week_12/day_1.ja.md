---
title: "オリジナルソロを設計する — コード進行と『ひとつの家』ポジションを決める"
dayKey: "m3.w12.d1"
estMinutes: 50
i18nKey: "lesson.m3.w12.d1"
lang: ja
---

# Day 1 — 11週間分を1曲に：コード進行を組み立て、着地地図を描く

## ① 理論・説明

今日なぜこれをやるかというと、ついに最終週だからです。この11週間で、私たちは本当にたくさんのものを積み上げてきました。ペンタ5ボックスをつなげ、ブルースの♭5やベンディング・ビブラートを学び、コードトーン・ターゲティング、ii-V-Iのガイドトーン、ドリアンの長6度、ミクソリディアンの♭7、ジャンル別モードスイッチまで。でもこれは全部、**頭の中に散らばったパーツ**なんです。今週は、このパーツを集めて**あなただけのオリジナルソロを1曲**作ります。コピーじゃなく、本当にあなたが作曲したソロです。

大きな曲を作るとき、一番よくある間違いは何だと思いますか？**音から弾き始めてしまうこと**です。設計図なしにレンガを積み上げると崩れますよね。だから今日は、楽器を少し置いておく時間もあります。まず**骨組み（コード進行）**を決めて、その上に**どこに着地するかの地図**を描きます。

私たちの曲の進行はこれです。Aを中心音に置いて、8小節でコンパクトかつしっかりまとめます。

**Am7 | D7 | Am7 | D7 | A7 | D7 | Am7 | Am7**

なぜこの進行にしたかというと、この中に**ドリアンとミクソリディアンが同時に生きている**からです。ひとつずつ見ていきましょう。

- **Am7 → 3度はC（♭3）。**Aを基準にしたマイナーの色。ここがドリアンのホームグラウンドです。
- **D7 → 3度はF#。**ところがこのF#、驚くことに**Aの長6度（♮6）**なんです。9週目に学んだ、あのドリアンの洗練された色彩音！つまりD7に着地した瞬間、自動的にドリアンの色が出るんです。うれしい発見ですね。
- **A7 → 3度はC#。**ここが反転ポイントです。さっきまでC（♭3）でマイナーだったのに、A7になった瞬間、3度が**C#（長3度）**へと半音上がります。これが10週目に学んだミクソリディアンの正体です。

ここがポイントです。**C（♭3）とC#（長3度）は、3弦上でたった1フレット差（5フレット→6フレット）**なんです。この1マスが、ドリアン⇔ミクソリディアンのスイッチ。指を少し滑らせるだけで曲の表情が変わります。今日は、このスイッチを含めた**すべての着地点を、片手のポジションにまとめた地図**を体に馴染ませます。

## ② 視覚資料

まず、**今日のメイン着地地図**です。コードが変わるたびに狙うべき3度が全部集まっています。C（Am7着地・♭3）、F#（D7着地＝Aの長6度の色）、C#（A7着地・長3度）、そして♭7の色彩音Gまで。ハイライトされた点さえ目に馴染めば、今週の半分は終わったも同然です。

```json
{
  "id": "m3.w12.d1.original_solo_target_tones",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Original solo - key target tones (Dorian + Mixolydian composite)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "scale": "Composite (Dorian + Mixolydian)",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 8,
    "dots": [
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

次に、その着地点たちが住む**『ひとつの家』ポジション**です。AドリアンとAミクソリディアンを一箇所（5〜9フレット）に重ねた統合フレットボードです。C（♭3）とC#（長3度）が3弦上に並んでいるのが見えますよね？この一箇所さえ押さえておけば、8小節ずっと手が迷いません。

```json
{
  "id": "m3.w12.d1.composite_position",
  "type": "scale_shape",
  "meta": {
    "title": "A composite position (Dorian + Mixolydian merged, frets 5-9)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "scale": "A Dorian + A Mixolydian",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6", "role": "color", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 92）— 4連符シーケンスで手を温める**
メトロノーム92（この曲のテンポ）に合わせて、『ひとつの家』ポジションの中で4連符シーケンスを回します。6弦から1弦ずつ4音ずつ（例：5・7・8・…次の弦へ）16分音符で上がって下がります。上行下行を丸暗記するのではなく、「4つずつまとめて回す」感覚だけ意識して。指が5〜9フレットの位置に自然に収まるように。

```json
{
  "id": "m3.w12.d1.composite_position",
  "type": "scale_shape",
  "meta": {
    "title": "A composite position (Dorian + Mixolydian merged, frets 5-9)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A (Dorian/Mixolydian composite)",
    "scale": "A Dorian + A Mixolydian",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "2", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6", "role": "color", "highlight": true },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "color", "highlight": true },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true }
    ]
  }
}
```

**10〜20分・頭のトレーニング（着地地図を刻み込む）— 楽器を置いてスタート**
最初の地図を見ながら声に出して覚えます。「Am7ならC、D7ならF#、A7ならC#」。それからギターを持って、バッキングなしでコード名だけを自分で言いながら押さえます。「Am7！」でC（3弦5フレット）、「D7！」でF#（2弦7フレット）、「A7！」でC#（3弦6フレット）。**CとC#が1フレット差**だと指先で確認するのが今日のハイライトです。

```json
{
  "id": "m3.w12.d1.original_solo_target_tones",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Original solo - key target tones (Dorian + Mixolydian composite)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "scale": "Composite (Dorian + Mixolydian)",
    "tempoBpm": 92
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 8,
    "dots": [
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 6, "finger": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 7, "finger": 3, "label": "6", "role": "color", "highlight": true },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "color", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
    ]
  }
}
```

**20〜40分・実戦即興（Am7-D7-A7バッキング／92 BPM）**
YouTubeやアプリで「A minor Dorian jam」や「A7 groove backing track」のゆっくりめのものを検索して流します（正確にこの進行じゃなくてもOK。Am7・D7・A7系ならじゅうぶんです）。ルールはひとつだけ。**メロディを作ろうとせず、コードが変わるたびにそのコードの3度に長く着地する**こと。今日は作曲ではなく、「地図の上を歩く」日です。

**40〜50分・録音・フィードバック（推奨）**
手元にある録音ツール（スマホのボイスメモでもOK）で、最後のジャムの30秒だけ残します。聴き直して、チェックするのはひとつだけ。**コードが変わった瞬間に自分は3度にいたか。**ズレていたら、どのコードで遅れたかをメモするだけで大丈夫です。

**今日の完了の目安：**8小節の進行を覚え、『ひとつの家』の中で3つの着地音（C・F#・C#）を目を閉じて3秒以内に押さえられること。バッキングの上で、コードが変わるたびに3度着地を8回以上成功させること。

### 自己診断チェックリスト（今日の焦点：着地の位置）
- [ ] **3度着地の正確さ** — Am7=C、D7=F#、A7=C#を混同せずに押さえられた
- [ ] **色彩音の活用** — D7のF#がAの長6度（ドリアンの色）だと意識しながら押さえた
- [ ] **ビブラートの安定感** — （今日はウォームアップ程度）長く伸ばす着地音に軽くビブラートをかけてみた
- [ ] **リズムのタイミング** — コードが変わるその拍に着地が重なった

## ④ ヒント・よくある間違い

- **設計せずに音から弾き始める。**今日いちばん大事なのは、8小節の進行と3つの着地音です。これなしで即興から始めると、今週ずっと迷います。進行を紙に書いて譜面台に貼っておきましょう。
- **CとC#を同じ音だと勘違いする。**この1フレットが曲の心臓です。Am7でC#を押さえると合わないし、A7でCを押さえるとブルージーではあっても「着地」にはなりません。コードの性格に合わせて、3弦の5フレットと6フレットを正確に使い分けましょう。
- **5つのボックス全部を使おうとする欲張り。**今週はネック全体を旅する週ではありません。『ひとつの家』（5〜9フレット）の中で歌うのが目標です。場所を絞るからこそ作曲できるんです。
- **ウォームアップを単純な上行下行で済ませる。**癖で上下になぞるだけじゃなく、必ず4連符でまとめて回しましょう。そうすることで、実際のフレーズの材料が手に残ります。
