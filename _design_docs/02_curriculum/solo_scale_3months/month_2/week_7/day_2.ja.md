---
title: "Cコードトーン（C・E・G）指板全域マッピング — 3度（E）を目に焼き付ける"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
lang: ja
---

# Day 2 — 今度はCのC・E・G、3度（E）を指板に植える

## ① 理論・説明

今日なぜこれをやるかというと、昨日Amの地図を描いたので、今度は相棒コードである**Cメジャー**の地図も描く必要があるからです。なぜCなのかというと、AmとCは実は**同じ音を共有する平行調（関係調）**なんです。先週（W6）にもう少し味わいましたよね。今日はそれを「コードトーン」の目で改めて見ていきます。

Cメジャーの骨格音は**C（根音）・E（3度）・G（5度）**。昨日のAmはA・C・Eでした。勘のいい人はもう気づいたはず。**Cは両方のコードに入っている**んです。Amの中ではCは3度（♭3）でしたが、Cコードでは根音（R）です。同じ音なのに役割が変わる。これが後でAm↔Cを自在に行き来する秘密の通路になるんですが、それは明日（Day 3）でしっかり掘り下げます。今日はまず、Cのコードトーン地図を描くことに集中しましょう。

今日の主役は3度の**E**です。昨日Cが Am を「マイナーらしく」したように、EはCを「メジャーらしく」明るくしてくれる音です。だからEを着地ターゲットとして緑でマークしておきます。ちなみにこのEは、昨日Amで5度だったのと同じ音です。同じフレットでも、コードが変われば役割が変わる——この感覚を今日は体で味わってみてください。

改めて強調しますが、これは速弾きではありません。**位置を認識する頭のトレーニング**です。遅いBPMで「ここもE、あそこもE」とはっきり地図を描く、それだけです。

## ② 視覚資料

Cコードトーン（C・E・G）をネック全体（0〜12フレット）にマッピングしました。緑でハイライトされているのが3度の**E**、今日の着地ターゲットです。

```json
{
  "id": "m2.w7.d2.c_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "C major chord tones (C-E-G) across the neck, 3rd (E) highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 66
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 0, "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 8, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 7, "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 10, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 2, "label": "3", "role": "target", "highlight": true },
      { "string": 4, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 9, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 8, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 0, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 3, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 8, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

オープンポジションでC・E・Gだけを選び、**1-3-5アルペジオ**で上行・下行してみましょう。開放弦が混じって響きがきれいです。3度（E）はターゲットとして強調してあります。

```json
{
  "id": "m2.w7.d2.c_arpeggio_1_3_5",
  "type": "tab",
  "meta": {
    "title": "C major arpeggio 1-3-5 (C -> E -> G), open position",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major",
    "tempoBpm": 66
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "arpeggio_1-3-5",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 2, "duration": "eighth", "label": "3", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 0, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "3", "target": true, "highlight": true, "role": "target" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "3", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 0, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 66）**
メトロノーム66で、上のオープンCアルペジオを8分音符で上行→下行。一音ごとに頭の中で度数（R-3-5）を唱えます。開放弦が混じるので、左手が休んでいる間に右手が先に次の弦へ移っていく流れを感じてみてください。

**10〜20分・頭のトレーニング（今日のターゲット＝E／3度）**
メトロノームを止めて、地図から**E（3度）だけ**を見つけて押さえます。最低3か所：4弦2フレット、2弦5フレット、1弦0フレット（開放）。押さえるたびに「イー！」と声に出しましょう。慣れたら目を閉じてランダムにE→E→E。3秒以内に別のポジションのEへ手が動けば合格です。**昨日Amの5度だったEが、今日はCの3度**だということを一度唱えておくと、頭の中の地図がより強固になります。

**20〜40分・実戦感覚 — Cワンコードバッキング（BPM 66〜70）**
「C major backing track slow」で何か一つ流します。ルール：**C・E・Gの3音だけ。**止まるときは必ず**Eに着地。**オープンポジションだけで遊ばず、5〜9フレット付近のE（2弦5フレット、3弦9フレット）にも手を伸ばして着地してみましょう。

**40〜50分・録音・フィードバック（推奨）**
手元の録音ツールで30秒録音します。チェックポイント：**着地した音は本当にEだったか？**Cコードの上でEで終わると、明るく安定して「カチッ」とハマる感じがします。その感覚がなければ、根音のCで終わっている可能性が高いです。再生速度を落として、最後の音を指板で確認しましょう。

**今日の完了目安：**BPM 66でオープンCアルペジオの上行・下行を途切れず、E（3度）の3ポジションを目を閉じて押さえられること。

## ④ ヒント・よくある間違い

- **根音（C）にばかり着地する癖。**根音は安全ですが平坦です。3度（E）に座ってこそ「メジャーの明るさ」が生きます。意識的にEを狙って終わってみましょう。
- **開放弦のノイズ。**オープンCアルペジオで使っていない6弦・4弦の開放がブーンと鳴ってしまったら、右手の側面や左手の余った指で軽くミュートしましょう。
- **昨日と今日を別々に覚えようとする。**A・C・EとC・E・Gは重なる音（C、E）が多いです。新しく覚えるのではなく「同じ音、変わった役割」と捉えれば、地図の半分はもう知っていることになります。
- **スピードへの欲。**今日も66を固定です。位置があやふやなら55まで落としてもOKです。明確さがいつでも最優先です。
