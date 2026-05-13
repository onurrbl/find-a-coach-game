import { createRouter, createWebHistory } from 'vue-router';

import Coaches from './components/pages/Coaches.vue';
import TheRequests from './components/pages/TheRequests.vue';
import CoachesContact from './components/pages/CoachesContact.vue';


const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },

  {
    path: '/coaches',
    component: Coaches
  },

  {
    path: '/:name/contact',
    component: CoachesContact
  },

  {
    path: '/requests',
    component: TheRequests
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;