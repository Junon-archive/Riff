---
title: "4音シーケンス＋コード3度着地：Am7のC、D7のF#"
dayKey: "m3.w9.d3"
estMinutes: 50
i18nKey: "lesson.m3.w9.d3"
lang: ja
---

# Day 3 — ドリアンの魔法：D7の3度（F#）はそのままドリアンの色彩音

## ① 理論・説明

今日なぜこれをやるかというと。ここまでずっとAm7一発の上だけで遊んできましたよね。でもドリアンが本当に輝く瞬間は、コードが**Am7 → D7 → Am7**と動くときなんです。今日はこの進行を紹介しながら、皆さんがゾクッとするような事実を1つお伝えします。

まずは4音シーケンスから。昨日は3度で弾いたので、今日は**<mark>4音（4-note）</mark>**です。スケールを4音ずつまとめて、1段ずつずらしていきます。

- A-B-C-D / B-C-D-E / **C-D-E-F#** / **D-E-F#-G** …

3度が「うねる跳躍」なら、4音は「転がる波」です。指が細かく転がりながらスケール全体を弾いていくと、3つ目・4つ目のまとまりから**F#（長6度）**が自然と波の上に浮かび上がってきます。今日のウォームアップはこれで手を転がします。

さて、ここからが今日の本当の核心です。バッキングが**Am7 → D7**に変わるとき、それぞれのコードの3度を見てみましょう。

- **<mark>Am7の3度＝C</mark>**（A-C-E-Gのうち、C＝b3、マイナーの3度）
- **<mark>D7の3度＝F#</mark>**（D-F#-A-Cのうち、F#）

見えましたか？**<mark>D7の3度がまさにF#</mark>**なんです。そしてF#は、今週ずっと大切にしてきた**Aドリアンの長6度（色彩音）**そのもの。つまり、コードがD7に変わった瞬間、皆さんがただ**<mark>F#に着地</mark>**するだけで — それがD7の3度ターゲティングであると同時に、**同時に**ドリアンの色彩が爆発する瞬間になるんです。一石二鳥が1つの音の中で出会う。これがドリアンがマイナー進行の中であんなに「洗練されて」聞こえる秘密です。

まとめると、今日の文法はこうです。**Am7区間ではC（b3）に着地、<mark>D7区間ではF#（6度＝D7の3度）に着地</mark>。**コードが変わったら着地音も変わる — 先週ガイドトーンで学んだあの感覚を、今回はモードの色彩と結びつけていきます。

## ② 視覚資料

まず、**<mark>Aドリアン4音シーケンス</mark>**（2小節、8分音符）です。6弦から転がるように上がっていきます。3つ目・4つ目のまとまりで**F#（6度、色彩音）**が波の上に浮かび上がります（ハイライト）。

```json
{
  "id": "m3.w9.d3.four_note_sequence_dorian",
  "type": "tab",
  "meta": {
    "title": "A Dorian 4-note sequence (F# rises in groups 3-4)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" }
      ]}
    ]
  }
}
```

次に、**<mark>Am7とD7の着地3度マップ</mark>**です。ハイライトは2種類：**C（Am7の3度）**は緑、**F#（D7の3度＝ドリアンの色彩）**は黄。F#がどうやって2つの役割を兼ねているか、目で確かめてください。根音AとDも参考に表示しています。

