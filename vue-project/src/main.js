import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import router from './router'
import Ripple from 'primevue/ripple';

import BaseCard from './components/ui/BaseCard.vue'
import store from './store'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})


app.directive('ripple', Ripple);

app.component('base-card', BaseCard)

app.mount('#app')