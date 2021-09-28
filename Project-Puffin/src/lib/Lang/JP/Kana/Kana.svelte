<script>
  export let kana;
  export let romanji;
</script>

<div class="Kana">
  <div>{kana}</div>
  <div>{romanji}</div>
</div>

<style>
  .Kana {
    border: 1px solid snow;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    padding: 5px;
    border-radius: 7px;
  }
</style>
