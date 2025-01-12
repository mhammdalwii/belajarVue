import { createApp } from 'vue'
import App from './app-5.vue'
import Header from './components/generals/appHeader.vue'
import Footer from './components/generals/appFooter.vue'

const app = createApp(App)
app.directive('custDir', {
  beforeMount(el, binding) {
    console.log(binding)
    el.style.color = binding.modifiers.blue ? 'blue' : 'red'
    el.style.fontSize = binding.modifiers.small ? '15px' : '30px'
    el.innerHTML = binding.value
  },
})

app.component('appHeader', Header)
app.component('appFooter', Footer)
app.mount('#app')
