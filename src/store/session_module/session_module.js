import { sessionActions } from "./session_actions";
import {
  AUTH_ATTEMPT,
  AUTH_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./session_mutations";

export default {
  state: {
    // do something like asyncData somewhere to fetchCurrentUser 
    // and check the request headers for a token or some shit
    currentUser: !!localStorage.getItem("token"),
  },
  mutations: {
    [AUTH_ATTEMPT](state) {
      state.pending = true;
    },

    [AUTH_FAILED](state) {
      state.pending = false;
    },

    [LOGIN_SUCCESS](state, id) {
      state.pending = false;
      state.currentUser = { id };
    },

    [LOGOUT](state) {
      state.currentUser = false;
    },
  },
  actions: sessionActions,
  getters: {},
};