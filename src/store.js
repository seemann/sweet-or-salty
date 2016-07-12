import Vue from 'vue';

module.exports = {
  state: {
    results: []
  },

  search(query) {
    Vue.http.get(`search/show?query=${query}&extended=images`).then(response => {
      this.state.results = response.json();
    }, response => {
      console.error(response);
    });
  }
};
