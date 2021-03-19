import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import firebase from "firebase/app";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
      console.log(state.error);
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    }
  },
  getters: {
    error: s => s.error
  },
  modules: { auth }
});
