import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);

/* Set global Vue resource options */
Vue.http.options.root = 'https://api.trakt.tv';
Vue.http.headers.common['Content-type'] = 'application/json';
Vue.http.headers.common['trakt-api-version'] = '2';
Vue.http.headers.common['trakt-api-key'] = '6ec6cc9ee686c3c6dd74e4569b2a64e10d97c5e523a769e3266f8ae60526fc91';

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {App}
});
