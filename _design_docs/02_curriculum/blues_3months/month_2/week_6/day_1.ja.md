---
title: "表現的なベンディング — 音を目標音まで正確に押し上げる"
dayKey: "m2.w6.d1"
estMinutes: 50
i18nKey: "lesson.m2.w6.d1"
---

# Day 1 — 半音・全音ベンドで音を「泣かせる」

## ① 理論・説明

5週目で手に入れたブルーススケール、いよいよその音を「泣かせる」番です。これまではフレットを正確に押さえて音を出しましたが、今日からは押さえた弦を**上へ押し上げて**音程そのものを引き上げます。これが**ベンディング（bending）**です。<mark>ベンディングは、声が音を押し上げて泣くのとまったく同じです。</mark>同じ一音でもただ押さえれば平凡ですが、少し押し上げて戻せばブルース特有の「泣く」表情が生まれます。今日はこのベンディングを二つの大きさに分けて、目標音まで正確に届く方法を身につけます。

ベンディングは押し上げる「距離」で分かれます。半音だけ上げれば**半音ベンド**、全音（＝半音二つ）上げれば**全音ベンド**です。フレットで言えば半音は一つ分、全音は二つ分だけ音を引き上げるわけです。<mark>大事なのは「どれだけ強く」ではなく「どの音まで」です。</mark>目標音が半音上か全音上かを先に決めて、ちょうどその音程に着くように押します。中途半端に引っかかると、泣くのではなく外れた音に聞こえます。

今日の舞台はボックス1の**3弦7フレット、4度（D）**です。この一か所で二つのベンドを両方練習します。半音上げればブルーノート（b5）あたりのぼやけた音になり、全音上げれば**5度（E）**というはっきりした目標音に着きます。<mark>ベンドが目標音まで正確に届くか耳で確かめる、それが今日のすべてです。</mark>だからコツを一つ — 押す前に着地する音を別の場所で先に弾いて耳に入れておくと、ベンドがその音に届いたかすぐ比べられます。指先の力より**耳**を信じて進みます。

```json
{
  "id": "m2.w6.d1.bend_intro",
  "type": "tab",
  "meta": { "title": "Half-step and whole-step bend on the 4th (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "half" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "target" }
    ]}
  ]}
}
```
▶ **BPM 60。** 4度（3弦7フレット）を半音押してb3へ戻し、また4度を全音押して5度（2弦5フレット）に合わせます。半音と全音、二つの大きさを並べて聴いてみてください。

## ② ビジュアル資料

さあ、今日ベンドする場所を指板でピンポイントに見ておきましょう。**3弦7フレットの4度（D）**を押して、その音を**2弦5フレットの5度（E）**とぴったり合わせれば全音ベンド成功です。譜面で緑に塗られた5度が、ベンドの着地すべき地点です。

```json
{
  "id": "m2.w6.d1.bend_position",
  "type": "scale_shape",
  "meta": { "title": "Bend spot on the 4th and its target 5th (Box 1)", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "scale" },
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "target" }
  ]}
}
```
▶ **緑が目標です。** 3弦7フレットを押して、2弦5フレットの5度と同じ高さに着地させます。

<mark>押す前に着地音を耳に入れておくと、ずっと楽になります。</mark>

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ**
BPM 60、とてもゆっくり。今日ベンドする**3弦・2弦**を軽く上り下りして手をほぐします。

```json
{
  "id": "m2.w6.d1.warmup",
  "type": "tab",
  "meta": { "title": "Box 1 warmup on the G string", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b3", "role": "scale" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "b7", "role": "scale" }
    ]}
  ]}
}
```
▶ **BPM 60。** 3弦・2弦を軽く上り下りして手を温めます。

**10〜20分・頭のトレーニング（今日のターゲット＝着地音を先に耳に入れる）**
押す前に目標音を先に弾いてみます。**半音ベンド**の目標はブルーノート（b5）、**全音ベンド**の目標は5度（E）です。<mark>この二つの音をしっかり耳に入れておくと、ベンドがずっと楽になります。</mark>

**20〜40分・実戦ベンディング（BPM 60）**
まずは半音ベンドです。3弦7フレット（4度）を半音だけそっと押し上げます。

```json
{
  "id": "m2.w6.d1.half_bend",
  "type": "tab",
  "meta": { "title": "Half-step bend: 4 up to the blue note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "half" },
      { "string": 3, "fret": 5, "duration": "half", "label": "b3", "role": "scale" }
    ]}
  ]}
}
```
▶ **半音ベンド。** 4度を半音だけ押して、ブルーノート（b5）あたりのぼやけた音を出します。

次は全音ベンドです。目標音の5度を先に弾いてから、同じ音になるまで押し上げます。

```json
{
  "id": "m2.w6.d1.whole_bend",
  "type": "tab",
  "meta": { "title": "Whole-step bend: 4 up to the 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 2, "fret": 5, "duration": "half", "label": "5", "role": "target" },
      { "string": 3, "fret": 7, "duration": "half", "label": "4", "role": "scale", "technique": "bend", "bendTarget": "full" }
    ]}
  ]}
}
```
▶ **全音ベンド。** 先に5度を弾いて、4度をその高さまで全音押し上げます。

<mark>押し上げた音が目標音とまったく同じに聞こえれば成功です。</mark>

**40〜50分・録音**
全音ベンドを録音して、先に弾いた5度とベンドした音の高さが同じか聴いてみます。違えば、もっと押すか少し戻して合わせます。

**今日の完了基準：** 3弦7フレットの4度を全音押し上げて5度の音程を正確に出し、半音ベンドと音をはっきり区別できる。

## ④ ヒント / よくあるミス

ベンドのときによくあるミスです。急いで力から入れず、耳で目標音をつかむ習慣をつけます。

```json
{
  "id": "m2.w6.d1.push_from_wrist",
  "type": "scale_shape",
  "meta": { "title": "Aim the bend at the real 5th", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "A minor" },
  "fretboard": { "startFret": 5, "fretSpan": 4, "dots": [
    { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
    { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "target" }
  ]}
}
```
▶ **目標音をまず耳に。** 5度（緑）を弾いて、その音に向けて4度を押します。

- **目標音を通り越す。** 全音のところをさらに半音分上げてしまうと音が浮きます。目標の5度でぴたりと止めます。
- **指一本だけで押す。** 3の指で押しつつ1・2の指を後ろから添えて一緒に押すと、ずっと安定します。
- **親指をネックの裏に隠す。** 親指をネックの上に軽くかけるとテコができ、力が要りません。
- **押すだけで聴かない。** ベンドは手ではなく耳で完成します。いつも着地音と比べながら押します。
