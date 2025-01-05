<template>
  <div class="life">
    {{ message }} <br />
    <button @click="this.message = 'Hello World'">Change Text</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
    }
  },
  beforeCreate() {
    console.log('1-beforeCreate')
  },
  created() {
    console.log('2-created')
  },
  beforeMount() {
    console.log('3-beforeMount')
  },
  mounted() {
    console.log('4-mounted')
  },
  beforeUpdate() {
    console.log('5-beforeUpdate')
  },
  updated() {
    console.log('6-updated')
  },
  beforeUnmount() {
    console.log('7-beforeUnmount')
  },
  unmounted() {
    console.log('8-unmounted')
  },
}
</script>

<style>
.life {
  padding: 20px;
  color: black;
  font-size: 20px;
  text-align: center;
}
</style>
