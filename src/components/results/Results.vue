<template>
  <ul class="results list-reset">
    <li v-for="result in results" v-if="result.type === 'show'">
      <img v-bind:src="result.show.images.poster.thumb" alt="" />
      <h3>{{ result.show.title }} <small>{{ result.type }}</small></h3>
    </li>

    <li v-for="result in results" v-if="result.type === 'movie'">
      <img v-bind:src="result.movie.images.poster.thumb" alt="" />
      <h3>{{ result.movie.title }} <small>{{ result.type }}</small></h3>
    </li>
  </ul>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';
  @import '../functions/functions';
  @import '../margin/margin';
  @import '../lists/lists';
</style>

<script>
  import store from './../../store'

  export default {
    computed: {
      results () {
        return store.state.results
      }
    }
  }
</script>
