---
title: "ルート＋ゴースト — ドン-チャッをグルーヴへ"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — ルート＋ゴースト、ドン-チャッをグルーヴへ

## ① 理論・解説

昨日きれいな「チャッ」一つを手に入れました。今日はそのゴーストを**ルート音と交互に**置いてグルーヴにします。ベースの最も基本的なバウンス・リズムがまさにこの**「ドン-チャッ」**です。<mark>ドンは開放Eのルート、チャッは左手を乗せたゴーストです。</mark>この二つが交互に行き来すると、リズムが生き生きと動きます。

今日の素材は**「ドン、チャッ-チャッ」**パターンです。一拍にルートを「ドン」と鳴らし、次の拍にゴーストを「チャッ-チャッ」と二回埋めます。<mark>ルートがグルーヴの柱なら、ゴーストはその間を埋める隙間の音</mark>です。音のない場所をゴーストが埋めると、リズムが前へ転がります。

カギは**ルートとゴーストの音量バランス**です。ドンが大きすぎてチャッが埋もれるとバウンスが死に、逆にチャッが強すぎるとうるさくなります。<mark>ドンははっきり、チャッは少し小さく</mark> — この対比が跳ねる感じを作ります。

今日は**BPM 70**でゆっくり転がします。手が自動でドン-チャッを行き来するまで繰り返します。<mark>ルートとゴーストが自然に交互に出れば、今日は成功です。</mark>開放Eだけでなく開放Aにも同じフォームが移るのを感じてみましょう。

## ② ビジュアル資料

今日のビジュアル資料は二つです。**開放E**でドン-チャッを覚え、同じフォームを**開放A**へ移します。<mark>ドン-チャッ一つのフォーム</mark>は位置を移すだけでどこでも通じます。各例は4弦・5弦の二つのバージョンです。

まず**開放Eのドン-チャッ**です。拍ごとにルート（4弦）をドンと鳴らし、3弦のゴーストでチャッ-チャッを埋めます。

```json
{
  "id": "m2.w5.d2.boom_chka_4",
  "type": "tab",
  "meta": { "title": "Boom-chka on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** ドン（開放E）は4分音符、チャッ-チャッ（ゴースト）は8分音符二つです。ドンははっきり、チャッは少し小さく。

```json
{
  "id": "m2.w5.d2.boom_chka_5",
  "type": "tab",
  "meta": { "title": "Boom-chka on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 位置と方法は4弦と同じです。低音**B**は親指で覆っておきます。

今度は同じフォームを**開放A**へ移します。ルートを3弦の開放Aに変え、ゴーストは2弦でチャッ-チャッを出します。<mark>フォームはそのまま、位置だけ一弦上へ</mark>移ったのです。

```json
{
  "id": "m2.w5.d2.boom_chka_a_4",
  "type": "tab",
  "meta": { "title": "Boom-chka on A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 70。** ドン（開放A）-チャッ-チャッ。Eで覚えた感覚がそのまま移ってきます。

```json
{
  "id": "m2.w5.d2.boom_chka_a_5",
  "type": "tab",
  "meta": { "title": "Boom-chka on A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 3, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" },
      { "string": 2, "fret": 0, "duration": "eighth", "technique": "dead_note", "role": "scale" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日のゴーストだけ四回をBPM 60で復習し、左手の感覚を呼び戻します。乾いた「チャッ」が再び出るか確認します。

**10〜20分 · 頭のトレーニング**
ドンとチャッ-チャッを手で分けてみます。<mark>ルートを弾く瞬間とゴーストを乗せる瞬間</mark>を頭の中ではっきり分けます。

**20〜40分 · 実践**
**開放Eのドン-チャッ**と**開放Aのドン-チャッ**の二つの例をBPM 70で転がします。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音**
ドン-チャッ・グルーヴ一小節を録音します。聴き返してドンとチャッの音量対比が生きているか点検します。

**今日の完了基準：** ルート（ドン）とゴースト（チャッ-チャッ）を交互にBPM 70で一小節のグルーヴに転がし、4弦・5弦のどちらでも確認できる。

## ④ ヒント・よくあるミス

- **チャッがドンより大きい。** ゴーストがルートを覆うとバウンスが死にます。チャッは少し小さく。
- **チャッ-チャッのタイミングがくっつく。** 二つのゴーストが均等な8分音符になるようメトロノームに正確に合わせます。
- **ルートの音程が揺れる。** 開放弦なので左手の力が漏れると音が濁ります。開放は左手を軽く触れて雑音だけ抑えます。
- **低音Bの油断（5弦）。** 5弦では弾かない低音Bを親指で覆っておきます。
