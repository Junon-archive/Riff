---
title: "E9 — ファンクの象徴、9度が与えるあの色"
dayKey: "m1.w4.d1"
estMinutes: 50
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — ついに本物のコード、E9を押さえる

## ① 理論・説明

この3週間、私たちは右手と左手の「リズム」だけを掘ってきました。音はほとんど死んだ「チッ」と「チャッ」だけ。今日、ついに**本物のコード**を押さえます。ファンクの象徴、**E9**です。

E9はEドミナント7（E・G#・D）に**9度（F#）** をもう1つ乗せたコード。その9度こそが、ファンク特有の「きらめく洗練された」色を与えます — 下の図で黄色の音が主役です。根音は5弦7フレット、人差し指で5・3弦を軽く押さえます。6弦と1弦はしっかりミュート。

今日のミッションは、このE9で**1週目の16ビート・モーターをもう一度乗せる**こと。この3週間で作ったリズムエンジンに、ついに「本物の音」という燃料を注ぐわけです。もう右手が揺れるたびに、死んだスクラッチではなくE9の洗練された和音が鳴ります。すでに「ファンクらしい」感じがぐっと来るはずです。

4本の弦を一度に押さえるのは最初は硬く、鳴らない弦もあるかもしれません。当然です。指に力が定着するには数日かかります。今日は完璧なコード音より、E9を押さえたまま右手モーターが止まらないことに集中してください。コード1つで何分も引っ張れるファンクの魔法が、ここから始まります。この3週間が「リズム練習」だったなら、今日からは「音楽」です。E9を1つ押さえただけなのに、部屋の空気が変わるのを感じてみてください。

## ② ビジュアル資料

今日の主役、E9です。黄色が9度（F#）— ファンクの色を作る音です。

**E9（ファンク・コード）。** 根音は5弦7フレット。青＝根音・コードトーン（3度・b7）、黄色＝9度。6・1弦はしっかりミュート。

```json
{
  "id": "m1.w4.d1.e9_form",
  "type": "fretboard_diagram",
  "meta": { "title": "E9 — the funk chord (root on 5th string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 6, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 7, "finger": 2, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — E9の16ビート・モーター（1小節）。** 各拍の頭にE9を鳴らし、残りはゴースト。1週目のモーターに本物のコードを乗せたものです。

```json
{
  "id": "m1.w4.d1.e9_motor",
  "type": "tab",
  "meta": { "title": "E9 16th motor (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66。** E9を押さえたまま右手は揺れ続ける。拍ごとにコードがはっきり鳴るか確認して4回。

**例2 — 裏拍のE9（2小節）。** コードを拍ではなく「&」で鳴らします。少し遅れたE9がファンクらしく引っ張ります。

```json
{
  "id": "m1.w4.d1.e9_offbeat",
  "type": "tab",
  "meta": { "title": "E9 on the off-beat (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66。** コードが裏拍に乗る感じを楽しんで4回。残りはゴーストで流して。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。E9を押さえて離してを繰り返し、4本の弦が全部きれいに鳴るか点検。6・1弦のミュートも確認。

**10〜20分 · 頭のトレーニング（今日のターゲット＝E9フォーム）**
E9を押さえたまま目を閉じ、各弦を1本ずつ弾いて音を確認。どの弦が死ぬか探し、指の角度を調整します。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 66）**
**例1**（E9モーター）をBPM 66で4回 → **例2**（裏拍E9）へ。E9を押さえたまま右手モーターが止まらないのが肝心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：E9の4本の弦がきれいに鳴るか／6・1弦はミュートされたか／右手は止まらなかったか。

**今日の完了基準：** E9をきれいに押さえたまま16ビート・モーターを保ち、拍ごとにコードをはっきり鳴らせる。

## ④ ヒント / よくあるミス

- **ある弦が死ぬ。** 指の角度が寝たか、別の弦に触れています。指先を立てて各弦を正確に。
- **6・1弦が鳴る。** E9は4本だけ。余分な弦が鳴ると汚れます。人差し指の先・手のひらでミュート。
- **コードのためにモーターが止まる。** コードを気にして右手が固まらないように。揺れは続ける。
- **速さへの欲。** コードがきれいでないとグルーヴが生きません。ゆっくり、4本全部鳴らして。
