import Home from '@/views/Home.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },

  {
    path: '/404',
    name: '404',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue'),
  },

  { path: '/:pathMatch(.*)*', redirect: '/404' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
