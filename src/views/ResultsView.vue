<template>
  <div class="resultsView" v-if="state.results.length">
    <result-item
      v-for="result in state.results"
      :result="result.show">
    </result-item>
  </div>
</template>

<script>
import store from './../store';
import ResultItem from './../components/ResultItem.vue';

export default {
  components: {
    ResultItem
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
