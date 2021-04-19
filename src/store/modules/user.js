export default {
  state: {
    user: {
      name: null,
      uid: null,
      email: null
    },
    isAuth: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    unSetUser(state) {
      state.user = {
        name: null,
        uid: null,
        email: null
      };
    },
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    }
  },
  actions: {
    async changedUser({ commit }, user) {
      try {
        if (user) {
          let profile = {};
          profile.name = user.displayName;
          profile.uid = user.uid;
          profile.email = user.email;
          await commit("setProcessing", true);
          await commit("setUser", profile);
          await commit("setIsAuth", true);
          await commit("authStateChanged", true);
          await commit("setProcessing", false);
        } else {
          await commit("setProcessing", true);
          await commit("unSetUser");
          await commit("setIsAuth", false);
          await commit("authStateChanged", true);
          await commit("setProcessing", false);
        }
      } catch (e) {
        commit("setError", e.message);
      }
    }
  },
  getters: {
    isAuth: state => state.isAuth,
    user: state => state.user
  }
};
