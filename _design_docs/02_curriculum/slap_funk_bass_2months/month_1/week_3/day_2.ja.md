---
title: "T-ゴースト-P — サム・チッ・ポップを一つに"
dayKey: "m1.w3.d2"
estMinutes: 50
i18nKey: "lesson.m1.w3.d2"
---

# Day 2 — T-ゴースト-P、サム・チッ・ポップを一つに

## ① 理論・解説

昨日作った**きれいなゴースト（「チッ」）**を、今日はグルーヴの材料として使います。今日の目標は**T-ゴースト-P** — つまり**サム（ドン）-チッ-ポップ（パチッ）**の三つの打撃を一つの流れにつなぐことです。この三拍が今週のグルーヴの<mark>心臓</mark>です。

順番を音で描いてみます。親指で**ルートE（4弦）**を「ドン」、すぐに左手のゴーストで**3弦に「チッ」**、続いて人差し指で**オクターブ（2弦2フレット）**を「パチッ」。ドラムで言えば<mark>キック-ハイハット-スネア</mark>が順に通り過ぎるわけです。その「チッ」一つがドンとパチッの間を埋め、平板だった二音が急に転がり始めます。

今日は欲張らず、**T-ゴースト-Pをきっちり流す**ことだけに集中します。三つの打撃のあとに**休み**を一つ置いて、手が次の束を準備する余裕を持たせます。**BPM 60**で4分音符に三つの打撃を大きく広げて覚えたあと、**BPM 65**で8分音符に細かくつなぎます。三つの<mark>間隔が均一か</mark>が肝心です。最初はポップが急いで付きやすいので、**「チッ」を独立した一つの打撃として**はっきり数えながら広げます。三つの音がそれぞれの場所を守れば、その後の速さは自然と付いてきます。

**5弦**なら音も手の形も4弦と同じです。低音Bは親指で覆っておき、慣れたら同じT-ゴースト-Pをもっと重い低音でも試します。今日は三つの打撃が滑らかにつながる感覚一つだけを手に刻みます。今日この三つが一つに付けば、今週のグルーヴは目の前でほぼ完成します。

## ② ビジュアル資料

まず**オクターブの手の形**をもう一度押さえます — 下の青がサムで叩くルートE、上の青がポップで弾くオクターブEです。その間の「チッ」は3弦に左手を乗せて出します。手の形を確認したら<mark>サム-チッ-ポップ</mark>を4分音符で大きく、8分音符で細かくつなぎます。各例は**4弦・5弦の二つのバージョン**です。

```json
{
  "id": "m1.w3.d2.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下がルートE（サム）、上がオクターブE（ポップ）。その間の「チッ」は3弦で出します。

```json
{
  "id": "m1.w3.d2.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音Bは親指で覆っておきます。

**例1 — T-ゴースト-P 4分音符。** 三つの打撃を1拍ずつ大きく広げます。サム（ドン）-チッ-ポップ（パチッ）のあとに休み一つです。

```json
{
  "id": "m1.w3.d2.tgp_quarter_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** ドン（T）-チッ-パチッ（P）-休み。三つの間隔が均一かゆっくり確認します。

```json
{
  "id": "m1.w3.d2.tgp_quarter_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と手の形は4弦と同じです。低音Bは親指で寝かせておきます。

**例2 — T-ゴースト-P 8分音符。** いよいよ細かく。一小節に<mark>サム-チッ-ポップ-休み</mark>を二回入れます。

```json
{
  "id": "m1.w3.d2.tgp_eighth_4",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 1拍の中でドン-チッ-パチッが流れるように。速くなっても「チッ」がつぶれないように。

```json
{
  "id": "m1.w3.d2.tgp_eighth_5",
  "type": "tab",
  "meta": { "title": "Thumb-ghost-pop eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 4弦と音が同じです。ここでも低音Bは親指で寝かせておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日覚えた「チッ」をBPM 60で数回出して手を目覚めさせます。音程がないかもう一度耳で確認します。

**10〜20分 · 頭のトレーニング**
サム-チッ-ポップをとてもゆっくり一打ずつ区切って押さえます。<mark>三つの音の性格がはっきり違うか</mark>（ドン・チッ・パチッ）を一つずつ確認します。

**20〜40分 · 実践**
例1（4分音符）を**BPM 60**で反復 → 三つの打撃が揃ったら例2（8分音符）へ進み**BPM 65**。流れがもつれたら4分音符に戻します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>ドン-チッ-パチッが順にはっきり聞こえるか</mark>を聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** サム（ルート）-ゴースト（「チッ」）-ポップ（オクターブ）を、BPM 60〜65で三つの打撃が均一につながるように、4弦・5弦のどちらでも流して弾ける。

## ④ ヒント・よくあるミス

- **「チッ」が消える。** ドンとパチッばかり気にすると真ん中のゴーストが埋もれます。「チッ」も一つの打撃としてはっきり刻みます。
- **ポップが急ぐ。** 「チッ」のあとにポップが押して付くと流れがもつれます。4分音符に下がって三つの間隔から広げます。
- **手の形が揺れる。** ゴーストを出す間にオクターブの形がゆるむとポップが外れます。形は保ったまま左手だけ軽く乗せて離します。
- **低音Bの油断（5弦）。** 手が忙しくなるとBが漏れやすいです。親指で常にBを覆っておきます。
