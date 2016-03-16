<template>
  <div id="app" class="px4">
    <h1>Sweet or Salty</h1>
    <div class="clearfix mxn1">
      <div class="col col-3 px1">
        <search></search>
        <results></results>
      </div>
      <div class="col col-9 px1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  @import '/components/normalize/normalize';
  @import '/components/variables/variables';
  @import '/components/functions/functions';
  @import '../node_modules/animate.css/animate.min.css';
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
