<template>
  <div class="resultsView" v-if="state.results.length">
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
