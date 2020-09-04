import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCarousel from "vue-carousel";
import VueResource from "vue-resource";
import AOS from "aos";
import VueHead from "vue-head";
import $ from "jquery";

import "aos/dist/aos.css";

AOS.init();

Vue.use(VueCarousel);
Vue.use(VueResource);
Vue.use(AOS);
Vue.use(VueHead);

Vue.http.options.root = "http://localhost:3004/";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
