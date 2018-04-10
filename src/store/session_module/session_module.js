import { sessionActions } from "./session_actions";
import {
  AUTH_ATTEMPT,
  AUTH_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./session_mutations";

export default {
  state: {
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