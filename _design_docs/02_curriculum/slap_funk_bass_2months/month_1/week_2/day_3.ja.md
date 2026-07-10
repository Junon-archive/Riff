---
title: "リズムをまとったT-P — 8分と16分の押し引き"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — リズムをまとったT-P、8分と16分

## ① 理論・解説

昨日はオクターブの手の形で**きれいなジャンプ**を覚えました。今日はそのT-Pに**リズム**をまとわせます。これまでは表拍にきっちり叩いてきましたが、今日は<mark>表拍を少し外した配置</mark>でグルーヴの「語り口」を作ります。スラップが楽しく聞こえるのは音が派手だからではなく、**8分と16分が押し引きする**リズムのおかげです。

今日は二つのリズムを覚えます。一つ目は**16分ポップダブル** — ポップを「パチッ-パチッ」と二回速くくっつけて1拍を細かく埋めます。二つ目は**裏拍ポップ（シンコペーション）** — ポップを表拍ではなく<mark>拍と拍の間（「＆」）</mark>に置いてグルーヴを跳ねさせます。手の形は昨日のまま**オクターブ**、変わるのは「いつ叩くか」だけです。同じ二音でも、**叩く位置を変えるだけで**感じががらりと変わります — これがファンクリズムの本当の面白さです。音を増やすのではなく位置を動かしてグルーヴを作る習慣を、今日から手に入れましょう。今日覚える二つのリズムは、来週作る完成グルーヴの材料になってくれます。

まだ**ゴースト（ミュート）は入れません** — 空いた場所は休符で空けておきます（3週目で埋めます）。代わりに<mark>休符の沈黙を正確に守ること</mark>が今日の隠れた課題です。音と同じくらい沈黙もリズムだからです。**BPM 60**から、足で拍を数えながらゆっくり覚えます。

**5弦**なら運指は4弦とまったく同じです。低音Bは親指で覆っておき、慣れたら同じリズムをB弦のルートへ移してもっと重いファンクとして試してみます。

## ② ビジュアル資料

今日はオクターブの手の形はそのままに、**リズムだけ**を変えます。手の形を一度おさらいしたあと、<mark>16分ポップダブル</mark>と<mark>裏拍ポップ</mark>の二つのパターンをtabで覚えます。各例は**4弦・5弦の二つのバージョン**です。

まず昨日の**オクターブの手の形**をもう一度押さえます。下の青がルートE（4弦）、上の青がオクターブE（2弦2フレット）です。

```json
{
  "id": "m1.w2.d3.octave_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 手の形は昨日と同じです — 下がルートE（サム）、上がオクターブE（ポップ）。今日はこのフォームでリズムだけを変えます。

```json
{
  "id": "m1.w2.d3.octave_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave shape — thumb root E + pop octave — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 4弦と同じです。低音Bは親指で覆っておきます。

**例1 — 16分ポップダブル。** サムでルートを叩き、2拍でポップを<mark>「パチッ-パチッ」と16分で二回</mark>速くくっつけます。

```json
{
  "id": "m1.w2.d3.rhythm_sixteenth_4",
  "type": "tab",
  "meta": { "title": "T-P rhythm — sixteenth pop double — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 2拍のポップ二回がくっつかず、はっきり「パチッ-パチッ」と割れるように。空いた休符は正確に空けます。

```json
{
  "id": "m1.w2.d3.rhythm_sixteenth_5",
  "type": "tab",
  "meta": { "title": "T-P rhythm — sixteenth pop double — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "sixteenth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。低音Bは親指で寝かせておきます。

**例2 — 裏拍ポップ。** 今度はポップを表拍ではなく<mark>2拍・4拍の「＆」</mark>に置きます。この一つ分のずれがグルーヴを跳ねさせます。

```json
{
  "id": "m1.w2.d3.rhythm_offbeat_4",
  "type": "tab",
  "meta": { "title": "T-P rhythm — offbeat pop — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** サムは表拍、ポップは裏拍。足で拍を数えながらポップが「＆」にぴったり乗るか確認します。

```json
{
  "id": "m1.w2.d3.rhythm_offbeat_5",
  "type": "tab",
  "meta": { "title": "T-P rhythm — offbeat pop — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "8", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 2, "fret": 2, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 音と位置は4弦と同じです。低音Bは親指で寝かせておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のオクターブ**T-P**をBPM 60で数回解して手の形を目覚めさせます。ジャンプがまだきれいか確認します。

**10〜20分 · 頭のトレーニング**
例1・2を音を出さず膝の上でリズムだけ叩いてみます。<mark>16分ダブルと裏拍ポップのタイミング</mark>を体でまず数えます。

**20〜40分 · 実践**
例1（16分ダブル）を**BPM 60**で反復 → はっきりしたら例2（裏拍）へ進み**BPM 65**。休符がつぶれたら再びゆっくり戻します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>リズムが押し引きしながら生きているか</mark>を聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** オクターブT-Pで16分ポップダブルと裏拍ポップの二つのリズムをBPM 60〜65で、休符まで正確に守って弾ける。

## ④ ヒント・よくあるミス

- **16分がつぶれる。** ポップ「パチッ-パチッ」が一つの塊にくっつくとリズムが死にます。二つ目のポップを少し遅らせてはっきり割ります。
- **裏拍を表拍に引き寄せる。** 裏拍ポップがつい前に引きずられると平板になります。足で拍を数えて「＆」を待ってから叩きます。
- **休符を流す。** 空いた場所を雑に埋めると3週目のゴーストが入る余地がなくなります。今は沈黙を正確に守ります。
- **低音Bの油断（5弦）。** リズムが忙しくなるほどBが漏れます。親指で常にBを覆っておきます。
