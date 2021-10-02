<script>
  import KanaGroup from "./KanaGroup.svelte";
  // import simpleHiraganaList as * from "./Lists/simpleHiraganaList.js";
  // 🍂Monographs🍃
  // 🌿No diacritics🌿
  const vowel = [
    { kana: "あ", romanji: "a" },
    { kana: "い", romanji: "i" },
    { kana: "う", romanji: "u" },
    { kana: "え", romanji: "e" },
    { kana: "お", romanji: "o" },
  ];

  const k = [
    { kana: "か", romanji: "ka" },
    { kana: "き", romanji: "ki" },
    { kana: "く", romanji: "ku" },
    { kana: "け", romanji: "ke" },
    { kana: "こ", romanji: "ko" },
  ];

  const s = [
    { kana: "さ", romanji: "sa" },
    { kana: "し", romanji: "shi" },
    { kana: "す", romanji: "su" },
    { kana: "せ", romanji: "se" },
    { kana: "そ", romanji: "so" },
  ];

  const t = [
    { kana: "た", romanji: "ta" },
    { kana: "ち", romanji: "chi" },
    { kana: "つ", romanji: "tsu" },
    { kana: "て", romanji: "te" },
    { kana: "と", romanji: "to" },
  ];

  const n = [
    { kana: "な", romanji: "na" },
    { kana: "に", romanji: "ni" },
    { kana: "ぬ", romanji: "nu" },
    { kana: "ね", romanji: "ne" },
    { kana: "の", romanji: "no" },
  ];

  const h = [
    { kana: "は", romanji: "ha" },
    { kana: "ひ", romanji: "hi" },
    { kana: "ふ", romanji: "fu" },
    { kana: "へ", romanji: "he" },
    { kana: "ほ", romanji: "ho" },
  ];

  const m = [
    { kana: "ま", romanji: "ma" },
    { kana: "み", romanji: "mi" },
    { kana: "む", romanji: "mu" },
    { kana: "め", romanji: "me" },
    { kana: "も", romanji: "mo" },
  ];

  const ya = [
    { kana: "や", romanji: "ya" },
    { kana: "ゆ", romanji: "yu" },
    { kana: "よ", romanji: "yo" },
  ];

  const r = [
    { kana: "ら", romanji: "ra" },
    { kana: "り", romanji: "ri" },
    { kana: "る", romanji: "ru" },
    { kana: "れ", romanji: "re" },
    { kana: "ろ", romanji: "ro" },
  ];

  const w = [
    { kana: "わ", romanji: "wa" },
    { kana: "を", romanji: "o" },
  ];

  const nn = [{ kana: "ん", romanji: "n" }];

  // 🌿With diacritics🌿
  const g = [
    { kana: "が", romanji: "ga" },
    { kana: "ぎ", romanji: "gi" },
    { kana: "ぐ", romanji: "gu" },
    { kana: "げ", romanji: "ge" },
    { kana: "ご", romanji: "go" },
  ];

  const z = [
    { kana: "ざ", romanji: "za" },
    { kana: "じ", romanji: "ji" },
    { kana: "ず", romanji: "zu" },
    { kana: "ぜ", romanji: "ze" },
    { kana: "ぞ", romanji: "zo" },
  ];

  const d = [
    { kana: "だ", romanji: "da" },
    { kana: "ぢ", romanji: "ji" },
    { kana: "づ", romanji: "zu" },
    { kana: "で", romanji: "de" },
    { kana: "ど", romanji: "do" },
  ];

  const b = [
    { kana: "ば", romanji: "ba" },
    { kana: "び", romanji: "bi" },
    { kana: "ぶ", romanji: "bu" },
    { kana: "べ", romanji: "be" },
    { kana: "ぼ", romanji: "bo" },
  ];

  const p = [
    { kana: "ぱ", romanji: "pa" },
    { kana: "ぴ", romanji: "pi" },
    { kana: "ぷ", romanji: "pu" },
    { kana: "ぺ", romanji: "pe" },
    { kana: "ぽ", romanji: "po" },
  ];
</script>

<!-- <div class="SingleHiragana">
  <div class="titleContainer">
    <div class="title">Single Hiragana</div>
  </div>

  <div class="chart">
    <KanaGroup group={nn} />
    <KanaGroup group={p} />
    <KanaGroup group={b} />
    <KanaGroup group={d} />
    <KanaGroup group={z} />
    <KanaGroup group={g} />
    <KanaGroup group={w} />
    <KanaGroup group={r} />
    <KanaGroup group={ya} />
    <KanaGroup group={m} />
    <KanaGroup group={h} />
    <KanaGroup group={n} />
    <KanaGroup group={t} />
    <KanaGroup group={s} />
    <KanaGroup group={k} />
    <KanaGroup group={vowel} />
  </div>
</div> -->

<div class="SingleHiragana">
  <KanaGroup group={nn} />
  <KanaGroup group={p} />
  <KanaGroup group={b} />
  <KanaGroup group={d} />
  <KanaGroup group={z} />
  <KanaGroup group={g} />
  <KanaGroup group={w} />
  <KanaGroup group={r} />
  <KanaGroup group={ya} />
  <KanaGroup group={m} />
  <KanaGroup group={h} />
  <KanaGroup group={n} />
  <KanaGroup group={t} />
  <KanaGroup group={s} />
  <KanaGroup group={k} />
  <KanaGroup group={vowel} />
</div>

<style>
  .SingleHiragana {
    /* https://en.wikipedia.org/wiki/Traditional_colors_of_Japan */
    /* Kokushoku */
    background-color: #171412;
    display: flex;
    padding: 15px;
    margin: 3px;
    border-radius: 10px;
  }
</style>
