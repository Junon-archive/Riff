---
title: "エンクロージャー・ウォーキング — ターゲットCを上下から包んで着地（第6週 完成）"
dayKey: "m2.w6.d4"
estMinutes: 50
i18nKey: "lesson.m2.w6.d4"
---

# Day 4 — エンクロージャー・ウォーキング、ターゲットCを包んで着地

## ① 이론/설명

6週目の最終日、これまで身につけたエンクロージャーを実際のウォーキング1小節に織り込みます。今日のターゲット音は**C** — F調のV コード**C7**のルートです。このCを半音上の**Db**と半音下の**B**で包んだあと<mark>Cに着地し、続いて3度で色を乗せて</mark>1小節を完成させます。

小節の流れはこうです。1拍目**Db**（上）→ 2拍目**B**（下）→ 3拍目**C着地**（ルート）→ 4拍目**E（3度）**。上と下から半音ずつ狭まってきてCに落ち着くので、<mark>次のコードへ必然的に吸い込まれる</mark>緊張が生まれます。エンクロージャーがウォーキングの1小節として生きる瞬間です。

一つ押さえておくことがあります。この小節はエンクロージャーの動作だけを取り出した練習なので、<mark>1拍目がアプローチ音（Db）で始まり</mark>ます。ですが実戦のウォーキングでは、このエンクロージャーが**前の小節の弱拍（3〜4拍）に乗って**、次のコードの1拍目（C）へ着地します。今日はエンクロージャーそのものを手に完全に馴染ませることに集中し、実戦では前の小節の終わりにつなげると覚えておきましょう。

まず、ターゲット**C**を包む三つの音 — 上の**Db**、下の**B**、そして着地のルート**C**を指板で見てみましょう。

```json
{
  "id": "m2.w6.d4.enclosure_shape_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around C (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** 上の**Db**（3弦4フレット）、下の**B**（3弦2フレット）、着地のルート**C**（3弦3フレット）です。緑の点が着地ターゲットです。

```json
{
  "id": "m2.w6.d4.enclosure_shape_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Enclosure shape around C (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 4, "label": "Db", "role": "passing" },
    { "string": 3, "fret": 2, "label": "B", "role": "passing" },
    { "string": 3, "fret": 3, "label": "R", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bは覆っておきましょう。

## ② 시각 자료

では、今週の完成物、**エンクロージャー・ウォーキング**1小節です。ターゲットCを上のDb・下のBで包んで着地し、4拍目で3度Eで色を乗せます。<mark>狭まって近づく緊張が着地を強く</mark>します。各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w6.d4.enclosure_4",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、4弦、スイング4分音.** ターゲット**C（3弦3フレット）**を半音上**Db（4フレット）** → 半音下**B（2フレット）**で包んだあと着地します。狭まって近づく緊張が着地を強くします。※ この小節はエンクロージャーの動作だけを取り出した練習なので、1拍目がアプローチ音で始まります — 実戦のウォーキングではこのエンクロージャーが**前の小節の弱拍（3〜4拍）に乗って**次のコードの1拍目（C）へ着地します。

```json
{
  "id": "m2.w6.d4.enclosure_5",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 80, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 80、5弦.** 音と位置は4弦と同じです。低音Bでより重い低域を乗せられます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日の3度エンクロージャーをBPM 72で一度歩き、包んで着地する感覚を呼び戻します。

**10〜20分・ブレイントレーニング**
下の準備例でエンクロージャー・ウォーキングを**BPM 60**のゆっくりしたスイング4分音で押さえます。<mark>上のDb・下のBがルートCへ正確に狭まるか</mark>を音で確かめます。

```json
{
  "id": "m2.w6.d4.enclosure_slow_4",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** エンクロージャー・ウォーキングをゆっくり。上のDb・下のBを通り、Cに正確に着地して3度Eへつなげます。

```json
{
  "id": "m2.w6.d4.enclosure_slow_5",
  "type": "tab",
  "meta": { "title": "Chromatic enclosure targeting C, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" },
      { "string": 3, "fret": 2, "duration": "quarter", "label": "B", "role": "passing" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "3", "role": "chord_tone" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
上の**エンクロージャー・ウォーキング**をBPM 80で繰り返します。<mark>着地のCが手前の二つの包む音よりはっきり強く</mark>聞こえるか観察します。4弦で覚えたら5弦でも確かめます。

**40〜50分・録音／卒業**
いよいよ録音です。エンクロージャー・ウォーキング1小節を2〜3周止まらずに録音し、その中でいちばん良いテイクを自分の最初のエンクロージャー・ウォーキングとして残しましょう。4弦・5弦の両方を残せば6週目の完成です。

**今日の完了基準：** ターゲットCを半音上Db・半音下Bで包んだあと、スイング4分音で4弦・5弦の両方でCにきっちり着地・録音できる。 — 週間の成果物：自分の最初のエンクロージャー・ウォーキングベースの録音。（6週目の完成！）

## ④ 팁 / 흔한 실수

- **1拍目から急いで着地してしまう。** この小節はアプローチ音で始まるので、嬉しくなって3拍目のCを引っかけて早く押さえがちです。Db・Bはそれぞれ1拍ずつ、Cは自分の拍に降ろします。
- **エンクロージャーを前の小節に無理につなげてしまう。** 今日はエンクロージャーそのものを手に馴染ませる日です。実戦で前の小節の3〜4拍に乗せるのは、この1小節がラクになってから自然につなげれば大丈夫です。

今日包んだターゲット、C一点を目に刻んでおきましょう。6週間ずっと学んだエンクロージャーは、結局この一点の着地で完成します。

```json
{
  "id": "m2.w6.d4.target_c_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Target C (root) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **4弦.** 今日の着地のルートC（3弦3フレット）です。緑の点一つに、今週のすべてのエンクロージャーが集まります。

```json
{
  "id": "m2.w6.d4.target_c_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Target C (root) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "target", "highlight": true }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音Bでより低いCも見当をつけられます。

- **第6週の自分を大きくほめましょう。** 半音上・下からターゲットを包む上級の近づき方を、概念から始めてルート・3度を経て、実戦のウォーキング1小節として完成させました。今やあなたのウォーキングは、ターゲット音へ必然的に吸い込まれる力を得ました。2か月の旅、本当に見事に歩いてきました。
