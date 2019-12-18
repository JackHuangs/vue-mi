import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("views/home/Home")
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("views/detail/GoodDetail")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("views/user/register/Register")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("views/user/login/Login")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
