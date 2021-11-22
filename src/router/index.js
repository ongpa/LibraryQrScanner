import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import QRcode from "../views/QRcode.vue"
import Scanner from "../views/Scanner.vue"
import Account from "../views/Account.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/qrcode",
    name: "QRcode",
    component: QRcode,
  },
  {
    path: "/scanner",
    name: "Scanner",
    component: Scanner,
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  }
];

const router = new VueRouter({
  routes,
});

export default router;
