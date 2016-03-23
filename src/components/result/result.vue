<template>
  <div class="clearfix mxn1">
    <div class="col col-5 px1">
      <result-list :results="results"></result-list>
    </div>
    <div class="col col-7 px1">
      <result-detail></result-detail>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';
</style>

<script>
  import store from './../../store'
  import ResultList from './../result-list/result-list'
  import ResultDetail from './../result-detail/result-detail'

  export default {
    computed: {
      results () {
        return store.state.results
      }
    },
    components: {
      ResultList,
      ResultDetail
    }
  }
</script>
