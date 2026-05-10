import { createRouter, createWebHistory , createMemoryHistory} from 'vue-router';
import TheRequests from  './components/pages/TheRequests.vue'
import Coaches from  './components/pages/Coaches.vue'

const routes = [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: Coaches },
    { path: '/requests', component: TheRequests },

  ]

 const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })


export default router;