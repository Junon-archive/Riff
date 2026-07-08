---
title: "4弦ルートの発見 — ルートを高音域へ上げる"
dayKey: "m2.w5.d1"
estMinutes: 50
i18nKey: "lesson.m2.w5.d1"
---

# Day 1 — ルートが4弦へ上がると、R·3·5はどこへ？

## ① 理論・説明

この1か月、ルートは6弦（1週目）→ 5弦（2週目）へ**下りて**きました。今週は逆。ルートを**4弦へ上げます。** するとコードが指板の**高音域**、細い弦（1・2・3・4）の上で明るく澄んで鳴ります。

例は4弦5フレットにルートを置いた**Gメジャー（Dフォーム）**。度数で分解すると：

- **R（ルート）** — 4弦5フレット（G）。今週の新しい家。
- **5（5度）** — 3弦7フレット（D）。
- **R（ルート）** — 2弦8フレット（G）。オクターブ上のルート。
- **3（3度）** — 1弦7フレット（B）。**最も高く鳴る音＝トップノート**（緑）。

ここで新しい概念 — **トップノート**です。複数の弦を鳴らすとき、一番高い音（普通は1弦）がコードの印象を左右します。このDフォームでは**3度（B）がトップノート**なので、コードが明るく聞こえるのはこの一番上の3度のおかげ。そして**6・5弦は使いません** — ルートより低い弦が鳴ると高音域の澄んだ感じが壊れるので、確実に殺します。高音域へ上がると、同じコードでもずっとキラキラ響きます。今日はじめてこの上のほうでコードを鳴らすと、「あれ、自分のギターからこんな澄んだ音が出てたっけ？」と思うはず。1か月ずっと下のほうを扱ってきたので、今日は反対側の世界を開く日だと思ってください。

## ② ビジュアル

4弦にルートを置いた**Gメジャー（Dフォーム）**。6・5弦は✕（ミュート）、緑が1弦の**3度（トップノート）**です。

```json
{
  "id": "m2.w5.d1.g_major_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "G major — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 2, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 7, "finger": 3, "label": "3", "role": "target", "highlight": true }
  ]}
}
```

**例1 — Dフォーム・コードトーン・ライン。** 4音 R → 5 → R → 3 を1つずつ押さえて音で確認。最後の3度（1弦、緑）がトップノートとして明るく鳴るのを耳に刻んで。

```json
{
  "id": "m2.w5.d1.g_dform_line",
  "type": "tab",
  "meta": { "title": "G D-shape tones (R·5·R·3) — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72。** 「ルート（4弦）→ 5度（3弦）→ ルート（2弦）→ 3度（1弦、トップ）」。上がるほど音が明るくなり、一番上の3度がきらめくのを感じて。4回反復。

**例2 — 高音域Gコンピング。** 細い4本（4・3・2・1弦）だけストローク。1弦のトップノート（3度）がはっきり鳴るように、6・5弦は殺したまま。

```json
{
  "id": "m2.w5.d1.g_high_comp",
  "type": "tab",
  "meta": { "title": "G high-register comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "G", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "eighth", "role": "root", "label": "R", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root", "chord": [{ "string": 3, "fret": 7, "role": "chord_tone", "label": "5" }, { "string": 2, "fret": 8, "role": "root", "label": "R" }, { "string": 1, "fret": 7, "role": "target", "label": "3" }] }
    ]}
  ]}
}
```

▶ **BPM 80、4回反復。** 高音域Gトライアドを薄くストローク。トップノート（1弦3度）が歌うようにきらめくか確認。6・5弦が漏れると音が濁ります。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
G（Dフォーム）を押さえ、4・3・2・1弦を1本ずつ鳴らします。最優先チェックは**6・5弦が確実に死んでいるか**、使う4本だけきれいか。

**10〜20分 · 脳トレ（今日のターゲット＝トップノート）**
**例1**を押さえてR・5・3の位置を言い、特に今**トップノートがどの音（3度）か**を確認。目を閉じて1弦7フレット（トップ＝3度）を押さえられれば合格。

**20〜40分 · 実戦伴奏（例2コンピング / 76〜86 BPM）**
**例2の高音域GコンピングをBPM 80で4回反復。** 慣れたら同じフォームをルートだけ別フレット（例：A＝7フレット）へずらして応用。明るいバッキングに重ねて高音域の澄んだ音を楽しんで。

**40〜50分 · 録音・セルフフィードバック（推奨）**
高音域コンピングを30秒録音。チェック：ミュートすべき低音弦（6・5弦）が漏れなかったか／トップノート（3度）がはっきり聞こえるか。

**今日の完了基準：** G（Dフォーム）を6・5弦ミュートしたまま細い4本だけ鳴らし、トップノートが3度だと指して言える。

## ④ ヒント / よくあるミス

- **低音弦が漏れて鳴る。** 4弦ルートコード最大の敵。ルートを押さえる指先を寝かせて5弦を、別の指で6弦を覆って。
- **トップノートを聞き流す。** 今月ずっと主役です。1弦の一番上の音が今R・3・5のどれかを常に意識。
- **Dフォームのストレッチ痛。** 4〜1弦にまたがるフォームなので最初は手が痛い。無理せず4本きれいなら十分。
- **高音域が薄いからと強く弾く。** 薄いのが正常。バンド/バッキングの上で真価が出ます。強く擦らず軽く。
