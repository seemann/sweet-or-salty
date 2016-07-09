<template>
  <div id="app">
    <bar></bar>
    <search></search>
    <results></results>
  </div>
</template>

<script>
import Bar from './components/Bar.vue';
import Results from './components/Results.vue';
import Search from './components/Search.vue';

export default {
  components: {
    Bar,
    Results,
    Search
  }
}
</script>

<style lang="sass">
  @import 'variables';
  @import 'global';
  @import 'button';
</style>
