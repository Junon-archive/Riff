---
title: "ドミナント7 — b7を足すと『解決したい』緊張が生まれる"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — b7ひとつでコードに「押し引きの力」を入れる

## ① 理論・説明

昨日まで3度で明るさ（メジャー）と暗さ（マイナー）を分けました。今日は新しい軸、**7度**を扱います。正確には**b7（短7度）**。メジャーコードにb7を1つ足すと、**ドミナント7（例：G7）**になります。名前は大げさですが、やることは昨日と同じ「音を1つ乗せる」だけです。

ドミナント7の正体は一言で**緊張**です。じっと落ち着いているメジャーと違い、b7が入ると「どこかへ行きたい、早く解決したい」という押し引きの力が生まれます。ブルースギターのあのうごめく感じ、ファンクの粘り、ジャズのスリル — 全部このb7 1音から来ています。不思議でしょう？ 音1つがコードに「行きたい気持ち」を植えるんです。

指板では、昨日のGメジャーの**4弦5フレット（R=G）**を**3フレット（b7=F）**へ下げるとG7になります。3度（3弦4フレット、B）はそのまま、4弦だけ2フレット下へ。さあ、これで今週の絵がきれいに整います — **3弦＝3度（明暗）スイッチ、4弦＝7度（緊張）スイッチ。** たった2弦、2つのスイッチ。明日はこの2つを合わせて4つのコードを自在に作ります。今日は4弦のスイッチ1つだけ、確実に手に馴染ませて。

## ② ビジュアル

Gメジャーから4弦だけ5→3フレットに下げた**G7（Eフォーム）**。緑が今日新しく入った**b7（F）**、緊張の正体です。

```json
{
  "id": "m1.w1.d3.g7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "G7 — 6th-string root (E-form dominant)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**例1 — b7追加ライン。** コードの骨組み（R・3・5）を押さえたあと、最後に**b7（F）**を足します。そのb7が入る瞬間、音が「完結」から「未完・次が気になる」に変わるのを聴いてください。

```json
{
  "id": "m1.w1.d3.add_b7_line",
  "type": "tab",
  "meta": {
    "title": "Add the b7 — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 72,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 2, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

▶ **BPM 72。** 「ルート-3度-5度」までは安定、最後の**b7（F）**で少し「傾く」感覚をつかんで。4回反復。

**例2 — メジャー → 7切替コンピング。** 1小節G、2小節G7。示された音ごとに**コード全体をストローク**しますが、動くのは**4弦の指1本（5→3フレット）だけ**。その1フレットが安定を緊張に変えます。

```json
{
  "id": "m1.w1.d3.maj_dom7_comp",
  "type": "tab",
  "meta": {
    "title": "G to G7 switch comp — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "G",
    "tempoBpm": 78,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 5, "role": "root", "label": "R" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 5, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
        { "string": 4, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 78、4回反復。** 1小節の安定したG → 2小節のうずうずするG7。4弦の指だけ5→3フレットに下がります。G7の「早くどこかへ行きたい」感じを楽しんで。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
G ↔ G7 を4拍ごとに交互に。4弦の指だけ5フレット↔3フレットに動かし、3度（3弦4フレット）は固定。両コードとも6弦きれいに鳴るか確認。

**10〜20分 · 脳トレ（今日のターゲット＝b7）**
**例1**を押さえてR・3・5・b7を声に出し、4弦3フレットの**b7（F）**だけを何度もピンポイントで。目を閉じてb7に着地できれば合格。これが今週の「緊張スイッチ」です。

**20〜40分 · 実戦伴奏（例2コンピング / 75〜85 BPM）**
**例2をBPM 78で4回反復** — 1小節G、2小節G7。慣れたらルートだけ5弦に移して（例：C ↔ C7）同じ切替を応用。ブルースのバッキングがあれば上に重ねてもOK。b7の押し引きを体で感じるのが目標。

**40〜50分 · 録音・セルフフィードバック（推奨）**
G ↔ G7 の切替を30秒録音。チェック：G7で**b7が死なずはっきり**鳴るか、切替が潰れないか。

**今日の完了基準：** 4弦の5↔3フレットだけでG ↔ G7を切り替え、目を閉じてb7を押さえられる。

## ④ ヒント / よくあるミス

- **b7とRを混同。** 4弦5フレットはR（G）、3フレットはb7（F）。混乱したら「緊張が欲しければ下げる（5→3）」と覚えて。
- **3度も一緒に下げる。** 今日は4弦だけ。3弦（3度）はそのままにして「メジャー系の7」に。3度まで下げると、それは明日のm7です。
- **緊張を『間違った音』と誤解。** G7の「終わっていない」感じはバグではなく機能。その未完結が次のコードへ引っ張る力です。
- **パームミュートなしで平坦。** 例2のゴーストヒットを活かすとグルーヴが生きます。
