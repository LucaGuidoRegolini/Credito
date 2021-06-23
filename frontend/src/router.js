import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import Offers from "./pages/Offers";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/user",
      name: "User",
      title: "Clint",
      component: Offers
    },
    { name: "geral", path: "*", component: Home }
  ]
});
