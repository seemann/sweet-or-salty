<template>
  <div class="results">
    <ul>
      <li v-for="result in sharedState.results">
        <h2>{{ result.title }}</h2>
        <p>{{ result.overview }}</p>
      </li>
    </ul>
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
  }
}
</script>

<style lang="scss" scoped>
  @import '../global';

  .results {
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding-left: 0;

    > li {
      border: 4px solid currentColor;
      border-radius: $border-radius-init;
      color: $color-tertiary;
      padding: 1em;
    }

    li + li {
      margin-top: 1em;
    }
  }

  h2 {
    color: currentColor;
    font-family: $font-inital;
    font-weight: 700;
  }
</style>
