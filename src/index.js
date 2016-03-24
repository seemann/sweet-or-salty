import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import store from './store'
import App from './app.vue'

Vue.config.debug = true

Vue.use(VueResource)
Vue.use(VueRouter)

/* Set global Vue resource options */
Vue.http.options.root = 'https://api-v2launch.trakt.tv'
Vue.http.headers.common['Content-type'] = 'application/json'
Vue.http.headers.common['trakt-api-version'] = '2'
Vue.http.headers.common['trakt-api-key'] = '6ec6cc9ee686c3c6dd74e4569b2a64e10d97c5e523a769e3266f8ae60526fc91'

/* Create router */
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

/* Create transitions */
Vue.transition('slide', {
  enterClass: 'slideIn',
  leaveClass: 'slideOutDown'
})

router.start({
  store,
  components: { App }
}, '#app')
