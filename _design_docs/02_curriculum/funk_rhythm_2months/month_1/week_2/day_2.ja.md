---
title: "ゴースト・モーター — スクラッチをリズム楽器へ昇格"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 均一な「チチチチ」がハイハットになる

## ① 理論・説明

実はWeek 1であんなに揺らしたミュートスクラッチ、それこそがゴーストノートでした。今日はそのスクラッチを「たまたま出る音」から**<mark>意図したリズム楽器</mark>**へ昇格させます。

目標は16ビートすべてをゴーストで埋め、ドラムのハイハットのような**<mark>均一で細かい「チチチチ」</mark>**を作ること。ここで本当に難しいのは速さではなく**<mark>均一さ</mark>**です。あるゴーストは大きく、あるものは詰まってしまうと、ハイハットではなく汚い雑音になります。16個の「チ」が粒ぞろいで同じ大きさに出るよう、右手のダウン・アップの力と左手の圧力を一定に保ってください。

左手はずっと弦の上にそっと乗せた状態を保ちます。離すと音が切れ、押しすぎると音程が漏れます。<mark>「乗せたままじっと」</mark>— この中立状態が今日の核心です。

退屈に感じるかもしれません。でもこの<mark>均一なゴーストの絨毯</mark>があってこそ、明日その上に実音を置いたとき対比がぐっと生きます。背景が平らなほど主役が際立つものです。今日はこのハイハットの絨毯を30秒、1分、どんどん長く敷いていく日です。完璧に均一でなくても落ち込まないで。今日の「チチチ」が昨日より少しでもそろっていたら、それでもう一歩前進です。背景が丈夫になるほど、明日のグルーヴが生きてきますから。

## ② ビジュアル資料

今日は画面全体がゴーストです。2つの例はどちらも実音なしのゴーストだけ — <mark>均一さを見る資料</mark>です。

**例1 — ゴースト・モーター（1小節）。** 16ビートを全部ゴーストで。16個の「チ」が同じ大きさで出るのが目標。

```json
{
  "id": "m1.w2.d2.ghost_motor_1bar",
  "type": "tab",
  "meta": { "title": "Continuous ghost motor (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 66。** ハイハットのように均一に4回。大小のばらつきなく、粒ぞろいの「チ」。

**例2 — 息をするゴースト（2小節）。** 各小節の終わりにごく短い空白。手は揺れ続け、その2つだけ弦をかすめません。

```json
{
  "id": "m1.w2.d2.ghost_breath",
  "type": "tab",
  "meta": { "title": "Ghost motor with a breath (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "rest": true },
      { "string": 2, "fret": 9, "duration": "sixteenth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "rest": true },
      { "string": 2, "fret": 9, "duration": "sixteenth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 66。** 空白でも手は止まりません。「チ」と「休み」の対比を感じて4回。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。左手を乗せたままゴーストスクラッチだけ。「乗せたままじっと」の<mark>中立の圧力</mark>を探します。

**10〜20分 · 頭のトレーニング（今日のターゲット＝均一さ）**
口で「チチチチ」を<mark>同じ大きさで</mark>数えながら手を揺らします。大きい「チ」小さい「チ」が混ざらないか耳で監視。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 66）**
**例1**（ゴースト・モーター）をBPM 66で4回 → **例2**（息をするゴースト）へ。<mark>16個が粒ぞろいで均一か</mark>が肝心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：<mark>「チ」は全部同じ大きさか</mark>／<mark>音程が漏れなかったか</mark>／<mark>30秒均一に保てたか</mark>。

**今日の完了基準：** 16ビートのゴーストをハイハットのように均一に、音程を漏らさず30秒以上保てる。

## ④ ヒント / よくあるミス

- **大小のばらつき。** ダウンが大きくアップが小さいと絨毯がでこぼこ。ダウン・アップの力をそろえて。
- **音程が漏れる。** 左手を少し押さえてしまっています。「乗せるだけ」の中立を保って。
- **手を離す。** 左手を離すと音が切れます。弦に触れ続けて。
- **飽きて雑に。** この均一な背景が明日の対比の元手です。退屈でも均一に。
