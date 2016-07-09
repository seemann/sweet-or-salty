<template>
  <div class="results">
    <result
      v-for="result in state.results"
      :result="result">
    </result>
  </div>
</template>

<script>
import store from './../store';
import Result from './Result.vue';

export default {
  components: {
    Result
  },
  data() {
    return {
      state: store.state
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '../variables';

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
</style>
