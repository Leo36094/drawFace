import { createRouter, createWebHashHistory } from "vue-router";
import DrawFace from "../views/DrawFace.vue";
import DrawColor from "../views/DrawColor.vue";
import { GAME } from "../constants";

const routes = [
  { path: "/", component: DrawFace, name: GAME.DRAW_FACE },
  { path: `/colors`, component: DrawColor, name: GAME.GUESS_COLOR },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
