<template>
  <div>
    <appHeader></appHeader>
    <div class="container">
      <profilPage
        :aka="name"
        :lastname="lastname"
        :userAge="age"
        :userParents="parents"
        @update-lastname="lastname = $event"
        @say-hello="sayHello"
        :updateAge="updateAge"
      ></profilPage>
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
      age: 21,
      parents: {
        father: 'Budi',
        mother: 'Siti',
      },
    }
  },
  methods: {
    changeName() {
      this.name = 'wial'
    },
    sayHello() {
      alert('Hello Alwi')
    },
    updateAge(value) {
      this.age = value
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
