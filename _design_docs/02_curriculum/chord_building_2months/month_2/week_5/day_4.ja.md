---
title: "高音域統合 — 明るい進行を薄くきれいにコンピング"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — Dフォームを横へずらして明るいバイブを作る

## ① 理論・説明

今週のゴール。4弦ルートのDフォームは**形が1つ**なので、横へずらすだけでどのコードにもなります（3週目の「移動可能なパターン」と同じ原理）。今日はこれで明るい高音域の進行をコンピングします。

一番簡単な例：**G → A**のバイブ。同じDフォームを**2フレット上へ**ずらすと、G（ルート5フレット）がA（ルート7フレット）になります。手の形はそのまま、丸ごと上へ。両コードともトップノートが3度（明るい音）なので、行き来すると澄んでポップな感じになります。手の形1つでポップスのイントロみたいな空気がふっと出ると、そろそろ「コンピングが音楽になる」瞬間が近づいています。先週のシェルがバンドの中で澄んでいたなら、今週のDフォームは一人で弾いてもキラキラ鳴る — 舞台が違うんです。

```json
{
  "id": "m2.w5.d4.g_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

```json
{
  "id": "m2.w5.d4.a_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "A major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A" },
  "fretboard": { "startFret": 6, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 9, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

今週のまとめ：ルートが4弦へ上がって高音域が開き、R·3·5の新しい配置と**トップノート**という概念を得ました。来週（6週目）はこの高音域の上に**9度テンション**をのせて色を華やかにします。

## ② ビジュアル

**G（Dフォーム、ルート5フレット）。** トップノート＝3度（B、緑）。

```json
{
  "id": "m2.w5.d4.g_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**A（Dフォーム、ルート7フレット）。** 同じ形を2フレット上へ。トップノート＝3度（C#、緑）。

```json
{
  "id": "m2.w5.d4.a_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "A major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A" },
  "fretboard": { "startFret": 6, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 9, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 10, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 9, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**例1 — トップノート移動（G → A）。** 1弦のトップノートだけ：7フレット（Gの3度B）→ 9フレット（Aの3度C#）。コードをずらすとトップノートも一緒に上がるのを見て。

```json
{
  "id": "m2.w5.d4.top_move_line",
  "type": "tab",
  "meta": { "title": "Top note move G to A — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 7, "duration": "half", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 9, "duration": "half", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 74。** 1弦7 → 9フレット。Gの3度（B）からAの3度（C#）へトップノートが2フレット上がります。4回反復。

**例2 — G → A 高音域バイブ・コンピング。** 1小節G、2小節A。同じ細い4本、丸ごと2フレット上へ。

```json
{
  "id": "m2.w5.d4.g_a_vamp",
  "type": "tab",
  "meta": { "title": "G-A high-register vamp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "A", "tempoBpm": 82, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 10, "role": "root", "label": "R" }, { "string": 1, "fret": 9, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 7, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 10, "role": "root", "label": "R" }, { "string": 1, "fret": 9, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 7, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 10, "role": "root", "label": "R" }, { "string": 1, "fret": 9, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 9, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 10, "role": "root", "label": "R" }, { "string": 1, "fret": 9, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 82、4回反復。** G ↔ A を薄く明るく。手の形は1つ、2フレットだけ上下。ポップ・シティポップのあの澄んだ高音域コンピングです。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
G（Dフォーム）→ A（Dフォーム）を2フレット上下に。手の形が1つだと感じながら4・3・2・1だけきれいに、6・5弦ミュート。

**10〜20分 · 脳トレ（今日のターゲット＝トップノート移動）**
**例1**でトップノートがG→Aで7→9フレットへ一緒に上がるのを確認。目を閉じて両コードのトップノートを押さえられれば合格。

**20〜40分 · 実戦伴奏（例2バイブ / 78〜88 BPM）**
**例2のG-AバイブをBPM 82で4回反復。** 慣れたらD（12フレット）も入れてG-A-Dのように拡張、または別の明るいバッキングに重ねて自由に。高音域の澄んだ音を存分に。

**40〜50分 · 録音・セルフフィードバック＋今週の振り返り（推奨）**
バイブを2周録音。チェック：低音弦が漏れないか／切替が滑らかか／トップノートがはっきりか。そして「ルートが4弦へ上がって何が変わったか」を自分でまとめて。

**今日の完了基準：** Dフォームを横へずらしてG-A高音域バイブを滑らかにコンピングする。（5週目完成！）

## ④ ヒント / よくあるミス

- **コードごとに新しい形を探す。** Dフォームは1つ。ルートを望むフレットに置けばそのコード。横へずらすだけ。
- **低音弦の油断。** ずらすうちにミュートが緩みます。各コード6・5弦を確実に。
- **バイブが重い。** 高音域は軽く澄んで。強く擦らずトップノートを歌わせるように。
- **トップノートを見失う。** 来週のテンション、再来週のトップノート・メロディの準備。一番上の音を常に意識。
