---
title: "弱いゴーストの間から跳ねる一発"
dayKey: "m1.w3.d3"
estMinutes: 50
i18nKey: "lesson.m1.w3.d3"
---

# Day 3 — 死んだ音・普通の音・強い音、3層の対比

## ① 理論・説明

いよいよWeek 2のゴーストとWeek 3のアクセントを1つに合わせます。本物のファンクの質感はここから生まれます — 弱く敷かれるゴースト（チチチ）の間から、アクセント（パッ）が1〜2発ふいに跳び出す対比。

今日から音は**3層**です。1つ、力を抜いたゴースト（チッ）— 音程のない死んだ音、背景。2つ、普通の実音（タ）— はっきり鳴る中間の音。3つ、強いアクセント（パッ）— ぱっと跳び出す主役。驚くのは、この3層を全部**同じ手の位置で**作ること。左手の圧力と右手の力を調節して、詰め（チッ）・鳴らし（タ）・叩く（パッ）んです。楽譜で色なし＝ゴースト、青＝普通の実音、緑＝アクセント。

この3層の明暗が出ると、のっぺりしたリズムが急に立体的に聞こえます。ドラムでいえばハイハット（チッ）・キック（タ）・スネア（パッ）が1つの手から出るわけです。これがファンクギター1台がリズムセクションのように聞こえる秘密です。

3段階を一度に調節するのは最初は大変かもしれません。当然です — 指1本でボリュームつまみを3コマ回すんですから。今日は完璧でなくていい。「チッ」と「パッ」の対比さえはっきりすれば半分成功、そこに「タ」がそっと混じれば大成功です。3層を自在に操るには時間がかかりますが、それだけ強力な武器です。焦らないで。

## ② ビジュアル資料

3層の音を1つの場所で。色なし＝ゴースト（チッ）、青＝普通の実音（タ）、緑＝アクセント（パッ）。

**例1 — ゴースト＋アクセント（1小節）。** 背景はゴースト、1・3拍の頭に普通の実音、2・4拍の「&」にアクセント。3層が全部入った基本形。

```json
{
  "id": "m1.w3.d3.ghost_accent",
  "type": "tab",
  "meta": { "title": "Ghosts with popping accents (1 bar)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** 「タ・チッ・チッ・チッ／チッ・チッ・パッ・チッ」。3つの音（チッ・タ・パッ）が区別できるか耳で確認して4回。

**例2 — 引っ張ったアクセント（2小節）。** アクセントを「&」に引っ張ったシンコペーション。弱い背景の間から少し押されて跳ねます。

```json
{
  "id": "m1.w3.d3.synco",
  "type": "tab",
  "meta": { "title": "Syncopated accents (2 bars)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "chord_tone", "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "role": "target", "highlight": true, "label": "3" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" },
      { "string": 2, "fret": 9, "duration": "sixteenth", "technique": "palm_mute", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** 慣れたらアクセントの位置を変えて応用。背景のゴーストが切れ続けないかが肝心。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60〜70。1つの場所で「チッ（ゴースト）・タ（実音）・パッ（アクセント）」の3音を交互に出して圧力3段階をウォームアップ。

**10〜20分 · 頭のトレーニング（今日のターゲット＝3層の区別）**
口で「タ・チッ・チッ・チッ、チッ・チッ・パッ・チッ」と3音を区別して歌います。どこがチッ・タ・パッか先に描きます。

**20〜40分 · 実戦グルーヴ（例1・2 / BPM 70）**
**例1**（ゴースト＋アクセント）をBPM 70で4回 → **例2**（引っ張ったアクセント）へ。3層の対比がはっきりかが肝心。

**40〜50分 · 録音・セルフフィードバック（推奨）**
録音してチェック：チッ・タ・パッの3音が区別できるか／背景のゴーストが切れないか／アクセントが一番跳ねるか。

**今日の完了基準：** 1つの手の位置でゴースト・実音・アクセントの3層を圧力で作り、対比のはっきりしたグルーヴを弾ける。

## ④ ヒント / よくあるミス

- **3層がつぶれる。** チッ・タ・パッの音量差がないとただ平ら。3段階をはっきり広げて。
- **背景が切れる。** アクセントや実音に集中してゴーストが消えると絨毯がなくなります。背景を続けて。
- **アクセントが一番でない。** アクセントは3層で最も強く。「タ」より確実に上へ。
- **一度に完璧を欲する。** 3段階は数日かかります。今日はチッ／パッの対比だけはっきりで十分。
