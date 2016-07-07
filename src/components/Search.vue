<template>
  <div class="search">
    <input class="search__textfield" type="search" name="search" :value="sharedState.query" @keyup.enter="search">
  </div>
</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      privateState: {},
      sharedState: store.state
    }
  },
  methods: {
    search: function(event) {
      store.search();
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../global';

  .search {
    font-size: 1rem;
  }

  .search__textfield {
    border: 4px solid currentColor;
    border-radius: $border-radius-init;
    color: $color-quaternary;
    font-size: 1.5em;
    font-weight: 700;
    padding: 0.5em;
    width: 100%;
  }
</style>
