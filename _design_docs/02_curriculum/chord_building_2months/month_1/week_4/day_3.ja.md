---
title: "5弦ルート・シェルセット — ルートだけ5弦へ下ろす"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — 5弦ルートのシェル、3・2弦で性格を変える

## ① 理論・説明

昨日6弦ルートのシェルを学びました。今日はルートを**5弦**へ下ろしたシェルです。原理は同じ — R·3·7だけ残して5度を捨てる。ただルート弦が変わったので、3度・7度が別の弦へ移ります：

- **3弦＝7度スイッチ。** 4フレット（7、Maj7）↔ 3フレット（b7）。
- **2弦＝3度スイッチ。** 5フレット（3）↔ 4フレット（b3）。

まとめると3つの性格は：

- **Cmaj7シェル** ＝ 3弦4（7）· 2弦5（3）
- **C7シェル** ＝ 3弦3（b7）· 2弦5（3）
- **Cm7シェル** ＝ 3弦3（b7）· 2弦4（b3）

6弦シェル（昨日）が4・3弦なら、5弦シェルは**3・2弦**。ルート弦が変わると色の音も1セット上へ移動します。この2セット（6弦・5弦）が揃えば、明日II-V-Iを全部シェルでつなげます。

## ② ビジュアル

5弦ルート・シェル3種類。緑が3度・7度、今回は3・2弦がスイッチ。6・4・1弦はミュート。

```json
{
  "id": "m1.w4.d3.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d3.c7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "C7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d3.cm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cm7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Cm" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 4, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — 2つのスイッチ確認ライン（3・2弦）。** 3弦7↔b7、2弦3↔b3。

```json
{
  "id": "m1.w4.d3.shell_switch_line5",
  "type": "tab",
  "meta": { "title": "5th-root shell switches — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 2, "fret": 4, "duration": "quarter", "label": "b3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72。** 3弦（7→b7）、2弦（3→b3）。6弦シェルと同じ原理、弦だけ移動。4回反復。

**例2 — 5弦シェルセット循環。** Cmaj7 → C7 → Cm7。ルート（5弦）固定、3・2弦だけ。

```json
{
  "id": "m1.w4.d3.shell_set_comp5",
  "type": "tab",
  "meta": { "title": "5th-root shell set comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 4, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** Cmaj7 → C7 → Cm7。ルート固定、3・2弦の色の音だけ移動。6・4・1弦ミュート確認。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Cmaj7 → C7 → Cm7 シェルを4拍ずつ。ルート（5弦）固定、6・4・1弦ミュート、3・2弦だけ移動。

**10〜20分 · 脳トレ（今日のターゲット＝3・2弦の色の音）**
**例1**で3弦（7/b7）・2弦（3/b3）の位置を確認。昨日の6弦シェル（4・3）と今日の5弦シェル（3・2）の違いを目で整理。

**20〜40分 · 実戦伴奏（例2循環 / 74〜84 BPM）**
**例2をBPM 78で4回反復。** 続けてルートを5弦の別フレット（例：D＝5フレット）へ移して応用。6弦・5弦シェルを交互に押さえて両方手に馴染ませる。

**40〜50分 · 録音・セルフフィードバック（推奨）**
5弦シェル循環を30秒録音。チェック：6・4・1弦が漏れないか、3つの性格が明確か。

**今日の完了基準：** 5弦ルートのシェルでCmaj7・C7・Cm7を3・2弦だけで循環し、6弦・5弦シェルを自由に行き来できる。

## ④ ヒント / よくあるミス

- **4弦が漏れて鳴る。** 5弦シェルは4弦をミュート（ルートの下）。ルート指先で4弦まで軽く覆って。
- **6弦シェルの位置のまま。** 5弦では7度が3弦、3度が2弦。ルート弦が地図を変えます。
- **2弦の3度が甘い。** 2弦5フレット（3度）が死ぬなら隣が覆っています。指先を立てて。
- **薄い音への不満。** シェルは元々薄い。バンド/バッキングの上で真価が出るので、一人で弾くとき音量で判断しないで。
