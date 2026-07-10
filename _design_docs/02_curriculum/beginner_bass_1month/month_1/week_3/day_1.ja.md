---
title: "ドラムとロック — サブディビジョンを感じ、キックにルートを乗せる"
dayKey: "m1.w3.d1"
estMinutes: 30
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — サブディビジョンを感じる、キックにルートを乗せる

## ① 理論・説明

2週目では左手の運指とミュートで音をきれいに整えましたね。今週はそのきれいな音を**ドラムとひとつに**くっつけます。ベースはひとりで目立つ楽器ではありません — **<mark>キックとひとつの体になる</mark>**とき、曲が引き締まるんです。その第一歩が今日のテーマ、**サブディビジョン（拍を割る）**です。1拍を半分に**割って数える感覚**ですね。

4/4の1小節を**「1 & 2 & 3 & 4 &」**で数えてみましょう。数字が**表拍**、&（アンド）がその間の**裏拍**です。表拍と裏拍の間隔が**定規で測ったように同じ**でないと、グルーヴがぐらつきます。足で表拍をトントン踏みながら口で裏拍を数えると、体の中に**<mark>均一な8分音符のグリッド</mark>**ができます — このグリッドが今日すべての練習の土台です。

さあ、そのグリッドの上にドラムを乗せます。たいていのロック・ポップで**キック（バスドラム）**は表拍、とくに**1拍と3拍**に重く落ちます。今日の本当の目標は、**<mark>キックが落ちるまさにその瞬間にルートを同じく着地</mark>**させることです。たとえるなら**キックが掘った席にベースがすっと座り込む**感じですね。キックとルートが**同じ一瞬**に鳴ると、ふたつが重なって**ひとつの大きな低音**のように聞こえます — それが曲の土台を固くする秘訣です。

今日使うルートは開放E（4弦）です。**4弦でも5弦でも運指は同じ**で、5弦なら低音B（5弦）を親指で覆って眠らせておけば大丈夫。速さは急ぎません — **キックに手を正確に合わせること**ひとつだけに全神経を注ぎます。

## ② ビジュアル資料

今日は**キックにルートを乗せる2つの例**を見ます。まず表拍ごとにルートをひとつずつ落として<mark>キックとルートを同時に着地</mark>させ、次に8分音符で拍を割って**均一なグリッド**を手に刻みます。各例を**4弦・5弦の2バージョン**で載せました。

**例1 — 4分音符でキックに着地。** 開放Eを表拍ごとに1回ずつ、**1・2・3・4**にぴったり合わせて押さえます。キックが強く来る1拍・3拍でとくに音が重なるか耳で確認します。

```json
{
  "id": "m1.w3.d1.kick_root_quarter_4",
  "type": "tab",
  "meta": { "title": "Kick-root quarters on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** 青の開放Eを表拍ごとにひとつずつ。ドラム（またはメトロノーム）のキックと**同じ瞬間**に着地させます。

```json
{
  "id": "m1.w3.d1.kick_root_quarter_5",
  "type": "tab",
  "meta": { "title": "Kick-root quarters on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 運指は4弦と同じ。低音Bは親指で覆って眠らせておいてください。

**例2 — 8分音符で数える。** 今度は1拍を2つに割って開放Eを8回。**「1 & 2 & 3 & 4 &」**を口で数えながら、8つの音の間隔が均一か感じます。

```json
{
  "id": "m1.w3.d1.subdivision_eighths_4",
  "type": "tab",
  "meta": { "title": "Counting eighths on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** 8分音符8つを定規で測ったように均一に。表拍（数字）にキックが来たら、その音を少しだけくっきりと。

```json
{
  "id": "m1.w3.d1.subdivision_eighths_5",
  "type": "tab",
  "meta": { "title": "Counting eighths on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 音と位置は4弦と同じ。速くなっても低音Bが漏れないよう親指で覆っておきます。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日までのミュートのルートラインをBPM 60でまたほぐします。**1音だけ鳴って残りは静かか**を確かめながら手を温めます。

**7〜17分・今日の技術**
例1（4分ルート）をメトロノームBPM 70に合わせます。<mark>クリックと自分の音がひとつに重なって聞こえるまで</mark>タイミングだけをみがきます — 速さより**正確に乗せること**が先です。

**17〜27分・応用**
例2（8分で数える）をBPM 70で繰り返します。表拍にキックを思い描いて乗せ、**8つの音の間隔が均一**か感じます。ぐらついたら例1に戻ります。

**27〜30分・チェック**
今日届いたBPMを書き留め、30秒録音して**キックとルートがひとつの音のようにくっつくか**を聴いてみましょう。

**今日の完了基準：** 開放Eのルートをメトロノームの表拍（キック）に正確に乗せ、4弦・5弦の両方で60〜70でクリックと重なるように着地させられる。

## ④ ヒント / よくあるミス

- **音がキックより速い・遅い。** わずかに前に出たり遅れたりすると音がふたつに割れます。クリックを「聞いて反応」せず、来る場所を先に予想して一緒に落とします。
- **裏拍を逃す。** 表拍だけ数えていると&が崩れます。口で「アンド」をはっきり声に出し、8分のグリッドを持ち続けてください。
- **ミュートを忘れる。** タイミングに集中して弾かない弦が鳴ると、キックとの重なりがぼやけます。先週のミュートは今週もそのままオンにしておきます。
- **低音Bの油断（5弦）。** キック合わせに夢中でBを逃すと低音が漏れます。親指はいつもBの上に乗せておいてください。
