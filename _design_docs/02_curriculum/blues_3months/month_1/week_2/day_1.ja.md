---
title: "ブルースの響き — ドミナント7の三つのコード A7・D7・E7"
dayKey: "m1.w2.d1"
estMinutes: 50
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — ドミナント7が作るブルースの色

## ① 理論・説明

2週目の扉が開きました。今週の目標はたった二つです。**12小節ブルース・フォーム**を覚え、1週目のブギーをD7・E7へ移すことです。今日はその第一歩として、ブルース独特の響きを作る**ドミナント7コード**を三つ手に入れます。<mark>ブルースではI度・IV度・V度がすべて7コードです。</mark>普通の音楽なら主和音は明るいメジャーですが、ブルースはそこに**b7**を乗せて少し緊張した色を塗ります。このb7こそがブルースの声です。明るいメジャーコードが満面の笑顔なら、b7が乗ったドミナント7は少し目を細めた笑顔です。その微妙な緊張が耳をずっと引き止めます。理論が難しく感じても心配いりません。今日はただ、この三つのコードを指先で出会う日です。

Aブルースの三本柱は**A7**（I度）、**D7**（IV度）、**E7**（V度）です。A7は家、D7は一歩外へ出た場所、E7は最も張り詰めていて家へ戻りたくなる場所です。三つのコードはすべてルート・3度・5度・b7でできていて、名前が変わるだけで性格は同じです。<mark>だから一つを押さえる手の感覚が、そのまま残りの二つへつながります。</mark>

今日は速さもリズムも気にしないでください。三つのコードを一つずつ**きれいに鳴らすこと**だけが目標です。各コードで**どの弦がルートか**だけ覚えておけば、明日ブギーを移すとき大いに役立ちます。一つひとつのコードを声に出して確認するこの時間が、来週の12小節をずっと楽にしてくれます。

家であるI度、**A7**から手に馴染ませます。5弦開放のAがルートです。

```json
{
  "id": "m1.w2.d1.a7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "A7 open chord — I of A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **5弦開放のA**がルートです。4弦2フレット（5度）、3弦開放（b7）、2弦2フレット（3度）を一緒に押さえます。6弦はミュート。

## ② ビジュアル資料

次は一歩外へ出た**D7**と、最も張り詰めた**E7**です。

```json
{
  "id": "m1.w2.d1.d7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "D7 open chord — IV of A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 1, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 1, "fret": 2, "finger": 3, "label": "3", "role": "chord_tone" }
  ]}
}
```
▶ **4弦開放のD**がルートです。3弦2フレット（5度）、2弦1フレット（b7）、1弦2フレット（3度）を押さえます。5・6弦はミュート。

<mark>三つのコードのルート弦はそれぞれ5・4・6弦と違います。</mark>**E7**は6弦開放Eがルートなので、低音が重く鳴ります。

```json
{
  "id": "m1.w2.d1.e7_form",
  "type": "fretboard_diagram",
  "meta": { "title": "E7 open chord — V of A blues", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 2, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 0, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 1, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 0, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 0, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **6弦開放のE**がルートです。5弦2フレット（5度）、4弦開放（b7）、3弦1フレット（3度）を押さえます。六本すべて鳴らしても構いません。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
BPM 60。三つのコードを押さえては離して手をほぐします。<mark>鳴るべき弦だけがきれいに出ているか</mark>を一つずつ確認します。

この順番でゆっくり替えてみましょう。一コードに全音符一回ずつ、たっぷりと。

```json
{
  "id": "m1.w2.d1.change_drill",
  "type": "tab",
  "meta": { "title": "A7 - D7 - E7 change drill", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "A7", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 2, "fret": 2, "role": "chord_tone", "label": "3" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "D7", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 1, "role": "chord_tone", "label": "b7" }, { "string": 1, "fret": 2, "role": "chord_tone", "label": "3" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 6, "fret": 0, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "down", "chordSymbol": "E7", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 0, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 1, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 0, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 0, "role": "chord_tone", "label": "R" } ] }
    ]}
  ]}
}
```
▶ **BPM 60。** A7→D7→E7を一小節に一つずつ、下へ一回ずつ弾きます。コードが替わる前に手の形を準備します。

**10〜20分 · 頭のトレーニング（今日のターゲット＝コードごとのルート弦）**
コードを替える前に**どの弦がルートか**（A7＝5弦、D7＝4弦、E7＝6弦）を声に出して言います。

**20〜40分 · 実践コード巡回（BPM 60）**
A7→D7→E7を<mark>途切れず</mark>行き来します。<mark>コードが替わるときミスタッチがないか</mark>の二つだけを見ます。

**40〜50分 · 録音／セルフフィードバック（推奨）**
30秒録音してチェック：<mark>三つのコードがすべてきれいに鳴るか</mark>。

**今日の完了基準：** A7・D7・E7の三つのドミナント7コードをそれぞれきれいに鳴らし、途切れず互いに替えられる。

## ④ ヒント / よくあるミス

三つのコードでよく出るミスだけを挙げます。

```json
{
  "id": "m1.w2.d1.mute_check",
  "type": "fretboard_diagram",
  "meta": { "title": "Mute the unused low strings", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **D7では6・5弦をミュート。** 低音が鳴るとコードが濁ります。親指で6弦を軽く止めます。

- **A7の2弦が鳴らない。** 3度（C#）が抜けると明るいブルースの味が消えます。指先を立てて押さえます。
- **D7で低音二弦が漏れる。** 6・5弦をしっかり止め、Dルートから鳴らします。
- **E7がぼやける。** 3弦1フレット（3度、G#）を人差し指で正確に押さえます。
- **コードの切り替えが遅い。** 次のコードの手の形を一拍早く思い浮かべます。
