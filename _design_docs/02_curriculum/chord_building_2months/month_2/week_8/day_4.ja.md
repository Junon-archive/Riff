---
title: "最終レコーディング＆セルフ分析 — 2か月の結晶"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
---

# Day 4 — 自分だけのコンピングを録音に残す

## ① 理論・説明

ついに最終日。今日は学んだ全部を合わせて、**II-V-Iの上に自分だけのコンピングを完成させて録音**し、自分で分析します。

2か月を振り返ると：
- **1か月目** — コードは暗記する形ではなく、**ルートの上に3度・7度を積む組み立て**。6・5弦ルート、ボイスリーディング、シェルボイシング。
- **2か月目** — ルートを4弦へ上げて**高音域**を開き、**9度**で色を足し、**トップノート**をメロディでつないだ。

今日の完成コンピングはこれら全部の道具の和 — 9度できらめき（色）、トップノートで歌い（メロディ）、リズムでグルーヴ（命）。暗記した正解ではなく、**自分の選択で作った自分の音**です。
ここまで来たあなた、本当にすごいです。2か月前、コードを1つ変えるだけで手がこわばっていた人が、今は自分だけのコンピングを設計して録音しています。このカリキュラムは今日で終わりますが、あなたの音楽はここからが本当の始まりです。今日録ったその音、ぜひ残しておいてください — 半年後に聴き返せば、どれだけ遠くまで来たかがわかりますよ。

## ② ビジュアル

**Dm9（ii）。** 今日の舞台の始まりのコード。黄色＝9度。

```json
{
  "id": "m2.w8.d4.dm9",
  "type": "fretboard_diagram",
  "meta": { "title": "Dm9 (ii) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 5, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 3, "finger": 1, "label": "b3", "role": "target", "highlight": true },
    { "string": 3, "fret": 5, "finger": 3, "label": "b7", "role": "target", "highlight": true },
    { "string": 2, "fret": 5, "finger": 4, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**Cmaj9（I）。** 進行の家。9度できらめいて着地。

```json
{
  "id": "m2.w8.d4.cmaj9",
  "type": "fretboard_diagram",
  "meta": { "title": "Cmaj9 (I) — 5th-string root", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C" },
  "fretboard": { "startFret": 1, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 3, "finger": 2, "label": "R", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 2, "finger": 1, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 4, "label": "7", "role": "chord_tone" },
    { "string": 2, "fret": 3, "finger": 3, "label": "9", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```

**例1 — 最終コンピング（9度＋グルーヴ）。** 9度できらめき、休符・パームミュートでグルーヴ。今日録音する骨組みです。

```json
{
  "id": "m2.w8.d4.final_comp",
  "type": "tab",
  "meta": { "title": "Final comp (9ths + groove) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 5, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 5, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 5, "duration": "eighth", "label": "9", "technique": "palm_mute", "role": "color" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "duration": "quarter", "rest": true }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 3, "fret": 4, "duration": "eighth", "label": "3", "technique": "palm_mute", "role": "target", "highlight": true },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "target", "highlight": true },
      { "string": 6, "fret": 3, "duration": "quarter", "rest": true }
    ]},
    { "measure": 3, "notes": [
      { "string": 5, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 5, "fret": 3, "duration": "eighth", "rest": true },
      { "string": 2, "fret": 3, "duration": "eighth", "label": "9", "technique": "palm_mute", "role": "color" },
      { "string": 3, "fret": 4, "duration": "half", "label": "7", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、4回反復。** Dm9 → G7 → Cmaj9を9度（黄色）とグルーヴ（休符・P.M.）で。これがあなたの完成コンピング — 録音しよう。

**例2 — トップノート・メロディ（テイクにのせる歌）。** 上でC-B-Bが歌います。コンピングにこのラインを足せば完成。

```json
{
  "id": "m2.w8.d4.final_top_line",
  "type": "tab",
  "meta": { "title": "Top-note melody for the take — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "C", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [ { "string": 1, "fret": 8, "duration": "whole", "label": "b7(C)", "role": "target", "highlight": true } ]},
    { "measure": 2, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "3(B)", "role": "target", "highlight": true } ]},
    { "measure": 3, "notes": [ { "string": 1, "fret": 7, "duration": "whole", "label": "7(B)", "role": "target", "highlight": true } ]}
  ]}
}
```

▶ **BPM 72。** 1弦8 → 7 → 7。コンピングの上にこのトップノート・メロディをのせれば、色（9度）＋歌（トップ）＋グルーヴ（リズム）が全部そろった自分だけの完成作です。

## ③ 今日の練習（50分ルーティン — レコーディング・チャレンジ）

**0〜10分 · ウォームアップ＋セット**
例1の最終コンピングを何度か回して体をほぐし、録音アプリ（スマホのボイスメモでもOK）を準備。R&BのII-V-Iバッキングトラックをセット。

**10〜20分 · 脳トレ（今日のターゲット＝自分の選択を確定）**
録音するバージョンを決める：どのコードに9度？ グルーヴAかB？ トップは？ 8週の道具から何を使うか自分で決定。

**20〜40分 · 実戦レコーディング**
バッキングの上で**あなたの完成コンピングを丸ごと録音**（例1＋好みで例2のトップノート）。一発完璧ではなく、複数テイクから気に入ったものを残して。

**40〜50分 · セルフ分析（詳細チェックリスト）**
録音を聴き返して診断：(1) コード切替のタイミングがグルーヴの上でぶれなかったか (2) 鳴らない弦/ミュートのミスはないか (3) トップノート・メロディがつながったか (4) 9度（テンション）が意図どおりきらめいたか (5) 次に変えたい1つは？

**今日の完了基準：** II-V-Iの上に9度・トップノート・グルーヴを混ぜた自分だけのコンピングを録音し、チェックリストで自己分析する。（8週目 · **2か月カリキュラム完成！** 🎉🎸）

## ④ ヒント / よくあるミス＋次へ

- **一発完璧の強迫。** プロも複数テイクを残します。気楽に何度も、その中のベストを。
- **分析なしで録音だけ。** 録音が師匠。必ず聴き返して1つを選んで。
- **振り返りを飛ばす。** 2か月前と今、コードを見る目がどう変わりましたか？ その成長を必ず感じて。
- **次の月へ。** あなたは今、コードを「組み立て」「歌わせる」人になりました。次は学んだコンピングを実際の曲に応用するか、新しいカリキュラム（ファンク・リズムなど）へ拡張する番。おめでとう — 本当に遠くまで来ました！
