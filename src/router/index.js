import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Confirm from "../views/Confirm.vue";
import ConfirmSentMessage from "../views/ConfirmSentMessage.vue";
import PartySelect from "../views/PartySelect.vue";
import ConfirmSelect from "../views/ConfirmSelect.vue";
import SelectSecond from "../views/SelectSecond.vue";
import ConfirmSelectSecond from "../views/ConfirmSelectSecond.vue";

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
  },
  {
    path: "/partyselect",
    name: "PartySelect",
    component: PartySelect
  },
  {
    path: "/partyconfirm",
    name: "PartyConfirm",
    component: ConfirmSelect
  },
  {
    path: "/selectsecond",
    name: "SelectSecond",
    component: SelectSecond
  },
  {
    path: "/confirmselectsecond",
    name: "ConfirmSelectSecond",
    component: ConfirmSelectSecond
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
