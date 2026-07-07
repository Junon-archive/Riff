---
title: "6弦ルート・シェルセット — Maj7·7·m7を指3本で"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 6弦ルート、内側2本で性格を変える

## ① 理論・説明

昨日G7をシェル（R·b7·3）にダイエットしました。今日は6弦ルート・シェルの**セット**を作ります。ルートは6弦固定、内側の2本がそれぞれスイッチ：

- **4弦＝7度スイッチ。** 4フレット（7、Maj7）↔ 3フレット（b7、ドミナント/マイナー7）。
- **3弦＝3度スイッチ。** 4フレット（3、メジャー）↔ 3フレット（b3、マイナー）。

この2本の組み合わせで3つの性格が全部出ます：

- **Gmaj7シェル** ＝ 4弦4（7）· 3弦4（3）
- **G7シェル** ＝ 4弦3（b7）· 3弦4（3）
- **Gm7シェル** ＝ 4弦3（b7）· 3弦3（b3）

3週間使ってきた2つのスイッチ（3度・7度）がシェルでも生きています。ただ5度・重複音がないので、残った**2つの色の音だけ**をくっきり操作するわけです。

## ② ビジュアル

6弦ルート・シェル3種類。緑が3度・7度、2本だけ動かせば性格が変わります。

```json
{
  "id": "m1.w4.d2.gmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Gmaj7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d2.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d2.gm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm7 shell — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — 2つのスイッチ確認ライン。** 4弦7↔b7、3弦3↔b3。2本で色の音がどう変わるか音で。

```json
{
  "id": "m1.w4.d2.shell_switch_line",
  "type": "tab",
  "meta": { "title": "Shell switches (7/b7, 3/b3) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72。** 4弦（7→b7）、3弦（3→b3）。2つの色の音の動きを手に馴染ませて。4回反復。

**例2 — シェルセット循環コンピング。** Gmaj7 → G7 → Gm7。ルート（6弦）は固定、4弦・3弦だけ変わります。

```json
{
  "id": "m1.w4.d2.shell_set_comp",
  "type": "tab",
  "meta": { "title": "6th-root shell set comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** Gmaj7 → G7 → Gm7。ルートはそのまま、2つの色の音だけ内側で動きます。3つの性格がはっきり区別できるか耳で。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Gmaj7 → G7 → Gm7 シェルを4拍ずつ順番に。ルート（6弦）固定、5・2・1弦ミュート、4・3弦だけ移動。

**10〜20分 · 脳トレ（今日のターゲット＝2つの色の音）**
**例1**で4弦（7/b7）・3弦（3/b3）の位置を確認。目を閉じて「Gm7！」で両弦とも3フレットへすぐ。

**20〜40分 · 実戦伴奏（例2循環 / 74〜84 BPM）**
**例2をBPM 78で4回反復。** 続けてルートだけ別フレット（例：A＝5フレット）へ移して同じセットを応用。薄く速いシェルコンピングに慣れる。

**40〜50分 · 録音・セルフフィードバック（推奨）**
3シェル循環を30秒録音。チェック：捨てた弦が漏れないか、3つの性格が明確か、切替が速いか。

**今日の完了基準：** 6弦ルートのシェルでGmaj7・G7・Gm7をルート固定のまま4・3弦だけで循環できる。

## ④ ヒント / よくあるミス

- **ルートをつい離す。** 6弦ルートは固定。4・3弦だけ動かして。
- **7度と3度を混同。** 4弦が7度、3弦が3度。上（4弦）がセブン、下（3弦）がサード。
- **捨てた弦が漏れて鳴る。** 5・2・1弦を指の腹で確実に覆って。
- **シェルを形で覚える。** 「ルート＋7度（4弦）＋3度（3弦）」で。正体を知れば5弦ルート（明日）でも通用します。
