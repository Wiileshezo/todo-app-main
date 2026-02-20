import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import BaseCard from './components/UI/BaseCard.vue'

const app = createApp(App)

app.component('the-header', TheHeader)
app.component('the-footer', TheFooter)
app.component('base-card', BaseCard)

app.use(createPinia())

app.mount('#app')
