---
title: "切って伸ばす — 1小節の中で設計する"
dayKey: "m2.w7.d2"
estMinutes: 50
i18nKey: "lesson.m2.w7.d2"
---

# Day 2 — 音の長さを設計すると曲が語りだす

## ① 理論・説明

昨日はスタッカートとレガートを別々に見ました。今日はこの2つを**<mark>1小節の中で混ぜます。</mark>** ある音は短く切り、ある音は長く伸ばして、リズムに強弱と呼吸を与えるんです。

これが実は「表現」の始まりです。同じ音符が並んでいても、どこを切りどこを伸ばすか設計した瞬間、曲が語りだします。短いスタッカートは<mark>リズムを締める「トッ」</mark>、長いレガートは<mark>息を通す「余白」</mark>。この2つを交互に置くと、硬かったリズムに話すような自然な抑揚が生まれます。人が話すときも、ある言葉は短く、ある言葉は長く伸ばしますよね — 音楽も同じです。

今日の例はスタッカートとレガートを混ぜたパターンです。でも正解はありません。同じリズムでも「どの音を切りどの音を伸ばすか」は<mark>あなたが設計するもの</mark>。例を骨格に、長さをあれこれ変えて、どの組み合わせが一番「ファンキー」に聞こえるか耳で選んでください。

1小節の中で長さを変えると手が混乱するかもしれません。特にレガートで伸ばしていて急にスタッカートで切る転換が難しい。当然です。今日は完璧でなくても、<mark>「長さを自分で選ぶ」感覚</mark>をつかむだけで大きな前進です。音符はそのままなのに長さを変えるだけで曲の表情が変わるのを初めて経験すると、リズムがずっと面白くなります。今日からあなたは演奏者であり、<mark>リズムを自らデザインする編曲者</mark>です。

## ② ビジュアル資料

スタッカート（短く）とレガート（長く）を1小節の中で混ぜます。正解ではなく設計の例 — <mark>自分だけの長さに応用して</mark>。

**例1 — 切って伸ばす（1小節）。** 長い音（レガート）と短い音（スタッカート）が交互に。リズムに抑揚が生まれます。

```json
{
  "id": "m2.w7.d2.mix_1bar",
  "type": "tab",
  "meta": { "title": "Staccato + legato mixed (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 72。** 長い音は最後まで、短い音はきっちり切って。4回弾いて抑揚を感じて。

**例2 — 長さの設計（2小節）。** 短い音と長い音を多様に置いた応用形。慣れたら長さを変えて自分の抑揚に。

```json
{
  "id": "m2.w7.d2.mix_2bar",
  "type": "tab",
  "meta": { "title": "Designing long and short (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "quarter", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 7, "duration": "eighth", "role": "chord_tone", "label": "R" },
      { "string": 5, "fret": 7, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 72。** どの音を切るか伸ばすか自分で変えて、一番ファンキーな組み合わせを探して。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。短い音・長い音を交互に出して転換をウォームアップ。<mark>レガート→スタッカートの転換</mark>に集中。

**10〜20分 · 頭のトレーニング（今日のターゲット＝長さの設計）**
口で「ダーー ダッ！ ダーー ダッ！」と長さを混ぜて歌います。<mark>どこを切り伸ばすか先に設計</mark>します。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 72）**
**例1**（切って伸ばす）をBPM 72で4回 → **例2**（長さの設計）へ。慣れたら長さを変えて<mark>自分の抑揚に応用</mark>。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：<mark>短い音と長い音がはっきり区別できるか</mark>／抑揚は自然か／<mark>転換はなめらかか</mark>。

**今日の完了基準：** 1小節の中でスタッカートとレガートを混ぜ、音の長さでリズムに抑揚を作れる。

## ④ ヒント / よくあるミス

- **全部同じ長さ。** 切る・伸ばすの差がないと平坦。短いのは確実に短く、長いのは確実に長く。
- **転換でもたつく。** レガート→スタッカートが難しい。伸ばして切る地点を先に決めて。
- **細かく切りすぎ。** 全部スタッカートだと窮屈。レガートの余白があってこそ息ができます。
- **正解強迫。** 長さの設計に正解はありません。組み合わせを楽しんで耳で選んで。
