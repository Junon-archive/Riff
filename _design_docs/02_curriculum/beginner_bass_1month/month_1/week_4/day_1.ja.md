---
title: "5度を足す — ルートに5度を重ねてラインに力を"
dayKey: "m1.w4.d1"
estMinutes: 30
i18nKey: "lesson.m1.w4.d1"
---

# Day 1 — 5度を足す、ルートに5度を乗せる

## ① 理論・説明

3週間で本当に遠くまで来ました。**右手のツーフィンガー**で最初の音を出し、**ミュート**でノイズを眠らせ、**ドラムのキック**にルートをくっつけましたね。**4週間前は開放弦ひと音も大変だった**のに、今はドラムとひとつの体で曲の土台を支えます。今週は<mark>卒業週間</mark>です — ルートだけ弾いていた手に音を足して**本物のベースライン**を完成させ、次の旅へ出発します。その最初の材料が今日の**5度**です。

**5度**は根音から5番目の音です。**Eの5度はB**ですね。手の形はとても簡単 — ルートから**ひと弦高い弦へ渡って2フレット上**が5度です。開放E（**4弦**）を押さえたら、その隣の**3弦2フレット**がまさに5度Bです。<mark>この形はどの根音からでも同じ</mark> — 根音の位置を動かせば、5度はいつも同じ場所についてきます。

なぜ5度を乗せるのでしょう。ルートだけ繰り返すと、ラインが**ひと音に閉じ込められて**平坦になります。そこに5度を交互に入れると<mark>ラインが弾みはじめます</mark>。5度は根音と一番よくなじむ音なので、どのコードの上でも**間違った響きになりません**。だからルートの次に最初に足す音は、いつも5度なんです。ルートが曲の土台なら、5度はその隣に並んで支える**頼もしい柱**です。

今日も**4弦でも5弦でも運指は同じ**です。5弦なら低音B（5弦）を親指で覆って眠らせておけば大丈夫。急がず、**ルートと5度を行き来する手がきれいか**、それひとつだけを見ます。ふたつの音がはっきり分かれれば、今日は成功です。

## ② ビジュアル資料

今日は**5度を手に覚える2つの例**を見ます。まず**5度の形**を半小節ずつ長く押さえて位置を覚え、次に**ルートと5度を交互に**転がして<mark>ラインに力がつく感覚</mark>を手に刻みます。各例を**4弦・5弦の2バージョン**で載せました。

**例1 — 5度の形。** 開放E（**4弦**）のルートを半小節、すぐ隣の**3弦2フレット**の5度Bを半小節押さえます。ふたつの音の**場所と響きの違い**を目と耳で確認します。

```json
{
  "id": "m1.w4.d1.fifth_shape_4",
  "type": "tab",
  "meta": { "title": "Fifth shape on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70、4弦。** 青のルートE → 緑の5度B。**ひと弦高い弦、2フレット上**という形を目で覚えます。

```json
{
  "id": "m1.w4.d1.fifth_shape_5",
  "type": "tab",
  "meta": { "title": "Fifth shape on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "half", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "half", "label": "5", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 70、5弦。** 運指は4弦と同じ。低音Bは親指で覆って眠らせておいてください。

**例2 — ルート・5度を交互に（今日の完成物）。** 今度は**R–5–R–5**で転がします。4分音符できっちり、根音と5度が<mark>はっきり分かれるか</mark>を耳で確認します。

```json
{
  "id": "m1.w4.d1.root_fifth_pattern_4",
  "type": "tab",
  "meta": { "title": "Root-fifth pattern on E — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 75、4弦。** ルートEと5度B（どちらも青）を交互に。ふたつの音が**同じ大きさ・同じ長さ**で出るように。

```json
{
  "id": "m1.w4.d1.root_fifth_pattern_5",
  "type": "tab",
  "meta": { "title": "Root-fifth pattern on E — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 75、5弦。** 音と位置は4弦と同じ。低音Bはずっと眠らせておいてください。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
この3週間のルート・ミュート・キック合わせをBPM 60でまたほぐします。**1音だけ鳴って残りは静かか**を確かめながら手を温めます。

**7〜17分・今日の技術**
例1（5度の形）をBPM 70で繰り返します。<mark>ルートから5度へ渡る手</mark>がなめらかか、**ひと弦上・2フレット上**の場所を正確に押さえるかを見ます。

**17〜27分・応用（今日の完成物）**
例2（R–5交互）をBPM 70で4回 → **ふたつの音がはっきり分かれたら**BPM 75に上げて4回。4弦で覚えたら、5弦でも同じ感覚を確認します。

**27〜30分・チェック**
今日届いたBPMを書き留め、30秒録音して**ルートと5度が均等に出るか**を聴いてみましょう。

**今日の完了基準：** ルートに5度を足したR–5のワンコード（E）をツーフィンガーで、ふたつの音が均等に分かれるように4弦・5弦の両方で70〜75でくっきり繰り返せる。

## ④ ヒント / よくあるミス

- **5度だけ大きくなったり小さくなったり。** 新しい音なので力が集まりがちです。ルートと5度が同じ強さで出るよう、ふたつの音量を耳で合わせてください。
- **弦を渡るとき隣の弦が鳴る。** 3弦へ移るとき別の弦をこすると濁ります。弾かない弦は右手・左手で軽く覆って眠らせてください。
- **5度の場所を間違える。** 「ひと弦上、2フレット上」というひとつのルールだけ覚えればOK。根音がどこでも、5度はいつもその場所です。
- **低音Bの油断（5弦）。** 新しい音に集中してBを逃すと低音が漏れます。親指はいつもBの上に乗せておいてください。
