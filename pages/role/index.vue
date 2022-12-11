<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="data in rule" :key="data.index" cols="12">
        <v-card elevation="0">
          <v-card-title>{{ data.title }}</v-card-title>
          <v-card-text>{{ data.description }}</v-card-text>
        </v-card>
        <v-divider/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RulePage',
  computed: {
    rule() {
      return this.$store.state.rule.rule
    },
  },
  mounted() {
    this.$store.dispatch('rule/getRule')
    return this.$store.state.rule.rule
  },
}
</script>
