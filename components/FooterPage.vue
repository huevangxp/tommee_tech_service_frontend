<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="primary">
        <strong class="subheading">Welcome to I CAN JOB</strong>
        <v-spacer></v-spacer>
        <v-btn class="mx-4" dark icon>
          <v-icon size="24px"> mdi-facebook </v-icon>
        </v-btn>
        <v-btn class="mx-4" dark icon>
          <v-icon size="24px"> mdi-twitter </v-icon>
        </v-btn>
        <v-btn class="mx-4" dark icon>
          <v-icon size="24px"> mdi-linkedin </v-icon>
        </v-btn>
        <v-btn class="mx-4" dark icon>
          <v-icon size="24px"> mdi-instagram </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 primary text-center">
        {{ new Date().getFullYear() }} — <strong>I Can Job</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name:'FooterPage'
}
</script>

