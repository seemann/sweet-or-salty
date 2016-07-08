<template>
  <div class="search">
    <input class="search__field" type="search" name="search" @keyup.enter="search">
  </div>
</template>

<script>
import store from '../store';

export default {
  data() {
    return {
      state: store.state
    };
  },
  methods: {
    search: event => {
      store.search(event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../global';

  .search {
    font-size: 1rem;
  }

  .search__field {
    background-color: rgba($color-secondary, 0.5);
    border: 1px solid rgba($color-initial, 0.8);
    border-radius: $border-radius-inital;
    color: $color-initial;
    font-size: 1.5em;
    font-weight: 700;
    padding: 0.5em;
    width: 100%;
  }
</style>
