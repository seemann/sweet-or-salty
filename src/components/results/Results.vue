<template>
  <ul class="results list-reset">

    <li class="mb2" v-for="result in results" transition="slide" stagger="60">
      <result :result="result"></result>
    </li>

  </ul>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';

  .results {
    overflow: hidden;
  }
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
