---
title: "Am↔C中心音切り替えドリル — 4連符で二つの解決音を往復する"
dayKey: "m2.w6.d3"
estMinutes: 50
i18nKey: "lesson.m2.w6.d3"
lang: ja
---

# Day 3 — 手は止めず、着地だけCとEを往復する

## ① 理論・説明

今日なぜこれをやるかというと、いよいよ本当の実戦感覚を身につける番だからです。Day 1で「同じ形、違う中心」を理解し、Day 2で「明るい3度E着地」を手に馴染ませましたよね。でも実際の曲では、コードはAm→C→Am→Cとずっと行ったり来たりします。そのたびに手の形を変えている時間なんてありません。必要なのはたった一つ、**<mark>着地点を瞬時に切り替える瞬発力</mark>**です。

だから今日は往復ドリルをやります。武器は**<mark>4連符シーケンス</mark>**（16分音符4つ組）。4連符で指板を止まらずに転がしながら、コードがAmなら暗い**b3（C）**へストンと落ち、コードがCなら明るい**3度（E）**へふわりと降ります。<mark>運指は1度も変えません</mark>。瞬間的に判断するのは「今どこに帰るか」だけです。

```json
{
  "id": "m2.w6.d3.two_landing_map",
  "type": "scale_shape",
  "meta": {
    "title": "Two landing notes — C (Am b3 / C R) and E (C 3 / Am 5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "scale": "C major (relative to A natural minor)",
    "tempoBpm": 88
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "D (2/4)", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "F (4/b6)", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "G (5/b7)", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "D (2/4)", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "F (4/b6)", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "G (5/b7)", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true }
    ]
  }
}
```

ここに本当に大事なポイントがあります。下の二つの小節を見ると、音符の位置がほとんど同じです。手はまったく同じ軌道をたどります。それなのに1小節目はCで止まり（Amの暗さ）、2小節目はEで止まります（Cの明るさ）。この「<mark>同じ手・違う着地</mark>」を繰り返していると、後でバッキングでコードが急に変わっても、手が勝手に着地点を切り替えてくれるようになります。今日はその回路を通す日です。

## ② 視覚資料

<mark>二つの解決音の地図</mark>です。同じ指板の上で、**C**（Am区間での着地＝b3／C区間ではR）と**E**（C区間での着地＝明るい3度／Am区間では5）をハイライトしました。この二つの点を行き来するイメージを持ってください。

```json
{
  "id": "m2.w6.d3.two_landing_map",
  "type": "scale_shape",
  "meta": {
    "title": "Two landing notes — C (Am b3 / C R) and E (C 3 / Am 5)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "scale": "C major (relative to A natural minor)",
    "tempoBpm": 88
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 6, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "D (2/4)", "role": "scale" },
      { "string": 5, "fret": 7, "finger": 3, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 5, "fret": 8, "finger": 4, "label": "F (4/b6)", "role": "scale" },
      { "string": 4, "fret": 5, "finger": 1, "label": "G (5/b7)", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "D (2/4)", "role": "scale" },
      { "string": 2, "fret": 5, "finger": 1, "label": "E = 3(C)/5(Am)", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "finger": 2, "label": "F (4/b6)", "role": "scale" },
      { "string": 2, "fret": 8, "finger": 4, "label": "G (5/b7)", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "A (6/R)", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "finger": 3, "label": "B (7/2)", "role": "scale" },
      { "string": 1, "fret": 8, "finger": 4, "label": "C = b3(Am)/R(C)", "role": "target", "highlight": true }
    ]
  }
}
```

往復ドリルの本体です。1小節目は4連符で転がしてAmの暗い**C（b3）**に着地、2小節目は<mark>同じ手の軌道</mark>で転がしてCの明るい**E（3度）**に着地します。二つの小節の音の位置がどれほど似ているか見てみてください。

