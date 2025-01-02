<template>
  <div>
    <ul v-for="(car, index) in cars" :key="index">
      <li>
        {{ car.brand }}:
        {{ car.model }}
      </li>
    </ul>
    <button @click="changeCar">Change car</button>
  </div>
</template>

<script>
export default {
  inject: ['cars', 'changeCar'],
}
</script>
