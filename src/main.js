import Vue from 'vue';
import Resource from'vue-resource';
import App from './App.vue';

Vue.use(Resource);

/* Set global Vue resource options */
Vue.http.options.root = 'https://api-v2launch.trakt.tv';
Vue.http.headers.common['Content-type'] = 'application/json';
Vue.http.headers.common['trakt-api-version'] = '2';
Vue.http.headers.common['trakt-api-key'] = '';


/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
