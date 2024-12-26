import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/generals/appHeader.vue'
import Footer from './components/generals/appFooter.vue'
const app = createApp(App)
app.component('appHeader', Header)
app.component('appFooter', Footer)

createApp(App).mount('#app')
