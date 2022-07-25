import { createRouter, createWebHashHistory } from "vue-router";
import DrawFace from "../views/DrawFace.vue";
import DrawColor from "../views/DrawColor.vue";

const routes = [
  { path: "/", component: DrawFace },
  { path: "/colors", component: DrawColor },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
