import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import router from './router'
import { key, store } from './store'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store, key)
app.mount('#app')
