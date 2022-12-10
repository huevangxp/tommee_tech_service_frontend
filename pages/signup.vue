<template>
  <v-container fluid>
    <v-card class="mx-auto pa-10 mt-12" max-width="800">
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="24"
          :v-text="step"
          >{{ step }}</v-avatar
        >
      </v-card-title>
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
              v-model="user.username"
              placeholder="User Name"
              outlined
              dense
            ></v-text-field>
            <v-text-field
              v-model="user.position"
              outlined
              dense
              placeholder="Position"
            ></v-text-field>
            <v-text-field
              v-model="user.phone"
              name="Phone"
              outlined
              dense
              placeholder="Phone"
            ></v-text-field>
            <span class="text-caption grey--text text--darken-1">
              This is the email you will use to login to your Vuetify account
            </span>
          </v-card-text>
        </v-window-item>
        <v-window-item :value="2">
          <v-card-text>
            <v-text-field
              v-model="user.password"
              placeholder="Password"
              outlined
              dense
              :type="showPass ? 'text' : 'password'"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="passwordRules"
              @click:append="showPass = !showPass"
            ></v-text-field>
            <v-text-field
              placeholder="Confirm Password"
              outlined
              dense
              :type="showPass ? 'text' : 'password'"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="confirmPasswordRules"
              @click:append="showPass = !showPass"
            ></v-text-field>
            <span class="text-caption grey--text text--darken-1">
              Please enter a password for your account
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <v-card elevation="0">
            <v-card-title>
              <v-avatar size="200" class="mx-auto">
                <v-img :src="user.image"></v-img>
              </v-avatar>
            </v-card-title>
            <v-card-text class="mx-auto">
              <v-btn color="primary" @click="getImage">Up Load Image</v-btn>
            </v-card-text>
            <v-card-title class="d-none">
              <v-file-input
                id="picture"
                v-model="user.profile"
                @change="onFileChange"
              ></v-file-input>
            </v-card-title>
          </v-card>
        </v-window-item>
      </v-window>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="step === 3"
          color="primary"
          depressed
          :class="step === 3 ? 'd-none' : ''"
          @click="step++"
        >
          Next
        </v-btn>
        <v-btn
          color="primary"
          :class="step === 3 ? '' : 'd-none'"
          @click="register"
          >Register</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'SignUpPage',
  layout: 'Blank',
  data: () => ({
    step: 1,
    showPass: false,
    comfirmPassword: '',
    user: {
      username: '',
      password: '',
      position: '',
      phone: '',
      profile: '',
      role: 'user',
    },
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Sign Up Information'
        case 2:
          return 'Create a password'
        default:
          return 'Choose Image'
      }
    },
    passwordRules() {
      return [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters',
      ]
    },
    confirmPasswordRules() {
      return [
        (value) => !!value || 'type confirm password',
        (value) =>
          value === this.user.password ||
          'The password confirmation does not match.',
      ]
    },
  },
  methods: {
    getImage() {
      document.getElementById('picture').click()
    },
    onFileChange(e) {
      if (e) {
        this.url = URL.createObjectURL(e)
        this.user.image = this.url
      }
    },
    register() {
      this.$store.dispatch('auth/SignUp', { ...this.user })
    },
  },
}
</script>
