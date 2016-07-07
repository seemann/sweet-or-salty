<template>
  <div id="app">
    <bar></bar>
    <search></search>
    <results></results>
  </div>
</template>

<script>
import Bar from './components/Bar.vue';
import Search from './components/Search.vue';
import Results from './components/Results.vue';

export default {
  components: {
    Bar,
    Search,
    Results
  }
}
</script>

<style lang="sass">
  @import 'global';
</style>
