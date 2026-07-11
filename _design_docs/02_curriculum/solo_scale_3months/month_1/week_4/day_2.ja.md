---
title: "ヴィブラート奏法（手首 vs 指）＋全ボックスの♭5マッピング"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
lang: ja
---

# Day 2 — 音を「歌わせる」ヴィブラート、そしてネック全体の♭5

## ① 理論・説明

今日なぜこれをやるかというと。昨日、ベンドで♭5を「作る」方法を学びましたよね？でも、どんなにいい音を押さえても、着地する音が**平坦にプツンと切れて**しまうと、ただの練習にしか聞こえません。プロとアマチュアを分ける最後の1%が、まさに**<mark>ヴィブラート</mark>**——着地音をわずかに揺らして「歌わせる」技術です。今日はこれをきちんと学びます。

ヴィブラートには2種類あります。

- **指ヴィブラート（クラシック／狭い幅）：** フレットを押さえた指先を、弦を横切る方向ではなく**<mark>弦と平行（ネックの縦方向）にごく微細に</mark>**震わせます。幅が狭く繊細な音になります。クラシックやジャズでよく使われます。ただエレキのブルースでは幅が小さすぎて、あまり聞こえてこないことが多いです。
- **手首ヴィブラート（ブルース／広い幅）：** こちらが今日のメインです。指で震わせるのではなく、フレットを押さえたまま**<mark>手首をドアノブを回すように軽く回転させて</mark>**、音程をわずかに上げ下げし続けます。実質的には「ごく小さなベンドを繰り返している」ようなもの。だから昨日ベンドを学んだ直後に登場するんですね。幅が広く存在感があるので、B.B. KingやSlashも、みんなこれを使っています。

コントロールポイントは**速度（速い／遅い）**と**幅（狭い／広い）**の2つです。この2つを場面に合わせて調整するのがポイント。
- **<mark>遅く広く</mark>**＝切なく歌うような感じ（バラード、長く伸ばす着地音）。今週の私たちの基本形です。
- **速く狭く**＝緊張感のある強い感じ（速い曲、ハイゲイン）。
- **禁止：** 速度がバラバラに揺れる「怯えたヴィブラート」。心臓が規則正しく打つように、揺れは**一定の周期**であるべきです。最初はメトロノームに合わせて「上げ-下げ-上げ-下げ」と拍を数えながら練習しましょう。

そして今日の2つ目のミッション。昨日は第1ボックスの♭5だけを見ましたが、実は♭5は**<mark>ネック全体、すべてのボックスに隠れています</mark>。** どこで即興していても、「このあたりのブルーノートはどこだっけ？」とすぐに見つけられる必要があります。そこで今日は、ネック全体の♭5マップを覚え、その♭5たちに昨日学んだ**ベンドやスライドで滑り込み**、さらにヴィブラートを乗せて「表現する」練習をします。

## ② 視覚資料

ネック全体の♭5マップです。根音A（青いルート）の合間に、**<mark>♭5＝E♭（紫で強調）</mark>**が各弦に1つずつ配置されています。どのボックスにいても、一番近い紫の点がそこでのブルーノートです。

