---
title: "ボックス1の代表リック2 — 下行でルートに答える一文"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — 下行で答える代表リック

## ① 理論・説明

昨日は**ベンド**で扉を開く代表リック1を手に入れました。今日はその一文を閉じる**代表リック2**です。リック1が「問う」側なら、リック2はルートへ下りて「答える」側です。<mark>ブルースソロは結局、開いて閉じる二つの文の対話です — 今日はその答える文を作ります。</mark>この下行リックまで身につければ、今週の最初のソロに必要な**二つの素材**がすべて揃います。この答えるリック一つで、昨日の質問にはっきりした句点を打てます。

今日のリックは高い場所から始まり、階段を下りるようにルートへ着地する**下行リック**です。2弦の**b7（G）**から出発して、5度（E）、4度（D）、b3（C）を順に通ります。<mark>高い音からルートまで一段ずつ下りると、聴く人の耳が「家に着いた」と感じます。</mark>最後は4弦のルートAに**ビブラート**で着地します。下りてくる方向そのものが「もう答えを終える」という合図です。短い下行一つですが、これだけでソロにはっきりした句点を打てます。

下行リックの核心は**速さ**ではなく方向です。音をはっきり押さえながら一段ずつ正確に下りることが大切です。<mark>急がず一音ずつ下りると、ルートの着地がずっとはっきりします。</mark>リック1とリック2を並べると、一つはベンドで開き、一つは下行で閉じます。この**二つのリック**が明日12小節の上に乗せる素材になります。速さは**BPM 75**のままです。特に最後のルートで手を少し止めるその一拍が、答えを完成させる最も大切な瞬間です。さあ、ルートに答える文を作りましょう。

```json
{
  "id": "m2.w8.d2.descend_lick",
  "type": "tab",
  "meta": { "title": "Box 1 lick 2: descending landing", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75、シャッフルの感じ。** 1小節目はb7（G）から5度・4度・b3へ一段ずつ下りてきます。2小節目はb3からb7を通ってルートAにビブラートで着地します。

## ② ビジュアル資料

**下行リック**が指板をどう乗って下りてくるかを**ボックス1の地図**で見ます。緑のルートAが最後に到着する家です。

```json
{
  "id": "m2.w8.d2.descend_map",
  "type": "scale_shape",
  "meta": { "title": "The descending path home on the Box 1 map", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" }
  ]}
}
```
▶ **下りてきてルートへ。** b7から出発して一音ずつ下りて、緑のルートAに着地します。

<mark>高い音から始まってルートで閉じる、この下行が今日のリックのすべてです。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 75。下行リックの着地点である**ルートA**へ下りてくる最後の三音だけを別に温めます。

```json
{
  "id": "m2.w8.d2.warmup",
  "type": "tab",
  "meta": { "title": "Warm up the descent to the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75。** b3からb7を通ってルートAへ下りてビブラートで結びます。着地の瞬間を手に覚えさせます。

**10〜20分・頭のトレーニング（今日のターゲット＝着地の方向）**
実戦に入る前に、高いb7からルートまで下りてくる**方向**を頭の中で描きます。どの音から次の音へ下りるか順序を整理します。<mark>下りる道をあらかじめ描いておくと、手がルートまで迷いません。</mark>

**20〜40分・実戦：代表リック2（BPM 75）**
今日の完成物です。高い場所から一段ずつ下りてルートに答える二小節を弾きます。

```json
{
  "id": "m2.w8.d2.lick2_take",
  "type": "tab",
  "meta": { "title": "Box 1 lick 2, full take", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "half", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 75。** 1小節目はb7からb3まではっきり下りてきます。2小節目はb3・b7を通ってルートAにビブラートで着地します。方向をはっきり保ちます。

<mark>下りてくる道がはっきりして、ルートで震えながら結ばれれば、今日の答えが完成します。</mark>

**40〜50分・録音**
代表リック2を最初から最後まで録音します。下りてくる音が一つずつはっきり聞こえるか、ルートのビブラートが生きているかを聴いてみます。

**今日の完了基準：** 高いb7から一段ずつ下りてルートAにビブラートで着地する代表リック2を二小節で弾いて録音した。 — 今日の成果物：代表リック2（下行/着地）完成

## ④ ヒント / よくあるミス

下行リックでよく出るミスです。ほとんどは方向と着地の問題です。

```json
{
  "id": "m2.w8.d2.land_home",
  "type": "scale_shape",
  "meta": { "title": "Land home on the root", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "target" }
  ]}
}
```
▶ **下りてきてルートに着地。** b3からb7を通って緑のルートAへ下りてビブラートで結びます。

- **途中でためらう。** 下行は一段ずつ途切れなく下りる必要があります。音と音の間隔を均等に保ちます。
- **ルートを通り過ぎてしまう。** 答えはルートで止まる必要があります。最後のAで手を止めてビブラートで結びます。
- **ビブラートを抜かす。** 着地に震えがないと文がぼやけます。ルートAを必ず震わせて結びます。
- **速く下りすぎる。** BPM 75で十分です。速さより着地の方向が先です。
