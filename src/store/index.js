import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    isProcess: false
  },
  mutations: {
    setError(state, error) {
      state.error = error;
      console.log(state.error);
    },
    clearError(state) {
      state.error = null;
    },
    setProcessing(state, is) {
      state.isProcess = is;
    }
  },
  actions: {},
  modules: { auth, user },
  getters: {
    error: state => state.error,
    isProcess: state => state.isProcess
  }
});
