<template>
  <hint message="Nothing found" :show="!state.results.length"></hint>
  <div class="results" v-if="state.results.length">
    <result
      v-for="result in state.results"
      :result="result.show">
    </result>
  </div>
</template>

<script>
import store from './../store';
import Result from './Result.vue';
import Hint from './Hint.vue';

export default {
  components: {
    Result,
    Hint
  },
  data() {
    return {
      state: store.state
    };
  },
  route: {
    data({to}) {
      store.search(to.params.query);
    }
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
