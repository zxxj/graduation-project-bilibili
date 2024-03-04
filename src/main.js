import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import 'normalize.css'
import './assets/css/common.scss'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
