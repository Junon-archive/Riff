---
title: "II-V-I 紹介 — ポップスの心臓、そしてルート弦交差"
dayKey: "m1.w3.d1"
estMinutes: 50
i18nKey: "lesson.m1.w3.d1"
---

# Day 1 — なぜ遠くへ行かずにコードが変わるのか

## ① 理論・説明

世の中の曲の半分は、**<mark>II-V-I</mark>**というコード進行の上に立っています。Cキーなら**Dm7 → G7 → Cmaj7**。ポップ、ジャズ、バラード、シティポップ…どこでもこの3コードの塊が繰り返されます。だからこれを滑らかにつなぐ手があれば、曲の半分は伴奏できます。

問題は、初心者がこれを弾くとき手がネック上を**<mark>大きくジャンプ</mark>**すること。Dm7はあっち、G7はこっち、Cmaj7はまたあっち。切替がぶつ切れます。プロは違う。プロの秘密は2つ：

1. **<mark>ルート弦を選んで使う</mark>。** この2週間で学んだ6弦ルートと5弦ルートのコードを**交差**させ、手を1つのフレット区域に縛ります。例：Dm7（5弦）→ G7（6弦）→ Cmaj7（5弦）。ルートは5・6・5弦を行き来しますが、手はほぼその場。
2. **<mark>ガイドトーン（3度・7度）は半音ずつしか動かない</mark>。** コードが変わるとき3度と7度だけが最短距離で滑ります。今日はこの2つの感覚を種として植えます。滑らかにつなぐ作業は今週ずっと磨いていくので、今日は「あ、プロはこうやって手を飛ばさないんだ」と感じるだけで十分です。

## ② ビジュアル

II-V-Iの3コードです。緑が各コードの**<mark>ガイドトーン（3度・7度）</mark>** — 性格を握り、次のコードへ半音ずつ動く音たち。

```json
{
  "id": "m1.w3.d1.dm7",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm7 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 4, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 5, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 6, "finger": 2, "label": "b3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

```json
{
  "id": "m1.w3.d1.g7",
  "type": "fretboard_diagram",
  "meta": { "title": "G7 (V) — 6th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b7", "role": "target", "highlight": true },
    { "string": 3, "fret": 4, "finger": 2, "label": "3", "role": "target", "highlight": true },
    { "string": 2, "fret": 3, "finger": 1, "label": "5", "role": "chord_tone" },
    { "string": 1, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" }
  ]}
}
```

```json
{
  "id": "m1.w3.d1.cmaj7",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 2, "label": "7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "3", "role": "target", "highlight": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — ガイドトーン・ライン（ほとんど動かない）。** 3弦でDm7の7度（C）→ G7の3度（B）→ Cmaj7の7度（B）をつなぎます。5フレット → 4フレット → 4フレット、1フレットだけ動いて終わり。これがボイスリーディング。

```json
{
  "id": "m1.w3.d1.guide_tone_line",
  "type": "tab",
  "meta": { "title": "Guide-tone line (ii-V-I) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 66, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "G7-3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "Cmaj7-7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 66。** 1小節に1音ずつ。3弦5→4→4。「コードは変わるのにこの音はほとんど動かない」を耳でつかんで。4回反復。

**例2 — II-V-Iコンピング。** 3コードを1小節ずつストローク。ルートが**5弦（Dm7）→ 6弦（G7）→ 5弦（Cmaj7）**を行き来しますが、手はフレット3〜7の区域にとどまります。

```json
{
  "id": "m1.w3.d1.ii_v_i_comp",
  "type": "tab",
  "meta": { "title": "ii-V-I comp (roots) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true },
      { "string": 5, "fret": 5, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 5, "role": "target", "label": "b7" }, { "string": 2, "fret": 6, "role": "target", "label": "b3" }] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 6, "fret": 3, "duration": "eighth", "label": "R", "technique": "palm_mute", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 5, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 4, "fret": 3, "role": "target", "label": "b7" }, { "string": 3, "fret": 4, "role": "target", "label": "3" }, { "string": 2, "fret": 3, "role": "chord_tone", "label": "5" }, { "string": 1, "fret": 3, "role": "root", "label": "R" }] }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 4, "fret": 5, "role": "chord_tone", "label": "5" }, { "string": 3, "fret": 4, "role": "target", "label": "7" }, { "string": 2, "fret": 5, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 72。** 小節ごとにDm7 → G7 → Cmaj7全体をストローク。ルート弦（5・6・5）だけ意識し、手がネックを走り回らないか確認。4回反復。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Dm7・G7・Cmaj7の3コードをそれぞれ押さえて音チェック。特に<mark>Dm7・Cmaj7の6弦ミュート、G7の6本全部がきれいか</mark>。

**10〜20分 · 脳トレ（今日のターゲット＝ガイドトーン）**
**例1**を押さえて3弦5→4→4を目で追います。各コードで3度・7度（緑）がどこか指で確認。「<mark>コードは変わってもガイドトーンは近くにいる</mark>」。

**20〜40分 · 実戦伴奏（例2コンピング / 66〜76 BPM）**
**例2をBPM 72で4回反復。** ルート弦が5・6・5に変わるのを意識しつつ、<mark>手の位置は1区域に縛る</mark>。慣れたらコード全体を滑らかにつないでストローク。

**40〜50分 · 録音・セルフフィードバック（推奨）**
II-V-I循環を30秒録音。チェック：コード切替で手が**<mark>不必要に大きくジャンプ</mark>**しなかったか、切替のタイミングが濁らなかったか。

**今日の完了基準：** Dm7・G7・Cmaj7を1区域で押さえ、ガイドトーン（3度・7度）がどこかを押さえながらII-V-Iをゆっくり循環できる。

## ④ ヒント / よくあるミス

- **ネックを走り回る。** ルート弦を選ばないと手があちこちジャンプ。「このコードのルートは何弦？」を先に決めれば手が1区域に縛られます。
- **ガイドトーンを無視。** 3度・7度がコードの正体であり接続線。ルートだけ見ず、ガイドトーンの動きを追って。
- **速度から上げる。** II-V-Iは切替の正確さが全て。66で滑らかな方が100でぶつ切れより強い。
- **Dm7・Cmaj7の6弦。** 5弦コードなので6弦は殺す。
