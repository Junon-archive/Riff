---
title: "ファンクバッキングでのドリアン・スイッチング＋タイトな休符フレージング"
dayKey: "m3.w11.d2"
estMinutes: 50
i18nKey: "lesson.m3.w11.d2"
lang: ja
---

# Day 2 — ファンク：3度を「パッ」と投げて、スパッと休む

## ① 理論・説明

今日なぜこれをやるかというと。昨日のブルースが「間延びする」ジャンルだったなら、ファンクはその真逆です。**極限までタイトで、休符がリズムの主役**になるジャンルなんです。同じ3度着地でも、ファンクではまったく違う歌い方が必要になります。バッキングを入れ替えたら、フレージングも入れ替える — これが今週のコアです。

今日のファンクバッキングは定番の**Am7 → D9ヴァンプ**です。（Cissy Strut、Chameleon系のあの感じ。）マイナー・モーダルなヴァンプに出会ったときの判断は？**ドリアン。**なので今日のベースキャンプは**Aドリアン（A B C D E F# G）**一つで、二つのコードを両方カバーします。

ここで今日の「なるほどポイント」を一つ。ドリアンのアイデンティティである**長6度F#（♮6）**が、実は**D9の3度**とまったく同じ音なんです。つまりドリアンで遊んでいる最中にコードがD9に変わった瞬間、あの色彩音F#がそのまま着地ターゲットになるということ。一つのモードで二つのコードを滑らかにつなぐ、ちょっとした魔法ですね。

コードごとの3度スイッチングはこう。

- **Am7のとき → C（短3度、♭3）**を狙います。Am7の表情を決める音です。
- **D9に変わったら → F#（長3度）**に着地。このF#がそのままAドリアンの♮6色彩音です。
- つまりスイッチング＝**3弦5フレット（C）↔2弦7フレット（F#）**を行き来する判断です。

### 🎙️ 間・フレージング ミニレッスン — ファンク編：タイトな休符＆スタッカート

ファンクでの「間」は「休み」ではなく、**リズムそのもの**です。今日押さえる4つ。

- **正確な休符（間）：** ファンクは16分音符のグリッドの上で「弾く-休む-弾く-休む」がカチッと揃っていないといけません。昨日のブルースの間が「間延びする空間」だったのに対して、今日の間は**正確に切られた静寂**です。タブの`rest`を拍のグリッドにぴったり合わせて守りましょう。
- **短いスタッカート：** 音を長く伸ばさず、**パッと投げてすぐ手を離す。**ピッキング側のパームミュート（`palm_mute`）で音の後ろを短く消します。3度も例外なく短く。
- **16分の刻み：** 同じCという音一つでも16分音符で刻んで「タッ・タッ」と二回投げると、それがファンクのグルーヴになります。
- **ダイナミクス＆コール＆レスポンス：** 強く弾いた一発の後に弱く返す対比、そして短いモチーフを投げて、休符で答えを空けておく「隙」がファンクの呼吸です。

まとめると今日は、**Am7・D9の3度（C・F#）に着地しつつ、パームミュートのスタッカートとスパッと切れた休符でタイトに刻んで歌う**日です。

## ② 視覚資料

一つ目は、ファンクヴァンプ用の**ターゲットノート・マップ**です。Aドリアン一つのフォームの中で、Am7の♭3（C）とD9の3度（F#）が両方収まります。特に**5弦9フレットのF#**は「6（color）」というラベルが付いていますが、これがまさにドリアン♮6であり、同時にD9の3度でもある二重スパイの音です。

```json
{
  "id": "m3.w11.d2.funk_target_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Funk target map Am7 -> D9 (A Dorian, b3 & major 3rd = Dorian nat6)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (funk vamp)",
    "scale": "A Dorian",
    "tempoBpm": 100
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "finger": 2, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "Am7-b3(C)", "highlight": true, "role": "target" },
      { "string": 2, "fret": 5, "finger": 1, "label": "Am7-5(E)", "role": "chord_tone" },
      { "string": 3, "fret": 7, "finger": 3, "label": "D9 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "finger": 3, "label": "D9-3(F#)", "highlight": true, "role": "target" },
      { "string": 5, "fret": 9, "finger": 4, "label": "6(color=D9-3 F#)", "highlight": true, "role": "color" }
    ]
  }
}
```

