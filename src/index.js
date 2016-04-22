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
Vue.http.headers.common['trakt-api-key'] = ''

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
