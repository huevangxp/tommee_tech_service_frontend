<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="data in video" :key="data" cols="12" md="3">
        <v-card
          class="mx-auto"
          max-width="300"
          hover
          @click="OneCourse(data.video, data.title)"
        >
         
            <video width="100%" controls>
              <source
                :src="`http://localhost:8080/${data.video}`"
                type="video/mp4"
              />
              <source
                :src="`http://localhost:8080/${data.video}`"
                type="video/ogg"
              />
            </video>
       
          <v-card-actions>
            <v-btn color="primary lighten-2" text> Learn </v-btn>
            <v-spacer/>
            <v-card-title>{{
            !data.title ? 'not title' : data.title
          }}</v-card-title>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    video() {
      return this.$store.state.rule.video
    },
  },
  mounted() {
    this.$store.dispatch('rule/getVideo')
  },
  methods: {
    OneCourse(video, title) {
      this.$router.push(`/course/video?name=${title}&video=${video}`)
    },
  },
}
</script>
