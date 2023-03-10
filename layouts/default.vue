<template>
  <div>
    <v-app v-if="$vuetify.breakpoint.mobile" fixed app>
      <v-main class="mb-16">
        <Nuxt />
      </v-main>
      <v-navigation-drawer v-model="drawer" right temporary fixed app>
        <v-list-item active-class="deep-purple--text text--accent-4">
          <v-list-item-avatar>
            <v-img src="/logo.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Hue Vang</v-list-item-title>
          </v-list-item-content>
          <v-btn icon @click="drawer = false">
            <v-icon>mdi-window-close</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item router exact to="/profile">
          <v-list-item-action>
            <v-icon color="primary">mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router exact @click="logout">
          <v-list-item-action>
            <v-icon color="primary">mdi-power</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>

      <v-app-bar fixed app elevation="0" scroll-off-screen color="primary">
        <v-text-field
          placeholder="Seacrh"
          dense
          hide-details="0"
          height="40"
          class="white pl-4"
        >
          <template #append>
            <v-btn icon class="mb-8">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
        <v-spacer />
        <v-btn icon dark @click="drawer = !drawer">
          <v-icon> mdi-menu </v-icon>
        </v-btn>
      </v-app-bar>
      <v-footer padless fixed app elevation="0">
        <v-bottom-navigation>
          <v-btn color="primary" text icon to="/">
            <span>Home</span>
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn color="primary" text to="/course">
            <span>Practice</span>
            <v-icon>mdi-play-circle</v-icon>
          </v-btn>
          <v-btn color="primary" text to="/role">
            <span>Rule</span>
            <v-icon>mdi-compass-rose</v-icon>
          </v-btn>
          <v-btn color="primary" text to="/about">
            <span>About</span>
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-footer>
    </v-app>
    <div v-else>
      <v-app :dark="sun">
        <v-navigation-drawer
          v-model="drawer"
          :mini-variant="miniVariant"
          :clipped="clipped"
          fixed
          app
        >
        </v-navigation-drawer>
        <v-app-bar
          :clipped-left="clipped"
          fixed
          app
          color="primary"
          elevation="0"
        >
          <v-avatar>
            <v-img
              src="https://teachmint.storage.googleapis.com/profile_images/314390c4-a471-460b-807d-932c75f5f4d6.jpg"
            ></v-img>
          </v-avatar>
          <v-card-title class="white--text"> I CAN JOB</v-card-title>
          <v-spacer />
          <v-btn text dark to="/">Home</v-btn>
          <v-btn text dark to="/course">Course</v-btn>
          <v-btn text dark to="role">Rule</v-btn>
          <v-btn text dark to="about">About</v-btn>
          <v-spacer />
          <v-btn icon dark class="ml-2 mr-2" @click="setTheme">
            <v-icon>{{
              sun ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
            }}</v-icon>
          </v-btn>
          <v-btn text dark @click="logout">Logout</v-btn>
          <v-btn text dark icon to="/profile"
            ><v-icon dark>mdi-account</v-icon></v-btn
          >
        </v-app-bar>
        <v-main>
          <v-container fluid>
            <Nuxt />
          </v-container>
        </v-main>
        <FooterPage />
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware: 'auth',
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      sun: false,
      miniVariant: false,
      right: true,
    }
  },
  mounted() {
    if (this.$cookies.get('token')) {
      this.$router.push('/signin')
    }
  },
  methods: {
    setTheme() {
      this.sun = !this.sun
      this.$vuetify.theme.dark = this.sun
      this.$cookies.set('mode', this.sun)
      return this.sun
    },
    logout() {
      this.$cookies.remove('token')
      this.$router.push('/signin')
    },
  },
}
</script>
