---
title: "ガイドトーンラインをつなぐ——F→B→E最短移動シーケンス"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
lang: ja
---

# Day 2 — 三つの音を「線」でつなぐ：F→B→Eガイドトーンライン

## ① 理論・説明

今日なぜこれをやるかというと。昨日、F・B・Eという三つの音の位置は手に馴染みましたよね。でも三つの音を別々の「点」としてだけ押さえていると、バッキングの上では音楽というより「押さえるテスト」みたいに聞こえてしまいます。ポツン…ポツン…ポツン…と。今日はこの三つの点を一本の**線（ライン）**でつなぎます。これが本物のガイドトーンラインです。

秘密は、昨日の「家」の位置をなぜあんな風に組んだのか、というところにあります。もう一度見てみましょう。

- F＝4弦3フレット
- B＝3弦4フレット
- E＝4弦2フレット

ここに魔法が見えますか？**F（4弦3フレット）→E（4弦2フレット）**は、同じ弦でたった**1フレット**の違いです。半音！だからG7からCmaj7に移るとき、Fをちょっと滑らせるようにEへ下げるだけでいいんです。これがあの有名な**F→E解決**——G7の7度（F）がCmaj7の3度（E）へ半音下がる、ジャズで最も美しいとされるボイスリーディングです。

そして昨日お話しした心臓部、**B→Eリーディング**。G7で3度のBを押さえると、耳はもう「次はEだよね？」と期待し始めます。その期待をぴったりEで満たしてあげると、聴いている人の体に鳥肌が立ちます。今日のラインは、この二つの流れ（F→Eの半音解決、B→Eのリーディング）を手と耳に同時に刻み込むのが目標です。

アプローチは私たちのカリキュラムの哲学そのままです。**上行下行の単純暗記は禁止。**代わりに3度インターバルと短いつなぎの音でラインを作りつつ、**各コードの小節の着地音は必ずそのコードの3度**で終わらせます。特に小節が変わる瞬間（コードチェンジ）に3度が鳴るよう、タイミングを設計してあります。

## ② 視覚資料

まずウォームアップ用の**ダイアトニック3度シーケンス**です。Cメジャーを3度ずつ組んで登っていくのですが、その中でガイドトーンのB・E・Fが自然に顔を出します。赤くハイライトされた音が私たちのターゲットです。

```json
{
  "id": "m2.w8.d2.third_interval_warmup",
  "type": "tab",
  "meta": {
    "title": "Diatonic 3rds warmup surfacing guide tones (C major)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "3rd_interval",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 3, "fret": 0, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 0, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "eighth", "label": "A", "role": "scale" },
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "G7-3(B)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" }
      ]},
      { "measure": 2, "notes": [
        { "string": 2, "fret": 1, "duration": "eighth", "label": "C", "role": "scale" },
        { "string": 1, "fret": 0, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 3, "duration": "eighth", "label": "D", "role": "scale" },
        { "string": 1, "fret": 1, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 2, "fret": 5, "duration": "eighth", "label": "Cmaj7-3(E)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 3, "duration": "eighth", "label": "G", "role": "scale" },
        { "string": 2, "fret": 6, "duration": "eighth", "label": "Dm7-3(F)", "highlight": true, "role": "target" },
        { "string": 1, "fret": 5, "duration": "eighth", "label": "A", "role": "scale" }
      ]}
    ]
  }
}
```

さて今日の本題、**ガイドトーンライン**です。三小節＝三つのコード。各小節の**1拍目（コードチェンジの瞬間）にそのコードの3度が着地**し、短いつなぎの音で次の3度までつながります。特に2小節目最後のF（4弦3フレット）が3小節目1拍目のE（4弦2フレット）へ**半音解決**するのを感じてみてください。

