---
title: "指で弾くポップ — 開放Gの「パチッ！」"
dayKey: "m1.w1.d3"
estMinutes: 50
i18nKey: "lesson.m1.w1.d3"
---

# Day 3 — 指で弾くポップ、パチッ！

## ① 理論・解説

今週の二つ目の音、ポップです。サムが**キックドラム**なら、ポップは**<mark>スネア</mark>** — 指で弦を弾いて「パチッ！」という鋭い音を出します。向きはサムと正反対です。サムが弦を「叩く」のに対し、ポップは弦を**上へ引き上げて放し**、弦がフレットボードを叩くようにします。だからポップはサムよりずっと**明るく弾ける音**で、ファンクらしい弾むアクセントを作ります。

動きはこうです。**人差し指か中指の第一関節**を高音弦の**下に軽く引っかけます。** その状態で指を**上へ引き上げてパッと放す**と、弦が跳ね上がってフレットボードに当たり「パチッ！」と鳴ります。今日のターゲットはいちばん細い弦、**<mark>開放G（1弦）</mark>**です。細い弦なのでポップがいちばん引っかかりやすく、音もいちばん軽快です。

核心は**力ではなく向き**です。横に引っ張ると指が痛いだけで音は鈍くなります。大事なのは指が**弦の下から上へ**、パチッと弾き上げる軌道です。最初は指先がヒリヒリして音も弱いかもしれません — タコができれば爽快な「パチッ」がすぐ出るので心配いりません。<mark>強くではなく正確に</mark>が今日の合言葉です。ポップは**人差し指・中指のどちらでも**使えます — 今は楽な指一本から始め、音が安定したら二本を交互に使ってもよいです。

ポップは高音弦なので、**5弦でも手の位置は4弦とまったく同じです。** 低音Bとは直接関係ありませんが、昨日覚えたミュートの習慣は続けます — 親指で低い弦を覆っておくと、ポップするときに他の弦が一緒に鳴るのを防げます。

## ② ビジュアル資料

今日は**三つの例**を見ます。まずポップを引っかける**位置**をフレットボードで確認し、開放Gを4分音符・8分音符で弾きます。各例は**4弦・5弦の二つのバージョン**です。譜面では<mark>**P**はポップ（指で弾くこと）</mark>を意味します。

まずは**ポップ位置マップ**。青い点が開放G（1弦） — この弦の下に指を引っかけて上へ弾きます。

```json
{
  "id": "m1.w1.d3.pop_g_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Pop spot on open G — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 青い点が開放G（1弦）です。人差し指か中指をこの弦の下に引っかけて上へ弾き上げます。

```json
{
  "id": "m1.w1.d3.pop_g_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Pop spot on open G — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 1, "fret": 0, "label": "G", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** G（1弦）の位置は4弦と同じです。ポップは高音弦なので低音Bとは関係ありませんが、親指は習慣どおり低い弦を覆っておきます。

**例1 — ポップ4分音符。** 開放Gを1拍に1回ポップで弾きます。<mark>「パチッ」がくっきりしているか</mark>にだけ集中します。

```json
{
  "id": "m1.w1.d3.pop_g_quarter_4",
  "type": "tab",
  "meta": { "title": "Pop on open G — 4-string quarters", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 1拍にポップ1回（P）。4回とも「パチッ」がくっきりし、大きさが同じか確認します。

```json
{
  "id": "m1.w1.d3.pop_g_quarter_5",
  "type": "tab",
  "meta": { "title": "Pop on open G — 5-string quarters", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "quarter", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。親指で低い弦を覆い、ポップに他の弦が一緒に鳴らないようにします。

**例2 — ポップ8分音符。** 1拍を二つに割って8回。速くなっても<mark>指が痛くならない</mark>ところまでだけ上げます。

```json
{
  "id": "m1.w1.d3.pop_g_eighth_4",
  "type": "tab",
  "meta": { "title": "Pop on open G — 4-string eighths", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 1拍に2回ずつ。速くなっても「パチッ」トーンがつぶれず、指に無理がないか見ます。

```json
{
  "id": "m1.w1.d3.pop_g_eighth_5",
  "type": "tab",
  "meta": { "title": "Pop on open G — 5-string eighths", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" },
      { "string": 1, "fret": 0, "duration": "eighth", "role": "chord_tone", "technique": "slap_pop" }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 4弦と音は同じです。ここでも親指で低い弦を覆って共鳴を防ぎます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のサム／ゴーストで右手を軽く解します。まだポップより**手と腕の緊張を抜くこと**が先です。

**10〜20分 · 頭のトレーニング**
開放Gに指を引っかけてとてもゆっくりポップします。その**向き**にだけ集中します — <mark>弦を上へ弾き上げる軌道</mark>が出るか。

**20〜40分 · 実践**
例1（ポップ4分音符）を**BPM 60**で反復 → 「パチッ」がくっきりしたら例2（ポップ8分音符）へ進み**BPM 65**。指が痛ければ止めて少し休みます。

**40〜50分 · 録音・フィードバック**
30秒録音して**「パチッ」がくっきりして大きさが揃っているか**を聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** 開放Gをポップで弾き、60〜65でくっきりした「パチッ」を手が痛くならずに均一に出せる。

## ④ ヒント・よくあるミス

- **横に引っ張る。** 弦を横に引くと手が痛いだけで音は鈍くなります。弦の下から上へ弾き上げましょう。
- **指を深く引っかけすぎる。** 第一関節だけ引っかければ滑らかに抜けます。深く引っかけると弦が放れません。
- **強すぎる。** 力で引っ張ると指先がすぐ荒れます。力より軌道が「パチッ」を作ります。
- **他の弦の共鳴。** ポップするとき下の弦も鳴るなら、親指でそれらを覆って寝かせます。
