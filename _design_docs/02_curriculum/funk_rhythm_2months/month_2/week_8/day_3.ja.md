---
title: "リフ・パートを作る — シングルノート＋スタッカート"
dayKey: "m2.w8.d3"
estMinutes: 50
i18nKey: "lesson.m2.w8.d3"
---

# Day 3 — カッティングと対比するリフを建てて、つなぐ

## ① 理論・説明

昨日カッティング・パート（ヴァース）を完成させました。今日は2つ目のパート — **シングルノート・リフ**を完成させ、昨日のカッティング・パートと**つなぎます。**

6週目のシングルノート・ラインに7週目のスタッカートを乗せ、ベースと会話するはっきりしたリフを作ります。ここで核心は「対比」です。昨日のカッティングが広くきらめく和音の塊なら、今日のリフはコツコツ拾う単音ライン。カッティングが「ヴァース」なら、このリフは「フック」や「ブリッジ」— 曲に違う色と緊張を与えるパートです。スタッカートで音を短く切ると、ラインがよりはっきりタイトに生きます。

そして今日の本当のミッションは**2つのパートをつなぐこと**です。カッティング4小節 → リフ4小節 → またカッティング、と2つの塊を交互に置けば、もう「曲の構造」が生まれます。パートが変わる瞬間に拍が揺れないよう、そしてカッティングとリフの対比がはっきり聞こえるようつないでください。これが伴奏を超えて「作曲」に一歩踏み込む瞬間です。

2つのパートをなめらかにつなぐのは最初は難しい。特に和音（カッティング）から単音（リフ）へ移るとき、手の形とミュートががらっと変わるから。当然です。今日は完璧な転換より、「2つのパートが対比しつつつながる」曲の骨格を立てるのが目標です。この骨格が立てば、明日の最終録音はこの流れを一発で収めるだけです。

## ② ビジュアル資料

カッティングと対比するシングルノート・リフです。スタッカートではっきり切り、昨日のカッティング・パートとつなぎます。

**Eノートボックス（シングルノート）。** 5・4弦の単音ライン。青＝根音・5度。スタッカートで短く切ってリフをはっきり。

```json
{
  "id": "m2.w8.d3.note_map",
  "type": "fretboard_diagram",
  "meta": { "title": "E funk note box (single-note, strings 5-4)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 8, "dots": [
    { "string": 5, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 5, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 10, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "label": "4", "role": "scale" },
    { "string": 4, "fret": 9, "label": "5", "role": "chord_tone" }
  ]}
}
```

**例1 — リフ・ビルディング（1小節）。** シングルノートをスタッカートで短く切ったライン。カッティングと対比するはっきりさ。

```json
{
  "id": "m2.w8.d3.riff1",
  "type": "tab",
  "meta": { "title": "Single-note riff, staccato (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 7, "duration": "eighth", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 78。** トラックの上で4回。スタッカートでラインがはっきりタイトか確認。

**例2 — 長短のリフ（2小節）。** スタッカートとレガートを混ぜたリフ。慣れたらカッティング・パートと交互につないで。

```json
{
  "id": "m2.w8.d3.riff2",
  "type": "tab",
  "meta": { "title": "Riff with long-short mix (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 4, "fret": 7, "duration": "quarter", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" },
      { "string": 4, "fret": 7, "duration": "quarter", "role": "scale", "label": "4" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "root", "isRoot": true, "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 10, "duration": "eighth", "role": "scale", "label": "b3" }
    ]}
  ]}
}
```

▶ **BPM 78。** カッティング4小節 → このリフ4小節。パート転換で拍が揺れないように。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。シングルノート・ラインにスタッカートを乗せてウォームアップ。カッティング↔シングルノートの手の転換も軽く。

**10〜20分 · 頭のトレーニング（今日のターゲット＝リフ＋つなぎ）**
リフ・パートを設計し、昨日のカッティングとどうつなぐか（カッティング→リフ→カッティング）曲の構造を描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 78）**
**例1・2**（リフ）をトラックの上で完成させたあと、**昨日のカッティング・パートと交互につないで**8小節の構造に。転換で拍の維持が核心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
カッティング＋リフをつないだものを録音してチェック：リフははっきりか／2パートの対比が聞こえるか／転換で拍が揺れないか。

**今日の完了基準：** シングルノート・リフをスタッカートで完成させ、昨日のカッティング・パートとつないで曲の構造（ヴァース＋フック）を作れる。

## ④ ヒント / よくあるミス

- **カッティングとリフが対比しない。** 2つが似ていると構造が生きません。カッティングは広く、リフははっきり対比を。
- **転換で拍が揺れる。** 和音→単音の転換でためらいやすい。転換地点を先に決めて。
- **スタッカートがあいまい。** リフは短く切ってこそタイト。弾いた直後に余韻を切って。
- **つながず別々。** 今日の核心は「つなぐ」こと。2パートを必ず交互に弾いて。
