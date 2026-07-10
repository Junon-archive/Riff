---
title: "サムの弦移動 — EとAを行き来して寝かせる"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — サムの弦移動とミュート

## ① 理論・解説

昨日、開放Eで最初の「ドン！」が出たなら、半分は来ています。スラップは指ではなくドラム — 覚えていますか、**サムはキック、ゴーストはその隙間を埋める休符**です。今日は二つを足します — **弦を移してサムを叩くこと（E↔A）**と、スラップ本当の難関である**<mark>ミュート（叩かない弦を寝かせること）</mark>**です。この二つが揃って初めて、サムは「練習」から「グルーヴ」に変わります。

弦の移動は見た目より簡単です。**前腕の回転は昨日のまま**、狙う弦だけ変えます。開放Eは**4弦**、開放Aはそのすぐ上の**3弦**です。手首は固定したまま親指を1弦ぶん内側へ移し、同じ角度で弾けばAも同じように「ドン！」と鳴ります。前腕ごと振らず、<mark>親指の移動距離を最小に</mark>抑えるのがコツです。

ところがスラップは音が大きく開放弦が多いので、放っておくと**叩かない弦までうなって**濁ります。だからミュートが必須です。**左手**は使わない弦の上に指を寝かせて軽く乗せて寝かせ、**右手の親指**は今叩いている弦より低い弦を覆います。両手が門番のように協力して初めて、一音だけがくっきり残ります。ここに音程のない**<mark>ゴースト音（「チッ」）</mark>**を合間に入れると、静けさがむしろリズムになります — 譜面ではXで表します。

**5弦**なら寝かせる弦がもう一本増えます。低音Bは親指で覆い続け、E・Aを行き来する間ずっとBが漏れて鳴らないようにします。E・Aの位置は**4弦とまったく同じ**なので、5弦はただミュートに少しだけ気を配ればよいのです。

## ② ビジュアル資料

今日は**三つの例**を見ます。まずE・Aの二つの打点をフレットボードで確認し、サムで<mark>二本の弦を行き来</mark>したあと、ゴースト音でミュートを覚えます。各例は**4弦・5弦の二つのバージョン**です。

まずは**E・Aサム打点マップ**。二つの青い点が開放E（4弦）と開放A（3弦）です。

```json
{
  "id": "m1.w1.d2.thumb_ea_spot_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb spots on E and A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "role": "root" }
  ]}
}
```

▶ **4弦。** 下の青が開放E（4弦）、上の青が開放A（3弦）です。親指を1弦ぶん移して同じ角度で弾きます。

```json
{
  "id": "m1.w1.d2.thumb_ea_spot_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Thumb spots on E and A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "E", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 0, "label": "A", "role": "root" }
  ]}
}
```

▶ **5弦。** E・Aの位置は4弦と同じです。低音Bは親指で覆い、二本を行き来する間ずっと寝かせておきます。

**例1 — サム弦移動 E↔A。** 開放Eと開放Aを交互にサムで叩きます。親指が二本の弦の間を最短距離で行き来します。

```json
{
  "id": "m1.w1.d2.thumb_ea_move_4",
  "type": "tab",
  "meta": { "title": "Thumb slap E-A move — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 開放E（4弦）→開放A（3弦）を交互にサムで。二本の「ドン」の大きさが同じか耳で確認します。

```json
{
  "id": "m1.w1.d2.thumb_ea_move_5",
  "type": "tab",
  "meta": { "title": "Thumb slap E-A move — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root", "technique": "slap_thumb" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦と同じです。低音Bは親指で覆い、移動中も漏れて鳴らないようにします。

**例2 — サム＋ゴースト。** 開放Eのサムとゴースト音（X）を交互に叩きます。<mark>「ドン・チッ・ドン・チッ」</mark>の間の静けさがくっきりするほどグルーヴが生きます。

```json
{
  "id": "m1.w1.d2.thumb_ghost_4",
  "type": "tab",
  "meta": { "title": "Thumb slap with ghost mute — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 表拍は青い開放Eのサム、裏拍はX（チッ）。サムとゴーストの大きさの差が大きいほどリズムがくっきりします。

```json
{
  "id": "m1.w1.d2.thumb_ghost_5",
  "type": "tab",
  "meta": { "title": "Thumb slap with ghost mute — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root", "technique": "slap_thumb" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 4弦と音は同じです。低音Bは親指で覆い続け、ゴーストを出すときもBが一緒に鳴らないようにします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の開放EサムをBPM 60で解しなおします。まず**「ドン」トーンが昨日と同じくらい均一か**を確認します。

**10〜20分 · 頭のトレーニング**
開放EとAをとてもゆっくり行き来します。<mark>親指が1弦ぶんだけ移動するか</mark>、その**最小移動**にだけ集中します。

**20〜40分 · 実践**
例1（E↔A移動）を**BPM 60**で反復 → 二つの「ドン」が揃ったら例2（サム＋ゴースト）へ進み**BPM 65**。叩かない弦がうなって漏れたら例1に戻します。

**40〜50分 · 録音・フィードバック**
30秒録音して**叩いた弦だけ鳴り、残りは静かか**を聴いてみます。今日到達したBPMも記録しましょう。

**今日の完了基準：** 開放EとAをサムで行き来し、60〜65で二つの「ドン」が揃い、叩かない弦は静かなまま移動できる。

## ④ ヒント・よくあるミス

- **親指が大きく動きすぎる。** 弦をまたぐとき親指が遠くへ飛ぶと拍が遅れます。1弦ぶんだけ最小に移しましょう。
- **叩かない弦がうなる。** Eを叩くのにA・D・Gも鳴るなら、左手をその弦の上に軽く乗せて寝かせます。
- **ゴースト音が強すぎる。** チッを強く出すと音程が生き返って濁ります。ごく軽く、ミュートされた打撃音だけを。
- **低音Bの油断（5弦）。** 弦移動に集中してBを逃すと低音が漏れます。親指は常にBの上に乗せておきましょう。
