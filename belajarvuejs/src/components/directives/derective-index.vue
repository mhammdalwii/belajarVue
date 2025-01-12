<template>
  <h3 v-custDir.blue.small="valDiective"></h3>
  <br />
  <h3 v-custDir.red.big="valDiective"></h3>
  <h3>hello</h3>
</template>

<script>
export default {
  data() {
    return {
      valDiective: 'text from data',
    }
  },
}
</script>
