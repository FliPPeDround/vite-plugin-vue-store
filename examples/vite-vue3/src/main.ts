import { createApp } from 'vue'
import Devtools from 'vite-plugin-vue-store'
import App from './App.vue'

const app = createApp(App)
app.use(Devtools, { path: 'stores/index' })
// app.use(Devtools)
app.mount('#app')
