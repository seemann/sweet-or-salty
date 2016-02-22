<template>
  <div id="app">
    <h1>Sweet or Salty</h1>
    <items></items>
  </div>
</template>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>

<script>
  import Items from './components/Items'

  export default {
    components: {
      Items
    }
  }
</script>
