---
title: "ダブル・サム味見 — 親指ダウン-アップ"
dayKey: "m2.w7.d3"
estMinutes: 50
i18nKey: "lesson.m2.w7.d3"
---

# Day 3 — ダブル・サム味見、親指ダウン-アップ

## ① 理論・解説

今週の最後に<mark>少し覗く</mark>ものがあります — **ダブル・サム**です。これまでサムは下へ「タッ」と打つ**一方向**でした。ダブル・サムは親指を下へ打ったあと、戻って上がりながら<mark>もう一度弾きます</mark>。ダウン-アップ、**一つの動作から二つの音**が出るのです。高難度なので今日は原理だけ味見します — できたらいいし、できなくても大丈夫です。無理して急ぐ必要はまったくありません。

いちばん多い練習は**オクターブ**です。開放**E**（R）を親指で下へ打ち（ダウン）、親指が戻りながら**D弦2フレットのE**（一オクターブ上のR）を上へ引っかけて弾きます（アップ）。二つの音とも**親指一本**で出すのです。指のプルと違って、親指が<mark>ドラムスティックのように</mark>上下します。低いダウンがキック、オクターブのアップがスネアのように聞こえます。

コツは親指の力を抜いて**軽く転がす**ことです。下へ打つときは指先の肉で「タッ」、上がるときは爪側で弦を軽く引っかけて「ティッ」。**BPM 50**のようにとてもゆっくり、ダウンとアップが**同じ大きさ**で出るかだけを見ます。アップが弱いのは普通です — 今日はただ<mark>こういうものがあるんだ</mark>と感じれば十分です。表記は別になく、ただ親指二回だと思います。

**5弦**でもオクターブは4弦と同じです。低音**B**は親指の側面で覆っておき、オクターブの**二つのE**だけに集中します。今日は完成が目標ではなく**経験**が目標です。明日は今週のポッピング・メロディ・ラインを完成させるので、ダブル・サムは気楽に味見だけします。まず二つのEの場所を指板に押さえます。

```json
{
  "id": "m2.w7.d3.thumb_octave_home_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Double thumb octave (E-E, R-R) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦。** 下の**開放E**（ダウン）、上の**D弦2フレットのE**（アップ）。オクターブの上下二つの場所です。

```json
{
  "id": "m2.w7.d3.thumb_octave_home_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Double thumb octave (E-E, R-R) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 2, "fret": 2, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦。** 手の場所は4弦と同じです。低音**B**は親指で覆っておきます。

## ② ビジュアル資料

今日は**ダブル・サム**を<mark>味見だけ</mark>します。まず慣れた**親指ダウン**で手を温めてから、オクターブをダウン-アップで転がします。各例は**4弦・5弦の二つのバージョン**です。

まずは**親指ダウン**。開放**E**（R）を4分音符できっちり打ち下ろして、慣れた**ダウン打撃**を確認します。

```json
{
  "id": "m2.w7.d3.thumb_down_4",
  "type": "tab",
  "meta": { "title": "Thumb down pulse (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 四回の慣れたダウン。ここに「アップ」を乗せます。

```json
{
  "id": "m2.w7.d3.thumb_down_5",
  "type": "tab",
  "meta": { "title": "Thumb down pulse (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5弦。** 音は4弦と同じです。低音Bは親指で寝かせておきます。

いよいよオクターブを**ダウン-アップ**で転がします。低い**E**はダウン、高い**E**は親指が戻りながら出す<mark>アップ</mark>です。

```json
{
  "id": "m2.w7.d3.thumb_octave_4",
  "type": "tab",
  "meta": { "title": "Double thumb octave down-up (E-E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 低いEはダウン、高いEはアップ。表記はないですが、どちらも親指一本です。

```json
{
  "id": "m2.w7.d3.thumb_octave_5",
  "type": "tab",
  "meta": { "title": "Double thumb octave down-up (E-E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のダブルストップを**BPM 60**で軽く流して手を目覚めさせます。今日は親指の力を<mark>すっかり抜いて</mark>軽く振っておきます。

**10〜20分 · 頭のトレーニング**
下のように**とてもゆっくり**、1小節目はダウンだけ、2小節目はオクターブの**ダウン-アップ**です。

```json
{
  "id": "m2.w7.d3.thumb_slow_4",
  "type": "tab",
  "meta": { "title": "Down + octave down-up, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 50, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 50、4弦。** 1小節目ダウン、2小節目ダウン-アップ。アップが少し弱くても大丈夫です。

```json
{
  "id": "m2.w7.d3.thumb_slow_5",
  "type": "tab",
  "meta": { "title": "Down + octave down-up, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 50, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは親指の側面で覆っておきます。

**20〜40分 · 実践**
オクターブのダウン-アップを**BPM 60**でゆっくり転がします。アップが<mark>出なければ</mark>テンポをさらに落として親指の戻しだけを練習します。4弦で感覚をつかんだあと5弦でも少し確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して<mark>ダウンとアップの両方が聞こえるか</mark>を聴きます。だめならダウンだけはっきりしていれば今日は十分です。

**今日の完了基準：** 開放Eをダウンで打ったあと親指が戻りながらオクターブEをアップで出すダブル・サムの原理をBPM 50で味見できる。

## ④ ヒント・よくあるミス

オクターブのダウン-アップを**BPM 70**へほんの少しだけ押して、転がしが少し速くなっても形が残るか確認します。

```json
{
  "id": "m2.w7.d3.thumb_check_4",
  "type": "tab",
  "meta": { "title": "Octave down-up check — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** 少し速くなっても**ダウン-アップ**の形が残るか確認します。だめならまたゆっくり。

```json
{
  "id": "m2.w7.d3.thumb_check_5",
  "type": "tab",
  "meta": { "title": "Octave down-up check — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 2, "fret": 2, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **5弦。** 音と場所は4弦と同じです。低音Bは常に親指で覆っておきます。

- **アップが出ない。** 戻る親指が弦を捕まえられないと音が出ません。**爪側の角**で軽く引っかけます。
- **手首が硬い。** 力が入ると転がしにくいです。**親指を軸に**軽く振ります。
- **拍子が揺れる。** アップを気にしてダウンが遅れやすいです。**ダウンを基準**にして正拍を守ります。
- **低音Bの油断（5弦）。** オクターブに没頭してBが鳴りやすいです。親指の側面で常にBを覆っておきます。
