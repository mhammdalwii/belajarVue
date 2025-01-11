<template>
  <div>
    <appHeader></appHeader>
    <div class="container">
      <compDerective></compDerective>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/generals/appHeader.vue'
import compDerective from './components/directives/derective-index.vue'
import appFooter from './components/generals/appFooter.vue'
export default {
  components: {
    appHeader,
    compDerective,
    appFooter,
  },
  data() {
    return {}
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.container {
  min-height: 80vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>
