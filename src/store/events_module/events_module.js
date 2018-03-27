import { CREATE_EVENT, DELETE_EVENT } from "./events_mutations"

export const eventsModule = {
  state: {
    events: [],
  },
  mutations: {
    [CREATE_EVENT] () {

    },

    [DELETE_EVENT] () {

    },
  },
  actions: {}, 
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
  },
};