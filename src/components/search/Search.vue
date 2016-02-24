<template>
  <form class="search" @submit.prevent>
    <label for="search">Search</label>
    <input :value="searchQuery" @keyup.enter="search" id="search" type="search">
  </form>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';
  @import '../functions/functions';
  @import '../margin/margin';
  @import '../padding/padding';
  @import '../forms/forms';
</style>

<script>
  import store from './../../store'

  export default {
    methods: {
      search: function (event) {
        store.actions.search(event.target.value)
      }
    }
  }
</script>
