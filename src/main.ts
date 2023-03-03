import { createApp } from 'vue'
import './index.css'
import './style.css'
import { createPinia } from 'pinia'
import router from "./routes";
import store from "./store/VuexStore";
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);
app.use(pinia)
app.use(router)
app.use(store)
app.mount('#app')