```json
{
  "id": "m3.w9.d3.am7_d7_target_thirds",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Target 3rds: Am7-b3(C) and D7-3(F#) which is the Dorian color",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 5, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 6, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "D7 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

3つ目、**<mark>コードの変化＝着地の変化</mark>**を体に刻み込む4小節ラインです。Am7の2小節は**C（b3）**に、D7の2小節は**F#（6度）**に着地します。着地音はそれぞれビブラートで歌わせてください。

```json
{
  "id": "m3.w9.d3.chord_change_targeting",
  "type": "tab",
  "meta": {
    "title": "Am7 lands on C(b3), D7 lands on F#(6) - target the changes",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 80）— 4音シーケンス**
メトロノーム80に合わせて、最初の4音シーケンスを転がします。指が細かく転がる感覚を保ちながら、F#（5弦9フレット）が<mark>波の上に浮かび上がるときに少しはっきりと</mark>。往復（上がって同じパターンで下りる）までやると、手がぐっとほぐれます。

```json
{
  "id": "m3.w9.d3.four_note_sequence_dorian",
  "type": "tab",
  "meta": {
    "title": "A Dorian 4-note sequence (F# rises in groups 3-4)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "4note_sequence",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 7, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 9, "duration": "eighth", "label": "6", "role": "color", "highlight": true },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" }
      ]}
    ]
  }
}
```

**10〜20分・頭のトレーニング（着地3度のマッピング）**
2つ目のマップを見ながら、**Am7のC**3か所と**D7のF#**2か所を交互に押さえます。「Am7ならC、D7ならF#」と口に出しながら。最後は目をつむって「今D7！→一番近いF#」を3秒以内に押さえられれば合格です。**<mark>コード名→着地音</mark>**が反射になるようにするのがポイントです。

```json
{
  "id": "m3.w9.d3.am7_d7_target_thirds",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Target 3rds: Am7-b3(C) and D7-3(F#) which is the Dorian color",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 5,
    "dots": [
      { "string": 4, "fret": 7, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 5, "label": "Am7 R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 6, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 1, "fret": 8, "label": "Am7-b3(C)", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "label": "D7 R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 7, "label": "D7-3(F#)=6", "role": "color", "highlight": true },
      { "string": 5, "fret": 9, "label": "D7-3(F#)=6", "role": "color", "highlight": true }
    ]
  }
}
```

**20〜40分・実戦即興（Am7-D7ヴァンプ／BPM 76〜80）**
「Am7 D7 vamp backing track」を流します（2小節ずつ行き来）。ミッションはただ1つ、**<mark>コードが変わるたびにそのコードの3度に着地する</mark>**こと。Am7区間の終わりはC、D7区間の終わりはF#。3つ目の4小節ラインをそのまま乗せてスタートしてもOKです。間は自由に埋めつつ、**着地音だけは必ず**コードに合わせてください。

```json
{
  "id": "m3.w9.d3.chord_change_targeting",
  "type": "tab",
  "meta": {
    "title": "Am7 lands on C(b3), D7 lands on F#(6) - target the changes",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A Dorian (Am7 - D7)",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 9, "duration": "eighth", "label": "2", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "role": "scale" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 3, "notes": [
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 10, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
      ]},
      { "measure": 4, "notes": [
        { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
        { "string": 3, "fret": 9, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 2, "fret": 8, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 2, "fret": 7, "duration": "half", "technique": "vibrato", "label": "6", "role": "color", "highlight": true }
      ]}
    ]
  }
}
```

**40〜50分・録音・フィードバック（推奨）**
最後のジャム30秒を録音します。聴き直してチェックするのは2つ。**<mark>①D7に変わる瞬間、F#に着地できていたか</mark>／②そのとき音が「キラッ」と明るくなったか。**再生速度を0.75倍に落として、コードチェンジと着地のタイミングが重なっているか確認しましょう。

**今日の完了基準：**4音シーケンスを80で往復。「コード名→着地音（C/F#）」を3秒以内に押さえる。Am7-D7のバッキングでコードごとの3度着地を6回以上成功させる。

## ④ ヒント・よくある間違い

- **コードが変わっても着地音を変えない。**一番多い間違いです。Am7でもD7でもずっとCにだけ降りていると、D7区間が平坦になってしまいます。**D7＝F#**を必ず覚えておきましょう。この切り替えが今日のすべてです。
- **F#を「怖い」と感じてしまう。**F#はAm7の上では色彩音（長6度）ですが、D7の上ではそのままコードトーン（3度）です。つまりD7区間では、F#が**一番安全な音**なんです。怖がらずに、D7が来たらF#にどっしり寄りかかりましょう。
- **4音を速くしすぎてしまう。**4音は細かいので、80でも手がもつれやすいです。もつれたら70に落として、**1音も潰さず**転がすことを優先しましょう。潰れた4音は何の役にも立ちません。
- **着地ばかり気にして、間がブツブツになってしまう。**着地音は目的地であって、そこまでの道のり（間の音）も滑らかである必要があります。着地の直前の1〜2音は、着地音のすぐ隣（順次進行）でつなげて、自然に滑り込むようにしましょう。
