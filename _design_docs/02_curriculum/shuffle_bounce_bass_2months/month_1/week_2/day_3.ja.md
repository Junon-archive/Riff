---
title: "ブギー往復 — 上ってから下る"
dayKey: "m1.w2.d3"
estMinutes: 50
i18nKey: "lesson.m1.w2.d3"
---

# Day 3 — ブギー・ウォーク往復、上行と下行

## ① 理論・解説

昨日は**R-5-6-b7**で階段を上りました。今日は頂上で止まらず、そのまま<mark>階段を歩いて下りてきます。</mark>上ってから下りるこの**往復**が、ブギー・ウォークを一つの完結したフレーズにします。上るだけだった階段が、いよいよ上下に跳ねて循環します。

下行は上行の鏡です。上るときが**R→5→6→b7**だったなら、下りるときは**b7→6→5→R**の順で踏みます。3弦の**5・4・2フレット**を経て4弦開放**E**に着地します。<mark>上った階段を順番だけ逆にして辿り直すのです。</mark>新しい音は一つもありません — 昨日覚えた手の形そのままです。

二小節で転がします。**1小節目は上行**（R-5-6-b7）、**2小節目は下行**（b7-6-5-R）です。一音が一拍ずつ、八つの音が山を上って下りるようにつながります。継ぎ目が大事です — <mark>頂上のb7から6へ向きを変える瞬間が滑らかであるほど</mark>往復が自然になります。

右手は相変わらず**ツーフィンガー**でロング-ショートのフィールを少し乗せます。往復になると、もうかなり「ベースライン」らしく聞こえます — 明日完成する**Eブギー・シャッフル・グルーヴ**がすぐそこです。**5弦**なら運指は同じで、低音**B**だけ寝かせておけばいいです。**速度は忘れて**、上り下りが途切れないようにだけ整えます。

## ② ビジュアル資料

今日は二つです。まず**ブギーの手の形（R-5-6-b7）**をもう一度確認し、次に上行と下行をつないだ**ブギー往復**を転がします。各例は<mark>4弦・5弦の二つのバージョン</mark>です。

昨日の**ブギーの手の形**をもう一度目に焼き付けます — 今日はこの階段を上り下りします。青三つと無色の**b7（D）**一つ、そのままです。<mark>下りてくる場所も先に見ておきます。</mark>

```json
{
  "id": "m1.w2.d3.boogie_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **4弦。** ルート**E** → **5度B**（2フレット）→ **6度C#**（4フレット）→ **b7 D**（5フレット）。上るときは下から上へ、下りるときは上から下へです。

```json
{
  "id": "m1.w2.d3.boogie_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Boogie shape R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E" },
  "fretboard": { "startFret": 0, "fretSpan": 6, "dots": [
    { "string": 4, "fret": 0, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 2, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "label": "6", "role": "chord_tone" },
    { "string": 3, "fret": 5, "label": "b7", "role": "scale" }
  ]}
}
```

▶ **5弦。** 位置は4弦と同じです。低音**B**は寝かせておき、上り下りする階段だけに集中します。

今度は**ブギー往復**です。1小節で上って2小節で下ります。<mark>頂上で向きを変える継ぎ目を滑らかに</mark>つなぎます。

```json
{
  "id": "m1.w2.d3.boogie_roundtrip_4",
  "type": "tab",
  "meta": { "title": "Boogie round trip R-5-6-b7 (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 75、シャッフル。** 1小節**R→5→6→b7**（上行）、2小節**b7→6→5→R**（下行）。八つの音を山のように上り下りします。

```json
{
  "id": "m1.w2.d3.boogie_roundtrip_5",
  "type": "tab",
  "meta": { "title": "Boogie round trip R-5-6-b7 (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 75, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "scale" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "6", "role": "chord_tone" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 0, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆い、往復の間ずっと漏れないようにします。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
昨日の**ブギー上行**を開放EでBPM 60に上って手をほぐします。四つの音が均等か確認して始めます。

**10〜20分 · 頭のトレーニング**
音を出さず**下行**（b7→6→5→R）だけとてもゆっくり押さえて下ります。<mark>下りるとき指の順番が混乱しないか</mark>に集中します。

**20〜40分 · 実践**
**ブギー往復**を**BPM 75**で反復します。上って下りる継ぎ目が滑らかなのが目標です。4弦で覚えたあと5弦でも同じ往復を確認します。

**40〜50分 · 録音・フィードバック**
30秒録音して**上り下りが途切れずに**つながるか聴いてみます。今日到達したBPMも記録します。

**今日の完了基準：** R-5-6-b7のブギー往復をBPM 75で上行と下行が滑らかにつながるように、4弦・5弦のどちらでも転がせる。

## ④ ヒント・よくあるミス

- **頂上でつまずく。** b7で向きを変えるとき拍が空きやすいです。方向転換を先に準備して滑らかに越えます。
- **下行が急ぐ。** 下りるとき楽しくなって速くなりがちです。上るときと同じ間隔で下ります。
- **着地がぼやける。** 最後のルートEが弱く終わります。往復の到着点であるルートをはっきり押さえます。
- **低音Bの油断（5弦）。** 上り下りする間ずっとBは親指で覆っておきます。
