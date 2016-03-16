<template>
  <div class="result p1 animated" transition="bounce">
    <img class="result__img" :src="image" alt="" @load="ink" />
    <h3 class="result__title">{{ title }} <small>{{ type }}, {{ year }}</small></h3>
  </div>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';

  .result {
    position: relative;
    overflow: hidden;
  }

  .result__title {
    position: relative;
    z-index: 1;
  }

  .result__img {
    height: auto;
    filter: opacity(0.4);
    left: 0;
    max-width: 100%;
    position: absolute;
    top: -50%;
    z-index:0;
  }
</style>

<script>
  export default {
    props: ['type', 'year', 'title', 'image'],

    methods: {
      ink: function () {
      },
      foo: function () {
        console.log(typeof this.image)
      }
    }
  }
</script>
