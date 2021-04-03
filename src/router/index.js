import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Confirm from "../views/Confirm.vue";
import ConfirmSentMessage from "../views/ConfirmSentMessage.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/confirm",
    name: "Confirm",
    component: Confirm,
  },
  {
    path: "/confirm/sentmessage",
    name: "ConfirmSentMessage",
    component: ConfirmSentMessage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
