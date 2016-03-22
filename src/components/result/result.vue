<template>
  <div v-if="result.show" class="result" >
    <div class="media">
      <div
        v-if="result.show.images.poster.thumb"
        class="media__figure mr2">
        <img
          :src="result.show.images.poster.thumb"
          alt="result.show.title"
          height="90px"
          width="60px"
          class="result__img" />
      </div>
      <div class="media__body">
        <h3 class="mb0">{{ result.show.title }}</h3>
        A {{ result.type }} from {{ result.show.year }}
      </div>
    </div>
  </div>
  <div v-if="result.movie" class="result">
    <div class="media">
      <div
        v-if="result.movie.images.poster.thumb"
        class="media__figure mr2">
        <img
          :src="result.movie.images.poster.thumb"
          alt="result.movie.title"
          height="90px"
          width="60px"
          class="result__img" />
      </div>
      <div class="media__body">
        <h3 class="mb0">{{ result.movie.title }}</h3>
        A {{ result.type }} from {{ result.movie.year }}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';

  .result {
    transition: all linear 0.2s;

    &:hover {
      background-color: yellow;

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
</style>

<script>
  export default {
    props: ['result']
  }
</script>
