<template>
  <div id="app">
    <bar></bar>

    <div class="container">
      <router-view
        transition="fade"
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
