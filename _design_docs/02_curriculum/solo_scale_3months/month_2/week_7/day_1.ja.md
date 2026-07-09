---
title: "Amコードトーン（A・C・E）指板全域マッピング — 3度（C）を目に焼き付ける"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
lang: ja
---

# Day 1 — Amの A・C・E が指板のどこに隠れているか「地図」を描く

## ① 理論・説明

今日なぜこれをやるかというと、そろそろ白状する時期なんです。この6週間でペンタトニックのボックスは手に馴染んできましたよね？でも即興が相変わらず「ボックスの中だけ」で遊んでいる感じがするなら、理由は一つです。**今鳴っているコードの本当の骨格音が、指板のどこにあるか知らないから**なんです。

コードは結局、3つの音が骨格です。Amなら**A（根音）・C（♭3）・E（5度）**。この3つの音を「コードトーン」と呼びます。バッキングでAmが鳴った瞬間、この3音はどこで押さえても必ずきれいにハマります。問題は、私たちがこれをたった一箇所（ボックス1）でしか知らないこと。だから今日はA・C・Eを**6弦から1弦まで、ネック全体に**広げて地図を描いていきます。

まず一つ誤解を解いておきますね。これはスイープピッキングの速弾き練習では**ありません。**速く弾き抜くのが目標ではなく、「ここを押さえたらC、あそこもC」と**位置を認識する（マッピングする）頭のトレーニング**です。だから今日はずっとBPMがとても遅いんです。スピードは、このコースで一度も主役になったことがありません。

そして今日の本当の主役は**C（♭3）**です。3度はコードの表情を決める音です。AとEはメジャーでもマイナーでも変わりませんが、Cがあるからこそ「マイナー」になるんですね。だからCをこれから**着地の候補地（ターゲット）**として緑でマークしておきます。目を閉じてもCの3か所を押さえられたら、今日は大成功です。

## ② 視覚資料

Amコードトーン（A・C・E）をネック全体（0〜12フレット）にマッピングした地図です。緑でハイライトされているのが3度の**C**、これが今日の着地ターゲットです。

```json
{
  "id": "m2.w7.d1.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (A-C-E) across the neck, 3rd (C) highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 66
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

今度は5フレットポジション（第1ボックスの場所）でA・C・Eだけを選び、**1-3-5アルペジオ**で上行・下行してみましょう。3度（C）はターゲットとして強調してあります。3度同士を飛び越えるスキップの感覚を味わってみてください。

```json
{
  "id": "m2.w7.d1.am_arpeggio_1_3_5",
  "type": "tab",
  "meta": {
    "title": "Am arpeggio 1-3-5 (A -> C -> E), 5th position",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 66
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "arpeggio_1-3-5",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 66）**
メトロノーム66に合わせて、上の1-3-5アルペジオを8分音符で上行→下行を繰り返します。1クリックに8分音符2つ（「タン・タ」）がきっちり収まるように。目標はスピードではなく、**一音ずつ押さえながら頭の中で度数（R-3-5）を唱えること**。声を出さず口を動かすだけでも大丈夫です。

**10〜20分・頭のトレーニング（今日のターゲット＝C／♭3）**
メトロノームを止めて、地図から**C（♭3）だけ**を見つけて押さえます。最低3か所：5弦3フレット、3弦5フレット、1弦8フレット。押さえるたびに声に出して「シー！」と呼びましょう。慣れてきたら目を閉じてランダムに「C、次のC、次のC」——3秒以内に別のポジションのCへ手が動けば合格です。余裕があれば、E（5度）の3か所も同じ方法でやってみましょう。

```json
{
  "id": "m2.w7.d1.am_chord_tone_map",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Am chord tones (A-C-E) across the neck, 3rd (C) highlighted",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A minor",
    "tempoBpm": 66
  },
  "fretboard": {
    "startFret": 0,
    "fretSpan": 12,
    "dots": [
      { "string": 6, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 6, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 7, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 10, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 2, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 9, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 10, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

**20〜40分・実戦感覚 — Amワンコードバッキング（BPM 66〜70）**
「Am backing track slow」で検索して何か一つ流します。ルールは一つだけ。**A・C・Eの3音だけを使う。**経過音（ペンタの D・G）は今日は禁止です。3音だけで単調に遊ぶのではなく、止まりたくなったら必ず**Cに着地**。指板のあちこち、違うポジションのCを選びながら着地してみましょう。

**40〜50分・録音・フィードバック（推奨）**
手元の録音ツール（スマホのボイスメモでもOK）でジャムを30秒録音します。聴き直して、チェックするのは一つだけ。**着地した音は本当にCだったか？**曖昧なら再生速度を落として、最後の音を指板でもう一度確認しましょう。終わりの音がぼやけて切れていたら、次はもう少し長く押さえて響かせてみてください。

**今日の完了目安：**BPM 66で1-3-5アルペジオの上行・下行を途切れず、そしてC（♭3）の3ポジションを目を閉じて押さえられること。

## ④ ヒント・よくある間違い

- **ボックスの慣性で戻ってしまう。**即興中に無意識でペンタの上行下行に逃げてしまったら、それは「3音だけ」ルールが崩れたサインです。窮屈に感じるのが正常で、その制約こそが耳をコードトーンに結びつけてくれます。
- **3度（C）をただの通過音のように流してしまう。**Cは、Amを「マイナーらしく」する音です。着地するときは少し強く、少し長めに。今日から耳に刻み込んでおくと、今週ずっと楽になります。
- **スピードへの欲。**66が退屈なほど遅く感じても、上げないでください。これは速弾きではなく地図描きです。位置があやふやなまま速くすると、ただ手癖が固まるだけです。
- **一つのポジションに居座ってしまう。**楽な5フレットだけで遊ばず、意識的に2フレット付近・10フレット付近のCにも手を伸ばしてみましょう。地図が広いほど、即興は自由になります。
