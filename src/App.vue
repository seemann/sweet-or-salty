<template>
  <div id="app">
    <bar></bar>

    <div class="container">
      <router-view
        class="view"
        keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
import Bar from './components/Bar.vue';
import Hint from './components/Hint.vue';

export default {
  components: {
    Bar,
    Hint
  },
  data() {
    return {
      showHint: false
    };
  }
};
</script>

<style lang="sass">
  @import 'variables';
  @import 'base';
  @import 'button';
</style>
