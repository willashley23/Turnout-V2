import {
  LOGIN,
  LOGOUT,
  REGISTER,
  RECEIVE_CURRENT_USER,
} from "./session_actions";

export const sessionModule = {
  state: {
    currentUser: null,
  },
  mutations: {
    [LOGIN] () {

    },

    [LOGOUT] () {

    },

    [REGISTER] () {

    },

    [RECEIVE_CURRENT_USER] () {

    },
  },
  actions: {},
  getters: {},
};