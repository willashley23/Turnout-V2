import { sessionActions } from "./session_actions";
import {
  AUTH_ATTEMPT,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./session_mutations";

export default {
  state: {
    currentUser: !!localStorage.getItem("token"),
  },
  mutations: {
    [AUTH_ATTEMPT] (state) {
      state.pending = true;
    },

    [LOGIN_SUCCESS] (state, id) {
      state.pending = false;
      state.currentUser = { id };
    },

    [LOGOUT] (state) {
      state.currentUser = false;
    },
  },
  actions: sessionActions,
  getters: {},
};