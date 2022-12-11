<template>
  <v-container fluid>
    <v-carousel height="300" cycle hide-delimiters show-arrows-on-hover>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: '/iamge2.png',
        },
        {
          src: '/im4.png',
        },
        {
          src: 'image.png',
        },
        {
          src: 'image1.png',
        },
      ],
    }
  },
}
</script>
