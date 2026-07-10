---
title: "ルートを移す — EからGへ、曲になるグルーヴ"
dayKey: "m1.w4.d2"
estMinutes: 50
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — ルートを移す、EからGへ

## ① 理論・解説

昨日は**E グルーヴの1小節**をトーンまで均等に磨きました。今日はその安定したグルーヴを<mark>曲のように動かし</mark>ます。方法は一つ — **ルートを移す**ことです。一つの場所にとどまっていたグルーヴに**E→G**の移動を加えると、繰り返しが急に「進行」になります。

スラップグルーヴで**ルートを移す**とは、手の形全体をまるごと滑らせることです。**E**は4弦開放をサムで、オクターブは2弦2フレットをポップしました。**G**へ行くと、その手の形のまま**サムは4弦3フレット**、**ポップは2弦5フレット**へ上がります。度数の関係（**ルート-オクターブ**）は同じで、<mark>位置だけ三つ</mark>滑ったのです。だから新しい手の形を覚える必要はなく、慣れたオクターブフォームをそのまま移すだけです。

今日のグルーヴは**2小節**です。**1小節はE**、**2小節はG** — 同じサム-チッ-ポップ-チッを各場所で1小節ずつ転がします。鍵は**移動のタイミング**です。1小節の最後の「チッ」が終わる瞬間、左手が**先にGの場所へ**滑っていれば、2小節目の最初のサムが遅れません。**BPM 78**で、移動する瞬間にグルーヴが<mark>途切れないか</mark>に集中します。余裕が出たら2小節目のGを少し強く打って**ダイナミクス**を付けてもよいです — 曲に起伏が生まれます。

**5弦**なら音も移動も4弦と同じです。低音Bは親指で覆っておき、慣れたらG小節をもっと重い低音で試します。今日この**2小節**がつながれば、あなたのグルーヴがついに曲の形を持ちます。

## ② ビジュアル資料

今日は**Gの手の形**を新しく確認し、**E→Gの2小節グルーヴ**をつなげます。各例は**4弦・5弦の二つのバージョン**です。

まずは**Gの手の形**。E オクターブフォームを<mark>そのまま移した</mark>場所です — 下の青が**サムのルートG**（4弦3フレット）、上の青が**ポップのオクターブG**（2弦5フレット）。「チッ」はそのまま3弦で出します。

```json
{
  "id": "m1.w4.d2.octave_shape_g_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (G) — thumb root + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "G" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** サムのルートG（4弦3フレット）、ポップのオクターブG（2弦5フレット）。E フォームを三つ上へ移した場所です。

```json
{
  "id": "m1.w4.d2.octave_shape_g_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape (G) — thumb root + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "G" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 5, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音Bは親指で覆っておきます。

いよいよ**E→Gの2小節グルーヴ**をつなげます。**BPM 78**で<mark>1小節から2小節へ移る継ぎ目</mark>が滑らかか確認します。

```json
{
  "id": "m1.w4.d2.root_move_groove_4",
  "type": "tab",
  "meta": { "title": "Root-move slap groove (E-G) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78、4弦。** 1小節E、2小節G。1小節の終わりで左手を先にGの場所へ滑らせます。

```json
{
  "id": "m1.w4.d2.root_move_groove_5",
  "type": "tab",
  "meta": { "title": "Root-move slap groove (E-G) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 78, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 78、5弦。** 音と移動は4弦と同じです。低音Bは親指で寝かせておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のE グルーヴをBPM 60で軽く回して手を目覚めさせます。今日はそのあとに<mark>Gへ滑る準備</mark>を手に馴染ませます。

**10〜20分 · 頭のトレーニング**
音なしでEの場所とGの場所をとてもゆっくり往復し、<mark>手の形がそのまま移るか</mark>確認します。

**20〜40分 · 実践**
E→Gの2小節グルーヴを**BPM 78**で反復します。移動で遅れたら速度を落として継ぎ目から合わせます。4弦で覚えたあと5弦でも同じ移動を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>EからGへ移るときグルーヴが途切れないか</mark>を聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** E→Gの2小節オクターブグルーヴを、BPM 78で移動が途切れずに滑らかに反復できる。

## ④ ヒント・よくあるミス

- **移動で遅れる。** 左手が遅く動いています。1小節の最後の「チッ」で手を先にGへ移しておきます。
- **Gのポップが外れる。** 新しい位置（2弦5フレット）に人差し指がまだ慣れていません。Gの手の形だけを別に反復します。
- **EとGの大きさが違う。** 移動に気を取られてGが弱くなります。二つの小節の強さを同じに合わせます。
- **低音Bの油断（5弦）。** 手が上へ移動するとBが開きやすいです。親指で常にBを覆っておきます。
