import { createApp } from 'vue'
import App from './app-5.vue'
import Header from './components/generals/appHeader.vue'
import Footer from './components/generals/appFooter.vue'

const app = createApp(App)
app.directive('custDir', {
  created(el) {
    console.log(el.parentNode)
    console.log('created')
  },
  beforeMount(el, binding) {
    console.log(el.parentNode)
    console.log('beforeMount')
    el.style.color = binding.modifiers.blue ? 'blue' : 'red'
    el.style.fontSize = binding.modifiers.small ? '15px' : '30px'
    el.innerHTML = binding.value
  },

  mounted(el) {
    console.log(el.parentNode)
    console.log('mounted')
  },

  beforeUpdate(el, binding) {
    el.innerHTML = binding.value
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
})

app.component('appHeader', Header)
app.component('appFooter', Footer)
app.mount('#app')
