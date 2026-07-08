---
title: "高音3弦 — ファンクのあの「きらめく」音"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — なぜファンクは細い3弦で鳴るのか

## ① 理論・説明

ファンクのあの「きらきら」した爽やかなカッティング音、太い6弦コードでは絶対に出ません。それは細い高音の**1・2・3弦**からだけ出ます。

理由は簡単。高音弦は軽くて明るいので、カッティングするとガラス玉を転がすような爽やかな音が出ます。逆に低音弦は鈍く重いので、ファンク特有のあのきらめきが出ません。だからプロは4・5・6弦を全部殺してしまい、上の3弦だけをコツコツ叩きます。広い刷毛で壁を塗るのではなく、細いペンで点を打つのと同じです。

今日押さえる最初のフォームは**Eメジャー・トライアド**（3弦）です。根音は3弦にあり、その上に3度・5度が乗ります（下の図）。たった3音、3弦だけ。今週の本当の勝負どころは、この**狭いターゲット（3弦）を正確に叩くコントロール**です。6弦を広く弾くよりずっと精密な狙いが要ります。

3弦だけ正確に叩いて下の弦に触れないのは、最初はもちろん難しい。隣の弦がしょっちゅう漏れて鳴ります。正常です。今日は音が少し汚くても大丈夫、上の3弦に右手を「サッ」と乗せる感覚だけつかんでください。この音こそ、ナイル・ロジャースに代表される、カッティング・ファンクの伝説的な音です。細い弦3本でこんなに洗練された音が出るのは、今日はじめて弾くと不思議に感じるはず。6弦をぎゅっと押さえる習慣から抜け出す最初の日だと思ってください。

## ② ビジュアル資料

今日のフォーム、Eメジャー・トライアドです。1・2・3弦だけ使い、4・5・6弦はしっかりミュート（✕）。

**Eメジャー・トライアド（高音3弦）。** 3弦が根音（R）、その上に3度・5度。4・5・6弦は必ず殺します。

```json
{
  "id": "m2.w5.d1.emaj_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad (top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 6, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 9, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 9, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 7, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```

**例1 — 3弦トライアド・カッティング（1小節）。** 各拍の頭にトライアドを「サッ」と鳴らし、残りはミュート・カッティング。上の3弦だけ爽やかに。

```json
{
  "id": "m2.w5.d1.cut_motor",
  "type": "tab",
  "meta": { "title": "3-string triad cutting (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68。** 3弦だけに右手を乗せて4回。下の弦が漏れないか耳で確認。

**例2 — 裏拍カッティング（2小節）。** トライアドを拍ではなく「&」で鳴らします。少し遅れたカッティングがファンクらしく引っ張ります。

```json
{
  "id": "m2.w5.d1.cut_offbeat",
  "type": "tab",
  "meta": { "title": "Triad cutting on the off-beat (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 68。** 裏拍の「サッ」を楽しんで4回。残りはミュートで流して。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。Eメジャー・トライアドを押さえて16ビート・カッティング。下の弦（4・5・6）が漏れないか集中して点検。

**10〜20分 · 頭のトレーニング（今日のターゲット＝3弦の狙い）**
目を閉じて上の3弦だけを右手でかすめる練習。下の弦に触れず3弦に「サッ」と乗る感覚を刻みます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 68）**
**例1**（3弦カッティング）をBPM 68で4回 → **例2**（裏拍カッティング）へ。慣れたらトライアドを別の場所に移して応用。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：1・2・3弦だけきれいに鳴ったか／下の弦の雑音はないか／カッティングは爽やかか。

**今日の完了基準：** Eメジャー・トライアドで上の3弦だけ正確に叩き、下の弦の雑音なく16ビート・カッティングを保てる。

## ④ ヒント / よくあるミス

- **下の弦が漏れる。** 右手が広く弾きすぎたか左手ミュートが弱い。4・5・6をしっかり覆って。
- **3弦が全部鳴らない。** 右手が3弦を全部かすめていません。3弦に「サッ」と乗るよう角度調整。
- **手首ではなく腕。** カッティングも手首スナップ。Week 1の感覚のまま。
- **速さへの欲。** 3弦の狙いが正確でないと音が生きません。ゆっくり、きれいに。
