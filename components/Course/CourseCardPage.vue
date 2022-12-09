<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="data in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        :key="data"
        cols="12"
        md="3"
      >
        <v-card class="mx-auto" max-width="250" hover to="/course/_id">
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>ການຂາຍ</v-card-title>
          <v-card-text>
            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary    lighten-2" text> Reserve </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
