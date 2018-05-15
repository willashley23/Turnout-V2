import Vue from 'vue';
import Vuex from 'vuex';
import eventsModule from './events_module/events_module';
import sessionModule from './session_module/session_module';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      count: 0,
      isLoadingAsync: false,
    },
    modules: {
      events: eventsModule,
      session: sessionModule,
    },
    getters: {
      currentCount: state => {
        return state.count;
      },
    },
    mutations: {
      increment(state) {
        state.count++;
      }
    },
  });
}

