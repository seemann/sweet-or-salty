<template>
  <ul class="results list-reset">

    <li v-for="result in results" v-if="result.type === 'show'">
      <result
        :type="result.type"
        :title="result.show.title"
        :image="result.show.images.poster.thumb">
      </result>
    </li>

    <li v-for="result in results" v-if="result.type === 'movie'">
      <result
        :type="result.type"
        :title="result.movie.title"
        :image="result.movie.images.poster.thumb">
      </result>
    </li>

  </ul>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';
</style>

<script>
  import store from './../../store'
  import result from './../result/result'

  export default {
    computed: {
      results () {
        return store.state.results
      }
    },
    components: {
      result
    }
  }
</script>
