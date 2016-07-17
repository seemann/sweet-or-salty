<template>
  <div id="app">
    <bar></bar>

    <div class="container">
      <router-view
        keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
import Bar from './components/Bar.vue';

export default {
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
