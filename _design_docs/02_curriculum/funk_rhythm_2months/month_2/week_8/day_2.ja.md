---
title: "カッティング・パートを作る — 3弦＋ゴースト＋アクセント"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 曲の「ヴァース」になるカッティングの塊を建てる

## ① 理論・説明

今日から本格的にパートを「ビルディング」します。最初は**コードベースのカッティング・パート**です。5週目の3弦トライアド・カッティングに、2・3週目のゴーストとアクセントを乗せ、チャレンジ・トラックにぴったり合う1つの塊を完成させます。

目標は**4小節ほどの「繰り返せる塊」**を作ること。曲でいえば「ヴァース」のように、ずっと回しても飽きない硬いカッティング・グルーヴです。素材はもう全部学びました — 上の3弦だけ爽やかにカッティング（下の弦は左手ミュートで殺す）、その間をゴーストで埋め、2・4拍のスネアの場所にアクセントを刺す。この3層が3弦の上で回れば、ギター1台でぎっしりしたリズムパートになります。

ここで大事なのは「完成度」です。実験ではなく**1つの完結した塊**を作るので、4小節を途切れず、下の弦の雑音なく、アクセントがスネアとぴったり噛み合うよう磨いてください。この塊が硬いほど、明日作るリフ・パートとの対比が生きます。

もちろん最初から完璧ではありません。カッティング中に下の弦が漏れたり、アクセントがもたついたり、4小節目で揺れたり。当然です。今日は例を骨格に、少しずつ磨いて「ずっと回せる」カッティングの塊を1つ完成させるのが目標です。完成したパートが1つ手に入ると、曲を作ることが思ったより近いと感じるはずです。

## ② ビジュアル資料

曲のヴァースになるカッティング・パートです。3弦トライアドにゴースト・アクセントを乗せて繰り返せる塊にビルディング。

**Eメジャー・トライアド（カッティング）。** この3弦だけカッティングし下の弦はミュート。根音・コードトーン＝青、アクセントは緑でスネアに。

```json
{
  "id": "m2.w8.d2.emaj_triad",
  "type": "fretboard_diagram",
  "meta": { "title": "E major triad (cutting, top 3 strings)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
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

**例1 — カッティング・ビルド1（1小節）。** カッティングにアクセントを2・4拍に。基本の塊の骨格です。

```json
{
  "id": "m2.w8.d2.cut1",
  "type": "tab",
  "meta": { "title": "Cutting groove — build 1 (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78。** トラックの上で4回。アクセントがスネアと噛み合うか確認。

**例2 — カッティング・ビルド2（2小節）。** 実音・ゴースト・アクセントをより密に。4小節に伸ばして「ヴァース」の塊を完成。

```json
{
  "id": "m2.w8.d2.cut2",
  "type": "tab",
  "meta": { "title": "Cutting groove — build 2 (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
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
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
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
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R", "chord": [{ "string": 2, "fret": 9, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 7, "role": "chord_tone", "label": "5" }] },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78。** 2小節を2回つないで4小節に。途切れ・雑音なく磨いて自分のカッティング・パートに。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。3弦カッティングにゴースト・アクセントを1つずつ乗せてウォームアップ。下の弦ミュート点検。

**10〜20分 · 頭のトレーニング（今日のターゲット＝カッティングの塊の設計）**
トラックを聴きながらカッティング・パートのアクセント位置・ゴースト密度を設計。4小節の構造を描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 78）**
**例1**（カッティング・ビルド1）で骨格を作り → **例2**（ビルド2）を4小節に伸ばしてトラックの上で完成。繰り返せるよう磨きます。

**40〜50分 · 録音・セルフフィードバック（推奨）**
カッティングの塊を録音してチェック：3弦だけ爽やかか／アクセントはスネアと噛み合うか／4小節は途切れないか／飽きないか。

**今日の完了基準：** 3弦カッティングにゴースト・アクセントを乗せ、トラックの上で繰り返せる4小節のカッティング・パート（ヴァース）を完成できる。

## ④ ヒント / よくあるミス

- **下の弦の雑音。** カッティングが複雑になるほどミュートが緩みます。左手ミュートを最後まで。
- **アクセントがもたつく。** 4小節目でアクセントがあいまいに。2・4拍を意識し続けて。
- **詰め込みすぎ。** 回して飽きないには余白が必要。ゴーストで息をする場所を。
- **完成せず実験だけ。** 今日は「完結した塊」が目標。1つ選んで磨いて。
