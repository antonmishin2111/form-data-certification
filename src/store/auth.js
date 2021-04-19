import firebase from "firebase/app";

export default {
  actions: {
    async login({ commit, dispatch }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        await dispatch("fetchUser");
      } catch (e) {
        commit("setError", e);
      }
    },
    async register({ commit, dispatch }, { email, password, name }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = firebase.auth().currentUser;

        if (user != null) {
          await user.updateProfile({
            displayName: name,
            email: email
          });
          console.log(user);
          await dispatch("fetchUser");
        }
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit("unSetUser");
    }
  }
};
