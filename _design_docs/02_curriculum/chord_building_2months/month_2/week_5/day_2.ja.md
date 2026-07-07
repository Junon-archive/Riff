---
title: "高音域メジャー/マイナー — トップノートが明暗を分ける"
dayKey: "m2.w5.d2"
estMinutes: 50
i18nKey: "lesson.m2.w5.d2"
---

# Day 2 — 一番上の1音（1弦）で性格を変える

## ① 理論・説明

昨日Dフォームで**3度がトップノート（1弦）**だと見ました。今日はそのトップノート1つだけ触ります。ルールは1か月目と同じ — **3度を半音下げればマイナー。** ただ今回はその3度が**一番高い音**なので、コードを変えると一番上の音がそのまま変わります。

- **Gメジャー** — 1弦7フレット（B、3度）がトップノート。
- **Gマイナー** — 1弦6フレット（B♭、b3）がトップノート。

つまり1弦の指1本を**7 ↔ 6フレット**へ動かすと明るさ↔暗さが切り替わります。高音域ではこの変化が特に鮮明。トップノートが明るい3度か暗いb3かが、そのままコードの表情だからです。R・5はそのまま、一番上の1音だけ。指1本で曲の表情を明るくも暗くもできるんです。先月学んだあの3度スイッチが、いまや一番上で歌うので、ずっとドラマチックに聞こえます。難しくありません — 動かすのはたった1フレットですから。今日はこれだけ持ち帰ればOK：「明るくしたいなら3度、暗くしたいならb3」。

## ② ビジュアル

**Gメジャー（Dフォーム）** — トップノートが3度（B、緑）。

```json
{
  "id": "m2.w5.d2.g_major_dform",
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

**Gマイナー（Dフォーム）** — トップノートだけ半音下げてb3（B♭、緑）。1弦7 → 6。

```json
{
  "id": "m2.w5.d2.gm_dform",
  "type": "fretboard_diagram",
  "meta": { "title": "Gm — 4th-string root (D-shape)", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm" },
  "fretboard": { "startFret": 5, "fretSpan": 5, "dots": [
    { "string": 6, "fret": 0, "muted": true },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
    { "string": 2, "fret": 8, "finger": 4, "label": "R", "isRoot": true, "role": "root" },
    { "string": 1, "fret": 6, "finger": 2, "label": "b3", "role": "target", "highlight": true }
  ]}
}
```

**例1 — トップノート 3 → b3 スイッチ・ライン。** 1弦の7フレット（3、B）と6フレット（b3、B♭）を並べて。一番上の音が明るさから悲しみへ変わるのを耳で。

```json
{
  "id": "m2.w5.d2.top_switch_line",
  "type": "tab",
  "meta": { "title": "Top note 3 to b3 — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm", "tempoBpm": 72, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true },
      { "string": 1, "fret": 6, "duration": "quarter", "label": "b3", "role": "target", "highlight": true },
      { "string": 1, "fret": 7, "duration": "quarter", "label": "3", "role": "target", "highlight": true }
    ]}
  ]}
}
```

▶ **BPM 72。** 「ルート → 3度（明るい）→ b3（暗い）→ 3度」。一番上の1音がコードの表情を裏返すのを感じて。4回反復。

**例2 — メジャー ↔ マイナー高音域コンピング。** 1小節G、2小節Gm。細い4本をストロークし、動くのは**1弦の指1本（7↔6）だけ**。

```json
{
  "id": "m2.w5.d2.maj_min_high_comp",
  "type": "tab",
  "meta": { "title": "G to Gm high-register comp — staff + tab", "stringCount": 6, "tuning": ["E", "A", "D", "G", "B", "E"], "key": "Gm", "tempoBpm": 80, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 7, "duration": "eighth", "label": "3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]},
    { "measure": 2, "notes": [
      { "string": 4, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 6, "duration": "eighth", "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "half", "label": "R", "isRoot": true, "role": "root" }
    ]}
  ]}
}
```

▶ **BPM 80、4回反復。** 1小節の明るいG、2小節の暗いGm。1弦のトップノートだけ7↔6フレット。一番上の音の変化を楽しんで。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
G ↔ Gm を4拍ごとに交互に。1弦だけ7↔6フレット、他の3本は固定。6・5弦ミュート維持。

**10〜20分 · 脳トレ（今日のターゲット＝トップノート3↔b3）**
**例1**で1弦の7・6フレットを交互に押さえ「サード／フラットサード」と言います。目を閉じてトップノートを明るく（7）・暗く（6）変えられれば合格。

**20〜40分 · 実戦伴奏（例2コンピング / 76〜86 BPM）**
**例2をBPM 80で4回反復**（G↔Gm）。慣れたらルートを別フレット（例：A＝7）へ移して同じトップノート・スイッチを応用。トップノートがコードの印象を左右するのを体で。

**40〜50分 · 録音・セルフフィードバック（推奨）**
G↔Gmを30秒録音。チェック：トップノート（1弦）がはっきり変わるか、低音弦が漏れないか。

**今日の完了基準：** 1弦7↔6フレットだけで高音域G ↔ Gmを切り替え、トップノートが性格を分けると理解する。

## ④ ヒント / よくあるミス

- **手全体を変える。** マイナーへ行くとき1弦の指1本だけ半音。他は付けたまま。
- **トップノートが鳴らない。** 1弦の一番上の音が死ぬとコードの表情が聞こえません。指先を立てて1弦だけきれいに。
- **3度を内側で探す。** このフォームでは3度が1弦（一番上）。内側の弦ではなくトップを見て。
- **低音弦の油断。** 4弦ルートは常に6・5弦ミュート。
