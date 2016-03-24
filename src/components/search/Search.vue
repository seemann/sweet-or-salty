<template>
  <form class="search" @submit.prevent>
    <label for="search">Search</label>
    <input :value="searchQuery" @keyup.enter="fireSearch" id="search" type="search">
  </form>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';
</style>

<script>
  import * as actions from './../../actions'

  export default {
    vuex: {
      actions: actions
    },
    methods: {
      fireSearch: function (event) {
        this.search(event.target.value)
      }
    }
  }
</script>
