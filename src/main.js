import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import '@style/main.scss';

import '@libs/flexible';

import '@libs';

import router from './route';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
