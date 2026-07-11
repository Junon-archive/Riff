---
title: "卒業 — ii-V-I+ターンアラウンドのウォーキングを録音"
dayKey: "m2.w8.d4"
estMinutes: 50
i18nKey: "lesson.m2.w8.d4"
---

# Day 4 — 卒業、ii-V-I+ターンアラウンドのウォーキングを録音

## ① 이론/설명

いよいよ第8週の最終日、**卒業**です！ 今日は2か月間積み上げたすべての語彙を<mark>卒業作品</mark>一つに録音します。2か月前を思い出してみましょう — あの頃はコードが変わっても**ルート**一つをやっと押さえるだけでした。ところが今は**Gm7-C7-Fmaj7+ターンアラウンド**の上を、コードトーン・接近音・囲み込み・装飾を総動員して滑らかに歩きます。このトラックはあなたの<mark>ベースジャズ・ハーモニーの集大成</mark>でした。

今日の卒業曲はこうです。1〜3小節は**ii-V-I**（Gm7→C7→Fmaj7）のウォーキング、4小節は**ターンアラウンド**のC7です。4小節の終わりのF#が1小節目Gm7のルートGへ半音で近づき、4小節の終わりが1小節の始まりへ<mark>自然に循環</mark>します。この4小節に2か月の語彙 — コードトーンの着地、接近音の橋、囲み込み、ゴースト — がすべて入っています。**BPM 90**で2〜3周止まらずに録音し、いちばん良いテイクを選びます。

完璧でなくても大丈夫です — <mark>最後まで流れた</mark>一テイクがいちばん良い卒業作品です。この録音は、2か月前にルートだけを押さえていた自分に今の音を聴かせる贈り物です。4弦で残したあと**5弦**でも残せば、ウォーキングベース・トラックの卒業です。ここで終わりではありません — 今やあなたはどんな進行に出会ってもその上を歩けるベーシストです。まず卒業曲が通る位置を、指板で最後に押さえてみましょう。

