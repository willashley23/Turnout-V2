import { eventActions } from "./events_actions";
import { 
  CREATE_EVENT, 
  DELETE_EVENT,
  FETCH_ALL_EVENTS,
  FETCH_ATTEMPT,
  FETCH_FAILED,
} from "./events_mutations"

export default {
  state: {
    events: [],
    pending: false,
  },
  mutations: {
    [CREATE_EVENT](state) {

    },

    [DELETE_EVENT](state) {

    },

    [FETCH_ATTEMPT](state) {
      state.pending = true;
    },

    [FETCH_FAILED](state) {
      state.pending = false;
    },

    [FETCH_ALL_EVENTS](state, events) {
      state.events = events;
    }
  },
  actions: eventActions, 
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    },
    allEvents: state => {
      return state.events;
    }
  },
};