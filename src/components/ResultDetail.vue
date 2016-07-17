<template>
  <div class="resultDetail">
    <div class="resultDetail__item">
      <div class="resultDetail__preview">
        <img class="resultDetail__object" :src="result.images.fanart.medium" alt="" />
        <div class="resultDetail__overlay">
          <div class="resultDetail__media">
            <div class="resultDetail__media__object" v-if="result.images.poster.thumb">
              <img class="resultDetail__poster" :src="result.images.poster.thumb" />
            </div>
            <div class="resultDetail__media__body">
              <h2 class="resultDetail__title">{{ result.title }}</h2>
              <div class="resultDetail__year">{{ result.year }}</div>
              <button class="button button--primary" type="button" @click="triggerSeason()">Seasons</button>
            </div>
          </div>
        </div>
      </div>
      <seasons :result-id="result.ids.trakt" :show="showSeasons"></seasons>
    </div>
  </div>
</template>

<script>
import store from './../store';
import Seasons from './Seasons.vue';

export default {
  components: {
    Seasons
  },
  data() {
    return {
      state: store.state,
      showSeasons: false
    };
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
  @import './../transitions';

  .resultDetail {
    border: 1px solid rgba($color-initial, 0.4);
    border-radius: $border-radius-initial;
    color: $color-initial;
    font-size: 1rem;
    margin: 2em 0; /* 32px */
  }

  .resultDetail__preview {
    min-height: 220px;
    position: relative;

    /* Gradient */
    &::after {
      background: linear-gradient(to bottom, rgba(255, 255, 255,0) 0%, rgba($color-bg, 1) 70%);
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

  .resultDetail__object {
    display: block;
    height: auto;
    max-width: 100%;
  }

  .resultDetail__overlay {
    bottom: 0;
    padding: 2em; /* 32px */
    position: absolute;
    width: 100%;
    z-index: 2;
  }

  .resultDetail__media {
    display: flex;
  }

  .resultDetail__media__object {
    margin-right: 1em; /* 16px */
  }

  .resultDetail__title {
    color: currentColor;
    font-family: $font-initial;
    font-weight: 700;
  }

  .resultDetail__year {
    margin-bottom: 1em; /* 16px */
  }

  .resultDetail__poster {
    display: block;
    height: auto;
    max-width: 100px;
  }
</style>
