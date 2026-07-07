---
title: "II-V-I統合 — ジャンプなしで滑らかに循環"
dayKey: "m1.w3.d4"
estMinutes: 50
i18nKey: "lesson.m1.w3.d4"
---

# Day 4 — 1区域で歌うように回るII-V-I

## ① 理論・説明

今週のゴール。ここまで学んだことを1つにまとめます。

- **ルート弦交差（5・6・5）**で手を1区域に縛り、
- **ガイドトーン（3度・7度）**が半音ずつしか動かないのを感じ、
- 3コードを**ジャンプなしで**滑らかに循環する。

今日はII-V-Iを4小節ループで回します（Dm7 → G7 → Cmaj7 → またDm7）。曲の多くはこの塊が繰り返されるので、これを体に刻めば本当の伴奏が始まります。目標は速度ではなく**つながりの滑らかさ** — コードが変わる瞬間に音が切れず、ガイドトーンが歌のように次へ続くこと。

## ② ビジュアル

今週の家、**Cmaj7（I）**。II-Vが作った緊張がここで解けます。緑＝ガイドトーン（7度・3度）。

```json
{
  "id": "m1.w3.d4.cmaj7_home",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj7 (I) — home", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
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

**例1 — ガイドトーン・ループ（4小節）。** 3弦で5→4→4→5。Cmaj7まで行ってまたDm7へ戻る循環です。1音がずっとくっついて回るのを感じて。

```json
{
  "id": "m1.w3.d4.guide_tone_loop",
  "type": "tab",
  "meta": { "title": "Guide-tone loop (ii-V-I-ii) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 68, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "pattern": "guide_tone_3rds", "measures": [
    { "measure": 1, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "G7-3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 3, "fret": 4, "duration": "whole", "label": "Cmaj7-7(B)", "role": "target", "highlight": true } ]},
    { "measure": 4, "notes": [ { "string": 3, "fret": 5, "duration": "whole", "label": "Dm7-b7(C)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 68。** 3弦5→4→4→5。ループが回るとき、このガイドトーンがコードからコードへ歌うのを耳で。4回反復。

**例2 — II-V-Iコンピング・ループ。** ルート＋ガイドトーンで4小節を循環（Dm7-G7-Cmaj7、最後の小節はCmaj7維持）。ルートは5・6・5・5、ガイドトーン（3弦）は5・4・4・4でほぼその場。

```json
{
  "id": "m1.w3.d4.ii_v_i_loop",
  "type": "tab",
  "meta": { "title": "ii-V-I comp loop — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 76, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "7", "role": "target", "highlight": true },
      { "string": 5, "fret": 3, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 4, "notes": [
      { "string": 5, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 76、4回反復。** ルート弦が行き来してもガイドトーンはくっついているのを手で感じながらループを回します。最後のCmaj7で「家に着いた」安定を楽しんで。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
Dm7-G7-Cmaj7ループをとてもゆっくり（BPM 64）1周ずつ。手が区域を離れないかだけチェック。

**10〜20分 · 脳トレ（今日のターゲット＝滑らかなつながり）**
**例1**のガイドトーン・ループを目を閉じて3弦5→4→4→5で。各切替でこの音がどこへ行くか先に分かって押さえる。

**20〜40分 · 実戦伴奏（例2ループ / 72〜82 BPM）**
バッキング（あれば）に合わせて**例2のループをBPM 76で**何度も。切替の瞬間に音を切らさず、指は最小限。慣れたらDキー（前回）でもループを回して。

**40〜50分 · 録音・セルフフィードバック（推奨）**
II-V-Iループを2周録音。チェック：切替で手が大きくジャンプしなかったか／切替のタイミングが濁らなかったか／ガイドトーンがコードからコードへ歌ったか。

**今日の完了基準：** II-V-Iを1区域でジャンプなく滑らかに循環し、ガイドトーンの流れを意識してコンピングできる。（3週目完成！）

## ④ ヒント / よくあるミス

- **切替で手を丸ごと離す。** 共通音・近い音は付けたまま、必要な指だけ動かして。音がずっと切れにくくなります。
- **ループの終わりが雑。** 最後のCmaj7（家）がぼやけると循環が閉じません。Iへの到着をはっきり。
- **速度への執着。** ループは滑らかさが全て。76で歌う方が100でぶつ切れよりプロに近い。
- **1キーに留まる。** 余裕があればC・D両キーでループを回し「移動可能なパターン」を固めて。
