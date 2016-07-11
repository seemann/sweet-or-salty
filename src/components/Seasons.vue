<template>
  <div class="seasons">
    {{id}}
    <button type="button" @click="showFoo()">Foo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foo: 'foo'
    };
  },
  props: {
    id: {
      type: Number
    }
  },
  ready: () => {
    console.log(this);
  },
  medthods: {
    showFoo() {
      console.log(this);
    }
  }
};
</script>

<style lang="sass" scoped>
  @import '../variables';

  .seasons {
    font-size: 1rem;
  }
</style>
