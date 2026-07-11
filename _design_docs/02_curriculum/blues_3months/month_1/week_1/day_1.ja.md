---
title: "シャッフル・フィール — ブルースの心臓の鼓動"
dayKey: "m1.w1.d1"
estMinutes: 50
i18nKey: "lesson.m1.w1.d1"
---

# Day 1 — ロング・ショートで転がせばブルースになる

## ① 理論・説明

ブルースはなぜブルースらしく聞こえるのでしょう？答えはたった一つ、**シャッフル**です。同じ8分音符でも**均等に**弾けばロックンロールになり、**ロング・ショート（長く・短く）**で転がした瞬間にブルースになります。私たちがつい『ダッ・ドゥガ、ダッ・ドゥガ』と口ずさむあの感じ、<mark>馬が駆ける蹄の音</mark>こそがシャッフルです。

原理はこうです。1拍を三等分し、前の二つをまとめて**長く**、最後の一つだけを**短く**弾きます。だから『イチ・ニ・サン』が『イーー・サン』のように聞こえます。譜面には正拍の8分音符で書き、上に**<mark>Swing 8ths</mark>**とだけ表示します。目には均等に見えても、手はロング・ショートで転がす — これが私たちの約束です。

その前に、まずは『のっぺりした正拍』がどんなものか、4分音符で踏んでみましょう。

```json
{
  "id": "m1.w1.d1.plain_pulse",
  "type": "tab",
  "meta": { "title": "Open A — plain quarter pulse", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "straight" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 80、正拍で。** 5弦開放Aを4分音符で『ドン・ドン・ドン・ドン』。この均等な拍がシャッフルの出発点です。

今日は音程への欲はすっかり手放しましょう。**5弦開放A**ひとつだけを押さえ、シャッフルの感覚を体に刻みます。足で正拍を『ドン・ドン』と踏みながら、手はその隙間を**ロング・ショート**で埋めるのです。メトロノームを**BPM 80**に置いて、ゆっくり始めましょう。

焦らなくて大丈夫です。シャッフルは頭で数えるのではなく、<mark>体が揺れながら馴染む</mark>リズムなので、今日つま先が動き出せばもう半分は来ています。この感覚を一つ掴めば、今週ずっと乗せる**A7ブギー・リフ**が自然とグルーヴに乗ります。

## ② ビジュアル資料

では、その正拍を**ロング・ショート**で転がしてみましょう。下の譜面は目には均等な8分音符ですが、上の**<mark>Swing 8ths</mark>**の指示どおり、長く・短く揺らして弾きます。

```json
{
  "id": "m1.w1.d1.shuffle_open",
  "type": "tab",
  "meta": { "title": "Open A — shuffle 8ths (long-short)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフルで。** 5弦開放Aを『ダッ・ドゥガ ダッ・ドゥガ』と2小節。足は正拍、手はロング・ショートです。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60。5弦開放Aを正拍の4分音符で踏み、手と足を合わせます。<mark>足が先に拍を掴む</mark>ようにしましょう。

**10〜20分 · 頭のトレーニング（今日のターゲット＝ロング・ショートの割り方）**
口で『ダッ・ドゥガ』と声に出しながら、1拍がどう**長く・短く**に割れるのか頭に描きます。

下のゆっくり版で、感覚をじっくり刻んでみましょう。

```json
{
  "id": "m1.w1.d1.shuffle_slow",
  "type": "tab",
  "meta": { "title": "Open A — shuffle 8ths (slow)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 60、シャッフルで。** 1小節だけ。急がず、ロング・ショートの『間隔』を耳で確かめます。

**20〜40分 · 実践シャッフル（開放A / BPM 80）**
開放Aでシャッフル8分音符を**途切れず**2小節以上転がします。<mark>手が疲れる前に足が先に揺れているか</mark>を見ます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒を録音してチェック：<mark>ロング・ショートが生きているか</mark> ／ <mark>拍が遅れていないか</mark>。

**今日の完了基準：** 開放Aの一音だけで、シャッフル8分音符をBPM 80で2小節以上均一に転がせる。

## ④ ヒント / よくあるミス

シャッフルを初めて掴むときに一番よくつまずくところだけを集めました。

```json
{
  "id": "m1.w1.d1.shuffle_ref",
  "type": "tab",
  "meta": { "title": "Open A — shuffle reference (1 bar)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 5, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフルで。** 迷ったら戻る基準の1小節。この揺れが正解です。

- **ロング・ショートが逆。** ショート・ロングになるとリズムが転びます。前を長く、後ろを短くで固定します。
- **だんだん均等に。** 速くなるとシャッフルがロックンロールに伸びます。足で正拍を踏み続けて感覚を掴まえます。
- **拍が遅れる。** ロング・ショートに気を取られてテンポが遅くなります。クリックを拍の頭にぴたりと合わせます。
- **手に力が入りすぎ。** 肩と腕が固まるとグルーヴが揺れません。力を抜いて、つま先から動かします。
