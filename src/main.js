import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

Vue.prototype.axios = axios;

Vue.config.productionTip = false;
Vue.use(Toast);

new Vue({
	router,
	vuetify,
	render: (h) => h(App),
}).$mount("#app");
