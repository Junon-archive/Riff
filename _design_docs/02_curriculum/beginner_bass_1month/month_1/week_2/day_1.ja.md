---
title: "1本の指に1フレット — 低いルートを押さえる（E・A弦）"
dayKey: "m1.w2.d1"
estMinutes: 30
i18nKey: "lesson.m1.w2.d1"
---

# Day 1 — 1本の指に1フレット、低いルートを押さえる

## ① 理論・説明

1週目では右手のツーフィンガーと弦移動を身につけましたね。今週はいよいよ左手が主役です。今日は**<mark>1本の指に1フレットずつ</mark>**任せて、低い位置で楽に音を押さえる方法を身につけます。フレットを1つ押さえるたびに**音が半音ずつ上がります** — このルールさえ分かれば、指板のどこでも道を見つけられます。

今日の本当の目標は、**<mark>ルート（根音）を目を閉じても見つけること</mark>**です。ルートはその小節の名前になるいちばん大事な音で、ベースの飯のタネです。まずいちばん太いE弦（4弦）から覚えます。**開放がE、1フレットがF、3フレットがG。**指先をフレットのすぐ後ろにまっすぐ立てて押さえ、1フレットは人差し指、3フレットは薬指で — 1本の指が1フレットずつ受け持つんです。こうして指ごとに場所を決めておけば、指板を見なくても手が自分で音を見つけていきます。

次はA弦（3弦）です。開放がA、2フレットがB、3フレットがC。E弦と同じやり方で、**フレットの数だけ音が上がります**。**<mark>音の名前と手の位置をひとつのもの</mark>**として覚えておけば、この先どんな曲に出会ってもすぐルートを押さえられます。今日はこの数音だけ、ビリつきなくくっきりと押さえてみましょう。E弦とA弦を覚えるだけで、たいていの曲のルートはほぼこの2本の低い位置で出会えます。

E弦とA弦は**<mark>4弦でも5弦でも同じ弦（4弦・3弦）</mark>**なので、**手の形はまったく同じ**です。5弦はその下に低音Bが1本あるだけで、今日は使わないので右手の親指でそっと覆って眠らせておいてください。どのベースを持っていても、今日手が覚えるのは「E弦とA弦の低いルートたち」です。

## ② ビジュアル資料

今日は**E弦とA弦の低いルート**を1つずつ押さえてみます。下の例は<mark>開放 → 押弦音 → 開放</mark>と上り下りして、音の名前を手に刻むコースです。各例を**4弦・5弦の2バージョン**で並べて載せました。

**例1 — E弦のルート名（E・F・G）。** 開放E、1フレットF、3フレットGを1拍に1つずつ。1フレットは人差し指、3フレットは薬指で押さえます。

```json
{
  "id": "m1.w2.d1.e_string_names_4",
  "type": "tab",
  "meta": { "title": "Root names on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "finger": 1, "label": "F", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 3, "label": "G", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 開放E → F（1フレット）→ G（3フレット）→ 開放E。緑で示したF・Gを指先で押さえ、青の開放Eと音量をそろえます。

```json
{
  "id": "m1.w2.d1.e_string_names_5",
  "type": "tab",
  "meta": { "title": "Root names on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "E", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 1, "duration": "quarter", "finger": 1, "label": "F", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "finger": 3, "label": "G", "role": "target", "highlight": true },
      { "string": 4, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** 運指は4弦とまったく同じ。使わない低音Bは親指で覆って静かにしておきます。

**例2 — A弦のルート名（A・B・C）。** 開放A、2フレットB、3フレットC。A弦でもフレットの数だけ音が上がるのを手で感じます。

```json
{
  "id": "m1.w2.d1.a_string_names_4",
  "type": "tab",
  "meta": { "title": "Root names on A — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "finger": 2, "label": "B", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "finger": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦。** 開放A → B（2フレット）→ C（3フレット）→ 開放A。緑で示したB・Cを押さえるとき、弾かないE弦は親指で覆って静かにしておきます。

```json
{
  "id": "m1.w2.d1.a_string_names_5",
  "type": "tab",
  "meta": { "title": "Root names on A — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "A", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 0, "duration": "quarter", "label": "A", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "finger": 2, "label": "B", "role": "target", "highlight": true },
      { "string": 3, "fret": 3, "duration": "quarter", "finger": 3, "label": "C", "role": "target", "highlight": true },
      { "string": 3, "fret": 0, "duration": "quarter", "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦。** A弦の運指は4弦と同じ。低音Bは親指で覆い続けて眠らせておいてください — 4弦にはない、5弦だけの宿題です。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日までの開放E・AのツーフィンガーをBPM 60でまたほぐします。**右手の感覚を呼び戻してから左手**を乗せます。

**7〜17分・今日の技術**
例1（E弦のE・F・G）をごくゆっくり押さえます。<mark>フレットのすぐ後ろをまっすぐ押さえる</mark>ことだけに集中し、**ビリつきが消えるまで**場所と角度をみがきます。

**17〜27分・応用**
例1（E弦）をBPM 60で4回 → 楽になったら例2（A弦）に進んで4回。**ビリつきが混じったら**、指先をフレット側へ少し寄せます。

**27〜30分・チェック**
今日届いたBPMを書き留め、よければ30秒録音して、E・F・Gの3音がすべてくっきりしているか聴いてみましょう。

**今日の完了基準：** E弦の低いルートE・F・Gを1本の指に1フレットで、60〜70でビリつきなくくっきり押さえられる。

## ④ ヒント / よくあるミス

- **フレットの真ん中を押さえる。** フレットとフレットの真ん中を押さえると音が死んだりビリついたりします。指先をフレットのすぐ後ろに付けて。
- **1本の指で全部押さえる。** 人差し指1本であちこち動かすと遅く不正確になります。1フレットは人差し指、2フレットは中指、3フレットは薬指で分担を。
- **音の名前を飛ばす。** 手の位置だけ覚えるとすぐ忘れます。押さえるたびに「E、F、G」と声に出して一緒に覚えて。
- **低音Bを眠らせる（5弦）。** 使わないBが一緒に鳴ると音が濁ります。親指で覆う習慣を今日から始めましょう。
