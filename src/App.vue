<template>
  <div class="mx4">
    <h1>Sweet or Salty</h1>
    <search></search>
    <result></result>
  </div>
</template>

<style lang="sass">
  @import '/components/normalize/normalize';
  @import '/components/variables/variables';
  @import '/components/functions/functions';
  @import '/components/transitions/transitions';
  @import '/components/layout/layout';
  @import '/components/margin/margin';
  @import '/components/padding/padding';
  @import '/components/base/base';
  @import '/components/forms/forms';
  @import '/components/typography/typography';
  @import '/components/grid/grid';
  @import '/components/lists/lists';
  @import '/components/media/media';
</style>

<script>
  import Search from './components/search/search'
  import Result from './components/result/result'

  export default {
    components: {
      Search,
      Result
    }
  }
</script>
