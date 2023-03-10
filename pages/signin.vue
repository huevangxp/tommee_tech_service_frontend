<template>
  <v-container fluid>
    ==={{ $config.apiUrl }}===
    <v-row>
      <v-col cols="12" md="6" class="mt-10">
        <v-card elevation="0" max-width="400" class="mx-auto">
          <v-card-title class="mb-10 d-md-flex justify-md-center primary--text">
            Welcome I Can Job
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="user.username"
              dense
              outlined
              hide-details="auto"
              type="text"
              placeholder="User Name"
              append-icon="mdi-account"
            >
            </v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              v-model="user.password"
              dense
              outlined
              hide-details="auto"
              :type="showPass ? 'text' : 'password'"
              placeholder="Password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPass = !showPass"
            >
            </v-text-field>
          </v-card-text>
          <v-card-text>
            Create a new account?
            <v-btn text color="red" to="/signup">Click Here</v-btn>
          </v-card-text>
          <v-card-text class="d-md-flex justify-md-end">
            <v-btn class="primary" @click="signIn">Sign In</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="hidden-md-and-down">
        <v-img width="550" height="550" src="/images/smart.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignInPage',
  layout: 'Blank',
  middleware: 'unAuth',
  data() {
    return {
      showPass: false,
      user: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    signIn() {
      alert(JSON.stringify(this.user))
      this.$store.dispatch('auth/SignIn', { ...this.user })
    },
  },
}
</script>
