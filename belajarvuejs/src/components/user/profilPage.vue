<template>
  <div class="userProfile">
    <h3>user information</h3>
    <ul>
      <li><span>First Name :</span>{{ name }}</li>
      <li><span>Last Name :</span>{{ lastname }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['name', 'lastname'],
}
</script>
