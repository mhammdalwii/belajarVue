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
    aka: {
      type: String,
      required: true,
      default: 'N/A',
    },
    lastname: {
      type: String,
      validator(value) {
        if (value === 'Alwi') {
          return true
        } else {
          return false
        }
      },
    },
    userAge: [Number, String],
    userParents: Object,
    updateAge: Function,
  },
  emits: {
    'update-lastname': function (lastname) {
      if (lastname === 'alfiah') {
        return true
      } else {
        alert('Lastname harus alfiah')
        return false
      }
    },
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
