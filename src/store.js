import Vue from 'vue';

const store = {
  state: {
    query: '',
    results: ''
  },

  search() {
    Vue.http.get(`search?type=movie,show&query=${this.state.query}`)
    .then((response) => {
      this.state.results = response.body;
      console.log(this.state.results);
    }, (response) => {
      // error callback
    }
  }
}

module.exports = store;
