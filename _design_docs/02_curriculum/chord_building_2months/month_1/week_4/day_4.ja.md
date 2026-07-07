---
title: "シェルでII-V-I完成 — 1か月の締めくくり"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
---

# Day 4 — 3週目のII-V-Iを全部シェルで、そして1か月の振り返り

## ① 理論・説明

1か月の最終日。3週目で学んだ**Dm7 → G7 → Cmaj7**のII-V-Iを、今度は**全部シェルボイシング**で弾き直します。今日は新しく学ぶことは何もありません。1か月かけて積み上げてきたピースが「あ、これ全部1つにつながってたんだ」とかみ合う日です。2つが自然に合わさります：

- **ルート弦交差（5・6・5）** — Dm7・Cmaj7は5弦ルートのシェル、G7は6弦ルートのシェル。
- **ガイドトーン＝シェルの色の音** — シェルはそもそも3度・7度だけ残したコードなので、3週目のガイドトーン・ラインがそのままシェルの2音。3弦で5→4→4とほとんど動かないあのライン、覚えてますか？

つまりシェルのII-V-Iは、**指3本のコードが最小移動で歌うようにつながる**、最もプロらしいコンピング。今月学んだこと（ルート上の組み立て、3度・7度のスイッチ、5・6弦ルート、ボイスリーディング、ダイエット）が全部1つの進行に詰まっています。

**1か月の振り返り：** あなたは今、コードを形ではなく「ルートの上に3度・7度を乗せて指でスイッチする組み立て」として見ています。どんなコードでもルート弦と3度・7度を見つければいい。来月はこの上に**テンション（9度）とトップノート・メロディ**で色をつけます。

## ② ビジュアル

II-V-Iのシェル3つ。ルート（青）とガイドトーン（緑の3度・7度）だけが残っています。

```json
{
  "id": "m1.w4.d4.dm7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm7 shell (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 5, "finger": 2, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 6, "finger": 3, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w4.d4.g7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 shell (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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
  "id": "m1.w4.d4.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**例1 — シェル・ガイドトーン・ライン。** 3弦でDm7 b7(C) → G7 3(B) → Cmaj7 7(B)。5→4→4。3週目と全く同じラインがシェルでもそのまま。

```json
{
  "id": "m1.w4.d4.shell_guide_line",
  "type": "tab",
  "meta": { "title": "Shell guide-tone line (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "G7-3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "Cmaj7-7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 68。** シェルの2つの色の音のうち1つ（3弦）がほとんど動かず歌います。4回反復。

**例2 — シェルII-V-Iコンピング。** Dm7（5弦）→ G7（6弦）→ Cmaj7（5弦）のシェルをルート＋ガイドトーンで循環。

```json
{
  "id": "m1.w4.d4.shell_ii_v_i_comp",
  "type": "tab",
  "meta": { "title": "Shell ii-V-I comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 2, "fret": 6, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b7", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** 指3本のコードが最小移動でつながります。今月の結晶 — これがプロのコンピング。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Dm7・G7・Cmaj7シェルをそれぞれ押さえ、3本だけくっきり鳴るか、捨てた弦が死んでいるかチェック。

**10〜20分 · 脳トレ（今日のターゲット＝シェル・ガイドトーン）**
**例1**で3弦5→4→4を押さえ、各シェルで3度・7度がどこか確認。ルート弦が5・6・5に変わっても色の音はほぼその場。

**20〜40分 · 実戦伴奏（例2 / 74〜84 BPM）**
バッキング上で**例2のシェルII-V-IをBPM 78で**何度も循環。手が1区域（フレット3〜6）に縛られているか、3本だけ薄くきれいに鳴るか。余裕があればDキーでも。

**40〜50分 · 録音・セルフフィードバック＋1か月振り返り（推奨）**
シェルII-V-Iを2周録音。チェック：捨てた弦が漏れないか／切替が速く滑らかか／ガイドトーンがつながるか。そして自問を — 「1か月前はコードをどう見ていて、今はどう見ているか？」

**今日の完了基準：** II-V-Iを全部シェルで、ルート弦を交差しながら最小移動で循環できる。（1か月目完成！🎉）

## ④ ヒント / よくあるミス

- **シェルII-V-Iで手がジャンプ。** 5弦・6弦シェルを交差すればフレット3〜6に縛られます。大きく跳んだらルート弦の選択が間違い。
- **捨てた弦への油断。** 6つのシェル（6・5弦ルート各3種）を行き来すると、ミュートが緩みがち。各コード3本だけ。
- **「もう全部学んだ」油断。** 今月は材料（コードの組み立て）を学びました。来月テンション・トップノートで色をつけて初めて本物の音楽に。
- **振り返りを飛ばす。** 1か月を振り返る10分が来月のモチベーションの燃料。どれだけ来たか感じて。
