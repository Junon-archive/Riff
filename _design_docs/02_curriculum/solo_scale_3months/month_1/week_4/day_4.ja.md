---
title: "ワンコードジャム録音→自己フィードバック→1か月総まとめ"
dayKey: "m1.w4.d4"
estMinutes: 50
i18nKey: "lesson.m1.w4.d4"
lang: ja
---

# Day 4 — 1か月のゴールライン：録音して、聴いて、自分をコーチする

## ① 理論・説明

今日なぜこれをやるかというと。今日は新しい技術を学ぶ日ではありません。この4週間で積み上げてきたものを**一つの演奏として取り出し、それを録音して、自分自身がコーチになってフィードバックする**日です。実は実力は、練習しているときよりも**一歩引いて自分の演奏を落ち着いて聴くとき**に一番伸びるんです。プロが録音にこだわるのは、伊達や酔狂ではありません。

この1か月を振り返ってみましょう。1週目はペンタ第1ボックスをシーケンスで噛み砕き、コードトーン（♭3）に着地する方法を。2・3週目は残りのボックスとネック全体のつながりを。そして今週4週目は、♭5ブルーノート＋ベンド＋ヴィブラート＋フレージングを学びました。今日は**このすべて**を一つのワンコードジャムに溶け込ませます。

今日のジャムの設計原則は**コール＆レスポンス（問いかけと答え）**です。一つのフレーズで質問を投げかけ（開いたままにして）、次のフレーズで答える（閉じる）。質問はあいまいに開けたままでも構いません——むしろ♭5や4度で少し不安げに切ると、「次は何？」という緊張感が生まれます。答えのほうは必ず**♭3か根音に着地＋ヴィブラート**で、はっきりと閉じます。この会話の構造があれば、ワンコードの上での即興も退屈になりません。そして今日の本当の目的は、華やかな演奏ではなく、**録音→自己フィードバックのループを体に染み込ませること。** これは3か月間ずっと、いや一生使う習慣です。

さあ、今日この一日で1か月を卒業します。気負わず、この4週間がどれくらい手に馴染んだかを確かめる気持ちで、軽やかに。

## ② 視覚資料

今日のジャムの「カンニングペーパー」です。Aブルース第1ボックス全体——着地点（♭3、緑）と経過音（♭5、紫）をひと目で確認できます。ジャム中に迷ったら、この図だけ見てください。

```json
{
  "id": "m1.w4.d4.a_blues_box1_cheatsheet",
  "type": "scale_shape",
  "meta": {
    "title": "A blues scale Box 1 — jam cheat sheet (targets & blue notes)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "scale": "A blues scale",
    "tempoBpm": 80
  },
  "fretboard": {
    "startFret": 5,
    "fretSpan": 4,
    "dots": [
      { "string": 6, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 6, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true },
      { "string": 5, "fret": 5, "finger": 1, "label": "4", "role": "scale" },
      { "string": 5, "fret": 6, "finger": 2, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 5, "fret": 7, "finger": 3, "label": "5", "role": "chord_tone" },
      { "string": 4, "fret": 5, "finger": 1, "label": "b7", "role": "scale" },
      { "string": 4, "fret": 7, "finger": 3, "label": "R", "isRoot": true, "role": "root" },
      { "string": 3, "fret": 5, "finger": 1, "label": "b3", "role": "target", "highlight": true },
      { "string": 3, "fret": 7, "finger": 3, "label": "4", "role": "scale" },
      { "string": 3, "fret": 8, "finger": 4, "label": "b5", "role": "blue_note", "highlight": true },
      { "string": 2, "fret": 5, "finger": 1, "label": "5", "role": "chord_tone" },
      { "string": 2, "fret": 8, "finger": 4, "label": "b7", "role": "scale" },
      { "string": 1, "fret": 5, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
      { "string": 1, "fret": 8, "finger": 4, "label": "b3", "role": "target", "highlight": true }
    ]
  }
}
```

1か月の総まとめとなるカプストーン・リックです。4小節のコール＆レスポンス——**1小節目は質問**（♭5の経過音を経て下行し、根音で開いたままにする）、**2小節目は余白のあとの短いモチーフ**（♭5にヴィブラート）、**3小節目は答えの展開**（全音ベンドの感嘆符）、**4小節目は着地**（スライド→♭3に広いヴィブラートの句点）。今月学んだことがすべて詰まっています。

```json
{
  "id": "m1.w4.d4.capstone_call_response_lick",
  "type": "tab",
  "meta": {
    "title": "1-month capstone — call & response over Am7 (all skills combined)",
    "stringCount": 6,
    "tuning": ["E", "A", "D", "G", "B", "E"],
    "key": "A blues",
    "tempoBpm": 80
  },
  "tab": {
    "timeSignature": "4/4",
    "pattern": "call_and_response",
    "measures": [
      { "measure": 1, "notes": [
        { "string": 6, "fret": 5, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 8, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 5, "fret": 7, "duration": "eighth", "label": "5", "role": "chord_tone" },
        { "string": 5, "fret": 6, "duration": "eighth", "label": "b5", "highlight": true, "role": "passing" },
        { "string": 5, "fret": 5, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 6, "fret": 5, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 2, "notes": [
        { "string": 1, "fret": 1, "duration": "quarter", "rest": true, "label": "rest" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 7, "duration": "eighth", "label": "4", "role": "scale" },
        { "string": 3, "fret": 8, "duration": "quarter", "technique": "vibrato", "label": "b5", "highlight": true, "role": "blue_note" },
        { "string": 3, "fret": 7, "duration": "quarter", "label": "4", "role": "scale" }
      ]},
      { "measure": 3, "notes": [
        { "string": 2, "fret": 5, "duration": "eighth", "label": "5(ref E)", "role": "chord_tone" },
        { "string": 3, "fret": 7, "duration": "half", "technique": "bend", "bendTarget": "full", "label": "4>5", "highlight": true, "role": "scale" },
        { "string": 3, "fret": 5, "duration": "eighth", "label": "b3", "highlight": true, "role": "target" },
        { "string": 4, "fret": 5, "duration": "eighth", "label": "b7", "role": "scale" },
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" }
      ]},
      { "measure": 4, "notes": [
        { "string": 4, "fret": 7, "duration": "eighth", "label": "R", "isRoot": true, "role": "root" },
        { "string": 3, "fret": 7, "duration": "eighth", "technique": "slide", "slideToFret": 5, "label": "4>b3", "highlight": true, "role": "target" },
        { "string": 3, "fret": 5, "duration": "half", "technique": "vibrato", "label": "b3", "target": true, "highlight": true, "role": "target" },
        { "string": 4, "fret": 7, "duration": "quarter", "technique": "vibrato", "label": "R", "isRoot": true, "role": "root" }
      ]}
    ]
  }
}
```

