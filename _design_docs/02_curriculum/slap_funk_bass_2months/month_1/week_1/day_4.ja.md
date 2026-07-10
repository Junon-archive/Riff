---
title: "サムとポップの初対面 — 生まれて初めてのスラップ音"
dayKey: "m1.w1.d4"
estMinutes: 50
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — サムとポップの初対面、T-P交互

## ① 理論・解説

いよいよ1週目の最終日、そして今週のハイライトです。これまで別々に覚えた**サム（ドン）**と**ポップ（パチッ）**を**<mark>初めて交互に</mark>**叩き、生まれて初めての「スラップ音（T-P）」を出します。キックとスネアが出会ってドラムビートになるように、二つの音が一つに結びつく瞬間です。今週ずっと別々に動いていた二つの音が、今日初めて**一つの手の中で会話を始めます**。

二つの音をどう組み合わせるのでしょう？ いちばん基本は**オクターブ**です。**サムでルートE（開放4弦）**を叩き、**ポップで1オクターブ上のE（2弦2フレット）**を弾きます。なぜオクターブかというと、ポップは高音弦でよく引っかかり、オクターブ上のEがちょうど**細い弦側にあって**手が自然に開くからです。親指は下の4弦、人差し指・中指は上の2弦 — この<mark>オクターブの手の形</mark>がスラップでいちばんよくある基本フォームです。

リズムはとても単純です。**ドン（サム）・パチッ（ポップ）・ドン・パチッ**、4分音符できっちり交互に。決して急がないでください — 今日の目標は速さではなく**<mark>二つの音が同じ大きさで交互に鳴ること</mark>**です。**BPM 60**、ゆっくり。サムとポップのトーンが均一につながれば、それがスラップグルーヴの種です。

**5弦**なら運指は4弦とまったく同じです。低音Bは親指で寝かせておけばよく、慣れたら同じグルーヴを**B弦のルートへ移して**もっと重い低音スラップを試してもよいです。さあ、今週作った二つの音を一つにつなげましょう。

## ② ビジュアル資料

今日は**今週の完成物**を作ります。まずオクターブの手の形をフレットボードで覚え、遅い準備バージョンでT-Pを合わせたあと、<mark>ピン固定のT-P交互</mark>を回します。各例は**4弦・5弦の二つのバージョン**です。

まずは**オクターブの手の形マップ**。下の青がサムで叩くルートE（4弦）、上の青がポップで弾くオクターブE（2弦2フレット）です。

```json
{
  "id": "m1.w1.d4.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下の青がルートE（4弦、親指サム）、上の青がオクターブE（2弦2フレット、人差し指・中指ポップ）です。この手の形を目に焼き付けます。

```json
{
  "id": "m1.w1.d4.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音Bは親指で寝かせておき、慣れたらこのグルーヴをB弦のルートへも移してみます。

**準備 — 遅いT-P。** ルートE（サム）とオクターブE（ポップ）を半小節ずつ長く。まず二つの音を交互に出す感覚を覚えます。

```json
{
  "id": "m1.w1.d4.tp_prep_4",
  "type": "tab",
  "meta": { "title": "Thumb-pop prep (slow) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** サム（ドン）でルートE、ポップ（パチッ）でオクターブEを半小節ずつ長く。急がず、二つの音を交互に出す感覚だけをまず覚えます。

```json
{
  "id": "m1.w1.d4.tp_prep_5",
  "type": "tab",
  "meta": { "title": "Thumb-pop prep (slow) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。低音Bは親指で寝かせ、T-Pを行き来する間ずっと漏れて鳴らないようにします。

**今週の完成物 — 遅いサム-ポップ交互。** いよいよ4分音符で。サム（ドン）-ポップ（パチッ）をきっちり交互に。<mark>速さより二つのトーンのバランス</mark>が先です。

```json
{
  "id": "m1.w1.d4.tp_alternation_4",
  "type": "tab",
  "meta": { "title": "Thumb-pop alternation (slow) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、ゆっくり。** サム（ドン）-ポップ（パチッ）をきっちり交互に。サムは親指が弦を叩いて跳ね返り、ポップは指でオクターブを引っかけて弾きます。

```json
{
  "id": "m1.w1.d4.tp_alternation_5",
  "type": "tab",
  "meta": { "title": "Thumb-pop alternation (slow) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。**5弦なら**低音Bは寝かせておくか、同じグルーヴをB弦のルートでもっと重く試してみてください。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のポップ（開放G）と一昨日のサム（開放E）をBPM 60でそれぞれ解します。**二つの音の手がどちらも目覚めているか**確認します。

**10〜20分 · 頭のトレーニング**
オクターブの手の形を取り、準備例（遅いT-P）をとてもゆっくり反復。<mark>サムからポップへ手が自然に移るか</mark>、その**つなぎ**にだけ集中します。

**20〜40分 · 実践（今週の完成物）**
ピン固定のT-P交互を**BPM 60**で反復します。二つの音が同じ大きさでくっきり交互に鳴るのが目標 — 速くしようとせず、**トーンのバランス**だけを守ります。4弦で覚えたあと5弦でも同じ感覚を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**ドン（サム）とパチッ（ポップ）が同じ大きさで交互に鳴るか**を聴いてみます。今週到達したBPMも記録しましょう。

**今日の完了基準：** 遅いサム-ポップ交互（T-P）をBPM 60で二つの音が同じ大きさでくっきり交互に鳴らし、4弦・5弦のどちらでも弾ける。（1週目完成！）

## ④ ヒント・よくあるミス

- **ポップだけ大きい。** ポップは弾ける音なので大きく聞こえがちです。サムを少し力強く、二つの音の大きさを合わせます。
- **手が遅れて移る。** サムのあとポップが遅いと拍が押します。準備例に戻ってつなぎをゆっくり整えます。
- **速さへの欲。** 60で二つのトーンがずれるのに上げると全部崩れます。今週ずっとそうだったように、バランスが先です。
- **低音Bの油断（5弦）。** T-Pを行き来する間ずっとBは親指で寝かせておきます。手が忙しくなるとBが漏れやすいです。
