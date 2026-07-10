---
title: "週の統合 — スパイダー・クロマチックで手を完成"
dayKey: "m1.w1.d4"
estMinutes: 30
i18nKey: "lesson.m1.w1.d4"
---

# Day 4 — 一週間を1つに、スパイダー・クロマチック

## ① 理論・説明

ついに一週間の最終日、今日はこれまで断片的に身につけたものを1つにつなぎます。ダウンピッキング、クロマチック1-2-3-4、オルタネイト — この3つを1つのリフに詰め込めば、それが<mark>スパイダー・クロマチック</mark>です。指が指板の上を**クモのように**這い回ることから付いた名前です。名前は大げさですが、じつは昨日まで弾いた**1-2-3-4**を、弦だけ変えてつないだだけです。手はもうすべての動きを知っているので、怖がらなくて大丈夫。

新しく加わるのはたった1つ、<mark>弦移動</mark>です。6弦で1-2-3-4を弾いて**5弦**へ、さらに4弦・3弦・2弦・1弦へと下りていきます。ここで右手は「1本となり側へそっと座り直す」感覚さえ身につければOK。**オルタネイトを保ったまま**、弦だけを変えるんです。右手のピックは弦1本の厚みぶんだけ位置を移せばいいので、動きは思ったよりずっと小さいんです。

最初は弦が変わる瞬間に拍がつまずくのが当たり前 — その継ぎ目こそ、今日みがくポイントです。このリフ1つを**6弦から1弦まで**<mark>ビリつきなく最後まで</mark>弾ければ、それは今週習ったすべてが手に定着した<mark>確かな証拠</mark>です。もし今日1弦まで行けなくても大丈夫。**2〜3弦**だけなめらかでも、手は確実に育っています。一週間で作った手、今日その目で確かめましょう。

## ② ビジュアル資料

まずは**弦移動**だけを取り出して練習します。6弦の1-2-3-4のあと5弦の1-2-3-4 — この<mark>最初の継ぎ目</mark>さえなめらかになれば、あとは同じ原理の繰り返しです。

```json
{
  "id": "m1.w1.d4.spider_prep_2string",
  "type": "tab",
  "meta": { "title": "Spider prep — string crossing (6th to 5th)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "E", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 5, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 5, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 5, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 5, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60.** 5弦へ移る瞬間もオルタネイトを止めないで。弦だけが変わり、往復はそのまま。

さあ、今週の完成物、**スパイダー・クロマチック**です。6弦から1弦まで上行したあと、最後の小節で向きを変えて<mark>2弦へ戻ってきます</mark>。繰り返すと自然につながる循環リフです。

```json
{
  "id": "m1.w1.d4.spider_chromatic",
  "type": "tab",
  "meta": { "title": "Spider chromatic 1-2-3-4", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "E", "tempoBpm": 65, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 6, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 6, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 6, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 5, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 5, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 5, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 5, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 4, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 4, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 4, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 3, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 3, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 3, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 3, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]},
    { "measure": 3, "notes": [
      { "string": 2, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 2, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 2, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 1, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 1, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 1, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 1, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" }
    ]},
    { "measure": 4, "notes": [
      { "string": 1, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 1, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 1, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 1, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" },
      { "string": 2, "fret": 4, "duration": "eighth", "finger": 4, "role": "scale" },
      { "string": 2, "fret": 3, "duration": "eighth", "finger": 3, "role": "scale" },
      { "string": 2, "fret": 2, "duration": "eighth", "finger": 2, "role": "scale" },
      { "string": 2, "fret": 1, "duration": "eighth", "finger": 1, "role": "scale" }
    ]}
  ]}
}
```

▶ **BPM 60〜70、オルタネイト（ダウン・アップ）で。** 各音をはっきり、指先を立ててビリつきなく。6→1弦へ上行後、M4で向きを変えて下行で戻る（繰り返すと自然につながる）。指は常に**1本指1フレット**。

## ③ 今日の練習（30分ルーティン）

**0〜7分・ウォームアップ**
昨日のクロマチック・オルタネイト（1-2-3-4）を6弦でBPM 60。両手が出会う感覚を呼び戻します。

**7〜17分・今日の技術**
例1（弦移動ドリル）をBPM 60で繰り返します。**6弦→5弦**へ渡る<mark>継ぎ目だけに集中</mark>して、なめらかに。

**17〜27分・応用（今週の完成物）**
スパイダー・クロマチックをBPM 60で4回繰り返す → ビリつかなくなったら1段（BPM 65）だけ上げて4回、余裕があれば70まで。**6→1弦**が<mark>ひと息のように</mark>つながるのが目標。

**27〜30分・チェック**
今週届いた最高BPMを記録し、30秒録音して弦が変わる地点で音が途切れていないか確認します。

**今日の完了基準：** スパイダー・クロマチックを6弦から1弦まで、ビリつきなく60〜70でクリーンに弾ける。（1週目完成！）

## ④ ヒント / よくあるミス

- **弦移動で止まる。** 弦が変わるとき手を止めると、その瞬間に拍が押します。オルタネイトを保ったまま座り直して。
- **速度を先に上げる。** 60で6→1弦がきれいでないのに65へ行くと、継ぎ目が全部崩れます。クリーンが先です。
- **指を早く離す。** 次の弦を意識して今の音を短く切ると、音がぶつぶつ途切れます。各音を最後まで鳴らして。
- **一週間で詰め込む。** 今日すべてできなくても大丈夫。このリフは来週もウォームアップで会い続けるので、焦らないで。
