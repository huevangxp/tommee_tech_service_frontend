<template>
  <div>
    <v-app v-if="$vuetify.breakpoint.mobile" fixed app>
      <!-- <v-app-bar scroll-off-screen scroll-threshold> -->
      <v-main class="mb-16">
        <Nuxt />
      </v-main>
      <!-- <v-navigation-drawer right temporary v-model="drawer" fixed app>
      <v-list-item active-class="deep-purple--text text--accent-4">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
        <v-btn icon @click="drawer = false">
          <v-icon>mdi-window-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon color="primary">{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer> -->

      <v-app-bar fixed app elevation="0" scroll-off-screen color="primary">
        <v-text-field
          placeholder="Seacrh"
          dense
          hide-details="0"
          height="40"
          class="white pl-4"
        >
          <template v-slot:append>
            <v-btn icon class="mb-8">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
        <v-spacer />
        <v-btn @click="drawer = !drawer" icon dark>
          <v-icon> mdi-menu </v-icon>
        </v-btn>
      </v-app-bar>

      <v-footer padless fixed app elevation="0">
        <v-bottom-navigation>
          <v-btn color="primary" text icon>
            <span>Home</span>

            <v-icon>mdi-home</v-icon>
          </v-btn>

          <v-btn color="primary" text>
            <span>Favorites</span>

            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <div>
            <v-icon color="primary" dark size="50" class="mb-16"
              >mdi-plus-circle</v-icon
            >
          </div>
          <v-btn color="primary" text>
            <span>Cart</span>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
          <v-btn color="primary" text>
            <span>History</span>
            <v-icon>mdi-history</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-footer>
      <!-- </v-app-bar> -->
    </v-app>
    <v-app dark v-else>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="clipped" fixed app color="info" elevation="0">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark />
        <v-spacer />
        <v-card-title class="white--text"> I CAN JOB</v-card-title>
        <v-spacer />
        <v-text-field
          outlined
          dense
          hide-details="auto"
          class="white mr-3"
          placeholder="Search"
        >
          <template #append>
            <v-btn icon small>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>
        <v-avatar>
          <v-img
            src="https://teachmint.storage.googleapis.com/profile_images/314390c4-a471-460b-807d-932c75f5f4d6.jpg"
          ></v-img>
        </v-avatar>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <Nuxt />
        </v-container>
      </v-main>
      <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
        <v-list>
          <v-list-item @click.native="right = !right">
            <v-list-item-action>
              <v-icon light> mdi-repeat </v-icon>
            </v-list-item-action>
            <v-list-item-title>Switch drawer (click me)</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <FooterPage />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/',
        },

        {
          icon: 'mdi-file-document',
          title: 'Course',
          to: '/course',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/about',
        },
        {
          icon: 'mdi-power',
          title: 'Login',
          to:'/signin'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
