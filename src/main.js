import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import '@style/main.scss';

import '@libs/flexible';

import '@libs';

new Vue({
  render: h => h(App)
}).$mount('#app')
