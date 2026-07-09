---
title: "m7、そしてMaj7登場 — 3弦でのb7 vs 7、半音の対決"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — たった半音、7とMaj7が分かれる

## ① 理論・説明

昨日2つのスイッチ（2弦の3度、3弦の7度）を学びました。今日はまず両方下げて**Cm7**（b3＋b7）を完成させ、今週の新しい客**Maj7**を招きます。名前が似ていて紛らわしいでしょう？ 驚くことに、場所はたった1フレット差です。

カギはすべて**3弦**にあります。この弦が7度の「三差路」だからです：

- **3弦5フレット＝R**（オクターブルート）→ ただのメジャー/マイナー
- **3弦4フレット＝7**（長7度）→ **Maj7**
- **3弦3フレット＝b7**（短7度）→ **ドミナント7**

```json
{
  "id": "m1.w2.d3.cmaj7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

つまり**b7（3フレット）とMaj7の7（4フレット）はちょうど1フレット、半音差**。でもこの半分のマスがまるで違う感情を作ります。b7（ドミナント）は「早く解決したい」とやきもきする緊張、Maj7の7は「浮遊した、幻想的で洗練された」未完。シティポップの切なさ、ジャズバラードのあのぼんやり霞んだ色 — 全部このMaj7 1つから来ています。半音差が最初は微妙に聞こえても大丈夫。今日はこの2つを3弦で並べて押さえ、その半音が作る感情の違いを耳でしっかり聞き分けます。

## ② ビジュアル

まず両スイッチを下げた**Cm7（Aフォーム）** — 緑がb3とb7です。

```json
{
  "id": "m1.w2.d3.cm7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

今日の新しいコード**Cmaj7（Aフォーム）** — 3弦がb7（3フレット）ではなく**7（4フレット）**。ちょうど1フレット上です（緑＝7）。

```json
{
  "id": "m1.w2.d3.cmaj7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**例1 — b7 vs 7 半音対比ライン（3弦）。** 3弦の3フレット（b7）と4フレット（7）を並べて。この1フレットが作る色を耳に刻んで。

```json
{
  "id": "m1.w2.d3.b7_vs_7_line",
  "type": "tab",
  "meta": { "title": "b7 vs 7 on 3rd string — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 72。** 「ルート → b7（緊張）→ 7（幻想）→ ルート」。3フレットから4フレットへ1つ上がるとき、音が「解決したい」から「浮遊した洗練」へ変わるのをつかんで。4回反復。

**例2 — C7 → Cmaj7スイッチコンピング（3弦）。** 1小節C7、2小節Cmaj7。コード全体をストロークし、動くのは**3弦の指1本（3↔4フレット）だけ**。

```json
{
  "id": "m1.w2.d3.dom7_maj7_comp",
  "type": "tab",
  "meta": { "title": "C7 to Cmaj7 switch comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 4, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 80、4回反復。** 1小節のうずうずするC7 → 2小節の幻想的なCmaj7。3弦の指1本だけ3↔4フレット。この1フレットがブルースとシティポップを分けます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
3弦だけ5（R）→4（Maj7）→3（b7）と上下させ、3つの枝を手に馴染ませます。他の指は固定。

**10〜20分 · 脳トレ（今日のターゲット＝b7 vs 7）**
**例1**でb7（3フレット）と7（4フレット）を交互に押さえ、音を比較。「7！ b7！」の指示どおり、目を閉じて3弦で即座に押さえられれば合格。

**20〜40分 · 実戦伴奏（例2コンピング / 75〜85 BPM）**
**例2をBPM 80で4回反復**（C7↔Cmaj7）。続けてCm7も入れてCm7 → C7 → Cmaj7を循環。ルートを5弦上で移して別キーでも。

**40〜50分 · 録音・セルフフィードバック（推奨）**
b7 ↔ 7の切替を30秒録音。チェック：2つのコードが**感情的に違って**聞こえるか、3弦の音がはっきり鳴るか。

**今日の完了基準：** 3弦でR・7・b7の3つを目を閉じて押さえ、7とMaj7の色の違いを耳で区別できる。

## ④ ヒント / よくあるミス

- **b7と7を同じ音で聞く。** 半音差でも機能は正反対。b7＝解決欲求、7＝浮遊した安定。何度も交互に聞いて耳を開いて。
- **Maj7をただのメジャーと誤解。** Maj7の7（4フレット）はルート（5フレット）のすぐ1つ下。ルートと半音でぶつかることであの「切なさ」が出ます。
- **手全体を変える。** C7↔Cmaj7は3弦の1フレットだけ。他は付けたまま。
- **6弦ミュートの油断。** Aフォームは常に6弦を殺す。
