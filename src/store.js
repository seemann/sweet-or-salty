import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  searchQuery: 'Hallo',
  results: []
}

const actions = {
  search: function ({ state }) {
    Vue.http.get(`search?type=movie,show&query=${state.searchQuery}`)
    .then(function (response) {
      state.results = response.data
      console.log(state.results)
    },
    function (response) {
      console.log()
    })
    console.log(state.results)
  }
}

export default new Vuex.Store({
  state,
  actions
})
