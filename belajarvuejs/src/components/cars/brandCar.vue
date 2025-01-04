<template>
  <div>
    <slot></slot>
    <h3>brand Car</h3>
    <slot name="brand"></slot>
    <slot name="other"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
