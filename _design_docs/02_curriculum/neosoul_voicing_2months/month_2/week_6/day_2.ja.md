---
title: "プルオフ下行装飾 — 音がするすると流れ落ちる"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — プルオフ下行装飾

## ① 理論・説明

二日目です。今日は **プルオフ** で音を一つずつ落としながら **下行** する装飾です。<mark>弦を弾いた指を下へ軽く引っかけて次の音を鳴らします — ピッキングなしで音がするすると流れ落ちます。</mark>

3弦で **R（D）→b7（C）→5（A）** へ **プルオフ** を続けて下ろし、開放弦 **4度（G）** を経て **b3（F）** へ着地します。<mark>一度のピッキングで四音が流れれば下行が水のように続きます。</mark>指を離さず、次のフレットを先に押さえておきます。

今日の目標はこの下行装飾を **BPM 72** で途切れず流すことです。<mark>速さではなく、プルオフがなめらかに続き音がするすると下りれば今日の分は果たせたのです。</mark>まず下行が通る場所を目で覚えます。

```json
{
  "id": "m2.w6.d2.descent_position",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off descent path", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 7, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ 3弦7フレット（R）から5・2フレットへ下行し、4弦3フレット（緑のb3）へ着地します。

## ② ビジュアル資料

これが今日の下行装飾です。3弦 **7フレット（R）** から **プルオフ** で流れ下り **b3** へ着地します。<mark>ピッキングは最初の一音だけ、残りは左手が音を流します。</mark>

```json
{
  "id": "m2.w6.d2.pulloff_descent",
  "type": "tab",
  "meta": { "title": "Pull-off descending ornament", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale", "technique": "pull_off" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "pull_off" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 72.** 3弦 **7フレット（D）** から **プルオフ** 三回で流れ下り、開放弦の4度を経て **b3** へ着地します。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
**BPM 60** で3弦の四音（**R・b7・5・4**）を一つずつピッキングします。プルオフなしでまず音を確かめます。<mark>四音が下行ではっきりつながるか先に耳で聞きます。</mark>

**10〜20分 · 頭のトレーニング（プルオフをゆっくり）**
今度は **最初の一音だけ** ピッキングし **プルオフ** で残りを流します。音が途切れたら左指を下へ引っかける感じを少し足します。

**20〜40分 · 実践下行装飾（BPM 72）**
下の二小節を繰り返します。1小節は下行装飾、2小節は **ルート（D）** に着地して休みます。<mark>するすると下りた後ルートへ楽に降りる流れを感じます。</mark>

```json
{
  "id": "m2.w6.d2.pulloff_descent_loop",
  "type": "tab",
  "meta": { "title": "Pull-off descent with resolution", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "pull_off" },
      { "string": 3, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale", "technique": "pull_off" },
      { "string": 3, "fret": 2, "duration": "eighth", "label": "5", "role": "chord_tone", "technique": "pull_off" },
      { "string": 3, "fret": 0, "duration": "eighth", "label": "4", "role": "scale" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "half", "rest": true }
    ]}
  ]}
}
```
▶ **BPM 72.** 1小節下行装飾 → 2小節ルート着地・休み。するすると下りた後ルートへ降りて一息つきます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
下行装飾を録音して聞きます。ぶつぶつ途切れる音と今日のなめらかな下行がどれだけ違うか比べます。

**今日の完了基準：** BPM 72でプルオフ下行装飾（R→b7→5→4→b3）を音が途切れず流し、ルートへ楽に着地できる。

## ④ ヒント / よくあるミス

下行装飾を流すときによく出るミスだけを挙げます。

```json
{
  "id": "m2.w6.d2.descent_map",
  "type": "fretboard_diagram",
  "meta": { "title": "Pull-off descent map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 1, "fretSpan": 7, "dots": [
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```
▶ 3弦のb7・5度が下行の道、4弦の緑のb3が着地です。

- **プルオフが弱い。** 指をただ離さず、弦を下へ軽く引っかけて次の音を鳴らします。
- **音がぶつぶつ途切れる。** 次のフレットを先に押さえておくとプルオフがなめらかに続きます。
- **下行が急ぐ。** 四音を急がず均等に流し下ろします。
- **速さから上げる。** BPM 60に下げて音が途切れずつながることから完成させます。
