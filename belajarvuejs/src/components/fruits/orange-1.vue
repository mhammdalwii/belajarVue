<template>
  <div>Orange Component</div>
</template>

<script>
export default {
  name: 'comp-Orange',
  mounted() {
    console.log('orange-mounted')
  },

  activated() {
    console.log('orange-activated')
  },

  deactivated() {
    console.log('orange-deactivated')
  },

  unmounted() {
    console.log('orange-unmounted')
  },
}
</script>
