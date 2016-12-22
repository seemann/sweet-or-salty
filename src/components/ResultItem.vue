<template>
  <router-link :to="{ name: 'resultDetail', params: { id: result.ids.trakt }}">
    <div class="resultItem__poster" v-if="result.images.poster.thumb">
      <img :src="result.images.poster.thumb" />
    </div>
    <div class="resultItem__body">
      <h2 class="resultItem__title">{{ result.title }}</h2>
      <div class="resultItem__year">{{ result.year }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    result: Object
  }
};
</script>

<style lang="sass" scoped>
  @import './../variables';
  @import './../transitions';

  .resultItem {
    border: 1px solid rgba($color-initial, 0.4);
    border-radius: $border-radius-initial;
    color: $color-initial;
    display: block;
    font-size: 1rem;
    margin: 2em 0; /* 32px */
  }

  .resultItem__body {
    padding: 1em;
  }

  .resultItem__title {
    color: currentColor;
    font-family: $font-initial;
    font-size: 1.5em;
    font-weight: 700;
  }

  .resultItem__year {
    margin-bottom: 1em; /* 16px */
  }

  .resultItem__object > img {
    display: block;
    height: auto;
    max-width: 100%;
  }
</style>
