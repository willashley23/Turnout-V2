import Vue from 'vue';

export const sessionActions = {
  login({ commit }, creds) {
    commit("AUTH_ATTEMPT");
    return new Promise( (resolve, reject) => {
      Vue.axios.post("/login", creds, { timeout: 3000 })
        .then(res => {
          if (!res.data.token) {
            reject({ error: true });
          }
  
          localStorage.token = res.data.token;
          commit("LOGIN_SUCCESS", res.data.userId);
          resolve(res);
        })
        .catch(error => reject(error));
    });
  },

  logout({ commit }) {
    delete localStorage.token;
    commit("LOGOUT");
  },

  register({ commit }, creds) {
    commit("AUTH_ATTEMPT");
    return new Promise( (resolve, reject) => {
      Vue.axios.post('/register', creds, { timeout: 3000 })
        .then(res => {
          if (!res.data.token) {
            reject({ error: true });
          }

          localStorage.token = res.data.token;
          commit("LOGIN_SUCCESS", res.data.userId);
          resolve(res);
        })
        .catch(error => reject(error));
    });
  },
}