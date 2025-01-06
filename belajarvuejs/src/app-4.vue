<template>
  <div>
    <appHeader></appHeader>
    <div class="container">
      <button @click="this.activeComp = 'comp-Orange'">Orange</button>
      <button @click="this.activeComp = 'comp-Grape'">Grape</button>

      <!-- <compOrange v-if="activeComp === 'compOrange'"></compOrange>
      <compOrange v-if="activeComp === 'compGrape'"></compOrange> -->

      <component :is="activeComp"></component>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/generals/appHeader.vue'
import appFooter from './components/generals/appFooter.vue'
import compOrange from './components/fruits/orange-1.vue'
import compGrape from './components/fruits/grape-1.vue'

export default {
  components: {
    appHeader,
    appFooter,
    compOrange,
    compGrape,
  },
  data() {
    return {
      activeComp: 'comp-Orange',
    }
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
