<template>
  <ul class="results" v-for="result in results">
    <li v-if="result.type === 'show'">
      <img v-bind:src="result.show.images.poster.thumb" alt="" />
      <h3>{{ result.show.title }}</h3>
      <span>{{ result.type }}</span>
      <p>{{ result.show.overview }}</p>
    </li>

    <li v-if="result.type === 'movie'">
      <img v-bind:src="result.movie.images.poster.thumb" alt="" />
      <h3>{{ result.movie.title }}</h3>
      <span>{{ result.type }}</span>
      <p>{{ result.movie.overview }}</p>
    </li>
  </ul>
</template>

<style scoped>
  .results {
    color: red;
    list-style: none;
    padding-left: 0;
  }
</style>

<script>
  import store from './../store'

  export default {
    computed: {
      results () {
        return store.state.results
      }
    }
  }
</script>
