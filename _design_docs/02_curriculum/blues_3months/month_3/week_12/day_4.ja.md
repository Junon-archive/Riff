---
title: "最終卒業録音 — 一人で完成させる12小節ブルース（ブルース卒業）"
dayKey: "m3.w12.d4"
estMinutes: 50
i18nKey: "lesson.m3.w12.d4"
---

# Day 4 — リズムで問いリードで答える一曲を録音する

## ① 理論・説明

ついに最後の日です。少し3ヶ月前を思い出してみましょうか。あの頃は**シャッフルリズム**さえ不慣れで、ボックス1一つ覚えるのも精一杯でした。ところが今、あなたは一人で12小節を**コンピングで問いソロで答え**、一曲を完成させます。<mark>3ヶ月の間に、あなたは「ギターを持った人」から「ブルースを語る人」になりました。</mark>今日はその旅の終止符、**最終卒業録音**です。

今日録音する曲は、これまで積み上げた会話の完成形です。**2小節のA7ブギ（質問）**でグルーヴを投げ、**2小節のボックス1リック（答え）**で答えます — 4度ベンディングで緊張を作り、ルートビブラートで着地します。<mark>この会話を12小節全体に広げれば、一人で完成させる一曲のブルースになります。</mark>昨日リハーサルしたその流れそのままに、今日は気楽に録音ボタンを押します。完璧でなくてもよいです — これは審査ではなく、**あなたの最初のブルースの記録**だからです。

そしてこれは終わりではなく、新しい扉の始まりです。ブルースで「語る方法」を覚えたので、次の旅は**solo_scale** — ボックス1を越えて**指板全体**でスケールをつなぎ、ドリアン・ミクソリディアンのような**モード**で色を広げるコースです。<mark>ブルースがあなたの母国語なら、solo_scaleはその上に新しい言葉と抑揚を加えます。</mark>今日この一曲を録音すれば、いつでも次の扉を開く準備ができています。3ヶ月間、本当にお疲れさまでした — さあ誇らしく録音して、ブルース卒業を祝いましょう。

```json
{
  "id": "m3.w12.d4.voice_map",
  "type": "scale_shape",
  "meta": { "title": "Your blues voice: box 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" }
  ]}
}
```
▶ 3ヶ月前は不慣れだったこのボックス1が、今はあなたが**答え**を語る声です。

## ② ビジュアル資料

あなたはもう一人でバンドです。コンピングの家から**質問**を投げ、ボックス1へ登って**答え**をします。<mark>一人の中に、リズムギターとリードギターが共に住んでいます。</mark>

```json
{
  "id": "m3.w12.d4.band_of_one",
  "type": "fretboard_diagram",
  "meta": { "title": "One-person band: A7 comp home", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 5, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 4, "fret": 5, "label": "b7", "role": "chord_tone" }
  ]}
}
```
▶ **開放のルートA**のA7ブギが質問の家です。今日はこの二つの役割を行き来して一曲を完成させます。

<mark>質問と答えが一人の手から流れる瞬間、それがまさにブルース卒業です。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60。緊張をほぐすため、A7ブギのコンピングを一小節軽く転がします。今日は上手に弾くことより気楽に楽しむことが目標です。

```json
{
  "id": "m3.w12.d4.warmup",
  "type": "tab",
  "meta": { "title": "Warm up: relax with the A7 boogie", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]}
  ]}
}
```
▶ **BPM 60、シャッフル。** 慣れたA7ブギ一小節。手を温め、心も気楽にほぐします。

**10〜20分・頭のトレーニング（今日のターゲット＝卒業録音）**
録音の前に、12小節全体を頭の中で一度流してみます。どこで問いどこで答えるか絵が描ければ、実際の録音がずっと楽になります。<mark>頭の中で一度弾き切れば、手はもう道を知っています。</mark>

**20〜40分・実戦：リズム↔リードの会話（BPM 80）**
ついに最終完成物、**リズム↔リードの会話**です。2小節のA7ブギで問い、2小節のボックス1リックで答えます。この4小節の会話が今日録音する曲の心臓です。

```json
{
  "id": "m3.w12.d4.rhythm_lead_dialogue",
  "type": "tab",
  "meta": { "title": "Rhythm-lead dialogue (comp to solo)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 1〜2小節は**コンピング（質問）** — A7ブギでグルーヴを投げ、3〜4小節は**ソロ（答え）** — ボックス1リックで答えます。この会話を12小節全体に広げれば一人で完成させるブルースになります。

<mark>この会話が手から自然に流れれば、あなたはもうブルースを「語る」奏者です。</mark>

**40〜50分・最終卒業録音！**
さあこの会話を12小節全体に広げ、最初から最後まで一曲を録音します。完璧でなくてもよいです — 3ヶ月の旅を込めた、あなたの最初のブルースの記録だからです。

```json
{
  "id": "m3.w12.d4.graduation_twelve",
  "type": "tab",
  "meta": { "title": "Graduation take: full 12-bar dialogue", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 5, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 5, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 5, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 6, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 7, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 8, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]},
    { "measure": 9, "notes": [
      { "string": 6, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 6, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 10, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 3, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 5, "role": "chord_tone", "label": "b7" } ] },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root", "chord": [ { "string": 3, "fret": 4, "role": "chord_tone", "label": "6" } ] }
    ]},
    { "measure": 11, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 12, "notes": [
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 4, "fret": 7, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "technique": "vibrato" }
    ]}
  ]}
}
```
▶ **BPM 80、シャッフル。** 昨日のランスルーそのままに、今日は録音ボタンを押して弾き切ります。これがあなたの卒業曲です。

**今日の完了基準：** 2小節のコンピング（質問）と2小節のソロ（答え）の会話を12小節全体に広げ、一人で完成させるブルース一曲を最初から最後まで録音した。 — 今週の成果物：一人で弾く12小節コンピング↔ソロブルース 弾き切り・録音（ブルース卒業！）

## ④ ヒント / よくあるミス

卒業録音でよくあるミスです。ほとんどは**完璧に弾こうとして緊張する**ところから来ます。

```json
{
  "id": "m3.w12.d4.just_finish",
  "type": "scale_shape",
  "meta": { "title": "Finish over perfect", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" }
  ]}
}
```
▶ **完璧より弾き切り。** 一度最後まで流れた録音は、十回止まった練習より価値があります。

- **完璧に弾こうとして緊張する。** ミスはブルースの一部です。流れを守って最後まで行きます。
- **一度間違えたらやり直す。** それでは永遠に弾き切れません。間違えてもそのまま続けます。
- **録音を残さず進む。** 今日の自分を必ず記録します。数ヶ月後に聴くと成長が見えます。
- **ここで止まってしまう。** ブルースは終わりですが旅は続きます。次はsolo_scaleが待っています。
