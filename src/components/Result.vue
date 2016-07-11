<template>
  <div class="result" transition="fade">
    <div class="result__item">
      <div class="result__preview">
        <img class="result__media" :src="result.show.images.fanart.medium" alt="" />
        <div class="result__overlay">
          <div class="result__media">
            <div class="result__media__object">
              <img class="result__poster" :src="result.show.images.poster.thumb" />
            </div>
            <div class="result__media__body">
              <h2 class="result__title">{{ result.show.title }}</h2>
              <div class="result__year">{{ result.show.year }}</div>
              <button class="button button--primary" type="button" @click="triggerSeason()">Seasons</button>
            </div>
          </div>
        </div>
      </div>
      <seasons :show-id="result.show.ids.trakt" :show="showSeasons"></seasons>
    </div>
  </div>
</template>

<script>
import Seasons from './Seasons.vue';

export default {
  components: {
    Seasons
  },
  data() {
    return {
      showSeasons: false
    };
  },
  props: {
    result: Object
  },
  methods: {
    triggerSeason() {
      if (this.showSeasons === false) {
        this.showSeasons = true;
      } else {
        this.showSeasons = false;
      }
    }
  }
};
</script>

<style lang="sass" scoped>
  @import './../variables';
  @import './../animations';

  .result {
    border: 1px solid rgba($color-initial, 0.4);
    border-radius: $border-radius-initial;
    color: $color-initial;
    font-size: 1rem;
    margin: 2em 0;
  }

  .result__preview {
    background-color: $color-quaternary;
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

  .result__media {
    display: block;
    height: auto;
    max-width: 100%;
  }

  .result__overlay {
    bottom: 0;
    padding: 2em; /* 32px */
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  .result__media {
    display: flex;
  }

  .result__media__object {
    margin-right: 1em; /* 16px */
  }

  .result__title {
    color: currentColor;
    font-family: $font-inital;
    font-weight: 700;
  }

  .result__year {
    margin-bottom: 1em;
  }

  .result__poster {
    display: block;
    height: auto;
    max-width: 100px;
  }
</style>
