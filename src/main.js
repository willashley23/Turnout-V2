// Core
import Vue from 'vue';
import App from './App';
import { createStore } from './store';
import { createRouter } from './router';
import { sync } from 'vuex-router-sync'

// Libraries
import axios from './backend/axios.js';
import Vuelidate from 'vuelidate';
import VueAxios from 'vue-axios';
import VModal from 'vue-js-modal';
import VueMoment from 'vue-moment';
//import router from './router'
//import store from './store';

// Utils
import focus from './directives/v-focus';

Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(VModal);
Vue.use(VueMoment);
Vue.directive('focus', focus);

Vue.config.productionTip = false;

/* eslint-disable no-new */

export function createApp() {
  const store = createStore();
  const router = createRouter();

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
      if (!store.state.session.currentUser) {
        router.app.$modal.show("auth-modal");
        next(false);
      } else {
        next();
      }
    } else {
      next();
    }
  });

  sync(store, router);

  const app = new Vue({
    router,
    axios,
    store,
    render: h => h(App),
  });
  
  return { app, router, store };
}
