---
title: "バウンス・ルート・ライン — 余白で跳ねるネオソウルのルート"
dayKey: "m2.w6.d2"
estMinutes: 50
i18nKey: "lesson.m2.w6.d2"
---

# Day 2 — バウンス・ルート・ライン、余白で跳ねるネオソウルのルート

## ① 理論・解説

16分グリッドを立てたので、今日はその上に**バウンス・ルート・ライン**を乗せます。ネオソウルのベースは音をびっしり詰めるより、<mark>ルート一つをぽんと投げて余白を残す弾き方で跳ねます。</mark>今日の材料はたった一つ、開放**Eのルート**です。

カギは**余白**です。16分グリッドの上でルートを数マスだけ選んで弾き、残りのマスは**休符**で空けます。<mark>空けた場所があってこそ、弾いた場所がより際立って跳ねます。</mark>手が休む瞬間も、頭の中では「1・e・＆・a」を数え続けるのがカギです。

そこに**スウィング16**を乗せるとラインが寝始めます。正拍で置いたルートを、後ろのマスに掛かった音だけ少し遅らせます。<mark>固かったルート・ラインが後ろへ寝る瞬間、ネオソウル特有のねばりが生まれます。</mark>音はそのまま、タイミングだけ変えます。

**BPM 65**で二つのラインを覚えます。一つは拍ごとにルートを投げる単純なバウンス、もう一つは余白を生かしたよりネオソウルらしいラインです。<mark>ルートが余白を置いて跳ねれば今日は成功です。</mark>4弦でも5弦でも運指は同じです。

## ② ビジュアル資料

今日のビジュアル資料は二つです。まず<mark>拍ごとにルートを投げる単純なバウンス</mark>で余白を覚え、そのあと余白をもっと生かしたネオソウル・ルート・ラインへ進みます。各例は4弦・5弦の二バージョンです。

まず**単純なバウンス・ルート**です。開放Eを拍ごとに8分音符で「ドン」と投げ、残りの半拍は休符で空けます。

```json
{
  "id": "m2.w6.d2.bounce_root_4",
  "type": "tab",
  "meta": { "title": "Bounce root (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65、スウィング16。** 拍ごとにルート一つ、そのあとは余白。休む半拍も心の中で数え続けます。**5弦なら**低音Bは寝かせておきます。

```json
{
  "id": "m2.w6.d2.bounce_root_5",
  "type": "tab",
  "meta": { "title": "Bounce root (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆っておきます。

今度は<mark>余白をもっと生かしたネオソウル・ルート・ライン</mark>です。16分と休符を混ぜてルートが前後に少しずれて跳ねます。

```json
{
  "id": "m2.w6.d2.bounce_root_neo_4",
  "type": "tab",
  "meta": { "title": "Neo-soul bounce root (E) — 4-string", "instrument": "bass", "stringCount": 4, "tuning": ["E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **BPM 65、スウィング16。** 16分のルートと休符を混ぜてねばらせます。後ろのマスに掛かった音は少し遅らせます。**5弦なら**低音Bのミュートを保ちます。

```json
{
  "id": "m2.w6.d2.bounce_root_neo_5",
  "type": "tab",
  "meta": { "title": "Neo-soul bounce root (E) — 5-string", "instrument": "bass", "stringCount": 5, "tuning": ["B","E","A","D","G"], "key": "E", "tempoBpm": 65, "notation": "staff+tab", "feel": "swing16" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 4, "fret": 0, "duration": "sixteenth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "role": "root" },
      { "string": 4, "fret": 0, "duration": "sixteenth", "rest": true },
      { "string": 4, "fret": 0, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 0, "duration": "eighth", "rest": true }
    ]}
  ]}
}
```

▶ **5弦。** 音と位置は4弦と同じです。低音**B**は親指で覆っておきます。

## ③ 今日の練習（50分ルーティン）

**0〜10分 · ウォームアップ**
開放Eのルートを8分音符で「ドンドン」投げて手をほぐします。力を抜いて一音がきれいに鳴るか確認します。

**10〜20分 · 頭のトレーニング**
休符の場所でも「1・e・＆・a」を数え続けます。<mark>弾いた場所と空いた場所がはっきり分かれるか</mark>確認します。

**20〜40分 · 実践**
**単純なバウンス・ルート**と**ネオソウル・ルート・ライン**をBPM 65で交互に練習します。4弦で覚えたあと5弦でも確認します。

**40〜50分 · 録音**
ネオソウル・ルート・ラインを録音して聴き返します。余白が生きてルートが跳ねるか点検します。

**今日の完了基準：** 16分グリッドの上に余白を置いたスウィング16バウンス・ルート・ラインを作り、4弦・5弦のどちらでも確認できる。

## ④ ヒント・よくあるミス

- **余白に耐えられない。** 空いたマスを音で埋めるとバウンスが消えます。休符もリズムの一部です。
- **休むときに拍を見失う。** 手が休んでもカウントは止めてはいけません。心の中で数え続けます。
- **後ろのマスを引く。** スウィング16は遅らせるものです。後ろのマスに掛かった音を少し後ろへ寝かせます。
- **低音Bの油断（5弦）。** 一小節ずっと使わない低音Bは親指で覆っておきます。
