<template>
  <div>
    <h3>brand Car</h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: ['honda', 'toyota', 'ferrari'],
    }
  },
}
</script>
