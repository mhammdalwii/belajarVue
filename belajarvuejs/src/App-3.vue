<template>
  <div>
    <appHeader></appHeader>
    <div class="container">
      <compLife v-if="showlt"></compLife>
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
    compLife,
    appFooter,
  },
  data() {
    return {
      showlt: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showlt = false
    }, 5000)
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
}
</style>
