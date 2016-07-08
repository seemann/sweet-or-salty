<template>
  <div class="search">
    <input type="search" name="search" :value="sharedState.query" @keyup.enter="search">
  </div>
</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {
    search: function(event) {
      this.sharedState.query = event.target.value;
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

  input[type="search"] {
    border: 4px solid currentColor;
    border-radius: $border-radius-init;
    color: $color-quaternary;
    font-size: 1.5em;
    font-weight: 700;
    padding: 0.5em;
    width: 100%;
  }
</style>
