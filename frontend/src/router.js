import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Details from "./pages/Details";
import Add from "./pages/Add";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/offer",
      name: "User",
      title: "Clint",
      component: Offers
    },
    {
      path: "/details/:id",
      name: "Details",
      title: "Details",
      component: Details
    },
    {
      path: "/add",
      name: "Add",
      title: "Add",
      component: Add
    },
    { name: "geral", path: "*", component: Home }
  ]
});
