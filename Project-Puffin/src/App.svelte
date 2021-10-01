<script>
  import Quiz from "./lib/Lang/JP/Kana/Quiz.svelte";
  import SingleHiragana from "./lib/Lang/JP/Kana/SingleHiragana.svelte";
</script>

<body>
  <main>
    <div class="select">
      <Quiz />
      <SingleHiragana />
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
</style>
