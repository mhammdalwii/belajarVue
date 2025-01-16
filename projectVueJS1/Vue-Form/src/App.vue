<template>
  <compHeader></compHeader>
  <div class="container">
    <compContact></compContact>
  </div>
  <compFooter></compFooter>
</template>

<script>
import compHeader from "./components/header.vue";
import compContact from "./components/contact/indexContact.vue";
import compFooter from "./components/footer.vue";

export default {
  components: {
    compHeader,
    compContact,
    compFooter,
  },
};
</script>
