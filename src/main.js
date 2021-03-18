import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./firebase/configFirebase.js";

Vue.config.productionTip = false;
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
