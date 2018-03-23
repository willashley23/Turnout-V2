import Vue from 'vue'
import Vuex from 'vuex'
import { eventsModule } from './events_module/events_module'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        events: eventsModule,
    },
    getters: {
        currentCount: state => {
            return state.count;
        },
    },
    mutations: {
        increment (state) {
            state.count++;
        }
    },
});
