---
title: "要素の総合 — コンピング＋装飾を一小節に"
dayKey: "m2.w8.d1"
estMinutes: 50
i18nKey: "lesson.m2.w8.d1"
---

# Day 1 — 要素の総合：コンピングに装飾を重ねる

## ① 理論・説明

ネオソウル **修了週** の初日です。今週は二ヶ月分のかけらを一つの曲にまとめます。今日はその第一歩 — **コンピング** と **装飾** を一小節に一緒に収めます。<mark>Dm9コンピングにb3→3スミアを重ねると、コードが歌い始めます。</mark>

材料はもう手の中にあります。**Dm9** ボイシング、スタブの間の **ミュートカッティング**、そしてb3から3へ滑る **スミア** です。<mark>この三つのかけらを一小節の中で自然につなぐのが今日のすべてです。</mark>急がなくても大丈夫です。

まず **Dm9** グリップをもう一度目に刻みます。この手の形が今週ずっと **ホームベース** になります。<mark>指が自分で場所を覚えるほど馴染めば、装飾を重ねる余裕が生まれます。</mark>

```json
{
  "id": "m2.w8.d1.dm9_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 grip", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 5, "fret": 5, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 5, "label": "9", "role": "color" }
  ]}
}
```
▶ 5弦5フレット（R）にb3・b7・9を重ねたDm9コンピンググリップです。

## ② ビジュアル資料

これが **コンピング** と **装飾** を一つに結んだ **一小節の総合** です。Dm9スタブとカッティングが転がり、b3→3スミアで少し染まります。<mark>コードを弾くのではなく、なでる最初の感覚です。</mark>

```json
{
  "id": "m2.w8.d1.combined_bar",
  "type": "tab",
  "meta": { "title": "Combined bar — comping + decoration", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 5, "fret": 5, "duration": "eighth", "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 72, スイング16.** Dm9スタブとカッティングの間、3拍目にb3→3スミアがにじみます。コンピングと装飾が一小節に一緒にあります。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** で **Dm9** スタブを拍にきっちり弾きます。<mark>拍が固いほど装飾がぶれません。</mark>

**10〜20分 · 頭のトレーニング（装飾を重ねる）**
スタブの間に **ミュートカッティング** を入れ、3拍目にb3→3 **スミア** を一つだけ重ねます。ゆっくり、一つずつ。

**20〜40分 · 実践 一小節の総合（BPM 72）**
上の **一小節の総合** を繰り返します。下のゆっくり版でスミアの位置を大きく感じてから速さをつけます。<mark>コンピングと装飾が一つの流れにつながれば、今日の目標に到着です。</mark>

```json
{
  "id": "m2.w8.d1.slow_combine",
  "type": "tab",
  "meta": { "title": "Combine slowly", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 3, "fret": 5, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ **BPM 60.** スタブ → カッティング → b3→3スミア → スタブ。スミアの位置を大きく感じます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
録音して聞きます。スタブだけだった昨日と、装飾が重なった今日の一小節を比べます。

**今日の完了基準：** BPM 72, スイング16でDm9コンピングにb3→3スミアを重ね、一小節の総合を途切れず弾ける。

## ④ ヒント / よくあるミス

総合を始めるときによく出るミスだけを挙げます。

```json
{
  "id": "m2.w8.d1.combine_check",
  "type": "tab",
  "meta": { "title": "Combine check", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] },
      { "string": 4, "fret": 3, "duration": "eighth", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "label": "3", "role": "target", "highlight": true, "technique": "hammer_on" },
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b3" }, { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 5, "role": "color", "label": "9" } ] }
    ]}
  ]}
}
```
▶ Dm9を半拍長く押さえておき、スミアだけを別に大きく感じます。

- **スミアが急ぐ。** b3→3を急いで弾くと滑りが消えます。ハンマーでゆっくりにじませます。
- **カッティングが消える。** スタブばかり気にするとグリッドが空きます。隙間ごとに「チッ」を入れます。
- **コンピングが途切れる。** 装飾を重ねるあまりスタブを逃さないよう、手の形はそのまま保ちます。
- **速さから上げる。** BPM 60で三つのかけらを楽につないでから72に上げます。
