---
title: "スタッカート — 余韻をきっちり切る味"
dayKey: "m2.w7.d1"
estMinutes: 50
i18nKey: "lesson.m2.w7.d1"
---

# Day 1 — 同じ音も「切るか伸ばすか」で変わる

## ① 理論・説明

同じリズム、同じ音でも、その音を**<mark>きっちり切るか、ずっと伸ばすか</mark>**でまったく違うグルーヴになります。ファンクのあの締まったタイトな味は、まさに**<mark>スタッカート</mark>**から生まれます。

スタッカートは、音を弾いた直後に手を弦にそっと乗せて**<mark>余韻をきっちり切る</mark>**技術です。短い音の直後にすぐ沈黙が来る。逆に**<mark>レガート</mark>**は音を最後まで伸ばして余韻を残すこと。たとえるなら、スタッカートは点を打つこと、レガートは線を引くこと。同じ音をスタッカートで弾くとリズムがぴんと締まり、レガートで弾くとゆるく開きます。

今日は**<mark>同じパターンを2つの方法で</mark>**比較します。1つは最後まで鳴らすレガート、1つは短く切って沈黙を置くスタッカート。同じ4回の打撃なのに、切るか切らないかで音の印象がどれだけ変わるか、耳で感じてください。<mark>ファンクはほとんどスタッカート寄り</mark> — 短く硬く切ってこそグルーヴが締まります。

```json
{
  "id": "m2.w7.d1.legato",
  "type": "tab",
  "meta": { "title": "Legato — full ring (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" }
    ]}
  ]}
}
```

```json
{
  "id": "m2.w7.d1.staccato",
  "type": "tab",
  "meta": { "title": "Staccato — short stabs (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

切るタイミングは最初は難しい。早すぎると音が出ず、遅いと切れません。左手の力を少し抜くか右手の側面を弦に乗せて切りますが、このタイミングは数日練習して手になじみます。正常です。今日は<mark>「切る」という感覚</mark>が何かを体で知るだけで十分です。この小さな技術1つが、これまで学んだすべてのグルーヴをずっとタイトにする魔法の道具です。

## ② ビジュアル資料

同じ4回の打撃をレガート（長く）とスタッカート（短く＋沈黙）で比較します。<mark>音の長さが印象を変えます</mark>。

**例1 — レガート（1小節）。** 4分音符で音を最後まで鳴らす。ゆるく開いた感じ。

```json
{
  "id": "m2.w7.d1.legato",
  "type": "tab",
  "meta": { "title": "Legato — full ring (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" }
    ]}
  ]}
}
```

▶ **BPM 70。** 音を最後まで伸ばして4回。余韻が残る感じを覚えて。

**例2 — スタッカート（1小節）。** 同じ場所だが短く切ってすぐ沈黙（8分音符＋休符）。ぴんと締まる。

```json
{
  "id": "m2.w7.d1.staccato",
  "type": "tab",
  "meta": { "title": "Staccato — short stabs (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 70。** 弾いた直後に手を乗せて余韻を切る。レガートと交互に弾いて違いを感じて。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。1音を長く（レガート）／短く（スタッカート）交互に出して<mark>切るタイミング</mark>をウォームアップ。

**10〜20分 · 頭のトレーニング（今日のターゲット＝切る）**
口でレガートは「ダーー」、スタッカートは「ダッ！」と声に出して<mark>長さを区別</mark>。いつ切るか先に描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 70）**
**例1**（レガート）と**例2**（スタッカート）をBPM 70で交互に4回ずつ。<mark>同じパターンがどれだけ違って聞こえるか</mark>が核心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：<mark>スタッカートは短く切れるか</mark>／<mark>レガートは最後まで鳴るか</mark>／2つの違いははっきりか。

**今日の完了基準：** 同じ音をスタッカート（短く切る）とレガート（長く伸ばす）で区別して演奏できる。

## ④ ヒント / よくあるミス

- **スタッカートが切れない。** 弾いた直後に手を乗せるのが遅い。弾いたらすぐ余韻を殺して。
- **音がまったく出ない。** 早く切りすぎ。短くても音は一度はっきり出さないと。
- **レガートが短い。** 無意識に切っています。レガートは手を離さず最後まで。
- **速さから。** 切るタイミングが正確でないと表現が生きません。ゆっくり、長さをはっきり。