```json
{
  "id": "m2.w8.d2.guide_tone_line",
  "type": "tab",
  "meta": {
    "title": "ii-V-I guide tone line (Dm7 F -> G7 B -> Cmaj7 E)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C major (ii-V-I)",
    "tempoBpm": 76
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "guide_tone_3rds",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 4, "fret": 3, "duration": "quarter", "label": "Dm7-3(F)", "target": true, "highlight": true, "role": "target" },
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "chord_tone" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "D", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "role": "passing" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 4, "duration": "quarter", "label": "G7-3(B)", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "G", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 2, "duration": "quarter", "label": "A", "role": "scale" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "F", "role": "chord_tone" }
      ]},
      { "measure": 3, "notes": [
        { "string": 4, "fret": 2, "duration": "half", "technique": "vibrato", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" },
        { "string": 2, "fret": 1, "duration": "quarter", "label": "C", "isRoot": true, "role": "root" },
        { "string": 1, "fret": 0, "duration": "quarter", "label": "Cmaj7-3(E)", "target": true, "highlight": true, "role": "target" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 76）——3度シーケンス**
上の`3rd_interval`ウォームアップを、メトロノーム76で8分音符で弾きます。3度間隔の手の形（下の弦↔上の弦の行き来）を体に馴染ませながら、赤い音（B・E・F）が出てきたときだけ少し強調して押さえましょう。「3度で動いているのに、その中にガイドトーンが隠れている」ことを耳で確認する時間です。

**10〜20分・頭のトレーニング（F→B→Eの最短経路を見つける）**
メトロノームを止めて、本題のラインの**着地音三つだけ**をつなげてみます。F（4弦3フレット）→B（3弦4フレット）→E（4弦2フレット）。手がほとんど動かないですよね？三つの音がひとつかみの範囲に収まっています。特に**F→Eは同じ弦で1フレット**だということを指先で確認しましょう。目を閉じてこの三音だけを順番にすっと押さえられたら合格です。

**20〜40分・実戦即興（Dm7-G7-Cmaj7バッキング／BPM 72〜76）**
バッキングを流し、本題のラインをそのまま何度か弾いて体に馴染ませます。慣れてきたら、**つなぎの音（間の音）だけを少しずつ変えて、着地音のF・B・Eは絶対に変えない**ようにします。たとえば1小節目の途中を別のDm7の音で埋めても、小節の終わり→次の小節の1拍目は必ず3度に着地させます。「骨組みはF・B・E、肉付けは自由」が今日の即興ルールです。

**40〜50分・録音・フィードバック（推奨）**
30秒録音して再生します。チェックは二つ。①コードが変わる瞬間に3度が**きちんと鳴っていたか**、半拍遅れていなかったか。②2小節目のFが3小節目のEに移るとき、**半音がなめらかに滑ったか**、それともブツッと切れたか。必要なら再生速度を落として、そのつなぎ目を耳で拡大してみましょう。

**今日の完了基準：**本題のガイドトーンラインをBPM 76で途切れずに3小節通し弾きできること。F→B→Eの三つの着地音を目を閉じてつなげられること。バッキングの上で「つなぎの音は変える、着地の3度は固定」の即興を4回以上行うこと。

## ④ ヒント・よくある間違い

- **着地音まで変えてしまう。** 即興のつもりでF・B・Eを揺らすと、ラインが崩れてしまいます。今日の約束は「肉は自由、骨（3度）は固定」。骨がぐらつくと、音楽は立っていられません。
- **F→Eの半音をブツッと切ってしまう。** 同じ弦で1フレットなので、指を完全に離さず、重心だけを移すようにつなげてみてください。半音解決が滑るように聞こえたら、それがプロのサウンドです。
- **Bのところで手が止まってしまう。** 3弦4フレットのBは薬指であらかじめ準備しておきましょう。G7に変わる直前に指をその上に「置いておく」と、コードチェンジの瞬間に遅れません。
- **ウォームアップを適当に飛ばしてしまう。** 3度シーケンスはただの準備運動ではなく、今日のラインの手の形をあらかじめ敷いておく下ごしらえです。3度の間隔が手に馴染んでこそ、ガイドトーン同士のつなぎの音が自然になります。
