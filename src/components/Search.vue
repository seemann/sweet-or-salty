<template>
  <div class="search">
    <input class="search__field" type="search" name="search" @keyup.enter="search">
  </div>
</template>

<script>
import store from './../store';

export default {
  data() {
    return {
      state: store.state
    };
  },
  methods: {
    search(event) {
      this.$route.router.push({
        name: 'results',
        params: {
          query: event.target.value
        }
      });
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
    background-color: lighten($color-primary, 5%);
    border: 1px solid transparent;
    border-radius: $border-radius-initial;
    color: $color-initial;
    font-size: 1.5em; /* 24px */
    padding: 0.5em; /* 12px */
    width: 100%;

    &:focus {
      border-color: rgba($color-initial, 0.4);
      outline: 0;
    }
  }
</style>
