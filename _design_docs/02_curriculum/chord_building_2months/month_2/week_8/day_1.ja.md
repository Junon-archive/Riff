---
title: "チャレンジ・オリエンテーション — II-V-Iを複数ボイシングで"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 舞台の準備：同じ進行、複数の選択肢

## ① 理論・説明

最終週へようこそ！ 今週のバッキングはR&B/ジャズの心臓、**II-V-I**（Cキーで **Dm7 → G7 → Cmaj7**）の4小節ループです。この上で<mark>2か月分を全部混ぜて、自分だけのコンピングを作ります</mark>。

今日は**<mark>選択肢カード</mark>**を広げます。同じ進行を複数の方法で押さえられます：

- **<mark>シェルボイシング</mark>**（4週目）— R·3·7だけ、薄くきれい。ルート弦交差（5·6·5）。
- **<mark>9度テンション</mark>**（6週目）— きらめく色を足す。
- **<mark>高音域・トップノート</mark>**（5·7週目）— 細い弦で歌わせる。

正解は1つではありません。今週の核心は、毎回<mark>「このコードを今どう押さえるか」</mark>を**<mark>選ぶ</mark>**こと。今日は基本セット — II-V-Iをシェルで — と、I（Cmaj7）に9度を足す選択を学びます。気負わないで — 今週は新しく覚えることは1つもありません。この2か月で手の中に積み上がった道具を取り出して使う週なんです。今日はその道具箱を広げて「何が入ってたっけ？」と眺める日だと思えば気楽ですよ。

## ② ビジュアル

**Dm7シェル（ii、5弦ルート）。** 緑がガイドトーン（b3·b7）。

```json
{
  "id": "m2.w8.d1.dm7_shell",
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

**G7シェル（V、6弦ルート）。**

```json
{
  "id": "m2.w8.d1.g7_shell",
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

**選択肢：IをCmaj7シェルで、またはCmaj9で。** <mark>9度（黄色）を足せばきらめきます</mark>。

```json
{
  "id": "m2.w8.d1.cmaj9_choice",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 (I with 9) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 3, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — シェルII-V-Iコンピング。** 今週のバッキングの骨組み。ルートが5·6·5で交差、手は1区域。

```json
{
  "id": "m2.w8.d1.shell_ii_v_i",
  "type": "tab",
  "meta": { "title": "Shell ii-V-I comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** Dm7 → G7 → Cmaj7シェル。これが基本の舞台セット。ルート弦交差とガイドトーン（緑）を意識して。

**例2 — Iに9度を足す（選択肢）。** 最後のCmaj7をCmaj9に変えてきらめきを。同じ進行、違う選択。

```json
{
  "id": "m2.w8.d1.ii_v_i_with9",
  "type": "tab",
  "meta": { "title": "ii-V-I with Cmaj9 — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "7" }, { "string": 2, "fret": 3, "role": "color", "label": "9" }] }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** 3小節目のIをCmaj9（9度＝黄色）に。シェルか9コードかは自分の選択。色の違いを感じて。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Dm7·G7·Cmaj7シェルをそれぞれ押さえ、3本きれいに、捨てた弦が死んでいるか。<mark>次にCmaj9（9度追加）も</mark>。

**10〜20分 · 脳トレ（今日のターゲット＝選択肢を見る）**
各コードを「シェル？ 9コード？」の2通りで押さえ、ルート弦・ガイドトーン・9度の位置をマッピング。<mark>8週の道具を頭の地図に整理</mark>。

**20〜40分 · 実戦伴奏（例1・2 / 74〜84 BPM）**
**例1のシェルII-V-IをBPM 78で**何度も → **例2のようにIに9度を足して。** R&Bバッキングトラック（あれば）に合わせて<mark>2バージョンを交互に弾いて色を比較</mark>。

**40〜50分 · 録音・セルフフィードバック（推奨）**
2バージョンをそれぞれ15秒録音して比較。チェック：<mark>シェルと9コードの色の違いが聞こえるか</mark>／ルート弦交差が滑らかか。

**今日の完了基準：** II-V-Iをシェルで、そしてIに9度を足して2通りでコンピングし、「コードをどう押さえるか選ぶ」感覚をつかむ。

## ④ ヒント / よくあるミス

- **正解を探す。** 今週は選択。シェルも9コードも正解。状況と好みで選んで。
- **捨てた弦が漏れて鳴る。** シェルも9コードもミュートが命。各コード使う弦だけ。
- **道具を1つだけ使う。** 8週で学んだ全部を出して。今日はシェル＋9度、明日はリズム。
- **バッキングなしで練習だけ。** II-V-Iのバッキングトラックを用意して実戦感覚で。
