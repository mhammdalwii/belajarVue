<template>
  <div v-user-lastname="lastname"></div>
  <h3 v-custDir.blue.big="valDiective"></h3>
  <button @click="this.valDiective = 'changed Text'">Change Text</button>
</template>

<script>
export default {
  data() {
    return {
      valDiective: 'text from data',
      lastname: 'Alwii',
    }
  },
  directives: {
    'user-lastname': {
      beforeMount(el, binding) {
        el.innerHTML = binding.value
        el.style.color = 'red'
        el.style.fontSize = '30px'
      },
    },
  },
}
</script>
