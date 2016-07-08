<template>
  <div class="results">
    <ul class="results__list">
      <li class="results__list__item" v-for="result in state.results">
        <div class="results__item">
          <img class="results__media" :src="result.show.images.fanart.medium" alt="" />
          <div class="results__overlay">
            <div class="results__media">
              <div class="results__media__object">
                <img class="results__poster" :src="result.show.images.poster.thumb" />
              </div>
              <div class="results__media__body">
                <h2 class="results__title">{{ result.show.title }}</h2>
                <div class="results__year">{{ result.show.year }}</div>
                <button class="button button--primary" type="button" @click="getSeasons(result.show.ids.trakt)">Seasons</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <ul>
        <li v-for="season in state.seasons"{{$index}}</li>
      </ul>
    </ul>
  </div>
</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      state: store.state
    };
  },
  methods: {
    getSeasons: id => {
      store.getSeasons(id);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../global';

  .results {
    font-size: 1rem;
  }

  .results__list {
    list-style: none;
    padding-left: 0;
  }

  .results__list__item {
    padding: 1em 0; /* 16px */
  }

  .results__item {
    background-color: $color-quaternary;
    border: 1px solid rgba($color-initial, 0.4);
    border-radius: $border-radius-inital;
    color: $color-initial;
    min-height: 220px;
    position: relative;

    /* Gradient */
    &::after {
      background: linear-gradient(to bottom, rgba(255, 255, 255,0) 0%, rgba($color-quaternary, 1) 70%);
      bottom: 0;
      content: '';
      height: 70%;
      display: block;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: 1;
    }
  }

  .results__media {
    display: block;
    height: auto;
    max-width: 100%;
  }

  .results__overlay {
    bottom: 0;
    padding: 2em; /* 32px */
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  .results__media {
    display: flex;
  }

  .results__media__object {
    margin-right: 1em; /* 16px */
  }

  .results__title {
    color: currentColor;
    font-family: $font-inital;
    font-weight: 700;
  }

  .results__poster {
    display: block;
    height: auto;
    max-width: 100px;
  }
</style>
