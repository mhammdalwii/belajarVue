<template>
  <form>
    <div class="row">
      <div class="col-xl-12">
        <h1>Contact</h1>
        <hr />
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="formData.name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" />
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" class="form-control" id="subject" v-model="formData.subject" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <input type="text" class="form-control" id="subject" v-model="formData.subject" />
        </div>
        <button class="btn btn-primary mt-2" @click.prevent="submitForm">Submit</button>
        <button class="btn btn-primary mt-2" @click.prevent="getData">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.FormData);
    },
    getData() {
      this.formData.name = "New Alwi";
    },
  },
};
</script>
