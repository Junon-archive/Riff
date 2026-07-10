---
title: "オクターブを足す — オクターブ・ボックスでR-5-8完成"
dayKey: "m1.w4.d2"
estMinutes: 30
i18nKey: "lesson.m1.w4.d2"
---

# Day 2 — オクターブを足す、オクターブ・ボックスでラインを開く

## ① 理論・説明

昨日、ルートに**5度**を足してラインがひと回り広がりましたね。今日は最後の材料、**オクターブ**を乗せて**<mark>R–5–8</mark>**を完成させます。**オクターブ**は同じ名前の音を**1オクターブ上**で鳴らすこと — 開放Eのオクターブも**同じE**、音が高いだけです。このひと音がラインを上下に大きく開きます。ルートが土台、5度が柱なら、オクターブはその上に乗せる**明るい屋根**というわけです。

オクターブを見つける手の形が今日の核心です。**ルートから2弦上、2フレット上**がオクターブ — 5度のようにひと弦だけ渡るのではなく、**ひと弦飛ばして**2つ上の弦へ行きます。開放E（**4弦**）なら、3弦を通り越して**2弦2フレット**がオクターブEです。これを<mark>オクターブ・ボックス</mark>と呼びます — 根音とオクターブが四角い箱のように手の中に収まるからです。

弦を飛ばすぶん、**ミュートがさらに大事**です。飛ばした3弦が一緒に鳴ると音が濁るので、弾かない弦は指で軽く覆って眠らせます。かわりにオクターブが入ると<mark>ラインが上下に弾んで</mark>ずっと楽しくなります。ルート・5度・オクターブの3つで、もう立派なベースラインです。3つの音がひとつの手の中で上下するので、ラインがずっと立体的に聞こえます。

今日も**4弦でも5弦でも運指は同じ**です。5弦なら低音B（5弦）を親指で眠らせておきます。**4週間前はひと音も大変だった**のに、今日は3つの音を行き来する手だなんて — 急がず、オクターブの場所だけ正確に覚えましょう。

## ② ビジュアル資料

今日は**オクターブを手に覚える2つの例**を見ます。まず**オクターブ・ボックス**を半小節ずつ押さえて<mark>弦を飛ばす手の形</mark>を覚え、次に**R–5–8–5**で転がして今日の完成物をつくります。各例を**4弦・5弦の2バージョン**で載せました。

例に入る前に、**オクターブ・ボックスの手の形**を指板図でまず目に焼きつけます。下の図で青い根音E（4弦）から**2弦上・2フレット上**へ上がるとオクターブE（2弦2フレット）です — 根音・5度・オクターブが四角い箱のようにひとつの手に収まります。

```json
{
  "id": "m1.w4.d2.octave_box_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box hand shape on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **4弦。** 根音E → 5度B → オクターブE。あいだの3弦は空けておく（眠らせる）場所です。

```json
{
  "id": "m1.w4.d2.octave_box_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Octave box hand shape on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 4, "dots": [
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 2, "finger": 3, "label": "8", "role": "chord_tone" }
  ]}
}
```

▶ **5弦。** 手の形は4弦と同じ。いちばん下の低音B（5弦）は×、親指で眠らせておきます。

**例1 — オクターブ・ボックス。** 開放E（**4弦**）のルートを半小節、**2弦2フレット**のオクターブを半小節押さえます。あいだの**3弦は触れず眠らせたまま**手を移します。

```json
{
  "id": "m1.w4.d2.octave_shape_4",
  "type": "tab",
  "meta": { "title": "Octave box on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** 青のルートE → 緑のオクターブ。**2弦上・2フレット上**の箱の形を目で覚えます。

```json
{
  "id": "m1.w4.d2.octave_shape_5",
  "type": "tab",
  "meta": { "title": "Octave box on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 2, "fret": 2, "duration": "half", "label": "8", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 運指は4弦と同じ。低音Bは親指で覆って眠らせておいてください。

**例2 — R–5–8–5バウンス（今日の完成物）。** ルート→5度→オクターブ→5度でぽんぽん転がします。4分音符で、オクターブで<mark>ラインが跳ね上がる感覚</mark>を感じます。

```json
{
  "id": "m1.w4.d2.root_fifth_octave_4",
  "type": "tab",
  "meta": { "title": "R-5-8 bounce on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** ルート・5度・オクターブ（すべて青）をひと小節に。弦を飛ばす瞬間、**弾かない弦が漏れないように**。

```json
{
  "id": "m1.w4.d2.root_fifth_octave_5",
  "type": "tab",
  "meta": { "title": "R-5-8 bounce on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 2, "duration": "quarter", "label": "8", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 75、5弦。** 音と位置は4弦と同じ。低音Bはずっと眠らせておいてください。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日のR–5交互をBPM 60でまたほぐします。**ふたつの音が均等に分かれるか**を確かめながら手を温めます。

**7〜17分・今日の技術**
例1（オクターブ・ボックス）をBPM 70で繰り返します。<mark>3弦を飛ばしてオクターブへ行く手</mark>がなめらかか、**飛ばした弦が静かか**を見ます。

**17〜27分・応用（今日の完成物）**
例2（R–5–8–5）をBPM 70で4回 → **弦飛ばしがきれいなら**BPM 75に上げて4回。4弦で覚えたら、5弦でも同じ感覚を確認します。

**27〜30分・チェック**
今日届いたBPMを書き留め、30秒録音して**オクターブでラインが弾むか**を聴いてみましょう。

**今日の完了基準：** R–5–8（ルート・5度・オクターブ）のワンコード（E）をツーフィンガーで、オクターブ・ボックスで飛ばした弦を眠らせて4弦・5弦の両方で70〜75でくっきり転がせる。

## ④ ヒント / よくあるミス

- **オクターブだけ弱い。** 弦を飛ばすぶんオクターブが小さくなりがちです。右手で2弦をしっかり弾いて、3つの音が同じ強さで出るようにしましょう。
- **飛ばした3弦が鳴る。** オクターブへ行くとき3弦が一緒に鳴ると濁ります。左手人差し指の先か右手で3弦を軽く覆って眠らせてください。
- **オクターブの場所を手が見つけられない。** 「2弦上、2フレット上」の箱の形を、目を閉じても掴めるまで繰り返してください。根音がどこでも、オクターブはいつもその箱の中です。
- **低音Bの油断（5弦）。** オクターブに集中してBを逃すと低音が漏れます。親指はいつもBの上に乗せておいてください。
