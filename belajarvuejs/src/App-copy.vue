<template>
  <div>
    <appHeader></appHeader>
    <comp-cars></comp-cars>
    <appFooter></appFooter>
  </div>
</template>
<script>
import appHeader from './components/generals/appHeader.vue'
import appFooter from './components/generals/appFooter.vue'
import compCars from './components/cars/indexCar.vue'
export default {
  components: {
    appHeader,
    appFooter,
    compCars,
  },
  data() {
    return {
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
