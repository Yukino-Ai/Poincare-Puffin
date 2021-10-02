<script>
  import { deck, clicks } from "./deck.js";

  export let kana;
  export let romanji;
  export let clickId = 0;
  // export let id = -1;

  /**
   * Kana selection
   * @type {boolean}
   */
  let isSelected = false;

  function select() {
    console.log(`Kana: ${kana}\nRomanji: ${romanji}`);
    isSelected = !isSelected;
    if (isSelected) {
      deck.add({ kana: kana, romanji: romanji });
      $clicks += 1;
      clickId = $clicks;
      console.log($clicks);
    } else {
      deck.remove({ kana: kana, romanji: romanji });
    }
  }
</script>

<div class={isSelected ? "isSelected" : "notSelected"} on:click={select}>
  <div>{kana}</div>
  <!-- <div>{romanji}</div> -->
</div>

<style>
  .notSelected {
    /* https://en.wikipedia.org/wiki/Traditional_colors_of_Japan */
    /* 老竹色 */
    border: 3px solid #5e644f;
    /* 藍墨茶 */
    background-color: #393432;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    padding: 5px;
    border-radius: 7px;
    cursor: pointer;
    user-select: none;
  }

  .isSelected {
    /* https://en.wikipedia.org/wiki/Traditional_colors_of_Japan */
    /* 青白橡 */
    border: 3px solid #bba46d;
    /* 黄丹  */
    background-color: #ff4e20;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    padding: 5px;
    border-radius: 7px;
    cursor: pointer;
    user-select: none;
  }
</style>
