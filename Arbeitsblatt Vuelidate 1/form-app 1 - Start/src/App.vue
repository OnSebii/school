<template>
  <v-app>
    <v-container>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field v-model="email" @input="$v.email.$touch()" @blur="$v.email.$touch()" :error-messages="emailErrors" label="E-mail"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field v-model="username" @input="$v.username.$touch()" @blur="$v.username.$touch()" :error-messages="usernameErrors" label="Username"></v-text-field>
            </v-col>
          </v-row>
          <v-btn class="mr-4" @click="submit()">submit</v-btn>
          <v-btn @click="clearInput()">clear</v-btn>
        </v-container>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
import { required, email, minLength, alphaNum } from 'vuelidate/lib/validators';
export default {
  name: 'App',

  data: () => ({
    email: '',
    username: '',
  }),
  computed: {
    emailErrors() {
      let errors = [];
      if (!this.$v.email.$dirty) return errors;
      if (!this.$v.email.email) errors.push('Your email is wrong!');
      if (!this.$v.email.required) errors.push('You need to provide an email!');
      return errors;
    },
    usernameErrors() {
      let errors = [];
      if (!this.$v.email.$dirty) return errors;
      if (!this.$v.username.alphaNum) errors.push('Your username should consist only of letters and numbers!');
      if (!this.$v.username.minLength) errors.push('Your username should have at leasst 8 Characters!');
      if (!this.$v.username.required) errors.push('You need to provide a username!');
      return errors;
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) console.log('submitted');
    },
    clearInput() {
      this.username = this.email = '';
    },
  },
  validations: {
    email: { required, email },
    username: { required, minLength: minLength(8), alphaNum },
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>
