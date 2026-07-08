---
title: "3弦カッティング・グルーヴ完成 — 1か月の復習を乗せる"
dayKey: "m2.w5.d4"
estMinutes: 50
i18nKey: "lesson.m2.w5.d4"
---

# Day 4 — 高音域できらめくゴーストとアクセント

## ① 理論・説明

今週の決勝線です。今日は高音3弦トライアドの上に、1か月目で学んだ**ゴーストとアクセント**を乗せ、4小節のカッティング・グルーヴをバッキングトラックの上で完成させます。

先月のワンコード・ジャムと原理はまったく同じ。ただ舞台が太い6弦E9から細い3弦トライアドに変わっただけです。でもこの舞台の変化が音をがらっと変えます。高音域なのでゴーストの「チッ」はより軽く鮮やかに、アクセントの「サッ」はガラスのようにきらめいて跳びます。同じリズムの言葉（モーター・ゴースト・アクセント）を使っているのに、3弦カッティングに移すとずっと洗練された「ナイル・ロジャースらしい」音になります。

ここに昨日学んだ左手ミュートがしっかり支えます。広くカッティングしながら下の弦は殺し、上の3弦だけにゴースト・実音・アクセントの3層を乗せる。トライアドの位置を時々移したり、マイナーに色を変えたりすると、4小節が退屈にならず回ります。

今週を振り返ると、あなたはファンクの「音色」を手に入れました。太いコードの代わりに、細い3弦できらめくカッティングを作れるようになったんです。来週はここからもう一歩、コードすら捨てて**1弦だけ**を叩いてベースラインのように描くシングルノート・ファンクへ行きます。今日の3弦カッティング・グルーヴがバッキングと噛み合ってきらめいたら、今週は完璧な成功です。太いコードから細い3弦へ移ったこの1週間、あなたのファンクは一段と洗練されました。もう音の「色」を自分で選べるようになったんです。

## ② ビジュアル資料

3弦トライアドにゴースト・アクセントを乗せた完成形カッティング・グルーヴです。高音域なので対比がよりきらめきます。

**Eメジャー・トライアド（復習）。** この3弦の上にゴースト・実音・アクセントの3層を。下の弦は左手ミュートで殺し続けて。

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

**例1 — カッティング・グルーヴA（2小節）。** トライアド実音・ミュートゴースト・アクセント（緑）が均等に混ざった基本形。アクセントがスネアと噛み合います。

```json
{
  "id": "m2.w5.d4.groove_a",
  "type": "tab",
  "meta": { "title": "Triad cutting groove A (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 74。** バッキングの上で4回以上。高音域カッティングが爽やかにきらめくか感じて。

**例2 — カッティング・グルーヴB（2小節）。** アクセントをさらに引っ張り、実音を密に。慣れたらマイナー・転回形で色を変えて応用。

```json
{
  "id": "m2.w5.d4.groove_b",
  "type": "tab",
  "meta": { "title": "Triad cutting groove B (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 74, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 74。** トライアドの位置を移したり色を変えたりして自分のカッティング・グルーヴに。下の弦ゼロを維持。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。3弦トライアドでゴースト・アクセントを1つずつ乗せてウォームアップ。下の弦ミュートも点検し続けて。

**10〜20分 · 頭のトレーニング（今日のターゲット＝3層＋3弦）**
バッキングのスネアにアクセントを合わせ、ゴースト・実音・アクセントを3弦カッティングでどう配置するか描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 74）**
**例1**（グルーヴA）をバッキングの上で4回 → **例2**（グルーヴB）へ。慣れたらマイナー・転回形・別の場所で応用。下の弦ゼロ。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：3弦だけ爽やかに鳴るか／アクセントはスネアと噛み合うか／下の弦の雑音はないか。

**今日の完了基準：** 3弦トライアドにゴースト・アクセントを乗せたカッティング・グルーヴを、バッキングの上で下の弦の雑音なく保てる。（5週目完成！）

## ④ ヒント / よくあるミス

- **高音域なのに鈍い。** カッティングが弱いか手首を使っていません。高音弦は軽くトントンかすめてこそきらめく。
- **アクセントがスネアから外れる。** 2・4拍に正確に。高音域はずれると余計に目立ちます。
- **下の弦の雑音。** グルーヴが複雑になるほどミュートが緩みます。左手ミュートを最後まで。
- **変奏なしの反復。** マイナー・転回形・位置移動で4小節に変化を。高音域は特に単調になりやすい。
