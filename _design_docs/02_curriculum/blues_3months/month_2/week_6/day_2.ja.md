---
title: "ビブラート — 音を震わせて歌わせる"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — 手首のビブラートで音を歌わせる

## ① 理論・説明

昨日は音を押し上げましたが、今日は音を「震わせて」みます。**ビブラート（vibrato）**は、押さえた音をごく小さく上げ下げして、**一つの音**を揺らす技法です。<mark>ビブラートは、声楽家が長い音を伸ばすとき声を震わせて歌に生気を吹き込むのとまったく同じです。</mark>ただ押さえた音はすぐ死にますが、少し震わせるとその音がずっと生きて呼吸します。ブルースでフレーズの最後の音を長く伸ばすとき、このビブラートがあるかないかで表情がまったく変わります。

ビブラートの核心は「どこから出すか」です。指先だけをちょこちょこ動かすと音が浅く不安定ですが、**手首**から出すと深く安定します。<mark>ドアノブをそっと回すように、手首をゆっくり回して音を押し上げては戻します。</mark>最初は速く震わせたい欲を捨てて、**ゆっくり広く**たった一つだけ作ります。広く一回、また広く一回 — この規則的な揺れが安定したビブラートの始まりです。

ビブラートはどの音にでもかけるものではありません。フレーズが**安定した音に着地したとき**、その音を長く伸ばしながらかけます。ボックス1では**ルート（A）**とb3が特によく合います — 家のように心地よい音なので、長く震わせても聴きやすいのです。<mark>短くかすめる音には、ビブラートをかける隙も理由もありません。</mark>だから今日は、長い音を一つ選んでその上にビブラートを乗せる練習だけをします。一つの音を歌わせること、それが今日の目標です。

```json
{
  "id": "m2.w6.d2.vibrato_intro",
  "type": "tab",
  "meta": { "title": "Vibrato on the root (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 60。** 4弦7フレットのルート（A）を全音符で長く伸ばしながら、手首でゆっくり広く震わせます。音が死なずに歌うか聴いてみてください。

## ② ビジュアル資料

ビブラートをかけやすい「どっしりした音」を指板で見ておきましょう。**4弦7フレットのルート（A）**が一番楽で、緑で示した**3弦5フレットのb3**もとてもよく泣きます。

```json
{
  "id": "m2.w6.d2.vibrato_spots",
  "type": "scale_shape",
  "meta": { "title": "Strong notes to sing with vibrato (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```
▶ **長い音の上にビブラート。** ルートかb3（緑）を長く伸ばしながら、手首でゆっくり震わせます。

<mark>震わせる音を一つだけ決めて、その音が死ぬ前に震わせ始めます。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。ビブラートなしでルートとb3を長く伸ばして音を聴いてみます。**震わせる前の「素の音」**を先に知っておくのです。

```json
{
  "id": "m2.w6.d2.warmup",
  "type": "tab",
  "meta": { "title": "Long tones on Box 1 anchors", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 60。** ルートとb3を二分音符で長く、まだ震わせず音だけ伸ばします。

**10〜20分・頭のトレーニング（今日のターゲット＝手首でゆっくり広く）**
指先ではなく手首が動いているか確かめます。ドアノブを回すように**手首だけをゆっくり**回します。<mark>速く震わせようとせず、広く規則的な揺れ一つから作ります。</mark>

**20〜40分・実戦ビブラート（BPM 60）**
では長い音にビブラートを乗せます。ルートとb3を長く伸ばしながら手首で震わせます。

```json
{
  "id": "m2.w6.d2.vibrato_practice",
  "type": "tab",
  "meta": { "title": "Add vibrato to the long tones", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **ルート・b3にビブラート。** 各音を二分音符で伸ばしながら、手首で広くゆっくり震わせます。

揺れが安定したら、短いフレーズの最後のルートにビブラートで着地してみます。

```json
{
  "id": "m2.w6.d2.vibrato_lick",
  "type": "tab",
  "meta": { "title": "Land a phrase and sing it with vibrato", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **最後の音に着地。** b7-5-4を通ってルートに着いたら、その音を伸ばしてビブラートで歌います。

<mark>最後のルートが死なずに歌い続ければ成功です。</mark>

**40〜50分・録音**
ルートにビブラートで着地するフレーズを録音します。揺れが規則的か、音程が揺れて崩れないか聴いてみます。

**今日の完了基準：** 長い音の上で手首から広く規則的なビブラートを作り、フレーズ最後のルートをビブラートで歌うように伸ばした。

## ④ ヒント / よくあるミス

ビブラートでよくあるミスです。速く震わせるのが上手いわけではありません — 安定した一つのほうがずっとかっこいいです。

```json
{
  "id": "m2.w6.d2.wrist_not_finger",
  "type": "scale_shape",
  "meta": { "title": "Vibrato comes from the wrist, on a strong note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target" }
  ]}
}
```
▶ **手首から、どっしりした音の上で。** ルートやb3（緑）のような安定した音を選んでゆっくり震わせます。

- **指先だけでプルプル震わせる。** 音が浅く不安定になります。手首から大きく動かして深い揺れを作ります。
- **速く震わせすぎる。** 急ぐと音程が揺れて不安定に聞こえます。ゆっくり広く、規則的にが先です。
- **どの音にでもかける。** かすめる短い音ではなく、長く伸ばす安定した音にだけ乗せます。
- **音程が上にしか上がらない。** ビブラートは押さえた音を中心に上下しなければなりません。必ず元の音に戻ります。
