import Vue from 'vue';
import {
  FETCH_ATTEMPT,
  FETCH_FAILED,
  FETCH_ALL_EVENTS,
  CREATE_EVENT,

} from "./events_mutations";

export const eventActions = {

  async fetchEvents({ commit }, params) {
    commit(FETCH_ATTEMPT);

    const [res, error] = await Vue.axios.get('/events', params, { timeout: 3000 });
    if (error) {
      commit(FETCH_FAILED);
      throw new Error(error);
    }

    commit(FETCH_ALL_EVENTS, res.data.events);

    return true;
  },
}