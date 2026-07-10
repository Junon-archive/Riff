---
title: "パートをつなぐ — 静かなヴァースから開くコーラスへ"
dayKey: "m1.w4.d2"
estMinutes: 30
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — 止まらずにパートを渡る

## ① 理論・説明

曲は最初から最後まで同じ強さで流れません。静かにささやいたあと、<mark>ぱっとはじける瞬間</mark>があってこそ人の心を動かします。今日は2つのパートをつくります — **低く沈むヴァースと、開くコーラス**。難しい新しいコードはありません。すでに持っているパワーコードを、**強さだけ変えて2つの顔で**使うんです。強さの対比を1つ入れるだけで、平板だったリフが急に曲のように聞こえます。4週間前は1音出すのも大変だったのに、いまは曲の押し引きをつくっています。

**ヴァースはパームミュートです。**右手の手刀で弦を軽く押さえて音をこもらせて閉じ込めると、低くうなる<mark>ささやき</mark>になります。**コーラスはその手刀を離します。**閉じ込められていた音が一気に解き放たれ、パワーコードが開いて鳴り渡ります。同じコードなのに、手刀ひとつで「静か」と「うるさい」が分かれます。コーラスで音が開くとき、聴く人の心も一緒に開きます。この対比こそ曲の表情です。

いちばん大事なのは<mark>止まらずに渡ること</mark>です。ヴァース最後のコードからコーラス最初のコードへ渡るその瞬間に**手刀を離します**。初心者の落とし穴は、パートが変わるときにちょっともたつくことです。手刀を離すタイミングを前もって体に入れておけば、2つのパートが1つの流れにつながります。転換は難しくありません — **前もって決めた1つの瞬間**に手刀を持ち上げるだけですから。今日この転換がなめらかになれば、あなたはもう「曲」を弾いています。

## ② ビジュアル資料

まずヴァースです。開放E5を**パームミュートで低く**沈めます。手刀を軽くのせて音を閉じ込めたまま、きっちりと。

```json
{
  "id": "m1.w4.d2.verse_mute",
  "type": "tab",
  "meta": { "title": "Verse — palm-muted E5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 100, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 100。手刀で押さえて低くうならせて。音がこもって閉じ込められた感じなら正解です。

今度はコーラスです。**手刀を離してC5→G5を開いて**鳴らします。同じ手なのに音がぱっと開きます。

```json
{
  "id": "m1.w4.d2.chorus_open",
  "type": "tab",
  "meta": { "title": "Chorus — open C5 to G5", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "G", "tempoBpm": 100, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "target", "highlight": true, "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 100。手刀を離して2音を開いて鳴らします。緑のG5（3フレット）に着地してコーラスが開きます。

では2つをつなぎます。ヴァース2小節を刻んだあと、<mark>手刀を離す瞬間</mark>にコーラスへ渡ります。絶対に止まらずに。

```json
{
  "id": "m1.w4.d2.verse_to_chorus",
  "type": "tab",
  "meta": { "title": "Verse to chorus — no stopping (E5 to C5 to G5)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 100, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 0, "duration": "eighth", "role": "root", "technique": "palm_mute", "chord": [ { "string": 5, "fret": 2, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 5, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 4, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]},
    { "measure": 4, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "quarter", "role": "root", "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] },
      { "string": 6, "fret": 3, "duration": "half", "role": "target", "highlight": true, "chord": [ { "string": 5, "fret": 5, "role": "chord_tone", "label": "5" } ] }
    ]}
  ]}
}
```

▶ BPM 100。ヴァース2小節は低くパームミュートで、コーラス2小節は手刀を離して開いて。渡る瞬間にもたつかず、最後の緑のG5に着地します。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
BPM 80で開放E5のパームミュートのチャクチャクを6弦で軽く繰り返し、右手の手刀の位置を呼び戻します。

**7〜17分・今日の技術**
ヴァース（パームミュート）とコーラス（開いて）を別々に弾き、**音の差を大きく**広げます。<mark>手刀を離すタイミング</mark>をヴァース最後の拍に合わせて体に入れます。

**17〜27分・応用**
転換の例をBPM 90で4回繰り返す → **もたつかず**できたら目標BPM 100へ1段上げます。ヴァースからコーラスへ渡るときに拍が切れないかだけに集中します。

**27〜30分・チェック**
届いたBPMを書き留め、30秒録音してヴァースとコーラスの強さの差が聞こえるか、転換が切れないか聴いてみましょう。

**今日の完了基準：** ヴァース（パームミュート）からコーラス（開いて）へ止まらずに渡り、最初から最後まで弾ける。

## ④ ヒント / よくあるミス

- **転換でもたつく。** パートが変わるとき手を確認しようと止まると流れが切れます。手刀を離す瞬間を前もって決めて、まるごと渡って。
- **コーラスまでパームミュート。** 手刀を離さないとコーラスが開きません。ヴァース最後のコードでしっかり手刀を持ち上げて。
- **強さの差が出ない。** ヴァースとコーラスが似ていると対比が死にます。ヴァースはより低く、コーラスはより開いて — 差は大げさでもOK。
- **速さへの欲。** 100は目標にすぎません。90で転換がなめらかなほうが、100で切れるよりずっといいです。
