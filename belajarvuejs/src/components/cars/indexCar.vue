<template>
  <div>
    <ul>
      <list-car :cars="cars"></list-car>
    </ul>
  </div>
</template>
<script>
import listCar from './listCar.vue'
export default {
  components: {
    listCar,
  },
  props: ['cars'],
}
</script>