```json
{
  "id": "m2.w8.d4.graduation_map_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Graduation loop map — roots (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **4弦.** 卒業曲の三つのルートです。Gm7(**G**)・C7(**C**)・Fmaj7(**F**)を通り、4小節目のC7が再び最初の小節へ戻します。

```json
{
  "id": "m2.w8.d4.graduation_map_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Graduation loop map — roots (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 5, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で卒業曲をより重く残しても良いです。

## ② 시각 자료

いよいよ**卒業録音**です！ 2か月の語彙がすべて入ったii-V-I+ターンアラウンドのウォーキング、4小節の循環です。<mark>毎1拍目コードに着地し、4小節の終わりが1小節へ戻って循環します。</mark>各例は**4弦・5弦の2バージョン**です。

```json
{
  "id": "m2.w8.d4.walking_graduation_4",
  "type": "tab",
  "meta": { "title": "Walking graduation ii-V-I-turnaround — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 90、4弦、スイング4分音.** Gm7-C7-Fmaj7（1〜3小節）+ 4小節のターンアラウンド（C7 → **F#**でGm7のルートGへ接近）。4小節の終わりが1小節の始まりへ自然に循環します。

```json
{
  "id": "m2.w8.d4.walking_graduation_5",
  "type": "tab",
  "meta": { "title": "Walking graduation ii-V-I-turnaround — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 90, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **5弦.** 音と位置は4弦と同じです。低音B弦で卒業曲の低域をさらに支えます。

## ③ 오늘의 연습 (50분 루틴)

**0〜10分・ウォームアップ**
昨日のフルランスルーをBPM 60で軽く回して手を目覚めさせます。今日はこのウォーキングを<mark>卒業録音</mark>として残します。

**10〜20分・ブレイントレーニング**
卒業曲を下のようにとてもゆっくり、もう一度回して、4小節の位置を手に最後に刻みます。

```json
{
  "id": "m2.w8.d4.graduation_slow_4",
  "type": "tab",
  "meta": { "title": "Walking graduation, slow — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、4弦.** とてもゆっくり。毎1拍目のコードトーン着地と4小節終わりのF#の循環を最後に確かめます。

```json
{
  "id": "m2.w8.d4.graduation_slow_5",
  "type": "tab",
  "meta": { "title": "Walking graduation, slow — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F", "tempoBpm": 60, "notation": "staff+tab", "feel": "swing8" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b3", "role": "chord_tone" },
      { "string": 3, "fret": 5, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "Db", "role": "passing" }
    ]},
    { "measure": 2, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "E", "role": "passing" }
    ]},
    { "measure": 3, "notes": [
      { "string": 4, "fret": 1, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 3, "fret": 3, "duration": "quarter", "label": "5", "role": "chord_tone" },
      { "string": 3, "fret": 7, "duration": "quarter", "label": "7", "role": "chord_tone" }
    ]},
    { "measure": 4, "notes": [
      { "string": 3, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 1, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 4, "fret": 5, "duration": "quarter", "label": "A", "role": "passing" },
      { "string": 4, "fret": 2, "duration": "quarter", "label": "F#", "role": "passing" }
    ]}
  ]}
}
```

▶ **BPM 60、5弦.** 音と位置は4弦と同じです。

**20〜40分・実践**
卒業曲を**BPM 90**で循環で繰り返します。<mark>4小節の終わりが揺れたら</mark>速度を落として循環を滑らかに戻します。4弦で覚えたら5弦でも確かめます。

**40〜50分・録音／卒業**
いよいよ卒業録音です。**BPM 90**で2〜3周止まらずに録音し、いちばん良いテイクを残します。4弦・5弦の両方を残せばウォーキングベース・トラックの卒業です。

**今日の完了基準：** ii-V-I+ターンアラウンドのウォーキング（4小節の循環）をBPM 90で4弦・5弦で止まらず録音できる。 — 卒業成果物：自分の最初のウォーキングベース卒業録音。 **（ウォーキングベース卒業！）**

## ④ 팁 / 흔한 실수

2か月の語彙がこの4小節にすべて入っています。最後に、卒業曲が通る**ルートとコードトーン**を一枚の地図として目に刻んでおきましょう。

```json
{
  "id": "m2.w8.d4.graduation_summary_4",
  "type": "fretboard_diagram",
  "meta": { "title": "Two-month vocabulary — roots & chord tones (F) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **4弦.** 2か月の語彙の地図です。ルート**G・C・F**とコードトーン**b3・3・7**が4小節に満遍なく収まっています。

```json
{
  "id": "m2.w8.d4.graduation_summary_5",
  "type": "fretboard_diagram",
  "meta": { "title": "Two-month vocabulary — roots & chord tones (F) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "F" },
  "fretboard": { "startFret": 0, "fretSpan": 7, "dots": [
    { "string": 4, "fret": 3, "label": "G", "isRoot": true, "role": "root" },
    { "string": 3, "fret": 1, "label": "b3", "role": "chord_tone" },
    { "string": 3, "fret": 3, "label": "C", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 1, "label": "F", "isRoot": true, "role": "root" },
    { "string": 4, "fret": 5, "label": "3", "role": "chord_tone" },
    { "string": 3, "fret": 7, "label": "7", "role": "chord_tone" }
  ]}
}
```

▶ **5弦.** 位置は4弦と同じです。低音B弦で低域をさらに支えます。

- **完璧を求めて止まる。** 卒業録音は完璧よりも完走です。つまずいても止まらず、一テイクを最後まで流して循環を残します。
- **4小節終わりのF#を急いで引く。** 最後の接近音F#は自分の拍にきっちり踏んでこそ、1小節目のGへ自然に戻ります。嬉しくて早めず、循環のつなぎ目を落ち着いて締めます。
- **低音Bに油断する（5弦）。** 録音に夢中になるとBが鳴りやすいです。左手の側面で常にBを軽く覆っておきましょう。

2か月前はコードが変わるとルート一つでやっと踏ん張っていたのに、今やあなたは進行を歩くベーシストです。Gm7-C7-Fmaj7+ターンアラウンドの上をコードトーンと接近音で滑らかに歩き、2か月の語彙を一曲として完成させました。ウォーキングベース・トラックの卒業、本当におめでとうございます。これからどんな進行に出会っても、あなたの歩みはその上を歌いながら歩いていきます。
