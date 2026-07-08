---
title: "3弦だけ鳴らす — 下の弦を殺すミュートが勝負"
dayKey: "m2.w5.d3"
estMinutes: 50
i18nKey: "lesson.m2.w5.d3"
---

# Day 3 — 本当に難しいのは音を出すことではなく、出さないこと

## ① 理論・説明

高音3弦カッティングの本当の難関は、音を出すことではなく、**音を出さないこと**です。右手が16ビートで広く弾き下ろしても、4・5・6弦は絶対に鳴ってはいけません。

問題はこれ。カッティングを爽やかにするには右手を大きく振らねばならず、そうすると自然に下の弦までかすめてしまいます。ここでプロの秘密は**左手ミュート**です。トライアドを押さえる指の側面と人差し指の先で、使わない下の弦を軽く覆って先に殺しておくんです。すると右手が6弦を全部弾いても、実際に鳴るのは上の3弦だけ。右手は爽やかに、左手はしっかり塞いで — この分業が、きれいなカッティングの核心です。

こうするとむしろ楽になります。右手が「3弦だけ正確に」を気にせず広く振れるからです。狙いの負担を左手ミュートが肩代わりするわけです。カッティング・ファンクがあんなに爽快に聞こえる秘密は、まさにこの左手ミュートにあります。

左手がコードもミュートもやろうとすると最初は大変です。特に6弦を人差し指の先で、4・5弦をトライアドの指の側面で覆うのは不慣れでしょう。当然です。今日は完璧でなくても、広くカッティングしたとき下の弦の雑音が「ぐっと減った」と感じるだけで大きな前進です。この左手ミュートが手になじめば、右手はむしろ思いきり爽やかに振れます。塞ぐ手がしっかりするほど、弾く手が自由になるんです。

## ② ビジュアル資料

広いカッティング・ストロークで3弦だけ鳴らす — 左手ミュートが下の弦を殺します。右手は爽やかに、左手はしっかり。

**Eメジャー・トライアド（復習）。** この3弦だけ鳴らし、4・5・6弦は左手の指の側面・人差し指の先で確実にミュート。

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

**例1 — ミュート中心のカッティング（1小節）。** トライアドは控えめに鳴らし、ほとんどミュート・カッティング。広く弾いても3弦だけ鳴るかが核心。

```json
{
  "id": "m2.w5.d3.mute_1bar",
  "type": "tab",
  "meta": { "title": "Mute-heavy triad cutting (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72。** 右手をわざと広く振っても下の弦が鳴らないか確認して4回。

**例2 — 広いカッティング（2小節）。** 実音はまばら、ミュート・カッティングは密に。右手は大きく、音は3弦だけ。

```json
{
  "id": "m2.w5.d3.mute_2bar",
  "type": "tab",
  "meta": { "title": "Wide cutting, three strings only (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "R" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 9, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 72。** 左手ミュートをしっかり保って4回。慣れたらトライアドを別の場所に移して応用。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。トライアドを押さえたまま左手で下の弦を覆い、6弦を全部弾いても3弦だけ鳴るか点検。

**10〜20分 · 頭のトレーニング（今日のターゲット＝左手ミュート）**
右手を広く振りながら、左手ミュートだけで下の弦を殺す感覚を刻みます。人差し指の先（6弦）・指の側面（4・5弦）の位置を確認。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 72）**
**例1**（ミュート・カッティング）をBPM 72で4回 → **例2**（広いカッティング）へ。広く振っても3弦だけ鳴るのが肝心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：下の弦の雑音はないか／3弦は爽やかに鳴るか／右手は爽やかに広いか。

**今日の完了基準：** 左手ミュートで下の弦を殺したまま、右手を広く振っても上の3弦だけきれいにカッティングできる。

## ④ ヒント / よくあるミス

- **下の弦が漏れ続ける。** 左手ミュートが弱い。人差し指の先を6弦に軽く寝かせて覆って。
- **ミュートでトライアドが死ぬ。** ミュートに力が入りすぎてコード音まで押さえました。上の3弦ははっきり、下の弦だけ軽く。
- **右手が狭くなる。** 下の弦を怖がって右手を縮めるとカッティングが窮屈。左手を信じて広く。
- **速さから。** ミュートが確実なら速くもできます。ゆっくり、下の弦ゼロ。