```json
{
  "id": "m2.w6.d3.center_shift_4note",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "4-note sequence drill — resolve to C (Am b3) then E (C bright 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (R in Am)", "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (b6)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C = b3(Am)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (6 in C)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "E = 3(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 88）**
メトロノーム88に合わせて、4連符シーケンスで手をほぐします。1拍に16分音符4つ（「タタタタ」）がクリックにぴったり合うように。まだ着地の切り替えは気にせず、<mark>粒がつぶれないこと</mark>だけ意識します。指がついてこなければ82に一旦落として、また戻しましょう。

**10〜20分・頭のトレーニング（着地の切り替え＝C↔E）**
メトロノームはつけたまま、上の二つの小節を**交互に**弾きます。1小節目（C着地）→2小節目（E着地）→また1小節目……と無限に繰り返します。着地の直前に頭の中で「暗い（C）」「明るい（E）」と先に唱えてから手をそちらへ向かわせます。手の軌道は同じで<mark>最後の一音だけを乗り換える感覚</mark>を3分以内に自動化できれば合格です。

```json
{
  "id": "m2.w6.d3.center_shift_4note",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "4-note sequence drill — resolve to C (Am b3) then E (C bright 3rd)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major / A minor (relative)",
    "tempoBpm": 88
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (R in Am)", "role": "root" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (2)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (b3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (5)", "role": "chord_tone" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (b6)", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "C = b3(Am)", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 5, "duration": "sixteenth", "label": "A (6 in C)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "sixteenth", "label": "B (7)", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 6, "fret": 8, "duration": "sixteenth", "label": "C (R)", "role": "root" },
        { "string": 5, "fret": 5, "duration": "sixteenth", "label": "D (2)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "sixteenth", "label": "E (3)", "highlight": true, "role": "scale" },
        { "string": 5, "fret": 8, "duration": "sixteenth", "label": "F (4)", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "quarter", "label": "E = 3(C)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20〜40分・実戦即興（Am↔C切り替えバッキング／BPM 84〜88）**
「Am C vamp backing track」を一つ流します。ルールは、4連符で止まらずに転がしながら**<mark>コードの音を耳で聴いて</mark>**、AmならCに、CならEに着地すること。<mark>コードが変わる瞬間を逃さないことが核心</mark>です。最初は反応が遅れても大丈夫。反応速度は今日一日でぐっと速くなります。

**40〜50分・録音・フィードバック（推奨）**
30秒録音してから再生します。チェックポイント。**<mark>コードが変わったとき、着地音もちゃんと切り替わっていたか。</mark>**Am区間なのにEに着地していたり、C区間なのにCのままだったりしたら、まだ半拍遅れています。混乱した箇所だけ再生速度を落として繰り返し聴き、次回はそのコード転換を1拍前もって準備しましょう。

**今日の完了基準:** BPM 88で二小節の往復ドリルを途切れずに弾けること。バッキングの上でコード転換に合わせてC↔E着地を8小節以上正確に切り替えられること。

## ④ ヒント・よくある間違い

- **着地の切り替えが半拍遅れる。**最もよくある間違いです。コードが変わったのを聴いてから着地点を決めようとすると、もう遅いんです。バッキングのコード進行を先に覚えておいて、1拍前もって次の着地点を準備しましょう。
- **緊張して手の軌道まで変えてしまう。**着地だけ変えればいいのに、慌てて運指全体を揺らすと4連符が崩れてしまいます。「手はそのまま、最後の音だけ」——この呪文を唱え続けましょう。
- **C着地とE着地の音の違いを区別できていない。**どちらも単なる「止まる」として処理してしまうと、今日の練習効果は半減してしまいます。Cは物悲しく、Eは華やかに——着地するときにその感情の色合いを意識的に感じ分けましょう。
- **まずスピードを上げてしまう。**88がもどかしくても我慢してください。切り替えの正確さが100%になる前にスピードを上げると、遅れた反応がそのまま固まってしまいます。正確さが先、スピードは今週のジャムの中で自然に付いてきます。
