---
title: "弦を眠らせるスイッチ — ミュートとゴーストノート"
dayKey: "m1.w2.d2"
estMinutes: 30
i18nKey: "lesson.m1.w2.d2"
---

# Day 2 — 弦を眠らせるスイッチ、ミュート

## ① 理論・説明

今日は今週の心臓、ミュートです。ベースの音の8割は、うまく弾くことではなく**<mark>鳴らしてはいけない弦を殺すこと</mark>**から生まれます。1音だけくっきり鳴り、あとは静か — それがプロのクリーンさです。今日は音を「出す」のと同じくらい、**音を「消す」方法**を学びます。

ミュートには両手が参加します。まず左手。押さえている指の力をほんの少し抜くと、弦が指板から離れて**<mark>音がぷつっと切れます</mark>**。完全に離すのではなく、肉を乗せたまま力だけ抜くんです — スイッチを切るように。この**「押さえて力を抜く」**が、音の長さを手で調節する最初の道具です。この力の調節に慣れると、音を短く切るか長く鳴らすかを手が自分で決めるようになります。

右手も門番です。今弾いている弦より低い弦は、**<mark>親指と弾かなかった指</mark>**でそっと覆って眠らせます。指で1本の弦をはじくと、次の指が自然にその弦に触れて余韻を切ってくれます。両手がこうして協力すれば、うっかり触れた弦も鳴りません。弾かない弦を前もって覆っておくこの習慣が、ステージで雑音のない**クリーンな音を作る本当の秘訣**です。

ときにはわざと**<mark>ゴーストノート（チッ）</mark>**を入れます。音程なしで「チッ」とミュートされた打撃だけを出すもので、リズムにグルーヴを足します。楽譜では音符の代わりに**Xで示されます**。5弦なら眠らせる弦がもう1本増えます — 低音Bは親指で覆い続けるので、4弦より少しミュートに気をつける必要があります。今日の目標はただ1つ、1音だけ鳴り、あとは静寂です。

## ② ビジュアル資料

今日は**音を切る2つの例**を見ます。まず1音を弾いて<mark>すぐ眠らせて静寂を作り</mark>、それからゴーストノートを混ぜたパルスでグルーヴを感じます。楽譜のXは音程なしのミュート打撃（チッ）です。各例を**4弦・5弦の2バージョン**で載せました。

**例1 — 弾いて眠らせる。** 開放Eを弾き、すぐ左手の力を抜いて音を切ります。次の拍はX、つまり音程なしのミュート打撃です。「音 → 静寂」がはっきり分かれるように。

```json
{
  "id": "m1.w2.d2.mute_choke_4",
  "type": "tab",
  "meta": { "title": "Note and mute-choke on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 青の開放Eを弾いて → すぐ力を抜いてX（チッ）で眠らせます。音と静寂の長さが同じ半拍ずつに分かれるように。

```json
{
  "id": "m1.w2.d2.mute_choke_5",
  "type": "tab",
  "meta": { "title": "Note and mute-choke on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 音と位置は4弦とまったく同じ。低音Bは親指で覆い、Xを出すときもBが一緒に鳴らないように。

**例2 — ゴーストパルス。** 開放Eとゴーストノート（X）を交互に8回。「ドゥン・チッ・ドゥン・チッ」のグルーヴが手に付くのが目標です。

```json
{
  "id": "m1.w2.d2.ghost_pulse_4",
  "type": "tab",
  "meta": { "title": "Ghost-note pulse on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65、4弦。** 表拍は青の開放E、裏拍はX（チッ）。2つの音の大きさの差がはっきりするほどグルーヴが生きます。

```json
{
  "id": "m1.w2.d2.ghost_pulse_5",
  "type": "tab",
  "meta": { "title": "Ghost-note pulse on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "technique": "dead_note" }
    ]}
  ]}
}
```

▶ **BPM 65、5弦。** 音は4弦とまったく同じ。低音Bは親指で覆い続けて、速くなってもBが漏れて鳴らないよう眠らせておきます。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日押さえたE弦の低いルートをBPM 60でまたほぐします。**指先がフレットのすぐ後ろに当たっているか**をまず確認します。

**7〜17分・今日の技術**
例1（弾いて眠らせる）をBPM 60で繰り返します。<mark>左手の力を抜く瞬間</mark>に音がきれいに切れ、**余韻が残らないか**だけに集中します。

**17〜27分・応用**
例2（ゴーストパルス）をBPM 60で4回 → **「ドゥン・チッ」がはっきり分かれたら**BPM 65へ1段上げて4回。音がにじんだら例1に戻ります。

**27〜30分・チェック**
今日届いたBPMを書き留め、30秒録音して、弾いた音だけ鳴り、弾かない弦が静かか聴いてみましょう。

**今日の完了基準：** 左手の力抜きと右手のミュートで、1音だけくっきり鳴り弾かない弦は静かに、60〜70で音をきれいに切れる。

## ④ ヒント / よくあるミス

- **指を完全に離す。** 力を抜くのと離すのは違います。肉を乗せたまま力だけ抜けば、次の音へすぐつながります。
- **余韻が残る。** 音が切れた後もうなるなら、右手の親指か指でその弦を覆って残響を押さえます。
- **ゴーストノートが強すぎる。** チッの音を強く出すと音程が戻って濁ります。ごく軽く、ミュートされた打撃の音だけを。
- **低音Bの油断（5弦）。** ミュートに集中してBを離すと低音がうなって漏れます。親指はいつもBの上に乗せておいて。
