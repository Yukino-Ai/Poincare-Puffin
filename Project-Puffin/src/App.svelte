<script>
  import Hiragana from "./lib/Lang/JP/Kana/Hiragana.svelte";
</script>

<body>
  <main>
    <div class="select">
      <div class="quiz">Quiz</div>
      <Hiragana />
    </div>
  </main>
</body>

<style>
  :root {
    font-family: sans-serif;
    /* https://en.wikipedia.org/wiki/Traditional_colors_of_Japan */
    /* sumi-iro */
    background-color: #27221f;
    color: snow;
  }

  .select {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .quiz {
    /* https://en.wikipedia.org/wiki/Traditional_colors_of_Japan */
    /* Kokushoku */
    background-color: #171412;
    border-radius: 10px;
    width: 55vw;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
</style>
