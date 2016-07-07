import Vue from 'vue';

var store = {
  state: {
    query: '',
    results: ''
  },

  search: function () {
    Vue.http.get(`search?type=movie,show&query=${this.state.query}`)
    .then(function (response) {
      this.state.results = response.body;
      console.log(this.state.results);
    },
    function (response) {
      console.log();
    });
  }
}

module.exports = store;
