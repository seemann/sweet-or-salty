import Vue from 'vue';

module.exports = {
  state: {
    results: [],
    seasons: []
  },

  search(query) {
    Vue.http.get(`search/show?query=${query}&extended=images`).then(response => {
      this.state.results = response.json();
    }, response => {
      console.error(response.statusText);
    });
  },

  getSeasons(id) {
    Vue.http.get(`shows/${id}/seasons?extended=episodes`).then(response => {
      this.state.seasons = response.json();
    }, response => {
      console.error(response.statusText);
    });
  }
};
