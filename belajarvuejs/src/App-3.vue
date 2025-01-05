<template>
  <div>
    <appHeader></appHeader>
    <div class="container">
      <compLife></compLife>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/generals/appHeader.vue'
import appFooter from './components/generals/appFooter.vue'
import compLife from './components/life/index-life.vue'
export default {
  components: {
    appHeader,
    appFooter,
    compLife,
  },
  data() {
    return {}
  },
}
</script>
