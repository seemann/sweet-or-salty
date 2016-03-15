<template>
  <div class="result media">
    <div class="media__figure mr2">
      <img class="result__img" src="{{ image }}" alt="" />
    </div>
    <div class="media__body">
      <h3>{{ title }} <small>{{ type }}</small></h3>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import '../variables/variables';

  .result__img {
    height: auto;
    max-width: 60px;
  }
</style>

<script>
  export default {
    props: ['type', 'title', 'image']
  }
</script>
