import { createRouter, createWebHistory } from 'vue-router';

import TheRequests from './components/pages/TheRequests.vue';
import Coaches from './components/pages/Coaches.vue';

const routes = [
  { path: '/', redirect: '/coaches' },
  { path: '/coaches', component: Coaches ,},
//   {path: 'coachec/:id',component }i
  { path: '/requests', component: TheRequests },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;