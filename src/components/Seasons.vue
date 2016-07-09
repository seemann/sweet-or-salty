<template>
  <div class="seasons">
    {{id}}
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Number
    }
  },
  ready: () => {
    console.log(this.item);
  }
};
</script>

<style lang="sass" scoped>
  @import '../variables';

  .seasons {
    font-size: 1rem;
  }
</style>
