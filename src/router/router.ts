import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' },
    },
    {
      name: 'Home',
      path: '/home',
      component: () => import('../pages/Home.vue'),
    },
    {
      name: 'Questions',
      path: '/questions',
      component: () => import('../pages/Questions.vue'),
    },
  ],
});
export default router;
