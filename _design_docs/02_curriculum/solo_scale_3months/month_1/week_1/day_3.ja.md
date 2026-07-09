---
title: "シーケンスのスピードアップ（80〜90 BPM）＋精度キープ"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
lang: ja
---

# Day 3 — スピードを上げても、粒立ちは失わない

## ① 理論・説明

今日なぜこれをやるかというと。2日間、4連音と3度インターバルでボックスを噛みしめてきたので、そろそろ**<mark>手にスピードを入れていく</mark>**番です。でもここで多くの人が一度つまずきます。速度を上げると音が団子になりやすく、その団子を「速くなった」と勘違いしがちです。それは実は速くなったのではなく、**クリアさが崩れている**だけなんです。

だから今日のルールはたった一つ。**<mark>クリアさが崩れる瞬間が、あなたの今日の最高速度です</mark>。**BPM 65から始めて5ずつ上げていき、16分音符の粒が互いにくっついて団子になり始める、そのひとつ手前のBPM——そこが今日のあなたの本当の実力です。それを尊重してください。無理して90を叩き出すより、78で完璧に弾けるほうがずっと強いんです。

そして今日は**<mark>下行</mark>**を本格的に取り入れます。ここまでずっと上行だけでしたよね？不思議なことに、人の手は上行はできても下行で崩れがちです。特に4連音を上から下へ転がすと、ピッキングの方向がこんがらがってしまうんです。この下行を克服してこそ、ボックスを<mark>「両方向自由」</mark>に使えるようになります。そうすれば即興のとき、上にも下にも逃げ道ができるんです。

スピードトレーニングの目的は、指の自慢ではありません。**<mark>速いパッセージの中でも、CとAを正確に狙えるコントロール</mark>**を作ることです。スピードは手段で、ターゲットへの着地こそが目的。これを忘れないでください。

## ② 視覚資料

ボックスはそのままです。今日はこの中で<mark>上下に自由に転がして</mark>いきます。

```json
{
  "id": "m1.w1.d3.pentatonic_box1_ref",
  "type": "scale_shape",
  "meta": {
    "title": "A minor pentatonic — Box 1 (reference)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "scale": "A minor pentatonic",
    "tempoBpm": 85
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
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
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

今日の主役、<mark>4連音の**下行**シーケンス</mark>です。1弦の頂点から6弦へと転がり降ります。ピッキングの方向に特に集中してください。

```json
{
  "id": "m1.w1.d3.four_note_descending",
  "type": "tab",
  "meta": {
    "title": "4-note (16th) descending sequence — Am pentatonic Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 85
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 1, "fret": 8, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 8, "duration": "sixteenth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "sixteenth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 65→段階的に上昇）**
4連音の上行・下行をBPM 65で各1回、体をほぐします。そのあと**<mark>70→75→80→85→90</mark>**の順に5ずつ上げていきますが、各速度で上行・下行を1回ずつ完璧にクリアしてから次の速度へ。クリアできなければ、その速度が今日の上限です。無理に上げないでください。

**10〜20分・頭のトレーニング（今日のターゲット＝C・A、素早い照準）**
メトロノーム80。下行4連音を転がしながら、心の中で「今！」と思ったら**<mark>次のCかAでぴたりと止まる</mark>**。速い流れの中でターゲット音を瞬時に狙う訓練です。10回中8回成功すれば合格。

**20〜40分・実戦感覚 — ワンコード即興（Amバッキング／BPM 80〜90）**
昨日より速いバッキングです。ルール：**<mark>上行シーケンスで登り、下行シーケンスで降りながら</mark>4小節、最後は<mark>C（♭3）に着地</mark>。**シーケンスとフリーなアドリブを混ぜても構いませんが、フレーズの締めくくりは必ずコードトーン（CまたはA）で。速く弾いて崩れたら、すぐテンポを5下げてください。崩れたまま20分を過ごすのが一番よくありません。

**40〜50分・録音・フィードバック（推奨）**
昨日の録音と今日の録音を並べて聴いてみてください。2日間で粒立ちがどれだけクリアになったか、実感できるはずです。チェック：<mark>下行でピッキングが遅れたり</mark>、特定の弦をまたぐときに「ガクッ」となる箇所があるか。あれば、その2本の弦の移動だけを取り出して10回繰り返しましょう。

**今日の完了の目安：**自分の上限BPM（最低78以上を推奨）で、上行・下行シーケンスを団子にならずにクリアすること。速い流れの中でのターゲット即座着地8/10。

## ④ ヒント・よくある間違い

- **団子になっているのをスピードと勘違いする。**録音して聴けばすぐバレます。16分音符4個が「タカタカタカ」と数えられればOK、「ドルルル」と団子になっていればアウト。耳を審判にしましょう。
- **下行でピッキングが崩れる。**下行でもオルタネイト（ダウン–アップ）を維持してください。下行だからとダウンだけでかき鳴らすと、必ずどこかの拍でズレます。下行の最初の音のピッキング方向をあらかじめ決めておくと安定します。
- **速度を上げるにつれて肩や腕に力が入る。**速くなるほど、むしろ手首はより緩めます。力を入れると30秒で腕が固まってしまいます。
- **ターゲットへの照準を忘れて、指の速さだけ自慢してしまう。**今日のスピードの目的は「速い中でのC照準」です。速くなってもどこでも止まってしまうなら、3日間が無駄になってしまいます。スピードはコントロールのための材料にすぎません。