二つ目は、今日の**ファンク・スタッカート・フレーズ**です。16分音符と休符が細かく絡み合っていますよね。1小節目はAm7の上で**C（♭3）をパームミュートでタッタッと刻み、間をスパッと休みます。**2小節目はD9にスイッチ — **F#を短く投げて**、また休符で空けます。`rest`が音符と同じくらい多いのが、ファンクのアイデンティティです。

```json
{
  "id": "m3.w11.d2.funk_staccato_phrase",
  "type": "tab",
  "meta": {
    "title": "Funk staccato phrase (Am7 C / D9 F#) with tight rests",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (funk)",
    "tempoBpm": 100
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "label": "Am7-b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "label": "Am7-b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 5, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 5, "duration": "eighth", "technique": "palm_mute", "label": "Am7-5(E)", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "technique": "palm_mute", "label": "Am7 R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "technique": "palm_mute", "label": "Am7-b3(C)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "palm_mute", "label": "D9 R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 7, "duration": "sixteenth", "technique": "palm_mute", "label": "D9-3(F#)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "sixteenth", "label": "9(E color)", "highlight": true, "role": "color" },
        { "string": 2, "fret": 5, "duration": "eighth", "rest": true, "label": "rest" },
        { "string": 2, "fret": 5, "duration": "quarter", "rest": true, "label": "rest" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 100）— 16分4音シーケンス**
ファンクテンポ100に合わせて、Aドリアンを**16分4音シーケンス**で転がします。ただし今日のルール — **各拍の4つ目の16分をパームミュートで短く消しながら**、手首の「切る」感覚を植え付けます。音を伸ばす練習ではなく、**正確に断つ**練習です。

**10〜20分・頭のトレーニング — Am7↔D9 3度スイッチングのマッピング**
メトロノーム100を維持。ターゲットマップから**Am7→C（3弦5フレット）↔D9→F#（2弦7フレット）**のたった2音だけを交互に押さえます。クリック1回につき1回、パームミュートで短く。F#を押さえるときは「これはD9の3度でありドリアンの♮6」と声に出しながら。目を閉じて2音を行き来できたら合格です。

**20〜40分・実戦即興（Am7–D9ファンクヴァンプ／96〜100 BPM）— タイト・ミッション**
「funk backing track Am7 D9」または「A Dorian funk vamp」を一つ流します。ミッションは二つ。①コードが変わったらC↔F#で3度スイッチング。②**すべての音をパームミュート・スタッカートで短く、間を正確な拍で切ること。**昨日と正反対です — 伸ばしたら失敗、**短くパッと投げてスパッと休めば**成功です。

**40〜50分・録音・フィードバック（推奨）**
録音ツールでジャムを30秒録音。聴き直してチェックするのは二つだけ — ①3度のスイッチングがコードと合っていたか。②**休符が拍のグリッドにぴったり付いて正確に切れていたか（だらついていなかったか）。**必要なら再生速度を落として、16分休符の位置とスタッカートの長さを拡大して確認してください。

**今日の完了基準：** Am7のCとD9のF#を、パームミュートで目を閉じて押さえられる。バッキングの上で3度スイッチング6回以上＋**正確な位置の休符（パームミュートの停止）でグルーヴを維持。**

## ④ ヒント・よくある間違い

- **音を長く伸ばす癖。** 昨日のブルースの癖が今日は毒になります。ファンクは**短くパッと。**着地した3度もパームミュートで即座に消してください。余韻ではなく静寂がグルーヴです。
- **休符を適当に流してしまう。** ファンクにおいて休符はリズムの骨格です。「弾く場所」より**「休む場所」を先に**体に刻んでください。休みが乱れるとグルーヴがまるごと崩れます。
- **弾きすぎてしまう。** 手がうずうずしても我慢してください。二、三音投げて休符で空けた場所が、ベース・ドラムと噛み合ったときにファンクが生きてきます。
- **F#をD9の3度としてしか見ない。** それは同時にドリアンの♮6色彩音でもあります。この二重のアイデンティティを知っていれば、Am7の区間でもF#を色としてさりげなく使い、ヴァンプを滑らかにつなぐことができます。
