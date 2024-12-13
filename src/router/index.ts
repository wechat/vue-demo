import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        title: "Home page",
        keepAlive: true,
      },
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      meta: {
        title: "About page",
        keepAlive: true,
      },
      component: About,
    },
  ],
});

export default router;
