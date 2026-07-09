---
title: "5弦ルート統合 — 1か所で5つの性格を循環"
dayKey: "m1.w2.d4"
estMinutes: 50
i18nKey: "lesson.m1.w2.d4"
---

# Day 4 — 2本の弦（2弦・3弦）でMaj·m·7·m7·Maj7を自在に

## ① 理論・説明

今週のゴールです。今日も新しく覚えるのではなく、5弦ルートの上で学んだ2つのスイッチを合わせ、**5つの性格**を1か所で循環する日。ここまで来れば5弦ルートは完全に君のものです。

- **2弦＝3度スイッチ。** 5フレット（3）↔ 4フレット（b3）。
- **3弦＝7度の三差路。** 5フレット（R）· 4フレット（7）· 3フレット（b7）。

この2本の組み合わせだけで5コードが全部出ます：

```json
{
  "id": "m1.w2.d4.cmaj7_ref",
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

- **C（メジャー）** ＝ 2弦5（3）· 3弦5（R）
- **Cm** ＝ 2弦4（b3）· 3弦5（R）
- **C7** ＝ 2弦5（3）· 3弦3（b7）
- **Cm7** ＝ 2弦4（b3）· 3弦3（b7）
- **Cmaj7** ＝ 2弦5（3）· 3弦4（7）

見てください、5つのコードは結局、**指2本（2弦・3弦）の位置の組み合わせ**にすぎません。覚える形が5つではなく、2本をどこに置くかの問題です。今日はこれを1つのルート上で自由に回しながら、先週6弦で得た感覚が5弦でも同じように通用することを手で確認します。

## ② ビジュアル

今日の代表コード**Cmaj7（Aフォーム）** — 3弦の7（4フレット、緑）がルートのすぐ下で切なくぶつかるコードです。

```json
{
  "id": "m1.w2.d4.cmaj7_ref",
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

**例1 — 2つのスイッチ・ツアー。** 1小節は2弦（3↔b3）、2小節は3弦（R・7・b7）。2本がそれぞれ何を担当するか手で整理。

```json
{
  "id": "m1.w2.d4.two_switch_tour",
  "type": "tab",
  "meta": { "title": "Two switches tour — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 2, "fret": 4, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 72。** 1小節＝明暗（2弦）、2小節＝安定/幻想/緊張（3弦）。4回反復。

**例2 — Cmaj7コンピング＋5性格循環。** ルート → 7 → 3度でMaj7の切ない色をリズムに。

```json
{
  "id": "m1.w2.d4.cmaj7_comp",
  "type": "tab",
  "meta": { "title": "Cmaj7 comp groove — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
        { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "technique": "palm_mute", "role": "target", "highlight": true },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 80、4回反復。** グルーヴに慣れたら**統合循環**：同じ場所で2弦（3↔b3）・3弦（R/7/b7）の指だけ変えて、**C → Cm → C7 → Cm7 → Cmaj7**を1小節ずつ。

**例3 — コード全体コンピング。** 例2と同じリズムで、ルート・7度・3度の各打点で単音の代わりにCmaj7のコード全体を鳴らします。

```json
{
  "id": "m1.w2.d4.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full-chord comp (Cmaj7) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
      { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "chord_tone", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 80。** 例2と同じグルーヴで、今度はコード全体で。ルート-7-3のコンピングに慣れたら、こちらへ。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
C → Cm → C7 → Cm7 → Cmaj7 を4拍ずつ順番に。ルート（5弦）・6弦ミュートは固定、2弦・3弦だけ動かします。

**10〜20分 · 脳トレ（今日のターゲット＝2つのスイッチの組み合わせ）**
「3度は下げた？ 7度はR・7・b7のどれ？」の2問で5コードを見分け。**例1**で2本の役割を声に出して確認。

**20〜40分 · 実戦伴奏（例2＋統合循環 / 75〜85 BPM）**
**例2のCmaj7グルーヴをBPM 80で4回反復**、**統合循環**（5コード、1小節ずつ）へ拡張。続けてルートを5弦上で移して別キーでも循環。

**40〜50分 · 録音・セルフフィードバック（推奨）**
5コード循環を30秒録音。チェック：5つの性格がそれぞれはっきり区別できるか、6弦が漏れないか。

**今日の完了基準：** 5弦ルートの1か所でC → Cm → C7 → Cm7 → Cmaj7 を2弦・3弦の指だけで循環できる。（2週目完成！）

## ④ ヒント / よくあるミス

- **5つを別々の形で覚える。** 2つのスイッチ（2弦・3弦）の組み合わせで覚えて。どのキーでも通用します。
- **6弦フォームと混ざって混乱。** 5弦では3度＝2弦、7度＝3弦。ルート弦が地図を決めます。
- **循環中にルート・6弦ミュートを離す。** この2つは錨。循環の間ずっと維持。
- **速度への欲。** 5つが潰れたらBPM 70へ。正確な組み合わせが先。
