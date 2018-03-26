// Core
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Plugins
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
