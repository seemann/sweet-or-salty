import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import ResultsView from './views/ResultsView.vue';
import ResultDetail from './components/ResultDetail.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

/* Set global Vue resource options */
Vue.http.options.root = 'https://api.trakt.tv';
Vue.http.headers.common['Content-type'] = 'application/json';
Vue.http.headers.common['trakt-api-version'] = '2';
Vue.http.headers.common['trakt-api-key'] = '6ec6cc9ee686c3c6dd74e4569b2a64e10d97c5e523a769e3266f8ae60526fc91';

/* Create router & routes */
const router = new VueRouter({
  routes: [
    {path: '/results/:query', name: 'results', component: ResultsView},
    {path: '/resultDetail/:id', name: 'resultDetail', component: ResultDetail}
  ]
});
