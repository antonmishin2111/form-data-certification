import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
// import firebase from "firebase/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    user: {
      name: null,
      uid: null,
      auth: false
    }
  },
  mutations: {
    setError(state, error) {
      state.error = error;
      console.log(state.error);
    },
    clearError(state) {
      state.error = null;
    },
    setUser(state, user) {
      state.user = user;
    },
    unSetUser(state) {
      state.user = {
        name: null,
        uid: null,
        auth: false
      };
    }
  },
  actions: {
    fetchUser({ commit }, currentUser) {
      // const currentUser = firebase.auth().currentUser;
      let profile = {};

      if (currentUser != null) {
        profile.name = currentUser.displayName;
        profile.uid = currentUser.uid;
        profile.auth = true;

        commit("setUser", profile);
      } else {
        commit("unSetUser");
      }
    }
  },
  getters: {
    error: state => state.error,
    userAuth: state => state.user.auth
  },
  modules: { auth }
});
