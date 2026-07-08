---
title: "5弦ルートでマイナー＋ドミナント7 — 同じ原理、新しい配置"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 2弦でマイナー、3弦で7

## ① 理論・説明

今日のいいニュース — 新しく学ぶ原理は**ありません。** 先週6弦ルートで身につけた2つのスイッチを、5弦ルートでそのまま使います。新しく覚えるのはただ1つ、**どの弦でスイッチするか**という「住所」だけ。

- **マイナースイッチ＝2弦。** 3度（2弦5フレット、E）を半音下げてb3（4フレット、E♭）。→ **Cm**
- **ドミナント7スイッチ＝3弦。** オクターブルート（3弦5フレット、C）を2フレット下げてb7（3フレット、B♭）。→ **C7**

6弦フォームでは3度が3弦、7度が4弦でした。5弦フォーム（Aフォーム）では**3度が2弦、7度が3弦**へ引っ越しただけ。ルートが変わればスイッチの住所も変わる — これを手で確認するのが今日のすべてです。原理（3度を下げればマイナー、b7を足せば7）は先週と100％同じなので、新しい場所に慣れるだけ。一度手に付けば、6弦でも5弦でも自在です。

## ② ビジュアル

まず**Cマイナー（Aフォーム）** — 2弦の3度だけ5→4フレットに下げました（緑＝b3）。

```json
{
  "id": "m1.w2.d2.cm_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

次に**C7（Aフォーム）** — 3弦のオクターブルートを5→3フレットに下げてb7を得ました（緑＝b7）。

```json
{
  "id": "m1.w2.d2.c7_aform",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 — 5th-string root (A-form)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "chord_tone" },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**例1 — 3 → b3 マイナースイッチ・ライン（2弦）。** 2弦の5フレット（3）と4フレット（b3）を並べて。

```json
{
  "id": "m1.w2.d2.minor_switch_line",
  "type": "tab",
  "meta": { "title": "3 to b3 on 2nd string — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 2, "fret": 4, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 72。** 「ルート → 3度 → 短3度 → ルート」。2弦の1フレットが明るさを悲しみに。4回反復。

**例2 — メジャー → 7スイッチコンピング（3弦）。** 1小節C、2小節C7。コード全体をストロークし、動くのは**3弦（5→3フレット）だけ**。

```json
{
  "id": "m1.w2.d2.dom7_switch_comp",
  "type": "tab",
  "meta": { "title": "C to C7 switch comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "root", "label": "R" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
        { "string": 3, "fret": 5, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "root", "label": "R" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "root", "label": "R" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
        { "string": 3, "fret": 5, "duration": "quarter", "rest": true }
      ]},
      { "measure": 2, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 3, "role": "target", "label": "b7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
        { "string": 3, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 78、4回反復。** 1小節の安定したC → 2小節のうずうずするC7。3弦の指だけ5→3フレットに。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
C → Cm（2弦5↔4）、C → C7（3弦5↔3）をそれぞれ4拍ずつ交互に。6弦ミュートは維持。

**10〜20分 · 脳トレ（今日のターゲット＝2弦b3・3弦b7）**
**例1・2**で2つのスイッチの場所を確認。「マイナーは2弦、7は3弦」。目を閉じてそれぞれ押さえられれば合格。

**20〜40分 · 実戦伴奏（例2コンピング / 75〜85 BPM）**
**例2をBPM 78で4回反復**（C↔C7）。続けてCmスイッチ（例1）もバッキングに重ねてC↔Cm↔C7を自由に。ルートを5弦上で移して別キーでも。

**40〜50分 · 録音・セルフフィードバック（推奨）**
C↔Cm↔C7を30秒録音。チェック：スイッチの瞬間に弦が死なないか、6弦が漏れないか。

**今日の完了基準：** 5弦ルート上で2弦でマイナー、3弦で7を目を閉じてスイッチできる。

## ④ ヒント / よくあるミス

- **6弦フォームのスイッチ場所をそのまま使う。** 5弦では3度が2弦、7度が3弦。ルート弦が変われば地図が変わります。
- **b7を押さえるとき3度まで触る。** C7は3弦だけ下げます。2弦の3度はそのまま。
- **b3が鳴らない。** 2弦4フレットが死ぬなら隣が覆っています。指先を立てて。
- **Aフォームの疲れ。** 指が痛ければ4弦（5・4・3・2）だけ確実に。無理しないで。
