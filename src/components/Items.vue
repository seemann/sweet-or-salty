<template>
  <ul class="items">
    <li class="item" v-for="item in items">
      <img v-bind:src="item.movie.images.poster.thumb" alt="" />
      <h3>{{ item.movie.title }}</h3>
    </li>
  </ul>
</template>

<style scoped>
  .items {
    color: red;
    list-style: none;
    padding-left: 0;
  }
</style>

<script>
  import Vue from 'vue'

  export default {
    data: function () {
      return {
        items: []
      }
    },

    ready: function () {
      this.loadItems()
    },

    methods: {
      loadItems: function () {
        var self = this
        Vue.http.get('movies/trending?extended=images')
        .then(function (response) {
          self.items = response.data
        },
        function (response) {
          console.log()
        })
      }
    }
  }
</script>
