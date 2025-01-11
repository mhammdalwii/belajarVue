import { createApp } from 'vue'
import App from './app-5.vue'
import Header from './components/generals/appHeader.vue'
import Footer from './components/generals/appFooter.vue'

const app = createApp(App)
app.directive('cusDir', {
  beforeMount(el, binding) {
    el.innerHTML = binding.value
    el.style.color = binding.value
    console.log(binding)
  },
})

app.component('appHeader', Header)
app.component('appFooter', Footer)
app.mount('#app')

createApp(App).mount('#app')
