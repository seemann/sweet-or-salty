<template>
  <header class="bar">
    <div class="container">
      <div class="bar__inner">
        <div class="bar__left">
          <h1 class="bar__title">Sweet Or Salty</h1>
        </div>
        <div class="bar__middle">
          <search></search>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Search from './Search.vue';
export default {
  components: {
    Search
  }
};
</script>

<style lang="sass" scoped>
  @import '../variables';

  .bar {
    background-color: $color-tertiary;
    color: $color-initial;
    font-size: 1rem;
    padding: 1em; /* 16px */
    text-align: center;
  }

  .bar__inner {
    align-items: baseline;
    display: flex;
  }

  .bar__left {
    display: flex;
    flex-basis: 0%;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .bar__middle {
    flex-basis: 0%;
    flex-grow: 2;
    flex-shrink: 1;
  }

  .bar__title {
    font-size: 2em; /* 32px */
    line-height: 1.1;
    margin: 0;
  }
</style>
