<template>
  <div id="app">
    <bar></bar>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Bar from './components/Bar.vue';
import router from './components/Bar.vue';

export default {
  router: router,
  components: {
    Bar
  }
};
</script>

<style lang="sass">
  @import 'variables';
  @import 'base';
  @import 'button';
</style>