## ③ 今日の練習（50分ルーティン）

**0〜10分・ウォームアップ（BPM 80）**
軽く体を温めます。Aブルース第1ボックスを3度で上行・下行1回ずつ、昨日の3小節のフレーズを1回。それから上のカプストーン・リックをゆっくり最後まで1回通します。今日はウォームアップが短くても大丈夫です、メインは録音ですから。

**10〜20分・頭のトレーニング（カプストーン・リック＋コール/レスポンスの感覚をつかむ）**
カプストーン・リックを手に馴染ませながら、その構造を意識します。「1小節目は質問（開き）、3・4小節目は答え（閉じ）」という会話の構造を、口で「質問〜、答え！」と数えながら弾いてみましょう。特に2小節目の前の**休符（余白）**は、本当に空っぽにしてください——初心者はこの沈黙に耐えられず音を詰め込みがちですが、その余白こそが次のフレーズを生かすんです。

**20〜40分・実戦即興＆全体録音（Am7ワンコードバッキング／75〜80 BPM）**
今日のメインです。バッキングを流して、**最初から最後まで2〜3分を丸ごと録音**してください（スマホのボイスメモでもOK）。ルール：**コール＆レスポンスで対話するように。** 質問のフレーズは♭5や4度で開いたままにし、答えは必ず♭3・根音に着地＋ヴィブラートで閉じます。カプストーン・リックを種にしつつ、そのまま繰り返さず少しずつ変形させましょう。ミスしても止まらず続けてください——実戦は本来、止まらないものです。

**40〜50分・自己フィードバック（今日は必須）**
録音を最初から最後まで聴きながら、下のチェックリストで自分自身をコーチしましょう。必要なら再生速度を落として、ベンドやヴィブラートの瞬間を拡大して確認してください。

**【自己フィードバック・チェックリスト】**
1. フレーズの終わりはコードトーン（♭3／根音）に着地していたか、それともどこかでただ流れて終わったか？
2. ♭5は経過音としてサッと通り過ぎたか、それとも居座って不自然だったか？
3. ベンドは目標の音程に正確に届いていたか（全音＝5度、半音＝♭5）？
4. ヴィブラートは一定の周期できれいに歌っていたか、それとも怯えたように震えていたか？
5. 余白（休符）はあったか、それとも休まず音を出し続けていたか？
6. 全体が対話（コール／レスポンス）のように聞こえたか、それとも単なるスケールの羅列だったか？

**【1か月総まとめ——今月の卒業チェック】**
- ☐ Aマイナーペンタ第1ボックスを16分音符・3度シーケンスで自由に弾ける
- ☐ フレーズを♭3（コードトーン）に意図的に着地させられる
- ☐ ♭5ブルーノートを経過音として溶け込ませ、ブルースの色を出せる
- ☐ 正確な音程のベンド（半音／全音、耳でのレファレンス照合）ができる
- ☐ 一定周期の手首ヴィブラートで着地音を歌わせられる
- ☐ 録音→自己フィードバックのループを実行できる

**今日の完了ライン（＝1か月の卒業基準）：** Am7バッキングの上で2分以上のジャムを丸ごと録音し、チェックリスト6項目で自己フィードバックを完了させること。6項目中**4項目以上「OK」なら合格**——埋まらなかった項目は、来月W5に進みながら自然と補強されていきます。

## ④ ヒント・よくある間違い

- **録音を聴かずに済ませてしまう。** 今日いちばんの間違いです。録音は聴くためにするものです。自分の演奏を初めて聴くと恥ずかしくなるのは正常なことで、その恥ずかしさに耐えることこそが上達への通行料です。必ず最後まで聴いてください。
- **余白恐怖症。** 沈黙が怖くて音で埋め尽くしてしまうと、答えが生きてきません。質問のあとは半小節でも休みましょう。その沈黙が次のフレーズに重みを与えてくれます（これはM3 W11で本格的に扱います）。
- **ミスで止まってしまう。** ジャム中に間違えたからといって止まるほうが、実はもっと大きなミスです。実戦は止まりません。間違った音が出ても、半音上やコードトーンへ滑らせて収拾すれば、むしろ意図したように聞こえます。それこそが即興の本当の実力です。
- **完璧主義で今日を台無しにしてしまう。** 1か月目で華やかなソロが弾けなくて当然です。今日の目標は「上手に弾くこと」ではなく、「録音して自分にフィードバックする習慣」を身につけることです。チェックリスト4個で十分な卒業です。残りはM2で引き続き取り組んでいきましょう。
