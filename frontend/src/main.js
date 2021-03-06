import Vue from "vue";

import App from "./App";
import router from "./router.js";
const VueInputMask = require("vue-inputmask").default;

Vue.use(VueInputMask);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
