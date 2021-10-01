<script>
  import { readable } from "svelte/store";

  export let kana;
  export let romanji;

  const card = readable([kana, romanji]);

  function handleClick() {
    console.log(`Kana: ${kana}\nRomanji: ${romanji}`);
  }
</script>

<div class="Kana" on:click={handleClick}>
  <div>{kana}</div>
  <!-- <div>{romanji}</div> -->
</div>

<style>
  .Kana {
    /* https://en.wikipedia.org/wiki/Traditional_colors_of_Japan */
    /* Oitake-iro */
    border: 3px solid #5e644f;
    /* Aisumicha */
    background-color: #393432;
    /* color: snow; */
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    padding: 5px;
    border-radius: 7px;
    cursor: pointer;
  }
</style>
