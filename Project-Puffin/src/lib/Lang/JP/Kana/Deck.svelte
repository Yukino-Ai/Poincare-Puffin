<script>
  import { deck } from "./deck.js";
</script>

<div id="Deck">
  Deck
  <div class="test2">
    <!-- {#each $deck as element, index (element.kana.codePointAt())} -->
    {#each $deck as element, index}
      <!-- {#each $deck as element (element.clickId)} -->
      <div class="test">
        <div class="test3">
          <div>{element.kana}</div>
          <div>
            {element.kana.codePointAt()}
            <!-- {index} -->
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  #Deck {
    /* https://en.wikipedia.org/wiki/Traditional_colors_of_Japan */
    /* Kokushoku */
    background-color: #171412;
    border-radius: 10px;
    width: 55vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    margin-bottom: 20px;
  }

  .test {
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

  .test2 {
    display: flex;
  }

  .test3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
