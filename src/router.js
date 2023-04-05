import VueRouter from "vue-router";
import Home from "./views/Home.view.vue";
import Employees from "./views/AppEmployees.view.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/employees",
    name: "employees",
    component: Employees,
  },
];

const router = new VueRouter({
  mode: "history", // use HTML5 history mode to remove the hash from URLs
  base: process.env.BASE_URL, // set the base URL for the router
  routes,
});

export default router;
