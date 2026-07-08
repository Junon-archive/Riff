---
title: "E9にアクセント、そしてm7をひとさじ"
dayKey: "m1.w4.d3"
estMinutes: 50
i18nKey: "lesson.m1.w4.d3"
---

# Day 3 — ワンコードでも、アクセントでグルーヴを完成させる

## ① 理論・説明

いよいよWeek 3の**アクセント**をE9に適用します。コードはE9ひとつだけですが、アクセントだけで完成したファンク・グルーヴを作れます。

背景はゴーストで敷き（ハイハット）、実際のE9コードを合間に鳴らし（キック）、そのうち1〜2か所を強く弾いてアクセント（スネア）を刺します。この3層が1つのコードの上で全部出るので、コードを変えなくてもリズムだけで曲が回ります。アクセントは昨日同様、バッキングのスネア（2・4拍）と噛み合うのが肝心です。

これに今日は**Em7**をひとさじ加えます。E9が明るく緊張感のあるドミナントなら、Em7は暗く柔らかいマイナー（下の図）。ワンコード・ジャムが少し退屈になったとき、時々E9の代わりにEm7へそっと変えると色ががらっと変わります。どちらも根音は5弦7フレットなので、手の位置はほぼそのまま — 内側の指を数本移すだけ。この小さな変化1つが、のっぺりした反復に息を通します。

2つのコードを行き来しながらアクセントまで気にすると手が忙しいでしょう。大丈夫。Em7は今日は「味見」です。完璧に行き来する必要はなく、E9のグルーヴが安定していればそれで十分。Em7は「こんな色もあるんだ」と感じるだけでいい。明日の最終ジャムで、好きなだけ引き出せばいいんですから。コード2つ、アクセント数個 — 素材はこれだけなのに、もう本物のファンク曲の伴奏のように聞こえ始めるはずです。

## ② ビジュアル資料

E9にアクセント（緑）を乗せ、色を変えるEm7も紹介します。どちらのコードも根音は5弦7フレット。

**Em7シェル（色替え用）。** 根音はE9と同じ5弦7フレット。R・b3・b7だけの暗く柔らかいマイナー。E9と交互に色を変えます。

```json
{
  "id": "m1.w4.d3.em7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "Em7 shell (root on 5th string)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 7, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 3, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — E9＋アクセント（1小節）。** 背景はゴースト、1・3拍にE9実音、2・4拍の「&」にアクセント（緑）。アクセントがスネアと噛み合います。

```json
{
  "id": "m1.w4.d3.e9_accent1",
  "type": "tab",
  "meta": { "title": "E9 + accent on the snare (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** 緑の場所だけ強く。バッキングのスネアと重なるか感じて4回。

**例2 — E9アクセント・グルーヴ（2小節）。** アクセントを引っ張った応用形。慣れたら途中でEm7に変えて色を広げて。

```json
{
  "id": "m1.w4.d3.e9_accent2",
  "type": "tab",
  "meta": { "title": "E9 accent groove (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "root", "isRoot": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "role": "target", "highlight": true, "label": "R", "chord": [{ "string": 4, "fret": 6, "role": "chord_tone", "label": "3" }, { "string": 3, "fret": 7, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 7, "role": "color", "label": "9" }] },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 7, "duration": "sixteenth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** E9で4回弾いたあと、1〜2回はEm7で同じグルーヴを。色の違いを感じて。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。E9グルーヴにアクセントを1つずつ乗せて強弱をウォームアップ。E9↔Em7の切替も軽く練習。

**10〜20分 · 頭のトレーニング（今日のターゲット＝アクセント＋コードの色）**
バッキングのスネアに合わせてアクセントの場所を決め、E9/Em7のどこで色を変えるか先に描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 70）**
**例1**（E9＋アクセント）をBPM 70で4回 → **例2**へ進み、慣れたらEm7を混ぜて応用。アクセントがスネアと噛み合うのが肝心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：アクセントはスネアと噛み合うか／E9↔Em7の色の変化が聞こえるか／3層が区別できるか。

**今日の完了基準：** E9ワンコードの上でアクセントでグルーヴを完成させ、時々Em7に変えて色を変えられる。

## ④ ヒント / よくあるミス

- **Em7の切替で手が大きい。** 根音は同じ場所。手全体を動かさず、内側の指だけ。
- **アクセントがスネアから外れる。** 2・4拍に正確に。ずれるとグルーヴが上滑り。
- **コードを変えてモーターが切れる。** Em7に変えるとき右手が止まらないように。揺れは続ける。
- **Em7の完璧強迫。** 今日は味見です。E9のグルーヴが安定していれば十分。
