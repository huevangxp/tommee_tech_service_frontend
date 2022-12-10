<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" class="mt-10">
        <v-card elevation="0" max-width="400" class="mx-auto">
          <v-card-title class="d-md-flex justify-md-center">
            Please SignIn
          </v-card-title>
          <v-card-text>
            <v-text-field
              dense
              outlined
              hide-details="auto"
              type="text"
              placeholder="User Name"
              append-icon="mdi-account">
            </v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              dense
              outlined
              hide-details="auto"
              :type="showPass ? 'text' : 'password'"
              placeholder="Password"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPass = !showPass">
            </v-text-field>
          </v-card-text>
          <v-card-text>
            Create a new account? <v-btn text color="red" to="/signup">Click Here</v-btn>
          </v-card-text>
          <v-card-text class="d-md-flex justify-md-end "> 
            <v-btn class="primary" to="/">Sign In</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6"> 
        <v-img src="https://www.socialmediamagazine.org/wp-content/uploads/2022/08/Digital-Advertising.webp"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignInPage',
  layout: 'Blank',
  data() {
    return {
      showPass: false,
    }
  },
}
</script>
