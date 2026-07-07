---
title: "自分だけの編曲 — 9度とトップノートでリハーモニー"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — 素朴な進行を洗練させる

## ① 理論・説明

昨日までボイシングとリズムを選びました。今日は**編曲**です。基本のII-V-I（Dm7-G7-Cmaj7）という「素朴な骨組み」に、6週目の**9度テンション**と7週目の**トップノート・メロディ**をのせて、自分だけの洗練されたバージョンを作ります。

2つの道具：
- **9度で色をつける。** Dm7 → **Dm9**、Cmaj7 → **Cmaj9**。進行がR&B/シティポップのように華やかに。
- **トップノートで歌わせる。** 進行の間ずっと一番上の音をメロディでつなぐ（例：ガイドトーンC-B-Bが上で歌う）。

正解はありません。今日のチャレンジは「この進行をもっとかっこよくするには、どこに9度を足し、トップに何を置くか」を自分で設計すること。あなたはもう、曲を「渡されたまま」弾く人ではなく、「自分流に」描き直す人です。最初は一か所だけ変えてみれば十分。その小さな選択が積み重なって、やがて「自分の音」になります。

## ② ビジュアル

**Dm9（iiに9度）。** 黄色が9度（E）、緑がガイドトーン。

```json
{
  "id": "m2.w8.d3.dm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 (ii + 9) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Cmaj9（Iに9度）。** 黄色が9度（D）。素朴なCmaj7が華やかに。

```json
{
  "id": "m2.w8.d3.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 (I + 9) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**例1 — 9度リハーモニー（Dm9 - G7 - Cmaj9）。** iiとIに9度を足して進行を華やかに。黄色が色。

```json
{
  "id": "m2.w8.d3.reharm_9",
  "type": "tab",
  "meta": { "title": "ii-V-I reharmonized with 9ths — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "9", "role": "color" },
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
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "role": "chord_tone" },
      { "string": 2, "fret": 3, "duration": "eighth", "label": "9", "role": "color" },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 78、4回反復。** Dm9 → G7 → Cmaj9。9度（黄色）を足すと同じ進行がずっと洗練されます。G7にも9を足すかは自分の選択。

**例2 — トップノート・メロディ・ライン。** 進行の上で一番上の音が歌います：C（Dm7）→ B（G7）→ B（Cmaj7）。1弦8 → 7 → 7、ほとんど動かないガイドトーン・メロディ。

```json
{
  "id": "m2.w8.d3.top_line_reharm",
  "type": "tab",
  "meta": { "title": "Top-note line over ii-V-I — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 1, "fret": 8, "duration": "whole", "label": "b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 72。** 1弦8 → 7 → 7。コードは変わるのにトップノートはC-B-Bでほぼその場。このメロディを上にのせてコンピングすると進行が歌います。4回反復。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Dm9·Cmaj9を押さえ、9度がきれいに鳴るか。次に例2のトップノート・ライン（C-B-B）を1弦で覚えて。

**10〜20分 · 脳トレ（今日のターゲット＝自分だけの色）**
「どこに9度を足す？ トップに何を置く？」を自問。基本のII-V-Iを紙に書き、各コードに9度／トップノートをどうのせるか設計。

**20〜40分 · 実戦伴奏（例1・2 / 74〜84 BPM）**
**例1の9度リハーモニーをBPM 78で**回して色をつけ、**例2のトップノート・ラインを上にのせて**歌わせて。2つの道具を合わせて自分だけの4小節編曲を作って。

**40〜50分 · 録音・セルフフィードバック（推奨）**
自分だけの編曲を30秒録音。チェック：9度が華やかに聞こえるか／トップノート・メロディがつながるか／素朴な原曲より洗練されたか。

**今日の完了基準：** 基本のII-V-Iに9度とトップノート・メロディをのせて、自分だけのリハーモニー版を設計しコンピングする。

## ④ ヒント / よくあるミス

- **テンションを全部詰め込む。** 9度は調味料。1〜2か所にのせてこそ洗練。全部入れると濁ります。
- **色ばかりでトップノートを忘れる。** 9度とトップノートを一緒に。色（9度）＋歌（トップ）が出会ってこそ本当の編曲。
- **原曲と比較しない。** 素朴な版 → 編曲版を交互に弾いて違いを耳で確認して。
- **正解探し。** 自分だけの版が正解。いくつも編曲を試して。
