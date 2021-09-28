<script>
  import Kana from "./Kana.svelte";
  export let group;
</script>

<div class="KanaGroup">
  {#each group as element (element.kana)}
    <Kana kana={element.kana} romanji={element.romanji} />
  {/each}
</div>

<style>
  .KanaGroup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
