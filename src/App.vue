<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
  </div>
</template>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>

<script>
  import Hello from './components/Hello'

  export default {
    components: {
      Hello
    }
  }
</script>
