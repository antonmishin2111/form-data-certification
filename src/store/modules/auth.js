import firebase from "firebase/app";

export default {
  state: {
    isInited: false
  },
  mutations: {
    authStateChanged(state, is) {
      state.isInited = is;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await commit("setProcessing", true);
        await firebase.auth().signInWithEmailAndPassword(email, password);
        await commit("setProcessing", false);
        await commit("setIsAuth", true);
        await commit("authStateChanged", true);
      } catch (e) {
        await commit("setError", e);
        await commit("setProcessing", false);
        throw e;
      }
    },
    async register({ commit, dispatch }, { email, password, name }) {
      try {
        await commit("setProcessing", true);
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = firebase.auth().currentUser;

        if (user != null) {
          await user.updateProfile({
            displayName: name,
            email: email
          });
          await dispatch("changedUser", user);
          await commit("setProcessing", false);
          await commit("setIsAuth", true);
          await commit("authStateChanged", true);
        }
      } catch (e) {
        await commit("setError", e);
        await commit("setProcessing", false);
        throw e;
      }
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      await commit("unSetUser");
      await commit("setIsAuth", false);
      await commit("authStateChanged", true);
    }
  },
  getters: {
    isInited: state => state.isInited
  }
};
