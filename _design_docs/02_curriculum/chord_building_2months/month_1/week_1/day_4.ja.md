---
title: "m7完成＋統合 — 1つのルート上で4つの性格を循環"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 2つのスイッチ（3度・7度）でMaj・m・7・m7を自在に

## ① 理論・説明

ついに今週のゴールです。今日は新しいことを学ぶのではなく、これまでの2つのスイッチを**<mark>1つに合わせる</mark>**日。ここまで来ただけで、もう大きな山を1つ越えたんです。

- **3弦＝3度スイッチ。** 4フレット（3、明るい）↔ 3フレット（b3、暗い）。
- **4弦＝7度スイッチ。** 5フレット（R）↔ 3フレット（b7、緊張）。

今日の新しいコード**m7**は、この2つのスイッチを**<mark>両方下げた</mark>**だけの状態。つまりマイナー（b3）にドミナントのb7まで乗せたもの。Gなら3弦3フレット（b3）＋4弦3フレット（b7）＝**Gm7**。暗いけれど緊張がやわらかくほどけた、ジャズ・ソウル・シティポップの<mark>あの洗練された色</mark>です。

2つのスイッチを表に描くと、ちょうど4マスになります：

```json
{
  "id": "m1.w1.d4.gm7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm7 — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

- **Maj** ＝ 3度そのまま · 7度そのまま（3弦4、4弦5）
- **m** ＝ 3度下げ · 7度そのまま（3弦3、4弦5）
- **7** ＝ 3度そのまま · 7度下げ（3弦4、4弦3）
- **m7** ＝ 3度下げ · 7度下げ（3弦3、4弦3）

驚きませんか？ 4つのコードは結局、**<mark>指2本の上下の組み合わせ</mark>**にすぎません。覚える形が4つではなく、スイッチが2つだけ。今日はこれを1つのルート上で自由に循環しながら、「<mark>コードは暗記ではなく組み立て</mark>」という今週の結論を手に完全に刻みます。

## ② ビジュアル

2つのスイッチを両方下げた**Gm7（Eフォーム）**。2つの緑がそれぞれ**b3（暗さ）**と**b7（緊張の解放）** — <mark>m7の正体を作る2音</mark>です。

```json
{
  "id": "m1.w1.d4.gm7_eform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "Gm7 — 6th-string root (E-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
    ]
  }
}
```

**例1 — 性格決定音ツアー。** 1つのルート上で3（長3度）→ b3（短3度）→ b7（短7度）を順に押さえます。この3音の組み合わせがコードの名前を作ることを耳で整理。

```json
{
  "id": "m1.w1.d4.character_tones_line",
  "type": "tab",
  "meta": {
    "title": "Character tones tour (3 / b3 / b7) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 72,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true }
      ]}
    ]
  }
}
```

▶ **BPM 72。** 「ルート → 長3度 → 短3度 → 短7度」。前の2音が明暗を、最後のb7が緊張を担当します。4回反復。

**例2 — Gm7コンピング・グルーヴ＋統合循環。** ルート → b7ゴースト → b3 の順でm7の色をリズムに乗せました。

```json
{
  "id": "m1.w1.d4.gm7_comp",
  "type": "tab",
  "meta": {
    "title": "Gm7 comp groove — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "Gm",
    "tempoBpm": 80,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 4, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "technique": "palm_mute", "role": "target", "highlight": true },
        { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
        { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 80、4回反復。** ルート-b7-b3のグルーヴに慣れたら、**統合循環**へ：同じ場所で3弦（3↔b3）・4弦（R↔b7）の指だけ変えて、**G → Gm → G7 → Gm7**を1小節ずつ循環します。

**例3 — コード全体コンピング。** 例2と同じリズムで、ルート・b7・b3の各打点で単音の代わりにGm7のコード全体を鳴らします。

```json
{
  "id": "m1.w1.d4.full_chord_comp",
  "type": "tab",
  "meta": { "title": "Full-chord comp (Gm7) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 4, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "technique": "palm_mute", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 3, "role": "target", "label": "b3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 80。** 例2と同じグルーヴで、今度はコード全体で。ルート-b7-b3のコンピングに慣れたら、こちらへ。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
G → Gm → G7 → Gm7 を4拍ずつ順番に。3弦・4弦の指だけ上下に動かし、ルート（6弦3フレット）は絶対に離しません。<mark>4コードとも6弦きれいに鳴るか</mark>確認。

**10〜20分 · 脳トレ（今日のターゲット＝2つのスイッチ）**
<mark>「3度は下げた？ 7度は下げた？」</mark>の2問だけで4コードを見分けます。誰かが「Gm7！」と言ったら、両方下げた場所を目を閉じてつかむ。**例1**で3つの決定音を声に出して確認。

**20〜40分 · 実戦伴奏（例2＋統合循環 / 75〜85 BPM）**
**例2のGm7グルーヴをBPM 80で4回反復**、慣れたら**統合循環**（G→Gm→G7→Gm7、1小節ずつ）へ拡張。さらにルートだけ5弦に移して（C系）同じく循環。今日は「<mark>4つの性格は指2本の組み合わせ</mark>」という感覚を完成させる日。

**40〜50分 · 録音・セルフフィードバック（推奨）**
統合循環1周を30秒録音。チェック：コードが変わるとき**<mark>関係ない弦が巻き込まれて死なないか</mark>**、4つの性格がそれぞれはっきり区別できるか。

**今日の完了基準：** 1つのルート上でG → Gm → G7 → Gm7 を3弦・4弦の指だけで<mark>途切れず循環できる</mark>。（今週完成！）

## ④ ヒント / よくあるミス

- **4コードをそれぞれ「別の形」で覚える。** それだと8個、16個のコードでまた崩れます。常に「<mark>3度・7度、2つのスイッチの組み合わせ</mark>」で覚えて。
- **循環中にルートを離す。** <mark>6弦のルートは錨</mark>。これがぶれると全部ぶれます。循環の間ずっと押さえたまま。
- **m7を「マイナー」としか聞かない。** m7はマイナーより柔らかく開いています。b7が緊張を少しほどくから。その<mark>「洗練された弛緩」</mark>を楽しんで。
- **速度への欲。** 循環が潰れたらBPMを70に落としてOK。今週は<mark>正確な組み合わせ</mark>が速度より100倍大事です。
