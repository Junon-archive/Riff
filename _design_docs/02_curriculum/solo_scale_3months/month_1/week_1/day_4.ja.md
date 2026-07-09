---
title: "Amワンコードバッキングの上で根音／♭3にターゲット着地"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
lang: ja
---

# Day 4 — 今週のゴール：「着地」するソロ

## ① 理論・説明

今日なぜこれをやるかというと。この3日間、シーケンスで手を鍛えてきた本当の理由が、今日明らかになります。シーケンスは目的ではなく**滑走路**でした。滑走路をどれだけ速く走っても、着陸できなければそれは飛行とは呼べませんよね。今日はいよいよ**着陸（着地）**を学びます。これがこのカリキュラム3か月間全体の心臓部です。

核となる概念を一つだけ、しっかり押さえましょう。バッキングでAmコードが鳴っているとき、そのコードを構成する音は**A（根音）・C（♭3）・E（5）**の3つです。この3つの音を私たちは「コードトーン」と呼びます。ソロがダサく聞こえるかプロっぽく聞こえるかは、たった一つで決まります。**フレーズを終えるときにコードトーンに着地するか、どこかでただ止まるか。**スケールの音を並べ立てて、最後をふわっと流すとアマチュア。最後をCかAにカチッと引っかけてビブラートで歌うとプロ。本当にこの違い一つなんです。

```json
{
  "id": "m1.w1.d4.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) inside Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

その中でも、**C（♭3）に着地することが最強の武器**です。根音Aに着地すると安定はしますが、ちょっと予定調和。♭3であるCに着地すると、「あ、これがマイナーなんだ」という切ない色がぐっと立ち上がります。この3日間ずっとCに緑の印を灯しておいたのは、まさに今日のためでした。さあ、そのCを、流れるソロの中で正確につかみ取り、着地させていきましょう。

## ② 視覚資料

Amのコードトーン地図です。スケール5音のうち、**コードトーン3つ（R・♭3・5）だけ**を抜き出して表示しています。この3か所があなたの「着陸地点」です。特に緑のC（♭3）を狙ってください。

```json
{
  "id": "m1.w1.d4.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (R / b3 / 5) inside Box 1",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

着地リックの例です。1小節目は根音Aに、2小節目は♭3であるCに着地します。最後の着地音にはビブラートをかけ、2小節目はスライドでターゲットへ滑り込みます。

```json
{
  "id": "m1.w1.d4.target_landing_lick",
  "type": "tab",
  "meta": {
    "title": "Target-landing lick over Am (resolve on R and b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 75）**
今週のシーケンス（4連音・3度）を上行・下行それぞれ1回ずつ、テンポよく流します。手はもうすべて覚えているはずです。今日はウォームアップが短くても大丈夫。本当の練習はこのあとです。

**10〜20分・頭のトレーニング（今日のターゲット＝C・A、着地の照準）**
メトロノームなしで、上の着地リックをゆっくり手に馴染ませます。特に2小節目の最後——3弦7フレット（D）から5フレット（C）へスライドして入り、ビブラートで歌うあの動き。この「スライド→着地→ビブラート」の3段コンボが今日の宝物です。20回繰り返して体に刻み込みましょう。

```json
{
  "id": "m1.w1.d4.target_landing_lick",
  "type": "tab",
  "meta": {
    "title": "Target-landing lick over Am (resolve on R and b3)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 75
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

**20〜40分・実戦感覚 — ワンコード即興（Amバッキング／BPM 70〜80）**
今日のメインです。バッキングを流して、ルールは：**4小節ごとに必ずコードトーン（CまたはA）に着地し、ビブラートで締めくくる。**途中はシーケンスでもフリーでも自由ですが、終わりは必ず着地。最初は根音Aへの着地が楽に感じられるはずです。慣れてきたら、半分以上をC（♭3）で着地してみましょう——音が一気に切なくなる瞬間を感じられたら成功です。「問いかけと答え（コール＆レスポンス）」のように、一つのフレーズは開いたままにして、次のフレーズでCに閉じてみてください。

**40〜50分・録音・フィードバック（推奨）**
今日はぜひ録音してください。今週の集大成ですから。聴き直しながらチェック：①フレーズの終わりがコードトーンに引っかかったか、それとも流れてしまったか。②着地音のビブラートは揺れが均一で美しいか、手が震えているように不自然か。③バッキングのコード感と自分の着地音が「ぴったり合う」瞬間があったか。その瞬間があったなら、おめでとうございます。即興の扉を初めて開いたということです。

**今日の完了の目安（＝Week 1卒業基準）：**Amバッキングの上で、フレーズをC（♭3）またはA（根音）に意図的に着地させることに4回以上成功。着地音にはビブラートをかけて締めくくること。

## ④ ヒント・よくある間違い

- **着地音をすぐに離してしまう。**今日いちばんの落とし穴です。着地したら、最低でも1拍は留まりながらビブラートで歌いましょう。着地の力は「留まること」から生まれます。かすめて通り過ぎたら、それは着地ではなく通過です。
- **ビブラートを手首ではなく指の震えでかけてしまう。**ビブラートは指を震わせるのではなく、フレットを押さえたまま手首をほんの少し回転させて、音程をわずかに揺らすものです。ドアノブを回すように。今週は「ゆっくり大きい」ビブラートを一つだけ、しっかり身につけましょう。
- **スライドの着地音程がぼやける。**3弦7→5のスライドは、目標フレット（5）でぴたりと止まってこそCが生きてきます。行き過ぎても届かなくても、着地が曖昧になってしまいます。到着地点は目ではなく耳で確認しましょう。
- **毎回、根音Aにばかり着地してしまう。**楽だからついAに逃げてしまいますが、C（♭3）に着地してこそマイナーの色を学べます。今日の目標は「怖いCにあえて着地する」こと。その違和感を乗り越えれば、それが実力になります。
