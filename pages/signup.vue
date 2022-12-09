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
            <v-text-field placeholder="User Name" outlined dense></v-text-field>
            <v-text-field outlined dense placeholder="Position"></v-text-field>
            <v-text-field
              name="Phone"
              outlined
              dense
              placeholder="Phone"
            ></v-text-field>
            <v-text-field
              placeholder="Email"
              outlined
              dense
              hide-details="auto"
            ></v-text-field>
            <span class="text-caption grey--text text--darken-1">
              This is the email you will use to login to your Vuetify account
            </span>
          </v-card-text>
        </v-window-item>
        <v-window-item :value="2">
          <v-card-text>
            <v-text-field
              placeholder="Password"
              outlined
              dense
              type="password"
            ></v-text-field>
            <v-text-field
              placeholder="Confirm Password"
              type="password"
              outlined
              dense
            ></v-text-field>
            <span class="text-caption grey--text text--darken-1">
              Please enter a password for your account
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="https://cdn.vuetifyjs.com/images/logos/v.svg"
            ></v-img>
            <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
            <span class="text-caption grey--text">Thanks for signing up!</span>
          </div>
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
          @click="step++"
          :class="step === 3 ? 'd-none' : ''"
        >
          Next
        </v-btn>
        <v-btn :class="step === 3 ? '' : 'd-none'" to="/signin" color="primary">Register</v-btn>
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
  },
}
</script>
