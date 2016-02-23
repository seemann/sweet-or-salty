<template>
  <form class="search" @submit.prevent>
    <input v-model="searchQuery" @keyup.enter="search" type="text">
  </form>
</template>

<style scoped>
  .search {

  }
</style>

<script>
  import store from './../store'

  export default {

    computed: {
      searchQuery () {
        return store.state.searchQuery
      }
    },

    methods: store.actions
  }
</script>
