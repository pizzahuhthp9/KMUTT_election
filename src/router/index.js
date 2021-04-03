import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Form from "../views/Form.vue";
import Confirm from "../views/Confirm.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/form/confirm",
    name: "Confirm",
    component: Confirm,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
