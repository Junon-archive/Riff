---
title: "オクターブの手の形 — 手が覚える梯子の一段"
dayKey: "m1.w2.d2"
estMinutes: 50
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — オクターブの手の形、スラップグルーヴの8割

## ① 理論・解説

昨日は二つの開放音で**T-P**を均一にしました。今日はスラップグルーヴの心臓、**オクターブの手の形**を手に入れます。この一つの手の形が<mark>スラップグルーヴの8割</mark>です。**サムでルート、ポップでそのオクターブ** — まさにこの組み合わせがスラップでいちばんよくある基本フォームです。

手の形はこうです。**サムはルートE（開放4弦）**、**ポップは1オクターブ上のE（2弦2フレット）**です。左手の人差し指（または薬指）で2弦2フレットを押さえ、親指は下の4弦を「ドン」、人差し指・中指は上の2弦を「パチッ」。この開いた手の間隔が<mark>手が覚える梯子の一段</mark>です — 一度覚えればどのフレットへ移してもフォームはそのままです。このフォームを手に入れれば、**A・D・Gどのルートへ移しても**形が同じなので、これから学ぶスラップグルーヴの大半はこのオクターブの上で育ちます。今日フォームを正確に刻んでおけば、あとでどんな曲に出会ってもずっと楽になります。だから今日は速さではなく、フォームとジャンプの「正確さ」にだけ価値を置きます。

今日の目標は速さではなく**きれいなオクターブジャンプ**です。サムが4弦を叩いて跳ね返ったあと、指がすぐ2弦のオクターブを引っかけて弾きます。間の弦（**3弦A**）は**左手人差し指の側面で軽く覆って**雑音が出ないようにします。<mark>ドンとパチッが同じ大きさできれいに</mark>つながれば今日は成功です。**BPM 60**からゆっくり。

**5弦**なら手の形は4弦とまったく同じです。低音Bは親指で覆っておき、慣れたらこのオクターブグルーヴをB弦のルートへ移してもっと重く試してもよいです。

## ② ビジュアル資料

今日は**オクターブの手の形**をフレットボードにまず刻み、4分音符で<mark>きれいなオクターブジャンプ</mark>を覚えたあと8分音符で貼り合わせます。各例は**4弦・5弦の二つのバージョン**です。

まずは**オクターブの手の形マップ**。下の青がサムで叩くルートE（4弦）、上の青がポップで弾くオクターブE（2弦2フレット）です。

```json
{
  "id": "m1.w2.d2.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 下の青がルートE（4弦、親指サム）、上の青がオクターブE（2弦2フレット、人差し指・中指ポップ）です。この開いた手の間隔を目に焼き付けます。

```json
{
  "id": "m1.w2.d2.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じです。低音Bは親指で覆っておき、慣れたらB弦のルートへも移してみます。

**例1 — オクターブT-P 4分音符。** ルート（サム）-オクターブ（ポップ）を1拍ずつ交互に。<mark>ジャンプがきれいか</mark>が肝心です。

```json
{
  "id": "m1.w2.d2.octave_quarter_4",
  "type": "tab",
  "meta": { "title": "Octave T-P quarters — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
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

▶ **BPM 60、4弦。** サムでルートE、ポップでオクターブE。間の弦が鳴らないよう左手で軽く覆います。

```json
{
  "id": "m1.w2.d2.octave_quarter_5",
  "type": "tab",
  "meta": { "title": "Octave T-P quarters — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
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

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。低音Bは親指で寝かせておきます。

**例2 — オクターブT-P 8分音符。** 1拍にドン-パチッ一組ずつ、ジャンプを少し速く。速くなっても<mark>オクターブがきれいに引っかかる</mark>ところまでだけ上げます。

```json
{
  "id": "m1.w2.d2.octave_eighth_4",
  "type": "tab",
  "meta": { "title": "Octave T-P eighths — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** ジャンプが速くなってもドンとパチッの大きさが崩れないように。

```json
{
  "id": "m1.w2.d2.octave_eighth_5",
  "type": "tab",
  "meta": { "title": "Octave T-P eighths — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 4弦と音は同じです。ここでも低音Bは親指で寝かせておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の開放**T-P（E・G）**をBPM 60で数回解して両手を目覚めさせます。ドンとパチッがどちらも生きているか確認します。

**10〜20分 · 頭のトレーニング**
オクターブの手の形を取り、例1をとてもゆっくり。<mark>サムからポップへ手が滑らかに開くか</mark>にだけ集中します。

**20〜40分 · 実践**
例1（4分音符）を**BPM 60**で反復 → ジャンプがきれいなら例2（8分音符）へ進み**BPM 65**。間の弦の雑音が出たら再びゆっくり戻します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>オクターブジャンプが雑音なくきれいか</mark>を聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** オクターブの手の形でルート-オクターブT-PをBPM 60〜65で、間の弦の雑音なくきれいに交互に弾ける。

## ④ ヒント・よくあるミス

- **間の弦が鳴る。** オクターブの間の3弦（A）が漏れると音が汚れます。左手人差し指の側面で軽く覆って寝かせます。
- **手が狭すぎる。** オクターブの間隔が取れないとポップが違う弦に引っかかります。4弦↔2弦の開き幅を手に覚えさせます。
- **ポップだけ大きい。** ポップは弾けて大きく聞こえがちです。サムを少し力強く弾いてバランスを合わせます。
- **低音Bの油断（5弦）。** 手が開く間にBが漏れやすいです。親指で常にBを覆っておきます。
