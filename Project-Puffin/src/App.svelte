<script>
  import Counter from "./lib/Counter.svelte";
  import Hiragana from "./lib/Lang/JP/Kana/Hiragana.svelte";
</script>

<body>
  <main>
    <div>Hi</div>
    <Counter />
    <Counter />
    <Counter />
    <Hiragana />
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
</style>
