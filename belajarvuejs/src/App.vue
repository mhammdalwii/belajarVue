<template>
  <div>
    <appHeader></appHeader>
    <div class="container">
      <profilPage :name="name" :lastname="lastname"></profilPage>
    </div>
    <button @click="changeName">Ubah Name</button>
    <appFooter></appFooter>
  </div>
</template>
<script>
import profilPage from './components/user/profilPage.vue'
import appHeader from './components/generals/appHeader.vue'
import appFooter from './components/generals/appFooter.vue'
export default {
  components: {
    appHeader,
    profilPage,
    appFooter,
  },
  data() {
    return {
      name: 'Muhammad',
      lastname: 'Alwi',
    }
  },
  methods: {
    changeName() {
      this.name = 'wial'
    },
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
