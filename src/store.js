import Vue from 'vue'

const store = {
  state: {
    query: 'dfasdfaf',
    results: []
  },

  search: function () {
    Vue.http.get(`search?type=movie,show&query=${this.state.query}`)
    .then(function (response) {
      console.log(response);
      this.state.results = response.body;
    },
    function (response) {
      console.log();
    });
  }
}

module.exports = store;
