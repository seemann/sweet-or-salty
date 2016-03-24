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
  export default {
    vuex: {
      getters: {
        detail: state => state.detail
      }
    }
  }
</script>
