---
title: "A warm dominant — the G13 voicing"
dayKey: "m1.w1.d2"
estMinutes: 50
i18nKey: "lesson.m1.w1.d2"
---

# Day 2 — G13, the vamp's second color

## ① Theory

Yesterday you laid **Dm9** on the hand, so today you meet its partner chord, **G13** — the second seat of the vamp. <mark>G13 holds a little tension, yet it's never sharp; it's a warm dominant.</mark> An ordinary dominant 7 has a pull that wants to go home, but adding a **13th** on top softly loosens that tension. It feels like laying a **warm blanket** over a taut thread. Today too, leave the root **to the bass** and let your hand just paint the color. Even if the theory feels hard, that's okay — it's the same feel as yesterday, only the seat moves.

Let's open up **G13**. Its notes are just four — **root (G), 3, b7, 13**. The 6th string 3rd fret is the root **G**, the 4th string 3rd fret is **b7 (F)**, the 3rd string 4th fret is **3 (B)**, and the 2nd string 5th fret is **13 (E)**. <mark>Here the 13th (E) wraps the dominant's tension in warmth.</mark> Compared to yesterday's Dm9, the root string dropped from the 5th to the 6th.

<mark>Here's the fun part: the 2nd string 5th fret (E) is exactly the same as yesterday.</mark> Yesterday that E was the **9th**; today only its role changes, to the **13th**. So your **pinky can stay right where it was**. Now let's lay the **G13** grip on the hand.

```json
{
  "id": "m1.w1.d2.g13_grip",
  "type": "fretboard_diagram",
  "meta": { "title": "G13 grip — 3x345x", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 4, "fret": 3, "finger": 2, "label": "b7", "role": "chord_tone" },
    { "string": 3, "fret": 4, "finger": 3, "label": "3", "role": "chord_tone" },
    { "string": 2, "fret": 5, "finger": 4, "label": "13", "role": "color" },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ The **6th string 3rd fret** is the root G. Press the 4th string 3rd fret (b7), 3rd string 4th fret (3), and 2nd string 5th fret (13) together. Mute the 5th and 1st strings.

## ② Visuals

Picking G13 apart one note at a time makes the color clearer too. Ring it one note at a time in this order: **root → b7 → 3 → 13**. <mark>If the 3 (B) and b7 (F) are the dominant's core, the 13 (E) is the blanket laid over it.</mark>

```json
{
  "id": "m1.w1.d2.g13_arp",
  "type": "tab",
  "meta": { "title": "G13 note-by-note", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 60, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "quarter", "label": "R", "isRoot": true, "role": "root" },
      { "string": 4, "fret": 3, "duration": "quarter", "label": "b7", "role": "chord_tone" },
      { "string": 3, "fret": 4, "duration": "quarter", "label": "3", "role": "chord_tone" },
      { "string": 2, "fret": 5, "duration": "quarter", "label": "13", "role": "color" }
    ]}
  ]}
}
```
▶ **BPM 60.** Ring the four notes low to high, one by one, getting the feel of skipping over the 5th string.

Now let's ring all four at once. Since G13 leaves the 5th string open of duty, your right hand has to skip lightly **between the 6th and 4th strings**. <mark>Trace your right-hand path first so you never brush the 5th string.</mark>

## ③ Today's practice (50-minute routine)

**0–10 min · Warm-up**
BPM 60. Loosen your hand by pressing and releasing the **G13** grip. Check one by one that <mark>only the four strings that should ring come out cleanly</mark>.

**10–20 min · Brain training (grip shape, slow)**
As you form the grip, say the order your fingers land out loud: **root (6th string) → b7 (4th string) → 3 (3rd string) → 13 (2nd string)**.

**20–40 min · Real comping (BPM 70)**
Ring **G13** once per bar, gently. Watch just one thing: <mark>does the 5th string leak</mark>.

```json
{
  "id": "m1.w1.d2.g13_strum",
  "type": "tab",
  "meta": { "title": "G13 whole-note comping", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor", "tempoBpm": 70, "notation": "staff+tab" },
  "tab": { "timeSignature": "4/4", "measures": [
    { "measure": 1, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "arpeggio", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]},
    { "measure": 2, "notes": [
      { "string": 6, "fret": 3, "duration": "whole", "label": "R", "isRoot": true, "role": "root", "stroke": "arpeggio", "chordSymbol": "G13", "chord": [ { "string": 4, "fret": 3, "role": "chord_tone", "label": "b7" }, { "string": 3, "fret": 4, "role": "chord_tone", "label": "3" }, { "string": 2, "fret": 5, "role": "color", "label": "13" } ] }
    ]}
  ]}
}
```
▶ **BPM 70.** Both bars are G13. Sweep low to high, skipping over the 5th string.

**40–50 min · Recording / self-feedback (recommended)**
Record 30 seconds, then check. <mark>Do the four strings ring warm with no 5th-string noise</mark>.

**Done when:** You can ring the G13 voicing cleanly on all four strings with no 5th-string noise.

## ④ Tips / Common mistakes

Here are just the mistakes that show up most on the **G13** grip.

```json
{
  "id": "m1.w1.d2.g13_mute",
  "type": "fretboard_diagram",
  "meta": { "title": "Mute strings 5 and 1", "stringCount": 6, "tuning": ["E","A","D","G","B","E"], "key": "D minor" },
  "fretboard": { "startFret": 3, "fretSpan": 4, "dots": [
    { "string": 6, "fret": 3, "finger": 1, "label": "R", "isRoot": true, "role": "root" },
    { "string": 5, "fret": 0, "muted": true },
    { "string": 1, "fret": 0, "muted": true }
  ]}
}
```
▶ **Mute the 5th string lightly with the tip of your index.** Lay the index that presses the 6th string down a touch to cover the 5th.

- **The 5th string is ringing.** Lay the tip of the index on the 6th string down slightly to block the 5th.
- **The 3rd-string 3rd won't ring.** Stand your ring finger up and press the 4th fret precisely so the bright core stays alive.
- **The 6th-string root is blurry.** Press the 3rd fret with the print of your fingertip, not the base of the index.
- **The chord sounds stuffy.** Ring clearly all the way up to the 13th (2nd string) for the warm color.
