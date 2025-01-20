<template>
  <form @submit.prevent="checkForm()">
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

        <div class="form-group">
          <h5>Want to get promotion</h5>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Newsletter" id="newsletter" v-model="formData.extras" />
            <label class="form-check-label" for="newsletter">News Letter</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Promotion" id="promotion" v-model="formData.extras" />
            <label class="form-check-label" for="promotion">Promotion</label>
          </div>
        </div>

        <div class="form-group">
          <h5>what are you</h5>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="male" id="male" v-model="formData.gender" />
            <label class="form-check-label" for="male">Laki-laki</label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" value="female" id="female" v-model="formData.gender" />
            <label class="form-check-label" for="female">Perempuan</label>
          </div>

          <div class="form-group">
            <label for="country">Country</label>
            <select class="form-control" id="country" v-model="formData.country">
              <option v-for="(country, index) in listCountry" :key="index + country">
                {{ country }}
              </option>
            </select>
          </div>
        </div>
        <button class="btn btn-primary mt-2">Submit</button>
        <div v-if="this.errors.length" class="alert alert-danger mt-2">
          <p>please fix this error</p>
          <ul>
            <li v-for="error in erros" :key="error">
              {{ error }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      formData: {
        name: "",
        email: "",
        subject: "",
        extras: [],
        // newsletter: true,
        // promotion: false,
        gender: "male",
        country: "",
      },
      listCountry: ["Indonesia", "Malaysia", "Singapore"],
    };
  },
  methods: {
    checkForm() {
      this.errors = [];

      if (!this.formData.name) {
        this.errors.push("Name required");
      }
      if (!this.formData.email) {
        this.errors.push("Email required");
      } else if (!this.validEmail(this.formData.email)) {
        this.errors.push("Email invalid");
      }
      if (!this.errors.length) {
        this.submitForm();
      }
    },
    submitForm() {
      console.log(this.formData);
    },

    validEmail(email) {
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      return re.test(email);
    },
    getData() {
      this.formData.name = "New Alwi";
    },
  },
};
</script>