```json
{
  "id": "m1.w4.d2.b5_neck_map_all_blocks",
  "type": "scale_shape",
  "meta": {
    "title": "A blues b5 map across the whole neck (all 5 boxes)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 13,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 6, "fret": 17, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 6, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 13, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 8, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 16, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 17, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

ヴィブラート表現のフレーズです。1小節目は<mark>4度から♭5へスライドで入り、ヴィブラートでブルーノートを歌わせ</mark>、♭3に着地してまたヴィブラート。2小節目は全音ベンドのあと着地音にヴィブラートを乗せます。ヴィブラートはすべて「遅く広く」です。

```json
{
  "id": "m1.w4.d2.vibrato_expression_phrase",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Vibrato expression — slide into b5 + wide slow vibrato on landings",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 6, "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "quarter", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 70）——ヴィブラート単独トレーニング**
スケールはいったん置いておいて、ヴィブラートだけに集中します。3弦5フレット（♭3＝C）を薬指で押さえ、メトロノーム70に合わせて手首をドアノブを回すように**「上げ（クリック）-下げ（クリック）」**を4分音符の周期で揺らします。慣れたら8分音符にして速度を2倍に。幅も狭い→広いへと変えてみましょう。指ではなく**<mark>手首が回っているか</mark>**、常に確認してください。

**10〜20分・頭のトレーニング（ネック全体の♭5マッピング）**
上のネックマップを見ながら、6弦から1弦まで、<mark>各弦の♭5（紫の点）を1か所ずつ</mark>順番に押さえていきます。押さえるたびに「ここがこの区域のブルーノート」と場所を刻み込みます。そのあとは目を閉じて、まず5弦6フレット・3弦8フレット（第1ボックスの2か所）から、余裕があれば他の弦まで。5か所以上を目を閉じて押さえられたら合格です。

```json
{
  "id": "m1.w4.d2.b5_neck_map_all_blocks",
  "type": "scale_shape",
  "meta": {
    "title": "A blues b5 map across the whole neck (all 5 boxes)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 70
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 13,
    "dots": [
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 6, "fret": 17, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 6, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 12, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 13, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 8, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 3, "fret": 14, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 16, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 11, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 1, "fret": 17, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**20〜40分・実戦即興（Am7ワンコードバッキング／65〜70 BPM）——スライド/ベンドで♭5を表現**
バッキングを流してルール通りに：**<mark>♭5には必ずスライドかベンドで「入って」表現し</mark>、着地音には必ず<mark>遅く広いヴィブラートをかける</mark>。** 今日は平坦にプツンと切れる音を一つも作らないでください。フレーズの終わりは♭3（C）か根音（A）に着地→手首ヴィブラートで歌わせます。上のフレーズを骨組みにして、少しずつ変形してみましょう。

```json
{
  "id": "m1.w4.d2.vibrato_expression_phrase",
  "type": "tab",
  "meta": {
    "notation": "staff+tab",
    "title": "Vibrato expression — slide into b5 + wide slow vibrato on landings",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 70
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "blues_phrasing",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 5, "duration": "eighth", "technique": "slide", "slideToFret": 6, "label": "4>b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 6, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "quarter", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "quarter", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

**40〜50分・録音・フィードバック（推奨）**
30秒録音して聴き直します。チェック項目：①<mark>ヴィブラートの揺れが**一定の周期**できれいか</mark>、それとも怯えたようにバラバラか。②着地音のたびにヴィブラートがかかっていたか、それともただ切れていたか。③♭5がスライドやベンドで自然に入っていたか。必要なら再生速度を落として、ヴィブラートの周期を耳で拡大してみましょう。

**今日の完了ライン：** メトロノーム70で、手首ヴィブラートを一定周期で4分音符・8分音符の両方でかけられる。ネック全体の♭5を5か所以上、目を閉じて押さえられる。バッキングの上で「スライド/ベンド→♭5→着地ヴィブラート」のコンボを4回以上決める。

## ④ ヒント・よくある間違い

- **指先だけでプルプル震わせる「怯えたヴィブラート」。** 指先だけで震わせると、幅も出ないし周期も不規則になります。必ず**手首の回転**で。前腕と手首が一つのかたまりになってドアノブを回すイメージを持ちましょう。
- **ヴィブラートの周期がバラバラ。** ヴィブラートは音程の規則的な波です。最初は必ずメトロノームに合わせて「上げ-下げ」を拍で数えながら。周期が一定になってから、自由に崩していきましょう。
- **♭5をただ「ポンと」押さえてしまう。** ♭5は入り方が命です。スライドで滑り込むか、半音ベンドで押し上げて「入る」からこそブルージーに聞こえます。何もせずポンと押さえると、ただの間違った音のように聞こえてしまいます。
- **ネックマップを丸ごと覚えようとして疲れてしまう。** 今日は第1ボックスの2か所（5弦6フレット、3弦8フレット）だけを確実に。残りの弦は「ああ、あのあたりだな」くらい目に馴染ませておけば、W5以降で自然と身についていきます。
