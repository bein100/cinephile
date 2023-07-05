import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import routers from './router'
import '@/assets/style/style.scss'
import BtnMore from '@/components/BtnMore.vue'
import Actors from '@/components/Actors.vue'
const app = createApp(App)
app.component('BtnMore', BtnMore)
app.component('Actors', Actors)
app.use(store).use(routers).mount('#app')
