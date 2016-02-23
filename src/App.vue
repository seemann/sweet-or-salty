<template>
  <div id="app">
    <h1>Sweet or Salty</h1>
    <search></search>
    <results></results>
  </div>
</template>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>

<script>
  import Search from './components/Search'
  import Results from './components/Results'

  export default {
    components: {
      Search,
      Results
    }
  }
</script>
