import Vue from 'vue';
import {
  AUTH_ATTEMPT,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./session_mutations";

export const sessionActions = {

  async handleAuthEvent({ commit }, params) {
    commit(AUTH_ATTEMPT);

    const [res, error] = await Vue.axios.post(`${params.type}`, params, { timeout: 3000 });
    if (error) throw new Error(error);
    
    if (!res.data.token) {
      throw new Error("no token created");
    }

    localStorage.token = res.data.token;
    commit(LOGIN_SUCCESS, res.data.userId);
    return res;
  },
  
  async login({ commit }, creds) {
    commit(AUTH_ATTEMPT);

    const [res, error] = await Vue.axios.post("/login", creds, { timeout: 3000 });
    if (error) throw new Error(error);
    
    if (!res.data.token) {
      throw new Error("no token created");
    }

    localStorage.token = res.data.token;
    commit(LOGIN_SUCCESS, res.data.userId);
    return res;
  },

  async register({ commit }, creds) {
    commit(AUTH_ATTEMPT);
    
    const [res, error] = await Vue.axios.post('/register', creds, { timeout: 3000 })
    if (error) throw new Error(error);

    if (!res.data.token) {
      throw new Error("no token created");
    }

    localStorage.token = res.data.token;
    commit(LOGIN_SUCCESS, res.data.userId);
    return res;
  },

  logout({ commit }) {
    delete localStorage.token;
    commit(LOGOUT);
  },
}