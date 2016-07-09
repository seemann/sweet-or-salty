<template>
  <header class="bar">
    <div class="container">
      <h1 class="bar__title">Sweet Or Salty</h1>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
  @import '../variables';

  .bar {
    font-size: 1rem;
    text-align: center;
  }

  h1 {
    color: $color-secondary;
    margin: 0;
  }
</style>
