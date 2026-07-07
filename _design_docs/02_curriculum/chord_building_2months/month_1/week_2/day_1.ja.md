---
title: "5弦ルート（Aフォーム）の解剖 — 家を5弦へ移す"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — ルートが5弦に下りると、R・3・5はどこへ行く？

## ① 理論・説明

先週はずっとルートが**6弦**にありました。今週はその家を**5弦**へ移します。ルールは1つも変わりません — 相変わらず「ルートの上に3度・5度を乗せる」。ただルートが別の弦へ行くと、3度・5度も新しい場所へ移るので、今日はその新しい地図を目に馴染ませる日です。

例は5弦3フレットにルートを置いた**Cメジャー（Aフォーム）**。指が押さえる場所を度数で分解すると：

- **R（ルート）** — 5弦3フレット（C）。今週の新しい家。
- **5（5度）** — 4弦5フレット（G）。ルートのすぐ上の弦。
- **R（ルート）** — 3弦5フレット（C）。オクターブ上のルート。
- **3（3度）** — 2弦5フレット（E）。今日の表情担当（緑）。

そして**6弦は使いません。** Aフォームの核心的な習慣は**6弦を確実に殺すこと**。ルートより低い弦が漏れて鳴るとコードがぼやけます。親指で軽く覆うか、ルートを押さえる指先で6弦に触れてミュートして。

## ② ビジュアル

5弦にルートを置いた**Cメジャー（Aフォーム）**。6弦・1弦は✕（ミュート）、緑が2弦の**3度（E）**です。

```json
{
  "id": "m1.w2.d1.c_major_aform",
  "type": "fretboard_diagram",
  "meta": {
    "title": "C major — 5th-string root (A-form)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C"
  },
  "fretboard": {
    "startFret": 3,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 0, "muted": true },
      { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "finger": 2, "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 0, "muted": true }
    ]
  }
}
```

**例1 — R・3・5確認ライン。** 新しい配置で3つの材料を1音ずつ押さえます。ルートが5弦に下りた分、3度・5度の場所も昨日と違うことを目と耳で確認。

```json
{
  "id": "m1.w2.d1.c_chordtones_line",
  "type": "tab",
  "meta": {
    "title": "C chord tones (R·3·5) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C",
    "tempoBpm": 70,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
        { "string": 4, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
        { "string": 3, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

▶ **BPM 70。** 「ルート（5弦）→ 3度（2弦）→ 5度（4弦）→ ルート（3弦）」。ルートが5弦だという感覚を手に植えて。4回反復。

**例2 — Cコンピング・リズム＋6弦ミュート。** 示された音ごとに**Cコード全体をストローク**しますが、**6弦は絶対に鳴らさない**まま。8分休符のあとパームミュートでグルーヴを作ります。

```json
{
  "id": "m1.w2.d1.c_comp_rhythm",
  "type": "tab",
  "meta": {
    "title": "C comping rhythm (mute 6th) — staff + tab",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "C",
    "tempoBpm": 75,
    "notation": "staff+tab"
  },
  "tab": {
    "timeSignature": "4/4",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
        { "string": 5, "fret": 3, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
      ]}
    ]
  }
}
```

▶ **BPM 75、4回反復。** ルート（5弦）でグルーヴをつかみつつ、ストロークが6弦へ漏れないか確認し続けて。慣れたらルートを5弦5フレット（D）に移して同じリズムで。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
C（Aフォーム）を押さえ、5弦から2弦まで1本ずつ鳴らします。最優先チェックは**6弦と1弦が確実に死んでいるか**。使う4本だけきれいに。

**10〜20分 · 脳トレ（今日のターゲット＝3度E）**
**例1**を押さえてR・3・5を声に出し、2弦5フレットの**3度（E）**だけを何度もピンポイントで。ルートが5弦のとき3度がどこへ行ったかを目を閉じて押さえられれば合格。

**20〜40分 · 実戦伴奏（例2コンピング / 70〜80 BPM）**
**例2をBPM 75で4回反復。** ストロークのたびに6弦が死んでいるか意識。慣れたらルートだけ5弦5フレット（D）に移して同じパターンを応用。今日は「ルートが5弦」という新しい座標に手を慣らす日。

**40〜50分 · 録音・セルフフィードバック（推奨）**
Cコンピングを30秒録音。チェック：**低音6弦が漏れて鳴っていないか**、4本がはっきりしているか。6弦が鳴ったらミュート指の位置を明日修正。

**今日の完了基準：** C（Aフォーム）を6弦ミュートしたままきれいに鳴らし、5弦ルート基準でR・3・5を目を閉じて押さえられる。

## ④ ヒント / よくあるミス

- **6弦が漏れて鳴る。** Aフォーム最大の敵です。ルートを押さえる指先を少し寝かせて6弦に触れさせるか、親指で覆って。
- **6弦フォーム（先週）と混同。** ルート弦が変わると3度・5度の場所も全部移動します。「形」ではなく「ルートは何弦？」で。
- **Aフォームバレの痛み。** 最初は指が痛い。無理に全部押さえず、今日は4弦（5・4・3・2）がきれいなら十分。
- **3度を聞き流す。** 2弦の3度（E）は明日マイナーへ行くとき動く音。先に目印を。
