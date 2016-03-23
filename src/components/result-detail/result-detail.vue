<template>
  <div class="detail">
    <h3 v-if="item">{{ detail.type }}</h3>
    <div v-else>Select one</div>
  </div>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';
</style>

<script>
  import store from './../../store'

  export default {
    computed: {
      detail () {
        return store.state.detail
      }
    }
  }
</script>
