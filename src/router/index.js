import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase/app";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: { auth: false, layout: "empty" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    meta: { auth: false, layout: "empty" },
    component: () => import("../views/Registry.vue")
  },
  {
    path: "/",
    name: "Home",
    meta: { auth: true, layout: "main" },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: { auth: true, layout: "main" },
    component: () => import("../views/About.vue")
  },
  {
    path: "*",
    meta: { layout: "main" },
    component: () => import("../views/Error.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const user = firebase.auth().currentUser;
  store.dispatch("fetchUser", user);
  const requireAuth = to.matched.some(record => {
    if (!record.meta.auth) {
      return false;
    }
    return record.meta.auth;
  });

  if (requireAuth && !user) {
    next("/login?message=login");
  } else {
    next();
  }
});
export default router;
