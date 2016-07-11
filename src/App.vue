<template>
  <div id="app">
    <bar></bar>
    <div class="container">
      <hint message="Search for a show" :show="showHint"></hint>
      <results></results>
    </div>
  </div>
</template>

<script>
import store from './store';
import Bar from './components/Bar.vue';
import Results from './components/Results.vue';
import Search from './components/Search.vue';
import Hint from './components/Hint.vue';

export default {
  components: {
    Bar,
    Search,
    Results,
    Hint
  },
  data() {
    return {
      state: store.state,
      showHint: false
    };
  }
};
</script>

<style lang="sass">
  @import 'variables';
  @import 'global';
  @import 'button';
</style>
