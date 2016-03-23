<template>
  <div v-if="result.show" class="result__item" @click="detail">
    <div class="media">
      <div
        v-if="result.show.images.poster.thumb"
        class="media__figure">
        <img
          :src="result.show.images.poster.thumb"
          alt="result.show.title"
          height="90px"
          width="60px"
          class="result__img" />
      </div>
      <div class="media__body p1">
        <h3 class="result__title mb0">{{ result.show.title }}</h3>
        A {{ result.type }} from {{ result.show.year }}
      </div>
    </div>
  </div>
  <div v-if="result.movie" class="result__item" :value="result" @click="detail">
    <div class="media">
      <div
        v-if="result.movie.images.poster.thumb"
        class="media__figure">
        <img
          :src="result.movie.images.poster.thumb"
          alt="result.movie.title"
          height="90px"
          width="60px"
          class="result__img" />
      </div>
      <div class="media__body p1">
        <h3 class="result__title mb0">{{ result.movie.title }}</h3>
        A {{ result.type }} from {{ result.movie.year }}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';
  @import '../functions/functions';

  .result__item {
    transition: all linear 0.2s;

    &:hover {
      background-color: $color-primary;
      color: $color-initial;

      .result__img {
        background-color: none;
        border-width: 0;
        box-shadow: 0;
      }
    }
  }

  .result__img {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.5);
    display: block;
    height: auto;
    max-width: 100%;
    transition: all linear 5s;
  }

  .result__title {
    font-size: calcRem(20px);
  }
</style>

<script>
  import store from './../../store'

  export default {
    props: ['result'],
    methods: {
      detail: function (event, result) {
        console.log(result)
        store.actions.detail(event.target.value)
      }
    }
  }
</script>
