import Vue from "vue";
import VueRouter from "vue-router";
// import firebase from "firebase/app";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    meta: { layout: "empty" },
    component: () => import("../views/Registry.vue")
  },
  {
    path: "/",
    name: "Home",
    meta: { auth: true, layout: "main" },
    component: () => import("../views/Home.vue")
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
  let { isAuth, isInited } = store.getters;

  const requireAuth = to.matched.some(record => {
    return record.meta.auth;
  });

  console.log(requireAuth);
  console.log(isInited);
  console.log(isAuth);
  // if (isInited) {
  //   if (!isAuth && to.matched.some(record => record.meta.auth)) {
  //     return next("/login");
  //   } else if (isAuth && to.name === "login") {
  //     return next("/");
  //   }
  // }

  console.log(requireAuth);

  if (requireAuth) {
    if (!isAuth) {
      console.log("Log1:");
      next("/login");
    } else {
      console.log("Log2:");
      next();
    }
  } else {
    if (isAuth && to.name === "Login") {
      console.log("Log3:");
      next("/");
    }
    next();
  }

  // if (requireAuth) {
  //   if (!authenticated) {

  //     next("/login?message=login");
  //   } else {
  //     console.log("Log2:");
  //     next();
  //   }
  // } else {
  //   if (authenticated && to.name === "Login") {
  //     console.log("Log3:");
  //     next("/");
  //   }
  //   console.log("Log4:");
  //   next();
  // }
});
export default router;
