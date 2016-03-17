<template>
  <div class="result p1" v-if="result.show">
    <img class="result__img" :src="result.show.images.fanart.medium" alt="" />
    <h3 class="result__title">
      {{ result.show.title }}
      <small>{{ result.type }}, {{ result.show.year }}</small>
    </h3>
  </div>
  <div class="result p1" v-if="result.movie">
    <img class="result__img" :src="result.movie.images.fanart.medium" alt="" />
    <h3 class="result__title">
      {{ result.movie.title }}
      <small>{{ result.type }}, {{ result.movie.year }}</small>
    </h3>
  </div>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';

  .result {
    background-color: $color-bg;
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
  }

  .result__title {
    position: relative;
    z-index: 1;
  }

  .result__img {
    height: auto;
    left: 0;
    max-width: 100%;
    position: absolute;
    top: -50%;
    z-index:0;
  }
</style>

<script>
  export default {
    props: ['result']
  }
</script>
