import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import { VButton, VChart } from '@pathscale/vue3-ui'

const app = createApp(App)

app.component('VButton', VButton)
app.component('VChart', VChart)

app.use(router)
app.use(store)

app.mount('#app')
