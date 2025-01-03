<template>
  <div>
    <appHeader></appHeader>
    <div class="container">
      <compBrand>
        <ul>
          <li v-for="(brand, index) in brands" :key="index">{{ brand }}</li>
        </ul>
      </compBrand>
    </div>
    <appFooter></appFooter>
  </div>
</template>
<script>
import appHeader from './components/generals/appHeader.vue'
import appFooter from './components/generals/appFooter.vue'
import compBrand from './components/cars/brandCar.vue'
export default {
  components: {
    appHeader,
    compBrand,
    appFooter,
  },
  data() {
    return {
      brands: ['honda', 'toyota', 'ferrari'],
      cars: [
        {
          model: 'jazz',
          brand: 'Honda',
        },
        {
          model: 'yaris',
          brand: 'toyota',
        },
        {
          model: 'airev',
          brand: 'Wulling',
        },
      ],
    }
  },
  provide() {
    return {
      cars: this.cars,
      changeCar: this.changeCar,
    }
  },
  methods: {
    changeCar() {
      this.cars[0].brand = 'Suzuki'
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
