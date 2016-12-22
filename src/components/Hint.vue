<template>
  <transition name="fade">
    <div class="hint" v-if="show">
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String
    },
    show: {
      type: Boolean
    }
  }
};
</script>

<style lang="sass" scoped>
  @import '../variables';
  @import '../transitions';

  .hint {
    background-color: $color-secondary;
    border-radius: $border-radius-initial;
    font-size: 1.5rem; /* 24px */
    margin: 2em 0; /* 48px */
    padding: 1em; /* 24px */
    text-align: center;
  }
</style>
