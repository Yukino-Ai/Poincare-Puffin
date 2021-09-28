<script>
  import KanaGroup from "./KanaGroup.svelte";
  // 🍂Monographs🍃
  // 🌿No diacritics🌿
  let vowel = [
    { kana: "あ", romanji: "a" },
    { kana: "い", romanji: "i" },
    { kana: "う", romanji: "u" },
    { kana: "え", romanji: "e" },
    { kana: "お", romanji: "o" },
  ];

  let k = [
    { kana: "か", romanji: "ka" },
    { kana: "き", romanji: "ki" },
    { kana: "く", romanji: "ku" },
    { kana: "け", romanji: "ke" },
    { kana: "こ", romanji: "ko" },
  ];

  let s = [
    { kana: "さ", romanji: "sa" },
    { kana: "し", romanji: "shi" },
    { kana: "す", romanji: "su" },
    { kana: "せ", romanji: "se" },
    { kana: "そ", romanji: "so" },
  ];

  let t = [
    { kana: "た", romanji: "ta" },
    { kana: "ち", romanji: "chi" },
    { kana: "つ", romanji: "tsu" },
    { kana: "て", romanji: "te" },
    { kana: "と", romanji: "to" },
  ];

  let n = [
    { kana: "な", romanji: "na" },
    { kana: "に", romanji: "ni" },
    { kana: "ぬ", romanji: "nu" },
    { kana: "ね", romanji: "ne" },
    { kana: "の", romanji: "no" },
  ];

  let h = [
    { kana: "は", romanji: "ha" },
    { kana: "ひ", romanji: "hi" },
    { kana: "ふ", romanji: "fu" },
    { kana: "へ", romanji: "he" },
    { kana: "ほ", romanji: "ho" },
  ];

  let m = [
    { kana: "ま", romanji: "ma" },
    { kana: "み", romanji: "mi" },
    { kana: "む", romanji: "mu" },
    { kana: "め", romanji: "me" },
    { kana: "も", romanji: "mo" },
  ];

  let ya = [
    { kana: "や", romanji: "ya" },
    { kana: "ゆ", romanji: "yu" },
    { kana: "よ", romanji: "yo" },
  ];

  let r = [
    { kana: "ら", romanji: "ra" },
    { kana: "り", romanji: "ri" },
    { kana: "る", romanji: "ru" },
    { kana: "れ", romanji: "re" },
    { kana: "ろ", romanji: "ro" },
  ];

  let w = [
    { kana: "わ", romanji: "wa" },
    { kana: "を", romanji: "o" },
  ];

  let nn = [{ kana: "ん", romanji: "n" }];

  // 🌿With diacritics🌿
  let g = [
    { kana: "が", romanji: "ga" },
    { kana: "ぎ", romanji: "gi" },
    { kana: "ぐ", romanji: "gu" },
    { kana: "げ", romanji: "ge" },
    { kana: "ご", romanji: "go" },
  ];

  let z = [
    { kana: "ざ", romanji: "za" },
    { kana: "じ", romanji: "ji" },
    { kana: "ず", romanji: "zu" },
    { kana: "ぜ", romanji: "ze" },
    { kana: "ぞ", romanji: "zo" },
  ];

  let d = [
    { kana: "だ", romanji: "da" },
    { kana: "ぢ", romanji: "ji" },
    { kana: "づ", romanji: "zu" },
    { kana: "で", romanji: "de" },
    { kana: "ど", romanji: "do" },
  ];

  let b = [
    { kana: "ば", romanji: "ba" },
    { kana: "び", romanji: "bi" },
    { kana: "ぶ", romanji: "bu" },
    { kana: "べ", romanji: "be" },
    { kana: "ぼ", romanji: "bo" },
  ];

  let p = [
    { kana: "ぱ", romanji: "pa" },
    { kana: "ぴ", romanji: "pi" },
    { kana: "ぷ", romanji: "pu" },
    { kana: "ぺ", romanji: "pe" },
    { kana: "ぽ", romanji: "po" },
  ];
</script>

<div class="Hiragana">
  <KanaGroup group={vowel} />
  <KanaGroup group={k} />
  <KanaGroup group={s} />
  <KanaGroup group={t} />
  <KanaGroup group={n} />
  <KanaGroup group={h} />
  <KanaGroup group={m} />
  <KanaGroup group={ya} />
  <KanaGroup group={r} />
  <KanaGroup group={w} />
  <KanaGroup group={nn} />
  <KanaGroup group={g} />
  <KanaGroup group={z} />
  <KanaGroup group={d} />
  <KanaGroup group={b} />
  <KanaGroup group={p} />
</div>

<style>
  .Hiragana {
    /* https://en.wikipedia.org/wiki/Traditional_colors_of_Japan */
    /* Kokushoku */
    background-color: #171412;
    display: flex;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
  }
</style>
