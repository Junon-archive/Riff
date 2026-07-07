---
title: "リズム・チャレンジ — 同じコード、違うグルーヴ"
dayKey: "m2.w8.d2"
estMinutes: 50
i18nKey: "lesson.m2.w8.d2"
---

# Day 2 — どこを弾き、どこを空けるかがグルーヴ

## ① 理論・説明

これまで「どの音を押さえるか」（ボイシング）を学びました。今日は「**どのリズムで弾くか**」。同じコードでも、**弾く場所と空ける場所（休符）**、そして**ミュートカット（パームミュート）**を変えると、まったく違うグルーヴになります。R&B・ファンク・ソウルの命は、実はボイシングより**リズム**です。

3つのカギ：
- **休符がリズム。** 音を空けた場所がグルーヴの呼吸。
- **パームミュート・カット（P.M.）。** 短く殺して「チャッ」という打撃感。
- **シンコペーション（食い）。** 拍の前後に少し押して体を揺らす。

今日はCmaj7シェル1つを2つのグルーヴで弾き、リズムを変えるだけで曲が変わるのを体で覚えます。ここから本当の面白さが始まります — 同じコード1つでも、リズムを変えるだけでバラードにもファンクにもなるんですから。うまく弾けなくても大丈夫。今日は「間違えて」弾くのではなく、「違うふうに」弾くのを楽しむ日です。

## ② ビジュアル

今日グルーヴをのせる**Cmaj7シェル**（R·3·7）。青がルート、緑がガイドトーン（7·3度）。

```json
{
  "id": "m2.w8.d2.cmaj7_shell",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 shell — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 0, "muted": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 3, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — グルーヴA（スタッカート＋休符）。** 短く弾いて休符で空けるR&Bコンピング。P.M.はカット。

```json
{
  "id": "m2.w8.d2.groove_a",
  "type": "tab",
  "meta": { "title": "Groove A (staccato + rests) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 84, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "technique": "palm_mute", "role": "target", "highlight": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "quarter", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 84、4回反復。** 「チャッ —（休）— チッ — ジャン —（休）」。休符をしっかり空け、P.M.は短く殺す。Cmaj7シェルをこのリズムで。

**例2 — グルーヴB（シンコペーション）。** 同じコード、違うリズム。拍を少し押して体を揺らす。

```json
{
  "id": "m2.w8.d2.groove_b",
  "type": "tab",
  "meta": { "title": "Groove B (syncopation) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 84, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 3, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "7", "technique": "palm_mute", "role": "target", "highlight": true },
      { "string": 3, "fret": 4, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 84、4回反復。** グルーヴAとまったく違う感じでしょう？ 同じCmaj7なのにリズムだけ変えました。どちらが曲に合うか選んで。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Cmaj7シェルを押さえ、例Aのリズムを手で覚えます。休符でしっかり音を空け、P.M.カットが短いかチェック。

**10〜20分 · 脳トレ（今日のターゲット＝休符・カット）**
メトロノームに合わせてグルーヴAとBを交互に。「今弾く場所／空ける場所／殺す場所」を口で数えて体に刻む。

**20〜40分 · 実戦伴奏（例1・2グルーヴ / 80〜90 BPM）**
**例1・2をBPM 84で**バッキングに重ねて。昨日のII-V-I進行全体にグルーヴA（またはB）を着せて4小節ループを回す。同じ進行がリズムでどれだけ変わるか。

**40〜50分 · 録音・セルフフィードバック（推奨）**
グルーヴA・Bをそれぞれ15秒録音して比較。チェック：休符がグルーヴを作るか／P.M.カットがはっきりか／体が揺れるか。

**今日の完了基準：** 同じCmaj7シェルを2つのグルーヴ（スタッカート＋休符／シンコペーション）で弾き、リズムが曲の感じを変えると理解する。

## ④ ヒント / よくあるミス

- **チャチャチャチャ均一に。** 休符なしで埋めるとグルーヴが死にます。空ける場所が核心。
- **長く、P.M.なし。** カットしないとR&B/ファンク感が出ません。短く殺す練習。
- **リズムを変えつつコードを揺らす。** リズムに集中してボイシングが崩れないように。左手は固定、右手がリズム。
- **1つのグルーヴだけ。** 同じ進行も複数のリズムで。それが「コンピングを作曲する」第一歩。
