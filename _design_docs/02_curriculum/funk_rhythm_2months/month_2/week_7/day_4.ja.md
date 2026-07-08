---
title: "スタッカート＋シャッフル・グルーヴ完成"
dayKey: "m2.w7.d4"
estMinutes: 50
i18nKey: "lesson.m2.w7.d4"
---

# Day 4 — 長さと揺れで表現を完成させる

## ① 理論・説明

今週の決勝線です。今日は今週学んだ**スタッカート・コントロールとシャッフル・フィール**を混ぜ、4小節のグルーヴをバッキングトラックの上で完成させます。

今週の2つの武器を整理すると：スタッカートは音の**長さ**を彫る道具 — 短く切って締め、長く伸ばして余白を与える。シャッフルは音の**タイミング**を揺らす道具 — 格子を少し傾けて弾ませる。同じ音、同じリズムでも、この2つを乗せると表現がぐっと生きます。先週までが「何を弾くか」なら、今週は「どう弾くか」です。

今日のグルーヴはこの2つの和です。ある音はスタッカートでトッと切り、全体はシャッフルで少し揺らしながら、バッキングの上で回してください。スタッカートがリズムを締め、シャッフルがそれを揺らすと、硬かったグルーヴが息をして踊りだします。

2か月を振り返ると、あなたはもうリズムのほぼすべての道具を持っています。モーター・ゴースト・アクセント（1か月）、3弦カッティング・シングルノート・スタッカート・シャッフル（2か月）。来週は学ぶ週ではなく**注ぎ出す週**です — ベース・ドラムだけの空のトラックの上で、これを全部混ぜて自分だけのグルーヴを録音します。今日スタッカートとシャッフルが手になじんだなら、最終週の準備は完了です。あとは学んだことを試すのではなく、思いきり注ぎ出して楽しむ舞台だけ。2か月の旅がやがて1曲に完成します。

## ② ビジュアル資料

スタッカート（長さ）とシャッフル（揺れ）を混ぜた完成形グルーヴです。バッキングの上で締めて揺らして回して。

**例1 — スタッカート・グルーヴ（2小節）。** 短く切る音と伸ばす音を混ぜた締まるグルーヴ。定拍ではっきり。

```json
{
  "id": "m2.w7.d4.stac_groove",
  "type": "tab",
  "meta": { "title": "Staccato groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76。** バッキングの上で4回以上。スタッカートがリズムを締めるか感じて。

**例2 — シャッフル・フィール・グルーヴ（2小節）。** 同じ素材を「長く-短く」シャッフルで揺らす。弾むグルーヴ。

```json
{
  "id": "m2.w7.d4.shuffle_groove",
  "type": "tab",
  "meta": { "title": "Shuffle-feel groove — SWING the 8ths (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 76, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 76。** 楽譜は定拍ですがスイングして4回。慣れたらスタッカート・シャッフルを混ぜて自分のグルーヴに録音。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。スタッカート（切る）とシャッフル（揺らす）を軽く復習。2つが手になじんだか点検。

**10〜20分 · 頭のトレーニング（今日のターゲット＝長さ＋揺れ）**
口で長さ（「ダーー ダッ！」）と揺れ（「ダー・ドゥ」）を混ぜて歌います。どう締めて揺らすか設計します。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 76）**
**例1**（スタッカート・グルーヴ）を定拍で、**例2**（シャッフル・フィール）をスイングでバッキングの上で。慣れたら2つを混ぜて自分のグルーヴに。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：スタッカートは締まるか／シャッフルは揺れるか／バッキングと噛み合うか／表現は生きているか。

**今日の完了基準：** スタッカートとシャッフルを混ぜた4小節のグルーヴをバッキングの上で、長さと揺れで表現を生かして保てる。（7週目完成！）

## ④ ヒント / よくあるミス

- **長さ・揺れが平坦。** スタッカート・シャッフルが弱いと表現が生きません。切るときは確実に、揺らすときは明確に。
- **シャッフルが定拍に。** 締めに気を取られて揺れを失います。「ダー・ドゥ」を転がし続けて。
- **複雑にしすぎ。** 道具が多いからと全部入れると散らかります。1〜2の表現をはっきり。
- **バッキングなし。** 表現は他の楽器と一緒でこそ生きます。必ずトラックの上で。
