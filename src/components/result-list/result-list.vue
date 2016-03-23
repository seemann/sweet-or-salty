<template>
  <ul class="result__list list-reset">

    <li class="results__item mb2" v-for="result in results" transition="slide" stagger="60">
      <result-item :result="result"></result-item>
    </li>

  </ul>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';
</style>

<script>
  import ResultItem from './../result-item/result-item'

  export default {
    props: ['results'],
    components: {
      ResultItem
    }
  }
</script>
