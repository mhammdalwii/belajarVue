<template>
  <div class="userProfile">
    <h3>user information</h3>
    <ul>
      <li><span>Ask Now As : </span>{{ aka }}</li>
      <li><span>Name : </span>{{ name }}</li>
      <li><span>Last Name : </span>{{ lastname }}</li>
      <li><span>Age : </span>{{ userAge }}</li>
      <ul>
        <li v-for="(value, key, index) in userParents" :key="index">{{ key }} : {{ value }}</li>
      </ul>
    </ul>
    <button @click="updateLastName">UpdateLastName</button>
    <button @click="sayHello">Klik hello</button>
    <button @click="updateAge(22)">update age</button>
  </div>
</template>
<script>
export default {
  props: {
    aka: String,
    lastname: String,
    userAge: Number,
    userParents: Object,
    updateAge: Function,
  },
  data() {
    return {
      name: 'Alwi',
    }
  },
  methods: {
    updateLastName() {
      this.$emit('update-lastname', 'alfiah')
    },
    sayHello() {
      this.$emit('say-hello')
    },
  },
}
</script>
