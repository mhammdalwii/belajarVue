<template>
  <div>
    <ul v-for="(car, index) in cars" :key="index">
      <li>
        {{ car.brand }}:
        {{ car.model }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cars'],
}
</script>
