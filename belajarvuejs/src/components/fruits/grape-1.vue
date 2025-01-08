<template>
  <div>
    <h3>Grape Component</h3>
  </div>
  <teleport to="dialogIs">
    <comp-Modal></comp-Modal>
  </teleport>
</template>

<script>
import compModal from '../utils/model-util.vue'
export default {
  components: {
    compModal,
  },
  name: 'comp-Grape',
  unmounted() {
    console.log('grape-unmounted')
  },
}
</script>
