import Vue from 'vue'
import { createApp } from './main';

Vue.mixin({
  beforeMount() {
    const { asyncData } = this.$options;
    
    if (asyncData) {
      // assign the fetch operation to a promise
      // so that in components we can do `this.dataPromise.then(...)` to
      // perform other tasks after data is ready
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route,
      });
    }
  }
});

Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const { asyncData } = this.$options
    
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to,
      })
      .then(next)
      .catch(next);
    } else {
      next();
    }
  }
});

const { app , router, store} = createApp();

// Pick up any server-side pre-fetched state
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

// this assumes App.vue template root element has `id="app"`
router.onReady(() => {
  app.$mount('#app');
});