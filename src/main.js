// Core
import Vue from 'vue'
import App from './App'

// Libraries
import axios from './backend/axios.js'
import Vuelidate from 'vuelidate'
import VueAxios from 'vue-axios'
import VModal from 'vue-js-modal'
import router from './router'
import store from './store'

// Utils
import focus from './directives/v-focus';

Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
Vue.use(VModal)
Vue.directive('focus', focus);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  template: '<App/>',
  components: { App },
});
