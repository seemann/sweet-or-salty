<template>
  <div id="app" class="mx4">
    <h1>Sweet or Salty</h1>
    <search></search>
    <div class="clearfix mxn1">
      <div class="col col-4 px1">
        <results></results>
      </div>
      <div class="col col-8 px1">
        Something here
      </div>
    </div>
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
  import search from './components/search/search'
  import results from './components/results/results'

  export default {
    components: {
      search,
      results
    }
  }
</script>
