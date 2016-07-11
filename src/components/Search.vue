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
  @import '../variables';

  .search {
    font-size: 1rem;
  }

  .search__field {
    background-color: lighten($color-secondary, 5%);
    border: 2px solid transparent;
    border-radius: $border-radius-initial;
    color: $color-initial;
    font-size: 1.5em;
    padding: 0.5em;
    width: 100%;

    &:focus {
      border-color: $color-initial;
      outline: 0;
    }
  }
</style>
