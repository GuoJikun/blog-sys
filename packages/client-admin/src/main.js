import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import Table from './components/Table.vue'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn
})
app.use(createPinia())
app.use(router)
app.component('t-table', Table)

app.mount('#app')
