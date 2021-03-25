import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import config from "./firebase/configFirebase.js";

import Loader from "./components/Loader";

Vue.component("loader", Loader);

Vue.config.productionTip = false;
firebase.initializeApp(config);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
