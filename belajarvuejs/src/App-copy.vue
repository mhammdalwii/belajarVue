<template>
  <div>
    <comp-cars :cars="cars"></comp-cars>
  </div>
</template>
<script>
import compCars from './components/cars/indexCar.vue'
export default {
  components: {
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
  methods: {},
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
