import Vue from 'vue';
import {
  AUTH_ATTEMPT,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./session_mutations";

export const sessionActions = {
  
  async login({ commit }, creds) {
    commit(AUTH_ATTEMPT);

    try {
      const res = await Vue.axios.post("/login", creds, { timeout: 3000 });
      
      if (!res.data.token) {
        return { error: true };
      }

      localStorage.token = res.data.token;
      commit(LOGIN_SUCCESS, res.data.userId);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  },

  async register({ commit }, creds) {
    commit(AUTH_ATTEMPT);
    
    try {
      const res = await Vue.axios.post('/register', creds, { timeout: 3000 })
        
      if (!res.data.token) {
        return { error: true };
      }
  
      localStorage.token = res.data.token;
      commit(LOGIN_SUCCESS, res.data.userId);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  },

  logout({ commit }) {
    delete localStorage.token;
    commit(LOGOUT);
  },
}