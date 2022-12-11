<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <video width="100%" controls>
          <source :src="`http://localhost:8080/` + video" type="video/mp4" />
          <source :src="`http://localhost:8080/` + video" type="video/ogg" />
        </video>
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="0">
          <v-card-text> </v-card-text>
          <v-card-title>{{ name }}</v-card-title>
          <v-card-text>
            Marketing is the activity, set of institutions, and processes for
            creating, communicating, delivering, and exchanging offerings that
            have value for customers, clients, partners, and society at large.
          </v-card-text>
          <v-card-text>
            Marketing is the activity, set of institutions, and processes for
            creating, communicating, delivering, and exchanging offerings that
            have value for customers, clients, partners, and society at large.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$route.query.name
    },
    video() {
      return this.$route.query.video
    },
  },
}
</script>
