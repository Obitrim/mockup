import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueRouter from "vue-router";
import { VueQueryPlugin } from "vue-query";
// import router from "../src/router.js";

const app = createApp(App);

app.use(VueQueryPlugin);
// app.use(VueRouter);

app.mount("#app");
