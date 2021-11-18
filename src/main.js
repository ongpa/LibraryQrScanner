import "@babel/polyfill"
import "mutationobserver-shim"
import Vue from "vue"
import "./plugins/bootstrap-vue"
import "./plugins/vue-qrcode-reader"
import App from "./App.vue"
import router from "./router"
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
// axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://localhost:8003";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
